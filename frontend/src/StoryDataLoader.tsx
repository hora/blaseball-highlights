import React, { useState, useReducer, FormEvent, ChangeEvent } from 'react';
import { useQuery } from 'react-query';

type GameEvent = {
  id: string;
};

const formReducer = (state: any, evt: any) => {
  return {
    ...state,
    [evt.name]: evt.value
  }
}

function StoryDataLoader() {
  const [formData, dispatchFormData] = useReducer(formReducer, {});

  function getRandomGame(): string {
    const games = [
      // internet series championship games, starting season 2
      'https://reblase.sibr.dev/game/97d88b9e-406d-4f31-a18f-2a3b903edc03',
      'https://reblase.sibr.dev/game/b38e0917-43da-470c-a7bb-5712368a2492',
      'https://reblase.sibr.dev/game/628a2ddb-f608-411b-8d2e-2768cd36d58b',
      'https://reblase.sibr.dev/game/52f6274e-e0dc-4c23-87e8-686f6d2b2bbf',
      'https://reblase.sibr.dev/game/10538840-1f72-4a90-98e5-724a9dc5d061',
      'https://reblase.sibr.dev/game/9d85897e-e689-4eeb-b2ae-b69679a3ebc7',
      'https://reblase.sibr.dev/game/ee35a868-b004-449f-a99c-6a40ca54b382',
      'https://reblase.sibr.dev/game/06566f8d-3d14-4956-b054-36dc981fd589',
      'https://reblase.sibr.dev/game/704ddf2f-3fe2-48b3-b674-b94765f70d01',
      'https://reblase.sibr.dev/game/47bcac42-f651-4fc9-9f93-5567a7b10daf',
      'https://reblase.sibr.dev/game/0f19d78d-c27d-4146-863d-b55e6dae1679',
      'https://reblase.sibr.dev/game/1506b88f-1fea-4ba1-9256-1ebb030cdcae',
      'https://reblase.sibr.dev/game/b2cafd20-a799-48f6-abd7-c99bd79a6bd1',
      'https://reblase.sibr.dev/game/2bc6e86e-8d25-4e37-9026-780d8b6969c5',
      'https://reblase.sibr.dev/game/462481f4-7f97-441c-9fc9-c3dc3c5844a4',
      'https://reblase.sibr.dev/game/11a8a7d3-460b-4c99-a98a-b0bd1f577073',
      'https://reblase.sibr.dev/game/823dfcb6-dddb-43f4-90ff-eac05827a82e',
      'https://reblase.sibr.dev/game/f7ad7826-ca6e-49c2-818e-190408b046fe',
      // up to 19

      // other games
      // s3d100 (riv landry)
      'https://reblase.sibr.dev/game/aa1b7fde-f077-4e4b-825f-0d1538d02822',
    ];

    return games[Math.floor(Math.random() * (games.length - 1))];
  }

  const loadGameEvents = (evt: FormEvent) => {
    evt.preventDefault();

    console.log(formData["game-id"]);
    refetch();
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatchFormData({
      name: evt.target.name,
      value: evt.target.value
    });
  }

  async function fetchGameUpdates() {
    let gamesURL = `https://api.sibr.dev/chronicler/v1/games/updates?game=${formData["game-id"]}`;

    const response = await fetch(gamesURL);

    if (!response.ok) {
      throw new Error("Problem fetching data");
    }

    const gameEvent = await response.json();

    return gameEvent;
  }

  const {
    isIdle,
    isLoading,
    isError,
    data,
    error,
    refetch,
    isFetching,
  } = useQuery('gameUpdates', fetchGameUpdates, {
    enabled: false
  });

  return (
    <div className="StoryDataLoader">
      <h2>Load a game</h2>

      <form className="GameLoadForm" onSubmit={loadGameEvents}>

        <label htmlFor="game-id">
          Enter a game ID or the game's <a href="https://reblase.sibr.dev/">Reblase</a> link
          <input id="game-id" name="game-id" type="text" placeholder={getRandomGame()} onChange={handleChange}></input>
        </label>

        <button type="submit">Load Game Events</button>

        <div className="loading" role="status">
           <ul>
             {Object.entries(formData).map(([name, value]) => (
                 <li key={name}><><strong>{name}:</strong>{value}</></li>
             ))}
           </ul>
        </div>

      </form>

      {isIdle? (
        'Not ready...'
      ) : isLoading? (
        <span className="">Loading...</span>
      ) : isError? (
        <p className="error-msg d-none">Oops! Something went wrong. Check the game ID/URL and try again.</p>
      ) : (
        <p>{data.data[0].data.awayPitcherName}</p>
      )}

    </div>
  );
}

export default StoryDataLoader;

