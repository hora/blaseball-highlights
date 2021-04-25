let gameEvents = [];

const getGameEvents = async (gameId, nextPage) => {
  let gamesURL = `https://api.sibr.dev/chronicler/v1/games/updates?game=${gameId}`;

  if (nextPage) {
    gamesURL += `&page=${nextPage}`;
  }

  const resp = await fetch(gamesURL);

  if (resp.ok) {
    const data = await resp.json();

    if (data.nextPage) {
      getGameEvents(gameId, data.nextPage);
    }

    for (let gameEv of data.data) {
      gameEvents.push(gameEv);
    }
  }
};

const initApp = () => {
  const $gameEvForm = $('#game-event-form');

  $gameEvForm.on('submit', (ev) => {
    ev.preventDefault();

    const gameId = $gameEvForm.find('#game-id').val();
    getGameEvents(gameId);
  });
};

initApp();

