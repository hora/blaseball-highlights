import Scoreboard from 'components/common/Scoreboard';
import { Game, Slide } from 'lib/models';
import { getLogo } from 'lib/team';

interface DiamondProps {
  game: Game;
  slide: Slide;
}

function Diamond({ game, slide } : DiamondProps) {

  return (
    <div className='Diamond'>
      <div className='flex justify-between text-lg'>
        <span>{game.season.eraShort} Season {game.season.number}, Day {game.day}</span>
        <span>{game.awayTeam.name} at {game.homeTeam.name}</span>
      </div>

      <div className=''>
        <img className='w-[200px]' src={getLogo(game.homeTeam, 'stadium')} alt={`${game.homeTeam.name} logo`} />
        <Scoreboard
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
      </div>
    </div>
  );
}

export default Diamond;

