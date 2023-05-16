import React, { useState } from 'react';

import { Story, StoryProps } from 'lib/models';

import StoryPlayerVisual from 'components/player/StoryPlayerVisual';
import StoryPlayerDialog from 'components/player/StoryPlayerDialog';
import Button from 'components/elements/Button';

interface StoryPlayerProps {
  previewMode: boolean;
  previewStory: (toggle: boolean) => void;
}

function StoryPlayer({ previewMode, previewStory } : StoryPlayerProps) {

  return (
    <div className="StoryPlayer">
      {previewMode && <Button btnType='button' text='Exit Preview' onClick={() => previewStory(false)}/>}
      <StoryPlayerVisual />
      <StoryPlayerDialog />
    </div>
  );
}

export default StoryPlayer;

