const Highlight = require('./highlight');
const util = require('./util');

let gameEvents;
let onStartPreview;
let onEndPreview;

const isPlayBall = (gameEv) => {
  return gameEv.lastUpdate.indexOf('Play ball') >= 0;
};

const generateHighlights = (cb) => {
  let highlights = [];

  $('#game-events__form-items .game-event-form__check:checked')
  .each((_, checked) => {
    const id = $(checked).attr('id');
    const gameEvent = gameEvents[id];
    let visual = 'diamond';

    if (isPlayBall(gameEvent.ev.data)) {
      visual = 'matchup';
    }

    const hl = new Highlight({
      id: id,
      gameEvent: gameEvent.ev,
      mlustard: gameEvent.mlustard,
      visual,
    });

    highlights.push(hl);
  });

  console.debug('generateHighlights:', highlights);
  cb(highlights);
};

const makeCountCircle = (classes) => {
  return $('<span>').addClass(classes);
};

const renderGameEv = (gameEv, $container) => {
  const data = gameEv.ev.data;

  if (!data.lastUpdate) {
    return;
  }

  let ret = [];

  // check for half-inning changes
  if (gameEv.mlustard.gameStatus === 'beforeFirstPitch') {
    ret.push($('<h3>')
      .addClass('inning inning-top')
      .text(`Top of 1`));
  } else if (gameEv.mlustard.gameStatus === 'firstHalfInningStart' && data.inning) {
    ret.push($('<h3>')
      .addClass('inning inning-top')
      .text(`Top of ${data.inning + 1}`));
  } else if (gameEv.mlustard.gameStatus === 'secondHalfInningStart') {
    ret.push($('<h3>')
      .addClass('inning inning-bottom')
      .text(`Bottom of ${data.inning + 1}`));
  }

  const $gameEv = $('#game-event__template').clone();

  let update = `${data.lastUpdate} ${data.scoreUpdate || ''}`;

  $gameEv
    .find('.game-event-form__check')
    .attr('id', gameEv.ev.hash);

  $gameEv
    .find('label')
    .attr('for', gameEv.ev.hash)
    .text(update);

  $gameEv
    .find('textarea')
    .val(update);

  // game status
  const $gameStatus = $gameEv.find('.game-event__game-status');
  let homeEmoji = util.getEmoji('home', data);
  let awayEmoji = util.getEmoji('away', data);

  let score = `${homeEmoji} ${data.homeScore} : ${awayEmoji} ${data.awayScore}`;
  $gameStatus
    .find('.game-status__score')
    .text(score);

  // bases are from third to first
  const $bases = $gameStatus.find('.game-status__bases .diamond');
  gameEv.mlustard.baseRunners.third.playerName && $bases.eq(0).addClass('filled');
  gameEv.mlustard.baseRunners.second.playerName && $bases.eq(1).addClass('filled');
  gameEv.mlustard.baseRunners.first.playerName && $bases.eq(2).addClass('filled');

  // fill in balls count
  const $balls = $gameStatus.find('.game-status__balls span');
  for (let ball = 0; ball < data.atBatBalls; ball++) {
    $balls.eq(ball).addClass('full');
  }

  // fill in strikes count
  const $strikes = $gameStatus.find('.game-status__strikes span');
  for (let strike = 0; strike < data.atBatStrikes; strike++) {
    $strikes.eq(strike).addClass('full');
  }

  // fill in outs count
  const $outs = $gameStatus.find('.game-status__outs span');
  for (let out = 0; out < data.halfInningOuts; out++) {
    $outs.eq(out).addClass('full');
  }

  // highlight interesting events
  let containerClasses = [];

  if (gameEv.mlustard.out && gameEv.mlustard.outMeta.kind === 'strike') {
    containerClasses.push('strikeout');
  }

  if (gameEv.mlustard.hit) {
    containerClasses.push('hit');
  }

  if (gameEv.mlustard.steal && gameEv.mlustard.stealMeta.success) {
    containerClasses.push('steal');
  }

  if (gameEv.mlustard.special) {
    containerClasses.push('special');
  }

  if (gameEv.mlustard.maximumBlaseball) {
    containerClasses.push('max');
  }

  if (gameEv.mlustard.runsScored || gameEv.mlustard.unrunsScored) {
    containerClasses.push('score');
  }

  if (containerClasses.length) {
    containerClasses.forEach((className) => {
      $(`.scroll-to.${className}`).removeClass('d-none');
    });

    containerClasses.push('interesting');
  }

  $gameEv
    .attr('id', '')
    .removeClass('d-none')
    .addClass(containerClasses);

  ret.push($gameEv);

  return ret;
};

// set game title and matchup
let headerRendered = false;

const headerNotRendered = (gameEv) => {
  return !headerRendered && gameEv.ev.data.homePitcherName && gameEv.ev.data.awayPitcherName;
};

const renderHeader = (gameEv) => {
  let homeEmoji = util.getEmoji('home', gameEv.ev.data);
  let awayEmoji = util.getEmoji('away', gameEv.ev.data);

  $('.game-events__game-header .game-name')
    .text(`Season ${gameEv.ev.data.season + 1}, Day ${gameEv.ev.data.day + 1}`);
  $('.game-events__game-header .matchup')
    .text(`${gameEv.ev.data.homeTeamName} vs. ${gameEv.ev.data.awayTeamName}`);
  $('.game-events__game-subheader .home-pitcher')
    .text(`${homeEmoji} ${gameEv.ev.data.homePitcherName}`);
  $('.game-events__game-subheader .away-pitcher')
    .text(`${awayEmoji} ${gameEv.ev.data.awayPitcherName}`);
  headerRendered = true;
};

const render = (settings) => {
  gameEvents = settings.gameEvents;
  onStartPreview = settings.onStartPreview;
  onEndPreview = settings.onEndPreview;

  $('.game-events__container').removeClass('d-none');
  $('.game-events__info').addClass('d-none');

  const $container = $('#game-events__form-items');

  for (let id in gameEvents) {
    let gameEv = gameEvents[id];

    if (headerNotRendered(gameEv)) {
      renderHeader(gameEv);
    }

    let $gameEv = renderGameEv(gameEv, $container);

    if ($gameEv) {
      $container.append($gameEv);
    }
  }

  bindHandlers();
};

// todo: will send highlights data to flask to save
const saveHighlights = () => {
};

const bindSaveAndPublish = () => {
  const $highlightsSelectForm = $('#game-events__form');

  $highlightsSelectForm.on('submit', (ev) => {
    ev.preventDefault();
    saveHighlights();
    //generateHighlights(onPreview);
  });

};

const bindPreview = () => {
  const $highlightsSelectForm = $('#game-events__form');

  $highlightsSelectForm.find('.preview-story').on('click', (ev) => {
    generateHighlights(onStartPreview);
  });
};

const bindCheckboxes = () => {
  const $checkAll = $('#check-all');

  $('#check-all').on('change', () => {
    let state = $checkAll.is(':checked');

    $('.game-event-form__check').each((_, ch) => {
      $(ch).attr('checked', state);
    });
  });

  $('#game-events__form-items').on('change', '.game-event-form__check', (evt) => {
    $checkbox = $(evt.target);
    let state = $checkbox.is(':checked');

    $checkbox
      .closest('.game-event')
      .find('.preview-from-button')
      .attr('disabled', !state);
  });
};

const bindStatusToggle = () => {
  const $statusToggle = $('.game-events-control__status');

  $statusToggle.on('click', (evt) => {
    const $button = $(evt.target);
    const $formItems = $('#game-events__form-items');

    if ($button.hasClass('hide-status')) {

      $button.addClass('d-none');
      $statusToggle.find('.show-status').removeClass('d-none');
      $formItems.removeClass('show-status');

    } else if ($button.hasClass('show-status')) {

      $button.addClass('d-none');
      $statusToggle.find('.hide-status').removeClass('d-none');
      $formItems.addClass('show-status');

    }
  });
};

const bindJumpButtons = () => {
  $('.scroll-to').on('click', (evt) => {
    const $button = $(evt.target);
    const $itemsContainer = $('#game-events__form-items')
    const containerOffTop = $itemsContainer.offset().top;
    const $items = $itemsContainer.children();

    let lookup = '.interesting';

    if ($button.hasClass('strikeout')) {
      lookup += '.strikeout';
    } else if ($button.hasClass('hit')) {
      lookup += '.hit';
    } else if ($button.hasClass('steal')) {
      lookup += '.steal';
    } else if ($button.hasClass('special')) {
      lookup += '.special';
    } else if ($button.hasClass('max')) {
      lookup += '.max';
    } else if ($button.hasClass('score')) {
      lookup += '.score';
    } else if ($button.hasClass('inning')) {
      lookup = '#game-events__form .inning';
    }

    // if the form hasn't been scrolled much, search from the first event
    // otherwise, search from first element in view onwards
    let $firstInView = $items.filter((_, el) => {
      const $el = $(el);
      return ($el.offset().top - containerOffTop) > 0 && ($el.offset().top - containerOffTop < 100);
      // the 100 is hard-coded here; it's roughly the height of each $el
      // yup, this is probably super cursed.
    });

    if (!$firstInView.length) {
      $firstInView = $items.first();
    }

    // look for next sibling that matches the type we're looking for
    let $lookup = $firstInView.nextAll(lookup).first();

    // if there's no match looking forward, loop from the top
    if (!$lookup.length) {
      $lookup = $(lookup).first();
    }

    $itemsContainer
      .scrollTop(0)
      .scrollTop($lookup.offset().top - containerOffTop);
  });
};

const bindHandlers = () => {
  bindSaveAndPublish();
  bindPreview();
  bindCheckboxes();
  bindStatusToggle();
  bindJumpButtons();
};

module.exports = {
  render,
};

