(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = {
  // hellmouth sunbeams
  'f02aeae2-5e6a-4098-9842-02d2273f25c7': {
    shorthand: 'HELL',
    colours: {
      main: 'fffbab',
      grass: 'e8c877',
      dirt: 'ffffff',
      dirtOutline: '1d1932',
    },
    homeLogoURL: './images/logo-sunbeams.png',
  },

  // hades tigers
  '747b8e4a-7e50-4638-a973-ea7950a3e739': {
    shorthand: 'HAD',
    colours: {
      main: '5c1c1c',
      grass: 'e85637',
      bases: 'c32229',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      neutral: 'faa623',
    },
    homeLogoURL: './images/logo-tigers.png',
  },

  // seattle garages
  '105bc3ff-1320-4e37-8ef0-8d595cb95dd0': {
    shorthand: 'SEA',
    colours: {
      main: '2b4075',
      //grass: '2606d7',
      grass: 'ff2423',
      //bases: 'ff2423',
      bases: '2606d7',
      //bases: '820e0f',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      //neutral: 'ff2423',
      neutral: '2606d7',
    },
    homeLogoURL: './images/logo-garages.png',
  },

  // mexico city wild wings
  '57ec08cc-0411-4643-b304-0e80dbc15ac7' : {
    shorthand: 'CDMX',
    colours: {
      main: 'd15700',
      grass: '731f00',
      bases: '006847',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      neutral: 'c64000',
    },
    homeLogoURL: './images/logo-wings.png',
  },

  // atlantis georgias
  'd9f89a8a-c563-493e-9d64-78e4f9a55d4a': {
    shorthand: 'ATLS',
    colours: {
      main: '00dbc2',
      //grass: '5cffec',
      bases: '',
      basesOutline: '',
      dirt: '',
      dirtOutline: '000000',
      neutral: '',
    },
    homeLogoURL: './images/logo-georgias.png',
  },

  // chicago firefighters
  'ca3f1c8c-c025-4d8e-8eef-5be6accbeb16': {
    shorthand: 'CHI',
    colours: {
      main: '8c2a3e',
      grass: 'd13757',
      bases: 'ff960a',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      neutral: 'fbe025',
    },
    homeLogoURL: './images/logo-firefighters.png',
  },

  // tokyo lift
  'c73b705c-40ad-4633-a6ed-d357ee2e2bcf': {
    shorthand: 'TYO',
    colours: {
      main: 'e536c8',
      grass: '90147b',
      bases: '73feed',
      basesOutline: '000a2a',
      dirt: 'faf0f9',
      dirtOutline: '000a2a',
      neutral: 'ffd14c',
    },
    homeLogoURL: './images/logo-lift.png',
  },

  // breckenridge jazz hands
  'a37f9158-7f82-46bc-908c-c9e2dda7c33b': {
    shorthand: 'BRK',
    colours: {
      main: '6388ad',
      grass: 'f3ca40',
      bases: 'd80067',
      basesOutline: '4e084d',
      dirt: 'f2a541',
      dirtOutline: '4e094d',
      neutral: '7ba9d7',
    },
    homeLogoURL: './images/logo-hands.png',
  },

  // la unlimited tacos
  '878c1bf6-0d21-4659-bfee-916c8314d69c': {
    shorthand: 'TACO',
    colours: {
      main: '64376e',
      grass: 'facf33',
      bases: 'd73333',
      basesOutline: '000000',
      dirt: '28c872',
      dirtOutline: '000000',
      neutral: '9822d3',
    },
    homeLogoURL: './images/logo-tacos.png',
  },

  // miami dale
  'b63be8c2-576a-4d6e-8daf-814f8bcea96f': {
    shorthand: 'MIA',
    colours: {
      main: 'bf00ff',
      grass: 'ff69b4',
      bases: '33ffff',
      basesOutline: '0e1216',
      dirt: 'ffffff',
      dirtOutline: '0e1216',
      neutral: 'fee020',
    },
    homeLogoURL: './images/logo-dale.png',
  },

  // boston flowers
  '3f8bbb15-61c0-4e3f-8e4a-907a5fb1565e': {
    shorthand: 'BOS',
    colours: {
      main: 'f7d1ff',
      grass: '9755a5',
      bases: 'ac56bd',
      basesOutline: '393a17',
      dirt: 'd791e3',
      dirtOutline: '393a17',
      neutral: '',
    },
    homeLogoURL: './images/logo-flowers.png',
  },

  // ohio worms
  'bb4a9de5-c924-4923-a0cb-9d1445f1ee5d': {
    shorthand: 'OHIO',
    colours: {
      main: '5c4822',
      grass: 'ba9c65',
      bases: '',
      basesOutline: '000000',
      dirt: '',
      dirtOutline: '000000',
      neutral: '',
    },
    homeLogoURL: './images/logo-worms.png',
  },

  // houston spies
  '9debc64f-74b7-4ae1-a4d6-fce0144b6ea5': {
    shorthand: 'HOU',
    colours: {
      main: '67556b',
      grass: '9e82a4',
      bases: '',
      basesOutline: '000000',
      dirt: '',
      dirtOutline: '000000',
      neutral: '',
    },
    homeLogoURL: './images/logo-spies.png',
  },

  // philly pies
  '23e4cbc1-e9cd-47fa-a35b-bfa06f726cb7': {
    shorthand: 'PHL',
    colours: {
      main: '399d8f',
      grass: 'ffcd4c',
      bases: 'ec970b',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      neutral: '',
    },
    homeLogoURL: './images/logo-pies.png',
  },

  // san fracisco lovers
  'b72f3061-f573-40d7-832a-5ad475bd7909': {
    shorthand: 'SF',
    colours: {
      main: 'd2264a',
      grass: 'f193b3',
      bases: '6b184d',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      neutral: '',
    },
    homeLogoURL: './images/logo-lovers.png',
  },

  // dallas steaks
  'b024e975-1c4a-4575-8936-a3754a08806a': {
    shorthand: 'DAL',
    colours: {
      main: '8c8d8f',
      grass: 'e81223',
      bases: '8c3628',
      basesOutline: '000000',
      //dirt: 'c6a78b',
      dirt: 'ffffff',
      dirtOutline: '000000',
      neutral: '56412e',
    },
    homeLogoURL: './images/logo-steaks.png',
  },

  // new york millennials
  '36569151-a2fb-43c1-9df7-2df512424c82': {
    shorthand: 'NY',
    colours: {
      main: 'f8d6d7',
      grass: '99cde3',
      bases: '',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      neutral: '',
    },
    homeLogoURL: './images/logo-millennials.png',
  },

  // core mechanics
  '46358869-dce9-4a01-bfba-ac24fc56f57e': {
    shorthand: 'CORE',
    colours: {
      main: 'd13100',
      grass: '',
      bases: '',
      basesOutline: '',
      dirt: '',
      dirtOutline: '',
      neutral: '',
    },
    homeLogoURL: './images/logo-mechanics.png',
  },
};

module.exports = data;


},{}],2:[function(require,module,exports){
const weather = {
  0: {
    name: 'void',
    icon: '',
  },
  1: {
    name: 'sun 2',
    icon: '☀',
  },
  2: {
    name: 'overcast',
    icon: '',
  },
  3: {
    name: 'rainy',
    icon: '',
  },
  4: {
    name: 'sandstorm',
    icon: '',
  },
  5: {
    name: 'snowy',
    icon: '',
  },
  6: {
    name: 'acidic',
    icon: '',
  },
  7: {
    name: 'solar eclipse',
    icon: '🌑',
  },
  8: {
    name: 'glitter',
    icon: '',
  },
  9: {
    name: 'blooddrain',
    icon: '🩸',
  },
  10: {
    name: 'peanuts',
    icon: '🥜',
  },
  11: {
    name: 'lots of birds',
    icon: '🐦',
  },
  12: {
    name: 'feedback',
    icon: '🎤',
  },
  13: {
    name: 'reverb',
    icon: '🌊',
  },
  14: {
    name: 'black hole',
    icon: '⚫',
  },
  15: {
    name: 'coffee',
    icon: '☕',
  },
  16: {
    name: 'coffee 2',
    icon: '🍵',
  },
  17: {
    name: 'coffee 3s',
    icon: '3️⃣',
  },
  18: {
    name: 'flooding',
    icon: '🚰',
  },
  19: {
    name: 'salmon',
    icon: '🐟',
  },
  20: {
    name: 'glitter',
    icon: '✨',
  },
};

module.exports = weather;

},{}],3:[function(require,module,exports){
"use strict";

var buildComment = function buildComment(settings, grammar) {
  var gameEvent = settings.gameEvent;
  var mlustard = settings.mlustard; // check for game status

  switch (mlustard.gameStatus) {
    case 'beforeFirstPitch':
      return grammar.flatten('#gameStart#');
      break;

    case 'firstHalfInningStart':
      if (gameEvent.inning === 0) {
        return grammar.flatten('#inningOneStart#');
      } else {
        return grammar.flatten('#inningStart#');
      }

      break;

    case 'secondHalfInningStart':
      return grammar.flatten('#inningStart#');
      break;

    default:
      break;
  }

  var comment = ''; // check for outs

  if (mlustard.out) {
    if (mlustard.gameStatus === 'halfInningEnd') {
      comment += grammar.flatten('#lastOutOfInning#');
    } else {
      comment += grammar.flatten('#out#');
    }
  } // check for score


  if (mlustard.runsScored !== 0 || mlustard.unrunsScored !== 0 || // score change due to salmon stealing runs
  mlustard.special && mlustard.specialMeta.kind === 'salmon' && mlustard.specialMeta.details && mlustard.specialMeta.details.runsStolen.length || // score change from sun 2 smiling
  mlustard.special && mlustard.specialMeta.kind === 'sun2' || // score change from black hole swallowing
  mlustard.special && mlustard.specialMeta.kind === 'blackHole') {
    if (comment) {
      comment += grammar.flatten('#scoreAddon#');
    } else {
      comment += grammar.flatten('#score#');
    }
  } // check if a batter just showed up at the plate


  if (mlustard.batterUp && gameEvent.baserunnerCount) {
    comment += grammar.flatten('#batterUpRunners#');
  } // return the comment if it was created, otherwise the original update if it
  // exists, otherwise an empty string


  return comment || gameEvent.lastUpdate || '';
};

module.exports = {
  buildComment: buildComment
};
},{}],4:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tracery = require('tracery-grammar');

var mods = require('./tracery-mods');

var quips = require('./quips.json');

var init = function init(settings) {
  var seed = settings.seed;
  var gameEvent = settings.gameEvent;
  var mlustard = settings.mlustard;
  var overrides = settings.overrides;
  var level = settings.level;

  if (seed !== undefined) {
    tracery.setRandom(function () {
      return seed;
    });
  }

  var grammar = tracery.createGrammar({}); // populate data from gameEvent

  var _iterator = _createForOfIteratorHelper(quips.data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _field3 = _step.value;
      var data = gameEvent[_field3];

      if (data !== undefined) {
        // some data needs massaging
        switch (_field3) {
          case 'inning':
            data = (data + 1).toString();
            break;

          case 'topOfInning':
            data = data ? 'top' : 'bottom';
            break;

          case 'halfInningOuts':
          case 'homeScore':
          case 'awayScore':
            data = data.toString();
            break;

          default:
            break;
        }

        grammar.pushRules(_field3, data);
      } else {
        grammar.pushRules(_field3, '');
      }
    } // current pitcher

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var cPitcher = gameEvent.topOfInning ? gameEvent.homePitcherName : gameEvent.awayPitcherName;
  grammar.pushRules('cPitcher', cPitcher); // current batter (can be an empty string if nobody batting)

  var cBatter = gameEvent.homeBatterName || gameEvent.awayBatterName;
  grammar.pushRules('cBatter', cBatter); // pitching team nickname

  var pNick = gameEvent.topOfInning ? '#hNick#' : '#aNick#';
  grammar.pushRules('pNick', pNick); // batting team nickname

  var bNick = gameEvent.topOfInning ? '#aNick#' : '#hNick#';
  grammar.pushRules('bNick', bNick); // leading & trailing team nicknames and scores

  var lTeam;
  var tTeam;
  var lScore;
  var tScore;

  if (gameEvent.awayScore > gameEvent.homeScore) {
    lTeam = '#aNick#';
    tTeam = '#hNick#';
    lScore = '#aScore#';
    tScore = '#hScore#';
  } else {
    lTeam = '#hNick#';
    tTeam = '#aNick#';
    lScore = '#hScore#';
    tScore = '#aScore#';
  }

  grammar.pushRules('lTeam', lTeam);
  grammar.pushRules('tTeam', tTeam);
  grammar.pushRules('lScore', lScore);
  grammar.pushRules('tScore', tScore); // set base runners

  if (gameEvent.baserunnerCount >= 3) {
    grammar.pushRules('runners', '#basesLoaded#');
  } else if (gameEvent.baserunnerCount > 0) {
    grammar.pushRules('runners', '#runnersOnBase#');
  }

  var bases = '';

  for (var _i = 0, _Object$keys = Object.keys(mlustard.baseRunners); _i < _Object$keys.length; _i++) {
    var base = _Object$keys[_i];

    if (mlustard.baseRunners[base].playerId) {
      bases += "".concat(base, " ");
    }
  }

  grammar.pushRules('basesOcc', bases.trim()); // build quips shortcuts

  for (var field in quips.shortcuts) {
    grammar.pushRules(field, quips.shortcuts[field]);
  } // build quips grammar


  for (var _field in quips[level]) {
    grammar.pushRules(_field, quips[level][_field]);
  } // do quip overrides


  for (var _field2 in overrides) {
    grammar.pushRules(_field2, overrides[_field2]);
  } // add mods


  grammar.addModifiers(tracery.baseEngModifiers);
  grammar.addModifiers(mods);
  return grammar;
};

module.exports = {
  init: init
};
},{"./quips.json":6,"./tracery-mods":7,"tracery-grammar":18}],5:[function(require,module,exports){
"use strict";

var mlustard = require('mlustard');

var grammar = require('./grammar');

var commentary = require('./commentary');
/*
 * @settings is an object with the following props:
 *   - gameEvent: the game event object (from the stream or chronicler)
 *   - mlustard (optional): mlustard data for the gameEvent
 *   - seed (optional): a seed, for deterministic comment generation
 *   - level (optional, defaults to 'minimal'): the commentary level, one of
 *     - minimal: adds a few comments to update on game status at key comments
 *   - overrides (optional): object with quip overrides
 */


var getComment = function getComment(settings) {
  if (!settings.gameEvent) {
    return '';
  }

  settings.mlustard = settings.mlustard || mlustard.analyzeGameEvent(settings.gameEvent);
  settings.level = settings.level || 'minimal';
  settings.overrides = settings.overrides || {};
  var gr = grammar.init(settings);

  if (!gr) {
    return '';
  }

  return commentary.buildComment(settings, gr);
};

module.exports = {
  getComment: getComment
};
},{"./commentary":3,"./grammar":4,"mlustard":12}],6:[function(require,module,exports){
module.exports={"data":["inning","topOfInning","halfInningOuts","homeTeamName","awayTeamName","homeTeamNickname","awayTeamNickname","homeScore","awayScore","homeOdds","awayOdds","homePitcherName","awayPitcherName","lastUpdate","scoreUpdate"],"minimal":{"matchup":["#hNick# vs #aNick#","#aNick# at #hNick#"],"topOrBot":"#topOfInning#","inningFull":"#topOrBot# of #inning#","gameStart":"#matchup#. #pitchers#. #original#","score":"#original# It's #lTeam.the# #lScore# and #tTeam.the# #tScore#.","scoreAddon":" It's #lTeam.the# #lScore# and #tTeam.the# #tScore#.","inningStart":"#original# #cPitcher# pitching for #pNick.the#.","inningOneStart":"#original#","pitchers":["#hPitcher# pitching for #hNick.the#, #aPitcher# for #aNick.the#","Our pitchers are #hPitcher# for #hNick.the#, and #aPitcher# for #aNick.the#"],"out":"#original# #inningFull.capitalize#, #outs#.","outs":"#halfInningOuts.outs#","lastOutOfInning":"#original#","batterUpRunners":"#original# #runners.runnerPluralize#","runnersOnBase":"Runner on #basesOcc.and#.","basesLoaded":"Bases are loaded!"},"shortcuts":{"hPitcher":"#homePitcherName#","aPitcher":"#awayPitcherName#","hNick":"#homeTeamNickname#","aNick":"#awayTeamNickname#","hScore":"#homeScore#","aScore":"#awayScore#","original":"#lastUpdate##scoreUpdate.spaced#"}}
},{}],7:[function(require,module,exports){
"use strict";

module.exports = {
  the: function the(s) {
    return "the ".concat(s);
  },
  // counts the # of outs and pluralizes accordingly
  outs: function outs(s) {
    if (s === '1') {
      return "".concat(s, " out");
    } else {
      return "".concat(s, " outs");
    }
  },
  // oxford commas
  and: function and(s) {
    return s.split(' ').join(', ').replace(/, ([^,]*)$/, ' and $1');
  },
  // for pluralizing runner(s) on first[, second and third]
  runnerPluralize: function runnerPluralize(s) {
    if (s.indexOf(',') >= 0 || s.indexOf('and') >= 0) {
      return s.replace('Runner', 'Runners');
    } else {
      return s;
    }
  },
  // adds a space before the word
  spaced: function spaced(s) {
    if (s) {
      return " ".concat(s);
    } else {
      return '';
    }
  }
};
},{}],8:[function(require,module,exports){
"use strict";

//const util = require('./util');
var BASES = ['first', 'second', 'third', 'fourth'];

var check = function check(analysis, eventData) {
  //const update = util.getUpdateText(eventData);
  if (eventData.baserunnerCount) {
    // i represents the order of baserunners
    // basesOccupied[i] is the base they are on, 0-indexed
    for (var i = 0; i < eventData.basesOccupied.length; i++) {
      var _eventData$baseRunner;

      var base = eventData.basesOccupied[i];
      analysis.baseRunners[BASES[base]] = {
        playerName: ((_eventData$baseRunner = eventData.baseRunnerNames) === null || _eventData$baseRunner === void 0 ? void 0 : _eventData$baseRunner[i]) || '',
        playerId: eventData.baseRunners[i]
      };
    }

    return true;
  }

  return false;
};

module.exports = {
  check: check
};
},{}],9:[function(require,module,exports){
"use strict";

var util = require('./util');

var check = function check(analysis, eventData) {
  var _eventData$homeTeamNi, _eventData$awayTeamNi;

  var update = util.getUpdateText(eventData);
  var home = (eventData === null || eventData === void 0 ? void 0 : (_eventData$homeTeamNi = eventData.homeTeamNickname) === null || _eventData$homeTeamNi === void 0 ? void 0 : _eventData$homeTeamNi.toLowerCase()) || '';
  var homeScore = (eventData === null || eventData === void 0 ? void 0 : eventData.homeScore) || 0;
  var away = (eventData === null || eventData === void 0 ? void 0 : (_eventData$awayTeamNi = eventData.awayTeamNickname) === null || _eventData$awayTeamNi === void 0 ? void 0 : _eventData$awayTeamNi.toLowerCase()) || '';
  var awayScore = (eventData === null || eventData === void 0 ? void 0 : eventData.awayScore) || 0;

  if (update.indexOf('play ball') >= 0) {
    analysis.gameStatus = 'beforeFirstPitch';
  } else if (update.indexOf('top of') >= 0) {
    analysis.gameStatus = 'firstHalfInningStart';
  } else if (update.indexOf('bottom of') >= 0) {
    analysis.gameStatus = 'secondHalfInningStart';
  } else if (update.indexOf('game over') >= 0 || update.indexOf("".concat(home, " ").concat(homeScore, ", ").concat(away, " ").concat(awayScore)) >= 0 || update.indexOf("".concat(away, " ").concat(awayScore, ", ").concat(home, " ").concat(homeScore)) >= 0) {
    analysis.gameStatus = 'gameEnd';
  }

  if (analysis.gameStatus) {
    return analysis;
  }

  return false;
};

module.exports = {
  check: check
};
},{"./util":16}],10:[function(require,module,exports){
"use strict";

var util = require('./util');

var checkHitRbiPreS12 = function checkHitRbiPreS12(analysis, update) {
  // from some non-exhaustive research, i think there weren't any grand slams
  // pre-s12 that were not 4 runs
  if (analysis.hitMeta.kind === 'grandSlam') {
    analysis.runsScored = 4;
    return;
  } // if a single/double/triple was hit & x runs were scored, it shows up
  // at the end of the update as "...! x scores"


  var runs = util.getNumber(update, /! /, / scores/) || 0;

  if (runs) {
    analysis.runsScored = runs;
    return;
  } // if a solo home run was hit, update contains the text "solo home run"


  if (update.indexOf('solo home run') >= 0) {
    analysis.runsScored = 1;
    return;
  } // if a multi-run home run was hit, update contains the text "x-run home
  // run"


  runs = util.getNumber(update, null, /-run home run/) || 0;

  if (runs) {
    analysis.runsScored = runs;
    return;
  }
};

var check = function check(analysis, eventData) {
  var update = util.getUpdateText(eventData);

  if (update.indexOf('hits a single') >= 0) {
    analysis.hitMeta.kind = 'single';
  } else if (update.indexOf('hits a double') >= 0) {
    analysis.hitMeta.kind = 'double';
  } else if (update.indexOf('hits a triple') >= 0) {
    analysis.hitMeta.kind = 'triple';
  } else if (update.indexOf('home run') >= 0) {
    analysis.hitMeta.kind = 'homeRun';
  } else if (update.indexOf('grand slam') >= 0) {
    analysis.hitMeta.kind = 'grandSlam';
  }

  if (analysis.hitMeta.kind) {
    analysis.hit = true; // check if home run / grand slam landed in big bucket

    if (update.indexOf('ball lands in a big bucket') >= 0) {
      analysis.hitMeta.bigBucket = true;
    } //from s12 onward, scores on the play are in the scoreUpdate field
    //const scoreUpdate = eventData?.scoreUpdate || '';
    //if (scoreUpdate) {
    //analysis.runsScored = util.getNumber(scoreUpdate, null, null) || 0;
    // if there's no scoreUpdate, deduce the score from the update
    // this is the case for games between s2 & s11


    if (!(eventData !== null && eventData !== void 0 && eventData.scoreUpdate)) {
      checkHitRbiPreS12(analysis, update);
    } // score updates from s12 onward registered in src/misc.js


    return true;
  }

  return false;
};

module.exports = {
  check: check
};
},{"./util":16}],11:[function(require,module,exports){
"use strict";

var util = require('./util');

var checkMaximumBlaseball = function checkMaximumBlaseball(analysis, eventData) {
  var balls, bases, outs, strikes;

  if (eventData.topOfInning) {
    // away is batting
    balls = eventData.awayBalls;
    bases = eventData.awayBases;
    outs = eventData.awayOuts;
    strikes = eventData.awayStrikes;
  } else {
    // home is batting
    balls = eventData.homeBalls;
    bases = eventData.homeBases;
    outs = eventData.homeOuts;
    strikes = eventData.homeStrikes;
  }

  if (eventData.halfInningOuts === outs - 1 && eventData.atBatBalls === balls - 1 && eventData.atBatStrikes === strikes - 1 && eventData.baserunnerCount === bases - 1) {
    analysis.maximumBlaseball = true;
  }
};

var checkScoreUpdate = function checkScoreUpdate(analysis, eventData) {
  var _eventData$scoreUpdat;

  var scoreUpdate = eventData === null || eventData === void 0 ? void 0 : (_eventData$scoreUpdat = eventData.scoreUpdate) === null || _eventData$scoreUpdat === void 0 ? void 0 : _eventData$scoreUpdat.toLowerCase();

  if (scoreUpdate) {
    analysis.runsScored = util.getNumber(scoreUpdate, null, / runs? score/);
    analysis.unrunsScored = util.getNumber(scoreUpdate, null, / unruns? score/);
  }
};

var check = function check(analysis, eventData) {
  var update = util.getUpdateText(eventData);
  checkScoreUpdate(analysis, eventData);
  checkMaximumBlaseball(analysis, eventData); // check for whether a batter just showed up to bat

  if (update.indexOf('batting for') >= 0) {
    analysis.batterUp = true;
  }
};

module.exports = {
  check: check
};
},{"./util":16}],12:[function(require,module,exports){
"use strict";

var gameStatus = require('./game-status');

var outs = require('./outs');

var hits = require('./hits');

var steals = require('./steals');

var walks = require('./walks');

var special = require('./special');

var misc = require('./misc');

var baseRunners = require('./base-runners');
/*
 * sets all known (aka implemented) analysis results to their defauls
 * return an object with the props:
 *
 * id: string || undefined
 *   - the game event ID
 *
 * runsScored: number
 *   - how many runs were scored on the play
 *
 * unrunsScored: number
 *   - how many unruns were scored on the play
 *
 * batterUp: boolean
 *   - whether a batter just showed up to bat
 *
 * gameStatus: null || string
 *   - will be null or one of:
 *   - beforeFirstPitch, when the first pitch hasn't been thrown yet
 *   - firstHalfInningStart, when the first half of an inning is starting
 *   - secondHalfInningStart, when the second half of an inning is starting
 *   - halfInningEnd, when any half of an inning is ending on the play
 *   - gameEnd, when the game has ended
 *   - inningRewind, when the salmon swim upstream
 *
 * out: boolean
 *   - true when there is an out on the play
 * outMeta: object, with the props:
 *   - kind: null || string
 *     - will be one of:
 *     - fly
 *     - ground
 *     - strike
 *     - caughtStealing
 *     - unspecified (as you sometimes see with sacrifice outs)
 *   - sacrifice: boolean
 *     - true when the out was a sacrifice
 *   - sacrificeMeta: object, with the following props:
 *     - kind: string || null
 *       - will be one of:
 *       - advance
 *       - score
 *   - freeRefill: boolean
 *     - true when batter used their free refill on the play
 *
 * hit: boolean
 *   - true when there is a hit on the play
 * hitMeta: object, with the props:
 *   - kind: null || string
 *     - will be one of:
 *     - single
 *     - double
 *     - triple
 *     - homeRun
 *     - grandSlam
 *   - bigBucket: boolean
 *     - whether a Big Bucket was activated on the play
 *
 * steal: boolean
 *   - true when there is an attempted steal on the play
 * stealMeta: object, with the props:
 *   - success: boolean
 *     - true when thief not caught, false otherwise
 *   - baseStolen: null || number
 *     - the base which was stolen (0-indexed)
 *
 * walk: boolean
 *   - true when there is a walk on the play
 * walkMeta: object, with the props:
 *   - mindTrick: boolean
 *     - true when the pitches used a mind trick to turn the walk into a
 *       strikeout
 *
 * special: boolean
 *   - true when there was a special event on the play
 * specialMeta: object, with the props:
 *   - kind: null || string
 *     - will be one of:
 *     - bloodrain
 *     - isPartying
 *     - reverb
 *     - birdsCircle
 *     - birdsPecked
 *     - justBirds
 *     - allergicReaction
 *     - incinerated
 *     - becameMagmatic
 *     - feedback
 *     - electricity
 *     - unstable
 *     - flickering
 *     - consumersAttack
 *     - salmon
 *   - details: object, with props depending on the type of event
 *
 * baseRunners: object with the following props, representing bases
 *   - first
 *   - second
 *   - third
 *   - fourth
 *   - if there is a baserunner on the given base, the value for that base
 *     will be an object with the following props:
 *     - playerName
 *     - playerId
 *
 * maximumBlaseball: boolean
 *   - true when we're at MAXIMUM BLASEBALL
 */


var initAnalysis = function initAnalysis(eventData) {
  return {
    id: eventData.id || eventData._id,
    gameStatus: null,
    runsScored: 0,
    unrunsScored: 0,
    batterUp: false,
    out: false,
    outMeta: {
      kind: null,
      sacrifice: false,
      sacrificeMeta: {
        kind: null
      },
      freeRefill: false
    },
    hit: false,
    hitMeta: {
      kind: null,
      bigBucket: false
    },
    steal: false,
    stealMeta: {
      success: null,
      baseStolen: null
    },
    walk: false,
    walkMeta: {
      mindTrick: false
    },
    special: false,
    specialMeta: {
      kind: null
    },
    baseRunners: {
      first: {},
      second: {},
      third: {},
      fourth: {}
    },
    maximumBlaseball: false
  };
};

var analyzeGameEvent = function analyzeGameEvent(eventData) {
  if (!eventData) {
    return null;
  }

  var analysis = initAnalysis(eventData);
  var checkers = [gameStatus, outs, hits, walks, steals, special, misc, baseRunners];

  for (var _i = 0, _checkers = checkers; _i < _checkers.length; _i++) {
    var checker = _checkers[_i];
    checker.check(analysis, eventData);
  }

  return analysis;
};

module.exports = {
  analyzeGameEvent: analyzeGameEvent
};
},{"./base-runners":8,"./game-status":9,"./hits":10,"./misc":11,"./outs":13,"./special":14,"./steals":15,"./walks":17}],13:[function(require,module,exports){
"use strict";

var util = require('./util');

var check = function check(analysis, eventData) {
  var update = util.getUpdateText(eventData);

  if (update.indexOf('flyout') >= 0) {
    analysis.outMeta.kind = 'fly';
  } else if (update.indexOf('ground out') >= 0) {
    analysis.outMeta.kind = 'ground';
  } else if (update.indexOf('strikes out') >= 0) {
    analysis.outMeta.kind = 'strike';
  } else if (update.indexOf('fielder\'s choice') >= 0) {
    analysis.outMeta.kind = 'fieldersChoice';
  } else if (update.indexOf('a double play') >= 0) {
    analysis.outMeta.kind = 'doublePlay';
  }

  if (update.indexOf('sacrifice') >= 0) {
    // this may already be a ground/flyout, or its unspecified
    analysis.outMeta.kind = analysis.outMeta.kind || 'unspecified';
    analysis.outMeta.sacrifice = true; // check if someone scored or advanced on the sacrifice

    if (update.indexOf('scores') >= 0) {
      analysis.outMeta.sacrificeMeta.kind = 'score';

      if (!(eventData !== null && eventData !== void 0 && eventData.scoreUpdate)) {
        analysis.runsScored = 1;
      } // otherwise scores are captured in src/misc.js

    } else if (update.indexOf('advance') >= 0) {
      analysis.outMeta.sacrificeMeta.kind = 'advance';
    }
  }

  if (analysis.outMeta.kind) {
    analysis.out = true;

    if ((eventData === null || eventData === void 0 ? void 0 : eventData.halfInningOuts) === 0) {
      analysis.gameStatus = 'halfInningEnd';
    }

    if (update.indexOf('free refill') >= 0) {
      analysis.outMeta.freeRefill = true;
    }

    if (update.indexOf('uses a mind trick') >= 0) {
      analysis.outMeta.mindTrick = true;
    }

    return true;
  }

  return false;
};

module.exports = {
  check: check
};
},{"./util":16}],14:[function(require,module,exports){
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var util = require('./util');

var check = function check(analysis, eventData) {
  var update = util.getUpdateText(eventData);

  if (update.indexOf('blooddrain') >= 0) {
    analysis.specialMeta.kind = 'blooddrain';
  } else if (update.indexOf('is partying') >= 0) {
    analysis.specialMeta.kind = 'isPartying';
  } else if (update.indexOf('reverb') >= 0) {
    analysis.specialMeta.kind = 'reverb';
  } else if ( // this check has to come before birds circle, because the text
  // 'the birds circle' is present in both cases
  update.indexOf('the birds pecked') >= 0) {
    analysis.specialMeta.kind = 'birdsPecked';
  } else if (update.indexOf('the birds circle') >= 0) {
    analysis.specialMeta.kind = 'birdsCircle';
  } else if ( // this is to capture any other non-pecking & non-circling birdiness
  update.indexOf('birds') >= 0) {
    analysis.specialMeta.kind = 'justBirds';
  } else if (update.indexOf('had an allergic reaction') >= 0) {
    analysis.specialMeta.kind = 'allergicReaction';
  } else if (update.indexOf('rogue umpire incinerated') >= 0) {
    analysis.specialMeta.kind = 'incinerated';
  } else if (update.indexOf('became magmatic') >= 0) {
    analysis.specialMeta.kind = 'becameMagmatic';
  } else if (update.indexOf('feedback') >= 0 && (update.indexOf('reality flickers') >= 0 || update.indexOf('switched teams') >= 0)) {
    analysis.specialMeta.kind = 'feedback';
  } else if (update.indexOf('the electricity zaps') >= 0) {
    analysis.specialMeta.kind = 'electricity';
  } else if (update.indexOf('is now unstable') >= 0) {
    analysis.specialMeta.kind = 'unstable';
  } else if (update.indexOf('is now flickering') >= 0) {
    analysis.specialMeta.kind = 'flickering';
  } else if (update.indexOf('consumers attack') >= 0) {
    if (update.indexOf('defends') >= 0) {
      analysis.specialMeta.kind = 'consumersAttackDefended';
    } else {
      analysis.specialMeta.kind = 'consumersAttack';
    }
  } else if (update.indexOf('salmon swim upstream') >= 0) {
    analysis.specialMeta.kind = 'salmon';
    analysis.gameStatus = 'inningRewind'; // first, grab all the sentences with which team lost how many runs

    var teams = update.match(/(\d+(\.\d+)?) of the .*'s runs are lost/g);

    if (teams) {
      var runsStolen = teams.map(function (team) {
        return util.getNumber(team, null, null) || 0;
      });
      var runsStolenFrom = teams.map(function (team) {
        return util.getTeam(eventData, team, /of the /, /'s runs/);
      });
      analysis.specialMeta.details = {
        runsStolen: runsStolen,
        runsStolenFrom: runsStolenFrom
      };
    }
  } else if (update.indexOf('runs are overflowing') >= 0) {
    analysis.specialMeta.kind = 'runsOverflowing';
    analysis.specialMeta.details = {
      runsGained: util.getNumber(update, null, / unruns/),
      runsOverflowingFor: util.getTeam(eventData, update, /\n/, / gain/)
    };
  } else if (update.indexOf('solar panels absorb') >= 0) {
    analysis.specialMeta.kind = 'runsCollected';
    analysis.specialMeta.details = {
      runsCollected: util.getNumber(update, null, / runs are collected/),
      runsCollectedFrom: util.getTeam(eventData, update, /saved for the /, /'s next game/)
    };
  } else if (update.indexOf('sun 2 smiles') >= 0) {
    analysis.specialMeta.kind = 'sun2';
    analysis.specialMeta.details = {
      runsCollected: util.getNumber(update, null, /! sun 2 smiles/),
      winSetUpon: util.getTeam(eventData, update, /set a win upon the /, /\./)
    };
  } else if (update.indexOf('black hole swallows') >= 0) {
    analysis.specialMeta.kind = 'blackHole';
    analysis.specialMeta.details = {
      runsCollected: util.getNumber(update, /collect /, /!/),
      winSwallowedFrom: util.getTeam(eventData, update, /swallows the runs and a /, / win./)
    }; // see if carcinization triggered by the black hole

    if (update.indexOf('the baltimore crabs steal') >= 0) {
      analysis.specialMeta.details.playerStolen = util.getPlayer(update, /crabs steal /, / for the remainder/);
    }
  } else if (update.indexOf('grind rail') >= 0) {
    analysis.specialMeta.kind = 'grindRail';
    var tricks = util.getSkateTricks(update);
    analysis.specialMeta.details = _objectSpread({
      player: util.getPlayer(update, /^/, / hops on/)
    }, tricks);

    if (update.indexOf('safe!') >= 0) {
      analysis.specialMeta.details = _objectSpread(_objectSpread({}, analysis.specialMeta.details), {}, {
        grindSuccess: true
      });
    } else {
      // out!
      analysis.specialMeta.details = _objectSpread(_objectSpread({}, analysis.specialMeta.details), {}, {
        grindSuccess: false
      });
      analysis.out = true;
      analysis.outMeta.kind = 'railBail';
    }
  } // if we found something, then:


  if (analysis.specialMeta.kind) {
    analysis.special = true;
    return true;
  }

  return false;
};

module.exports = {
  check: check
};
},{"./util":16}],15:[function(require,module,exports){
"use strict";

var util = require('./util');

var check = function check(analysis, eventData) {
  var update = util.getUpdateText(eventData);

  if (update.indexOf('steal') >= 0) {
    analysis.steal = true;

    if (update.indexOf('caught') >= 0) {
      analysis.stealMeta.success = false;
      analysis.out = true;
      analysis.outMeta.kind = 'caughtStealing';
    } else {
      analysis.stealMeta.success = true;
    } // baseStolen is 0-indexed


    if (update.search(/steal.*first/) !== -1) {
      analysis.stealMeta.baseStolen = 0;
    } else if (update.search(/steal.*second/) !== -1) {
      analysis.stealMeta.baseStolen = 1;
    } else if (update.search(/steal.*third/) !== -1) {
      analysis.stealMeta.baseStolen = 2;
    } else if (update.search(/steal.*fourth/) !== -1) {
      analysis.stealMeta.baseStolen = 3; // this may have been a run if there are 4 bases in play

      if (!(eventData !== null && eventData !== void 0 && eventData.scoreUpdate) && analysis.stealMeta.success && (eventData === null || eventData === void 0 ? void 0 : eventData.homeBatter) !== null && (eventData === null || eventData === void 0 ? void 0 : eventData.awayBases) === 4) {
        analysis.runsScored = 1;
      } else if (!(eventData !== null && eventData !== void 0 && eventData.scoreUpdate) && analysis.stealMeta.success && (eventData === null || eventData === void 0 ? void 0 : eventData.awayBatter) !== null && (eventData === null || eventData === void 0 ? void 0 : eventData.homeBases) === 4) {
        analysis.runsScored = 1;
      } // otherwise scores are captured in src/misc.js

    } else if (update.search(/steal.*home/) !== -1) {
      // see if home or away stole the base
      if ((eventData === null || eventData === void 0 ? void 0 : eventData.homeBatter) !== null) {
        analysis.stealMeta.baseStolen = (eventData === null || eventData === void 0 ? void 0 : eventData.awayBases) - 1 || 3;
      } else if ((eventData === null || eventData === void 0 ? void 0 : eventData.awaBatter) !== null) {
        analysis.stealMeta.baseStolen = (eventData === null || eventData === void 0 ? void 0 : eventData.homeBases) - 1 || 3;
      } else {
        // older games don't have these fields, or may have both
        // home and away batters filled in; just assumed home base
        // is base #3 in those cases, i guess
        analysis.stealMeta.baseStolen = 3;
      }

      if (!(eventData !== null && eventData !== void 0 && eventData.scoreUpdate)) {
        analysis.runsScored = 1;
      } // otherwise scores are captured in src/misc.js

    } // check for blaserunning scores pre s-12 (otherwise captured in
    // src/misc.js)


    if (!(eventData !== null && eventData !== void 0 && eventData.scoreUpdate) && update.indexOf('blaserunning') >= 0) {
      analysis.runsScored = util.getNumber(update, /scores /, / with blaserunning/);
    }
  }
};

module.exports = {
  check: check
};
},{"./util":16}],16:[function(require,module,exports){
"use strict";

var getUpdateText = function getUpdateText(eventData) {
  var _eventData$lastUpdate;

  return (eventData === null || eventData === void 0 ? void 0 : (_eventData$lastUpdate = eventData.lastUpdate) === null || _eventData$lastUpdate === void 0 ? void 0 : _eventData$lastUpdate.toLowerCase()) || '';
};
/*
 * will look through s for a number (supports positive integers & floats),
 * pre is regex to prepend to the regex for numbers
 * post is regex to append to the regex for numbers
 * will return a number or null
 */


var getNumber = function getNumber(s, pre, post) {
  var num = null;
  var numRegex = /((\d+)?(\.\d+)?)/;

  if (!pre) {
    pre = new RegExp('');
  }

  if (!post) {
    post = new RegExp('');
  }

  var regex = new RegExp(pre.source + numRegex.source + post.source);
  var matches = regex[Symbol.match](s);

  if (matches && matches[1]) {
    num = Number(matches[1]) || num;
  }

  return num;
};
/*
 * will look through s for a match between pre and post
 * pre is regex to prepend to the match
 * post is regex to append to the match
 * will return the match, or an empty string
 */


var getMatch = function getMatch(s, pre, post) {
  var matchRegex = /(.*)/;

  if (!pre) {
    pre = new RegExp('');
  }

  if (!post) {
    post = new RegExp('');
  }

  var regex = new RegExp(pre.source + matchRegex.source + post.source);
  var matches = regex[Symbol.match](s);

  if (matches && matches[1]) {
    return matches[1];
  }

  return '';
};
/*
 * will look through s for a team name
 * pre is regex to prepend to the regex for the team name
 * post is regex to append to the regex the team name
 * will return 'home' 'away' or ''
 */


var getTeam = function getTeam(eventData, s, pre, post) {
  var team = getMatch(s, pre, post);

  if (team) {
    team = eventData.homeTeamNickname.toLowerCase() === team ? 'home' : 'away';
  }

  return team;
};

var titleCase = function titleCase(s) {
  if (!s) {
    return;
  }

  ;
  return s.split(' ').map(function (word) {
    if (word) {
      return "".concat(word[0].toUpperCase()).concat(word.slice(1));
    }
  }).join(' ');
};
/*
 * will look through s for a player name
 * pre is regex to prepend to the regex for the team name
 * post is regex to append to the regex the team name
 * will return the player name or ''
 */


var getPlayer = function getPlayer(s, pre, post) {
  var player = getMatch(s, pre, post);
  return titleCase(player);
};

var getSkateTricks = function getSkateTricks(update) {
  var grindTrick, grindScore, landTrick, landScore;
  var tricks = update.match(/ a (.*) \((\d+)/g); // grind trick

  if (tricks[0]) {
    grindTrick = titleCase(getMatch(tricks[0], /a /, / \(/));
    grindScore = getNumber(tricks[0], /\(/, /$/);
  } // land trick


  if (tricks[1]) {
    landTrick = titleCase(getMatch(tricks[1], /a /, / \(/));
    landScore = getNumber(tricks[1], /\(/, /$/);
  }

  return {
    grindTrick: grindTrick,
    grindScore: grindScore,
    landTrick: landTrick,
    landScore: landScore
  };
};

module.exports = {
  getUpdateText: getUpdateText,
  getNumber: getNumber,
  getTeam: getTeam,
  getPlayer: getPlayer,
  getSkateTricks: getSkateTricks
};
},{}],17:[function(require,module,exports){
"use strict";

var util = require('./util');

var check = function check(analysis, eventData) {
  var update = util.getUpdateText(eventData);

  if (update.indexOf('draws a walk') >= 0) {
    analysis.walk = true; // check if any runs were scored on the play prior to s12

    if (!(eventData !== null && eventData !== void 0 && eventData.scoreUpdate) && update.indexOf('scores') >= 0) {
      analysis.runsScored = 1;
    } // otherwise scores captured in src/misc.js
    // check for mind trick shenanigans


    if (update.indexOf('uses a mind trick')) {
      analysis.walkMeta.mindTrick = true;

      if (update.indexOf('strikes out')) {
        analysis.out = true;
        analysis.outMeta.kind = 'strike';
      }
    }

    return true;
  }

  return false;
};

module.exports = {
  check: check
};
},{"./util":16}],18:[function(require,module,exports){
/**
 * @author Kate
 */

var tracery = function() {
    var random = Math.random;

    function setRandom(newRandom) {
        random = newRandom;
    }

    var TraceryNode = function(parent, childIndex, settings) {
        this.errors = [];

        // No input? Add an error, but continue anyways
        if (settings.raw === undefined) {
            this.errors.push("Empty input for node");
            settings.raw = "";
        }

        // If the root node of an expansion, it will have the grammar passed as the 'parent'
        //  set the grammar from the 'parent', and set all other values for a root node
        if ( parent instanceof tracery.Grammar) {
            this.grammar = parent;
            this.parent = null;
            this.depth = 0;
            this.childIndex = 0;
        } else {
            this.grammar = parent.grammar;
            this.parent = parent;
            this.depth = parent.depth + 1;
            this.childIndex = childIndex;
        }

        this.raw = settings.raw;
        this.type = settings.type;
        this.isExpanded = false;

        if (!this.grammar) {
            console.warn("No grammar specified for this node", this);
        }

    };

    TraceryNode.prototype.toString = function() {
        return "Node('" + this.raw + "' " + this.type + " d:" + this.depth + ")";
    };

    // Expand the node (with the given child rule)
    //  Make children if the node has any
    TraceryNode.prototype.expandChildren = function(childRule, preventRecursion) {
        this.children = [];
        this.finishedText = "";

        // Set the rule for making children,
        // and expand it into section
        this.childRule = childRule;
        if (this.childRule !== undefined) {
            var sections = tracery.parse(childRule);

            // Add errors to this
            if (sections.errors.length > 0) {
                this.errors = this.errors.concat(sections.errors);

            }

            for (var i = 0; i < sections.length; i++) {
                this.children[i] = new TraceryNode(this, i, sections[i]);
                if (!preventRecursion)
                    this.children[i].expand(preventRecursion);

                // Add in the finished text
                this.finishedText += this.children[i].finishedText;
            }
        } else {
            // In normal operation, this shouldn't ever happen
            this.errors.push("No child rule provided, can't expand children");
            console.warn("No child rule provided, can't expand children");
        }
    };

    // Expand this rule (possibly creating children)
    TraceryNode.prototype.expand = function(preventRecursion) {

        if (!this.isExpanded) {
            this.isExpanded = true;

            this.expansionErrors = [];

            // Types of nodes
            // -1: raw, needs parsing
            //  0: Plaintext
            //  1: Tag ("#symbol.mod.mod2.mod3#" or "#[pushTarget:pushRule]symbol.mod")
            //  2: Action ("[pushTarget:pushRule], [pushTarget:POP]", more in the future)

            switch(this.type) {
            // Raw rule
            case -1:

                this.expandChildren(this.raw, preventRecursion);
                break;

            // plaintext, do nothing but copy text into finsihed text
            case 0:
                this.finishedText = this.raw;
                break;

            // Tag
            case 1:
                // Parse to find any actions, and figure out what the symbol is
                this.preactions = [];
                this.postactions = [];

                var parsed = tracery.parseTag(this.raw);

                // Break into symbol actions and modifiers
                this.symbol = parsed.symbol;
                this.modifiers = parsed.modifiers;

                // Create all the preactions from the raw syntax
                for (var i = 0; i < parsed.preactions.length; i++) {
                    this.preactions[i] = new NodeAction(this, parsed.preactions[i].raw);
                }
                for (var i = 0; i < parsed.postactions.length; i++) {
                    //   this.postactions[i] = new NodeAction(this, parsed.postactions[i].raw);
                }

                // Make undo actions for all preactions (pops for each push)
                for (var i = 0; i < this.preactions.length; i++) {
                    if (this.preactions[i].type === 0)
                        this.postactions.push(this.preactions[i].createUndo());
                }

                // Activate all the preactions
                for (var i = 0; i < this.preactions.length; i++) {
                    this.preactions[i].activate();
                }

                this.finishedText = this.raw;

                // Expand (passing the node, this allows tracking of recursion depth)

                var selectedRule = this.grammar.selectRule(this.symbol, this, this.errors);

                this.expandChildren(selectedRule, preventRecursion);

                // Apply modifiers
                // TODO: Update parse function to not trigger on hashtags within parenthesis within tags,
                //   so that modifier parameters can contain tags "#story.replace(#protagonist#, #newCharacter#)#"
                for (var i = 0; i < this.modifiers.length; i++) {
                    var modName = this.modifiers[i];
                    var modParams = [];
                    if (modName.indexOf("(") > 0) {
                        var regExp = /\(([^)]+)\)/;

                        // Todo: ignore any escaped commas.  For now, commas always split
                        var results = regExp.exec(this.modifiers[i]);
                        if (!results || results.length < 2) {
                        } else {
                            var modParams = results[1].split(",");
                            modName = this.modifiers[i].substring(0, modName.indexOf("("));
                        }

                    }

                    var mod = this.grammar.modifiers[modName];

                    // Missing modifier?
                    if (!mod) {
                        this.errors.push("Missing modifier " + modName);
                        this.finishedText += "((." + modName + "))";
                    } else {
                        this.finishedText = mod(this.finishedText, modParams);

                    }

                }

                // Perform post-actions
                for (var i = 0; i < this.postactions.length; i++) {
                    this.postactions[i].activate();
                }
                break;
            case 2:

                // Just a bare action?  Expand it!
                this.action = new NodeAction(this, this.raw);
                this.action.activate();

                // No visible text for an action
                // TODO: some visible text for if there is a failure to perform the action?
                this.finishedText = "";
                break;

            }

        } else {
            //console.warn("Already expanded " + this);
        }

    };

    TraceryNode.prototype.clearEscapeChars = function() {

        this.finishedText = this.finishedText.replace(/\\\\/g, "DOUBLEBACKSLASH").replace(/\\/g, "").replace(/DOUBLEBACKSLASH/g, "\\");
    };

    // An action that occurs when a node is expanded
    // Types of actions:
    // 0 Push: [key:rule]
    // 1 Pop: [key:POP]
    // 2 function: [functionName(param0,param1)] (TODO!)
    function NodeAction(node, raw) {
        /*
         if (!node)
         console.warn("No node for NodeAction");
         if (!raw)
         console.warn("No raw commands for NodeAction");
         */

        this.node = node;

        var sections = raw.split(":");
        this.target = sections[0];

        // No colon? A function!
        if (sections.length === 1) {
            this.type = 2;

        }

        // Colon? It's either a push or a pop
        else {
            this.rule = sections[1];
            if (this.rule === "POP") {
                this.type = 1;
            } else {
                this.type = 0;
            }
        }
    }


    NodeAction.prototype.createUndo = function() {
        if (this.type === 0) {
            return new NodeAction(this.node, this.target + ":POP");
        }
        // TODO Not sure how to make Undo actions for functions or POPs
        return null;
    };

    NodeAction.prototype.activate = function() {
        var grammar = this.node.grammar;
        switch(this.type) {
        case 0:
            // split into sections (the way to denote an array of rules)
            this.ruleSections = this.rule.split(",");
            this.finishedRules = [];
            this.ruleNodes = [];
            for (var i = 0; i < this.ruleSections.length; i++) {
                var n = new TraceryNode(grammar, 0, {
                    type : -1,
                    raw : this.ruleSections[i]
                });

                n.expand();

                this.finishedRules.push(n.finishedText);
            }

            // TODO: escape commas properly
            grammar.pushRules(this.target, this.finishedRules, this);
            break;
        case 1:
            grammar.popRules(this.target);
            break;
        case 2:
            grammar.flatten(this.target, true);
            break;
        }

    };

    NodeAction.prototype.toText = function() {
        switch(this.type) {
        case 0:
            return this.target + ":" + this.rule;
        case 1:
            return this.target + ":POP";
        case 2:
            return "((some function))";
        default:
            return "((Unknown Action))";
        }
    };

    // Sets of rules
    // Can also contain conditional or fallback sets of rulesets)
    function RuleSet(grammar, raw) {
        this.raw = raw;
        this.grammar = grammar;
        this.falloff = 1;

        if (Array.isArray(raw)) {
            this.defaultRules = raw;
        } else if ( typeof raw === 'string' || raw instanceof String) {
            this.defaultRules = [raw];
        } else if (raw === 'object') {
            // TODO: support for conditional and hierarchical rule sets
        }

    };

    RuleSet.prototype.selectRule = function(errors) {
        // console.log("Get rule", this.raw);
        // Is there a conditional?
        if (this.conditionalRule) {
            var value = this.grammar.expand(this.conditionalRule, true);
            // does this value match any of the conditionals?
            if (this.conditionalValues[value]) {
                var v = this.conditionalValues[value].selectRule(errors);
                if (v !== null && v !== undefined)
                    return v;
            }
            // No returned value?
        }

        // Is there a ranked order?
        if (this.ranking) {
            for (var i = 0; i < this.ranking.length; i++) {
                var v = this.ranking.selectRule();
                if (v !== null && v !== undefined)
                    return v;
            }

            // Still no returned value?
        }

        if (this.defaultRules !== undefined) {
            var index = 0;
            // Select from this basic array of rules

            // Get the distribution from the grammar if there is no other
            var distribution = this.distribution;
            if (!distribution)
                distribution = this.grammar.distribution;

            switch(distribution) {
            case "shuffle":

                // create a shuffle desk
                if (!this.shuffledDeck || this.shuffledDeck.length === 0) {
                    // make an array
                    this.shuffledDeck = fyshuffle(Array.apply(null, {
                        length : this.defaultRules.length
                    }).map(Number.call, Number), this.falloff);

                }

                index = this.shuffledDeck.pop();

                break;
            case "weighted":
                errors.push("Weighted distribution not yet implemented");
                break;
            case "falloff":
                errors.push("Falloff distribution not yet implemented");
                break;
            default:

                index = Math.floor(Math.pow(random(), this.falloff) * this.defaultRules.length);
                break;
            }

            if (!this.defaultUses)
                this.defaultUses = [];
            this.defaultUses[index] = ++this.defaultUses[index] || 1;
            return this.defaultRules[index];
        }

        errors.push("No default rules defined for " + this);
        return null;

    };

    RuleSet.prototype.clearState = function() {

        if (this.defaultUses) {
            this.defaultUses = [];
        }
    };

    function fyshuffle(array, falloff) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var Symbol = function(grammar, key, rawRules) {
        // Symbols can be made with a single value, and array, or array of objects of (conditions/values)
        this.key = key;
        this.grammar = grammar;
        this.rawRules = rawRules;

        this.baseRules = new RuleSet(this.grammar, rawRules);
        this.clearState();

    };

    Symbol.prototype.clearState = function() {

        // Clear the stack and clear all ruleset usages
        this.stack = [this.baseRules];

        this.uses = [];
        this.baseRules.clearState();
    };

    Symbol.prototype.pushRules = function(rawRules) {
        var rules = new RuleSet(this.grammar, rawRules);
        this.stack.push(rules);
    };

    Symbol.prototype.popRules = function() {
        this.stack.pop();
    };

    Symbol.prototype.selectRule = function(node, errors) {
        this.uses.push({
            node : node
        });

        if (this.stack.length === 0) {
            errors.push("The rule stack for '" + this.key + "' is empty, too many pops?");
            return "((" + this.key + "))";
        }

        return this.stack[this.stack.length - 1].selectRule();
    };

    Symbol.prototype.getActiveRules = function() {
        if (this.stack.length === 0) {
            return null;
        }
        return this.stack[this.stack.length - 1].selectRule();
    };

    Symbol.prototype.rulesToJSON = function() {
        return JSON.stringify(this.rawRules);
    };

    var Grammar = function(raw, settings) {
        this.modifiers = {};
        this.loadFromRawObj(raw);
    };

    Grammar.prototype.clearState = function() {
        var keys = Object.keys(this.symbols);
        for (var i = 0; i < keys.length; i++) {
            this.symbols[keys[i]].clearState();
        }
    };

    Grammar.prototype.addModifiers = function(mods) {

        // copy over the base modifiers
        for (var key in mods) {
            if (mods.hasOwnProperty(key)) {
                this.modifiers[key] = mods[key];
            }
        };

    };

    Grammar.prototype.loadFromRawObj = function(raw) {

        this.raw = raw;
        this.symbols = {};
        this.subgrammars = [];

        if (this.raw) {
            // Add all rules to the grammar
            for (var key in this.raw) {
                if (this.raw.hasOwnProperty(key)) {
                    this.symbols[key] = new Symbol(this, key, this.raw[key]);
                }
            }
        }
    };

    Grammar.prototype.createRoot = function(rule) {
        // Create a node and subnodes
        var root = new TraceryNode(this, 0, {
            type : -1,
            raw : rule,
        });

        return root;
    };

    Grammar.prototype.expand = function(rule, allowEscapeChars) {
        var root = this.createRoot(rule);
        root.expand();
        if (!allowEscapeChars)
            root.clearEscapeChars();

        return root;
    };

    Grammar.prototype.flatten = function(rule, allowEscapeChars) {
        var root = this.expand(rule, allowEscapeChars);

        return root.finishedText;
    };

    Grammar.prototype.toJSON = function() {
        var keys = Object.keys(this.symbols);
        var symbolJSON = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            symbolJSON.push(' "' + key + '" : ' + this.symbols[key].rulesToJSON());
        }
        return "{\n" + symbolJSON.join(",\n") + "\n}";
    };

    // Create or push rules
    Grammar.prototype.pushRules = function(key, rawRules, sourceAction) {

        if (this.symbols[key] === undefined) {
            this.symbols[key] = new Symbol(this, key, rawRules);
            if (sourceAction)
                this.symbols[key].isDynamic = true;
        } else {
            this.symbols[key].pushRules(rawRules);
        }
    };

    Grammar.prototype.popRules = function(key) {
        if (!this.symbols[key])
            this.errors.push("Can't pop: no symbol for key " + key);
        this.symbols[key].popRules();
    };

    Grammar.prototype.selectRule = function(key, node, errors) {
        if (this.symbols[key]) {
            var rule = this.symbols[key].selectRule(node, errors);

            return rule;
        }

        // Failover to alternative subgrammars
        for (var i = 0; i < this.subgrammars.length; i++) {

            if (this.subgrammars[i].symbols[key])
                return this.subgrammars[i].symbols[key].selectRule();
        }

        // No symbol?
        errors.push("No symbol for '" + key + "'");
        return "((" + key + "))";
    };

    // Parses a plaintext rule in the tracery syntax
    tracery = {

        createGrammar : function(raw) {
            return new Grammar(raw);
        },

        setRandom: setRandom,

        // Parse the contents of a tag
        parseTag : function(tagContents) {

            var parsed = {
                symbol : undefined,
                preactions : [],
                postactions : [],
                modifiers : []
            };
            var sections = tracery.parse(tagContents);
            var symbolSection = undefined;
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].type === 0) {
                    if (symbolSection === undefined) {
                        symbolSection = sections[i].raw;
                    } else {
                        throw ("multiple main sections in " + tagContents);
                    }
                } else {
                    parsed.preactions.push(sections[i]);
                }
            }

            if (symbolSection === undefined) {
                //   throw ("no main section in " + tagContents);
            } else {
                var components = symbolSection.split(".");
                parsed.symbol = components[0];
                parsed.modifiers = components.slice(1);
            }
            return parsed;
        },

        parse : function(rule) {
            var depth = 0;
            var inTag = false;
            var sections = [];
            var escaped = false;

            var errors = [];
            var start = 0;

            var escapedSubstring = "";
            var lastEscapedChar = undefined;

            if (rule === null) {
                var sections = [];
                sections.errors = errors;

                return sections;
            }

            function createSection(start, end, type) {
                if (end - start < 1) {
                    if (type === 1)
                        errors.push(start + ": empty tag");
                    if (type === 2)
                        errors.push(start + ": empty action");

                }
                var rawSubstring;
                if (lastEscapedChar !== undefined) {
                    rawSubstring = escapedSubstring + "\\" + rule.substring(lastEscapedChar + 1, end);

                } else {
                    rawSubstring = rule.substring(start, end);
                }
                sections.push({
                    type : type,
                    raw : rawSubstring
                });
                lastEscapedChar = undefined;
                escapedSubstring = "";
            };

            for (var i = 0; i < rule.length; i++) {

                if (!escaped) {
                    var c = rule.charAt(i);

                    switch(c) {

                    // Enter a deeper bracketed section
                    case '[':
                        if (depth === 0 && !inTag) {
                            if (start < i)
                                createSection(start, i, 0);
                            start = i + 1;
                        }
                        depth++;
                        break;

                    case ']':
                        depth--;

                        // End a bracketed section
                        if (depth === 0 && !inTag) {
                            createSection(start, i, 2);
                            start = i + 1;
                        }
                        break;

                    // Hashtag
                    //   ignore if not at depth 0, that means we are in a bracket
                    case '#':
                        if (depth === 0) {
                            if (inTag) {
                                createSection(start, i, 1);
                                start = i + 1;
                            } else {
                                if (start < i)
                                    createSection(start, i, 0);
                                start = i + 1;
                            }
                            inTag = !inTag;
                        }
                        break;

                    case '\\':
                        escaped = true;
                        escapedSubstring = escapedSubstring + rule.substring(start, i);
                        start = i + 1;
                        lastEscapedChar = i;
                        break;
                    }
                } else {
                    escaped = false;
                }
            }
            if (start < rule.length)
                createSection(start, rule.length, 0);

            if (inTag) {
                errors.push("Unclosed tag");
            }
            if (depth > 0) {
                errors.push("Too many [");
            }
            if (depth < 0) {
                errors.push("Too many ]");
            }

            // Strip out empty plaintext sections

            sections = sections.filter(function(section) {
                if (section.type === 0 && section.raw.length === 0)
                    return false;
                return true;
            });
            sections.errors = errors;
            return sections;
        },
    };

    function isVowel(c) {
        var c2 = c.toLowerCase();
        return (c2 === 'a') || (c2 === 'e') || (c2 === 'i') || (c2 === 'o') || (c2 === 'u');
    };

    function isAlphaNum(c) {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
    };
    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    var baseEngModifiers = {

        replace : function(s, params) {
            //http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
            return s.replace(new RegExp(escapeRegExp(params[0]), 'g'), params[1]);
        },

        capitalizeAll : function(s) {
            var s2 = "";
            var capNext = true;
            for (var i = 0; i < s.length; i++) {

                if (!isAlphaNum(s.charAt(i))) {
                    capNext = true;
                    s2 += s.charAt(i);
                } else {
                    if (!capNext) {
                        s2 += s.charAt(i);
                    } else {
                        s2 += s.charAt(i).toUpperCase();
                        capNext = false;
                    }

                }
            }
            return s2;
        },

        capitalize : function(s) {
            return s.charAt(0).toUpperCase() + s.substring(1);
        },

        a : function(s) {
            if (s.length > 0) {
                if (s.charAt(0).toLowerCase() === 'u') {
                    if (s.length > 2) {
                        if (s.charAt(2).toLowerCase() === 'i')
                            return "a " + s;
                    }
                }

                if (isVowel(s.charAt(0))) {
                    return "an " + s;
                }
            }

            return "a " + s;

        },

        firstS : function(s) {
            console.log(s);
            var s2 = s.split(" ");

            var finished = baseEngModifiers.s(s2[0]) + " " + s2.slice(1).join(" ");
            console.log(finished);
            return finished;
        },

        s : function(s) {
            switch (s.charAt(s.length -1)) {
            case 's':
                return s + "es";
                break;
            case 'h':
                return s + "es";
                break;
            case 'x':
                return s + "es";
                break;
            case 'y':
                if (!isVowel(s.charAt(s.length - 2)))
                    return s.substring(0, s.length - 1) + "ies";
                else
                    return s + "s";
                break;
            default:
                return s + "s";
            }
        },
        ed : function(s) {
            switch (s.charAt(s.length -1)) {
            case 's':
                return s + "ed";
                break;
            case 'e':
                return s + "d";
                break;
            case 'h':
                return s + "ed";
                break;
            case 'x':
                return s + "ed";
                break;
            case 'y':
                if (!isVowel(s.charAt(s.length - 2)))
                    return s.substring(0, s.length - 1) + "ied";
                else
                    return s + "d";
                break;
            default:
                return s + "ed";
            }
        }
    };

    tracery.baseEngModifiers = baseEngModifiers; 
    // Externalize
    tracery.TraceryNode = TraceryNode;

    tracery.Grammar = Grammar;
    tracery.Symbol = Symbol;
    tracery.RuleSet = RuleSet;
    return tracery;
}();

module.exports = tracery;

},{}],19:[function(require,module,exports){
const util = require('./util');
const highlight = require('./highlight');

let ready = false;

let $dialogs;
let $lineOne;
let $lineTwo;
let $control;

let lineOneAnimating;
let lineTwoAnimating;

let cur;
let prev;
let next;


const init = () => {
  console.debug('Dialog.init()');

  $dialogs = $('#highlights-dialog__text p');
  $lineOne = $dialogs.first();
  $lineTwo = $dialogs.last();
  $control = $('.dialog-control');

  lineOneAnimating = false;
  lineTwoAnimating = false;

  $dialogs.each((_, el) => {
    util.prefixedOn($(el), 'AnimationEnd', onAnimEnd);
  });

  ready = true;
};

const startHighlight = (highlights, skipAnimation) => {;
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!ready) init();

  // reset dialog
  //highlight.curDialogPart = 0;
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  cur.started = true;
  if (skipAnimation) {
    showHighlight(cur);
  } else {
    animateHighlight(cur);
  }
};

const animateHighlight = (highlight) => {
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideControl();
  animate('one');
};

const showHighlight = (highlight) => {
  $lineOne.removeClass('animate');
  $lineTwo.removeClass('animate');

  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  $lineOne.addClass('animation-finished');
  $lineTwo.addClass('animation-finished');

  showControl();
};

const animate = (line) => {
  if (line === 'one') {
    //stopAnimate('two');
    $lineOne.addClass('animate');
    lineOneAnimating = true;
  } else if (line === 'two') {
    //stopAnimate('one');
    $lineTwo.addClass('animate');
    lineTwoAnimating = true;
  }
};

const stopAnimate = (line) => {
  if (line === 'one') {
    $lineOne
      .removeClass('animate')
      .addClass('animation-finished');
    lineOneAnimating = false;
  } else if (line === 'two') {
    $lineTwo
      .removeClass('animate')
      .addClass('animation-finished');
    lineTwoAnimating = false;
  }
};

const onAnimEnd = () => {
  // check for the second animation first so the second animation
  // doesn't get triggered then immediately ended inside this func
  if (lineTwoAnimating) {
    stopAnimate('two');

    showControl();
  }

  if (lineOneAnimating) {
    stopAnimate('one');

    // if there's text in lineTwo, animate it
    if ($lineTwo.text().length) {
      animate('two');
    } else {
      showControl();
    }
  }
};

const showControl = () => {
  showPrev();
  showNext();
};

// show next arrow if:
// there are parts left to this highlight
// there are highlights left to the story
const showNext = () => {
  // todo: show arrow if next, but move into outro
  if (highlight.hasDialogLeft(cur) || next) {
    $control.last().addClass('show');
  }
};

// show pre arrow if:
// there are parts before this highlight
// there are highlights earlier in the story
const showPrev = () => {
  // todo: show arrow if next, but move into outro
  if (highlight.hasDialogPrev(cur) || prev) {
    $control.first().addClass('show');
  }
};

const hideControl = () => {
  $control.removeClass('show');
};

const continueHighlight = (highlights) => {
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!cur) { return false; }
  if (!cur.started) { return false; }

  // if currently animating, simply end the animation
  if (lineOneAnimating) {

    $lineOne
      .removeClass('animate')
      .addClass('animation-finished');
    lineOneAnimating = false;
    $lineTwo
      .removeClass('animate')
      .addClass('animation-finished');
    lineTwoAnimating = false;
    showControl();

  } else if (lineTwoAnimating) {

    $lineTwo
      .removeClass('animate')
      .addClass('animation-finished');
    lineTwoAnimating = false;
    showControl();

  } else {
    cur.curDialogPart++;

    // no more text to this highlight
    if (cur.curDialogPart === cur.dialogParts.length) {
      cur.curDialogPart = 0;
      return false;
    }

    animateHighlight(cur);
  }

  return true;
};

const reverseHighlight = (highlights) => {
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!cur) { return false; }
  if (!cur.started) { return false; }

  cur.curDialogPart--;

  // no more text to this highlight
  if (cur.curDialogPart === -1) {
    cur.curDialogPart = 0;
    return false;
  }

  showHighlight(cur);
  return true;
};

const setIntro = (one, two) => {
  if (!ready) init();

  $lineOne.text(one);
  $lineTwo.text(two);
};

module.exports = {
  startHighlight,
  continueHighlight,
  reverseHighlight,
  setIntro,
};


},{"./highlight":22,"./util":24}],20:[function(require,module,exports){
const init = () => {
  $('#download-story').on('click', () => {
    $('#highlights-json').attr('data', JSON.stringify(highlights));

    let text = encodeURIComponent($('html').prop('outerHTML'));
    let filename = 'blaseball-story';

    const $gameName = $('.game-name');

    if ($gameName.text()) {
      filename = $gameName.text().replace(',', '').toLowerCase().replaceAll(' ', '-');
    }

    filename += '.html';

    // download code adapted from:
    // https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
    const $dlButton = $('<a>')
      .attr('href', `data:text/plain;charset=utf-8,${text}`)
      .attr('download', filename)
      .css('display', 'none')
      .appendTo($('body'));

    $dlButton[0].click();
    $dlButton.remove();
  });
};

module.exports = {
  init,
};


},{}],21:[function(require,module,exports){
const mlustard = require('mlustard');

const highlight = require('./highlight');
const util = require('./util');

let gameEvents = {};
let highlights = [];

const isPlayBall = (gameEv) => {
  return gameEv.lastUpdate.indexOf('Play ball') >= 0;
};

const generateHighlights = (cb) => {
  $('.game-event__container input:checked').each((_, checked) => {
    const id = $(checked).attr('id');
    let visual = 'diamond';

    if (isPlayBall(gameEvents[id].ev.data)) {
      visual = 'intro';
    }

    const hl = highlight.makeHighlight({
      id: id,
      gameEvent: gameEvents[id].ev,
      mlustard: gameEvents[id].mlustard,
      visual,
    });

    highlights.push(hl);
  });

  console.debug('generateHighlights:', highlights);
  cb(highlights);
};

const makeCountCircle = (classes) => {
  return $('<span>').addClass(classes);
};

const renderGameEv = (gameEv) => {
  const data = gameEv.ev.data;

  if (!data.lastUpdate) {
    return;
  }

  const $gameEv = $('<div>');

  // form stuff
  const $chContainer = $('<div>');
  const $check = $('<input>');
  const $label = $('<label>');

  let update = `${data.lastUpdate} ${data.scoreUpdate || ''}`;

  $check
    .addClass('form-check-input')
    .attr('id', gameEv.ev.hash)
    .attr('type', 'checkbox')
    .attr('name', 'game event')
    .val('');

  //if (isPlayBall(data)) {
    $check
      .attr('checked', true)
      .attr('disabled', true);
  //}

  $label
    .addClass('form-check-label')
    .attr('for', gameEv.ev.hash)
    .text(update);

  $chContainer
    .addClass('form-check col-7')
    .append($check)
    .append($label);

  // game event info
  const $gameEvInfo = $('<div>');
  const $score = $('<span>');
  const $bases = $('<span>');
  const $balls = $('<span>');
  const $strikes = $('<span>');
  const $outs = $('<span>');

  let homeEmoji = util.getEmoji('home', data);
  let awayEmoji = util.getEmoji('away', data);

  let score = `${homeEmoji} ${data.homeScore} : ${awayEmoji} ${data.awayScore}`;
  let bases = '';

  // fill in balls count
  for (let ball = 0; ball < data.atBatBalls; ball++) {
    $balls.append(makeCountCircle('circle full'));
  }

  for (let ball = 3; ball > data.atBatBalls; ball--) {
    $balls.append(makeCountCircle('circle empty'));
  }

  // fill in strikes count
  for (let strike = 0; strike < data.atBatStrikes; strike++) {
    $strikes.append(makeCountCircle('circle full'));
  }

  for (let strike = 2; strike > data.atBatStrikes; strike--) {
    $strikes.append(makeCountCircle('circle empty'));
  }

  // fill in outs count
  for (let out = 0; out < data.halfInningOuts; out++) {
    $outs.append(makeCountCircle('circle full'));
  }

  for (let out = 2; out > data.halfInningOuts; out--) {
    $outs.append(makeCountCircle('circle empty'));
  }

  // fill in base diamonds
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.third.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.second.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.first.playerName));
  // todo: deal with 4 bases
  //$bases.append(makeBaseDiamond(gameEv.mlustard.baseRunners.first.playerName));

  $score
    .text(score);
  $balls
    .attr('title', 'Balls')
    .addClass('balls-count');
  $strikes
    .attr('title', 'Strikes')
    .addClass('strikes-count');
  $outs
    .attr('title', 'Outs')
    .addClass('outs-count');
  $bases
    .attr('title', 'Bases occupied')
    .addClass('bases-occupied');

  $gameEvInfo
    .addClass('col-5')
    .append($score)
    .append($bases)
    .append($balls)
    .append($strikes)
    .append($outs);

  $gameEv
    .addClass('game-event__container row border')
    .append($chContainer)
    .append($gameEvInfo);

  return $gameEv;
};

const renderGameEvs = () => {
  stopLoading();
  //$('#game-events-select').removeClass('d-none');

  const $container = $('#game-events-choose__container');

  // gotta render some general stuff too (home vs away, s#d#, weather)
  // also: label for the select, and the select itself
  for (let id in gameEvents) {
    let $gameEv = renderGameEv(gameEvents[id]);

    if ($gameEv) {
      $container.append($gameEv);
    }
  }

  // hack for mvp:
  $('#game-events-choose__form button')[0].click();
};

const getGameEvents = async (gameId, nextPage) => {
  let gamesURL = `https://api.sibr.dev/chronicler/v1/games/updates?game=${gameId}`;

  if (nextPage) {
    gamesURL += `&page=${nextPage}`;
  }

  startLoading();

  const resp = await fetch(gamesURL);

  if (resp.ok) {
    const data = await resp.json();

    for (let gameEv of data.data) {
      gameEvents[gameEv.hash] = {
        ev: gameEv,
        mlustard: mlustard.analyzeGameEvent(gameEv.data),
      };
    }

    if (data.nextPage) {
      getGameEvents(gameId, data.nextPage);
    } else {
      // done loading all game events
      renderGameEvs();
      console.debug('getGameEvents done:', gameEvents);
    }

  }
};

const startLoading = () => {
  const $gameEvForm = $('#game-event-form');

  $gameEvForm.find('button').addClass('d-none');
  $gameEvForm.find('.spinner-border').removeClass('d-none');
};

const stopLoading = () => {
  const $gameEvForm = $('#game-event-form');

  $gameEvForm.find('button').removeClass('d-none');
  $gameEvForm.find('.spinner-border').addClass('d-none');
};

const init = (highlightsReadyCb) => {
  const $gameEvForm = $('#game-event-form');

  $gameEvForm.on('submit', (ev) => {
    ev.preventDefault();

    const gameId = $gameEvForm.find('#game-id').val().split('/').pop();
    getGameEvents(gameId);
  });

  const $highlightsSelectForm = $('#game-events-choose__form');

  $highlightsSelectForm.on('submit', (ev) => {
    ev.preventDefault();
    generateHighlights(highlightsReadyCb);
  });

};

module.exports = {
  init,
};


},{"./highlight":22,"./util":24,"mlustard":12}],22:[function(require,module,exports){
const grandSlalami = require('grand-slalami');

// making a 'class' for highlights in the old-school way
// cause i don't wanna have to complicate things further with babel
const makeHighlight = (settings) => {
  settings = settings || {};

  let id;
  let gameEvent;
  let mlustard;
  let commentary;
  let maxDialogLen;
  let dialogParts;
  let curDialogPart;
  let visual;

  const init = () => {
    id = settings.id;
    gameEvent = settings.gameEvent;
    mlustard = settings.mlustard;
    visual = settings.visual;
    commentary = generateCommentary();
    maxDialogLen = setMaxDialogLen();
    dialogParts = [];
    curDialogPart = 0;
    breakIntoDialogParts();

    return {
      id,
      gameEvent,
      mlustard,
      commentary,
      dialogParts,
      curDialogPart,
      hasDialogLeft,
      visual,
    };
  };

  const generateCommentary = () => {
    // for mvp: skip grand slalami, just return original lastUpdate +
    // scoreUpdate if present

    let ret = '';

    if (gameEvent.data.lastUpdate) {
      ret += gameEvent.data.lastUpdate;
    }
    
    if (gameEvent.data.scoreUpdate) {
      ret += `\n${gameEvent.data.scoreUpdate}`;
    }

    return ret;

    //return grandSlalami.getComment({
      //gameEvent: gameEvent.data,
      //mlustard: mlustard,
    //});
  };

  // todo: do i wanna support mobile? then update this accordingly
  const setMaxDialogLen = () => {
    return 35;
  };

  const breakIntoDialogParts = () => {
    // split by newlines (enforced pacing)
    const pacingParts = commentary.split('\n');

    pacingParts.forEach((p) => {
      breakIntoParts(p);
    });
  };

  // split each part into its animation parts by line length
  const breakIntoParts = (text) => {
    let parts = [[], []];
    let unfilled = 0;
    let len = 0;

    text.split(' ').forEach((word) => {
      let wordLen = word.length;

      if ((len + wordLen) > maxDialogLen) {
        len = 0;

        if (unfilled === 1) {
          dialogParts.push(makeSentences(parts));
          parts = [[], []];
          unfilled = 0;
        } else {
          unfilled = 1;
        }
      }

      if ((len + wordLen) <= maxDialogLen) {
        parts[unfilled].push(word);
        len += wordLen + 1;
      }
    });

    dialogParts.push(makeSentences(parts));
  };

  const makeSentences = (parts) => {
    return parts.map((words) => {
      return words.join(' ');
    });
  };

  //const hasDialogLeft = () => {
    //return !((curDialogPart + 1) === dialogParts.length);
  //};

  return init();
};

// utilities
const hasDialogLeft = (highlight) => {
    return !((highlight.curDialogPart + 1) === highlight.dialogParts.length);
};

const hasDialogPrev = (highlight) => {
    return !((highlight.curDialogPart - 1) === -1);
};

module.exports = {
  makeHighlight,
  hasDialogLeft,
  hasDialogPrev,
};


},{"grand-slalami":5}],23:[function(require,module,exports){
(function (global){(function (){
const gameEventSelector = require('./game-event-selector');
const dialog = require('./dialog');
const visual = require('./visual');
const downloader = require('./downloader');
const teamsData = require('../lib/teams-data');

global.highlights = [];
let curHighlight = 0;
let intro = true;

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
      nextHighlight();
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
      direction = 'prev';
    } else if (evt.keyCode === 39) {
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
  $home.attr('src', `./images/logo-${hNick}.png`);
  $away.attr('src', `./images/logo-${aNick}.png`);
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
  const $grass = $diamond.find('.grass');
  const $dirt = $diamond.find('.dirt');
  const $neutral = $diamond.find('.neutral');
  const $mound = $diamond.find('.mound');
  const $bases = $diamond.find('.base');

  if (homeTeam.colours.grass) {
    $grass.first()
      .attr('fill', `#${homeTeam.colours.grass}`)
      .attr('stroke', `#${homeTeam.colours.grass}`);
    $grass.last()
      .attr('fill', `#${homeTeam.colours.grass}`)
      .attr('stroke', `#${homeTeam.colours.dirtOutline}`);
  }

  if (homeTeam.colours.dirt) {
    $dirt.attr('fill', `#${homeTeam.colours.dirt}`);
  }

  if (homeTeam.colours.dirtOutline) {
    $dirt.attr('stroke', `#${homeTeam.colours.dirtOutline}`);
  }

  $mound.attr('fill', `#${homeTeam.colours.main}`);

  if (homeTeam.colours.dirtOutline) {
    $mound.attr('stroke', `#${homeTeam.colours.dirtOutline}`);
  }

  if (homeTeam.colours.neutral) {
    $neutral
      .attr('fill', `#${homeTeam.colours.neutral}`)
      .attr('stroke', `#${homeTeam.colours.neutral}`);
  }

  if (homeTeam.colours.bases) {
    $bases
      .attr('fill', `#${homeTeam.colours.bases}`)
      .attr('stroke', `#${homeTeam.colours.basesOutline}`);
  }


  $('#diamond__image')
    .css('background-image', 'url(data:image/svg+xml;base64,'+ btoa($diamond.html()) + ')');

  $('.mound-logo').first().attr('src', homeTeam.homeLogoURL);

  nextHighlight();
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
    downloader.init();
  }
};

initApp();


}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../lib/teams-data":1,"./dialog":19,"./downloader":20,"./game-event-selector":21,"./visual":25}],24:[function(require,module,exports){
// apated from
// https://css-tricks.com/controlling-css-animations-transitions-javascript/
const prefixes = ['webkit', 'moz', 'MS', 'o', ''];

const prefixedOn = ($el, type, cb) => {
  for (let prefix of prefixes) {
    if (!prefix) type = type.toLowerCase();
    $el.on(`${prefix}${type}`, cb);
  }
};

const getEmoji = (team, gameEv) => {
  let emoji = '';

  if (team === 'home') {
    try {
      emoji = gameEv.homeTeamEmoji ? String.fromCodePoint(gameEv.homeTeamEmoji) : '';
    } catch (err) {
      emoji = gameEv.homeTeamEmoji;
    }
  } else {
    try {
      emoji = gameEv.awayTeamEmoji ? String.fromCodePoint(gameEv.awayTeamEmoji) : '';
    } catch (err) {
      emoji = gameEv.awayTeamEmoji;
    }
  }

  return emoji;
};

const getPlayerNameWithInitial = (name) => {
  let ret = '';

  ret += name[0] + '. ';
  ret += name.split(' ')[1];

  return ret;
};

const getInningText = (inning) => {
  let ret = `${inning}`;

  switch (inning) {

    case 1:
      ret += 'st';
      break;
    case 2:
      ret += 'nd';
      break;
    case 3:
      ret += 'rd';
      break;
    default:
      ret += 'th';
      break;
  }

  return ret;
};

const makeBaseDiamond = (occ) => {
  const $diamond = $('<span>').addClass('diamond');

  if (occ) {
    $diamond.addClass('filled');
  }

  return $diamond;
};


module.exports = {
  prefixedOn,
  getEmoji,
  getPlayerNameWithInitial ,
  getInningText,
  makeBaseDiamond,
};


},{}],25:[function(require,module,exports){
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


},{"../lib/teams-data":1,"../lib/weather":2,"./util":24}]},{},[23])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdGVhbXMtZGF0YS5qcyIsImxpYi93ZWF0aGVyLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvY29tbWVudGFyeS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL2dyYW1tYXIuanMiLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC9ncmFuZC1zbGFsYW1pLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvcXVpcHMuanNvbiIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL3RyYWNlcnktbW9kcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9iYXNlLXJ1bm5lcnMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvZ2FtZS1zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvaGl0cy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9taXNjLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL21sdXN0YXJkLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL291dHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvc3BlY2lhbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9zdGVhbHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC93YWxrcy5qcyIsIm5vZGVfbW9kdWxlcy90cmFjZXJ5LWdyYW1tYXIvdHJhY2VyeS5qcyIsInNyYy9kaWFsb2cuanMiLCJzcmMvZG93bmxvYWRlci5qcyIsInNyYy9nYW1lLWV2ZW50LXNlbGVjdG9yLmpzIiwic3JjL2hpZ2hsaWdodC5qcyIsInNyYy9tYWluLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvdmlzdWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDOU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZGF0YSA9IHtcbiAgLy8gaGVsbG1vdXRoIHN1bmJlYW1zXG4gICdmMDJhZWFlMi01ZTZhLTQwOTgtOTg0Mi0wMmQyMjczZjI1YzcnOiB7XG4gICAgc2hvcnRoYW5kOiAnSEVMTCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgbWFpbjogJ2ZmZmJhYicsXG4gICAgICBncmFzczogJ2U4Yzg3NycsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMWQxOTMyJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1zdW5iZWFtcy5wbmcnLFxuICB9LFxuXG4gIC8vIGhhZGVzIHRpZ2Vyc1xuICAnNzQ3YjhlNGEtN2U1MC00NjM4LWE5NzMtZWE3OTUwYTNlNzM5Jzoge1xuICAgIHNob3J0aGFuZDogJ0hBRCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgbWFpbjogJzVjMWMxYycsXG4gICAgICBncmFzczogJ2U4NTYzNycsXG4gICAgICBiYXNlczogJ2MzMjIyOScsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBuZXV0cmFsOiAnZmFhNjIzJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby10aWdlcnMucG5nJyxcbiAgfSxcblxuICAvLyBzZWF0dGxlIGdhcmFnZXNcbiAgJzEwNWJjM2ZmLTEzMjAtNGUzNy04ZWYwLThkNTk1Y2I5NWRkMCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdTRUEnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICcyYjQwNzUnLFxuICAgICAgLy9ncmFzczogJzI2MDZkNycsXG4gICAgICBncmFzczogJ2ZmMjQyMycsXG4gICAgICAvL2Jhc2VzOiAnZmYyNDIzJyxcbiAgICAgIGJhc2VzOiAnMjYwNmQ3JyxcbiAgICAgIC8vYmFzZXM6ICc4MjBlMGYnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgLy9uZXV0cmFsOiAnZmYyNDIzJyxcbiAgICAgIG5ldXRyYWw6ICcyNjA2ZDcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWdhcmFnZXMucG5nJyxcbiAgfSxcblxuICAvLyBtZXhpY28gY2l0eSB3aWxkIHdpbmdzXG4gICc1N2VjMDhjYy0wNDExLTQ2NDMtYjMwNC0wZTgwZGJjMTVhYzcnIDoge1xuICAgIHNob3J0aGFuZDogJ0NETVgnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICdkMTU3MDAnLFxuICAgICAgZ3Jhc3M6ICc3MzFmMDAnLFxuICAgICAgYmFzZXM6ICcwMDY4NDcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgbmV1dHJhbDogJ2M2NDAwMCcsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28td2luZ3MucG5nJyxcbiAgfSxcblxuICAvLyBhdGxhbnRpcyBnZW9yZ2lhc1xuICAnZDlmODlhOGEtYzU2My00OTNlLTlkNjQtNzhlNGY5YTU1ZDRhJzoge1xuICAgIHNob3J0aGFuZDogJ0FUTFMnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICcwMGRiYzInLFxuICAgICAgLy9ncmFzczogJzVjZmZlYycsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcnLFxuICAgICAgZGlydDogJycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBuZXV0cmFsOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1nZW9yZ2lhcy5wbmcnLFxuICB9LFxuXG4gIC8vIGNoaWNhZ28gZmlyZWZpZ2h0ZXJzXG4gICdjYTNmMWM4Yy1jMDI1LTRkOGUtOGVlZi01YmU2YWNjYmViMTYnOiB7XG4gICAgc2hvcnRoYW5kOiAnQ0hJJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBtYWluOiAnOGMyYTNlJyxcbiAgICAgIGdyYXNzOiAnZDEzNzU3JyxcbiAgICAgIGJhc2VzOiAnZmY5NjBhJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIG5ldXRyYWw6ICdmYmUwMjUnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWZpcmVmaWdodGVycy5wbmcnLFxuICB9LFxuXG4gIC8vIHRva3lvIGxpZnRcbiAgJ2M3M2I3MDVjLTQwYWQtNDYzMy1hNmVkLWQzNTdlZTJlMmJjZic6IHtcbiAgICBzaG9ydGhhbmQ6ICdUWU8nLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICdlNTM2YzgnLFxuICAgICAgZ3Jhc3M6ICc5MDE0N2InLFxuICAgICAgYmFzZXM6ICc3M2ZlZWQnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwYTJhJyxcbiAgICAgIGRpcnQ6ICdmYWYwZjknLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDBhMmEnLFxuICAgICAgbmV1dHJhbDogJ2ZmZDE0YycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbGlmdC5wbmcnLFxuICB9LFxuXG4gIC8vIGJyZWNrZW5yaWRnZSBqYXp6IGhhbmRzXG4gICdhMzdmOTE1OC03ZjgyLTQ2YmMtOTA4Yy1jOWUyZGRhN2MzM2InOiB7XG4gICAgc2hvcnRoYW5kOiAnQlJLJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBtYWluOiAnNjM4OGFkJyxcbiAgICAgIGdyYXNzOiAnZjNjYTQwJyxcbiAgICAgIGJhc2VzOiAnZDgwMDY3JyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzRlMDg0ZCcsXG4gICAgICBkaXJ0OiAnZjJhNTQxJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnNGUwOTRkJyxcbiAgICAgIG5ldXRyYWw6ICc3YmE5ZDcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWhhbmRzLnBuZycsXG4gIH0sXG5cbiAgLy8gbGEgdW5saW1pdGVkIHRhY29zXG4gICc4NzhjMWJmNi0wZDIxLTQ2NTktYmZlZS05MTZjODMxNGQ2OWMnOiB7XG4gICAgc2hvcnRoYW5kOiAnVEFDTycsXG4gICAgY29sb3Vyczoge1xuICAgICAgbWFpbjogJzY0Mzc2ZScsXG4gICAgICBncmFzczogJ2ZhY2YzMycsXG4gICAgICBiYXNlczogJ2Q3MzMzMycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJzI4Yzg3MicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBuZXV0cmFsOiAnOTgyMmQzJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby10YWNvcy5wbmcnLFxuICB9LFxuXG4gIC8vIG1pYW1pIGRhbGVcbiAgJ2I2M2JlOGMyLTU3NmEtNGQ2ZS04ZGFmLTgxNGY4YmNlYTk2Zic6IHtcbiAgICBzaG9ydGhhbmQ6ICdNSUEnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICdiZjAwZmYnLFxuICAgICAgZ3Jhc3M6ICdmZjY5YjQnLFxuICAgICAgYmFzZXM6ICczM2ZmZmYnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMGUxMjE2JyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwZTEyMTYnLFxuICAgICAgbmV1dHJhbDogJ2ZlZTAyMCcsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZGFsZS5wbmcnLFxuICB9LFxuXG4gIC8vIGJvc3RvbiBmbG93ZXJzXG4gICczZjhiYmIxNS02MWMwLTRlM2YtOGU0YS05MDdhNWZiMTU2NWUnOiB7XG4gICAgc2hvcnRoYW5kOiAnQk9TJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBtYWluOiAnZjdkMWZmJyxcbiAgICAgIGdyYXNzOiAnOTc1NWE1JyxcbiAgICAgIGJhc2VzOiAnYWM1NmJkJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzM5M2ExNycsXG4gICAgICBkaXJ0OiAnZDc5MWUzJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMzkzYTE3JyxcbiAgICAgIG5ldXRyYWw6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWZsb3dlcnMucG5nJyxcbiAgfSxcblxuICAvLyBvaGlvIHdvcm1zXG4gICdiYjRhOWRlNS1jOTI0LTQ5MjMtYTBjYi05ZDE0NDVmMWVlNWQnOiB7XG4gICAgc2hvcnRoYW5kOiAnT0hJTycsXG4gICAgY29sb3Vyczoge1xuICAgICAgbWFpbjogJzVjNDgyMicsXG4gICAgICBncmFzczogJ2JhOWM2NScsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBuZXV0cmFsOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby13b3Jtcy5wbmcnLFxuICB9LFxuXG4gIC8vIGhvdXN0b24gc3BpZXNcbiAgJzlkZWJjNjRmLTc0YjctNGFlMS1hNGQ2LWZjZTAxNDRiNmVhNSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdIT1UnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICc2NzU1NmInLFxuICAgICAgZ3Jhc3M6ICc5ZTgyYTQnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICcnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgbmV1dHJhbDogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tc3BpZXMucG5nJyxcbiAgfSxcblxuICAvLyBwaGlsbHkgcGllc1xuICAnMjNlNGNiYzEtZTljZC00N2ZhLWEzNWItYmZhMDZmNzI2Y2I3Jzoge1xuICAgIHNob3J0aGFuZDogJ1BITCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgbWFpbjogJzM5OWQ4ZicsXG4gICAgICBncmFzczogJ2ZmY2Q0YycsXG4gICAgICBiYXNlczogJ2VjOTcwYicsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBuZXV0cmFsOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1waWVzLnBuZycsXG4gIH0sXG5cbiAgLy8gc2FuIGZyYWNpc2NvIGxvdmVyc1xuICAnYjcyZjMwNjEtZjU3My00MGQ3LTgzMmEtNWFkNDc1YmQ3OTA5Jzoge1xuICAgIHNob3J0aGFuZDogJ1NGJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBtYWluOiAnZDIyNjRhJyxcbiAgICAgIGdyYXNzOiAnZjE5M2IzJyxcbiAgICAgIGJhc2VzOiAnNmIxODRkJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIG5ldXRyYWw6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWxvdmVycy5wbmcnLFxuICB9LFxuXG4gIC8vIGRhbGxhcyBzdGVha3NcbiAgJ2IwMjRlOTc1LTFjNGEtNDU3NS04OTM2LWEzNzU0YTA4ODA2YSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdEQUwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICc4YzhkOGYnLFxuICAgICAgZ3Jhc3M6ICdlODEyMjMnLFxuICAgICAgYmFzZXM6ICc4YzM2MjgnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIC8vZGlydDogJ2M2YTc4YicsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIG5ldXRyYWw6ICc1NjQxMmUnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXN0ZWFrcy5wbmcnLFxuICB9LFxuXG4gIC8vIG5ldyB5b3JrIG1pbGxlbm5pYWxzXG4gICczNjU2OTE1MS1hMmZiLTQzYzEtOWRmNy0yZGY1MTI0MjRjODInOiB7XG4gICAgc2hvcnRoYW5kOiAnTlknLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICdmOGQ2ZDcnLFxuICAgICAgZ3Jhc3M6ICc5OWNkZTMnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgbmV1dHJhbDogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWlsbGVubmlhbHMucG5nJyxcbiAgfSxcblxuICAvLyBjb3JlIG1lY2hhbmljc1xuICAnNDYzNTg4NjktZGNlOS00YTAxLWJmYmEtYWMyNGZjNTZmNTdlJzoge1xuICAgIHNob3J0aGFuZDogJ0NPUkUnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG1haW46ICdkMTMxMDAnLFxuICAgICAgZ3Jhc3M6ICcnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnJyxcbiAgICAgIGRpcnQ6ICcnLFxuICAgICAgZGlydE91dGxpbmU6ICcnLFxuICAgICAgbmV1dHJhbDogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWVjaGFuaWNzLnBuZycsXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGE7XG5cbiIsImNvbnN0IHdlYXRoZXIgPSB7XG4gIDA6IHtcbiAgICBuYW1lOiAndm9pZCcsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDE6IHtcbiAgICBuYW1lOiAnc3VuIDInLFxuICAgIGljb246ICfimIAnLFxuICB9LFxuICAyOiB7XG4gICAgbmFtZTogJ292ZXJjYXN0JyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgMzoge1xuICAgIG5hbWU6ICdyYWlueScsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDQ6IHtcbiAgICBuYW1lOiAnc2FuZHN0b3JtJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNToge1xuICAgIG5hbWU6ICdzbm93eScsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDY6IHtcbiAgICBuYW1lOiAnYWNpZGljJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNzoge1xuICAgIG5hbWU6ICdzb2xhciBlY2xpcHNlJyxcbiAgICBpY29uOiAn8J+MkScsXG4gIH0sXG4gIDg6IHtcbiAgICBuYW1lOiAnZ2xpdHRlcicsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDk6IHtcbiAgICBuYW1lOiAnYmxvb2RkcmFpbicsXG4gICAgaWNvbjogJ/CfqbgnLFxuICB9LFxuICAxMDoge1xuICAgIG5hbWU6ICdwZWFudXRzJyxcbiAgICBpY29uOiAn8J+lnCcsXG4gIH0sXG4gIDExOiB7XG4gICAgbmFtZTogJ2xvdHMgb2YgYmlyZHMnLFxuICAgIGljb246ICfwn5CmJyxcbiAgfSxcbiAgMTI6IHtcbiAgICBuYW1lOiAnZmVlZGJhY2snLFxuICAgIGljb246ICfwn46kJyxcbiAgfSxcbiAgMTM6IHtcbiAgICBuYW1lOiAncmV2ZXJiJyxcbiAgICBpY29uOiAn8J+MiicsXG4gIH0sXG4gIDE0OiB7XG4gICAgbmFtZTogJ2JsYWNrIGhvbGUnLFxuICAgIGljb246ICfimqsnLFxuICB9LFxuICAxNToge1xuICAgIG5hbWU6ICdjb2ZmZWUnLFxuICAgIGljb246ICfimJUnLFxuICB9LFxuICAxNjoge1xuICAgIG5hbWU6ICdjb2ZmZWUgMicsXG4gICAgaWNvbjogJ/CfjbUnLFxuICB9LFxuICAxNzoge1xuICAgIG5hbWU6ICdjb2ZmZWUgM3MnLFxuICAgIGljb246ICcz77iP4oOjJyxcbiAgfSxcbiAgMTg6IHtcbiAgICBuYW1lOiAnZmxvb2RpbmcnLFxuICAgIGljb246ICfwn5qwJyxcbiAgfSxcbiAgMTk6IHtcbiAgICBuYW1lOiAnc2FsbW9uJyxcbiAgICBpY29uOiAn8J+QnycsXG4gIH0sXG4gIDIwOiB7XG4gICAgbmFtZTogJ2dsaXR0ZXInLFxuICAgIGljb246ICfinKgnLFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWF0aGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidWlsZENvbW1lbnQgPSBmdW5jdGlvbiBidWlsZENvbW1lbnQoc2V0dGluZ3MsIGdyYW1tYXIpIHtcbiAgdmFyIGdhbWVFdmVudCA9IHNldHRpbmdzLmdhbWVFdmVudDtcbiAgdmFyIG1sdXN0YXJkID0gc2V0dGluZ3MubWx1c3RhcmQ7IC8vIGNoZWNrIGZvciBnYW1lIHN0YXR1c1xuXG4gIHN3aXRjaCAobWx1c3RhcmQuZ2FtZVN0YXR1cykge1xuICAgIGNhc2UgJ2JlZm9yZUZpcnN0UGl0Y2gnOlxuICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2dhbWVTdGFydCMnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZmlyc3RIYWxmSW5uaW5nU3RhcnQnOlxuICAgICAgaWYgKGdhbWVFdmVudC5pbm5pbmcgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2lubmluZ09uZVN0YXJ0IycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2lubmluZ1N0YXJ0IycpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3NlY29uZEhhbGZJbm5pbmdTdGFydCc6XG4gICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjaW5uaW5nU3RhcnQjJyk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciBjb21tZW50ID0gJyc7IC8vIGNoZWNrIGZvciBvdXRzXG5cbiAgaWYgKG1sdXN0YXJkLm91dCkge1xuICAgIGlmIChtbHVzdGFyZC5nYW1lU3RhdHVzID09PSAnaGFsZklubmluZ0VuZCcpIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjbGFzdE91dE9mSW5uaW5nIycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI291dCMnKTtcbiAgICB9XG4gIH0gLy8gY2hlY2sgZm9yIHNjb3JlXG5cblxuICBpZiAobWx1c3RhcmQucnVuc1Njb3JlZCAhPT0gMCB8fCBtbHVzdGFyZC51bnJ1bnNTY29yZWQgIT09IDAgfHwgLy8gc2NvcmUgY2hhbmdlIGR1ZSB0byBzYWxtb24gc3RlYWxpbmcgcnVuc1xuICBtbHVzdGFyZC5zcGVjaWFsICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmtpbmQgPT09ICdzYWxtb24nICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmRldGFpbHMgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEuZGV0YWlscy5ydW5zU3RvbGVuLmxlbmd0aCB8fCAvLyBzY29yZSBjaGFuZ2UgZnJvbSBzdW4gMiBzbWlsaW5nXG4gIG1sdXN0YXJkLnNwZWNpYWwgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEua2luZCA9PT0gJ3N1bjInIHx8IC8vIHNjb3JlIGNoYW5nZSBmcm9tIGJsYWNrIGhvbGUgc3dhbGxvd2luZ1xuICBtbHVzdGFyZC5zcGVjaWFsICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmtpbmQgPT09ICdibGFja0hvbGUnKSB7XG4gICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjc2NvcmVBZGRvbiMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNzY29yZSMnKTtcbiAgICB9XG4gIH0gLy8gY2hlY2sgaWYgYSBiYXR0ZXIganVzdCBzaG93ZWQgdXAgYXQgdGhlIHBsYXRlXG5cblxuICBpZiAobWx1c3RhcmQuYmF0dGVyVXAgJiYgZ2FtZUV2ZW50LmJhc2VydW5uZXJDb3VudCkge1xuICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjYmF0dGVyVXBSdW5uZXJzIycpO1xuICB9IC8vIHJldHVybiB0aGUgY29tbWVudCBpZiBpdCB3YXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRoZSBvcmlnaW5hbCB1cGRhdGUgaWYgaXRcbiAgLy8gZXhpc3RzLCBvdGhlcndpc2UgYW4gZW1wdHkgc3RyaW5nXG5cblxuICByZXR1cm4gY29tbWVudCB8fCBnYW1lRXZlbnQubGFzdFVwZGF0ZSB8fCAnJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBidWlsZENvbW1lbnQ6IGJ1aWxkQ29tbWVudFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxudmFyIHRyYWNlcnkgPSByZXF1aXJlKCd0cmFjZXJ5LWdyYW1tYXInKTtcblxudmFyIG1vZHMgPSByZXF1aXJlKCcuL3RyYWNlcnktbW9kcycpO1xuXG52YXIgcXVpcHMgPSByZXF1aXJlKCcuL3F1aXBzLmpzb24nKTtcblxudmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHNldHRpbmdzKSB7XG4gIHZhciBzZWVkID0gc2V0dGluZ3Muc2VlZDtcbiAgdmFyIGdhbWVFdmVudCA9IHNldHRpbmdzLmdhbWVFdmVudDtcbiAgdmFyIG1sdXN0YXJkID0gc2V0dGluZ3MubWx1c3RhcmQ7XG4gIHZhciBvdmVycmlkZXMgPSBzZXR0aW5ncy5vdmVycmlkZXM7XG4gIHZhciBsZXZlbCA9IHNldHRpbmdzLmxldmVsO1xuXG4gIGlmIChzZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICB0cmFjZXJ5LnNldFJhbmRvbShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VlZDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBncmFtbWFyID0gdHJhY2VyeS5jcmVhdGVHcmFtbWFyKHt9KTsgLy8gcG9wdWxhdGUgZGF0YSBmcm9tIGdhbWVFdmVudFxuXG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihxdWlwcy5kYXRhKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBfZmllbGQzID0gX3N0ZXAudmFsdWU7XG4gICAgICB2YXIgZGF0YSA9IGdhbWVFdmVudFtfZmllbGQzXTtcblxuICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBzb21lIGRhdGEgbmVlZHMgbWFzc2FnaW5nXG4gICAgICAgIHN3aXRjaCAoX2ZpZWxkMykge1xuICAgICAgICAgIGNhc2UgJ2lubmluZyc6XG4gICAgICAgICAgICBkYXRhID0gKGRhdGEgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd0b3BPZklubmluZyc6XG4gICAgICAgICAgICBkYXRhID0gZGF0YSA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2hhbGZJbm5pbmdPdXRzJzpcbiAgICAgICAgICBjYXNlICdob21lU2NvcmUnOlxuICAgICAgICAgIGNhc2UgJ2F3YXlTY29yZSc6XG4gICAgICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQzLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZDMsICcnKTtcbiAgICAgIH1cbiAgICB9IC8vIGN1cnJlbnQgcGl0Y2hlclxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIHZhciBjUGl0Y2hlciA9IGdhbWVFdmVudC50b3BPZklubmluZyA/IGdhbWVFdmVudC5ob21lUGl0Y2hlck5hbWUgOiBnYW1lRXZlbnQuYXdheVBpdGNoZXJOYW1lO1xuICBncmFtbWFyLnB1c2hSdWxlcygnY1BpdGNoZXInLCBjUGl0Y2hlcik7IC8vIGN1cnJlbnQgYmF0dGVyIChjYW4gYmUgYW4gZW1wdHkgc3RyaW5nIGlmIG5vYm9keSBiYXR0aW5nKVxuXG4gIHZhciBjQmF0dGVyID0gZ2FtZUV2ZW50LmhvbWVCYXR0ZXJOYW1lIHx8IGdhbWVFdmVudC5hd2F5QmF0dGVyTmFtZTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2NCYXR0ZXInLCBjQmF0dGVyKTsgLy8gcGl0Y2hpbmcgdGVhbSBuaWNrbmFtZVxuXG4gIHZhciBwTmljayA9IGdhbWVFdmVudC50b3BPZklubmluZyA/ICcjaE5pY2sjJyA6ICcjYU5pY2sjJztcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3BOaWNrJywgcE5pY2spOyAvLyBiYXR0aW5nIHRlYW0gbmlja25hbWVcblxuICB2YXIgYk5pY2sgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyAnI2FOaWNrIycgOiAnI2hOaWNrIyc7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdiTmljaycsIGJOaWNrKTsgLy8gbGVhZGluZyAmIHRyYWlsaW5nIHRlYW0gbmlja25hbWVzIGFuZCBzY29yZXNcblxuICB2YXIgbFRlYW07XG4gIHZhciB0VGVhbTtcbiAgdmFyIGxTY29yZTtcbiAgdmFyIHRTY29yZTtcblxuICBpZiAoZ2FtZUV2ZW50LmF3YXlTY29yZSA+IGdhbWVFdmVudC5ob21lU2NvcmUpIHtcbiAgICBsVGVhbSA9ICcjYU5pY2sjJztcbiAgICB0VGVhbSA9ICcjaE5pY2sjJztcbiAgICBsU2NvcmUgPSAnI2FTY29yZSMnO1xuICAgIHRTY29yZSA9ICcjaFNjb3JlIyc7XG4gIH0gZWxzZSB7XG4gICAgbFRlYW0gPSAnI2hOaWNrIyc7XG4gICAgdFRlYW0gPSAnI2FOaWNrIyc7XG4gICAgbFNjb3JlID0gJyNoU2NvcmUjJztcbiAgICB0U2NvcmUgPSAnI2FTY29yZSMnO1xuICB9XG5cbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2xUZWFtJywgbFRlYW0pO1xuICBncmFtbWFyLnB1c2hSdWxlcygndFRlYW0nLCB0VGVhbSk7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdsU2NvcmUnLCBsU2NvcmUpO1xuICBncmFtbWFyLnB1c2hSdWxlcygndFNjb3JlJywgdFNjb3JlKTsgLy8gc2V0IGJhc2UgcnVubmVyc1xuXG4gIGlmIChnYW1lRXZlbnQuYmFzZXJ1bm5lckNvdW50ID49IDMpIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcygncnVubmVycycsICcjYmFzZXNMb2FkZWQjJyk7XG4gIH0gZWxzZSBpZiAoZ2FtZUV2ZW50LmJhc2VydW5uZXJDb3VudCA+IDApIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcygncnVubmVycycsICcjcnVubmVyc09uQmFzZSMnKTtcbiAgfVxuXG4gIHZhciBiYXNlcyA9ICcnO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMobWx1c3RhcmQuYmFzZVJ1bm5lcnMpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgYmFzZSA9IF9PYmplY3Qka2V5c1tfaV07XG5cbiAgICBpZiAobWx1c3RhcmQuYmFzZVJ1bm5lcnNbYmFzZV0ucGxheWVySWQpIHtcbiAgICAgIGJhc2VzICs9IFwiXCIuY29uY2F0KGJhc2UsIFwiIFwiKTtcbiAgICB9XG4gIH1cblxuICBncmFtbWFyLnB1c2hSdWxlcygnYmFzZXNPY2MnLCBiYXNlcy50cmltKCkpOyAvLyBidWlsZCBxdWlwcyBzaG9ydGN1dHNcblxuICBmb3IgKHZhciBmaWVsZCBpbiBxdWlwcy5zaG9ydGN1dHMpIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhmaWVsZCwgcXVpcHMuc2hvcnRjdXRzW2ZpZWxkXSk7XG4gIH0gLy8gYnVpbGQgcXVpcHMgZ3JhbW1hclxuXG5cbiAgZm9yICh2YXIgX2ZpZWxkIGluIHF1aXBzW2xldmVsXSkge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZCwgcXVpcHNbbGV2ZWxdW19maWVsZF0pO1xuICB9IC8vIGRvIHF1aXAgb3ZlcnJpZGVzXG5cblxuICBmb3IgKHZhciBfZmllbGQyIGluIG92ZXJyaWRlcykge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZDIsIG92ZXJyaWRlc1tfZmllbGQyXSk7XG4gIH0gLy8gYWRkIG1vZHNcblxuXG4gIGdyYW1tYXIuYWRkTW9kaWZpZXJzKHRyYWNlcnkuYmFzZUVuZ01vZGlmaWVycyk7XG4gIGdyYW1tYXIuYWRkTW9kaWZpZXJzKG1vZHMpO1xuICByZXR1cm4gZ3JhbW1hcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0OiBpbml0XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWx1c3RhcmQgPSByZXF1aXJlKCdtbHVzdGFyZCcpO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpO1xuXG52YXIgY29tbWVudGFyeSA9IHJlcXVpcmUoJy4vY29tbWVudGFyeScpO1xuLypcbiAqIEBzZXR0aW5ncyBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzOlxuICogICAtIGdhbWVFdmVudDogdGhlIGdhbWUgZXZlbnQgb2JqZWN0IChmcm9tIHRoZSBzdHJlYW0gb3IgY2hyb25pY2xlcilcbiAqICAgLSBtbHVzdGFyZCAob3B0aW9uYWwpOiBtbHVzdGFyZCBkYXRhIGZvciB0aGUgZ2FtZUV2ZW50XG4gKiAgIC0gc2VlZCAob3B0aW9uYWwpOiBhIHNlZWQsIGZvciBkZXRlcm1pbmlzdGljIGNvbW1lbnQgZ2VuZXJhdGlvblxuICogICAtIGxldmVsIChvcHRpb25hbCwgZGVmYXVsdHMgdG8gJ21pbmltYWwnKTogdGhlIGNvbW1lbnRhcnkgbGV2ZWwsIG9uZSBvZlxuICogICAgIC0gbWluaW1hbDogYWRkcyBhIGZldyBjb21tZW50cyB0byB1cGRhdGUgb24gZ2FtZSBzdGF0dXMgYXQga2V5IGNvbW1lbnRzXG4gKiAgIC0gb3ZlcnJpZGVzIChvcHRpb25hbCk6IG9iamVjdCB3aXRoIHF1aXAgb3ZlcnJpZGVzXG4gKi9cblxuXG52YXIgZ2V0Q29tbWVudCA9IGZ1bmN0aW9uIGdldENvbW1lbnQoc2V0dGluZ3MpIHtcbiAgaWYgKCFzZXR0aW5ncy5nYW1lRXZlbnQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBzZXR0aW5ncy5tbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkIHx8IG1sdXN0YXJkLmFuYWx5emVHYW1lRXZlbnQoc2V0dGluZ3MuZ2FtZUV2ZW50KTtcbiAgc2V0dGluZ3MubGV2ZWwgPSBzZXR0aW5ncy5sZXZlbCB8fCAnbWluaW1hbCc7XG4gIHNldHRpbmdzLm92ZXJyaWRlcyA9IHNldHRpbmdzLm92ZXJyaWRlcyB8fCB7fTtcbiAgdmFyIGdyID0gZ3JhbW1hci5pbml0KHNldHRpbmdzKTtcblxuICBpZiAoIWdyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIGNvbW1lbnRhcnkuYnVpbGRDb21tZW50KHNldHRpbmdzLCBncik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29tbWVudDogZ2V0Q29tbWVudFxufTsiLCJtb2R1bGUuZXhwb3J0cz17XCJkYXRhXCI6W1wiaW5uaW5nXCIsXCJ0b3BPZklubmluZ1wiLFwiaGFsZklubmluZ091dHNcIixcImhvbWVUZWFtTmFtZVwiLFwiYXdheVRlYW1OYW1lXCIsXCJob21lVGVhbU5pY2tuYW1lXCIsXCJhd2F5VGVhbU5pY2tuYW1lXCIsXCJob21lU2NvcmVcIixcImF3YXlTY29yZVwiLFwiaG9tZU9kZHNcIixcImF3YXlPZGRzXCIsXCJob21lUGl0Y2hlck5hbWVcIixcImF3YXlQaXRjaGVyTmFtZVwiLFwibGFzdFVwZGF0ZVwiLFwic2NvcmVVcGRhdGVcIl0sXCJtaW5pbWFsXCI6e1wibWF0Y2h1cFwiOltcIiNoTmljayMgdnMgI2FOaWNrI1wiLFwiI2FOaWNrIyBhdCAjaE5pY2sjXCJdLFwidG9wT3JCb3RcIjpcIiN0b3BPZklubmluZyNcIixcImlubmluZ0Z1bGxcIjpcIiN0b3BPckJvdCMgb2YgI2lubmluZyNcIixcImdhbWVTdGFydFwiOlwiI21hdGNodXAjLiAjcGl0Y2hlcnMjLiAjb3JpZ2luYWwjXCIsXCJzY29yZVwiOlwiI29yaWdpbmFsIyBJdCdzICNsVGVhbS50aGUjICNsU2NvcmUjIGFuZCAjdFRlYW0udGhlIyAjdFNjb3JlIy5cIixcInNjb3JlQWRkb25cIjpcIiBJdCdzICNsVGVhbS50aGUjICNsU2NvcmUjIGFuZCAjdFRlYW0udGhlIyAjdFNjb3JlIy5cIixcImlubmluZ1N0YXJ0XCI6XCIjb3JpZ2luYWwjICNjUGl0Y2hlciMgcGl0Y2hpbmcgZm9yICNwTmljay50aGUjLlwiLFwiaW5uaW5nT25lU3RhcnRcIjpcIiNvcmlnaW5hbCNcIixcInBpdGNoZXJzXCI6W1wiI2hQaXRjaGVyIyBwaXRjaGluZyBmb3IgI2hOaWNrLnRoZSMsICNhUGl0Y2hlciMgZm9yICNhTmljay50aGUjXCIsXCJPdXIgcGl0Y2hlcnMgYXJlICNoUGl0Y2hlciMgZm9yICNoTmljay50aGUjLCBhbmQgI2FQaXRjaGVyIyBmb3IgI2FOaWNrLnRoZSNcIl0sXCJvdXRcIjpcIiNvcmlnaW5hbCMgI2lubmluZ0Z1bGwuY2FwaXRhbGl6ZSMsICNvdXRzIy5cIixcIm91dHNcIjpcIiNoYWxmSW5uaW5nT3V0cy5vdXRzI1wiLFwibGFzdE91dE9mSW5uaW5nXCI6XCIjb3JpZ2luYWwjXCIsXCJiYXR0ZXJVcFJ1bm5lcnNcIjpcIiNvcmlnaW5hbCMgI3J1bm5lcnMucnVubmVyUGx1cmFsaXplI1wiLFwicnVubmVyc09uQmFzZVwiOlwiUnVubmVyIG9uICNiYXNlc09jYy5hbmQjLlwiLFwiYmFzZXNMb2FkZWRcIjpcIkJhc2VzIGFyZSBsb2FkZWQhXCJ9LFwic2hvcnRjdXRzXCI6e1wiaFBpdGNoZXJcIjpcIiNob21lUGl0Y2hlck5hbWUjXCIsXCJhUGl0Y2hlclwiOlwiI2F3YXlQaXRjaGVyTmFtZSNcIixcImhOaWNrXCI6XCIjaG9tZVRlYW1OaWNrbmFtZSNcIixcImFOaWNrXCI6XCIjYXdheVRlYW1OaWNrbmFtZSNcIixcImhTY29yZVwiOlwiI2hvbWVTY29yZSNcIixcImFTY29yZVwiOlwiI2F3YXlTY29yZSNcIixcIm9yaWdpbmFsXCI6XCIjbGFzdFVwZGF0ZSMjc2NvcmVVcGRhdGUuc3BhY2VkI1wifX0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRoZTogZnVuY3Rpb24gdGhlKHMpIHtcbiAgICByZXR1cm4gXCJ0aGUgXCIuY29uY2F0KHMpO1xuICB9LFxuICAvLyBjb3VudHMgdGhlICMgb2Ygb3V0cyBhbmQgcGx1cmFsaXplcyBhY2NvcmRpbmdseVxuICBvdXRzOiBmdW5jdGlvbiBvdXRzKHMpIHtcbiAgICBpZiAocyA9PT0gJzEnKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocywgXCIgb3V0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocywgXCIgb3V0c1wiKTtcbiAgICB9XG4gIH0sXG4gIC8vIG94Zm9yZCBjb21tYXNcbiAgYW5kOiBmdW5jdGlvbiBhbmQocykge1xuICAgIHJldHVybiBzLnNwbGl0KCcgJykuam9pbignLCAnKS5yZXBsYWNlKC8sIChbXixdKikkLywgJyBhbmQgJDEnKTtcbiAgfSxcbiAgLy8gZm9yIHBsdXJhbGl6aW5nIHJ1bm5lcihzKSBvbiBmaXJzdFssIHNlY29uZCBhbmQgdGhpcmRdXG4gIHJ1bm5lclBsdXJhbGl6ZTogZnVuY3Rpb24gcnVubmVyUGx1cmFsaXplKHMpIHtcbiAgICBpZiAocy5pbmRleE9mKCcsJykgPj0gMCB8fCBzLmluZGV4T2YoJ2FuZCcpID49IDApIHtcbiAgICAgIHJldHVybiBzLnJlcGxhY2UoJ1J1bm5lcicsICdSdW5uZXJzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgfSxcbiAgLy8gYWRkcyBhIHNwYWNlIGJlZm9yZSB0aGUgd29yZFxuICBzcGFjZWQ6IGZ1bmN0aW9uIHNwYWNlZChzKSB7XG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBcIiBcIi5jb25jYXQocyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIEJBU0VTID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJ107XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgLy9jb25zdCB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcbiAgaWYgKGV2ZW50RGF0YS5iYXNlcnVubmVyQ291bnQpIHtcbiAgICAvLyBpIHJlcHJlc2VudHMgdGhlIG9yZGVyIG9mIGJhc2VydW5uZXJzXG4gICAgLy8gYmFzZXNPY2N1cGllZFtpXSBpcyB0aGUgYmFzZSB0aGV5IGFyZSBvbiwgMC1pbmRleGVkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudERhdGEuYmFzZXNPY2N1cGllZC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF9ldmVudERhdGEkYmFzZVJ1bm5lcjtcblxuICAgICAgdmFyIGJhc2UgPSBldmVudERhdGEuYmFzZXNPY2N1cGllZFtpXTtcbiAgICAgIGFuYWx5c2lzLmJhc2VSdW5uZXJzW0JBU0VTW2Jhc2VdXSA9IHtcbiAgICAgICAgcGxheWVyTmFtZTogKChfZXZlbnREYXRhJGJhc2VSdW5uZXIgPSBldmVudERhdGEuYmFzZVJ1bm5lck5hbWVzKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGJhc2VSdW5uZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkYmFzZVJ1bm5lcltpXSkgfHwgJycsXG4gICAgICAgIHBsYXllcklkOiBldmVudERhdGEuYmFzZVJ1bm5lcnNbaV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBfZXZlbnREYXRhJGhvbWVUZWFtTmksIF9ldmVudERhdGEkYXdheVRlYW1OaTtcblxuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIHZhciBob21lID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGhvbWVUZWFtTmkgPSBldmVudERhdGEuaG9tZVRlYW1OaWNrbmFtZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRob21lVGVhbU5pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGhvbWVUZWFtTmkudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG4gIHZhciBob21lU2NvcmUgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVTY29yZSkgfHwgMDtcbiAgdmFyIGF3YXkgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkYXdheVRlYW1OaSA9IGV2ZW50RGF0YS5hd2F5VGVhbU5pY2tuYW1lKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGF3YXlUZWFtTmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkYXdheVRlYW1OaS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbiAgdmFyIGF3YXlTY29yZSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheVNjb3JlKSB8fCAwO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZigncGxheSBiYWxsJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnYmVmb3JlRmlyc3RQaXRjaCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RvcCBvZicpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2ZpcnN0SGFsZklubmluZ1N0YXJ0JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYm90dG9tIG9mJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnc2Vjb25kSGFsZklubmluZ1N0YXJ0JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ2FtZSBvdmVyJykgPj0gMCB8fCB1cGRhdGUuaW5kZXhPZihcIlwiLmNvbmNhdChob21lLCBcIiBcIikuY29uY2F0KGhvbWVTY29yZSwgXCIsIFwiKS5jb25jYXQoYXdheSwgXCIgXCIpLmNvbmNhdChhd2F5U2NvcmUpKSA+PSAwIHx8IHVwZGF0ZS5pbmRleE9mKFwiXCIuY29uY2F0KGF3YXksIFwiIFwiKS5jb25jYXQoYXdheVNjb3JlLCBcIiwgXCIpLmNvbmNhdChob21lLCBcIiBcIikuY29uY2F0KGhvbWVTY29yZSkpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2dhbWVFbmQnO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLmdhbWVTdGF0dXMpIHtcbiAgICByZXR1cm4gYW5hbHlzaXM7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2tIaXRSYmlQcmVTMTIgPSBmdW5jdGlvbiBjaGVja0hpdFJiaVByZVMxMihhbmFseXNpcywgdXBkYXRlKSB7XG4gIC8vIGZyb20gc29tZSBub24tZXhoYXVzdGl2ZSByZXNlYXJjaCwgaSB0aGluayB0aGVyZSB3ZXJlbid0IGFueSBncmFuZCBzbGFtc1xuICAvLyBwcmUtczEyIHRoYXQgd2VyZSBub3QgNCBydW5zXG4gIGlmIChhbmFseXNpcy5oaXRNZXRhLmtpbmQgPT09ICdncmFuZFNsYW0nKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDQ7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgc2luZ2xlL2RvdWJsZS90cmlwbGUgd2FzIGhpdCAmIHggcnVucyB3ZXJlIHNjb3JlZCwgaXQgc2hvd3MgdXBcbiAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgdXBkYXRlIGFzIFwiLi4uISB4IHNjb3Jlc1wiXG5cblxuICB2YXIgcnVucyA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgLyEgLywgLyBzY29yZXMvKSB8fCAwO1xuXG4gIGlmIChydW5zKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHJ1bnM7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgc29sbyBob21lIHJ1biB3YXMgaGl0LCB1cGRhdGUgY29udGFpbnMgdGhlIHRleHQgXCJzb2xvIGhvbWUgcnVuXCJcblxuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignc29sbyBob21lIHJ1bicpID49IDApIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgYSBtdWx0aS1ydW4gaG9tZSBydW4gd2FzIGhpdCwgdXBkYXRlIGNvbnRhaW5zIHRoZSB0ZXh0IFwieC1ydW4gaG9tZVxuICAvLyBydW5cIlxuXG5cbiAgcnVucyA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLy1ydW4gaG9tZSBydW4vKSB8fCAwO1xuXG4gIGlmIChydW5zKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHJ1bnM7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSBzaW5nbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ3NpbmdsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSBkb3VibGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ2RvdWJsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSB0cmlwbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ3RyaXBsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hvbWUgcnVuJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdob21lUnVuJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JhbmQgc2xhbScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnZ3JhbmRTbGFtJztcbiAgfVxuXG4gIGlmIChhbmFseXNpcy5oaXRNZXRhLmtpbmQpIHtcbiAgICBhbmFseXNpcy5oaXQgPSB0cnVlOyAvLyBjaGVjayBpZiBob21lIHJ1biAvIGdyYW5kIHNsYW0gbGFuZGVkIGluIGJpZyBidWNrZXRcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignYmFsbCBsYW5kcyBpbiBhIGJpZyBidWNrZXQnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5oaXRNZXRhLmJpZ0J1Y2tldCA9IHRydWU7XG4gICAgfSAvL2Zyb20gczEyIG9ud2FyZCwgc2NvcmVzIG9uIHRoZSBwbGF5IGFyZSBpbiB0aGUgc2NvcmVVcGRhdGUgZmllbGRcbiAgICAvL2NvbnN0IHNjb3JlVXBkYXRlID0gZXZlbnREYXRhPy5zY29yZVVwZGF0ZSB8fCAnJztcbiAgICAvL2lmIChzY29yZVVwZGF0ZSkge1xuICAgIC8vYW5hbHlzaXMucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCBudWxsKSB8fCAwO1xuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2NvcmVVcGRhdGUsIGRlZHVjZSB0aGUgc2NvcmUgZnJvbSB0aGUgdXBkYXRlXG4gICAgLy8gdGhpcyBpcyB0aGUgY2FzZSBmb3IgZ2FtZXMgYmV0d2VlbiBzMiAmIHMxMVxuXG5cbiAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSkge1xuICAgICAgY2hlY2tIaXRSYmlQcmVTMTIoYW5hbHlzaXMsIHVwZGF0ZSk7XG4gICAgfSAvLyBzY29yZSB1cGRhdGVzIGZyb20gczEyIG9ud2FyZCByZWdpc3RlcmVkIGluIHNyYy9taXNjLmpzXG5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrTWF4aW11bUJsYXNlYmFsbCA9IGZ1bmN0aW9uIGNoZWNrTWF4aW11bUJsYXNlYmFsbChhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBiYWxscywgYmFzZXMsIG91dHMsIHN0cmlrZXM7XG5cbiAgaWYgKGV2ZW50RGF0YS50b3BPZklubmluZykge1xuICAgIC8vIGF3YXkgaXMgYmF0dGluZ1xuICAgIGJhbGxzID0gZXZlbnREYXRhLmF3YXlCYWxscztcbiAgICBiYXNlcyA9IGV2ZW50RGF0YS5hd2F5QmFzZXM7XG4gICAgb3V0cyA9IGV2ZW50RGF0YS5hd2F5T3V0cztcbiAgICBzdHJpa2VzID0gZXZlbnREYXRhLmF3YXlTdHJpa2VzO1xuICB9IGVsc2Uge1xuICAgIC8vIGhvbWUgaXMgYmF0dGluZ1xuICAgIGJhbGxzID0gZXZlbnREYXRhLmhvbWVCYWxscztcbiAgICBiYXNlcyA9IGV2ZW50RGF0YS5ob21lQmFzZXM7XG4gICAgb3V0cyA9IGV2ZW50RGF0YS5ob21lT3V0cztcbiAgICBzdHJpa2VzID0gZXZlbnREYXRhLmhvbWVTdHJpa2VzO1xuICB9XG5cbiAgaWYgKGV2ZW50RGF0YS5oYWxmSW5uaW5nT3V0cyA9PT0gb3V0cyAtIDEgJiYgZXZlbnREYXRhLmF0QmF0QmFsbHMgPT09IGJhbGxzIC0gMSAmJiBldmVudERhdGEuYXRCYXRTdHJpa2VzID09PSBzdHJpa2VzIC0gMSAmJiBldmVudERhdGEuYmFzZXJ1bm5lckNvdW50ID09PSBiYXNlcyAtIDEpIHtcbiAgICBhbmFseXNpcy5tYXhpbXVtQmxhc2ViYWxsID0gdHJ1ZTtcbiAgfVxufTtcblxudmFyIGNoZWNrU2NvcmVVcGRhdGUgPSBmdW5jdGlvbiBjaGVja1Njb3JlVXBkYXRlKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkc2NvcmVVcGRhdDtcblxuICB2YXIgc2NvcmVVcGRhdGUgPSBldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRzY29yZVVwZGF0ID0gZXZlbnREYXRhLnNjb3JlVXBkYXRlKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJHNjb3JlVXBkYXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkc2NvcmVVcGRhdC50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChzY29yZVVwZGF0ZSkge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcihzY29yZVVwZGF0ZSwgbnVsbCwgLyBydW5zPyBzY29yZS8pO1xuICAgIGFuYWx5c2lzLnVucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCAvIHVucnVucz8gc2NvcmUvKTtcbiAgfVxufTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIGNoZWNrU2NvcmVVcGRhdGUoYW5hbHlzaXMsIGV2ZW50RGF0YSk7XG4gIGNoZWNrTWF4aW11bUJsYXNlYmFsbChhbmFseXNpcywgZXZlbnREYXRhKTsgLy8gY2hlY2sgZm9yIHdoZXRoZXIgYSBiYXR0ZXIganVzdCBzaG93ZWQgdXAgdG8gYmF0XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdiYXR0aW5nIGZvcicpID49IDApIHtcbiAgICBhbmFseXNpcy5iYXR0ZXJVcCA9IHRydWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnYW1lU3RhdHVzID0gcmVxdWlyZSgnLi9nYW1lLXN0YXR1cycpO1xuXG52YXIgb3V0cyA9IHJlcXVpcmUoJy4vb3V0cycpO1xuXG52YXIgaGl0cyA9IHJlcXVpcmUoJy4vaGl0cycpO1xuXG52YXIgc3RlYWxzID0gcmVxdWlyZSgnLi9zdGVhbHMnKTtcblxudmFyIHdhbGtzID0gcmVxdWlyZSgnLi93YWxrcycpO1xuXG52YXIgc3BlY2lhbCA9IHJlcXVpcmUoJy4vc3BlY2lhbCcpO1xuXG52YXIgbWlzYyA9IHJlcXVpcmUoJy4vbWlzYycpO1xuXG52YXIgYmFzZVJ1bm5lcnMgPSByZXF1aXJlKCcuL2Jhc2UtcnVubmVycycpO1xuLypcbiAqIHNldHMgYWxsIGtub3duIChha2EgaW1wbGVtZW50ZWQpIGFuYWx5c2lzIHJlc3VsdHMgdG8gdGhlaXIgZGVmYXVsc1xuICogcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9wczpcbiAqXG4gKiBpZDogc3RyaW5nIHx8IHVuZGVmaW5lZFxuICogICAtIHRoZSBnYW1lIGV2ZW50IElEXG4gKlxuICogcnVuc1Njb3JlZDogbnVtYmVyXG4gKiAgIC0gaG93IG1hbnkgcnVucyB3ZXJlIHNjb3JlZCBvbiB0aGUgcGxheVxuICpcbiAqIHVucnVuc1Njb3JlZDogbnVtYmVyXG4gKiAgIC0gaG93IG1hbnkgdW5ydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5XG4gKlxuICogYmF0dGVyVXA6IGJvb2xlYW5cbiAqICAgLSB3aGV0aGVyIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIHRvIGJhdFxuICpcbiAqIGdhbWVTdGF0dXM6IG51bGwgfHwgc3RyaW5nXG4gKiAgIC0gd2lsbCBiZSBudWxsIG9yIG9uZSBvZjpcbiAqICAgLSBiZWZvcmVGaXJzdFBpdGNoLCB3aGVuIHRoZSBmaXJzdCBwaXRjaCBoYXNuJ3QgYmVlbiB0aHJvd24geWV0XG4gKiAgIC0gZmlyc3RIYWxmSW5uaW5nU3RhcnQsIHdoZW4gdGhlIGZpcnN0IGhhbGYgb2YgYW4gaW5uaW5nIGlzIHN0YXJ0aW5nXG4gKiAgIC0gc2Vjb25kSGFsZklubmluZ1N0YXJ0LCB3aGVuIHRoZSBzZWNvbmQgaGFsZiBvZiBhbiBpbm5pbmcgaXMgc3RhcnRpbmdcbiAqICAgLSBoYWxmSW5uaW5nRW5kLCB3aGVuIGFueSBoYWxmIG9mIGFuIGlubmluZyBpcyBlbmRpbmcgb24gdGhlIHBsYXlcbiAqICAgLSBnYW1lRW5kLCB3aGVuIHRoZSBnYW1lIGhhcyBlbmRlZFxuICogICAtIGlubmluZ1Jld2luZCwgd2hlbiB0aGUgc2FsbW9uIHN3aW0gdXBzdHJlYW1cbiAqXG4gKiBvdXQ6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYW4gb3V0IG9uIHRoZSBwbGF5XG4gKiBvdXRNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIGZseVxuICogICAgIC0gZ3JvdW5kXG4gKiAgICAgLSBzdHJpa2VcbiAqICAgICAtIGNhdWdodFN0ZWFsaW5nXG4gKiAgICAgLSB1bnNwZWNpZmllZCAoYXMgeW91IHNvbWV0aW1lcyBzZWUgd2l0aCBzYWNyaWZpY2Ugb3V0cylcbiAqICAgLSBzYWNyaWZpY2U6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiB0aGUgb3V0IHdhcyBhIHNhY3JpZmljZVxuICogICAtIHNhY3JpZmljZU1ldGE6IG9iamVjdCwgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzOlxuICogICAgIC0ga2luZDogc3RyaW5nIHx8IG51bGxcbiAqICAgICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgICAtIGFkdmFuY2VcbiAqICAgICAgIC0gc2NvcmVcbiAqICAgLSBmcmVlUmVmaWxsOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gYmF0dGVyIHVzZWQgdGhlaXIgZnJlZSByZWZpbGwgb24gdGhlIHBsYXlcbiAqXG4gKiBoaXQ6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYSBoaXQgb24gdGhlIHBsYXlcbiAqIGhpdE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0ga2luZDogbnVsbCB8fCBzdHJpbmdcbiAqICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgIC0gc2luZ2xlXG4gKiAgICAgLSBkb3VibGVcbiAqICAgICAtIHRyaXBsZVxuICogICAgIC0gaG9tZVJ1blxuICogICAgIC0gZ3JhbmRTbGFtXG4gKiAgIC0gYmlnQnVja2V0OiBib29sZWFuXG4gKiAgICAgLSB3aGV0aGVyIGEgQmlnIEJ1Y2tldCB3YXMgYWN0aXZhdGVkIG9uIHRoZSBwbGF5XG4gKlxuICogc3RlYWw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYW4gYXR0ZW1wdGVkIHN0ZWFsIG9uIHRoZSBwbGF5XG4gKiBzdGVhbE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0gc3VjY2VzczogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoaWVmIG5vdCBjYXVnaHQsIGZhbHNlIG90aGVyd2lzZVxuICogICAtIGJhc2VTdG9sZW46IG51bGwgfHwgbnVtYmVyXG4gKiAgICAgLSB0aGUgYmFzZSB3aGljaCB3YXMgc3RvbGVuICgwLWluZGV4ZWQpXG4gKlxuICogd2FsazogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhIHdhbGsgb24gdGhlIHBsYXlcbiAqIHdhbGtNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIG1pbmRUcmljazogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoZSBwaXRjaGVzIHVzZWQgYSBtaW5kIHRyaWNrIHRvIHR1cm4gdGhlIHdhbGsgaW50byBhXG4gKiAgICAgICBzdHJpa2VvdXRcbiAqXG4gKiBzcGVjaWFsOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIHdhcyBhIHNwZWNpYWwgZXZlbnQgb24gdGhlIHBsYXlcbiAqIHNwZWNpYWxNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIGJsb29kcmFpblxuICogICAgIC0gaXNQYXJ0eWluZ1xuICogICAgIC0gcmV2ZXJiXG4gKiAgICAgLSBiaXJkc0NpcmNsZVxuICogICAgIC0gYmlyZHNQZWNrZWRcbiAqICAgICAtIGp1c3RCaXJkc1xuICogICAgIC0gYWxsZXJnaWNSZWFjdGlvblxuICogICAgIC0gaW5jaW5lcmF0ZWRcbiAqICAgICAtIGJlY2FtZU1hZ21hdGljXG4gKiAgICAgLSBmZWVkYmFja1xuICogICAgIC0gZWxlY3RyaWNpdHlcbiAqICAgICAtIHVuc3RhYmxlXG4gKiAgICAgLSBmbGlja2VyaW5nXG4gKiAgICAgLSBjb25zdW1lcnNBdHRhY2tcbiAqICAgICAtIHNhbG1vblxuICogICAtIGRldGFpbHM6IG9iamVjdCwgd2l0aCBwcm9wcyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgZXZlbnRcbiAqXG4gKiBiYXNlUnVubmVyczogb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wcywgcmVwcmVzZW50aW5nIGJhc2VzXG4gKiAgIC0gZmlyc3RcbiAqICAgLSBzZWNvbmRcbiAqICAgLSB0aGlyZFxuICogICAtIGZvdXJ0aFxuICogICAtIGlmIHRoZXJlIGlzIGEgYmFzZXJ1bm5lciBvbiB0aGUgZ2l2ZW4gYmFzZSwgdGhlIHZhbHVlIGZvciB0aGF0IGJhc2VcbiAqICAgICB3aWxsIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gKiAgICAgLSBwbGF5ZXJOYW1lXG4gKiAgICAgLSBwbGF5ZXJJZFxuICpcbiAqIG1heGltdW1CbGFzZWJhbGw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gd2UncmUgYXQgTUFYSU1VTSBCTEFTRUJBTExcbiAqL1xuXG5cbnZhciBpbml0QW5hbHlzaXMgPSBmdW5jdGlvbiBpbml0QW5hbHlzaXMoZXZlbnREYXRhKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGV2ZW50RGF0YS5pZCB8fCBldmVudERhdGEuX2lkLFxuICAgIGdhbWVTdGF0dXM6IG51bGwsXG4gICAgcnVuc1Njb3JlZDogMCxcbiAgICB1bnJ1bnNTY29yZWQ6IDAsXG4gICAgYmF0dGVyVXA6IGZhbHNlLFxuICAgIG91dDogZmFsc2UsXG4gICAgb3V0TWV0YToge1xuICAgICAga2luZDogbnVsbCxcbiAgICAgIHNhY3JpZmljZTogZmFsc2UsXG4gICAgICBzYWNyaWZpY2VNZXRhOiB7XG4gICAgICAgIGtpbmQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBmcmVlUmVmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAgaGl0OiBmYWxzZSxcbiAgICBoaXRNZXRhOiB7XG4gICAgICBraW5kOiBudWxsLFxuICAgICAgYmlnQnVja2V0OiBmYWxzZVxuICAgIH0sXG4gICAgc3RlYWw6IGZhbHNlLFxuICAgIHN0ZWFsTWV0YToge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGJhc2VTdG9sZW46IG51bGxcbiAgICB9LFxuICAgIHdhbGs6IGZhbHNlLFxuICAgIHdhbGtNZXRhOiB7XG4gICAgICBtaW5kVHJpY2s6IGZhbHNlXG4gICAgfSxcbiAgICBzcGVjaWFsOiBmYWxzZSxcbiAgICBzcGVjaWFsTWV0YToge1xuICAgICAga2luZDogbnVsbFxuICAgIH0sXG4gICAgYmFzZVJ1bm5lcnM6IHtcbiAgICAgIGZpcnN0OiB7fSxcbiAgICAgIHNlY29uZDoge30sXG4gICAgICB0aGlyZDoge30sXG4gICAgICBmb3VydGg6IHt9XG4gICAgfSxcbiAgICBtYXhpbXVtQmxhc2ViYWxsOiBmYWxzZVxuICB9O1xufTtcblxudmFyIGFuYWx5emVHYW1lRXZlbnQgPSBmdW5jdGlvbiBhbmFseXplR2FtZUV2ZW50KGV2ZW50RGF0YSkge1xuICBpZiAoIWV2ZW50RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGFuYWx5c2lzID0gaW5pdEFuYWx5c2lzKGV2ZW50RGF0YSk7XG4gIHZhciBjaGVja2VycyA9IFtnYW1lU3RhdHVzLCBvdXRzLCBoaXRzLCB3YWxrcywgc3RlYWxzLCBzcGVjaWFsLCBtaXNjLCBiYXNlUnVubmVyc107XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfY2hlY2tlcnMgPSBjaGVja2VyczsgX2kgPCBfY2hlY2tlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGNoZWNrZXIgPSBfY2hlY2tlcnNbX2ldO1xuICAgIGNoZWNrZXIuY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSk7XG4gIH1cblxuICByZXR1cm4gYW5hbHlzaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYW5hbHl6ZUdhbWVFdmVudDogYW5hbHl6ZUdhbWVFdmVudFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdmbHlvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2ZseSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dyb3VuZCBvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2dyb3VuZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3N0cmlrZXMgb3V0JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdzdHJpa2UnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdmaWVsZGVyXFwncyBjaG9pY2UnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2ZpZWxkZXJzQ2hvaWNlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYSBkb3VibGUgcGxheScpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZG91YmxlUGxheSc7XG4gIH1cblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3NhY3JpZmljZScpID49IDApIHtcbiAgICAvLyB0aGlzIG1heSBhbHJlYWR5IGJlIGEgZ3JvdW5kL2ZseW91dCwgb3IgaXRzIHVuc3BlY2lmaWVkXG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gYW5hbHlzaXMub3V0TWV0YS5raW5kIHx8ICd1bnNwZWNpZmllZCc7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2UgPSB0cnVlOyAvLyBjaGVjayBpZiBzb21lb25lIHNjb3JlZCBvciBhZHZhbmNlZCBvbiB0aGUgc2FjcmlmaWNlXG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3Njb3JlcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuc2FjcmlmaWNlTWV0YS5raW5kID0gJ3Njb3JlJztcblxuICAgICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgYXJlIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG5cbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdhZHZhbmNlJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2VNZXRhLmtpbmQgPSAnYWR2YW5jZSc7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFuYWx5c2lzLm91dE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG5cbiAgICBpZiAoKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5oYWxmSW5uaW5nT3V0cykgPT09IDApIHtcbiAgICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnaGFsZklubmluZ0VuZCc7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdmcmVlIHJlZmlsbCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuZnJlZVJlZmlsbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCd1c2VzIGEgbWluZCB0cmljaycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEubWluZFRyaWNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2Jsb29kZHJhaW4nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdibG9vZGRyYWluJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgcGFydHlpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdpc1BhcnR5aW5nJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncmV2ZXJiJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAncmV2ZXJiJztcbiAgfSBlbHNlIGlmICggLy8gdGhpcyBjaGVjayBoYXMgdG8gY29tZSBiZWZvcmUgYmlyZHMgY2lyY2xlLCBiZWNhdXNlIHRoZSB0ZXh0XG4gIC8vICd0aGUgYmlyZHMgY2lyY2xlJyBpcyBwcmVzZW50IGluIGJvdGggY2FzZXNcbiAgdXBkYXRlLmluZGV4T2YoJ3RoZSBiaXJkcyBwZWNrZWQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiaXJkc1BlY2tlZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RoZSBiaXJkcyBjaXJjbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiaXJkc0NpcmNsZSc7XG4gIH0gZWxzZSBpZiAoIC8vIHRoaXMgaXMgdG8gY2FwdHVyZSBhbnkgb3RoZXIgbm9uLXBlY2tpbmcgJiBub24tY2lyY2xpbmcgYmlyZGluZXNzXG4gIHVwZGF0ZS5pbmRleE9mKCdiaXJkcycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2p1c3RCaXJkcyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hhZCBhbiBhbGxlcmdpYyByZWFjdGlvbicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2FsbGVyZ2ljUmVhY3Rpb24nO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdyb2d1ZSB1bXBpcmUgaW5jaW5lcmF0ZWQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdpbmNpbmVyYXRlZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2JlY2FtZSBtYWdtYXRpYycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JlY2FtZU1hZ21hdGljJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZmVlZGJhY2snKSA+PSAwICYmICh1cGRhdGUuaW5kZXhPZigncmVhbGl0eSBmbGlja2VycycpID49IDAgfHwgdXBkYXRlLmluZGV4T2YoJ3N3aXRjaGVkIHRlYW1zJykgPj0gMCkpIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2ZlZWRiYWNrJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGVsZWN0cmljaXR5IHphcHMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdlbGVjdHJpY2l0eSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2lzIG5vdyB1bnN0YWJsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3Vuc3RhYmxlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgbm93IGZsaWNrZXJpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdmbGlja2VyaW5nJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignY29uc3VtZXJzIGF0dGFjaycpID49IDApIHtcbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2RlZmVuZHMnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2NvbnN1bWVyc0F0dGFja0RlZmVuZGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdjb25zdW1lcnNBdHRhY2snO1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc2FsbW9uIHN3aW0gdXBzdHJlYW0nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdzYWxtb24nO1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnaW5uaW5nUmV3aW5kJzsgLy8gZmlyc3QsIGdyYWIgYWxsIHRoZSBzZW50ZW5jZXMgd2l0aCB3aGljaCB0ZWFtIGxvc3QgaG93IG1hbnkgcnVuc1xuXG4gICAgdmFyIHRlYW1zID0gdXBkYXRlLm1hdGNoKC8oXFxkKyhcXC5cXGQrKT8pIG9mIHRoZSAuKidzIHJ1bnMgYXJlIGxvc3QvZyk7XG5cbiAgICBpZiAodGVhbXMpIHtcbiAgICAgIHZhciBydW5zU3RvbGVuID0gdGVhbXMubWFwKGZ1bmN0aW9uICh0ZWFtKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmdldE51bWJlcih0ZWFtLCBudWxsLCBudWxsKSB8fCAwO1xuICAgICAgfSk7XG4gICAgICB2YXIgcnVuc1N0b2xlbkZyb20gPSB0ZWFtcy5tYXAoZnVuY3Rpb24gKHRlYW0pIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHRlYW0sIC9vZiB0aGUgLywgLydzIHJ1bnMvKTtcbiAgICAgIH0pO1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgICAgcnVuc1N0b2xlbjogcnVuc1N0b2xlbixcbiAgICAgICAgcnVuc1N0b2xlbkZyb206IHJ1bnNTdG9sZW5Gcm9tXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncnVucyBhcmUgb3ZlcmZsb3dpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdydW5zT3ZlcmZsb3dpbmcnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zR2FpbmVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8gdW5ydW5zLyksXG4gICAgICBydW5zT3ZlcmZsb3dpbmdGb3I6IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL1xcbi8sIC8gZ2Fpbi8pXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc29sYXIgcGFuZWxzIGFic29yYicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3J1bnNDb2xsZWN0ZWQnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zQ29sbGVjdGVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8gcnVucyBhcmUgY29sbGVjdGVkLyksXG4gICAgICBydW5zQ29sbGVjdGVkRnJvbTogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc2F2ZWQgZm9yIHRoZSAvLCAvJ3MgbmV4dCBnYW1lLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdW4gMiBzbWlsZXMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdzdW4yJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvISBzdW4gMiBzbWlsZXMvKSxcbiAgICAgIHdpblNldFVwb246IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL3NldCBhIHdpbiB1cG9uIHRoZSAvLCAvXFwuLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdibGFjayBob2xlIHN3YWxsb3dzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmxhY2tIb2xlJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvY29sbGVjdCAvLCAvIS8pLFxuICAgICAgd2luU3dhbGxvd2VkRnJvbTogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc3dhbGxvd3MgdGhlIHJ1bnMgYW5kIGEgLywgLyB3aW4uLylcbiAgICB9OyAvLyBzZWUgaWYgY2FyY2luaXphdGlvbiB0cmlnZ2VyZWQgYnkgdGhlIGJsYWNrIGhvbGVcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGJhbHRpbW9yZSBjcmFicyBzdGVhbCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMucGxheWVyU3RvbGVuID0gdXRpbC5nZXRQbGF5ZXIodXBkYXRlLCAvY3JhYnMgc3RlYWwgLywgLyBmb3IgdGhlIHJlbWFpbmRlci8pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JpbmQgcmFpbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2dyaW5kUmFpbCc7XG4gICAgdmFyIHRyaWNrcyA9IHV0aWwuZ2V0U2thdGVUcmlja3ModXBkYXRlKTtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBwbGF5ZXI6IHV0aWwuZ2V0UGxheWVyKHVwZGF0ZSwgL14vLCAvIGhvcHMgb24vKVxuICAgIH0sIHRyaWNrcyk7XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3NhZmUhJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyksIHt9LCB7XG4gICAgICAgIGdyaW5kU3VjY2VzczogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG91dCFcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMpLCB7fSwge1xuICAgICAgICBncmluZFN1Y2Nlc3M6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAncmFpbEJhaWwnO1xuICAgIH1cbiAgfSAvLyBpZiB3ZSBmb3VuZCBzb21ldGhpbmcsIHRoZW46XG5cblxuICBpZiAoYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWwgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdGVhbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zdGVhbCA9IHRydWU7XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2NhdWdodCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2NhdWdodFN0ZWFsaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gLy8gYmFzZVN0b2xlbiBpcyAwLWluZGV4ZWRcblxuXG4gICAgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipmaXJzdC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAwO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKnNlY29uZC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAxO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKnRoaXJkLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDI7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qZm91cnRoLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDM7IC8vIHRoaXMgbWF5IGhhdmUgYmVlbiBhIHJ1biBpZiB0aGVyZSBhcmUgNCBiYXNlcyBpbiBwbGF5XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhdHRlcikgIT09IG51bGwgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5QmFzZXMpID09PSA0KSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSBlbHNlIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheUJhdHRlcikgIT09IG51bGwgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmFzZXMpID09PSA0KSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qaG9tZS8pICE9PSAtMSkge1xuICAgICAgLy8gc2VlIGlmIGhvbWUgb3IgYXdheSBzdG9sZSB0aGUgYmFzZVxuICAgICAgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhdHRlcikgIT09IG51bGwpIHtcbiAgICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlCYXNlcykgLSAxIHx8IDM7XG4gICAgICB9IGVsc2UgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdhQmF0dGVyKSAhPT0gbnVsbCkge1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhc2VzKSAtIDEgfHwgMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG9sZGVyIGdhbWVzIGRvbid0IGhhdmUgdGhlc2UgZmllbGRzLCBvciBtYXkgaGF2ZSBib3RoXG4gICAgICAgIC8vIGhvbWUgYW5kIGF3YXkgYmF0dGVycyBmaWxsZWQgaW47IGp1c3QgYXNzdW1lZCBob21lIGJhc2VcbiAgICAgICAgLy8gaXMgYmFzZSAjMyBpbiB0aG9zZSBjYXNlcywgaSBndWVzc1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDM7XG4gICAgICB9XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpKSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSAvLyBjaGVjayBmb3IgYmxhc2VydW5uaW5nIHNjb3JlcyBwcmUgcy0xMiAob3RoZXJ3aXNlIGNhcHR1cmVkIGluXG4gICAgLy8gc3JjL21pc2MuanMpXG5cblxuICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIHVwZGF0ZS5pbmRleE9mKCdibGFzZXJ1bm5pbmcnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvc2NvcmVzIC8sIC8gd2l0aCBibGFzZXJ1bm5pbmcvKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZXRVcGRhdGVUZXh0ID0gZnVuY3Rpb24gZ2V0VXBkYXRlVGV4dChldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkbGFzdFVwZGF0ZTtcblxuICByZXR1cm4gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGxhc3RVcGRhdGUgPSBldmVudERhdGEubGFzdFVwZGF0ZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRsYXN0VXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGxhc3RVcGRhdGUudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgbnVtYmVyIChzdXBwb3J0cyBwb3NpdGl2ZSBpbnRlZ2VycyAmIGZsb2F0cyksXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIG51bWJlcnNcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCBmb3IgbnVtYmVyc1xuICogd2lsbCByZXR1cm4gYSBudW1iZXIgb3IgbnVsbFxuICovXG5cblxudmFyIGdldE51bWJlciA9IGZ1bmN0aW9uIGdldE51bWJlcihzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIG51bSA9IG51bGw7XG4gIHZhciBudW1SZWdleCA9IC8oKFxcZCspPyhcXC5cXGQrKT8pLztcblxuICBpZiAoIXByZSkge1xuICAgIHByZSA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcG9zdCA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwcmUuc291cmNlICsgbnVtUmVnZXguc291cmNlICsgcG9zdC5zb3VyY2UpO1xuICB2YXIgbWF0Y2hlcyA9IHJlZ2V4W1N5bWJvbC5tYXRjaF0ocyk7XG5cbiAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkge1xuICAgIG51bSA9IE51bWJlcihtYXRjaGVzWzFdKSB8fCBudW07XG4gIH1cblxuICByZXR1cm4gbnVtO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIG1hdGNoIGJldHdlZW4gcHJlIGFuZCBwb3N0XG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgbWF0Y2hcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSBtYXRjaFxuICogd2lsbCByZXR1cm4gdGhlIG1hdGNoLCBvciBhbiBlbXB0eSBzdHJpbmdcbiAqL1xuXG5cbnZhciBnZXRNYXRjaCA9IGZ1bmN0aW9uIGdldE1hdGNoKHMsIHByZSwgcG9zdCkge1xuICB2YXIgbWF0Y2hSZWdleCA9IC8oLiopLztcblxuICBpZiAoIXByZSkge1xuICAgIHByZSA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcG9zdCA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwcmUuc291cmNlICsgbWF0Y2hSZWdleC5zb3VyY2UgKyBwb3N0LnNvdXJjZSk7XG4gIHZhciBtYXRjaGVzID0gcmVnZXhbU3ltYm9sLm1hdGNoXShzKTtcblxuICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNbMV07XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgdGVhbSBuYW1lXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIHRoZSB0ZWFtIG5hbWVcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCB0aGUgdGVhbSBuYW1lXG4gKiB3aWxsIHJldHVybiAnaG9tZScgJ2F3YXknIG9yICcnXG4gKi9cblxuXG52YXIgZ2V0VGVhbSA9IGZ1bmN0aW9uIGdldFRlYW0oZXZlbnREYXRhLCBzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIHRlYW0gPSBnZXRNYXRjaChzLCBwcmUsIHBvc3QpO1xuXG4gIGlmICh0ZWFtKSB7XG4gICAgdGVhbSA9IGV2ZW50RGF0YS5ob21lVGVhbU5pY2tuYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRlYW0gPyAnaG9tZScgOiAnYXdheSc7XG4gIH1cblxuICByZXR1cm4gdGVhbTtcbn07XG5cbnZhciB0aXRsZUNhc2UgPSBmdW5jdGlvbiB0aXRsZUNhc2Uocykge1xuICBpZiAoIXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICA7XG4gIHJldHVybiBzLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgaWYgKHdvcmQpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh3b3JkWzBdLnRvVXBwZXJDYXNlKCkpLmNvbmNhdCh3b3JkLnNsaWNlKDEpKTtcbiAgICB9XG4gIH0pLmpvaW4oJyAnKTtcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSBwbGF5ZXIgbmFtZVxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIHJlZ2V4IGZvciB0aGUgdGVhbSBuYW1lXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgcmVnZXggdGhlIHRlYW0gbmFtZVxuICogd2lsbCByZXR1cm4gdGhlIHBsYXllciBuYW1lIG9yICcnXG4gKi9cblxuXG52YXIgZ2V0UGxheWVyID0gZnVuY3Rpb24gZ2V0UGxheWVyKHMsIHByZSwgcG9zdCkge1xuICB2YXIgcGxheWVyID0gZ2V0TWF0Y2gocywgcHJlLCBwb3N0KTtcbiAgcmV0dXJuIHRpdGxlQ2FzZShwbGF5ZXIpO1xufTtcblxudmFyIGdldFNrYXRlVHJpY2tzID0gZnVuY3Rpb24gZ2V0U2thdGVUcmlja3ModXBkYXRlKSB7XG4gIHZhciBncmluZFRyaWNrLCBncmluZFNjb3JlLCBsYW5kVHJpY2ssIGxhbmRTY29yZTtcbiAgdmFyIHRyaWNrcyA9IHVwZGF0ZS5tYXRjaCgvIGEgKC4qKSBcXCgoXFxkKykvZyk7IC8vIGdyaW5kIHRyaWNrXG5cbiAgaWYgKHRyaWNrc1swXSkge1xuICAgIGdyaW5kVHJpY2sgPSB0aXRsZUNhc2UoZ2V0TWF0Y2godHJpY2tzWzBdLCAvYSAvLCAvIFxcKC8pKTtcbiAgICBncmluZFNjb3JlID0gZ2V0TnVtYmVyKHRyaWNrc1swXSwgL1xcKC8sIC8kLyk7XG4gIH0gLy8gbGFuZCB0cmlja1xuXG5cbiAgaWYgKHRyaWNrc1sxXSkge1xuICAgIGxhbmRUcmljayA9IHRpdGxlQ2FzZShnZXRNYXRjaCh0cmlja3NbMV0sIC9hIC8sIC8gXFwoLykpO1xuICAgIGxhbmRTY29yZSA9IGdldE51bWJlcih0cmlja3NbMV0sIC9cXCgvLCAvJC8pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBncmluZFRyaWNrOiBncmluZFRyaWNrLFxuICAgIGdyaW5kU2NvcmU6IGdyaW5kU2NvcmUsXG4gICAgbGFuZFRyaWNrOiBsYW5kVHJpY2ssXG4gICAgbGFuZFNjb3JlOiBsYW5kU2NvcmVcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRVcGRhdGVUZXh0OiBnZXRVcGRhdGVUZXh0LFxuICBnZXROdW1iZXI6IGdldE51bWJlcixcbiAgZ2V0VGVhbTogZ2V0VGVhbSxcbiAgZ2V0UGxheWVyOiBnZXRQbGF5ZXIsXG4gIGdldFNrYXRlVHJpY2tzOiBnZXRTa2F0ZVRyaWNrc1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdkcmF3cyBhIHdhbGsnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMud2FsayA9IHRydWU7IC8vIGNoZWNrIGlmIGFueSBydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5IHByaW9yIHRvIHMxMlxuXG4gICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgdXBkYXRlLmluZGV4T2YoJ3Njb3JlcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuICAgIC8vIGNoZWNrIGZvciBtaW5kIHRyaWNrIHNoZW5hbmlnYW5zXG5cblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndXNlcyBhIG1pbmQgdHJpY2snKSkge1xuICAgICAgYW5hbHlzaXMud2Fsa01ldGEubWluZFRyaWNrID0gdHJ1ZTtcblxuICAgICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdHJpa2VzIG91dCcpKSB7XG4gICAgICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG4gICAgICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdzdHJpa2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCIvKipcbiAqIEBhdXRob3IgS2F0ZVxuICovXG5cbnZhciB0cmFjZXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG4gICAgZnVuY3Rpb24gc2V0UmFuZG9tKG5ld1JhbmRvbSkge1xuICAgICAgICByYW5kb20gPSBuZXdSYW5kb207XG4gICAgfVxuXG4gICAgdmFyIFRyYWNlcnlOb2RlID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZEluZGV4LCBzZXR0aW5ncykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuXG4gICAgICAgIC8vIE5vIGlucHV0PyBBZGQgYW4gZXJyb3IsIGJ1dCBjb250aW51ZSBhbnl3YXlzXG4gICAgICAgIGlmIChzZXR0aW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIkVtcHR5IGlucHV0IGZvciBub2RlXCIpO1xuICAgICAgICAgICAgc2V0dGluZ3MucmF3ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSByb290IG5vZGUgb2YgYW4gZXhwYW5zaW9uLCBpdCB3aWxsIGhhdmUgdGhlIGdyYW1tYXIgcGFzc2VkIGFzIHRoZSAncGFyZW50J1xuICAgICAgICAvLyAgc2V0IHRoZSBncmFtbWFyIGZyb20gdGhlICdwYXJlbnQnLCBhbmQgc2V0IGFsbCBvdGhlciB2YWx1ZXMgZm9yIGEgcm9vdCBub2RlXG4gICAgICAgIGlmICggcGFyZW50IGluc3RhbmNlb2YgdHJhY2VyeS5HcmFtbWFyKSB7XG4gICAgICAgICAgICB0aGlzLmdyYW1tYXIgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyYW1tYXIgPSBwYXJlbnQuZ3JhbW1hcjtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDE7XG4gICAgICAgICAgICB0aGlzLmNoaWxkSW5kZXggPSBjaGlsZEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYXcgPSBzZXR0aW5ncy5yYXc7XG4gICAgICAgIHRoaXMudHlwZSA9IHNldHRpbmdzLnR5cGU7XG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGhpcy5ncmFtbWFyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBncmFtbWFyIHNwZWNpZmllZCBmb3IgdGhpcyBub2RlXCIsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIk5vZGUoJ1wiICsgdGhpcy5yYXcgKyBcIicgXCIgKyB0aGlzLnR5cGUgKyBcIiBkOlwiICsgdGhpcy5kZXB0aCArIFwiKVwiO1xuICAgIH07XG5cbiAgICAvLyBFeHBhbmQgdGhlIG5vZGUgKHdpdGggdGhlIGdpdmVuIGNoaWxkIHJ1bGUpXG4gICAgLy8gIE1ha2UgY2hpbGRyZW4gaWYgdGhlIG5vZGUgaGFzIGFueVxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS5leHBhbmRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkUnVsZSwgcHJldmVudFJlY3Vyc2lvbikge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gXCJcIjtcblxuICAgICAgICAvLyBTZXQgdGhlIHJ1bGUgZm9yIG1ha2luZyBjaGlsZHJlbixcbiAgICAgICAgLy8gYW5kIGV4cGFuZCBpdCBpbnRvIHNlY3Rpb25cbiAgICAgICAgdGhpcy5jaGlsZFJ1bGUgPSBjaGlsZFJ1bGU7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkUnVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSB0cmFjZXJ5LnBhcnNlKGNoaWxkUnVsZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBlcnJvcnMgdG8gdGhpc1xuICAgICAgICAgICAgaWYgKHNlY3Rpb25zLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5jb25jYXQoc2VjdGlvbnMuZXJyb3JzKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IG5ldyBUcmFjZXJ5Tm9kZSh0aGlzLCBpLCBzZWN0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50UmVjdXJzaW9uKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmV4cGFuZChwcmV2ZW50UmVjdXJzaW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBpbiB0aGUgZmluaXNoZWQgdGV4dFxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ICs9IHRoaXMuY2hpbGRyZW5baV0uZmluaXNoZWRUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gbm9ybWFsIG9wZXJhdGlvbiwgdGhpcyBzaG91bGRuJ3QgZXZlciBoYXBwZW5cbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJObyBjaGlsZCBydWxlIHByb3ZpZGVkLCBjYW4ndCBleHBhbmQgY2hpbGRyZW5cIik7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBjaGlsZCBydWxlIHByb3ZpZGVkLCBjYW4ndCBleHBhbmQgY2hpbGRyZW5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRXhwYW5kIHRoaXMgcnVsZSAocG9zc2libHkgY3JlYXRpbmcgY2hpbGRyZW4pXG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLmV4cGFuZCA9IGZ1bmN0aW9uKHByZXZlbnRSZWN1cnNpb24pIHtcblxuICAgICAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbnNpb25FcnJvcnMgPSBbXTtcblxuICAgICAgICAgICAgLy8gVHlwZXMgb2Ygbm9kZXNcbiAgICAgICAgICAgIC8vIC0xOiByYXcsIG5lZWRzIHBhcnNpbmdcbiAgICAgICAgICAgIC8vICAwOiBQbGFpbnRleHRcbiAgICAgICAgICAgIC8vICAxOiBUYWcgKFwiI3N5bWJvbC5tb2QubW9kMi5tb2QzI1wiIG9yIFwiI1twdXNoVGFyZ2V0OnB1c2hSdWxlXXN5bWJvbC5tb2RcIilcbiAgICAgICAgICAgIC8vICAyOiBBY3Rpb24gKFwiW3B1c2hUYXJnZXQ6cHVzaFJ1bGVdLCBbcHVzaFRhcmdldDpQT1BdXCIsIG1vcmUgaW4gdGhlIGZ1dHVyZSlcblxuICAgICAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgLy8gUmF3IHJ1bGVcbiAgICAgICAgICAgIGNhc2UgLTE6XG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZENoaWxkcmVuKHRoaXMucmF3LCBwcmV2ZW50UmVjdXJzaW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gcGxhaW50ZXh0LCBkbyBub3RoaW5nIGJ1dCBjb3B5IHRleHQgaW50byBmaW5zaWhlZCB0ZXh0XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSB0aGlzLnJhdztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gVGFnXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgdG8gZmluZCBhbnkgYWN0aW9ucywgYW5kIGZpZ3VyZSBvdXQgd2hhdCB0aGUgc3ltYm9sIGlzXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0YWN0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHRyYWNlcnkucGFyc2VUYWcodGhpcy5yYXcpO1xuXG4gICAgICAgICAgICAgICAgLy8gQnJlYWsgaW50byBzeW1ib2wgYWN0aW9ucyBhbmQgbW9kaWZpZXJzXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2wgPSBwYXJzZWQuc3ltYm9sO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZXJzID0gcGFyc2VkLm1vZGlmaWVycztcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbGwgdGhlIHByZWFjdGlvbnMgZnJvbSB0aGUgcmF3IHN5bnRheFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLnByZWFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVhY3Rpb25zW2ldID0gbmV3IE5vZGVBY3Rpb24odGhpcywgcGFyc2VkLnByZWFjdGlvbnNbaV0ucmF3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQucG9zdGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnBvc3RhY3Rpb25zW2ldID0gbmV3IE5vZGVBY3Rpb24odGhpcywgcGFyc2VkLnBvc3RhY3Rpb25zW2ldLnJhdyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSB1bmRvIGFjdGlvbnMgZm9yIGFsbCBwcmVhY3Rpb25zIChwb3BzIGZvciBlYWNoIHB1c2gpXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByZWFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlYWN0aW9uc1tpXS50eXBlID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0YWN0aW9ucy5wdXNoKHRoaXMucHJlYWN0aW9uc1tpXS5jcmVhdGVVbmRvKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFjdGl2YXRlIGFsbCB0aGUgcHJlYWN0aW9uc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcmVhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlYWN0aW9uc1tpXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gdGhpcy5yYXc7XG5cbiAgICAgICAgICAgICAgICAvLyBFeHBhbmQgKHBhc3NpbmcgdGhlIG5vZGUsIHRoaXMgYWxsb3dzIHRyYWNraW5nIG9mIHJlY3Vyc2lvbiBkZXB0aClcblxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFJ1bGUgPSB0aGlzLmdyYW1tYXIuc2VsZWN0UnVsZSh0aGlzLnN5bWJvbCwgdGhpcywgdGhpcy5lcnJvcnMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRDaGlsZHJlbihzZWxlY3RlZFJ1bGUsIHByZXZlbnRSZWN1cnNpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgbW9kaWZpZXJzXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlIHBhcnNlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIG9uIGhhc2h0YWdzIHdpdGhpbiBwYXJlbnRoZXNpcyB3aXRoaW4gdGFncyxcbiAgICAgICAgICAgICAgICAvLyAgIHNvIHRoYXQgbW9kaWZpZXIgcGFyYW1ldGVycyBjYW4gY29udGFpbiB0YWdzIFwiI3N0b3J5LnJlcGxhY2UoI3Byb3RhZ29uaXN0IywgI25ld0NoYXJhY3RlciMpI1wiXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kTmFtZSA9IHRoaXMubW9kaWZpZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kUGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2ROYW1lLmluZGV4T2YoXCIoXCIpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0V4cCA9IC9cXCgoW14pXSspXFwpLztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9kbzogaWdub3JlIGFueSBlc2NhcGVkIGNvbW1hcy4gIEZvciBub3csIGNvbW1hcyBhbHdheXMgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRzID0gcmVnRXhwLmV4ZWModGhpcy5tb2RpZmllcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kUGFyYW1zID0gcmVzdWx0c1sxXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kTmFtZSA9IHRoaXMubW9kaWZpZXJzW2ldLnN1YnN0cmluZygwLCBtb2ROYW1lLmluZGV4T2YoXCIoXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRoaXMuZ3JhbW1hci5tb2RpZmllcnNbbW9kTmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWlzc2luZyBtb2RpZmllcj9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJNaXNzaW5nIG1vZGlmaWVyIFwiICsgbW9kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCArPSBcIigoLlwiICsgbW9kTmFtZSArIFwiKSlcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gbW9kKHRoaXMuZmluaXNoZWRUZXh0LCBtb2RQYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gcG9zdC1hY3Rpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvc3RhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGFjdGlvbnNbaV0uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgICAgICAvLyBKdXN0IGEgYmFyZSBhY3Rpb24/ICBFeHBhbmQgaXQhXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCB0aGlzLnJhdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIE5vIHZpc2libGUgdGV4dCBmb3IgYW4gYWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc29tZSB2aXNpYmxlIHRleHQgZm9yIGlmIHRoZXJlIGlzIGEgZmFpbHVyZSB0byBwZXJmb3JtIHRoZSBhY3Rpb24/XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwiQWxyZWFkeSBleHBhbmRlZCBcIiArIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLmNsZWFyRXNjYXBlQ2hhcnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IHRoaXMuZmluaXNoZWRUZXh0LnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiRE9VQkxFQkFDS1NMQVNIXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcIikucmVwbGFjZSgvRE9VQkxFQkFDS1NMQVNIL2csIFwiXFxcXFwiKTtcbiAgICB9O1xuXG4gICAgLy8gQW4gYWN0aW9uIHRoYXQgb2NjdXJzIHdoZW4gYSBub2RlIGlzIGV4cGFuZGVkXG4gICAgLy8gVHlwZXMgb2YgYWN0aW9uczpcbiAgICAvLyAwIFB1c2g6IFtrZXk6cnVsZV1cbiAgICAvLyAxIFBvcDogW2tleTpQT1BdXG4gICAgLy8gMiBmdW5jdGlvbjogW2Z1bmN0aW9uTmFtZShwYXJhbTAscGFyYW0xKV0gKFRPRE8hKVxuICAgIGZ1bmN0aW9uIE5vZGVBY3Rpb24obm9kZSwgcmF3KSB7XG4gICAgICAgIC8qXG4gICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICBjb25zb2xlLndhcm4oXCJObyBub2RlIGZvciBOb2RlQWN0aW9uXCIpO1xuICAgICAgICAgaWYgKCFyYXcpXG4gICAgICAgICBjb25zb2xlLndhcm4oXCJObyByYXcgY29tbWFuZHMgZm9yIE5vZGVBY3Rpb25cIik7XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICAgICAgdmFyIHNlY3Rpb25zID0gcmF3LnNwbGl0KFwiOlwiKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBzZWN0aW9uc1swXTtcblxuICAgICAgICAvLyBObyBjb2xvbj8gQSBmdW5jdGlvbiFcbiAgICAgICAgaWYgKHNlY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gMjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29sb24/IEl0J3MgZWl0aGVyIGEgcHVzaCBvciBhIHBvcFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucnVsZSA9IHNlY3Rpb25zWzFdO1xuICAgICAgICAgICAgaWYgKHRoaXMucnVsZSA9PT0gXCJQT1BcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIE5vZGVBY3Rpb24ucHJvdG90eXBlLmNyZWF0ZVVuZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlQWN0aW9uKHRoaXMubm9kZSwgdGhpcy50YXJnZXQgKyBcIjpQT1BcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETyBOb3Qgc3VyZSBob3cgdG8gbWFrZSBVbmRvIGFjdGlvbnMgZm9yIGZ1bmN0aW9ucyBvciBQT1BzXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBOb2RlQWN0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZ3JhbW1hciA9IHRoaXMubm9kZS5ncmFtbWFyO1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIC8vIHNwbGl0IGludG8gc2VjdGlvbnMgKHRoZSB3YXkgdG8gZGVub3RlIGFuIGFycmF5IG9mIHJ1bGVzKVxuICAgICAgICAgICAgdGhpcy5ydWxlU2VjdGlvbnMgPSB0aGlzLnJ1bGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJ1bGVzID0gW107XG4gICAgICAgICAgICB0aGlzLnJ1bGVOb2RlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJ1bGVTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IFRyYWNlcnlOb2RlKGdyYW1tYXIsIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6IC0xLFxuICAgICAgICAgICAgICAgICAgICByYXcgOiB0aGlzLnJ1bGVTZWN0aW9uc1tpXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbi5leHBhbmQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSdWxlcy5wdXNoKG4uZmluaXNoZWRUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogZXNjYXBlIGNvbW1hcyBwcm9wZXJseVxuICAgICAgICAgICAgZ3JhbW1hci5wdXNoUnVsZXModGhpcy50YXJnZXQsIHRoaXMuZmluaXNoZWRSdWxlcywgdGhpcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZ3JhbW1hci5wb3BSdWxlcyh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgZ3JhbW1hci5mbGF0dGVuKHRoaXMudGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgTm9kZUFjdGlvbi5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICsgXCI6XCIgKyB0aGlzLnJ1bGU7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldCArIFwiOlBPUFwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gXCIoKHNvbWUgZnVuY3Rpb24pKVwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiKChVbmtub3duIEFjdGlvbikpXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2V0cyBvZiBydWxlc1xuICAgIC8vIENhbiBhbHNvIGNvbnRhaW4gY29uZGl0aW9uYWwgb3IgZmFsbGJhY2sgc2V0cyBvZiBydWxlc2V0cylcbiAgICBmdW5jdGlvbiBSdWxlU2V0KGdyYW1tYXIsIHJhdykge1xuICAgICAgICB0aGlzLnJhdyA9IHJhdztcbiAgICAgICAgdGhpcy5ncmFtbWFyID0gZ3JhbW1hcjtcbiAgICAgICAgdGhpcy5mYWxsb2ZmID0gMTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXcpKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRSdWxlcyA9IHJhdztcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgfHwgcmF3IGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRSdWxlcyA9IFtyYXddO1xuICAgICAgICB9IGVsc2UgaWYgKHJhdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHN1cHBvcnQgZm9yIGNvbmRpdGlvbmFsIGFuZCBoaWVyYXJjaGljYWwgcnVsZSBzZXRzXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBSdWxlU2V0LnByb3RvdHlwZS5zZWxlY3RSdWxlID0gZnVuY3Rpb24oZXJyb3JzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR2V0IHJ1bGVcIiwgdGhpcy5yYXcpO1xuICAgICAgICAvLyBJcyB0aGVyZSBhIGNvbmRpdGlvbmFsP1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb25hbFJ1bGUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ3JhbW1hci5leHBhbmQodGhpcy5jb25kaXRpb25hbFJ1bGUsIHRydWUpO1xuICAgICAgICAgICAgLy8gZG9lcyB0aGlzIHZhbHVlIG1hdGNoIGFueSBvZiB0aGUgY29uZGl0aW9uYWxzP1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uYWxWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmNvbmRpdGlvbmFsVmFsdWVzW3ZhbHVlXS5zZWxlY3RSdWxlKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vIHJldHVybmVkIHZhbHVlP1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgdGhlcmUgYSByYW5rZWQgb3JkZXI/XG4gICAgICAgIGlmICh0aGlzLnJhbmtpbmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yYW5raW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLnJhbmtpbmcuc2VsZWN0UnVsZSgpO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0aWxsIG5vIHJldHVybmVkIHZhbHVlP1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFJ1bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBTZWxlY3QgZnJvbSB0aGlzIGJhc2ljIGFycmF5IG9mIHJ1bGVzXG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGlzdHJpYnV0aW9uIGZyb20gdGhlIGdyYW1tYXIgaWYgdGhlcmUgaXMgbm8gb3RoZXJcbiAgICAgICAgICAgIHZhciBkaXN0cmlidXRpb24gPSB0aGlzLmRpc3RyaWJ1dGlvbjtcbiAgICAgICAgICAgIGlmICghZGlzdHJpYnV0aW9uKVxuICAgICAgICAgICAgICAgIGRpc3RyaWJ1dGlvbiA9IHRoaXMuZ3JhbW1hci5kaXN0cmlidXRpb247XG5cbiAgICAgICAgICAgIHN3aXRjaChkaXN0cmlidXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJzaHVmZmxlXCI6XG5cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzaHVmZmxlIGRlc2tcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2h1ZmZsZWREZWNrIHx8IHRoaXMuc2h1ZmZsZWREZWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2h1ZmZsZWREZWNrID0gZnlzaHVmZmxlKEFycmF5LmFwcGx5KG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCA6IHRoaXMuZGVmYXVsdFJ1bGVzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoTnVtYmVyLmNhbGwsIE51bWJlciksIHRoaXMuZmFsbG9mZik7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuc2h1ZmZsZWREZWNrLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2VpZ2h0ZWRcIjpcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIldlaWdodGVkIGRpc3RyaWJ1dGlvbiBub3QgeWV0IGltcGxlbWVudGVkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZhbGxvZmZcIjpcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIkZhbGxvZmYgZGlzdHJpYnV0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucG93KHJhbmRvbSgpLCB0aGlzLmZhbGxvZmYpICogdGhpcy5kZWZhdWx0UnVsZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRVc2VzKVxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFVzZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFVzZXNbaW5kZXhdID0gKyt0aGlzLmRlZmF1bHRVc2VzW2luZGV4XSB8fCAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFJ1bGVzW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9ycy5wdXNoKFwiTm8gZGVmYXVsdCBydWxlcyBkZWZpbmVkIGZvciBcIiArIHRoaXMpO1xuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH07XG5cbiAgICBSdWxlU2V0LnByb3RvdHlwZS5jbGVhclN0YXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVzZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFVzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBmeXNodWZmbGUoYXJyYXksIGZhbGxvZmYpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLFxuICAgICAgICAgICAgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihyYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIHZhciBTeW1ib2wgPSBmdW5jdGlvbihncmFtbWFyLCBrZXksIHJhd1J1bGVzKSB7XG4gICAgICAgIC8vIFN5bWJvbHMgY2FuIGJlIG1hZGUgd2l0aCBhIHNpbmdsZSB2YWx1ZSwgYW5kIGFycmF5LCBvciBhcnJheSBvZiBvYmplY3RzIG9mIChjb25kaXRpb25zL3ZhbHVlcylcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuZ3JhbW1hciA9IGdyYW1tYXI7XG4gICAgICAgIHRoaXMucmF3UnVsZXMgPSByYXdSdWxlcztcblxuICAgICAgICB0aGlzLmJhc2VSdWxlcyA9IG5ldyBSdWxlU2V0KHRoaXMuZ3JhbW1hciwgcmF3UnVsZXMpO1xuICAgICAgICB0aGlzLmNsZWFyU3RhdGUoKTtcblxuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyBDbGVhciB0aGUgc3RhY2sgYW5kIGNsZWFyIGFsbCBydWxlc2V0IHVzYWdlc1xuICAgICAgICB0aGlzLnN0YWNrID0gW3RoaXMuYmFzZVJ1bGVzXTtcblxuICAgICAgICB0aGlzLnVzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5iYXNlUnVsZXMuY2xlYXJTdGF0ZSgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnB1c2hSdWxlcyA9IGZ1bmN0aW9uKHJhd1J1bGVzKSB7XG4gICAgICAgIHZhciBydWxlcyA9IG5ldyBSdWxlU2V0KHRoaXMuZ3JhbW1hciwgcmF3UnVsZXMpO1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2gocnVsZXMpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnBvcFJ1bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuc2VsZWN0UnVsZSA9IGZ1bmN0aW9uKG5vZGUsIGVycm9ycykge1xuICAgICAgICB0aGlzLnVzZXMucHVzaCh7XG4gICAgICAgICAgICBub2RlIDogbm9kZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVGhlIHJ1bGUgc3RhY2sgZm9yICdcIiArIHRoaXMua2V5ICsgXCInIGlzIGVtcHR5LCB0b28gbWFueSBwb3BzP1wiKTtcbiAgICAgICAgICAgIHJldHVybiBcIigoXCIgKyB0aGlzLmtleSArIFwiKSlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uc2VsZWN0UnVsZSgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLmdldEFjdGl2ZVJ1bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5zZWxlY3RSdWxlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucnVsZXNUb0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucmF3UnVsZXMpO1xuICAgIH07XG5cbiAgICB2YXIgR3JhbW1hciA9IGZ1bmN0aW9uKHJhdywgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSB7fTtcbiAgICAgICAgdGhpcy5sb2FkRnJvbVJhd09iaihyYXcpO1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5jbGVhclN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zeW1ib2xzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5c1tpXV0uY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmFkZE1vZGlmaWVycyA9IGZ1bmN0aW9uKG1vZHMpIHtcblxuICAgICAgICAvLyBjb3B5IG92ZXIgdGhlIGJhc2UgbW9kaWZpZXJzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtb2RzKSB7XG4gICAgICAgICAgICBpZiAobW9kcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllcnNba2V5XSA9IG1vZHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5sb2FkRnJvbVJhd09iaiA9IGZ1bmN0aW9uKHJhdykge1xuXG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xuICAgICAgICB0aGlzLnN5bWJvbHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdWJncmFtbWFycyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnJhdykge1xuICAgICAgICAgICAgLy8gQWRkIGFsbCBydWxlcyB0byB0aGUgZ3JhbW1hclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucmF3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmF3Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0gPSBuZXcgU3ltYm9sKHRoaXMsIGtleSwgdGhpcy5yYXdba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihydWxlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5vZGUgYW5kIHN1Ym5vZGVzXG4gICAgICAgIHZhciByb290ID0gbmV3IFRyYWNlcnlOb2RlKHRoaXMsIDAsIHtcbiAgICAgICAgICAgIHR5cGUgOiAtMSxcbiAgICAgICAgICAgIHJhdyA6IHJ1bGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5leHBhbmQgPSBmdW5jdGlvbihydWxlLCBhbGxvd0VzY2FwZUNoYXJzKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5jcmVhdGVSb290KHJ1bGUpO1xuICAgICAgICByb290LmV4cGFuZCgpO1xuICAgICAgICBpZiAoIWFsbG93RXNjYXBlQ2hhcnMpXG4gICAgICAgICAgICByb290LmNsZWFyRXNjYXBlQ2hhcnMoKTtcblxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmV4cGFuZChydWxlLCBhbGxvd0VzY2FwZUNoYXJzKTtcblxuICAgICAgICByZXR1cm4gcm9vdC5maW5pc2hlZFRleHQ7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3ltYm9scyk7XG4gICAgICAgIHZhciBzeW1ib2xKU09OID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBzeW1ib2xKU09OLnB1c2goJyBcIicgKyBrZXkgKyAnXCIgOiAnICsgdGhpcy5zeW1ib2xzW2tleV0ucnVsZXNUb0pTT04oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwie1xcblwiICsgc3ltYm9sSlNPTi5qb2luKFwiLFxcblwiKSArIFwiXFxufVwiO1xuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgb3IgcHVzaCBydWxlc1xuICAgIEdyYW1tYXIucHJvdG90eXBlLnB1c2hSdWxlcyA9IGZ1bmN0aW9uKGtleSwgcmF3UnVsZXMsIHNvdXJjZUFjdGlvbikge1xuXG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XSA9IG5ldyBTeW1ib2wodGhpcywga2V5LCByYXdSdWxlcyk7XG4gICAgICAgICAgICBpZiAoc291cmNlQWN0aW9uKVxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldLmlzRHluYW1pYyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XS5wdXNoUnVsZXMocmF3UnVsZXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLnBvcFJ1bGVzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5zeW1ib2xzW2tleV0pXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiQ2FuJ3QgcG9wOiBubyBzeW1ib2wgZm9yIGtleSBcIiArIGtleSk7XG4gICAgICAgIHRoaXMuc3ltYm9sc1trZXldLnBvcFJ1bGVzKCk7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLnNlbGVjdFJ1bGUgPSBmdW5jdGlvbihrZXksIG5vZGUsIGVycm9ycykge1xuICAgICAgICBpZiAodGhpcy5zeW1ib2xzW2tleV0pIHtcbiAgICAgICAgICAgIHZhciBydWxlID0gdGhpcy5zeW1ib2xzW2tleV0uc2VsZWN0UnVsZShub2RlLCBlcnJvcnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZhaWxvdmVyIHRvIGFsdGVybmF0aXZlIHN1YmdyYW1tYXJzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJncmFtbWFycy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdWJncmFtbWFyc1tpXS5zeW1ib2xzW2tleV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViZ3JhbW1hcnNbaV0uc3ltYm9sc1trZXldLnNlbGVjdFJ1bGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIHN5bWJvbD9cbiAgICAgICAgZXJyb3JzLnB1c2goXCJObyBzeW1ib2wgZm9yICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICAgICAgcmV0dXJuIFwiKChcIiArIGtleSArIFwiKSlcIjtcbiAgICB9O1xuXG4gICAgLy8gUGFyc2VzIGEgcGxhaW50ZXh0IHJ1bGUgaW4gdGhlIHRyYWNlcnkgc3ludGF4XG4gICAgdHJhY2VyeSA9IHtcblxuICAgICAgICBjcmVhdGVHcmFtbWFyIDogZnVuY3Rpb24ocmF3KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyYW1tYXIocmF3KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRSYW5kb206IHNldFJhbmRvbSxcblxuICAgICAgICAvLyBQYXJzZSB0aGUgY29udGVudHMgb2YgYSB0YWdcbiAgICAgICAgcGFyc2VUYWcgOiBmdW5jdGlvbih0YWdDb250ZW50cykge1xuXG4gICAgICAgICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBwcmVhY3Rpb25zIDogW10sXG4gICAgICAgICAgICAgICAgcG9zdGFjdGlvbnMgOiBbXSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IHRyYWNlcnkucGFyc2UodGFnQ29udGVudHMpO1xuICAgICAgICAgICAgdmFyIHN5bWJvbFNlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb25zW2ldLnR5cGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbFNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2VjdGlvbiA9IHNlY3Rpb25zW2ldLnJhdztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIm11bHRpcGxlIG1haW4gc2VjdGlvbnMgaW4gXCIgKyB0YWdDb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHJlYWN0aW9ucy5wdXNoKHNlY3Rpb25zW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzeW1ib2xTZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyAgIHRocm93IChcIm5vIG1haW4gc2VjdGlvbiBpbiBcIiArIHRhZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudHMgPSBzeW1ib2xTZWN0aW9uLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgICAgICBwYXJzZWQuc3ltYm9sID0gY29tcG9uZW50c1swXTtcbiAgICAgICAgICAgICAgICBwYXJzZWQubW9kaWZpZXJzID0gY29tcG9uZW50cy5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2UgOiBmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICB2YXIgZGVwdGggPSAwO1xuICAgICAgICAgICAgdmFyIGluVGFnID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBlc2NhcGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IDA7XG5cbiAgICAgICAgICAgIHZhciBlc2NhcGVkU3Vic3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBsYXN0RXNjYXBlZENoYXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuZXJyb3JzID0gZXJyb3JzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb25zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBlbmQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW5kIC0gc3RhcnQgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goc3RhcnQgKyBcIjogZW1wdHkgdGFnXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHN0YXJ0ICsgXCI6IGVtcHR5IGFjdGlvblwiKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmF3U3Vic3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0RXNjYXBlZENoYXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByYXdTdWJzdHJpbmcgPSBlc2NhcGVkU3Vic3RyaW5nICsgXCJcXFxcXCIgKyBydWxlLnN1YnN0cmluZyhsYXN0RXNjYXBlZENoYXIgKyAxLCBlbmQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3U3Vic3RyaW5nID0gcnVsZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmF3IDogcmF3U3Vic3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGFzdEVzY2FwZWRDaGFyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGVzY2FwZWRTdWJzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBydWxlLmNoYXJBdChpKTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVudGVyIGEgZGVlcGVyIGJyYWNrZXRlZCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwICYmICFpblRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmQgYSBicmFja2V0ZWQgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwICYmICFpblRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYXNodGFnXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWdub3JlIGlmIG5vdCBhdCBkZXB0aCAwLCB0aGF0IG1lYW5zIHdlIGFyZSBpbiBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5UYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhZyA9ICFpblRhZztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkU3Vic3RyaW5nID0gZXNjYXBlZFN1YnN0cmluZyArIHJ1bGUuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXNjYXBlZENoYXIgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgcnVsZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgcnVsZS5sZW5ndGgsIDApO1xuXG4gICAgICAgICAgICBpZiAoaW5UYWcpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIlVuY2xvc2VkIHRhZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXB0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIlRvbyBtYW55IFtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJUb28gbWFueSBdXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdHJpcCBvdXQgZW1wdHkgcGxhaW50ZXh0IHNlY3Rpb25zXG5cbiAgICAgICAgICAgIHNlY3Rpb25zID0gc2VjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbi50eXBlID09PSAwICYmIHNlY3Rpb24ucmF3Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWN0aW9ucy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzVm93ZWwoYykge1xuICAgICAgICB2YXIgYzIgPSBjLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAoYzIgPT09ICdhJykgfHwgKGMyID09PSAnZScpIHx8IChjMiA9PT0gJ2knKSB8fCAoYzIgPT09ICdvJykgfHwgKGMyID09PSAndScpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtKGMpIHtcbiAgICAgICAgcmV0dXJuIChjID49ICdhJyAmJiBjIDw9ICd6JykgfHwgKGMgPj0gJ0EnICYmIGMgPD0gJ1onKSB8fCAoYyA+PSAnMCcgJiYgYyA8PSAnOScpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gICAgfVxuXG4gICAgdmFyIGJhc2VFbmdNb2RpZmllcnMgPSB7XG5cbiAgICAgICAgcmVwbGFjZSA6IGZ1bmN0aW9uKHMsIHBhcmFtcykge1xuICAgICAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvcmVwbGFjaW5nLWFsbC1vY2N1cnJlbmNlcy1vZi1hLXN0cmluZy1pbi1qYXZhc2NyaXB0XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHBhcmFtc1swXSksICdnJyksIHBhcmFtc1sxXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FwaXRhbGl6ZUFsbCA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHZhciBzMiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2FwTmV4dCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmICghaXNBbHBoYU51bShzLmNoYXJBdChpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwTmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHMuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FwTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgczIgKz0gcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzMiArPSBzLmNoYXJBdChpKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gczI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FwaXRhbGl6ZSA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYSA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdCgyKS50b0xvd2VyQ2FzZSgpID09PSAnaScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYSBcIiArIHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWb3dlbChzLmNoYXJBdCgwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYW4gXCIgKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFwiYSBcIiArIHM7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBmaXJzdFMgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICAgICAgICAgIHZhciBzMiA9IHMuc3BsaXQoXCIgXCIpO1xuXG4gICAgICAgICAgICB2YXIgZmluaXNoZWQgPSBiYXNlRW5nTW9kaWZpZXJzLnMoczJbMF0pICsgXCIgXCIgKyBzMi5zbGljZSgxKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbmlzaGVkKTtcbiAgICAgICAgICAgIHJldHVybiBmaW5pc2hlZDtcbiAgICAgICAgfSxcblxuICAgICAgICBzIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgc3dpdGNoIChzLmNoYXJBdChzLmxlbmd0aCAtMSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3knOlxuICAgICAgICAgICAgICAgIGlmICghaXNWb3dlbChzLmNoYXJBdChzLmxlbmd0aCAtIDIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMSkgKyBcImllc1wiO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcInNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcInNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWQgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHMuY2hhckF0KHMubGVuZ3RoIC0xKSkge1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3knOlxuICAgICAgICAgICAgICAgIGlmICghaXNWb3dlbChzLmNoYXJBdChzLmxlbmd0aCAtIDIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMSkgKyBcImllZFwiO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJhY2VyeS5iYXNlRW5nTW9kaWZpZXJzID0gYmFzZUVuZ01vZGlmaWVyczsgXG4gICAgLy8gRXh0ZXJuYWxpemVcbiAgICB0cmFjZXJ5LlRyYWNlcnlOb2RlID0gVHJhY2VyeU5vZGU7XG5cbiAgICB0cmFjZXJ5LkdyYW1tYXIgPSBHcmFtbWFyO1xuICAgIHRyYWNlcnkuU3ltYm9sID0gU3ltYm9sO1xuICAgIHRyYWNlcnkuUnVsZVNldCA9IFJ1bGVTZXQ7XG4gICAgcmV0dXJuIHRyYWNlcnk7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhY2VyeTtcbiIsImNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbmNvbnN0IGhpZ2hsaWdodCA9IHJlcXVpcmUoJy4vaGlnaGxpZ2h0Jyk7XG5cbmxldCByZWFkeSA9IGZhbHNlO1xuXG5sZXQgJGRpYWxvZ3M7XG5sZXQgJGxpbmVPbmU7XG5sZXQgJGxpbmVUd287XG5sZXQgJGNvbnRyb2w7XG5cbmxldCBsaW5lT25lQW5pbWF0aW5nO1xubGV0IGxpbmVUd29BbmltYXRpbmc7XG5cbmxldCBjdXI7XG5sZXQgcHJldjtcbmxldCBuZXh0O1xuXG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGNvbnNvbGUuZGVidWcoJ0RpYWxvZy5pbml0KCknKTtcblxuICAkZGlhbG9ncyA9ICQoJyNoaWdobGlnaHRzLWRpYWxvZ19fdGV4dCBwJyk7XG4gICRsaW5lT25lID0gJGRpYWxvZ3MuZmlyc3QoKTtcbiAgJGxpbmVUd28gPSAkZGlhbG9ncy5sYXN0KCk7XG4gICRjb250cm9sID0gJCgnLmRpYWxvZy1jb250cm9sJyk7XG5cbiAgbGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgJGRpYWxvZ3MuZWFjaCgoXywgZWwpID0+IHtcbiAgICB1dGlsLnByZWZpeGVkT24oJChlbCksICdBbmltYXRpb25FbmQnLCBvbkFuaW1FbmQpO1xuICB9KTtcblxuICByZWFkeSA9IHRydWU7XG59O1xuXG5jb25zdCBzdGFydEhpZ2hsaWdodCA9IChoaWdobGlnaHRzLCBza2lwQW5pbWF0aW9uKSA9PiB7O1xuICBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgcHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgbmV4dCA9IGhpZ2hsaWdodHMubmV4dDtcblxuICBpZiAoIXJlYWR5KSBpbml0KCk7XG5cbiAgLy8gcmVzZXQgZGlhbG9nXG4gIC8vaGlnaGxpZ2h0LmN1ckRpYWxvZ1BhcnQgPSAwO1xuICAkbGluZU9uZS5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcbiAgJGxpbmVUd28ucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCBhbmltYXRlJyk7XG5cbiAgY3VyLnN0YXJ0ZWQgPSB0cnVlO1xuICBpZiAoc2tpcEFuaW1hdGlvbikge1xuICAgIHNob3dIaWdobGlnaHQoY3VyKTtcbiAgfSBlbHNlIHtcbiAgICBhbmltYXRlSGlnaGxpZ2h0KGN1cik7XG4gIH1cbn07XG5cbmNvbnN0IGFuaW1hdGVIaWdobGlnaHQgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAkbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcblxuICAkbGluZU9uZS50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMF0gfHwgJycpO1xuICAkbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gIGhpZGVDb250cm9sKCk7XG4gIGFuaW1hdGUoJ29uZScpO1xufTtcblxuY29uc3Qgc2hvd0hpZ2hsaWdodCA9IChoaWdobGlnaHQpID0+IHtcbiAgJGxpbmVPbmUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgJGxpbmVUd28ucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcblxuICAkbGluZU9uZS50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMF0gfHwgJycpO1xuICAkbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gICRsaW5lT25lLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgJGxpbmVUd28uYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuXG4gIHNob3dDb250cm9sKCk7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKGxpbmUpID0+IHtcbiAgaWYgKGxpbmUgPT09ICdvbmUnKSB7XG4gICAgLy9zdG9wQW5pbWF0ZSgndHdvJyk7XG4gICAgJGxpbmVPbmUuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICBsaW5lT25lQW5pbWF0aW5nID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChsaW5lID09PSAndHdvJykge1xuICAgIC8vc3RvcEFuaW1hdGUoJ29uZScpO1xuICAgICRsaW5lVHdvLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgbGluZVR3b0FuaW1hdGluZyA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3BBbmltYXRlID0gKGxpbmUpID0+IHtcbiAgaWYgKGxpbmUgPT09ICdvbmUnKSB7XG4gICAgJGxpbmVPbmVcbiAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgIGxpbmVPbmVBbmltYXRpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChsaW5lID09PSAndHdvJykge1xuICAgICRsaW5lVHdvXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IG9uQW5pbUVuZCA9ICgpID0+IHtcbiAgLy8gY2hlY2sgZm9yIHRoZSBzZWNvbmQgYW5pbWF0aW9uIGZpcnN0IHNvIHRoZSBzZWNvbmQgYW5pbWF0aW9uXG4gIC8vIGRvZXNuJ3QgZ2V0IHRyaWdnZXJlZCB0aGVuIGltbWVkaWF0ZWx5IGVuZGVkIGluc2lkZSB0aGlzIGZ1bmNcbiAgaWYgKGxpbmVUd29BbmltYXRpbmcpIHtcbiAgICBzdG9wQW5pbWF0ZSgndHdvJyk7XG5cbiAgICBzaG93Q29udHJvbCgpO1xuICB9XG5cbiAgaWYgKGxpbmVPbmVBbmltYXRpbmcpIHtcbiAgICBzdG9wQW5pbWF0ZSgnb25lJyk7XG5cbiAgICAvLyBpZiB0aGVyZSdzIHRleHQgaW4gbGluZVR3bywgYW5pbWF0ZSBpdFxuICAgIGlmICgkbGluZVR3by50ZXh0KCkubGVuZ3RoKSB7XG4gICAgICBhbmltYXRlKCd0d28nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0NvbnRyb2woKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dDb250cm9sID0gKCkgPT4ge1xuICBzaG93UHJldigpO1xuICBzaG93TmV4dCgpO1xufTtcblxuLy8gc2hvdyBuZXh0IGFycm93IGlmOlxuLy8gdGhlcmUgYXJlIHBhcnRzIGxlZnQgdG8gdGhpcyBoaWdobGlnaHRcbi8vIHRoZXJlIGFyZSBoaWdobGlnaHRzIGxlZnQgdG8gdGhlIHN0b3J5XG5jb25zdCBzaG93TmV4dCA9ICgpID0+IHtcbiAgLy8gdG9kbzogc2hvdyBhcnJvdyBpZiBuZXh0LCBidXQgbW92ZSBpbnRvIG91dHJvXG4gIGlmIChoaWdobGlnaHQuaGFzRGlhbG9nTGVmdChjdXIpIHx8IG5leHQpIHtcbiAgICAkY29udHJvbC5sYXN0KCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfVxufTtcblxuLy8gc2hvdyBwcmUgYXJyb3cgaWY6XG4vLyB0aGVyZSBhcmUgcGFydHMgYmVmb3JlIHRoaXMgaGlnaGxpZ2h0XG4vLyB0aGVyZSBhcmUgaGlnaGxpZ2h0cyBlYXJsaWVyIGluIHRoZSBzdG9yeVxuY29uc3Qgc2hvd1ByZXYgPSAoKSA9PiB7XG4gIC8vIHRvZG86IHNob3cgYXJyb3cgaWYgbmV4dCwgYnV0IG1vdmUgaW50byBvdXRyb1xuICBpZiAoaGlnaGxpZ2h0Lmhhc0RpYWxvZ1ByZXYoY3VyKSB8fCBwcmV2KSB7XG4gICAgJGNvbnRyb2wuZmlyc3QoKS5hZGRDbGFzcygnc2hvdycpO1xuICB9XG59O1xuXG5jb25zdCBoaWRlQ29udHJvbCA9ICgpID0+IHtcbiAgJGNvbnRyb2wucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbn07XG5cbmNvbnN0IGNvbnRpbnVlSGlnaGxpZ2h0ID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIHByZXYgPSBoaWdobGlnaHRzLnByZXY7XG4gIG5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgaWYgKCFjdXIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmICghY3VyLnN0YXJ0ZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gaWYgY3VycmVudGx5IGFuaW1hdGluZywgc2ltcGx5IGVuZCB0aGUgYW5pbWF0aW9uXG4gIGlmIChsaW5lT25lQW5pbWF0aW5nKSB7XG5cbiAgICAkbGluZU9uZVxuICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgbGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICAgICRsaW5lVHdvXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgc2hvd0NvbnRyb2woKTtcblxuICB9IGVsc2UgaWYgKGxpbmVUd29BbmltYXRpbmcpIHtcblxuICAgICRsaW5lVHdvXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgc2hvd0NvbnRyb2woKTtcblxuICB9IGVsc2Uge1xuICAgIGN1ci5jdXJEaWFsb2dQYXJ0Kys7XG5cbiAgICAvLyBubyBtb3JlIHRleHQgdG8gdGhpcyBoaWdobGlnaHRcbiAgICBpZiAoY3VyLmN1ckRpYWxvZ1BhcnQgPT09IGN1ci5kaWFsb2dQYXJ0cy5sZW5ndGgpIHtcbiAgICAgIGN1ci5jdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhbmltYXRlSGlnaGxpZ2h0KGN1cik7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHJldmVyc2VIaWdobGlnaHQgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgcHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgbmV4dCA9IGhpZ2hsaWdodHMubmV4dDtcblxuICBpZiAoIWN1cikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKCFjdXIuc3RhcnRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBjdXIuY3VyRGlhbG9nUGFydC0tO1xuXG4gIC8vIG5vIG1vcmUgdGV4dCB0byB0aGlzIGhpZ2hsaWdodFxuICBpZiAoY3VyLmN1ckRpYWxvZ1BhcnQgPT09IC0xKSB7XG4gICAgY3VyLmN1ckRpYWxvZ1BhcnQgPSAwO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNob3dIaWdobGlnaHQoY3VyKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBzZXRJbnRybyA9IChvbmUsIHR3bykgPT4ge1xuICBpZiAoIXJlYWR5KSBpbml0KCk7XG5cbiAgJGxpbmVPbmUudGV4dChvbmUpO1xuICAkbGluZVR3by50ZXh0KHR3byk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RhcnRIaWdobGlnaHQsXG4gIGNvbnRpbnVlSGlnaGxpZ2h0LFxuICByZXZlcnNlSGlnaGxpZ2h0LFxuICBzZXRJbnRybyxcbn07XG5cbiIsImNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICQoJyNkb3dubG9hZC1zdG9yeScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAkKCcjaGlnaGxpZ2h0cy1qc29uJykuYXR0cignZGF0YScsIEpTT04uc3RyaW5naWZ5KGhpZ2hsaWdodHMpKTtcblxuICAgIGxldCB0ZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KCQoJ2h0bWwnKS5wcm9wKCdvdXRlckhUTUwnKSk7XG4gICAgbGV0IGZpbGVuYW1lID0gJ2JsYXNlYmFsbC1zdG9yeSc7XG5cbiAgICBjb25zdCAkZ2FtZU5hbWUgPSAkKCcuZ2FtZS1uYW1lJyk7XG5cbiAgICBpZiAoJGdhbWVOYW1lLnRleHQoKSkge1xuICAgICAgZmlsZW5hbWUgPSAkZ2FtZU5hbWUudGV4dCgpLnJlcGxhY2UoJywnLCAnJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKTtcbiAgICB9XG5cbiAgICBmaWxlbmFtZSArPSAnLmh0bWwnO1xuXG4gICAgLy8gZG93bmxvYWQgY29kZSBhZGFwdGVkIGZyb206XG4gICAgLy8gaHR0cHM6Ly9vdXJjb2Rld29ybGQuY29tL2FydGljbGVzL3JlYWQvMTg5L2hvdy10by1jcmVhdGUtYS1maWxlLWFuZC1nZW5lcmF0ZS1hLWRvd25sb2FkLXdpdGgtamF2YXNjcmlwdC1pbi10aGUtYnJvd3Nlci13aXRob3V0LWEtc2VydmVyXG4gICAgY29uc3QgJGRsQnV0dG9uID0gJCgnPGE+JylcbiAgICAgIC5hdHRyKCdocmVmJywgYGRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCR7dGV4dH1gKVxuICAgICAgLmF0dHIoJ2Rvd25sb2FkJywgZmlsZW5hbWUpXG4gICAgICAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgICAgLmFwcGVuZFRvKCQoJ2JvZHknKSk7XG5cbiAgICAkZGxCdXR0b25bMF0uY2xpY2soKTtcbiAgICAkZGxCdXR0b24ucmVtb3ZlKCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQsXG59O1xuXG4iLCJjb25zdCBtbHVzdGFyZCA9IHJlcXVpcmUoJ21sdXN0YXJkJyk7XG5cbmNvbnN0IGhpZ2hsaWdodCA9IHJlcXVpcmUoJy4vaGlnaGxpZ2h0Jyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmxldCBnYW1lRXZlbnRzID0ge307XG5sZXQgaGlnaGxpZ2h0cyA9IFtdO1xuXG5jb25zdCBpc1BsYXlCYWxsID0gKGdhbWVFdikgPT4ge1xuICByZXR1cm4gZ2FtZUV2Lmxhc3RVcGRhdGUuaW5kZXhPZignUGxheSBiYWxsJykgPj0gMDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlSGlnaGxpZ2h0cyA9IChjYikgPT4ge1xuICAkKCcuZ2FtZS1ldmVudF9fY29udGFpbmVyIGlucHV0OmNoZWNrZWQnKS5lYWNoKChfLCBjaGVja2VkKSA9PiB7XG4gICAgY29uc3QgaWQgPSAkKGNoZWNrZWQpLmF0dHIoJ2lkJyk7XG4gICAgbGV0IHZpc3VhbCA9ICdkaWFtb25kJztcblxuICAgIGlmIChpc1BsYXlCYWxsKGdhbWVFdmVudHNbaWRdLmV2LmRhdGEpKSB7XG4gICAgICB2aXN1YWwgPSAnaW50cm8nO1xuICAgIH1cblxuICAgIGNvbnN0IGhsID0gaGlnaGxpZ2h0Lm1ha2VIaWdobGlnaHQoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgZ2FtZUV2ZW50OiBnYW1lRXZlbnRzW2lkXS5ldixcbiAgICAgIG1sdXN0YXJkOiBnYW1lRXZlbnRzW2lkXS5tbHVzdGFyZCxcbiAgICAgIHZpc3VhbCxcbiAgICB9KTtcblxuICAgIGhpZ2hsaWdodHMucHVzaChobCk7XG4gIH0pO1xuXG4gIGNvbnNvbGUuZGVidWcoJ2dlbmVyYXRlSGlnaGxpZ2h0czonLCBoaWdobGlnaHRzKTtcbiAgY2IoaGlnaGxpZ2h0cyk7XG59O1xuXG5jb25zdCBtYWtlQ291bnRDaXJjbGUgPSAoY2xhc3NlcykgPT4ge1xuICByZXR1cm4gJCgnPHNwYW4+JykuYWRkQ2xhc3MoY2xhc3Nlcyk7XG59O1xuXG5jb25zdCByZW5kZXJHYW1lRXYgPSAoZ2FtZUV2KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBnYW1lRXYuZXYuZGF0YTtcblxuICBpZiAoIWRhdGEubGFzdFVwZGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0ICRnYW1lRXYgPSAkKCc8ZGl2PicpO1xuXG4gIC8vIGZvcm0gc3R1ZmZcbiAgY29uc3QgJGNoQ29udGFpbmVyID0gJCgnPGRpdj4nKTtcbiAgY29uc3QgJGNoZWNrID0gJCgnPGlucHV0PicpO1xuICBjb25zdCAkbGFiZWwgPSAkKCc8bGFiZWw+Jyk7XG5cbiAgbGV0IHVwZGF0ZSA9IGAke2RhdGEubGFzdFVwZGF0ZX0gJHtkYXRhLnNjb3JlVXBkYXRlIHx8ICcnfWA7XG5cbiAgJGNoZWNrXG4gICAgLmFkZENsYXNzKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAuYXR0cignaWQnLCBnYW1lRXYuZXYuaGFzaClcbiAgICAuYXR0cigndHlwZScsICdjaGVja2JveCcpXG4gICAgLmF0dHIoJ25hbWUnLCAnZ2FtZSBldmVudCcpXG4gICAgLnZhbCgnJyk7XG5cbiAgLy9pZiAoaXNQbGF5QmFsbChkYXRhKSkge1xuICAgICRjaGVja1xuICAgICAgLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIC8vfVxuXG4gICRsYWJlbFxuICAgIC5hZGRDbGFzcygnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgLmF0dHIoJ2ZvcicsIGdhbWVFdi5ldi5oYXNoKVxuICAgIC50ZXh0KHVwZGF0ZSk7XG5cbiAgJGNoQ29udGFpbmVyXG4gICAgLmFkZENsYXNzKCdmb3JtLWNoZWNrIGNvbC03JylcbiAgICAuYXBwZW5kKCRjaGVjaylcbiAgICAuYXBwZW5kKCRsYWJlbCk7XG5cbiAgLy8gZ2FtZSBldmVudCBpbmZvXG4gIGNvbnN0ICRnYW1lRXZJbmZvID0gJCgnPGRpdj4nKTtcbiAgY29uc3QgJHNjb3JlID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRiYXNlcyA9ICQoJzxzcGFuPicpO1xuICBjb25zdCAkYmFsbHMgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJHN0cmlrZXMgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJG91dHMgPSAkKCc8c3Bhbj4nKTtcblxuICBsZXQgaG9tZUVtb2ppID0gdXRpbC5nZXRFbW9qaSgnaG9tZScsIGRhdGEpO1xuICBsZXQgYXdheUVtb2ppID0gdXRpbC5nZXRFbW9qaSgnYXdheScsIGRhdGEpO1xuXG4gIGxldCBzY29yZSA9IGAke2hvbWVFbW9qaX0gJHtkYXRhLmhvbWVTY29yZX0gOiAke2F3YXlFbW9qaX0gJHtkYXRhLmF3YXlTY29yZX1gO1xuICBsZXQgYmFzZXMgPSAnJztcblxuICAvLyBmaWxsIGluIGJhbGxzIGNvdW50XG4gIGZvciAobGV0IGJhbGwgPSAwOyBiYWxsIDwgZGF0YS5hdEJhdEJhbGxzOyBiYWxsKyspIHtcbiAgICAkYmFsbHMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGZ1bGwnKSk7XG4gIH1cblxuICBmb3IgKGxldCBiYWxsID0gMzsgYmFsbCA+IGRhdGEuYXRCYXRCYWxsczsgYmFsbC0tKSB7XG4gICAgJGJhbGxzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBlbXB0eScpKTtcbiAgfVxuXG4gIC8vIGZpbGwgaW4gc3RyaWtlcyBjb3VudFxuICBmb3IgKGxldCBzdHJpa2UgPSAwOyBzdHJpa2UgPCBkYXRhLmF0QmF0U3RyaWtlczsgc3RyaWtlKyspIHtcbiAgICAkc3RyaWtlcy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZnVsbCcpKTtcbiAgfVxuXG4gIGZvciAobGV0IHN0cmlrZSA9IDI7IHN0cmlrZSA+IGRhdGEuYXRCYXRTdHJpa2VzOyBzdHJpa2UtLSkge1xuICAgICRzdHJpa2VzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBlbXB0eScpKTtcbiAgfVxuXG4gIC8vIGZpbGwgaW4gb3V0cyBjb3VudFxuICBmb3IgKGxldCBvdXQgPSAwOyBvdXQgPCBkYXRhLmhhbGZJbm5pbmdPdXRzOyBvdXQrKykge1xuICAgICRvdXRzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBmdWxsJykpO1xuICB9XG5cbiAgZm9yIChsZXQgb3V0ID0gMjsgb3V0ID4gZGF0YS5oYWxmSW5uaW5nT3V0czsgb3V0LS0pIHtcbiAgICAkb3V0cy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIGJhc2UgZGlhbW9uZHNcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMudGhpcmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5zZWNvbmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5maXJzdC5wbGF5ZXJOYW1lKSk7XG4gIC8vIHRvZG86IGRlYWwgd2l0aCA0IGJhc2VzXG4gIC8vJGJhc2VzLmFwcGVuZChtYWtlQmFzZURpYW1vbmQoZ2FtZUV2Lm1sdXN0YXJkLmJhc2VSdW5uZXJzLmZpcnN0LnBsYXllck5hbWUpKTtcblxuICAkc2NvcmVcbiAgICAudGV4dChzY29yZSk7XG4gICRiYWxsc1xuICAgIC5hdHRyKCd0aXRsZScsICdCYWxscycpXG4gICAgLmFkZENsYXNzKCdiYWxscy1jb3VudCcpO1xuICAkc3RyaWtlc1xuICAgIC5hdHRyKCd0aXRsZScsICdTdHJpa2VzJylcbiAgICAuYWRkQ2xhc3MoJ3N0cmlrZXMtY291bnQnKTtcbiAgJG91dHNcbiAgICAuYXR0cigndGl0bGUnLCAnT3V0cycpXG4gICAgLmFkZENsYXNzKCdvdXRzLWNvdW50Jyk7XG4gICRiYXNlc1xuICAgIC5hdHRyKCd0aXRsZScsICdCYXNlcyBvY2N1cGllZCcpXG4gICAgLmFkZENsYXNzKCdiYXNlcy1vY2N1cGllZCcpO1xuXG4gICRnYW1lRXZJbmZvXG4gICAgLmFkZENsYXNzKCdjb2wtNScpXG4gICAgLmFwcGVuZCgkc2NvcmUpXG4gICAgLmFwcGVuZCgkYmFzZXMpXG4gICAgLmFwcGVuZCgkYmFsbHMpXG4gICAgLmFwcGVuZCgkc3RyaWtlcylcbiAgICAuYXBwZW5kKCRvdXRzKTtcblxuICAkZ2FtZUV2XG4gICAgLmFkZENsYXNzKCdnYW1lLWV2ZW50X19jb250YWluZXIgcm93IGJvcmRlcicpXG4gICAgLmFwcGVuZCgkY2hDb250YWluZXIpXG4gICAgLmFwcGVuZCgkZ2FtZUV2SW5mbyk7XG5cbiAgcmV0dXJuICRnYW1lRXY7XG59O1xuXG5jb25zdCByZW5kZXJHYW1lRXZzID0gKCkgPT4ge1xuICBzdG9wTG9hZGluZygpO1xuICAvLyQoJyNnYW1lLWV2ZW50cy1zZWxlY3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgY29uc3QgJGNvbnRhaW5lciA9ICQoJyNnYW1lLWV2ZW50cy1jaG9vc2VfX2NvbnRhaW5lcicpO1xuXG4gIC8vIGdvdHRhIHJlbmRlciBzb21lIGdlbmVyYWwgc3R1ZmYgdG9vIChob21lIHZzIGF3YXksIHMjZCMsIHdlYXRoZXIpXG4gIC8vIGFsc286IGxhYmVsIGZvciB0aGUgc2VsZWN0LCBhbmQgdGhlIHNlbGVjdCBpdHNlbGZcbiAgZm9yIChsZXQgaWQgaW4gZ2FtZUV2ZW50cykge1xuICAgIGxldCAkZ2FtZUV2ID0gcmVuZGVyR2FtZUV2KGdhbWVFdmVudHNbaWRdKTtcblxuICAgIGlmICgkZ2FtZUV2KSB7XG4gICAgICAkY29udGFpbmVyLmFwcGVuZCgkZ2FtZUV2KTtcbiAgICB9XG4gIH1cblxuICAvLyBoYWNrIGZvciBtdnA6XG4gICQoJyNnYW1lLWV2ZW50cy1jaG9vc2VfX2Zvcm0gYnV0dG9uJylbMF0uY2xpY2soKTtcbn07XG5cbmNvbnN0IGdldEdhbWVFdmVudHMgPSBhc3luYyAoZ2FtZUlkLCBuZXh0UGFnZSkgPT4ge1xuICBsZXQgZ2FtZXNVUkwgPSBgaHR0cHM6Ly9hcGkuc2lici5kZXYvY2hyb25pY2xlci92MS9nYW1lcy91cGRhdGVzP2dhbWU9JHtnYW1lSWR9YDtcblxuICBpZiAobmV4dFBhZ2UpIHtcbiAgICBnYW1lc1VSTCArPSBgJnBhZ2U9JHtuZXh0UGFnZX1gO1xuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk7XG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGdhbWVzVVJMKTtcblxuICBpZiAocmVzcC5vaykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgIGZvciAobGV0IGdhbWVFdiBvZiBkYXRhLmRhdGEpIHtcbiAgICAgIGdhbWVFdmVudHNbZ2FtZUV2Lmhhc2hdID0ge1xuICAgICAgICBldjogZ2FtZUV2LFxuICAgICAgICBtbHVzdGFyZDogbWx1c3RhcmQuYW5hbHl6ZUdhbWVFdmVudChnYW1lRXYuZGF0YSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChkYXRhLm5leHRQYWdlKSB7XG4gICAgICBnZXRHYW1lRXZlbnRzKGdhbWVJZCwgZGF0YS5uZXh0UGFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvbmUgbG9hZGluZyBhbGwgZ2FtZSBldmVudHNcbiAgICAgIHJlbmRlckdhbWVFdnMoKTtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2dldEdhbWVFdmVudHMgZG9uZTonLCBnYW1lRXZlbnRzKTtcbiAgICB9XG5cbiAgfVxufTtcblxuY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWV2ZW50LWZvcm0nKTtcblxuICAkZ2FtZUV2Rm9ybS5maW5kKCdidXR0b24nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICRnYW1lRXZGb3JtLmZpbmQoJy5zcGlubmVyLWJvcmRlcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn07XG5cbmNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWV2ZW50LWZvcm0nKTtcblxuICAkZ2FtZUV2Rm9ybS5maW5kKCdidXR0b24nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICRnYW1lRXZGb3JtLmZpbmQoJy5zcGlubmVyLWJvcmRlcicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbn07XG5cbmNvbnN0IGluaXQgPSAoaGlnaGxpZ2h0c1JlYWR5Q2IpID0+IHtcbiAgY29uc3QgJGdhbWVFdkZvcm0gPSAkKCcjZ2FtZS1ldmVudC1mb3JtJyk7XG5cbiAgJGdhbWVFdkZvcm0ub24oJ3N1Ym1pdCcsIChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBnYW1lSWQgPSAkZ2FtZUV2Rm9ybS5maW5kKCcjZ2FtZS1pZCcpLnZhbCgpLnNwbGl0KCcvJykucG9wKCk7XG4gICAgZ2V0R2FtZUV2ZW50cyhnYW1lSWQpO1xuICB9KTtcblxuICBjb25zdCAkaGlnaGxpZ2h0c1NlbGVjdEZvcm0gPSAkKCcjZ2FtZS1ldmVudHMtY2hvb3NlX19mb3JtJyk7XG5cbiAgJGhpZ2hsaWdodHNTZWxlY3RGb3JtLm9uKCdzdWJtaXQnLCAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdlbmVyYXRlSGlnaGxpZ2h0cyhoaWdobGlnaHRzUmVhZHlDYik7XG4gIH0pO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCxcbn07XG5cbiIsImNvbnN0IGdyYW5kU2xhbGFtaSA9IHJlcXVpcmUoJ2dyYW5kLXNsYWxhbWknKTtcblxuLy8gbWFraW5nIGEgJ2NsYXNzJyBmb3IgaGlnaGxpZ2h0cyBpbiB0aGUgb2xkLXNjaG9vbCB3YXlcbi8vIGNhdXNlIGkgZG9uJ3Qgd2FubmEgaGF2ZSB0byBjb21wbGljYXRlIHRoaW5ncyBmdXJ0aGVyIHdpdGggYmFiZWxcbmNvbnN0IG1ha2VIaWdobGlnaHQgPSAoc2V0dGluZ3MpID0+IHtcbiAgc2V0dGluZ3MgPSBzZXR0aW5ncyB8fCB7fTtcblxuICBsZXQgaWQ7XG4gIGxldCBnYW1lRXZlbnQ7XG4gIGxldCBtbHVzdGFyZDtcbiAgbGV0IGNvbW1lbnRhcnk7XG4gIGxldCBtYXhEaWFsb2dMZW47XG4gIGxldCBkaWFsb2dQYXJ0cztcbiAgbGV0IGN1ckRpYWxvZ1BhcnQ7XG4gIGxldCB2aXN1YWw7XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZCA9IHNldHRpbmdzLmlkO1xuICAgIGdhbWVFdmVudCA9IHNldHRpbmdzLmdhbWVFdmVudDtcbiAgICBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkO1xuICAgIHZpc3VhbCA9IHNldHRpbmdzLnZpc3VhbDtcbiAgICBjb21tZW50YXJ5ID0gZ2VuZXJhdGVDb21tZW50YXJ5KCk7XG4gICAgbWF4RGlhbG9nTGVuID0gc2V0TWF4RGlhbG9nTGVuKCk7XG4gICAgZGlhbG9nUGFydHMgPSBbXTtcbiAgICBjdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICBicmVha0ludG9EaWFsb2dQYXJ0cygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgZ2FtZUV2ZW50LFxuICAgICAgbWx1c3RhcmQsXG4gICAgICBjb21tZW50YXJ5LFxuICAgICAgZGlhbG9nUGFydHMsXG4gICAgICBjdXJEaWFsb2dQYXJ0LFxuICAgICAgaGFzRGlhbG9nTGVmdCxcbiAgICAgIHZpc3VhbCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlQ29tbWVudGFyeSA9ICgpID0+IHtcbiAgICAvLyBmb3IgbXZwOiBza2lwIGdyYW5kIHNsYWxhbWksIGp1c3QgcmV0dXJuIG9yaWdpbmFsIGxhc3RVcGRhdGUgK1xuICAgIC8vIHNjb3JlVXBkYXRlIGlmIHByZXNlbnRcblxuICAgIGxldCByZXQgPSAnJztcblxuICAgIGlmIChnYW1lRXZlbnQuZGF0YS5sYXN0VXBkYXRlKSB7XG4gICAgICByZXQgKz0gZ2FtZUV2ZW50LmRhdGEubGFzdFVwZGF0ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGdhbWVFdmVudC5kYXRhLnNjb3JlVXBkYXRlKSB7XG4gICAgICByZXQgKz0gYFxcbiR7Z2FtZUV2ZW50LmRhdGEuc2NvcmVVcGRhdGV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuXG4gICAgLy9yZXR1cm4gZ3JhbmRTbGFsYW1pLmdldENvbW1lbnQoe1xuICAgICAgLy9nYW1lRXZlbnQ6IGdhbWVFdmVudC5kYXRhLFxuICAgICAgLy9tbHVzdGFyZDogbWx1c3RhcmQsXG4gICAgLy99KTtcbiAgfTtcblxuICAvLyB0b2RvOiBkbyBpIHdhbm5hIHN1cHBvcnQgbW9iaWxlPyB0aGVuIHVwZGF0ZSB0aGlzIGFjY29yZGluZ2x5XG4gIGNvbnN0IHNldE1heERpYWxvZ0xlbiA9ICgpID0+IHtcbiAgICByZXR1cm4gMzU7XG4gIH07XG5cbiAgY29uc3QgYnJlYWtJbnRvRGlhbG9nUGFydHMgPSAoKSA9PiB7XG4gICAgLy8gc3BsaXQgYnkgbmV3bGluZXMgKGVuZm9yY2VkIHBhY2luZylcbiAgICBjb25zdCBwYWNpbmdQYXJ0cyA9IGNvbW1lbnRhcnkuc3BsaXQoJ1xcbicpO1xuXG4gICAgcGFjaW5nUGFydHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgYnJlYWtJbnRvUGFydHMocCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gc3BsaXQgZWFjaCBwYXJ0IGludG8gaXRzIGFuaW1hdGlvbiBwYXJ0cyBieSBsaW5lIGxlbmd0aFxuICBjb25zdCBicmVha0ludG9QYXJ0cyA9ICh0ZXh0KSA9PiB7XG4gICAgbGV0IHBhcnRzID0gW1tdLCBbXV07XG4gICAgbGV0IHVuZmlsbGVkID0gMDtcbiAgICBsZXQgbGVuID0gMDtcblxuICAgIHRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICBsZXQgd29yZExlbiA9IHdvcmQubGVuZ3RoO1xuXG4gICAgICBpZiAoKGxlbiArIHdvcmRMZW4pID4gbWF4RGlhbG9nTGVuKSB7XG4gICAgICAgIGxlbiA9IDA7XG5cbiAgICAgICAgaWYgKHVuZmlsbGVkID09PSAxKSB7XG4gICAgICAgICAgZGlhbG9nUGFydHMucHVzaChtYWtlU2VudGVuY2VzKHBhcnRzKSk7XG4gICAgICAgICAgcGFydHMgPSBbW10sIFtdXTtcbiAgICAgICAgICB1bmZpbGxlZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5maWxsZWQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgobGVuICsgd29yZExlbikgPD0gbWF4RGlhbG9nTGVuKSB7XG4gICAgICAgIHBhcnRzW3VuZmlsbGVkXS5wdXNoKHdvcmQpO1xuICAgICAgICBsZW4gKz0gd29yZExlbiArIDE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dQYXJ0cy5wdXNoKG1ha2VTZW50ZW5jZXMocGFydHMpKTtcbiAgfTtcblxuICBjb25zdCBtYWtlU2VudGVuY2VzID0gKHBhcnRzKSA9PiB7XG4gICAgcmV0dXJuIHBhcnRzLm1hcCgod29yZHMpID0+IHtcbiAgICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9jb25zdCBoYXNEaWFsb2dMZWZ0ID0gKCkgPT4ge1xuICAgIC8vcmV0dXJuICEoKGN1ckRpYWxvZ1BhcnQgKyAxKSA9PT0gZGlhbG9nUGFydHMubGVuZ3RoKTtcbiAgLy99O1xuXG4gIHJldHVybiBpbml0KCk7XG59O1xuXG4vLyB1dGlsaXRpZXNcbmNvbnN0IGhhc0RpYWxvZ0xlZnQgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICAgcmV0dXJuICEoKGhpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0ICsgMSkgPT09IGhpZ2hsaWdodC5kaWFsb2dQYXJ0cy5sZW5ndGgpO1xufTtcblxuY29uc3QgaGFzRGlhbG9nUHJldiA9IChoaWdobGlnaHQpID0+IHtcbiAgICByZXR1cm4gISgoaGlnaGxpZ2h0LmN1ckRpYWxvZ1BhcnQgLSAxKSA9PT0gLTEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ha2VIaWdobGlnaHQsXG4gIGhhc0RpYWxvZ0xlZnQsXG4gIGhhc0RpYWxvZ1ByZXYsXG59O1xuXG4iLCJjb25zdCBnYW1lRXZlbnRTZWxlY3RvciA9IHJlcXVpcmUoJy4vZ2FtZS1ldmVudC1zZWxlY3RvcicpO1xuY29uc3QgZGlhbG9nID0gcmVxdWlyZSgnLi9kaWFsb2cnKTtcbmNvbnN0IHZpc3VhbCA9IHJlcXVpcmUoJy4vdmlzdWFsJyk7XG5jb25zdCBkb3dubG9hZGVyID0gcmVxdWlyZSgnLi9kb3dubG9hZGVyJyk7XG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi9saWIvdGVhbXMtZGF0YScpO1xuXG5nbG9iYWwuaGlnaGxpZ2h0cyA9IFtdO1xubGV0IGN1ckhpZ2hsaWdodCA9IDA7XG5sZXQgaW50cm8gPSB0cnVlO1xuXG5jb25zdCBnZXRIaWdobGlnaHRzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByZXY6IGhpZ2hsaWdodHNbY3VySGlnaGxpZ2h0IC0gMV0sXG4gICAgY3VyOiBoaWdobGlnaHRzW2N1ckhpZ2hsaWdodF0sXG4gICAgbmV4dDogaGlnaGxpZ2h0c1tjdXJIaWdobGlnaHQgKyAxXSxcbiAgfTtcbn07XG5cbmNvbnN0IG5leHRIaWdobGlnaHQgPSAoc2tpcEFuaW1hdGlvbikgPT4ge1xuICBjb25zdCBobHMgPSBnZXRIaWdobGlnaHRzKCk7XG5cbiAgdmlzdWFsLnNob3dWaXN1YWwoaGxzLmN1ci52aXN1YWwpO1xuICB2aXN1YWwudXBkYXRlRGlhbW9uZChobHMpO1xuICBkaWFsb2cuc3RhcnRIaWdobGlnaHQoaGxzLCBza2lwQW5pbWF0aW9uKTtcbn07XG5cbmNvbnN0IGNvbnRpbnVlSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlhbG9nLmNvbnRpbnVlSGlnaGxpZ2h0KGdldEhpZ2hsaWdodHMoKSk7XG59O1xuXG5jb25zdCByZXZlcnNlSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlhbG9nLnJldmVyc2VIaWdobGlnaHQoZ2V0SGlnaGxpZ2h0cygpKTtcbn07XG5cbmNvbnN0IHBsYXlIaWdobGlnaHQgPSAoZGlyZWN0aW9uKSA9PiB7XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgLy8gdHJ5IHRvIGFkdmFuY2UgdGhlIGhpZ2hsaWdodCwgaWYgdGhlcmUncyBtb3JlIHRleHQgdG8gYW5pbWF0ZVxuICAgIGlmICghY29udGludWVIaWdobGlnaHQoKSkge1xuXG4gICAgICAvLyBkbyBub3RoaW5nIGlmIHRoZXJlJ3Mgbm8gbW9yZSBoaWdobGlnaHRzXG4gICAgICBpZiAoaGlnaGxpZ2h0cy5sZW5ndGggLSAxID09PSBjdXJIaWdobGlnaHQpIHsgcmV0dXJuIH07XG5cbiAgICAgIGN1ckhpZ2hsaWdodCsrO1xuXG4gICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gbW9yZSBoaWdobGlnaHRzLCBkb24ndCBhZHZhbmNlXG4gICAgICBpZiAoaGlnaGxpZ2h0cy5sZW5ndGggPT09IGN1ckhpZ2hsaWdodCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSwgc2hvdyB0aGUgbmV4dCBoaWdobGlnaHRcbiAgICAgIG5leHRIaWdobGlnaHQoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gdHJ5IHRvIHJldmVyc2UgaGlnaGxpZ2h0LCBpZiB0aGVyZSB3YXMgcHJldmlvdXMgdGV4dCB0byBhbmltYXRlXG4gICAgaWYgKCFyZXZlcnNlSGlnaGxpZ2h0KCkpIHtcblxuICAgICAgLy8gZG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIHByZXZpb3VzIGhpZ2hsaWdodHNcbiAgICAgIGlmIChjdXJIaWdobGlnaHQgPT09IDApIHsgcmV0dXJuIH07XG5cbiAgICAgIGN1ckhpZ2hsaWdodC0tO1xuXG4gICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gcHJldmlvdXMgaGlnaGxpZ2h0cywgZG9uJ3QgcmV2ZXJzZVxuICAgICAgaWYgKGN1ckhpZ2hsaWdodCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0b2RvOiBmaXggdGhlIG5hbWluZywgb2ggZ29kcyB0aGlzIGlzIGN1cnNlZFxuICAgICAgbmV4dEhpZ2hsaWdodCh0cnVlKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUFjdGlvbiA9IChldnQpID0+IHtcbiAgbGV0IGRpcmVjdGlvbjtcblxuICBpZiAoZXZ0LnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDM3KSB7IC8vIGFycm93IGxlZnRcbiAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgZGlyZWN0aW9uID0gJ25leHQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgeyAvLyBjbGlja1xuICAgIC8vIHRvZG86IGZpeCB0aGlzLCB0aGlzIGlzIGN1cnNlZDpcbiAgICBpZiAoJChldnQudGFyZ2V0KS5hdHRyKCdpZCcpLmluZGV4T2YoJ25leHQnKSA+PSAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgfSBlbHNlIGlmICgkKGV2dC50YXJnZXQpLmF0dHIoJ2lkJykuaW5kZXhPZignbmV4dCcpID49IDApIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICB9XG4gIH1cblxuICBwbGF5SGlnaGxpZ2h0KGRpcmVjdGlvbik7XG59O1xuXG5jb25zdCBzZXR1cEludHJvID0gKCkgPT4ge1xuICAvLyBncmFiIGdhbWUgaW5mbyBmcm9tIGZpcnN0IGhpZ2hsaWdodFxuICBjb25zdCBnYW1lRXYgPSBoaWdobGlnaHRzWzBdLmdhbWVFdmVudC5kYXRhO1xuICBjb25zdCAkaG9tZSA9ICQoJy52cy1sb2dvX19ob21lJyk7XG4gIGNvbnN0ICRhd2F5ID0gJCgnLnZzLWxvZ29fX2F3YXknKTtcblxuICBsZXQgaE5pY2sgPSBnYW1lRXYuaG9tZVRlYW1OaWNrbmFtZS5zcGxpdCgnICcpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gIGxldCBhTmljayA9IGdhbWVFdi5hd2F5VGVhbU5pY2tuYW1lLnNwbGl0KCcgJykucG9wKCkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoYU5pY2sgPT09ICdtZWNoYW5pY3MnKSB7XG4gICAgYU5pY2sgKz0gJy1hd2F5JztcbiAgfVxuXG4gICQoJy5nYW1lLW5hbWUnKS50ZXh0KGBTZWFzb24gJHtnYW1lRXYuc2Vhc29uICsgMX0sIERheSAke2dhbWVFdi5kYXkgKyAxfWApO1xuICAkaG9tZS5hdHRyKCdzcmMnLCBgLi9pbWFnZXMvbG9nby0ke2hOaWNrfS5wbmdgKTtcbiAgJGF3YXkuYXR0cignc3JjJywgYC4vaW1hZ2VzL2xvZ28tJHthTmlja30ucG5nYCk7XG4gICQoJy5kaWFtb25kLWhlYWRlciAubWF0Y2h1cCcpLnRleHQoYCR7Z2FtZUV2LmhvbWVUZWFtTmFtZX0gdnMuICR7Z2FtZUV2LmF3YXlUZWFtTmFtZX1gKTtcblxuICAvLyBnZW9yZ2lhcyBkb24ndCBoYXZlIGEgc3RhbmRhcmQgc2l6ZSBsb2dvXG4gIGlmIChoTmljayA9PT0gJ2dlb3JnaWFzJykge1xuICAgICRob21lLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgfVxuXG4gIGlmIChhTmljayA9PT0gJ2dlb3JnaWFzJykge1xuICAgICRhd2F5LmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgfVxuXG4gIC8vIHNldCB0aGUgZGlhbW9uZCBjb2xvdXJzIGFuZCBhZGQgdGhlIGRpYW1vbmQgY3NzXG4gIGNvbnN0IGhvbWVUZWFtID0gdGVhbXNEYXRhW2dhbWVFdi5ob21lVGVhbV07XG4gIGNvbnN0ICRkaWFtb25kID0gJCgnI2RpYW1vbmQtc3ZnJyk7XG4gIGNvbnN0ICRncmFzcyA9ICRkaWFtb25kLmZpbmQoJy5ncmFzcycpO1xuICBjb25zdCAkZGlydCA9ICRkaWFtb25kLmZpbmQoJy5kaXJ0Jyk7XG4gIGNvbnN0ICRuZXV0cmFsID0gJGRpYW1vbmQuZmluZCgnLm5ldXRyYWwnKTtcbiAgY29uc3QgJG1vdW5kID0gJGRpYW1vbmQuZmluZCgnLm1vdW5kJyk7XG4gIGNvbnN0ICRiYXNlcyA9ICRkaWFtb25kLmZpbmQoJy5iYXNlJyk7XG5cbiAgaWYgKGhvbWVUZWFtLmNvbG91cnMuZ3Jhc3MpIHtcbiAgICAkZ3Jhc3MuZmlyc3QoKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5ncmFzc31gKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmdyYXNzfWApO1xuICAgICRncmFzcy5sYXN0KClcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZ3Jhc3N9YClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0T3V0bGluZX1gKTtcbiAgfVxuXG4gIGlmIChob21lVGVhbS5jb2xvdXJzLmRpcnQpIHtcbiAgICAkZGlydC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZGlydH1gKTtcbiAgfVxuXG4gIGlmIChob21lVGVhbS5jb2xvdXJzLmRpcnRPdXRsaW5lKSB7XG4gICAgJGRpcnQuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZGlydE91dGxpbmV9YCk7XG4gIH1cblxuICAkbW91bmQuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLm1haW59YCk7XG5cbiAgaWYgKGhvbWVUZWFtLmNvbG91cnMuZGlydE91dGxpbmUpIHtcbiAgICAkbW91bmQuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZGlydE91dGxpbmV9YCk7XG4gIH1cblxuICBpZiAoaG9tZVRlYW0uY29sb3Vycy5uZXV0cmFsKSB7XG4gICAgJG5ldXRyYWxcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMubmV1dHJhbH1gKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLm5ldXRyYWx9YCk7XG4gIH1cblxuICBpZiAoaG9tZVRlYW0uY29sb3Vycy5iYXNlcykge1xuICAgICRiYXNlc1xuICAgICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5iYXNlc31gKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmJhc2VzT3V0bGluZX1gKTtcbiAgfVxuXG5cbiAgJCgnI2RpYW1vbmRfX2ltYWdlJylcbiAgICAuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcrIGJ0b2EoJGRpYW1vbmQuaHRtbCgpKSArICcpJyk7XG5cbiAgJCgnLm1vdW5kLWxvZ28nKS5maXJzdCgpLmF0dHIoJ3NyYycsIGhvbWVUZWFtLmhvbWVMb2dvVVJMKTtcblxuICBuZXh0SGlnaGxpZ2h0KCk7XG59O1xuXG5jb25zdCBvbkhpZ2hsaWdodHNSZWFkeSA9IChobHMpID0+IHtcblxuICAkKCcjZ2FtZS1ldmVudC1mb3JtJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcjdmlzdWFscycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnI2hpZ2hsaWdodHMtZGlhbG9nX19jb250YWluZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgaGlnaGxpZ2h0cyA9IGhscztcblxuICBzZXR1cEludHJvKCk7XG5cbiAgJChkb2N1bWVudCkub24oJ2tleXVwJywgaGFuZGxlQWN0aW9uKTtcbiAgJCgnLmRpYWxvZy1jb250cm9sJykub24oJ2NsaWNrJywgaGFuZGxlQWN0aW9uKTtcbn07XG5cbmNvbnN0IGluaXRBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGhpZ2hsaWdodHNEYXRhID0gJCgnI2hpZ2hsaWdodHMtanNvbicpLmF0dHIoJ2RhdGEnKTtcblxuICAvLyBza2lwIGZpcnN0IHN0ZXBzIGFuZCBnbyBzdHJhaWdodCB0byBzaG93aW5nIHRoZSByZWVsIGlmIGl0J3MgYSBwdWJsaXNoZWRcbiAgLy8gc3RvcnlcbiAgaWYgKGhpZ2hsaWdodHNEYXRhLmxlbmd0aCkge1xuICAgIG9uSGlnaGxpZ2h0c1JlYWR5KEpTT04ucGFyc2UoaGlnaGxpZ2h0c0RhdGEpKTtcbiAgICAvL2hpZ2hsaWdodHMgPSBKU09OLnBhcnNlKGhpZ2hsaWdodHNEYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBnYW1lRXZlbnRTZWxlY3Rvci5pbml0KG9uSGlnaGxpZ2h0c1JlYWR5KTtcbiAgICBkb3dubG9hZGVyLmluaXQoKTtcbiAgfVxufTtcblxuaW5pdEFwcCgpO1xuXG4iLCIvLyBhcGF0ZWQgZnJvbVxuLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jb250cm9sbGluZy1jc3MtYW5pbWF0aW9ucy10cmFuc2l0aW9ucy1qYXZhc2NyaXB0L1xuY29uc3QgcHJlZml4ZXMgPSBbJ3dlYmtpdCcsICdtb3onLCAnTVMnLCAnbycsICcnXTtcblxuY29uc3QgcHJlZml4ZWRPbiA9ICgkZWwsIHR5cGUsIGNiKSA9PiB7XG4gIGZvciAobGV0IHByZWZpeCBvZiBwcmVmaXhlcykge1xuICAgIGlmICghcHJlZml4KSB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICRlbC5vbihgJHtwcmVmaXh9JHt0eXBlfWAsIGNiKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RW1vamkgPSAodGVhbSwgZ2FtZUV2KSA9PiB7XG4gIGxldCBlbW9qaSA9ICcnO1xuXG4gIGlmICh0ZWFtID09PSAnaG9tZScpIHtcbiAgICB0cnkge1xuICAgICAgZW1vamkgPSBnYW1lRXYuaG9tZVRlYW1FbW9qaSA/IFN0cmluZy5mcm9tQ29kZVBvaW50KGdhbWVFdi5ob21lVGVhbUVtb2ppKSA6ICcnO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZW1vamkgPSBnYW1lRXYuaG9tZVRlYW1FbW9qaTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmF3YXlUZWFtRW1vamkgPyBTdHJpbmcuZnJvbUNvZGVQb2ludChnYW1lRXYuYXdheVRlYW1FbW9qaSkgOiAnJztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmF3YXlUZWFtRW1vamk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVtb2ppO1xufTtcblxuY29uc3QgZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsID0gKG5hbWUpID0+IHtcbiAgbGV0IHJldCA9ICcnO1xuXG4gIHJldCArPSBuYW1lWzBdICsgJy4gJztcbiAgcmV0ICs9IG5hbWUuc3BsaXQoJyAnKVsxXTtcblxuICByZXR1cm4gcmV0O1xufTtcblxuY29uc3QgZ2V0SW5uaW5nVGV4dCA9IChpbm5pbmcpID0+IHtcbiAgbGV0IHJldCA9IGAke2lubmluZ31gO1xuXG4gIHN3aXRjaCAoaW5uaW5nKSB7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXQgKz0gJ3N0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldCArPSAnbmQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0ICs9ICdyZCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0ICs9ICd0aCc7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBtYWtlQmFzZURpYW1vbmQgPSAob2NjKSA9PiB7XG4gIGNvbnN0ICRkaWFtb25kID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2RpYW1vbmQnKTtcblxuICBpZiAob2NjKSB7XG4gICAgJGRpYW1vbmQuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xuICB9XG5cbiAgcmV0dXJuICRkaWFtb25kO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlZml4ZWRPbixcbiAgZ2V0RW1vamksXG4gIGdldFBsYXllck5hbWVXaXRoSW5pdGlhbCAsXG4gIGdldElubmluZ1RleHQsXG4gIG1ha2VCYXNlRGlhbW9uZCxcbn07XG5cbiIsImNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbmNvbnN0IHRlYW1zRGF0YSA9IHJlcXVpcmUoJy4uL2xpYi90ZWFtcy1kYXRhJyk7XG5jb25zdCB3ZWF0aGVyID0gcmVxdWlyZSgnLi4vbGliL3dlYXRoZXInKTtcblxuY29uc3QgJGRpYW1vbmQgPSAkKCcjZGlhbW9uZCcpO1xuY29uc3QgZGlhbW9uZExvY2F0aW9ucyA9IHtcbiAgJG1vdW5kOiAkZGlhbW9uZC5maW5kKCcubW91bmQnKSxcbiAgJGJhdHRpbmc6ICRkaWFtb25kLmZpbmQoJy5iYXR0aW5nJyksXG4gICRmaXJzdDogJGRpYW1vbmQuZmluZCgnLmZpcnN0JyksXG4gICRzZWNvbmQ6ICRkaWFtb25kLmZpbmQoJy5zZWNvbmQnKSxcbiAgJHRoaXJkOiAkZGlhbW9uZC5maW5kKCcudGhpcmQnKSxcbn07XG5cbmNvbnN0IEJBU0VTID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnXTsgLy8gdG9kbzogJ2ZvdXJ0aCcsICdzZWNyZXQnP1xuXG5jb25zdCBkcmF3QmF0dGVyID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgLy9jb25zdCBtbCA9IGhpZ2hsaWdodC5tbHVzdGFyZDtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IGdlID0gY3VyLmdhbWVFdmVudC5kYXRhO1xuXG4gIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdhd2F5JyA6ICdob21lJztcbiAgbGV0IG5hbWVXaXRoRW1vamkgPSAnJztcblxuICBpZiAoZ2VbYCR7dGVhbX1CYXR0ZXJOYW1lYF0pIHtcbiAgICBjb25zdCBuYW1lID0gdXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwoZ2VbYCR7dGVhbX1CYXR0ZXJOYW1lYF0pO1xuICAgIG5hbWVXaXRoRW1vamkgPSBgJHt1dGlsLmdldEVtb2ppKHRlYW0sIGdlKX0gJHtuYW1lfWA7XG4gIH1cblxuICBkaWFtb25kTG9jYXRpb25zWyckYmF0dGluZyddXG4gICAgLnRleHQobmFtZVdpdGhFbW9qaSk7XG59O1xuXG5jb25zdCBkcmF3UGl0Y2hlciA9IChoaWdobGlnaHRzKSA9PiB7XG4gIC8vY29uc3QgbWwgPSBoaWdobGlnaHQubWx1c3RhcmQ7XG4gIGNvbnN0IGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBjb25zdCBnZSA9IGN1ci5nYW1lRXZlbnQuZGF0YTtcblxuICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnaG9tZScgOiAnYXdheSc7XG4gIGxldCBuYW1lV2l0aEVtb2ppID0gJyc7XG5cbiAgaWYgKGdlW2Ake3RlYW19UGl0Y2hlck5hbWVgXSkge1xuICAgIGNvbnN0IG5hbWUgPSB1dGlsLmdldFBsYXllck5hbWVXaXRoSW5pdGlhbChnZVtgJHt0ZWFtfVBpdGNoZXJOYW1lYF0pO1xuICAgIG5hbWVXaXRoRW1vamkgPSBgJHt1dGlsLmdldEVtb2ppKHRlYW0sIGdlKX0gJHtuYW1lfWA7XG4gIH1cblxuICBkaWFtb25kTG9jYXRpb25zWyckbW91bmQnXVxuICAgIC50ZXh0KG5hbWVXaXRoRW1vamkpO1xufTtcblxuY29uc3QgZHJhd0Jhc2VydW5uZXJzID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IG1sID0gY3VyLm1sdXN0YXJkO1xuICBjb25zdCBnZSA9IGN1ci5nYW1lRXZlbnQuZGF0YTtcblxuICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnYXdheScgOiAnaG9tZSc7XG5cbiAgaWYgKG1sICYmIG1sLmJhc2VSdW5uZXJzKSB7XG4gICAgZm9yIChsZXQgYmFzZSBvZiBCQVNFUykge1xuICAgICAgbGV0IG5hbWUgPSBtbC5iYXNlUnVubmVyc1tiYXNlXS5wbGF5ZXJOYW1lO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBsZXQgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke3V0aWwuZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsKG5hbWUpfWA7XG4gICAgICAgIGRpYW1vbmRMb2NhdGlvbnNbYCQke2Jhc2V9YF1cbiAgICAgICAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYW1vbmRMb2NhdGlvbnNbYCQke2Jhc2V9YF1cbiAgICAgICAgICAudGV4dCgnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkcmF3U2NvcmVib2FyZCA9IChoaWdobGlnaHRzKSA9PiB7XG4gIGNvbnN0IGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBjb25zdCBtbCA9IGN1ci5tbHVzdGFyZDtcbiAgY29uc3QgZ2UgPSBjdXIuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgY29uc3QgJHNjb3JlYm9hcmQgPSAkKCcjZGlhbW9uZF9fc2NvcmVib2FyZCcpO1xuXG4gIC8vIHNjb3JlXG4gIGNvbnN0ICRob21lID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtdGVhbXNfX2hvbWUgc3BhbicpO1xuICAkaG9tZS5maXJzdCgpLnRleHQodGVhbXNEYXRhW2dlLmhvbWVUZWFtXS5zaG9ydGhhbmQpO1xuICAkaG9tZS5sYXN0KCkudGV4dChnZS5ob21lU2NvcmUpO1xuXG4gIGNvbnN0ICRhd2F5ID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtdGVhbXNfX2F3YXkgc3BhbicpO1xuICAkYXdheS5maXJzdCgpLnRleHQodGVhbXNEYXRhW2dlLmF3YXlUZWFtXS5zaG9ydGhhbmQpO1xuICAkYXdheS5sYXN0KCkudGV4dChnZS5hd2F5U2NvcmUpO1xuXG4gIC8vIGJhc2VzXG4gIGNvbnN0ICRiYXNlcyA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWJhc2VzJyk7XG4gICRiYXNlcy5lbXB0eSgpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKG1sLmJhc2VSdW5uZXJzLnRoaXJkLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChtbC5iYXNlUnVubmVycy5zZWNvbmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKG1sLmJhc2VSdW5uZXJzLmZpcnN0LnBsYXllck5hbWUpKTtcblxuICAvLyBjb3VudFxuICBjb25zdCAkY291bnQgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1jb3VudF9fY291bnQgc3BhbicpO1xuICAkY291bnQuZmlyc3QoKS50ZXh0KGdlLmF0QmF0QmFsbHMpO1xuICAkY291bnQubGFzdCgpLnRleHQoZ2UuYXRCYXRTdHJpa2VzKTtcbiAgY29uc3QgJG91dHMgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1jb3VudF9fb3V0cyBzcGFuJyk7XG4gICRvdXRzLnRleHQoZ2UuaGFsZklubmluZ091dHMpO1xuXG4gIC8vIGlubmluZ1xuICBjb25zdCAkaW5uaW5nID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtb3RoZXJfX2lubmluZyBzcGFuJyk7XG4gICRpbm5pbmcuZmlyc3QoKS50ZXh0KGdlLnRvcE9mSW5uaW5nID8gJ1RPUCcgOiAnQk9UJyk7XG4gICRpbm5pbmcubGFzdCgpLnRleHQodXRpbC5nZXRJbm5pbmdUZXh0KGdlLmlubmluZyArIDEpKTtcblxuICAvLyB3ZWF0aGVyXG4gIGNvbnN0ICR3ZWF0aGVyID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtb3RoZXJfX3dlYXRoZXIgc3BhbicpO1xuICAkd2VhdGhlclxuICAgIC50ZXh0KHdlYXRoZXJbZ2Uud2VhdGhlcl0uaWNvbiB8fCB3ZWF0aGVyW2dlLndlYXRoZXJdLm5hbWUpXG4gICAgLmF0dHIoJ3RpdGxlJywgd2VhdGhlcltnZS53ZWF0aGVyXS5uYW1lKTtcbn07XG5cbmNvbnN0IHVwZGF0ZURpYW1vbmQgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICBkcmF3QmF0dGVyKGhpZ2hsaWdodHMpO1xuICBkcmF3UGl0Y2hlcihoaWdobGlnaHRzKTtcbiAgZHJhd0Jhc2VydW5uZXJzKGhpZ2hsaWdodHMpO1xuXG4gIGRyYXdTY29yZWJvYXJkKGhpZ2hsaWdodHMpO1xufTtcblxuY29uc3Qgc2hvd1Zpc3VhbCA9ICh2aXN1YWwpID0+IHtcbiAgc3dpdGNoICh2aXN1YWwpIHtcbiAgICBjYXNlICdpbnRybyc6XG4gICAgICAkKCcjaW50cm8nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjZGlhbW9uZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZGlhbW9uZCc6XG4gICAgZGVmYXVsdDpcbiAgICAgICQoJyNpbnRybycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNkaWFtb25kJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1cGRhdGVEaWFtb25kLFxuICBzaG93VmlzdWFsLFxufTtcblxuIl19
