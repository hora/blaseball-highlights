const gameEventSelector = require('./game-event-selector');
const Story = require('./story');
const downloader = require('./downloader');

let story;

const onPreview = (hls) => {

  story = new Story({
    highlights: hls,
  });

  $('#game-load').addClass('d-none');
  $('#game-events').addClass('d-none');
  $('#exit-preview').removeClass('d-none');

  story.start();
};

const exitPreview = () => {
  $('#exit-preview').addClass('d-none');
  $('#game-load').removeClass('d-none');
  $('#game-events').removeClass('d-none');
  story.stop();
};

const initApp = () => {
  const highlightsData = $('#highlights-json').attr('data');

  // skip first steps and go straight to showing the reel if it's a published
  // story
  if (highlightsData.length) {
    onPreview(JSON.parse(highlightsData));
    //highlights = JSON.parse(highlightsData);
  } else {
    gameEventSelector.init(onPreview);
    //downloader.init();
  }

  $('#exit-preview').on('click', exitPreview);
};

initApp();

