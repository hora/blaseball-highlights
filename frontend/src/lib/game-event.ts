import { analyzeGameEvent, MlustardAnalysis } from 'mlustard';

import { Player} from './player';

export interface GameEventProps {
  displayText: string;
  homeScore: number;
  awayScore: number;
  strikes: number;
  balls: number;
  outs: number;
  inning: number;
}

export interface Baserunners {
  [index: number]: Player;
}

export class GameEvent {
  displayText: string;
  homeScore: number;
  awayScore: number;
  strikes: number;
  balls: number;
  outs: number;
  inning: number;
  baserunners: Baserunners;
  mlustard: MlustardAnalysis;

  constructor(raw: any, data: GameEventProps) {
    this.displayText = data.displayText;
    this.homeScore = data.homeScore;
    this.awayScore = data.awayScore;
    this.strikes = data.strikes;
    this.balls = data.balls;
    this.outs = data.outs;
    this.inning = data.inning;
    this.baserunners = {};

    this.mlustard = analyzeGameEvent(raw);
  }

  public addBaserunner(baserunner: Player) {
    if (!baserunner.base) {
      return;
    }

    this.baserunners[baserunner.base] = baserunner;
  }

}
