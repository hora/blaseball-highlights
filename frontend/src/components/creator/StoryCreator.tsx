import React from 'react';

import { Game, GameEvent, GameEventsUpdateProps } from 'lib/models';

import StoryDataLoader from 'components/creator/StoryDataLoader';
import StoryDataPicker from 'components/creator/StoryDataPicker';

interface StoryCreatorProps {
  game: Game;
  gameEvents: GameEvent[];
  setGame: (game: Game) => void;
  updateGameEvents: (action: GameEventsUpdateProps) => void;
  canSaveStory: boolean;
  canPreviewStory: boolean;
}

function StoryCreator({ game, setGame, gameEvents, updateGameEvents, canSaveStory, canPreviewStory } : StoryCreatorProps) {
  return (
    <div className="StoryCreator">
      <StoryDataLoader setGame={setGame} updateGameEvents={updateGameEvents} />
      <StoryDataPicker
        game={game}
        gameEvents={gameEvents}
        updateGameEvents={updateGameEvents}
        canSaveStory={canSaveStory}
        canPreviewStory={canPreviewStory}
      />
    </div>
  );
}

export default StoryCreator;
