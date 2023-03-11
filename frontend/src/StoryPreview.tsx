import React  from 'react';

import { Game } from './lib/game';

import Emoji from './Emoji';
import Button from './Button';
import GameEventComponent from './GameEventComponent';

interface StoryPreviewProps {
  game: Game;
}

function StoryPreview({ game } : StoryPreviewProps) {
  return (
    <div className="StoryPreview">
      <h2>{game.homeTeam.name} <Emoji emojiCode={game.homeTeam.emoji}/> vs. {game.awayTeam.name} <Emoji emojiCode={game.awayTeam.emoji}/></h2>
      <h3>{game.season.era}, Season {game.season.number} – Day {game.day}</h3>
      <Button text="Play Highlights" btnType="button" disabled={false} />
      {game.gameEvents.filter((gameEvent) => gameEvent.displayText).map((gameEvent, i) =>
        <GameEventComponent key={i} gameEvent={gameEvent} game={game} />
      )}
    </div>
  );
}

export default StoryPreview;

