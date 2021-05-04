const util = require('./util');

let maxLen = 0;
//let spillover = false;
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
  ready = true;

  $dialogs = $('#highlights-dialog__text p');
  $one = $dialogs.first();
  $two = $dialogs.last();
  $next = $('#highlights-dialog__next');

  $dialogs.each((_, el) => {
    util.prefixedOn($(el), 'AnimationEnd', onAnimEnd);
  });

  highlight = {
    comment: '',

    textParts: [],
    partsPos: 0,

    partParts: [],
    partPartsPos: 0,
    started: false,
  };
};

const onAnimEnd = () => {
  if (oneAnimating) {
    $one
      .removeClass('animate')
      .addClass('animation-finished');
    oneAnimating = false;
  }

  if (twoAnimating) {
    $two
      .removeClass('animate')
      .addClass('animation-finished');
    twoAnimating = false;
  }

  //if (!spillover) {
    //$next.addClass('show');
  //}
};

const startHighlight = (text) => {
  if (!ready) init();

  if (highlight.started) { return; }
  highlight.started = true;

  // todo: check if animation is ready, otherwise return or .. ?
  $one.empty().removeClass('animate');
  $two.empty().removeClass('animate');
  $next.removeClass('show');

  // split into parts by newlines
  highlight.textParts = text.split('\n');

    partParts: [],
    partPartsPos: 0,

  highlight.textParts.forEach((part) => {
    let len = 0;
    let partArr = [];

    part.split(' ').forEach((word) => {
      let wordLen = word.length;

      // todo: if there's more words than we can put in the two lines, what to
      // do??
      if ((len + wordLen) > maxLen) {
        len = 0;
        active = words2;
      }

      if ((len + wordLen) <= maxLen) {
        //active.push(word);

        len += wordLen + 1;
      }
    });
  });

  // split each part into 2 (one for each p)

  drawHighlight();
};

const drawHighlight = () => {
  if (!highlight.textParts.length) {
    return;
  }

  let curPart = highlight.textParts[highlight.curPos];
  let len = 0;
  let words1 = [];
  let words2 = [];
  let active = words1;

  curPart.split(' ').forEach((word) => {
    let wordLen = word.length;

    // todo: if there's more words than we can put in the two lines, what to
    // do??
    if ((len + wordLen) > maxLen) {
      len = 0;
      active = words2;
    }

    if ((len + wordLen) <= maxLen) {
      active.push(word);
      len += wordLen + 1;
    }
  });

  if (words1.length) {
    highlight.curText = words1.join(' ');
  }

  if (words2.length) {
    highlight.nextText = words1.join(' ');
  }

  startAnimation();
};

const startAnimation = () => {
  animate(highlight.curEl, highlight.curText);
};

const animate = ($el, text) => {
  $el
    .addClass('animate')
    .text(text);

  if ($el.attr('id') === 'highlights-dialog__text-one') {
    oneAnimating = true;
  }

  if ($el.attr('id') === 'highlights-dialog__text-two') {
    twoAnimating = true;
  }
};

module.exports = {
  init,
  startHighlight,
};

