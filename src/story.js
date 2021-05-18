const Visual = require('./visual');
const Dialog = require('./dialog');
const teamsData = require('../lib/teams-data');

class Story {
  constructor(settings) {
    this.highlights = settings.highlights || [];
    this.dialog = new Dialog();
    this.curHighlight = 0;
    this.intro = true;
    this.visual = new Visual();
  }

  start() {
    $('#game-event-form').addClass('d-none');
    $('#visuals').removeClass('d-none');
    $('#highlights-dialog__container').removeClass('d-none');

    // focus on the body so arrow keyups can be registered
    $('body').focus();

    const _this = this;
    const handleAction = (evt) => {
      let direction;

      if (evt.type === 'keyup') {
        if (evt.keyCode === 37) { // arrow left
          evt.preventDefault();
          direction = 'prev';
        } else if (evt.keyCode === 39) {
          evt.preventDefault();
          direction = 'next';
        } else {
          return;
        }
      } else { // click
        // todo: fix this, this is cursed:
        if ($(evt.target).attr('id').indexOf('next') >= 0) {
          direction = 'next';
        } else if ($(evt.target).attr('id').indexOf('next') >= 0) {
          direction = 'prev';
        }
      }

      _this.playHighlight(direction);
    }

    $(document).on('keyup', handleAction);
    $('.dialog-control').on('click', handleAction);

    // show the first highlight
    this.nextHighlight(true);
  }

  nextHighlight(skipAnimation) {
    const hls = this.getHighlights();

    this.visual.showFor(hls.cur);
    //this.visual.updateDiamond(hls);
    this.dialog.startHighlight(hls, skipAnimation);
  }

  getHighlights () {
    return {
      prev: this.highlights[this.curHighlight - 1],
      cur: this.highlights[this.curHighlight],
      next: this.highlights[this.curHighlight + 1],
    };
  }

  playHighlight(direction) {

    if (direction === 'next') {
      // try to advance the highlight, if there's more text to animate
      if (!this.continueHighlight()) {

        // do nothing if there's no more highlights
        if (this.highlights.length - 1 === this.curHighlight) { return };

        this.curHighlight++;

        // if there are no more highlights, don't advance
        if (this.highlights.length === this.curHighlight) {
          return;
        }

        // otherwise, show the next highlight
        this.nextHighlight(true);
      }
    } else {
      // try to reverse highlight, if there was previous text to animate
      if (!this.reverseHighlight()) {

        // do nothing if there's no previous highlights
        if (this.curHighlight === 0) { return };

        this.curHighlight--;

        // if there are no previous highlights, don't reverse
        if (this.curHighlight < 0) {
          return;
        }

        // todo: fix the naming, oh gods this is cursed
        this.nextHighlight(true);
      }
    }
  }

  continueHighlight() {
    return this.dialog.continueHighlight(this.getHighlights());
  };

  reverseHighlight() {
    return this.dialog.reverseHighlight(this.getHighlights());
  }
}

module.exports = Story;

