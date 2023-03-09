import { Player} from './player';
import { Team } from './team';
import { Season } from './season';
import { GameEvent, GameEventProps } from './game-event';

export class Game {
  data: any;
  id: number;

  awayPitcher: Player;
  homePitcher: Player;
  awayTeam: Team;
  homeTeam: Team;

  season: Season;
  dayRaw: number;
  weather: string;

  gameEvents: GameEvent[];

  constructor(data?: any) {
    this.data = data?.data || {};
    this.id = data?.entity_id;

    this.awayPitcher = new Player(this.data?.awayPitcher);
    this.homePitcher = new Player(this.data?.homePitcher);
    this.awayTeam = new Team(this.data?.awayTeam);
    this.homeTeam = new Team(this.data?.homeTeam);

    this.season = new Season(this.data?.seasonId);
    this.dayRaw = this.data?.day;
    this.weather = this.data?.weather.name;

    this.gameEvents = [];
  }

  public get day() : number {
    return this.dayRaw + 1;
  }

  public buildGameEvents(gameEvents : any[]) {
    let currGameEvent;
    let gameEventProps : GameEventProps = {
      displayText: '',
      homeScore: 0,
      awayScore: 0,
      strikes: 0,
      balls: 0,
      outs: 0,
    };

    let baserunners = [] as Player[];

    for (let gameEvent of gameEvents) {
      if (!gameEvent?.data?.displayText) {
        continue;
      }

      if (
        gameEvent?.data?.changedState &&
        Object.keys(gameEvent?.data?.changedState).length
        ) {

        let newState = gameEvent.data.changedState;

        gameEventProps.homeScore = newState.homeScore || gameEventProps.homeScore;
        gameEventProps.awayScore = newState.awayScore || gameEventProps.awayScore;
        gameEventProps.strikes = newState.strikes || gameEventProps.strikes;
        gameEventProps.balls = newState.balls || gameEventProps.balls;
        gameEventProps.outs = newState.outs || gameEventProps.outs;
      }

      gameEventProps.displayText = gameEvent?.data?.displayText;
      currGameEvent = new GameEvent(gameEvent, gameEventProps);

      if (gameEvent?.data?.changedState?.baserunners) {
        baserunners = [] as Player[];

        for (let baserunner of gameEvent.data.changedState.baserunners) {
          baserunners.push(new Player(baserunner));
          currGameEvent.addBaserunner(new Player(baserunner));
        }
      } else {
        for (let baserunner of baserunners) {
          currGameEvent.addBaserunner(new Player(baserunner));
        }
      }

      this.gameEvents.push(currGameEvent);
    }

    console.log(this.gameEvents);

  }
}

