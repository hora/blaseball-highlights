import React, { useState, useReducer } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'tailwind.css';

import { StoryProps, Game, GameEvent, GameEventUpdateProps, GameEventsUpdateProps } from 'lib/models';
import { makeStory } from 'lib/story';

import StoryCreator from 'components/creator/StoryCreator';
import StoryPlayer from 'components/player/StoryPlayer';

const queryClient = new QueryClient();

const updateGameEventsReducer = (currGameEvents: GameEvent[], action: GameEventsUpdateProps) => {
  switch(action.type) {
    case 'set':
      return action.gameEvents;
    case 'modifyOne':
      return currGameEvents.map((gameEvent: GameEvent) => {
        if (action.gameEvents[0].id === gameEvent.id) {
          return action.gameEvents[0];
        } else {
          return gameEvent;
        }
      });
    default:
      return currGameEvents;
  }
};

function App() {
  const [story, setStory] = useState(makeStory({creator: 'me!'} as StoryProps));
  const [game, setGame] = useState({} as Game);
  const initialGameEvents = [] as GameEvent[];
  const [gameEvents, updateGameEvents] = useReducer(updateGameEventsReducer, initialGameEvents);

  return (
    <div className="App text-white text-xl max-w-4xl mx-auto py-10">
      <QueryClientProvider client={queryClient}>
        <StoryCreator
          game={game}
          setGame={setGame}
          gameEvents={gameEvents}
          updateGameEvents={updateGameEvents}
        />
        {/* <StoryPlayer /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
