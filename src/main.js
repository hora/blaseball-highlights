const gameEventSelector = require('./game-event-selector');
const gameLoader = require('./game-loader');
const Story = require('./story');
const apiUrl = 'https://highlights.sibr.dev/api';

let story;
let inPreview = false;

const startStory = (hls, startFrom) => {
  story = new Story({
    highlights: hls,
    id: getStoryId(),
  });

  $('.loading-story').addClass('d-none');

  story.start(startFrom);
};

const onStartPreview = (hls, startFrom) => {

  $('#game-load').addClass('d-none');
  $('#game-events').addClass('d-none');
  $('#exit-preview').removeClass('d-none');

  startStory(hls, startFrom);
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

const showSaving = () => {
  $('.game-events__header .loading').removeClass('d-none');
  $('.save-story').addClass('d-none');
  $('.game-events__header .error-msg').addClass('d-none');
};

const hideSaving = (success, storyURL) => {
  $('.game-events__header .loading').addClass('d-none');

  if (success) {
    $('.game-events__header .success').removeClass('d-none');

    if (storyURL) {
      showStoryLink(storyURL);
    }

    setTimeout(() => {
      $('.save-story').removeClass('d-none');
      $('.game-events__header .success').addClass('d-none');
    }, 1000);
  } else {
    $('.save-story').removeClass('d-none');
    $('.game-events__header .error-msg').removeClass('d-none');
  }
};

const showStoryLink = (storyURL) => {
  $('.game-events__header .story-url')
    .removeClass('d-none')
    .find('a')
    .attr('href', `${apiUrl}/story?${storyURL}`)
    .text(`${apiUrl}/story?${storyURL}`);
};

const onSaveAndPublish = (hls) => {
  showSaving();

  story = new Story({
    highlights: hls,
    id: getStoryId(),
  });

  const data = story.makeJSON();

  console.debug('saving story with data:', data);

  fetch(`${apiUrl}/submit`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cors: 'no-cors',
    method: 'POST',
    body: data,
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Bad response from server');
      }

      return resp.json();
    })
    .then((data) => {
      console.debug('Saved story with resp:', data);

      if (data.user_id) {
        story.setUser(data.user_id, data.user_token);
      }

      hideSaving(true, data.story_id);
    })
    .catch((err) => {
      console.error(err);
      hideSaving(false);
    });
};

const getStoryId = () => {
  return window.location.search.split('=')[1] || '';
};

const getStoryData = (storyId) => {
  return new Promise((resolve, reject) => {

    fetch(`${apiUrl}/story?id=${storyId}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Bad response from server');
        }

        return resp.json();
      })
      .then((data) => {
        console.debug('Loaded story with data:', data);
        resolve(data);
      });
  });
};

const isOwnStory = (storyData) => {
  return storyData.story.user_id === window.localStorage.getItem('id');
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
    showStoryLink(storyId);

    // ... fetch the story data
    getStoryData(storyId)
      .then((storyData) => {

      if (isOwnStory(storyData)) {
        console.debug('Going into story edit mode');

        $('.loading-story').addClass('d-none');
        $('#game-load').removeClass('d-none');
        $('#game-events').removeClass('d-none');

        gameLoader.loadWithMlustard((gameEvents) => {
          gameEventSelector.render({
            gameEvents,
            onStartPreview,
            onEndPreview,
            onSaveAndPublish,
            savedEvents: storyData.events,
          });
        }, storyData.story.game_id);

      } else {
        console.debug('Going into story present mode');

        // load all the game events and create highlights
        gameLoader.loadWithMlustard((gameEvents) => {
          gameEventSelector
            .generateHighlights((hls) => {
                console.debug('Starting story')
                startStory(hls, null);
            }, gameEvents, null, storyData.events);
        }, storyData.story.game_id);
      }

      });

  } else {
    toggleLoading(false);

    gameLoader.loadWithMlustard((gameEvents) => {
      gameEventSelector.render({
        gameEvents,
        onStartPreview,
        onEndPreview,
        onSaveAndPublish,
      });
    })
  }

  // todo: put these elsewhere
  $('#exit-preview').on('click.preview', onEndPreview);
  $(document).on('keyup.preview', onEndPreview);
};

initApp();

