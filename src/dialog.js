const util = require('./util');

let ready = false;

let $dialogs;
let $lineOne;
let $lineTwo;
let $next;

let lineOneAnimating;
let lineTwoAnimating;


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

const startHighlight = (highlight) => {
  if (!ready) init();

  // reset dialog
  highlight.curDialogPart = 0;

  animateHighlight(highlight);
};

const animateHighlight = (highlight) => {
  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideNext();
  animate('one');
};

const animate = (line) => {
  if (line === 'one') {
    stopAnimate('two');
    $lineOne.addClass('animate');
    lineOneAnimating = true;
  } else if (line === 'two') {
    stopAnimate('one');
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

    // todo: show next arrow if:
    // there are parts left to this highlight
    // there are highlights left to the story
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

const showNext = () => {
  $next.addClass('show');
};

const hideNext = () => {
  $next.removeClass('show');
};

//const startHighlight = (text) => {
  //if (!ready) init();

  // todo: check if animation is ready, otherwise return or .. ?
  //$one.empty().removeClass('animate');
  //$two.empty().removeClass('animate');
  //$next.removeClass('show');

//};


//const startAnimation = () => {
  //if (!highlight.parts.length) {
    //return;
  //}

  // todo: figure out what the state is and what needs to be shown + animated next

  //animate('first');

  //$one
    //.addClass('animate')
    //.text(highlight.parts[highlight.curPart][0]);
  //$two
    //.addClass('animate')
    //.text(highlight.parts[highlight.curPart][1]);


  //startAnimation();
//};

//const animate = (line) => {
  //let $el;
  //let i;

  //if (line === 'first') {
    //$el = $one;
    //i = 0;
    //oneAnimating = true;
  //} else if (line === 'second') {
    //$el = $two;
    //i = 1;
    //twoAnimating = true;
  //}

  //$el
    //.addClass('animate')
    //.text(highlight.parts[highlight.curPart][i]);
//};


module.exports = {
  startHighlight,
};

