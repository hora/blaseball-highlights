import React, { useState, FormEvent, ChangeEvent } from 'react';
import { QueryClient } from 'react-query';

import { Game, SlidesUpdateProps } from 'lib/models';
import { makeGame } from 'lib/game';
import { makeSlides } from 'lib/slide';

import Button from 'components/elements/Button';
import Input from 'components/elements/Input';

const queryClient = new QueryClient();
const CHRONICLER_BASE_URL = 'https://api2.sibr.dev/chronicler/v0';

interface StoryDataLoaderProps {
  setGame: (game: Game) => void;
  updateSlides: (action: SlidesUpdateProps) => void;
}

const getRandomGame = () : string => {
  const games = [
    // final internet series game in the coronation era, by season
    'https://reblase.sibr.dev/experimental/game/2376b471-2aba-49fb-957d-18a6897ebb74',
    'https://reblase.sibr.dev/experimental/game/47096007-48f8-428f-bb38-3ef1f7af71e7',
  ];

  return games[Math.floor(Math.random() * (games.length))];
}

const reblasePlaceholder = getRandomGame();

function StoryDataLoader({ setGame, updateSlides } : StoryDataLoaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [gameID, setGameID] = useState('');

  const loadGameEvents = async (evt: FormEvent) => {
    evt.preventDefault();

    setIsLoading(true);

    const gameData = await queryClient.fetchQuery('game', fetchGame);
    const gameEventsData = await queryClient.fetchQuery('gameEvents', fetchGameEvents);

    setIsLoading(false);

    const game = makeGame(gameData?.items[0]);
    setGame(game);
    const slides = makeSlides(gameEventsData);
    updateSlides({type: 'set', slides});
  };

  const updateInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setGameID(evt.target.value);
  };

  const getGameID = () : string => {
    let input = gameID || reblasePlaceholder;

    return input.split('/').pop() || '';
  }

  const fetchGame = async () => {
    const gameURL = `${CHRONICLER_BASE_URL}/entities?kind=game&count=1&id=${getGameID()}`;

    const response = await fetch(gameURL);

    if (!response.ok) {
      throw new Error("Problem fetching data");
    }

    const gameData = await response.json();

    return gameData;
  };

  const fetchGameEvents = async () => {
    const gameEventsURL = `${CHRONICLER_BASE_URL}/game-events?game_id=${getGameID()}`;
    let paginatedGameEvents: unknown[] = [];

    const getPaginatedEvents = async (nextPage: string) => {
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
  };

  return (
    <div className="StoryDataLoader">
      <h2 className="text-3xl text-center my-6">1. Load a game</h2>

      <form className="GameLoadForm" onSubmit={loadGameEvents}>

        <label htmlFor="game-id" className="">
          Enter a game ID or the game's <a className="underline" href="https://reblase.sibr.dev/" target="_blank" rel="noopener noreferrer">Reblase</a> link
          <Input id="game-id" name="game-id" type="text" value={gameID} placeholder={reblasePlaceholder} classes="w-full" onChange={updateInput} />
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

