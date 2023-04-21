import React  from 'react';

import { Game } from 'lib/game';
import { GameEvent } from 'lib/game-event';

import Input from 'components/elements/Input';
import GameEventRow from 'components/creator/GameEventRow';

interface InterestingEvents {
  [index: string]: boolean;
}

interface StoryDataPickerTableProps {
  game: Game;
  updateInterestingEvents: (newInterestingEventsState: InterestingEvents) => void;
}

function StoryDataPickerTable({ game, updateInterestingEvents } : StoryDataPickerTableProps) {
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
    <table className="StoryDataPickerTable w-full text-lg border-separate">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>

      <tbody className="bg-faded-blue">
        <tr>
        <td colSpan={5} className="p-2.5">
          <div className="flex justify-start">
            <div className="w-1/2">
              <label htmlFor="story-title">Story title</label>
              <Input id="story-title" type="text" placeholder={`${game.awayTeam.name} at ${game.homeTeam.name}`} classes="w-full"/>
            </div>
            <div className="ml-[50px]">
              <label htmlFor="story-creator">Creator</label>
              <Input id="story-creator" type="text" placeholder="Enter a username" classes="w-full" />
            </div>
          </div>
        </td>
        </tr>

        {game.gameEvents.filter(hasDisplayText).map((gameEvent, i) => {
          return (
            <React.Fragment key={i}>

            { gameEvent.mlustard.gameStatus === 'beforeFirstPitch' &&
                <tr><td colSpan={5}>Top of 1</td></tr>}

            { gameEvent.mlustard.gameStatus === 'firstHalfInningStart' &&
                <tr><td colSpan={5}>Top of X</td></tr>}

            { gameEvent.mlustard.gameStatus === 'secondHalfInningStart' &&
                <tr><td colSpan={5}>Bottom of X</td></tr>}

            <GameEventRow key={i} gameEvent={gameEvent} game={game} updateInterestingEvents={updateInterestingEvents} />

            </React.Fragment>
          );
        }

        )}
      </tbody>
    </table>
  );
}

export default StoryDataPickerTable;
