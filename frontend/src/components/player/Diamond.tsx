import { Game, Slide } from 'lib/models';
import { getLogo, getTeamStadiumLogoOutline } from 'lib/team';

import DiamondSVG from './DiamondSVG';
import Scoreboard from 'components/common/Scoreboard';

interface DiamondProps {
  game: Game;
  slide: Slide;
}

function Diamond({ game, slide } : DiamondProps) {
  let outlineClasses = '';

  if (getTeamStadiumLogoOutline(game.homeTeam)) {
    outlineClasses = 'rounded-full border-solid border-black border-[1px] p-[1px]';
  }

  return (
    <div className='Diamond'>
        <div className='flex justify-between text-lg'>
          <span>{game.season.eraShort} Season {game.season.number}, Day {game.day}</span>
          <span>{game.awayTeam.name} at {game.homeTeam.name}</span>
        </div>

      <DiamondSVG team={game.homeTeam}>
        <Scoreboard
          classes='absolute right-0 mr-[15px] mt-[10px]'
          homeTeam={game.homeTeam}
          awayTeam={game.awayTeam}
          homeScore={slide.homeScore}
          awayScore={slide.awayScore}
          baserunners={slide.baserunners}
          balls={slide.balls}
          strikes={slide.strikes}
          outs={slide.outs}
          inning={slide.inning}
          atBat={slide.atBat}
          extra={true}
        />
        <img className={`absolute top-[202px] left-[6px] h-[55px] rotate-90 ${outlineClasses}`} src={getLogo(game.homeTeam, 'stadium')} alt={`${game.homeTeam.name} logo`} />
      </DiamondSVG>
    </div>
  );
}

export default Diamond;

