import { v4 as uuid} from 'uuid';

import { Game, GameEvent, Story, StoryProps, Slide } from './models';
// import { Slide, SlideProps } from './slide';

const makeStory = (data: StoryProps) : Story => {
  return {
    id: data.id || uuid(),
    creator: data.creator || '',
    canBeSaved: false,
    canBePreviewed: false,
  };
};

export {
  makeStory,
}
