const Highlight = require('./highlight');
const util = require('./util');

let gameEvents;
let onStartPreview;
let onEndPreview;

const isPlayBall = (gameEv) => {
  return gameEv.lastUpdate.indexOf('Play ball') >= 0;
};

const generateHighlights = (cb, startFrom) => {
  let highlights = [];

  $('#game-events__form-items .game-event-check__input:checked')
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
  cb(highlights, startFrom);
};

const renderGameEv = (gameEv, $container) => {
  const data = gameEv.ev.data;

  if (!data.lastUpdate) {
    return;
  }

  let ret = [];
  let inning;
  let inningClasses;
  let homeEmoji = util.getEmoji('home', data);
  let awayEmoji = util.getEmoji('away', data);
  let topOfOne = false;

  // check for half-inning changes
  if (gameEv.mlustard.gameStatus === 'beforeFirstPitch') {

    inning = 'Top of 1';
    inningClasses = 'inning-top';
    // sometimes, the game event doesn't think it's the top of 1 if there are
    // some events before the first pitch, or something
    topOfOne = true;

  } else if (gameEv.mlustard.gameStatus === 'firstHalfInningStart' && data.inning) {

    inning = `Top of ${data.inning + 1}`;
    inningClasses = 'inning-top';

  } else if (gameEv.mlustard.gameStatus === 'secondHalfInningStart') {

    inning = `Bottom of ${data.inning + 1}`;
    inningClasses = 'inning-bottom';

  }

  if (inning) {
    const $inning = $('#inning-header__template').clone();

    $inning
      .attr('id', '')
      .addClass(inningClasses)
      .removeClass('d-none')
      .find('span')
      .text(inning);

    ret.push($inning);

    const $inningInfo = $('#inning-info__template').clone();
    const fielding = data.topOfInning ? 'home' : 'away';
    let fieldingTeam;
    let fieldingEmoji;
    let pitcher;
    let battingTeam;
    let battingEmoji;

    if (data.topOfInning || topOfOne) { // home fielding
      fieldingTeam = data.homeTeamName;
      fieldingEmoji = homeEmoji;
      pitcher = data.homePitcherName || 'home-pitcher-placeholder';
      battingTeam = data.awayTeamName;
      battingEmoji = awayEmoji;
    } else { // away fielding
      fieldingTeam = data.awayTeamName;
      fieldingEmoji = awayEmoji;
      pitcher = data.awayPitcherName;
      battingTeam = data.homeTeamName;
      battingEmoji = homeEmoji;
    }

    $inningInfo
      .attr('id', '')
      .removeClass('d-none')
      .find('.fielding')
      .text(`${fieldingEmoji}${fieldingTeam} fielding, with ${pitcher} pitching`);

    $inningInfo
      .find('.batting')
      .text(`${battingEmoji}${battingTeam} batting`);

    ret.push($inningInfo);
  }

  const $gameEv = $('#game-event__template').clone();

  $gameEv
    .find('.game-event-check__input')
    .attr('id', gameEv.ev.hash);

  $gameEv
    .find('textarea')
    .val(`${data.lastUpdate} ${data.scoreUpdate || ''}`);

  // game status
  const $gameStatus = $gameEv.find('.game-event-game-status');

  $gameStatus
    .find('.game-status__score')
    .text(`${homeEmoji} ${data.homeScore} : ${awayEmoji} ${data.awayScore}`);

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

let hpReady = false;

const homePitcherReady = (gameEv) => {
  if (hpReady) return false;

  return gameEv.ev.data.homePitcherName;
};

const updateHomePitcher = (gameEv) => {
  // hack: since at this point we know the home pitcher, check if we need to
  // update it in the table of game events for the top of 1st
  const $firstInning = $('#game-events__form-items .inning-info .fielding');

  if (!$firstInning.length) {
    return;
  }

  $firstInning
    .text($firstInning.text().replace('home-pitcher-placeholder', gameEv.ev.data.homePitcherName));
  hpReady = true;
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

    if (homePitcherReady(gameEv)) {
      updateHomePitcher(gameEv);
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

  $highlightsSelectForm.find('.game-event-preview__button').on('click', (ev) => {
    const id = $(ev.target)
      .closest('.game-event').find('.game-event-check__input').attr('id');

    generateHighlights(onStartPreview, id);
  });
};

const togglePreviewAll = (state) => {
  $('.preview-story')
    .prop('disabled', !state);
};

const togglePreview = ($checkbox) => {
  let state = $checkbox.is(':checked');

  $checkbox
    .closest('.game-event')
    .find('.game-event-preview__button')
    .prop('disabled', !state);
};

const bindCheckboxes = () => {
  const $checkAll = $('#check-all');

  $('#check-all').on('change', () => {
    let state = $checkAll.is(':checked');

    $('.game-event-check__input').each((_, ch) => {
      const $ch = $(ch);

      $ch.prop('checked', state);
      togglePreview($ch);
    });

    togglePreviewAll(state);
  });

  $('#game-events__form-items').on('change', '.game-event-check__input', (evt) => {
    const $ch = $(evt.target);

    togglePreview($ch);
    togglePreviewAll($ch.is(':checked'));
  });
};

const bindJumpButtons = () => {
  $('.scroll-to').on('click', (evt) => {
    const $button = $(evt.target);
    const $itemsContainer = $('#game-events__form-items')
    //const containerOffTop = $itemsContainer.offset().top;
    const $items = $itemsContainer.children();
    const headerHeight = $('.game-events__header').outerHeight();

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
      lookup += '.inning';
    }

    // find the first game event in view
    let $firstInView = $items.filter((_, el) => {
      const $el = $(el);
      return ($el.offset().top > window.pageYOffset + headerHeight) && ($el.offset().top < window.pageYOffset + $el.outerHeight() + headerHeight);
    });

    // if the page hasn't been scrolled beyond the start of the game events,
    // the first in view will be the first from the top
    if (!$firstInView.length) {
      $firstInView = $items.first();
    }

    // look for next sibling that matches the type we're looking for
    let $lookup = $firstInView.nextAll(lookup).first();

    // if there's no match looking forward, loop from the top
    if (!$lookup.length) {
      $lookup = $(lookup).first();
    }


    $(window)
      .scrollTop($lookup.offset().top - headerHeight);
  });
};

const bindStickyHeader = () => {
  const $stickyHeader = $('.game-events__header');
  const stickyOffset = $stickyHeader.offset().top;

  $(window).on('scroll', () => {
    $stickyHeader.toggleClass('sticky', window.pageYOffset > stickyOffset);
  });
};

const bindHandlers = () => {
  bindSaveAndPublish();
  bindPreview();
  bindCheckboxes();
  bindJumpButtons();
  bindStickyHeader();
};

module.exports = {
  render,
};

