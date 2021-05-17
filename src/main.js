const gameEventSelector = require('./game-event-selector');
const dialog = require('./dialog');
const visual = require('./visual');
const downloader = require('./downloader');
const teamsData = require('../lib/teams-data');

global.highlights = [];
let curHighlight = 0;
let intro = true;

const DIAMOND_COLOURS = {
  mound: 'ffcf56',
  moundOutline: '003049',
  bases: 'ff9770',
  basesOutline: '003049',
  grass: '2b9348',
  grassOutline: '2b9348',
  dirt: 'ffcf56',
  dirtOutline: 'fff',
  foulZone: 'edead0',
  foulZoneOutline: 'edead0',
};

const getHighlights = () => {
  return {
    prev: highlights[curHighlight - 1],
    cur: highlights[curHighlight],
    next: highlights[curHighlight + 1],
  };
};

const nextHighlight = (skipAnimation) => {
  const hls = getHighlights();

  visual.showVisual(hls.cur.visual);
  visual.updateDiamond(hls);
  dialog.startHighlight(hls, skipAnimation);
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
      nextHighlight(true);
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
      nextHighlight(true);
    }
  }
};

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
  $home
    .attr('src', `./images/logo-${hNick}.png`)
    .attr('alt', `${gameEv.homeTeamName}`);
  $away
    .attr('src', `./images/logo-${aNick}.png`)
    .attr('alt', `${gameEv.awayTeamName}`);
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
  const $grass = $diamond.find('.diamond-svg__grass');
  const $dirt = $diamond.find('.diamond-svg__dirt');
  const $foulZone = $diamond.find('.diamond-svg__foul-zone');
  const $mound = $diamond.find('.diamond-svg__mound');
  const $bases = $diamond.find('.diamond-svg__base');
  const $logo = $('.diamond-logo');

  // colour the mound
  // tries mound colour, or sets official as default
  $mound
    .attr('fill', `#${homeTeam.colours.mound || homeTeam.colours.official}`)
    .attr('stroke', `#${homeTeam.colours.moundOutline || DIAMOND_COLOURS.moundOutline}`);

  // colour the bases
  // tries bases colour, or sets official as default
  $bases
    .attr('fill', `#${homeTeam.colours.bases || homeTeam.colours.official}`)
    .attr('stroke', `#${homeTeam.colours.basesOutline || DIAMOND_COLOURS.basesOutline}`);

  // colour the grass
  $grass.first()
      .attr('fill', `#${homeTeam.colours.grass || DIAMOND_COLOURS.grass}`)
      .attr('stroke', `#${homeTeam.colours.grassOutline || DIAMOND_COLOURS.grassOutline}`);
    $grass.last()
      .attr('fill', `#${homeTeam.colours.grass || DIAMOND_COLOURS.grass}`)
      .attr('stroke', `#${homeTeam.colours.dirtOutline || DIAMOND_COLOURS.grassOutline}`);

  // colour the dirt
  $dirt
    .attr('fill', `#${homeTeam.colours.dirt || DIAMOND_COLOURS.dirt}`)
    .attr('stroke', `#${homeTeam.colours.dirtOutline || DIAMOND_COLOURS.dirtOutline}`);

  // colour the foul zone
  $foulZone
      .attr('fill', `#${homeTeam.colours.foulZone || DIAMOND_COLOURS.foulZone}`)
      .attr('stroke', `#${homeTeam.colours.foulZoneOutline || DIAMOND_COLOURS.foulZoneOutline}`);

  // update the diamond svg
  $('#diamond__image')
    .css('background-image', 'url(data:image/svg+xml;base64,'+ btoa($diamond.html()) + ')');

  // draw home logo behind home plate
  $logo
    .attr('src', homeTeam.stadiumLogoURL || homeTeam.homeLogoURL)
    .toggleClass('m-outline', homeTeam.stadiumLogoOutline);

  //$('.mound-logo').first().attr('src', homeTeam.homeLogoURL);

  // focus on the body so arrow keyups can be registered
  $('body').focus();

  nextHighlight(true);
};

const onHighlightsReady = (hls) => {

  $('#game-event-form').addClass('d-none');
  $('#visuals').removeClass('d-none');
  $('#highlights-dialog__container').removeClass('d-none');

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
    //downloader.init();
  }
};

initApp();

