import React  from 'react';

import { Game } from 'lib/game';
import { GameEvent } from 'lib/game-event';

import Input from 'components/elements/Input';
import Emoji from 'components/elements/Emoji';
import GameEventRow from 'components/creator/GameEventRow';

interface InterestingEvents {
  [index: string]: boolean;
}

interface StoryDataPickerTableProps {
  game: Game;
  updateInterestingEvents: (newInterestingEventsState: InterestingEvents) => void;
  checkAll: boolean;
}

function StoryDataPickerTable({ game, updateInterestingEvents, checkAll } : StoryDataPickerTableProps) {
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
        <td colSpan={5} className="p-2.5 ">
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
          let inningHeader;
          let tOrB = '';
          let fielderEmoji = '';
          let pitcher = '';
          let batterEmoji = '';

          switch (gameEvent.mlustard.gameStatus) {
            case 'beforeFirstPitch':
            case 'secondHalfInningEnd':
              tOrB = 'Top';
              fielderEmoji = game.homeTeam.emoji;
              pitcher = game.homePitcher.name;
              batterEmoji = game.awayTeam.emoji;
              break;
            case 'firstHalfInningEnd':
              tOrB = 'Bottom';
              fielderEmoji = game.awayTeam.emoji;
              pitcher = game.awayPitcher.name;
              batterEmoji = game.homeTeam.emoji;
              break;
            default:
              break;
          }

          inningHeader = (<React.Fragment>
                <tr className="inning"><td className="p-2.5 align-top" colSpan={5}>{tOrB} of {gameEvent.inning + 1}</td></tr>
                <tr className="">
                  <td colSpan={5} className="p-2.5 align-top">
                    <span>
                      <Emoji emojiCode={fielderEmoji}/> fielding, with {pitcher} pitching
                    </span>
                    <span>
                      <Emoji emojiCode={batterEmoji}/> batting
                    </span>
                  </td>
                </tr>
              </React.Fragment>
              )

          return (
            <React.Fragment key={i}>

            { gameEvent.mlustard.gameStatus === 'beforeFirstPitch' && inningHeader}

            <GameEventRow key={i} gameEvent={gameEvent} game={game} updateInterestingEvents={updateInterestingEvents} checkAll={checkAll} />

            { gameEvent.mlustard.gameStatus === 'firstHalfInningEnd' && inningHeader}
            { gameEvent.mlustard.gameStatus === 'secondHalfInningEnd' && inningHeader}

            </React.Fragment>
          );
        }

        )}
      </tbody>
    </table>
  );
}

export default StoryDataPickerTable;
