import React, { useState } from 'react';

import { Game } from 'lib/game';

import StoryDataLoader from 'components/creator/StoryDataLoader';
import StoryDataPicker from 'components/creator/StoryDataPicker';

function StoryCreator() {
  const [game, setGame] = useState({} as Game);

  return (
    <div className="StoryCreator">
      <StoryDataLoader setGame={setGame} />
      <StoryDataPicker game={game} />
    </div>
  );
}

export default StoryCreator;
