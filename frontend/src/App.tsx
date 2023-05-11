import React, { useState, useReducer, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import 'tailwind.css';

import { StoryProps, Game, GameEvent, GameEventUpdateProps, GameEventsUpdateProps, Slide, SlideUpdateProps } from 'lib/models';
import { makeStory } from 'lib/story';

import StoryCreator from 'components/creator/StoryCreator';
import StoryPlayer from 'components/player/StoryPlayer';
import ErrorPage from 'components/ErrorPage';

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
  const [gameEvents, updateGameEvents] = useReducer(updateGameEventsReducer, [] as GameEvent[]);

  // check if story can be previewed
  useEffect(() => {
    setStory({...story, canBePreviewed: !!gameEvents.filter((gameEvent: GameEvent) => { return gameEvent.isSelected; }).length});
  }, [gameEvents]);

  const getRootElement = () => {
    // eventually this should be a layout component
    return (
      <div><Outlet /></div>
    );
  };

  const getStoryCreatorElement = () => {
    return (
      <StoryCreator
         game={game}
         setGame={setGame}
         gameEvents={gameEvents}
         updateGameEvents={updateGameEvents}
         canSaveStory={story.canBeSaved}
         canPreviewStory={story.canBePreviewed}
      />
    );
  };

  const getPreviewElement = () => {
    return (
      <StoryPlayer />
    );
  };

  return (
    <BrowserRouter>
      <div className="App text-white text-xl max-w-4xl mx-auto py-10">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={getRootElement()} errorElement={<ErrorPage />}>

              <Route index element={getStoryCreatorElement()}/>
              <Route path='/preview' element={getPreviewElement()}/>

            </Route>
          </Routes>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
