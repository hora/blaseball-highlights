export class Season {
  id: string;
  era: string;
  number: number;

  constructor(seasonID: string) {
    this.id = seasonID || '';

    switch (seasonID) {
      case 'cd1b6714-f4de-4dfc-a030-851b3459d8d1':
        this.era = 'Coronation Era'
        this.number = 1;
        break;
      case '7af53acf-1fb9-40e8-96c7-ab8308a353f9':
        this.era = 'Coronation Era'
        this.number = 2;
        break;
      default:
        this.era = 'Unknown Era'
        this.number = 0;
        break;
    }
  }
}

