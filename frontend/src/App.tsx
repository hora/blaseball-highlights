import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import 'tailwind.css';

import StoryCreator from 'components/creator/StoryCreator';
import ErrorPage from 'components/ErrorPage';

const queryClient = new QueryClient();

function App() {
  const getRootElement = () => {
    // eventually this should be a layout component
    return (
      <div><Outlet /></div>
    );
  };

  const getStoryCreatorElement = () => {
    return (
      <StoryCreator />
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
