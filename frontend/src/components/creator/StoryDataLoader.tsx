import React, { useState, useReducer, FormEvent, ChangeEvent } from 'react';
import { QueryClient } from 'react-query';

import { Game } from 'lib/game';

import StoryDataPicker from 'components/creator/StoryDataPicker';
import Button from 'components/elements/Button';

const queryClient = new QueryClient();
const CHRONICLER_BASE_URL = 'https://api2.sibr.dev/chronicler/v0';

interface StoryDataLoaderProps {
  setGame: (game: Game) => void;
}

const formReducer = (state: any, evt: any) => {
  return {
    ...state,
    [evt.name]: evt.value
  }
}

function StoryDataLoader({ setGame } : StoryDataLoaderProps) {
  const [reblasePlaceholder, setReblasePlaceholder] = useState(getRandomGame());
  const [isLoading, setIsLoading] = useState(false);
  const [formData, dispatchFormData] = useReducer(formReducer, {});

  function getRandomGame(): string {
    const games = [
      // final internet series game in the coronation era, by season
      'https://reblase.sibr.dev/experimental/game/2376b471-2aba-49fb-957d-18a6897ebb74',
      'https://reblase.sibr.dev/experimental/game/47096007-48f8-428f-bb38-3ef1f7af71e7',
    ];

    return games[Math.floor(Math.random() * (games.length))];
  }

  async function loadGameEvents(evt: FormEvent) {
    evt.preventDefault();

    setIsLoading(true);

    const gameData = await queryClient.fetchQuery('game', fetchGame);
    const gameEventsData = await queryClient.fetchQuery('gameEvents', fetchGameEvents);

    setIsLoading(false);

    const game = new Game(gameData?.items[0]);
    game.buildGameEvents(gameEventsData);

    setGame(game);
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    dispatchFormData({
      name: evt.target.name,
      value: evt.target.value
    });
  }

  function getGameID() : string {
    let input = formData["game-id"];

    input = input || reblasePlaceholder;

    return input.split('/').pop();
  }

  async function fetchGame() {
    const gameURL = `${CHRONICLER_BASE_URL}/entities?kind=game&count=1&id=${getGameID()}`;

    const response = await fetch(gameURL);

    if (!response.ok) {
      throw new Error("Problem fetching data");
    }

    const gameData = await response.json();

    return gameData;
  }

  async function fetchGameEvents() {
    const gameEventsURL = `${CHRONICLER_BASE_URL}/game-events?game_id=${getGameID()}`;
    let paginatedGameEvents: unknown[] = [];

    async function getPaginatedEvents(nextPage: string) {
      let fetchURL = gameEventsURL;

      if (nextPage) {
        fetchURL += `&page=${nextPage}`;
      }

      const response = await fetch(fetchURL);

      if (!response.ok) {
        throw new Error("Problem fetching data");
      }

      const gameEvents = await response.json();

      for (let gameEv of gameEvents.items) {
        paginatedGameEvents.push(gameEv);
      }

      if (gameEvents.next_page) {
        await getPaginatedEvents(gameEvents.next_page);
      } else {
        return;
      }
    };

    await getPaginatedEvents('');

    return paginatedGameEvents;
  }

  return (
    <div className="StoryDataLoader">
      <h2 className="text-3xl text-center my-6">1. Load a game</h2>

      <form className="GameLoadForm" onSubmit={loadGameEvents}>

        <label htmlFor="game-id" className="">
          Enter a game ID or the game's <a className="underline" href="https://reblase.sibr.dev/">Reblase</a> link
          <input className="rounded-sm border-none p-2.5 block mt-2.5 mb-4 w-full" id="game-id" name="game-id" type="text" placeholder={reblasePlaceholder} onChange={handleChange}></input>
        </label>

        {!isLoading &&
          <Button text="Load Game Events" btnType="submit" disabled={isLoading} />
        }

      </form>
      {isLoading &&
        <p>Loading...</p>
      }
    </div>
  );
}

export default StoryDataLoader;

