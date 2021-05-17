const util = require('./util');
//const highlight = require('./highlight');

let ready = false;

let $dialogs;
let $lineOne;
let $lineTwo;
let $control;

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
  $control = $('.dialog-control');

  lineOneAnimating = false;
  lineTwoAnimating = false;

  $dialogs.each((_, el) => {
    util.prefixedOn($(el), 'AnimationEnd', onAnimEnd);
  });

  ready = true;
};

const startHighlight = (highlights, skipAnimation) => {;
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!ready) init();

  // reset dialog
  //highlight.curDialogPart = 0;
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  cur.started = true;
  if (skipAnimation) {
    showHighlight(cur);
  } else {
    animateHighlight(cur);
  }
};

const animateHighlight = (highlight) => {
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideControl();
  animate('one');
};

const showHighlight = (highlight) => {
  $lineOne.removeClass('animate');
  $lineTwo.removeClass('animate');

  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  $lineOne.addClass('animation-finished');
  $lineTwo.addClass('animation-finished');

  showControl();
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

    showControl();
  }

  if (lineOneAnimating) {
    stopAnimate('one');

    // if there's text in lineTwo, animate it
    if ($lineTwo.text().length) {
      animate('two');
    } else {
      showControl();
    }
  }
};

const showControl = () => {
  showPrev();
  showNext();
};

// show next arrow if:
// there are parts left to this highlight
// there are highlights left to the story
const showNext = () => {
  // todo: show arrow if next, but move into outro
  if (cur.hasDialogNext || next) {
    $control.last().addClass('show');
  }
};

// show pre arrow if:
// there are parts before this highlight
// there are highlights earlier in the story
const showPrev = () => {
  // todo: show arrow if next, but move into outro
  if (cur.hasDialogPrev() || prev) {
    $control.first().addClass('show');
  }
};

const hideControl = () => {
  $control.removeClass('show');
};

const continueHighlight = (highlights) => {
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!cur) { return false; }
  if (!cur.started) { return false; }

  // if currently animating, simply end the animation
  if (lineOneAnimating) {

    $lineOne
      .removeClass('animate')
      .addClass('animation-finished');
    lineOneAnimating = false;
    $lineTwo
      .removeClass('animate')
      .addClass('animation-finished');
    lineTwoAnimating = false;
    showControl();

  } else if (lineTwoAnimating) {

    $lineTwo
      .removeClass('animate')
      .addClass('animation-finished');
    lineTwoAnimating = false;
    showControl();

  } else {
    cur.curDialogPart++;

    // no more text to this highlight
    if (cur.curDialogPart === cur.dialogParts.length) {
      cur.curDialogPart = 0;
      return false;
    }

    // skip animations for now
    showHighlight(cur);
    //animateHighlight(cur);
  }

  return true;
};

const reverseHighlight = (highlights) => {
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!cur) { return false; }
  if (!cur.started) { return false; }

  cur.curDialogPart--;

  // no more text to this highlight
  if (cur.curDialogPart === -1) {
    cur.curDialogPart = 0;
    return false;
  }

  showHighlight(cur);
  return true;
};

const setIntro = (one, two) => {
  if (!ready) init();

  $lineOne.text(one);
  $lineTwo.text(two);
};

module.exports = {
  startHighlight,
  continueHighlight,
  reverseHighlight,
  setIntro,
};

