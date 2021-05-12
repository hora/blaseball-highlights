const gameEventSelector = require('./game-event-selector');
const dialog = require('./dialog');
const visual = require('./visual');
const downloader = require('./downloader');
const teamsData = require('../lib/teams-data');

global.highlights = [];
let curHighlight = 0;
let intro = true;

const getHighlights = () => {
  return {
    prev: highlights[curHighlight - 1],
    cur: highlights[curHighlight],
    next: highlights[curHighlight + 1],
  };
};

const nextHighlight = () => {
  const hls = getHighlights();

  visual.showVisual(hls.cur.visual);
  visual.updateDiamond(hls);
  dialog.startHighlight(hls);
};

const continueHighlight = () => {
  return dialog.continueHighlight(getHighlights());
};

const reverseHighlight = () => {
  return dialog.reverseHighlight(getHighlights());
};

const playHighlight = (direction) => {

  if (direction === 'next') {
    // try to advance the highlight, if there's more text to animate
    if (!continueHighlight()) {

      // do nothing if there's no more highlights
      if (highlights.length - 1 === curHighlight) { return };

      curHighlight++;

      // if there are no more highlights, don't advance
      if (highlights.length === curHighlight) {
        return;
      }

      // otherwise, show the next highlight
      nextHighlight();
    }
  } else {
    // try to reverse highlight, if there was previous text to animate
    if (!reverseHighlight()) {

      // do nothing if there's no previous highlights
      if (curHighlight === 0) { return };

      curHighlight--;

      // if there are no previous highlights, don't reverse
      if (curHighlight < 0) {
        return;
      }

      // todo: fix the naming, oh gods this is cursed
      nextHighlight();
    }
  }
};

const handleAction = (evt) => {
  let direction;

  if (evt.type === 'keyup') {
    if (evt.keyCode === 37) { // arrow left
      direction = 'prev';
    } else if (evt.keyCode === 39) {
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

  playHighlight(direction);
};

const setupIntro = () => {
  // grab game info from first highlight
  const gameEv = highlights[0].gameEvent.data;
  const $home = $('.vs-logo__home');
  const $away = $('.vs-logo__away');

  let hNick = gameEv.homeTeamNickname.split(' ').pop().toLowerCase();
  let aNick = gameEv.awayTeamNickname.split(' ').pop().toLowerCase();

  if (aNick === 'mechanics') {
    aNick += '-away';
  }

  $('.game-name').text(`Season ${gameEv.season + 1}, Day ${gameEv.day + 1}`);
  $home.attr('src', `./images/logo-${hNick}.png`);
  $away.attr('src', `./images/logo-${aNick}.png`);
  $('.diamond-header .matchup').text(`${gameEv.homeTeamName} vs. ${gameEv.awayTeamName}`);

  // georgias don't have a standard size logo
  if (hNick === 'georgias') {
    $home.css('height', 'auto');
  }

  if (aNick === 'georgias') {
    $away.css('height', 'auto');
  }

  // set the diamond colours and add the diamond css
  const homeTeam = teamsData[gameEv.homeTeam];
  const $diamond = $('#diamond-svg');
  const $grass = $diamond.find('.grass');
  const $dirt = $diamond.find('.dirt');
  const $neutral = $diamond.find('.neutral');
  const $mound = $diamond.find('.mound');

  $grass.first()
    .attr('fill', `#${homeTeam.colours.grass}`)
    .attr('stroke', `#${homeTeam.colours.grass}`);
  $grass.last()
    .attr('fill', `#${homeTeam.colours.grass}`)
    .attr('stroke', `#${homeTeam.colours.dirtOutline}`);

  $dirt
    .attr('fill', `#${homeTeam.colours.dirt}`)
    .attr('stroke', `#${homeTeam.colours.dirtOutline}`);

  $mound
    .attr('fill', `#${homeTeam.colours.main}`)
    .attr('stroke', `#${homeTeam.colours.dirtOutline}`);

  $neutral
    .attr('fill', `#${homeTeam.colours.neutral}`)
    .attr('stroke', `#${homeTeam.colours.neutral}`);

  $('#diamond__image')
    .css('background-image', 'url(data:image/svg+xml;base64,'+ btoa($diamond.html()) + ')');

  $('.mound-logo').first().attr('src', homeTeam.homeLogoURL);

  nextHighlight();
};

const onHighlightsReady = (hls) => {
  highlights = hls;

  setupIntro();

  $(document).on('keyup', handleAction);
  $('.dialog-control').on('click', handleAction);
};

const initApp = () => {
  const highlightsData = $('#highlights-json').attr('data');

  // skip first steps and go straight to showing the reel if it's a published
  // story
  if (highlightsData.length) {
    onHighlightsReady(JSON.parse(highlightsData));
    //highlights = JSON.parse(highlightsData);
  } else {
    gameEventSelector.init(onHighlightsReady);
    downloader.init();
  }
};

initApp();

