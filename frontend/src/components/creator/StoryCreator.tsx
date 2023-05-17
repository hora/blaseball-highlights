import { useState, useReducer, useEffect } from 'react';

import { StoryProps, Game, Slide, SlidesUpdateProps } from 'lib/models';
import { makeStory } from 'lib/story';


import StoryDataLoader from 'components/creator/StoryDataLoader';
import StoryDataPicker from 'components/creator/StoryDataPicker';
import StoryPlayer from 'components/player/StoryPlayer';

function StoryCreator() {
  const [story, setStory] = useState(makeStory({creator: 'me!'} as StoryProps));
  const [slides, updateSlides] = useReducer(updateSlidesReducer, [] as Slide[]);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [game, setGame] = useState({} as Game);

  // check if story can be previewed
  useEffect(() => {
    setStory({...story, canBePreviewed: !!slides.filter((slide: Slide) => { return slide.isSelected; }).length});
  }, [slides]);

  const previewStory = (toggle: boolean) => {
    setIsPreviewing(toggle);
  };

  return (
    <div className="StoryCreator">

      <div className={isPreviewing ? 'hidden' : 'block'}>
        <StoryDataLoader
          setGame={setGame}
          updateSlides={updateSlides}
        />
        <StoryDataPicker
          game={game}
          slides={slides}
          updateSlides={updateSlides}
          canSaveStory={story.canBeSaved}
          canPreviewStory={story.canBePreviewed}
          previewStory={previewStory}
        />
      </div>

      {isPreviewing &&
        <StoryPlayer
          previewMode={true}
          previewStory={previewStory}
          story={story}
          slides={slides}
          game={game}
        />
      }

    </div>
  );
}

const updateSlidesReducer = (currSlides: Slide[], action: SlidesUpdateProps) => {
  switch(action.type) {
    case 'set':
      return action.slides;
    case 'modifyOne':
      return currSlides.map((slide: Slide) => {
        if (action.slides[0].id === slide.id) {
          return action.slides[0];
        } else {
          return slide;
        }
      });
    default:
      return currSlides;
  }
};

export default StoryCreator;
