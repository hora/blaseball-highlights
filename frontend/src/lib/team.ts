import { Team } from './models';
import { teamsData } from './teams-data';

const makeTeam = (data?: any) : Team => {
  return {
    id: data?.id,
    name: data?.name,
    shorthand: data?.shorthand,
    slogan: data?.slogan,
    emoji: data?.emoji,
    primaryColor: data?.primaryColor,
    secondaryColor: data?.secondaryColor,
  };
}

const getLogo = (team: Team, version: string) : string => {
  let teamData = teamsData[team.id];

  !teamData.awayLogoURL && (version = 'home');
  !teamData.stadiumLogoURL && (version = 'home');

  switch(version) {
    case 'stadium':
      return `${teamData.stadiumLogoURL}`;
    case 'away':
      return `${teamData.awayLogoURL}`;
    case 'home':
    default:
      return `${teamData.homeLogoURL}`;
  }
};

const getLogoCreatorData = (team: Team, version: string) : [string, string] => {
  let teamData = teamsData[team.id];

  !teamData.awayLogoURL && (version = 'home');
  !teamData.stadiumLogoURL && (version = 'home');

  switch(version) {
    case 'stadium':
      return [teamData.stadiumLogoCredit, teamData.stadiumLogoCredit];
    case 'away':
      return [teamData.awayLogoCredit, teamData.awayLogoCreditURL];
    case 'home':
    default:
      return [teamData.homeLogoCredit, teamData.homeLogoCreditURL];
  }
};

export {
  makeTeam,
  getLogo,
  getLogoCreatorData,
}
