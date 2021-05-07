const $diamond = $('#diamond');
const diamondLocations = {
  $mound: $diamond.find('.mound'),
  $batting: $diamond.find('.batting'),
  $first: $diamond.find('.first'),
  $second: $diamond.find('.second'),
  $third: $diamond.find('.third'),
};

const BASES = ['first', 'second', 'third']; // todo: 'fourth', 'secret'?

const drawBatter = (highlight) => {
  //const ml = highlight.mlustard;
  const ge = highlight.gameEvent.data;

  diamondLocations['$batting'].text(ge.topOfInning ? ge.awayBatterName : ge.homeBatterName);
};

const drawPitcher = (highlight) => {
  //const ml = highlight.mlustard;
  const ge = highlight.gameEvent.data;

  diamondLocations['$mound'].text(ge.topOfInning ? ge.homePitcherName : ge.awayPitcherName);
};

const drawBaserunners = (highlight) => {
  const ml = highlight.mlustard;

  if (ml && ml.baseRunners) {
    for (let base of BASES) {
      if (ml.baseRunners[base].playerName) {
        diamondLocations[`$${base}`].text(ml.baseRunners[base].playerName);
      }
    }
  }
};

const updateDiamond = (highlight) => {
  drawBatter(highlight);
  drawPitcher(highlight);
  drawBaserunners(highlight);

};

module.exports = {
  updateDiamond,
};

