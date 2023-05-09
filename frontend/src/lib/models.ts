import { MlustardAnalysis } from 'mlustard';

export interface Player {
  id: number;
  name: string;
  base?: number;
}

export interface Baserunners {
  [index: number]: Player;
}

export interface Team {
  id: number;
  name: string;
  shorthand: string;
  slogan: string;
  emoji: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface Season {
  id: string;
  era: string;
  number: number;
}

export interface GameEvent {
  id: string;
  gameID: string;
  displayText: string;
  homeScore: number;
  awayScore: number;
  strikes: number;
  balls: number;
  outs: number;
  inning: number;
  baserunners: Baserunners;
  mlustard: MlustardAnalysis;
  isSelected: boolean;
}

export interface GameEventProps {
  displayText: string;
  homeScore: number;
  awayScore: number;
  strikes: number;
  balls: number;
  outs: number;
  inning: number;
}

export interface GenericGameEventsUpdateProps {
  type: string;
}

export interface GameEventsUpdateProps extends GenericGameEventsUpdateProps {
  gameEvents: GameEvent[];
}

export interface GameEventUpdateProps extends GenericGameEventsUpdateProps {
  gameEvent: GameEvent;
}

export interface Game {
  id: number;

  awayPitcher: Player;
  homePitcher: Player;
  awayTeam: Team;
  homeTeam: Team;

  season: Season;
  dayRaw: number;
  day: number;
  weather: string;

  // gameEvents: GameEvent[];
}

export interface Slide {
  id: string;
  visual: string;
  text: string;
  gameEvent: GameEvent;
}

export interface SlideProps {
  visual?: string;
  text?: string;
  gameEvent: GameEvent;
}

export interface Story {
  id: string;
  creator: string;
  canBeSaved: boolean;
  canBePreviewed: boolean;
  // game: Game | undefined;
  // slides: Slide[];
}

export interface StoryProps {
  id?: string;
  creator?: string;
  // game?: Game;
  // slides?: Slide[];
  // gameEvents?: GameEvent[];
}

