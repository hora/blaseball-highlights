import asyncpg
import uuid, secrets, json
from quart import Quart
from werkzeug.security import generate_password_hash, check_password_hash

class HighlightDB:
    def __init__(self, app: Quart, uri: str) -> None:
        self.init_app(app)
        self._pool = None
        self.uri = uri

    def init_app(self, app: Quart) -> None:
        app.before_serving(self._before_serving)
        app.after_serving(self._after_serving)

    async def _before_serving(self) -> None:
        self._pool = await asyncpg.create_pool(self.uri)

    async def _after_serving(self) -> None:
        await self._pool.close()

    async def create_story(self, story, events, user):
        user_existed = "user_id" in user

        if "story_id" in story:
            return await self.edit_story(story, events, user)

        async with self._pool.acquire() as conn:
            while True:
                story_id = secrets.token_urlsafe(12)
                row = await conn.fetchrow(
                    "SELECT * FROM stories WHERE story_id = $1", story_id
                )
                if not row:
                    story["story_id"] = story_id
                    break

            if user_existed:
                if not (await self.check_user_token(user, conn)):
                    return {"status": 403, "reason": "invalid user token/id"}

                await self.edit_user(user)
            else:
                user = await self.create_user(conn,username=user["username"])

            await conn.execute(
                """
                INSERT INTO stories (story_id, game_id, user_id, title)
                VALUES ($1,$2,$3,$4)
            """,
                story["story_id"],
                uuid.UUID(story["game_id"]),
                user["user_id"],
                story["title"],
            )

            processed_events = []
            for event in events:
                processed_events.append(
                    [
                        story["story_id"],
                        uuid.UUID(event["blaseball_event_id"]),
                        event["description"],
                        json.dumps(event["visual"]),
                    ]
                )

            await conn.executemany(
                """
                INSERT INTO events (story_id, blaseball_event_id, description, visual)
                VALUES ($1,$2,$3,$4)
            """,
                processed_events,
            )

        if not user_existed:
            return {
                "status": 200,
                "user_token": user["user_token"],
                "user_id": user["user_id"],
                "story_id": story["story_id"],
            }
        else:
            return {"status": 200, "story_id": story["story_id"]}

    async def edit_story(self, story, events, user):
        async with self._pool.acquire() as conn:
            row = await conn.fetchrow(
                "SELECT * FROM stories WHERE story_id = $1", story["story_id"]
            )
            if not row:
                return {"status": 404, "reason": "story id not found"}

            if row["user_id"] != user["user_id"] or not (
                await self.check_user_token(user, conn)
            ):
                return {"status": 401, "reason": "invalid user token/id"}

            await self.edit_user(user)

            await conn.execute(
                """
                UPDATE stories
                SET title = $1
                WHERE story_id= $2
            """,
                story["title"],
                story["story_id"]
            )

            processed_events = []
            for event in events:
                processed_events.append(
                    [
                        story["story_id"],
                        uuid.UUID(event["blaseball_event_id"]),
                        event["description"],
                        json.dumps(event["visual"]),
                    ]
                )

            await conn.executemany(
                """
                INSERT INTO events (story_id, blaseball_event_id, description, visual)
                VALUES ($1,$2,$3,$4)
                ON CONFLICT (story_id,blaseball_event_id) DO UPDATE
                SET description = $3,
                    visual = $4
            """,
                processed_events,
            )

            return {"status": 200}

    async def get_story_and_events(self, id):
        async with self._pool.acquire() as conn:
            row = await conn.fetchrow("SELECT * FROM stories WHERE story_id = $1", id)
            if not row:
                return {"status": 404, "reason": "story id not found"}

            res = {
                "story": {
                    "story_id": row["story_id"],
                    "game_id": row["game_id"],
                    "user_id": row["user_id"],
                    "title": row["title"],
                    "username": "",
                },
                "events": [],
            }

            for event in await conn.fetch(
                "SELECT * FROM events WHERE story_id = $1", id
            ):
                res["events"].append(
                    {
                        "blaseball_event_id": event["blaseball_event_id"],
                        "description": event["description"],
                        "visual": json.loads(event["visual"]),
                    }
                )

            for user in await conn.fetch(
                "SELECT * FROM users WHERE user_id = $1", row["user_id"]
            ):
                res["story"]["username"] = user["username"]

            res["status"] = 200
            return res

    async def get_story(self,id):
        async with self._pool.acquire() as conn:
            row = await conn.fetchrow("SELECT * FROM stories WHERE story_id = $1", id)
            if not row:
                return {"status": 404, "reason": "story id not found"}

            res = {
                "story": {
                    "story_id": row["story_id"],
                    "game_id": row["game_id"],
                    "user_id": row["user_id"],
                    "title": row["title"],
                },
                "events": [],
            }

            res["status"] = 200
            return res

    async def create_user(self, conn, username = ""):
        user_token = secrets.token_urlsafe(64)
        user_id = ""
        while True:
            user_id = secrets.token_urlsafe(12)
            row = await conn.fetchrow("SELECT * FROM users WHERE user_id = $1", user_id)
            if not row:
                break

        await conn.execute(
            """
            INSERT INTO users (username, user_id, user_token)
            VALUES ($1, $2, $3)
        """,
            username,
            user_id,
            generate_password_hash(user_token)
        )

        return {"user_id": user_id, "user_token": user_token}

    async def edit_user(self, user):
        async with self._pool.acquire() as conn:
            row = await conn.fetchrow(
                "SELECT * FROM users WHERE user_id = $1", user["user_id"]
            )
            if not row:
                return {"status": 404, "reason": "user not found"}

            if not (
                await self.check_user_token(user, conn)
            ):
                return {"status": 401, "reason": "invalid user token/id"}

            await conn.execute(
                """
                UPDATE users
                SET username = $1
                WHERE user_id= $2
            """,
                user["username"],
                user["user_id"]
            )

    async def check_user_token(self, user, conn):
        row = await conn.fetchrow(
            "SELECT * FROM users WHERE user_id = $1",
            user["user_id"],
        )

        return check_password_hash(row["user_token"],user["user_token"])
