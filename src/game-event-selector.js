const mlustard = require('mlustard');

const Highlight = require('./highlight');
const util = require('./util');

let gameEvents = {};
let highlights = [];

const getRandomGame = () => {
  const games = [
    // internet series championship games, starting season 2
    'https://reblase.sibr.dev/game/97d88b9e-406d-4f31-a18f-2a3b903edc03',
    'https://reblase.sibr.dev/game/b38e0917-43da-470c-a7bb-5712368a2492',
    'https://reblase.sibr.dev/game/628a2ddb-f608-411b-8d2e-2768cd36d58b',
    'https://reblase.sibr.dev/game/52f6274e-e0dc-4c23-87e8-686f6d2b2bbf',
    'https://reblase.sibr.dev/game/10538840-1f72-4a90-98e5-724a9dc5d061',
    'https://reblase.sibr.dev/game/9d85897e-e689-4eeb-b2ae-b69679a3ebc7',
    'https://reblase.sibr.dev/game/ee35a868-b004-449f-a99c-6a40ca54b382',
    'https://reblase.sibr.dev/game/06566f8d-3d14-4956-b054-36dc981fd589',
    'https://reblase.sibr.dev/game/704ddf2f-3fe2-48b3-b674-b94765f70d01',
    'https://reblase.sibr.dev/game/47bcac42-f651-4fc9-9f93-5567a7b10daf',
    'https://reblase.sibr.dev/game/0f19d78d-c27d-4146-863d-b55e6dae1679',
    'https://reblase.sibr.dev/game/1506b88f-1fea-4ba1-9256-1ebb030cdcae',
    'https://reblase.sibr.dev/game/b2cafd20-a799-48f6-abd7-c99bd79a6bd1',
    'https://reblase.sibr.dev/game/2bc6e86e-8d25-4e37-9026-780d8b6969c5',
    'https://reblase.sibr.dev/game/462481f4-7f97-441c-9fc9-c3dc3c5844a4',
    'https://reblase.sibr.dev/game/11a8a7d3-460b-4c99-a98a-b0bd1f577073',
    'https://reblase.sibr.dev/game/823dfcb6-dddb-43f4-90ff-eac05827a82e',
    'https://reblase.sibr.dev/game/f7ad7826-ca6e-49c2-818e-190408b046fe',

    // other games
    // s3d100 (riv landry)
    'https://reblase.sibr.dev/game/aa1b7fde-f077-4e4b-825f-0d1538d02822',
  ];

  return games[Math.floor(Math.random() * (games.length - 1))];
};

const isPlayBall = (gameEv) => {
  return gameEv.lastUpdate.indexOf('Play ball') >= 0;
};

const generateHighlights = (cb) => {
  $('.game-event__container input:checked').each((_, checked) => {
    const id = $(checked).attr('id');
    let visual = 'diamond';

    if (isPlayBall(gameEvents[id].ev.data)) {
      visual = 'matchup';
    }

    const hl = new Highlight({
      id: id,
      gameEvent: gameEvents[id].ev,
      mlustard: gameEvents[id].mlustard,
      visual,
    });

    //const hl = highlight.makeHighlight({
      //id: id,
      //gameEvent: gameEvents[id].ev,
      //mlustard: gameEvents[id].mlustard,
      //visual,
    //});

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

  // check for half-inning changes
  if (gameEv.mlustard.gameStatus === 'beforeFirstPitch') {
    $('<h3>')
      .addClass('inning inning-top')
      .text(`Top of 1`)
      .appendTo($container);
  } else if (gameEv.mlustard.gameStatus === 'firstHalfInningStart' && data.inning) {
    $('<h3>')
      .addClass('inning inning-top')
      .text(`Top of ${data.inning + 1}`)
      .appendTo($container);
  } else if (gameEv.mlustard.gameStatus === 'secondHalfInningStart') {
    $('<h3>')
      .addClass('inning inning-bottom')
      .text(`Bottom of ${data.inning + 1}`)
      .appendTo($container);
  }

  const $gameEv = $('<div>');

  // form stuff
  const $chContainer = $('<div>');
  const $check = $('<input>');
  const $label = $('<label>');

  let update = `${data.lastUpdate} ${data.scoreUpdate || ''}`;

  $check
    .addClass('game-event__check')
    .attr('id', gameEv.ev.hash)
    .attr('type', 'checkbox')
    .attr('name', 'game event')
    .val('');

  $label
    .addClass('')
    .attr('for', gameEv.ev.hash)
    .text(update);

  $chContainer
    .addClass('')
    .append($check)
    .append($label);

  // game event info
  const $gameEvInfo = $('<div>');
  const $score = $('<span>');
  const $bases = $('<span>');
  const $balls = $('<span>');
  const $strikes = $('<span>');
  const $outs = $('<span>');

  let homeEmoji = util.getEmoji('home', data);
  let awayEmoji = util.getEmoji('away', data);

  let score = `${homeEmoji} ${data.homeScore} : ${awayEmoji} ${data.awayScore}`;
  let bases = '';

  // fill in balls count
  for (let ball = 0; ball < data.atBatBalls; ball++) {
    $balls.append(makeCountCircle('circle full'));
  }

  for (let ball = 3; ball > data.atBatBalls; ball--) {
    $balls.append(makeCountCircle('circle empty'));
  }

  // fill in strikes count
  for (let strike = 0; strike < data.atBatStrikes; strike++) {
    $strikes.append(makeCountCircle('circle full'));
  }

  for (let strike = 2; strike > data.atBatStrikes; strike--) {
    $strikes.append(makeCountCircle('circle empty'));
  }

  // fill in outs count
  for (let out = 0; out < data.halfInningOuts; out++) {
    $outs.append(makeCountCircle('circle full'));
  }

  for (let out = 2; out > data.halfInningOuts; out--) {
    $outs.append(makeCountCircle('circle empty'));
  }

  // fill in base diamonds
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.third.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.second.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.first.playerName));
  // todo: deal with 4 bases
  //$bases.append(makeBaseDiamond(gameEv.mlustard.baseRunners.first.playerName));

  $score
    .text(score);
  $balls
    .attr('title', 'Balls')
    .addClass('balls-count');
  $strikes
    .attr('title', 'Strikes')
    .addClass('strikes-count');
  $outs
    .attr('title', 'Outs')
    .addClass('outs-count');
  $bases
    .attr('title', 'Bases occupied')
    .addClass('bases-occupied');

  $gameEvInfo
    .addClass('')
    .append($score)
    .append($bases)
    .append($balls)
    .append($strikes)
    .append($outs);

  let containerClasses = ['game-event__container'];

  // highlight interesting events
  // todo: when refactoring this whole cursed file, also don't do so many
  // dom lookups here
  if (gameEv.mlustard.out && gameEv.mlustard.outMeta.kind === 'strike') {

    containerClasses.push('interesting strikeout');
    $('.scroll-to.strikeout').removeClass('d-none');

  }

  if (gameEv.mlustard.hit) {

    containerClasses.push('interesting hit');
    $('.scroll-to.hit').removeClass('d-none');

  }

  if (gameEv.mlustard.steal && gameEv.mlustard.stealMeta.success) {

    containerClasses.push('interesting steal');
    $('.scroll-to.steal').removeClass('d-none');

  }

  if (gameEv.mlustard.special) {

    containerClasses.push('interesting special');
    $('.scroll-to.special').removeClass('d-none');

  }

  if (gameEv.mlustard.maximumBlaseball) {

    containerClasses.push('interesting max');
    $('.scroll-to.max').removeClass('d-none');

  }

  if (gameEv.mlustard.runsScored || gameEv.mlustard.unrunsScored) {

    containerClasses.push('interesting score');
    $('.scroll-to.score').removeClass('d-none');

  }

  $gameEv
    .addClass(containerClasses)
    .append($chContainer)
    .append($gameEvInfo);

  return $gameEv;
};

const renderGameEvs = () => {
  stopLoading();
  $('.game-events__container').removeClass('d-none');
  $('.game-events__info').addClass('d-none');

  const $container = $('#game-events__form-items');

  // set game title and matchup
  let headerRendered = false;
  // gotta render some general stuff too (home vs away, s#d#, weather)
  // also: label for the select, and the select itself
  for (let id in gameEvents) {
    let gameEv = gameEvents[id];

    if (!headerRendered && gameEv.ev.data.homePitcherName && gameEv.ev.data.awayPitcherName) {
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
    }

    let $gameEv = renderGameEv(gameEv, $container);

    if ($gameEv) {
      $container.append($gameEv);
    }
  }
};

const getGameEvents = (gameId, nextPage) => {
  let gamesURL = `https://api.sibr.dev/chronicler/v1/games/updates?game=${gameId}`;

  if (nextPage) {
    gamesURL += `&page=${nextPage}`;
  }

  startLoading();

  fetch(gamesURL)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Bad response from server');
      }

      return resp.json();
    })
    .then((data) => {
      for (let gameEv of data.data) {
        gameEvents[gameEv.hash] = {
          ev: gameEv,
          mlustard: mlustard.analyzeGameEvent(gameEv.data),
        };
      }

      if (data.nextPage) {
        getGameEvents(gameId, data.nextPage);
      } else {
        // done loading all game events
        renderGameEvs();
        console.debug('getGameEvents done:', gameEvents);
      }
    })
    .catch((err) => {
      console.error(err);
      $('#game-load-form .error-msg').removeClass('d-none');
      stopLoading();
    });

};

const startLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('.error-msg').addClass('d-none');
  $gameEvForm.find('button').addClass('d-none');
  $gameEvForm.find('.loading').removeClass('d-none');
};

const stopLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('button').removeClass('d-none');
  $gameEvForm.find('.loading').addClass('d-none');
};

const init = (highlightsReadyCb) => {
  const $gameEvForm = $('#game-load-form');
  const $gameInput = $('#game-load-form__game-id');

  // focus on game input
  $gameInput.focus();

  // pick a random interesting game as the placeholder for the input
  $gameInput.attr('placeholder', getRandomGame());

  $gameEvForm.on('submit', (ev) => {
    ev.preventDefault();

    let gameVal = $gameInput.val();

    if (!gameVal) {
      gameVal = $gameInput.attr('placeholder');
    }

    const gameId = gameVal.split('/').pop();
    getGameEvents(gameId);
  });

  const $highlightsSelectForm = $('#game-events__form');

  $highlightsSelectForm.on('submit', (ev) => {
    ev.preventDefault();
    generateHighlights(highlightsReadyCb);
  });

  const $checkAll = $('#check-all');

  $('#check-all').on('change', () => {
    let state = $checkAll.is(':checked');

    $('.game-event__check').each((_, ch) => {
      $(ch).attr('checked', state);
    });
  });

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
      // yes. this is probably super cursed.
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

module.exports = {
  init,
};

