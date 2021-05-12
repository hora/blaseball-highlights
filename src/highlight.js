const grandSlalami = require('grand-slalami');

// making a 'class' for highlights in the old-school way
// cause i don't wanna have to complicate things further with babel
const makeHighlight = (settings) => {
  settings = settings || {};

  let id;
  let gameEvent;
  let mlustard;
  let commentary;
  let maxDialogLen;
  let dialogParts;
  let curDialogPart;
  let visual;

  const init = () => {
    id = settings.id;
    gameEvent = settings.gameEvent;
    mlustard = settings.mlustard;
    visual = settings.visual;
    commentary = generateCommentary();
    maxDialogLen = setMaxDialogLen();
    dialogParts = [];
    curDialogPart = 0;
    breakIntoDialogParts();

    return {
      id,
      gameEvent,
      mlustard,
      commentary,
      dialogParts,
      curDialogPart,
      hasDialogLeft,
      visual,
    };
  };

  const generateCommentary = () => {
    return grandSlalami.getComment({
      gameEvent: gameEvent.data,
      mlustard: mlustard,
    });
  };

  // todo: do i wanna support mobile? then update this accordingly
  const setMaxDialogLen = () => {
    return 35;
  };

  const breakIntoDialogParts = () => {
    // split by newlines (enforced pacing)
    const pacingParts = commentary.split('\n');

    pacingParts.forEach((p) => {
      breakIntoParts(p);
    });
  };

  // split each part into its animation parts by line length
  const breakIntoParts = (text) => {
    let parts = [[], []];
    let unfilled = 0;
    let len = 0;

    text.split(' ').forEach((word) => {
      let wordLen = word.length;

      if ((len + wordLen) > maxDialogLen) {
        len = 0;

        if (unfilled === 1) {
          dialogParts.push(makeSentences(parts));
          parts = [[], []];
          unfilled = 0;
        } else {
          unfilled = 1;
        }
      }

      if ((len + wordLen) <= maxDialogLen) {
        parts[unfilled].push(word);
        len += wordLen + 1;
      }
    });

    dialogParts.push(makeSentences(parts));
  };

  const makeSentences = (parts) => {
    return parts.map((words) => {
      return words.join(' ');
    });
  };

  //const hasDialogLeft = () => {
    //return !((curDialogPart + 1) === dialogParts.length);
  //};

  return init();
};

// utilities
const hasDialogLeft = (highlight) => {
    return !((highlight.curDialogPart + 1) === highlight.dialogParts.length);
};

const hasDialogPrev = (highlight) => {
    return !((highlight.curDialogPart - 1) === -1);
};

module.exports = {
  makeHighlight,
  hasDialogLeft,
  hasDialogPrev,
};

