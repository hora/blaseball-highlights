import { Team } from 'lib/models';
import { getLogo, getLogoCreatorData } from 'lib/team';

interface TeamLogoProps {
  team: Team;
  dugout: string;
}

function TeamLogo({ team, dugout } : TeamLogoProps) {
  const logoCreatorData = getLogoCreatorData(team, dugout);

  return (
    <div>
      <img className='w-[200px]' src={getLogo(team, dugout)} alt={`${team.name} logo`} />
      {logoCreatorData[0] &&
        <p className='text-sm mt-2'>by <a className='underline' href={logoCreatorData[1]} target='_blank' rel='noopener noreferrer'>{logoCreatorData[0]}</a></p>}
      {!logoCreatorData &&
        <p className='text-sm mt-2'>by {logoCreatorData[1]}</p>}
    </div>
  );
}

export default TeamLogo;

