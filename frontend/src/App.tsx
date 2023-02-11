import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import './tailwind.css';

import StoryCreator from './StoryCreator';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App text-white text-xl max-w-4xl mx-auto py-10">
      <QueryClientProvider client={queryClient}>
        <StoryCreator />
      </QueryClientProvider>
    </div>
  );
}

export default App;
