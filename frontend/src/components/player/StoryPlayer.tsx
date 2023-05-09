import React, { useState } from 'react';

import { Story, StoryProps } from 'lib/models';

import StoryPlayerVisual from 'components/player/StoryPlayerVisual';
import StoryPlayerDialog from 'components/player/StoryPlayerDialog';

interface StoryPlayerProps {
}

function StoryPlayer({} : StoryPlayerProps) {

  return (
    <div className="StoryPlayer">
      <StoryPlayerVisual />
      <StoryPlayerDialog />
    </div>
  );
}

export default StoryPlayer;

