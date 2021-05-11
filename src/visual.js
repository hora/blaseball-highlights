const util = require('./util');
const teamsData = require('../lib/teams-data');
const weather = require('../lib/weather');

const $diamond = $('#diamond');
const diamondLocations = {
  $mound: $diamond.find('.mound'),
  $batting: $diamond.find('.batting'),
  $first: $diamond.find('.first'),
  $second: $diamond.find('.second'),
  $third: $diamond.find('.third'),
};

const BASES = ['first', 'second', 'third']; // todo: 'fourth', 'secret'?

const drawBatter = (highlights) => {
  //const ml = highlight.mlustard;
  const cur = highlights.cur;
  const ge = cur.gameEvent.data;

  const team = ge.topOfInning ? 'away' : 'home';
  let nameWithEmoji = '';

  if (ge[`${team}BatterName`]) {
    const name = util.getPlayerNameWithInitial(ge[`${team}BatterName`]);
    nameWithEmoji = `${util.getEmoji(team, ge)} ${name}`;
  }

  diamondLocations['$batting']
    .text(nameWithEmoji);
};

const drawPitcher = (highlights) => {
  //const ml = highlight.mlustard;
  const cur = highlights.cur;
  const ge = cur.gameEvent.data;

  const team = ge.topOfInning ? 'home' : 'away';
  let nameWithEmoji = '';

  if (ge[`${team}PitcherName`]) {
    const name = util.getPlayerNameWithInitial(ge[`${team}PitcherName`]);
    nameWithEmoji = `${util.getEmoji(team, ge)} ${name}`;
  }

  diamondLocations['$mound']
    .text(nameWithEmoji);
};

const drawBaserunners = (highlights) => {
  const cur = highlights.cur;
  const ml = cur.mlustard;
  const ge = cur.gameEvent.data;

  const team = ge.topOfInning ? 'away' : 'home';

  if (ml && ml.baseRunners) {
    for (let base of BASES) {
      let name = ml.baseRunners[base].playerName;

      if (name) {
        let nameWithEmoji = `${util.getEmoji(team, ge)} ${util.getPlayerNameWithInitial(name)}`;
        diamondLocations[`$${base}`]
          .text(nameWithEmoji);
      } else {
        diamondLocations[`$${base}`]
          .text('');
      }
    }
  }
};

const drawScoreboard = (highlights) => {
  const cur = highlights.cur;
  const ml = cur.mlustard;
  const ge = cur.gameEvent.data;

  const $scoreboard = $('#diamond__scoreboard');

  // score
  const $home = $scoreboard.find('.scoreboard-teams__home span');
  $home.first().text(teamsData[ge.homeTeam].shorthand);
  $home.last().text(ge.homeScore);

  const $away = $scoreboard.find('.scoreboard-teams__away span');
  $away.first().text(teamsData[ge.awayTeam].shorthand);
  $away.last().text(ge.awayScore);

  // bases
  const $bases = $scoreboard.find('.scoreboard-bases');
  $bases.empty();
  $bases.append(util.makeBaseDiamond(ml.baseRunners.third.playerName));
  $bases.append(util.makeBaseDiamond(ml.baseRunners.second.playerName));
  $bases.append(util.makeBaseDiamond(ml.baseRunners.first.playerName));

  // count
  const $count = $scoreboard.find('.scoreboard-count__count span');
  $count.first().text(ge.atBatBalls);
  $count.last().text(ge.atBatStrikes);
  const $outs = $scoreboard.find('.scoreboard-count__outs span');
  $outs.text(ge.halfInningOuts);

  // inning
  const $inning = $scoreboard.find('.scoreboard-other__inning span');
  $inning.first().text(ge.topOfInning ? 'TOP' : 'BOT');
  $inning.last().text(util.getInningText(ge.inning + 1));

  // weather
  const $weather = $scoreboard.find('.scoreboard-other__weather span');
  $weather
    .text(weather[ge.weather].icon || weather[ge.weather].name)
    .attr('title', weather[ge.weather].name);
};

const updateDiamond = (highlights) => {
  drawBatter(highlights);
  drawPitcher(highlights);
  drawBaserunners(highlights);

  drawScoreboard(highlights);
};

const showVisual = (visual) => {
  switch (visual) {
    case 'intro':
      $('#intro').removeClass('d-none');
      $('#diamond').addClass('d-none');
      break;

    case 'diamond':
    default:
      $('#intro').addClass('d-none');
      $('#diamond').removeClass('d-none');
      break;
  }
};

module.exports = {
  updateDiamond,
  showVisual,
};

