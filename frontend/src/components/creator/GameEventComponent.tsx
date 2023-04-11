import React  from 'react';

import { GameEvent } from 'lib/game-event';
import { Game } from 'lib/game';

import Scoreboard from 'components/common/Scoreboard';


interface GameEventProps {
  gameEvent: GameEvent;
  game: Game;
}

function GameEventComponent({ gameEvent, game } : GameEventProps) {
  return (
    <tr className="GameEventComponent">
      <td>{gameEvent.displayText}</td>
      <td>
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
      </td>
    </tr>
  );
}

export default GameEventComponent;

