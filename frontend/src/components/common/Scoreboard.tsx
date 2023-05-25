import Tooltip from 'rc-tooltip';

import { Team, Baserunners } from 'lib/models';

import ScoreboardDiamond from 'components/common/ScoreboardDiamond';
import { getInningHalfShort } from 'lib/slide';
import Emoji from 'components/elements/Emoji';

interface ScoreboardProps {
  classes?: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  baserunners: Baserunners;
  balls: number;
  strikes: number;
  outs: number;
  inning: number;
  atBat: string;
  extra?: boolean;
  weatherName?: string;
  weatherEmoji?: string;
}

function Scoreboard({ classes, homeTeam, awayTeam, homeScore, awayScore, baserunners, balls, strikes, outs, extra, weatherName, weatherEmoji, inning, atBat } : ScoreboardProps) {

  const inningText = (inning: number) : string => {
    inning++;

    switch(inning) {
      case 1:
        return `${inning}st`;
      case 2:
        return `${inning}nd`;
      case 3:
        return `${inning}rd`;
      default:
        return `${inning}th`;
    }
  };

  return (
    <ul className={`Scoreboard ${classes} border border-solid border-dark-blue rounded-md bg-white text-dark-blue flex items-center justify-between py-1 px-0 leading-4 text-base`}>
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
      {extra &&
        <li className='p-1 font-semibold'>
          <div>
            <span className='uppercase mr-1'>{getInningHalfShort(atBat)}</span>
            <span>{inningText(inning)}</span>
          </div>
          <div className='mt-1'>
            <Tooltip placement='top' overlay={<span className="">{weatherName}</span>}>
              <span className=''><Emoji emojiCode={weatherEmoji || ''} /></span>
            </Tooltip>
          </div>
        </li>
      }
    </ul>
  );
}

export default Scoreboard;

