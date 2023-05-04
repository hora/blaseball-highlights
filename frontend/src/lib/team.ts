import { Team } from './models';

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

export {
  makeTeam,
}
