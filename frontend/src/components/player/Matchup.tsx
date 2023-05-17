import TeamLogo from 'components/common/TeamLogo';

import { Game } from 'lib/models';
import { gameDay } from 'lib/game';

interface MatchupProps {
  game: Game;
}

function Matchup({ game } : MatchupProps) {

  return (
    <div className='Matchup flex flex-col justify-center height-[460px]'>
      <h2 className='text-2xl my-[20px]'>{gameDay(game)}</h2>
      <div className='flex justify-center items-center'>
        <TeamLogo team={game.awayTeam} dugout='away' />
        <span className='mx-[20px]'>at</span>
        <TeamLogo team={game.homeTeam}  dugout='home' />
      </div>
    </div>
  );
}

export default Matchup;

