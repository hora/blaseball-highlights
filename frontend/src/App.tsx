import React, { useState, useReducer, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import 'tailwind.css';

import { StoryProps, Game, Slide, SlidesUpdateProps } from 'lib/models';
import { makeStory } from 'lib/story';

import StoryCreator from 'components/creator/StoryCreator';
import StoryPlayer from 'components/player/StoryPlayer';
import ErrorPage from 'components/ErrorPage';

const queryClient = new QueryClient();

const updateSlidesReducer = (currSlides: Slide[], action: SlidesUpdateProps) => {
  switch(action.type) {
    case 'set':
      return action.slides;
    case 'modifyOne':
      return currSlides.map((slide: Slide) => {
        if (action.slides[0].id === slide.id) {
          return action.slides[0];
        } else {
          return slide;
        }
      });
    default:
      return currSlides;
  }
};

function App() {
  const [story, setStory] = useState(makeStory({creator: 'me!'} as StoryProps));
  const [slides, updateSlides] = useReducer(updateSlidesReducer, [] as Slide[]);
  const [game, setGame] = useState({} as Game);

  // check if story can be previewed
  useEffect(() => {
    setStory({...story, canBePreviewed: !!slides.filter((slide: Slide) => { return slide.isSelected; }).length});
  }, [slides]);

  const getRootElement = () => {
    // eventually this should be a layout component
    return (
      <div><Outlet /></div>
    );
  };

  const previewStory = () => {
    // updateSlides({type: 'create', gameEvents});
  };

  const getStoryCreatorElement = () => {
    return (
      <StoryCreator
        game={game}
        setGame={setGame}
        slides={slides}
        updateSlides={updateSlides}
        canSaveStory={story.canBeSaved}
        canPreviewStory={story.canBePreviewed}
        previewStory={previewStory}
      />
    );
  };

  return (
    <BrowserRouter>
      <div className="App text-white text-xl max-w-4xl mx-auto py-10">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={getRootElement()} errorElement={<ErrorPage />}>

              <Route index element={getStoryCreatorElement()}/>

            </Route>
          </Routes>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
