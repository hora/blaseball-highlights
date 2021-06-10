const Highlight = require('./highlight');
const util = require('./util');
const teamsData = require('../lib/teams-data');

let onStartPreview;
let onEndPreview;
let onSaveAndPublish;

const isPlayBall = (gameEv) => {
  return gameEv.lastUpdate.indexOf('Play ball') >= 0;
};

const generateHighlights = (cb, gameEvents, startFrom, savedEvents) => {
  let highlights = [];

  if (savedEvents) {

    const savedEventsObj = {};

    for (let savedEv of savedEvents) {
      savedEventsObj[savedEv.blaseball_event_id] = savedEv;
    }

    for (let gameEvId in gameEvents) {
      const savedEv = savedEventsObj[gameEvId];

      if (savedEv) {
        const gameEvent = gameEvents[savedEv.blaseball_event_id];
        const commentary = savedEv.description;
        const visual = savedEv.visual.type;
        const visualMeta = savedEv.visual.meta;

        const hl = new Highlight({
          id: savedEv.blaseball_event_id,
          gameEvent: gameEvent.ev,
          mlustard: gameEvent.mlustard,
          commentary,
          visual,
          visualMeta,
        });

        highlights.push(hl);
      }
    }

    console.debug('generateHighlights:', highlights);
    cb(highlights, null, null, null);

  } else {

    $('#game-events__form-items .game-event-check__input:checked')
    .each((_, checked) => {
      const $checked = $(checked);
      const id = $checked.attr('id');
      const gameEvent = gameEvents[id];
      const $gameEv = $checked.closest('.game-event');
      const commentary = $gameEv.find('.game-event-update__textarea').val();
      const visual = $gameEv.find('.visual-select').val();
      const visualMeta = {};

      if (visual === 'custom') {
        visualMeta.imageData = $gameEv.find('.visual-preview-custom').attr('src');
        visualMeta.imageTitle = $gameEv.find('.image-meta__title').val();
        visualMeta.imageDescription = $gameEv.find('.image-meta__id').val();
        visualMeta.creator = $gameEv.find('.image-meta__creator').val();
        visualMeta.creatorLink = $gameEv.find('.image-meta__link').val();
      }

      const hl = new Highlight({
        id: id,
        gameEvent: gameEvent.ev,
        mlustard: gameEvent.mlustard,
        commentary,
        visual,
        visualMeta,
      });

      highlights.push(hl);
    });

    const $title = $('#game-events__form-items .story-title__input');
    const $creator = $('#game-events__form-items .story-creator__input');
    let title = $title.val();
    let creator = $creator.val();

    if (!title) {
      title = $title.attr('placeholder');
    }

    if (!creator) {
      creator = 'Anonymous';
    }

    console.debug('generateHighlights:', highlights);
    cb(highlights, startFrom, title, creator);
  }

};

const renderGameEv = (gameEv) => {
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

    // also render the story title and user name if it's before first pitch
    const $title = $('#story-title__template').clone();

    $title
      .attr('id', '')
      .removeClass('d-none');

    $title
      .find('label')
      .first()
      .attr('for', `story-title${gameEv.ev.gameId}`);

    $title
      .find('input')
      .first()
      .attr('placeholder', `${data.awayTeamName} at ${data.homeTeamName}`)
      .attr('id', `story-title${gameEv.ev.gameId}`);

    $title
      .find('label')
      .last()
      .attr('for', `story-creator${gameEv.ev.gameId}`);

    $title
      .find('input')
      .last()
      .attr('id', `story-creator${gameEv.ev.gameId}`);

    ret.push($title);

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

  // update visual select options and ids
  const $visualSelect = $gameEv.find('.visual-select');

  $visualSelect.attr('id', `visual-select-${gameEv.ev.hash}`);
  if (isPlayBall(gameEv.ev.data)) {
    $visualSelect.val('matchup').change();
  } else {
    $gameEv.find('.visual-preview-diamond').removeClass('d-none');
  }

  const $customForm = $gameEv.find('.custom-visual-form');

  $customForm.attr('id', `custom-visual-form-${gameEv.ev.hash}`);
  // todo: there's more than 1 input, fix this
  $customForm
    .find('label')
    .attr('for', `custom-visual__input-${gameEv.ev.hash}`);
  $customForm
    .find('input')
    .attr('id', `custom-visual__input-${gameEv.ev.hash}`);

  // game status
  const $gameStatus = $gameEv.find('.game-event-game-status');

  // score
  const $homeScore = $gameStatus.find('.scoreboard-teams__home span');
  const $awayScore = $gameStatus.find('.scoreboard-teams__away span');

  $homeScore.first().text(teamsData[data.homeTeam].shorthand);
  $homeScore.last().text(data.homeScore);

  $awayScore.first().text(teamsData[data.awayTeam].shorthand);
  $awayScore.last().text(data.awayScore);

  // bases are from third to first
  const $bases = $gameStatus.find('.scoreboard-bases');
  $bases.empty();
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.third.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.second.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.first.playerName));

  // count
  const $count = $gameStatus.find('.scoreboard-count__count span');
  $count.first().text(data.atBatBalls);
  $count.last().text(data.atBatStrikes);
  const $outs = $gameStatus.find('.scoreboard-count__outs span');
  $outs.text(data.halfInningOuts);

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
    .text(`${gameEv.ev.data.awayTeamName} at ${gameEv.ev.data.homeTeamName}`);
  $('.game-events__game-subheader .away-pitcher')
    .text(`${awayEmoji} ${gameEv.ev.data.awayPitcherName}`);
  $('.game-events__game-subheader .home-pitcher')
    .text(`${homeEmoji} ${gameEv.ev.data.homePitcherName}`);

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
  onSaveAndPublish = settings.onSaveAndPublish;
  const storyData = settings.storyData;
  const savedEvents = storyData?.events || [];

  $('.game-events__container').removeClass('d-none');
  $('.game-events__info').addClass('d-none');

  const $container = $('#game-events__form-items');
  $container.empty();
  headerRendered = false;

  for (let id in gameEvents) {
    let gameEv = gameEvents[id];

    if (headerNotRendered(gameEv)) {
      renderHeader(gameEv);
    }

    if (homePitcherReady(gameEv)) {
      updateHomePitcher(gameEv);
    }

    let $gameEv = renderGameEv(gameEv);

    if ($gameEv) {
      $container.append($gameEv);
    }
  }

  // this is gross, but duct tape is easier (for now shhhh)
  if (savedEvents.length) {
    $('.game-events__header .buttons-wrapper button').prop('disabled', true);

    for (let savedEv of savedEvents) {
      const $check = $(`#${savedEv.blaseball_event_id}`);

      // so this is cursed: if we got to the page by editing an old story,
      // then decided to load a new game, we still have savedEvents; but, they
      // won't find any checked events
      if ($check.length) {

        // ughhhh.. this should only happen once but .. well here we are
        $('#game-events__form-items .story-title__input').val(storyData.story.title);
        $('#game-events__form-items .story-creator__input').val(storyData.user.username);


        $check.prop('checked', true);
        $('.game-events__header .buttons-wrapper button').prop('disabled', false);
        $gameEv = $check.closest('.game-event');
        $gameEv.find('.game-event-update__textarea').val(savedEv.description);
        $gameEv.find('.game-event-preview__link').removeClass('disabled');
        $gameEv.find('.visual-select').val(savedEv.visual.type);

        if (savedEv.visual.type === 'custom') {
          const $custom = $gameEv.find('.custom-visual-form');

          $custom
            .find('.visual-preview-custom')
            .attr('src', savedEv.visual.meta.imageData)
            .removeClass('d-none');
          $custom
            .find('.image-meta__title').val(savedEv.visual.meta.imageTitle);
          $custom
            .find('.image-meta__id').val(savedEv.visual.meta.imageDescription);
          $custom
            .find('.image-meta__creator').val(savedEv.visual.meta.creator);
          $custom
            .find('.image-meta__link').val(savedEv.visual.meta.creatorLink);
          $custom.removeClass('d-none');
          $custom.find('.custom-visual__image-meta').removeClass('d-none');
        }

      }
    }
  }

  bindHandlers(gameEvents);
};

const bindSaveAndPublish = (gameEvents) => {
  const $highlightsSelectForm = $('#game-events__form');

  $highlightsSelectForm.off('submit').on('submit', (evt) => {
    evt.preventDefault();
    generateHighlights(onSaveAndPublish, gameEvents);
  });

  $('.save-story').off('click').on('click', (evt) => {
    generateHighlights(onSaveAndPublish, gameEvents);
  });
};

const bindPreview = (gameEvents) => {
  const $highlightsSelectForm = $('#game-events__form');

  $('.preview-story').off('click').on('click', (ev) => {
    generateHighlights(onStartPreview, gameEvents);
  });

  $highlightsSelectForm.find('.game-event-preview__link').off('click').on('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const $link = $(evt.target);

    if ($link.hasClass('disabled')) {
      return;
    }

    const id = $link
      .closest('.game-event').find('.game-event-check__input').attr('id');

    generateHighlights(onStartPreview, gameEvents, id);
  });
};

const togglePreviewAll = () => {
  const state = $('.game-event-check__input:checked').length;

  $('.preview-story')
    .prop('disabled', !state);
  $('.save-story')
    .prop('disabled', !state);
};

const togglePreview = ($checkbox) => {
  let state = $checkbox.is(':checked');

  $checkbox
    .closest('.game-event')
    .find('.game-event-preview__link')
    .toggleClass('disabled', !state);
};

const bindCheckboxes = () => {
  const $checkAll = $('#check-all');

  $('#check-all').off('change').on('change', () => {
    let state = $checkAll.is(':checked');

    $('.game-event-check__input').each((_, ch) => {
      const $ch = $(ch);

      $ch.prop('checked', state);
      togglePreview($ch);
    });

    togglePreviewAll();
  });

  $('#game-events__form-items').off('change').on('change', '.game-event-check__input', (evt) => {
    const $ch = $(evt.target);

    togglePreview($ch);
    togglePreviewAll();
  });
};

const bindJumpButtons = () => {
  $('.scroll-to').off('click').on('click', (evt) => {
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

  $(window).off('scroll').on('scroll', () => {
    $stickyHeader.toggleClass('sticky', window.pageYOffset > stickyOffset);
  });
};

const bindVisuals = () => {
  $('.custom-visual-form').off('submit').on('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
  });

  $('.visual-select').off('change').on('change', (evt) => {
    const $select = $(evt.target);
    const val = $select.val();
    const $visual = $select.closest('.game-event-visual');

    $visual.find('.visual-preview').addClass('d-none');

    if (val === 'custom') {
      const $preview = $visual.find('.visual-preview-custom');

      $visual.find('.custom-visual-form').removeClass('d-none');

      if ($preview.attr('src') !== '#') {
        $preview.removeClass('d-none');
      }
    } else {
      $visual.find('.custom-visual-form').addClass('d-none');
    }
  });

  $('.custom-visual__input').off('change').on('change', (evt) => {
    const file = evt.target.files[0];
    const $input = $(evt.target);
    const $form = $input.parent();
    const $preview = $input.closest('.game-event-visual').find('.visual-preview-custom');

    if (validateImage(file, $form)) {
      handleUploadedImage(file, $preview);
    }
  });
};

const validateImage = (file, $form) => {
  const $error = $form.find('.error-msg').addClass('d-none');

  if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
    $error
      .text('Sorry, only .png and .jp(e)g images are supported')
      .removeClass('d-none');

    return false;
  }

  if (file.size > 1000000) {
    $error
      .text('Sorry, the image has to be smaller than 1MB')
      .removeClass('d-none');

    return false;
  }

  return true;
};

const handleUploadedImage = (file, $preview) => {
  const reader = new FileReader();

  reader.addEventListener('load', (evt) => {
    $preview.attr('src', reader.result).removeClass('d-none');
    $preview.next('.custom-visual__image-meta').removeClass('d-none');
  });
  reader.readAsDataURL(file);
};

const bindHandlers = (gameEvents) => {
  bindSaveAndPublish(gameEvents);
  bindPreview(gameEvents);
  bindCheckboxes();
  bindJumpButtons();
  bindStickyHeader();
  bindVisuals();
};

module.exports = {
  render,
  generateHighlights,
};

