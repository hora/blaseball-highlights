const gameEventSelector = require('./game-event-selector');
const dialog = require('./dialog');

const initApp = () => {
  gameEventSelector.init();

  window.startHighlight = dialog.startHighlight;

};

initApp();

