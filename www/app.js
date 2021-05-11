(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = {
  // sunbeams
  'f02aeae2-5e6a-4098-9842-02d2273f25c7': {
    colours: {
      main: 'fffbab',
      grass: 'e8c877',
      dirt: 'ffffff',
      dirtOutline: '1d1932',
      neutral: 'f3f4f5',
    },
    homeLogoURL: './images/logo-sunbeams.png',
  },
};

module.exports = {
  data,
};


},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{"./quips.json":5,"./tracery-mods":6,"tracery-grammar":17}],4:[function(require,module,exports){
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
},{"./commentary":2,"./grammar":3,"mlustard":11}],5:[function(require,module,exports){
module.exports={"data":["inning","topOfInning","halfInningOuts","homeTeamName","awayTeamName","homeTeamNickname","awayTeamNickname","homeScore","awayScore","homeOdds","awayOdds","homePitcherName","awayPitcherName","lastUpdate","scoreUpdate"],"minimal":{"matchup":["#hNick# vs #aNick#","#aNick# at #hNick#"],"topOrBot":"#topOfInning#","inningFull":"#topOrBot# of #inning#","gameStart":"#matchup#. #pitchers#. #original#","score":"#original# It's #lTeam.the# #lScore# and #tTeam.the# #tScore#.","scoreAddon":" It's #lTeam.the# #lScore# and #tTeam.the# #tScore#.","inningStart":"#original# #cPitcher# pitching for #pNick.the#.","inningOneStart":"#original#","pitchers":["#hPitcher# pitching for #hNick.the#, #aPitcher# for #aNick.the#","Our pitchers are #hPitcher# for #hNick.the#, and #aPitcher# for #aNick.the#"],"out":"#original# #inningFull.capitalize#, #outs#.","outs":"#halfInningOuts.outs#","lastOutOfInning":"#original#","batterUpRunners":"#original# #runners.runnerPluralize#","runnersOnBase":"Runner on #basesOcc.and#.","basesLoaded":"Bases are loaded!"},"shortcuts":{"hPitcher":"#homePitcherName#","aPitcher":"#awayPitcherName#","hNick":"#homeTeamNickname#","aNick":"#awayTeamNickname#","hScore":"#homeScore#","aScore":"#awayScore#","original":"#lastUpdate##scoreUpdate.spaced#"}}
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
},{"./util":15}],9:[function(require,module,exports){
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
},{"./util":15}],10:[function(require,module,exports){
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
},{"./util":15}],11:[function(require,module,exports){
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
},{"./base-runners":7,"./game-status":8,"./hits":9,"./misc":10,"./outs":12,"./special":13,"./steals":14,"./walks":16}],12:[function(require,module,exports){
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
},{"./util":15}],13:[function(require,module,exports){
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
},{"./util":15}],14:[function(require,module,exports){
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
},{"./util":15}],15:[function(require,module,exports){
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
},{}],16:[function(require,module,exports){
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
},{"./util":15}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
const util = require('./util');
const highlight = require('./highlight');

let ready = false;

let $dialogs;
let $lineOne;
let $lineTwo;
let $next;

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
  $next = $('#highlights-dialog__next');

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
  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideNext();
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

    showNext();
  }

  if (lineOneAnimating) {
    stopAnimate('one');

    // if there's text in lineTwo, animate it
    if ($lineTwo.text().length) {
      animate('two');
    } else {
      showNext();
    }
  }
};

// show next arrow if:
// there are parts left to this highlight
// there are highlights left to the story
const showNext = () => {
  // todo: show arrow if next, but move into outro
  if (highlight.hasDialogLeft(cur) || next) {
    $next.addClass('show');
  }
};

const hideNext = () => {
  $next.removeClass('show');
};

const continueHighlight = (highlights) => {
  cur = highlights.cur;
  prev = highlights.prev;
  next = highlights.next;

  if (!cur.started) { return false; }

  cur.curDialogPart++;

  // no more text to this highlight
  if (cur.curDialogPart === cur.dialogParts.length) {
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
  setIntro,
};


},{"./highlight":21,"./util":23}],19:[function(require,module,exports){
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


},{}],20:[function(require,module,exports){
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

const makeBaseDiamond = (occ) => {
  const $diamond = $('<span>').addClass('diamond');

  if (occ) {
    $diamond.addClass('filled');
  }

  return $diamond;
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
  $bases.append(makeBaseDiamond(gameEv.mlustard.baseRunners.third.playerName));
  $bases.append(makeBaseDiamond(gameEv.mlustard.baseRunners.second.playerName));
  $bases.append(makeBaseDiamond(gameEv.mlustard.baseRunners.first.playerName));
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


},{"./highlight":21,"./util":23,"mlustard":11}],21:[function(require,module,exports){
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

module.exports = {
  makeHighlight,
  hasDialogLeft,
};


},{"grand-slalami":4}],22:[function(require,module,exports){
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

const playHighlight = () => {
  // do nothing if there's no more highlights
  if (highlights.length === curHighlight) { return };

  // if we're in the intro, start at the first highlight
  //if (intro) {
    //intro = false;
    //$('#intro').addClass('d-none');
    //$('#diamond').removeClass('d-none');

    //nextHighlight();
    //return;
  //}

  // try to advance the highlight, if there's more text to animate
  if (!continueHighlight()) {
    curHighlight++;

    // if there are no more highlights, move into outro
    if (highlights.length === curHighlight) {
      // todo: outro
      return;
    }

    // otherwise, show the next highlight
    nextHighlight();
  }
};

const handleAction = (evt) => {
  if (evt.type === 'keyup' && !(
    evt.keyCode === 32 || // space
    evt.keyCode === 39 || // arrow right
    evt.keyCode === 40    // arrow down
  )) {
    return;
  }

  playHighlight();
};

const setupIntro = () => {
  // grab game info from first highlight
  const gameEv = highlights[0].gameEvent.data;
  const $home = $('#intro .vs-logo__home');
  const $away = $('#intro .vs-logo__away');

  let hNick = gameEv.homeTeamNickname.split(' ').pop().toLowerCase();
  let aNick = gameEv.awayTeamNickname.split(' ').pop().toLowerCase();

  if (aNick === 'mechanics') {
    aNick += '-away';
  }

  $('#intro .game-name').text(`Season ${gameEv.season + 1}, Day ${gameEv.day + 1}`);
  $home.attr('src', `./images/logo-${hNick}.png`);
  $away.attr('src', `./images/logo-${aNick}.png`);

  // georgias don't have a standard size logo
  if (hNick === 'georgias') {
    $home.css('height', 'auto');
  }

  if (aNick === 'georgias') {
    $away.css('height', 'auto');
  }

  // set the diamond colours and add the diamond css
  const homeTeam = teamsData.data[gameEv.homeTeam];
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

  // add intro text to dialog
  //$('#highlights-dialog__text-one')
    //.text(`Season ${gameEv.season + 1}, Day ${gameEv.day + 1}. ${gameEv.homeTeamName}`);
  //$('#highlights-dialog__text-two')
    //.text(`vs. the ${gameEv.awayTeamName}.`);
};

const onHighlightsReady = (hls) => {
  highlights = hls;

  setupIntro();

  $(document).on('keyup', handleAction);
  $('#highlights-dialog__container').on('click', handleAction);
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

},{"../lib/teams-data":1,"./dialog":18,"./downloader":19,"./game-event-selector":20,"./visual":24}],23:[function(require,module,exports){
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

module.exports = {
  prefixedOn,
  getEmoji,
  getPlayerNameWithInitial ,
};


},{}],24:[function(require,module,exports){
const util = require('./util');

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


},{"./util":23}]},{},[22])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdGVhbXMtZGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL2NvbW1lbnRhcnkuanMiLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC9ncmFtbWFyLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvZ3JhbmQtc2xhbGFtaS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL3F1aXBzLmpzb24iLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC90cmFjZXJ5LW1vZHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvYmFzZS1ydW5uZXJzLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL2dhbWUtc3RhdHVzLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL2hpdHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvbWlzYy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9tbHVzdGFyZC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9vdXRzLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL3NwZWNpYWwuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvc3RlYWxzLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL3V0aWwuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvd2Fsa3MuanMiLCJub2RlX21vZHVsZXMvdHJhY2VyeS1ncmFtbWFyL3RyYWNlcnkuanMiLCJzcmMvZGlhbG9nLmpzIiwic3JjL2Rvd25sb2FkZXIuanMiLCJzcmMvZ2FtZS1ldmVudC1zZWxlY3Rvci5qcyIsInNyYy9oaWdobGlnaHQuanMiLCJzcmMvbWFpbi5qcyIsInNyYy91dGlsLmpzIiwic3JjL3Zpc3VhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcjJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGRhdGEgPSB7XG4gIC8vIHN1bmJlYW1zXG4gICdmMDJhZWFlMi01ZTZhLTQwOTgtOTg0Mi0wMmQyMjczZjI1YzcnOiB7XG4gICAgY29sb3Vyczoge1xuICAgICAgbWFpbjogJ2ZmZmJhYicsXG4gICAgICBncmFzczogJ2U4Yzg3NycsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMWQxOTMyJyxcbiAgICAgIG5ldXRyYWw6ICdmM2Y0ZjUnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXN1bmJlYW1zLnBuZycsXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YSxcbn07XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnVpbGRDb21tZW50ID0gZnVuY3Rpb24gYnVpbGRDb21tZW50KHNldHRpbmdzLCBncmFtbWFyKSB7XG4gIHZhciBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gIHZhciBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkOyAvLyBjaGVjayBmb3IgZ2FtZSBzdGF0dXNcblxuICBzd2l0Y2ggKG1sdXN0YXJkLmdhbWVTdGF0dXMpIHtcbiAgICBjYXNlICdiZWZvcmVGaXJzdFBpdGNoJzpcbiAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNnYW1lU3RhcnQjJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ZpcnN0SGFsZklubmluZ1N0YXJ0JzpcbiAgICAgIGlmIChnYW1lRXZlbnQuaW5uaW5nID09PSAwKSB7XG4gICAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdPbmVTdGFydCMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdTdGFydCMnKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzZWNvbmRIYWxmSW5uaW5nU3RhcnQnOlxuICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2lubmluZ1N0YXJ0IycpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgY29tbWVudCA9ICcnOyAvLyBjaGVjayBmb3Igb3V0c1xuXG4gIGlmIChtbHVzdGFyZC5vdXQpIHtcbiAgICBpZiAobWx1c3RhcmQuZ2FtZVN0YXR1cyA9PT0gJ2hhbGZJbm5pbmdFbmQnKSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI2xhc3RPdXRPZklubmluZyMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNvdXQjJyk7XG4gICAgfVxuICB9IC8vIGNoZWNrIGZvciBzY29yZVxuXG5cbiAgaWYgKG1sdXN0YXJkLnJ1bnNTY29yZWQgIT09IDAgfHwgbWx1c3RhcmQudW5ydW5zU2NvcmVkICE9PSAwIHx8IC8vIHNjb3JlIGNoYW5nZSBkdWUgdG8gc2FsbW9uIHN0ZWFsaW5nIHJ1bnNcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnc2FsbW9uJyAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5kZXRhaWxzICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmRldGFpbHMucnVuc1N0b2xlbi5sZW5ndGggfHwgLy8gc2NvcmUgY2hhbmdlIGZyb20gc3VuIDIgc21pbGluZ1xuICBtbHVzdGFyZC5zcGVjaWFsICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmtpbmQgPT09ICdzdW4yJyB8fCAvLyBzY29yZSBjaGFuZ2UgZnJvbSBibGFjayBob2xlIHN3YWxsb3dpbmdcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnYmxhY2tIb2xlJykge1xuICAgIGlmIChjb21tZW50KSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI3Njb3JlQWRkb24jJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjc2NvcmUjJyk7XG4gICAgfVxuICB9IC8vIGNoZWNrIGlmIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIGF0IHRoZSBwbGF0ZVxuXG5cbiAgaWYgKG1sdXN0YXJkLmJhdHRlclVwICYmIGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQpIHtcbiAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI2JhdHRlclVwUnVubmVycyMnKTtcbiAgfSAvLyByZXR1cm4gdGhlIGNvbW1lbnQgaWYgaXQgd2FzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aGUgb3JpZ2luYWwgdXBkYXRlIGlmIGl0XG4gIC8vIGV4aXN0cywgb3RoZXJ3aXNlIGFuIGVtcHR5IHN0cmluZ1xuXG5cbiAgcmV0dXJuIGNvbW1lbnQgfHwgZ2FtZUV2ZW50Lmxhc3RVcGRhdGUgfHwgJyc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnVpbGRDb21tZW50OiBidWlsZENvbW1lbnRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciB0cmFjZXJ5ID0gcmVxdWlyZSgndHJhY2VyeS1ncmFtbWFyJyk7XG5cbnZhciBtb2RzID0gcmVxdWlyZSgnLi90cmFjZXJ5LW1vZHMnKTtcblxudmFyIHF1aXBzID0gcmVxdWlyZSgnLi9xdWlwcy5qc29uJyk7XG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChzZXR0aW5ncykge1xuICB2YXIgc2VlZCA9IHNldHRpbmdzLnNlZWQ7XG4gIHZhciBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gIHZhciBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkO1xuICB2YXIgb3ZlcnJpZGVzID0gc2V0dGluZ3Mub3ZlcnJpZGVzO1xuICB2YXIgbGV2ZWwgPSBzZXR0aW5ncy5sZXZlbDtcblxuICBpZiAoc2VlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHJhY2VyeS5zZXRSYW5kb20oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlZWQ7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgZ3JhbW1hciA9IHRyYWNlcnkuY3JlYXRlR3JhbW1hcih7fSk7IC8vIHBvcHVsYXRlIGRhdGEgZnJvbSBnYW1lRXZlbnRcblxuICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIocXVpcHMuZGF0YSksXG4gICAgICBfc3RlcDtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX2ZpZWxkMyA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIGRhdGEgPSBnYW1lRXZlbnRbX2ZpZWxkM107XG5cbiAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gc29tZSBkYXRhIG5lZWRzIG1hc3NhZ2luZ1xuICAgICAgICBzd2l0Y2ggKF9maWVsZDMpIHtcbiAgICAgICAgICBjYXNlICdpbm5pbmcnOlxuICAgICAgICAgICAgZGF0YSA9IChkYXRhICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndG9wT2ZJbm5pbmcnOlxuICAgICAgICAgICAgZGF0YSA9IGRhdGEgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdoYWxmSW5uaW5nT3V0cyc6XG4gICAgICAgICAgY2FzZSAnaG9tZVNjb3JlJzpcbiAgICAgICAgICBjYXNlICdhd2F5U2NvcmUnOlxuICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkMywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQzLCAnJyk7XG4gICAgICB9XG4gICAgfSAvLyBjdXJyZW50IHBpdGNoZXJcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvci5mKCk7XG4gIH1cblxuICB2YXIgY1BpdGNoZXIgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyBnYW1lRXZlbnQuaG9tZVBpdGNoZXJOYW1lIDogZ2FtZUV2ZW50LmF3YXlQaXRjaGVyTmFtZTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2NQaXRjaGVyJywgY1BpdGNoZXIpOyAvLyBjdXJyZW50IGJhdHRlciAoY2FuIGJlIGFuIGVtcHR5IHN0cmluZyBpZiBub2JvZHkgYmF0dGluZylcblxuICB2YXIgY0JhdHRlciA9IGdhbWVFdmVudC5ob21lQmF0dGVyTmFtZSB8fCBnYW1lRXZlbnQuYXdheUJhdHRlck5hbWU7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdjQmF0dGVyJywgY0JhdHRlcik7IC8vIHBpdGNoaW5nIHRlYW0gbmlja25hbWVcblxuICB2YXIgcE5pY2sgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyAnI2hOaWNrIycgOiAnI2FOaWNrIyc7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdwTmljaycsIHBOaWNrKTsgLy8gYmF0dGluZyB0ZWFtIG5pY2tuYW1lXG5cbiAgdmFyIGJOaWNrID0gZ2FtZUV2ZW50LnRvcE9mSW5uaW5nID8gJyNhTmljayMnIDogJyNoTmljayMnO1xuICBncmFtbWFyLnB1c2hSdWxlcygnYk5pY2snLCBiTmljayk7IC8vIGxlYWRpbmcgJiB0cmFpbGluZyB0ZWFtIG5pY2tuYW1lcyBhbmQgc2NvcmVzXG5cbiAgdmFyIGxUZWFtO1xuICB2YXIgdFRlYW07XG4gIHZhciBsU2NvcmU7XG4gIHZhciB0U2NvcmU7XG5cbiAgaWYgKGdhbWVFdmVudC5hd2F5U2NvcmUgPiBnYW1lRXZlbnQuaG9tZVNjb3JlKSB7XG4gICAgbFRlYW0gPSAnI2FOaWNrIyc7XG4gICAgdFRlYW0gPSAnI2hOaWNrIyc7XG4gICAgbFNjb3JlID0gJyNhU2NvcmUjJztcbiAgICB0U2NvcmUgPSAnI2hTY29yZSMnO1xuICB9IGVsc2Uge1xuICAgIGxUZWFtID0gJyNoTmljayMnO1xuICAgIHRUZWFtID0gJyNhTmljayMnO1xuICAgIGxTY29yZSA9ICcjaFNjb3JlIyc7XG4gICAgdFNjb3JlID0gJyNhU2NvcmUjJztcbiAgfVxuXG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdsVGVhbScsIGxUZWFtKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3RUZWFtJywgdFRlYW0pO1xuICBncmFtbWFyLnB1c2hSdWxlcygnbFNjb3JlJywgbFNjb3JlKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3RTY29yZScsIHRTY29yZSk7IC8vIHNldCBiYXNlIHJ1bm5lcnNcblxuICBpZiAoZ2FtZUV2ZW50LmJhc2VydW5uZXJDb3VudCA+PSAzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoJ3J1bm5lcnMnLCAnI2Jhc2VzTG9hZGVkIycpO1xuICB9IGVsc2UgaWYgKGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQgPiAwKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoJ3J1bm5lcnMnLCAnI3J1bm5lcnNPbkJhc2UjJyk7XG4gIH1cblxuICB2YXIgYmFzZXMgPSAnJztcblxuICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKG1sdXN0YXJkLmJhc2VSdW5uZXJzKTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGJhc2UgPSBfT2JqZWN0JGtleXNbX2ldO1xuXG4gICAgaWYgKG1sdXN0YXJkLmJhc2VSdW5uZXJzW2Jhc2VdLnBsYXllcklkKSB7XG4gICAgICBiYXNlcyArPSBcIlwiLmNvbmNhdChiYXNlLCBcIiBcIik7XG4gICAgfVxuICB9XG5cbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2Jhc2VzT2NjJywgYmFzZXMudHJpbSgpKTsgLy8gYnVpbGQgcXVpcHMgc2hvcnRjdXRzXG5cbiAgZm9yICh2YXIgZmllbGQgaW4gcXVpcHMuc2hvcnRjdXRzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoZmllbGQsIHF1aXBzLnNob3J0Y3V0c1tmaWVsZF0pO1xuICB9IC8vIGJ1aWxkIHF1aXBzIGdyYW1tYXJcblxuXG4gIGZvciAodmFyIF9maWVsZCBpbiBxdWlwc1tsZXZlbF0pIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQsIHF1aXBzW2xldmVsXVtfZmllbGRdKTtcbiAgfSAvLyBkbyBxdWlwIG92ZXJyaWRlc1xuXG5cbiAgZm9yICh2YXIgX2ZpZWxkMiBpbiBvdmVycmlkZXMpIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQyLCBvdmVycmlkZXNbX2ZpZWxkMl0pO1xuICB9IC8vIGFkZCBtb2RzXG5cblxuICBncmFtbWFyLmFkZE1vZGlmaWVycyh0cmFjZXJ5LmJhc2VFbmdNb2RpZmllcnMpO1xuICBncmFtbWFyLmFkZE1vZGlmaWVycyhtb2RzKTtcbiAgcmV0dXJuIGdyYW1tYXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdDogaW5pdFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1sdXN0YXJkID0gcmVxdWlyZSgnbWx1c3RhcmQnKTtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKTtcblxudmFyIGNvbW1lbnRhcnkgPSByZXF1aXJlKCcuL2NvbW1lbnRhcnknKTtcbi8qXG4gKiBAc2V0dGluZ3MgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wczpcbiAqICAgLSBnYW1lRXZlbnQ6IHRoZSBnYW1lIGV2ZW50IG9iamVjdCAoZnJvbSB0aGUgc3RyZWFtIG9yIGNocm9uaWNsZXIpXG4gKiAgIC0gbWx1c3RhcmQgKG9wdGlvbmFsKTogbWx1c3RhcmQgZGF0YSBmb3IgdGhlIGdhbWVFdmVudFxuICogICAtIHNlZWQgKG9wdGlvbmFsKTogYSBzZWVkLCBmb3IgZGV0ZXJtaW5pc3RpYyBjb21tZW50IGdlbmVyYXRpb25cbiAqICAgLSBsZXZlbCAob3B0aW9uYWwsIGRlZmF1bHRzIHRvICdtaW5pbWFsJyk6IHRoZSBjb21tZW50YXJ5IGxldmVsLCBvbmUgb2ZcbiAqICAgICAtIG1pbmltYWw6IGFkZHMgYSBmZXcgY29tbWVudHMgdG8gdXBkYXRlIG9uIGdhbWUgc3RhdHVzIGF0IGtleSBjb21tZW50c1xuICogICAtIG92ZXJyaWRlcyAob3B0aW9uYWwpOiBvYmplY3Qgd2l0aCBxdWlwIG92ZXJyaWRlc1xuICovXG5cblxudmFyIGdldENvbW1lbnQgPSBmdW5jdGlvbiBnZXRDb21tZW50KHNldHRpbmdzKSB7XG4gIGlmICghc2V0dGluZ3MuZ2FtZUV2ZW50KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgc2V0dGluZ3MubWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZCB8fCBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KHNldHRpbmdzLmdhbWVFdmVudCk7XG4gIHNldHRpbmdzLmxldmVsID0gc2V0dGluZ3MubGV2ZWwgfHwgJ21pbmltYWwnO1xuICBzZXR0aW5ncy5vdmVycmlkZXMgPSBzZXR0aW5ncy5vdmVycmlkZXMgfHwge307XG4gIHZhciBnciA9IGdyYW1tYXIuaW5pdChzZXR0aW5ncyk7XG5cbiAgaWYgKCFncikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjb21tZW50YXJ5LmJ1aWxkQ29tbWVudChzZXR0aW5ncywgZ3IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbW1lbnQ6IGdldENvbW1lbnRcbn07IiwibW9kdWxlLmV4cG9ydHM9e1wiZGF0YVwiOltcImlubmluZ1wiLFwidG9wT2ZJbm5pbmdcIixcImhhbGZJbm5pbmdPdXRzXCIsXCJob21lVGVhbU5hbWVcIixcImF3YXlUZWFtTmFtZVwiLFwiaG9tZVRlYW1OaWNrbmFtZVwiLFwiYXdheVRlYW1OaWNrbmFtZVwiLFwiaG9tZVNjb3JlXCIsXCJhd2F5U2NvcmVcIixcImhvbWVPZGRzXCIsXCJhd2F5T2Rkc1wiLFwiaG9tZVBpdGNoZXJOYW1lXCIsXCJhd2F5UGl0Y2hlck5hbWVcIixcImxhc3RVcGRhdGVcIixcInNjb3JlVXBkYXRlXCJdLFwibWluaW1hbFwiOntcIm1hdGNodXBcIjpbXCIjaE5pY2sjIHZzICNhTmljayNcIixcIiNhTmljayMgYXQgI2hOaWNrI1wiXSxcInRvcE9yQm90XCI6XCIjdG9wT2ZJbm5pbmcjXCIsXCJpbm5pbmdGdWxsXCI6XCIjdG9wT3JCb3QjIG9mICNpbm5pbmcjXCIsXCJnYW1lU3RhcnRcIjpcIiNtYXRjaHVwIy4gI3BpdGNoZXJzIy4gI29yaWdpbmFsI1wiLFwic2NvcmVcIjpcIiNvcmlnaW5hbCMgSXQncyAjbFRlYW0udGhlIyAjbFNjb3JlIyBhbmQgI3RUZWFtLnRoZSMgI3RTY29yZSMuXCIsXCJzY29yZUFkZG9uXCI6XCIgSXQncyAjbFRlYW0udGhlIyAjbFNjb3JlIyBhbmQgI3RUZWFtLnRoZSMgI3RTY29yZSMuXCIsXCJpbm5pbmdTdGFydFwiOlwiI29yaWdpbmFsIyAjY1BpdGNoZXIjIHBpdGNoaW5nIGZvciAjcE5pY2sudGhlIy5cIixcImlubmluZ09uZVN0YXJ0XCI6XCIjb3JpZ2luYWwjXCIsXCJwaXRjaGVyc1wiOltcIiNoUGl0Y2hlciMgcGl0Y2hpbmcgZm9yICNoTmljay50aGUjLCAjYVBpdGNoZXIjIGZvciAjYU5pY2sudGhlI1wiLFwiT3VyIHBpdGNoZXJzIGFyZSAjaFBpdGNoZXIjIGZvciAjaE5pY2sudGhlIywgYW5kICNhUGl0Y2hlciMgZm9yICNhTmljay50aGUjXCJdLFwib3V0XCI6XCIjb3JpZ2luYWwjICNpbm5pbmdGdWxsLmNhcGl0YWxpemUjLCAjb3V0cyMuXCIsXCJvdXRzXCI6XCIjaGFsZklubmluZ091dHMub3V0cyNcIixcImxhc3RPdXRPZklubmluZ1wiOlwiI29yaWdpbmFsI1wiLFwiYmF0dGVyVXBSdW5uZXJzXCI6XCIjb3JpZ2luYWwjICNydW5uZXJzLnJ1bm5lclBsdXJhbGl6ZSNcIixcInJ1bm5lcnNPbkJhc2VcIjpcIlJ1bm5lciBvbiAjYmFzZXNPY2MuYW5kIy5cIixcImJhc2VzTG9hZGVkXCI6XCJCYXNlcyBhcmUgbG9hZGVkIVwifSxcInNob3J0Y3V0c1wiOntcImhQaXRjaGVyXCI6XCIjaG9tZVBpdGNoZXJOYW1lI1wiLFwiYVBpdGNoZXJcIjpcIiNhd2F5UGl0Y2hlck5hbWUjXCIsXCJoTmlja1wiOlwiI2hvbWVUZWFtTmlja25hbWUjXCIsXCJhTmlja1wiOlwiI2F3YXlUZWFtTmlja25hbWUjXCIsXCJoU2NvcmVcIjpcIiNob21lU2NvcmUjXCIsXCJhU2NvcmVcIjpcIiNhd2F5U2NvcmUjXCIsXCJvcmlnaW5hbFwiOlwiI2xhc3RVcGRhdGUjI3Njb3JlVXBkYXRlLnNwYWNlZCNcIn19IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0aGU6IGZ1bmN0aW9uIHRoZShzKSB7XG4gICAgcmV0dXJuIFwidGhlIFwiLmNvbmNhdChzKTtcbiAgfSxcbiAgLy8gY291bnRzIHRoZSAjIG9mIG91dHMgYW5kIHBsdXJhbGl6ZXMgYWNjb3JkaW5nbHlcbiAgb3V0czogZnVuY3Rpb24gb3V0cyhzKSB7XG4gICAgaWYgKHMgPT09ICcxJykge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHMsIFwiIG91dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHMsIFwiIG91dHNcIik7XG4gICAgfVxuICB9LFxuICAvLyBveGZvcmQgY29tbWFzXG4gIGFuZDogZnVuY3Rpb24gYW5kKHMpIHtcbiAgICByZXR1cm4gcy5zcGxpdCgnICcpLmpvaW4oJywgJykucmVwbGFjZSgvLCAoW14sXSopJC8sICcgYW5kICQxJyk7XG4gIH0sXG4gIC8vIGZvciBwbHVyYWxpemluZyBydW5uZXIocykgb24gZmlyc3RbLCBzZWNvbmQgYW5kIHRoaXJkXVxuICBydW5uZXJQbHVyYWxpemU6IGZ1bmN0aW9uIHJ1bm5lclBsdXJhbGl6ZShzKSB7XG4gICAgaWYgKHMuaW5kZXhPZignLCcpID49IDAgfHwgcy5pbmRleE9mKCdhbmQnKSA+PSAwKSB7XG4gICAgICByZXR1cm4gcy5yZXBsYWNlKCdSdW5uZXInLCAnUnVubmVycycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gIH0sXG4gIC8vIGFkZHMgYSBzcGFjZSBiZWZvcmUgdGhlIHdvcmRcbiAgc3BhY2VkOiBmdW5jdGlvbiBzcGFjZWQocykge1xuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gXCIgXCIuY29uY2F0KHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vL2NvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBCQVNFUyA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCddO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIC8vY29uc3QgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIGlmIChldmVudERhdGEuYmFzZXJ1bm5lckNvdW50KSB7XG4gICAgLy8gaSByZXByZXNlbnRzIHRoZSBvcmRlciBvZiBiYXNlcnVubmVyc1xuICAgIC8vIGJhc2VzT2NjdXBpZWRbaV0gaXMgdGhlIGJhc2UgdGhleSBhcmUgb24sIDAtaW5kZXhlZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnREYXRhLmJhc2VzT2NjdXBpZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfZXZlbnREYXRhJGJhc2VSdW5uZXI7XG5cbiAgICAgIHZhciBiYXNlID0gZXZlbnREYXRhLmJhc2VzT2NjdXBpZWRbaV07XG4gICAgICBhbmFseXNpcy5iYXNlUnVubmVyc1tCQVNFU1tiYXNlXV0gPSB7XG4gICAgICAgIHBsYXllck5hbWU6ICgoX2V2ZW50RGF0YSRiYXNlUnVubmVyID0gZXZlbnREYXRhLmJhc2VSdW5uZXJOYW1lcykgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRiYXNlUnVubmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGJhc2VSdW5uZXJbaV0pIHx8ICcnLFxuICAgICAgICBwbGF5ZXJJZDogZXZlbnREYXRhLmJhc2VSdW5uZXJzW2ldXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgX2V2ZW50RGF0YSRob21lVGVhbU5pLCBfZXZlbnREYXRhJGF3YXlUZWFtTmk7XG5cbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuICB2YXIgaG9tZSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRob21lVGVhbU5pID0gZXZlbnREYXRhLmhvbWVUZWFtTmlja25hbWUpID09PSBudWxsIHx8IF9ldmVudERhdGEkaG9tZVRlYW1OaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRob21lVGVhbU5pLnRvTG93ZXJDYXNlKCkpIHx8ICcnO1xuICB2YXIgaG9tZVNjb3JlID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lU2NvcmUpIHx8IDA7XG4gIHZhciBhd2F5ID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGF3YXlUZWFtTmkgPSBldmVudERhdGEuYXdheVRlYW1OaWNrbmFtZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRhd2F5VGVhbU5pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGF3YXlUZWFtTmkudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG4gIHZhciBhd2F5U2NvcmUgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlTY29yZSkgfHwgMDtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3BsYXkgYmFsbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2JlZm9yZUZpcnN0UGl0Y2gnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCd0b3Agb2YnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdmaXJzdEhhbGZJbm5pbmdTdGFydCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2JvdHRvbSBvZicpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ3NlY29uZEhhbGZJbm5pbmdTdGFydCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dhbWUgb3ZlcicpID49IDAgfHwgdXBkYXRlLmluZGV4T2YoXCJcIi5jb25jYXQoaG9tZSwgXCIgXCIpLmNvbmNhdChob21lU2NvcmUsIFwiLCBcIikuY29uY2F0KGF3YXksIFwiIFwiKS5jb25jYXQoYXdheVNjb3JlKSkgPj0gMCB8fCB1cGRhdGUuaW5kZXhPZihcIlwiLmNvbmNhdChhd2F5LCBcIiBcIikuY29uY2F0KGF3YXlTY29yZSwgXCIsIFwiKS5jb25jYXQoaG9tZSwgXCIgXCIpLmNvbmNhdChob21lU2NvcmUpKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdnYW1lRW5kJztcbiAgfVxuXG4gIGlmIChhbmFseXNpcy5nYW1lU3RhdHVzKSB7XG4gICAgcmV0dXJuIGFuYWx5c2lzO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrSGl0UmJpUHJlUzEyID0gZnVuY3Rpb24gY2hlY2tIaXRSYmlQcmVTMTIoYW5hbHlzaXMsIHVwZGF0ZSkge1xuICAvLyBmcm9tIHNvbWUgbm9uLWV4aGF1c3RpdmUgcmVzZWFyY2gsIGkgdGhpbmsgdGhlcmUgd2VyZW4ndCBhbnkgZ3JhbmQgc2xhbXNcbiAgLy8gcHJlLXMxMiB0aGF0IHdlcmUgbm90IDQgcnVuc1xuICBpZiAoYW5hbHlzaXMuaGl0TWV0YS5raW5kID09PSAnZ3JhbmRTbGFtJykge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSA0O1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiBhIHNpbmdsZS9kb3VibGUvdHJpcGxlIHdhcyBoaXQgJiB4IHJ1bnMgd2VyZSBzY29yZWQsIGl0IHNob3dzIHVwXG4gIC8vIGF0IHRoZSBlbmQgb2YgdGhlIHVwZGF0ZSBhcyBcIi4uLiEgeCBzY29yZXNcIlxuXG5cbiAgdmFyIHJ1bnMgPSB1dGlsLmdldE51bWJlcih1cGRhdGUsIC8hIC8sIC8gc2NvcmVzLykgfHwgMDtcblxuICBpZiAocnVucykge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSBydW5zO1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiBhIHNvbG8gaG9tZSBydW4gd2FzIGhpdCwgdXBkYXRlIGNvbnRhaW5zIHRoZSB0ZXh0IFwic29sbyBob21lIHJ1blwiXG5cblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3NvbG8gaG9tZSBydW4nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgbXVsdGktcnVuIGhvbWUgcnVuIHdhcyBoaXQsIHVwZGF0ZSBjb250YWlucyB0aGUgdGV4dCBcIngtcnVuIGhvbWVcbiAgLy8gcnVuXCJcblxuXG4gIHJ1bnMgPSB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8tcnVuIGhvbWUgcnVuLykgfHwgMDtcblxuICBpZiAocnVucykge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSBydW5zO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdoaXRzIGEgc2luZ2xlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdzaW5nbGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdoaXRzIGEgZG91YmxlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdkb3VibGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdoaXRzIGEgdHJpcGxlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICd0cmlwbGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdob21lIHJ1bicpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnaG9tZVJ1bic7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dyYW5kIHNsYW0nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ2dyYW5kU2xhbSc7XG4gIH1cblxuICBpZiAoYW5hbHlzaXMuaGl0TWV0YS5raW5kKSB7XG4gICAgYW5hbHlzaXMuaGl0ID0gdHJ1ZTsgLy8gY2hlY2sgaWYgaG9tZSBydW4gLyBncmFuZCBzbGFtIGxhbmRlZCBpbiBiaWcgYnVja2V0XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2JhbGwgbGFuZHMgaW4gYSBiaWcgYnVja2V0JykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuaGl0TWV0YS5iaWdCdWNrZXQgPSB0cnVlO1xuICAgIH0gLy9mcm9tIHMxMiBvbndhcmQsIHNjb3JlcyBvbiB0aGUgcGxheSBhcmUgaW4gdGhlIHNjb3JlVXBkYXRlIGZpZWxkXG4gICAgLy9jb25zdCBzY29yZVVwZGF0ZSA9IGV2ZW50RGF0YT8uc2NvcmVVcGRhdGUgfHwgJyc7XG4gICAgLy9pZiAoc2NvcmVVcGRhdGUpIHtcbiAgICAvL2FuYWx5c2lzLnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcihzY29yZVVwZGF0ZSwgbnVsbCwgbnVsbCkgfHwgMDtcbiAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3JlVXBkYXRlLCBkZWR1Y2UgdGhlIHNjb3JlIGZyb20gdGhlIHVwZGF0ZVxuICAgIC8vIHRoaXMgaXMgdGhlIGNhc2UgZm9yIGdhbWVzIGJldHdlZW4gczIgJiBzMTFcblxuXG4gICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkpIHtcbiAgICAgIGNoZWNrSGl0UmJpUHJlUzEyKGFuYWx5c2lzLCB1cGRhdGUpO1xuICAgIH0gLy8gc2NvcmUgdXBkYXRlcyBmcm9tIHMxMiBvbndhcmQgcmVnaXN0ZXJlZCBpbiBzcmMvbWlzYy5qc1xuXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVja01heGltdW1CbGFzZWJhbGwgPSBmdW5jdGlvbiBjaGVja01heGltdW1CbGFzZWJhbGwoYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgYmFsbHMsIGJhc2VzLCBvdXRzLCBzdHJpa2VzO1xuXG4gIGlmIChldmVudERhdGEudG9wT2ZJbm5pbmcpIHtcbiAgICAvLyBhd2F5IGlzIGJhdHRpbmdcbiAgICBiYWxscyA9IGV2ZW50RGF0YS5hd2F5QmFsbHM7XG4gICAgYmFzZXMgPSBldmVudERhdGEuYXdheUJhc2VzO1xuICAgIG91dHMgPSBldmVudERhdGEuYXdheU91dHM7XG4gICAgc3RyaWtlcyA9IGV2ZW50RGF0YS5hd2F5U3RyaWtlcztcbiAgfSBlbHNlIHtcbiAgICAvLyBob21lIGlzIGJhdHRpbmdcbiAgICBiYWxscyA9IGV2ZW50RGF0YS5ob21lQmFsbHM7XG4gICAgYmFzZXMgPSBldmVudERhdGEuaG9tZUJhc2VzO1xuICAgIG91dHMgPSBldmVudERhdGEuaG9tZU91dHM7XG4gICAgc3RyaWtlcyA9IGV2ZW50RGF0YS5ob21lU3RyaWtlcztcbiAgfVxuXG4gIGlmIChldmVudERhdGEuaGFsZklubmluZ091dHMgPT09IG91dHMgLSAxICYmIGV2ZW50RGF0YS5hdEJhdEJhbGxzID09PSBiYWxscyAtIDEgJiYgZXZlbnREYXRhLmF0QmF0U3RyaWtlcyA9PT0gc3RyaWtlcyAtIDEgJiYgZXZlbnREYXRhLmJhc2VydW5uZXJDb3VudCA9PT0gYmFzZXMgLSAxKSB7XG4gICAgYW5hbHlzaXMubWF4aW11bUJsYXNlYmFsbCA9IHRydWU7XG4gIH1cbn07XG5cbnZhciBjaGVja1Njb3JlVXBkYXRlID0gZnVuY3Rpb24gY2hlY2tTY29yZVVwZGF0ZShhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBfZXZlbnREYXRhJHNjb3JlVXBkYXQ7XG5cbiAgdmFyIHNjb3JlVXBkYXRlID0gZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkc2NvcmVVcGRhdCA9IGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRzY29yZVVwZGF0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJHNjb3JlVXBkYXQudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoc2NvcmVVcGRhdGUpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIoc2NvcmVVcGRhdGUsIG51bGwsIC8gcnVucz8gc2NvcmUvKTtcbiAgICBhbmFseXNpcy51bnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcihzY29yZVVwZGF0ZSwgbnVsbCwgLyB1bnJ1bnM/IHNjb3JlLyk7XG4gIH1cbn07XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuICBjaGVja1Njb3JlVXBkYXRlKGFuYWx5c2lzLCBldmVudERhdGEpO1xuICBjaGVja01heGltdW1CbGFzZWJhbGwoYW5hbHlzaXMsIGV2ZW50RGF0YSk7IC8vIGNoZWNrIGZvciB3aGV0aGVyIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIHRvIGJhdFxuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignYmF0dGluZyBmb3InKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuYmF0dGVyVXAgPSB0cnVlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2FtZVN0YXR1cyA9IHJlcXVpcmUoJy4vZ2FtZS1zdGF0dXMnKTtcblxudmFyIG91dHMgPSByZXF1aXJlKCcuL291dHMnKTtcblxudmFyIGhpdHMgPSByZXF1aXJlKCcuL2hpdHMnKTtcblxudmFyIHN0ZWFscyA9IHJlcXVpcmUoJy4vc3RlYWxzJyk7XG5cbnZhciB3YWxrcyA9IHJlcXVpcmUoJy4vd2Fsa3MnKTtcblxudmFyIHNwZWNpYWwgPSByZXF1aXJlKCcuL3NwZWNpYWwnKTtcblxudmFyIG1pc2MgPSByZXF1aXJlKCcuL21pc2MnKTtcblxudmFyIGJhc2VSdW5uZXJzID0gcmVxdWlyZSgnLi9iYXNlLXJ1bm5lcnMnKTtcbi8qXG4gKiBzZXRzIGFsbCBrbm93biAoYWthIGltcGxlbWVudGVkKSBhbmFseXNpcyByZXN1bHRzIHRvIHRoZWlyIGRlZmF1bHNcbiAqIHJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvcHM6XG4gKlxuICogaWQ6IHN0cmluZyB8fCB1bmRlZmluZWRcbiAqICAgLSB0aGUgZ2FtZSBldmVudCBJRFxuICpcbiAqIHJ1bnNTY29yZWQ6IG51bWJlclxuICogICAtIGhvdyBtYW55IHJ1bnMgd2VyZSBzY29yZWQgb24gdGhlIHBsYXlcbiAqXG4gKiB1bnJ1bnNTY29yZWQ6IG51bWJlclxuICogICAtIGhvdyBtYW55IHVucnVucyB3ZXJlIHNjb3JlZCBvbiB0aGUgcGxheVxuICpcbiAqIGJhdHRlclVwOiBib29sZWFuXG4gKiAgIC0gd2hldGhlciBhIGJhdHRlciBqdXN0IHNob3dlZCB1cCB0byBiYXRcbiAqXG4gKiBnYW1lU3RhdHVzOiBudWxsIHx8IHN0cmluZ1xuICogICAtIHdpbGwgYmUgbnVsbCBvciBvbmUgb2Y6XG4gKiAgIC0gYmVmb3JlRmlyc3RQaXRjaCwgd2hlbiB0aGUgZmlyc3QgcGl0Y2ggaGFzbid0IGJlZW4gdGhyb3duIHlldFxuICogICAtIGZpcnN0SGFsZklubmluZ1N0YXJ0LCB3aGVuIHRoZSBmaXJzdCBoYWxmIG9mIGFuIGlubmluZyBpcyBzdGFydGluZ1xuICogICAtIHNlY29uZEhhbGZJbm5pbmdTdGFydCwgd2hlbiB0aGUgc2Vjb25kIGhhbGYgb2YgYW4gaW5uaW5nIGlzIHN0YXJ0aW5nXG4gKiAgIC0gaGFsZklubmluZ0VuZCwgd2hlbiBhbnkgaGFsZiBvZiBhbiBpbm5pbmcgaXMgZW5kaW5nIG9uIHRoZSBwbGF5XG4gKiAgIC0gZ2FtZUVuZCwgd2hlbiB0aGUgZ2FtZSBoYXMgZW5kZWRcbiAqICAgLSBpbm5pbmdSZXdpbmQsIHdoZW4gdGhlIHNhbG1vbiBzd2ltIHVwc3RyZWFtXG4gKlxuICogb3V0OiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGFuIG91dCBvbiB0aGUgcGxheVxuICogb3V0TWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBraW5kOiBudWxsIHx8IHN0cmluZ1xuICogICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgLSBmbHlcbiAqICAgICAtIGdyb3VuZFxuICogICAgIC0gc3RyaWtlXG4gKiAgICAgLSBjYXVnaHRTdGVhbGluZ1xuICogICAgIC0gdW5zcGVjaWZpZWQgKGFzIHlvdSBzb21ldGltZXMgc2VlIHdpdGggc2FjcmlmaWNlIG91dHMpXG4gKiAgIC0gc2FjcmlmaWNlOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gdGhlIG91dCB3YXMgYSBzYWNyaWZpY2VcbiAqICAgLSBzYWNyaWZpY2VNZXRhOiBvYmplY3QsIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wczpcbiAqICAgICAtIGtpbmQ6IHN0cmluZyB8fCBudWxsXG4gKiAgICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgICAgLSBhZHZhbmNlXG4gKiAgICAgICAtIHNjb3JlXG4gKiAgIC0gZnJlZVJlZmlsbDogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIGJhdHRlciB1c2VkIHRoZWlyIGZyZWUgcmVmaWxsIG9uIHRoZSBwbGF5XG4gKlxuICogaGl0OiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGEgaGl0IG9uIHRoZSBwbGF5XG4gKiBoaXRNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIHNpbmdsZVxuICogICAgIC0gZG91YmxlXG4gKiAgICAgLSB0cmlwbGVcbiAqICAgICAtIGhvbWVSdW5cbiAqICAgICAtIGdyYW5kU2xhbVxuICogICAtIGJpZ0J1Y2tldDogYm9vbGVhblxuICogICAgIC0gd2hldGhlciBhIEJpZyBCdWNrZXQgd2FzIGFjdGl2YXRlZCBvbiB0aGUgcGxheVxuICpcbiAqIHN0ZWFsOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGFuIGF0dGVtcHRlZCBzdGVhbCBvbiB0aGUgcGxheVxuICogc3RlYWxNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIHN1Y2Nlc3M6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiB0aGllZiBub3QgY2F1Z2h0LCBmYWxzZSBvdGhlcndpc2VcbiAqICAgLSBiYXNlU3RvbGVuOiBudWxsIHx8IG51bWJlclxuICogICAgIC0gdGhlIGJhc2Ugd2hpY2ggd2FzIHN0b2xlbiAoMC1pbmRleGVkKVxuICpcbiAqIHdhbGs6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYSB3YWxrIG9uIHRoZSBwbGF5XG4gKiB3YWxrTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBtaW5kVHJpY2s6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiB0aGUgcGl0Y2hlcyB1c2VkIGEgbWluZCB0cmljayB0byB0dXJuIHRoZSB3YWxrIGludG8gYVxuICogICAgICAgc3RyaWtlb3V0XG4gKlxuICogc3BlY2lhbDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSB3YXMgYSBzcGVjaWFsIGV2ZW50IG9uIHRoZSBwbGF5XG4gKiBzcGVjaWFsTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBraW5kOiBudWxsIHx8IHN0cmluZ1xuICogICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgLSBibG9vZHJhaW5cbiAqICAgICAtIGlzUGFydHlpbmdcbiAqICAgICAtIHJldmVyYlxuICogICAgIC0gYmlyZHNDaXJjbGVcbiAqICAgICAtIGJpcmRzUGVja2VkXG4gKiAgICAgLSBqdXN0QmlyZHNcbiAqICAgICAtIGFsbGVyZ2ljUmVhY3Rpb25cbiAqICAgICAtIGluY2luZXJhdGVkXG4gKiAgICAgLSBiZWNhbWVNYWdtYXRpY1xuICogICAgIC0gZmVlZGJhY2tcbiAqICAgICAtIGVsZWN0cmljaXR5XG4gKiAgICAgLSB1bnN0YWJsZVxuICogICAgIC0gZmxpY2tlcmluZ1xuICogICAgIC0gY29uc3VtZXJzQXR0YWNrXG4gKiAgICAgLSBzYWxtb25cbiAqICAgLSBkZXRhaWxzOiBvYmplY3QsIHdpdGggcHJvcHMgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIGV2ZW50XG4gKlxuICogYmFzZVJ1bm5lcnM6IG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHMsIHJlcHJlc2VudGluZyBiYXNlc1xuICogICAtIGZpcnN0XG4gKiAgIC0gc2Vjb25kXG4gKiAgIC0gdGhpcmRcbiAqICAgLSBmb3VydGhcbiAqICAgLSBpZiB0aGVyZSBpcyBhIGJhc2VydW5uZXIgb24gdGhlIGdpdmVuIGJhc2UsIHRoZSB2YWx1ZSBmb3IgdGhhdCBiYXNlXG4gKiAgICAgd2lsbCBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzOlxuICogICAgIC0gcGxheWVyTmFtZVxuICogICAgIC0gcGxheWVySWRcbiAqXG4gKiBtYXhpbXVtQmxhc2ViYWxsOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHdlJ3JlIGF0IE1BWElNVU0gQkxBU0VCQUxMXG4gKi9cblxuXG52YXIgaW5pdEFuYWx5c2lzID0gZnVuY3Rpb24gaW5pdEFuYWx5c2lzKGV2ZW50RGF0YSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBldmVudERhdGEuaWQgfHwgZXZlbnREYXRhLl9pZCxcbiAgICBnYW1lU3RhdHVzOiBudWxsLFxuICAgIHJ1bnNTY29yZWQ6IDAsXG4gICAgdW5ydW5zU2NvcmVkOiAwLFxuICAgIGJhdHRlclVwOiBmYWxzZSxcbiAgICBvdXQ6IGZhbHNlLFxuICAgIG91dE1ldGE6IHtcbiAgICAgIGtpbmQ6IG51bGwsXG4gICAgICBzYWNyaWZpY2U6IGZhbHNlLFxuICAgICAgc2FjcmlmaWNlTWV0YToge1xuICAgICAgICBraW5kOiBudWxsXG4gICAgICB9LFxuICAgICAgZnJlZVJlZmlsbDogZmFsc2VcbiAgICB9LFxuICAgIGhpdDogZmFsc2UsXG4gICAgaGl0TWV0YToge1xuICAgICAga2luZDogbnVsbCxcbiAgICAgIGJpZ0J1Y2tldDogZmFsc2VcbiAgICB9LFxuICAgIHN0ZWFsOiBmYWxzZSxcbiAgICBzdGVhbE1ldGE6IHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBiYXNlU3RvbGVuOiBudWxsXG4gICAgfSxcbiAgICB3YWxrOiBmYWxzZSxcbiAgICB3YWxrTWV0YToge1xuICAgICAgbWluZFRyaWNrOiBmYWxzZVxuICAgIH0sXG4gICAgc3BlY2lhbDogZmFsc2UsXG4gICAgc3BlY2lhbE1ldGE6IHtcbiAgICAgIGtpbmQ6IG51bGxcbiAgICB9LFxuICAgIGJhc2VSdW5uZXJzOiB7XG4gICAgICBmaXJzdDoge30sXG4gICAgICBzZWNvbmQ6IHt9LFxuICAgICAgdGhpcmQ6IHt9LFxuICAgICAgZm91cnRoOiB7fVxuICAgIH0sXG4gICAgbWF4aW11bUJsYXNlYmFsbDogZmFsc2VcbiAgfTtcbn07XG5cbnZhciBhbmFseXplR2FtZUV2ZW50ID0gZnVuY3Rpb24gYW5hbHl6ZUdhbWVFdmVudChldmVudERhdGEpIHtcbiAgaWYgKCFldmVudERhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBhbmFseXNpcyA9IGluaXRBbmFseXNpcyhldmVudERhdGEpO1xuICB2YXIgY2hlY2tlcnMgPSBbZ2FtZVN0YXR1cywgb3V0cywgaGl0cywgd2Fsa3MsIHN0ZWFscywgc3BlY2lhbCwgbWlzYywgYmFzZVJ1bm5lcnNdO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX2NoZWNrZXJzID0gY2hlY2tlcnM7IF9pIDwgX2NoZWNrZXJzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBjaGVja2VyID0gX2NoZWNrZXJzW19pXTtcbiAgICBjaGVja2VyLmNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGFuYWx5c2lzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFuYWx5emVHYW1lRXZlbnQ6IGFuYWx5emVHYW1lRXZlbnRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignZmx5b3V0JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdmbHknO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdncm91bmQgb3V0JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdncm91bmQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdHJpa2VzIG91dCcpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnc3RyaWtlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZmllbGRlclxcJ3MgY2hvaWNlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdmaWVsZGVyc0Nob2ljZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2EgZG91YmxlIHBsYXknKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2RvdWJsZVBsYXknO1xuICB9XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzYWNyaWZpY2UnKSA+PSAwKSB7XG4gICAgLy8gdGhpcyBtYXkgYWxyZWFkeSBiZSBhIGdyb3VuZC9mbHlvdXQsIG9yIGl0cyB1bnNwZWNpZmllZFxuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9IGFuYWx5c2lzLm91dE1ldGEua2luZCB8fCAndW5zcGVjaWZpZWQnO1xuICAgIGFuYWx5c2lzLm91dE1ldGEuc2FjcmlmaWNlID0gdHJ1ZTsgLy8gY2hlY2sgaWYgc29tZW9uZSBzY29yZWQgb3IgYWR2YW5jZWQgb24gdGhlIHNhY3JpZmljZVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzY29yZXMnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLnNhY3JpZmljZU1ldGEua2luZCA9ICdzY29yZSc7XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpKSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYWR2YW5jZScpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuc2FjcmlmaWNlTWV0YS5raW5kID0gJ2FkdmFuY2UnO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhbmFseXNpcy5vdXRNZXRhLmtpbmQpIHtcbiAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuXG4gICAgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaGFsZklubmluZ091dHMpID09PSAwKSB7XG4gICAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2hhbGZJbm5pbmdFbmQnO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignZnJlZSByZWZpbGwnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLmZyZWVSZWZpbGwgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndXNlcyBhIG1pbmQgdHJpY2snKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLm1pbmRUcmljayA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdibG9vZGRyYWluJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmxvb2RkcmFpbic7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2lzIHBhcnR5aW5nJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnaXNQYXJ0eWluZyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3JldmVyYicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3JldmVyYic7XG4gIH0gZWxzZSBpZiAoIC8vIHRoaXMgY2hlY2sgaGFzIHRvIGNvbWUgYmVmb3JlIGJpcmRzIGNpcmNsZSwgYmVjYXVzZSB0aGUgdGV4dFxuICAvLyAndGhlIGJpcmRzIGNpcmNsZScgaXMgcHJlc2VudCBpbiBib3RoIGNhc2VzXG4gIHVwZGF0ZS5pbmRleE9mKCd0aGUgYmlyZHMgcGVja2VkJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmlyZHNQZWNrZWQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCd0aGUgYmlyZHMgY2lyY2xlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmlyZHNDaXJjbGUnO1xuICB9IGVsc2UgaWYgKCAvLyB0aGlzIGlzIHRvIGNhcHR1cmUgYW55IG90aGVyIG5vbi1wZWNraW5nICYgbm9uLWNpcmNsaW5nIGJpcmRpbmVzc1xuICB1cGRhdGUuaW5kZXhPZignYmlyZHMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdqdXN0QmlyZHMnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdoYWQgYW4gYWxsZXJnaWMgcmVhY3Rpb24nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdhbGxlcmdpY1JlYWN0aW9uJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncm9ndWUgdW1waXJlIGluY2luZXJhdGVkJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnaW5jaW5lcmF0ZWQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdiZWNhbWUgbWFnbWF0aWMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiZWNhbWVNYWdtYXRpYyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2ZlZWRiYWNrJykgPj0gMCAmJiAodXBkYXRlLmluZGV4T2YoJ3JlYWxpdHkgZmxpY2tlcnMnKSA+PSAwIHx8IHVwZGF0ZS5pbmRleE9mKCdzd2l0Y2hlZCB0ZWFtcycpID49IDApKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdmZWVkYmFjayc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RoZSBlbGVjdHJpY2l0eSB6YXBzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZWxlY3RyaWNpdHknO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdpcyBub3cgdW5zdGFibGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICd1bnN0YWJsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2lzIG5vdyBmbGlja2VyaW5nJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZmxpY2tlcmluZyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2NvbnN1bWVycyBhdHRhY2snKSA+PSAwKSB7XG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdkZWZlbmRzJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdjb25zdW1lcnNBdHRhY2tEZWZlbmRlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnY29uc3VtZXJzQXR0YWNrJztcbiAgICB9XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3NhbG1vbiBzd2ltIHVwc3RyZWFtJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnc2FsbW9uJztcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2lubmluZ1Jld2luZCc7IC8vIGZpcnN0LCBncmFiIGFsbCB0aGUgc2VudGVuY2VzIHdpdGggd2hpY2ggdGVhbSBsb3N0IGhvdyBtYW55IHJ1bnNcblxuICAgIHZhciB0ZWFtcyA9IHVwZGF0ZS5tYXRjaCgvKFxcZCsoXFwuXFxkKyk/KSBvZiB0aGUgLioncyBydW5zIGFyZSBsb3N0L2cpO1xuXG4gICAgaWYgKHRlYW1zKSB7XG4gICAgICB2YXIgcnVuc1N0b2xlbiA9IHRlYW1zLm1hcChmdW5jdGlvbiAodGVhbSkge1xuICAgICAgICByZXR1cm4gdXRpbC5nZXROdW1iZXIodGVhbSwgbnVsbCwgbnVsbCkgfHwgMDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJ1bnNTdG9sZW5Gcm9tID0gdGVhbXMubWFwKGZ1bmN0aW9uICh0ZWFtKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB0ZWFtLCAvb2YgdGhlIC8sIC8ncyBydW5zLyk7XG4gICAgICB9KTtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICAgIHJ1bnNTdG9sZW46IHJ1bnNTdG9sZW4sXG4gICAgICAgIHJ1bnNTdG9sZW5Gcm9tOiBydW5zU3RvbGVuRnJvbVxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3J1bnMgYXJlIG92ZXJmbG93aW5nJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAncnVuc092ZXJmbG93aW5nJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0dhaW5lZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvIHVucnVucy8pLFxuICAgICAgcnVuc092ZXJmbG93aW5nRm9yOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9cXG4vLCAvIGdhaW4vKVxuICAgIH07XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3NvbGFyIHBhbmVscyBhYnNvcmInKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdydW5zQ29sbGVjdGVkJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvIHJ1bnMgYXJlIGNvbGxlY3RlZC8pLFxuICAgICAgcnVuc0NvbGxlY3RlZEZyb206IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL3NhdmVkIGZvciB0aGUgLywgLydzIG5leHQgZ2FtZS8pXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc3VuIDIgc21pbGVzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnc3VuMic7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNDb2xsZWN0ZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLyEgc3VuIDIgc21pbGVzLyksXG4gICAgICB3aW5TZXRVcG9uOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9zZXQgYSB3aW4gdXBvbiB0aGUgLywgL1xcLi8pXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYmxhY2sgaG9sZSBzd2FsbG93cycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JsYWNrSG9sZSc7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNDb2xsZWN0ZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgL2NvbGxlY3QgLywgLyEvKSxcbiAgICAgIHdpblN3YWxsb3dlZEZyb206IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL3N3YWxsb3dzIHRoZSBydW5zIGFuZCBhIC8sIC8gd2luLi8pXG4gICAgfTsgLy8gc2VlIGlmIGNhcmNpbml6YXRpb24gdHJpZ2dlcmVkIGJ5IHRoZSBibGFjayBob2xlXG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3RoZSBiYWx0aW1vcmUgY3JhYnMgc3RlYWwnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzLnBsYXllclN0b2xlbiA9IHV0aWwuZ2V0UGxheWVyKHVwZGF0ZSwgL2NyYWJzIHN0ZWFsIC8sIC8gZm9yIHRoZSByZW1haW5kZXIvKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dyaW5kIHJhaWwnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdncmluZFJhaWwnO1xuICAgIHZhciB0cmlja3MgPSB1dGlsLmdldFNrYXRlVHJpY2tzKHVwZGF0ZSk7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgcGxheWVyOiB1dGlsLmdldFBsYXllcih1cGRhdGUsIC9eLywgLyBob3BzIG9uLylcbiAgICB9LCB0cmlja3MpO1xuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzYWZlIScpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMpLCB7fSwge1xuICAgICAgICBncmluZFN1Y2Nlc3M6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdXQhXG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzKSwge30sIHtcbiAgICAgICAgZ3JpbmRTdWNjZXNzOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ3JhaWxCYWlsJztcbiAgICB9XG4gIH0gLy8gaWYgd2UgZm91bmQgc29tZXRoaW5nLCB0aGVuOlxuXG5cbiAgaWYgKGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQpIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignc3RlYWwnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3RlYWwgPSB0cnVlO1xuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdjYXVnaHQnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdjYXVnaHRTdGVhbGluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzID0gdHJ1ZTtcbiAgICB9IC8vIGJhc2VTdG9sZW4gaXMgMC1pbmRleGVkXG5cblxuICAgIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qZmlyc3QvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMDtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipzZWNvbmQvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMTtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLip0aGlyZC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAyO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKmZvdXJ0aC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAzOyAvLyB0aGlzIG1heSBoYXZlIGJlZW4gYSBydW4gaWYgdGhlcmUgYXJlIDQgYmFzZXMgaW4gcGxheVxuXG4gICAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXR0ZXIpICE9PSBudWxsICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheUJhc2VzKSA9PT0gNCkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlCYXR0ZXIpICE9PSBudWxsICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhc2VzKSA9PT0gNCkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBhcmUgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcblxuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKmhvbWUvKSAhPT0gLTEpIHtcbiAgICAgIC8vIHNlZSBpZiBob21lIG9yIGF3YXkgc3RvbGUgdGhlIGJhc2VcbiAgICAgIGlmICgoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXR0ZXIpICE9PSBudWxsKSB7XG4gICAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5QmFzZXMpIC0gMSB8fCAzO1xuICAgICAgfSBlbHNlIGlmICgoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YUJhdHRlcikgIT09IG51bGwpIHtcbiAgICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXNlcykgLSAxIHx8IDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvbGRlciBnYW1lcyBkb24ndCBoYXZlIHRoZXNlIGZpZWxkcywgb3IgbWF5IGhhdmUgYm90aFxuICAgICAgICAvLyBob21lIGFuZCBhd2F5IGJhdHRlcnMgZmlsbGVkIGluOyBqdXN0IGFzc3VtZWQgaG9tZSBiYXNlXG4gICAgICAgIC8vIGlzIGJhc2UgIzMgaW4gdGhvc2UgY2FzZXMsIGkgZ3Vlc3NcbiAgICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAzO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBhcmUgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcblxuICAgIH0gLy8gY2hlY2sgZm9yIGJsYXNlcnVubmluZyBzY29yZXMgcHJlIHMtMTIgKG90aGVyd2lzZSBjYXB0dXJlZCBpblxuICAgIC8vIHNyYy9taXNjLmpzKVxuXG5cbiAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiB1cGRhdGUuaW5kZXhPZignYmxhc2VydW5uaW5nJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgL3Njb3JlcyAvLCAvIHdpdGggYmxhc2VydW5uaW5nLyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2V0VXBkYXRlVGV4dCA9IGZ1bmN0aW9uIGdldFVwZGF0ZVRleHQoZXZlbnREYXRhKSB7XG4gIHZhciBfZXZlbnREYXRhJGxhc3RVcGRhdGU7XG5cbiAgcmV0dXJuIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRsYXN0VXBkYXRlID0gZXZlbnREYXRhLmxhc3RVcGRhdGUpID09PSBudWxsIHx8IF9ldmVudERhdGEkbGFzdFVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRsYXN0VXBkYXRlLnRvTG93ZXJDYXNlKCkpIHx8ICcnO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIG51bWJlciAoc3VwcG9ydHMgcG9zaXRpdmUgaW50ZWdlcnMgJiBmbG9hdHMpLFxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIHJlZ2V4IGZvciBudW1iZXJzXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgcmVnZXggZm9yIG51bWJlcnNcbiAqIHdpbGwgcmV0dXJuIGEgbnVtYmVyIG9yIG51bGxcbiAqL1xuXG5cbnZhciBnZXROdW1iZXIgPSBmdW5jdGlvbiBnZXROdW1iZXIocywgcHJlLCBwb3N0KSB7XG4gIHZhciBudW0gPSBudWxsO1xuICB2YXIgbnVtUmVnZXggPSAvKChcXGQrKT8oXFwuXFxkKyk/KS87XG5cbiAgaWYgKCFwcmUpIHtcbiAgICBwcmUgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIGlmICghcG9zdCkge1xuICAgIHBvc3QgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAocHJlLnNvdXJjZSArIG51bVJlZ2V4LnNvdXJjZSArIHBvc3Quc291cmNlKTtcbiAgdmFyIG1hdGNoZXMgPSByZWdleFtTeW1ib2wubWF0Y2hdKHMpO1xuXG4gIGlmIChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHtcbiAgICBudW0gPSBOdW1iZXIobWF0Y2hlc1sxXSkgfHwgbnVtO1xuICB9XG5cbiAgcmV0dXJuIG51bTtcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSBtYXRjaCBiZXR3ZWVuIHByZSBhbmQgcG9zdFxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIG1hdGNoXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgbWF0Y2hcbiAqIHdpbGwgcmV0dXJuIHRoZSBtYXRjaCwgb3IgYW4gZW1wdHkgc3RyaW5nXG4gKi9cblxuXG52YXIgZ2V0TWF0Y2ggPSBmdW5jdGlvbiBnZXRNYXRjaChzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIG1hdGNoUmVnZXggPSAvKC4qKS87XG5cbiAgaWYgKCFwcmUpIHtcbiAgICBwcmUgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIGlmICghcG9zdCkge1xuICAgIHBvc3QgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAocHJlLnNvdXJjZSArIG1hdGNoUmVnZXguc291cmNlICsgcG9zdC5zb3VyY2UpO1xuICB2YXIgbWF0Y2hlcyA9IHJlZ2V4W1N5bWJvbC5tYXRjaF0ocyk7XG5cbiAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkge1xuICAgIHJldHVybiBtYXRjaGVzWzFdO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIHRlYW0gbmFtZVxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIHJlZ2V4IGZvciB0aGUgdGVhbSBuYW1lXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgcmVnZXggdGhlIHRlYW0gbmFtZVxuICogd2lsbCByZXR1cm4gJ2hvbWUnICdhd2F5JyBvciAnJ1xuICovXG5cblxudmFyIGdldFRlYW0gPSBmdW5jdGlvbiBnZXRUZWFtKGV2ZW50RGF0YSwgcywgcHJlLCBwb3N0KSB7XG4gIHZhciB0ZWFtID0gZ2V0TWF0Y2gocywgcHJlLCBwb3N0KTtcblxuICBpZiAodGVhbSkge1xuICAgIHRlYW0gPSBldmVudERhdGEuaG9tZVRlYW1OaWNrbmFtZS50b0xvd2VyQ2FzZSgpID09PSB0ZWFtID8gJ2hvbWUnIDogJ2F3YXknO1xuICB9XG5cbiAgcmV0dXJuIHRlYW07XG59O1xuXG52YXIgdGl0bGVDYXNlID0gZnVuY3Rpb24gdGl0bGVDYXNlKHMpIHtcbiAgaWYgKCFzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgO1xuICByZXR1cm4gcy5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgIGlmICh3b3JkKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQod29yZFswXS50b1VwcGVyQ2FzZSgpKS5jb25jYXQod29yZC5zbGljZSgxKSk7XG4gICAgfVxuICB9KS5qb2luKCcgJyk7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgcGxheWVyIG5hbWVcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSByZWdleCBmb3IgdGhlIHRlYW0gbmFtZVxuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIHJlZ2V4IHRoZSB0ZWFtIG5hbWVcbiAqIHdpbGwgcmV0dXJuIHRoZSBwbGF5ZXIgbmFtZSBvciAnJ1xuICovXG5cblxudmFyIGdldFBsYXllciA9IGZ1bmN0aW9uIGdldFBsYXllcihzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIHBsYXllciA9IGdldE1hdGNoKHMsIHByZSwgcG9zdCk7XG4gIHJldHVybiB0aXRsZUNhc2UocGxheWVyKTtcbn07XG5cbnZhciBnZXRTa2F0ZVRyaWNrcyA9IGZ1bmN0aW9uIGdldFNrYXRlVHJpY2tzKHVwZGF0ZSkge1xuICB2YXIgZ3JpbmRUcmljaywgZ3JpbmRTY29yZSwgbGFuZFRyaWNrLCBsYW5kU2NvcmU7XG4gIHZhciB0cmlja3MgPSB1cGRhdGUubWF0Y2goLyBhICguKikgXFwoKFxcZCspL2cpOyAvLyBncmluZCB0cmlja1xuXG4gIGlmICh0cmlja3NbMF0pIHtcbiAgICBncmluZFRyaWNrID0gdGl0bGVDYXNlKGdldE1hdGNoKHRyaWNrc1swXSwgL2EgLywgLyBcXCgvKSk7XG4gICAgZ3JpbmRTY29yZSA9IGdldE51bWJlcih0cmlja3NbMF0sIC9cXCgvLCAvJC8pO1xuICB9IC8vIGxhbmQgdHJpY2tcblxuXG4gIGlmICh0cmlja3NbMV0pIHtcbiAgICBsYW5kVHJpY2sgPSB0aXRsZUNhc2UoZ2V0TWF0Y2godHJpY2tzWzFdLCAvYSAvLCAvIFxcKC8pKTtcbiAgICBsYW5kU2NvcmUgPSBnZXROdW1iZXIodHJpY2tzWzFdLCAvXFwoLywgLyQvKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ3JpbmRUcmljazogZ3JpbmRUcmljayxcbiAgICBncmluZFNjb3JlOiBncmluZFNjb3JlLFxuICAgIGxhbmRUcmljazogbGFuZFRyaWNrLFxuICAgIGxhbmRTY29yZTogbGFuZFNjb3JlXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0VXBkYXRlVGV4dDogZ2V0VXBkYXRlVGV4dCxcbiAgZ2V0TnVtYmVyOiBnZXROdW1iZXIsXG4gIGdldFRlYW06IGdldFRlYW0sXG4gIGdldFBsYXllcjogZ2V0UGxheWVyLFxuICBnZXRTa2F0ZVRyaWNrczogZ2V0U2thdGVUcmlja3Ncbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignZHJhd3MgYSB3YWxrJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLndhbGsgPSB0cnVlOyAvLyBjaGVjayBpZiBhbnkgcnVucyB3ZXJlIHNjb3JlZCBvbiB0aGUgcGxheSBwcmlvciB0byBzMTJcblxuICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIHVwZGF0ZS5pbmRleE9mKCdzY29yZXMnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcbiAgICAvLyBjaGVjayBmb3IgbWluZCB0cmljayBzaGVuYW5pZ2Fuc1xuXG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3VzZXMgYSBtaW5kIHRyaWNrJykpIHtcbiAgICAgIGFuYWx5c2lzLndhbGtNZXRhLm1pbmRUcmljayA9IHRydWU7XG5cbiAgICAgIGlmICh1cGRhdGUuaW5kZXhPZignc3RyaWtlcyBvdXQnKSkge1xuICAgICAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuICAgICAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnc3RyaWtlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiLyoqXG4gKiBAYXV0aG9yIEthdGVcbiAqL1xuXG52YXIgdHJhY2VyeSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuICAgIGZ1bmN0aW9uIHNldFJhbmRvbShuZXdSYW5kb20pIHtcbiAgICAgICAgcmFuZG9tID0gbmV3UmFuZG9tO1xuICAgIH1cblxuICAgIHZhciBUcmFjZXJ5Tm9kZSA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGRJbmRleCwgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcblxuICAgICAgICAvLyBObyBpbnB1dD8gQWRkIGFuIGVycm9yLCBidXQgY29udGludWUgYW55d2F5c1xuICAgICAgICBpZiAoc2V0dGluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJFbXB0eSBpbnB1dCBmb3Igbm9kZVwiKTtcbiAgICAgICAgICAgIHNldHRpbmdzLnJhdyA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgcm9vdCBub2RlIG9mIGFuIGV4cGFuc2lvbiwgaXQgd2lsbCBoYXZlIHRoZSBncmFtbWFyIHBhc3NlZCBhcyB0aGUgJ3BhcmVudCdcbiAgICAgICAgLy8gIHNldCB0aGUgZ3JhbW1hciBmcm9tIHRoZSAncGFyZW50JywgYW5kIHNldCBhbGwgb3RoZXIgdmFsdWVzIGZvciBhIHJvb3Qgbm9kZVxuICAgICAgICBpZiAoIHBhcmVudCBpbnN0YW5jZW9mIHRyYWNlcnkuR3JhbW1hcikge1xuICAgICAgICAgICAgdGhpcy5ncmFtbWFyID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNoaWxkSW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmFtbWFyID0gcGFyZW50LmdyYW1tYXI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxO1xuICAgICAgICAgICAgdGhpcy5jaGlsZEluZGV4ID0gY2hpbGRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmF3ID0gc2V0dGluZ3MucmF3O1xuICAgICAgICB0aGlzLnR5cGUgPSBzZXR0aW5ncy50eXBlO1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuZ3JhbW1hcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gZ3JhbW1hciBzcGVjaWZpZWQgZm9yIHRoaXMgbm9kZVwiLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJOb2RlKCdcIiArIHRoaXMucmF3ICsgXCInIFwiICsgdGhpcy50eXBlICsgXCIgZDpcIiArIHRoaXMuZGVwdGggKyBcIilcIjtcbiAgICB9O1xuXG4gICAgLy8gRXhwYW5kIHRoZSBub2RlICh3aXRoIHRoZSBnaXZlbiBjaGlsZCBydWxlKVxuICAgIC8vICBNYWtlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyBhbnlcbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuZXhwYW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZFJ1bGUsIHByZXZlbnRSZWN1cnNpb24pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IFwiXCI7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBydWxlIGZvciBtYWtpbmcgY2hpbGRyZW4sXG4gICAgICAgIC8vIGFuZCBleHBhbmQgaXQgaW50byBzZWN0aW9uXG4gICAgICAgIHRoaXMuY2hpbGRSdWxlID0gY2hpbGRSdWxlO1xuICAgICAgICBpZiAodGhpcy5jaGlsZFJ1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gdHJhY2VyeS5wYXJzZShjaGlsZFJ1bGUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgZXJyb3JzIHRvIHRoaXNcbiAgICAgICAgICAgIGlmIChzZWN0aW9ucy5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuY29uY2F0KHNlY3Rpb25zLmVycm9ycyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0gPSBuZXcgVHJhY2VyeU5vZGUodGhpcywgaSwgc2VjdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJldmVudFJlY3Vyc2lvbilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5leHBhbmQocHJldmVudFJlY3Vyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgaW4gdGhlIGZpbmlzaGVkIHRleHRcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCArPSB0aGlzLmNoaWxkcmVuW2ldLmZpbmlzaGVkVGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluIG5vcm1hbCBvcGVyYXRpb24sIHRoaXMgc2hvdWxkbid0IGV2ZXIgaGFwcGVuXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiTm8gY2hpbGQgcnVsZSBwcm92aWRlZCwgY2FuJ3QgZXhwYW5kIGNoaWxkcmVuXCIpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gY2hpbGQgcnVsZSBwcm92aWRlZCwgY2FuJ3QgZXhwYW5kIGNoaWxkcmVuXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEV4cGFuZCB0aGlzIHJ1bGUgKHBvc3NpYmx5IGNyZWF0aW5nIGNoaWxkcmVuKVxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS5leHBhbmQgPSBmdW5jdGlvbihwcmV2ZW50UmVjdXJzaW9uKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5zaW9uRXJyb3JzID0gW107XG5cbiAgICAgICAgICAgIC8vIFR5cGVzIG9mIG5vZGVzXG4gICAgICAgICAgICAvLyAtMTogcmF3LCBuZWVkcyBwYXJzaW5nXG4gICAgICAgICAgICAvLyAgMDogUGxhaW50ZXh0XG4gICAgICAgICAgICAvLyAgMTogVGFnIChcIiNzeW1ib2wubW9kLm1vZDIubW9kMyNcIiBvciBcIiNbcHVzaFRhcmdldDpwdXNoUnVsZV1zeW1ib2wubW9kXCIpXG4gICAgICAgICAgICAvLyAgMjogQWN0aW9uIChcIltwdXNoVGFyZ2V0OnB1c2hSdWxlXSwgW3B1c2hUYXJnZXQ6UE9QXVwiLCBtb3JlIGluIHRoZSBmdXR1cmUpXG5cbiAgICAgICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIC8vIFJhdyBydWxlXG4gICAgICAgICAgICBjYXNlIC0xOlxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRDaGlsZHJlbih0aGlzLnJhdywgcHJldmVudFJlY3Vyc2lvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIHBsYWludGV4dCwgZG8gbm90aGluZyBidXQgY29weSB0ZXh0IGludG8gZmluc2loZWQgdGV4dFxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gdGhpcy5yYXc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIFRhZ1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRvIGZpbmQgYW55IGFjdGlvbnMsIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIHN5bWJvbCBpc1xuICAgICAgICAgICAgICAgIHRoaXMucHJlYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdGFjdGlvbnMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSB0cmFjZXJ5LnBhcnNlVGFnKHRoaXMucmF3KTtcblxuICAgICAgICAgICAgICAgIC8vIEJyZWFrIGludG8gc3ltYm9sIGFjdGlvbnMgYW5kIG1vZGlmaWVyc1xuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sID0gcGFyc2VkLnN5bWJvbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVycyA9IHBhcnNlZC5tb2RpZmllcnM7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYWxsIHRoZSBwcmVhY3Rpb25zIGZyb20gdGhlIHJhdyBzeW50YXhcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5wcmVhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlYWN0aW9uc1tpXSA9IG5ldyBOb2RlQWN0aW9uKHRoaXMsIHBhcnNlZC5wcmVhY3Rpb25zW2ldLnJhdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLnBvc3RhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5wb3N0YWN0aW9uc1tpXSA9IG5ldyBOb2RlQWN0aW9uKHRoaXMsIHBhcnNlZC5wb3N0YWN0aW9uc1tpXS5yYXcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2UgdW5kbyBhY3Rpb25zIGZvciBhbGwgcHJlYWN0aW9ucyAocG9wcyBmb3IgZWFjaCBwdXNoKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcmVhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZWFjdGlvbnNbaV0udHlwZSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGFjdGlvbnMucHVzaCh0aGlzLnByZWFjdGlvbnNbaV0uY3JlYXRlVW5kbygpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBY3RpdmF0ZSBhbGwgdGhlIHByZWFjdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnNbaV0uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IHRoaXMucmF3O1xuXG4gICAgICAgICAgICAgICAgLy8gRXhwYW5kIChwYXNzaW5nIHRoZSBub2RlLCB0aGlzIGFsbG93cyB0cmFja2luZyBvZiByZWN1cnNpb24gZGVwdGgpXG5cbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRSdWxlID0gdGhpcy5ncmFtbWFyLnNlbGVjdFJ1bGUodGhpcy5zeW1ib2wsIHRoaXMsIHRoaXMuZXJyb3JzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQ2hpbGRyZW4oc2VsZWN0ZWRSdWxlLCBwcmV2ZW50UmVjdXJzaW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IG1vZGlmaWVyc1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZSBwYXJzZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciBvbiBoYXNodGFncyB3aXRoaW4gcGFyZW50aGVzaXMgd2l0aGluIHRhZ3MsXG4gICAgICAgICAgICAgICAgLy8gICBzbyB0aGF0IG1vZGlmaWVyIHBhcmFtZXRlcnMgY2FuIGNvbnRhaW4gdGFncyBcIiNzdG9yeS5yZXBsYWNlKCNwcm90YWdvbmlzdCMsICNuZXdDaGFyYWN0ZXIjKSNcIlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb2RpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZE5hbWUgPSB0aGlzLm1vZGlmaWVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZFBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kTmFtZS5pbmRleE9mKFwiKFwiKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdFeHAgPSAvXFwoKFteKV0rKVxcKS87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZG86IGlnbm9yZSBhbnkgZXNjYXBlZCBjb21tYXMuICBGb3Igbm93LCBjb21tYXMgYWx3YXlzIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IHJlZ0V4cC5leGVjKHRoaXMubW9kaWZpZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0cyB8fCByZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZFBhcmFtcyA9IHJlc3VsdHNbMV0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZE5hbWUgPSB0aGlzLm1vZGlmaWVyc1tpXS5zdWJzdHJpbmcoMCwgbW9kTmFtZS5pbmRleE9mKFwiKFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0aGlzLmdyYW1tYXIubW9kaWZpZXJzW21vZE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgbW9kaWZpZXI/XG4gICAgICAgICAgICAgICAgICAgIGlmICghbW9kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiTWlzc2luZyBtb2RpZmllciBcIiArIG1vZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgKz0gXCIoKC5cIiArIG1vZE5hbWUgKyBcIikpXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IG1vZCh0aGlzLmZpbmlzaGVkVGV4dCwgbW9kUGFyYW1zKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIHBvc3QtYWN0aW9uc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3N0YWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zW2ldLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuXG4gICAgICAgICAgICAgICAgLy8gSnVzdCBhIGJhcmUgYWN0aW9uPyAgRXhwYW5kIGl0IVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gbmV3IE5vZGVBY3Rpb24odGhpcywgdGhpcy5yYXcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBObyB2aXNpYmxlIHRleHQgZm9yIGFuIGFjdGlvblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHNvbWUgdmlzaWJsZSB0ZXh0IGZvciBpZiB0aGVyZSBpcyBhIGZhaWx1cmUgdG8gcGVyZm9ybSB0aGUgYWN0aW9uP1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2FybihcIkFscmVhZHkgZXhwYW5kZWQgXCIgKyB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS5jbGVhckVzY2FwZUNoYXJzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSB0aGlzLmZpbmlzaGVkVGV4dC5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIkRPVUJMRUJBQ0tTTEFTSFwiKS5yZXBsYWNlKC9cXFxcL2csIFwiXCIpLnJlcGxhY2UoL0RPVUJMRUJBQ0tTTEFTSC9nLCBcIlxcXFxcIik7XG4gICAgfTtcblxuICAgIC8vIEFuIGFjdGlvbiB0aGF0IG9jY3VycyB3aGVuIGEgbm9kZSBpcyBleHBhbmRlZFxuICAgIC8vIFR5cGVzIG9mIGFjdGlvbnM6XG4gICAgLy8gMCBQdXNoOiBba2V5OnJ1bGVdXG4gICAgLy8gMSBQb3A6IFtrZXk6UE9QXVxuICAgIC8vIDIgZnVuY3Rpb246IFtmdW5jdGlvbk5hbWUocGFyYW0wLHBhcmFtMSldIChUT0RPISlcbiAgICBmdW5jdGlvbiBOb2RlQWN0aW9uKG5vZGUsIHJhdykge1xuICAgICAgICAvKlxuICAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gbm9kZSBmb3IgTm9kZUFjdGlvblwiKTtcbiAgICAgICAgIGlmICghcmF3KVxuICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gcmF3IGNvbW1hbmRzIGZvciBOb2RlQWN0aW9uXCIpO1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgICAgIHZhciBzZWN0aW9ucyA9IHJhdy5zcGxpdChcIjpcIik7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gc2VjdGlvbnNbMF07XG5cbiAgICAgICAgLy8gTm8gY29sb24/IEEgZnVuY3Rpb24hXG4gICAgICAgIGlmIChzZWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IDI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbG9uPyBJdCdzIGVpdGhlciBhIHB1c2ggb3IgYSBwb3BcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJ1bGUgPSBzZWN0aW9uc1sxXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bGUgPT09IFwiUE9QXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBOb2RlQWN0aW9uLnByb3RvdHlwZS5jcmVhdGVVbmRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZUFjdGlvbih0aGlzLm5vZGUsIHRoaXMudGFyZ2V0ICsgXCI6UE9QXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE8gTm90IHN1cmUgaG93IHRvIG1ha2UgVW5kbyBhY3Rpb25zIGZvciBmdW5jdGlvbnMgb3IgUE9Qc1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgTm9kZUFjdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGdyYW1tYXIgPSB0aGlzLm5vZGUuZ3JhbW1hcjtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAvLyBzcGxpdCBpbnRvIHNlY3Rpb25zICh0aGUgd2F5IHRvIGRlbm90ZSBhbiBhcnJheSBvZiBydWxlcylcbiAgICAgICAgICAgIHRoaXMucnVsZVNlY3Rpb25zID0gdGhpcy5ydWxlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSdWxlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5ydWxlTm9kZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ydWxlU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBUcmFjZXJ5Tm9kZShncmFtbWFyLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgcmF3IDogdGhpcy5ydWxlU2VjdGlvbnNbaV1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG4uZXhwYW5kKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkUnVsZXMucHVzaChuLmZpbmlzaGVkVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGVzY2FwZSBjb21tYXMgcHJvcGVybHlcbiAgICAgICAgICAgIGdyYW1tYXIucHVzaFJ1bGVzKHRoaXMudGFyZ2V0LCB0aGlzLmZpbmlzaGVkUnVsZXMsIHRoaXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGdyYW1tYXIucG9wUnVsZXModGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGdyYW1tYXIuZmxhdHRlbih0aGlzLnRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIE5vZGVBY3Rpb24ucHJvdG90eXBlLnRvVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldCArIFwiOlwiICsgdGhpcy5ydWxlO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgKyBcIjpQT1BcIjtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIFwiKChzb21lIGZ1bmN0aW9uKSlcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIigoVW5rbm93biBBY3Rpb24pKVwiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNldHMgb2YgcnVsZXNcbiAgICAvLyBDYW4gYWxzbyBjb250YWluIGNvbmRpdGlvbmFsIG9yIGZhbGxiYWNrIHNldHMgb2YgcnVsZXNldHMpXG4gICAgZnVuY3Rpb24gUnVsZVNldChncmFtbWFyLCByYXcpIHtcbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMuZ3JhbW1hciA9IGdyYW1tYXI7XG4gICAgICAgIHRoaXMuZmFsbG9mZiA9IDE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0UnVsZXMgPSByYXc7XG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiByYXcgPT09ICdzdHJpbmcnIHx8IHJhdyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0UnVsZXMgPSBbcmF3XTtcbiAgICAgICAgfSBlbHNlIGlmIChyYXcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzdXBwb3J0IGZvciBjb25kaXRpb25hbCBhbmQgaGllcmFyY2hpY2FsIHJ1bGUgc2V0c1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgUnVsZVNldC5wcm90b3R5cGUuc2VsZWN0UnVsZSA9IGZ1bmN0aW9uKGVycm9ycykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdldCBydWxlXCIsIHRoaXMucmF3KTtcbiAgICAgICAgLy8gSXMgdGhlcmUgYSBjb25kaXRpb25hbD9cbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uYWxSdWxlKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdyYW1tYXIuZXhwYW5kKHRoaXMuY29uZGl0aW9uYWxSdWxlLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIGRvZXMgdGhpcyB2YWx1ZSBtYXRjaCBhbnkgb2YgdGhlIGNvbmRpdGlvbmFscz9cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbmFsVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpcy5jb25kaXRpb25hbFZhbHVlc1t2YWx1ZV0uc2VsZWN0UnVsZShlcnJvcnMpO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBObyByZXR1cm5lZCB2YWx1ZT9cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHRoZXJlIGEgcmFua2VkIG9yZGVyP1xuICAgICAgICBpZiAodGhpcy5yYW5raW5nKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmFua2luZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpcy5yYW5raW5nLnNlbGVjdFJ1bGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGlsbCBubyByZXR1cm5lZCB2YWx1ZT9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRSdWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gU2VsZWN0IGZyb20gdGhpcyBiYXNpYyBhcnJheSBvZiBydWxlc1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRpc3RyaWJ1dGlvbiBmcm9tIHRoZSBncmFtbWFyIGlmIHRoZXJlIGlzIG5vIG90aGVyXG4gICAgICAgICAgICB2YXIgZGlzdHJpYnV0aW9uID0gdGhpcy5kaXN0cmlidXRpb247XG4gICAgICAgICAgICBpZiAoIWRpc3RyaWJ1dGlvbilcbiAgICAgICAgICAgICAgICBkaXN0cmlidXRpb24gPSB0aGlzLmdyYW1tYXIuZGlzdHJpYnV0aW9uO1xuXG4gICAgICAgICAgICBzd2l0Y2goZGlzdHJpYnV0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwic2h1ZmZsZVwiOlxuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2h1ZmZsZSBkZXNrXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNodWZmbGVkRGVjayB8fCB0aGlzLnNodWZmbGVkRGVjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNodWZmbGVkRGVjayA9IGZ5c2h1ZmZsZShBcnJheS5hcHBseShudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggOiB0aGlzLmRlZmF1bHRSdWxlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKE51bWJlci5jYWxsLCBOdW1iZXIpLCB0aGlzLmZhbGxvZmYpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLnNodWZmbGVkRGVjay5wb3AoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndlaWdodGVkXCI6XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJXZWlnaHRlZCBkaXN0cmlidXRpb24gbm90IHlldCBpbXBsZW1lbnRlZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmYWxsb2ZmXCI6XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJGYWxsb2ZmIGRpc3RyaWJ1dGlvbiBub3QgeWV0IGltcGxlbWVudGVkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnBvdyhyYW5kb20oKSwgdGhpcy5mYWxsb2ZmKSAqIHRoaXMuZGVmYXVsdFJ1bGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kZWZhdWx0VXNlcylcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRVc2VzID0gW107XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRVc2VzW2luZGV4XSA9ICsrdGhpcy5kZWZhdWx0VXNlc1tpbmRleF0gfHwgMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRSdWxlc1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICBlcnJvcnMucHVzaChcIk5vIGRlZmF1bHQgcnVsZXMgZGVmaW5lZCBmb3IgXCIgKyB0aGlzKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9O1xuXG4gICAgUnVsZVNldC5wcm90b3R5cGUuY2xlYXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVc2VzKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRVc2VzID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZnlzaHVmZmxlKGFycmF5LCBmYWxsb2ZmKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSxcbiAgICAgICAgICAgIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IocmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICB2YXIgU3ltYm9sID0gZnVuY3Rpb24oZ3JhbW1hciwga2V5LCByYXdSdWxlcykge1xuICAgICAgICAvLyBTeW1ib2xzIGNhbiBiZSBtYWRlIHdpdGggYSBzaW5nbGUgdmFsdWUsIGFuZCBhcnJheSwgb3IgYXJyYXkgb2Ygb2JqZWN0cyBvZiAoY29uZGl0aW9ucy92YWx1ZXMpXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLmdyYW1tYXIgPSBncmFtbWFyO1xuICAgICAgICB0aGlzLnJhd1J1bGVzID0gcmF3UnVsZXM7XG5cbiAgICAgICAgdGhpcy5iYXNlUnVsZXMgPSBuZXcgUnVsZVNldCh0aGlzLmdyYW1tYXIsIHJhd1J1bGVzKTtcbiAgICAgICAgdGhpcy5jbGVhclN0YXRlKCk7XG5cbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5jbGVhclN0YXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gQ2xlYXIgdGhlIHN0YWNrIGFuZCBjbGVhciBhbGwgcnVsZXNldCB1c2FnZXNcbiAgICAgICAgdGhpcy5zdGFjayA9IFt0aGlzLmJhc2VSdWxlc107XG5cbiAgICAgICAgdGhpcy51c2VzID0gW107XG4gICAgICAgIHRoaXMuYmFzZVJ1bGVzLmNsZWFyU3RhdGUoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5wdXNoUnVsZXMgPSBmdW5jdGlvbihyYXdSdWxlcykge1xuICAgICAgICB2YXIgcnVsZXMgPSBuZXcgUnVsZVNldCh0aGlzLmdyYW1tYXIsIHJhd1J1bGVzKTtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKHJ1bGVzKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5wb3BSdWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnNlbGVjdFJ1bGUgPSBmdW5jdGlvbihub2RlLCBlcnJvcnMpIHtcbiAgICAgICAgdGhpcy51c2VzLnB1c2goe1xuICAgICAgICAgICAgbm9kZSA6IG5vZGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChcIlRoZSBydWxlIHN0YWNrIGZvciAnXCIgKyB0aGlzLmtleSArIFwiJyBpcyBlbXB0eSwgdG9vIG1hbnkgcG9wcz9cIik7XG4gICAgICAgICAgICByZXR1cm4gXCIoKFwiICsgdGhpcy5rZXkgKyBcIikpXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnNlbGVjdFJ1bGUoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5nZXRBY3RpdmVSdWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uc2VsZWN0UnVsZSgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnJ1bGVzVG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnJhd1J1bGVzKTtcbiAgICB9O1xuXG4gICAgdmFyIEdyYW1tYXIgPSBmdW5jdGlvbihyYXcsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0ge307XG4gICAgICAgIHRoaXMubG9hZEZyb21SYXdPYmoocmF3KTtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuY2xlYXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3ltYm9scyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleXNbaV1dLmNsZWFyU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5hZGRNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RzKSB7XG5cbiAgICAgICAgLy8gY29weSBvdmVyIHRoZSBiYXNlIG1vZGlmaWVyc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbW9kcykge1xuICAgICAgICAgICAgaWYgKG1vZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZXJzW2tleV0gPSBtb2RzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUubG9hZEZyb21SYXdPYmogPSBmdW5jdGlvbihyYXcpIHtcblxuICAgICAgICB0aGlzLnJhdyA9IHJhdztcbiAgICAgICAgdGhpcy5zeW1ib2xzID0ge307XG4gICAgICAgIHRoaXMuc3ViZ3JhbW1hcnMgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5yYXcpIHtcbiAgICAgICAgICAgIC8vIEFkZCBhbGwgcnVsZXMgdG8gdGhlIGdyYW1tYXJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnJhdykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJhdy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldID0gbmV3IFN5bWJvbCh0aGlzLCBrZXksIHRoaXMucmF3W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5jcmVhdGVSb290ID0gZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBub2RlIGFuZCBzdWJub2Rlc1xuICAgICAgICB2YXIgcm9vdCA9IG5ldyBUcmFjZXJ5Tm9kZSh0aGlzLCAwLCB7XG4gICAgICAgICAgICB0eXBlIDogLTEsXG4gICAgICAgICAgICByYXcgOiBydWxlLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuZXhwYW5kID0gZnVuY3Rpb24ocnVsZSwgYWxsb3dFc2NhcGVDaGFycykge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuY3JlYXRlUm9vdChydWxlKTtcbiAgICAgICAgcm9vdC5leHBhbmQoKTtcbiAgICAgICAgaWYgKCFhbGxvd0VzY2FwZUNoYXJzKVxuICAgICAgICAgICAgcm9vdC5jbGVhckVzY2FwZUNoYXJzKCk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbihydWxlLCBhbGxvd0VzY2FwZUNoYXJzKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5leHBhbmQocnVsZSwgYWxsb3dFc2NhcGVDaGFycyk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3QuZmluaXNoZWRUZXh0O1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN5bWJvbHMpO1xuICAgICAgICB2YXIgc3ltYm9sSlNPTiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgc3ltYm9sSlNPTi5wdXNoKCcgXCInICsga2V5ICsgJ1wiIDogJyArIHRoaXMuc3ltYm9sc1trZXldLnJ1bGVzVG9KU09OKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIntcXG5cIiArIHN5bWJvbEpTT04uam9pbihcIixcXG5cIikgKyBcIlxcbn1cIjtcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIG9yIHB1c2ggcnVsZXNcbiAgICBHcmFtbWFyLnByb3RvdHlwZS5wdXNoUnVsZXMgPSBmdW5jdGlvbihrZXksIHJhd1J1bGVzLCBzb3VyY2VBY3Rpb24pIHtcblxuICAgICAgICBpZiAodGhpcy5zeW1ib2xzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0gPSBuZXcgU3ltYm9sKHRoaXMsIGtleSwgcmF3UnVsZXMpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUFjdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XS5pc0R5bmFtaWMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0ucHVzaFJ1bGVzKHJhd1J1bGVzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5wb3BSdWxlcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuc3ltYm9sc1trZXldKVxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIkNhbid0IHBvcDogbm8gc3ltYm9sIGZvciBrZXkgXCIgKyBrZXkpO1xuICAgICAgICB0aGlzLnN5bWJvbHNba2V5XS5wb3BSdWxlcygpO1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5zZWxlY3RSdWxlID0gZnVuY3Rpb24oa2V5LCBub2RlLCBlcnJvcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sc1trZXldKSB7XG4gICAgICAgICAgICB2YXIgcnVsZSA9IHRoaXMuc3ltYm9sc1trZXldLnNlbGVjdFJ1bGUobm9kZSwgZXJyb3JzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGYWlsb3ZlciB0byBhbHRlcm5hdGl2ZSBzdWJncmFtbWFyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3ViZ3JhbW1hcnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3ViZ3JhbW1hcnNbaV0uc3ltYm9sc1trZXldKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YmdyYW1tYXJzW2ldLnN5bWJvbHNba2V5XS5zZWxlY3RSdWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBObyBzeW1ib2w/XG4gICAgICAgIGVycm9ycy5wdXNoKFwiTm8gc3ltYm9sIGZvciAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgICAgIHJldHVybiBcIigoXCIgKyBrZXkgKyBcIikpXCI7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlcyBhIHBsYWludGV4dCBydWxlIGluIHRoZSB0cmFjZXJ5IHN5bnRheFxuICAgIHRyYWNlcnkgPSB7XG5cbiAgICAgICAgY3JlYXRlR3JhbW1hciA6IGZ1bmN0aW9uKHJhdykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFtbWFyKHJhdyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0UmFuZG9tOiBzZXRSYW5kb20sXG5cbiAgICAgICAgLy8gUGFyc2UgdGhlIGNvbnRlbnRzIG9mIGEgdGFnXG4gICAgICAgIHBhcnNlVGFnIDogZnVuY3Rpb24odGFnQ29udGVudHMpIHtcblxuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcHJlYWN0aW9ucyA6IFtdLFxuICAgICAgICAgICAgICAgIHBvc3RhY3Rpb25zIDogW10sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzIDogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSB0cmFjZXJ5LnBhcnNlKHRhZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIHZhciBzeW1ib2xTZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uc1tpXS50eXBlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2xTZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFNlY3Rpb24gPSBzZWN0aW9uc1tpXS5yYXc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJtdWx0aXBsZSBtYWluIHNlY3Rpb25zIGluIFwiICsgdGFnQ29udGVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnByZWFjdGlvbnMucHVzaChzZWN0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3ltYm9sU2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gICB0aHJvdyAoXCJubyBtYWluIHNlY3Rpb24gaW4gXCIgKyB0YWdDb250ZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnRzID0gc3ltYm9sU2VjdGlvbi5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnN5bWJvbCA9IGNvbXBvbmVudHNbMF07XG4gICAgICAgICAgICAgICAgcGFyc2VkLm1vZGlmaWVycyA9IGNvbXBvbmVudHMuc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlIDogZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgdmFyIGRlcHRoID0gMDtcbiAgICAgICAgICAgIHZhciBpblRhZyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gW107XG4gICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSAwO1xuXG4gICAgICAgICAgICB2YXIgZXNjYXBlZFN1YnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbGFzdEVzY2FwZWRDaGFyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmVycm9ycyA9IGVycm9ycztcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihzdGFydCwgZW5kLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVuZCAtIHN0YXJ0IDwgMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHN0YXJ0ICsgXCI6IGVtcHR5IHRhZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChzdGFydCArIFwiOiBlbXB0eSBhY3Rpb25cIik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJhd1N1YnN0cmluZztcbiAgICAgICAgICAgICAgICBpZiAobGFzdEVzY2FwZWRDaGFyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3U3Vic3RyaW5nID0gZXNjYXBlZFN1YnN0cmluZyArIFwiXFxcXFwiICsgcnVsZS5zdWJzdHJpbmcobGFzdEVzY2FwZWRDaGFyICsgMSwgZW5kKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1N1YnN0cmluZyA9IHJ1bGUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJhdyA6IHJhd1N1YnN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxhc3RFc2NhcGVkQ2hhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBlc2NhcGVkU3Vic3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gcnVsZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFbnRlciBhIGRlZXBlciBicmFja2V0ZWQgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCAmJiAhaW5UYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5kIGEgYnJhY2tldGVkIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCAmJiAhaW5UYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGFzaHRhZ1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlnbm9yZSBpZiBub3QgYXQgZGVwdGggMCwgdGhhdCBtZWFucyB3ZSBhcmUgaW4gYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5UYWcgPSAhaW5UYWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlZFN1YnN0cmluZyA9IGVzY2FwZWRTdWJzdHJpbmcgKyBydWxlLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVzY2FwZWRDaGFyID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydCA8IHJ1bGUubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIHJ1bGUubGVuZ3RoLCAwKTtcblxuICAgICAgICAgICAgaWYgKGluVGFnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJVbmNsb3NlZCB0YWdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJUb28gbWFueSBbXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVG9vIG1hbnkgXVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RyaXAgb3V0IGVtcHR5IHBsYWludGV4dCBzZWN0aW9uc1xuXG4gICAgICAgICAgICBzZWN0aW9ucyA9IHNlY3Rpb25zLmZpbHRlcihmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24udHlwZSA9PT0gMCAmJiBzZWN0aW9uLnJhdy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VjdGlvbnMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb25zO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1Zvd2VsKGMpIHtcbiAgICAgICAgdmFyIGMyID0gYy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gKGMyID09PSAnYScpIHx8IChjMiA9PT0gJ2UnKSB8fCAoYzIgPT09ICdpJykgfHwgKGMyID09PSAnbycpIHx8IChjMiA9PT0gJ3UnKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bShjKSB7XG4gICAgICAgIHJldHVybiAoYyA+PSAnYScgJiYgYyA8PSAneicpIHx8IChjID49ICdBJyAmJiBjIDw9ICdaJykgfHwgKGMgPj0gJzAnICYmIGMgPD0gJzknKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xuICAgIH1cblxuICAgIHZhciBiYXNlRW5nTW9kaWZpZXJzID0ge1xuXG4gICAgICAgIHJlcGxhY2UgOiBmdW5jdGlvbihzLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTQ0NzgzL3JlcGxhY2luZy1hbGwtb2NjdXJyZW5jZXMtb2YtYS1zdHJpbmctaW4tamF2YXNjcmlwdFxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChwYXJhbXNbMF0pLCAnZycpLCBwYXJhbXNbMV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhcGl0YWxpemVBbGwgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICB2YXIgczIgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGNhcE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQWxwaGFOdW0ocy5jaGFyQXQoaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSBzLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhcE5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMyICs9IHMuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgczIgKz0gcy5jaGFyQXQoaSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcE5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHMyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhcGl0YWxpemUgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGEgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBpZiAocy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQoMikudG9Mb3dlckNhc2UoKSA9PT0gJ2knKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImEgXCIgKyBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzVm93ZWwocy5jaGFyQXQoMCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImFuIFwiICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBcImEgXCIgKyBzO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlyc3RTIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocyk7XG4gICAgICAgICAgICB2YXIgczIgPSBzLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gYmFzZUVuZ01vZGlmaWVycy5zKHMyWzBdKSArIFwiIFwiICsgczIuc2xpY2UoMSkuam9pbihcIiBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaW5pc2hlZCk7XG4gICAgICAgICAgICByZXR1cm4gZmluaXNoZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcyA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocy5jaGFyQXQocy5sZW5ndGggLTEpKSB7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICBpZiAoIWlzVm93ZWwocy5jaGFyQXQocy5sZW5ndGggLSAyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDEpICsgXCJpZXNcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgc3dpdGNoIChzLmNoYXJBdChzLmxlbmd0aCAtMSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICBpZiAoIWlzVm93ZWwocy5jaGFyQXQocy5sZW5ndGggLSAyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDEpICsgXCJpZWRcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRyYWNlcnkuYmFzZUVuZ01vZGlmaWVycyA9IGJhc2VFbmdNb2RpZmllcnM7IFxuICAgIC8vIEV4dGVybmFsaXplXG4gICAgdHJhY2VyeS5UcmFjZXJ5Tm9kZSA9IFRyYWNlcnlOb2RlO1xuXG4gICAgdHJhY2VyeS5HcmFtbWFyID0gR3JhbW1hcjtcbiAgICB0cmFjZXJ5LlN5bWJvbCA9IFN5bWJvbDtcbiAgICB0cmFjZXJ5LlJ1bGVTZXQgPSBSdWxlU2V0O1xuICAgIHJldHVybiB0cmFjZXJ5O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYWNlcnk7XG4iLCJjb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5jb25zdCBoaWdobGlnaHQgPSByZXF1aXJlKCcuL2hpZ2hsaWdodCcpO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcblxubGV0ICRkaWFsb2dzO1xubGV0ICRsaW5lT25lO1xubGV0ICRsaW5lVHdvO1xubGV0ICRuZXh0O1xuXG5sZXQgbGluZU9uZUFuaW1hdGluZztcbmxldCBsaW5lVHdvQW5pbWF0aW5nO1xuXG5sZXQgY3VyO1xubGV0IHByZXY7XG5sZXQgbmV4dDtcblxuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zb2xlLmRlYnVnKCdEaWFsb2cuaW5pdCgpJyk7XG5cbiAgJGRpYWxvZ3MgPSAkKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX3RleHQgcCcpO1xuICAkbGluZU9uZSA9ICRkaWFsb2dzLmZpcnN0KCk7XG4gICRsaW5lVHdvID0gJGRpYWxvZ3MubGFzdCgpO1xuICAkbmV4dCA9ICQoJyNoaWdobGlnaHRzLWRpYWxvZ19fbmV4dCcpO1xuXG4gIGxpbmVPbmVBbmltYXRpbmcgPSBmYWxzZTtcbiAgbGluZVR3b0FuaW1hdGluZyA9IGZhbHNlO1xuXG4gICRkaWFsb2dzLmVhY2goKF8sIGVsKSA9PiB7XG4gICAgdXRpbC5wcmVmaXhlZE9uKCQoZWwpLCAnQW5pbWF0aW9uRW5kJywgb25BbmltRW5kKTtcbiAgfSk7XG5cbiAgcmVhZHkgPSB0cnVlO1xufTtcblxuY29uc3Qgc3RhcnRIaWdobGlnaHQgPSAoaGlnaGxpZ2h0cykgPT4geztcbiAgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIHByZXYgPSBoaWdobGlnaHRzLnByZXY7XG4gIG5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgaWYgKCFyZWFkeSkgaW5pdCgpO1xuXG4gIC8vIHJlc2V0IGRpYWxvZ1xuICAvL2hpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0ID0gMDtcbiAgJGxpbmVPbmUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCBhbmltYXRlJyk7XG4gICRsaW5lVHdvLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuXG4gIGN1ci5zdGFydGVkID0gdHJ1ZTtcbiAgYW5pbWF0ZUhpZ2hsaWdodChjdXIpO1xufTtcblxuY29uc3QgYW5pbWF0ZUhpZ2hsaWdodCA9IChoaWdobGlnaHQpID0+IHtcbiAgJGxpbmVPbmUudGV4dChoaWdobGlnaHQuZGlhbG9nUGFydHNbaGlnaGxpZ2h0LmN1ckRpYWxvZ1BhcnRdWzBdIHx8ICcnKTtcbiAgJGxpbmVUd28udGV4dChoaWdobGlnaHQuZGlhbG9nUGFydHNbaGlnaGxpZ2h0LmN1ckRpYWxvZ1BhcnRdWzFdIHx8ICcnKTtcblxuICBoaWRlTmV4dCgpO1xuICBhbmltYXRlKCdvbmUnKTtcbn07XG5cbmNvbnN0IGFuaW1hdGUgPSAobGluZSkgPT4ge1xuICBpZiAobGluZSA9PT0gJ29uZScpIHtcbiAgICAvL3N0b3BBbmltYXRlKCd0d28nKTtcbiAgICAkbGluZU9uZS5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgIGxpbmVPbmVBbmltYXRpbmcgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGxpbmUgPT09ICd0d28nKSB7XG4gICAgLy9zdG9wQW5pbWF0ZSgnb25lJyk7XG4gICAgJGxpbmVUd28uYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qgc3RvcEFuaW1hdGUgPSAobGluZSkgPT4ge1xuICBpZiAobGluZSA9PT0gJ29uZScpIHtcbiAgICAkbGluZU9uZVxuICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgbGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGxpbmUgPT09ICd0d28nKSB7XG4gICAgJGxpbmVUd29cbiAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgIGxpbmVUd29BbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxufTtcblxuY29uc3Qgb25BbmltRW5kID0gKCkgPT4ge1xuICAvLyBjaGVjayBmb3IgdGhlIHNlY29uZCBhbmltYXRpb24gZmlyc3Qgc28gdGhlIHNlY29uZCBhbmltYXRpb25cbiAgLy8gZG9lc24ndCBnZXQgdHJpZ2dlcmVkIHRoZW4gaW1tZWRpYXRlbHkgZW5kZWQgaW5zaWRlIHRoaXMgZnVuY1xuICBpZiAobGluZVR3b0FuaW1hdGluZykge1xuICAgIHN0b3BBbmltYXRlKCd0d28nKTtcblxuICAgIHNob3dOZXh0KCk7XG4gIH1cblxuICBpZiAobGluZU9uZUFuaW1hdGluZykge1xuICAgIHN0b3BBbmltYXRlKCdvbmUnKTtcblxuICAgIC8vIGlmIHRoZXJlJ3MgdGV4dCBpbiBsaW5lVHdvLCBhbmltYXRlIGl0XG4gICAgaWYgKCRsaW5lVHdvLnRleHQoKS5sZW5ndGgpIHtcbiAgICAgIGFuaW1hdGUoJ3R3bycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93TmV4dCgpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gc2hvdyBuZXh0IGFycm93IGlmOlxuLy8gdGhlcmUgYXJlIHBhcnRzIGxlZnQgdG8gdGhpcyBoaWdobGlnaHRcbi8vIHRoZXJlIGFyZSBoaWdobGlnaHRzIGxlZnQgdG8gdGhlIHN0b3J5XG5jb25zdCBzaG93TmV4dCA9ICgpID0+IHtcbiAgLy8gdG9kbzogc2hvdyBhcnJvdyBpZiBuZXh0LCBidXQgbW92ZSBpbnRvIG91dHJvXG4gIGlmIChoaWdobGlnaHQuaGFzRGlhbG9nTGVmdChjdXIpIHx8IG5leHQpIHtcbiAgICAkbmV4dC5hZGRDbGFzcygnc2hvdycpO1xuICB9XG59O1xuXG5jb25zdCBoaWRlTmV4dCA9ICgpID0+IHtcbiAgJG5leHQucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbn07XG5cbmNvbnN0IGNvbnRpbnVlSGlnaGxpZ2h0ID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIHByZXYgPSBoaWdobGlnaHRzLnByZXY7XG4gIG5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgaWYgKCFjdXIuc3RhcnRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBjdXIuY3VyRGlhbG9nUGFydCsrO1xuXG4gIC8vIG5vIG1vcmUgdGV4dCB0byB0aGlzIGhpZ2hsaWdodFxuICBpZiAoY3VyLmN1ckRpYWxvZ1BhcnQgPT09IGN1ci5kaWFsb2dQYXJ0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhbmltYXRlSGlnaGxpZ2h0KGN1cik7XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3Qgc2V0SW50cm8gPSAob25lLCB0d28pID0+IHtcbiAgaWYgKCFyZWFkeSkgaW5pdCgpO1xuXG4gICRsaW5lT25lLnRleHQob25lKTtcbiAgJGxpbmVUd28udGV4dCh0d28pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0YXJ0SGlnaGxpZ2h0LFxuICBjb250aW51ZUhpZ2hsaWdodCxcbiAgc2V0SW50cm8sXG59O1xuXG4iLCJjb25zdCBpbml0ID0gKCkgPT4ge1xuICAkKCcjZG93bmxvYWQtc3RvcnknKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgJCgnI2hpZ2hsaWdodHMtanNvbicpLmF0dHIoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShoaWdobGlnaHRzKSk7XG5cbiAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudCgkKCdodG1sJykucHJvcCgnb3V0ZXJIVE1MJykpO1xuICAgIGxldCBmaWxlbmFtZSA9ICdibGFzZWJhbGwtc3RvcnknO1xuXG4gICAgY29uc3QgJGdhbWVOYW1lID0gJCgnLmdhbWUtbmFtZScpO1xuXG4gICAgaWYgKCRnYW1lTmFtZS50ZXh0KCkpIHtcbiAgICAgIGZpbGVuYW1lID0gJGdhbWVOYW1lLnRleHQoKS5yZXBsYWNlKCcsJywgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnICcsICctJyk7XG4gICAgfVxuXG4gICAgZmlsZW5hbWUgKz0gJy5odG1sJztcblxuICAgIC8vIGRvd25sb2FkIGNvZGUgYWRhcHRlZCBmcm9tOlxuICAgIC8vIGh0dHBzOi8vb3VyY29kZXdvcmxkLmNvbS9hcnRpY2xlcy9yZWFkLzE4OS9ob3ctdG8tY3JlYXRlLWEtZmlsZS1hbmQtZ2VuZXJhdGUtYS1kb3dubG9hZC13aXRoLWphdmFzY3JpcHQtaW4tdGhlLWJyb3dzZXItd2l0aG91dC1hLXNlcnZlclxuICAgIGNvbnN0ICRkbEJ1dHRvbiA9ICQoJzxhPicpXG4gICAgICAuYXR0cignaHJlZicsIGBkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwke3RleHR9YClcbiAgICAgIC5hdHRyKCdkb3dubG9hZCcsIGZpbGVuYW1lKVxuICAgICAgLmNzcygnZGlzcGxheScsICdub25lJylcbiAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG4gICAgJGRsQnV0dG9uWzBdLmNsaWNrKCk7XG4gICAgJGRsQnV0dG9uLnJlbW92ZSgpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0LFxufTtcblxuIiwiY29uc3QgbWx1c3RhcmQgPSByZXF1aXJlKCdtbHVzdGFyZCcpO1xuXG5jb25zdCBoaWdobGlnaHQgPSByZXF1aXJlKCcuL2hpZ2hsaWdodCcpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5sZXQgZ2FtZUV2ZW50cyA9IHt9O1xubGV0IGhpZ2hsaWdodHMgPSBbXTtcblxuY29uc3QgaXNQbGF5QmFsbCA9IChnYW1lRXYpID0+IHtcbiAgcmV0dXJuIGdhbWVFdi5sYXN0VXBkYXRlLmluZGV4T2YoJ1BsYXkgYmFsbCcpID49IDA7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUhpZ2hsaWdodHMgPSAoY2IpID0+IHtcbiAgJCgnLmdhbWUtZXZlbnRfX2NvbnRhaW5lciBpbnB1dDpjaGVja2VkJykuZWFjaCgoXywgY2hlY2tlZCkgPT4ge1xuICAgIGNvbnN0IGlkID0gJChjaGVja2VkKS5hdHRyKCdpZCcpO1xuICAgIGxldCB2aXN1YWwgPSAnZGlhbW9uZCc7XG5cbiAgICBpZiAoaXNQbGF5QmFsbChnYW1lRXZlbnRzW2lkXS5ldi5kYXRhKSkge1xuICAgICAgdmlzdWFsID0gJ2ludHJvJztcbiAgICB9XG5cbiAgICBjb25zdCBobCA9IGhpZ2hsaWdodC5tYWtlSGlnaGxpZ2h0KHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGdhbWVFdmVudDogZ2FtZUV2ZW50c1tpZF0uZXYsXG4gICAgICBtbHVzdGFyZDogZ2FtZUV2ZW50c1tpZF0ubWx1c3RhcmQsXG4gICAgICB2aXN1YWwsXG4gICAgfSk7XG5cbiAgICBoaWdobGlnaHRzLnB1c2goaGwpO1xuICB9KTtcblxuICBjb25zb2xlLmRlYnVnKCdnZW5lcmF0ZUhpZ2hsaWdodHM6JywgaGlnaGxpZ2h0cyk7XG4gIGNiKGhpZ2hsaWdodHMpO1xufTtcblxuY29uc3QgbWFrZUNvdW50Q2lyY2xlID0gKGNsYXNzZXMpID0+IHtcbiAgcmV0dXJuICQoJzxzcGFuPicpLmFkZENsYXNzKGNsYXNzZXMpO1xufTtcblxuY29uc3QgbWFrZUJhc2VEaWFtb25kID0gKG9jYykgPT4ge1xuICBjb25zdCAkZGlhbW9uZCA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdkaWFtb25kJyk7XG5cbiAgaWYgKG9jYykge1xuICAgICRkaWFtb25kLmFkZENsYXNzKCdmaWxsZWQnKTtcbiAgfVxuXG4gIHJldHVybiAkZGlhbW9uZDtcbn07XG5cbmNvbnN0IHJlbmRlckdhbWVFdiA9IChnYW1lRXYpID0+IHtcbiAgY29uc3QgZGF0YSA9IGdhbWVFdi5ldi5kYXRhO1xuXG4gIGlmICghZGF0YS5sYXN0VXBkYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgJGdhbWVFdiA9ICQoJzxkaXY+Jyk7XG5cbiAgLy8gZm9ybSBzdHVmZlxuICBjb25zdCAkY2hDb250YWluZXIgPSAkKCc8ZGl2PicpO1xuICBjb25zdCAkY2hlY2sgPSAkKCc8aW5wdXQ+Jyk7XG4gIGNvbnN0ICRsYWJlbCA9ICQoJzxsYWJlbD4nKTtcblxuICBsZXQgdXBkYXRlID0gYCR7ZGF0YS5sYXN0VXBkYXRlfSAke2RhdGEuc2NvcmVVcGRhdGUgfHwgJyd9YDtcblxuICAkY2hlY2tcbiAgICAuYWRkQ2xhc3MoJ2Zvcm0tY2hlY2staW5wdXQnKVxuICAgIC5hdHRyKCdpZCcsIGdhbWVFdi5ldi5oYXNoKVxuICAgIC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICAuYXR0cignbmFtZScsICdnYW1lIGV2ZW50JylcbiAgICAudmFsKCcnKTtcblxuICBpZiAoaXNQbGF5QmFsbChkYXRhKSkge1xuICAgICRjaGVja1xuICAgICAgLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIH1cblxuICAkbGFiZWxcbiAgICAuYWRkQ2xhc3MoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIC5hdHRyKCdmb3InLCBnYW1lRXYuZXYuaGFzaClcbiAgICAudGV4dCh1cGRhdGUpO1xuXG4gICRjaENvbnRhaW5lclxuICAgIC5hZGRDbGFzcygnZm9ybS1jaGVjayBjb2wtNycpXG4gICAgLmFwcGVuZCgkY2hlY2spXG4gICAgLmFwcGVuZCgkbGFiZWwpO1xuXG4gIC8vIGdhbWUgZXZlbnQgaW5mb1xuICBjb25zdCAkZ2FtZUV2SW5mbyA9ICQoJzxkaXY+Jyk7XG4gIGNvbnN0ICRzY29yZSA9ICQoJzxzcGFuPicpO1xuICBjb25zdCAkYmFzZXMgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJGJhbGxzID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRzdHJpa2VzID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRvdXRzID0gJCgnPHNwYW4+Jyk7XG5cbiAgbGV0IGhvbWVFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2hvbWUnLCBkYXRhKTtcbiAgbGV0IGF3YXlFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2F3YXknLCBkYXRhKTtcblxuICBsZXQgc2NvcmUgPSBgJHtob21lRW1vaml9ICR7ZGF0YS5ob21lU2NvcmV9IDogJHthd2F5RW1vaml9ICR7ZGF0YS5hd2F5U2NvcmV9YDtcbiAgbGV0IGJhc2VzID0gJyc7XG5cbiAgLy8gZmlsbCBpbiBiYWxscyBjb3VudFxuICBmb3IgKGxldCBiYWxsID0gMDsgYmFsbCA8IGRhdGEuYXRCYXRCYWxsczsgYmFsbCsrKSB7XG4gICAgJGJhbGxzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBmdWxsJykpO1xuICB9XG5cbiAgZm9yIChsZXQgYmFsbCA9IDM7IGJhbGwgPiBkYXRhLmF0QmF0QmFsbHM7IGJhbGwtLSkge1xuICAgICRiYWxscy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIHN0cmlrZXMgY291bnRcbiAgZm9yIChsZXQgc3RyaWtlID0gMDsgc3RyaWtlIDwgZGF0YS5hdEJhdFN0cmlrZXM7IHN0cmlrZSsrKSB7XG4gICAgJHN0cmlrZXMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGZ1bGwnKSk7XG4gIH1cblxuICBmb3IgKGxldCBzdHJpa2UgPSAyOyBzdHJpa2UgPiBkYXRhLmF0QmF0U3RyaWtlczsgc3RyaWtlLS0pIHtcbiAgICAkc3RyaWtlcy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIG91dHMgY291bnRcbiAgZm9yIChsZXQgb3V0ID0gMDsgb3V0IDwgZGF0YS5oYWxmSW5uaW5nT3V0czsgb3V0KyspIHtcbiAgICAkb3V0cy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZnVsbCcpKTtcbiAgfVxuXG4gIGZvciAobGV0IG91dCA9IDI7IG91dCA+IGRhdGEuaGFsZklubmluZ091dHM7IG91dC0tKSB7XG4gICAgJG91dHMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGVtcHR5JykpO1xuICB9XG5cbiAgLy8gZmlsbCBpbiBiYXNlIGRpYW1vbmRzXG4gICRiYXNlcy5hcHBlbmQobWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy50aGlyZC5wbGF5ZXJOYW1lKSk7XG4gICRiYXNlcy5hcHBlbmQobWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5zZWNvbmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKG1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuICAvLyB0b2RvOiBkZWFsIHdpdGggNCBiYXNlc1xuICAvLyRiYXNlcy5hcHBlbmQobWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5maXJzdC5wbGF5ZXJOYW1lKSk7XG5cbiAgJHNjb3JlXG4gICAgLnRleHQoc2NvcmUpO1xuICAkYmFsbHNcbiAgICAuYXR0cigndGl0bGUnLCAnQmFsbHMnKVxuICAgIC5hZGRDbGFzcygnYmFsbHMtY291bnQnKTtcbiAgJHN0cmlrZXNcbiAgICAuYXR0cigndGl0bGUnLCAnU3RyaWtlcycpXG4gICAgLmFkZENsYXNzKCdzdHJpa2VzLWNvdW50Jyk7XG4gICRvdXRzXG4gICAgLmF0dHIoJ3RpdGxlJywgJ091dHMnKVxuICAgIC5hZGRDbGFzcygnb3V0cy1jb3VudCcpO1xuICAkYmFzZXNcbiAgICAuYXR0cigndGl0bGUnLCAnQmFzZXMgb2NjdXBpZWQnKVxuICAgIC5hZGRDbGFzcygnYmFzZXMtb2NjdXBpZWQnKTtcblxuICAkZ2FtZUV2SW5mb1xuICAgIC5hZGRDbGFzcygnY29sLTUnKVxuICAgIC5hcHBlbmQoJHNjb3JlKVxuICAgIC5hcHBlbmQoJGJhc2VzKVxuICAgIC5hcHBlbmQoJGJhbGxzKVxuICAgIC5hcHBlbmQoJHN0cmlrZXMpXG4gICAgLmFwcGVuZCgkb3V0cyk7XG5cbiAgJGdhbWVFdlxuICAgIC5hZGRDbGFzcygnZ2FtZS1ldmVudF9fY29udGFpbmVyIHJvdyBib3JkZXInKVxuICAgIC5hcHBlbmQoJGNoQ29udGFpbmVyKVxuICAgIC5hcHBlbmQoJGdhbWVFdkluZm8pO1xuXG4gIHJldHVybiAkZ2FtZUV2O1xufTtcblxuY29uc3QgcmVuZGVyR2FtZUV2cyA9ICgpID0+IHtcbiAgc3RvcExvYWRpbmcoKTtcbiAgJCgnI2dhbWUtZXZlbnRzLXNlbGVjdCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICBjb25zdCAkY29udGFpbmVyID0gJCgnI2dhbWUtZXZlbnRzLWNob29zZV9fY29udGFpbmVyJyk7XG5cbiAgLy8gZ290dGEgcmVuZGVyIHNvbWUgZ2VuZXJhbCBzdHVmZiB0b28gKGhvbWUgdnMgYXdheSwgcyNkIywgd2VhdGhlcilcbiAgLy8gYWxzbzogbGFiZWwgZm9yIHRoZSBzZWxlY3QsIGFuZCB0aGUgc2VsZWN0IGl0c2VsZlxuICBmb3IgKGxldCBpZCBpbiBnYW1lRXZlbnRzKSB7XG4gICAgbGV0ICRnYW1lRXYgPSByZW5kZXJHYW1lRXYoZ2FtZUV2ZW50c1tpZF0pO1xuXG4gICAgaWYgKCRnYW1lRXYpIHtcbiAgICAgICRjb250YWluZXIuYXBwZW5kKCRnYW1lRXYpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0R2FtZUV2ZW50cyA9IGFzeW5jIChnYW1lSWQsIG5leHRQYWdlKSA9PiB7XG4gIGxldCBnYW1lc1VSTCA9IGBodHRwczovL2FwaS5zaWJyLmRldi9jaHJvbmljbGVyL3YxL2dhbWVzL3VwZGF0ZXM/Z2FtZT0ke2dhbWVJZH1gO1xuXG4gIGlmIChuZXh0UGFnZSkge1xuICAgIGdhbWVzVVJMICs9IGAmcGFnZT0ke25leHRQYWdlfWA7XG4gIH1cblxuICBzdGFydExvYWRpbmcoKTtcblxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goZ2FtZXNVUkwpO1xuXG4gIGlmIChyZXNwLm9rKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgZm9yIChsZXQgZ2FtZUV2IG9mIGRhdGEuZGF0YSkge1xuICAgICAgZ2FtZUV2ZW50c1tnYW1lRXYuaGFzaF0gPSB7XG4gICAgICAgIGV2OiBnYW1lRXYsXG4gICAgICAgIG1sdXN0YXJkOiBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KGdhbWVFdi5kYXRhKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubmV4dFBhZ2UpIHtcbiAgICAgIGdldEdhbWVFdmVudHMoZ2FtZUlkLCBkYXRhLm5leHRQYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG9uZSBsb2FkaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgcmVuZGVyR2FtZUV2cygpO1xuICAgICAgY29uc29sZS5kZWJ1ZygnZ2V0R2FtZUV2ZW50cyBkb25lOicsIGdhbWVFdmVudHMpO1xuICAgIH1cblxuICB9XG59O1xuXG5jb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtZXZlbnQtZm9ybScpO1xuXG4gICRnYW1lRXZGb3JtLmZpbmQoJ2J1dHRvbicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnLnNwaW5uZXItYm9yZGVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xufTtcblxuY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtZXZlbnQtZm9ybScpO1xuXG4gICRnYW1lRXZGb3JtLmZpbmQoJ2J1dHRvbicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnLnNwaW5uZXItYm9yZGVyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xufTtcblxuY29uc3QgaW5pdCA9IChoaWdobGlnaHRzUmVhZHlDYikgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWV2ZW50LWZvcm0nKTtcblxuICAkZ2FtZUV2Rm9ybS5vbignc3VibWl0JywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGdhbWVJZCA9ICRnYW1lRXZGb3JtIC5maW5kKCcjZ2FtZS1pZCcpLnZhbCgpIC5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGdldEdhbWVFdmVudHMoZ2FtZUlkKTtcbiAgfSk7XG5cbiAgY29uc3QgJGhpZ2hsaWdodHNTZWxlY3RGb3JtID0gJCgnI2dhbWUtZXZlbnRzLWNob29zZV9fZm9ybScpO1xuXG4gICRoaWdobGlnaHRzU2VsZWN0Rm9ybS5vbignc3VibWl0JywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBnZW5lcmF0ZUhpZ2hsaWdodHMoaGlnaGxpZ2h0c1JlYWR5Q2IpO1xuICB9KTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQsXG59O1xuXG4iLCJjb25zdCBncmFuZFNsYWxhbWkgPSByZXF1aXJlKCdncmFuZC1zbGFsYW1pJyk7XG5cbi8vIG1ha2luZyBhICdjbGFzcycgZm9yIGhpZ2hsaWdodHMgaW4gdGhlIG9sZC1zY2hvb2wgd2F5XG4vLyBjYXVzZSBpIGRvbid0IHdhbm5hIGhhdmUgdG8gY29tcGxpY2F0ZSB0aGluZ3MgZnVydGhlciB3aXRoIGJhYmVsXG5jb25zdCBtYWtlSGlnaGxpZ2h0ID0gKHNldHRpbmdzKSA9PiB7XG4gIHNldHRpbmdzID0gc2V0dGluZ3MgfHwge307XG5cbiAgbGV0IGlkO1xuICBsZXQgZ2FtZUV2ZW50O1xuICBsZXQgbWx1c3RhcmQ7XG4gIGxldCBjb21tZW50YXJ5O1xuICBsZXQgbWF4RGlhbG9nTGVuO1xuICBsZXQgZGlhbG9nUGFydHM7XG4gIGxldCBjdXJEaWFsb2dQYXJ0O1xuICBsZXQgdmlzdWFsO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWQgPSBzZXR0aW5ncy5pZDtcbiAgICBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gICAgbWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZDtcbiAgICB2aXN1YWwgPSBzZXR0aW5ncy52aXN1YWw7XG4gICAgY29tbWVudGFyeSA9IGdlbmVyYXRlQ29tbWVudGFyeSgpO1xuICAgIG1heERpYWxvZ0xlbiA9IHNldE1heERpYWxvZ0xlbigpO1xuICAgIGRpYWxvZ1BhcnRzID0gW107XG4gICAgY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgYnJlYWtJbnRvRGlhbG9nUGFydHMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIGdhbWVFdmVudCxcbiAgICAgIG1sdXN0YXJkLFxuICAgICAgY29tbWVudGFyeSxcbiAgICAgIGRpYWxvZ1BhcnRzLFxuICAgICAgY3VyRGlhbG9nUGFydCxcbiAgICAgIGhhc0RpYWxvZ0xlZnQsXG4gICAgICB2aXN1YWwsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUNvbW1lbnRhcnkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdyYW5kU2xhbGFtaS5nZXRDb21tZW50KHtcbiAgICAgIGdhbWVFdmVudDogZ2FtZUV2ZW50LmRhdGEsXG4gICAgICBtbHVzdGFyZDogbWx1c3RhcmQsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gdG9kbzogZG8gaSB3YW5uYSBzdXBwb3J0IG1vYmlsZT8gdGhlbiB1cGRhdGUgdGhpcyBhY2NvcmRpbmdseVxuICBjb25zdCBzZXRNYXhEaWFsb2dMZW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDM1O1xuICB9O1xuXG4gIGNvbnN0IGJyZWFrSW50b0RpYWxvZ1BhcnRzID0gKCkgPT4ge1xuICAgIC8vIHNwbGl0IGJ5IG5ld2xpbmVzIChlbmZvcmNlZCBwYWNpbmcpXG4gICAgY29uc3QgcGFjaW5nUGFydHMgPSBjb21tZW50YXJ5LnNwbGl0KCdcXG4nKTtcblxuICAgIHBhY2luZ1BhcnRzLmZvckVhY2goKHApID0+IHtcbiAgICAgIGJyZWFrSW50b1BhcnRzKHApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHNwbGl0IGVhY2ggcGFydCBpbnRvIGl0cyBhbmltYXRpb24gcGFydHMgYnkgbGluZSBsZW5ndGhcbiAgY29uc3QgYnJlYWtJbnRvUGFydHMgPSAodGV4dCkgPT4ge1xuICAgIGxldCBwYXJ0cyA9IFtbXSwgW11dO1xuICAgIGxldCB1bmZpbGxlZCA9IDA7XG4gICAgbGV0IGxlbiA9IDA7XG5cbiAgICB0ZXh0LnNwbGl0KCcgJykuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgbGV0IHdvcmRMZW4gPSB3b3JkLmxlbmd0aDtcblxuICAgICAgaWYgKChsZW4gKyB3b3JkTGVuKSA+IG1heERpYWxvZ0xlbikge1xuICAgICAgICBsZW4gPSAwO1xuXG4gICAgICAgIGlmICh1bmZpbGxlZCA9PT0gMSkge1xuICAgICAgICAgIGRpYWxvZ1BhcnRzLnB1c2gobWFrZVNlbnRlbmNlcyhwYXJ0cykpO1xuICAgICAgICAgIHBhcnRzID0gW1tdLCBbXV07XG4gICAgICAgICAgdW5maWxsZWQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVuZmlsbGVkID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGxlbiArIHdvcmRMZW4pIDw9IG1heERpYWxvZ0xlbikge1xuICAgICAgICBwYXJ0c1t1bmZpbGxlZF0ucHVzaCh3b3JkKTtcbiAgICAgICAgbGVuICs9IHdvcmRMZW4gKyAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUGFydHMucHVzaChtYWtlU2VudGVuY2VzKHBhcnRzKSk7XG4gIH07XG5cbiAgY29uc3QgbWFrZVNlbnRlbmNlcyA9IChwYXJ0cykgPT4ge1xuICAgIHJldHVybiBwYXJ0cy5tYXAoKHdvcmRzKSA9PiB7XG4gICAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vY29uc3QgaGFzRGlhbG9nTGVmdCA9ICgpID0+IHtcbiAgICAvL3JldHVybiAhKChjdXJEaWFsb2dQYXJ0ICsgMSkgPT09IGRpYWxvZ1BhcnRzLmxlbmd0aCk7XG4gIC8vfTtcblxuICByZXR1cm4gaW5pdCgpO1xufTtcblxuLy8gdXRpbGl0aWVzXG5jb25zdCBoYXNEaWFsb2dMZWZ0ID0gKGhpZ2hsaWdodCkgPT4ge1xuICAgIHJldHVybiAhKChoaWdobGlnaHQuY3VyRGlhbG9nUGFydCArIDEpID09PSBoaWdobGlnaHQuZGlhbG9nUGFydHMubGVuZ3RoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYWtlSGlnaGxpZ2h0LFxuICBoYXNEaWFsb2dMZWZ0LFxufTtcblxuIiwiY29uc3QgZ2FtZUV2ZW50U2VsZWN0b3IgPSByZXF1aXJlKCcuL2dhbWUtZXZlbnQtc2VsZWN0b3InKTtcbmNvbnN0IGRpYWxvZyA9IHJlcXVpcmUoJy4vZGlhbG9nJyk7XG5jb25zdCB2aXN1YWwgPSByZXF1aXJlKCcuL3Zpc3VhbCcpO1xuY29uc3QgZG93bmxvYWRlciA9IHJlcXVpcmUoJy4vZG93bmxvYWRlcicpO1xuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vbGliL3RlYW1zLWRhdGEnKTtcblxuZ2xvYmFsLmhpZ2hsaWdodHMgPSBbXTtcbmxldCBjdXJIaWdobGlnaHQgPSAwO1xubGV0IGludHJvID0gdHJ1ZTtcblxuY29uc3QgZ2V0SGlnaGxpZ2h0cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcmV2OiBoaWdobGlnaHRzW2N1ckhpZ2hsaWdodCAtIDFdLFxuICAgIGN1cjogaGlnaGxpZ2h0c1tjdXJIaWdobGlnaHRdLFxuICAgIG5leHQ6IGhpZ2hsaWdodHNbY3VySGlnaGxpZ2h0ICsgMV0sXG4gIH07XG59O1xuXG5jb25zdCBuZXh0SGlnaGxpZ2h0ID0gKCkgPT4ge1xuICBjb25zdCBobHMgPSBnZXRIaWdobGlnaHRzKCk7XG5cbiAgdmlzdWFsLnNob3dWaXN1YWwoaGxzLmN1ci52aXN1YWwpO1xuICB2aXN1YWwudXBkYXRlRGlhbW9uZChobHMpO1xuICBkaWFsb2cuc3RhcnRIaWdobGlnaHQoaGxzKTtcbn07XG5cbmNvbnN0IGNvbnRpbnVlSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlhbG9nLmNvbnRpbnVlSGlnaGxpZ2h0KGdldEhpZ2hsaWdodHMoKSk7XG59O1xuXG5jb25zdCBwbGF5SGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAvLyBkbyBub3RoaW5nIGlmIHRoZXJlJ3Mgbm8gbW9yZSBoaWdobGlnaHRzXG4gIGlmIChoaWdobGlnaHRzLmxlbmd0aCA9PT0gY3VySGlnaGxpZ2h0KSB7IHJldHVybiB9O1xuXG4gIC8vIGlmIHdlJ3JlIGluIHRoZSBpbnRybywgc3RhcnQgYXQgdGhlIGZpcnN0IGhpZ2hsaWdodFxuICAvL2lmIChpbnRybykge1xuICAgIC8vaW50cm8gPSBmYWxzZTtcbiAgICAvLyQoJyNpbnRybycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAvLyQoJyNkaWFtb25kJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgLy9uZXh0SGlnaGxpZ2h0KCk7XG4gICAgLy9yZXR1cm47XG4gIC8vfVxuXG4gIC8vIHRyeSB0byBhZHZhbmNlIHRoZSBoaWdobGlnaHQsIGlmIHRoZXJlJ3MgbW9yZSB0ZXh0IHRvIGFuaW1hdGVcbiAgaWYgKCFjb250aW51ZUhpZ2hsaWdodCgpKSB7XG4gICAgY3VySGlnaGxpZ2h0Kys7XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gbW9yZSBoaWdobGlnaHRzLCBtb3ZlIGludG8gb3V0cm9cbiAgICBpZiAoaGlnaGxpZ2h0cy5sZW5ndGggPT09IGN1ckhpZ2hsaWdodCkge1xuICAgICAgLy8gdG9kbzogb3V0cm9cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UsIHNob3cgdGhlIG5leHQgaGlnaGxpZ2h0XG4gICAgbmV4dEhpZ2hsaWdodCgpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVBY3Rpb24gPSAoZXZ0KSA9PiB7XG4gIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJyAmJiAhKFxuICAgIGV2dC5rZXlDb2RlID09PSAzMiB8fCAvLyBzcGFjZVxuICAgIGV2dC5rZXlDb2RlID09PSAzOSB8fCAvLyBhcnJvdyByaWdodFxuICAgIGV2dC5rZXlDb2RlID09PSA0MCAgICAvLyBhcnJvdyBkb3duXG4gICkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwbGF5SGlnaGxpZ2h0KCk7XG59O1xuXG5jb25zdCBzZXR1cEludHJvID0gKCkgPT4ge1xuICAvLyBncmFiIGdhbWUgaW5mbyBmcm9tIGZpcnN0IGhpZ2hsaWdodFxuICBjb25zdCBnYW1lRXYgPSBoaWdobGlnaHRzWzBdLmdhbWVFdmVudC5kYXRhO1xuICBjb25zdCAkaG9tZSA9ICQoJyNpbnRybyAudnMtbG9nb19faG9tZScpO1xuICBjb25zdCAkYXdheSA9ICQoJyNpbnRybyAudnMtbG9nb19fYXdheScpO1xuXG4gIGxldCBoTmljayA9IGdhbWVFdi5ob21lVGVhbU5pY2tuYW1lLnNwbGl0KCcgJykucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgbGV0IGFOaWNrID0gZ2FtZUV2LmF3YXlUZWFtTmlja25hbWUuc3BsaXQoJyAnKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChhTmljayA9PT0gJ21lY2hhbmljcycpIHtcbiAgICBhTmljayArPSAnLWF3YXknO1xuICB9XG5cbiAgJCgnI2ludHJvIC5nYW1lLW5hbWUnKS50ZXh0KGBTZWFzb24gJHtnYW1lRXYuc2Vhc29uICsgMX0sIERheSAke2dhbWVFdi5kYXkgKyAxfWApO1xuICAkaG9tZS5hdHRyKCdzcmMnLCBgLi9pbWFnZXMvbG9nby0ke2hOaWNrfS5wbmdgKTtcbiAgJGF3YXkuYXR0cignc3JjJywgYC4vaW1hZ2VzL2xvZ28tJHthTmlja30ucG5nYCk7XG5cbiAgLy8gZ2VvcmdpYXMgZG9uJ3QgaGF2ZSBhIHN0YW5kYXJkIHNpemUgbG9nb1xuICBpZiAoaE5pY2sgPT09ICdnZW9yZ2lhcycpIHtcbiAgICAkaG9tZS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gIH1cblxuICBpZiAoYU5pY2sgPT09ICdnZW9yZ2lhcycpIHtcbiAgICAkYXdheS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gIH1cblxuICAvLyBzZXQgdGhlIGRpYW1vbmQgY29sb3VycyBhbmQgYWRkIHRoZSBkaWFtb25kIGNzc1xuICBjb25zdCBob21lVGVhbSA9IHRlYW1zRGF0YS5kYXRhW2dhbWVFdi5ob21lVGVhbV07XG4gIGNvbnN0ICRkaWFtb25kID0gJCgnI2RpYW1vbmQtc3ZnJyk7XG4gIGNvbnN0ICRncmFzcyA9ICRkaWFtb25kLmZpbmQoJy5ncmFzcycpO1xuICBjb25zdCAkZGlydCA9ICRkaWFtb25kLmZpbmQoJy5kaXJ0Jyk7XG4gIGNvbnN0ICRuZXV0cmFsID0gJGRpYW1vbmQuZmluZCgnLm5ldXRyYWwnKTtcbiAgY29uc3QgJG1vdW5kID0gJGRpYW1vbmQuZmluZCgnLm1vdW5kJyk7XG5cbiAgJGdyYXNzLmZpcnN0KClcbiAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLmdyYXNzfWApXG4gICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmdyYXNzfWApO1xuICAkZ3Jhc3MubGFzdCgpXG4gICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5ncmFzc31gKVxuICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0T3V0bGluZX1gKTtcblxuICAkZGlydFxuICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZGlydH1gKVxuICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0T3V0bGluZX1gKTtcblxuICAkbW91bmRcbiAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLm1haW59YClcbiAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZGlydE91dGxpbmV9YCk7XG5cbiAgJG5ldXRyYWxcbiAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLm5ldXRyYWx9YClcbiAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtLmNvbG91cnMubmV1dHJhbH1gKTtcblxuICAkKCcjZGlhbW9uZF9faW1hZ2UnKVxuICAgIC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJysgYnRvYSgkZGlhbW9uZC5odG1sKCkpICsgJyknKTtcblxuICAkKCcubW91bmQtbG9nbycpLmZpcnN0KCkuYXR0cignc3JjJywgaG9tZVRlYW0uaG9tZUxvZ29VUkwpO1xuXG4gIG5leHRIaWdobGlnaHQoKTtcblxuICAvLyBhZGQgaW50cm8gdGV4dCB0byBkaWFsb2dcbiAgLy8kKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX3RleHQtb25lJylcbiAgICAvLy50ZXh0KGBTZWFzb24gJHtnYW1lRXYuc2Vhc29uICsgMX0sIERheSAke2dhbWVFdi5kYXkgKyAxfS4gJHtnYW1lRXYuaG9tZVRlYW1OYW1lfWApO1xuICAvLyQoJyNoaWdobGlnaHRzLWRpYWxvZ19fdGV4dC10d28nKVxuICAgIC8vLnRleHQoYHZzLiB0aGUgJHtnYW1lRXYuYXdheVRlYW1OYW1lfS5gKTtcbn07XG5cbmNvbnN0IG9uSGlnaGxpZ2h0c1JlYWR5ID0gKGhscykgPT4ge1xuICBoaWdobGlnaHRzID0gaGxzO1xuXG4gIHNldHVwSW50cm8oKTtcblxuICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBoYW5kbGVBY3Rpb24pO1xuICAkKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX2NvbnRhaW5lcicpLm9uKCdjbGljaycsIGhhbmRsZUFjdGlvbik7XG59O1xuXG5jb25zdCBpbml0QXBwID0gKCkgPT4ge1xuICBjb25zdCBoaWdobGlnaHRzRGF0YSA9ICQoJyNoaWdobGlnaHRzLWpzb24nKS5hdHRyKCdkYXRhJyk7XG5cbiAgLy8gc2tpcCBmaXJzdCBzdGVwcyBhbmQgZ28gc3RyYWlnaHQgdG8gc2hvd2luZyB0aGUgcmVlbCBpZiBpdCdzIGEgcHVibGlzaGVkXG4gIC8vIHN0b3J5XG4gIGlmIChoaWdobGlnaHRzRGF0YS5sZW5ndGgpIHtcbiAgICBvbkhpZ2hsaWdodHNSZWFkeShKU09OLnBhcnNlKGhpZ2hsaWdodHNEYXRhKSk7XG4gICAgLy9oaWdobGlnaHRzID0gSlNPTi5wYXJzZShoaWdobGlnaHRzRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUV2ZW50U2VsZWN0b3IuaW5pdChvbkhpZ2hsaWdodHNSZWFkeSk7XG4gICAgZG93bmxvYWRlci5pbml0KCk7XG4gIH1cbn07XG5cbmluaXRBcHAoKTtcblxuIiwiLy8gYXBhdGVkIGZyb21cbi8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udHJvbGxpbmctY3NzLWFuaW1hdGlvbnMtdHJhbnNpdGlvbnMtamF2YXNjcmlwdC9cbmNvbnN0IHByZWZpeGVzID0gWyd3ZWJraXQnLCAnbW96JywgJ01TJywgJ28nLCAnJ107XG5cbmNvbnN0IHByZWZpeGVkT24gPSAoJGVsLCB0eXBlLCBjYikgPT4ge1xuICBmb3IgKGxldCBwcmVmaXggb2YgcHJlZml4ZXMpIHtcbiAgICBpZiAoIXByZWZpeCkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAkZWwub24oYCR7cHJlZml4fSR7dHlwZX1gLCBjYik7XG4gIH1cbn07XG5cbmNvbnN0IGdldEVtb2ppID0gKHRlYW0sIGdhbWVFdikgPT4ge1xuICBsZXQgZW1vamkgPSAnJztcblxuICBpZiAodGVhbSA9PT0gJ2hvbWUnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmhvbWVUZWFtRW1vamkgPyBTdHJpbmcuZnJvbUNvZGVQb2ludChnYW1lRXYuaG9tZVRlYW1FbW9qaSkgOiAnJztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmhvbWVUZWFtRW1vamk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5hd2F5VGVhbUVtb2ppID8gU3RyaW5nLmZyb21Db2RlUG9pbnQoZ2FtZUV2LmF3YXlUZWFtRW1vamkpIDogJyc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5hd2F5VGVhbUVtb2ppO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbW9qaTtcbn07XG5cbmNvbnN0IGdldFBsYXllck5hbWVXaXRoSW5pdGlhbCA9IChuYW1lKSA9PiB7XG4gIGxldCByZXQgPSAnJztcblxuICByZXQgKz0gbmFtZVswXSArICcuICc7XG4gIHJldCArPSBuYW1lLnNwbGl0KCcgJylbMV07XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVmaXhlZE9uLFxuICBnZXRFbW9qaSxcbiAgZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsICxcbn07XG5cbiIsImNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgJGRpYW1vbmQgPSAkKCcjZGlhbW9uZCcpO1xuY29uc3QgZGlhbW9uZExvY2F0aW9ucyA9IHtcbiAgJG1vdW5kOiAkZGlhbW9uZC5maW5kKCcubW91bmQnKSxcbiAgJGJhdHRpbmc6ICRkaWFtb25kLmZpbmQoJy5iYXR0aW5nJyksXG4gICRmaXJzdDogJGRpYW1vbmQuZmluZCgnLmZpcnN0JyksXG4gICRzZWNvbmQ6ICRkaWFtb25kLmZpbmQoJy5zZWNvbmQnKSxcbiAgJHRoaXJkOiAkZGlhbW9uZC5maW5kKCcudGhpcmQnKSxcbn07XG5cbmNvbnN0IEJBU0VTID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnXTsgLy8gdG9kbzogJ2ZvdXJ0aCcsICdzZWNyZXQnP1xuXG5jb25zdCBkcmF3QmF0dGVyID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgLy9jb25zdCBtbCA9IGhpZ2hsaWdodC5tbHVzdGFyZDtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IGdlID0gY3VyLmdhbWVFdmVudC5kYXRhO1xuXG4gIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdhd2F5JyA6ICdob21lJztcbiAgbGV0IG5hbWVXaXRoRW1vamkgPSAnJztcblxuICBpZiAoZ2VbYCR7dGVhbX1CYXR0ZXJOYW1lYF0pIHtcbiAgICBjb25zdCBuYW1lID0gdXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwoZ2VbYCR7dGVhbX1CYXR0ZXJOYW1lYF0pO1xuICAgIG5hbWVXaXRoRW1vamkgPSBgJHt1dGlsLmdldEVtb2ppKHRlYW0sIGdlKX0gJHtuYW1lfWA7XG4gIH1cblxuICBkaWFtb25kTG9jYXRpb25zWyckYmF0dGluZyddXG4gICAgLnRleHQobmFtZVdpdGhFbW9qaSk7XG59O1xuXG5jb25zdCBkcmF3UGl0Y2hlciA9IChoaWdobGlnaHRzKSA9PiB7XG4gIC8vY29uc3QgbWwgPSBoaWdobGlnaHQubWx1c3RhcmQ7XG4gIGNvbnN0IGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBjb25zdCBnZSA9IGN1ci5nYW1lRXZlbnQuZGF0YTtcblxuICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnaG9tZScgOiAnYXdheSc7XG4gIGxldCBuYW1lV2l0aEVtb2ppID0gJyc7XG5cbiAgaWYgKGdlW2Ake3RlYW19UGl0Y2hlck5hbWVgXSkge1xuICAgIGNvbnN0IG5hbWUgPSB1dGlsLmdldFBsYXllck5hbWVXaXRoSW5pdGlhbChnZVtgJHt0ZWFtfVBpdGNoZXJOYW1lYF0pO1xuICAgIG5hbWVXaXRoRW1vamkgPSBgJHt1dGlsLmdldEVtb2ppKHRlYW0sIGdlKX0gJHtuYW1lfWA7XG4gIH1cblxuICBkaWFtb25kTG9jYXRpb25zWyckbW91bmQnXVxuICAgIC50ZXh0KG5hbWVXaXRoRW1vamkpO1xufTtcblxuY29uc3QgZHJhd0Jhc2VydW5uZXJzID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IG1sID0gY3VyLm1sdXN0YXJkO1xuICBjb25zdCBnZSA9IGN1ci5nYW1lRXZlbnQuZGF0YTtcblxuICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnYXdheScgOiAnaG9tZSc7XG5cbiAgaWYgKG1sICYmIG1sLmJhc2VSdW5uZXJzKSB7XG4gICAgZm9yIChsZXQgYmFzZSBvZiBCQVNFUykge1xuICAgICAgbGV0IG5hbWUgPSBtbC5iYXNlUnVubmVyc1tiYXNlXS5wbGF5ZXJOYW1lO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBsZXQgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke3V0aWwuZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsKG5hbWUpfWA7XG4gICAgICAgIGRpYW1vbmRMb2NhdGlvbnNbYCQke2Jhc2V9YF1cbiAgICAgICAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYW1vbmRMb2NhdGlvbnNbYCQke2Jhc2V9YF1cbiAgICAgICAgICAudGV4dCgnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCB1cGRhdGVEaWFtb25kID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgZHJhd0JhdHRlcihoaWdobGlnaHRzKTtcbiAgZHJhd1BpdGNoZXIoaGlnaGxpZ2h0cyk7XG4gIGRyYXdCYXNlcnVubmVycyhoaWdobGlnaHRzKTtcbn07XG5cbmNvbnN0IHNob3dWaXN1YWwgPSAodmlzdWFsKSA9PiB7XG4gIHN3aXRjaCAodmlzdWFsKSB7XG4gICAgY2FzZSAnaW50cm8nOlxuICAgICAgJCgnI2ludHJvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2RpYW1vbmQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICAkKCcjaW50cm8nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcjZGlhbW9uZCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXBkYXRlRGlhbW9uZCxcbiAgc2hvd1Zpc3VhbCxcbn07XG5cbiJdfQ==
