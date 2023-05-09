import { Game } from './models';
import { makePlayer } from './player';
import { makeTeam } from './team';
import { makeSeason } from './season';

const makeGame = (gameData: any) : Game => {
  const data = gameData?.data || {};

  return {
    id: data?.id,
    awayPitcher: makePlayer(data?.awayPitcher),
    homePitcher: makePlayer(data?.homePitcher),
    awayTeam: makeTeam(data?.awayTeam),
    homeTeam: makeTeam(data?.homeTeam),
    season: makeSeason(data?.seasonId),
    dayRaw: data?.day,
    day: data?.day + 1,
    weather: data?.weather.name,
  }
}

export {
  makeGame,
}
