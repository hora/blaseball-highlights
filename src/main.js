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

const onSaveAndPublish = (hls) => {
  story = new Story({
    highlights: hls,
  });

  // todo: add user id, or null, from cookie
  const data = story.makeJSON();
  console.debug('saving story with data:', data);

  // todo: send to flask, handle outcome
};

const getStoryId = () => {
  return window.location.search.split('=')[1] || '';
};

const getStoryData = (storyId) => {
  // todo: replace with fetch
  return new Promise((resolve, reject) => {
    const mockData = '{"title":"Crabs vs. Shoe Thieves, S10 D113","game_id":"704ddf2f-3fe2-48b3-b674-b94765f70d01","events":[{"blaseball_event_id":"194db8fa-457a-6f6f-6dcb-9043841909b7","description":"Play ball! ","visual":{"type":"matchup","meta":null}},{"blaseball_event_id":"c212e394-e81e-e8fd-d94c-df01d48e3d18","description":"Top of 1, Charleston Shoe Thieves batting. ","visual":{"type":"diamond","meta":null}},{"blaseball_event_id":"e40bf9c3-0d00-6192-47a2-0515cdf4136b","description":"Hotbox Sato batting for the Shoe Thieves. ","visual":{"type":"diamond","meta":null}}]}';

    resolve(JSON.parse(mockData));
  });
};

const isOwnStory = () => {
  return false;
};

const toggleLoading = (state) => {
  $('.loading-story').toggleClass('d-none', !state);
  $('.game-load').toggleClass('d-none', state);
  $('.game-events').toggleClass('d-none', state);
};

const initApp = () => {
  const storyId = getStoryId();

  // if there's a story ID ...
  if (storyId) {

    toggleLoading(true);

    // ... fetch the story data
    getStoryData(storyId)
      .then((storyData) => {
        console.log(storyData);

        gameLoader
          .loadWithMlustard(storyData.game_id)
          .then((gameEvents) => {
          });

        // load all the game events and create highlights

        // ... we're going into edit mode ...
        //if (isOwnStory()) {
        //} else { // ... or present mode
        //}

      });

  } else {
    toggleLoading(false);

    gameLoader.loadWithMlustard()
      .then((gameEvents) => {
        gameEventSelector.render({
          gameEvents,
          onStartPreview,
          onEndPreview,
          onSaveAndPublish,
        });
      });
  }

  // todo: put these elsewhere
  $('#exit-preview').on('click.preview', onEndPreview);
  $(document).on('keyup.preview', onEndPreview);
};

initApp();

