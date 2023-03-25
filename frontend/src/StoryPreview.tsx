import React  from 'react';

import { Game } from './lib/game';
import { GameEvent } from './lib/game-event';

import Emoji from './Emoji';
import Button from './Button';
import GameEventComponent from './GameEventComponent';

interface StoryPreviewProps {
  game: Game;
}

function StoryPreview({ game } : StoryPreviewProps) {

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
    <div className="StoryPreview">
      <h2>{game.homeTeam.name} <Emoji emojiCode={game.homeTeam.emoji}/> vs. {game.awayTeam.name} <Emoji emojiCode={game.awayTeam.emoji}/></h2>
      <h3>{game.season.era}, Season {game.season.number} – Day {game.day}</h3>
      <Button text="Play Highlights" btnType="button" disabled={false} />
      {game.gameEvents.filter(isHighlight).map((gameEvent, i) =>
        <GameEventComponent key={i} gameEvent={gameEvent} game={game} />
      )}
    </div>
  );
}

export default StoryPreview;

