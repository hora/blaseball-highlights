import React from 'react';

import { Game, Slide, SlidesUpdateProps } from 'lib/models';

import StoryDataLoader from 'components/creator/StoryDataLoader';
import StoryDataPicker from 'components/creator/StoryDataPicker';

interface StoryCreatorProps {
  game: Game;
  slides: Slide[];
  setGame: (game: Game) => void;
  updateSlides: (action: SlidesUpdateProps) => void;
  canSaveStory: boolean;
  canPreviewStory: boolean;
  previewStory: () => void;
}

function StoryCreator({ game, setGame, slides, updateSlides, canSaveStory, canPreviewStory, previewStory } : StoryCreatorProps) {
  return (
    <div className="StoryCreator">
      <StoryDataLoader setGame={setGame} updateSlides={updateSlides} />
      <StoryDataPicker
        game={game}
        slides={slides}
        updateSlides={updateSlides}
        canSaveStory={canSaveStory}
        canPreviewStory={canPreviewStory}
        previewStory={previewStory}
      />
    </div>
  );
}

export default StoryCreator;
