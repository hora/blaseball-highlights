import { useState } from 'react';

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

  const canGoSlide = (direction: string) => {
    return (direction === 'prev') ? currentSlide > 0 : currentSlide < slides.length - 1;
  };

  const getCurrentSlide = () : Slide => {
    return slides[currentSlide];
  };

  const changeSlide = (direction: string) => {
    if (!canGoSlide(direction)) return;

    setCurrentSlide(currentSlide => direction === 'prev' ? currentSlide - 1 : currentSlide + 1);
  };

  return (
    <div className="StoryPlayer">
      {previewMode && <Button classes='mb-3' btnType='button' text='Exit Preview' onClick={() => previewStory(false)}/>}

      <StoryPlayerVisual
        story={story}
        currentSlide={getCurrentSlide()}
        game={game}
      />
      <StoryPlayerDialog
        currentSlide={getCurrentSlide()}
        changeSlide={changeSlide}
        canGoSlide={canGoSlide}
        previewStory={previewStory}
      />
    </div>
  );
}

export default StoryPlayer;

