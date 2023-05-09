import { v4 as uuid} from 'uuid';

import { Game, GameEvent, Story, StoryProps, Slide } from './models';
// import { Slide, SlideProps } from './slide';

const makeStory = (data: StoryProps) : Story => {
  return {
    id: data.id || uuid(),
    creator: data.creator || '',
    canBeSaved: false,
    canBePreviewed: false,
    // game: data.game,
    // slides: data.slides || [] as Slide[],
  };
};

export {
  makeStory,
}

// export class Story {
//   id: number;
//   creator: string;
//   game: Game | undefined;
//   slides: Slide[];
//
//   constructor(data: StoryProps) {
//     this.id = data.id || this.generateId();
//     this.creator = data.creator || '';
//     this.game = data.game;
//     this.slides = data.slides || [] as Slide[];
//     // this.slides = data.slides || this.createSlides(data.gameEvents);
//   }
//
//   generateId() : number {
//     return 1;
//   }
//
//   createSlides(gameEvents : GameEvent[] | undefined) : Slide[] {
//     const slides = [] as Slide[];
//     return slides;
//   }
//
//   setGame(game: Game) {
//     this.game = game;
//   }
//
//   createSlide(data: SlideProps) {
//     const slide = new Slide(data);
//     this.slides.push(slide);
//   }
//
//   removeSlide(uuid: string) {
//     this.slides.filter(slide => slide.id !== uuid);
//   }
//
// }
