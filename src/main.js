const gameEventSelector = require('./game-event-selector');
const Story = require('./story');
const downloader = require('./downloader');

const onHighlightsReady = (hls) => {

  const story = new Story({
    highlights: hls,
  });

  story.start();
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

