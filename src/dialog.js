const util = require('./util');

// old
const animateHighlight = (highlight) => {
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideControl();
  animate('one');
};

// old
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

// old
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

// old
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

class Dialog {
  constructor() {
    console.debug('new Dialog()');

    this.$dialogs = $('#highlights-dialog__text p');
    this.$lineOne = this.$dialogs.first();
    this.$lineTwo = this.$dialogs.last();
    this.$control = $('.dialog-control');

    this.lineOneAnimating = false;
    this.lineTwoAnimating = false;

    //this.$dialogs.each((_, el) => {
      //util.prefixedOn($(el), 'AnimationEnd', onAnimEnd);
    //});

    this.cur;
    this.prev;
    this.next;

    this.ready = true;
  }

  startHighlight(highlights, skipAnimation) {
    this.cur = highlights.cur;
    this.prev = highlights.prev;
    this.next = highlights.next;

    // reset dialog
    //highlight.curDialogPart = 0;
    this.$lineOne.removeClass('animation-finished animate');
    this.$lineTwo.removeClass('animation-finished animate');

    this.cur.started = true;
    if (skipAnimation) {
      this.showHighlight(this.cur);
    } else {
      this.animateHighlight(this.cur);
    }
  }

  showHighlight(highlight) {
    this.$lineOne.removeClass('animate');
    this.$lineTwo.removeClass('animate');

    this.$lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
    this.$lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

    this.$lineOne.addClass('animation-finished');
    this.$lineTwo.addClass('animation-finished');

    this.showControl();
  }

  showControl() {
    this.showPrev();
    this.showNext();
  }

  // show next arrow if:
  // there are parts left to this highlight
  // there are highlights left to the story
  showNext() {
    // todo: show arrow if next, but move into outro
    if (this.cur.hasDialogNext || this.next) {
      this.$control.last().addClass('show');
    }
  }

  // show pre arrow if:
  // there are parts before this highlight
  // there are highlights earlier in the story
  showPrev() {
    // todo: show arrow if next, but move into outro
    if (this.cur.hasDialogPrev() || this.prev) {
      this.$control.first().addClass('show');
    }
  }

  hideControl() {
    this.$control.removeClass('show');
  }

  continueHighlight(highlights) {
    this.cur = highlights.cur;
    this.prev = highlights.prev;
    this.next = highlights.next;

    if (!this.cur) { return false; }
    if (!this.cur.started) { return false; }

    // if currently animating, simply end the animation
    if (this.lineOneAnimating) {

      this.$lineOne
        .removeClass('animate')
        .addClass('animation-finished');
      this.lineOneAnimating = false;
      this.$lineTwo
        .removeClass('animate')
        .addClass('animation-finished');
      this.lineTwoAnimating = false;
      this.showControl();

    } else if (this.lineTwoAnimating) {

      this.$lineTwo
        .removeClass('animate')
        .addClass('animation-finished');
      this.lineTwoAnimating = false;
      this.showControl();

    } else {
      this.cur.curDialogPart++;

      // no more text to this highlight
      if (this.cur.curDialogPart === this.cur.dialogParts.length) {
        this.cur.curDialogPart = 0;
        return false;
      }

      // skip animations for now
      this.showHighlight(this.cur);
      //animateHighlight(cur);
    }

    return true;
  }

  reverseHighlight(highlights) {
    this.cur = highlights.cur;
    this.prev = highlights.prev;
    this.next = highlights.next;

    if (!this.cur) { return false; }
    if (!this.cur.started) { return false; }

    this.cur.curDialogPart--;

    // no more text to this highlight
    if (this.cur.curDialogPart === -1) {
      this.cur.curDialogPart = 0;
      return false;
    }

    this.showHighlight(this.cur);
    return true;
  }

}

module.exports = Dialog;

