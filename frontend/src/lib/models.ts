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
  eraShort: string;
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
  atBat: string;
  baserunners: Baserunners;
  batter: Player | null;
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
  atBat: string;
  batter: Player | null;
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
  weather: Weather;
}

export interface Slide extends GameEvent {
  isSelected: boolean;
  visual: string;
  text: string;
}

export interface SlideProps {
  visual?: string;
  text?: string;
}

export interface SlidesUpdateProps {
  type: string;
  slides: Slide[];
}

export interface Story {
  id: string;
  creator: string;
  canBeSaved: boolean;
  canBePreviewed: boolean;
}

export interface StoryProps {
  id?: string;
  creator?: string;
}

export interface TeamColours {
  official: string;
  mound: string;
  moundOutline: string;
  bases: string;
  basesOutline: string;
  grass: string;
  grassOutline: string;
  dirt: string;
  dirtOutline: string;
  foulZone: string;
  foulZoneOutline: string;
}

export interface TeamData {
    shorthand: string;
    colours: TeamColours;
    homeLogoURL: string;
    homeLogoCredit: string;
    homeLogoCreditURL: string;
    awayLogoURL: string;
    awayLogoCredit: string;
    awayLogoCreditURL: string;
    stadiumLogoURL: string;
    stadiumLogoCredit: string;
    stadiumLogoCreditURL: string;
    stadiumLogoOutline: boolean;
}

export interface TeamsData {
  [index: string]: TeamData;
}

export interface WeatherDataInterface {
  emoji: string;
}

export interface WeatherData {
  [index: string]: WeatherDataInterface;
}

export interface Weather {
  id: string;
  name: string;
  emoji: string;
}
