const util = require('./util');

let ready = false;

let $dialogs;
let $lineOne;
let $lineTwo;
let $next;

let lineOneAnimating;
let lineTwoAnimating;

let cur;
let prev;
let next;


const init = () => {
  console.debug('Dialog.init()');

  $dialogs = $('#highlights-dialog__text p');
  $lineOne = $dialogs.first();
  $lineTwo = $dialogs.last();
  $next = $('#highlights-dialog__next');

  lineOneAnimating = false;
  lineTwoAnimating = false;

  $dialogs.each((_, el) => {
    util.prefixedOn($(el), 'AnimationEnd', onAnimEnd);
  });

  ready = true;
};

const startHighlight = (highlights) => {;
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!ready) init();

  // reset dialog
  //highlight.curDialogPart = 0;
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  cur.started = true;
  animateHighlight(cur);
};

const animateHighlight = (highlight) => {
  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideNext();
  animate('one');
};

const animate = (line) => {
  if (line === 'one') {
    //stopAnimate('two');
    $lineOne.addClass('animate');
    lineOneAnimating = true;
  } else if (line === 'two') {
    //stopAnimate('one');
    $lineTwo.addClass('animate');
    lineTwoAnimating = true;
  }
};

const stopAnimate = (line) => {
  if (line === 'one') {
    $lineOne
      .removeClass('animate')
      .addClass('animation-finished');
    lineOneAnimating = false;
  } else if (line === 'two') {
    $lineTwo
      .removeClass('animate')
      .addClass('animation-finished');
    lineTwoAnimating = false;
  }
};

const onAnimEnd = () => {
  // check for the second animation first so the second animation
  // doesn't get triggered then immediately ended inside this func
  if (lineTwoAnimating) {
    stopAnimate('two');

    showNext();
  }

  if (lineOneAnimating) {
    stopAnimate('one');

    // if there's text in lineTwo, animate it
    if ($lineTwo.text().length) {
      animate('two');
    } else {
      showNext();
    }
  }
};

// show next arrow if:
// there are parts left to this highlight
// there are highlights left to the story
const showNext = () => {
  // todo: show arrow if next, but move into outro
  if (cur.hasDialogLeft() || next) {
    $next.addClass('show');
  }
};

const hideNext = () => {
  $next.removeClass('show');
};

const continueHighlight = (highlights) => {
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!cur.started) { return false; }

  cur.curDialogPart++;

  // no more text to this highlight
  if (cur.curDialogPart === cur.dialogParts.length) {
    return false;
  }

  animateHighlight(cur);
  return true;
};

module.exports = {
  startHighlight,
  continueHighlight,
};

