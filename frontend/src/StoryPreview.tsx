import React  from 'react';

import { Game } from './lib/game';

import Emoji from './Emoji';

interface StoryPreviewProps {
  game: Game;
}

function StoryPreview({ game } : StoryPreviewProps) {
  return (
    <div className="StoryPreview">
      <h2>{game.homeTeam.name} <Emoji emojiCode={game.homeTeam.emoji}/> vs. {game.awayTeam.name} <Emoji emojiCode={game.awayTeam.emoji}/></h2>
      <h3>{game.season.era}, Season {game.season.number} – Day {game.day}</h3>
      <button>Play Highlights</button>
    </div>
  );
}

export default StoryPreview;

