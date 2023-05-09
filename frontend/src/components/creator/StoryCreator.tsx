import React from 'react';

import { Game, GameEvent, GameEventsUpdateProps } from 'lib/models';

import StoryDataLoader from 'components/creator/StoryDataLoader';
import StoryDataPicker from 'components/creator/StoryDataPicker';

interface StoryCreatorProps {
  game: Game;
  gameEvents: GameEvent[];
  setGame: (game: Game) => void;
  updateGameEvents: (action: GameEventsUpdateProps) => void;
}

function StoryCreator({ game, setGame, gameEvents, updateGameEvents } : StoryCreatorProps) {
  return (
    <div className="StoryCreator">
      <StoryDataLoader setGame={setGame} updateGameEvents={updateGameEvents} />
      <StoryDataPicker game={game} gameEvents={gameEvents} updateGameEvents={updateGameEvents} />
    </div>
  );
}

export default StoryCreator;
