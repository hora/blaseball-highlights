const gameEventSelector = require('./game-event-selector');
const dialog = require('./dialog');
const visual = require('./visual');

let highlights = [];
let curHighlight = 0;
let intro = true;

const getHighlights = () => {
  return {
    prev: highlights[curHighlight - 1],
    cur: highlights[curHighlight],
    next: highlights[curHighlight + 1],
  };
};

const nextHighlight = () => {
  visual.updateDiamond(getHighlights());
  dialog.startHighlight(getHighlights());
};

const continueHighlight = () => {
  return dialog.continueHighlight(getHighlights());
};

const handleAction = (evt) => {
  if (evt.type === 'keyup' && !(
    evt.keyCode === 32 || // space
    evt.keyCode === 39 || // arrow right
    evt.keyCode === 40    // arrow down
  )) {
    return;
  }

  // do nothing if there's no more highlights
  if (highlights.length === curHighlight) { return };

  // if we're in the intro, start at the first highlight
  if (intro) {
    intro = false;

    nextHighlight();
    return;
  }

  // try to advance the highlight, if there's more text to animate
  if (!continueHighlight()) {
    curHighlight++;

    // if there are no more highlights, move into outro
    if (highlights.length === curHighlight) {
      // todo: outro
      return;
    }

    // otherwise, show the next highlight
    nextHighlight();
  }
};

const onHighlightsReady = (hls) => {
  $(document).on('keyup', handleAction);
  $('#highlights-dialog__container').on('click', handleAction);

  highlights = hls;

  // todo: intro
};

const initApp = () => {
  gameEventSelector.init(onHighlightsReady);

  window.startHighlight = dialog.startHighlight;

};

initApp();

