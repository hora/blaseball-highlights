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
  uuid: string;
  displayText: string;
  homeScore: number;
  awayScore: number;
  strikes: number;
  balls: number;
  outs: number;
  inning: number;
  baserunners: Baserunners;
  mlustard: MlustardAnalysis;
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

  gameEvents: GameEvent[];
}

