import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import './tailwind.css';

import StoryCreator from './StoryCreator';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <StoryCreator />
      </QueryClientProvider>
    </div>
  );
}

export default App;
