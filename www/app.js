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
      neutral: 'f3f4f5',
    },
    homeLogoURL: './images/logo-sunbeams.png',
  },

  // hades tigers
  '747b8e4a-7e50-4638-a973-ea7950a3e739': {
    shorthand: 'HAD',
    colours: {
    },
    homeLogoURL: '',
  }
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

const startHighlight = (highlights) => {;
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!ready) init();

  // reset dialog
  //highlight.curDialogPart = 0;
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  cur.started = true;
  animateHighlight(cur);
};

const animateHighlight = (highlight) => {
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideControl();
  animate('one');
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

  cur.curDialogPart++;

  // no more text to this highlight
  if (cur.curDialogPart === cur.dialogParts.length) {
    cur.curDialogPart = 0;
    return false;
  }

  animateHighlight(cur);
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

  animateHighlight(cur);
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

  if (isPlayBall(data)) {
    $check
      .attr('checked', true)
      .attr('disabled', true);
  }

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
  $('#game-events-select').removeClass('d-none');

  const $container = $('#game-events-choose__container');

  // gotta render some general stuff too (home vs away, s#d#, weather)
  // also: label for the select, and the select itself
  for (let id in gameEvents) {
    let $gameEv = renderGameEv(gameEvents[id]);

    if ($gameEv) {
      $container.append($gameEv);
    }
  }
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

    const gameId = $gameEvForm .find('#game-id').val() .split('/').pop();
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
    return grandSlalami.getComment({
      gameEvent: gameEvent.data,
      mlustard: mlustard,
    });
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

const nextHighlight = () => {
  const hls = getHighlights();

  visual.showVisual(hls.cur.visual);
  visual.updateDiamond(hls);
  dialog.startHighlight(hls);
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
      nextHighlight();
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

  $grass.first()
    .attr('fill', `#${homeTeam.colours.grass}`)
    .attr('stroke', `#${homeTeam.colours.grass}`);
  $grass.last()
    .attr('fill', `#${homeTeam.colours.grass}`)
    .attr('stroke', `#${homeTeam.colours.dirtOutline}`);

  $dirt
    .attr('fill', `#${homeTeam.colours.dirt}`)
    .attr('stroke', `#${homeTeam.colours.dirtOutline}`);

  $mound
    .attr('fill', `#${homeTeam.colours.main}`)
    .attr('stroke', `#${homeTeam.colours.dirtOutline}`);

  $neutral
    .attr('fill', `#${homeTeam.colours.neutral}`)
    .attr('stroke', `#${homeTeam.colours.neutral}`);

  $('#diamond__image')
    .css('background-image', 'url(data:image/svg+xml;base64,'+ btoa($diamond.html()) + ')');

  $('.mound-logo').first().attr('src', homeTeam.homeLogoURL);

  nextHighlight();
};

const onHighlightsReady = (hls) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdGVhbXMtZGF0YS5qcyIsImxpYi93ZWF0aGVyLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvY29tbWVudGFyeS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL2dyYW1tYXIuanMiLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC9ncmFuZC1zbGFsYW1pLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvcXVpcHMuanNvbiIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL3RyYWNlcnktbW9kcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9iYXNlLXJ1bm5lcnMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvZ2FtZS1zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvaGl0cy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9taXNjLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL21sdXN0YXJkLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL291dHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvc3BlY2lhbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9zdGVhbHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC93YWxrcy5qcyIsIm5vZGVfbW9kdWxlcy90cmFjZXJ5LWdyYW1tYXIvdHJhY2VyeS5qcyIsInNyYy9kaWFsb2cuanMiLCJzcmMvZG93bmxvYWRlci5qcyIsInNyYy9nYW1lLWV2ZW50LXNlbGVjdG9yLmpzIiwic3JjL2hpZ2hsaWdodC5qcyIsInNyYy9tYWluLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvdmlzdWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3IyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZGF0YSA9IHtcbiAgLy8gaGVsbG1vdXRoIHN1bmJlYW1zXG4gICdmMDJhZWFlMi01ZTZhLTQwOTgtOTg0Mi0wMmQyMjczZjI1YzcnOiB7XG4gICAgc2hvcnRoYW5kOiAnSEVMTCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgbWFpbjogJ2ZmZmJhYicsXG4gICAgICBncmFzczogJ2U4Yzg3NycsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMWQxOTMyJyxcbiAgICAgIG5ldXRyYWw6ICdmM2Y0ZjUnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXN1bmJlYW1zLnBuZycsXG4gIH0sXG5cbiAgLy8gaGFkZXMgdGlnZXJzXG4gICc3NDdiOGU0YS03ZTUwLTQ2MzgtYTk3My1lYTc5NTBhM2U3MzknOiB7XG4gICAgc2hvcnRoYW5kOiAnSEFEJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJycsXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGF0YTtcblxuIiwiY29uc3Qgd2VhdGhlciA9IHtcbiAgMDoge1xuICAgIG5hbWU6ICd2b2lkJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgMToge1xuICAgIG5hbWU6ICdzdW4gMicsXG4gICAgaWNvbjogJ+KYgCcsXG4gIH0sXG4gIDI6IHtcbiAgICBuYW1lOiAnb3ZlcmNhc3QnLFxuICAgIGljb246ICcnLFxuICB9LFxuICAzOiB7XG4gICAgbmFtZTogJ3JhaW55JyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNDoge1xuICAgIG5hbWU6ICdzYW5kc3Rvcm0nLFxuICAgIGljb246ICcnLFxuICB9LFxuICA1OiB7XG4gICAgbmFtZTogJ3Nub3d5JyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNjoge1xuICAgIG5hbWU6ICdhY2lkaWMnLFxuICAgIGljb246ICcnLFxuICB9LFxuICA3OiB7XG4gICAgbmFtZTogJ3NvbGFyIGVjbGlwc2UnLFxuICAgIGljb246ICfwn4yRJyxcbiAgfSxcbiAgODoge1xuICAgIG5hbWU6ICdnbGl0dGVyJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgOToge1xuICAgIG5hbWU6ICdibG9vZGRyYWluJyxcbiAgICBpY29uOiAn8J+puCcsXG4gIH0sXG4gIDEwOiB7XG4gICAgbmFtZTogJ3BlYW51dHMnLFxuICAgIGljb246ICfwn6WcJyxcbiAgfSxcbiAgMTE6IHtcbiAgICBuYW1lOiAnbG90cyBvZiBiaXJkcycsXG4gICAgaWNvbjogJ/CfkKYnLFxuICB9LFxuICAxMjoge1xuICAgIG5hbWU6ICdmZWVkYmFjaycsXG4gICAgaWNvbjogJ/CfjqQnLFxuICB9LFxuICAxMzoge1xuICAgIG5hbWU6ICdyZXZlcmInLFxuICAgIGljb246ICfwn4yKJyxcbiAgfSxcbiAgMTQ6IHtcbiAgICBuYW1lOiAnYmxhY2sgaG9sZScsXG4gICAgaWNvbjogJ+KaqycsXG4gIH0sXG4gIDE1OiB7XG4gICAgbmFtZTogJ2NvZmZlZScsXG4gICAgaWNvbjogJ+KYlScsXG4gIH0sXG4gIDE2OiB7XG4gICAgbmFtZTogJ2NvZmZlZSAyJyxcbiAgICBpY29uOiAn8J+NtScsXG4gIH0sXG4gIDE3OiB7XG4gICAgbmFtZTogJ2NvZmZlZSAzcycsXG4gICAgaWNvbjogJzPvuI/ig6MnLFxuICB9LFxuICAxODoge1xuICAgIG5hbWU6ICdmbG9vZGluZycsXG4gICAgaWNvbjogJ/CfmrAnLFxuICB9LFxuICAxOToge1xuICAgIG5hbWU6ICdzYWxtb24nLFxuICAgIGljb246ICfwn5CfJyxcbiAgfSxcbiAgMjA6IHtcbiAgICBuYW1lOiAnZ2xpdHRlcicsXG4gICAgaWNvbjogJ+KcqCcsXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdlYXRoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGJ1aWxkQ29tbWVudCA9IGZ1bmN0aW9uIGJ1aWxkQ29tbWVudChzZXR0aW5ncywgZ3JhbW1hcikge1xuICB2YXIgZ2FtZUV2ZW50ID0gc2V0dGluZ3MuZ2FtZUV2ZW50O1xuICB2YXIgbWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZDsgLy8gY2hlY2sgZm9yIGdhbWUgc3RhdHVzXG5cbiAgc3dpdGNoIChtbHVzdGFyZC5nYW1lU3RhdHVzKSB7XG4gICAgY2FzZSAnYmVmb3JlRmlyc3RQaXRjaCc6XG4gICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjZ2FtZVN0YXJ0IycpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdmaXJzdEhhbGZJbm5pbmdTdGFydCc6XG4gICAgICBpZiAoZ2FtZUV2ZW50LmlubmluZyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjaW5uaW5nT25lU3RhcnQjJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjaW5uaW5nU3RhcnQjJyk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc2Vjb25kSGFsZklubmluZ1N0YXJ0JzpcbiAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdTdGFydCMnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGNvbW1lbnQgPSAnJzsgLy8gY2hlY2sgZm9yIG91dHNcblxuICBpZiAobWx1c3RhcmQub3V0KSB7XG4gICAgaWYgKG1sdXN0YXJkLmdhbWVTdGF0dXMgPT09ICdoYWxmSW5uaW5nRW5kJykge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNsYXN0T3V0T2ZJbm5pbmcjJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjb3V0IycpO1xuICAgIH1cbiAgfSAvLyBjaGVjayBmb3Igc2NvcmVcblxuXG4gIGlmIChtbHVzdGFyZC5ydW5zU2NvcmVkICE9PSAwIHx8IG1sdXN0YXJkLnVucnVuc1Njb3JlZCAhPT0gMCB8fCAvLyBzY29yZSBjaGFuZ2UgZHVlIHRvIHNhbG1vbiBzdGVhbGluZyBydW5zXG4gIG1sdXN0YXJkLnNwZWNpYWwgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEua2luZCA9PT0gJ3NhbG1vbicgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEuZGV0YWlscyAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5kZXRhaWxzLnJ1bnNTdG9sZW4ubGVuZ3RoIHx8IC8vIHNjb3JlIGNoYW5nZSBmcm9tIHN1biAyIHNtaWxpbmdcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnc3VuMicgfHwgLy8gc2NvcmUgY2hhbmdlIGZyb20gYmxhY2sgaG9sZSBzd2FsbG93aW5nXG4gIG1sdXN0YXJkLnNwZWNpYWwgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEua2luZCA9PT0gJ2JsYWNrSG9sZScpIHtcbiAgICBpZiAoY29tbWVudCkge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNzY29yZUFkZG9uIycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI3Njb3JlIycpO1xuICAgIH1cbiAgfSAvLyBjaGVjayBpZiBhIGJhdHRlciBqdXN0IHNob3dlZCB1cCBhdCB0aGUgcGxhdGVcblxuXG4gIGlmIChtbHVzdGFyZC5iYXR0ZXJVcCAmJiBnYW1lRXZlbnQuYmFzZXJ1bm5lckNvdW50KSB7XG4gICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNiYXR0ZXJVcFJ1bm5lcnMjJyk7XG4gIH0gLy8gcmV0dXJuIHRoZSBjb21tZW50IGlmIGl0IHdhcyBjcmVhdGVkLCBvdGhlcndpc2UgdGhlIG9yaWdpbmFsIHVwZGF0ZSBpZiBpdFxuICAvLyBleGlzdHMsIG90aGVyd2lzZSBhbiBlbXB0eSBzdHJpbmdcblxuXG4gIHJldHVybiBjb21tZW50IHx8IGdhbWVFdmVudC5sYXN0VXBkYXRlIHx8ICcnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJ1aWxkQ29tbWVudDogYnVpbGRDb21tZW50XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQ7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG52YXIgdHJhY2VyeSA9IHJlcXVpcmUoJ3RyYWNlcnktZ3JhbW1hcicpO1xuXG52YXIgbW9kcyA9IHJlcXVpcmUoJy4vdHJhY2VyeS1tb2RzJyk7XG5cbnZhciBxdWlwcyA9IHJlcXVpcmUoJy4vcXVpcHMuanNvbicpO1xuXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQoc2V0dGluZ3MpIHtcbiAgdmFyIHNlZWQgPSBzZXR0aW5ncy5zZWVkO1xuICB2YXIgZ2FtZUV2ZW50ID0gc2V0dGluZ3MuZ2FtZUV2ZW50O1xuICB2YXIgbWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZDtcbiAgdmFyIG92ZXJyaWRlcyA9IHNldHRpbmdzLm92ZXJyaWRlcztcbiAgdmFyIGxldmVsID0gc2V0dGluZ3MubGV2ZWw7XG5cbiAgaWYgKHNlZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyYWNlcnkuc2V0UmFuZG9tKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZWVkO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGdyYW1tYXIgPSB0cmFjZXJ5LmNyZWF0ZUdyYW1tYXIoe30pOyAvLyBwb3B1bGF0ZSBkYXRhIGZyb20gZ2FtZUV2ZW50XG5cbiAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHF1aXBzLmRhdGEpLFxuICAgICAgX3N0ZXA7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgdmFyIF9maWVsZDMgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBkYXRhID0gZ2FtZUV2ZW50W19maWVsZDNdO1xuXG4gICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHNvbWUgZGF0YSBuZWVkcyBtYXNzYWdpbmdcbiAgICAgICAgc3dpdGNoIChfZmllbGQzKSB7XG4gICAgICAgICAgY2FzZSAnaW5uaW5nJzpcbiAgICAgICAgICAgIGRhdGEgPSAoZGF0YSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3RvcE9mSW5uaW5nJzpcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnaGFsZklubmluZ091dHMnOlxuICAgICAgICAgIGNhc2UgJ2hvbWVTY29yZSc6XG4gICAgICAgICAgY2FzZSAnYXdheVNjb3JlJzpcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZDMsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkMywgJycpO1xuICAgICAgfVxuICAgIH0gLy8gY3VycmVudCBwaXRjaGVyXG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IuZigpO1xuICB9XG5cbiAgdmFyIGNQaXRjaGVyID0gZ2FtZUV2ZW50LnRvcE9mSW5uaW5nID8gZ2FtZUV2ZW50LmhvbWVQaXRjaGVyTmFtZSA6IGdhbWVFdmVudC5hd2F5UGl0Y2hlck5hbWU7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdjUGl0Y2hlcicsIGNQaXRjaGVyKTsgLy8gY3VycmVudCBiYXR0ZXIgKGNhbiBiZSBhbiBlbXB0eSBzdHJpbmcgaWYgbm9ib2R5IGJhdHRpbmcpXG5cbiAgdmFyIGNCYXR0ZXIgPSBnYW1lRXZlbnQuaG9tZUJhdHRlck5hbWUgfHwgZ2FtZUV2ZW50LmF3YXlCYXR0ZXJOYW1lO1xuICBncmFtbWFyLnB1c2hSdWxlcygnY0JhdHRlcicsIGNCYXR0ZXIpOyAvLyBwaXRjaGluZyB0ZWFtIG5pY2tuYW1lXG5cbiAgdmFyIHBOaWNrID0gZ2FtZUV2ZW50LnRvcE9mSW5uaW5nID8gJyNoTmljayMnIDogJyNhTmljayMnO1xuICBncmFtbWFyLnB1c2hSdWxlcygncE5pY2snLCBwTmljayk7IC8vIGJhdHRpbmcgdGVhbSBuaWNrbmFtZVxuXG4gIHZhciBiTmljayA9IGdhbWVFdmVudC50b3BPZklubmluZyA/ICcjYU5pY2sjJyA6ICcjaE5pY2sjJztcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2JOaWNrJywgYk5pY2spOyAvLyBsZWFkaW5nICYgdHJhaWxpbmcgdGVhbSBuaWNrbmFtZXMgYW5kIHNjb3Jlc1xuXG4gIHZhciBsVGVhbTtcbiAgdmFyIHRUZWFtO1xuICB2YXIgbFNjb3JlO1xuICB2YXIgdFNjb3JlO1xuXG4gIGlmIChnYW1lRXZlbnQuYXdheVNjb3JlID4gZ2FtZUV2ZW50LmhvbWVTY29yZSkge1xuICAgIGxUZWFtID0gJyNhTmljayMnO1xuICAgIHRUZWFtID0gJyNoTmljayMnO1xuICAgIGxTY29yZSA9ICcjYVNjb3JlIyc7XG4gICAgdFNjb3JlID0gJyNoU2NvcmUjJztcbiAgfSBlbHNlIHtcbiAgICBsVGVhbSA9ICcjaE5pY2sjJztcbiAgICB0VGVhbSA9ICcjYU5pY2sjJztcbiAgICBsU2NvcmUgPSAnI2hTY29yZSMnO1xuICAgIHRTY29yZSA9ICcjYVNjb3JlIyc7XG4gIH1cblxuICBncmFtbWFyLnB1c2hSdWxlcygnbFRlYW0nLCBsVGVhbSk7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCd0VGVhbScsIHRUZWFtKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2xTY29yZScsIGxTY29yZSk7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCd0U2NvcmUnLCB0U2NvcmUpOyAvLyBzZXQgYmFzZSBydW5uZXJzXG5cbiAgaWYgKGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQgPj0gMykge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKCdydW5uZXJzJywgJyNiYXNlc0xvYWRlZCMnKTtcbiAgfSBlbHNlIGlmIChnYW1lRXZlbnQuYmFzZXJ1bm5lckNvdW50ID4gMCkge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKCdydW5uZXJzJywgJyNydW5uZXJzT25CYXNlIycpO1xuICB9XG5cbiAgdmFyIGJhc2VzID0gJyc7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyhtbHVzdGFyZC5iYXNlUnVubmVycyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBiYXNlID0gX09iamVjdCRrZXlzW19pXTtcblxuICAgIGlmIChtbHVzdGFyZC5iYXNlUnVubmVyc1tiYXNlXS5wbGF5ZXJJZCkge1xuICAgICAgYmFzZXMgKz0gXCJcIi5jb25jYXQoYmFzZSwgXCIgXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdiYXNlc09jYycsIGJhc2VzLnRyaW0oKSk7IC8vIGJ1aWxkIHF1aXBzIHNob3J0Y3V0c1xuXG4gIGZvciAodmFyIGZpZWxkIGluIHF1aXBzLnNob3J0Y3V0cykge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKGZpZWxkLCBxdWlwcy5zaG9ydGN1dHNbZmllbGRdKTtcbiAgfSAvLyBidWlsZCBxdWlwcyBncmFtbWFyXG5cblxuICBmb3IgKHZhciBfZmllbGQgaW4gcXVpcHNbbGV2ZWxdKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkLCBxdWlwc1tsZXZlbF1bX2ZpZWxkXSk7XG4gIH0gLy8gZG8gcXVpcCBvdmVycmlkZXNcblxuXG4gIGZvciAodmFyIF9maWVsZDIgaW4gb3ZlcnJpZGVzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkMiwgb3ZlcnJpZGVzW19maWVsZDJdKTtcbiAgfSAvLyBhZGQgbW9kc1xuXG5cbiAgZ3JhbW1hci5hZGRNb2RpZmllcnModHJhY2VyeS5iYXNlRW5nTW9kaWZpZXJzKTtcbiAgZ3JhbW1hci5hZGRNb2RpZmllcnMobW9kcyk7XG4gIHJldHVybiBncmFtbWFyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQ6IGluaXRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtbHVzdGFyZCA9IHJlcXVpcmUoJ21sdXN0YXJkJyk7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyk7XG5cbnZhciBjb21tZW50YXJ5ID0gcmVxdWlyZSgnLi9jb21tZW50YXJ5Jyk7XG4vKlxuICogQHNldHRpbmdzIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gKiAgIC0gZ2FtZUV2ZW50OiB0aGUgZ2FtZSBldmVudCBvYmplY3QgKGZyb20gdGhlIHN0cmVhbSBvciBjaHJvbmljbGVyKVxuICogICAtIG1sdXN0YXJkIChvcHRpb25hbCk6IG1sdXN0YXJkIGRhdGEgZm9yIHRoZSBnYW1lRXZlbnRcbiAqICAgLSBzZWVkIChvcHRpb25hbCk6IGEgc2VlZCwgZm9yIGRldGVybWluaXN0aWMgY29tbWVudCBnZW5lcmF0aW9uXG4gKiAgIC0gbGV2ZWwgKG9wdGlvbmFsLCBkZWZhdWx0cyB0byAnbWluaW1hbCcpOiB0aGUgY29tbWVudGFyeSBsZXZlbCwgb25lIG9mXG4gKiAgICAgLSBtaW5pbWFsOiBhZGRzIGEgZmV3IGNvbW1lbnRzIHRvIHVwZGF0ZSBvbiBnYW1lIHN0YXR1cyBhdCBrZXkgY29tbWVudHNcbiAqICAgLSBvdmVycmlkZXMgKG9wdGlvbmFsKTogb2JqZWN0IHdpdGggcXVpcCBvdmVycmlkZXNcbiAqL1xuXG5cbnZhciBnZXRDb21tZW50ID0gZnVuY3Rpb24gZ2V0Q29tbWVudChzZXR0aW5ncykge1xuICBpZiAoIXNldHRpbmdzLmdhbWVFdmVudCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHNldHRpbmdzLm1sdXN0YXJkID0gc2V0dGluZ3MubWx1c3RhcmQgfHwgbWx1c3RhcmQuYW5hbHl6ZUdhbWVFdmVudChzZXR0aW5ncy5nYW1lRXZlbnQpO1xuICBzZXR0aW5ncy5sZXZlbCA9IHNldHRpbmdzLmxldmVsIHx8ICdtaW5pbWFsJztcbiAgc2V0dGluZ3Mub3ZlcnJpZGVzID0gc2V0dGluZ3Mub3ZlcnJpZGVzIHx8IHt9O1xuICB2YXIgZ3IgPSBncmFtbWFyLmluaXQoc2V0dGluZ3MpO1xuXG4gIGlmICghZ3IpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29tbWVudGFyeS5idWlsZENvbW1lbnQoc2V0dGluZ3MsIGdyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb21tZW50OiBnZXRDb21tZW50XG59OyIsIm1vZHVsZS5leHBvcnRzPXtcImRhdGFcIjpbXCJpbm5pbmdcIixcInRvcE9mSW5uaW5nXCIsXCJoYWxmSW5uaW5nT3V0c1wiLFwiaG9tZVRlYW1OYW1lXCIsXCJhd2F5VGVhbU5hbWVcIixcImhvbWVUZWFtTmlja25hbWVcIixcImF3YXlUZWFtTmlja25hbWVcIixcImhvbWVTY29yZVwiLFwiYXdheVNjb3JlXCIsXCJob21lT2Rkc1wiLFwiYXdheU9kZHNcIixcImhvbWVQaXRjaGVyTmFtZVwiLFwiYXdheVBpdGNoZXJOYW1lXCIsXCJsYXN0VXBkYXRlXCIsXCJzY29yZVVwZGF0ZVwiXSxcIm1pbmltYWxcIjp7XCJtYXRjaHVwXCI6W1wiI2hOaWNrIyB2cyAjYU5pY2sjXCIsXCIjYU5pY2sjIGF0ICNoTmljayNcIl0sXCJ0b3BPckJvdFwiOlwiI3RvcE9mSW5uaW5nI1wiLFwiaW5uaW5nRnVsbFwiOlwiI3RvcE9yQm90IyBvZiAjaW5uaW5nI1wiLFwiZ2FtZVN0YXJ0XCI6XCIjbWF0Y2h1cCMuICNwaXRjaGVycyMuICNvcmlnaW5hbCNcIixcInNjb3JlXCI6XCIjb3JpZ2luYWwjIEl0J3MgI2xUZWFtLnRoZSMgI2xTY29yZSMgYW5kICN0VGVhbS50aGUjICN0U2NvcmUjLlwiLFwic2NvcmVBZGRvblwiOlwiIEl0J3MgI2xUZWFtLnRoZSMgI2xTY29yZSMgYW5kICN0VGVhbS50aGUjICN0U2NvcmUjLlwiLFwiaW5uaW5nU3RhcnRcIjpcIiNvcmlnaW5hbCMgI2NQaXRjaGVyIyBwaXRjaGluZyBmb3IgI3BOaWNrLnRoZSMuXCIsXCJpbm5pbmdPbmVTdGFydFwiOlwiI29yaWdpbmFsI1wiLFwicGl0Y2hlcnNcIjpbXCIjaFBpdGNoZXIjIHBpdGNoaW5nIGZvciAjaE5pY2sudGhlIywgI2FQaXRjaGVyIyBmb3IgI2FOaWNrLnRoZSNcIixcIk91ciBwaXRjaGVycyBhcmUgI2hQaXRjaGVyIyBmb3IgI2hOaWNrLnRoZSMsIGFuZCAjYVBpdGNoZXIjIGZvciAjYU5pY2sudGhlI1wiXSxcIm91dFwiOlwiI29yaWdpbmFsIyAjaW5uaW5nRnVsbC5jYXBpdGFsaXplIywgI291dHMjLlwiLFwib3V0c1wiOlwiI2hhbGZJbm5pbmdPdXRzLm91dHMjXCIsXCJsYXN0T3V0T2ZJbm5pbmdcIjpcIiNvcmlnaW5hbCNcIixcImJhdHRlclVwUnVubmVyc1wiOlwiI29yaWdpbmFsIyAjcnVubmVycy5ydW5uZXJQbHVyYWxpemUjXCIsXCJydW5uZXJzT25CYXNlXCI6XCJSdW5uZXIgb24gI2Jhc2VzT2NjLmFuZCMuXCIsXCJiYXNlc0xvYWRlZFwiOlwiQmFzZXMgYXJlIGxvYWRlZCFcIn0sXCJzaG9ydGN1dHNcIjp7XCJoUGl0Y2hlclwiOlwiI2hvbWVQaXRjaGVyTmFtZSNcIixcImFQaXRjaGVyXCI6XCIjYXdheVBpdGNoZXJOYW1lI1wiLFwiaE5pY2tcIjpcIiNob21lVGVhbU5pY2tuYW1lI1wiLFwiYU5pY2tcIjpcIiNhd2F5VGVhbU5pY2tuYW1lI1wiLFwiaFNjb3JlXCI6XCIjaG9tZVNjb3JlI1wiLFwiYVNjb3JlXCI6XCIjYXdheVNjb3JlI1wiLFwib3JpZ2luYWxcIjpcIiNsYXN0VXBkYXRlIyNzY29yZVVwZGF0ZS5zcGFjZWQjXCJ9fSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGhlOiBmdW5jdGlvbiB0aGUocykge1xuICAgIHJldHVybiBcInRoZSBcIi5jb25jYXQocyk7XG4gIH0sXG4gIC8vIGNvdW50cyB0aGUgIyBvZiBvdXRzIGFuZCBwbHVyYWxpemVzIGFjY29yZGluZ2x5XG4gIG91dHM6IGZ1bmN0aW9uIG91dHMocykge1xuICAgIGlmIChzID09PSAnMScpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzLCBcIiBvdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzLCBcIiBvdXRzXCIpO1xuICAgIH1cbiAgfSxcbiAgLy8gb3hmb3JkIGNvbW1hc1xuICBhbmQ6IGZ1bmN0aW9uIGFuZChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoJyAnKS5qb2luKCcsICcpLnJlcGxhY2UoLywgKFteLF0qKSQvLCAnIGFuZCAkMScpO1xuICB9LFxuICAvLyBmb3IgcGx1cmFsaXppbmcgcnVubmVyKHMpIG9uIGZpcnN0Wywgc2Vjb25kIGFuZCB0aGlyZF1cbiAgcnVubmVyUGx1cmFsaXplOiBmdW5jdGlvbiBydW5uZXJQbHVyYWxpemUocykge1xuICAgIGlmIChzLmluZGV4T2YoJywnKSA+PSAwIHx8IHMuaW5kZXhPZignYW5kJykgPj0gMCkge1xuICAgICAgcmV0dXJuIHMucmVwbGFjZSgnUnVubmVyJywgJ1J1bm5lcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9LFxuICAvLyBhZGRzIGEgc3BhY2UgYmVmb3JlIHRoZSB3b3JkXG4gIHNwYWNlZDogZnVuY3Rpb24gc3BhY2VkKHMpIHtcbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIFwiIFwiLmNvbmNhdChzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLy9jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgQkFTRVMgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnXTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICAvL2NvbnN0IHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuICBpZiAoZXZlbnREYXRhLmJhc2VydW5uZXJDb3VudCkge1xuICAgIC8vIGkgcmVwcmVzZW50cyB0aGUgb3JkZXIgb2YgYmFzZXJ1bm5lcnNcbiAgICAvLyBiYXNlc09jY3VwaWVkW2ldIGlzIHRoZSBiYXNlIHRoZXkgYXJlIG9uLCAwLWluZGV4ZWRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50RGF0YS5iYXNlc09jY3VwaWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgX2V2ZW50RGF0YSRiYXNlUnVubmVyO1xuXG4gICAgICB2YXIgYmFzZSA9IGV2ZW50RGF0YS5iYXNlc09jY3VwaWVkW2ldO1xuICAgICAgYW5hbHlzaXMuYmFzZVJ1bm5lcnNbQkFTRVNbYmFzZV1dID0ge1xuICAgICAgICBwbGF5ZXJOYW1lOiAoKF9ldmVudERhdGEkYmFzZVJ1bm5lciA9IGV2ZW50RGF0YS5iYXNlUnVubmVyTmFtZXMpID09PSBudWxsIHx8IF9ldmVudERhdGEkYmFzZVJ1bm5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRiYXNlUnVubmVyW2ldKSB8fCAnJyxcbiAgICAgICAgcGxheWVySWQ6IGV2ZW50RGF0YS5iYXNlUnVubmVyc1tpXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkaG9tZVRlYW1OaSwgX2V2ZW50RGF0YSRhd2F5VGVhbU5pO1xuXG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcbiAgdmFyIGhvbWUgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkaG9tZVRlYW1OaSA9IGV2ZW50RGF0YS5ob21lVGVhbU5pY2tuYW1lKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGhvbWVUZWFtTmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkaG9tZVRlYW1OaS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbiAgdmFyIGhvbWVTY29yZSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZVNjb3JlKSB8fCAwO1xuICB2YXIgYXdheSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRhd2F5VGVhbU5pID0gZXZlbnREYXRhLmF3YXlUZWFtTmlja25hbWUpID09PSBudWxsIHx8IF9ldmVudERhdGEkYXdheVRlYW1OaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRhd2F5VGVhbU5pLnRvTG93ZXJDYXNlKCkpIHx8ICcnO1xuICB2YXIgYXdheVNjb3JlID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5U2NvcmUpIHx8IDA7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdwbGF5IGJhbGwnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdiZWZvcmVGaXJzdFBpdGNoJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigndG9wIG9mJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnZmlyc3RIYWxmSW5uaW5nU3RhcnQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdib3R0b20gb2YnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdzZWNvbmRIYWxmSW5uaW5nU3RhcnQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdnYW1lIG92ZXInKSA+PSAwIHx8IHVwZGF0ZS5pbmRleE9mKFwiXCIuY29uY2F0KGhvbWUsIFwiIFwiKS5jb25jYXQoaG9tZVNjb3JlLCBcIiwgXCIpLmNvbmNhdChhd2F5LCBcIiBcIikuY29uY2F0KGF3YXlTY29yZSkpID49IDAgfHwgdXBkYXRlLmluZGV4T2YoXCJcIi5jb25jYXQoYXdheSwgXCIgXCIpLmNvbmNhdChhd2F5U2NvcmUsIFwiLCBcIikuY29uY2F0KGhvbWUsIFwiIFwiKS5jb25jYXQoaG9tZVNjb3JlKSkgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnZ2FtZUVuZCc7XG4gIH1cblxuICBpZiAoYW5hbHlzaXMuZ2FtZVN0YXR1cykge1xuICAgIHJldHVybiBhbmFseXNpcztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVja0hpdFJiaVByZVMxMiA9IGZ1bmN0aW9uIGNoZWNrSGl0UmJpUHJlUzEyKGFuYWx5c2lzLCB1cGRhdGUpIHtcbiAgLy8gZnJvbSBzb21lIG5vbi1leGhhdXN0aXZlIHJlc2VhcmNoLCBpIHRoaW5rIHRoZXJlIHdlcmVuJ3QgYW55IGdyYW5kIHNsYW1zXG4gIC8vIHByZS1zMTIgdGhhdCB3ZXJlIG5vdCA0IHJ1bnNcbiAgaWYgKGFuYWx5c2lzLmhpdE1ldGEua2luZCA9PT0gJ2dyYW5kU2xhbScpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gNDtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgYSBzaW5nbGUvZG91YmxlL3RyaXBsZSB3YXMgaGl0ICYgeCBydW5zIHdlcmUgc2NvcmVkLCBpdCBzaG93cyB1cFxuICAvLyBhdCB0aGUgZW5kIG9mIHRoZSB1cGRhdGUgYXMgXCIuLi4hIHggc2NvcmVzXCJcblxuXG4gIHZhciBydW5zID0gdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvISAvLCAvIHNjb3Jlcy8pIHx8IDA7XG5cbiAgaWYgKHJ1bnMpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gcnVucztcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgYSBzb2xvIGhvbWUgcnVuIHdhcyBoaXQsIHVwZGF0ZSBjb250YWlucyB0aGUgdGV4dCBcInNvbG8gaG9tZSBydW5cIlxuXG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzb2xvIGhvbWUgcnVuJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiBhIG11bHRpLXJ1biBob21lIHJ1biB3YXMgaGl0LCB1cGRhdGUgY29udGFpbnMgdGhlIHRleHQgXCJ4LXJ1biBob21lXG4gIC8vIHJ1blwiXG5cblxuICBydW5zID0gdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvLXJ1biBob21lIHJ1bi8pIHx8IDA7XG5cbiAgaWYgKHJ1bnMpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gcnVucztcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignaGl0cyBhIHNpbmdsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnc2luZ2xlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaGl0cyBhIGRvdWJsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnZG91YmxlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaGl0cyBhIHRyaXBsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAndHJpcGxlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaG9tZSBydW4nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ2hvbWVSdW4nO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdncmFuZCBzbGFtJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdncmFuZFNsYW0nO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLmhpdE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLmhpdCA9IHRydWU7IC8vIGNoZWNrIGlmIGhvbWUgcnVuIC8gZ3JhbmQgc2xhbSBsYW5kZWQgaW4gYmlnIGJ1Y2tldFxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdiYWxsIGxhbmRzIGluIGEgYmlnIGJ1Y2tldCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLmhpdE1ldGEuYmlnQnVja2V0ID0gdHJ1ZTtcbiAgICB9IC8vZnJvbSBzMTIgb253YXJkLCBzY29yZXMgb24gdGhlIHBsYXkgYXJlIGluIHRoZSBzY29yZVVwZGF0ZSBmaWVsZFxuICAgIC8vY29uc3Qgc2NvcmVVcGRhdGUgPSBldmVudERhdGE/LnNjb3JlVXBkYXRlIHx8ICcnO1xuICAgIC8vaWYgKHNjb3JlVXBkYXRlKSB7XG4gICAgLy9hbmFseXNpcy5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIoc2NvcmVVcGRhdGUsIG51bGwsIG51bGwpIHx8IDA7XG4gICAgLy8gaWYgdGhlcmUncyBubyBzY29yZVVwZGF0ZSwgZGVkdWNlIHRoZSBzY29yZSBmcm9tIHRoZSB1cGRhdGVcbiAgICAvLyB0aGlzIGlzIHRoZSBjYXNlIGZvciBnYW1lcyBiZXR3ZWVuIHMyICYgczExXG5cblxuICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpKSB7XG4gICAgICBjaGVja0hpdFJiaVByZVMxMihhbmFseXNpcywgdXBkYXRlKTtcbiAgICB9IC8vIHNjb3JlIHVwZGF0ZXMgZnJvbSBzMTIgb253YXJkIHJlZ2lzdGVyZWQgaW4gc3JjL21pc2MuanNcblxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2tNYXhpbXVtQmxhc2ViYWxsID0gZnVuY3Rpb24gY2hlY2tNYXhpbXVtQmxhc2ViYWxsKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIGJhbGxzLCBiYXNlcywgb3V0cywgc3RyaWtlcztcblxuICBpZiAoZXZlbnREYXRhLnRvcE9mSW5uaW5nKSB7XG4gICAgLy8gYXdheSBpcyBiYXR0aW5nXG4gICAgYmFsbHMgPSBldmVudERhdGEuYXdheUJhbGxzO1xuICAgIGJhc2VzID0gZXZlbnREYXRhLmF3YXlCYXNlcztcbiAgICBvdXRzID0gZXZlbnREYXRhLmF3YXlPdXRzO1xuICAgIHN0cmlrZXMgPSBldmVudERhdGEuYXdheVN0cmlrZXM7XG4gIH0gZWxzZSB7XG4gICAgLy8gaG9tZSBpcyBiYXR0aW5nXG4gICAgYmFsbHMgPSBldmVudERhdGEuaG9tZUJhbGxzO1xuICAgIGJhc2VzID0gZXZlbnREYXRhLmhvbWVCYXNlcztcbiAgICBvdXRzID0gZXZlbnREYXRhLmhvbWVPdXRzO1xuICAgIHN0cmlrZXMgPSBldmVudERhdGEuaG9tZVN0cmlrZXM7XG4gIH1cblxuICBpZiAoZXZlbnREYXRhLmhhbGZJbm5pbmdPdXRzID09PSBvdXRzIC0gMSAmJiBldmVudERhdGEuYXRCYXRCYWxscyA9PT0gYmFsbHMgLSAxICYmIGV2ZW50RGF0YS5hdEJhdFN0cmlrZXMgPT09IHN0cmlrZXMgLSAxICYmIGV2ZW50RGF0YS5iYXNlcnVubmVyQ291bnQgPT09IGJhc2VzIC0gMSkge1xuICAgIGFuYWx5c2lzLm1heGltdW1CbGFzZWJhbGwgPSB0cnVlO1xuICB9XG59O1xuXG52YXIgY2hlY2tTY29yZVVwZGF0ZSA9IGZ1bmN0aW9uIGNoZWNrU2NvcmVVcGRhdGUoYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgX2V2ZW50RGF0YSRzY29yZVVwZGF0O1xuXG4gIHZhciBzY29yZVVwZGF0ZSA9IGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJHNjb3JlVXBkYXQgPSBldmVudERhdGEuc2NvcmVVcGRhdGUpID09PSBudWxsIHx8IF9ldmVudERhdGEkc2NvcmVVcGRhdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRzY29yZVVwZGF0LnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHNjb3JlVXBkYXRlKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCAvIHJ1bnM/IHNjb3JlLyk7XG4gICAgYW5hbHlzaXMudW5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIoc2NvcmVVcGRhdGUsIG51bGwsIC8gdW5ydW5zPyBzY29yZS8pO1xuICB9XG59O1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcbiAgY2hlY2tTY29yZVVwZGF0ZShhbmFseXNpcywgZXZlbnREYXRhKTtcbiAgY2hlY2tNYXhpbXVtQmxhc2ViYWxsKGFuYWx5c2lzLCBldmVudERhdGEpOyAvLyBjaGVjayBmb3Igd2hldGhlciBhIGJhdHRlciBqdXN0IHNob3dlZCB1cCB0byBiYXRcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2JhdHRpbmcgZm9yJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmJhdHRlclVwID0gdHJ1ZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdhbWVTdGF0dXMgPSByZXF1aXJlKCcuL2dhbWUtc3RhdHVzJyk7XG5cbnZhciBvdXRzID0gcmVxdWlyZSgnLi9vdXRzJyk7XG5cbnZhciBoaXRzID0gcmVxdWlyZSgnLi9oaXRzJyk7XG5cbnZhciBzdGVhbHMgPSByZXF1aXJlKCcuL3N0ZWFscycpO1xuXG52YXIgd2Fsa3MgPSByZXF1aXJlKCcuL3dhbGtzJyk7XG5cbnZhciBzcGVjaWFsID0gcmVxdWlyZSgnLi9zcGVjaWFsJyk7XG5cbnZhciBtaXNjID0gcmVxdWlyZSgnLi9taXNjJyk7XG5cbnZhciBiYXNlUnVubmVycyA9IHJlcXVpcmUoJy4vYmFzZS1ydW5uZXJzJyk7XG4vKlxuICogc2V0cyBhbGwga25vd24gKGFrYSBpbXBsZW1lbnRlZCkgYW5hbHlzaXMgcmVzdWx0cyB0byB0aGVpciBkZWZhdWxzXG4gKiByZXR1cm4gYW4gb2JqZWN0IHdpdGggdGhlIHByb3BzOlxuICpcbiAqIGlkOiBzdHJpbmcgfHwgdW5kZWZpbmVkXG4gKiAgIC0gdGhlIGdhbWUgZXZlbnQgSURcbiAqXG4gKiBydW5zU2NvcmVkOiBudW1iZXJcbiAqICAgLSBob3cgbWFueSBydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5XG4gKlxuICogdW5ydW5zU2NvcmVkOiBudW1iZXJcbiAqICAgLSBob3cgbWFueSB1bnJ1bnMgd2VyZSBzY29yZWQgb24gdGhlIHBsYXlcbiAqXG4gKiBiYXR0ZXJVcDogYm9vbGVhblxuICogICAtIHdoZXRoZXIgYSBiYXR0ZXIganVzdCBzaG93ZWQgdXAgdG8gYmF0XG4gKlxuICogZ2FtZVN0YXR1czogbnVsbCB8fCBzdHJpbmdcbiAqICAgLSB3aWxsIGJlIG51bGwgb3Igb25lIG9mOlxuICogICAtIGJlZm9yZUZpcnN0UGl0Y2gsIHdoZW4gdGhlIGZpcnN0IHBpdGNoIGhhc24ndCBiZWVuIHRocm93biB5ZXRcbiAqICAgLSBmaXJzdEhhbGZJbm5pbmdTdGFydCwgd2hlbiB0aGUgZmlyc3QgaGFsZiBvZiBhbiBpbm5pbmcgaXMgc3RhcnRpbmdcbiAqICAgLSBzZWNvbmRIYWxmSW5uaW5nU3RhcnQsIHdoZW4gdGhlIHNlY29uZCBoYWxmIG9mIGFuIGlubmluZyBpcyBzdGFydGluZ1xuICogICAtIGhhbGZJbm5pbmdFbmQsIHdoZW4gYW55IGhhbGYgb2YgYW4gaW5uaW5nIGlzIGVuZGluZyBvbiB0aGUgcGxheVxuICogICAtIGdhbWVFbmQsIHdoZW4gdGhlIGdhbWUgaGFzIGVuZGVkXG4gKiAgIC0gaW5uaW5nUmV3aW5kLCB3aGVuIHRoZSBzYWxtb24gc3dpbSB1cHN0cmVhbVxuICpcbiAqIG91dDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhbiBvdXQgb24gdGhlIHBsYXlcbiAqIG91dE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0ga2luZDogbnVsbCB8fCBzdHJpbmdcbiAqICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgIC0gZmx5XG4gKiAgICAgLSBncm91bmRcbiAqICAgICAtIHN0cmlrZVxuICogICAgIC0gY2F1Z2h0U3RlYWxpbmdcbiAqICAgICAtIHVuc3BlY2lmaWVkIChhcyB5b3Ugc29tZXRpbWVzIHNlZSB3aXRoIHNhY3JpZmljZSBvdXRzKVxuICogICAtIHNhY3JpZmljZTogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoZSBvdXQgd2FzIGEgc2FjcmlmaWNlXG4gKiAgIC0gc2FjcmlmaWNlTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gKiAgICAgLSBraW5kOiBzdHJpbmcgfHwgbnVsbFxuICogICAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAgIC0gYWR2YW5jZVxuICogICAgICAgLSBzY29yZVxuICogICAtIGZyZWVSZWZpbGw6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiBiYXR0ZXIgdXNlZCB0aGVpciBmcmVlIHJlZmlsbCBvbiB0aGUgcGxheVxuICpcbiAqIGhpdDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhIGhpdCBvbiB0aGUgcGxheVxuICogaGl0TWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBraW5kOiBudWxsIHx8IHN0cmluZ1xuICogICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgLSBzaW5nbGVcbiAqICAgICAtIGRvdWJsZVxuICogICAgIC0gdHJpcGxlXG4gKiAgICAgLSBob21lUnVuXG4gKiAgICAgLSBncmFuZFNsYW1cbiAqICAgLSBiaWdCdWNrZXQ6IGJvb2xlYW5cbiAqICAgICAtIHdoZXRoZXIgYSBCaWcgQnVja2V0IHdhcyBhY3RpdmF0ZWQgb24gdGhlIHBsYXlcbiAqXG4gKiBzdGVhbDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhbiBhdHRlbXB0ZWQgc3RlYWwgb24gdGhlIHBsYXlcbiAqIHN0ZWFsTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBzdWNjZXNzOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gdGhpZWYgbm90IGNhdWdodCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiAgIC0gYmFzZVN0b2xlbjogbnVsbCB8fCBudW1iZXJcbiAqICAgICAtIHRoZSBiYXNlIHdoaWNoIHdhcyBzdG9sZW4gKDAtaW5kZXhlZClcbiAqXG4gKiB3YWxrOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGEgd2FsayBvbiB0aGUgcGxheVxuICogd2Fsa01ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0gbWluZFRyaWNrOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gdGhlIHBpdGNoZXMgdXNlZCBhIG1pbmQgdHJpY2sgdG8gdHVybiB0aGUgd2FsayBpbnRvIGFcbiAqICAgICAgIHN0cmlrZW91dFxuICpcbiAqIHNwZWNpYWw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgd2FzIGEgc3BlY2lhbCBldmVudCBvbiB0aGUgcGxheVxuICogc3BlY2lhbE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0ga2luZDogbnVsbCB8fCBzdHJpbmdcbiAqICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgIC0gYmxvb2RyYWluXG4gKiAgICAgLSBpc1BhcnR5aW5nXG4gKiAgICAgLSByZXZlcmJcbiAqICAgICAtIGJpcmRzQ2lyY2xlXG4gKiAgICAgLSBiaXJkc1BlY2tlZFxuICogICAgIC0ganVzdEJpcmRzXG4gKiAgICAgLSBhbGxlcmdpY1JlYWN0aW9uXG4gKiAgICAgLSBpbmNpbmVyYXRlZFxuICogICAgIC0gYmVjYW1lTWFnbWF0aWNcbiAqICAgICAtIGZlZWRiYWNrXG4gKiAgICAgLSBlbGVjdHJpY2l0eVxuICogICAgIC0gdW5zdGFibGVcbiAqICAgICAtIGZsaWNrZXJpbmdcbiAqICAgICAtIGNvbnN1bWVyc0F0dGFja1xuICogICAgIC0gc2FsbW9uXG4gKiAgIC0gZGV0YWlsczogb2JqZWN0LCB3aXRoIHByb3BzIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiBldmVudFxuICpcbiAqIGJhc2VSdW5uZXJzOiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzLCByZXByZXNlbnRpbmcgYmFzZXNcbiAqICAgLSBmaXJzdFxuICogICAtIHNlY29uZFxuICogICAtIHRoaXJkXG4gKiAgIC0gZm91cnRoXG4gKiAgIC0gaWYgdGhlcmUgaXMgYSBiYXNlcnVubmVyIG9uIHRoZSBnaXZlbiBiYXNlLCB0aGUgdmFsdWUgZm9yIHRoYXQgYmFzZVxuICogICAgIHdpbGwgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wczpcbiAqICAgICAtIHBsYXllck5hbWVcbiAqICAgICAtIHBsYXllcklkXG4gKlxuICogbWF4aW11bUJsYXNlYmFsbDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB3ZSdyZSBhdCBNQVhJTVVNIEJMQVNFQkFMTFxuICovXG5cblxudmFyIGluaXRBbmFseXNpcyA9IGZ1bmN0aW9uIGluaXRBbmFseXNpcyhldmVudERhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogZXZlbnREYXRhLmlkIHx8IGV2ZW50RGF0YS5faWQsXG4gICAgZ2FtZVN0YXR1czogbnVsbCxcbiAgICBydW5zU2NvcmVkOiAwLFxuICAgIHVucnVuc1Njb3JlZDogMCxcbiAgICBiYXR0ZXJVcDogZmFsc2UsXG4gICAgb3V0OiBmYWxzZSxcbiAgICBvdXRNZXRhOiB7XG4gICAgICBraW5kOiBudWxsLFxuICAgICAgc2FjcmlmaWNlOiBmYWxzZSxcbiAgICAgIHNhY3JpZmljZU1ldGE6IHtcbiAgICAgICAga2luZDogbnVsbFxuICAgICAgfSxcbiAgICAgIGZyZWVSZWZpbGw6IGZhbHNlXG4gICAgfSxcbiAgICBoaXQ6IGZhbHNlLFxuICAgIGhpdE1ldGE6IHtcbiAgICAgIGtpbmQ6IG51bGwsXG4gICAgICBiaWdCdWNrZXQ6IGZhbHNlXG4gICAgfSxcbiAgICBzdGVhbDogZmFsc2UsXG4gICAgc3RlYWxNZXRhOiB7XG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgYmFzZVN0b2xlbjogbnVsbFxuICAgIH0sXG4gICAgd2FsazogZmFsc2UsXG4gICAgd2Fsa01ldGE6IHtcbiAgICAgIG1pbmRUcmljazogZmFsc2VcbiAgICB9LFxuICAgIHNwZWNpYWw6IGZhbHNlLFxuICAgIHNwZWNpYWxNZXRhOiB7XG4gICAgICBraW5kOiBudWxsXG4gICAgfSxcbiAgICBiYXNlUnVubmVyczoge1xuICAgICAgZmlyc3Q6IHt9LFxuICAgICAgc2Vjb25kOiB7fSxcbiAgICAgIHRoaXJkOiB7fSxcbiAgICAgIGZvdXJ0aDoge31cbiAgICB9LFxuICAgIG1heGltdW1CbGFzZWJhbGw6IGZhbHNlXG4gIH07XG59O1xuXG52YXIgYW5hbHl6ZUdhbWVFdmVudCA9IGZ1bmN0aW9uIGFuYWx5emVHYW1lRXZlbnQoZXZlbnREYXRhKSB7XG4gIGlmICghZXZlbnREYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgYW5hbHlzaXMgPSBpbml0QW5hbHlzaXMoZXZlbnREYXRhKTtcbiAgdmFyIGNoZWNrZXJzID0gW2dhbWVTdGF0dXMsIG91dHMsIGhpdHMsIHdhbGtzLCBzdGVhbHMsIHNwZWNpYWwsIG1pc2MsIGJhc2VSdW5uZXJzXTtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9jaGVja2VycyA9IGNoZWNrZXJzOyBfaSA8IF9jaGVja2Vycy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgY2hlY2tlciA9IF9jaGVja2Vyc1tfaV07XG4gICAgY2hlY2tlci5jaGVjayhhbmFseXNpcywgZXZlbnREYXRhKTtcbiAgfVxuXG4gIHJldHVybiBhbmFseXNpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbmFseXplR2FtZUV2ZW50OiBhbmFseXplR2FtZUV2ZW50XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2ZseW91dCcpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZmx5JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JvdW5kIG91dCcpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZ3JvdW5kJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc3RyaWtlcyBvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ3N0cmlrZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2ZpZWxkZXJcXCdzIGNob2ljZScpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZmllbGRlcnNDaG9pY2UnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdhIGRvdWJsZSBwbGF5JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdkb3VibGVQbGF5JztcbiAgfVxuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignc2FjcmlmaWNlJykgPj0gMCkge1xuICAgIC8vIHRoaXMgbWF5IGFscmVhZHkgYmUgYSBncm91bmQvZmx5b3V0LCBvciBpdHMgdW5zcGVjaWZpZWRcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSBhbmFseXNpcy5vdXRNZXRhLmtpbmQgfHwgJ3Vuc3BlY2lmaWVkJztcbiAgICBhbmFseXNpcy5vdXRNZXRhLnNhY3JpZmljZSA9IHRydWU7IC8vIGNoZWNrIGlmIHNvbWVvbmUgc2NvcmVkIG9yIGFkdmFuY2VkIG9uIHRoZSBzYWNyaWZpY2VcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignc2NvcmVzJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2VNZXRhLmtpbmQgPSAnc2NvcmUnO1xuXG4gICAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBhcmUgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcblxuICAgIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2FkdmFuY2UnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLnNhY3JpZmljZU1ldGEua2luZCA9ICdhZHZhbmNlJztcbiAgICB9XG4gIH1cblxuICBpZiAoYW5hbHlzaXMub3V0TWV0YS5raW5kKSB7XG4gICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcblxuICAgIGlmICgoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhhbGZJbm5pbmdPdXRzKSA9PT0gMCkge1xuICAgICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdoYWxmSW5uaW5nRW5kJztcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2ZyZWUgcmVmaWxsJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5mcmVlUmVmaWxsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3VzZXMgYSBtaW5kIHRyaWNrJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5taW5kVHJpY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignYmxvb2RkcmFpbicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2Jsb29kZHJhaW4nO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdpcyBwYXJ0eWluZycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2lzUGFydHlpbmcnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdyZXZlcmInKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdyZXZlcmInO1xuICB9IGVsc2UgaWYgKCAvLyB0aGlzIGNoZWNrIGhhcyB0byBjb21lIGJlZm9yZSBiaXJkcyBjaXJjbGUsIGJlY2F1c2UgdGhlIHRleHRcbiAgLy8gJ3RoZSBiaXJkcyBjaXJjbGUnIGlzIHByZXNlbnQgaW4gYm90aCBjYXNlc1xuICB1cGRhdGUuaW5kZXhPZigndGhlIGJpcmRzIHBlY2tlZCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JpcmRzUGVja2VkJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGJpcmRzIGNpcmNsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JpcmRzQ2lyY2xlJztcbiAgfSBlbHNlIGlmICggLy8gdGhpcyBpcyB0byBjYXB0dXJlIGFueSBvdGhlciBub24tcGVja2luZyAmIG5vbi1jaXJjbGluZyBiaXJkaW5lc3NcbiAgdXBkYXRlLmluZGV4T2YoJ2JpcmRzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnanVzdEJpcmRzJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaGFkIGFuIGFsbGVyZ2ljIHJlYWN0aW9uJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYWxsZXJnaWNSZWFjdGlvbic7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3JvZ3VlIHVtcGlyZSBpbmNpbmVyYXRlZCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2luY2luZXJhdGVkJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYmVjYW1lIG1hZ21hdGljJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmVjYW1lTWFnbWF0aWMnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdmZWVkYmFjaycpID49IDAgJiYgKHVwZGF0ZS5pbmRleE9mKCdyZWFsaXR5IGZsaWNrZXJzJykgPj0gMCB8fCB1cGRhdGUuaW5kZXhPZignc3dpdGNoZWQgdGVhbXMnKSA+PSAwKSkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZmVlZGJhY2snO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCd0aGUgZWxlY3RyaWNpdHkgemFwcycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2VsZWN0cmljaXR5JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgbm93IHVuc3RhYmxlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAndW5zdGFibGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdpcyBub3cgZmxpY2tlcmluZycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2ZsaWNrZXJpbmcnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdjb25zdW1lcnMgYXR0YWNrJykgPj0gMCkge1xuICAgIGlmICh1cGRhdGUuaW5kZXhPZignZGVmZW5kcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnY29uc3VtZXJzQXR0YWNrRGVmZW5kZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2NvbnN1bWVyc0F0dGFjayc7XG4gICAgfVxuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzYWxtb24gc3dpbSB1cHN0cmVhbScpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3NhbG1vbic7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdpbm5pbmdSZXdpbmQnOyAvLyBmaXJzdCwgZ3JhYiBhbGwgdGhlIHNlbnRlbmNlcyB3aXRoIHdoaWNoIHRlYW0gbG9zdCBob3cgbWFueSBydW5zXG5cbiAgICB2YXIgdGVhbXMgPSB1cGRhdGUubWF0Y2goLyhcXGQrKFxcLlxcZCspPykgb2YgdGhlIC4qJ3MgcnVucyBhcmUgbG9zdC9nKTtcblxuICAgIGlmICh0ZWFtcykge1xuICAgICAgdmFyIHJ1bnNTdG9sZW4gPSB0ZWFtcy5tYXAoZnVuY3Rpb24gKHRlYW0pIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2V0TnVtYmVyKHRlYW0sIG51bGwsIG51bGwpIHx8IDA7XG4gICAgICB9KTtcbiAgICAgIHZhciBydW5zU3RvbGVuRnJvbSA9IHRlYW1zLm1hcChmdW5jdGlvbiAodGVhbSkge1xuICAgICAgICByZXR1cm4gdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdGVhbSwgL29mIHRoZSAvLCAvJ3MgcnVucy8pO1xuICAgICAgfSk7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgICBydW5zU3RvbGVuOiBydW5zU3RvbGVuLFxuICAgICAgICBydW5zU3RvbGVuRnJvbTogcnVuc1N0b2xlbkZyb21cbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdydW5zIGFyZSBvdmVyZmxvd2luZycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3J1bnNPdmVyZmxvd2luZyc7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNHYWluZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLyB1bnJ1bnMvKSxcbiAgICAgIHJ1bnNPdmVyZmxvd2luZ0ZvcjogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvXFxuLywgLyBnYWluLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzb2xhciBwYW5lbHMgYWJzb3JiJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAncnVuc0NvbGxlY3RlZCc7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNDb2xsZWN0ZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLyBydW5zIGFyZSBjb2xsZWN0ZWQvKSxcbiAgICAgIHJ1bnNDb2xsZWN0ZWRGcm9tOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9zYXZlZCBmb3IgdGhlIC8sIC8ncyBuZXh0IGdhbWUvKVxuICAgIH07XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3N1biAyIHNtaWxlcycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3N1bjInO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zQ29sbGVjdGVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8hIHN1biAyIHNtaWxlcy8pLFxuICAgICAgd2luU2V0VXBvbjogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc2V0IGEgd2luIHVwb24gdGhlIC8sIC9cXC4vKVxuICAgIH07XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2JsYWNrIGhvbGUgc3dhbGxvd3MnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdibGFja0hvbGUnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zQ29sbGVjdGVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIC9jb2xsZWN0IC8sIC8hLyksXG4gICAgICB3aW5Td2FsbG93ZWRGcm9tOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9zd2FsbG93cyB0aGUgcnVucyBhbmQgYSAvLCAvIHdpbi4vKVxuICAgIH07IC8vIHNlZSBpZiBjYXJjaW5pemF0aW9uIHRyaWdnZXJlZCBieSB0aGUgYmxhY2sgaG9sZVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCd0aGUgYmFsdGltb3JlIGNyYWJzIHN0ZWFsJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscy5wbGF5ZXJTdG9sZW4gPSB1dGlsLmdldFBsYXllcih1cGRhdGUsIC9jcmFicyBzdGVhbCAvLCAvIGZvciB0aGUgcmVtYWluZGVyLyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdncmluZCByYWlsJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZ3JpbmRSYWlsJztcbiAgICB2YXIgdHJpY2tzID0gdXRpbC5nZXRTa2F0ZVRyaWNrcyh1cGRhdGUpO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHBsYXllcjogdXRpbC5nZXRQbGF5ZXIodXBkYXRlLCAvXi8sIC8gaG9wcyBvbi8pXG4gICAgfSwgdHJpY2tzKTtcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignc2FmZSEnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzKSwge30sIHtcbiAgICAgICAgZ3JpbmRTdWNjZXNzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3V0IVxuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyksIHt9LCB7XG4gICAgICAgIGdyaW5kU3VjY2VzczogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdyYWlsQmFpbCc7XG4gICAgfVxuICB9IC8vIGlmIHdlIGZvdW5kIHNvbWV0aGluZywgdGhlbjpcblxuXG4gIGlmIChhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3N0ZWFsJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnN0ZWFsID0gdHJ1ZTtcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignY2F1Z2h0JykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnY2F1Z2h0U3RlYWxpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyA9IHRydWU7XG4gICAgfSAvLyBiYXNlU3RvbGVuIGlzIDAtaW5kZXhlZFxuXG5cbiAgICBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKmZpcnN0LykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDA7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qc2Vjb25kLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDE7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qdGhpcmQvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMjtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipmb3VydGgvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMzsgLy8gdGhpcyBtYXkgaGF2ZSBiZWVuIGEgcnVuIGlmIHRoZXJlIGFyZSA0IGJhc2VzIGluIHBsYXlcblxuICAgICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmF0dGVyKSAhPT0gbnVsbCAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlCYXNlcykgPT09IDQpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5QmF0dGVyKSAhPT0gbnVsbCAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXNlcykgPT09IDQpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgYXJlIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG5cbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipob21lLykgIT09IC0xKSB7XG4gICAgICAvLyBzZWUgaWYgaG9tZSBvciBhd2F5IHN0b2xlIHRoZSBiYXNlXG4gICAgICBpZiAoKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmF0dGVyKSAhPT0gbnVsbCkge1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheUJhc2VzKSAtIDEgfHwgMztcbiAgICAgIH0gZWxzZSBpZiAoKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2FCYXR0ZXIpICE9PSBudWxsKSB7XG4gICAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmFzZXMpIC0gMSB8fCAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb2xkZXIgZ2FtZXMgZG9uJ3QgaGF2ZSB0aGVzZSBmaWVsZHMsIG9yIG1heSBoYXZlIGJvdGhcbiAgICAgICAgLy8gaG9tZSBhbmQgYXdheSBiYXR0ZXJzIGZpbGxlZCBpbjsganVzdCBhc3N1bWVkIGhvbWUgYmFzZVxuICAgICAgICAvLyBpcyBiYXNlICMzIGluIHRob3NlIGNhc2VzLCBpIGd1ZXNzXG4gICAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMztcbiAgICAgIH1cblxuICAgICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgYXJlIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG5cbiAgICB9IC8vIGNoZWNrIGZvciBibGFzZXJ1bm5pbmcgc2NvcmVzIHByZSBzLTEyIChvdGhlcndpc2UgY2FwdHVyZWQgaW5cbiAgICAvLyBzcmMvbWlzYy5qcylcblxuXG4gICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgdXBkYXRlLmluZGV4T2YoJ2JsYXNlcnVubmluZycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcih1cGRhdGUsIC9zY29yZXMgLywgLyB3aXRoIGJsYXNlcnVubmluZy8pO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdldFVwZGF0ZVRleHQgPSBmdW5jdGlvbiBnZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSkge1xuICB2YXIgX2V2ZW50RGF0YSRsYXN0VXBkYXRlO1xuXG4gIHJldHVybiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkbGFzdFVwZGF0ZSA9IGV2ZW50RGF0YS5sYXN0VXBkYXRlKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGxhc3RVcGRhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkbGFzdFVwZGF0ZS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSBudW1iZXIgKHN1cHBvcnRzIHBvc2l0aXZlIGludGVnZXJzICYgZmxvYXRzKSxcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSByZWdleCBmb3IgbnVtYmVyc1xuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIHJlZ2V4IGZvciBudW1iZXJzXG4gKiB3aWxsIHJldHVybiBhIG51bWJlciBvciBudWxsXG4gKi9cblxuXG52YXIgZ2V0TnVtYmVyID0gZnVuY3Rpb24gZ2V0TnVtYmVyKHMsIHByZSwgcG9zdCkge1xuICB2YXIgbnVtID0gbnVsbDtcbiAgdmFyIG51bVJlZ2V4ID0gLygoXFxkKyk/KFxcLlxcZCspPykvO1xuXG4gIGlmICghcHJlKSB7XG4gICAgcHJlID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICBpZiAoIXBvc3QpIHtcbiAgICBwb3N0ID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHByZS5zb3VyY2UgKyBudW1SZWdleC5zb3VyY2UgKyBwb3N0LnNvdXJjZSk7XG4gIHZhciBtYXRjaGVzID0gcmVnZXhbU3ltYm9sLm1hdGNoXShzKTtcblxuICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgbnVtID0gTnVtYmVyKG1hdGNoZXNbMV0pIHx8IG51bTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgbWF0Y2ggYmV0d2VlbiBwcmUgYW5kIHBvc3RcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSBtYXRjaFxuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIG1hdGNoXG4gKiB3aWxsIHJldHVybiB0aGUgbWF0Y2gsIG9yIGFuIGVtcHR5IHN0cmluZ1xuICovXG5cblxudmFyIGdldE1hdGNoID0gZnVuY3Rpb24gZ2V0TWF0Y2gocywgcHJlLCBwb3N0KSB7XG4gIHZhciBtYXRjaFJlZ2V4ID0gLyguKikvO1xuXG4gIGlmICghcHJlKSB7XG4gICAgcHJlID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICBpZiAoIXBvc3QpIHtcbiAgICBwb3N0ID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHByZS5zb3VyY2UgKyBtYXRjaFJlZ2V4LnNvdXJjZSArIHBvc3Quc291cmNlKTtcbiAgdmFyIG1hdGNoZXMgPSByZWdleFtTeW1ib2wubWF0Y2hdKHMpO1xuXG4gIGlmIChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1sxXTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSB0ZWFtIG5hbWVcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSByZWdleCBmb3IgdGhlIHRlYW0gbmFtZVxuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIHJlZ2V4IHRoZSB0ZWFtIG5hbWVcbiAqIHdpbGwgcmV0dXJuICdob21lJyAnYXdheScgb3IgJydcbiAqL1xuXG5cbnZhciBnZXRUZWFtID0gZnVuY3Rpb24gZ2V0VGVhbShldmVudERhdGEsIHMsIHByZSwgcG9zdCkge1xuICB2YXIgdGVhbSA9IGdldE1hdGNoKHMsIHByZSwgcG9zdCk7XG5cbiAgaWYgKHRlYW0pIHtcbiAgICB0ZWFtID0gZXZlbnREYXRhLmhvbWVUZWFtTmlja25hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGVhbSA/ICdob21lJyA6ICdhd2F5JztcbiAgfVxuXG4gIHJldHVybiB0ZWFtO1xufTtcblxudmFyIHRpdGxlQ2FzZSA9IGZ1bmN0aW9uIHRpdGxlQ2FzZShzKSB7XG4gIGlmICghcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIDtcbiAgcmV0dXJuIHMuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbiAgICBpZiAod29yZCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHdvcmRbMF0udG9VcHBlckNhc2UoKSkuY29uY2F0KHdvcmQuc2xpY2UoMSkpO1xuICAgIH1cbiAgfSkuam9pbignICcpO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIHBsYXllciBuYW1lXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIHRoZSB0ZWFtIG5hbWVcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCB0aGUgdGVhbSBuYW1lXG4gKiB3aWxsIHJldHVybiB0aGUgcGxheWVyIG5hbWUgb3IgJydcbiAqL1xuXG5cbnZhciBnZXRQbGF5ZXIgPSBmdW5jdGlvbiBnZXRQbGF5ZXIocywgcHJlLCBwb3N0KSB7XG4gIHZhciBwbGF5ZXIgPSBnZXRNYXRjaChzLCBwcmUsIHBvc3QpO1xuICByZXR1cm4gdGl0bGVDYXNlKHBsYXllcik7XG59O1xuXG52YXIgZ2V0U2thdGVUcmlja3MgPSBmdW5jdGlvbiBnZXRTa2F0ZVRyaWNrcyh1cGRhdGUpIHtcbiAgdmFyIGdyaW5kVHJpY2ssIGdyaW5kU2NvcmUsIGxhbmRUcmljaywgbGFuZFNjb3JlO1xuICB2YXIgdHJpY2tzID0gdXBkYXRlLm1hdGNoKC8gYSAoLiopIFxcKChcXGQrKS9nKTsgLy8gZ3JpbmQgdHJpY2tcblxuICBpZiAodHJpY2tzWzBdKSB7XG4gICAgZ3JpbmRUcmljayA9IHRpdGxlQ2FzZShnZXRNYXRjaCh0cmlja3NbMF0sIC9hIC8sIC8gXFwoLykpO1xuICAgIGdyaW5kU2NvcmUgPSBnZXROdW1iZXIodHJpY2tzWzBdLCAvXFwoLywgLyQvKTtcbiAgfSAvLyBsYW5kIHRyaWNrXG5cblxuICBpZiAodHJpY2tzWzFdKSB7XG4gICAgbGFuZFRyaWNrID0gdGl0bGVDYXNlKGdldE1hdGNoKHRyaWNrc1sxXSwgL2EgLywgLyBcXCgvKSk7XG4gICAgbGFuZFNjb3JlID0gZ2V0TnVtYmVyKHRyaWNrc1sxXSwgL1xcKC8sIC8kLyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdyaW5kVHJpY2s6IGdyaW5kVHJpY2ssXG4gICAgZ3JpbmRTY29yZTogZ3JpbmRTY29yZSxcbiAgICBsYW5kVHJpY2s6IGxhbmRUcmljayxcbiAgICBsYW5kU2NvcmU6IGxhbmRTY29yZVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldFVwZGF0ZVRleHQ6IGdldFVwZGF0ZVRleHQsXG4gIGdldE51bWJlcjogZ2V0TnVtYmVyLFxuICBnZXRUZWFtOiBnZXRUZWFtLFxuICBnZXRQbGF5ZXI6IGdldFBsYXllcixcbiAgZ2V0U2thdGVUcmlja3M6IGdldFNrYXRlVHJpY2tzXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2RyYXdzIGEgd2FsaycpID49IDApIHtcbiAgICBhbmFseXNpcy53YWxrID0gdHJ1ZTsgLy8gY2hlY2sgaWYgYW55IHJ1bnMgd2VyZSBzY29yZWQgb24gdGhlIHBsYXkgcHJpb3IgdG8gczEyXG5cbiAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiB1cGRhdGUuaW5kZXhPZignc2NvcmVzJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG4gICAgLy8gY2hlY2sgZm9yIG1pbmQgdHJpY2sgc2hlbmFuaWdhbnNcblxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCd1c2VzIGEgbWluZCB0cmljaycpKSB7XG4gICAgICBhbmFseXNpcy53YWxrTWV0YS5taW5kVHJpY2sgPSB0cnVlO1xuXG4gICAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3N0cmlrZXMgb3V0JykpIHtcbiAgICAgICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcbiAgICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ3N0cmlrZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIi8qKlxuICogQGF1dGhvciBLYXRlXG4gKi9cblxudmFyIHRyYWNlcnkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb207XG5cbiAgICBmdW5jdGlvbiBzZXRSYW5kb20obmV3UmFuZG9tKSB7XG4gICAgICAgIHJhbmRvbSA9IG5ld1JhbmRvbTtcbiAgICB9XG5cbiAgICB2YXIgVHJhY2VyeU5vZGUgPSBmdW5jdGlvbihwYXJlbnQsIGNoaWxkSW5kZXgsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG5cbiAgICAgICAgLy8gTm8gaW5wdXQ/IEFkZCBhbiBlcnJvciwgYnV0IGNvbnRpbnVlIGFueXdheXNcbiAgICAgICAgaWYgKHNldHRpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiRW1wdHkgaW5wdXQgZm9yIG5vZGVcIik7XG4gICAgICAgICAgICBzZXR0aW5ncy5yYXcgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHJvb3Qgbm9kZSBvZiBhbiBleHBhbnNpb24sIGl0IHdpbGwgaGF2ZSB0aGUgZ3JhbW1hciBwYXNzZWQgYXMgdGhlICdwYXJlbnQnXG4gICAgICAgIC8vICBzZXQgdGhlIGdyYW1tYXIgZnJvbSB0aGUgJ3BhcmVudCcsIGFuZCBzZXQgYWxsIG90aGVyIHZhbHVlcyBmb3IgYSByb290IG5vZGVcbiAgICAgICAgaWYgKCBwYXJlbnQgaW5zdGFuY2VvZiB0cmFjZXJ5LkdyYW1tYXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhbW1hciA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICAgICAgdGhpcy5jaGlsZEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhbW1hciA9IHBhcmVudC5ncmFtbWFyO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRJbmRleCA9IGNoaWxkSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJhdyA9IHNldHRpbmdzLnJhdztcbiAgICAgICAgdGhpcy50eXBlID0gc2V0dGluZ3MudHlwZTtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLmdyYW1tYXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGdyYW1tYXIgc3BlY2lmaWVkIGZvciB0aGlzIG5vZGVcIiwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiTm9kZSgnXCIgKyB0aGlzLnJhdyArIFwiJyBcIiArIHRoaXMudHlwZSArIFwiIGQ6XCIgKyB0aGlzLmRlcHRoICsgXCIpXCI7XG4gICAgfTtcblxuICAgIC8vIEV4cGFuZCB0aGUgbm9kZSAod2l0aCB0aGUgZ2l2ZW4gY2hpbGQgcnVsZSlcbiAgICAvLyAgTWFrZSBjaGlsZHJlbiBpZiB0aGUgbm9kZSBoYXMgYW55XG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLmV4cGFuZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRSdWxlLCBwcmV2ZW50UmVjdXJzaW9uKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIC8vIFNldCB0aGUgcnVsZSBmb3IgbWFraW5nIGNoaWxkcmVuLFxuICAgICAgICAvLyBhbmQgZXhwYW5kIGl0IGludG8gc2VjdGlvblxuICAgICAgICB0aGlzLmNoaWxkUnVsZSA9IGNoaWxkUnVsZTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRSdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IHRyYWNlcnkucGFyc2UoY2hpbGRSdWxlKTtcblxuICAgICAgICAgICAgLy8gQWRkIGVycm9ycyB0byB0aGlzXG4gICAgICAgICAgICBpZiAoc2VjdGlvbnMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmNvbmNhdChzZWN0aW9ucy5lcnJvcnMpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0gbmV3IFRyYWNlcnlOb2RlKHRoaXMsIGksIHNlY3Rpb25zW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRSZWN1cnNpb24pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uZXhwYW5kKHByZXZlbnRSZWN1cnNpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGluIHRoZSBmaW5pc2hlZCB0ZXh0XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgKz0gdGhpcy5jaGlsZHJlbltpXS5maW5pc2hlZFRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBub3JtYWwgb3BlcmF0aW9uLCB0aGlzIHNob3VsZG4ndCBldmVyIGhhcHBlblxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIk5vIGNoaWxkIHJ1bGUgcHJvdmlkZWQsIGNhbid0IGV4cGFuZCBjaGlsZHJlblwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGNoaWxkIHJ1bGUgcHJvdmlkZWQsIGNhbid0IGV4cGFuZCBjaGlsZHJlblwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeHBhbmQgdGhpcyBydWxlIChwb3NzaWJseSBjcmVhdGluZyBjaGlsZHJlbilcbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuZXhwYW5kID0gZnVuY3Rpb24ocHJldmVudFJlY3Vyc2lvbikge1xuXG4gICAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuc2lvbkVycm9ycyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBUeXBlcyBvZiBub2Rlc1xuICAgICAgICAgICAgLy8gLTE6IHJhdywgbmVlZHMgcGFyc2luZ1xuICAgICAgICAgICAgLy8gIDA6IFBsYWludGV4dFxuICAgICAgICAgICAgLy8gIDE6IFRhZyAoXCIjc3ltYm9sLm1vZC5tb2QyLm1vZDMjXCIgb3IgXCIjW3B1c2hUYXJnZXQ6cHVzaFJ1bGVdc3ltYm9sLm1vZFwiKVxuICAgICAgICAgICAgLy8gIDI6IEFjdGlvbiAoXCJbcHVzaFRhcmdldDpwdXNoUnVsZV0sIFtwdXNoVGFyZ2V0OlBPUF1cIiwgbW9yZSBpbiB0aGUgZnV0dXJlKVxuXG4gICAgICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgICAgICAvLyBSYXcgcnVsZVxuICAgICAgICAgICAgY2FzZSAtMTpcblxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQ2hpbGRyZW4odGhpcy5yYXcsIHByZXZlbnRSZWN1cnNpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBwbGFpbnRleHQsIGRvIG5vdGhpbmcgYnV0IGNvcHkgdGV4dCBpbnRvIGZpbnNpaGVkIHRleHRcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IHRoaXMucmF3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBUYWdcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0byBmaW5kIGFueSBhY3Rpb25zLCBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBzeW1ib2wgaXNcbiAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zID0gW107XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkID0gdHJhY2VyeS5wYXJzZVRhZyh0aGlzLnJhdyk7XG5cbiAgICAgICAgICAgICAgICAvLyBCcmVhayBpbnRvIHN5bWJvbCBhY3Rpb25zIGFuZCBtb2RpZmllcnNcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbCA9IHBhcnNlZC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBwYXJzZWQubW9kaWZpZXJzO1xuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFsbCB0aGUgcHJlYWN0aW9ucyBmcm9tIHRoZSByYXcgc3ludGF4XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnNbaV0gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCBwYXJzZWQucHJlYWN0aW9uc1tpXS5yYXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5wb3N0YWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMucG9zdGFjdGlvbnNbaV0gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCBwYXJzZWQucG9zdGFjdGlvbnNbaV0ucmF3KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHVuZG8gYWN0aW9ucyBmb3IgYWxsIHByZWFjdGlvbnMgKHBvcHMgZm9yIGVhY2ggcHVzaClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVhY3Rpb25zW2ldLnR5cGUgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zLnB1c2godGhpcy5wcmVhY3Rpb25zW2ldLmNyZWF0ZVVuZG8oKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWN0aXZhdGUgYWxsIHRoZSBwcmVhY3Rpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByZWFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVhY3Rpb25zW2ldLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSB0aGlzLnJhdztcblxuICAgICAgICAgICAgICAgIC8vIEV4cGFuZCAocGFzc2luZyB0aGUgbm9kZSwgdGhpcyBhbGxvd3MgdHJhY2tpbmcgb2YgcmVjdXJzaW9uIGRlcHRoKVxuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUnVsZSA9IHRoaXMuZ3JhbW1hci5zZWxlY3RSdWxlKHRoaXMuc3ltYm9sLCB0aGlzLCB0aGlzLmVycm9ycyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZENoaWxkcmVuKHNlbGVjdGVkUnVsZSwgcHJldmVudFJlY3Vyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBtb2RpZmllcnNcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBVcGRhdGUgcGFyc2UgZnVuY3Rpb24gdG8gbm90IHRyaWdnZXIgb24gaGFzaHRhZ3Mgd2l0aGluIHBhcmVudGhlc2lzIHdpdGhpbiB0YWdzLFxuICAgICAgICAgICAgICAgIC8vICAgc28gdGhhdCBtb2RpZmllciBwYXJhbWV0ZXJzIGNhbiBjb250YWluIHRhZ3MgXCIjc3RvcnkucmVwbGFjZSgjcHJvdGFnb25pc3QjLCAjbmV3Q2hhcmFjdGVyIykjXCJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kaWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2ROYW1lID0gdGhpcy5tb2RpZmllcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZE5hbWUuaW5kZXhPZihcIihcIikgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnRXhwID0gL1xcKChbXildKylcXCkvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2RvOiBpZ25vcmUgYW55IGVzY2FwZWQgY29tbWFzLiAgRm9yIG5vdywgY29tbWFzIGFsd2F5cyBzcGxpdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSByZWdFeHAuZXhlYyh0aGlzLm1vZGlmaWVyc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMgfHwgcmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RQYXJhbXMgPSByZXN1bHRzWzFdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2ROYW1lID0gdGhpcy5tb2RpZmllcnNbaV0uc3Vic3RyaW5nKDAsIG1vZE5hbWUuaW5kZXhPZihcIihcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdGhpcy5ncmFtbWFyLm1vZGlmaWVyc1ttb2ROYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNaXNzaW5nIG1vZGlmaWVyP1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIk1pc3NpbmcgbW9kaWZpZXIgXCIgKyBtb2ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ICs9IFwiKCguXCIgKyBtb2ROYW1lICsgXCIpKVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBtb2QodGhpcy5maW5pc2hlZFRleHQsIG1vZFBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBwb3N0LWFjdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9zdGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0YWN0aW9uc1tpXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgICAgIC8vIEp1c3QgYSBiYXJlIGFjdGlvbj8gIEV4cGFuZCBpdCFcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG5ldyBOb2RlQWN0aW9uKHRoaXMsIHRoaXMucmF3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gTm8gdmlzaWJsZSB0ZXh0IGZvciBhbiBhY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBzb21lIHZpc2libGUgdGV4dCBmb3IgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHBlcmZvcm0gdGhlIGFjdGlvbj9cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJBbHJlYWR5IGV4cGFuZGVkIFwiICsgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuY2xlYXJFc2NhcGVDaGFycyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gdGhpcy5maW5pc2hlZFRleHQucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJET1VCTEVCQUNLU0xBU0hcIikucmVwbGFjZSgvXFxcXC9nLCBcIlwiKS5yZXBsYWNlKC9ET1VCTEVCQUNLU0xBU0gvZywgXCJcXFxcXCIpO1xuICAgIH07XG5cbiAgICAvLyBBbiBhY3Rpb24gdGhhdCBvY2N1cnMgd2hlbiBhIG5vZGUgaXMgZXhwYW5kZWRcbiAgICAvLyBUeXBlcyBvZiBhY3Rpb25zOlxuICAgIC8vIDAgUHVzaDogW2tleTpydWxlXVxuICAgIC8vIDEgUG9wOiBba2V5OlBPUF1cbiAgICAvLyAyIGZ1bmN0aW9uOiBbZnVuY3Rpb25OYW1lKHBhcmFtMCxwYXJhbTEpXSAoVE9ETyEpXG4gICAgZnVuY3Rpb24gTm9kZUFjdGlvbihub2RlLCByYXcpIHtcbiAgICAgICAgLypcbiAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIG5vZGUgZm9yIE5vZGVBY3Rpb25cIik7XG4gICAgICAgICBpZiAoIXJhdylcbiAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHJhdyBjb21tYW5kcyBmb3IgTm9kZUFjdGlvblwiKTtcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgICAgICB2YXIgc2VjdGlvbnMgPSByYXcuc3BsaXQoXCI6XCIpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHNlY3Rpb25zWzBdO1xuXG4gICAgICAgIC8vIE5vIGNvbG9uPyBBIGZ1bmN0aW9uIVxuICAgICAgICBpZiAoc2VjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAyO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb2xvbj8gSXQncyBlaXRoZXIgYSBwdXNoIG9yIGEgcG9wXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ydWxlID0gc2VjdGlvbnNbMV07XG4gICAgICAgICAgICBpZiAodGhpcy5ydWxlID09PSBcIlBPUFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgTm9kZUFjdGlvbi5wcm90b3R5cGUuY3JlYXRlVW5kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVBY3Rpb24odGhpcy5ub2RlLCB0aGlzLnRhcmdldCArIFwiOlBPUFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPIE5vdCBzdXJlIGhvdyB0byBtYWtlIFVuZG8gYWN0aW9ucyBmb3IgZnVuY3Rpb25zIG9yIFBPUHNcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIE5vZGVBY3Rpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBncmFtbWFyID0gdGhpcy5ub2RlLmdyYW1tYXI7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgLy8gc3BsaXQgaW50byBzZWN0aW9ucyAodGhlIHdheSB0byBkZW5vdGUgYW4gYXJyYXkgb2YgcnVsZXMpXG4gICAgICAgICAgICB0aGlzLnJ1bGVTZWN0aW9ucyA9IHRoaXMucnVsZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucnVsZU5vZGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucnVsZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgVHJhY2VyeU5vZGUoZ3JhbW1hciwgMCwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIHJhdyA6IHRoaXMucnVsZVNlY3Rpb25zW2ldXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBuLmV4cGFuZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJ1bGVzLnB1c2gobi5maW5pc2hlZFRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiBlc2NhcGUgY29tbWFzIHByb3Blcmx5XG4gICAgICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyh0aGlzLnRhcmdldCwgdGhpcy5maW5pc2hlZFJ1bGVzLCB0aGlzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBncmFtbWFyLnBvcFJ1bGVzKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBncmFtbWFyLmZsYXR0ZW4odGhpcy50YXJnZXQsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBOb2RlQWN0aW9uLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgKyBcIjpcIiArIHRoaXMucnVsZTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICsgXCI6UE9QXCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBcIigoc29tZSBmdW5jdGlvbikpXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCIoKFVua25vd24gQWN0aW9uKSlcIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTZXRzIG9mIHJ1bGVzXG4gICAgLy8gQ2FuIGFsc28gY29udGFpbiBjb25kaXRpb25hbCBvciBmYWxsYmFjayBzZXRzIG9mIHJ1bGVzZXRzKVxuICAgIGZ1bmN0aW9uIFJ1bGVTZXQoZ3JhbW1hciwgcmF3KSB7XG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xuICAgICAgICB0aGlzLmdyYW1tYXIgPSBncmFtbWFyO1xuICAgICAgICB0aGlzLmZhbGxvZmYgPSAxO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJhdykpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJ1bGVzID0gcmF3O1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyB8fCByYXcgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJ1bGVzID0gW3Jhd107XG4gICAgICAgIH0gZWxzZSBpZiAocmF3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBmb3IgY29uZGl0aW9uYWwgYW5kIGhpZXJhcmNoaWNhbCBydWxlIHNldHNcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFJ1bGVTZXQucHJvdG90eXBlLnNlbGVjdFJ1bGUgPSBmdW5jdGlvbihlcnJvcnMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJHZXQgcnVsZVwiLCB0aGlzLnJhdyk7XG4gICAgICAgIC8vIElzIHRoZXJlIGEgY29uZGl0aW9uYWw/XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbmFsUnVsZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ncmFtbWFyLmV4cGFuZCh0aGlzLmNvbmRpdGlvbmFsUnVsZSwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBkb2VzIHRoaXMgdmFsdWUgbWF0Y2ggYW55IG9mIHRoZSBjb25kaXRpb25hbHM/XG4gICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb25hbFZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMuY29uZGl0aW9uYWxWYWx1ZXNbdmFsdWVdLnNlbGVjdFJ1bGUoZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBpZiAodiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm8gcmV0dXJuZWQgdmFsdWU/XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyB0aGVyZSBhIHJhbmtlZCBvcmRlcj9cbiAgICAgICAgaWYgKHRoaXMucmFua2luZykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJhbmtpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMucmFua2luZy5zZWxlY3RSdWxlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RpbGwgbm8gcmV0dXJuZWQgdmFsdWU/XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UnVsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIFNlbGVjdCBmcm9tIHRoaXMgYmFzaWMgYXJyYXkgb2YgcnVsZXNcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBkaXN0cmlidXRpb24gZnJvbSB0aGUgZ3JhbW1hciBpZiB0aGVyZSBpcyBubyBvdGhlclxuICAgICAgICAgICAgdmFyIGRpc3RyaWJ1dGlvbiA9IHRoaXMuZGlzdHJpYnV0aW9uO1xuICAgICAgICAgICAgaWYgKCFkaXN0cmlidXRpb24pXG4gICAgICAgICAgICAgICAgZGlzdHJpYnV0aW9uID0gdGhpcy5ncmFtbWFyLmRpc3RyaWJ1dGlvbjtcblxuICAgICAgICAgICAgc3dpdGNoKGRpc3RyaWJ1dGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInNodWZmbGVcIjpcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNodWZmbGUgZGVza1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaHVmZmxlZERlY2sgfHwgdGhpcy5zaHVmZmxlZERlY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaHVmZmxlZERlY2sgPSBmeXNodWZmbGUoQXJyYXkuYXBwbHkobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIDogdGhpcy5kZWZhdWx0UnVsZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcChOdW1iZXIuY2FsbCwgTnVtYmVyKSwgdGhpcy5mYWxsb2ZmKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5zaHVmZmxlZERlY2sucG9wKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZWlnaHRlZFwiOlxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiV2VpZ2h0ZWQgZGlzdHJpYnV0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmFsbG9mZlwiOlxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiRmFsbG9mZiBkaXN0cmlidXRpb24gbm90IHlldCBpbXBsZW1lbnRlZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5wb3cocmFuZG9tKCksIHRoaXMuZmFsbG9mZikgKiB0aGlzLmRlZmF1bHRSdWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFVzZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlc1tpbmRleF0gPSArK3RoaXMuZGVmYXVsdFVzZXNbaW5kZXhdIHx8IDE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UnVsZXNbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JzLnB1c2goXCJObyBkZWZhdWx0IHJ1bGVzIGRlZmluZWQgZm9yIFwiICsgdGhpcyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfTtcblxuICAgIFJ1bGVTZXQucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXNlcykge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZ5c2h1ZmZsZShhcnJheSwgZmFsbG9mZikge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUsXG4gICAgICAgICAgICByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKHJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIFN5bWJvbCA9IGZ1bmN0aW9uKGdyYW1tYXIsIGtleSwgcmF3UnVsZXMpIHtcbiAgICAgICAgLy8gU3ltYm9scyBjYW4gYmUgbWFkZSB3aXRoIGEgc2luZ2xlIHZhbHVlLCBhbmQgYXJyYXksIG9yIGFycmF5IG9mIG9iamVjdHMgb2YgKGNvbmRpdGlvbnMvdmFsdWVzKVxuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5ncmFtbWFyID0gZ3JhbW1hcjtcbiAgICAgICAgdGhpcy5yYXdSdWxlcyA9IHJhd1J1bGVzO1xuXG4gICAgICAgIHRoaXMuYmFzZVJ1bGVzID0gbmV3IFJ1bGVTZXQodGhpcy5ncmFtbWFyLCByYXdSdWxlcyk7XG4gICAgICAgIHRoaXMuY2xlYXJTdGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuY2xlYXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIENsZWFyIHRoZSBzdGFjayBhbmQgY2xlYXIgYWxsIHJ1bGVzZXQgdXNhZ2VzXG4gICAgICAgIHRoaXMuc3RhY2sgPSBbdGhpcy5iYXNlUnVsZXNdO1xuXG4gICAgICAgIHRoaXMudXNlcyA9IFtdO1xuICAgICAgICB0aGlzLmJhc2VSdWxlcy5jbGVhclN0YXRlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucHVzaFJ1bGVzID0gZnVuY3Rpb24ocmF3UnVsZXMpIHtcbiAgICAgICAgdmFyIHJ1bGVzID0gbmV3IFJ1bGVTZXQodGhpcy5ncmFtbWFyLCByYXdSdWxlcyk7XG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChydWxlcyk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucG9wUnVsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5zZWxlY3RSdWxlID0gZnVuY3Rpb24obm9kZSwgZXJyb3JzKSB7XG4gICAgICAgIHRoaXMudXNlcy5wdXNoKHtcbiAgICAgICAgICAgIG5vZGUgOiBub2RlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJUaGUgcnVsZSBzdGFjayBmb3IgJ1wiICsgdGhpcy5rZXkgKyBcIicgaXMgZW1wdHksIHRvbyBtYW55IHBvcHM/XCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiKChcIiArIHRoaXMua2V5ICsgXCIpKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5zZWxlY3RSdWxlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuZ2V0QWN0aXZlUnVsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnNlbGVjdFJ1bGUoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5ydWxlc1RvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yYXdSdWxlcyk7XG4gICAgfTtcblxuICAgIHZhciBHcmFtbWFyID0gZnVuY3Rpb24ocmF3LCBzZXR0aW5ncykge1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRGcm9tUmF3T2JqKHJhdyk7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN5bWJvbHMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXlzW2ldXS5jbGVhclN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kcykge1xuXG4gICAgICAgIC8vIGNvcHkgb3ZlciB0aGUgYmFzZSBtb2RpZmllcnNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG1vZHMpIHtcbiAgICAgICAgICAgIGlmIChtb2RzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVyc1trZXldID0gbW9kc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmxvYWRGcm9tUmF3T2JqID0gZnVuY3Rpb24ocmF3KSB7XG5cbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMuc3ltYm9scyA9IHt9O1xuICAgICAgICB0aGlzLnN1YmdyYW1tYXJzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMucmF3KSB7XG4gICAgICAgICAgICAvLyBBZGQgYWxsIHJ1bGVzIHRvIHRoZSBncmFtbWFyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5yYXcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yYXcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XSA9IG5ldyBTeW1ib2wodGhpcywga2V5LCB0aGlzLnJhd1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbm9kZSBhbmQgc3Vibm9kZXNcbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVHJhY2VyeU5vZGUodGhpcywgMCwge1xuICAgICAgICAgICAgdHlwZSA6IC0xLFxuICAgICAgICAgICAgcmF3IDogcnVsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmV4cGFuZCA9IGZ1bmN0aW9uKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmNyZWF0ZVJvb3QocnVsZSk7XG4gICAgICAgIHJvb3QuZXhwYW5kKCk7XG4gICAgICAgIGlmICghYWxsb3dFc2NhcGVDaGFycylcbiAgICAgICAgICAgIHJvb3QuY2xlYXJFc2NhcGVDaGFycygpO1xuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24ocnVsZSwgYWxsb3dFc2NhcGVDaGFycykge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuZXhwYW5kKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpO1xuXG4gICAgICAgIHJldHVybiByb290LmZpbmlzaGVkVGV4dDtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zeW1ib2xzKTtcbiAgICAgICAgdmFyIHN5bWJvbEpTT04gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHN5bWJvbEpTT04ucHVzaCgnIFwiJyArIGtleSArICdcIiA6ICcgKyB0aGlzLnN5bWJvbHNba2V5XS5ydWxlc1RvSlNPTigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ7XFxuXCIgKyBzeW1ib2xKU09OLmpvaW4oXCIsXFxuXCIpICsgXCJcXG59XCI7XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBvciBwdXNoIHJ1bGVzXG4gICAgR3JhbW1hci5wcm90b3R5cGUucHVzaFJ1bGVzID0gZnVuY3Rpb24oa2V5LCByYXdSdWxlcywgc291cmNlQWN0aW9uKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldID0gbmV3IFN5bWJvbCh0aGlzLCBrZXksIHJhd1J1bGVzKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VBY3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0uaXNEeW5hbWljID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldLnB1c2hSdWxlcyhyYXdSdWxlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUucG9wUnVsZXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN5bWJvbHNba2V5XSlcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJDYW4ndCBwb3A6IG5vIHN5bWJvbCBmb3Iga2V5IFwiICsga2V5KTtcbiAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0ucG9wUnVsZXMoKTtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuc2VsZWN0UnVsZSA9IGZ1bmN0aW9uKGtleSwgbm9kZSwgZXJyb3JzKSB7XG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNba2V5XSkge1xuICAgICAgICAgICAgdmFyIHJ1bGUgPSB0aGlzLnN5bWJvbHNba2V5XS5zZWxlY3RSdWxlKG5vZGUsIGVycm9ycyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmFpbG92ZXIgdG8gYWx0ZXJuYXRpdmUgc3ViZ3JhbW1hcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YmdyYW1tYXJzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN1YmdyYW1tYXJzW2ldLnN5bWJvbHNba2V5XSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJncmFtbWFyc1tpXS5zeW1ib2xzW2tleV0uc2VsZWN0UnVsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gc3ltYm9sP1xuICAgICAgICBlcnJvcnMucHVzaChcIk5vIHN5bWJvbCBmb3IgJ1wiICsga2V5ICsgXCInXCIpO1xuICAgICAgICByZXR1cm4gXCIoKFwiICsga2V5ICsgXCIpKVwiO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgYSBwbGFpbnRleHQgcnVsZSBpbiB0aGUgdHJhY2VyeSBzeW50YXhcbiAgICB0cmFjZXJ5ID0ge1xuXG4gICAgICAgIGNyZWF0ZUdyYW1tYXIgOiBmdW5jdGlvbihyYXcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JhbW1hcihyYXcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFJhbmRvbTogc2V0UmFuZG9tLFxuXG4gICAgICAgIC8vIFBhcnNlIHRoZSBjb250ZW50cyBvZiBhIHRhZ1xuICAgICAgICBwYXJzZVRhZyA6IGZ1bmN0aW9uKHRhZ0NvbnRlbnRzKSB7XG5cbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHByZWFjdGlvbnMgOiBbXSxcbiAgICAgICAgICAgICAgICBwb3N0YWN0aW9ucyA6IFtdLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gdHJhY2VyeS5wYXJzZSh0YWdDb250ZW50cyk7XG4gICAgICAgICAgICB2YXIgc3ltYm9sU2VjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbnNbaV0udHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sU2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xTZWN0aW9uID0gc2VjdGlvbnNbaV0ucmF3O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwibXVsdGlwbGUgbWFpbiBzZWN0aW9ucyBpbiBcIiArIHRhZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wcmVhY3Rpb25zLnB1c2goc2VjdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN5bWJvbFNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vICAgdGhyb3cgKFwibm8gbWFpbiBzZWN0aW9uIGluIFwiICsgdGFnQ29udGVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50cyA9IHN5bWJvbFNlY3Rpb24uc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5zeW1ib2wgPSBjb21wb25lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5tb2RpZmllcnMgPSBjb21wb25lbnRzLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZSA6IGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IDA7XG4gICAgICAgICAgICB2YXIgaW5UYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFyIGVzY2FwZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gMDtcblxuICAgICAgICAgICAgdmFyIGVzY2FwZWRTdWJzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGxhc3RFc2NhcGVkQ2hhciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5lcnJvcnMgPSBlcnJvcnM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGVuZCwgdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbmQgLSBzdGFydCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChzdGFydCArIFwiOiBlbXB0eSB0YWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goc3RhcnQgKyBcIjogZW1wdHkgYWN0aW9uXCIpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByYXdTdWJzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RFc2NhcGVkQ2hhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1N1YnN0cmluZyA9IGVzY2FwZWRTdWJzdHJpbmcgKyBcIlxcXFxcIiArIHJ1bGUuc3Vic3RyaW5nKGxhc3RFc2NhcGVkQ2hhciArIDEsIGVuZCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByYXdTdWJzdHJpbmcgPSBydWxlLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICByYXcgOiByYXdTdWJzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsYXN0RXNjYXBlZENoYXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZXNjYXBlZFN1YnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGUubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmICghZXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHJ1bGUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW50ZXIgYSBkZWVwZXIgYnJhY2tldGVkIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDAgJiYgIWluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoLS07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZCBhIGJyYWNrZXRlZCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDAgJiYgIWluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhc2h0YWdcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZ25vcmUgaWYgbm90IGF0IGRlcHRoIDAsIHRoYXQgbWVhbnMgd2UgYXJlIGluIGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluVGFnID0gIWluVGFnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWRTdWJzdHJpbmcgPSBlc2NhcGVkU3Vic3RyaW5nICsgcnVsZS5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFc2NhcGVkQ2hhciA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBydWxlLmxlbmd0aClcbiAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBydWxlLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChpblRhZykge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVW5jbG9zZWQgdGFnXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlcHRoID4gMCkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVG9vIG1hbnkgW1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIlRvbyBtYW55IF1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0cmlwIG91dCBlbXB0eSBwbGFpbnRleHQgc2VjdGlvbnNcblxuICAgICAgICAgICAgc2VjdGlvbnMgPSBzZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLnR5cGUgPT09IDAgJiYgc2VjdGlvbi5yYXcubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlY3Rpb25zLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNWb3dlbChjKSB7XG4gICAgICAgIHZhciBjMiA9IGMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIChjMiA9PT0gJ2EnKSB8fCAoYzIgPT09ICdlJykgfHwgKGMyID09PSAnaScpIHx8IChjMiA9PT0gJ28nKSB8fCAoYzIgPT09ICd1Jyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW0oYykge1xuICAgICAgICByZXR1cm4gKGMgPj0gJ2EnICYmIGMgPD0gJ3onKSB8fCAoYyA+PSAnQScgJiYgYyA8PSAnWicpIHx8IChjID49ICcwJyAmJiBjIDw9ICc5Jyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgICB9XG5cbiAgICB2YXIgYmFzZUVuZ01vZGlmaWVycyA9IHtcblxuICAgICAgICByZXBsYWNlIDogZnVuY3Rpb24ocywgcGFyYW1zKSB7XG4gICAgICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE0NDc4My9yZXBsYWNpbmctYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHRcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAocGFyYW1zWzBdKSwgJ2cnKSwgcGFyYW1zWzFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYXBpdGFsaXplQWxsIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgdmFyIHMyID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBjYXBOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0FscGhhTnVtKHMuY2hhckF0KGkpKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXBOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYXBOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzMiArPSBzLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMyICs9IHMuY2hhckF0KGkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXBOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzMjtcbiAgICAgICAgfSxcblxuICAgICAgICBjYXBpdGFsaXplIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgPT09ICdpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhIFwiICsgcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1Zvd2VsKHMuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhbiBcIiArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gXCJhIFwiICsgcztcblxuICAgICAgICB9LFxuXG4gICAgICAgIGZpcnN0UyA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHMpO1xuICAgICAgICAgICAgdmFyIHMyID0gcy5zcGxpdChcIiBcIik7XG5cbiAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IGJhc2VFbmdNb2RpZmllcnMucyhzMlswXSkgKyBcIiBcIiArIHMyLnNsaWNlKDEpLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmluaXNoZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmlzaGVkO1xuICAgICAgICB9LFxuXG4gICAgICAgIHMgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHMuY2hhckF0KHMubGVuZ3RoIC0xKSkge1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Zvd2VsKHMuY2hhckF0KHMubGVuZ3RoIC0gMikpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKSArIFwiaWVzXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwic1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwic1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZCA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocy5jaGFyQXQocy5sZW5ndGggLTEpKSB7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Zvd2VsKHMuY2hhckF0KHMubGVuZ3RoIC0gMikpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKSArIFwiaWVkXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0cmFjZXJ5LmJhc2VFbmdNb2RpZmllcnMgPSBiYXNlRW5nTW9kaWZpZXJzOyBcbiAgICAvLyBFeHRlcm5hbGl6ZVxuICAgIHRyYWNlcnkuVHJhY2VyeU5vZGUgPSBUcmFjZXJ5Tm9kZTtcblxuICAgIHRyYWNlcnkuR3JhbW1hciA9IEdyYW1tYXI7XG4gICAgdHJhY2VyeS5TeW1ib2wgPSBTeW1ib2w7XG4gICAgdHJhY2VyeS5SdWxlU2V0ID0gUnVsZVNldDtcbiAgICByZXR1cm4gdHJhY2VyeTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFjZXJ5O1xuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuY29uc3QgaGlnaGxpZ2h0ID0gcmVxdWlyZSgnLi9oaWdobGlnaHQnKTtcblxubGV0IHJlYWR5ID0gZmFsc2U7XG5cbmxldCAkZGlhbG9ncztcbmxldCAkbGluZU9uZTtcbmxldCAkbGluZVR3bztcbmxldCAkY29udHJvbDtcblxubGV0IGxpbmVPbmVBbmltYXRpbmc7XG5sZXQgbGluZVR3b0FuaW1hdGluZztcblxubGV0IGN1cjtcbmxldCBwcmV2O1xubGV0IG5leHQ7XG5cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgY29uc29sZS5kZWJ1ZygnRGlhbG9nLmluaXQoKScpO1xuXG4gICRkaWFsb2dzID0gJCgnI2hpZ2hsaWdodHMtZGlhbG9nX190ZXh0IHAnKTtcbiAgJGxpbmVPbmUgPSAkZGlhbG9ncy5maXJzdCgpO1xuICAkbGluZVR3byA9ICRkaWFsb2dzLmxhc3QoKTtcbiAgJGNvbnRyb2wgPSAkKCcuZGlhbG9nLWNvbnRyb2wnKTtcblxuICBsaW5lT25lQW5pbWF0aW5nID0gZmFsc2U7XG4gIGxpbmVUd29BbmltYXRpbmcgPSBmYWxzZTtcblxuICAkZGlhbG9ncy5lYWNoKChfLCBlbCkgPT4ge1xuICAgIHV0aWwucHJlZml4ZWRPbigkKGVsKSwgJ0FuaW1hdGlvbkVuZCcsIG9uQW5pbUVuZCk7XG4gIH0pO1xuXG4gIHJlYWR5ID0gdHJ1ZTtcbn07XG5cbmNvbnN0IHN0YXJ0SGlnaGxpZ2h0ID0gKGhpZ2hsaWdodHMpID0+IHs7XG4gIGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBwcmV2ID0gaGlnaGxpZ2h0cy5wcmV2O1xuICBuZXh0ID0gaGlnaGxpZ2h0cy5uZXh0O1xuXG4gIGlmICghcmVhZHkpIGluaXQoKTtcblxuICAvLyByZXNldCBkaWFsb2dcbiAgLy9oaWdobGlnaHQuY3VyRGlhbG9nUGFydCA9IDA7XG4gICRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAkbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcblxuICBjdXIuc3RhcnRlZCA9IHRydWU7XG4gIGFuaW1hdGVIaWdobGlnaHQoY3VyKTtcbn07XG5cbmNvbnN0IGFuaW1hdGVIaWdobGlnaHQgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAkbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcblxuICAkbGluZU9uZS50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMF0gfHwgJycpO1xuICAkbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gIGhpZGVDb250cm9sKCk7XG4gIGFuaW1hdGUoJ29uZScpO1xufTtcblxuY29uc3QgYW5pbWF0ZSA9IChsaW5lKSA9PiB7XG4gIGlmIChsaW5lID09PSAnb25lJykge1xuICAgIC8vc3RvcEFuaW1hdGUoJ3R3bycpO1xuICAgICRsaW5lT25lLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgbGluZU9uZUFuaW1hdGluZyA9IHRydWU7XG4gIH0gZWxzZSBpZiAobGluZSA9PT0gJ3R3bycpIHtcbiAgICAvL3N0b3BBbmltYXRlKCdvbmUnKTtcbiAgICAkbGluZVR3by5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgIGxpbmVUd29BbmltYXRpbmcgPSB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBzdG9wQW5pbWF0ZSA9IChsaW5lKSA9PiB7XG4gIGlmIChsaW5lID09PSAnb25lJykge1xuICAgICRsaW5lT25lXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lT25lQW5pbWF0aW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobGluZSA9PT0gJ3R3bycpIHtcbiAgICAkbGluZVR3b1xuICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgbGluZVR3b0FuaW1hdGluZyA9IGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBvbkFuaW1FbmQgPSAoKSA9PiB7XG4gIC8vIGNoZWNrIGZvciB0aGUgc2Vjb25kIGFuaW1hdGlvbiBmaXJzdCBzbyB0aGUgc2Vjb25kIGFuaW1hdGlvblxuICAvLyBkb2Vzbid0IGdldCB0cmlnZ2VyZWQgdGhlbiBpbW1lZGlhdGVseSBlbmRlZCBpbnNpZGUgdGhpcyBmdW5jXG4gIGlmIChsaW5lVHdvQW5pbWF0aW5nKSB7XG4gICAgc3RvcEFuaW1hdGUoJ3R3bycpO1xuXG4gICAgc2hvd0NvbnRyb2woKTtcbiAgfVxuXG4gIGlmIChsaW5lT25lQW5pbWF0aW5nKSB7XG4gICAgc3RvcEFuaW1hdGUoJ29uZScpO1xuXG4gICAgLy8gaWYgdGhlcmUncyB0ZXh0IGluIGxpbmVUd28sIGFuaW1hdGUgaXRcbiAgICBpZiAoJGxpbmVUd28udGV4dCgpLmxlbmd0aCkge1xuICAgICAgYW5pbWF0ZSgndHdvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dDb250cm9sKCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzaG93Q29udHJvbCA9ICgpID0+IHtcbiAgc2hvd1ByZXYoKTtcbiAgc2hvd05leHQoKTtcbn07XG5cbi8vIHNob3cgbmV4dCBhcnJvdyBpZjpcbi8vIHRoZXJlIGFyZSBwYXJ0cyBsZWZ0IHRvIHRoaXMgaGlnaGxpZ2h0XG4vLyB0aGVyZSBhcmUgaGlnaGxpZ2h0cyBsZWZ0IHRvIHRoZSBzdG9yeVxuY29uc3Qgc2hvd05leHQgPSAoKSA9PiB7XG4gIC8vIHRvZG86IHNob3cgYXJyb3cgaWYgbmV4dCwgYnV0IG1vdmUgaW50byBvdXRyb1xuICBpZiAoaGlnaGxpZ2h0Lmhhc0RpYWxvZ0xlZnQoY3VyKSB8fCBuZXh0KSB7XG4gICAgJGNvbnRyb2wubGFzdCgpLmFkZENsYXNzKCdzaG93Jyk7XG4gIH1cbn07XG5cbi8vIHNob3cgcHJlIGFycm93IGlmOlxuLy8gdGhlcmUgYXJlIHBhcnRzIGJlZm9yZSB0aGlzIGhpZ2hsaWdodFxuLy8gdGhlcmUgYXJlIGhpZ2hsaWdodHMgZWFybGllciBpbiB0aGUgc3RvcnlcbmNvbnN0IHNob3dQcmV2ID0gKCkgPT4ge1xuICAvLyB0b2RvOiBzaG93IGFycm93IGlmIG5leHQsIGJ1dCBtb3ZlIGludG8gb3V0cm9cbiAgaWYgKGhpZ2hsaWdodC5oYXNEaWFsb2dQcmV2KGN1cikgfHwgcHJldikge1xuICAgICRjb250cm9sLmZpcnN0KCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfVxufTtcblxuY29uc3QgaGlkZUNvbnRyb2wgPSAoKSA9PiB7XG4gICRjb250cm9sLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG59O1xuXG5jb25zdCBjb250aW51ZUhpZ2hsaWdodCA9IChoaWdobGlnaHRzKSA9PiB7XG4gIGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBwcmV2ID0gaGlnaGxpZ2h0cy5wcmV2O1xuICBuZXh0ID0gaGlnaGxpZ2h0cy5uZXh0O1xuXG4gIGlmICghY3VyKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoIWN1ci5zdGFydGVkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGN1ci5jdXJEaWFsb2dQYXJ0Kys7XG5cbiAgLy8gbm8gbW9yZSB0ZXh0IHRvIHRoaXMgaGlnaGxpZ2h0XG4gIGlmIChjdXIuY3VyRGlhbG9nUGFydCA9PT0gY3VyLmRpYWxvZ1BhcnRzLmxlbmd0aCkge1xuICAgIGN1ci5jdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbmltYXRlSGlnaGxpZ2h0KGN1cik7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgcmV2ZXJzZUhpZ2hsaWdodCA9IChoaWdobGlnaHRzKSA9PiB7XG4gIGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBwcmV2ID0gaGlnaGxpZ2h0cy5wcmV2O1xuICBuZXh0ID0gaGlnaGxpZ2h0cy5uZXh0O1xuXG4gIGlmICghY3VyKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoIWN1ci5zdGFydGVkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGN1ci5jdXJEaWFsb2dQYXJ0LS07XG5cbiAgLy8gbm8gbW9yZSB0ZXh0IHRvIHRoaXMgaGlnaGxpZ2h0XG4gIGlmIChjdXIuY3VyRGlhbG9nUGFydCA9PT0gLTEpIHtcbiAgICBjdXIuY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYW5pbWF0ZUhpZ2hsaWdodChjdXIpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNldEludHJvID0gKG9uZSwgdHdvKSA9PiB7XG4gIGlmICghcmVhZHkpIGluaXQoKTtcblxuICAkbGluZU9uZS50ZXh0KG9uZSk7XG4gICRsaW5lVHdvLnRleHQodHdvKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdGFydEhpZ2hsaWdodCxcbiAgY29udGludWVIaWdobGlnaHQsXG4gIHJldmVyc2VIaWdobGlnaHQsXG4gIHNldEludHJvLFxufTtcblxuIiwiY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgJCgnI2Rvd25sb2FkLXN0b3J5Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICQoJyNoaWdobGlnaHRzLWpzb24nKS5hdHRyKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoaGlnaGxpZ2h0cykpO1xuXG4gICAgbGV0IHRleHQgPSBlbmNvZGVVUklDb21wb25lbnQoJCgnaHRtbCcpLnByb3AoJ291dGVySFRNTCcpKTtcbiAgICBsZXQgZmlsZW5hbWUgPSAnYmxhc2ViYWxsLXN0b3J5JztcblxuICAgIGNvbnN0ICRnYW1lTmFtZSA9ICQoJy5nYW1lLW5hbWUnKTtcblxuICAgIGlmICgkZ2FtZU5hbWUudGV4dCgpKSB7XG4gICAgICBmaWxlbmFtZSA9ICRnYW1lTmFtZS50ZXh0KCkucmVwbGFjZSgnLCcsICcnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xuICAgIH1cblxuICAgIGZpbGVuYW1lICs9ICcuaHRtbCc7XG5cbiAgICAvLyBkb3dubG9hZCBjb2RlIGFkYXB0ZWQgZnJvbTpcbiAgICAvLyBodHRwczovL291cmNvZGV3b3JsZC5jb20vYXJ0aWNsZXMvcmVhZC8xODkvaG93LXRvLWNyZWF0ZS1hLWZpbGUtYW5kLWdlbmVyYXRlLWEtZG93bmxvYWQtd2l0aC1qYXZhc2NyaXB0LWluLXRoZS1icm93c2VyLXdpdGhvdXQtYS1zZXJ2ZXJcbiAgICBjb25zdCAkZGxCdXR0b24gPSAkKCc8YT4nKVxuICAgICAgLmF0dHIoJ2hyZWYnLCBgZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJHt0ZXh0fWApXG4gICAgICAuYXR0cignZG93bmxvYWQnLCBmaWxlbmFtZSlcbiAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAuYXBwZW5kVG8oJCgnYm9keScpKTtcblxuICAgICRkbEJ1dHRvblswXS5jbGljaygpO1xuICAgICRkbEJ1dHRvbi5yZW1vdmUoKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCxcbn07XG5cbiIsImNvbnN0IG1sdXN0YXJkID0gcmVxdWlyZSgnbWx1c3RhcmQnKTtcblxuY29uc3QgaGlnaGxpZ2h0ID0gcmVxdWlyZSgnLi9oaWdobGlnaHQnKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxubGV0IGdhbWVFdmVudHMgPSB7fTtcbmxldCBoaWdobGlnaHRzID0gW107XG5cbmNvbnN0IGlzUGxheUJhbGwgPSAoZ2FtZUV2KSA9PiB7XG4gIHJldHVybiBnYW1lRXYubGFzdFVwZGF0ZS5pbmRleE9mKCdQbGF5IGJhbGwnKSA+PSAwO1xufTtcblxuY29uc3QgZ2VuZXJhdGVIaWdobGlnaHRzID0gKGNiKSA9PiB7XG4gICQoJy5nYW1lLWV2ZW50X19jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCcpLmVhY2goKF8sIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpZCA9ICQoY2hlY2tlZCkuYXR0cignaWQnKTtcbiAgICBsZXQgdmlzdWFsID0gJ2RpYW1vbmQnO1xuXG4gICAgaWYgKGlzUGxheUJhbGwoZ2FtZUV2ZW50c1tpZF0uZXYuZGF0YSkpIHtcbiAgICAgIHZpc3VhbCA9ICdpbnRybyc7XG4gICAgfVxuXG4gICAgY29uc3QgaGwgPSBoaWdobGlnaHQubWFrZUhpZ2hsaWdodCh7XG4gICAgICBpZDogaWQsXG4gICAgICBnYW1lRXZlbnQ6IGdhbWVFdmVudHNbaWRdLmV2LFxuICAgICAgbWx1c3RhcmQ6IGdhbWVFdmVudHNbaWRdLm1sdXN0YXJkLFxuICAgICAgdmlzdWFsLFxuICAgIH0pO1xuXG4gICAgaGlnaGxpZ2h0cy5wdXNoKGhsKTtcbiAgfSk7XG5cbiAgY29uc29sZS5kZWJ1ZygnZ2VuZXJhdGVIaWdobGlnaHRzOicsIGhpZ2hsaWdodHMpO1xuICBjYihoaWdobGlnaHRzKTtcbn07XG5cbmNvbnN0IG1ha2VDb3VudENpcmNsZSA9IChjbGFzc2VzKSA9PiB7XG4gIHJldHVybiAkKCc8c3Bhbj4nKS5hZGRDbGFzcyhjbGFzc2VzKTtcbn07XG5cbmNvbnN0IHJlbmRlckdhbWVFdiA9IChnYW1lRXYpID0+IHtcbiAgY29uc3QgZGF0YSA9IGdhbWVFdi5ldi5kYXRhO1xuXG4gIGlmICghZGF0YS5sYXN0VXBkYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgJGdhbWVFdiA9ICQoJzxkaXY+Jyk7XG5cbiAgLy8gZm9ybSBzdHVmZlxuICBjb25zdCAkY2hDb250YWluZXIgPSAkKCc8ZGl2PicpO1xuICBjb25zdCAkY2hlY2sgPSAkKCc8aW5wdXQ+Jyk7XG4gIGNvbnN0ICRsYWJlbCA9ICQoJzxsYWJlbD4nKTtcblxuICBsZXQgdXBkYXRlID0gYCR7ZGF0YS5sYXN0VXBkYXRlfSAke2RhdGEuc2NvcmVVcGRhdGUgfHwgJyd9YDtcblxuICAkY2hlY2tcbiAgICAuYWRkQ2xhc3MoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIC5hdHRyKCdpZCcsIGdhbWVFdi5ldi5oYXNoKVxuICAgIC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICAuYXR0cignbmFtZScsICdnYW1lIGV2ZW50JylcbiAgICAudmFsKCcnKTtcblxuICBpZiAoaXNQbGF5QmFsbChkYXRhKSkge1xuICAgICRjaGVja1xuICAgICAgLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIH1cblxuICAkbGFiZWxcbiAgICAuYWRkQ2xhc3MoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIC5hdHRyKCdmb3InLCBnYW1lRXYuZXYuaGFzaClcbiAgICAudGV4dCh1cGRhdGUpO1xuXG4gICRjaENvbnRhaW5lclxuICAgIC5hZGRDbGFzcygnZm9ybS1jaGVjayBjb2wtNycpXG4gICAgLmFwcGVuZCgkY2hlY2spXG4gICAgLmFwcGVuZCgkbGFiZWwpO1xuXG4gIC8vIGdhbWUgZXZlbnQgaW5mb1xuICBjb25zdCAkZ2FtZUV2SW5mbyA9ICQoJzxkaXY+Jyk7XG4gIGNvbnN0ICRzY29yZSA9ICQoJzxzcGFuPicpO1xuICBjb25zdCAkYmFzZXMgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJGJhbGxzID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRzdHJpa2VzID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRvdXRzID0gJCgnPHNwYW4+Jyk7XG5cbiAgbGV0IGhvbWVFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2hvbWUnLCBkYXRhKTtcbiAgbGV0IGF3YXlFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2F3YXknLCBkYXRhKTtcblxuICBsZXQgc2NvcmUgPSBgJHtob21lRW1vaml9ICR7ZGF0YS5ob21lU2NvcmV9IDogJHthd2F5RW1vaml9ICR7ZGF0YS5hd2F5U2NvcmV9YDtcbiAgbGV0IGJhc2VzID0gJyc7XG5cbiAgLy8gZmlsbCBpbiBiYWxscyBjb3VudFxuICBmb3IgKGxldCBiYWxsID0gMDsgYmFsbCA8IGRhdGEuYXRCYXRCYWxsczsgYmFsbCsrKSB7XG4gICAgJGJhbGxzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBmdWxsJykpO1xuICB9XG5cbiAgZm9yIChsZXQgYmFsbCA9IDM7IGJhbGwgPiBkYXRhLmF0QmF0QmFsbHM7IGJhbGwtLSkge1xuICAgICRiYWxscy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIHN0cmlrZXMgY291bnRcbiAgZm9yIChsZXQgc3RyaWtlID0gMDsgc3RyaWtlIDwgZGF0YS5hdEJhdFN0cmlrZXM7IHN0cmlrZSsrKSB7XG4gICAgJHN0cmlrZXMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGZ1bGwnKSk7XG4gIH1cblxuICBmb3IgKGxldCBzdHJpa2UgPSAyOyBzdHJpa2UgPiBkYXRhLmF0QmF0U3RyaWtlczsgc3RyaWtlLS0pIHtcbiAgICAkc3RyaWtlcy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIG91dHMgY291bnRcbiAgZm9yIChsZXQgb3V0ID0gMDsgb3V0IDwgZGF0YS5oYWxmSW5uaW5nT3V0czsgb3V0KyspIHtcbiAgICAkb3V0cy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZnVsbCcpKTtcbiAgfVxuXG4gIGZvciAobGV0IG91dCA9IDI7IG91dCA+IGRhdGEuaGFsZklubmluZ091dHM7IG91dC0tKSB7XG4gICAgJG91dHMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGVtcHR5JykpO1xuICB9XG5cbiAgLy8gZmlsbCBpbiBiYXNlIGRpYW1vbmRzXG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQoZ2FtZUV2Lm1sdXN0YXJkLmJhc2VSdW5uZXJzLnRoaXJkLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuc2Vjb25kLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuICAvLyB0b2RvOiBkZWFsIHdpdGggNCBiYXNlc1xuICAvLyRiYXNlcy5hcHBlbmQobWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5maXJzdC5wbGF5ZXJOYW1lKSk7XG5cbiAgJHNjb3JlXG4gICAgLnRleHQoc2NvcmUpO1xuICAkYmFsbHNcbiAgICAuYXR0cigndGl0bGUnLCAnQmFsbHMnKVxuICAgIC5hZGRDbGFzcygnYmFsbHMtY291bnQnKTtcbiAgJHN0cmlrZXNcbiAgICAuYXR0cigndGl0bGUnLCAnU3RyaWtlcycpXG4gICAgLmFkZENsYXNzKCdzdHJpa2VzLWNvdW50Jyk7XG4gICRvdXRzXG4gICAgLmF0dHIoJ3RpdGxlJywgJ091dHMnKVxuICAgIC5hZGRDbGFzcygnb3V0cy1jb3VudCcpO1xuICAkYmFzZXNcbiAgICAuYXR0cigndGl0bGUnLCAnQmFzZXMgb2NjdXBpZWQnKVxuICAgIC5hZGRDbGFzcygnYmFzZXMtb2NjdXBpZWQnKTtcblxuICAkZ2FtZUV2SW5mb1xuICAgIC5hZGRDbGFzcygnY29sLTUnKVxuICAgIC5hcHBlbmQoJHNjb3JlKVxuICAgIC5hcHBlbmQoJGJhc2VzKVxuICAgIC5hcHBlbmQoJGJhbGxzKVxuICAgIC5hcHBlbmQoJHN0cmlrZXMpXG4gICAgLmFwcGVuZCgkb3V0cyk7XG5cbiAgJGdhbWVFdlxuICAgIC5hZGRDbGFzcygnZ2FtZS1ldmVudF9fY29udGFpbmVyIHJvdyBib3JkZXInKVxuICAgIC5hcHBlbmQoJGNoQ29udGFpbmVyKVxuICAgIC5hcHBlbmQoJGdhbWVFdkluZm8pO1xuXG4gIHJldHVybiAkZ2FtZUV2O1xufTtcblxuY29uc3QgcmVuZGVyR2FtZUV2cyA9ICgpID0+IHtcbiAgc3RvcExvYWRpbmcoKTtcbiAgJCgnI2dhbWUtZXZlbnRzLXNlbGVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICBjb25zdCAkY29udGFpbmVyID0gJCgnI2dhbWUtZXZlbnRzLWNob29zZV9fY29udGFpbmVyJyk7XG5cbiAgLy8gZ290dGEgcmVuZGVyIHNvbWUgZ2VuZXJhbCBzdHVmZiB0b28gKGhvbWUgdnMgYXdheSwgcyNkIywgd2VhdGhlcilcbiAgLy8gYWxzbzogbGFiZWwgZm9yIHRoZSBzZWxlY3QsIGFuZCB0aGUgc2VsZWN0IGl0c2VsZlxuICBmb3IgKGxldCBpZCBpbiBnYW1lRXZlbnRzKSB7XG4gICAgbGV0ICRnYW1lRXYgPSByZW5kZXJHYW1lRXYoZ2FtZUV2ZW50c1tpZF0pO1xuXG4gICAgaWYgKCRnYW1lRXYpIHtcbiAgICAgICRjb250YWluZXIuYXBwZW5kKCRnYW1lRXYpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0R2FtZUV2ZW50cyA9IGFzeW5jIChnYW1lSWQsIG5leHRQYWdlKSA9PiB7XG4gIGxldCBnYW1lc1VSTCA9IGBodHRwczovL2FwaS5zaWJyLmRldi9jaHJvbmljbGVyL3YxL2dhbWVzL3VwZGF0ZXM/Z2FtZT0ke2dhbWVJZH1gO1xuXG4gIGlmIChuZXh0UGFnZSkge1xuICAgIGdhbWVzVVJMICs9IGAmcGFnZT0ke25leHRQYWdlfWA7XG4gIH1cblxuICBzdGFydExvYWRpbmcoKTtcblxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goZ2FtZXNVUkwpO1xuXG4gIGlmIChyZXNwLm9rKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgZm9yIChsZXQgZ2FtZUV2IG9mIGRhdGEuZGF0YSkge1xuICAgICAgZ2FtZUV2ZW50c1tnYW1lRXYuaGFzaF0gPSB7XG4gICAgICAgIGV2OiBnYW1lRXYsXG4gICAgICAgIG1sdXN0YXJkOiBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KGdhbWVFdi5kYXRhKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubmV4dFBhZ2UpIHtcbiAgICAgIGdldEdhbWVFdmVudHMoZ2FtZUlkLCBkYXRhLm5leHRQYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9uZSBsb2FkaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgcmVuZGVyR2FtZUV2cygpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnZ2V0R2FtZUV2ZW50cyBkb25lOicsIGdhbWVFdmVudHMpO1xuICAgIH1cblxuICB9XG59O1xuXG5jb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtZXZlbnQtZm9ybScpO1xuXG4gICRnYW1lRXZGb3JtLmZpbmQoJ2J1dHRvbicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnLnNwaW5uZXItYm9yZGVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xufTtcblxuY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtZXZlbnQtZm9ybScpO1xuXG4gICRnYW1lRXZGb3JtLmZpbmQoJ2J1dHRvbicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnLnNwaW5uZXItYm9yZGVyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xufTtcblxuY29uc3QgaW5pdCA9IChoaWdobGlnaHRzUmVhZHlDYikgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWV2ZW50LWZvcm0nKTtcblxuICAkZ2FtZUV2Rm9ybS5vbignc3VibWl0JywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGdhbWVJZCA9ICRnYW1lRXZGb3JtIC5maW5kKCcjZ2FtZS1pZCcpLnZhbCgpIC5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGdldEdhbWVFdmVudHMoZ2FtZUlkKTtcbiAgfSk7XG5cbiAgY29uc3QgJGhpZ2hsaWdodHNTZWxlY3RGb3JtID0gJCgnI2dhbWUtZXZlbnRzLWNob29zZV9fZm9ybScpO1xuXG4gICRoaWdobGlnaHRzU2VsZWN0Rm9ybS5vbignc3VibWl0JywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBnZW5lcmF0ZUhpZ2hsaWdodHMoaGlnaGxpZ2h0c1JlYWR5Q2IpO1xuICB9KTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQsXG59O1xuXG4iLCJjb25zdCBncmFuZFNsYWxhbWkgPSByZXF1aXJlKCdncmFuZC1zbGFsYW1pJyk7XG5cbi8vIG1ha2luZyBhICdjbGFzcycgZm9yIGhpZ2hsaWdodHMgaW4gdGhlIG9sZC1zY2hvb2wgd2F5XG4vLyBjYXVzZSBpIGRvbid0IHdhbm5hIGhhdmUgdG8gY29tcGxpY2F0ZSB0aGluZ3MgZnVydGhlciB3aXRoIGJhYmVsXG5jb25zdCBtYWtlSGlnaGxpZ2h0ID0gKHNldHRpbmdzKSA9PiB7XG4gIHNldHRpbmdzID0gc2V0dGluZ3MgfHwge307XG5cbiAgbGV0IGlkO1xuICBsZXQgZ2FtZUV2ZW50O1xuICBsZXQgbWx1c3RhcmQ7XG4gIGxldCBjb21tZW50YXJ5O1xuICBsZXQgbWF4RGlhbG9nTGVuO1xuICBsZXQgZGlhbG9nUGFydHM7XG4gIGxldCBjdXJEaWFsb2dQYXJ0O1xuICBsZXQgdmlzdWFsO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWQgPSBzZXR0aW5ncy5pZDtcbiAgICBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gICAgbWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZDtcbiAgICB2aXN1YWwgPSBzZXR0aW5ncy52aXN1YWw7XG4gICAgY29tbWVudGFyeSA9IGdlbmVyYXRlQ29tbWVudGFyeSgpO1xuICAgIG1heERpYWxvZ0xlbiA9IHNldE1heERpYWxvZ0xlbigpO1xuICAgIGRpYWxvZ1BhcnRzID0gW107XG4gICAgY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgYnJlYWtJbnRvRGlhbG9nUGFydHMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIGdhbWVFdmVudCxcbiAgICAgIG1sdXN0YXJkLFxuICAgICAgY29tbWVudGFyeSxcbiAgICAgIGRpYWxvZ1BhcnRzLFxuICAgICAgY3VyRGlhbG9nUGFydCxcbiAgICAgIGhhc0RpYWxvZ0xlZnQsXG4gICAgICB2aXN1YWwsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUNvbW1lbnRhcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdyYW5kU2xhbGFtaS5nZXRDb21tZW50KHtcbiAgICAgIGdhbWVFdmVudDogZ2FtZUV2ZW50LmRhdGEsXG4gICAgICBtbHVzdGFyZDogbWx1c3RhcmQsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gdG9kbzogZG8gaSB3YW5uYSBzdXBwb3J0IG1vYmlsZT8gdGhlbiB1cGRhdGUgdGhpcyBhY2NvcmRpbmdseVxuICBjb25zdCBzZXRNYXhEaWFsb2dMZW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDM1O1xuICB9O1xuXG4gIGNvbnN0IGJyZWFrSW50b0RpYWxvZ1BhcnRzID0gKCkgPT4ge1xuICAgIC8vIHNwbGl0IGJ5IG5ld2xpbmVzIChlbmZvcmNlZCBwYWNpbmcpXG4gICAgY29uc3QgcGFjaW5nUGFydHMgPSBjb21tZW50YXJ5LnNwbGl0KCdcXG4nKTtcblxuICAgIHBhY2luZ1BhcnRzLmZvckVhY2goKHApID0+IHtcbiAgICAgIGJyZWFrSW50b1BhcnRzKHApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHNwbGl0IGVhY2ggcGFydCBpbnRvIGl0cyBhbmltYXRpb24gcGFydHMgYnkgbGluZSBsZW5ndGhcbiAgY29uc3QgYnJlYWtJbnRvUGFydHMgPSAodGV4dCkgPT4ge1xuICAgIGxldCBwYXJ0cyA9IFtbXSwgW11dO1xuICAgIGxldCB1bmZpbGxlZCA9IDA7XG4gICAgbGV0IGxlbiA9IDA7XG5cbiAgICB0ZXh0LnNwbGl0KCcgJykuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgbGV0IHdvcmRMZW4gPSB3b3JkLmxlbmd0aDtcblxuICAgICAgaWYgKChsZW4gKyB3b3JkTGVuKSA+IG1heERpYWxvZ0xlbikge1xuICAgICAgICBsZW4gPSAwO1xuXG4gICAgICAgIGlmICh1bmZpbGxlZCA9PT0gMSkge1xuICAgICAgICAgIGRpYWxvZ1BhcnRzLnB1c2gobWFrZVNlbnRlbmNlcyhwYXJ0cykpO1xuICAgICAgICAgIHBhcnRzID0gW1tdLCBbXV07XG4gICAgICAgICAgdW5maWxsZWQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuZmlsbGVkID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGxlbiArIHdvcmRMZW4pIDw9IG1heERpYWxvZ0xlbikge1xuICAgICAgICBwYXJ0c1t1bmZpbGxlZF0ucHVzaCh3b3JkKTtcbiAgICAgICAgbGVuICs9IHdvcmRMZW4gKyAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUGFydHMucHVzaChtYWtlU2VudGVuY2VzKHBhcnRzKSk7XG4gIH07XG5cbiAgY29uc3QgbWFrZVNlbnRlbmNlcyA9IChwYXJ0cykgPT4ge1xuICAgIHJldHVybiBwYXJ0cy5tYXAoKHdvcmRzKSA9PiB7XG4gICAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vY29uc3QgaGFzRGlhbG9nTGVmdCA9ICgpID0+IHtcbiAgICAvL3JldHVybiAhKChjdXJEaWFsb2dQYXJ0ICsgMSkgPT09IGRpYWxvZ1BhcnRzLmxlbmd0aCk7XG4gIC8vfTtcblxuICByZXR1cm4gaW5pdCgpO1xufTtcblxuLy8gdXRpbGl0aWVzXG5jb25zdCBoYXNEaWFsb2dMZWZ0ID0gKGhpZ2hsaWdodCkgPT4ge1xuICAgIHJldHVybiAhKChoaWdobGlnaHQuY3VyRGlhbG9nUGFydCArIDEpID09PSBoaWdobGlnaHQuZGlhbG9nUGFydHMubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGhhc0RpYWxvZ1ByZXYgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICAgcmV0dXJuICEoKGhpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0IC0gMSkgPT09IC0xKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYWtlSGlnaGxpZ2h0LFxuICBoYXNEaWFsb2dMZWZ0LFxuICBoYXNEaWFsb2dQcmV2LFxufTtcblxuIiwiY29uc3QgZ2FtZUV2ZW50U2VsZWN0b3IgPSByZXF1aXJlKCcuL2dhbWUtZXZlbnQtc2VsZWN0b3InKTtcbmNvbnN0IGRpYWxvZyA9IHJlcXVpcmUoJy4vZGlhbG9nJyk7XG5jb25zdCB2aXN1YWwgPSByZXF1aXJlKCcuL3Zpc3VhbCcpO1xuY29uc3QgZG93bmxvYWRlciA9IHJlcXVpcmUoJy4vZG93bmxvYWRlcicpO1xuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vbGliL3RlYW1zLWRhdGEnKTtcblxuZ2xvYmFsLmhpZ2hsaWdodHMgPSBbXTtcbmxldCBjdXJIaWdobGlnaHQgPSAwO1xubGV0IGludHJvID0gdHJ1ZTtcblxuY29uc3QgZ2V0SGlnaGxpZ2h0cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcmV2OiBoaWdobGlnaHRzW2N1ckhpZ2hsaWdodCAtIDFdLFxuICAgIGN1cjogaGlnaGxpZ2h0c1tjdXJIaWdobGlnaHRdLFxuICAgIG5leHQ6IGhpZ2hsaWdodHNbY3VySGlnaGxpZ2h0ICsgMV0sXG4gIH07XG59O1xuXG5jb25zdCBuZXh0SGlnaGxpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBobHMgPSBnZXRIaWdobGlnaHRzKCk7XG5cbiAgdmlzdWFsLnNob3dWaXN1YWwoaGxzLmN1ci52aXN1YWwpO1xuICB2aXN1YWwudXBkYXRlRGlhbW9uZChobHMpO1xuICBkaWFsb2cuc3RhcnRIaWdobGlnaHQoaGxzKTtcbn07XG5cbmNvbnN0IGNvbnRpbnVlSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlhbG9nLmNvbnRpbnVlSGlnaGxpZ2h0KGdldEhpZ2hsaWdodHMoKSk7XG59O1xuXG5jb25zdCByZXZlcnNlSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlhbG9nLnJldmVyc2VIaWdobGlnaHQoZ2V0SGlnaGxpZ2h0cygpKTtcbn07XG5cbmNvbnN0IHBsYXlIaWdobGlnaHQgPSAoZGlyZWN0aW9uKSA9PiB7XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgLy8gdHJ5IHRvIGFkdmFuY2UgdGhlIGhpZ2hsaWdodCwgaWYgdGhlcmUncyBtb3JlIHRleHQgdG8gYW5pbWF0ZVxuICAgIGlmICghY29udGludWVIaWdobGlnaHQoKSkge1xuXG4gICAgICAvLyBkbyBub3RoaW5nIGlmIHRoZXJlJ3Mgbm8gbW9yZSBoaWdobGlnaHRzXG4gICAgICBpZiAoaGlnaGxpZ2h0cy5sZW5ndGggLSAxID09PSBjdXJIaWdobGlnaHQpIHsgcmV0dXJuIH07XG5cbiAgICAgIGN1ckhpZ2hsaWdodCsrO1xuXG4gICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gbW9yZSBoaWdobGlnaHRzLCBkb24ndCBhZHZhbmNlXG4gICAgICBpZiAoaGlnaGxpZ2h0cy5sZW5ndGggPT09IGN1ckhpZ2hsaWdodCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSwgc2hvdyB0aGUgbmV4dCBoaWdobGlnaHRcbiAgICAgIG5leHRIaWdobGlnaHQoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gdHJ5IHRvIHJldmVyc2UgaGlnaGxpZ2h0LCBpZiB0aGVyZSB3YXMgcHJldmlvdXMgdGV4dCB0byBhbmltYXRlXG4gICAgaWYgKCFyZXZlcnNlSGlnaGxpZ2h0KCkpIHtcblxuICAgICAgLy8gZG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIHByZXZpb3VzIGhpZ2hsaWdodHNcbiAgICAgIGlmIChjdXJIaWdobGlnaHQgPT09IDApIHsgcmV0dXJuIH07XG5cbiAgICAgIGN1ckhpZ2hsaWdodC0tO1xuXG4gICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gcHJldmlvdXMgaGlnaGxpZ2h0cywgZG9uJ3QgcmV2ZXJzZVxuICAgICAgaWYgKGN1ckhpZ2hsaWdodCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0b2RvOiBmaXggdGhlIG5hbWluZywgb2ggZ29kcyB0aGlzIGlzIGN1cnNlZFxuICAgICAgbmV4dEhpZ2hsaWdodCgpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaGFuZGxlQWN0aW9uID0gKGV2dCkgPT4ge1xuICBsZXQgZGlyZWN0aW9uO1xuXG4gIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJykge1xuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMzcpIHsgLy8gYXJyb3cgbGVmdFxuICAgICAgZGlyZWN0aW9uID0gJ3ByZXYnO1xuICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSB7IC8vIGNsaWNrXG4gICAgLy8gdG9kbzogZml4IHRoaXMsIHRoaXMgaXMgY3Vyc2VkOlxuICAgIGlmICgkKGV2dC50YXJnZXQpLmF0dHIoJ2lkJykuaW5kZXhPZignbmV4dCcpID49IDApIHtcbiAgICAgIGRpcmVjdGlvbiA9ICduZXh0JztcbiAgICB9IGVsc2UgaWYgKCQoZXZ0LnRhcmdldCkuYXR0cignaWQnKS5pbmRleE9mKCduZXh0JykgPj0gMCkge1xuICAgICAgZGlyZWN0aW9uID0gJ3ByZXYnO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlIaWdobGlnaHQoZGlyZWN0aW9uKTtcbn07XG5cbmNvbnN0IHNldHVwSW50cm8gPSAoKSA9PiB7XG4gIC8vIGdyYWIgZ2FtZSBpbmZvIGZyb20gZmlyc3QgaGlnaGxpZ2h0XG4gIGNvbnN0IGdhbWVFdiA9IGhpZ2hsaWdodHNbMF0uZ2FtZUV2ZW50LmRhdGE7XG4gIGNvbnN0ICRob21lID0gJCgnLnZzLWxvZ29fX2hvbWUnKTtcbiAgY29uc3QgJGF3YXkgPSAkKCcudnMtbG9nb19fYXdheScpO1xuXG4gIGxldCBoTmljayA9IGdhbWVFdi5ob21lVGVhbU5pY2tuYW1lLnNwbGl0KCcgJykucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgbGV0IGFOaWNrID0gZ2FtZUV2LmF3YXlUZWFtTmlja25hbWUuc3BsaXQoJyAnKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChhTmljayA9PT0gJ21lY2hhbmljcycpIHtcbiAgICBhTmljayArPSAnLWF3YXknO1xuICB9XG5cbiAgJCgnLmdhbWUtbmFtZScpLnRleHQoYFNlYXNvbiAke2dhbWVFdi5zZWFzb24gKyAxfSwgRGF5ICR7Z2FtZUV2LmRheSArIDF9YCk7XG4gICRob21lLmF0dHIoJ3NyYycsIGAuL2ltYWdlcy9sb2dvLSR7aE5pY2t9LnBuZ2ApO1xuICAkYXdheS5hdHRyKCdzcmMnLCBgLi9pbWFnZXMvbG9nby0ke2FOaWNrfS5wbmdgKTtcbiAgJCgnLmRpYW1vbmQtaGVhZGVyIC5tYXRjaHVwJykudGV4dChgJHtnYW1lRXYuaG9tZVRlYW1OYW1lfSB2cy4gJHtnYW1lRXYuYXdheVRlYW1OYW1lfWApO1xuXG4gIC8vIGdlb3JnaWFzIGRvbid0IGhhdmUgYSBzdGFuZGFyZCBzaXplIGxvZ29cbiAgaWYgKGhOaWNrID09PSAnZ2VvcmdpYXMnKSB7XG4gICAgJGhvbWUuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICB9XG5cbiAgaWYgKGFOaWNrID09PSAnZ2VvcmdpYXMnKSB7XG4gICAgJGF3YXkuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICB9XG5cbiAgLy8gc2V0IHRoZSBkaWFtb25kIGNvbG91cnMgYW5kIGFkZCB0aGUgZGlhbW9uZCBjc3NcbiAgY29uc3QgaG9tZVRlYW0gPSB0ZWFtc0RhdGFbZ2FtZUV2LmhvbWVUZWFtXTtcbiAgY29uc3QgJGRpYW1vbmQgPSAkKCcjZGlhbW9uZC1zdmcnKTtcbiAgY29uc3QgJGdyYXNzID0gJGRpYW1vbmQuZmluZCgnLmdyYXNzJyk7XG4gIGNvbnN0ICRkaXJ0ID0gJGRpYW1vbmQuZmluZCgnLmRpcnQnKTtcbiAgY29uc3QgJG5ldXRyYWwgPSAkZGlhbW9uZC5maW5kKCcubmV1dHJhbCcpO1xuICBjb25zdCAkbW91bmQgPSAkZGlhbW9uZC5maW5kKCcubW91bmQnKTtcblxuICAkZ3Jhc3MuZmlyc3QoKVxuICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZ3Jhc3N9YClcbiAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZ3Jhc3N9YCk7XG4gICRncmFzcy5sYXN0KClcbiAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLmdyYXNzfWApXG4gICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmRpcnRPdXRsaW5lfWApO1xuXG4gICRkaXJ0XG4gICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0fWApXG4gICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmRpcnRPdXRsaW5lfWApO1xuXG4gICRtb3VuZFxuICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMubWFpbn1gKVxuICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0T3V0bGluZX1gKTtcblxuICAkbmV1dHJhbFxuICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMubmV1dHJhbH1gKVxuICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5uZXV0cmFsfWApO1xuXG4gICQoJyNkaWFtb25kX19pbWFnZScpXG4gICAgLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnKyBidG9hKCRkaWFtb25kLmh0bWwoKSkgKyAnKScpO1xuXG4gICQoJy5tb3VuZC1sb2dvJykuZmlyc3QoKS5hdHRyKCdzcmMnLCBob21lVGVhbS5ob21lTG9nb1VSTCk7XG5cbiAgbmV4dEhpZ2hsaWdodCgpO1xufTtcblxuY29uc3Qgb25IaWdobGlnaHRzUmVhZHkgPSAoaGxzKSA9PiB7XG4gIGhpZ2hsaWdodHMgPSBobHM7XG5cbiAgc2V0dXBJbnRybygpO1xuXG4gICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIGhhbmRsZUFjdGlvbik7XG4gICQoJy5kaWFsb2ctY29udHJvbCcpLm9uKCdjbGljaycsIGhhbmRsZUFjdGlvbik7XG59O1xuXG5jb25zdCBpbml0QXBwID0gKCkgPT4ge1xuICBjb25zdCBoaWdobGlnaHRzRGF0YSA9ICQoJyNoaWdobGlnaHRzLWpzb24nKS5hdHRyKCdkYXRhJyk7XG5cbiAgLy8gc2tpcCBmaXJzdCBzdGVwcyBhbmQgZ28gc3RyYWlnaHQgdG8gc2hvd2luZyB0aGUgcmVlbCBpZiBpdCdzIGEgcHVibGlzaGVkXG4gIC8vIHN0b3J5XG4gIGlmIChoaWdobGlnaHRzRGF0YS5sZW5ndGgpIHtcbiAgICBvbkhpZ2hsaWdodHNSZWFkeShKU09OLnBhcnNlKGhpZ2hsaWdodHNEYXRhKSk7XG4gICAgLy9oaWdobGlnaHRzID0gSlNPTi5wYXJzZShoaWdobGlnaHRzRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUV2ZW50U2VsZWN0b3IuaW5pdChvbkhpZ2hsaWdodHNSZWFkeSk7XG4gICAgZG93bmxvYWRlci5pbml0KCk7XG4gIH1cbn07XG5cbmluaXRBcHAoKTtcblxuIiwiLy8gYXBhdGVkIGZyb21cbi8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udHJvbGxpbmctY3NzLWFuaW1hdGlvbnMtdHJhbnNpdGlvbnMtamF2YXNjcmlwdC9cbmNvbnN0IHByZWZpeGVzID0gWyd3ZWJraXQnLCAnbW96JywgJ01TJywgJ28nLCAnJ107XG5cbmNvbnN0IHByZWZpeGVkT24gPSAoJGVsLCB0eXBlLCBjYikgPT4ge1xuICBmb3IgKGxldCBwcmVmaXggb2YgcHJlZml4ZXMpIHtcbiAgICBpZiAoIXByZWZpeCkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAkZWwub24oYCR7cHJlZml4fSR7dHlwZX1gLCBjYik7XG4gIH1cbn07XG5cbmNvbnN0IGdldEVtb2ppID0gKHRlYW0sIGdhbWVFdikgPT4ge1xuICBsZXQgZW1vamkgPSAnJztcblxuICBpZiAodGVhbSA9PT0gJ2hvbWUnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmhvbWVUZWFtRW1vamkgPyBTdHJpbmcuZnJvbUNvZGVQb2ludChnYW1lRXYuaG9tZVRlYW1FbW9qaSkgOiAnJztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmhvbWVUZWFtRW1vamk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5hd2F5VGVhbUVtb2ppID8gU3RyaW5nLmZyb21Db2RlUG9pbnQoZ2FtZUV2LmF3YXlUZWFtRW1vamkpIDogJyc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5hd2F5VGVhbUVtb2ppO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbW9qaTtcbn07XG5cbmNvbnN0IGdldFBsYXllck5hbWVXaXRoSW5pdGlhbCA9IChuYW1lKSA9PiB7XG4gIGxldCByZXQgPSAnJztcblxuICByZXQgKz0gbmFtZVswXSArICcuICc7XG4gIHJldCArPSBuYW1lLnNwbGl0KCcgJylbMV07XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmNvbnN0IGdldElubmluZ1RleHQgPSAoaW5uaW5nKSA9PiB7XG4gIGxldCByZXQgPSBgJHtpbm5pbmd9YDtcblxuICBzd2l0Y2ggKGlubmluZykge1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0ICs9ICdzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICByZXQgKz0gJ25kJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldCArPSAncmQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldCArPSAndGgnO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuY29uc3QgbWFrZUJhc2VEaWFtb25kID0gKG9jYykgPT4ge1xuICBjb25zdCAkZGlhbW9uZCA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdkaWFtb25kJyk7XG5cbiAgaWYgKG9jYykge1xuICAgICRkaWFtb25kLmFkZENsYXNzKCdmaWxsZWQnKTtcbiAgfVxuXG4gIHJldHVybiAkZGlhbW9uZDtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWZpeGVkT24sXG4gIGdldEVtb2ppLFxuICBnZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwgLFxuICBnZXRJbm5pbmdUZXh0LFxuICBtYWtlQmFzZURpYW1vbmQsXG59O1xuXG4iLCJjb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi9saWIvdGVhbXMtZGF0YScpO1xuY29uc3Qgd2VhdGhlciA9IHJlcXVpcmUoJy4uL2xpYi93ZWF0aGVyJyk7XG5cbmNvbnN0ICRkaWFtb25kID0gJCgnI2RpYW1vbmQnKTtcbmNvbnN0IGRpYW1vbmRMb2NhdGlvbnMgPSB7XG4gICRtb3VuZDogJGRpYW1vbmQuZmluZCgnLm1vdW5kJyksXG4gICRiYXR0aW5nOiAkZGlhbW9uZC5maW5kKCcuYmF0dGluZycpLFxuICAkZmlyc3Q6ICRkaWFtb25kLmZpbmQoJy5maXJzdCcpLFxuICAkc2Vjb25kOiAkZGlhbW9uZC5maW5kKCcuc2Vjb25kJyksXG4gICR0aGlyZDogJGRpYW1vbmQuZmluZCgnLnRoaXJkJyksXG59O1xuXG5jb25zdCBCQVNFUyA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJ107IC8vIHRvZG86ICdmb3VydGgnLCAnc2VjcmV0Jz9cblxuY29uc3QgZHJhd0JhdHRlciA9IChoaWdobGlnaHRzKSA9PiB7XG4gIC8vY29uc3QgbWwgPSBoaWdobGlnaHQubWx1c3RhcmQ7XG4gIGNvbnN0IGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBjb25zdCBnZSA9IGN1ci5nYW1lRXZlbnQuZGF0YTtcblxuICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnYXdheScgOiAnaG9tZSc7XG4gIGxldCBuYW1lV2l0aEVtb2ppID0gJyc7XG5cbiAgaWYgKGdlW2Ake3RlYW19QmF0dGVyTmFtZWBdKSB7XG4gICAgY29uc3QgbmFtZSA9IHV0aWwuZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsKGdlW2Ake3RlYW19QmF0dGVyTmFtZWBdKTtcbiAgICBuYW1lV2l0aEVtb2ppID0gYCR7dXRpbC5nZXRFbW9qaSh0ZWFtLCBnZSl9ICR7bmFtZX1gO1xuICB9XG5cbiAgZGlhbW9uZExvY2F0aW9uc1snJGJhdHRpbmcnXVxuICAgIC50ZXh0KG5hbWVXaXRoRW1vamkpO1xufTtcblxuY29uc3QgZHJhd1BpdGNoZXIgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICAvL2NvbnN0IG1sID0gaGlnaGxpZ2h0Lm1sdXN0YXJkO1xuICBjb25zdCBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgY29uc3QgZ2UgPSBjdXIuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgY29uc3QgdGVhbSA9IGdlLnRvcE9mSW5uaW5nID8gJ2hvbWUnIDogJ2F3YXknO1xuICBsZXQgbmFtZVdpdGhFbW9qaSA9ICcnO1xuXG4gIGlmIChnZVtgJHt0ZWFtfVBpdGNoZXJOYW1lYF0pIHtcbiAgICBjb25zdCBuYW1lID0gdXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwoZ2VbYCR7dGVhbX1QaXRjaGVyTmFtZWBdKTtcbiAgICBuYW1lV2l0aEVtb2ppID0gYCR7dXRpbC5nZXRFbW9qaSh0ZWFtLCBnZSl9ICR7bmFtZX1gO1xuICB9XG5cbiAgZGlhbW9uZExvY2F0aW9uc1snJG1vdW5kJ11cbiAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbn07XG5cbmNvbnN0IGRyYXdCYXNlcnVubmVycyA9IChoaWdobGlnaHRzKSA9PiB7XG4gIGNvbnN0IGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBjb25zdCBtbCA9IGN1ci5tbHVzdGFyZDtcbiAgY29uc3QgZ2UgPSBjdXIuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgY29uc3QgdGVhbSA9IGdlLnRvcE9mSW5uaW5nID8gJ2F3YXknIDogJ2hvbWUnO1xuXG4gIGlmIChtbCAmJiBtbC5iYXNlUnVubmVycykge1xuICAgIGZvciAobGV0IGJhc2Ugb2YgQkFTRVMpIHtcbiAgICAgIGxldCBuYW1lID0gbWwuYmFzZVJ1bm5lcnNbYmFzZV0ucGxheWVyTmFtZTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgbGV0IG5hbWVXaXRoRW1vamkgPSBgJHt1dGlsLmdldEVtb2ppKHRlYW0sIGdlKX0gJHt1dGlsLmdldFBsYXllck5hbWVXaXRoSW5pdGlhbChuYW1lKX1gO1xuICAgICAgICBkaWFtb25kTG9jYXRpb25zW2AkJHtiYXNlfWBdXG4gICAgICAgICAgLnRleHQobmFtZVdpdGhFbW9qaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaWFtb25kTG9jYXRpb25zW2AkJHtiYXNlfWBdXG4gICAgICAgICAgLnRleHQoJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZHJhd1Njb3JlYm9hcmQgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICBjb25zdCBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgY29uc3QgbWwgPSBjdXIubWx1c3RhcmQ7XG4gIGNvbnN0IGdlID0gY3VyLmdhbWVFdmVudC5kYXRhO1xuXG4gIGNvbnN0ICRzY29yZWJvYXJkID0gJCgnI2RpYW1vbmRfX3Njb3JlYm9hcmQnKTtcblxuICAvLyBzY29yZVxuICBjb25zdCAkaG9tZSA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLXRlYW1zX19ob21lIHNwYW4nKTtcbiAgJGhvbWUuZmlyc3QoKS50ZXh0KHRlYW1zRGF0YVtnZS5ob21lVGVhbV0uc2hvcnRoYW5kKTtcbiAgJGhvbWUubGFzdCgpLnRleHQoZ2UuaG9tZVNjb3JlKTtcblxuICBjb25zdCAkYXdheSA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLXRlYW1zX19hd2F5IHNwYW4nKTtcbiAgJGF3YXkuZmlyc3QoKS50ZXh0KHRlYW1zRGF0YVtnZS5hd2F5VGVhbV0uc2hvcnRoYW5kKTtcbiAgJGF3YXkubGFzdCgpLnRleHQoZ2UuYXdheVNjb3JlKTtcblxuICAvLyBiYXNlc1xuICBjb25zdCAkYmFzZXMgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1iYXNlcycpO1xuICAkYmFzZXMuZW1wdHkoKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChtbC5iYXNlUnVubmVycy50aGlyZC5wbGF5ZXJOYW1lKSk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQobWwuYmFzZVJ1bm5lcnMuc2Vjb25kLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChtbC5iYXNlUnVubmVycy5maXJzdC5wbGF5ZXJOYW1lKSk7XG5cbiAgLy8gY291bnRcbiAgY29uc3QgJGNvdW50ID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtY291bnRfX2NvdW50IHNwYW4nKTtcbiAgJGNvdW50LmZpcnN0KCkudGV4dChnZS5hdEJhdEJhbGxzKTtcbiAgJGNvdW50Lmxhc3QoKS50ZXh0KGdlLmF0QmF0U3RyaWtlcyk7XG4gIGNvbnN0ICRvdXRzID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtY291bnRfX291dHMgc3BhbicpO1xuICAkb3V0cy50ZXh0KGdlLmhhbGZJbm5pbmdPdXRzKTtcblxuICAvLyBpbm5pbmdcbiAgY29uc3QgJGlubmluZyA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLW90aGVyX19pbm5pbmcgc3BhbicpO1xuICAkaW5uaW5nLmZpcnN0KCkudGV4dChnZS50b3BPZklubmluZyA/ICdUT1AnIDogJ0JPVCcpO1xuICAkaW5uaW5nLmxhc3QoKS50ZXh0KHV0aWwuZ2V0SW5uaW5nVGV4dChnZS5pbm5pbmcgKyAxKSk7XG5cbiAgLy8gd2VhdGhlclxuICBjb25zdCAkd2VhdGhlciA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLW90aGVyX193ZWF0aGVyIHNwYW4nKTtcbiAgJHdlYXRoZXJcbiAgICAudGV4dCh3ZWF0aGVyW2dlLndlYXRoZXJdLmljb24gfHwgd2VhdGhlcltnZS53ZWF0aGVyXS5uYW1lKVxuICAgIC5hdHRyKCd0aXRsZScsIHdlYXRoZXJbZ2Uud2VhdGhlcl0ubmFtZSk7XG59O1xuXG5jb25zdCB1cGRhdGVEaWFtb25kID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgZHJhd0JhdHRlcihoaWdobGlnaHRzKTtcbiAgZHJhd1BpdGNoZXIoaGlnaGxpZ2h0cyk7XG4gIGRyYXdCYXNlcnVubmVycyhoaWdobGlnaHRzKTtcblxuICBkcmF3U2NvcmVib2FyZChoaWdobGlnaHRzKTtcbn07XG5cbmNvbnN0IHNob3dWaXN1YWwgPSAodmlzdWFsKSA9PiB7XG4gIHN3aXRjaCAodmlzdWFsKSB7XG4gICAgY2FzZSAnaW50cm8nOlxuICAgICAgJCgnI2ludHJvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2RpYW1vbmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICAkKCcjaW50cm8nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjZGlhbW9uZCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXBkYXRlRGlhbW9uZCxcbiAgc2hvd1Zpc3VhbCxcbn07XG5cbiJdfQ==
