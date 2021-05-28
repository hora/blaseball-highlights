const gameEventSelector = require('./game-event-selector');
const gameLoader = require('./game-loader');
const Story = require('./story');

let story;
let inPreview = false;

const onStartPreview = (hls, startFrom) => {

  story = new Story({
    highlights: hls,
  });

  $('#game-load').addClass('d-none');
  $('#game-events').addClass('d-none');
  $('#exit-preview').removeClass('d-none');

  story.start(startFrom);
  inPreview = true;
};

const onEndPreview = (evt) => {
  if (!inPreview) { return; }

  // also exit preview on esc
  if (evt.type === 'keyup') {
    if (evt.keyCode !== 27) {
      return;
    }
  }

  $('#exit-preview').addClass('d-none');
  $('#game-load').removeClass('d-none');
  $('#game-events').removeClass('d-none');
  story.stop();
  inPreview = false;
};

const initApp = () => {
  const highlightsData = $('#highlights-json').attr('data');

  // skip first steps and go straight to showing the reel if it's a published
  // story
  if (highlightsData.length) {
    onPreview(JSON.parse(highlightsData));
    //highlights = JSON.parse(highlightsData);
  } else {
    gameLoader.loadWithMlustard()
      .then((gameEvents) => {
        gameEventSelector.render({
          gameEvents,
          onStartPreview,
          onEndPreview,
        });
      });
  }

  // todo: put these elsewhere
  $('#exit-preview').on('click.preview', onEndPreview);
  $(document).on('keyup.preview', onEndPreview);
};

initApp();

