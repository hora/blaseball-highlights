import { Player} from './player';
import { Team } from './team';
import { Season } from './season';

export class Game {
  data: any;
  id: number;

  awayPitcher: Player;
  homePitcher: Player;
  awayTeam: Team;
  homeTeam: Team;

  season: Season;
  day: number;
  weather: string;

  constructor(data?: any) {
    this.data = data?.data || {};
    this.id = data?.entity_id || '';

    this.awayPitcher = new Player(this.data?.awayPitcher);
    this.homePitcher = new Player(this.data?.homePitcher);
    this.awayTeam = new Team(this.data?.awayTeam);
    this.homeTeam = new Team(this.data?.homeTeam);

    this.season = new Season(this.data?.seasonId);
    this.day = this.data?.day;
    this.weather = this.data?.weather.name;
  }
}

