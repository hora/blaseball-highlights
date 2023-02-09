import React  from 'react';

import { Game } from './lib/game';

interface StoryPreviewProps {
  game: Game;
}

function StoryPreview({ game } : StoryPreviewProps) {
  return (
    <div className="StoryPreview">
      <h2>{game.homeTeam.name} vs. {game.awayTeam.name}</h2>
      <h3>{game.season.era}, Season {game.season.number} – Day {game.day}</h3>
      <button>Play Highlights</button>
    </div>
  );
}

export default StoryPreview;

