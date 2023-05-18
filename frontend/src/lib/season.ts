import { Season } from './models';

const makeSeason = (seasonID: string) : Season => {
  let seasonNumber = 0;
  let seasonEra = 'Unknown Era';
  let seasonEraShort = '';

  switch (seasonID) {
    case 'cd1b6714-f4de-4dfc-a030-851b3459d8d1':
      seasonEra = 'Coronation Era';
      seasonEraShort = 'CE';
      seasonNumber = 1;
      break;
    case '7af53acf-1fb9-40e8-96c7-ab8308a353f9':
      seasonEra = 'Coronation Era';
      seasonEraShort = 'CE';
      seasonNumber = 2;
      break;
  }

  return {
    id: seasonID || '',
    number: seasonNumber,
    era: seasonEra,
    eraShort: seasonEraShort,
  };
};

export {
  makeSeason,
}
