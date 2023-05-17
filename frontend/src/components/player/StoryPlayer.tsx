import React, { useState } from 'react';

import { Story, Slide, Game } from 'lib/models';

import StoryPlayerVisual from 'components/player/StoryPlayerVisual';
import StoryPlayerDialog from 'components/player/StoryPlayerDialog';
import Button from 'components/elements/Button';

interface StoryPlayerProps {
  previewMode: boolean;
  previewStory: (toggle: boolean) => void;
  story: Story;
  slides: Slide[];
  game: Game;
}

function StoryPlayer({ previewMode, previewStory, story, slides, game } : StoryPlayerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getCurrentSlide = () : Slide => {
    return slides[currentSlide];
  };

  return (
    <div className="StoryPlayer">
      {previewMode && <Button btnType='button' text='Exit Preview' onClick={() => previewStory(false)}/>}

      <StoryPlayerVisual
        story={story}
        currentSlide={getCurrentSlide()}
        game={game}
      />
      <StoryPlayerDialog />
    </div>
  );
}

export default StoryPlayer;

