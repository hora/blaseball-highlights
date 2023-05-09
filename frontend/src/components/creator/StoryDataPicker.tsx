import React, { useState }  from 'react';

import { Game, GameEvent, GameEventsUpdateProps } from 'lib/models';

import Emoji from 'components/elements/Emoji';
import StoryDataPickerToolbox from 'components/creator/StoryDataPickerToolbox';
import StoryDataPickerTable from 'components/creator/StoryDataPickerTable';

interface StoryDataPickerProps {
  game: Game;
  gameEvents: GameEvent[];
  updateGameEvents: (action: GameEventsUpdateProps) => void;
  canSaveStory: boolean;
  canPreviewStory: boolean;
}

interface InterestingEvents {
  [index: string]: boolean;
}

function StoryDataPicker({ game, gameEvents, updateGameEvents, canSaveStory, canPreviewStory } : StoryDataPickerProps) {
  const [checkAll, setCheckAll] = useState(false);
  const [interestingEvents, setInterestingEvents] = useState({
    'halfInning': true,
    'strike': false,
    'hit': false,
    'steal': false,
    'special': false,
    'score': false
  } as InterestingEvents);

  const updateInterestingEvents = (newState: InterestingEvents) => {
    setInterestingEvents(prevState => {
      return {...prevState, ...newState};
    });
  };

  const toggleCheckAll = () => {
    setCheckAll(!checkAll);
  }

  return (
    <div className="StoryDataPicker">
      <h2 className="text-3xl text-center my-6">2. Select & edit game events to highlight</h2>

      {game.id && gameEvents.length ?
        <div>

        <h3 className="font-semibold">
          {game.season.era}, Season {game.season.number}, Day {game.day}
          <span> – </span>
          <Emoji emojiCode={game.awayTeam.emoji}/> {game.awayTeam.name} at <Emoji emojiCode={game.homeTeam.emoji}/> {game.homeTeam.name}
        </h3>
        <h4>Starting Pitchers: <Emoji emojiCode={game.awayTeam.emoji}/> {game.awayPitcher.name}
          <span> and </span>
          <Emoji emojiCode={game.homeTeam.emoji}/> {game.homePitcher.name}
        </h4>

        <StoryDataPickerToolbox
            interestingEvents={interestingEvents}
            checkAll={checkAll}
            toggleCheckAll={toggleCheckAll}
            canSaveStory={canSaveStory}
            canPreviewStory={canPreviewStory}
          />
        <StoryDataPickerTable
            game={game}
            gameEvents={gameEvents}
            updateGameEvents={updateGameEvents}
            updateInterestingEvents={updateInterestingEvents}
            checkAll={checkAll}
          />

        </div>
      :
        <p>Waiting for a game to be loaded...</p>
      }

    </div>
  );
}

export default StoryDataPicker;

