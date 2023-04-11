import React  from 'react';

import { Game } from 'lib/game';

import Emoji from 'components/elements/Emoji';
import StoryDataPickerToolbox from 'components/creator/StoryDataPickerToolbox';
import StoryDataPickerTable from 'components/creator/StoryDataPickerTable';

interface StoryDataPickerProps {
  game: Game;
}

function StoryDataPicker({ game } : StoryDataPickerProps) {
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
        <StoryDataPickerTable game={game} />

        </div>
      :
        <p>Waiting for a game to be loaded...</p>
      }

    </div>
  );
}

export default StoryDataPicker;

