import { analyzeGameEvent, MlustardAnalysis } from 'mlustard';

import { Player} from './player';

export interface GameEventProps {
  displayText: string;
  homeScore: number;
  awayScore: number;
  strikes: number;
  balls: number;
  outs: number;
  baserunners: Player[];
}

export class GameEvent {
  displayText: string;
  homeScore: number;
  awayScore: number;
  strikes: number;
  balls: number;
  outs: number;
  baserunners: Player[];
  mlustard: MlustardAnalysis;

  constructor(raw: any, data: GameEventProps) {
    this.displayText = data.displayText;
    this.homeScore = data.homeScore;
    this.awayScore = data.awayScore;
    this.strikes = data.strikes;
    this.balls = data.balls;
    this.outs = data.outs;
    this.baserunners = data.baserunners;

    this.mlustard = analyzeGameEvent(raw);
  }

}
