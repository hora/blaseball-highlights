const util = require('./util');

let maxLen = 0;
let ready = false;

let $dialogs;
let $one;
let $two;
let $next;

let oneAnimating = false;
let twoAnimating = false;

let highlight = {};

const init = () => {
  maxLen = 40; // calculate this based on window size?

  $dialogs = $('#highlights-dialog__text p');
  $one = $dialogs.first();
  $two = $dialogs.last();
  $next = $('#highlights-dialog__next');

  $dialogs.each((_, el) => {
    util.prefixedOn($(el), 'AnimationEnd', onAnimEnd);
  });

  highlight = {
    comment: '',
    parts: [],
    curPart: 0,
  };

  ready = true;
};

const startHighlight = (text) => {
  if (!ready) init();

  // todo: check if animation is ready, otherwise return or .. ?
  $one.empty().removeClass('animate');
  $two.empty().removeClass('animate');
  $next.removeClass('show');

  // split by newlines (enforced pacing)
  const pacingParts = text.split('\n');

  pacingParts.forEach((p) => {
    breakIntoParts(p);
  });

  console.debug('startHighlight: created highlight parts', highlight);

  startAnimation();
};

// split each part into its animation parts by line length
const breakIntoParts = (text) => {
  let parts = [[], []];
  let unfilled = 0;
  let len = 0;

  text.split(' ').forEach((word) => {
    let wordLen = word.length;

    if ((len + wordLen) > maxLen) {
      len = 0;

      if (unfilled === 1) {
        addParts(parts);
        parts = [[], []]
        unfilled = 0;
      } else {
        unfilled = 1;
      }
    }

    if ((len + wordLen) <= maxLen) {
      parts[unfilled].push(word);
      len += wordLen + 1;
    }
  });

  addParts(parts);
};

const addParts = (parts) => {
  highlight.parts.push(parts.map((words) => {
    return words.join(' ');
  }));
};

const startAnimation = () => {
  if (!highlight.parts.length) {
    return;
  }

  // todo: figure out what the state is and what needs to be shown + animated next

  animate('first');

  //$one
    //.addClass('animate')
    //.text(highlight.parts[highlight.curPart][0]);
  //$two
    //.addClass('animate')
    //.text(highlight.parts[highlight.curPart][1]);


  //startAnimation();
};

const animate = (line) => {
  let $el;
  let i;

  if (line === 'first') {
    $el = $one;
    i = 0;
    oneAnimating = true;
  } else if (line === 'second') {
    $el = $two;
    i = 1;
    twoAnimating = true;
  }

  $el
    .addClass('animate')
    .text(highlight.parts[highlight.curPart][i]);
};

const onAnimEnd = () => {
  // check for the second animation first so the second animation
  // doesn't get triggered then immediately ended inside this func
  if (twoAnimating) {
    $two
      .removeClass('animate')
      .addClass('animation-finished');
    twoAnimating = false;

    // todo: show next arrow if:
    // there are parts left to this highlight
    // there are highlights left to the story
  }

  if (oneAnimating) {
    $one
      .removeClass('animate')
      .addClass('animation-finished');
    oneAnimating = false;
    animate('second');
  }
};


module.exports = {
  init,
  startHighlight,
};

