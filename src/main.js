const gameEventSelector = require('./game-event-selector');
const dialog = require('./dialog');
const visual = require('./visual');

const onHighlightsReady = (highlights) => {
  visual.updateDiamond(highlights[0]);
  dialog.startHighlight(highlights[0]);
};

const initApp = () => {
  gameEventSelector.init(onHighlightsReady);

  window.startHighlight = dialog.startHighlight;

};

initApp();

