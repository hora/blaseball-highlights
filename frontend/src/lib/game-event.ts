import { v4 as uuid } from 'uuid';
import { analyzeGameEvent, MlustardAnalysis } from 'mlustard';

import { GameEvent, GameEventProps, Player } from './models';
import { makePlayer } from './player';

const makeGameEvents = (gameEventsData: any[]) : GameEvent[] => {

  let gameEvents = [] as GameEvent[];
  let currGameEvent;
  let gameEventProps : GameEventProps = {
    displayText: '',
    homeScore: 0,
    awayScore: 0,
    strikes: 0,
    balls: 0,
    outs: 0,
    inning: 0,
  };

  let baserunners = [] as Player[];

  for (let gameEvent of gameEventsData) {
    if (
      gameEvent?.data?.changedState &&
      Object.keys(gameEvent?.data?.changedState).length
      ) {

      let newState = gameEvent.data.changedState;

      gameEventProps.homeScore = (newState.homeScore >= 0 ? newState.homeScore : gameEventProps.homeScore);
      gameEventProps.awayScore = (newState.awayScore >= 0 ? newState.awayScore : gameEventProps.awayScore);
      gameEventProps.strikes = (newState.strikes >= 0 ? newState.strikes : gameEventProps.strikes);
      gameEventProps.balls = (newState.balls >= 0 ? newState.balls : gameEventProps.balls);
      gameEventProps.outs = (newState.outs >= 0 ? newState.outs : gameEventProps.outs);
      gameEventProps.inning = (newState.inning >= 0 ? newState.inning : gameEventProps.inning);
    }

    gameEventProps.displayText = gameEvent?.data?.displayText;
    currGameEvent = makeGameEvent(gameEvent, gameEventProps);

    if (gameEvent?.data?.changedState?.baserunners) {
      baserunners = [] as Player[];

      for (let baserunner of gameEvent.data.changedState.baserunners) {
        baserunners.push(makePlayer(baserunner));
        baserunner.base && (currGameEvent.baserunners[baserunner.base] = baserunner);
      }
    } else {
      for (let baserunner of baserunners) {
        baserunner.base && (currGameEvent.baserunners[baserunner.base] = baserunner);
      }
    }

    gameEvents.push(currGameEvent);
  }

  console.log(gameEvents);

  return gameEvents;

};

const makeGameEvent = (raw: any, data: GameEventProps) : GameEvent => {
  return {
    id: uuid(),
    gameID: '0',
    displayText: data.displayText,
    homeScore: data.homeScore,
    awayScore: data.awayScore,
    strikes: data.strikes,
    balls: data.balls,
    outs: data.outs,
    inning: data.inning,
    baserunners: {},
    mlustard: analyzeGameEvent(raw),
    isSelected: false,
  };
};

export {
  makeGameEvents,
}

