import React  from 'react';

import { GameEvent } from './lib/game-event';
import { Game } from './lib/game';

import Scoreboard from './Scoreboard';


interface GameEventProps {
  gameEvent: GameEvent;
  game: Game;
}

function GameEventComponent({ gameEvent, game } : GameEventProps) {
  return (
    <div className="GameEventComponent">
      <p>{gameEvent.displayText}</p>
      <Scoreboard
        homeTeam={game.homeTeam}
        awayTeam={game.awayTeam}
        homeScore={gameEvent.homeScore}
        awayScore={gameEvent.awayScore}
        baserunners={gameEvent.baserunners}
        balls={gameEvent.balls}
        strikes={gameEvent.strikes}
        outs={gameEvent.outs}
      />
    </div>
  );
}

export default GameEventComponent;

