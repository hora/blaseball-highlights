const mlustard = require('mlustard');

const getRandomGame = () => {
  const games = [
    // internet series championship games, starting season 2
    'https://reblase.sibr.dev/game/97d88b9e-406d-4f31-a18f-2a3b903edc03',
    'https://reblase.sibr.dev/game/b38e0917-43da-470c-a7bb-5712368a2492',
    'https://reblase.sibr.dev/game/628a2ddb-f608-411b-8d2e-2768cd36d58b',
    'https://reblase.sibr.dev/game/52f6274e-e0dc-4c23-87e8-686f6d2b2bbf',
    'https://reblase.sibr.dev/game/10538840-1f72-4a90-98e5-724a9dc5d061',
    'https://reblase.sibr.dev/game/9d85897e-e689-4eeb-b2ae-b69679a3ebc7',
    'https://reblase.sibr.dev/game/ee35a868-b004-449f-a99c-6a40ca54b382',
    'https://reblase.sibr.dev/game/06566f8d-3d14-4956-b054-36dc981fd589',
    'https://reblase.sibr.dev/game/704ddf2f-3fe2-48b3-b674-b94765f70d01',
    'https://reblase.sibr.dev/game/47bcac42-f651-4fc9-9f93-5567a7b10daf',
    'https://reblase.sibr.dev/game/0f19d78d-c27d-4146-863d-b55e6dae1679',
    'https://reblase.sibr.dev/game/1506b88f-1fea-4ba1-9256-1ebb030cdcae',
    'https://reblase.sibr.dev/game/b2cafd20-a799-48f6-abd7-c99bd79a6bd1',
    'https://reblase.sibr.dev/game/2bc6e86e-8d25-4e37-9026-780d8b6969c5',
    'https://reblase.sibr.dev/game/462481f4-7f97-441c-9fc9-c3dc3c5844a4',
    'https://reblase.sibr.dev/game/11a8a7d3-460b-4c99-a98a-b0bd1f577073',
    'https://reblase.sibr.dev/game/823dfcb6-dddb-43f4-90ff-eac05827a82e',
    'https://reblase.sibr.dev/game/f7ad7826-ca6e-49c2-818e-190408b046fe',

    // other games
    // s3d100 (riv landry)
    'https://reblase.sibr.dev/game/aa1b7fde-f077-4e4b-825f-0d1538d02822',
  ];

  return games[Math.floor(Math.random() * (games.length - 1))];
};

const getGameEvents = (gameId) => {
  let gamesURL = `https://api.sibr.dev/chronicler/v1/games/updates?game=${gameId}`;

  const getPaginatedEvents = (gameEvents, gamesURL, nextPage, cb) => {
    let fetchURL = gamesURL;
    if (nextPage) {
      fetchURL += `&page=${nextPage}`;
    }

    fetch(fetchURL)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Bad response from server');
        }

        return resp.json();
      })
      .then((data) => {
        for (let gameEv of data.data) {
          gameEvents[gameEv.hash] = {
            ev: gameEv,
            mlustard: mlustard.analyzeGameEvent(gameEv.data),
          };
        }

        if (data.nextPage) {
          getPaginatedEvents(gameEvents, gamesURL, data.nextPage, cb);
        } else {
          // done loading all game events
          cb(gameEvents);
          return;
        }
      })
      .catch((err) => {
        console.error(err);
        $('#game-load-form .error-msg').removeClass('d-none');
        hideLoading();
      });
  };

  showLoading();

  return new Promise((resolve, reject) => {
    getPaginatedEvents({} , gamesURL, null, (gameEvents) => {
      hideLoading();
      resolve(gameEvents);
    });
  });

};

const showLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('.error-msg').addClass('d-none');
  $gameEvForm.find('button').addClass('d-none');
  $gameEvForm.find('.loading').removeClass('d-none');
};

const hideLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('button').removeClass('d-none');
  $gameEvForm.find('.loading').addClass('d-none');
};

const loadWithMlustard = (onLoad, gameId) => {
  const $gameEvForm = $('#game-load-form');
  const $gameInput = $('#game-load-form__game-id');

  // focus on game input
  $gameInput.focus();

  if (gameId) {
    $gameInput.attr('placeholder', gameId);
  } else {
    // pick a random interesting game as the placeholder for the input
    $gameInput.attr('placeholder', getRandomGame());
  }

  const getEvents = (gameId) => {
    getGameEvents(gameId)
      .then((gameEvents) => {
        console.debug('Game loaded with events:', gameEvents);
        onLoad(gameEvents);
      });
  };

  if (gameId) {
    getEvents(gameId);
  } else {
    $gameEvForm.on('submit', (ev) => {
      ev.preventDefault();

      //if (!window.confirm('Are you sure?')) {
        //return false;
      //}

      let gameVal = $gameInput.val();

      if (!gameVal) {
        gameVal = $gameInput.attr('placeholder');
      }

      gameId = gameVal.split('/').pop();
      getEvents(gameId);
    });
  }
};

module.exports = {
  loadWithMlustard,
};

