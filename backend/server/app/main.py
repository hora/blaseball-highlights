from db import *
from PIL import Image
from quart import Quart, Response, request, render_template
import os
import aiohttp
import io
import base64
import cairosvg

app = Quart(__name__)
db = HighlightDB(app, os.environ["DATABASE_URL"])

teams = {
    "105bc3ff-1320-4e37-8ef0-8d595cb95dd0": {
        "homeLogoCredit": "zandterbird",
        "homeLogoURL": "./app/images/logo-garges.png",
    },
    "23e4cbc1-e9cd-47fa-a35b-bfa06f726cb7": {
        "homeLogoCredit": "Ladyknighttime#8806 on Discord",
        "homeLogoURL": "./app/images/logo-pies.png",
    },
    "36569151-a2fb-43c1-9df7-2df512424c82": {
        "homeLogoCredit": "@OrigamiAndroid",
        "homeLogoURL": "./app/images/logo-millennials.png",
    },
    "3f8bbb15-61c0-4e3f-8e4a-907a5fb1565e": {
        "homeLogoCredit": "nim on Discord",
        "homeLogoURL": "./app/images/logo-flowers.png",
    },
    "46358869-dce9-4a01-bfba-ac24fc56f57e": {
        "awayLogoCredit": "ZweiHawke",
        "awayLogoURL": "./app/images/logo-mechanics-away.png",
        "homeLogoCredit": "ZweiHawke",
        "homeLogoURL": "./app/images/logo-mechanics.png",
    },
    "57ec08cc-0411-4643-b304-0e80dbc15ac7": {
        "homeLogoCredit": "thr33h3ad3ddrag",
        "homeLogoURL": "./app/images/logo-wings.png",
    },
    "747b8e4a-7e50-4638-a973-ea7950a3e739": {
        "homeLogoCredit": "jrfbz",
        "homeLogoURL": "./app/images/logo-tigers.png",
    },
    "7966eb04-efcc-499b-8f03-d13916330531": {
        "homeLogoCredit": "Lucky Penny on " "Discord",
        "homeLogoURL": "./app/images/logo-magic.png",
    },
    "878c1bf6-0d21-4659-bfee-916c8314d69c": {
        "homeLogoCredit": "4damAvenue",
        "homeLogoURL": "./app/images/logo-tacos.png",
    },
    "8d87c468-699a-47a8-b40d-cfb73a5660ad": {
        "homeLogoCredit": "4adamAvenue",
        "homeLogoURL": "./app/images/logo-crabs.png",
    },
    "979aee4a-6d80-4863-bf1c-ee1a78e06024": {
        "homeLogoCredit": "",
        "homeLogoURL": "./app/images/logo-fridays.png",
    },
    "9debc64f-74b7-4ae1-a4d6-fce0144b6ea5": {
        "homeLogoCredit": "Dalmationer",
        "homeLogoURL": "./app/images/logo-spies.png",
    },
    "a37f9158-7f82-46bc-908c-c9e2dda7c33b": {
        "homeLogoCredit": "Skootles on Discord",
        "homeLogoURL": "./app/images/logo-hands.png",
    },
    "adc5b394-8f76-416d-9ce9-813706877b84": {
        "homeLogoCredit": "nash_high",
        "homeLogoURL": "./app/images/logo-mints.png",
    },
    "b024e975-1c4a-4575-8936-a3754a08806a": {
        "homeLogoCredit": "4damAvenue",
        "homeLogoURL": "./app/images/logo-steaks.png",
    },
    "b63be8c2-576a-4d6e-8daf-814f8bcea96f": {
        "homeLogoCredit": "4damAvenue",
        "homeLogoURL": "./app/images/logo-dale.png",
    },
    "b72f3061-f573-40d7-832a-5ad475bd7909": {
        "homeLogoCredit": "Lucacrafts",
        "homeLogoURL": "./app/images/logo-lovers.png",
    },
    "bb4a9de5-c924-4923-a0cb-9d1445f1ee5d": {
        "homeLogoCredit": "dan.digital",
        "homeLogoURL": "./app/images/logo-worms.png",
    },
    "bfd38797-8404-4b38-8b82-341da28b1f83": {
        "homeLogoCredit": "chdhrrmnn",
        "homeLogoURL": "./app/images/logo-thieves.png",
    },
    "c73b705c-40ad-4633-a6ed-d357ee2e2bcf": {
        "homeLogoCredit": "jrfbz",
        "homeLogoURL": "./app/images/logo-lift.png",
    },
    "ca3f1c8c-c025-4d8e-8eef-5be6accbeb16": {
        "homeLogoCredit": "Wirspringen on Discord",
        "homeLogoURL": "./app/images/logo-firefighters.png",
    },
    "d9f89a8a-c563-493e-9d64-78e4f9a55d4a": {
        "homeLogoCredit": "blyptonomica",
        "homeLogoURL": "./app/images/logo-georgias.png",
    },
    "eb67ae5e-c4bf-46ca-bbbc-425cd34182ff": {
        "homeLogoCredit": "Q Peiffer @longhairQ",
        "homeLogoURL": "./app/images/logo-talkers.png",
    },
    "f02aeae2-5e6a-4098-9842-02d2273f25c7": {
        "homeLogoCredit": "Coblin",
        "homeLogoURL": "./app/images/logo-sunbeams.png",
    },
}


@app.route("/submit", methods=["POST"])
async def submit():
    data = await request.get_json()
    r = await db.create_story(
        data["story"], data["events"], data["user"]
    )
    return r, r["status"]


@app.route("/story", methods=["GET"])
async def get():
    id = request.args.get("id", None)
    if not id:
        return {"status": 400, "reason": "missing story id"}, 400

    r = await db.get_story_and_events(id)
    return r, r["status"]

@app.route("/<id>")
async def share(id):
    story = (await db.get_story(id))["story"]
    async with aiohttp.ClientSession() as session:
        async with session.get(
            f'https://www.blaseball.com/database/gameById/{story["game_id"]}'
        ) as res:
            game = await res.json()
            return await render_template('meta.html.j2',game=game,story=story)

@app.route("/image/<id>")
async def generate_image(id):
    story = (await db.get_story(id))["story"]
    async with aiohttp.ClientSession() as session:
        async with session.get(
            f'https://www.blaseball.com/database/gameById/{story["game_id"]}'
        ) as res:
            game = await res.json()
            hometeam = {}
            awayteam = {}

            hometeam_image_io = io.BytesIO()
            Image.open(teams[game["homeTeam"]]["homeLogoURL"]).save(
                hometeam_image_io, format="PNG"
            )
            hometeam[
                "image"
            ] = f"data:image/png;base64,{base64.b64encode(hometeam_image_io.getvalue()).decode()}"
            hometeam["artist"] = teams[game["homeTeam"]]["homeLogoCredit"]

            awayteam_image_io = io.BytesIO()
            Image.open(
                teams[game["awayTeam"]].get(
                    "awayLogoURL", teams[game["awayTeam"]]["homeLogoURL"]
                )
            ).save(awayteam_image_io, format="PNG")

            awayteam[
                "image"
            ] = f"data:image/png;base64,{base64.b64encode(awayteam_image_io.getvalue()).decode()}"

            awayteam["artist"] = teams[game["awayTeam"]].get(
                "homeLogoCredit", teams[game["awayTeam"]]["homeLogoCredit"]
            )

            svg = await render_template(
                "card-plain.svg.j2",
                hometeam=hometeam,
                awayteam=awayteam,
                story=story,
                game=game,
            )

            return (
                cairosvg.svg2png(
                    bytestring=svg.encode("utf8"), parent_width=2048, parent_height=1024
                ),
                200,
                {"Content-Type": "image/png"},
            )


if __name__ == "__main__":
    app.run(debug=True)
