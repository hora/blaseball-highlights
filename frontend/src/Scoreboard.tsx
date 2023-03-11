import React  from 'react';

import { Player} from './lib/player';
import { Team } from './lib/team';
import { Baserunners } from './lib/game-event';

import ScoreboardDiamond from './ScoreboardDiamond';

interface ScoreboardProps {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  baserunners: Baserunners;
  balls: number;
  strikes: number;
  outs: number;
}

function Scoreboard({ homeTeam, awayTeam, homeScore, awayScore, baserunners, balls, strikes, outs } : ScoreboardProps) {
  return (
    <ul className="Scoreboard border border-solid border-dark-blue rounded-md bg-white text-dark-blue w-[198px] flex items-center justify-between text-base py-1 px-0 m-0 leading-4">
      <li className="ml-1 p-1 font-semibold">
        <div className="flex justify-between">
          <span className="my-1">{awayTeam.shorthand}</span>
          <span className="bg-faded-orange p-1 ml-2">{awayScore}</span>
        </div>
        <div className="flex justify-between">
          <span className="my-1">{homeTeam.shorthand}</span>
          <span className="bg-faded-orange p-1 ml-2">{homeScore}</span>
        </div>
      </li>
      <li className="py-1 pl-1 pr-2 font-semibold">
        <ScoreboardDiamond base={3} baserunner={baserunners[3]}/>
        <ScoreboardDiamond base={2} baserunner={baserunners[2]}/>
        <ScoreboardDiamond base={1} baserunner={baserunners[1]}/>
      </li>
      <li className="p-1 font-semibold">
        <div>
          <span>{balls}</span> - <span>{strikes}</span>
        </div>
        <div className="uppercase">
          <span>{outs}</span> out
        </div>
      </li>
    </ul>
  );
}

export default Scoreboard;

