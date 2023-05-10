import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { getRandomInt } from 'lib/utils';


function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const errorMessage = (error: unknown) : string => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    }

    return 'Unknown Error';
  };

  const rotateOpts = [
    'rotate-0',
    'rotate-1',
    'rotate-2',
    'rotate-3',
    '-rotate-0',
    '-rotate-1',
    '-rotate-2',
    '-rotate-3',
  ];
  const rotate = rotateOpts[getRandomInt(0, rotateOpts.length)];

  return (
    <div className="ErrorPage grid h-screen place-content-center text-white">
      <h1 className="text-4xl">
        This page is <span className={`font-mono text-3xl m-4 inline-block ${rotate}`}>Elsewhere...</span>
      </h1>

      <p className="mt-8 text-center">{errorMessage(error)}</p>
    </div>
  );
}

export default ErrorPage;

