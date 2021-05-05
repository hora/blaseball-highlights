const grandSlalami = require('grand-slalami');

// making a 'class' for highlights in the old-school way
// cause i don't wanna have to complicate things further with babel
let id;
let gameEvent;
let mlustard;
let commentary;

const generateCommentary = () => {
  return grandSlalami.getComment({
    gameEvent: gameEvent.data,
    mlustard: mlustard,
  });
};

const makeHighlight = (settings) => {
  id = settings.id;
  gameEvent = settings.gameEvent;
  mlustard = settings.mlustard;
  commentary = generateCommentary();

  return {
    id,
    gameEvent,
    mlustard,
    commentary,
  }
};

module.exports = {
  makeHighlight,
};

