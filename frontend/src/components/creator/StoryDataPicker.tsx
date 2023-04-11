import React  from 'react';

import { Game } from 'lib/game';
import { GameEvent } from 'lib/game-event';

import Emoji from 'components/elements/Emoji';
import StoryDataPickerToolbox from 'components/creator/StoryDataPickerToolbox';
//import StoryDataPickerTable from 'components/creator/StoryDataPickerTable';
import GameEventComponent from 'components/creator/GameEventComponent';

interface StoryDataPickerProps {
  game: Game;
}

function StoryDataPicker({ game } : StoryDataPickerProps) {

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
    <div className="StoryDataPicker">
      <h2 className="text-3xl text-center my-6">2. Select game events to highlight</h2>

      {game.id ?
        <div>

        <h3 className="font-semibold">
          {game.season.era}, Season {game.season.number}, Day {game.day}
          <span> – </span>
           <Emoji emojiCode={game.homeTeam.emoji}/> {game.homeTeam.name} vs. <Emoji emojiCode={game.awayTeam.emoji}/> {game.awayTeam.name}
        </h3>
        <h4>Starting Pitchers: <Emoji emojiCode={game.homeTeam.emoji}/> {game.homePitcher.name}
          <span> and </span>
          <Emoji emojiCode={game.awayTeam.emoji}/> {game.awayPitcher.name}
        </h4>

          <StoryDataPickerToolbox />
          //<StoryDataPickerTable />

        {game.gameEvents.filter(hasDisplayText).map((gameEvent, i) =>
          <GameEventComponent key={i} gameEvent={gameEvent} game={game} />
      )}


        </div>

      :

        <p>Waiting for a game to be loaded...</p>

      }

    </div>
  );
}

export default StoryDataPicker;

