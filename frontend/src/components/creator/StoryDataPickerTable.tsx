import React  from 'react';

import { Game } from 'lib/game';
import { GameEvent } from 'lib/game-event';

import GameEventComponent from 'components/creator/GameEventComponent';

interface StoryDataPickerTableProps {
  game: Game;
}

function StoryDataPickerTable({ game} : StoryDataPickerTableProps) {
  function hasDisplayText(gameEvent: GameEvent) : boolean {
    return !!gameEvent.displayText
  }

  function isStartOrEnd(gameEvent: GameEvent) : boolean {
    return gameEvent.mlustard.gameStatus === 'beforeFirstPitch' || gameEvent.mlustard.gameStatus === 'gameEnd'
  }

  function isInteresting(gameEvent: GameEvent) : boolean {
    // don't care about events that don't have display text
    if (!hasDisplayText(gameEvent)) return false;

    if (
      //(gameEvent.mlustard.out && gameEvent.mlustard.outMeta.kind === 'strike') ||
      //(gameEvent.mlustard.walk) ||
      //(gameEvent.mlustard.hit) ||
      //(gameEvent.mlustard.steal && gameEvent.mlustard.stealMeta.success) ||
      //(gameEvent.mlustard.special) ||
      //(gameEvent.mlustard.maximumBlaseball) ||
      (gameEvent.mlustard.score)
    ) {
      return true;
    }

    return false;
  }

  function isHighlight(gameEvent: GameEvent) : boolean {
    return isInteresting(gameEvent) || isStartOrEnd(gameEvent);
  }


  return (
    <table className="StoryDataPickerTable">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>

      <tbody>
        <tr>
        <td colSpan={5}>
          <div>
            <div>
              <label htmlFor="story-title">Story title</label>
              <input id="story-title" placeholder={''} type="text" />
            </div>
            <div>
            </div>
          </div>
        </td>
        </tr>

        {game.gameEvents.filter(hasDisplayText).map((gameEvent, i) =>
          <GameEventComponent key={i} gameEvent={gameEvent} game={game} />
        )}
      </tbody>
    </table>
  );
}

export default StoryDataPickerTable;
