import { v4 as uuid } from 'uuid';
import { analyzeGameEvent } from 'mlustard';

import { Slide, GameEventProps, Player } from './models';
import { makePlayer } from './player';

const makeSlides = (gameEventsData: any[]) : Slide[] => {
  let slides = [] as Slide[];
  let currGameEvent;
  let gameEventProps : GameEventProps = {
    displayText: '',
    homeScore: 0,
    awayScore: 0,
    strikes: 0,
    balls: 0,
    outs: 0,
    inning: 0,
    atBat: 'AWAY',
    batter: null,
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
      gameEventProps.atBat = (newState.teamAtBat ? newState.teamAtBat : gameEventProps.atBat);

      if (newState.batter === null) {
        gameEventProps.batter = null;
      } else {
        gameEventProps.batter = (newState.batter ? makePlayer(newState.batter) : gameEventProps.batter);
      }
    }

    gameEventProps.displayText = gameEvent?.data?.displayText;
    currGameEvent = makeSlide(gameEvent, gameEventProps);

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

    slides.push(currGameEvent);
  }

  console.log(slides);

  return slides;

};

const makeSlide = (raw: any, data: GameEventProps) : Slide => {
  const mlustard = analyzeGameEvent(raw);

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
    atBat: data.atBat,
    baserunners: {},
    batter: data.batter,
    mlustard: mlustard,
    isSelected: false,
    visual: mlustard.gameStatus === 'beforeFirstPitch' ? 'matchup' : 'diamond',
    text: data.displayText,
  };
};

const getInningHalfFull = (atBat: string) : string => {
  return atBat === 'AWAY' ? 'top' : 'bottom';
};

const getInningHalfShort = (atBat: string) : string => {
  return atBat === 'AWAY' ? 'top' : 'bot';
};


export {
  makeSlides,
  getInningHalfFull,
  getInningHalfShort,
}
