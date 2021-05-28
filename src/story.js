const Visual = require('./visual');
const Dialog = require('./dialog');
const teamsData = require('../lib/teams-data');

class Story {
  constructor(settings) {
    this.highlights = settings.highlights || [];
    this.curHighlight = 0;
    this.dialog = new Dialog();
    this.visual = new Visual();

    console.debug('new story with highlights', this.highlights);
  }

  start(startFrom) {
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
        if ($(evt.target).attr('id') === 'highlights-dialog__next') {
          direction = 'next';
        } else if ($(evt.target).attr('id') === 'highlights-dialog__prev') {
          direction = 'prev';
        }
      }

      _this.doStep(direction);
    }

    $(document).on('keyup.story', handleAction);
    $('.dialog-control').on('click.story', handleAction);

    // find the highlight to start from
    if (startFrom) {
      this.setCurrentTo(startFrom);
    }

    // show the current highlight
    this.startCurrent();
  }

  setCurrentTo(id) {
    while (id !== this.currentHighlight().id) {
      this.moveToNextHighlight();
    }
  }

  doStep(direction) {
    if (direction === 'next') {

      if (this.dialog.finished()) {
        this.moveToNextHighlight();
      } else {
        this.advanceDialog();
      }

    } else { // direction === 'prev'
      this.moveToPrevHighlight();
    }
  }

  moveToNextHighlight() {
    if (!this.hasNextHighlight()) {
      return;
    }

    this.curHighlight++;
    this.startCurrent();
  }

  moveToPrevHighlight() {
    if (!this.hasPrevHighlight()) {
      return;
    }

    this.curHighlight--;
    this.startCurrent();
  }

  advanceDialog() {
    this.dialog.advance();
    this.dialog.showControl(this.hasPrevHighlight(), this.hasNextHighlight());
  }

  hasPrevHighlight() {
    return this.curHighlight > 0;
  }

  hasNextHighlight() {
    return this.curHighlight < (this.highlights.length - 1);
  }

  currentHighlight() {
    return this.highlights[this.curHighlight];
  }

  startCurrent() {
    //const current = this.highlights[this.curHighlight];
    const current = this.currentHighlight();

    this.visual.showFor(current);
    this.dialog.startHighlight(current);
    this.dialog.showControl(this.hasPrevHighlight(), this.hasNextHighlight());
  }

  stop() {
    $('#visuals').addClass('d-none');
    $('#highlights-dialog__container').addClass('d-none');
    $(document).off('keyup.story');
    $('.dialog-control').off('click.story');
  }
}

module.exports = Story;

