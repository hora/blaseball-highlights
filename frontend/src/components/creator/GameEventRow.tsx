import React, { useState }  from 'react';

import { GameEvent } from 'lib/game-event';
import { Game } from 'lib/game';

import Input from 'components/elements/Input';
import Scoreboard from 'components/common/Scoreboard';


interface GameEventProps {
  gameEvent: GameEvent;
  game: Game;
}

function GameEventRow({ gameEvent, game } : GameEventProps) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = () => {
    setIsChecked(!isChecked);
  }

  return (
    <tr className="GameEventRow">
      <td className="p-2.5 align-top">
        <Input type="checkbox" classes="" checked={isChecked} onChange={onCheck} />
      </td>
      <td className="p-2.5 align-top">
        <textarea className="text-black p-[5px]" defaultValue={gameEvent.displayText} />
      </td>
      <td className="p-2.5 align-top">
        <label>Choose a visual for this event:</label>
        <select className="text-black block mt-1" name="visual" defaultValue={gameEvent.mlustard.gameStatus === 'beforeFirstPitch' ? 'matchup' : 'diamond'}>
          <option value="diamond">Diamond</option>
          <option value="matchup">Matchup</option>
          <option value="custom">Custom</option>
        </select>
      </td>
      <td className="p-2.5 align-top">
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
      <td className="p-2.5 align-top">
        <a className={isChecked ? 'underline' : 'cursor-default text-white/50'} href="#">Preview</a>
      </td>
    </tr>
  );
}

export default GameEventRow;

