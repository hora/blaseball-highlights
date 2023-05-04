import { GameEvent, GameEventProps } from './models';
import { v4 as uuid } from 'uuid';
import { analyzeGameEvent, MlustardAnalysis } from 'mlustard';

const makeGameEvent = (raw: any, data: GameEventProps) : GameEvent => {
  return {
    uuid: uuid(),
    displayText: data.displayText,
    homeScore: data.homeScore,
    awayScore: data.awayScore,
    strikes: data.strikes,
    balls: data.balls,
    outs: data.outs,
    inning: data.inning,
    baserunners: {},
    mlustard: analyzeGameEvent(raw),
  };
};

export {
  makeGameEvent,
}

