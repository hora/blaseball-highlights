import { Game, Slide } from 'lib/models';
import { getLogo, getTeamStadiumLogoOutline } from 'lib/team';

import DiamondSVG from './DiamondSVG';
import Scoreboard from 'components/common/Scoreboard';
import Emoji from 'components/elements/Emoji';

interface DiamondProps {
  game: Game;
  slide: Slide;
}

function Diamond({ game, slide } : DiamondProps) {
  let outlineClasses = '';
  let pitcherName = '';
  let fieldingEmoji = '';
  let battingEmoji = '';

  switch (slide.atBat) {
    case 'AWAY':
      pitcherName = game.homePitcher.name;
      fieldingEmoji = game.homeTeam.emoji;
      battingEmoji = game.awayTeam.emoji;
      break;
    case 'HOME':
      pitcherName = game.awayPitcher.name;
      fieldingEmoji = game.awayTeam.emoji;
      battingEmoji = game.homeTeam.emoji;
      break;
  }

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
        <p className='absolute px-[5px] m-0 text-dark-blue bg-white/80 text-lg rounded-sm font-semibold top-[164px] left-[240px]'>
          <Emoji emojiCode={fieldingEmoji} />
          {pitcherName}
        </p>
        {slide.batter && <p className='absolute px-[5px] m-0 text-dark-blue bg-white/80 text-lg rounded-sm font-semibold top-[255px] left-[45px]'>
          <Emoji emojiCode={battingEmoji } /> {slide.batter.name}</p>}
        {slide.baserunners[1] && <p className='absolute px-[5px] m-0 text-dark-blue bg-white/80 text-lg rounded-sm font-semibold top-[400px] left-[330px]'>
          <Emoji emojiCode={battingEmoji } /> {slide.baserunners[1].name}</p>}
        {slide.baserunners[2] && <p className='absolute px-[5px] m-0 text-dark-blue bg-white/80 text-lg rounded-sm font-semibold top-[255px] left-[430px]'>
          <Emoji emojiCode={battingEmoji } /> {slide.baserunners[2].name}</p>}
        {slide.baserunners[3] && <p className='absolute px-[5px] m-0 text-dark-blue bg-white/80 text-lg rounded-sm font-semibold top-[72px] left-[240px]'>
          <Emoji emojiCode={battingEmoji } /> {slide.baserunners[3].name}</p>}
      </DiamondSVG>
    </div>
  );
}

export default Diamond;

