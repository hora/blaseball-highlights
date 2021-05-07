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

  diamondLocations['$batting']
    .css('color', ge[`${team}TeamColor`])
    .text(ge[`${team}BatterName`]);
};

const drawPitcher = (highlights) => {
  //const ml = highlight.mlustard;
  const cur = highlights.cur;
  const ge = cur.gameEvent.data;

  const team = ge.topOfInning ? 'home' : 'away';

  diamondLocations['$mound']
    .css('color', ge[`${team}TeamColor`])
    .text(ge[`${team}PitcherName`]);
};

const drawBaserunners = (highlights) => {
  const cur = highlights.cur;
  const ml = cur.mlustard;
  const ge = cur.gameEvent.data;

  const team = ge.topOfInning ? 'away' : 'home';

  if (ml && ml.baseRunners) {
    for (let base of BASES) {
      if (ml.baseRunners[base].playerName) {
        diamondLocations[`$${base}`]
          .css('color', ge[`${team}TeamColor`])
          .text(ml.baseRunners[base].playerName);
      } else {
        diamondLocations[`$${base}`]
          .text('');
      }
    }
  }
};

const updateDiamond = (highlights) => {
  drawBatter(highlights);
  drawPitcher(highlights);
  drawBaserunners(highlights);
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

