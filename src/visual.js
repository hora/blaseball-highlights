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

  diamondLocations['$batting'].text(ge.topOfInning ? ge.awayBatterName : ge.homeBatterName);
};

const drawPitcher = (highlights) => {
  //const ml = highlight.mlustard;
  const cur = highlights.cur;
  const ge = cur.gameEvent.data;

  diamondLocations['$mound'].text(ge.topOfInning ? ge.homePitcherName : ge.awayPitcherName);
};

const drawBaserunners = (highlights) => {
  const cur = highlights.cur;
  const ml = cur.mlustard;

  if (ml && ml.baseRunners) {
    for (let base of BASES) {
      if (ml.baseRunners[base].playerName) {
        diamondLocations[`$${base}`].text(ml.baseRunners[base].playerName);
      }
    }
  }
};

const updateDiamond = (highlights) => {
  drawBatter(highlights);
  drawPitcher(highlights);
  drawBaserunners(highlights);

};

module.exports = {
  updateDiamond,
};

