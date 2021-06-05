(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = {
  // hellmouth sunbeams
  'f02aeae2-5e6a-4098-9842-02d2273f25c7': {
    shorthand: 'HELL',
    colours: {
      official: 'fffbab',
      mound: '',
      moundOutline: '',
      bases: '',
      basesOutline: '1d1932',
      grass: 'e8c877',
      grassOutline: 'e8c877',
      dirt: 'ffffff',
      dirtOutline: '1d1932',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-sunbeams.png',
    homeLogoCredit: 'Coblin',
    homeLogoCreditURL: 'https://twitter.com/Krasi_Savov',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // hades tigers
  '747b8e4a-7e50-4638-a973-ea7950a3e739': {
    shorthand: 'HAD',
    colours: {
      official: '5c1c1c',
      mound: '',
      moundOutline: '000',
      bases: '',
      basesOutline: '000',
      grass: 'e85637',
      grassOutline: 'e85637',
      dirt: 'faa623',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-tigers.png',
    homeLogoCredit: 'jrfbz',
    homeLogoCreditURL: 'https://twitter.com/jrfbz',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // seattle garages
  '105bc3ff-1320-4e37-8ef0-8d595cb95dd0': {
    shorthand: 'SEA',
    colours: {
      official: '2b4075',
      mound: '',
      moundOutline: '',
      grass: 'ea2d29',
      grassOutline: 'ea2d29',
      bases: '',
      basesOutline: '1d1d1d',
      dirt: 'd8d8da',
      dirtOutline: '1d1d1d',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-garages.png',
    homeLogoCredit: 'zandterbird',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // mexico city wild wings
  '57ec08cc-0411-4643-b304-0e80dbc15ac7' : {
    shorthand: 'CDMX',
    colours: {
      official: 'd15700',
      mound: '',
      moundOutline: '000000',
      grass: '731f00',
      grassOutline: '731f00',
      bases: '',
      basesOutline: '000000',
      dirt: 'e0e0e0',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-wings.png',
    homeLogoCredit: 'thr33h3ad3ddrag',
    homeLogoCreditURL: 'https://twitter.com/thr33h3ad3ddrag',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: true,
  },

  // atlantis georgias
  'd9f89a8a-c563-493e-9d64-78e4f9a55d4a': {
    shorthand: 'ATLS',
    colours: {
      official: '00dbc2',
      mound: '',
      moundOutline: '',
      grass: '5cffec',
      grassOutline: '5cffec',
      bases: '',
      basesOutline: '',
      dirt: '',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-georgias.png',
    homeLogoCredit: 'blyptonomica',
    homeLogoCreditURL: 'https://twitter.com/blyptonomica',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: true,
  },

  // chicago firefighters
  'ca3f1c8c-c025-4d8e-8eef-5be6accbeb16': {
    shorthand: 'CHI',
    colours: {
      official: '8c2a3e',
      mound: '',
      moundOutline: '000000',
      grass: 'ff960a',
      grassOutline: 'ff960a',
      bases: '',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-firefighters.png',
    homeLogoCredit: 'Wirspringen on Discord',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: './images/logo-firefighters-stadium.png',
    stadiumLogoCredit: 'Wirspringen on Discord',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // tokyo lift
  'c73b705c-40ad-4633-a6ed-d357ee2e2bcf': {
    shorthand: 'TYO',
    colours: {
      official: 'e536c8',
      mound: '',
      moundOutline: '000a2a',
      grass: '90147b',
      grassOutline: '90147b',
      bases: '',
      basesOutline: '000a2a',
      dirt: 'faf0f9',
      dirtOutline: '000a2a',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-lift.png',
    homeLogoCredit: 'jrfbz',
    homeLogoCreditURL: 'https://twitter.com/jrfbz',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // breckenridge jazz hands
  'a37f9158-7f82-46bc-908c-c9e2dda7c33b': {
    shorthand: 'BRK',
    colours: {
      official: '6388ad',
      mound: '',
      moundOutline: '4e084d',
      grass: 'f3ca40',
      grassOutline: 'f3ca40',
      bases: '',
      basesOutline: '4e084d',
      dirt: 'f2a541',
      dirtOutline: '4e094d',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-hands.png',
    homeLogoCredit: 'Skootles on Discord',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: true,
  },

  // la unlimited tacos
  '878c1bf6-0d21-4659-bfee-916c8314d69c': {
    shorthand: 'TACO',
    colours: {
      official: '64376e',
      mound: '',
      moundOutline: '000000',
      grass: 'facf33',
      grassOutline: 'facf33',
      bases: '',
      basesOutline: '000000',
      dirt: '28c872',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-tacos.png',
    homeLogoCredit: '4damAvenue',
    homeLogoCreditURL: 'https://twitter.com/4damAvenue',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // miami dale
  'b63be8c2-576a-4d6e-8daf-814f8bcea96f': {
    shorthand: 'MIA',
    colours: {
      official: 'bf00ff',
      mound: '',
      moundOutline: '0e1216',
      grass: 'fee020',
      grassOutline: 'fee020',
      bases: '',
      basesOutline: '0e1216',
      dirt: '33ffff',
      dirtOutline: '0e1216',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-dale.png',
    homeLogoCredit: '4damAvenue',
    homeLogoCreditURL: 'https://twitter.com/4damAvenue',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: './images/logo-dale-stadium.png',
    stadiumLogoCredit: 'BillyGalant',
    stadiumLogoCreditURL: 'https://twitter.com/BillyGalant',
    stadiumLogoOutline: true,
  },

  // boston flowers
  '3f8bbb15-61c0-4e3f-8e4a-907a5fb1565e': {
    shorthand: 'BOS',
    colours: {
      official: 'f7d1ff',
      mound: '',
      moundOutline: '393a17',
      grass: '9755a5',
      grassOutline: '9755a5',
      bases: 'f7d1ff',
      basesOutline: '393a17',
      dirt: 'd791e3',
      dirtOutline: '393a17',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-flowers.png',
    homeLogoCredit: 'nim on Discord',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: true,
  },

  // ohio worms
  'bb4a9de5-c924-4923-a0cb-9d1445f1ee5d': {
    shorthand: 'OHIO',
    colours: {
      official: '5c4822',
      mound: '',
      moundOutline: '000',
      grass: 'ba9c65',
      grassOutline: 'ba9c65',
      bases: '',
      basesOutline: '000',
      dirt: 'fafafa',
      dirtOutline: '000',
      neutral: '',
    },
    homeLogoURL: './images/logo-worms.png',
    homeLogoCredit: 'dan.digital',
    homeLogoCreditURL: 'https://twitter.com/dandotdigital',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: true,
  },

  // houston spies
  '9debc64f-74b7-4ae1-a4d6-fce0144b6ea5': {
    shorthand: 'HOU',
    colours: {
      official: '67556b',
      mound: '',
      moundOutline: '000000',
      grass: '9e82a4',
      grassOutline: '9e82a4',
      bases: '',
      basesOutline: '000000',
      dirt: 'fafafa',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-spies.png',
    homeLogoCredit: 'Dalmationer',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // philly pies
  '23e4cbc1-e9cd-47fa-a35b-bfa06f726cb7': {
    shorthand: 'PHL',
    colours: {
      official: '399d8f',
      mound: '',
      moundOutline: '000000',
      grass: 'ffcd4c',
      grassOutline: 'ffcd4c',
      bases: '',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-pies.png',
    homeLogoCredit: 'Ladyknighttime#8806 on Discord',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // san fracisco lovers
  'b72f3061-f573-40d7-832a-5ad475bd7909': {
    shorthand: 'SF',
    colours: {
      official: 'd2264a',
      mound: '',
      moundOutline: '',
      grass: 'f193b3',
      grassOutline: 'f193b3',
      //bases: '6b184d',
      bases: '',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-lovers.png',
    homeLogoCredit: 'Lucacrafts',
    homeLogoCreditURL: 'https://twitter.com/lucacrafts',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // dallas steaks
  'b024e975-1c4a-4575-8936-a3754a08806a': {
    shorthand: 'DAL',
    colours: {
      official: '8c8d8f',
      mound: '',
      moundOutline: '000',
      grass: 'c6a78b',
      grassOutline: 'c6a78b',
      //grassOutline: '8c362a',
      //bases: '8c3628',
      bases: 'b00e1c',
      basesOutline: '000000',
      //dirt: 'c6a78b',
      //dirt: 'b00e1c',
      dirt: '8c362a',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-steaks.png',
    homeLogoCredit: '4damAvenue',
    homeLogoCreditURL: 'https://twitter.com/4damAvenue',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // new york millennials
  '36569151-a2fb-43c1-9df7-2df512424c82': {
    shorthand: 'NY',
    colours: {
      official: 'f8d6d7',
      mound: '',
      moundOutline: '',
      grass: '99cde3',
      grassOutline: '99cde3',
      bases: '',
      basesOutline: '000000',
      dirt: 'ffffff',
      dirtOutline: '000000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-millennials.png',
    homeLogoCredit: '@OrigamiAndroid',
    homeLogoCreditURL: 'https://twitter.com/OrigamiAndroid',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: './images/logo-millennials-stadium.png',
    stadiumLogoCredit: 'Annana',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // core mechanics
  '46358869-dce9-4a01-bfba-ac24fc56f57e': {
    shorthand: 'CORE',
    colours: {
      official: 'd13100',
      mound: '',
      moundOutline: '',
      grass: 'f9b14a',
      grassOutline: 'f9b14a',
      bases: '',
      basesOutline: '',
      dirt: 'fff',
      dirtOutline: '000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-mechanics.png',
    homeLogoCredit: 'ZweiHawke',
    homeLogoCreditURL: 'https://twitter.com/ZweiHawke',
    awayLogoURL: './images/logo-mechanics-away.png',
    awayLogoCredit: 'ZweiHawke',
    awayLogoCreditURL: 'https://twitter.com/ZweiHawke',
    stadiumLogoURL: './images/logo-mechanics-stadium.png',
    stadiumLogoCredit: '@whatsshecalled',
    stadiumLogoCreditURL: 'https://twitter.com/whatsshecalled',
    stadiumLogoOutline: false,
  },

  // yellowstone magic
  '7966eb04-efcc-499b-8f03-d13916330531': {
    shorthand: 'YELL',
    colours: {
      official: 'bf0043',
      mound: '',
      moundOutline: '000',
      grass: 'fcb040',
      grassOutline: 'fcb040',
      bases: '',
      basesOutline: '000',
      dirt: 'fff',
      dirtOutline: '000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-magic.png',
    homeLogoCredit: 'Lucky Penny on Discord',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // hawai'i fridays
  '979aee4a-6d80-4863-bf1c-ee1a78e06024': {
    shorthand: 'FRI',
    colours: {
      official: '3ee652',
      mound: '',
      moundOutline: '000',
      grass: '11a6c2',
      grassOutline: '11a6c2',
      bases: '',
      basesOutline: '000',
      dirt: 'e67575',
      dirtOutline: '000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-fridays.png',
    homeLogoCredit: '',
    homeLogoCreditURL: '',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // canada moist talkers
  'eb67ae5e-c4bf-46ca-bbbc-425cd34182ff': {
    shorthand: 'CAN',
    colours: {
      official: 'e5f4f5',
      mound: '',
      moundOutline: '000',
      grass: '3b97d4',
      grassOutline: '3b97d4',
      bases: 'ed1c24',
      basesOutline: '000',
      dirt: '035597',
      dirtOutline: '000',
      foulZone: 'e5f4f5',
      foulZoneOutline: 'e5f4f5',
    },
    homeLogoURL: './images/logo-talkers.png',
    homeLogoCredit: 'Q Peiffer, @longhairQ',
    homeLogoCreditURL: 'https://twitter.com/longhairQ',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // charleston shoe thieves
  'bfd38797-8404-4b38-8b82-341da28b1f83': {
    shorthand: 'CHS',
    colours: {
      official: 'ffce0a',
      mound: '',
      moundOutline: '000',
      grass: '1e91cc',
      grassOutline: '1e91cc',
      bases: 'ffce0a',
      basesOutline: '000',
      dirt: 'fcf2d0',
      dirtOutline: '000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-thieves.png',
    homeLogoCredit: 'chdhrrmnn',
    homeLogoCreditURL: 'https://twitter.com/chdhrrmnn',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // kansas city breath mints
  'adc5b394-8f76-416d-9ce9-813706877b84': {
    shorthand: 'KCBM',
    colours: {
      official: '178f55',
      mound: '003f1f',
      moundOutline: '000',
      grass: '178f55',
      grassOutline: '178f55',
      bases: 'ff0011',
      basesOutline: '000',
      dirt: 'ffffff',
      dirtOutline: '000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-mints.png',
    homeLogoCredit: 'nash_high',
    homeLogoCreditURL: 'https://twitter.com/nash_high',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
  },

  // baltimore crabs
  '8d87c468-699a-47a8-b40d-cfb73a5660ad': {
    shorthand: 'BAL',
    colours: {
      official: '593037',
      mound: '',
      moundOutline: '000',
      grass: 'f7630c',
      grassOutline: 'f7630c',
      bases: '593037',
      basesOutline: '000',
      dirt: 'f7b189',
      dirtOutline: '000',
      foulZone: '',
      foulZoneOutline: '',
    },
    homeLogoURL: './images/logo-crabs.png',
    homeLogoCredit: '4adamAvenue',
    homeLogoCreditURL: 'https://twitter.com/4damAvenue',
    awayLogoURL: '',
    awayLogoCredit: '',
    awayLogoCreditURL: '',
    stadiumLogoURL: '',
    stadiumLogoCredit: '',
    stadiumLogoCreditURL: '',
    stadiumLogoOutline: false,
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
},{"./quips.json":6,"./tracery-mods":7,"tracery-grammar":19}],5:[function(require,module,exports){
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
var players = require('../lib/players').players;

var BASES = ['first', 'second', 'third', 'fourth'];

var getBaserunnerName = function getBaserunnerName(eventData, i) {
  var _eventData$baseRunner;

  var name = ((_eventData$baseRunner = eventData.baseRunnerNames) === null || _eventData$baseRunner === void 0 ? void 0 : _eventData$baseRunner[i]) || ''; // try looking the name up by the id

  if (!name) {
    var player = players.filter(function (p) {
      return p.player_id === eventData.baseRunners[i];
    })[0];

    if (player) {
      name = player.player_name;
    }
  }

  return name;
};

var check = function check(analysis, eventData) {
  //const update = util.getUpdateText(eventData);
  if (eventData.baserunnerCount) {
    // i represents the order of baserunners
    // basesOccupied[i] is the base they are on, 0-indexed
    for (var i = 0; i < eventData.basesOccupied.length; i++) {
      var base = eventData.basesOccupied[i];
      analysis.baseRunners[BASES[base]] = {
        playerName: getBaserunnerName(eventData, i),
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
},{"../lib/players":18}],9:[function(require,module,exports){
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


    if (update.indexOf('uses a mind trick') >= 0) {
      analysis.walkMeta.mindTrick = true;

      if (update.indexOf('strikes out') >= 0) {
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
const players = [
    {
        "player_id": "020ed630-8bae-4441-95cc-0e4ecc27253b",
        "player_name": "Simon Haley",
    },
    {
        "player_id": "03f920cc-411f-44ef-ae66-98a44e883291",
        "player_name": "Cornelius Games",
    },
    {
        "player_id": "0813d43c-b938-49da-acef-65b73f27b099",
        "player_name": "Scratch Deleuze",
    },
    {
        "player_id": "13cf5521-140f-4ad9-a998-ac8af22b9bc8",
        "player_name": "Butch Wyeth",
    },
    {
        "player_id": "16aff709-e855-47c8-8818-b9ba66e90fe8",
        "player_name": "Mullen Peterson",
    },
    {
        "player_id": "17397256-c28c-4cad-85f2-a21768c66e67",
        "player_name": "Cory Ross",
    },
    {
        "player_id": "19241aa4-38e3-45ed-9750-68f4401f80e1",
        "player_name": "Ayanna Dumpington",
    },
    {
        "player_id": "1a93a2d2-b5b6-479b-a595-703e4a2f3885",
        "player_name": "Pedro Davids",
    },
    {
        "player_id": "20fd71e7-4fa0-4132-9f47-06a314ed539a",
        "player_name": "Lars Taylor",
    },
    {
        "player_id": "243e9c5c-5a8a-4b48-9ce6-b10ddd677ae6",
        "player_name": "Irnee Bluesky",
    },
    {
        "player_id": "2720559e-9173-4042-aaa0-d3852b72ab2e",
        "player_name": "Hiroto Wilcox",
    },
    {
        "player_id": "2e86de11-a2dd-4b28-b5fe-f4d0c38cd20b",
        "player_name": "Zion Aliciakeyes",
    },
    {
        "player_id": "30218684-7fa1-41a5-a3b3-5d9cd97dd36b",
        "player_name": "Jordan Hildebert",
    },
    {
        "player_id": "36786f44-9066-4028-98d9-4fa84465ab9e",
        "player_name": "Beasley Gloom",
    },
    {
        "player_id": "3d52ace6-a0a0-467e-80e0-ae86b289ad32",
        "player_name": "Adeline Hammer",
    },
    {
        "player_id": "46721a07-7cd2-4839-982e-7046df6e8b66",
        "player_name": "Stew Briggs",
    },
    {
        "player_id": "489cc1ce-82df-4fad-867d-de7d9822fedc",
        "player_name": "Rigby Peacelily",
    },
    {
        "player_id": "4c86a500-d538-4b83-b321-d762533d7660",
        "player_name": "Allan Kranch",
    },
    {
        "player_id": "4ffd2e50-bb5b-45d0-b7c4-e24d41b2ff5d",
        "player_name": "Schneider Bendie",
    },
    {
        "player_id": "51c5473a-7545-4a9a-920d-d9b718d0e8d1",
        "player_name": "Jacob Haynes",
    },
    {
        "player_id": "5576a2cb-3deb-4a35-a1ef-9e3cc2039563",
        "player_name": "Phineas Wormthrice",
    },
    {
        "player_id": "58c9e294-bd49-457c-883f-fb3162fc668e",
        "player_name": "Kichiro Guerra",
    },
    {
        "player_id": "5bcfb3ff-5786-4c6c-964c-5c325fcc48d7",
        "player_name": "Paula Turnip",
    },
    {
        "player_id": "5c6cce63-99b3-441d-90e0-0664e68057a6",
        "player_name": "Ezekiel Throckmorton",
    },
    {
        "player_id": "611d18e0-b972-4cdd-afc2-793c56bfe5a9",
        "player_name": "Alston Cerveza",
    },
    {
        "player_id": "63df8701-1871-4987-87d7-b55d4f1df2e9",
        "player_name": "Mcdowell Mason",
    },
    {
        "player_id": "64c92f8d-6028-495b-b81d-32c975afb2e1",
        "player_name": "Enid Marlow",
    },
    {
        "player_id": "68dd9d47-b9a8-4fd3-a89c-5c112eb1982e",
        "player_name": "Durham Spaceman",
    },
    {
        "player_id": "692d8430-42ad-4b88-8b36-a7d20da9b0a6",
        "player_name": "Hiroto Poole",
    },
    {
        "player_id": "6cc3246f-2da2-4c7c-a46f-9b45dcbf384c",
        "player_name": "Samothes Thwompson",
    },
    {
        "player_id": "718dea1a-d9a8-4c2b-933a-f0667b5250e6",
        "player_name": "Margarito Nava",
    },
    {
        "player_id": "72ca8ed5-a8c7-4571-9745-80de5a49b2d1",
        "player_name": "Kaj Statter Jr.",
    },
    {
        "player_id": "7932c7c7-babb-4245-b9f5-cdadb97c99fb",
        "player_name": "Randy Castillo",
    },
    {
        "player_id": "7b55d484-6ea9-4670-8145-986cb9e32412",
        "player_name": "Stevenson Heat",
    },
    {
        "player_id": "7cf83bdc-f95f-49d3-b716-06f2cf60a78d",
        "player_name": "Matteo Triumphant",
    },
    {
        "player_id": "7e9a514a-7850-4ed0-93ab-f3a6e2f41c03",
        "player_name": "Nolanestophia Patterson",
    },
    {
        "player_id": "817dee99-9ccf-4f41-84e3-dc9773237bc8",
        "player_name": "Holden Stanton",
    },
    {
        "player_id": "828c5080-4543-4bf2-9d84-436d58c7fd66",
        "player_name": "Enid Slumps",
    },
    {
        "player_id": "84a2b5f6-4955-4007-9299-3d35ae7135d3",
        "player_name": "Kennedy Loser",
    },
    {
        "player_id": "864b3be8-e836-426e-ae56-20345b41d03d",
        "player_name": "Goodwin Morin",
    },
    {
        "player_id": "89ec77d8-c186-4027-bd45-f407b4800c2c",
        "player_name": "James Mora",
    },
    {
        "player_id": "8c8cc584-199b-4b76-b2cd-eaa9a74965e5",
        "player_name": "Ziwa Mueller",
    },
    {
        "player_id": "90c2cec7-0ed5-426a-9de8-754f34d59b39",
        "player_name": "Tot Fox",
    },
    {
        "player_id": "91f5298e-a2ec-4f54-a541-1818702d1b6d",
        "player_name": "Mint Shupe",
    },
    {
        "player_id": "9311b727-de74-4f25-912d-e08a79f061b0",
        "player_name": "Fenry Eggburt",
    },
    {
        "player_id": "97af97a7-19dc-4d18-9f72-8bd89f7eeaa8",
        "player_name": "Trinity Smaht",
    },
    {
        "player_id": "98d233de-9c3f-4100-a343-5297b7fdeb92",
        "player_name": "York Silk II",
    },
    {
        "player_id": "9965eed5-086c-4977-9470-fe410f92d353",
        "player_name": "Bates Bentley",
    },
    {
        "player_id": "9a031b9a-16f8-4165-a468-5d0e28a81151",
        "player_name": "Tiana Wheeler",
    },
    {
        "player_id": "9dd40dc7-033f-4039-90c8-184853f3064f",
        "player_name": "Simon Peck",
    },
    {
        "player_id": "9f218ed1-d793-437d-a1b9-79f88f69154d",
        "player_name": "Lotus Mango",
    },
    {
        "player_id": "a1ed3396-114a-40bc-9ff0-54d7e1ad1718",
        "player_name": "Patel Beyonce",
    },
    {
        "player_id": "a5f8ce83-02b2-498c-9e48-533a1d81aebf",
        "player_name": "Evelton McBlase",
    },
    {
        "player_id": "a8a5cf36-d1a9-47d1-8d22-4a665933a7cc",
        "player_name": "Helga Washington",
    },
    {
        "player_id": "af2303b9-9f95-4d43-b1d5-d45eba9270a7",
        "player_name": "Nitzan Hubet",
    },
    {
        "player_id": "b082ca6e-eb11-4eab-8d6a-30f8be522ec4",
        "player_name": "Nicholas Mora",
    },
    {
        "player_id": "b88d313f-e546-407e-8bc6-94040499daa5",
        "player_name": "Oliver Loofah",
    },
    {
        "player_id": "b8ab86c6-9054-4832-9b96-508dbd4eb624",
        "player_name": "Esme Ramsey",
    },
    {
        "player_id": "bbf9543f-f100-445a-a467-81d7aab12236",
        "player_name": "Farrell Seagull",
    },
    {
        "player_id": "bd24e18b-800d-4f15-878d-e334fb4803c4",
        "player_name": "Helga Burton",
    },
    {
        "player_id": "be18d363-752d-4e4a-b06b-1a7e4641400b",
        "player_name": "Scores Baserunner",
    },
    {
        "player_id": "bf122660-df52-4fc4-9e70-ee185423ff93",
        "player_name": "Walton Sports",
    },
    {
        "player_id": "bf6a24d1-4e89-4790-a4ba-eeb2870cbf6f",
        "player_name": "Rat Mason",
    },
    {
        "player_id": "c0177f76-67fc-4316-b650-894159dede45",
        "player_name": "Paula Mason",
    },
    {
        "player_id": "c09e64b6-8248-407e-b3af-1931b880dbee",
        "player_name": "Lenny Spruce",
    },
    {
        "player_id": "c1dddfc5-6ad6-4b31-9e52-98236c533876",
        "player_name": "York Silk III",
    },
    {
        "player_id": "c6a19154-7438-4c4f-b786-2dfaf5951f0f",
        "player_name": "Silvaire Roadhouse",
    },
    {
        "player_id": "cbd19e6f-3d08-4734-b23f-585330028665",
        "player_name": "Knight Triumphant",
    },
    {
        "player_id": "d2a1e734-60d9-4989-b7d9-6eacda70486b",
        "player_name": "Tiana Takahashi",
    },
    {
        "player_id": "db33a54c-3934-478f-bad4-fc313ac2580e",
        "player_name": "Percival Wheeler",
    },
    {
        "player_id": "de21c97e-f575-43b7-8be7-ecc5d8c4eaff",
        "player_name": "Pitching Machine",
    },
    {
        "player_id": "e69db30d-74ac-4265-8da6-467b0d25694b",
        "player_name": "Dervin Gorczyca",
    },
    {
        "player_id": "eaaef47e-82cc-4c90-b77d-75c3fb279e83",
        "player_name": "Herring Winfield",
    },
    {
        "player_id": "efafe75e-2f00-4418-914c-9b6675d39264",
        "player_name": "Aldon Cashmoney",
    },
    {
        "player_id": "f70dd57b-55c4-4a62-a5ea-7cc4bf9d8ac1",
        "player_name": "Tillman Henderson",
    },
    {
        "player_id": "f9930cb1-7ed2-4b9a-bf4f-7e35f2586d71",
        "player_name": "Finn James",
    },
    {
        "player_id": "fa5b54d2-b488-47cd-a529-592831e4813d",
        "player_name": "Kina Larsen",
    },
    {
        "player_id": "667cb445-c288-4e62-b603-27291c1e475d",
        "player_name": "Peanut Holloway",
    },
    {
        "player_id": "a3947fbc-50ec-45a4-bca4-49ffebb77dbe",
        "player_name": "Chorby Short",
    },
    {
        "player_id": "190a0f31-d686-4ac4-a7f3-cfc87b72c145",
        "player_name": "Nerd Pacheco",
    },
    {
        "player_id": "405dfadf-d435-4307-82f6-8eba2287e87a",
        "player_name": "Jaxon Buckley",
    },
    {
        "player_id": "89f74891-2e25-4b5a-bd99-c95ba3f36aa0",
        "player_name": "Nagomi Nava",
    },
    {
        "player_id": "12c4368d-478b-42be-b6d3-fa2e9b230f82",
        "player_name": "Lady Matsuyama",
    },
    {
        "player_id": "13a05157-6172-4431-947b-a058217b4aa5",
        "player_name": "Spears Taylor",
    },
    {
        "player_id": "5991ccb3-7eed-46d9-9d7c-69dec9b56d4b",
        "player_name": "Mira Lemma",
    },
    {
        "player_id": "f3561c54-11c3-4b3d-9182-85386471b2eb",
        "player_name": "Nagomi Mcdaniel II",
    },
    {
        "player_id": "5bc7e5d4-39be-4d64-a242-abb39aca6f42",
        "player_name": "Gia Holbrook",
    },
    {
        "player_id": "2f85d731-81ed-4a07-9e01-e93f1786a366",
        "player_name": "Bees Taswell",
    },
    {
        "player_id": "32810dca-825c-4dbc-8b65-0702794c424e",
        "player_name": "Eduardo Woodman",
    },
    {
        "player_id": "4ecee7be-93e4-4f04-b114-6b333e0e6408",
        "player_name": "Sutton Dreamy",
    },
    {
        "player_id": "5703141c-25d9-46d0-b680-0cf9cfbf4777",
        "player_name": "Sandoval Crossing",
    },
    {
        "player_id": "b643a520-af38-42e3-8f7b-f660e52facc9",
        "player_name": "Adelaide Judochop",
    },
    {
        "player_id": "c675fcdf-6117-49a6-ac32-99a89a3a88aa",
        "player_name": "Valentine Games",
    },
    {
        "player_id": "766dfd1e-11c3-42b6-a167-9b2d568b5dc0",
        "player_name": "Sandie Turner",
    },
    {
        "player_id": "6644d767-ab15-4528-a4ce-ae1f8aadb65f",
        "player_name": "Paula Reddick",
    },
    {
        "player_id": "7dca7137-b872-46f5-8e59-8c9c996e9d22",
        "player_name": "Emmett Tabby",
    },
    {
        "player_id": "3a8c52d7-4124-4a65-a20d-d51abcbe6540",
        "player_name": "Theodore Holloway",
    },
    {
        "player_id": "503a235f-9fa6-41b5-8514-9475c944273f",
        "player_name": "Reese Clark",
    },
    {
        "player_id": "73265ee3-bb35-40d1-b696-1f241a6f5966",
        "player_name": "Parker Meng",
    },
    {
        "player_id": "81d7d022-19d6-427d-aafc-031fcb79b29e",
        "player_name": "Patty Fox",
    },
    {
        "player_id": "ae4acebd-edb5-4d20-bf69-f2d5151312ff",
        "player_name": "Theodore Cervantes",
    },
    {
        "player_id": "b9d97990-df0b-4b8f-ac85-61c44ab29a3d",
        "player_name": "Lorcan Smaht",
    },
    {
        "player_id": "0eea4a48-c84b-4538-97e7-3303671934d2",
        "player_name": "Helga Moreno",
    },
    {
        "player_id": "0ef1bc34-64ee-4c7b-8be2-88322b407a58",
        "player_name": "Geraldine Frost",
    },
    {
        "player_id": "542af915-79c5-431c-a271-f7185e37c6ae",
        "player_name": "Oliver Notarobot",
    },
    {
        "player_id": "57a19a22-f2cd-4e59-aa84-15cb0af30ba3",
        "player_name": "Vessalius Sundae",
    },
    {
        "player_id": "a691f2ba-9b69-41f8-892c-1acd42c336e4",
        "player_name": "Jenkins Good",
    },
    {
        "player_id": "b3e512df-c411-4100-9544-0ceadddb28cf",
        "player_name": "Famous Owens",
    },
    {
        "player_id": "c9e4a49e-e35a-4034-a4c7-293896b40c58",
        "player_name": "Alexander Horne",
    },
    {
        "player_id": "d5c24c97-f3d3-4b3d-8c13-0debb61346c5",
        "player_name": "Wyatt Mason X",
    },
    {
        "player_id": "dddb6485-0527-4523-9bec-324a5b66bf37",
        "player_name": "Beans McBlase",
    },
    {
        "player_id": "e4e4c17d-8128-4704-9e04-f244d4573c4d",
        "player_name": "Wesley Poole",
    },
    {
        "player_id": "fb9bedb4-9c8b-4520-a062-23fba0d5f05f",
        "player_name": "Nagomi Mcdaniel III",
    },
    {
        "player_id": "0bb35615-63f2-4492-80ec-b6b322dc5450",
        "player_name": "Sexton Wheerer",
    },
    {
        "player_id": "198fd9c8-cb75-482d-873e-e6b91d42a446",
        "player_name": "Ren Hunter",
    },
    {
        "player_id": "20e13b56-599b-4a22-b752-8059effc81dc",
        "player_name": "Lou Roseheart",
    },
    {
        "player_id": "26cfccf2-850e-43eb-b085-ff73ad0749b8",
        "player_name": "Beasley Day",
    },
    {
        "player_id": "3c331c87-1634-46c4-87ce-e4b9c59e2969",
        "player_name": "Yosh Carpenter",
    },
    {
        "player_id": "44c92d97-bb39-469d-a13b-f2dd9ae644d1",
        "player_name": "Francisco Preston",
    },
    {
        "player_id": "5ff66eae-7111-4e3b-a9b8-a9579165b0a5",
        "player_name": "Peanutiel Duffy",
    },
    {
        "player_id": "733d80f1-2485-40f7-828b-fd7cd8243a01",
        "player_name": "Rai Spliff",
    },
    {
        "player_id": "924de86d-260b-495b-80e1-57af5767703c",
        "player_name": "Patchwork Southwick",
    },
    {
        "player_id": "97f5a9cd-72f0-413e-9e68-a6ee6a663489",
        "player_name": "Kline Greenlemon",
    },
    {
        "player_id": "9ac2e7c5-5a34-4738-98d8-9f917bc6d119",
        "player_name": "Christian Combs",
    },
    {
        "player_id": "9f6d06d6-c616-4599-996b-ec4eefcff8b8",
        "player_name": "Silvia Winner",
    },
    {
        "player_id": "b28bb7f7-2d8c-4781-8808-83844df7e732",
        "player_name": "Chorby Soul III",
    },
    {
        "player_id": "b323f897-ccf9-4200-8870-249cbe19f904",
        "player_name": "Huber Frumple",
    },
    {
        "player_id": "f1cc4d7d-bef0-43dd-ba0a-17c7628aa775",
        "player_name": "Magi Ruiz",
    },
    {
        "player_id": "f2468055-e880-40bf-8ac6-a0763d846eb2",
        "player_name": "Alaynabella Hollywood",
    },
    {
        "player_id": "f2a27a7e-bf04-4d31-86f5-16bfa3addbe7",
        "player_name": "Winnie Hess",
    },
    {
        "player_id": "f7847de2-df43-4236-8dbe-ae403f5f3ab3",
        "player_name": "Blood Hamburger",
    },
    {
        "player_id": "fedbceb8-e2aa-4868-ac35-74cd0445893f",
        "player_name": "Uncle Plasma",
    },
    {
        "player_id": "20c529b3-947e-4a77-b56f-69fe25fb3717",
        "player_name": "Socks Maybe",
    },
    {
        "player_id": "4ca52626-58cd-449d-88bb-f6d631588640",
        "player_name": "Velasquez Alstott",
    },
    {
        "player_id": "62ae6aa9-e346-4faa-b07c-1f7623580015",
        "player_name": "Gerund Pantheocide",
    },
    {
        "player_id": "63512571-2eca-4bc4-8ad9-a5308a22ae22",
        "player_name": "Oscar Dollie",
    },
    {
        "player_id": "80e474a3-7d2b-431d-8192-2f1e27162607",
        "player_name": "Summers Preston",
    },
    {
        "player_id": "8adb084b-19fe-4295-bcd2-f92afdb62bd7",
        "player_name": "Logan Rodriguez",
    },
    {
        "player_id": "ce611b45-98dc-4818-9ff9-e88237eb00f3",
        "player_name": "McKinley Otten",
    },
    {
        "player_id": "d4a10c2a-0c28-466a-9213-38ba3339b65e",
        "player_name": "Richmond Harrison",
    },
    {
        "player_id": "fe3e8ba5-6687-400d-9828-2b70d63ea8be",
        "player_name": "Tevin Melcon",
    },
    {
        "player_id": "678170e4-0688-436d-a02d-c0467f9af8c0",
        "player_name": "Baby Doyle",
    },
    {
        "player_id": "8605af4b-b235-43f8-81aa-6381ecdda756",
        "player_name": "Muse Scantron",
    },
    {
        "player_id": "ae81e172-801a-4236-929a-b990fc7190ce",
        "player_name": "August Sky",
    },
    {
        "player_id": "defbc540-a36d-460b-afd8-07da2375ee63",
        "player_name": "Castillo Turner",
    },
    {
        "player_id": "ebe6ac02-3b83-4da8-b1e5-f89053bbd5c8",
        "player_name": "Jan Canberra",
    },
    {
        "player_id": "ec68845f-3b26-412f-8446-4fef34e09c77",
        "player_name": "Nandy Fantastic",
    },
    {
        "player_id": "03b80a57-77ea-4913-9be4-7a85c3594745",
        "player_name": "Halexandrey Walton",
    },
    {
        "player_id": "1448f1f3-d76f-45c1-a5c1-54f22544000b",
        "player_name": "Scarlet Caster",
    },
    {
        "player_id": "316abea7-9890-4fb8-aaea-86b35e24d9be",
        "player_name": "Kennedy Rodgers",
    },
    {
        "player_id": "3188d641-4fcc-4d5e-887d-5f454b4c4ff8",
        "player_name": "Silvaire Semiquaver",
    },
    {
        "player_id": "c0998a08-de15-4187-b903-2e096ffa08e5",
        "player_name": "Cannonball Sports",
    },
    {
        "player_id": "c83b82e8-b8d2-4cb7-9982-97593283acc2",
        "player_name": "Kelvin Drumsolo",
    },
    {
        "player_id": "d97835fd-2e92-4698-8900-1f5abea0a3b6",
        "player_name": "King Roland",
    },
    {
        "player_id": "e4034192-4dc6-4901-bb30-07fe3cf77b5e",
        "player_name": "Baldwin Breadwinner",
    },
    {
        "player_id": "06fdd1ed-13a0-4eb2-a7dd-4e9551235a68",
        "player_name": "Xandra Pancakes",
    },
    {
        "player_id": "1732e623-ffc2-40f0-87ba-fdcf97131f1f",
        "player_name": "Betsy Trombone",
    },
    {
        "player_id": "27c68d7f-5e40-4afa-8b6f-9df47b79e7dd",
        "player_name": "Basilio Mason",
    },
    {
        "player_id": "3ab4ec02-17d9-4c4a-b956-aa170bf58a6e",
        "player_name": "Zippy DeShields",
    },
    {
        "player_id": "4f69e8c2-b2a1-4e98-996a-ccf35ac844c5",
        "player_name": "Igneus Delacruz",
    },
    {
        "player_id": "65273615-22d5-4df1-9a73-707b23e828d5",
        "player_name": "Burke Gonzales",
    },
    {
        "player_id": "691f9ab2-9dd4-42e8-bf95-9fd01253c801",
        "player_name": "Wyatt Mason IV",
    },
    {
        "player_id": "8cf78b49-d0ca-4703-88e8-4bcad26c44b1",
        "player_name": "Avila Guzman",
    },
    {
        "player_id": "94baa9ac-ff96-4f56-a987-10358e917d91",
        "player_name": "Gabriel Griffith",
    },
    {
        "player_id": "9be56060-3b01-47aa-a090-d072ef109fbf",
        "player_name": "Jes\u00fas Koch",
    },
    {
        "player_id": "9fd1f392-d492-4c48-8d46-27fb4283b2db",
        "player_name": "Lucas Petty",
    },
    {
        "player_id": "aae38811-122c-43dd-b59c-d0e203154dbe",
        "player_name": "Sandie Carver",
    },
    {
        "player_id": "c3ae0552-59e8-44bf-ba66-48a96aff35e6",
        "player_name": "Bontgomery Mullock",
    },
    {
        "player_id": "c3dc7aa2-e27b-4859-bbf0-47ba66c03186",
        "player_name": "Frankie Incarnate",
    },
    {
        "player_id": "18af933a-4afa-4cba-bda5-45160f3af99b",
        "player_name": "Felix Garbage",
    },
    {
        "player_id": "2da49de2-34e5-49d0-b752-af2a2ee061be",
        "player_name": "Cory Twelve",
    },
    {
        "player_id": "9f85676a-7411-444a-8ae2-c7f8f73c285c",
        "player_name": "Lachlan Shelton",
    },
    {
        "player_id": "d1a198d6-b05a-47cf-ab8e-39a6fa1ed831",
        "player_name": "Liquid Friend",
    },
    {
        "player_id": "e7bbfb62-a138-41e8-86af-b91843d17013",
        "player_name": "Chorby Soul II",
    },
    {
        "player_id": "f3c07eaf-3d6c-4cc3-9e54-cbecc9c08286",
        "player_name": "Campos Arias",
    },
    {
        "player_id": "18f45a1b-76eb-4b59-a275-c64cf62afce0",
        "player_name": "Steph Weeks",
    },
    {
        "player_id": "2b157c5c-9a6a-45a6-858f-bf4cf4cbc0bd",
        "player_name": "Ortiz Lopez",
    },
    {
        "player_id": "3ebb5361-3895-4a50-801e-e7a0ee61750c",
        "player_name": "Augusto Reddick",
    },
    {
        "player_id": "6b8d128f-ed51-496d-a965-6614476f8256",
        "player_name": "Orville Manco",
    },
    {
        "player_id": "889c9ef9-d521-4436-b41c-9021b81b4dfb",
        "player_name": "Liam Snail",
    },
    {
        "player_id": "a3ea0e93-c9f5-4f85-8acd-c3c5ce8601fa",
        "player_name": "Zeruel Kramer",
    },
    {
        "player_id": "d0ffc9c2-e677-4230-a639-b0ae11650501",
        "player_name": "Kaz Fiasco",
    },
    {
        "player_id": "d2d76815-cbdc-4c4b-9c9e-32ebf2297cc7",
        "player_name": "Denzel Scott",
    },
    {
        "player_id": "e3c514ae-f813-470e-9c91-d5baf5ffcf16",
        "player_name": "Tot Clark",
    },
    {
        "player_id": "238f8c50-311f-4486-a734-e1a17606af4d",
        "player_name": "Lucien Patchwork",
    },
    {
        "player_id": "4b3e8e9b-6de1-4840-8751-b1fb45dc5605",
        "player_name": "Thomas Dracaena",
    },
    {
        "player_id": "a7d8196a-ca6b-4dab-a9d7-c27f3e86cc21",
        "player_name": "Commissioner Vapor",
    },
    {
        "player_id": "f883269f-117e-45ec-bb1e-fa8dbcf40d3e",
        "player_name": "Jayden Wright",
    },
    {
        "player_id": "09f2787a-3352-41a6-8810-d80e97b253b5",
        "player_name": "Curry Aliciakeyes",
    },
    {
        "player_id": "1301ee81-406e-43d9-b2bb-55ca6e0f7765",
        "player_name": "Malik Destiny",
    },
    {
        "player_id": "1ffb1153-909d-44c7-9df1-6ed3a9a45bbd",
        "player_name": "Montgomery Bullock",
    },
    {
        "player_id": "28162da7-eafa-4eb1-8bc1-5a625f03ae57",
        "player_name": "Mags Banananana",
    },
    {
        "player_id": "5a26fc61-d75d-4c01-9ce2-1880ffb5550f",
        "player_name": "Randy Dennis",
    },
    {
        "player_id": "7fed72df-87de-407d-8253-2295a2b60d3b",
        "player_name": "Stout Schmitt",
    },
    {
        "player_id": "8903a74f-f322-41d2-bd75-dbf7563c4abb",
        "player_name": "Francisca Sasquatch",
    },
    {
        "player_id": "adcbc290-81c5-4da9-b4da-2e594b080710",
        "player_name": "Freemium Seraph",
    },
    {
        "player_id": "c22e3af5-9001-465f-b450-864d7db2b4a0",
        "player_name": "Logan Horseman",
    },
    {
        "player_id": "f0594932-8ef7-4d70-9894-df4be64875d8",
        "player_name": "Fitzgerald Wanderlust",
    },
    {
        "player_id": "2b5f5dd7-e31f-4829-bec5-546652103bc0",
        "player_name": "Dudley Mueller",
    },
    {
        "player_id": "6c346d8b-d186-4228-9adb-ae919d7131dd",
        "player_name": "Greer Gwiffin",
    },
    {
        "player_id": "8ecea7e0-b1fb-4b74-8c8c-3271cb54f659",
        "player_name": "Fitzgerald Blackburn",
    },
    {
        "player_id": "b6aa8ce8-2587-4627-83c1-2a48d44afaee",
        "player_name": "Inky Rutledge",
    },
    {
        "player_id": "c6e2e389-ed04-4626-a5ba-fe398fe89568",
        "player_name": "Henry Marshallow",
    },
    {
        "player_id": "c817c6cc-8574-4857-83f1-4a311fa89258",
        "player_name": "Chorby Soul IV",
    },
    {
        "player_id": "ce0e57a7-89f5-41ea-80f9-6e649dd54089",
        "player_name": "Yong Wright",
    },
    {
        "player_id": "5f5764c7-c3a0-4dae-ad17-c6689f1e8c27",
        "player_name": "Brisket Friendo",
    },
    {
        "player_id": "d8ee256f-e3d0-46cb-8c77-b1f88d8c9df9",
        "player_name": "Comfort Septemberish",
    },
    {
        "player_id": "4bf352d2-6a57-420a-9d45-b23b2b947375",
        "player_name": "Rivers Rosa",
    },
    {
        "player_id": "5e4dfa16-f1b9-400f-b8ef-a1613c2b026a",
        "player_name": "Snyder Briggs",
    },
    {
        "player_id": "8b53ce82-4b1a-48f0-999d-1774b3719202",
        "player_name": "Oliver Mueller",
    },
    {
        "player_id": "740d5fef-d59f-4dac-9a75-739ec07f91cf",
        "player_name": "Conner Haley",
    },
    {
        "player_id": "d5b6b11d-3924-4634-bd50-76553f1f162b",
        "player_name": "Ogden Mendoza",
    },
    {
        "player_id": "f245f6c6-4613-40f5-bc3b-85aa9ee3cf7e",
        "player_name": "Usurper Violet",
    },
    {
        "player_id": "f4ca437c-c31c-4508-afe7-6dae4330d717",
        "player_name": "Fran Beans",
    },
    {
        "player_id": "409d1c96-760b-4a96-9a3c-481112ddf37b",
        "player_name": "Niq Nyong'o",
    },
    {
        "player_id": "43d5da5f-c6a1-42f1-ab7f-50ea956b6cd5",
        "player_name": "Justice Spoon",
    },
    {
        "player_id": "5116921f-7642-441a-9a85-40c93a1e61bd",
        "player_name": "Mordecai Kingbird",
    },
    {
        "player_id": "b629cb7a-414b-4695-a115-7528ab700346",
        "player_name": "Shirai McElroy",
    },
    {
        "player_id": "e111a46d-5ada-4311-ac4f-175cca3357da",
        "player_name": "Alexandria Rosales",
    },
    {
        "player_id": "ea44bd36-65b4-4f3b-ac71-78d87a540b48",
        "player_name": "Wyatt Pothos",
    },
    {
        "player_id": "27839754-c351-43ec-9bff-ca662a2385b9",
        "player_name": "Loubert Ji-Eun",
    },
    {
        "player_id": "86adac6f-c694-44ac-9560-758de7eac937",
        "player_name": "Quack Enjoyable",
    },
    {
        "player_id": "888fce7a-0d21-478a-9b45-4662193fe9aa",
        "player_name": "Jolene Willowtree",
    },
    {
        "player_id": "b0c20916-7097-47e6-8226-cbf67da176e0",
        "player_name": "Kelvin Andante",
    },
    {
        "player_id": "089af518-e27c-4256-adc8-62e3f4b30f43",
        "player_name": "Silvia Rugrat",
    },
    {
        "player_id": "2859166d-6aed-4262-b05b-db85c49b3391",
        "player_name": "Donna Milicic",
    },
    {
        "player_id": "4542f0b0-3409-4a4a-a9e1-e8e8e5d73fcf",
        "player_name": "Brock Watson",
    },
    {
        "player_id": "82d1b7b4-ce00-4536-8631-a025f05150ce",
        "player_name": "Sam Scandal",
    },
    {
        "player_id": "2ffbaec8-a646-4435-a17a-3a0a2b5f3e16",
        "player_name": "Bonk Jokes",
    },
    {
        "player_id": "51dab868-820b-4969-8bba-bde0be8090d7",
        "player_name": "Cravel Gesundheit",
    },
    {
        "player_id": "814bae61-071a-449b-981e-e7afc839d6d6",
        "player_name": "Ruslan Greatness",
    },
    {
        "player_id": "ce7d33b7-1bba-48d6-a1d1-cd0e29231be8",
        "player_name": "Jacoby Podcast",
    },
    {
        "player_id": "d35ccee1-9559-49a1-aaa4-7809f7b5c46e",
        "player_name": "Forrest Best",
    },
    {
        "player_id": "495a6bdc-174d-4ad6-8d51-9ee88b1c2e4a",
        "player_name": "Shaquille Torres",
    },
    {
        "player_id": "4b6f0a4e-de18-44ad-b497-03b1f470c43c",
        "player_name": "Rodriguez Internet",
    },
    {
        "player_id": "a199a681-decf-4433-b6ab-5454450bbe5e",
        "player_name": "Leach Ingram",
    },
    {
        "player_id": "c182f33c-aea5-48a2-97ed-dc74fa29b3c0",
        "player_name": "Swamuel Mora",
    },
    {
        "player_id": "f2c477fb-28ea-4fcb-943a-9fab22df3da0",
        "player_name": "Sandford Garner",
    },
    {
        "player_id": "fcbe1d14-04c4-4331-97ad-46e170610633",
        "player_name": "Jode Preston",
    },
    {
        "player_id": "042962c8-4d8b-44a6-b854-6ccef3d82716",
        "player_name": "Ronan Jaylee",
    },
    {
        "player_id": "b39b5aae-8571-4c90-887a-6a00f2a2f6fd",
        "player_name": "Dickerson Morse",
    },
    {
        "player_id": "2d07ccd0-cac7-4ccd-bab6-a078bb983174",
        "player_name": "Engine Eberhardt",
    },
    {
        "player_id": "9d6f3d23-bc26-40e6-93aa-0b1c693e0ba8",
        "player_name": "Riley Firewall",
    },
    {
        "player_id": "ad8d15f4-e041-4a12-a10e-901e6285fdc5",
        "player_name": "Baby Triumphant",
    },
    {
        "player_id": "cfb42325-592a-4119-9b40-4cdc19959b09",
        "player_name": "Nandy Slumps",
    },
    {
        "player_id": "7aeb8e0b-f6fb-4a9e-bba2-335dada5f0a3",
        "player_name": "Dunlap Figueroa",
    },
    {
        "player_id": "88cd6efa-dbf2-4309-aabe-ec1d6f21f98a",
        "player_name": "Hewitt Best",
    },
    {
        "player_id": "006e1d32-9742-48ef-a6ba-36545e93b9e3",
        "player_name": "Jomgy Rolsenthal",
    },
    {
        "player_id": "20be1c34-071d-40c6-8824-dde2af184b4d",
        "player_name": "Qais Dogwalker",
    },
    {
        "player_id": "2268f452-01b9-4e16-98bb-c07e3ce767e3",
        "player_name": "Wanda Schenn",
    },
    {
        "player_id": "68f98a04-204f-4675-92a7-8823f2277075",
        "player_name": "Isaac Johnson",
    },
    {
        "player_id": "ad1e670a-f346-4bf7-a02f-a91649c41ccb",
        "player_name": "Stephanie Winters",
    },
    {
        "player_id": "e6502bc7-5b76-4939-9fb8-132057390b30",
        "player_name": "Greer Lott",
    },
    {
        "player_id": "f741dc01-2bae-4459-bfc0-f97536193eea",
        "player_name": "Alejandro Leaf",
    },
    {
        "player_id": "11de4da3-8208-43ff-a1ff-0b3480a0fbf1",
        "player_name": "Don Mitchell",
    },
    {
        "player_id": "2c4b2a6d-9961-4e40-882c-a338f4e72117",
        "player_name": "Evelton McBlase II",
    },
    {
        "player_id": "6fc3689f-bb7d-4382-98a2-cf6ddc76909d",
        "player_name": "Cedric Gonzalez",
    },
    {
        "player_id": "c18961e9-ef3f-4954-bd6b-9fe01c615186",
        "player_name": "Carmelo Plums",
    },
    {
        "player_id": "41bdb527-1fb2-487d-8237-093958e737e4",
        "player_name": "Zephyr McCloud",
    },
    {
        "player_id": "2e94fa0d-453f-4925-8ea0-c0a53e38108d",
        "player_name": "Aurora Blortles",
    },
    {
        "player_id": "41ad8060-2bbe-4872-a879-22cb102bb64c",
        "player_name": "Yrj\u00f6 Kerfuffle",
    },
    {
        "player_id": "ab36c776-b520-429b-a85f-bf633d7b081a",
        "player_name": "Goobie Ballson",
    },
    {
        "player_id": "04e14d7b-5021-4250-a3cd-932ba8e0a889",
        "player_name": "Jaylen Hotdogfingers",
    },
    {
        "player_id": "bca38809-81de-42ff-94e3-1c0ebfb1e797",
        "player_name": "Famous Oconnor",
    },
    {
        "player_id": "da0bbbe6-d13c-40cc-9594-8c476975d93d",
        "player_name": "Lang Richardson",
    },
    {
        "player_id": "da67c196-4cac-428b-8c18-2a411055ea35",
        "player_name": "Yusef Fenestrate",
    },
    {
        "player_id": "5679d5de-f417-45db-ab8d-49b92e744486",
        "player_name": "Trinity Roche",
    },
    {
        "player_id": "f3ddfd87-73a2-4681-96fe-829476c97886",
        "player_name": "Theodore Duende",
    },
    {
        "player_id": "7663c3ca-40a1-4f13-a430-14637dce797a",
        "player_name": "PolkaDot Zavala",
    },
    {
        "player_id": "f236bd5b-4ff1-4154-a3cd-7cb3c0ddaa5b",
        "player_name": "Tai Beanbag",
    },
    {
        "player_id": "ef9f8b95-9e73-49cd-be54-60f84858a285",
        "player_name": "Collins Melon",
    },
    {
        "player_id": "04931546-1b4a-469f-b391-7ed67afe824c",
        "player_name": "Glabe Moon",
    },
    {
        "player_id": "167751d5-210c-4a6e-9568-e92d61bab185",
        "player_name": "Jacob Winner",
    },
    {
        "player_id": "d5ef3cfa-b9a6-4e16-a3df-6c236e8bdb3b",
        "player_name": "Rylan O'Lantern",
    },
    {
        "player_id": "15ae64cd-f698-4b00-9d61-c9fffd037ae2",
        "player_name": "Mickey Woods",
    },
    {
        "player_id": "9c3273a0-2711-4958-b716-bfcf60857013",
        "player_name": "Kathy Mathews",
    },
    {
        "player_id": "9397ed91-608e-4b13-98ea-e94c795f651e",
        "player_name": "Yeong-Ho Garcia",
    },
    {
        "player_id": "d47dd08e-833c-4302-a965-a391d345455c",
        "player_name": "Stu Trololol",
    },
    {
        "player_id": "0eddd056-9d72-4804-bd60-53144b785d5c",
        "player_name": "Caleb Novak",
    },
    {
        "player_id": "5dbf11c0-994a-4482-bd1e-99379148ee45",
        "player_name": "Conrad Vaughan",
    },
    {
        "player_id": "9c23702b-f0c2-4668-8bcc-61bbdbbfd93e",
        "player_name": "Grollis Zephyr",
    },
    {
        "player_id": "a6ec8d00-a78f-4f6b-b51a-db9f5507cf0a",
        "player_name": "Foxy Pebble",
    },
    {
        "player_id": "b1b141fc-e867-40d1-842a-cea30a97ca4f",
        "player_name": "Richardson Games",
    },
    {
        "player_id": "cf8e152e-2d27-4dcc-ba2b-68127de4e6a4",
        "player_name": "Hendricks Richardson",
    },
    {
        "player_id": "083d09d4-7ed3-4100-b021-8fbe30dd43e8",
        "player_name": "Jessica Telephone",
    },
    {
        "player_id": "ee55248b-318a-4bfb-8894-1cc70e4e0720",
        "player_name": "Theo King",
    },
    {
        "player_id": "4304bcf9-239a-4aa2-a410-56a487217a2a",
        "player_name": "Lancelot Kane",
    },
    {
        "player_id": "81a0889a-4606-4f49-b419-866b57331383",
        "player_name": "Summers Pony",
    },
    {
        "player_id": "87e6ae4b-67de-4973-aa56-0fc9835a1e1e",
        "player_name": "Marco Stink",
    },
    {
        "player_id": "b9293beb-d199-4b46-add9-c02f9362d802",
        "player_name": "Bauer Zimmerman",
    },
    {
        "player_id": "e9a46e0c-0437-443a-be81-956665ec588e",
        "player_name": "Hierophantic Foible",
    },
    {
        "player_id": "1513aab6-142c-48c6-b43e-fbda65fd64e8",
        "player_name": "Caleb Alvarado",
    },
    {
        "player_id": "c31d874c-1b4d-40f2-a1b3-42542e934047",
        "player_name": "Cedric Spliff",
    },
    {
        "player_id": "76c4853b-7fbc-4688-8cda-c5b8de1724e4",
        "player_name": "Lars Mendoza",
    },
    {
        "player_id": "80dff591-2393-448a-8d88-122bd424fa4c",
        "player_name": "Elvis Figueroa",
    },
    {
        "player_id": "9e724d9a-92a0-436e-bde1-da0b2af85d8f",
        "player_name": "Hatfield Suzuki",
    },
    {
        "player_id": "c73d59dd-32a0-49ce-8ab4-b2dbb7dc94ec",
        "player_name": "Eduardo Ingram",
    },
    {
        "player_id": "f8c20693-f439-4a29-a421-05ed92749f10",
        "player_name": "Combs Duende",
    },
    {
        "player_id": "ac69dba3-6225-4afd-ab4b-23fc78f730fb",
        "player_name": "Bevan Wise",
    },
    {
        "player_id": "8a6fc67d-a7fe-443b-a084-744294cec647",
        "player_name": "Terrell Bradley",
    },
    {
        "player_id": "b61b2871-7254-49b3-b009-174a23acaa1a",
        "player_name": "Jon Halifax",
    },
    {
        "player_id": "e376a90b-7ffe-47a2-a934-f36d6806f17d",
        "player_name": "Howell Rocha",
    },
    {
        "player_id": "c755efce-d04d-4e00-b5c1-d801070d3808",
        "player_name": "Basilio Fig",
    },
    {
        "player_id": "f38c5d80-093f-46eb-99d6-942aa45cd921",
        "player_name": "Andrew Solis",
    },
    {
        "player_id": "b348c037-eefc-4b81-8edd-dfa96188a97e",
        "player_name": "Lowe Forbes",
    },
    {
        "player_id": "c6a277c3-d2b5-4363-839b-950896a5ec5e",
        "player_name": "Mike Townsend",
    },
    {
        "player_id": "b60605e6-ff41-4388-a61a-fafd2175f7ad",
        "player_name": "Elwin McGhee",
    },
    {
        "player_id": "28964497-0efe-420c-9c1d-8574f224a4e9",
        "player_name": "Inez Owens",
    },
    {
        "player_id": "8d337b47-2a7d-418d-a44e-ef81e401c2ef",
        "player_name": "Case Sports",
    },
    {
        "player_id": "285ce77d-e5cd-4daa-9784-801347140d48",
        "player_name": "Son Scotch",
    },
    {
        "player_id": "1c73f91e-0562-480d-9543-2aab1d5e5acd",
        "player_name": "Sparks Beans",
    },
    {
        "player_id": "7b0f91aa-4d66-4362-993d-6ff60f7ce0ef",
        "player_name": "Blankenship Fischer",
    },
    {
        "player_id": "d81ce662-07b6-4a73-baa4-acbbb41f9dc5",
        "player_name": "Yummy Elliott",
    },
    {
        "player_id": "05bd08d5-7d9f-450b-abfa-1788b8ee8b91",
        "player_name": "Stevenson Monstera",
    },
    {
        "player_id": "a1fba555-a48c-44f3-afb6-522ea256947c",
        "player_name": "Mindy Kugel",
    },
    {
        "player_id": "a38ada0a-aeac-4a3d-b9a5-968687ccd2f9",
        "player_name": "Sixpack Santiago",
    },
    {
        "player_id": "57448b62-f952-40e2-820c-48d8afe0f64d",
        "player_name": "Jessi Wise",
    },
    {
        "player_id": "425f3f84-bab0-4cf2-91c1-96e78cf5cd02",
        "player_name": "Luis Acevedo",
    },
    {
        "player_id": "df4da81a-917b-434f-b309-f00423ee4967",
        "player_name": "Eugenia Bickle",
    },
    {
        "player_id": "fa477c92-39b6-4a52-b065-40af2f29840a",
        "player_name": "Howell Franklin",
    },
    {
        "player_id": "c07ab5a8-ece3-4c4d-b2d2-98e3a7cf864f",
        "player_name": "Wichita Toaster",
    },
    {
        "player_id": "3d3be7b8-1cbf-450d-8503-fce0daf46cbf",
        "player_name": "Zack Sanders",
    },
    {
        "player_id": "0295c6c2-b33c-47dd-affa-349da7fa1760",
        "player_name": "Combs Estes",
    },
    {
        "player_id": "ab9eb213-0917-4374-a259-458295045021",
        "player_name": "Matheo Carpenter",
    },
    {
        "player_id": "c0c85be4-ff26-470f-8135-af771fd21e51",
        "player_name": "Anathema Elemefayo",
    },
    {
        "player_id": "114100a4-1bf7-4433-b304-6aad75904055",
        "player_name": "Kurt Crueller",
    },
    {
        "player_id": "4ed61b18-c1f6-4d71-aea3-caac01470b5c",
        "player_name": "Lenny Marijuana",
    },
    {
        "player_id": "c17a4397-4dcc-440e-8c53-d897e971cae9",
        "player_name": "August Mina",
    },
    {
        "player_id": "f9c0d3cb-d8be-4f53-94c9-fc53bcbce520",
        "player_name": "Matteo Prestige",
    },
    {
        "player_id": "1068f44b-34a0-42d8-a92e-2be748681a6f",
        "player_name": "Allison Abbott",
    },
    {
        "player_id": "0cb44026-ebf0-4870-b98e-e620b0814808",
        "player_name": "Michelle Sportsman",
    },
    {
        "player_id": "0f61d948-4f0c-4550-8410-ae1c7f9f5613",
        "player_name": "Tamara Crankit",
    },
    {
        "player_id": "d89da2d2-674c-4b85-8959-a4bd406f760a",
        "player_name": "Fish Summer",
    },
    {
        "player_id": "fcb08e4f-df3a-446c-ab50-58a496ac5f3f",
        "player_name": "Bennett Bluesky",
    },
    {
        "player_id": "bc29afc1-c954-4def-978b-a59ae5def3c3",
        "player_name": "Rigby Friedrich",
    },
    {
        "player_id": "070758a0-092a-4a2c-8a16-253c835887cb",
        "player_name": "Alx Keming",
    },
    {
        "player_id": "90768354-957e-4b4c-bb6d-eab6bbda0ba3",
        "player_name": "Eugenia Garbage",
    },
    {
        "player_id": "019ce117-2399-4382-8036-8c14db7e1d30",
        "player_name": "Lori Boston",
    },
    {
        "player_id": "12577256-bc4e-4955-81d6-b422d895fb12",
        "player_name": "Jasmine Washington",
    },
    {
        "player_id": "1dadee11-a11f-442a-9be3-cb0b10b86719",
        "player_name": "Peekaboo Nameperson",
    },
    {
        "player_id": "1ded0384-d290-4ea1-a72b-4f9d220cbe37",
        "player_name": "Juan Murphy",
    },
    {
        "player_id": "1e229fe5-a191-48ef-a7dd-6f6e13d6d73f",
        "player_name": "Erickson Fischer",
    },
    {
        "player_id": "1f145436-b25d-49b9-a1e3-2d3c91626211",
        "player_name": "Joe Voorhees",
    },
    {
        "player_id": "21555bfb-6aed-4510-863a-801be3b6d997",
        "player_name": "Anastasia Isarobot",
    },
    {
        "player_id": "21cbbfaa-100e-48c5-9cea-7118b0d08a34",
        "player_name": "Juice Collins",
    },
    {
        "player_id": "24ca976f-ddf2-4966-ba14-4fd2b9b20341",
        "player_name": "Elwin Blaskets",
    },
    {
        "player_id": "266abcc0-8abc-4570-b32e-e5668e5d38f3",
        "player_name": "Zoey Kirchner",
    },
    {
        "player_id": "2e13249e-38ff-46a2-a55e-d15fa692468a",
        "player_name": "Vito Kravitz",
    },
    {
        "player_id": "2f3d7bc7-6ffb-40c3-a94f-5e626be413c9",
        "player_name": "Elijah Valenzuela",
    },
    {
        "player_id": "3205f4ff-7050-470b-8970-8d7ea56564bc",
        "player_name": "Gia Wuppo",
    },
    {
        "player_id": "35acb6ea-9a7c-49b6-809c-59409f557651",
        "player_name": "Kurt Ultrabass",
    },
    {
        "player_id": "36a9863c-bf69-4ddd-bbe0-6d64b0d00e8c",
        "player_name": "Yasslyn Statter Jr.",
    },
    {
        "player_id": "378c07b0-5645-44b5-869f-497d144c7b35",
        "player_name": "Fynn Doyle",
    },
    {
        "player_id": "3c051b92-4a86-4157-988a-e334bf6dc691",
        "player_name": "Tyler Leatherman",
    },
    {
        "player_id": "3c19aa93-3f9d-4be0-ae5a-8ade100a9668",
        "player_name": "Jon Tumblehome",
    },
    {
        "player_id": "4562ac1f-026c-472c-b4e9-ee6ff800d701",
        "player_name": "Chris Koch",
    },
    {
        "player_id": "4ec6951f-6822-4861-bc25-79826dd8c554",
        "player_name": "Sheev Shriffle",
    },
    {
        "player_id": "520e6066-b14b-45cf-985c-0a6ee2dc3f7a",
        "player_name": "Zi Sliders",
    },
    {
        "player_id": "52cfebfb-8008-4b9f-a566-72a30e0b64bf",
        "player_name": "Spears Rogers",
    },
    {
        "player_id": "53e701c7-e3c8-4e18-ba05-9b41b4b64cda",
        "player_name": "Marquez Clark",
    },
    {
        "player_id": "54e5f222-fb16-47e0-adf9-21813218dafa",
        "player_name": "Grit Watson",
    },
    {
        "player_id": "5831a238-8efe-4d53-a483-1ad681e50ac3",
        "player_name": "Gita Sparrow",
    },
    {
        "player_id": "5a6b0c6d-1cc8-4acb-991c-0ffe62f3d990",
        "player_name": "Lotus Clutch",
    },
    {
        "player_id": "5c60f834-a133-4dc6-9c07-392fb37b3e6a",
        "player_name": "Ramirez Winters",
    },
    {
        "player_id": "5ddee49d-79f2-4eba-a3c9-174784322059",
        "player_name": "Bobbin Inningson",
    },
    {
        "player_id": "5f3b5dc2-351a-4dee-a9d6-fa5f44f2a365",
        "player_name": "Alston England",
    },
    {
        "player_id": "5f5b3b18-ebc5-4611-b8bf-61b8c6a3ba12",
        "player_name": "Nucleus Cresthill",
    },
    {
        "player_id": "5fbf04bb-f5ec-4589-ab19-1d89cda056bd",
        "player_name": "Donia Dollie",
    },
    {
        "player_id": "6305e2dd-2d5d-49ed-ab47-b1b56f0e7e85",
        "player_name": "Wanda Fiasco",
    },
    {
        "player_id": "64aaa3cb-7daf-47e3-89a8-e565a3715b5d",
        "player_name": "Travis Nakamura",
    },
    {
        "player_id": "6a567da6-7c96-44d3-85de-e5a08a919250",
        "player_name": "Cudi Di Batterino",
    },
    {
        "player_id": "6bac62ad-7117-4e41-80f9-5a155a434856",
        "player_name": "Grit Freeman",
    },
    {
        "player_id": "6f9de777-e812-4c84-915c-ef283c9f0cde",
        "player_name": "Arturo Huerta",
    },
    {
        "player_id": "6f9f50e6-81bf-4371-9a27-de3c85bd5a82",
        "player_name": "Manu Candle",
    },
    {
        "player_id": "6fa08e08-6a95-4fbc-9d00-5c39c5302b60",
        "player_name": "Barry Burkhard",
    },
    {
        "player_id": "7158d158-e7bf-4e9b-9259-62e5b25e3de8",
        "player_name": "Karato Bean",
    },
    {
        "player_id": "73a934de-3db1-4553-97f2-9e7b57744b34",
        "player_name": "Salih Ultrabass",
    },
    {
        "player_id": "7a75d626-d4fd-474f-a862-473138d8c376",
        "player_name": "Beck Whitney",
    },
    {
        "player_id": "7c5ae357-e079-4427-a90f-97d164c7262e",
        "player_name": "Milo Brown",
    },
    {
        "player_id": "7e4f012e-828c-43bb-8b8a-6c33bdfd7e3f",
        "player_name": "Patel Olive",
    },
    {
        "player_id": "82733eb4-103d-4be1-843e-6eb6df35ecd7",
        "player_name": "Adkins Tosser",
    },
    {
        "player_id": "86d4e22b-f107-4bcf-9625-32d387fcb521",
        "player_name": "York Silk",
    },
    {
        "player_id": "88ca603e-b2e5-4916-bef5-d6bba03235f5",
        "player_name": "Clare Mccall",
    },
    {
        "player_id": "8b0d717f-ae42-4492-b2ed-106912e2b530",
        "player_name": "Avila Baker",
    },
    {
        "player_id": "8b5ddd3d-cca6-4e01-ac7f-65dc56831933",
        "player_name": "Bees Gorczyca",
    },
    {
        "player_id": "8d81b190-d3b8-4cd9-bcec-0e59fdd7f2bc",
        "player_name": "Albert Stink",
    },
    {
        "player_id": "8f11ad58-e0b9-465c-9442-f46991274557",
        "player_name": "Amos Melon",
    },
    {
        "player_id": "94d772c7-0254-4f08-814c-f6fc58fcfb9b",
        "player_name": "Fletcher Peck",
    },
    {
        "player_id": "94f30f21-f889-4a2e-9b94-818475bb1ca0",
        "player_name": "Kirkland Sobremesa",
    },
    {
        "player_id": "973334aa-46d8-4415-912b-a5e267f7529b",
        "player_name": "Fenry Marlow",
    },
    {
        "player_id": "97387580-1f7c-49ea-a9e7-44be89329130",
        "player_name": "Irnee Fiesta",
    },
    {
        "player_id": "97dfc1f6-ac94-4cdc-b0d5-1cb9f8984aa5",
        "player_name": "Brock Forbes",
    },
    {
        "player_id": "99766c1b-c590-4261-b1b7-3e9c7fc35608",
        "player_name": "Jasper Blather",
    },
    {
        "player_id": "9e75ff7c-fe9b-428b-a1b6-f9e6a1748c86",
        "player_name": "Kofi Gildehaus",
    },
    {
        "player_id": "a1628d97-16ca-4a75-b8df-569bae02bef9",
        "player_name": "Chorby Soul",
    },
    {
        "player_id": "a68e82ac-7375-4176-b754-6175ea47dcb4",
        "player_name": "Guadalupe Incarnate",
    },
    {
        "player_id": "a7edbf19-caf6-45dd-83d5-46496c99aa88",
        "player_name": "Rush Valenzuela",
    },
    {
        "player_id": "aca90625-5bde-4489-bc9f-a7996a7b9a30",
        "player_name": "Noquiryn Ratoon",
    },
    {
        "player_id": "ad56f749-ee48-4a85-9827-8455aeafe276",
        "player_name": "Erin Jesaulenko",
    },
    {
        "player_id": "af6b3edc-ed52-4edc-b0c9-14e0a5ae0ee3",
        "player_name": "Rivers Clembons",
    },
    {
        "player_id": "b5c95dba-2624-41b0-aacd-ac3e1e1fe828",
        "player_name": "Cote Rodgers",
    },
    {
        "player_id": "b7267aba-6114-4d53-a519-bf6c99f4e3a9",
        "player_name": "Sosa Hayes",
    },
    {
        "player_id": "b77dffaa-e0f5-408f-b9f2-1894ed26e744",
        "player_name": "Tucker Lenny",
    },
    {
        "player_id": "b7cdb93b-6f9d-468a-ae00-54cbc324ee84",
        "player_name": "Ruslan Duran",
    },
    {
        "player_id": "bd8778e5-02e8-4d1f-9c31-7b63942cc570",
        "player_name": "Cell Barajas",
    },
    {
        "player_id": "bfd9ff52-9bf6-4aaf-a859-d308d8f29616",
        "player_name": "Declan Suzanne",
    },
    {
        "player_id": "c0732e36-3731-4f1a-abdc-daa9563b6506",
        "player_name": "Nagomi Mcdaniel",
    },
    {
        "player_id": "c4951cae-0b47-468b-a3ac-390cc8e9fd05",
        "player_name": "Timmy Vine",
    },
    {
        "player_id": "c4dec95e-78a1-4840-b209-b3b597181534",
        "player_name": "Charlatan Seabright",
    },
    {
        "player_id": "c8de53a4-d90f-4192-955b-cec1732d920e",
        "player_name": "Tyreek Cain",
    },
    {
        "player_id": "c9339f5e-1040-4642-a4a7-07cd36d281f8",
        "player_name": "Quantum Flahwah",
    },
    {
        "player_id": "c9a22fa4-1721-4eef-a1a6-620cdf7d377f",
        "player_name": "Roscoe Sundae",
    },
    {
        "player_id": "cc113432-5f9b-46f8-9745-09f999d51801",
        "player_name": "Reggie Canberra",
    },
    {
        "player_id": "cc933b79-9218-4693-8172-f23d4eaccdf7",
        "player_name": "Chet Takahashi",
    },
    {
        "player_id": "ce0a156b-ba7b-4313-8fea-75807b4bc77f",
        "player_name": "Conrad Twelve",
    },
    {
        "player_id": "ce58415f-4e62-47e2-a2c9-4d6a85961e1e",
        "player_name": "Schneider Blanco",
    },
    {
        "player_id": "d0dafd4e-fca2-4d9c-accc-d65678e7589f",
        "player_name": "Milner Rolsenthal",
    },
    {
        "player_id": "d86f836e-4edf-4dbd-9743-14f30461ee14",
        "player_name": "Lance Serotonin",
    },
    {
        "player_id": "d8742d68-8fce-4d52-9a49-f4e33bd2a6fc",
        "player_name": "Ortiz Morse",
    },
    {
        "player_id": "dac2fd55-5686-465f-a1b6-6fbed0b417c5",
        "player_name": "Russo Slugger",
    },
    {
        "player_id": "db53211c-f841-4f33-accf-0c3e167889a0",
        "player_name": "Travis Bendie",
    },
    {
        "player_id": "dd0b48fe-2d49-4344-83ed-9f0770b370a8",
        "player_name": "Tillman Wan",
    },
    {
        "player_id": "dd6044ef-c635-4aed-97bd-d18068432b8f",
        "player_name": "Yusef Puddles",
    },
    {
        "player_id": "e0839b6c-70fd-4228-ae3a-60c713d00d09",
        "player_name": "Tucker Thane",
    },
    {
        "player_id": "e16c3f28-eecd-4571-be1a-606bbac36b2b",
        "player_name": "Wyatt Glover",
    },
    {
        "player_id": "e3c06405-0564-47ce-bbbd-552bee4dd66f",
        "player_name": "Scrap Weeks",
    },
    {
        "player_id": "e4f1f358-ee1f-4466-863e-f329766279d0",
        "player_name": "Ronan Combs",
    },
    {
        "player_id": "e97e9b74-8011-4415-b22c-8282f2228683",
        "player_name": "Mikan Hammer",
    },
    {
        "player_id": "ecf19925-dc57-4b89-b114-923d5a714dbe",
        "player_name": "Margarito Bishop",
    },
    {
        "player_id": "ecffa9aa-45a6-4997-a0a1-89925d89f3b6",
        "player_name": "Jebediah Kranch",
    },
    {
        "player_id": "ee29020f-1964-4fce-80f4-35a5e7edfb95",
        "player_name": "Orpheus Yardstick",
    },
    {
        "player_id": "efa73de4-af17-4f88-99d6-d0d69ed1d200",
        "player_name": "Antonio Mccall",
    },
    {
        "player_id": "f071889c-f10f-4d2f-a1dd-c5dda34b3e2b",
        "player_name": "Zion Facepunch",
    },
    {
        "player_id": "f0bcf4bb-74b3-412e-a54c-04c12ad28ecb",
        "player_name": "Hahn Fox",
    },
    {
        "player_id": "f4a5d734-0ade-4410-abb6-c0cd5a7a1c26",
        "player_name": "Agan Harrison",
    },
    {
        "player_id": "f617c1ef-d676-4119-8359-a5c3ac3bef51",
        "player_name": "Buck Latenight",
    },
    {
        "player_id": "f6b38e56-0d98-4e00-a96e-345aaac1e653",
        "player_name": "Leticia Snyder",
    },
    {
        "player_id": "f7de0227-6739-48e2-bbd6-9dc7b247ab9a",
        "player_name": "Spiff Piazza",
    },
    {
        "player_id": "f968532a-bf06-478e-89e0-3856b7f4b124",
        "player_name": "Daniel Benedicte",
    },
    {
        "player_id": "80de2b05-e0d4-4d33-9297-9951b2b5c950",
        "player_name": "Alyssa Harrell",
    },
    {
        "player_id": "1af239ae-7e12-42be-9120-feff90453c85",
        "player_name": "Melton Telephone",
    },
    {
        "player_id": "4b01cc3f-c59f-486d-9c00-b8a82624e620",
        "player_name": "Siobhan Chark",
    },
    {
        "player_id": "262c49c6-8301-487d-8356-747023fa46a9",
        "player_name": "Alexandria Dracaena",
    },
    {
        "player_id": "2ae8cbfc-2155-4647-9996-3f2591091baf",
        "player_name": "Forrest Bookbaby",
    },
    {
        "player_id": "3d293d6c-3a20-43ab-a895-2b7f1f28779f",
        "player_name": "Slosh Truk",
    },
    {
        "player_id": "5361e381-6658-488b-8236-dde6a264554f",
        "player_name": "Yurts Buttercup",
    },
    {
        "player_id": "a5adc84c-80b8-49e4-9962-8b4ade99a922",
        "player_name": "Richardson Turquoise",
    },
    {
        "player_id": "11f25eae-465f-43cc-9366-f19addc803bc",
        "player_name": "Ruffian Applesauce",
    },
    {
        "player_id": "33fbfe23-37bd-4e37-a481-a87eadb8192d",
        "player_name": "Whit Steakknife",
    },
    {
        "player_id": "25f3a67c-4ed5-45b6-94b1-ce468d3ead21",
        "player_name": "Hobbs Cain",
    },
    {
        "player_id": "b3d518b9-dc68-4902-b68c-0022ceb25aa0",
        "player_name": "Hendricks Rangel",
    },
    {
        "player_id": "d6c69d2d-9344-4b19-85a4-6cfcbaead5d2",
        "player_name": "Joshua Watson",
    },
    {
        "player_id": "5b9727f7-6a20-47d2-93d9-779f0a85c4ee",
        "player_name": "Kennedy Alstott",
    },
    {
        "player_id": "14d88771-7a96-48aa-ba59-07bae1733e96",
        "player_name": "Sebastian Telephone",
    },
    {
        "player_id": "2175cda0-a427-40fd-b497-347edcc1cd61",
        "player_name": "Hotbox Sato",
    },
    {
        "player_id": "34267632-8c32-4a8b-b5e6-ce1568bb0639",
        "player_name": "Gunther O'Brian",
    },
    {
        "player_id": "90c6e6ca-77fc-42b7-94d8-d8afd6d299e5",
        "player_name": "Miki Santana",
    },
    {
        "player_id": "fa40d6ea-e24b-4422-9df1-0643ab202c5f",
        "player_name": "Coolname Galvanic",
    },
    {
        "player_id": "855775c1-266f-40f6-b07b-3a67ccdf8551",
        "player_name": "Nic Winkler",
    },
    {
        "player_id": "333067fd-c2b4-4045-a9a4-e87a8d0332d0",
        "player_name": "Miguel James",
    },
    {
        "player_id": "f73009c5-2ede-4dc4-b96d-84ba93c8a429",
        "player_name": "Thomas Kirby",
    },
    {
        "player_id": "338694b7-6256-4724-86b6-3884299a5d9e",
        "player_name": "PolkaDot Patterson",
    },
    {
        "player_id": "b4505c48-fc75-4f9e-8419-42b28dcc5273",
        "player_name": "Sebastian Townsend",
    },
    {
        "player_id": "8cd06abf-be10-4a35-a3ab-1a408a329147",
        "player_name": "Gloria Bugsnax",
    },
    {
        "player_id": "c83a13f6-ee66-4b1c-9747-faa67395a6f1",
        "player_name": "Zi Delacruz",
    },
    {
        "player_id": "d0d7b8fe-bad8-481f-978e-cb659304ed49",
        "player_name": "Adalberto Tosser",
    },
    {
        "player_id": "ecb8d2f5-4ff5-4890-9693-5654e00055f6",
        "player_name": "Yeong-Ho Benitez",
    },
    {
        "player_id": "413b3ddb-d933-4567-a60e-6d157480239d",
        "player_name": "Winnie Mccall",
    },
    {
        "player_id": "57290370-6723-4d33-929e-b4fc190e6a9a",
        "player_name": "Mooney Doctor II",
    },
    {
        "player_id": "5eac7fd9-0d19-4bf4-a013-994acc0c40c0",
        "player_name": "Sutton Bishop",
    },
    {
        "player_id": "a647388d-fc59-4c1b-90d3-8c1826e07775",
        "player_name": "Chambers Simmons",
    },
    {
        "player_id": "60026a9d-fc9a-4f5a-94fd-2225398fa3da",
        "player_name": "Bright Zimmerman",
    },
    {
        "player_id": "0ecf6190-f869-421a-b339-29195d30d37c",
        "player_name": "McBaseball Clembons",
    },
    {
        "player_id": "7dcf6902-632f-48c5-936a-7cf88802b93a",
        "player_name": "Parker Parra",
    },
    {
        "player_id": "9c813008-b2a9-4257-80e7-a709c67189fe",
        "player_name": "Bottles Suljak",
    },
    {
        "player_id": "8e1fd784-99d5-41c1-a6c5-6b947cec6714",
        "player_name": "Velasquez Meadows",
    },
    {
        "player_id": "d51f1fe8-4ab8-411e-b836-5bba92984d32",
        "player_name": "Hiroto Cerna",
    },
    {
        "player_id": "2b1cb8a2-9eba-4fce-85cf-5d997ec45714",
        "player_name": "Isaac Rubberman",
    },
    {
        "player_id": "15d3a844-df6b-4193-a8f5-9ab129312d8d",
        "player_name": "Sebastian Woodman",
    },
    {
        "player_id": "69196296-f652-42ff-b2ca-0d9b50bd9b7b",
        "player_name": "Joshua Butt",
    },
    {
        "player_id": "fad06b19-42a0-47e5-82d7-6e66d4adc9a1",
        "player_name": "Tad Seeth",
    },
    {
        "player_id": "ef32eb48-4866-49d0-ae58-9c4982e01142",
        "player_name": "Fitzgerald Massey",
    },
    {
        "player_id": "64b055d1-b691-4e0c-8583-fc08ba663846",
        "player_name": "Theodore Passon",
    },
    {
        "player_id": "6ebac746-6685-4d0f-8e84-6b21299b5169",
        "player_name": "Hercules Alighieri",
    },
    {
        "player_id": "7007cbd3-7c7b-44fd-9d6b-393e82b1c06e",
        "player_name": "Rafael Davids",
    },
    {
        "player_id": "22d4c06d-26c2-4031-ae7f-fd0eeb92f57d",
        "player_name": "Norris Firestar",
    },
    {
        "player_id": "75f9d874-5e69-438d-900d-a3fcb1d429b3",
        "player_name": "Moses Mason",
    },
    {
        "player_id": "4a95d9d8-3dcc-488d-b1cb-19690271ae4c",
        "player_name": "Frankie Hambone",
    },
    {
        "player_id": "750a7ba9-e595-40be-93e5-4021f1f9460d",
        "player_name": "Lenny Crumb",
    },
    {
        "player_id": "948ce8a8-19cd-4f81-b84f-88cce02c47bc",
        "player_name": "Flattery McKinley",
    },
    {
        "player_id": "2e6d4fa9-f930-47bd-971a-dd54a3cf7db1",
        "player_name": "Ra\u00fal Leal",
    },
    {
        "player_id": "4f7d7490-7281-4f8f-b62e-37e99a7c46a0",
        "player_name": "Annie Roland",
    },
    {
        "player_id": "e2f39815-5291-4dcf-ba19-97dcf0c015e9",
        "player_name": "Stijn Strongbody",
    },
    {
        "player_id": "cc11963b-a05b-477b-b154-911dc31960df",
        "player_name": "Pudge Nakamoto",
    },
    {
        "player_id": "4bda6584-6c21-4185-8895-47d07e8ad0c0",
        "player_name": "Aldon Anthony",
    },
    {
        "player_id": "80a2f015-9d40-426b-a4f6-b9911ba3add8",
        "player_name": "Paul Barnes",
    },
    {
        "player_id": "2ca0c790-e1d5-4a14-ab3c-e9241c87fc23",
        "player_name": "Murray Pony",
    },
    {
        "player_id": "c86b5add-6c9a-40e0-aa43-e4fd7dd4f2c7",
        "player_name": "Sosa Elftower",
    },
    {
        "player_id": "70a458ed-25ca-4ff8-97fc-21cbf58f2c2a",
        "player_name": "Trevino Merritt",
    },
    {
        "player_id": "cd68d3a6-7fbc-445d-90f1-970c955e32f4",
        "player_name": "Miguel Wheeler",
    },
    {
        "player_id": "2b9f9c25-43ec-4f0b-9937-a5aa23be0d9e",
        "player_name": "Lawrence Horne",
    },
    {
        "player_id": "773712f6-d76d-4caa-8a9b-56fe1d1a5a68",
        "player_name": "Natha Kath",
    },
    {
        "player_id": "be35caba-b16a-4e0d-b927-4da857f4cdb5",
        "player_name": "Frasier Shmurmgle",
    },
    {
        "player_id": "ff5a37d9-a6dd-49aa-b6fb-b935fd670820",
        "player_name": "Dunn Keyes",
    },
    {
        "player_id": "03097200-0d48-4236-a3d2-8bdb153aa8f7",
        "player_name": "Bennett Browning",
    },
    {
        "player_id": "8acc97fa-4bf1-49f6-bb93-fb52513a015b",
        "player_name": "Zesty Yaboi",
    },
    {
        "player_id": "535f4e67-a54b-427a-9ca1-1296d7387876",
        "player_name": "Hands Scoresburg",
    },
    {
        "player_id": "a311c089-0df4-46bd-9f5d-8c45c7eb5ae2",
        "player_name": "Mclaughlin Scorpler",
    },
    {
        "player_id": "41949d4d-b151-4f46-8bf7-73119a48fac8",
        "player_name": "Ron Monstera",
    },
    {
        "player_id": "8ba7e1ff-4c6d-4963-8e0f-7096d14f4b12",
        "player_name": "Jenna Maldonado",
    },
    {
        "player_id": "f967d064-0eaf-4445-b225-daed700e044b",
        "player_name": "Wesley Dudley",
    },
    {
        "player_id": "b7ca8f3f-2fdc-477b-84f4-157f2802e9b5",
        "player_name": "Leach Herman",
    },
    {
        "player_id": "10ea5d50-ec88-40a0-ab53-c6e11cc1e479",
        "player_name": "Nicholas Vincent",
    },
    {
        "player_id": "c83f0fe0-44d1-4342-81e8-944bb38f8e23",
        "player_name": "Langley Wheeler",
    },
    {
        "player_id": "f44a8b27-85c1-44de-b129-1b0f60bcb99c",
        "player_name": "Atlas Jonbois",
    },
    {
        "player_id": "01772798-8d45-47cb-bbb5-515832c5b590",
        "player_name": "Hops Chen",
    },
    {
        "player_id": "04651d05-44ef-40c1-abd3-4d0c14b6845d",
        "player_name": "Emilia Street",
    },
    {
        "player_id": "061b209a-9cda-44e8-88ce-6a4a37251970",
        "player_name": "Mcdowell Karim",
    },
    {
        "player_id": "0cc5bd39-e90d-42f9-9dd8-7e703f316436",
        "player_name": "Don Elliott",
    },
    {
        "player_id": "103d788d-2c74-4edc-9299-2a1384a2776a",
        "player_name": "Kit Ratoon",
    },
    {
        "player_id": "113f47b2-3111-4abb-b25e-18f7889e2d44",
        "player_name": "Adkins Swagger",
    },
    {
        "player_id": "138fccc3-e66f-4b07-8327-d4b6f372f654",
        "player_name": "Oscar Vaughan",
    },
    {
        "player_id": "1abe7a14-2608-485c-af10-69cf0107c2a5",
        "player_name": "Norman Muggins",
    },
    {
        "player_id": "24f6829e-7bb4-4e1e-8b59-a07514657e72",
        "player_name": "King Weatherman",
    },
    {
        "player_id": "25581c43-f8da-4657-9e96-e704df0a8878",
        "player_name": "Freemium Fairwood",
    },
    {
        "player_id": "26503f2c-631a-45ba-905e-aa14471c8b8e",
        "player_name": "Nyx Snapjaw",
    },
    {
        "player_id": "2918be01-e1aa-4de6-8239-fe62f37769de",
        "player_name": "Avi Jones",
    },
    {
        "player_id": "2cadc28c-88a5-4e25-a6eb-cdab60dd446d",
        "player_name": "Elijah Bookbaby",
    },
    {
        "player_id": "2d95d41c-ff54-4fa1-89a0-76b84dd8fe2b",
        "player_name": "Emblem Warhorse",
    },
    {
        "player_id": "32551e28-3a40-47ae-aed1-ff5bc66be879",
        "player_name": "Math Velazquez",
    },
    {
        "player_id": "35a99ff3-cf9e-4682-ba6e-0a6044aa3a4b",
        "player_name": "Scruffs Risset",
    },
    {
        "player_id": "37061380-ac95-4018-854e-c308073945e9",
        "player_name": "Bartleby Zhivago",
    },
    {
        "player_id": "3822990b-5ee0-404a-9e06-846bb29f3faf",
        "player_name": "Cantus Hojo",
    },
    {
        "player_id": "3a96d76a-c508-45a0-94a0-8f64cd6beeb4",
        "player_name": "Sixpack Dogwalker",
    },
    {
        "player_id": "3e008f60-6842-42e7-b125-b88c7e5c1a95",
        "player_name": "Zeboriah Wilson",
    },
    {
        "player_id": "48d07a64-9ea2-4b9e-8046-6901ad398490",
        "player_name": "Dulce Schofield",
    },
    {
        "player_id": "4b73367f-b2bb-4df6-b2eb-2a0dd373eead",
        "player_name": "Tristin Crankit",
    },
    {
        "player_id": "51985516-5033-4ab8-a185-7bda07829bdb",
        "player_name": "Stephanie Schmitt",
    },
    {
        "player_id": "54bc7b23-49a9-4f1d-b60f-9c3cf9754b67",
        "player_name": "Clove Mahle",
    },
    {
        "player_id": "63580bd7-6138-471c-82a5-bc9d29ffd06d",
        "player_name": "Moira Ball",
    },
    {
        "player_id": "64f4cd75-0c1e-42cf-9ff0-e41c4756f22a",
        "player_name": "Grey Alvarado",
    },
    {
        "player_id": "6598e40a-d76d-413f-ad06-ac4872875bde",
        "player_name": "Daniel Mendoza",
    },
    {
        "player_id": "68462bfa-9006-4637-8830-2e7840d9089a",
        "player_name": "Parker Horseman",
    },
    {
        "player_id": "6caa8180-e178-4f8b-865c-f1af47119bc2",
        "player_name": "Tad Blortles",
    },
    {
        "player_id": "6d9001ff-ba9f-40c0-9315-79feba541b65",
        "player_name": "Nepeta Chen",
    },
    {
        "player_id": "710541f4-bb89-4134-8973-958c82b29a41",
        "player_name": "Kiki Junior Jr",
    },
    {
        "player_id": "72fb797a-aea8-4723-b7e4-d110c301320e",
        "player_name": "Persephone Splotter",
    },
    {
        "player_id": "7b779947-46ef-4b77-be37-962d60875647",
        "player_name": "Nolastname Sokol",
    },
    {
        "player_id": "81b25b16-3370-4eb0-9d1b-6d630194c680",
        "player_name": "Zeboriah Whiskey",
    },
    {
        "player_id": "90c8be89-896d-404c-945e-c135d063a74e",
        "player_name": "James Boy",
    },
    {
        "player_id": "9416dfa3-05e9-46f3-b1df-4fa6703e9b5b",
        "player_name": "Drosophila Fashion",
    },
    {
        "player_id": "94844fad-9519-4c14-8ab3-d38606a7bb44",
        "player_name": "Conditional Yuniesky",
    },
    {
        "player_id": "98f26a25-905f-4850-8960-b741b0c583a4",
        "player_name": "Stu Mcdaniel",
    },
    {
        "player_id": "9fbab4df-35dd-4991-9e82-9635ab756b0f",
        "player_name": "Rocio Caster",
    },
    {
        "player_id": "a1b55c5f-6d01-4ca1-976a-5cdfe18d199c",
        "player_name": "Billup Kiddo",
    },
    {
        "player_id": "a5a02a4b-72a2-4eef-802c-14a1964e0dae",
        "player_name": "Susananana Portmanteau",
    },
    {
        "player_id": "a8e757c6-e299-4a2e-a370-4f7c3da98bd1",
        "player_name": "Hendricks Lenny",
    },
    {
        "player_id": "a938f586-f5c1-4a35-9e7f-8eaab6de67a6",
        "player_name": "Jasper Destiny",
    },
    {
        "player_id": "a98917bc-e9df-4b0e-bbde-caa6168aa3d7",
        "player_name": "Jenkins Ingram",
    },
    {
        "player_id": "aa6c2662-75f8-4506-aa06-9a0993313216",
        "player_name": "Eizabeth Elliott",
    },
    {
        "player_id": "aa7ac9cb-e9db-4313-9941-9f3431728dce",
        "player_name": "Matteo Cash",
    },
    {
        "player_id": "b93f4c32-64e4-4461-b708-05f6f7f6bbc2",
        "player_name": "Atma Willowtree",
    },
    {
        "player_id": "c771abab-f468-46e9-bac5-43db4c5b410f",
        "player_name": "Wade Howe",
    },
    {
        "player_id": "ccd6068b-2735-4072-bfe5-571a5d57c285",
        "player_name": "Ephraim Ladd",
    },
    {
        "player_id": "cd417f8a-ce01-4ab2-921d-42e2e445bbe2",
        "player_name": "Eizabeth Guerra",
    },
    {
        "player_id": "d9a072f5-1cbb-45ce-87fb-b138e4d8f769",
        "player_name": "Francisco Object",
    },
    {
        "player_id": "de67b585-9bf4-4e49-b410-101483ca2fbc",
        "player_name": "Shaquille Sunshine",
    },
    {
        "player_id": "dfd5ccbb-90ed-4bfe-83e0-dae9cc763f10",
        "player_name": "Owen Picklestein",
    },
    {
        "player_id": "e3e1d190-2b94-40c0-8e88-baa3fd198d0f",
        "player_name": "Chambers Kennedy",
    },
    {
        "player_id": "e8652db0-c67a-4c8a-9acc-2951cf400cd0",
        "player_name": "Darren Chill",
    },
    {
        "player_id": "e972984c-2895-451c-b518-f06a0d8bd375",
        "player_name": "Becker Solis",
    },
    {
        "player_id": "1ba715f2-caa3-44c0-9118-b045ea702a34",
        "player_name": "Juan Rangel",
    },
    {
        "player_id": "bd8d58b6-f37f-48e6-9919-8e14ec91f92a",
        "player_name": "Jos\u00e9 Haley",
    },
    {
        "player_id": "bd549bfe-b395-4dc0-8546-5c04c08e24a5",
        "player_name": "Sam Solis",
    },
    {
        "player_id": "0fe896e1-108c-4ce9-97be-3470dde73c21",
        "player_name": "Bryanayah Chang",
    },
    {
        "player_id": "3d4545ed-6217-4d7a-9c4a-209265eb6404",
        "player_name": "Tiana Cash",
    },
    {
        "player_id": "70ccff1e-6b53-40e2-8844-0a28621cb33e",
        "player_name": "Moody Cookbook",
    },
    {
        "player_id": "4e6ad1a1-7c71-49de-8bd5-c286712faf9e",
        "player_name": "Sutton Picklestein",
    },
    {
        "player_id": "a9812a8e-67c4-434c-85cb-6ddf785cadf2",
        "player_name": "Augusta Chadwell",
    },
    {
        "player_id": "d744f534-2352-472b-9e42-cd91fa540f1b",
        "player_name": "Tyler Violet",
    },
    {
        "player_id": "43bf6a6d-cc03-4bcf-938d-620e185433e1",
        "player_name": "Miguel Javier",
    },
    {
        "player_id": "a071a713-a6a1-4b4c-bb3f-45d9fba7a08c",
        "player_name": "Nora Perez",
    },
    {
        "player_id": "d1a7c13f-8e78-4d2e-9cae-ebf3a5fcdb5d",
        "player_name": "Elijah Bates",
    },
    {
        "player_id": "3afb30c1-1b12-466a-968a-5a9a21458c7f",
        "player_name": "Dickerson Greatness",
    },
    {
        "player_id": "3064c7d6-91cc-4c2a-a433-1ce1aabc1ad4",
        "player_name": "Jorge Ito",
    },
    {
        "player_id": "bd9d1d6e-7822-4ad9-bac4-89b8afd8a630",
        "player_name": "Derrick Krueger",
    },
    {
        "player_id": "0c83e3b6-360e-4b7d-85e3-d906633c9ca0",
        "player_name": "Penelope Mathews",
    },
    {
        "player_id": "b86237bb-ade6-4b1d-9199-a3cc354118d9",
        "player_name": "Hurley Pacheco",
    },
    {
        "player_id": "248ccf3d-d5f6-4b69-83d9-40230ca909cd",
        "player_name": "Antonio Wallace",
    },
    {
        "player_id": "472f50c0-ef98-4d05-91d0-d6359eec3946",
        "player_name": "Rhys Trombone",
    },
    {
        "player_id": "0268b35f-b19b-4b2f-90c4-89fb36403686",
        "player_name": "Gita Biscuits",
    },
    {
        "player_id": "04f955fe-9cc9-4482-a4d2-07fe033b59ee",
        "player_name": "Zane Vapor",
    },
    {
        "player_id": "06ced607-7f96-41e7-a8cd-b501d11d1a7e",
        "player_name": "Morrow Wilson",
    },
    {
        "player_id": "093af82c-84aa-4bd6-ad1a-401fae1fce44",
        "player_name": "Elijah Glover",
    },
    {
        "player_id": "096bb9b5-5ea8-4da1-a113-57a5fc9e9b67",
        "player_name": "Jasper Ji-Eun",
    },
    {
        "player_id": "128a33b9-c82f-408e-9fa3-5161f5a3e297",
        "player_name": "Aymer Eggleton",
    },
    {
        "player_id": "13676ab5-afb3-4650-af23-bcde1037d25b",
        "player_name": "Dashiell Drumsolo",
    },
    {
        "player_id": "1db2f602-64b1-4a5c-8697-1932cc2c6df1",
        "player_name": "Mummy Melcon",
    },
    {
        "player_id": "1f159bab-923a-4811-b6fa-02bfde50925a",
        "player_name": "NaN",
    },
    {
        "player_id": "2727215d-3714-438d-b1ba-2ed15ec481c0",
        "player_name": "Dominic Woman",
    },
    {
        "player_id": "2a8b371f-d2eb-4be7-b89f-aff10edb4412",
        "player_name": "Fenry Wobin",
    },
    {
        "player_id": "2b9d6b50-3ce2-4cb1-8cd1-2a0fc05733e3",
        "player_name": "Atma Blueberry",
    },
    {
        "player_id": "305921e8-3f4d-4c91-a280-d7bf1a449b08",
        "player_name": "Torus McGhee",
    },
    {
        "player_id": "30fa4bf1-8f3b-45dc-9aa3-6511e998040a",
        "player_name": "Kaj Murphy",
    },
    {
        "player_id": "32c9bce6-6e52-40fa-9f64-3629b3d026a8",
        "player_name": "Ren Morin",
    },
    {
        "player_id": "331d9910-0991-40c8-9345-a7cddb7465c6",
        "player_name": "Bistro Succotash",
    },
    {
        "player_id": "34e1b683-ecd5-477f-b9e3-dd4bca76db45",
        "player_name": "Alexandria Hess",
    },
    {
        "player_id": "37efef78-2df4-4c76-800c-43d4faf07737",
        "player_name": "Lenix Ren",
    },
    {
        "player_id": "3e0f7f48-675b-4f72-bb40-8a8c676f0054",
        "player_name": "Gallup Murphy",
    },
    {
        "player_id": "56eba639-ea73-474d-bcee-ec68c0528b02",
        "player_name": "Ankle Halifax",
    },
    {
        "player_id": "58fca5fa-e559-4f5e-ac87-dc99dd19e410",
        "player_name": "Sullivan Septemberish",
    },
    {
        "player_id": "5fc4713c-45e1-4593-a968-7defeb00a0d4",
        "player_name": "Percival Bendie",
    },
    {
        "player_id": "61bbbf34-98c1-4bf6-bd0c-56c19199b35e",
        "player_name": "Squid Galvanic",
    },
    {
        "player_id": "695daf02-113d-4e76-b802-0862df16afbd",
        "player_name": "Pacheco Weeks",
    },
    {
        "player_id": "6e744b21-c4fa-4fa8-b4ea-e0e97f68ded5",
        "player_name": "Daniel Koch",
    },
    {
        "player_id": "6f71667b-59f2-46df-adac-a8885a4f6ac5",
        "player_name": "Eris Street",
    },
    {
        "player_id": "732899a3-2082-4d9f-b1c2-74c8b75e15fb",
        "player_name": "Minato Ito",
    },
    {
        "player_id": "7541fc4b-7e6b-446a-b6a3-755de46a0018",
        "player_name": "Quinns Jespersen",
    },
    {
        "player_id": "77a41c29-8abd-4456-b6e0-a034252700d2",
        "player_name": "Elip Dean",
    },
    {
        "player_id": "7d388846-8f4c-407f-aacb-b844d2561c5e",
        "player_name": "Kit Adamses",
    },
    {
        "player_id": "7e160e9f-2c79-4e08-8b76-b816de388a98",
        "player_name": "Thomas Marsh",
    },
    {
        "player_id": "7e910e86-84b4-43c3-a68e-67b6612ddbee",
        "player_name": "Ovid Schofield",
    },
    {
        "player_id": "84a17f48-0393-4166-864a-f7cd27557701",
        "player_name": "Arches Candle",
    },
    {
        "player_id": "852107b8-8cf3-4fbb-97f9-76f73bc47708",
        "player_name": "Lucy VanderMale",
    },
    {
        "player_id": "8997123f-b24d-4326-80c8-3c862f80f623",
        "player_name": "Johndan McGhee",
    },
    {
        "player_id": "98220753-0a70-4a4e-8058-0a7bcb6f7d5d",
        "player_name": "Lenjamin Lin",
    },
    {
        "player_id": "9abe02fb-2b5a-432f-b0af-176be6bd62cf",
        "player_name": "Nagomi Meng",
    },
    {
        "player_id": "9fc3c6ae-5ed5-49ce-a75b-257ec1022a15",
        "player_name": "Rhombus Drama",
    },
    {
        "player_id": "a5e4e86f-d3a8-424a-9768-2ada17a4e741",
        "player_name": "Willow Eggburt",
    },
    {
        "player_id": "a73427b3-e96a-4156-a9ab-844edc696fed",
        "player_name": "Wesley Vodka",
    },
    {
        "player_id": "abbd5ec5-a15b-421c-b0c5-cd80d8907373",
        "player_name": "Rat Batson",
    },
    {
        "player_id": "ca26d8cc-8668-48c9-a061-28f6fdf5f44d",
        "player_name": "Doc Anice",
    },
    {
        "player_id": "ce3fb736-d20e-4e2a-88cb-e136783d3a47",
        "player_name": "Javier Howe",
    },
    {
        "player_id": "d23a1f7e-0071-444e-8361-6ae01f13036f",
        "player_name": "Edric Tosser",
    },
    {
        "player_id": "d2f827a5-0133-4d96-b403-85a5e50d49e0",
        "player_name": "Robbins Schmitt",
    },
    {
        "player_id": "db3ff6f0-1045-4223-b3a8-a016ca987af9",
        "player_name": "Murphy Thibault",
    },
    {
        "player_id": "dd6ba7f1-a97a-4374-a3a7-b3596e286bb3",
        "player_name": "Matheo Tanaka",
    },
    {
        "player_id": "df34d168-4d6a-403c-aca5-2b1ebe90444d",
        "player_name": "Doc Cash",
    },
    {
        "player_id": "df94a335-1677-4200-a23f-d794689a5732",
        "player_name": "Pangolin Ruiz",
    },
    {
        "player_id": "e0d64270-6f5a-4c10-9b22-f91f9d4f241c",
        "player_name": "Kevelyn Clambucket",
    },
    {
        "player_id": "e1e33aab-df8c-4f53-b30a-ca1cea9f046e",
        "player_name": "Joyner Rugrat",
    },
    {
        "player_id": "e7ecf646-e5e4-49ef-a0e3-10a78e87f5f4",
        "player_name": "Gallup Crueller",
    },
    {
        "player_id": "eac00ec9-3376-423c-8684-93dd2cbd6ed4",
        "player_name": "Eddie Nakamoto",
    },
    {
        "player_id": "efda41c1-eb07-45b3-8ad5-424c63115115",
        "player_name": "Rufus Kiddo",
    },
    {
        "player_id": "f56657d3-3bdc-4840-a20c-91aca9cc360e",
        "player_name": "Malik Romayne",
    },
    {
        "player_id": "00ca40af-a8df-4519-af9a-beaf93ffc122",
        "player_name": "Eli Winner",
    },
    {
        "player_id": "01bcbeeb-0f63-43b4-8cfa-ec02b42a1a5e",
        "player_name": "Entropy Handcramp",
    },
    {
        "player_id": "01d3ef84-8ec2-4116-9a7b-5f954de2ec97",
        "player_name": "Happy Yoinky",
    },
    {
        "player_id": "0288bbb1-a994-45c3-bb8f-331fe296090d",
        "player_name": "Steals Chark",
    },
    {
        "player_id": "03d06163-6f06-4817-abe5-0d14c3154236",
        "player_name": "Garcia Tabby",
    },
    {
        "player_id": "05415c0d-db3b-455d-9d06-684a39506cf5",
        "player_name": "Phoebe Blasesona",
    },
    {
        "player_id": "0672a4be-7e00-402c-b8d6-0b813f58ba96",
        "player_name": "Castillo Logan",
    },
    {
        "player_id": "07ac91e9-0269-4e2c-a62d-a87ef61e3bbe",
        "player_name": "Eduardo Perez",
    },
    {
        "player_id": "088884af-f38d-4914-9d67-b319287481b4",
        "player_name": "Liam Petty",
    },
    {
        "player_id": "0892da6e-c9d1-494f-84bc-0c1f879018c0",
        "player_name": "Bob E. Cagayan",
    },
    {
        "player_id": "094ad9a1-e2c7-49a0-af18-da0e3eb656ba",
        "player_name": "Erickson Sato",
    },
    {
        "player_id": "0a6b75ea-fe69-4406-be24-a149c94daa3b",
        "player_name": "Seren Moss",
    },
    {
        "player_id": "0bd5a3ec-e14c-45bf-8283-7bc191ae53e4",
        "player_name": "Stephanie Donaldson",
    },
    {
        "player_id": "0d5300f6-0966-430f-903f-a4c2338abf00",
        "player_name": "Wyatt Dovenpart",
    },
    {
        "player_id": "0daf04fc-8d0d-4513-8e98-4f610616453b",
        "player_name": "Lee Mist",
    },
    {
        "player_id": "0e27df51-ad0c-4546-acf5-96b3cb4d7501",
        "player_name": "Chorby Spoon",
    },
    {
        "player_id": "0f62c20c-72d0-4c12-a9d7-312ea3d3bcd1",
        "player_name": "Abner Wood",
    },
    {
        "player_id": "126fb128-7c53-45b5-ac2b-5dbf9943d71b",
        "player_name": "Sigmund Castillo",
    },
    {
        "player_id": "12f3a18d-cc63-480d-b2ad-f0d89c1c4562",
        "player_name": "The Murph",
    },
    {
        "player_id": "13032f07-10bf-48eb-a23e-f4117d246868",
        "player_name": "Snack Deviation",
    },
    {
        "player_id": "1329f839-f78b-4acc-85aa-69c6958fa43b",
        "player_name": "Wyatt Mason IX",
    },
    {
        "player_id": "13cfbadf-b048-4c4f-903d-f9b52616b15c",
        "player_name": "Bennett Bowen",
    },
    {
        "player_id": "146c6376-9353-4669-a0ed-6e615219d290",
        "player_name": "Wyatt Mason",
    },
    {
        "player_id": "14bfad43-2638-41ec-8964-8351f22e9c4f",
        "player_name": "Baby Sliders",
    },
    {
        "player_id": "14ff5a36-c39f-4910-affb-2a9ea28e09b0",
        "player_name": "Hex Portential",
    },
    {
        "player_id": "15840c01-d8ea-4823-a802-9b635c51efa2",
        "player_name": "Spits Strongbody",
    },
    {
        "player_id": "15857407-2d6b-43f1-86c8-b574c87208f3",
        "player_name": "Wyatt Mason VI",
    },
    {
        "player_id": "16a59f5f-ef0f-4ada-8682-891ad571a0b6",
        "player_name": "Boyfriend Berger",
    },
    {
        "player_id": "17392be2-7344-48a0-b4db-8a040a7fb532",
        "player_name": "Washer Barajas",
    },
    {
        "player_id": "1750de38-8f5f-426a-9e23-2899a15a2031",
        "player_name": "Kline Nightmare",
    },
    {
        "player_id": "18798b8f-6391-4cb2-8a5f-6fb540d646d5",
        "player_name": "Morrow Doyle",
    },
    {
        "player_id": "19af0d67-c73b-4ef2-bc84-e923c1336db5",
        "player_name": "Grit Ramos",
    },
    {
        "player_id": "1a53768b-1ec1-4646-8417-dd58b9849bd7",
        "player_name": "Ball Clark",
    },
    {
        "player_id": "1aec2c01-b766-4018-a271-419e5371bc8f",
        "player_name": "Rush Ito",
    },
    {
        "player_id": "1c55aedf-6e31-4f3c-9b17-8a84b7d15a0c",
        "player_name": "Nanci Grackle",
    },
    {
        "player_id": "1cded4e7-8302-49b7-a646-40a0767b6969",
        "player_name": "Hercules Lincecum",
    },
    {
        "player_id": "1d7af93e-7910-45c3-9799-4166a27a6d0b",
        "player_name": "Fishcake Can",
    },
    {
        "player_id": "1e7b02b7-6981-427a-b249-8e9bd35f3882",
        "player_name": "Nora Reddick",
    },
    {
        "player_id": "1e8b09bd-fbdd-444e-bd7e-10326bd57156",
        "player_name": "Fletcher Yamamoto",
    },
    {
        "player_id": "1f930140-9fc6-4240-9ef6-e7ac065eaefb",
        "player_name": "Neerie McCloud",
    },
    {
        "player_id": "20395b48-279d-44ff-b5bf-7cf2624a2d30",
        "player_name": "Adrian Melon",
    },
    {
        "player_id": "206bd649-4f5f-4707-ad85-92784be4eb95",
        "player_name": "Newton Underbuck",
    },
    {
        "player_id": "21d52455-6c2c-4ee4-8673-ab46b4b926b4",
        "player_name": "Wyatt Owens",
    },
    {
        "player_id": "23110c0f-2cf9-4d9c-ab2d-634f2f18867e",
        "player_name": "Kennedy Meh",
    },
    {
        "player_id": "23e78d92-ee2d-498a-a99c-f40bc4c5fe99",
        "player_name": "Annie Williams",
    },
    {
        "player_id": "24ad200d-a45f-4286-bfa5-48909f98a1f7",
        "player_name": "Nicholas Summer",
    },
    {
        "player_id": "24cb35c1-c24c-45ca-ac0b-f99a2e650d89",
        "player_name": "Tyreek Peterson",
    },
    {
        "player_id": "25376b55-bb6f-48a7-9381-7b8210842fad",
        "player_name": "Emmett Internet",
    },
    {
        "player_id": "26f01324-9d1c-470b-8eaa-1b9bfbcd8b65",
        "player_name": "Nerd James",
    },
    {
        "player_id": "27faa5a7-d3a8-4d2d-8e62-47cfeba74ff0",
        "player_name": "Spears Nolan",
    },
    {
        "player_id": "29bf512a-cd8c-4ceb-b25a-d96300c184bb",
        "player_name": "Garcia Soto",
    },
    {
        "player_id": "2aee32f9-a5bc-4f95-932c-cf7492d09374",
        "player_name": "Cory Thirteen",
    },
    {
        "player_id": "2d22f026-2873-410b-a45f-3b1dac665ffd",
        "player_name": "Donia Johnson",
    },
    {
        "player_id": "2d5ac274-96fd-471b-8028-f4d7b42d8313",
        "player_name": "Jason Datablase",
    },
    {
        "player_id": "30b7053a-7f5f-4e3b-9600-7b3da8ba7dc0",
        "player_name": "Buck Rattler",
    },
    {
        "player_id": "30dc0652-2608-49ba-8929-36494fc2bd29",
        "player_name": "Watson Ward",
    },
    {
        "player_id": "31f83a89-44e3-47b7-8c9e-0dfdcd8bd30f",
        "player_name": "Tyreek Olive",
    },
    {
        "player_id": "333e3e20-6445-4ee4-afc8-2d6b584a63ee",
        "player_name": "Wyatt Mason VII",
    },
    {
        "player_id": "34b5103a-ff14-4889-9353-3fd0de3d09a7",
        "player_name": "Wyatt Mason XIII",
    },
    {
        "player_id": "3531c282-cb48-43df-b549-c5276296aaa7",
        "player_name": "Oliver Hess",
    },
    {
        "player_id": "35d5b43f-8322-4666-aab1-d466b4a5a388",
        "player_name": "Jordan Boone",
    },
    {
        "player_id": "37bdafdf-f213-4718-8200-c123fca39ff5",
        "player_name": "Slam Rosenthal",
    },
    {
        "player_id": "3954bdfa-931f-4787-b9ac-f44b72fe09d7",
        "player_name": "Nicholas Nolan",
    },
    {
        "player_id": "3adb039d-0875-44f4-914f-1ef9ee4c2120",
        "player_name": "Datum Criminale",
    },
    {
        "player_id": "3af96a6b-866c-4b03-bc14-090acf6ecee5",
        "player_name": "Axel Trololol",
    },
    {
        "player_id": "3be2c730-b351-43f7-a832-a5294fe8468f",
        "player_name": "Amaya Jackson",
    },
    {
        "player_id": "3bf8713b-8886-4fc4-983e-e2c72bef7b95",
        "player_name": "Stephen Shelled",
    },
    {
        "player_id": "3c53ff1c-6437-4965-a4a2-489bcb91d3f4",
        "player_name": "Breeze Regicide",
    },
    {
        "player_id": "3d4ccb09-0e7b-45ae-b51d-199c9d222763",
        "player_name": "Wyatt Mason VIII",
    },
    {
        "player_id": "3db02423-92af-485f-b30f-78256721dcc6",
        "player_name": "Son Jensen",
    },
    {
        "player_id": "3dd85c20-a251-4903-8a3b-1b96941c07b7",
        "player_name": "Tot Best",
    },
    {
        "player_id": "3de17e21-17db-4a6b-b7ab-0b2f3c154f42",
        "player_name": "Brewer Vapor",
    },
    {
        "player_id": "3f08f8cd-6418-447a-84d3-22a981c68f16",
        "player_name": "Pollard Beard",
    },
    {
        "player_id": "3f1ac16f-03c4-4a0f-8daf-6e54bbe12c30",
        "player_name": "Drosophila Hojo",
    },
    {
        "player_id": "4029ea75-da91-4672-9fa5-ee32ec7fa713",
        "player_name": "Jay Grayscale",
    },
    {
        "player_id": "40a51b7f-0005-4577-8bef-859fc36f06d9",
        "player_name": "Wyatt Mason V",
    },
    {
        "player_id": "40db1b0b-6d04-4851-adab-dd6320ad2ed9",
        "player_name": "Scrap Murphy",
    },
    {
        "player_id": "4204c2d1-ca48-4af7-b827-e99907f12d61",
        "player_name": "Axel Cardenas",
    },
    {
        "player_id": "43e4de02-cc21-4413-bb88-1c1128eec174",
        "player_name": "Arbutus Bones",
    },
    {
        "player_id": "446a3366-3fe3-41bb-bfdd-d8717f2152a9",
        "player_name": "Marco Escobar",
    },
    {
        "player_id": "450e6483-d116-41d8-933b-1b541d5f0026",
        "player_name": "England Voorhees",
    },
    {
        "player_id": "459f7700-521e-40da-9483-4d111119d659",
        "player_name": "Comfort Monreal",
    },
    {
        "player_id": "478d91ef-1a6d-4bb3-9965-87cdcc4ad8db",
        "player_name": "Road Kill",
    },
    {
        "player_id": "48a10ad6-6759-4661-80bf-9f9fe393162c",
        "player_name": "Roxetta Compass",
    },
    {
        "player_id": "493a83de-6bcf-41a1-97dd-cc5e150548a3",
        "player_name": "Boyfriend Monreal",
    },
    {
        "player_id": "4941976e-31fc-49b5-801a-18abe072178b",
        "player_name": "Sebastian Sunshine",
    },
    {
        "player_id": "4957826f-0c44-467d-b71f-21185450f458",
        "player_name": "Friend Void",
    },
    {
        "player_id": "4a1927e7-88aa-4b2c-a182-7ec247dc2647",
        "player_name": "Dunbar McLoud",
    },
    {
        "player_id": "4aa843a4-baa1-4f35-8748-63aa82bd0e03",
        "player_name": "Aureliano Dollie",
    },
    {
        "player_id": "4c53fcd8-df02-4a80-99c9-51710863bc7f",
        "player_name": "Harriet Gildehaus",
    },
    {
        "player_id": "4cd0ac8f-6c2e-4bf1-a232-a5ac6fd4a677",
        "player_name": "Pug Meatbrick",
    },
    {
        "player_id": "4e63cb5d-4fce-441b-b9e4-dc6a467cf2fd",
        "player_name": "Axel Campbell",
    },
    {
        "player_id": "4f328502-d347-4d2c-8fad-6ae59431d781",
        "player_name": "Stephens Lightner",
    },
    {
        "player_id": "4fe28bc1-f690-4ad6-ad09-1b2e984bf30b",
        "player_name": "Cell Longarms",
    },
    {
        "player_id": "50154d56-c58a-461f-976d-b06a4ae467f9",
        "player_name": "Carter Oconnor",
    },
    {
        "player_id": "50aad46d-be61-4236-bb0c-6c6198e00be1",
        "player_name": "Y3hirv Hafgy2738riv",
    },
    {
        "player_id": "5149c919-48fe-45c6-b7ee-bb8e5828a095",
        "player_name": "Adkins Davis",
    },
    {
        "player_id": "51c70634-c50a-47a9-bc11-60fa72329875",
        "player_name": "Theodore Honeywell",
    },
    {
        "player_id": "51cba429-13e8-487e-9568-847b7b8b9ac5",
        "player_name": "Collins Mina",
    },
    {
        "player_id": "520b2a14-ef60-4ee8-9f39-c7be12971ef2",
        "player_name": "Backwoods Broker",
    },
    {
        "player_id": "527c1f6e-a7e4-4447-a824-703b662bae4e",
        "player_name": "Melton Campbell",
    },
    {
        "player_id": "54c724af-b163-4319-93c7-fdcafbbcc990",
        "player_name": "Sleve Matsuyama",
    },
    {
        "player_id": "555b0a07-a3e0-41bc-b3db-ca8f520857bc",
        "player_name": "Oops All Keepers",
    },
    {
        "player_id": "57b4827b-26b0-4384-a431-9f63f715bc5b",
        "player_name": "Aureliano Cerna",
    },
    {
        "player_id": "5915b7bb-e532-4036-9009-79f1e80c0e28",
        "player_name": "Rosa Holloway",
    },
    {
        "player_id": "5a39b2dd-23c4-4a6f-a645-99b0b1992585",
        "player_name": "Strike, Looking",
    },
    {
        "player_id": "5b3f0a43-45e7-44e7-9496-512c24c040f0",
        "player_name": "Rhys Rivera",
    },
    {
        "player_id": "5b5bcc6c-d011-490f-b084-6fdc2c52f958",
        "player_name": "Simba Davis",
    },
    {
        "player_id": "5ca7e854-dc00-4955-9235-d7fcd732ddcf",
        "player_name": "Wyatt Quitter",
    },
    {
        "player_id": "5e3b1e6b-6fef-4572-80c8-f9479335ea36",
        "player_name": "Hopper Lovelace",
    },
    {
        "player_id": "6192daab-3318-44b5-953f-14d68cdb2722",
        "player_name": "Justin Alstott",
    },
    {
        "player_id": "62111c49-1521-4ca7-8678-cd45dacf0858",
        "player_name": "Bambi Perez",
    },
    {
        "player_id": "62823073-84b8-46c2-8451-28fd10dff250",
        "player_name": "Mckinney Vaughan",
    },
    {
        "player_id": "63a31035-2e6d-4922-a3f9-fa6e659b54ad",
        "player_name": "Moody Rodriguez",
    },
    {
        "player_id": "64f59d5f-8740-4ebf-91bd-d7697b542a9f",
        "player_name": "Zeke Wallace",
    },
    {
        "player_id": "6524e9e0-828a-46c4-935d-0ee2edeb7e9a",
        "player_name": "Carter Turnip",
    },
    {
        "player_id": "662f34f0-bd74-49a7-8506-50d4dd333c4c",
        "player_name": "Erin Beanbag",
    },
    {
        "player_id": "66cebbbf-9933-4329-924a-72bd3718f321",
        "player_name": "Kennedy Cena",
    },
    {
        "player_id": "67718362-998c-400c-98a6-2e30ccaa78f9",
        "player_name": "Wyatt Mason XII",
    },
    {
        "player_id": "6833ca7d-910e-48f5-b25d-2886cdb08d0e",
        "player_name": "Dander Permadeath",
    },
    {
        "player_id": "6a869b40-be99-4520-89e5-d382b07e4a3c",
        "player_name": "Jake Swinger",
    },
    {
        "player_id": "6b2722a6-b371-4a7e-8adf-728da612a40c",
        "player_name": "Jenny Quicksilver",
    },
    {
        "player_id": "6bd4cf6e-fefe-499a-aa7a-890bcc7b53fa",
        "player_name": "Igneus Mcdaniel",
    },
    {
        "player_id": "6c1c0539-4168-4977-bf17-257bcbfec92b",
        "player_name": "Chromatic Jump",
    },
    {
        "player_id": "6e373fca-b8ab-4848-9dcc-50e92cd732b7",
        "player_name": "Conrad Bates",
    },
    {
        "player_id": "6f39a2f9-76d7-44fd-8a6d-00f87d7bb004",
        "player_name": "Quack Hookrace",
    },
    {
        "player_id": "7088350c-905b-4ac0-a982-64191ecaecaa",
        "player_name": "Sheri Friday",
    },
    {
        "player_id": "721fb947-7548-49ea-8cbe-7721b0ed49e0",
        "player_name": "Tamara Lopez",
    },
    {
        "player_id": "7310c32f-8f32-40f2-b086-54555a2c0e86",
        "player_name": "Dominic Marijuana",
    },
    {
        "player_id": "74b0974a-f827-4934-9dd0-2020728bd4cc",
        "player_name": "Stealix Kramer",
    },
    {
        "player_id": "750c7d44-757a-430c-9fa3-d4ca22111933",
        "player_name": "Rosstin Andante",
    },
    {
        "player_id": "75e80e46-276d-4388-bb6a-da9125a0e8ad",
        "player_name": "Cicero Homestyle",
    },
    {
        "player_id": "7815e82e-5ea4-4cef-b28b-6d8e05815c52",
        "player_name": "Miah Jesaulenko",
    },
    {
        "player_id": "7853aa8c-e86d-4483-927d-c1d14ea3a34d",
        "player_name": "Tucker Flores",
    },
    {
        "player_id": "7951836f-581a-49d5-ae2f-049c6bcc575e",
        "player_name": "Adkins Gwiffin",
    },
    {
        "player_id": "7afedcd8-870d-4655-9659-3bdfb2e17730",
        "player_name": "Pierre Haley",
    },
    {
        "player_id": "7d45e942-ac28-41b6-8d89-5e4a44591c11",
        "player_name": "Cinna Toast",
    },
    {
        "player_id": "7f379b72-f4f0-4d8f-b88b-63211cf50ba6",
        "player_name": "Jes\u00fas Rodriguez",
    },
    {
        "player_id": "7f3f2e75-900e-40b6-846b-db585541490d",
        "player_name": "Doginic Burgertoes",
    },
    {
        "player_id": "7f7042de-7fc1-45f9-b7c4-9169d1454653",
        "player_name": "HANDSOME SCARF",
    },
    {
        "player_id": "800ac627-0334-41d5-98df-c51a47e46aef",
        "player_name": "Chandra Blortles",
    },
    {
        "player_id": "805ba480-df4d-4f56-a4cf-0b99959111b5",
        "player_name": "Leticia Lozano",
    },
    {
        "player_id": "82d5e79d-e125-4460-b1fa-d046ad7739e0",
        "player_name": "Changeup Liu",
    },
    {
        "player_id": "831b1121-ca14-4dbb-afee-56660bb11f0c",
        "player_name": "Jana Beats",
    },
    {
        "player_id": "849e13dc-6eb1-40a8-b55c-d4b4cd160aab",
        "player_name": "Justice Valenzuela",
    },
    {
        "player_id": "8604e861-d784-43f0-b0f8-0d43ea6f7814",
        "player_name": "Randall Marijuana",
    },
    {
        "player_id": "87983006-c9c5-459f-8e7c-e7edcbd902dc",
        "player_name": "Schism Thrones",
    },
    {
        "player_id": "89c8f6bf-94a2-4e56-8412-bdb0182509a9",
        "player_name": "Concrete Mandible",
    },
    {
        "player_id": "8a4dc2bb-ac5b-4774-86bf-c7f8d3000a4a",
        "player_name": "Teeth Bandana",
    },
    {
        "player_id": "8cfb7ee9-cfa4-445c-830e-2723797fa7b3",
        "player_name": "Boxplot Jones",
    },
    {
        "player_id": "8e1eeeb8-1b80-4781-9d85-bda3b58a45f4",
        "player_name": "Magi Uppercutski",
    },
    {
        "player_id": "8f357c9c-521a-4062-a771-2e547746a164",
        "player_name": "Kit Honey",
    },
    {
        "player_id": "906a5728-5454-44a0-adfe-fd8be15b8d9b",
        "player_name": "Jefferson Delacruz",
    },
    {
        "player_id": "90cc0211-cd04-4cac-bdac-646c792773fc",
        "player_name": "Case Lancaster",
    },
    {
        "player_id": "92ff8e42-dcca-4a94-a83d-24d2900b811a",
        "player_name": "Nebula Holstein",
    },
    {
        "player_id": "9313e41c-3bf7-436d-8bdc-013d3a1ecdeb",
        "player_name": "Sandie Nelson",
    },
    {
        "player_id": "9337389f-4301-4e30-a108-4680c02ee1fe",
        "player_name": "Artemesia Teixeira",
    },
    {
        "player_id": "93502db3-85fa-4393-acae-2a5ff3980dde",
        "player_name": "Rodriguez Sunshine",
    },
    {
        "player_id": "937c1a37-4b05-4dc5-a86d-d75226f8490a",
        "player_name": "Pippin Carpenter",
    },
    {
        "player_id": "944d939e-68b8-4259-b9cd-46b4ac9789c7",
        "player_name": "Molly Tapedeck",
    },
    {
        "player_id": "945974c5-17d9-43e7-92f6-ba49064bbc59",
        "player_name": "Bates Silk",
    },
    {
        "player_id": "94e1e162-9d2e-4407-803a-19bcee369933",
        "player_name": "Algebra Goldberg",
    },
    {
        "player_id": "960f041a-f795-4001-bd88-5ddcf58ee520",
        "player_name": "Mayra Buckley",
    },
    {
        "player_id": "9786b2c9-1205-4718-b0f7-fc000ce91106",
        "player_name": "Kevin Dudley",
    },
    {
        "player_id": "97981e86-4a42-4f85-8783-9f29833c192b",
        "player_name": "Daiya Vine",
    },
    {
        "player_id": "979e5105-cbe9-4f95-ad13-ce30c07f1fd5",
        "player_name": "Hops Slumps",
    },
    {
        "player_id": "97ec5a2f-ac1a-4cde-86b7-897c030a1fa8",
        "player_name": "Alston Woods",
    },
    {
        "player_id": "9820f2c5-f9da-4a07-b610-c2dd7bee2ef6",
        "player_name": "Peanut Bong",
    },
    {
        "player_id": "98a98014-9636-4ece-a46a-4625b47c65d5",
        "player_name": "Kiki Familia",
    },
    {
        "player_id": "99e7de75-d2b8-4330-b897-a7334708aff9",
        "player_name": "Winnie Loser",
    },
    {
        "player_id": "9ae7cec4-1df0-4922-8f7a-f3b996d031e7",
        "player_name": "J\u00ebff DeShields",
    },
    {
        "player_id": "9ba361a1-16d5-4f30-b590-fc4fc2fb53d2",
        "player_name": "Mooney Doctor",
    },
    {
        "player_id": "9c14cb0c-79ab-4b94-9ae3-c8de1c587e55",
        "player_name": "GM",
    },
    {
        "player_id": "9e39f808-ff70-4232-8a8c-28085227155f",
        "player_name": "Bugcatcher Roldan",
    },
    {
        "player_id": "a083246b-35f4-4dad-8b07-8b28047e0823",
        "player_name": "Aura Irving",
    },
    {
        "player_id": "a0e7445f-2b93-4ca7-a69d-ff32593700ee",
        "player_name": "Mummy Cantburn",
    },
    {
        "player_id": "a11242ae-936a-46b4-9101-be2cabafeed4",
        "player_name": "Electric Kettle",
    },
    {
        "player_id": "a13f67d5-22eb-4ee9-8b67-893b21acd87b",
        "player_name": "Cedrissimo Sugar",
    },
    {
        "player_id": "a2483925-697f-468f-931c-bcd0071394e5",
        "player_name": "Timmy Manco",
    },
    {
        "player_id": "a25acf3a-6d2c-4485-975b-a04549d084f3",
        "player_name": "Mason M. McMason",
    },
    {
        "player_id": "a7b0bef3-ee3c-42d4-9e6d-683cd9f5ed84",
        "player_name": "Haruta Byrd",
    },
    {
        "player_id": "a8530be5-8923-4f74-9675-bf8a1a8f7878",
        "player_name": "Mohammed Picklestein",
    },
    {
        "player_id": "aadbe486-6bf2-42bd-8418-dbd1aa36edd9",
        "player_name": "Turing Capybara",
    },
    {
        "player_id": "ab04ba22-69b1-43ca-a307-345e460d795a",
        "player_name": "None Binary",
    },
    {
        "player_id": "ab9b2592-a64a-4913-bf6c-3ae5bd5d26a5",
        "player_name": "Beau Huerta",
    },
    {
        "player_id": "aba07c28-e410-4710-b426-b3eba396930f",
        "player_name": "Haunt Wednesday",
    },
    {
        "player_id": "ac13264f-af4e-4423-9e4a-43499a0f8227",
        "player_name": "Number Cruncher",
    },
    {
        "player_id": "ac57cf28-556f-47af-9154-6bcea2ace9fc",
        "player_name": "Rey Wooten",
    },
    {
        "player_id": "ac5e4ce2-de6f-408b-9910-a52bb1d1a978",
        "player_name": "Yams Rolsenthal",
    },
    {
        "player_id": "af6696d4-d28e-44a7-b6fd-a542dffa7364",
        "player_name": "Wyatt Mason II",
    },
    {
        "player_id": "afc90398-b891-4cdf-9dea-af8a3a79d793",
        "player_name": "Yazmin Mason",
    },
    {
        "player_id": "afdbd837-7fc8-4c97-ac31-636950c2b3e4",
        "player_name": "Blaseball Surgeon",
    },
    {
        "player_id": "b0045559-81cf-42e0-87d4-3bbbd3ce0bce",
        "player_name": "Major Arcana",
    },
    {
        "player_id": "b019fb2b-9f4b-4deb-bf78-6bee2f16d98d",
        "player_name": "Gloria Bentley",
    },
    {
        "player_id": "b056a825-b629-4856-856b-53a15ad34acb",
        "player_name": "Bennett Takahashi",
    },
    {
        "player_id": "b357fbf4-533e-4f2c-8616-a576e9954795",
        "player_name": "Cat Inning",
    },
    {
        "player_id": "b390b28c-df96-443e-b81f-f0104bd37860",
        "player_name": "Karato Rangel",
    },
    {
        "player_id": "b3c8c0a0-20a0-4c5d-a391-34b99038693c",
        "player_name": "Manda Moth",
    },
    {
        "player_id": "b3d48a84-adc6-44f4-bb69-51d2c6b1203e",
        "player_name": "Wyatt Mason XI",
    },
    {
        "player_id": "b69aa26f-71f7-4e17-bc36-49c875872cc1",
        "player_name": "Francisca Burton",
    },
    {
        "player_id": "b72a136e-bbfd-4687-a576-1ab538c8f264",
        "player_name": "Samothes Demb\u00e9l\u00e9",
    },
    {
        "player_id": "b7adbbcc-0679-43f3-a939-07f009a393db",
        "player_name": "Jode Crutch",
    },
    {
        "player_id": "b7c1ddda-945c-4b2e-8831-ad9f2ec4a608",
        "player_name": "Nolan Violet",
    },
    {
        "player_id": "b7c4f986-e62a-4a8f-b5f0-8f30ecc35c5d",
        "player_name": "Oscar Hollywood",
    },
    {
        "player_id": "b85161da-7f4c-42a8-b7f6-19789cf6861d",
        "player_name": "Javier Lotus",
    },
    {
        "player_id": "bbdeb3e2-cd5a-46ff-9a69-fd06b1482710",
        "player_name": "Beans Reblase",
    },
    {
        "player_id": "bd4c6837-eeaa-4675-ae48-061efa0fd11a",
        "player_name": "Workman Gloom",
    },
    {
        "player_id": "bde7bdc5-e0a8-4990-a6b6-c4909c3ebbc7",
        "player_name": "Cousin Spike",
    },
    {
        "player_id": "be4f288b-ef87-4e8e-b8ee-20eec18e80b8",
        "player_name": "PolkaDot Matrix",
    },
    {
        "player_id": "c09e66b3-5847-4cbb-aeba-2b70e7bafedb",
        "player_name": "Premjeet Liu",
    },
    {
        "player_id": "c3b1b4e5-4b88-4245-b2b1-ae3ade57349e",
        "player_name": "Wall Osborn",
    },
    {
        "player_id": "c4418663-7aa4-4c9f-ae73-0e81e442e8a2",
        "player_name": "Chris Thibault",
    },
    {
        "player_id": "c549f280-82ba-4d8e-a4ce-c49e56461fb6",
        "player_name": "Val Hitherto",
    },
    {
        "player_id": "c54fba12-2fb5-4091-b1d7-1449693b35d6",
        "player_name": "Jacobus Harper",
    },
    {
        "player_id": "c57222fd-df55-464c-a44e-b15443e61b70",
        "player_name": "Natha Spruce",
    },
    {
        "player_id": "c6146c45-3d9b-4749-9f03-d4faae61e2c3",
        "player_name": "Atlas Diaz",
    },
    {
        "player_id": "c6bd21a8-7880-4c00-8abe-33560fe84ac5",
        "player_name": "Wendy Cerna",
    },
    {
        "player_id": "c90eafdf-4244-41e0-8a66-adf31d700f02",
        "player_name": "Denim Squall",
    },
    {
        "player_id": "ca709205-226d-4d92-8be6-5f7871f48e26",
        "player_name": "Rivers Javier",
    },
    {
        "player_id": "caa9bd86-244a-4aba-a237-6a9528f09570",
        "player_name": "Maddong Candy",
    },
    {
        "player_id": "cacee0b8-50fc-4df4-96ea-089a3d501810",
        "player_name": "Nlikki Hart",
    },
    {
        "player_id": "cc725a58-38cc-42af-9ff8-ace76541ac26",
        "player_name": "Aldo Comeback",
    },
    {
        "player_id": "ccc99f2f-2feb-4f32-a9b9-c289f619d84c",
        "player_name": "Itsuki Winner",
    },
    {
        "player_id": "cd5494b4-05d0-4b2e-8578-357f0923ff4c",
        "player_name": "Mcfarland Vargas",
    },
    {
        "player_id": "cd6b102e-1881-4079-9a37-455038bbf10e",
        "player_name": "Caleb Morin",
    },
    {
        "player_id": "cd9d9b35-0ba4-4842-8577-2c80e91968d1",
        "player_name": "Wyatt Mason III",
    },
    {
        "player_id": "ce99d7af-ba75-48a7-a5d8-d46f543829f2",
        "player_name": "Lucy Tokkan",
    },
    {
        "player_id": "ceac785e-55fd-4a4e-9bc8-17a662a58a38",
        "player_name": "Best Cerna",
    },
    {
        "player_id": "ceb5606d-ea3f-4471-9ca7-3d2e71a50dde",
        "player_name": "London Simmons",
    },
    {
        "player_id": "ceb8f8cd-80b2-47f0-b43e-4d885fa48aa4",
        "player_name": "Donia Bailey",
    },
    {
        "player_id": "d002946f-e7ed-4ce4-a405-63bdaf5eabb5",
        "player_name": "Jorge Owens",
    },
    {
        "player_id": "d46abb00-c546-4952-9218-4f16084e3238",
        "player_name": "Atlas Guerra",
    },
    {
        "player_id": "d5192d95-a547-498a-b4ea-6770dde4b9f5",
        "player_name": "Summers Slugger",
    },
    {
        "player_id": "d6e9a211-7b33-45d9-8f09-6d1a1a7a3c78",
        "player_name": "William Boone",
    },
    {
        "player_id": "d74a2473-1f29-40fa-a41e-66fa2281dfca",
        "player_name": "Landry Violence",
    },
    {
        "player_id": "d796d287-77ef-49f0-89ef-87bcdeb280ee",
        "player_name": "Izuki Clark",
    },
    {
        "player_id": "d8758c1b-afbb-43a5-b00b-6004d419e2c5",
        "player_name": "Ortiz Nelson",
    },
    {
        "player_id": "d8bc482e-9309-4230-abcb-2c5a6412446d",
        "player_name": "August Obrien",
    },
    {
        "player_id": "dab126a9-3310-4f6e-a3ba-3e3044a0feec",
        "player_name": "Games Pergame",
    },
    {
        "player_id": "dd7e710f-da4e-475b-b870-2c29fe9d8c00",
        "player_name": "Itsuki Weeks",
    },
    {
        "player_id": "dd8a43a4-a024-44e9-a522-785d998b29c3",
        "player_name": "Miguel Peterson",
    },
    {
        "player_id": "de3836a4-fdba-46cc-ab53-49fcaacc39c0",
        "player_name": "PomPom Pomodoro",
    },
    {
        "player_id": "de52d5c0-cba4-4ace-8308-e2ed3f8799d0",
        "player_name": "Jos\u00e9 Mitchell",
    },
    {
        "player_id": "dfe3bc1b-fca8-47eb-965f-6cf947c35447",
        "player_name": "Linus Haley",
    },
    {
        "player_id": "e11ff57a-ec5d-4d59-81a3-ffe3529b0e61",
        "player_name": "Espresso Machine",
    },
    {
        "player_id": "e1651116-4533-4b39-8931-62d023e21579",
        "player_name": "Zero Index",
    },
    {
        "player_id": "e181ad4a-dd09-4873-ae68-b50518d20722",
        "player_name": "Batista Oatmilk",
    },
    {
        "player_id": "e2ad81ff-fff2-40bb-9043-95bdaf34ebc2",
        "player_name": "Swords Magpie",
    },
    {
        "player_id": "e492fe7e-1570-4d5e-92a2-7cfb2cfee5a6",
        "player_name": "Ikea Jellofin",
    },
    {
        "player_id": "e495cadc-a645-439d-a556-e41de7493f18",
        "player_name": "Twofurious Puddles",
    },
    {
        "player_id": "e6114fd4-a11d-4f6c-b823-65691bb2d288",
        "player_name": "Bevan Underbuck",
    },
    {
        "player_id": "e6768069-1db7-44d6-849b-0a281f62e855",
        "player_name": "Queithlein Shufflecat",
    },
    {
        "player_id": "e749dc27-ca3b-456e-889c-d2ec02ac7f5f",
        "player_name": "Aureliano Estes",
    },
    {
        "player_id": "e919dfae-91c3-475c-b5d5-8b0c14940c41",
        "player_name": "Famous Meng",
    },
    {
        "player_id": "ebf2da50-7711-46ba-9e49-341ce3487e00",
        "player_name": "Baldwin Jones",
    },
    {
        "player_id": "ec41d37e-2398-4e7d-aaf0-f7f52e5300c7",
        "player_name": "Clementine Steeplechase",
    },
    {
        "player_id": "f106291a-5935-449e-b075-75e62d1d1b07",
        "player_name": "Zelda Highway",
    },
    {
        "player_id": "f10ba06e-d509-414b-90cd-4d70d43c75f9",
        "player_name": "Hernando Winter",
    },
    {
        "player_id": "f1185b20-7b4a-4ccc-a977-dc1afdfd4cb9",
        "player_name": "Frazier Tosser",
    },
    {
        "player_id": "f359f979-f658-4427-82a3-7185377c85c3",
        "player_name": "Jonah Mosaic",
    },
    {
        "player_id": "f6342729-a38a-4204-af8d-64b7accb5620",
        "player_name": "Marco Winner",
    },
    {
        "player_id": "f63ee68f-8021-4dd0-b3d5-b3d587ae3213",
        "player_name": "Quebrada Stone",
    },
    {
        "player_id": "f6d3c134-e3ee-40a1-bd4d-095347444129",
        "player_name": "Parker MacMillan IIII",
    },
    {
        "player_id": "f7715b05-ee69-43e5-a0e5-8e3d34270c82",
        "player_name": "Caligula Lotus",
    },
    {
        "player_id": "f90c398b-eef0-40cb-8b07-302a759e8bd1",
        "player_name": "Nucleus Street",
    },
    {
        "player_id": "fbb5291c-2438-400e-ab32-30ce1259c600",
        "player_name": "Cory Novak",
    },
    {
        "player_id": "fc1d65f5-8916-41f1-b878-4d42a965b011",
        "player_name": "Lizzy Pasta",
    },
    {
        "player_id": "fdfd36c7-e0c1-4fce-98f7-921c3d17eafe",
        "player_name": "Reese Harrington",
    },
    {
        "player_id": "fe1f826f-7346-425c-9d3c-7ed5a7eae1b7",
        "player_name": "Angel Ivories",
    },
    {
        "player_id": "bc4187fa-459a-4c06-bbf2-4e0e013d27ce",
        "player_name": "Sixpack Dogwalker",
    }
];

module.exports = {
  players,
};


},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
const util = require('./util');

class Dialog {
  constructor() {
    console.debug('new Dialog()');

    this.$dialogs = $('#highlights-dialog__text p');
    this.$lineOne = this.$dialogs.first();
    this.$lineTwo = this.$dialogs.last();
    this.$control = $('.dialog-control');

    // old animation stuff
    //this.lineOneAnimating = false;
    //this.lineTwoAnimating = false;

    this.highlight;
    this.resetDialog();
  }

  resetDialog() {
    this.maxDialogLen = this.setMaxDialogLen();
    this.dialogParts = [];
    this.curDialogPart = 0;

    // old animation stuff
    //this.$lineOne.removeClass('animation-finished animate');
    //this.$lineTwo.removeClass('animation-finished animate');
  }

  // todo: do i wanna support mobile? then update this accordingly
  setMaxDialogLen() {
    return 35;
  }

  breakIntoDialogParts(commentary) {
    // split by newlines (enforced pacing)
    const pacingParts = commentary.split('\n');

    pacingParts.forEach((p) => {
      this.breakIntoParts(p);
    });
  }

  // split each part into its animation parts by line length
  breakIntoParts(text) {
    let parts = [[], []];
    let unfilled = 0;
    let len = 0;

    text.split(' ').forEach((word) => {
      let wordLen = word.length;

      if ((len + wordLen) > this.maxDialogLen) {
        len = 0;

        if (unfilled === 1) {
          this.dialogParts.push(this.makeSentences(parts));
          parts = [[], []];
          unfilled = 0;
        } else {
          unfilled = 1;
        }
      }

      if ((len + wordLen) <= this.maxDialogLen) {
        parts[unfilled].push(word);
        len += wordLen + 1;
      }
    });

    this.dialogParts.push(this.makeSentences(parts));
  }

  makeSentences(parts) {
    return parts.map((words) => {
      return words.join(' ');
    });
  }

  finished() {
    return this.curDialogPart === (this.dialogParts.length - 1);
  }

  advance() {
    if (!this.highlight) { return false; }

    this.curDialogPart++;
    this.showHighlight();
  }

  hasDialogNext() {
      return !((this.curDialogPart + 1) === this.dialogParts.length);
  }

  startHighlight(highlight) {
    this.highlight = highlight;

    this.resetDialog();
    this.breakIntoDialogParts(this.highlight.commentary);

    this.showHighlight(this.highlight);
  }

  showHighlight() {
    // old animation stuff
    //this.$lineOne.removeClass('animate');
    //this.$lineTwo.removeClass('animate');

    this.$lineOne.text(this.dialogParts[this.curDialogPart][0] || '');
    this.$lineTwo.text(this.dialogParts[this.curDialogPart][1] || '');

    // old animation stuff
    //this.$lineOne.addClass('animation-finished');
    //this.$lineTwo.addClass('animation-finished');
  }

  showControl(hasPrev, hasNext) {
    this.hideControl();
    this.showPrev(hasPrev);
    this.showNext(hasNext);
  }

  // show next arrow if:
  // there are parts left to this highlight
  // there are highlights left to the story
  showNext(hasNext) {
    if (this.hasDialogNext() || hasNext) {
      this.$control.last().addClass('show');
    }
  }

  // show pre arrow if:
  // there are highlights earlier in the story
  showPrev(hasPrev) {
    if (hasPrev) {
      this.$control.first().addClass('show');
    }
  }

  hideControl() {
    this.$control.removeClass('show');
  }

}

module.exports = Dialog;

// old animation stuff
/*
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

  continueHighlight(highlights) {
    //this.cur = highlights.cur;
    //this.prev = highlights.prev;
    //this.next = highlights.next;

    if (!this.highlight) { return false; }
    if (!this.highlight.started) { return false; }

    // if currently animating, simply end the animation
    if (this.lineOneAnimating) {

      this.$lineOne
        .removeClass('animate')
        .addClass('animation-finished');
      this.lineOneAnimating = false;
      this.$lineTwo
        .removeClass('animate')
        .addClass('animation-finished');
      this.lineTwoAnimating = false;
      this.showControl();

    } else if (this.lineTwoAnimating) {

      this.$lineTwo
        .removeClass('animate')
        .addClass('animation-finished');
      this.lineTwoAnimating = false;
      this.showControl();

    } else {
      this.curDialogPart++;

      // no more text to this highlight
      if (this.curDialogPart === this.dialogParts.length) {
        this.curDialogPart = 0;
        return false;
      }

      // skip animations for now
      this.showHighlight();
      //animateHighlight(cur);
    }

    return true;
  }

  reverseHighlight(highlights) {
    this.cur = highlights.cur;
    this.prev = highlights.prev;
    this.next = highlights.next;

    if (!this.cur) { return false; }
    if (!this.cur.started) { return false; }

    this.curDialogPart--;

    // no more text to this highlight
    if (this.curDialogPart === -1) {
      this.curDialogPart = 0;
      return false;
    }

    this.showHighlight();
    return true;
  }

*/


},{"./util":26}],21:[function(require,module,exports){
const Highlight = require('./highlight');
const util = require('./util');
const teamsData = require('../lib/teams-data');

let onStartPreview;
let onEndPreview;
let onSaveAndPublish;

const isPlayBall = (gameEv) => {
  return gameEv.lastUpdate.indexOf('Play ball') >= 0;
};

const generateHighlights = (cb, gameEvents, startFrom, savedEvents) => {
  let highlights = [];

  if (savedEvents) {

    const savedEventsObj = {};

    for (let savedEv of savedEvents) {
      savedEventsObj[savedEv.blaseball_event_id] = savedEv;
    }

    for (let gameEvId in gameEvents) {
      const savedEv = savedEventsObj[gameEvId];

      if (savedEv) {
        const gameEvent = gameEvents[savedEv.blaseball_event_id];
        const commentary = savedEv.description;
        const visual = savedEv.visual.type;
        const visualMeta = savedEv.visual.meta;

        const hl = new Highlight({
          id: savedEv.blaseball_event_id,
          gameEvent: gameEvent.ev,
          mlustard: gameEvent.mlustard,
          commentary,
          visual,
          visualMeta,
        });

        highlights.push(hl);
      }
    }

    console.debug('generateHighlights:', highlights);
    cb(highlights);

  } else {

    $('#game-events__form-items .game-event-check__input:checked')
    .each((_, checked) => {
      const $checked = $(checked);
      const id = $checked.attr('id');
      const gameEvent = gameEvents[id];
      const $gameEv = $checked.closest('.game-event');
      const commentary = $gameEv.find('.game-event-update__textarea').val();
      const visual = $gameEv.find('.visual-select').val();
      const visualMeta = {};

      if (visual === 'custom') {
        visualMeta.imageData = $gameEv.find('.visual-preview-custom').attr('src');
        visualMeta.imageTitle = $gameEv.find('.image-meta__title').val();
        visualMeta.imageDescription = $gameEv.find('.image-meta__id').val();
        visualMeta.creator = $gameEv.find('.image-meta__creator').val();
        visualMeta.creatorLink = $gameEv.find('.image-meta__link').val();
      }

      const hl = new Highlight({
        id: id,
        gameEvent: gameEvent.ev,
        mlustard: gameEvent.mlustard,
        commentary,
        visual,
        visualMeta,
      });

      highlights.push(hl);
    });

    console.debug('generateHighlights:', highlights);
    cb(highlights, startFrom);
  }

};

const renderGameEv = (gameEv) => {
  const data = gameEv.ev.data;

  if (!data.lastUpdate) {
    return;
  }

  let ret = [];
  let inning;
  let inningClasses;
  let homeEmoji = util.getEmoji('home', data);
  let awayEmoji = util.getEmoji('away', data);
  let topOfOne = false;

  // check for half-inning changes
  if (gameEv.mlustard.gameStatus === 'beforeFirstPitch') {

    inning = 'Top of 1';
    inningClasses = 'inning-top';
    // sometimes, the game event doesn't think it's the top of 1 if there are
    // some events before the first pitch, or something
    topOfOne = true;

  } else if (gameEv.mlustard.gameStatus === 'firstHalfInningStart' && data.inning) {

    inning = `Top of ${data.inning + 1}`;
    inningClasses = 'inning-top';

  } else if (gameEv.mlustard.gameStatus === 'secondHalfInningStart') {

    inning = `Bottom of ${data.inning + 1}`;
    inningClasses = 'inning-bottom';

  }

  if (inning) {
    const $inning = $('#inning-header__template').clone();

    $inning
      .attr('id', '')
      .addClass(inningClasses)
      .removeClass('d-none')
      .find('span')
      .text(inning);

    ret.push($inning);

    const $inningInfo = $('#inning-info__template').clone();
    const fielding = data.topOfInning ? 'home' : 'away';
    let fieldingTeam;
    let fieldingEmoji;
    let pitcher;
    let battingTeam;
    let battingEmoji;

    if (data.topOfInning || topOfOne) { // home fielding
      fieldingTeam = data.homeTeamName;
      fieldingEmoji = homeEmoji;
      pitcher = data.homePitcherName || 'home-pitcher-placeholder';
      battingTeam = data.awayTeamName;
      battingEmoji = awayEmoji;
    } else { // away fielding
      fieldingTeam = data.awayTeamName;
      fieldingEmoji = awayEmoji;
      pitcher = data.awayPitcherName;
      battingTeam = data.homeTeamName;
      battingEmoji = homeEmoji;
    }

    $inningInfo
      .attr('id', '')
      .removeClass('d-none')
      .find('.fielding')
      .text(`${fieldingEmoji}${fieldingTeam} fielding, with ${pitcher} pitching`);

    $inningInfo
      .find('.batting')
      .text(`${battingEmoji}${battingTeam} batting`);

    ret.push($inningInfo);
  }

  const $gameEv = $('#game-event__template').clone();

  $gameEv
    .find('.game-event-check__input')
    .attr('id', gameEv.ev.hash);

  $gameEv
    .find('textarea')
    .val(`${data.lastUpdate} ${data.scoreUpdate || ''}`);

  // update visual select options and ids
  const $visualSelect = $gameEv.find('.visual-select');

  $visualSelect.attr('id', `visual-select-${gameEv.ev.hash}`);
  if (isPlayBall(gameEv.ev.data)) {
    $visualSelect.val('matchup').change();
  } else {
    $gameEv.find('.visual-preview-diamond').removeClass('d-none');
  }

  const $customForm = $gameEv.find('.custom-visual-form');

  $customForm.attr('id', `custom-visual-form-${gameEv.ev.hash}`);
  // todo: there's more than 1 input, fix this
  $customForm
    .find('label')
    .attr('for', `custom-visual__input-${gameEv.ev.hash}`);
  $customForm
    .find('input')
    .attr('id', `custom-visual__input-${gameEv.ev.hash}`);

  // game status
  const $gameStatus = $gameEv.find('.game-event-game-status');

  // score
  const $homeScore = $gameStatus.find('.scoreboard-teams__home span');
  const $awayScore = $gameStatus.find('.scoreboard-teams__away span');

  $homeScore.first().text(teamsData[data.homeTeam].shorthand);
  $homeScore.last().text(data.homeScore);

  $awayScore.first().text(teamsData[data.awayTeam].shorthand);
  $awayScore.last().text(data.awayScore);

  // bases are from third to first
  const $bases = $gameStatus.find('.scoreboard-bases');
  $bases.empty();
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.third.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.second.playerName));
  $bases.append(util.makeBaseDiamond(gameEv.mlustard.baseRunners.first.playerName));

  // count
  const $count = $gameStatus.find('.scoreboard-count__count span');
  $count.first().text(data.atBatBalls);
  $count.last().text(data.atBatStrikes);
  const $outs = $gameStatus.find('.scoreboard-count__outs span');
  $outs.text(data.halfInningOuts);

  // highlight interesting events
  let containerClasses = [];

  if (gameEv.mlustard.out && gameEv.mlustard.outMeta.kind === 'strike') {
    containerClasses.push('strikeout');
  }

  if (gameEv.mlustard.hit) {
    containerClasses.push('hit');
  }

  if (gameEv.mlustard.steal && gameEv.mlustard.stealMeta.success) {
    containerClasses.push('steal');
  }

  if (gameEv.mlustard.special) {
    containerClasses.push('special');
  }

  if (gameEv.mlustard.maximumBlaseball) {
    containerClasses.push('max');
  }

  if (gameEv.mlustard.runsScored || gameEv.mlustard.unrunsScored) {
    containerClasses.push('score');
  }

  if (containerClasses.length) {
    containerClasses.forEach((className) => {
      $(`.scroll-to.${className}`).removeClass('d-none');
    });

    containerClasses.push('interesting');
  }

  $gameEv
    .attr('id', '')
    .removeClass('d-none')
    .addClass(containerClasses);

  ret.push($gameEv);

  return ret;
};

// set game title and matchup
let headerRendered = false;

const headerNotRendered = (gameEv) => {
  return !headerRendered && gameEv.ev.data.homePitcherName && gameEv.ev.data.awayPitcherName;
};

const renderHeader = (gameEv) => {
  let homeEmoji = util.getEmoji('home', gameEv.ev.data);
  let awayEmoji = util.getEmoji('away', gameEv.ev.data);

  $('.game-events__game-header .game-name')
    .text(`Season ${gameEv.ev.data.season + 1}, Day ${gameEv.ev.data.day + 1}`);
  $('.game-events__game-header .matchup')
    .text(`${gameEv.ev.data.homeTeamName} vs. ${gameEv.ev.data.awayTeamName}`);
  $('.game-events__game-subheader .home-pitcher')
    .text(`${homeEmoji} ${gameEv.ev.data.homePitcherName}`);
  $('.game-events__game-subheader .away-pitcher')
    .text(`${awayEmoji} ${gameEv.ev.data.awayPitcherName}`);

  headerRendered = true;
};

let hpReady = false;

const homePitcherReady = (gameEv) => {
  if (hpReady) return false;

  return gameEv.ev.data.homePitcherName;
};

const updateHomePitcher = (gameEv) => {
  // hack: since at this point we know the home pitcher, check if we need to
  // update it in the table of game events for the top of 1st
  const $firstInning = $('#game-events__form-items .inning-info .fielding');

  if (!$firstInning.length) {
    return;
  }

  $firstInning
    .text($firstInning.text().replace('home-pitcher-placeholder', gameEv.ev.data.homePitcherName));
  hpReady = true;
};

const render = (settings) => {
  gameEvents = settings.gameEvents;
  onStartPreview = settings.onStartPreview;
  onEndPreview = settings.onEndPreview;
  onSaveAndPublish = settings.onSaveAndPublish;
  const savedEvents = settings.savedEvents;

  $('.game-events__container').removeClass('d-none');
  $('.game-events__info').addClass('d-none');

  const $container = $('#game-events__form-items');
  $container.empty();
  headerRendered = false;

  for (let id in gameEvents) {
    let gameEv = gameEvents[id];

    if (headerNotRendered(gameEv)) {
      renderHeader(gameEv);
    }

    if (homePitcherReady(gameEv)) {
      updateHomePitcher(gameEv);
    }

    let $gameEv = renderGameEv(gameEv);

    if ($gameEv) {
      $container.append($gameEv);
    }
  }

  // this is gross, but duct tape is easier (for now shhhh)
  if (savedEvents) {
    $('.game-events__header .buttons-wrapper button').prop('disabled', true);

    for (let savedEv of savedEvents) {
      const $check = $(`#${savedEv.blaseball_event_id}`);

      // so this is cursed: if we got to the page by editing an old story,
      // then decided to load a new game, we still have savedEvents; but, they
      // won't find any checked events
      if ($check.length) {
        $check.prop('checked', true);
        $('.game-events__header .buttons-wrapper button').prop('disabled', false);
        $gameEv = $check.closest('.game-event');
        $gameEv.find('.game-event-update__textarea').val(savedEv.description);
        $gameEv.find('.game-event-preview__link').removeClass('disabled');
        $gameEv.find('.visual-select').val(savedEv.visual.type);

        if (savedEv.visual.type === 'custom') {
          const $custom = $gameEv.find('.custom-visual-form');

          $custom
            .find('.visual-preview-custom')
            .attr('src', savedEv.visual.meta.imageData)
            .removeClass('d-none');
          $custom
            .find('.image-meta__title').val(savedEv.visual.meta.imageTitle);
          $custom
            .find('.image-meta__id').val(savedEv.visual.meta.imageDescription);
          $custom
            .find('.image-meta__creator').val(savedEv.visual.meta.creator);
          $custom
            .find('.image-meta__link').val(savedEv.visual.meta.creatorLink);
          $custom.removeClass('d-none');
          $custom.find('.custom-visual__image-meta').removeClass('d-none');
        }

      }
    }
  }

  bindHandlers(gameEvents);
};

const bindSaveAndPublish = (gameEvents) => {
  const $highlightsSelectForm = $('#game-events__form');

  $highlightsSelectForm.off('submit').on('submit', (evt) => {
    evt.preventDefault();
    generateHighlights(onSaveAndPublish, gameEvents);
  });

  $('.save-story').off('click').on('click', (evt) => {
    generateHighlights(onSaveAndPublish, gameEvents);
  });
};

const bindPreview = (gameEvents) => {
  const $highlightsSelectForm = $('#game-events__form');

  $('.preview-story').off('click').on('click', (ev) => {
    generateHighlights(onStartPreview, gameEvents);
  });

  $highlightsSelectForm.find('.game-event-preview__link').off('click').on('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    const $link = $(evt.target);

    if ($link.hasClass('disabled')) {
      return;
    }

    const id = $link
      .closest('.game-event').find('.game-event-check__input').attr('id');

    generateHighlights(onStartPreview, gameEvents, id);
  });
};

const togglePreviewAll = () => {
  const state = $('.game-event-check__input:checked').length;

  $('.preview-story')
    .prop('disabled', !state);
  $('.save-story')
    .prop('disabled', !state);
};

const togglePreview = ($checkbox) => {
  let state = $checkbox.is(':checked');

  $checkbox
    .closest('.game-event')
    .find('.game-event-preview__link')
    .toggleClass('disabled', !state);
};

const bindCheckboxes = () => {
  const $checkAll = $('#check-all');

  $('#check-all').off('change').on('change', () => {
    let state = $checkAll.is(':checked');

    $('.game-event-check__input').each((_, ch) => {
      const $ch = $(ch);

      $ch.prop('checked', state);
      togglePreview($ch);
    });

    togglePreviewAll();
  });

  $('#game-events__form-items').off('change').on('change', '.game-event-check__input', (evt) => {
    const $ch = $(evt.target);

    togglePreview($ch);
    togglePreviewAll();
  });
};

const bindJumpButtons = () => {
  $('.scroll-to').off('click').on('click', (evt) => {
    const $button = $(evt.target);
    const $itemsContainer = $('#game-events__form-items')
    //const containerOffTop = $itemsContainer.offset().top;
    const $items = $itemsContainer.children();
    const headerHeight = $('.game-events__header').outerHeight();

    let lookup = '.interesting';

    if ($button.hasClass('strikeout')) {
      lookup += '.strikeout';
    } else if ($button.hasClass('hit')) {
      lookup += '.hit';
    } else if ($button.hasClass('steal')) {
      lookup += '.steal';
    } else if ($button.hasClass('special')) {
      lookup += '.special';
    } else if ($button.hasClass('max')) {
      lookup += '.max';
    } else if ($button.hasClass('score')) {
      lookup += '.score';
    } else if ($button.hasClass('inning')) {
      lookup += '.inning';
    }

    // find the first game event in view
    let $firstInView = $items.filter((_, el) => {
      const $el = $(el);
      return ($el.offset().top > window.pageYOffset + headerHeight) && ($el.offset().top < window.pageYOffset + $el.outerHeight() + headerHeight);
    });

    // if the page hasn't been scrolled beyond the start of the game events,
    // the first in view will be the first from the top
    if (!$firstInView.length) {
      $firstInView = $items.first();
    }

    // look for next sibling that matches the type we're looking for
    let $lookup = $firstInView.nextAll(lookup).first();

    // if there's no match looking forward, loop from the top
    if (!$lookup.length) {
      $lookup = $(lookup).first();
    }


    $(window)
      .scrollTop($lookup.offset().top - headerHeight);
  });
};

const bindStickyHeader = () => {
  const $stickyHeader = $('.game-events__header');
  const stickyOffset = $stickyHeader.offset().top;

  $(window).off('scroll').on('scroll', () => {
    $stickyHeader.toggleClass('sticky', window.pageYOffset > stickyOffset);
  });
};

const bindVisuals = () => {
  $('.custom-visual-form').off('submit').on('submit', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
  });

  $('.visual-select').off('change').on('change', (evt) => {
    const $select = $(evt.target);
    const val = $select.val();
    const $visual = $select.closest('.game-event-visual');

    $visual.find('.visual-preview').addClass('d-none');

    if (val === 'custom') {
      const $preview = $visual.find('.visual-preview-custom');

      $visual.find('.custom-visual-form').removeClass('d-none');

      if ($preview.attr('src') !== '#') {
        $preview.removeClass('d-none');
      }
    } else {
      $visual.find('.custom-visual-form').addClass('d-none');
    }
  });

  $('.custom-visual__input').off('change').on('change', (evt) => {
    const file = evt.target.files[0];
    const $input = $(evt.target);
    const $form = $input.parent();
    const $preview = $input.closest('.game-event-visual').find('.visual-preview-custom');

    if (validateImage(file, $form)) {
      handleUploadedImage(file, $preview);
    }
  });
};

const validateImage = (file, $form) => {
  const $error = $form.find('.error-msg').addClass('d-none');

  if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
    $error
      .text('Sorry, only .png and .jp(e)g images are supported')
      .removeClass('d-none');

    return false;
  }

  if (file.size > 1000000) {
    $error
      .text('Sorry, the image has to be smaller than 1MB')
      .removeClass('d-none');

    return false;
  }

  return true;
};

const handleUploadedImage = (file, $preview) => {
  const reader = new FileReader();

  reader.addEventListener('load', (evt) => {
    $preview.attr('src', reader.result).removeClass('d-none');
    $preview.next('.custom-visual__image-meta').removeClass('d-none');
  });
  reader.readAsDataURL(file);
};

const bindHandlers = (gameEvents) => {
  bindSaveAndPublish(gameEvents);
  bindPreview(gameEvents);
  bindCheckboxes();
  bindJumpButtons();
  bindStickyHeader();
  bindVisuals();
};

module.exports = {
  render,
  generateHighlights,
};


},{"../lib/teams-data":1,"./highlight":23,"./util":26}],22:[function(require,module,exports){
const mlustard = require('mlustard');

const getRandomGame = () => {
  const games = [
    // internet series championship games, starting season 2
    'https://reblase.sibr.dev/game/97d88b9e-406d-4f31-a18f-2a3b903edc03',
    'https://reblase.sibr.dev/game/b38e0917-43da-470c-a7bb-5712368a2492',
    'https://reblase.sibr.dev/game/628a2ddb-f608-411b-8d2e-2768cd36d58b',
    'https://reblase.sibr.dev/game/52f6274e-e0dc-4c23-87e8-686f6d2b2bbf',
    'https://reblase.sibr.dev/game/10538840-1f72-4a90-98e5-724a9dc5d061',
    'https://reblase.sibr.dev/game/9d85897e-e689-4eeb-b2ae-b69679a3ebc7',
    'https://reblase.sibr.dev/game/ee35a868-b004-449f-a99c-6a40ca54b382',
    'https://reblase.sibr.dev/game/06566f8d-3d14-4956-b054-36dc981fd589',
    'https://reblase.sibr.dev/game/704ddf2f-3fe2-48b3-b674-b94765f70d01',
    'https://reblase.sibr.dev/game/47bcac42-f651-4fc9-9f93-5567a7b10daf',
    'https://reblase.sibr.dev/game/0f19d78d-c27d-4146-863d-b55e6dae1679',
    'https://reblase.sibr.dev/game/1506b88f-1fea-4ba1-9256-1ebb030cdcae',
    'https://reblase.sibr.dev/game/b2cafd20-a799-48f6-abd7-c99bd79a6bd1',
    'https://reblase.sibr.dev/game/2bc6e86e-8d25-4e37-9026-780d8b6969c5',
    'https://reblase.sibr.dev/game/462481f4-7f97-441c-9fc9-c3dc3c5844a4',
    'https://reblase.sibr.dev/game/11a8a7d3-460b-4c99-a98a-b0bd1f577073',
    'https://reblase.sibr.dev/game/823dfcb6-dddb-43f4-90ff-eac05827a82e',
    'https://reblase.sibr.dev/game/f7ad7826-ca6e-49c2-818e-190408b046fe',

    // other games
    // s3d100 (riv landry)
    'https://reblase.sibr.dev/game/aa1b7fde-f077-4e4b-825f-0d1538d02822',
  ];

  return games[Math.floor(Math.random() * (games.length - 1))];
};

const getGameEvents = (gameId) => {
  let gamesURL = `https://api.sibr.dev/chronicler/v1/games/updates?game=${gameId}`;

  const getPaginatedEvents = (gameEvents, gamesURL, nextPage, cb) => {
    let fetchURL = gamesURL;
    if (nextPage) {
      fetchURL += `&page=${nextPage}`;
    }

    fetch(fetchURL)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Bad response from server');
        }

        return resp.json();
      })
      .then((data) => {
        for (let gameEv of data.data) {
          gameEvents[gameEv.hash] = {
            ev: gameEv,
            mlustard: mlustard.analyzeGameEvent(gameEv.data),
          };
        }

        if (data.nextPage) {
          getPaginatedEvents(gameEvents, gamesURL, data.nextPage, cb);
        } else {
          // done loading all game events
          cb(gameEvents);
          return;
        }
      })
      .catch((err) => {
        console.error(err);
        $('#game-load-form .error-msg').removeClass('d-none');
        hideLoading();
      });
  };

  showLoading();

  return new Promise((resolve, reject) => {
    getPaginatedEvents({} , gamesURL, null, (gameEvents) => {
      hideLoading();
      resolve(gameEvents);
    });
  });

};

const showLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('.error-msg').addClass('d-none');
  $gameEvForm.find('button').addClass('d-none');
  $gameEvForm.find('.loading').removeClass('d-none');
};

const hideLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('button').removeClass('d-none');
  $gameEvForm.find('.loading').addClass('d-none');
};

const loadWithMlustard = (onLoad, gameId) => {
  const $gameEvForm = $('#game-load-form');
  const $gameInput = $('#game-load-form__game-id');

  // focus on game input
  $gameInput.focus();

  if (gameId) {
    $gameInput.attr('placeholder', gameId);
  } else {
    // pick a random interesting game as the placeholder for the input
    $gameInput.attr('placeholder', getRandomGame());
  }

  const getEvents = (gameId) => {
    getGameEvents(gameId)
      .then((gameEvents) => {
        console.debug('Game loaded with events:', gameEvents);
        onLoad(gameEvents);
      });
  };

  if (gameId) {
    getEvents(gameId);
  }

  $gameEvForm.on('submit', (ev) => {
    ev.preventDefault();

    if ($('.game-events__container').is(':visible')) {
      if (!window.confirm('Loading a new game will overwrite any unsaved changes you may have made to the previously loaded game.')) {
        return false;
      } else {
        history.pushState('', document.title, window.location.pathname);
      }
    }

    $('.game-events__container')
      .addClass('d-none')
      .find('.story-url')
      .addClass('d-none');
    $('.game-events__info').removeClass('d-none');

    let gameVal = $gameInput.val();

    if (!gameVal) {
      gameVal = $gameInput.attr('placeholder');
    }

    gameId = gameVal.split('/').pop();
    getEvents(gameId);

  });
};

module.exports = {
  loadWithMlustard,
};


},{"mlustard":12}],23:[function(require,module,exports){
const grandSlalami = require('grand-slalami');

class Highlight {
  constructor(settings) {
    settings = settings || {};

    this.id = settings.id;
    this.gameEvent = settings.gameEvent;
    this.mlustard = settings.mlustard;
    this.visual = settings.visual;
    this.visualMeta = settings.visualMeta;
    this.commentary = settings.commentary || this.generateCommentary();
  }

  generateCommentary() {
    // for earlversion: skip grand slalami, just return original lastUpdate +
    // scoreUpdate if present

    let ret = '';

    if (this.gameEvent.data.lastUpdate) {
      ret += this.gameEvent.data.lastUpdate;
    }

    if (this.gameEvent.data.scoreUpdate) {
      ret += `\n${this.gameEvent.data.scoreUpdate}`;
    }

    return ret;

    //return grandSlalami.getComment({
      //gameEvent: gameEvent.data,
      //mlustard: mlustard,
    //});
  }

  makeJSON() {
   return {
      blaseball_event_id: this.id,
      description: this.commentary,
      visual: {
        type: this.visual,
        meta: this.visualMeta,
      },
    };
  }

}

module.exports = Highlight;


},{"grand-slalami":5}],24:[function(require,module,exports){
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


},{"./game-event-selector":21,"./game-loader":22,"./story":25}],25:[function(require,module,exports){
const Visual = require('./visual');
const Dialog = require('./dialog');
const teamsData = require('../lib/teams-data');

class Story {
  constructor(settings) {
    this.highlights = settings.highlights || [];
    this.id = settings.id;
    this.curHighlight = 0;
    this.title = settings.title || this.generateTitle();
    this.dialog = new Dialog();
    this.visual = new Visual();
    this.setGameId();

    console.debug('new story with highlights', this.highlights);
  }

  generateTitle() {
    // Home-nickname vs. Away-nickname, Sn Dnnn
    const gameEv = this.highlights[0].gameEvent.data;
    const homeNick = gameEv.homeTeamNickname || '';
    const awayNick = gameEv.awayTeamNickname || '';
    const season = gameEv.season + 1;
    const day = gameEv.day + 1;

    return `${homeNick} vs. ${awayNick}, S${season} D${day}`;
  }

  setGameId() {
    this.gameId = this.highlights[0].gameEvent.gameId || '';
  }

  start(startFrom) {
    $('#visuals').removeClass('d-none');
    $('#highlights-dialog__container').removeClass('d-none');

    // focus on the body so arrow keyups can be registered
    $('body').focus();

    const _this = this;
    const handleAction = (evt) => {
      let direction;

      if (evt.type === 'keyup') {
        if (evt.keyCode === 37) { // arrow left
          evt.preventDefault();
          direction = 'prev';
        } else if (evt.keyCode === 39) {
          evt.preventDefault();
          direction = 'next';
        } else {
          return;
        }
      } else { // click
        if ($(evt.target).attr('id') === 'highlights-dialog__next') {
          direction = 'next';
        } else if ($(evt.target).attr('id') === 'highlights-dialog__prev') {
          direction = 'prev';
        }
      }

      _this.doStep(direction);
    }

    $(document).on('keyup.story', handleAction);
    $('.dialog-control').on('click.story', handleAction);

    // find the highlight to start from
    if (startFrom) {
      this.setCurrentTo(startFrom);
    }

    // show the current highlight
    this.startCurrent();
  }

  setCurrentTo(id) {
    while (id !== this.currentHighlight().id) {
      this.moveToNextHighlight();
    }
  }

  doStep(direction) {
    if (direction === 'next') {

      if (this.dialog.finished()) {
        this.moveToNextHighlight();
      } else {
        this.advanceDialog();
      }

    } else { // direction === 'prev'
      this.moveToPrevHighlight();
    }
  }

  moveToNextHighlight() {
    if (!this.hasNextHighlight()) {
      return;
    }

    this.curHighlight++;
    this.startCurrent();
  }

  moveToPrevHighlight() {
    if (!this.hasPrevHighlight()) {
      return;
    }

    this.curHighlight--;
    this.startCurrent();
  }

  advanceDialog() {
    this.dialog.advance();
    this.dialog.showControl(this.hasPrevHighlight(), this.hasNextHighlight());
  }

  hasPrevHighlight() {
    return this.curHighlight > 0;
  }

  hasNextHighlight() {
    return this.curHighlight < (this.highlights.length - 1);
  }

  currentHighlight() {
    return this.highlights[this.curHighlight];
  }

  startCurrent() {
    //const current = this.highlights[this.curHighlight];
    const current = this.currentHighlight();

    this.visual.showFor(current);
    this.dialog.startHighlight(current);
    this.dialog.showControl(this.hasPrevHighlight(), this.hasNextHighlight());
  }

  stop() {
    $('#visuals').addClass('d-none');
    $('#highlights-dialog__container').addClass('d-none');
    $(document).off('keyup.story');
    $('.dialog-control').off('click.story');
  }

  getUser() {
    return {
      user_id: window.localStorage.getItem('id'),
      user_token: window.localStorage.getItem('token'),
    };
  }

  setUser(id, token) {
    window.localStorage.setItem('id', id);
    window.localStorage.setItem('token', token);
  }

  makeJSON() {
    const ret = {
      story: {
        title: this.title,
        game_id: this.gameId,
      },
      events: [],
    };

    if (this.id) {
      ret.story.story_id = this.id;
    }

    const user = this.getUser();

    if (user.user_id) {
      ret.user = user;
    }

    for (let highlight of this.highlights) {
      ret.events.push(highlight.makeJSON());
    }

    return JSON.stringify(ret);
  }
}

module.exports = Story;


},{"../lib/teams-data":1,"./dialog":20,"./visual":27}],26:[function(require,module,exports){
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


},{}],27:[function(require,module,exports){
const util = require('./util');
const teamsData = require('../lib/teams-data');
const weather = require('../lib/weather');

const DIAMOND_COLOURS = {
  mound: 'ffcf56',
  moundOutline: '003049',
  bases: 'ff9770',
  basesOutline: '003049',
  grass: '2b9348',
  grassOutline: '2b9348',
  dirt: 'ffcf56',
  dirtOutline: 'fff',
  foulZone: 'edead0',
  foulZoneOutline: 'edead0',
};

class Visual {
  constructor() {
    this.gameID = '';
    this.homeTeam = '';
    this.awayTeam = '';

    this.initDiamond();
    this.initMatchup();
  }

  initDiamond() {
    const $diamond = $('#diamond');
    this.diamondLocations = {
      $mound: $diamond.find('.mound'),
      $batting: $diamond.find('.batting'),
      $first: $diamond.find('.first'),
      $second: $diamond.find('.second'),
      $third: $diamond.find('.third'),
    };

    this.BASES = ['first', 'second', 'third']; // todo: 'fourth', 'secret'?

    this.diamondReady = false;
  }

  initMatchup() {
    this.matchupReady = false;
  }

  setGameData(highlight) {
    this.gameID = highlight.gameEvent.gameId;
    this.homeTeam = highlight.gameEvent.data.homeTeam;
    this.awayTeam = highlight.gameEvent.data.awayTeam;

    // new game data, reset diamond and matchup
    this.diamondReady = false;
    this.matchupReady = false;
  }

  customizeDiamond(highlight) {
    // set the diamond colours and add the diamond css

    const homeTeamData = teamsData[this.homeTeam];
    const $diamond = $('#diamond-svg');
    const $grass = $diamond.find('.diamond-svg__grass');
    const $dirt = $diamond.find('.diamond-svg__dirt');
    const $foulZone = $diamond.find('.diamond-svg__foul-zone');
    const $mound = $diamond.find('.diamond-svg__mound');
    const $bases = $diamond.find('.diamond-svg__base');
    const $logo = $('.diamond-logo');

    // colour the mound
    // tries mound colour, or sets official as default
    $mound
      .attr('fill', `#${homeTeamData.colours.mound || homeTeamData.colours.official}`)
      .attr('stroke', `#${homeTeamData.colours.moundOutline || DIAMOND_COLOURS.moundOutline}`);

    // colour the bases
    // tries bases colour, or sets official as default
    $bases
      .attr('fill', `#${homeTeamData.colours.bases || homeTeamData.colours.official}`)
      .attr('stroke', `#${homeTeamData.colours.basesOutline || DIAMOND_COLOURS.basesOutline}`);

    // colour the grass
    $grass.first()
        .attr('fill', `#${homeTeamData.colours.grass || DIAMOND_COLOURS.grass}`)
        .attr('stroke', `#${homeTeamData.colours.grassOutline || DIAMOND_COLOURS.grassOutline}`);
      $grass.last()
        .attr('fill', `#${homeTeamData.colours.grass || DIAMOND_COLOURS.grass}`)
        .attr('stroke', `#${homeTeamData.colours.dirtOutline || DIAMOND_COLOURS.grassOutline}`);

    // colour the dirt
    $dirt
      .attr('fill', `#${homeTeamData.colours.dirt || DIAMOND_COLOURS.dirt}`)
      .attr('stroke', `#${homeTeamData.colours.dirtOutline || DIAMOND_COLOURS.dirtOutline}`);

    // colour the foul zone
    $foulZone
        .attr('fill', `#${homeTeamData.colours.foulZone || DIAMOND_COLOURS.foulZone}`)
        .attr('stroke', `#${homeTeamData.colours.foulZoneOutline || DIAMOND_COLOURS.foulZoneOutline}`);

    // update the diamond svg
    $('#diamond__image')
      .css('background-image', 'url(data:image/svg+xml;base64,'+ btoa($diamond.html()) + ')');

    // draw home logo behind home plate
    $logo
      .attr('src', homeTeamData.stadiumLogoURL || homeTeamData.homeLogoURL)
      .toggleClass('m-outline', homeTeamData.stadiumLogoOutline);

    // set the matchup text above the diamond
    $('.diamond-header .matchup')
      .text(`${highlight.gameEvent.data.homeTeamName} vs. ${highlight.gameEvent.data.awayTeamName}`);
    $('#diamond .game-name')
      .text(`Season ${highlight.gameEvent.data.season + 1}, Day ${highlight.gameEvent.data.day + 1}`);

    this.diamondReady = true;
  }

  customizeMatchup(highlight) {
    const gameEv = highlight.gameEvent.data;
    const $home = $('.vs-logo__home');
    const $away = $('.vs-logo__away');
    const homeTeamData = teamsData[this.homeTeam];
    const awayTeamData = teamsData[this.awayTeam];

    $('#matchup .game-name')
      .text(`Season ${gameEv.season + 1}, Day ${gameEv.day + 1}`);

    $home
      .attr('src', homeTeamData.homeLogoURL)
      .attr('alt', `${gameEv.homeTeamName}`);
    $away
      .attr('src', awayTeamData.awayLogoURL || awayTeamData.homeLogoURL)
      .attr('alt', `${gameEv.awayTeamName}`);

    if (homeTeamData.homeLogoCredit) {
      if (homeTeamData.homeLogoCreditURL) {
        $home
          .next('.vs-logo-citation')
          .empty()
          .text('by ')
          .append(
            $('<a>')
              .attr('href', homeTeamData.homeLogoCreditURL)
              .attr('target', '_blank')
              .text(`${homeTeamData.homeLogoCredit}`)
          );
      } else {
        $home
          .next('.vs-logo-citation')
          .text(`by ${homeTeamData.homeLogoCredit}`);
      }
    } else {
      $home
        .next('.vs-logo-citation')
        .text('Artist unknown.');
    }

    if (awayTeamData.homeLogoCredit) {
      if (awayTeamData.homeLogoCreditURL) {
        $away
          .next('.vs-logo-citation')
          .empty()
          .text('by ')
          .append(
            $('<a>')
              .attr('href', awayTeamData.homeLogoCreditURL)
              .attr('target', '_blank')
              .text(`${awayTeamData.homeLogoCredit}`)
          );
      } else {
        $away
          .next('.vs-logo-citation')
          .text(`by ${awayTeamData.homeLogoCredit}`);
      }
    } else {
      $away
        .next('.vs-logo-citation')
        .text('Artist unknown.');
    }

    this.matchupReady = true;
  }

  showFor(highlight) {

    // if game data hasn't been set, or if the game has changed,
    // update the game data
    if (this.gameID !== highlight.gameEvent.gameId) {
      this.setGameData(highlight);
    }

    this.hideCurrent();

    switch (highlight.visual) {
      case 'custom':
        this.showCustom(highlight);
        break;

      case 'matchup':
        this.showMatchup(highlight);
        break;

      case 'diamond':
      default:
        this.showDiamond(highlight);
        break;
    }
  }

  hideCurrent() {
    $('#custom').addClass('d-none');
    $('#matchup').addClass('d-none');
    $('#diamond').addClass('d-none');
  }

  showCustom(highlight) {
    const $custom = $('#custom');

    $custom
      .find('img')
      .attr('src', highlight.visualMeta.imageData)
      .attr('alt', highlight.visualMeta.imageDescription);

    if (highlight.visualMeta.creator) {
      if (highlight.visualMeta.creatorLink) {
        $custom
          .find('.custom__citation')
          .empty()
          .text('by ')
          .append(
            $('<a>')
              .attr('href', highlight.visualMeta.creatorLink)
              .attr('target', '_blank')
              .text(`${highlight.visualMeta.creator}`)
          );
      } else {
      $custom
        .find('.custom__citation')
        .text(`by ${highlight.visualMeta.creator}`)
      }
    } else {
      $custom
        .find('.custom__citation')
        .text('Artist unknown.')
    }
    $custom.removeClass('d-none');
  };

  showMatchup(highlight) {
    if (!this.matchupReady) {
      this.customizeMatchup(highlight);
    }

    $('#matchup').removeClass('d-none');
  }

  showDiamond(highlight) {
    this.updateDiamond(highlight);
    $('#diamond').removeClass('d-none');
  }

  updateDiamond(highlight) {
    if (!this.diamondReady) {
      this.customizeDiamond(highlight);
    }

    this.drawBatter(highlight);
    this.drawPitcher(highlight);
    this.drawBaserunners(highlight);
    this.drawScoreboard(highlight);
  }

  drawBatter(highlight) {
    const ge = highlight.gameEvent.data;

    const team = ge.topOfInning ? 'away' : 'home';
    let nameWithEmoji = '';

    if (ge[`${team}BatterName`]) {
      const name = util.getPlayerNameWithInitial(ge[`${team}BatterName`]);
      nameWithEmoji = `${util.getEmoji(team, ge)} ${name}`;
    }

    this.diamondLocations['$batting']
      .text(nameWithEmoji);
  }

  drawPitcher(highlight) {
    const ge = highlight.gameEvent.data;

    const team = ge.topOfInning ? 'home' : 'away';
    let nameWithEmoji = '';

    if (ge[`${team}PitcherName`]) {
      const name = util.getPlayerNameWithInitial(ge[`${team}PitcherName`]);
      nameWithEmoji = `${util.getEmoji(team, ge)} ${name}`;
    }

    this.diamondLocations['$mound']
      .text(nameWithEmoji);
  }

  drawBaserunners(highlight) {
    const ml = highlight.mlustard;
    const ge = highlight.gameEvent.data;

    const team = ge.topOfInning ? 'away' : 'home';

    if (ml && ml.baseRunners) {
      for (let base of this.BASES) {
        let name = ml.baseRunners[base].playerName;

        if (name) {
          let nameWithEmoji = `${util.getEmoji(team, ge)} ${util.getPlayerNameWithInitial(name)}`;
          this.diamondLocations[`$${base}`]
            .text(nameWithEmoji);
        } else {
          this.diamondLocations[`$${base}`]
            .text('');
        }
      }
    }
  }

  drawScoreboard(highlight) {
    const ml = highlight.mlustard;
    const ge = highlight.gameEvent.data;

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
  }

}

module.exports = Visual;


},{"../lib/teams-data":1,"../lib/weather":2,"./util":26}]},{},[24])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdGVhbXMtZGF0YS5qcyIsImxpYi93ZWF0aGVyLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvY29tbWVudGFyeS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL2dyYW1tYXIuanMiLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC9ncmFuZC1zbGFsYW1pLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvcXVpcHMuanNvbiIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL3RyYWNlcnktbW9kcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9iYXNlLXJ1bm5lcnMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvZ2FtZS1zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvaGl0cy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9taXNjLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL21sdXN0YXJkLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL291dHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvc3BlY2lhbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9zdGVhbHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC93YWxrcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9saWIvcGxheWVycy5qcyIsIm5vZGVfbW9kdWxlcy90cmFjZXJ5LWdyYW1tYXIvdHJhY2VyeS5qcyIsInNyYy9kaWFsb2cuanMiLCJzcmMvZ2FtZS1ldmVudC1zZWxlY3Rvci5qcyIsInNyYy9nYW1lLWxvYWRlci5qcyIsInNyYy9oaWdobGlnaHQuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9zdG9yeS5qcyIsInNyYy91dGlsLmpzIiwic3JjL3Zpc3VhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4cUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbmxIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcjJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6bUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZGF0YSA9IHtcbiAgLy8gaGVsbG1vdXRoIHN1bmJlYW1zXG4gICdmMDJhZWFlMi01ZTZhLTQwOTgtOTg0Mi0wMmQyMjczZjI1YzcnOiB7XG4gICAgc2hvcnRoYW5kOiAnSEVMTCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdmZmZiYWInLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzFkMTkzMicsXG4gICAgICBncmFzczogJ2U4Yzg3NycsXG4gICAgICBncmFzc091dGxpbmU6ICdlOGM4NzcnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzFkMTkzMicsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXN1bmJlYW1zLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdDb2JsaW4nLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9LcmFzaV9TYXZvdicsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBoYWRlcyB0aWdlcnNcbiAgJzc0N2I4ZTRhLTdlNTAtNDYzOC1hOTczLWVhNzk1MGEzZTczOSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdIQUQnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNWMxYzFjJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICdlODU2MzcnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZTg1NjM3JyxcbiAgICAgIGRpcnQ6ICdmYWE2MjMnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby10aWdlcnMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2pyZmJ6JyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vanJmYnonLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gc2VhdHRsZSBnYXJhZ2VzXG4gICcxMDViYzNmZi0xMzIwLTRlMzctOGVmMC04ZDU5NWNiOTVkZDAnOiB7XG4gICAgc2hvcnRoYW5kOiAnU0VBJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzJiNDA3NScsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcnLFxuICAgICAgZ3Jhc3M6ICdlYTJkMjknLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZWEyZDI5JyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzFkMWQxZCcsXG4gICAgICBkaXJ0OiAnZDhkOGRhJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMWQxZDFkJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZ2FyYWdlcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnemFuZHRlcmJpcmQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIG1leGljbyBjaXR5IHdpbGQgd2luZ3NcbiAgJzU3ZWMwOGNjLTA0MTEtNDY0My1iMzA0LTBlODBkYmMxNWFjNycgOiB7XG4gICAgc2hvcnRoYW5kOiAnQ0RNWCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdkMTU3MDAnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGdyYXNzOiAnNzMxZjAwJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzczMWYwMCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2UwZTBlMCcsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXdpbmdzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICd0aHIzM2gzYWQzZGRyYWcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS90aHIzM2gzYWQzZGRyYWcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBhdGxhbnRpcyBnZW9yZ2lhc1xuICAnZDlmODlhOGEtYzU2My00OTNlLTlkNjQtNzhlNGY5YTU1ZDRhJzoge1xuICAgIHNob3J0aGFuZDogJ0FUTFMnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnMDBkYmMyJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJzVjZmZlYycsXG4gICAgICBncmFzc091dGxpbmU6ICc1Y2ZmZWMnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnJyxcbiAgICAgIGRpcnQ6ICcnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1nZW9yZ2lhcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnYmx5cHRvbm9taWNhJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vYmx5cHRvbm9taWNhJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IHRydWUsXG4gIH0sXG5cbiAgLy8gY2hpY2FnbyBmaXJlZmlnaHRlcnNcbiAgJ2NhM2YxYzhjLWMwMjUtNGQ4ZS04ZWVmLTViZTZhY2NiZWIxNic6IHtcbiAgICBzaG9ydGhhbmQ6ICdDSEknLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnOGMyYTNlJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBncmFzczogJ2ZmOTYwYScsXG4gICAgICBncmFzc091dGxpbmU6ICdmZjk2MGEnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1maXJlZmlnaHRlcnMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ1dpcnNwcmluZ2VuIG9uIERpc2NvcmQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZmlyZWZpZ2h0ZXJzLXN0YWRpdW0ucG5nJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJ1dpcnNwcmluZ2VuIG9uIERpc2NvcmQnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIHRva3lvIGxpZnRcbiAgJ2M3M2I3MDVjLTQwYWQtNDYzMy1hNmVkLWQzNTdlZTJlMmJjZic6IHtcbiAgICBzaG9ydGhhbmQ6ICdUWU8nLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZTUzNmM4JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMGEyYScsXG4gICAgICBncmFzczogJzkwMTQ3YicsXG4gICAgICBncmFzc091dGxpbmU6ICc5MDE0N2InLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwYTJhJyxcbiAgICAgIGRpcnQ6ICdmYWYwZjknLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDBhMmEnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1saWZ0LnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdqcmZieicsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2pyZmJ6JyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGJyZWNrZW5yaWRnZSBqYXp6IGhhbmRzXG4gICdhMzdmOTE1OC03ZjgyLTQ2YmMtOTA4Yy1jOWUyZGRhN2MzM2InOiB7XG4gICAgc2hvcnRoYW5kOiAnQlJLJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzYzODhhZCcsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICc0ZTA4NGQnLFxuICAgICAgZ3Jhc3M6ICdmM2NhNDAnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZjNjYTQwJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzRlMDg0ZCcsXG4gICAgICBkaXJ0OiAnZjJhNTQxJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnNGUwOTRkJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28taGFuZHMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ1Nrb290bGVzIG9uIERpc2NvcmQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IHRydWUsXG4gIH0sXG5cbiAgLy8gbGEgdW5saW1pdGVkIHRhY29zXG4gICc4NzhjMWJmNi0wZDIxLTQ2NTktYmZlZS05MTZjODMxNGQ2OWMnOiB7XG4gICAgc2hvcnRoYW5kOiAnVEFDTycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc2NDM3NmUnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGdyYXNzOiAnZmFjZjMzJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2ZhY2YzMycsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJzI4Yzg3MicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXRhY29zLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICc0ZGFtQXZlbnVlJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vNGRhbUF2ZW51ZScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBtaWFtaSBkYWxlXG4gICdiNjNiZThjMi01NzZhLTRkNmUtOGRhZi04MTRmOGJjZWE5NmYnOiB7XG4gICAgc2hvcnRoYW5kOiAnTUlBJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2JmMDBmZicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwZTEyMTYnLFxuICAgICAgZ3Jhc3M6ICdmZWUwMjAnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZmVlMDIwJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzBlMTIxNicsXG4gICAgICBkaXJ0OiAnMzNmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMGUxMjE2JyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZGFsZS5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnNGRhbUF2ZW51ZScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tLzRkYW1BdmVudWUnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1kYWxlLXN0YWRpdW0ucG5nJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJ0JpbGx5R2FsYW50JyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vQmlsbHlHYWxhbnQnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBib3N0b24gZmxvd2Vyc1xuICAnM2Y4YmJiMTUtNjFjMC00ZTNmLThlNGEtOTA3YTVmYjE1NjVlJzoge1xuICAgIHNob3J0aGFuZDogJ0JPUycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdmN2QxZmYnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMzkzYTE3JyxcbiAgICAgIGdyYXNzOiAnOTc1NWE1JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzk3NTVhNScsXG4gICAgICBiYXNlczogJ2Y3ZDFmZicsXG4gICAgICBiYXNlc091dGxpbmU6ICczOTNhMTcnLFxuICAgICAgZGlydDogJ2Q3OTFlMycsXG4gICAgICBkaXJ0T3V0bGluZTogJzM5M2ExNycsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWZsb3dlcnMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ25pbSBvbiBEaXNjb3JkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIG9oaW8gd29ybXNcbiAgJ2JiNGE5ZGU1LWM5MjQtNDkyMy1hMGNiLTlkMTQ0NWYxZWU1ZCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdPSElPJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzVjNDgyMicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICdiYTljNjUnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnYmE5YzY1JyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZmFmYWZhJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIG5ldXRyYWw6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXdvcm1zLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdkYW4uZGlnaXRhbCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2RhbmRvdGRpZ2l0YWwnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBob3VzdG9uIHNwaWVzXG4gICc5ZGViYzY0Zi03NGI3LTRhZTEtYTRkNi1mY2UwMTQ0YjZlYTUnOiB7XG4gICAgc2hvcnRoYW5kOiAnSE9VJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzY3NTU2YicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICc5ZTgyYTQnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnOWU4MmE0JyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmFmYWZhJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tc3BpZXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ0RhbG1hdGlvbmVyJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBwaGlsbHkgcGllc1xuICAnMjNlNGNiYzEtZTljZC00N2ZhLWEzNWItYmZhMDZmNzI2Y2I3Jzoge1xuICAgIHNob3J0aGFuZDogJ1BITCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICczOTlkOGYnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGdyYXNzOiAnZmZjZDRjJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2ZmY2Q0YycsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXBpZXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ0xhZHlrbmlnaHR0aW1lIzg4MDYgb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gc2FuIGZyYWNpc2NvIGxvdmVyc1xuICAnYjcyZjMwNjEtZjU3My00MGQ3LTgzMmEtNWFkNDc1YmQ3OTA5Jzoge1xuICAgIHNob3J0aGFuZDogJ1NGJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2QyMjY0YScsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcnLFxuICAgICAgZ3Jhc3M6ICdmMTkzYjMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZjE5M2IzJyxcbiAgICAgIC8vYmFzZXM6ICc2YjE4NGQnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1sb3ZlcnMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ0x1Y2FjcmFmdHMnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9sdWNhY3JhZnRzJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGRhbGxhcyBzdGVha3NcbiAgJ2IwMjRlOTc1LTFjNGEtNDU3NS04OTM2LWEzNzU0YTA4ODA2YSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdEQUwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnOGM4ZDhmJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2M2YTc4YicsXG4gICAgICBncmFzc091dGxpbmU6ICdjNmE3OGInLFxuICAgICAgLy9ncmFzc091dGxpbmU6ICc4YzM2MmEnLFxuICAgICAgLy9iYXNlczogJzhjMzYyOCcsXG4gICAgICBiYXNlczogJ2IwMGUxYycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgLy9kaXJ0OiAnYzZhNzhiJyxcbiAgICAgIC8vZGlydDogJ2IwMGUxYycsXG4gICAgICBkaXJ0OiAnOGMzNjJhJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tc3RlYWtzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICc0ZGFtQXZlbnVlJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vNGRhbUF2ZW51ZScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBuZXcgeW9yayBtaWxsZW5uaWFsc1xuICAnMzY1NjkxNTEtYTJmYi00M2MxLTlkZjctMmRmNTEyNDI0YzgyJzoge1xuICAgIHNob3J0aGFuZDogJ05ZJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2Y4ZDZkNycsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcnLFxuICAgICAgZ3Jhc3M6ICc5OWNkZTMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnOTljZGUzJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWlsbGVubmlhbHMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ0BPcmlnYW1pQW5kcm9pZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL09yaWdhbWlBbmRyb2lkJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWlsbGVubmlhbHMtc3RhZGl1bS5wbmcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnQW5uYW5hJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBjb3JlIG1lY2hhbmljc1xuICAnNDYzNTg4NjktZGNlOS00YTAxLWJmYmEtYWMyNGZjNTZmNTdlJzoge1xuICAgIHNob3J0aGFuZDogJ0NPUkUnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZDEzMTAwJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJ2Y5YjE0YScsXG4gICAgICBncmFzc091dGxpbmU6ICdmOWIxNGEnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnJyxcbiAgICAgIGRpcnQ6ICdmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1tZWNoYW5pY3MucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ1p3ZWlIYXdrZScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL1p3ZWlIYXdrZScsXG4gICAgYXdheUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1lY2hhbmljcy1hd2F5LnBuZycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICdad2VpSGF3a2UnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ad2VpSGF3a2UnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1tZWNoYW5pY3Mtc3RhZGl1bS5wbmcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnQHdoYXRzc2hlY2FsbGVkJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vd2hhdHNzaGVjYWxsZWQnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8geWVsbG93c3RvbmUgbWFnaWNcbiAgJzc5NjZlYjA0LWVmY2MtNDk5Yi04ZjAzLWQxMzkxNjMzMDUzMSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdZRUxMJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2JmMDA0MycsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICdmY2IwNDAnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZmNiMDQwJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWFnaWMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ0x1Y2t5IFBlbm55IG9uIERpc2NvcmQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGhhd2FpJ2kgZnJpZGF5c1xuICAnOTc5YWVlNGEtNmQ4MC00ODYzLWJmMWMtZWUxYTc4ZTA2MDI0Jzoge1xuICAgIHNob3J0aGFuZDogJ0ZSSScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICczZWU2NTInLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnMTFhNmMyJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzExYTZjMicsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJ2U2NzU3NScsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWZyaWRheXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJycsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gY2FuYWRhIG1vaXN0IHRhbGtlcnNcbiAgJ2ViNjdhZTVlLWM0YmYtNDZjYS1iYmJjLTQyNWNkMzQxODJmZic6IHtcbiAgICBzaG9ydGhhbmQ6ICdDQU4nLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZTVmNGY1JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJzNiOTdkNCcsXG4gICAgICBncmFzc091dGxpbmU6ICczYjk3ZDQnLFxuICAgICAgYmFzZXM6ICdlZDFjMjQnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICcwMzU1OTcnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICdlNWY0ZjUnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnZTVmNGY1JyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby10YWxrZXJzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdRIFBlaWZmZXIsIEBsb25naGFpclEnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9sb25naGFpclEnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gY2hhcmxlc3RvbiBzaG9lIHRoaWV2ZXNcbiAgJ2JmZDM4Nzk3LTg0MDQtNGIzOC04YjgyLTM0MWRhMjhiMWY4Myc6IHtcbiAgICBzaG9ydGhhbmQ6ICdDSFMnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZmZjZTBhJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJzFlOTFjYycsXG4gICAgICBncmFzc091dGxpbmU6ICcxZTkxY2MnLFxuICAgICAgYmFzZXM6ICdmZmNlMGEnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmY2YyZDAnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby10aGlldmVzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdjaGRocnJtbm4nLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9jaGRocnJtbm4nLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8ga2Fuc2FzIGNpdHkgYnJlYXRoIG1pbnRzXG4gICdhZGM1YjM5NC04Zjc2LTQxNmQtOWNlOS04MTM3MDY4NzdiODQnOiB7XG4gICAgc2hvcnRoYW5kOiAnS0NCTScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICcxNzhmNTUnLFxuICAgICAgbW91bmQ6ICcwMDNmMWYnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnMTc4ZjU1JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzE3OGY1NScsXG4gICAgICBiYXNlczogJ2ZmMDAxMScsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1pbnRzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICduYXNoX2hpZ2gnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9uYXNoX2hpZ2gnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gYmFsdGltb3JlIGNyYWJzXG4gICc4ZDg3YzQ2OC02OTlhLTQ3YTgtYjQwZC1jZmI3M2E1NjYwYWQnOiB7XG4gICAgc2hvcnRoYW5kOiAnQkFMJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzU5MzAzNycsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICdmNzYzMGMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZjc2MzBjJyxcbiAgICAgIGJhc2VzOiAnNTkzMDM3JyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZjdiMTg5JyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tY3JhYnMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJzRhZGFtQXZlbnVlJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vNGRhbUF2ZW51ZScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGF0YTtcblxuIiwiY29uc3Qgd2VhdGhlciA9IHtcbiAgMDoge1xuICAgIG5hbWU6ICd2b2lkJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgMToge1xuICAgIG5hbWU6ICdzdW4gMicsXG4gICAgaWNvbjogJ+KYgCcsXG4gIH0sXG4gIDI6IHtcbiAgICBuYW1lOiAnb3ZlcmNhc3QnLFxuICAgIGljb246ICcnLFxuICB9LFxuICAzOiB7XG4gICAgbmFtZTogJ3JhaW55JyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNDoge1xuICAgIG5hbWU6ICdzYW5kc3Rvcm0nLFxuICAgIGljb246ICcnLFxuICB9LFxuICA1OiB7XG4gICAgbmFtZTogJ3Nub3d5JyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNjoge1xuICAgIG5hbWU6ICdhY2lkaWMnLFxuICAgIGljb246ICcnLFxuICB9LFxuICA3OiB7XG4gICAgbmFtZTogJ3NvbGFyIGVjbGlwc2UnLFxuICAgIGljb246ICfwn4yRJyxcbiAgfSxcbiAgODoge1xuICAgIG5hbWU6ICdnbGl0dGVyJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgOToge1xuICAgIG5hbWU6ICdibG9vZGRyYWluJyxcbiAgICBpY29uOiAn8J+puCcsXG4gIH0sXG4gIDEwOiB7XG4gICAgbmFtZTogJ3BlYW51dHMnLFxuICAgIGljb246ICfwn6WcJyxcbiAgfSxcbiAgMTE6IHtcbiAgICBuYW1lOiAnbG90cyBvZiBiaXJkcycsXG4gICAgaWNvbjogJ/CfkKYnLFxuICB9LFxuICAxMjoge1xuICAgIG5hbWU6ICdmZWVkYmFjaycsXG4gICAgaWNvbjogJ/CfjqQnLFxuICB9LFxuICAxMzoge1xuICAgIG5hbWU6ICdyZXZlcmInLFxuICAgIGljb246ICfwn4yKJyxcbiAgfSxcbiAgMTQ6IHtcbiAgICBuYW1lOiAnYmxhY2sgaG9sZScsXG4gICAgaWNvbjogJ+KaqycsXG4gIH0sXG4gIDE1OiB7XG4gICAgbmFtZTogJ2NvZmZlZScsXG4gICAgaWNvbjogJ+KYlScsXG4gIH0sXG4gIDE2OiB7XG4gICAgbmFtZTogJ2NvZmZlZSAyJyxcbiAgICBpY29uOiAn8J+NtScsXG4gIH0sXG4gIDE3OiB7XG4gICAgbmFtZTogJ2NvZmZlZSAzcycsXG4gICAgaWNvbjogJzPvuI/ig6MnLFxuICB9LFxuICAxODoge1xuICAgIG5hbWU6ICdmbG9vZGluZycsXG4gICAgaWNvbjogJ/CfmrAnLFxuICB9LFxuICAxOToge1xuICAgIG5hbWU6ICdzYWxtb24nLFxuICAgIGljb246ICfwn5CfJyxcbiAgfSxcbiAgMjA6IHtcbiAgICBuYW1lOiAnZ2xpdHRlcicsXG4gICAgaWNvbjogJ+KcqCcsXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdlYXRoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGJ1aWxkQ29tbWVudCA9IGZ1bmN0aW9uIGJ1aWxkQ29tbWVudChzZXR0aW5ncywgZ3JhbW1hcikge1xuICB2YXIgZ2FtZUV2ZW50ID0gc2V0dGluZ3MuZ2FtZUV2ZW50O1xuICB2YXIgbWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZDsgLy8gY2hlY2sgZm9yIGdhbWUgc3RhdHVzXG5cbiAgc3dpdGNoIChtbHVzdGFyZC5nYW1lU3RhdHVzKSB7XG4gICAgY2FzZSAnYmVmb3JlRmlyc3RQaXRjaCc6XG4gICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjZ2FtZVN0YXJ0IycpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdmaXJzdEhhbGZJbm5pbmdTdGFydCc6XG4gICAgICBpZiAoZ2FtZUV2ZW50LmlubmluZyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjaW5uaW5nT25lU3RhcnQjJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjaW5uaW5nU3RhcnQjJyk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnc2Vjb25kSGFsZklubmluZ1N0YXJ0JzpcbiAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdTdGFydCMnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGNvbW1lbnQgPSAnJzsgLy8gY2hlY2sgZm9yIG91dHNcblxuICBpZiAobWx1c3RhcmQub3V0KSB7XG4gICAgaWYgKG1sdXN0YXJkLmdhbWVTdGF0dXMgPT09ICdoYWxmSW5uaW5nRW5kJykge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNsYXN0T3V0T2ZJbm5pbmcjJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjb3V0IycpO1xuICAgIH1cbiAgfSAvLyBjaGVjayBmb3Igc2NvcmVcblxuXG4gIGlmIChtbHVzdGFyZC5ydW5zU2NvcmVkICE9PSAwIHx8IG1sdXN0YXJkLnVucnVuc1Njb3JlZCAhPT0gMCB8fCAvLyBzY29yZSBjaGFuZ2UgZHVlIHRvIHNhbG1vbiBzdGVhbGluZyBydW5zXG4gIG1sdXN0YXJkLnNwZWNpYWwgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEua2luZCA9PT0gJ3NhbG1vbicgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEuZGV0YWlscyAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5kZXRhaWxzLnJ1bnNTdG9sZW4ubGVuZ3RoIHx8IC8vIHNjb3JlIGNoYW5nZSBmcm9tIHN1biAyIHNtaWxpbmdcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnc3VuMicgfHwgLy8gc2NvcmUgY2hhbmdlIGZyb20gYmxhY2sgaG9sZSBzd2FsbG93aW5nXG4gIG1sdXN0YXJkLnNwZWNpYWwgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEua2luZCA9PT0gJ2JsYWNrSG9sZScpIHtcbiAgICBpZiAoY29tbWVudCkge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNzY29yZUFkZG9uIycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI3Njb3JlIycpO1xuICAgIH1cbiAgfSAvLyBjaGVjayBpZiBhIGJhdHRlciBqdXN0IHNob3dlZCB1cCBhdCB0aGUgcGxhdGVcblxuXG4gIGlmIChtbHVzdGFyZC5iYXR0ZXJVcCAmJiBnYW1lRXZlbnQuYmFzZXJ1bm5lckNvdW50KSB7XG4gICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNiYXR0ZXJVcFJ1bm5lcnMjJyk7XG4gIH0gLy8gcmV0dXJuIHRoZSBjb21tZW50IGlmIGl0IHdhcyBjcmVhdGVkLCBvdGhlcndpc2UgdGhlIG9yaWdpbmFsIHVwZGF0ZSBpZiBpdFxuICAvLyBleGlzdHMsIG90aGVyd2lzZSBhbiBlbXB0eSBzdHJpbmdcblxuXG4gIHJldHVybiBjb21tZW50IHx8IGdhbWVFdmVudC5sYXN0VXBkYXRlIHx8ICcnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJ1aWxkQ29tbWVudDogYnVpbGRDb21tZW50XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQ7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG52YXIgdHJhY2VyeSA9IHJlcXVpcmUoJ3RyYWNlcnktZ3JhbW1hcicpO1xuXG52YXIgbW9kcyA9IHJlcXVpcmUoJy4vdHJhY2VyeS1tb2RzJyk7XG5cbnZhciBxdWlwcyA9IHJlcXVpcmUoJy4vcXVpcHMuanNvbicpO1xuXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQoc2V0dGluZ3MpIHtcbiAgdmFyIHNlZWQgPSBzZXR0aW5ncy5zZWVkO1xuICB2YXIgZ2FtZUV2ZW50ID0gc2V0dGluZ3MuZ2FtZUV2ZW50O1xuICB2YXIgbWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZDtcbiAgdmFyIG92ZXJyaWRlcyA9IHNldHRpbmdzLm92ZXJyaWRlcztcbiAgdmFyIGxldmVsID0gc2V0dGluZ3MubGV2ZWw7XG5cbiAgaWYgKHNlZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIHRyYWNlcnkuc2V0UmFuZG9tKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZWVkO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGdyYW1tYXIgPSB0cmFjZXJ5LmNyZWF0ZUdyYW1tYXIoe30pOyAvLyBwb3B1bGF0ZSBkYXRhIGZyb20gZ2FtZUV2ZW50XG5cbiAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHF1aXBzLmRhdGEpLFxuICAgICAgX3N0ZXA7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgdmFyIF9maWVsZDMgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBkYXRhID0gZ2FtZUV2ZW50W19maWVsZDNdO1xuXG4gICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHNvbWUgZGF0YSBuZWVkcyBtYXNzYWdpbmdcbiAgICAgICAgc3dpdGNoIChfZmllbGQzKSB7XG4gICAgICAgICAgY2FzZSAnaW5uaW5nJzpcbiAgICAgICAgICAgIGRhdGEgPSAoZGF0YSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3RvcE9mSW5uaW5nJzpcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnaGFsZklubmluZ091dHMnOlxuICAgICAgICAgIGNhc2UgJ2hvbWVTY29yZSc6XG4gICAgICAgICAgY2FzZSAnYXdheVNjb3JlJzpcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZDMsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkMywgJycpO1xuICAgICAgfVxuICAgIH0gLy8gY3VycmVudCBwaXRjaGVyXG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IuZigpO1xuICB9XG5cbiAgdmFyIGNQaXRjaGVyID0gZ2FtZUV2ZW50LnRvcE9mSW5uaW5nID8gZ2FtZUV2ZW50LmhvbWVQaXRjaGVyTmFtZSA6IGdhbWVFdmVudC5hd2F5UGl0Y2hlck5hbWU7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdjUGl0Y2hlcicsIGNQaXRjaGVyKTsgLy8gY3VycmVudCBiYXR0ZXIgKGNhbiBiZSBhbiBlbXB0eSBzdHJpbmcgaWYgbm9ib2R5IGJhdHRpbmcpXG5cbiAgdmFyIGNCYXR0ZXIgPSBnYW1lRXZlbnQuaG9tZUJhdHRlck5hbWUgfHwgZ2FtZUV2ZW50LmF3YXlCYXR0ZXJOYW1lO1xuICBncmFtbWFyLnB1c2hSdWxlcygnY0JhdHRlcicsIGNCYXR0ZXIpOyAvLyBwaXRjaGluZyB0ZWFtIG5pY2tuYW1lXG5cbiAgdmFyIHBOaWNrID0gZ2FtZUV2ZW50LnRvcE9mSW5uaW5nID8gJyNoTmljayMnIDogJyNhTmljayMnO1xuICBncmFtbWFyLnB1c2hSdWxlcygncE5pY2snLCBwTmljayk7IC8vIGJhdHRpbmcgdGVhbSBuaWNrbmFtZVxuXG4gIHZhciBiTmljayA9IGdhbWVFdmVudC50b3BPZklubmluZyA/ICcjYU5pY2sjJyA6ICcjaE5pY2sjJztcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2JOaWNrJywgYk5pY2spOyAvLyBsZWFkaW5nICYgdHJhaWxpbmcgdGVhbSBuaWNrbmFtZXMgYW5kIHNjb3Jlc1xuXG4gIHZhciBsVGVhbTtcbiAgdmFyIHRUZWFtO1xuICB2YXIgbFNjb3JlO1xuICB2YXIgdFNjb3JlO1xuXG4gIGlmIChnYW1lRXZlbnQuYXdheVNjb3JlID4gZ2FtZUV2ZW50LmhvbWVTY29yZSkge1xuICAgIGxUZWFtID0gJyNhTmljayMnO1xuICAgIHRUZWFtID0gJyNoTmljayMnO1xuICAgIGxTY29yZSA9ICcjYVNjb3JlIyc7XG4gICAgdFNjb3JlID0gJyNoU2NvcmUjJztcbiAgfSBlbHNlIHtcbiAgICBsVGVhbSA9ICcjaE5pY2sjJztcbiAgICB0VGVhbSA9ICcjYU5pY2sjJztcbiAgICBsU2NvcmUgPSAnI2hTY29yZSMnO1xuICAgIHRTY29yZSA9ICcjYVNjb3JlIyc7XG4gIH1cblxuICBncmFtbWFyLnB1c2hSdWxlcygnbFRlYW0nLCBsVGVhbSk7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCd0VGVhbScsIHRUZWFtKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2xTY29yZScsIGxTY29yZSk7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCd0U2NvcmUnLCB0U2NvcmUpOyAvLyBzZXQgYmFzZSBydW5uZXJzXG5cbiAgaWYgKGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQgPj0gMykge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKCdydW5uZXJzJywgJyNiYXNlc0xvYWRlZCMnKTtcbiAgfSBlbHNlIGlmIChnYW1lRXZlbnQuYmFzZXJ1bm5lckNvdW50ID4gMCkge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKCdydW5uZXJzJywgJyNydW5uZXJzT25CYXNlIycpO1xuICB9XG5cbiAgdmFyIGJhc2VzID0gJyc7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyhtbHVzdGFyZC5iYXNlUnVubmVycyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBiYXNlID0gX09iamVjdCRrZXlzW19pXTtcblxuICAgIGlmIChtbHVzdGFyZC5iYXNlUnVubmVyc1tiYXNlXS5wbGF5ZXJJZCkge1xuICAgICAgYmFzZXMgKz0gXCJcIi5jb25jYXQoYmFzZSwgXCIgXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdiYXNlc09jYycsIGJhc2VzLnRyaW0oKSk7IC8vIGJ1aWxkIHF1aXBzIHNob3J0Y3V0c1xuXG4gIGZvciAodmFyIGZpZWxkIGluIHF1aXBzLnNob3J0Y3V0cykge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKGZpZWxkLCBxdWlwcy5zaG9ydGN1dHNbZmllbGRdKTtcbiAgfSAvLyBidWlsZCBxdWlwcyBncmFtbWFyXG5cblxuICBmb3IgKHZhciBfZmllbGQgaW4gcXVpcHNbbGV2ZWxdKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkLCBxdWlwc1tsZXZlbF1bX2ZpZWxkXSk7XG4gIH0gLy8gZG8gcXVpcCBvdmVycmlkZXNcblxuXG4gIGZvciAodmFyIF9maWVsZDIgaW4gb3ZlcnJpZGVzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkMiwgb3ZlcnJpZGVzW19maWVsZDJdKTtcbiAgfSAvLyBhZGQgbW9kc1xuXG5cbiAgZ3JhbW1hci5hZGRNb2RpZmllcnModHJhY2VyeS5iYXNlRW5nTW9kaWZpZXJzKTtcbiAgZ3JhbW1hci5hZGRNb2RpZmllcnMobW9kcyk7XG4gIHJldHVybiBncmFtbWFyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQ6IGluaXRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtbHVzdGFyZCA9IHJlcXVpcmUoJ21sdXN0YXJkJyk7XG5cbnZhciBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyk7XG5cbnZhciBjb21tZW50YXJ5ID0gcmVxdWlyZSgnLi9jb21tZW50YXJ5Jyk7XG4vKlxuICogQHNldHRpbmdzIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gKiAgIC0gZ2FtZUV2ZW50OiB0aGUgZ2FtZSBldmVudCBvYmplY3QgKGZyb20gdGhlIHN0cmVhbSBvciBjaHJvbmljbGVyKVxuICogICAtIG1sdXN0YXJkIChvcHRpb25hbCk6IG1sdXN0YXJkIGRhdGEgZm9yIHRoZSBnYW1lRXZlbnRcbiAqICAgLSBzZWVkIChvcHRpb25hbCk6IGEgc2VlZCwgZm9yIGRldGVybWluaXN0aWMgY29tbWVudCBnZW5lcmF0aW9uXG4gKiAgIC0gbGV2ZWwgKG9wdGlvbmFsLCBkZWZhdWx0cyB0byAnbWluaW1hbCcpOiB0aGUgY29tbWVudGFyeSBsZXZlbCwgb25lIG9mXG4gKiAgICAgLSBtaW5pbWFsOiBhZGRzIGEgZmV3IGNvbW1lbnRzIHRvIHVwZGF0ZSBvbiBnYW1lIHN0YXR1cyBhdCBrZXkgY29tbWVudHNcbiAqICAgLSBvdmVycmlkZXMgKG9wdGlvbmFsKTogb2JqZWN0IHdpdGggcXVpcCBvdmVycmlkZXNcbiAqL1xuXG5cbnZhciBnZXRDb21tZW50ID0gZnVuY3Rpb24gZ2V0Q29tbWVudChzZXR0aW5ncykge1xuICBpZiAoIXNldHRpbmdzLmdhbWVFdmVudCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHNldHRpbmdzLm1sdXN0YXJkID0gc2V0dGluZ3MubWx1c3RhcmQgfHwgbWx1c3RhcmQuYW5hbHl6ZUdhbWVFdmVudChzZXR0aW5ncy5nYW1lRXZlbnQpO1xuICBzZXR0aW5ncy5sZXZlbCA9IHNldHRpbmdzLmxldmVsIHx8ICdtaW5pbWFsJztcbiAgc2V0dGluZ3Mub3ZlcnJpZGVzID0gc2V0dGluZ3Mub3ZlcnJpZGVzIHx8IHt9O1xuICB2YXIgZ3IgPSBncmFtbWFyLmluaXQoc2V0dGluZ3MpO1xuXG4gIGlmICghZ3IpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gY29tbWVudGFyeS5idWlsZENvbW1lbnQoc2V0dGluZ3MsIGdyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb21tZW50OiBnZXRDb21tZW50XG59OyIsIm1vZHVsZS5leHBvcnRzPXtcImRhdGFcIjpbXCJpbm5pbmdcIixcInRvcE9mSW5uaW5nXCIsXCJoYWxmSW5uaW5nT3V0c1wiLFwiaG9tZVRlYW1OYW1lXCIsXCJhd2F5VGVhbU5hbWVcIixcImhvbWVUZWFtTmlja25hbWVcIixcImF3YXlUZWFtTmlja25hbWVcIixcImhvbWVTY29yZVwiLFwiYXdheVNjb3JlXCIsXCJob21lT2Rkc1wiLFwiYXdheU9kZHNcIixcImhvbWVQaXRjaGVyTmFtZVwiLFwiYXdheVBpdGNoZXJOYW1lXCIsXCJsYXN0VXBkYXRlXCIsXCJzY29yZVVwZGF0ZVwiXSxcIm1pbmltYWxcIjp7XCJtYXRjaHVwXCI6W1wiI2hOaWNrIyB2cyAjYU5pY2sjXCIsXCIjYU5pY2sjIGF0ICNoTmljayNcIl0sXCJ0b3BPckJvdFwiOlwiI3RvcE9mSW5uaW5nI1wiLFwiaW5uaW5nRnVsbFwiOlwiI3RvcE9yQm90IyBvZiAjaW5uaW5nI1wiLFwiZ2FtZVN0YXJ0XCI6XCIjbWF0Y2h1cCMuICNwaXRjaGVycyMuICNvcmlnaW5hbCNcIixcInNjb3JlXCI6XCIjb3JpZ2luYWwjIEl0J3MgI2xUZWFtLnRoZSMgI2xTY29yZSMgYW5kICN0VGVhbS50aGUjICN0U2NvcmUjLlwiLFwic2NvcmVBZGRvblwiOlwiIEl0J3MgI2xUZWFtLnRoZSMgI2xTY29yZSMgYW5kICN0VGVhbS50aGUjICN0U2NvcmUjLlwiLFwiaW5uaW5nU3RhcnRcIjpcIiNvcmlnaW5hbCMgI2NQaXRjaGVyIyBwaXRjaGluZyBmb3IgI3BOaWNrLnRoZSMuXCIsXCJpbm5pbmdPbmVTdGFydFwiOlwiI29yaWdpbmFsI1wiLFwicGl0Y2hlcnNcIjpbXCIjaFBpdGNoZXIjIHBpdGNoaW5nIGZvciAjaE5pY2sudGhlIywgI2FQaXRjaGVyIyBmb3IgI2FOaWNrLnRoZSNcIixcIk91ciBwaXRjaGVycyBhcmUgI2hQaXRjaGVyIyBmb3IgI2hOaWNrLnRoZSMsIGFuZCAjYVBpdGNoZXIjIGZvciAjYU5pY2sudGhlI1wiXSxcIm91dFwiOlwiI29yaWdpbmFsIyAjaW5uaW5nRnVsbC5jYXBpdGFsaXplIywgI291dHMjLlwiLFwib3V0c1wiOlwiI2hhbGZJbm5pbmdPdXRzLm91dHMjXCIsXCJsYXN0T3V0T2ZJbm5pbmdcIjpcIiNvcmlnaW5hbCNcIixcImJhdHRlclVwUnVubmVyc1wiOlwiI29yaWdpbmFsIyAjcnVubmVycy5ydW5uZXJQbHVyYWxpemUjXCIsXCJydW5uZXJzT25CYXNlXCI6XCJSdW5uZXIgb24gI2Jhc2VzT2NjLmFuZCMuXCIsXCJiYXNlc0xvYWRlZFwiOlwiQmFzZXMgYXJlIGxvYWRlZCFcIn0sXCJzaG9ydGN1dHNcIjp7XCJoUGl0Y2hlclwiOlwiI2hvbWVQaXRjaGVyTmFtZSNcIixcImFQaXRjaGVyXCI6XCIjYXdheVBpdGNoZXJOYW1lI1wiLFwiaE5pY2tcIjpcIiNob21lVGVhbU5pY2tuYW1lI1wiLFwiYU5pY2tcIjpcIiNhd2F5VGVhbU5pY2tuYW1lI1wiLFwiaFNjb3JlXCI6XCIjaG9tZVNjb3JlI1wiLFwiYVNjb3JlXCI6XCIjYXdheVNjb3JlI1wiLFwib3JpZ2luYWxcIjpcIiNsYXN0VXBkYXRlIyNzY29yZVVwZGF0ZS5zcGFjZWQjXCJ9fSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGhlOiBmdW5jdGlvbiB0aGUocykge1xuICAgIHJldHVybiBcInRoZSBcIi5jb25jYXQocyk7XG4gIH0sXG4gIC8vIGNvdW50cyB0aGUgIyBvZiBvdXRzIGFuZCBwbHVyYWxpemVzIGFjY29yZGluZ2x5XG4gIG91dHM6IGZ1bmN0aW9uIG91dHMocykge1xuICAgIGlmIChzID09PSAnMScpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzLCBcIiBvdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzLCBcIiBvdXRzXCIpO1xuICAgIH1cbiAgfSxcbiAgLy8gb3hmb3JkIGNvbW1hc1xuICBhbmQ6IGZ1bmN0aW9uIGFuZChzKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoJyAnKS5qb2luKCcsICcpLnJlcGxhY2UoLywgKFteLF0qKSQvLCAnIGFuZCAkMScpO1xuICB9LFxuICAvLyBmb3IgcGx1cmFsaXppbmcgcnVubmVyKHMpIG9uIGZpcnN0Wywgc2Vjb25kIGFuZCB0aGlyZF1cbiAgcnVubmVyUGx1cmFsaXplOiBmdW5jdGlvbiBydW5uZXJQbHVyYWxpemUocykge1xuICAgIGlmIChzLmluZGV4T2YoJywnKSA+PSAwIHx8IHMuaW5kZXhPZignYW5kJykgPj0gMCkge1xuICAgICAgcmV0dXJuIHMucmVwbGFjZSgnUnVubmVyJywgJ1J1bm5lcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9LFxuICAvLyBhZGRzIGEgc3BhY2UgYmVmb3JlIHRoZSB3b3JkXG4gIHNwYWNlZDogZnVuY3Rpb24gc3BhY2VkKHMpIHtcbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIFwiIFwiLmNvbmNhdChzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLy9jb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgcGxheWVycyA9IHJlcXVpcmUoJy4uL2xpYi9wbGF5ZXJzJykucGxheWVycztcblxudmFyIEJBU0VTID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJ107XG5cbnZhciBnZXRCYXNlcnVubmVyTmFtZSA9IGZ1bmN0aW9uIGdldEJhc2VydW5uZXJOYW1lKGV2ZW50RGF0YSwgaSkge1xuICB2YXIgX2V2ZW50RGF0YSRiYXNlUnVubmVyO1xuXG4gIHZhciBuYW1lID0gKChfZXZlbnREYXRhJGJhc2VSdW5uZXIgPSBldmVudERhdGEuYmFzZVJ1bm5lck5hbWVzKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGJhc2VSdW5uZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkYmFzZVJ1bm5lcltpXSkgfHwgJyc7IC8vIHRyeSBsb29raW5nIHRoZSBuYW1lIHVwIGJ5IHRoZSBpZFxuXG4gIGlmICghbmFtZSkge1xuICAgIHZhciBwbGF5ZXIgPSBwbGF5ZXJzLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHAucGxheWVyX2lkID09PSBldmVudERhdGEuYmFzZVJ1bm5lcnNbaV07XG4gICAgfSlbMF07XG5cbiAgICBpZiAocGxheWVyKSB7XG4gICAgICBuYW1lID0gcGxheWVyLnBsYXllcl9uYW1lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lO1xufTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICAvL2NvbnN0IHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuICBpZiAoZXZlbnREYXRhLmJhc2VydW5uZXJDb3VudCkge1xuICAgIC8vIGkgcmVwcmVzZW50cyB0aGUgb3JkZXIgb2YgYmFzZXJ1bm5lcnNcbiAgICAvLyBiYXNlc09jY3VwaWVkW2ldIGlzIHRoZSBiYXNlIHRoZXkgYXJlIG9uLCAwLWluZGV4ZWRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50RGF0YS5iYXNlc09jY3VwaWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYmFzZSA9IGV2ZW50RGF0YS5iYXNlc09jY3VwaWVkW2ldO1xuICAgICAgYW5hbHlzaXMuYmFzZVJ1bm5lcnNbQkFTRVNbYmFzZV1dID0ge1xuICAgICAgICBwbGF5ZXJOYW1lOiBnZXRCYXNlcnVubmVyTmFtZShldmVudERhdGEsIGkpLFxuICAgICAgICBwbGF5ZXJJZDogZXZlbnREYXRhLmJhc2VSdW5uZXJzW2ldXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgX2V2ZW50RGF0YSRob21lVGVhbU5pLCBfZXZlbnREYXRhJGF3YXlUZWFtTmk7XG5cbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuICB2YXIgaG9tZSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRob21lVGVhbU5pID0gZXZlbnREYXRhLmhvbWVUZWFtTmlja25hbWUpID09PSBudWxsIHx8IF9ldmVudERhdGEkaG9tZVRlYW1OaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRob21lVGVhbU5pLnRvTG93ZXJDYXNlKCkpIHx8ICcnO1xuICB2YXIgaG9tZVNjb3JlID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lU2NvcmUpIHx8IDA7XG4gIHZhciBhd2F5ID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGF3YXlUZWFtTmkgPSBldmVudERhdGEuYXdheVRlYW1OaWNrbmFtZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRhd2F5VGVhbU5pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGF3YXlUZWFtTmkudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG4gIHZhciBhd2F5U2NvcmUgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlTY29yZSkgfHwgMDtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3BsYXkgYmFsbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2JlZm9yZUZpcnN0UGl0Y2gnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCd0b3Agb2YnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdmaXJzdEhhbGZJbm5pbmdTdGFydCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2JvdHRvbSBvZicpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ3NlY29uZEhhbGZJbm5pbmdTdGFydCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dhbWUgb3ZlcicpID49IDAgfHwgdXBkYXRlLmluZGV4T2YoXCJcIi5jb25jYXQoaG9tZSwgXCIgXCIpLmNvbmNhdChob21lU2NvcmUsIFwiLCBcIikuY29uY2F0KGF3YXksIFwiIFwiKS5jb25jYXQoYXdheVNjb3JlKSkgPj0gMCB8fCB1cGRhdGUuaW5kZXhPZihcIlwiLmNvbmNhdChhd2F5LCBcIiBcIikuY29uY2F0KGF3YXlTY29yZSwgXCIsIFwiKS5jb25jYXQoaG9tZSwgXCIgXCIpLmNvbmNhdChob21lU2NvcmUpKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdnYW1lRW5kJztcbiAgfVxuXG4gIGlmIChhbmFseXNpcy5nYW1lU3RhdHVzKSB7XG4gICAgcmV0dXJuIGFuYWx5c2lzO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrSGl0UmJpUHJlUzEyID0gZnVuY3Rpb24gY2hlY2tIaXRSYmlQcmVTMTIoYW5hbHlzaXMsIHVwZGF0ZSkge1xuICAvLyBmcm9tIHNvbWUgbm9uLWV4aGF1c3RpdmUgcmVzZWFyY2gsIGkgdGhpbmsgdGhlcmUgd2VyZW4ndCBhbnkgZ3JhbmQgc2xhbXNcbiAgLy8gcHJlLXMxMiB0aGF0IHdlcmUgbm90IDQgcnVuc1xuICBpZiAoYW5hbHlzaXMuaGl0TWV0YS5raW5kID09PSAnZ3JhbmRTbGFtJykge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSA0O1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiBhIHNpbmdsZS9kb3VibGUvdHJpcGxlIHdhcyBoaXQgJiB4IHJ1bnMgd2VyZSBzY29yZWQsIGl0IHNob3dzIHVwXG4gIC8vIGF0IHRoZSBlbmQgb2YgdGhlIHVwZGF0ZSBhcyBcIi4uLiEgeCBzY29yZXNcIlxuXG5cbiAgdmFyIHJ1bnMgPSB1dGlsLmdldE51bWJlcih1cGRhdGUsIC8hIC8sIC8gc2NvcmVzLykgfHwgMDtcblxuICBpZiAocnVucykge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSBydW5zO1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiBhIHNvbG8gaG9tZSBydW4gd2FzIGhpdCwgdXBkYXRlIGNvbnRhaW5zIHRoZSB0ZXh0IFwic29sbyBob21lIHJ1blwiXG5cblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3NvbG8gaG9tZSBydW4nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgbXVsdGktcnVuIGhvbWUgcnVuIHdhcyBoaXQsIHVwZGF0ZSBjb250YWlucyB0aGUgdGV4dCBcIngtcnVuIGhvbWVcbiAgLy8gcnVuXCJcblxuXG4gIHJ1bnMgPSB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8tcnVuIGhvbWUgcnVuLykgfHwgMDtcblxuICBpZiAocnVucykge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSBydW5zO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdoaXRzIGEgc2luZ2xlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdzaW5nbGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdoaXRzIGEgZG91YmxlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdkb3VibGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdoaXRzIGEgdHJpcGxlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICd0cmlwbGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdob21lIHJ1bicpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnaG9tZVJ1bic7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dyYW5kIHNsYW0nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ2dyYW5kU2xhbSc7XG4gIH1cblxuICBpZiAoYW5hbHlzaXMuaGl0TWV0YS5raW5kKSB7XG4gICAgYW5hbHlzaXMuaGl0ID0gdHJ1ZTsgLy8gY2hlY2sgaWYgaG9tZSBydW4gLyBncmFuZCBzbGFtIGxhbmRlZCBpbiBiaWcgYnVja2V0XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2JhbGwgbGFuZHMgaW4gYSBiaWcgYnVja2V0JykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuaGl0TWV0YS5iaWdCdWNrZXQgPSB0cnVlO1xuICAgIH0gLy9mcm9tIHMxMiBvbndhcmQsIHNjb3JlcyBvbiB0aGUgcGxheSBhcmUgaW4gdGhlIHNjb3JlVXBkYXRlIGZpZWxkXG4gICAgLy9jb25zdCBzY29yZVVwZGF0ZSA9IGV2ZW50RGF0YT8uc2NvcmVVcGRhdGUgfHwgJyc7XG4gICAgLy9pZiAoc2NvcmVVcGRhdGUpIHtcbiAgICAvL2FuYWx5c2lzLnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcihzY29yZVVwZGF0ZSwgbnVsbCwgbnVsbCkgfHwgMDtcbiAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3JlVXBkYXRlLCBkZWR1Y2UgdGhlIHNjb3JlIGZyb20gdGhlIHVwZGF0ZVxuICAgIC8vIHRoaXMgaXMgdGhlIGNhc2UgZm9yIGdhbWVzIGJldHdlZW4gczIgJiBzMTFcblxuXG4gICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkpIHtcbiAgICAgIGNoZWNrSGl0UmJpUHJlUzEyKGFuYWx5c2lzLCB1cGRhdGUpO1xuICAgIH0gLy8gc2NvcmUgdXBkYXRlcyBmcm9tIHMxMiBvbndhcmQgcmVnaXN0ZXJlZCBpbiBzcmMvbWlzYy5qc1xuXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVja01heGltdW1CbGFzZWJhbGwgPSBmdW5jdGlvbiBjaGVja01heGltdW1CbGFzZWJhbGwoYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgYmFsbHMsIGJhc2VzLCBvdXRzLCBzdHJpa2VzO1xuXG4gIGlmIChldmVudERhdGEudG9wT2ZJbm5pbmcpIHtcbiAgICAvLyBhd2F5IGlzIGJhdHRpbmdcbiAgICBiYWxscyA9IGV2ZW50RGF0YS5hd2F5QmFsbHM7XG4gICAgYmFzZXMgPSBldmVudERhdGEuYXdheUJhc2VzO1xuICAgIG91dHMgPSBldmVudERhdGEuYXdheU91dHM7XG4gICAgc3RyaWtlcyA9IGV2ZW50RGF0YS5hd2F5U3RyaWtlcztcbiAgfSBlbHNlIHtcbiAgICAvLyBob21lIGlzIGJhdHRpbmdcbiAgICBiYWxscyA9IGV2ZW50RGF0YS5ob21lQmFsbHM7XG4gICAgYmFzZXMgPSBldmVudERhdGEuaG9tZUJhc2VzO1xuICAgIG91dHMgPSBldmVudERhdGEuaG9tZU91dHM7XG4gICAgc3RyaWtlcyA9IGV2ZW50RGF0YS5ob21lU3RyaWtlcztcbiAgfVxuXG4gIGlmIChldmVudERhdGEuaGFsZklubmluZ091dHMgPT09IG91dHMgLSAxICYmIGV2ZW50RGF0YS5hdEJhdEJhbGxzID09PSBiYWxscyAtIDEgJiYgZXZlbnREYXRhLmF0QmF0U3RyaWtlcyA9PT0gc3RyaWtlcyAtIDEgJiYgZXZlbnREYXRhLmJhc2VydW5uZXJDb3VudCA9PT0gYmFzZXMgLSAxKSB7XG4gICAgYW5hbHlzaXMubWF4aW11bUJsYXNlYmFsbCA9IHRydWU7XG4gIH1cbn07XG5cbnZhciBjaGVja1Njb3JlVXBkYXRlID0gZnVuY3Rpb24gY2hlY2tTY29yZVVwZGF0ZShhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBfZXZlbnREYXRhJHNjb3JlVXBkYXQ7XG5cbiAgdmFyIHNjb3JlVXBkYXRlID0gZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkc2NvcmVVcGRhdCA9IGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRzY29yZVVwZGF0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJHNjb3JlVXBkYXQudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoc2NvcmVVcGRhdGUpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIoc2NvcmVVcGRhdGUsIG51bGwsIC8gcnVucz8gc2NvcmUvKTtcbiAgICBhbmFseXNpcy51bnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcihzY29yZVVwZGF0ZSwgbnVsbCwgLyB1bnJ1bnM/IHNjb3JlLyk7XG4gIH1cbn07XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuICBjaGVja1Njb3JlVXBkYXRlKGFuYWx5c2lzLCBldmVudERhdGEpO1xuICBjaGVja01heGltdW1CbGFzZWJhbGwoYW5hbHlzaXMsIGV2ZW50RGF0YSk7IC8vIGNoZWNrIGZvciB3aGV0aGVyIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIHRvIGJhdFxuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignYmF0dGluZyBmb3InKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuYmF0dGVyVXAgPSB0cnVlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2FtZVN0YXR1cyA9IHJlcXVpcmUoJy4vZ2FtZS1zdGF0dXMnKTtcblxudmFyIG91dHMgPSByZXF1aXJlKCcuL291dHMnKTtcblxudmFyIGhpdHMgPSByZXF1aXJlKCcuL2hpdHMnKTtcblxudmFyIHN0ZWFscyA9IHJlcXVpcmUoJy4vc3RlYWxzJyk7XG5cbnZhciB3YWxrcyA9IHJlcXVpcmUoJy4vd2Fsa3MnKTtcblxudmFyIHNwZWNpYWwgPSByZXF1aXJlKCcuL3NwZWNpYWwnKTtcblxudmFyIG1pc2MgPSByZXF1aXJlKCcuL21pc2MnKTtcblxudmFyIGJhc2VSdW5uZXJzID0gcmVxdWlyZSgnLi9iYXNlLXJ1bm5lcnMnKTtcbi8qXG4gKiBzZXRzIGFsbCBrbm93biAoYWthIGltcGxlbWVudGVkKSBhbmFseXNpcyByZXN1bHRzIHRvIHRoZWlyIGRlZmF1bHNcbiAqIHJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvcHM6XG4gKlxuICogaWQ6IHN0cmluZyB8fCB1bmRlZmluZWRcbiAqICAgLSB0aGUgZ2FtZSBldmVudCBJRFxuICpcbiAqIHJ1bnNTY29yZWQ6IG51bWJlclxuICogICAtIGhvdyBtYW55IHJ1bnMgd2VyZSBzY29yZWQgb24gdGhlIHBsYXlcbiAqXG4gKiB1bnJ1bnNTY29yZWQ6IG51bWJlclxuICogICAtIGhvdyBtYW55IHVucnVucyB3ZXJlIHNjb3JlZCBvbiB0aGUgcGxheVxuICpcbiAqIGJhdHRlclVwOiBib29sZWFuXG4gKiAgIC0gd2hldGhlciBhIGJhdHRlciBqdXN0IHNob3dlZCB1cCB0byBiYXRcbiAqXG4gKiBnYW1lU3RhdHVzOiBudWxsIHx8IHN0cmluZ1xuICogICAtIHdpbGwgYmUgbnVsbCBvciBvbmUgb2Y6XG4gKiAgIC0gYmVmb3JlRmlyc3RQaXRjaCwgd2hlbiB0aGUgZmlyc3QgcGl0Y2ggaGFzbid0IGJlZW4gdGhyb3duIHlldFxuICogICAtIGZpcnN0SGFsZklubmluZ1N0YXJ0LCB3aGVuIHRoZSBmaXJzdCBoYWxmIG9mIGFuIGlubmluZyBpcyBzdGFydGluZ1xuICogICAtIHNlY29uZEhhbGZJbm5pbmdTdGFydCwgd2hlbiB0aGUgc2Vjb25kIGhhbGYgb2YgYW4gaW5uaW5nIGlzIHN0YXJ0aW5nXG4gKiAgIC0gaGFsZklubmluZ0VuZCwgd2hlbiBhbnkgaGFsZiBvZiBhbiBpbm5pbmcgaXMgZW5kaW5nIG9uIHRoZSBwbGF5XG4gKiAgIC0gZ2FtZUVuZCwgd2hlbiB0aGUgZ2FtZSBoYXMgZW5kZWRcbiAqICAgLSBpbm5pbmdSZXdpbmQsIHdoZW4gdGhlIHNhbG1vbiBzd2ltIHVwc3RyZWFtXG4gKlxuICogb3V0OiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGFuIG91dCBvbiB0aGUgcGxheVxuICogb3V0TWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBraW5kOiBudWxsIHx8IHN0cmluZ1xuICogICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgLSBmbHlcbiAqICAgICAtIGdyb3VuZFxuICogICAgIC0gc3RyaWtlXG4gKiAgICAgLSBjYXVnaHRTdGVhbGluZ1xuICogICAgIC0gdW5zcGVjaWZpZWQgKGFzIHlvdSBzb21ldGltZXMgc2VlIHdpdGggc2FjcmlmaWNlIG91dHMpXG4gKiAgIC0gc2FjcmlmaWNlOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gdGhlIG91dCB3YXMgYSBzYWNyaWZpY2VcbiAqICAgLSBzYWNyaWZpY2VNZXRhOiBvYmplY3QsIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wczpcbiAqICAgICAtIGtpbmQ6IHN0cmluZyB8fCBudWxsXG4gKiAgICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgICAgLSBhZHZhbmNlXG4gKiAgICAgICAtIHNjb3JlXG4gKiAgIC0gZnJlZVJlZmlsbDogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIGJhdHRlciB1c2VkIHRoZWlyIGZyZWUgcmVmaWxsIG9uIHRoZSBwbGF5XG4gKlxuICogaGl0OiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGEgaGl0IG9uIHRoZSBwbGF5XG4gKiBoaXRNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIHNpbmdsZVxuICogICAgIC0gZG91YmxlXG4gKiAgICAgLSB0cmlwbGVcbiAqICAgICAtIGhvbWVSdW5cbiAqICAgICAtIGdyYW5kU2xhbVxuICogICAtIGJpZ0J1Y2tldDogYm9vbGVhblxuICogICAgIC0gd2hldGhlciBhIEJpZyBCdWNrZXQgd2FzIGFjdGl2YXRlZCBvbiB0aGUgcGxheVxuICpcbiAqIHN0ZWFsOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGFuIGF0dGVtcHRlZCBzdGVhbCBvbiB0aGUgcGxheVxuICogc3RlYWxNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIHN1Y2Nlc3M6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiB0aGllZiBub3QgY2F1Z2h0LCBmYWxzZSBvdGhlcndpc2VcbiAqICAgLSBiYXNlU3RvbGVuOiBudWxsIHx8IG51bWJlclxuICogICAgIC0gdGhlIGJhc2Ugd2hpY2ggd2FzIHN0b2xlbiAoMC1pbmRleGVkKVxuICpcbiAqIHdhbGs6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYSB3YWxrIG9uIHRoZSBwbGF5XG4gKiB3YWxrTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBtaW5kVHJpY2s6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiB0aGUgcGl0Y2hlcyB1c2VkIGEgbWluZCB0cmljayB0byB0dXJuIHRoZSB3YWxrIGludG8gYVxuICogICAgICAgc3RyaWtlb3V0XG4gKlxuICogc3BlY2lhbDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSB3YXMgYSBzcGVjaWFsIGV2ZW50IG9uIHRoZSBwbGF5XG4gKiBzcGVjaWFsTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBraW5kOiBudWxsIHx8IHN0cmluZ1xuICogICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgLSBibG9vZHJhaW5cbiAqICAgICAtIGlzUGFydHlpbmdcbiAqICAgICAtIHJldmVyYlxuICogICAgIC0gYmlyZHNDaXJjbGVcbiAqICAgICAtIGJpcmRzUGVja2VkXG4gKiAgICAgLSBqdXN0QmlyZHNcbiAqICAgICAtIGFsbGVyZ2ljUmVhY3Rpb25cbiAqICAgICAtIGluY2luZXJhdGVkXG4gKiAgICAgLSBiZWNhbWVNYWdtYXRpY1xuICogICAgIC0gZmVlZGJhY2tcbiAqICAgICAtIGVsZWN0cmljaXR5XG4gKiAgICAgLSB1bnN0YWJsZVxuICogICAgIC0gZmxpY2tlcmluZ1xuICogICAgIC0gY29uc3VtZXJzQXR0YWNrXG4gKiAgICAgLSBzYWxtb25cbiAqICAgLSBkZXRhaWxzOiBvYmplY3QsIHdpdGggcHJvcHMgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIGV2ZW50XG4gKlxuICogYmFzZVJ1bm5lcnM6IG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHMsIHJlcHJlc2VudGluZyBiYXNlc1xuICogICAtIGZpcnN0XG4gKiAgIC0gc2Vjb25kXG4gKiAgIC0gdGhpcmRcbiAqICAgLSBmb3VydGhcbiAqICAgLSBpZiB0aGVyZSBpcyBhIGJhc2VydW5uZXIgb24gdGhlIGdpdmVuIGJhc2UsIHRoZSB2YWx1ZSBmb3IgdGhhdCBiYXNlXG4gKiAgICAgd2lsbCBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzOlxuICogICAgIC0gcGxheWVyTmFtZVxuICogICAgIC0gcGxheWVySWRcbiAqXG4gKiBtYXhpbXVtQmxhc2ViYWxsOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHdlJ3JlIGF0IE1BWElNVU0gQkxBU0VCQUxMXG4gKi9cblxuXG52YXIgaW5pdEFuYWx5c2lzID0gZnVuY3Rpb24gaW5pdEFuYWx5c2lzKGV2ZW50RGF0YSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBldmVudERhdGEuaWQgfHwgZXZlbnREYXRhLl9pZCxcbiAgICBnYW1lU3RhdHVzOiBudWxsLFxuICAgIHJ1bnNTY29yZWQ6IDAsXG4gICAgdW5ydW5zU2NvcmVkOiAwLFxuICAgIGJhdHRlclVwOiBmYWxzZSxcbiAgICBvdXQ6IGZhbHNlLFxuICAgIG91dE1ldGE6IHtcbiAgICAgIGtpbmQ6IG51bGwsXG4gICAgICBzYWNyaWZpY2U6IGZhbHNlLFxuICAgICAgc2FjcmlmaWNlTWV0YToge1xuICAgICAgICBraW5kOiBudWxsXG4gICAgICB9LFxuICAgICAgZnJlZVJlZmlsbDogZmFsc2VcbiAgICB9LFxuICAgIGhpdDogZmFsc2UsXG4gICAgaGl0TWV0YToge1xuICAgICAga2luZDogbnVsbCxcbiAgICAgIGJpZ0J1Y2tldDogZmFsc2VcbiAgICB9LFxuICAgIHN0ZWFsOiBmYWxzZSxcbiAgICBzdGVhbE1ldGE6IHtcbiAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICBiYXNlU3RvbGVuOiBudWxsXG4gICAgfSxcbiAgICB3YWxrOiBmYWxzZSxcbiAgICB3YWxrTWV0YToge1xuICAgICAgbWluZFRyaWNrOiBmYWxzZVxuICAgIH0sXG4gICAgc3BlY2lhbDogZmFsc2UsXG4gICAgc3BlY2lhbE1ldGE6IHtcbiAgICAgIGtpbmQ6IG51bGxcbiAgICB9LFxuICAgIGJhc2VSdW5uZXJzOiB7XG4gICAgICBmaXJzdDoge30sXG4gICAgICBzZWNvbmQ6IHt9LFxuICAgICAgdGhpcmQ6IHt9LFxuICAgICAgZm91cnRoOiB7fVxuICAgIH0sXG4gICAgbWF4aW11bUJsYXNlYmFsbDogZmFsc2VcbiAgfTtcbn07XG5cbnZhciBhbmFseXplR2FtZUV2ZW50ID0gZnVuY3Rpb24gYW5hbHl6ZUdhbWVFdmVudChldmVudERhdGEpIHtcbiAgaWYgKCFldmVudERhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBhbmFseXNpcyA9IGluaXRBbmFseXNpcyhldmVudERhdGEpO1xuICB2YXIgY2hlY2tlcnMgPSBbZ2FtZVN0YXR1cywgb3V0cywgaGl0cywgd2Fsa3MsIHN0ZWFscywgc3BlY2lhbCwgbWlzYywgYmFzZVJ1bm5lcnNdO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX2NoZWNrZXJzID0gY2hlY2tlcnM7IF9pIDwgX2NoZWNrZXJzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBjaGVja2VyID0gX2NoZWNrZXJzW19pXTtcbiAgICBjaGVja2VyLmNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGFuYWx5c2lzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFuYWx5emVHYW1lRXZlbnQ6IGFuYWx5emVHYW1lRXZlbnRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignZmx5b3V0JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdmbHknO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdncm91bmQgb3V0JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdncm91bmQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdHJpa2VzIG91dCcpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnc3RyaWtlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZmllbGRlclxcJ3MgY2hvaWNlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdmaWVsZGVyc0Nob2ljZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2EgZG91YmxlIHBsYXknKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2RvdWJsZVBsYXknO1xuICB9XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzYWNyaWZpY2UnKSA+PSAwKSB7XG4gICAgLy8gdGhpcyBtYXkgYWxyZWFkeSBiZSBhIGdyb3VuZC9mbHlvdXQsIG9yIGl0cyB1bnNwZWNpZmllZFxuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9IGFuYWx5c2lzLm91dE1ldGEua2luZCB8fCAndW5zcGVjaWZpZWQnO1xuICAgIGFuYWx5c2lzLm91dE1ldGEuc2FjcmlmaWNlID0gdHJ1ZTsgLy8gY2hlY2sgaWYgc29tZW9uZSBzY29yZWQgb3IgYWR2YW5jZWQgb24gdGhlIHNhY3JpZmljZVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzY29yZXMnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLnNhY3JpZmljZU1ldGEua2luZCA9ICdzY29yZSc7XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpKSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYWR2YW5jZScpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuc2FjcmlmaWNlTWV0YS5raW5kID0gJ2FkdmFuY2UnO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhbmFseXNpcy5vdXRNZXRhLmtpbmQpIHtcbiAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuXG4gICAgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaGFsZklubmluZ091dHMpID09PSAwKSB7XG4gICAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2hhbGZJbm5pbmdFbmQnO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignZnJlZSByZWZpbGwnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLmZyZWVSZWZpbGwgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndXNlcyBhIG1pbmQgdHJpY2snKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLm1pbmRUcmljayA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdibG9vZGRyYWluJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmxvb2RkcmFpbic7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2lzIHBhcnR5aW5nJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnaXNQYXJ0eWluZyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3JldmVyYicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3JldmVyYic7XG4gIH0gZWxzZSBpZiAoIC8vIHRoaXMgY2hlY2sgaGFzIHRvIGNvbWUgYmVmb3JlIGJpcmRzIGNpcmNsZSwgYmVjYXVzZSB0aGUgdGV4dFxuICAvLyAndGhlIGJpcmRzIGNpcmNsZScgaXMgcHJlc2VudCBpbiBib3RoIGNhc2VzXG4gIHVwZGF0ZS5pbmRleE9mKCd0aGUgYmlyZHMgcGVja2VkJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmlyZHNQZWNrZWQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCd0aGUgYmlyZHMgY2lyY2xlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmlyZHNDaXJjbGUnO1xuICB9IGVsc2UgaWYgKCAvLyB0aGlzIGlzIHRvIGNhcHR1cmUgYW55IG90aGVyIG5vbi1wZWNraW5nICYgbm9uLWNpcmNsaW5nIGJpcmRpbmVzc1xuICB1cGRhdGUuaW5kZXhPZignYmlyZHMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdqdXN0QmlyZHMnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdoYWQgYW4gYWxsZXJnaWMgcmVhY3Rpb24nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdhbGxlcmdpY1JlYWN0aW9uJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncm9ndWUgdW1waXJlIGluY2luZXJhdGVkJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnaW5jaW5lcmF0ZWQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdiZWNhbWUgbWFnbWF0aWMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiZWNhbWVNYWdtYXRpYyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2ZlZWRiYWNrJykgPj0gMCAmJiAodXBkYXRlLmluZGV4T2YoJ3JlYWxpdHkgZmxpY2tlcnMnKSA+PSAwIHx8IHVwZGF0ZS5pbmRleE9mKCdzd2l0Y2hlZCB0ZWFtcycpID49IDApKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdmZWVkYmFjayc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RoZSBlbGVjdHJpY2l0eSB6YXBzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZWxlY3RyaWNpdHknO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdpcyBub3cgdW5zdGFibGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICd1bnN0YWJsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2lzIG5vdyBmbGlja2VyaW5nJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZmxpY2tlcmluZyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2NvbnN1bWVycyBhdHRhY2snKSA+PSAwKSB7XG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdkZWZlbmRzJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdjb25zdW1lcnNBdHRhY2tEZWZlbmRlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnY29uc3VtZXJzQXR0YWNrJztcbiAgICB9XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3NhbG1vbiBzd2ltIHVwc3RyZWFtJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnc2FsbW9uJztcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2lubmluZ1Jld2luZCc7IC8vIGZpcnN0LCBncmFiIGFsbCB0aGUgc2VudGVuY2VzIHdpdGggd2hpY2ggdGVhbSBsb3N0IGhvdyBtYW55IHJ1bnNcblxuICAgIHZhciB0ZWFtcyA9IHVwZGF0ZS5tYXRjaCgvKFxcZCsoXFwuXFxkKyk/KSBvZiB0aGUgLioncyBydW5zIGFyZSBsb3N0L2cpO1xuXG4gICAgaWYgKHRlYW1zKSB7XG4gICAgICB2YXIgcnVuc1N0b2xlbiA9IHRlYW1zLm1hcChmdW5jdGlvbiAodGVhbSkge1xuICAgICAgICByZXR1cm4gdXRpbC5nZXROdW1iZXIodGVhbSwgbnVsbCwgbnVsbCkgfHwgMDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJ1bnNTdG9sZW5Gcm9tID0gdGVhbXMubWFwKGZ1bmN0aW9uICh0ZWFtKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB0ZWFtLCAvb2YgdGhlIC8sIC8ncyBydW5zLyk7XG4gICAgICB9KTtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICAgIHJ1bnNTdG9sZW46IHJ1bnNTdG9sZW4sXG4gICAgICAgIHJ1bnNTdG9sZW5Gcm9tOiBydW5zU3RvbGVuRnJvbVxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3J1bnMgYXJlIG92ZXJmbG93aW5nJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAncnVuc092ZXJmbG93aW5nJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0dhaW5lZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvIHVucnVucy8pLFxuICAgICAgcnVuc092ZXJmbG93aW5nRm9yOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9cXG4vLCAvIGdhaW4vKVxuICAgIH07XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3NvbGFyIHBhbmVscyBhYnNvcmInKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdydW5zQ29sbGVjdGVkJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvIHJ1bnMgYXJlIGNvbGxlY3RlZC8pLFxuICAgICAgcnVuc0NvbGxlY3RlZEZyb206IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL3NhdmVkIGZvciB0aGUgLywgLydzIG5leHQgZ2FtZS8pXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc3VuIDIgc21pbGVzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnc3VuMic7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNDb2xsZWN0ZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLyEgc3VuIDIgc21pbGVzLyksXG4gICAgICB3aW5TZXRVcG9uOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9zZXQgYSB3aW4gdXBvbiB0aGUgLywgL1xcLi8pXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYmxhY2sgaG9sZSBzd2FsbG93cycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JsYWNrSG9sZSc7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNDb2xsZWN0ZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgL2NvbGxlY3QgLywgLyEvKSxcbiAgICAgIHdpblN3YWxsb3dlZEZyb206IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL3N3YWxsb3dzIHRoZSBydW5zIGFuZCBhIC8sIC8gd2luLi8pXG4gICAgfTsgLy8gc2VlIGlmIGNhcmNpbml6YXRpb24gdHJpZ2dlcmVkIGJ5IHRoZSBibGFjayBob2xlXG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3RoZSBiYWx0aW1vcmUgY3JhYnMgc3RlYWwnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzLnBsYXllclN0b2xlbiA9IHV0aWwuZ2V0UGxheWVyKHVwZGF0ZSwgL2NyYWJzIHN0ZWFsIC8sIC8gZm9yIHRoZSByZW1haW5kZXIvKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dyaW5kIHJhaWwnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdncmluZFJhaWwnO1xuICAgIHZhciB0cmlja3MgPSB1dGlsLmdldFNrYXRlVHJpY2tzKHVwZGF0ZSk7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgcGxheWVyOiB1dGlsLmdldFBsYXllcih1cGRhdGUsIC9eLywgLyBob3BzIG9uLylcbiAgICB9LCB0cmlja3MpO1xuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzYWZlIScpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMpLCB7fSwge1xuICAgICAgICBncmluZFN1Y2Nlc3M6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdXQhXG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzKSwge30sIHtcbiAgICAgICAgZ3JpbmRTdWNjZXNzOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ3JhaWxCYWlsJztcbiAgICB9XG4gIH0gLy8gaWYgd2UgZm91bmQgc29tZXRoaW5nLCB0aGVuOlxuXG5cbiAgaWYgKGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQpIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignc3RlYWwnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3RlYWwgPSB0cnVlO1xuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdjYXVnaHQnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdjYXVnaHRTdGVhbGluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzID0gdHJ1ZTtcbiAgICB9IC8vIGJhc2VTdG9sZW4gaXMgMC1pbmRleGVkXG5cblxuICAgIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qZmlyc3QvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMDtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipzZWNvbmQvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMTtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLip0aGlyZC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAyO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKmZvdXJ0aC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAzOyAvLyB0aGlzIG1heSBoYXZlIGJlZW4gYSBydW4gaWYgdGhlcmUgYXJlIDQgYmFzZXMgaW4gcGxheVxuXG4gICAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXR0ZXIpICE9PSBudWxsICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheUJhc2VzKSA9PT0gNCkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlCYXR0ZXIpICE9PSBudWxsICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhc2VzKSA9PT0gNCkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBhcmUgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcblxuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKmhvbWUvKSAhPT0gLTEpIHtcbiAgICAgIC8vIHNlZSBpZiBob21lIG9yIGF3YXkgc3RvbGUgdGhlIGJhc2VcbiAgICAgIGlmICgoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXR0ZXIpICE9PSBudWxsKSB7XG4gICAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5QmFzZXMpIC0gMSB8fCAzO1xuICAgICAgfSBlbHNlIGlmICgoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YUJhdHRlcikgIT09IG51bGwpIHtcbiAgICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXNlcykgLSAxIHx8IDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvbGRlciBnYW1lcyBkb24ndCBoYXZlIHRoZXNlIGZpZWxkcywgb3IgbWF5IGhhdmUgYm90aFxuICAgICAgICAvLyBob21lIGFuZCBhd2F5IGJhdHRlcnMgZmlsbGVkIGluOyBqdXN0IGFzc3VtZWQgaG9tZSBiYXNlXG4gICAgICAgIC8vIGlzIGJhc2UgIzMgaW4gdGhvc2UgY2FzZXMsIGkgZ3Vlc3NcbiAgICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAzO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBhcmUgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcblxuICAgIH0gLy8gY2hlY2sgZm9yIGJsYXNlcnVubmluZyBzY29yZXMgcHJlIHMtMTIgKG90aGVyd2lzZSBjYXB0dXJlZCBpblxuICAgIC8vIHNyYy9taXNjLmpzKVxuXG5cbiAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiB1cGRhdGUuaW5kZXhPZignYmxhc2VydW5uaW5nJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgL3Njb3JlcyAvLCAvIHdpdGggYmxhc2VydW5uaW5nLyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2V0VXBkYXRlVGV4dCA9IGZ1bmN0aW9uIGdldFVwZGF0ZVRleHQoZXZlbnREYXRhKSB7XG4gIHZhciBfZXZlbnREYXRhJGxhc3RVcGRhdGU7XG5cbiAgcmV0dXJuIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRsYXN0VXBkYXRlID0gZXZlbnREYXRhLmxhc3RVcGRhdGUpID09PSBudWxsIHx8IF9ldmVudERhdGEkbGFzdFVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRsYXN0VXBkYXRlLnRvTG93ZXJDYXNlKCkpIHx8ICcnO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIG51bWJlciAoc3VwcG9ydHMgcG9zaXRpdmUgaW50ZWdlcnMgJiBmbG9hdHMpLFxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIHJlZ2V4IGZvciBudW1iZXJzXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgcmVnZXggZm9yIG51bWJlcnNcbiAqIHdpbGwgcmV0dXJuIGEgbnVtYmVyIG9yIG51bGxcbiAqL1xuXG5cbnZhciBnZXROdW1iZXIgPSBmdW5jdGlvbiBnZXROdW1iZXIocywgcHJlLCBwb3N0KSB7XG4gIHZhciBudW0gPSBudWxsO1xuICB2YXIgbnVtUmVnZXggPSAvKChcXGQrKT8oXFwuXFxkKyk/KS87XG5cbiAgaWYgKCFwcmUpIHtcbiAgICBwcmUgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIGlmICghcG9zdCkge1xuICAgIHBvc3QgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAocHJlLnNvdXJjZSArIG51bVJlZ2V4LnNvdXJjZSArIHBvc3Quc291cmNlKTtcbiAgdmFyIG1hdGNoZXMgPSByZWdleFtTeW1ib2wubWF0Y2hdKHMpO1xuXG4gIGlmIChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHtcbiAgICBudW0gPSBOdW1iZXIobWF0Y2hlc1sxXSkgfHwgbnVtO1xuICB9XG5cbiAgcmV0dXJuIG51bTtcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSBtYXRjaCBiZXR3ZWVuIHByZSBhbmQgcG9zdFxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIG1hdGNoXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgbWF0Y2hcbiAqIHdpbGwgcmV0dXJuIHRoZSBtYXRjaCwgb3IgYW4gZW1wdHkgc3RyaW5nXG4gKi9cblxuXG52YXIgZ2V0TWF0Y2ggPSBmdW5jdGlvbiBnZXRNYXRjaChzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIG1hdGNoUmVnZXggPSAvKC4qKS87XG5cbiAgaWYgKCFwcmUpIHtcbiAgICBwcmUgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIGlmICghcG9zdCkge1xuICAgIHBvc3QgPSBuZXcgUmVnRXhwKCcnKTtcbiAgfVxuXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAocHJlLnNvdXJjZSArIG1hdGNoUmVnZXguc291cmNlICsgcG9zdC5zb3VyY2UpO1xuICB2YXIgbWF0Y2hlcyA9IHJlZ2V4W1N5bWJvbC5tYXRjaF0ocyk7XG5cbiAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkge1xuICAgIHJldHVybiBtYXRjaGVzWzFdO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIHRlYW0gbmFtZVxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIHJlZ2V4IGZvciB0aGUgdGVhbSBuYW1lXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgcmVnZXggdGhlIHRlYW0gbmFtZVxuICogd2lsbCByZXR1cm4gJ2hvbWUnICdhd2F5JyBvciAnJ1xuICovXG5cblxudmFyIGdldFRlYW0gPSBmdW5jdGlvbiBnZXRUZWFtKGV2ZW50RGF0YSwgcywgcHJlLCBwb3N0KSB7XG4gIHZhciB0ZWFtID0gZ2V0TWF0Y2gocywgcHJlLCBwb3N0KTtcblxuICBpZiAodGVhbSkge1xuICAgIHRlYW0gPSBldmVudERhdGEuaG9tZVRlYW1OaWNrbmFtZS50b0xvd2VyQ2FzZSgpID09PSB0ZWFtID8gJ2hvbWUnIDogJ2F3YXknO1xuICB9XG5cbiAgcmV0dXJuIHRlYW07XG59O1xuXG52YXIgdGl0bGVDYXNlID0gZnVuY3Rpb24gdGl0bGVDYXNlKHMpIHtcbiAgaWYgKCFzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgO1xuICByZXR1cm4gcy5zcGxpdCgnICcpLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgIGlmICh3b3JkKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQod29yZFswXS50b1VwcGVyQ2FzZSgpKS5jb25jYXQod29yZC5zbGljZSgxKSk7XG4gICAgfVxuICB9KS5qb2luKCcgJyk7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgcGxheWVyIG5hbWVcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSByZWdleCBmb3IgdGhlIHRlYW0gbmFtZVxuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIHJlZ2V4IHRoZSB0ZWFtIG5hbWVcbiAqIHdpbGwgcmV0dXJuIHRoZSBwbGF5ZXIgbmFtZSBvciAnJ1xuICovXG5cblxudmFyIGdldFBsYXllciA9IGZ1bmN0aW9uIGdldFBsYXllcihzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIHBsYXllciA9IGdldE1hdGNoKHMsIHByZSwgcG9zdCk7XG4gIHJldHVybiB0aXRsZUNhc2UocGxheWVyKTtcbn07XG5cbnZhciBnZXRTa2F0ZVRyaWNrcyA9IGZ1bmN0aW9uIGdldFNrYXRlVHJpY2tzKHVwZGF0ZSkge1xuICB2YXIgZ3JpbmRUcmljaywgZ3JpbmRTY29yZSwgbGFuZFRyaWNrLCBsYW5kU2NvcmU7XG4gIHZhciB0cmlja3MgPSB1cGRhdGUubWF0Y2goLyBhICguKikgXFwoKFxcZCspL2cpOyAvLyBncmluZCB0cmlja1xuXG4gIGlmICh0cmlja3NbMF0pIHtcbiAgICBncmluZFRyaWNrID0gdGl0bGVDYXNlKGdldE1hdGNoKHRyaWNrc1swXSwgL2EgLywgLyBcXCgvKSk7XG4gICAgZ3JpbmRTY29yZSA9IGdldE51bWJlcih0cmlja3NbMF0sIC9cXCgvLCAvJC8pO1xuICB9IC8vIGxhbmQgdHJpY2tcblxuXG4gIGlmICh0cmlja3NbMV0pIHtcbiAgICBsYW5kVHJpY2sgPSB0aXRsZUNhc2UoZ2V0TWF0Y2godHJpY2tzWzFdLCAvYSAvLCAvIFxcKC8pKTtcbiAgICBsYW5kU2NvcmUgPSBnZXROdW1iZXIodHJpY2tzWzFdLCAvXFwoLywgLyQvKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ3JpbmRUcmljazogZ3JpbmRUcmljayxcbiAgICBncmluZFNjb3JlOiBncmluZFNjb3JlLFxuICAgIGxhbmRUcmljazogbGFuZFRyaWNrLFxuICAgIGxhbmRTY29yZTogbGFuZFNjb3JlXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0VXBkYXRlVGV4dDogZ2V0VXBkYXRlVGV4dCxcbiAgZ2V0TnVtYmVyOiBnZXROdW1iZXIsXG4gIGdldFRlYW06IGdldFRlYW0sXG4gIGdldFBsYXllcjogZ2V0UGxheWVyLFxuICBnZXRTa2F0ZVRyaWNrczogZ2V0U2thdGVUcmlja3Ncbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignZHJhd3MgYSB3YWxrJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLndhbGsgPSB0cnVlOyAvLyBjaGVjayBpZiBhbnkgcnVucyB3ZXJlIHNjb3JlZCBvbiB0aGUgcGxheSBwcmlvciB0byBzMTJcblxuICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIHVwZGF0ZS5pbmRleE9mKCdzY29yZXMnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcbiAgICAvLyBjaGVjayBmb3IgbWluZCB0cmljayBzaGVuYW5pZ2Fuc1xuXG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3VzZXMgYSBtaW5kIHRyaWNrJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMud2Fsa01ldGEubWluZFRyaWNrID0gdHJ1ZTtcblxuICAgICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdHJpa2VzIG91dCcpID49IDApIHtcbiAgICAgICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcbiAgICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ3N0cmlrZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsImNvbnN0IHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAyMGVkNjMwLThiYWUtNDQ0MS05NWNjLTBlNGVjYzI3MjUzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ltb24gSGFsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwM2Y5MjBjYy00MTFmLTQ0ZWYtYWU2Ni05OGE0NGU4ODMyOTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvcm5lbGl1cyBHYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4MTNkNDNjLWI5MzgtNDlkYS1hY2VmLTY1YjczZjI3YjA5OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NyYXRjaCBEZWxldXplXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTNjZjU1MjEtMTQwZi00YWQ5LWE5OTgtYWM4YWYyMmI5YmM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdXRjaCBXeWV0aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE2YWZmNzA5LWU4NTUtNDdjOC04ODE4LWI5YmE2NmU5MGZlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVsbGVuIFBldGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTczOTcyNTYtYzI4Yy00Y2FkLTg1ZjItYTIxNzY4YzY2ZTY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3J5IFJvc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOTI0MWFhNC0zOGUzLTQ1ZWQtOTc1MC02OGY0NDAxZjgwZTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF5YW5uYSBEdW1waW5ndG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWE5M2EyZDItYjViNi00NzliLWE1OTUtNzAzZTRhMmYzODg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWRybyBEYXZpZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMGZkNzFlNy00ZmEwLTQxMzItOWY0Ny0wNmEzMTRlZDUzOWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhcnMgVGF5bG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjQzZTljNWMtNWE4YS00YjQ4LTljZTYtYjEwZGRkNjc3YWU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJcm5lZSBCbHVlc2t5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjcyMDU1OWUtOTE3My00MDQyLWFhYTAtZDM4NTJiNzJhYjJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIaXJvdG8gV2lsY294XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmU4NmRlMTEtYTJkZC00YjI4LWI1ZmUtZjRkMGMzOGNkMjBiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaW9uIEFsaWNpYWtleWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzAyMTg2ODQtN2ZhMS00MWE1LWEzYjMtNWQ5Y2Q5N2RkMzZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3JkYW4gSGlsZGViZXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzY3ODZmNDQtOTA2Ni00MDI4LTk4ZDktNGZhODQ0NjVhYjllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWFzbGV5IEdsb29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2Q1MmFjZTYtYTBhMC00NjdlLTgwZTAtYWU4NmIyODlhZDMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGVsaW5lIEhhbW1lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ2NzIxYTA3LTdjZDItNDgzOS05ODJlLTcwNDZkZjZlOGI2NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RldyBCcmlnZ3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ODljYzFjZS04MmRmLTRmYWQtODY3ZC1kZTdkOTgyMmZlZGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpZ2J5IFBlYWNlbGlseVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRjODZhNTAwLWQ1MzgtNGI4My1iMzIxLWQ3NjI1MzNkNzY2MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxsYW4gS3JhbmNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGZmZDJlNTAtYmI1Yi00NWQwLWI3YzQtZTI0ZDQxYjJmZjVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY2huZWlkZXIgQmVuZGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTFjNTQ3M2EtNzU0NS00YTlhLTkyMGQtZDliNzE4ZDBlOGQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYWNvYiBIYXluZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NTc2YTJjYi0zZGViLTRhMzUtYTFlZi05ZTNjYzIwMzk1NjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBoaW5lYXMgV29ybXRocmljZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU4YzllMjk0LWJkNDktNDU3Yy04ODNmLWZiMzE2MmZjNjY4ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2ljaGlybyBHdWVycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YmNmYjNmZi01Nzg2LTRjNmMtOTY0Yy01YzMyNWZjYzQ4ZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdWxhIFR1cm5pcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVjNmNjZTYzLTk5YjMtNDQxZC05MGUwLTA2NjRlNjgwNTdhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXpla2llbCBUaHJvY2ttb3J0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MTFkMThlMC1iOTcyLTRjZGQtYWZjMi03OTNjNTZiZmU1YTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsc3RvbiBDZXJ2ZXphXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjNkZjg3MDEtMTg3MS00OTg3LTg3ZDctYjU1ZDRmMWRmMmU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2Rvd2VsbCBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY0YzkyZjhkLTYwMjgtNDk1Yi1iODFkLTMyYzk3NWFmYjJlMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5pZCBNYXJsb3dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2OGRkOWQ0Ny1iOWE4LTRmZDMtYTg5Yy01YzExMmViMTk4MmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1cmhhbSBTcGFjZW1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY5MmQ4NDMwLTQyYWQtNGI4OC04YjM2LWE3ZDIwZGE5YjBhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGlyb3RvIFBvb2xlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmNjMzI0NmYtMmRhMi00YzdjLWE0NmYtOWI0NWRjYmYzODRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW1vdGhlcyBUaHdvbXBzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MThkZWExYS1kOWE4LTRjMmItOTMzYS1mMDY2N2I1MjUwZTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcmdhcml0byBOYXZhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzJjYThlZDUtYThjNy00NTcxLTk3NDUtODBkZTVhNDliMmQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLYWogU3RhdHRlciBKci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3OTMyYzdjNy1iYWJiLTQyNDUtYjlmNS1jZGFkYjk3Yzk5ZmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhbmR5IENhc3RpbGxvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2I1NWQ0ODQtNmVhOS00NjcwLTgxNDUtOTg2Y2I5ZTMyNDEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGV2ZW5zb24gSGVhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdjZjgzYmRjLWY5NWYtNDlkMy1iNzE2LTA2ZjJjZjYwYTc4ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF0dGVvIFRyaXVtcGhhbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZTlhNTE0YS03ODUwLTRlZDAtOTNhYi1mM2E2ZTJmNDFjMDNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vbGFuZXN0b3BoaWEgUGF0dGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODE3ZGVlOTktOWNjZi00ZjQxLTg0ZTMtZGM5NzczMjM3YmM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb2xkZW4gU3RhbnRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgyOGM1MDgwLTQ1NDMtNGJmMi05ZDg0LTQzNmQ1OGM3ZmQ2NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5pZCBTbHVtcHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NGEyYjVmNi00OTU1LTQwMDctOTI5OS0zZDM1YWU3MTM1ZDNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbm5lZHkgTG9zZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NjRiM2JlOC1lODM2LTQyNmUtYWU1Ni0yMDM0NWI0MWQwM2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdvb2R3aW4gTW9yaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OWVjNzdkOC1jMTg2LTQwMjctYmQ0NS1mNDA3YjQ4MDBjMmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphbWVzIE1vcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YzhjYzU4NC0xOTliLTRiNzYtYjJjZC1lYWE5YTc0OTY1ZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppd2EgTXVlbGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwYzJjZWM3LTBlZDUtNDI2YS05ZGU4LTc1NGYzNGQ1OWIzOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVG90IEZveFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkxZjUyOThlLWEyZWMtNGY1NC1hNTQxLTE4MTg3MDJkMWI2ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWludCBTaHVwZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzMTFiNzI3LWRlNzQtNGYyNS05MTJkLWUwOGE3OWYwNjFiMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVucnkgRWdnYnVydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3YWY5N2E3LTE5ZGMtNGQxOC05ZjcyLThiZDg5ZjdlZWFhOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJpbml0eSBTbWFodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk4ZDIzM2RlLTljM2YtNDEwMC1hMzQzLTUyOTdiN2ZkZWI5MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9yayBTaWxrIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTk2NWVlZDUtMDg2Yy00OTc3LTk0NzAtZmU0MTBmOTJkMzUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXRlcyBCZW50bGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWEwMzFiOWEtMTZmOC00MTY1LWE0NjgtNWQwZTI4YTgxMTUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaWFuYSBXaGVlbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWRkNDBkYzctMDMzZi00MDM5LTkwYzgtMTg0ODUzZjMwNjRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaW1vbiBQZWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWYyMThlZDEtZDc5My00MzdkLWExYjktNzlmODhmNjkxNTRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3R1cyBNYW5nb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExZWQzMzk2LTExNGEtNDBiYy05ZmYwLTU0ZDdlMWFkMTcxOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF0ZWwgQmV5b25jZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE1ZjhjZTgzLTAyYjItNDk4Yy05ZTQ4LTUzM2ExZDgxYWViZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXZlbHRvbiBNY0JsYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYThhNWNmMzYtZDFhOS00N2QxLThkMjItNGE2NjU5MzNhN2NjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZWxnYSBXYXNoaW5ndG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWYyMzAzYjktOWY5NS00ZDQzLWIxZDUtZDQ1ZWJhOTI3MGE3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaXR6YW4gSHViZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMDgyY2E2ZS1lYjExLTRlYWItOGQ2YS0zMGY4YmU1MjJlYzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pY2hvbGFzIE1vcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiODhkMzEzZi1lNTQ2LTQwN2UtOGJjNi05NDA0MDQ5OWRhYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9saXZlciBMb29mYWhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiOGFiODZjNi05MDU0LTQ4MzItOWI5Ni01MDhkYmQ0ZWI2MjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVzbWUgUmFtc2V5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmJmOTU0M2YtZjEwMC00NDVhLWE0NjctODFkN2FhYjEyMjM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGYXJyZWxsIFNlYWd1bGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDI0ZTE4Yi04MDBkLTRmMTUtODc4ZC1lMzM0ZmI0ODAzYzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbGdhIEJ1cnRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJlMThkMzYzLTc1MmQtNGU0YS1iMDZiLTFhN2U0NjQxNDAwYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NvcmVzIEJhc2VydW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZjEyMjY2MC1kZjUyLTRmYzQtOWU3MC1lZTE4NTQyM2ZmOTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhbHRvbiBTcG9ydHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZjZhMjRkMS00ZTg5LTQ3OTAtYTRiYS1lZWIyODcwY2JmNmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhdCBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwMTc3Zjc2LTY3ZmMtNDMxNi1iNjUwLTg5NDE1OWRlZGU0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF1bGEgTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDllNjRiNi04MjQ4LTQwN2UtYjNhZi0xOTMxYjg4MGRiZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbm55IFNwcnVjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMxZGRkZmM1LTZhZDYtNGIzMS05ZTUyLTk4MjM2YzUzMzg3NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9yayBTaWxrIElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM2YTE5MTU0LTc0MzgtNGM0Zi1iNzg2LTJkZmFmNTk1MWYwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lsdmFpcmUgUm9hZGhvdXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2JkMTllNmYtM2QwOC00NzM0LWIyM2YtNTg1MzMwMDI4NjY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLbmlnaHQgVHJpdW1waGFudFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQyYTFlNzM0LTYwZDktNDk4OS1iN2Q5LTZlYWNkYTcwNDg2YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGlhbmEgVGFrYWhhc2hpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGIzM2E1NGMtMzkzNC00NzhmLWJhZDQtZmMzMTNhYzI1ODBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZXJjaXZhbCBXaGVlbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGUyMWM5N2UtZjU3NS00M2I3LThiZTctZWNjNWQ4YzRlYWZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQaXRjaGluZyBNYWNoaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTY5ZGIzMGQtNzRhYy00MjY1LThkYTYtNDY3YjBkMjU2OTRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEZXJ2aW4gR29yY3p5Y2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYWFlZjQ3ZS04MmNjLTRjOTAtYjc3ZC03NWMzZmIyNzllODNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlcnJpbmcgV2luZmllbGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZmFmZTc1ZS0yZjAwLTQ0MTgtOTE0Yy05YjY2NzVkMzkyNjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZG9uIENhc2htb25leVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3MGRkNTdiLTU1YzQtNGE2Mi1hNWVhLTdjYzRiZjlkOGFjMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGlsbG1hbiBIZW5kZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOTkzMGNiMS03ZWQyLTRiOWEtYmY0Zi03ZTM1ZjI1ODZkNzFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpbm4gSmFtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYTViNTRkMi1iNDg4LTQ3Y2QtYTUyOS01OTI4MzFlNDgxM2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpbmEgTGFyc2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjY3Y2I0NDUtYzI4OC00ZTYyLWI2MDMtMjcyOTFjMWU0NzVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWFudXQgSG9sbG93YXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMzk0N2ZiYy01MGVjLTQ1YTQtYmNhNC00OWZmZWJiNzdkYmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNob3JieSBTaG9ydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE5MGEwZjMxLWQ2ODYtNGFjNC1hN2YzLWNmYzg3YjcyYzE0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVyZCBQYWNoZWNvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDA1ZGZhZGYtZDQzNS00MzA3LTgyZjYtOGViYTIyODdlODdhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXhvbiBCdWNrbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODlmNzQ4OTEtMmUyNS00YjVhLWJkOTktYzk1YmEzZjM2YWEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYWdvbWkgTmF2YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyYzQzNjhkLTQ3OGItNDJiZS1iNmQzLWZhMmU5YjIzMGY4MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFkeSBNYXRzdXlhbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxM2EwNTE1Ny02MTcyLTQ0MzEtOTQ3Yi1hMDU4MjE3YjRhYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwZWFycyBUYXlsb3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1OTkxY2NiMy03ZWVkLTQ2ZDktOWQ3Yy02OWRlYzliNTZkNGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pcmEgTGVtbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMzU2MWM1NC0xMWMzLTRiM2QtOTE4Mi04NTM4NjQ3MWIyZWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hZ29taSBNY2RhbmllbCBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjViYzdlNWQ0LTM5YmUtNGQ2NC1hMjQyLWFiYjM5YWNhNmY0MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2lhIEhvbGJyb29rXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmY4NWQ3MzEtODFlZC00YTA3LTllMDEtZTkzZjE3ODZhMzY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWVzIFRhc3dlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMjgxMGRjYS04MjVjLTRkYmMtOGI2NS0wNzAyNzk0YzQyNGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVkdWFyZG8gV29vZG1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRlY2VlN2JlLTkzZTQtNGYwNC1iMTE0LTZiMzMzZTBlNjQwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3V0dG9uIERyZWFteVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU3MDMxNDFjLTI1ZDktNDZkMC1iNjgwLTBjZjljZmJmNDc3N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZG92YWwgQ3Jvc3NpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNjQzYTUyMC1hZjM4LTQyZTMtOGY3Yi1mNjYwZTUyZmFjYzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFkZWxhaWRlIEp1ZG9jaG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzY3NWZjZGYtNjExNy00OWE2LWFjMzItOTlhODlhM2E4OGFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWYWxlbnRpbmUgR2FtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NjZkZmQxZS0xMWMzLTQyYjYtYTE2Ny05YjJkNTY4YjVkYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbmRpZSBUdXJuZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NjQ0ZDc2Ny1hYjE1LTQ1MjgtYTRjZS1hZTFmOGFhZGI2NWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdWxhIFJlZGRpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZGNhNzEzNy1iODcyLTQ2ZjUtOGU1OS04YzljOTk2ZTlkMjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVtbWV0dCBUYWJieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhOGM1MmQ3LTQxMjQtNGE2NS1hMjBkLWQ1MWFiY2JlNjU0MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlb2RvcmUgSG9sbG93YXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MDNhMjM1Zi05ZmE2LTQxYjUtODUxNC05NDc1Yzk0NDI3M2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlZXNlIENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzMyNjVlZTMtYmIzNS00MGQxLWI2OTYtMWYyNDFhNmY1OTY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXJrZXIgTWVuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgxZDdkMDIyLTE5ZDYtNDI3ZC1hYWZjLTAzMWZjYjc5YjI5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF0dHkgRm94XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWU0YWNlYmQtZWRiNS00ZDIwLWJmNjktZjJkNTE1MTMxMmZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGVvZG9yZSBDZXJ2YW50ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiOWQ5Nzk5MC1kZjBiLTRiOGYtYWM4NS02MWM0NGFiMjlhM2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvcmNhbiBTbWFodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlZWE0YTQ4LWM4NGItNDUzOC05N2U3LTMzMDM2NzE5MzRkMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVsZ2EgTW9yZW5vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGVmMWJjMzQtNjRlZS00YzdiLThiZTItODgzMjJiNDA3YTU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHZXJhbGRpbmUgRnJvc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NDJhZjkxNS03OWM1LTQzMWMtYTI3MS1mNzE4NWUzN2M2YWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9saXZlciBOb3Rhcm9ib3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1N2ExOWEyMi1mMmNkLTRlNTktYWE4NC0xNWNiMGFmMzBiYTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlZlc3NhbGl1cyBTdW5kYWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNjkxZjJiYS05YjY5LTQxZjgtODkyYy0xYWNkNDJjMzM2ZTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplbmtpbnMgR29vZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzZTUxMmRmLWM0MTEtNDEwMC05NTQ0LTBjZWFkZGRiMjhjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmFtb3VzIE93ZW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzllNGE0OWUtZTM1YS00MDM0LWE0YzctMjkzODk2YjQwYzU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGV4YW5kZXIgSG9ybmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNWMyNGM5Ny1mM2QzLTRiM2QtOGMxMy0wZGViYjYxMzQ2YzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZGRiNjQ4NS0wNTI3LTQ1MjMtOWJlYy0zMjRhNWI2NmJmMzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYW5zIE1jQmxhc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNGU0YzE3ZC04MTI4LTQ3MDQtOWUwNC1mMjQ0ZDQ1NzNjNGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldlc2xleSBQb29sZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZiOWJlZGI0LTljOGItNDUyMC1hMDYyLTIzZmJhMGQ1ZjA1ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFnb21pIE1jZGFuaWVsIElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBiYjM1NjE1LTYzZjItNDQ5Mi04MGVjLWI2YjMyMmRjNTQ1MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2V4dG9uIFdoZWVyZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOThmZDljOC1jYjc1LTQ4MmQtODczZS1lNmI5MWQ0MmE0NDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlbiBIdW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMGUxM2I1Ni01OTliLTRhMjItYjc1Mi04MDU5ZWZmYzgxZGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvdSBSb3NlaGVhcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNmNmY2NmMi04NTBlLTQzZWItYjA4NS1mZjczYWQwNzQ5YjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYXNsZXkgRGF5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2MzMzFjODctMTYzNC00NmM0LTg3Y2UtZTRiOWM1OWUyOTY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZb3NoIENhcnBlbnRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ0YzkyZDk3LWJiMzktNDY5ZC1hMTNiLWYyZGQ5YWU2NDRkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbmNpc2NvIFByZXN0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZmY2NmVhZS03MTExLTRlM2ItYTliOC1hOTU3OTE2NWIwYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlYW51dGllbCBEdWZmeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjczM2Q4MGYxLTI0ODUtNDBmNy04MjhiLWZkN2NkODI0M2EwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFpIFNwbGlmZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkyNGRlODZkLTI2MGItNDk1Yi04MGUxLTU3YWY1NzY3NzAzY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF0Y2h3b3JrIFNvdXRod2lja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3ZjVhOWNkLTcyZjAtNDEzZS05ZTY4LWE2ZWU2YTY2MzQ4OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2xpbmUgR3JlZW5sZW1vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlhYzJlN2M1LTVhMzQtNDczOC05OGQ4LTlmOTE3YmM2ZDExOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hyaXN0aWFuIENvbWJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWY2ZDA2ZDYtYzYxNi00NTk5LTk5NmItZWM0ZWVmY2ZmOGI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWx2aWEgV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjI4YmI3ZjctMmQ4Yy00NzgxLTg4MDgtODM4NDRkZjdlNzMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU291bCBJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzIzZjg5Ny1jY2Y5LTQyMDAtODg3MC0yNDljYmUxOWY5MDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkh1YmVyIEZydW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMWNjNGQ3ZC1iZWYwLTQzZGQtYmEwYS0xN2M3NjI4YWE3NzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hZ2kgUnVpelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYyNDY4MDU1LWU4ODAtNDBiZi04YWM2LWEwNzYzZDg0NmViMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxheW5hYmVsbGEgSG9sbHl3b29kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjJhMjdhN2UtYmYwNC00ZDMxLTg2ZjUtMTZiZmEzYWRkYmU3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaW5uaWUgSGVzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3ODQ3ZGUyLWRmNDMtNDIzNi04ZGJlLWFlNDAzZjVmM2FiM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmxvb2QgSGFtYnVyZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmVkYmNlYjgtZTJhYS00ODY4LWFjMzUtNzRjZDA0NDU4OTNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJVbmNsZSBQbGFzbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMGM1MjliMy05NDdlLTRhNzctYjU2Zi02OWZlMjVmYjM3MTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvY2tzIE1heWJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGNhNTI2MjYtNThjZC00NDlkLTg4YmItZjZkNjMxNTg4NjQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWZWxhc3F1ZXogQWxzdG90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYyYWU2YWE5LWUzNDYtNGZhYS1iMDdjLTFmNzYyMzU4MDAxNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2VydW5kIFBhbnRoZW9jaWRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjM1MTI1NzEtMmVjYS00YmM0LThhZDktYTUzMDhhMjJhZTIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPc2NhciBEb2xsaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MGU0NzRhMy03ZDJiLTQzMWQtODE5Mi0yZjFlMjcxNjI2MDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1bW1lcnMgUHJlc3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhhZGIwODRiLTE5ZmUtNDI5NS1iY2QyLWY5MmFmZGI2MmJkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9nYW4gUm9kcmlndWV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2U2MTFiNDUtOThkYy00ODE4LTlmZjktZTg4MjM3ZWIwMGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY0tpbmxleSBPdHRlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ0YTEwYzJhLTBjMjgtNDY2YS05MjEzLTM4YmEzMzM5YjY1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmljaG1vbmQgSGFycmlzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmZTNlOGJhNS02Njg3LTQwMGQtOTgyOC0yYjcwZDYzZWE4YmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRldmluIE1lbGNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY3ODE3MGU0LTA2ODgtNDM2ZC1hMDJkLWMwNDY3ZjlhZjhjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFieSBEb3lsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg2MDVhZjRiLWIyMzUtNDNmOC04MWFhLTYzODFlY2RkYTc1NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVzZSBTY2FudHJvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFlODFlMTcyLTgwMWEtNDIzNi05MjlhLWI5OTBmYzcxOTBjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVndXN0IFNreVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRlZmJjNTQwLWEzNmQtNDYwYi1hZmQ4LTA3ZGEyMzc1ZWU2M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FzdGlsbG8gVHVybmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWJlNmFjMDItM2I4My00ZGE4LWIxZTUtZjg5MDUzYmJkNWM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYW4gQ2FuYmVycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYzY4ODQ1Zi0zYjI2LTQxMmYtODQ0Ni00ZmVmMzRlMDljNzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hbmR5IEZhbnRhc3RpY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAzYjgwYTU3LTc3ZWEtNDkxMy05YmU0LTdhODVjMzU5NDc0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGFsZXhhbmRyZXkgV2FsdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTQ0OGYxZjMtZDc2Zi00NWMxLWE1YzEtNTRmMjI1NDQwMDBiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY2FybGV0IENhc3RlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMxNmFiZWE3LTk4OTAtNGZiOC1hYWVhLTg2YjM1ZTI0ZDliZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VubmVkeSBSb2RnZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzE4OGQ2NDEtNGZjYy00ZDVlLTg4N2QtNWY0NTRiNGM0ZmY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWx2YWlyZSBTZW1pcXVhdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzA5OThhMDgtZGUxNS00MTg3LWI5MDMtMmUwOTZmZmEwOGU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYW5ub25iYWxsIFNwb3J0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM4M2I4MmU4LWI4ZDItNGNiNy05OTgyLTk3NTkzMjgzYWNjMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VsdmluIERydW1zb2xvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDk3ODM1ZmQtMmU5Mi00Njk4LTg5MDAtMWY1YWJlYTBhM2I2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaW5nIFJvbGFuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU0MDM0MTkyLTRkYzYtNDkwMS1iYjMwLTA3ZmUzY2Y3N2I1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFsZHdpbiBCcmVhZHdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA2ZmRkMWVkLTEzYTAtNGViMi1hN2RkLTRlOTU1MTIzNWE2OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWGFuZHJhIFBhbmNha2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTczMmU2MjMtZmZjMi00MGYwLTg3YmEtZmRjZjk3MTMxZjFmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZXRzeSBUcm9tYm9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3YzY4ZDdmLTVlNDAtNGFmYS04YjZmLTlkZjQ3Yjc5ZTdkZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFzaWxpbyBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhYjRlYzAyLTE3ZDktNGM0YS1iOTU2LWFhMTcwYmY1OGE2ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmlwcHkgRGVTaGllbGRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGY2OWU4YzItYjJhMS00ZTk4LTk5NmEtY2NmMzVhYzg0NGM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJZ25ldXMgRGVsYWNydXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NTI3MzYxNS0yMmQ1LTRkZjEtOWE3My03MDdiMjNlODI4ZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJ1cmtlIEdvbnphbGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjkxZjlhYjItOWRkNC00MmU4LWJmOTUtOWZkMDEyNTNjODAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBJVlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhjZjc4YjQ5LWQwY2EtNDcwMy04OGU4LTRiY2FkMjZjNDRiMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXZpbGEgR3V6bWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTRiYWE5YWMtZmY5Ni00ZjU2LWE5ODctMTAzNThlOTE3ZDkxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYWJyaWVsIEdyaWZmaXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWJlNTYwNjAtM2IwMS00N2FhLWEwOTAtZDA3MmVmMTA5ZmJmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZXNcXHUwMGZhcyBLb2NoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWZkMWYzOTItZDQ5Mi00YzQ4LThkNDYtMjdmYjQyODNiMmRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWNhcyBQZXR0eVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFhZTM4ODExLTEyMmMtNDNkZC1iNTljLWQwZTIwMzE1NGRiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZGllIENhcnZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMzYWUwNTUyLTU5ZTgtNDRiZi1iYTY2LTQ4YTk2YWZmMzVlNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm9udGdvbWVyeSBNdWxsb2NrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzNkYzdhYTItZTI3Yi00ODU5LWJiZjAtNDdiYTY2YzAzMTg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFua2llIEluY2FybmF0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE4YWY5MzNhLTRhZmEtNGNiYS1iZGE1LTQ1MTYwZjNhZjk5YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVsaXggR2FyYmFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkYTQ5ZGUyLTM0ZTUtNDlkMC1iNzUyLWFmMmEyZWUwNjFiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29yeSBUd2VsdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5Zjg1Njc2YS03NDExLTQ0NGEtOGFlMi1jN2Y4ZjczYzI4NWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhY2hsYW4gU2hlbHRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQxYTE5OGQ2LWIwNWEtNDdjZi1hYjhlLTM5YTZmYTFlZDgzMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGlxdWlkIEZyaWVuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU3YmJmYjYyLWExMzgtNDFlOC04NmFmLWI5MTg0M2QxNzAxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNvdWwgSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmM2MwN2VhZi0zZDZjLTRjYzMtOWU1NC1jYmVjYzljMDgyODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbXBvcyBBcmlhc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE4ZjQ1YTFiLTc2ZWItNGI1OS1hMjc1LWM2NGNmNjJhZmNlMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGggV2Vla3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjE1N2M1Yy05YTZhLTQ1YTYtODU4Zi1iZjRjZjRjYmMwYmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ydGl6IExvcGV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2ViYjUzNjEtMzg5NS00YTUwLTgwMWUtZTdhMGVlNjE3NTBjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdWd1c3RvIFJlZGRpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YjhkMTI4Zi1lZDUxLTQ5NmQtYTk2NS02NjE0NDc2ZjgyNTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ydmlsbGUgTWFuY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ODljOWVmOS1kNTIxLTQ0MzYtYjQxYy05MDIxYjgxYjRkZmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxpYW0gU25haWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhM2VhMGU5My1jOWY1LTRmODUtOGFjZC1jM2M1Y2U4NjAxZmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplcnVlbCBLcmFtZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMGZmYzljMi1lNjc3LTQyMzAtYTYzOS1iMGFlMTE2NTA1MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktheiBGaWFzY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMmQ3NjgxNS1jYmRjLTRjNGItOWM5ZS0zMmViZjIyOTdjYzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlbnplbCBTY290dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUzYzUxNGFlLWY4MTMtNDcwZS05YzkxLWQ1YmFmNWZmY2YxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVG90IENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjM4ZjhjNTAtMzExZi00NDg2LWE3MzQtZTFhMTc2MDZhZjRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWNpZW4gUGF0Y2h3b3JrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGIzZThlOWItNmRlMS00ODQwLTg3NTEtYjFmYjQ1ZGM1NjA1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaG9tYXMgRHJhY2FlbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhN2Q4MTk2YS1jYTZiLTRkYWItYTlkNy1jMjdmM2U4NmNjMjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbW1pc3Npb25lciBWYXBvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY4ODMyNjlmLTExN2UtNDVlYy1iYjFlLWZhOGRiY2Y0MGQzZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF5ZGVuIFdyaWdodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5ZjI3ODdhLTMzNTItNDFhNi04ODEwLWQ4MGU5N2IyNTNiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ3VycnkgQWxpY2lha2V5ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzAxZWU4MS00MDZlLTQzZDktYjJiYi01NWNhNmUwZjc3NjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hbGlrIERlc3RpbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZmZiMTE1My05MDlkLTQ0YzctOWRmMS02ZWQzYTlhNDViYmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vbnRnb21lcnkgQnVsbG9ja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI4MTYyZGE3LWVhZmEtNGViMS04YmMxLTVhNjI1ZjAzYWU1N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFncyBCYW5hbmFuYW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWEyNmZjNjEtZDc1ZC00YzAxLTljZTItMTg4MGZmYjU1NTBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYW5keSBEZW5uaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZmVkNzJkZi04N2RlLTQwN2QtODI1My0yMjk1YTJiNjBkM2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0b3V0IFNjaG1pdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OTAzYTc0Zi1mMzIyLTQxZDItYmQ3NS1kYmY3NTYzYzRhYmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW5jaXNjYSBTYXNxdWF0Y2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZGNiYzI5MC04MWM1LTRkYTktYjRkYS0yZTU5NGIwODA3MTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyZWVtaXVtIFNlcmFwaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMyMmUzYWY1LTkwMDEtNDY1Zi1iNDUwLTg2NGQ3ZGIyYjRhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9nYW4gSG9yc2VtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMDU5NDkzMi04ZWY3LTRkNzAtOTg5NC1kZjRiZTY0ODc1ZDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpdHpnZXJhbGQgV2FuZGVybHVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJiNWY1ZGQ3LWUzMWYtNDgyOS1iZWM1LTU0NjY1MjEwM2JjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVkbGV5IE11ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YzM0NmQ4Yi1kMTg2LTQyMjgtOWFkYi1hZTkxOWQ3MTMxZGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyZWVyIEd3aWZmaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZWNlYTdlMC1iMWZiLTRiNzQtOGM4Yy0zMjcxY2I1NGY2NTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpdHpnZXJhbGQgQmxhY2tidXJuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjZhYThjZTgtMjU4Ny00NjI3LTgzYzEtMmE0OGQ0NGFmYWVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJbmt5IFJ1dGxlZGdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzZlMmUzODktZWQwNC00NjI2LWE1YmEtZmUzOThmZTg5NTY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZW5yeSBNYXJzaGFsbG93XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzgxN2M2Y2MtODU3NC00ODU3LTgzZjEtNGEzMTFmYTg5MjU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU291bCBJVlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlMGU1N2E3LTg5ZjUtNDFlYS04MGY5LTZlNjQ5ZGQ1NDA4OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9uZyBXcmlnaHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZjU3NjRjNy1jM2EwLTRkYWUtYWQxNy1jNjY4OWYxZThjMjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyaXNrZXQgRnJpZW5kb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4ZWUyNTZmLWUzZDAtNDZjYi04Yzc3LWIxZjg4ZDhjOWRmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tZm9ydCBTZXB0ZW1iZXJpc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YmYzNTJkMi02YTU3LTQyMGEtOWQ0NS1iMjNiMmI5NDczNzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpdmVycyBSb3NhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWU0ZGZhMTYtZjFiOS00MDBmLWI4ZWYtYTE2MTNjMmIwMjZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTbnlkZXIgQnJpZ2dzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGI1M2NlODItNGIxYS00OGYwLTk5OWQtMTc3NGIzNzE5MjAyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPbGl2ZXIgTXVlbGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc0MGQ1ZmVmLWQ1OWYtNGRhYy05YTc1LTczOWVjMDdmOTFjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29ubmVyIEhhbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDViNmIxMWQtMzkyNC00NjM0LWJkNTAtNzY1NTNmMWYxNjJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPZ2RlbiBNZW5kb3phXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjI0NWY2YzYtNDYxMy00MGY1LWJjM2ItODVhYTllZTNjZjdlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJVc3VycGVyIFZpb2xldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY0Y2E0MzdjLWMzMWMtNDUwOC1hZmU3LTZkYWU0MzMwZDcxN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbiBCZWFuc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQwOWQxYzk2LTc2MGItNGE5Ni05YTNjLTQ4MTExMmRkZjM3YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmlxIE55b25nJ29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0M2Q1ZGE1Zi1jNmExLTQyZjEtYWI3Zi01MGVhOTU2YjZjZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1c3RpY2UgU3Bvb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MTE2OTIxZi03NjQyLTQ0MWEtOWE4NS00MGM5M2ExZTYxYmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vcmRlY2FpIEtpbmdiaXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjYyOWNiN2EtNDE0Yi00Njk1LWExMTUtNzUyOGFiNzAwMzQ2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGlyYWkgTWNFbHJveVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUxMTFhNDZkLTVhZGEtNDMxMS1hYzRmLTE3NWNjYTMzNTdkYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxleGFuZHJpYSBSb3NhbGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWE0NGJkMzYtNjViNC00ZjNiLWFjNzEtNzhkODdhNTQwYjQ4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBQb3Rob3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNzgzOTc1NC1jMzUxLTQzZWMtOWJmZi1jYTY2MmEyMzg1YjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvdWJlcnQgSmktRXVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODZhZGFjNmYtYzY5NC00NGFjLTk1NjAtNzU4ZGU3ZWFjOTM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWFjayBFbmpveWFibGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ODhmY2U3YS0wZDIxLTQ3OGEtOWI0NS00NjYyMTkzZmU5YWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvbGVuZSBXaWxsb3d0cmVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjBjMjA5MTYtNzA5Ny00N2U2LTgyMjYtY2JmNjdkYTE3NmUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZWx2aW4gQW5kYW50ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4OWFmNTE4LWUyN2MtNDI1Ni1hZGM4LTYyZTNmNGIzMGY0M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lsdmlhIFJ1Z3JhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI4NTkxNjZkLTZhZWQtNDI2Mi1iMDViLWRiODVjNDliMzM5MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9ubmEgTWlsaWNpY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1NDJmMGIwLTM0MDktNGE0YS1hOWUxLWU4ZThlNWQ3M2ZjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJvY2sgV2F0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODJkMWI3YjQtY2UwMC00NTM2LTg2MzEtYTAyNWYwNTE1MGNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW0gU2NhbmRhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJmZmJhZWM4LWE2NDYtNDQzNS1hMTdhLTNhMGEyYjVmM2UxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm9uayBKb2tlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxZGFiODY4LTgyMGItNDk2OS04YmJhLWJkZTBiZTgwOTBkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ3JhdmVsIEdlc3VuZGhlaXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MTRiYWU2MS0wNzFhLTQ0OWItOTgxZS1lN2FmYzgzOWQ2ZDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1c2xhbiBHcmVhdG5lc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTdkMzNiNy0xYmJhLTQ4ZDYtYTFkMS1jZDBlMjkyMzFiZThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphY29ieSBQb2RjYXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDM1Y2NlZTEtOTU1OS00OWExLWFhYTQtNzgwOWY3YjVjNDZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGb3JyZXN0IEJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OTVhNmJkYy0xNzRkLTRhZDYtOGQ1MS05ZWU4OGIxYzJlNGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNoYXF1aWxsZSBUb3JyZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YjZmMGE0ZS1kZTE4LTQ0YWQtYjQ5Ny0wM2IxZjQ3MGM0M2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvZHJpZ3VleiBJbnRlcm5ldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExOTlhNjgxLWRlY2YtNDQzMy1iNmFiLTU0NTQ0NTBiYmU1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVhY2ggSW5ncmFtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzE4MmYzM2MtYWVhNS00OGEyLTk3ZWQtZGM3NGZhMjliM2MwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTd2FtdWVsIE1vcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMmM0NzdmYi0yOGVhLTRmY2ItOTQzYS05ZmFiMjJkZjNkYTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbmRmb3JkIEdhcm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZjYmUxZDE0LTA0YzQtNDMzMS05N2FkLTQ2ZTE3MDYxMDYzM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9kZSBQcmVzdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDQyOTYyYzgtNGQ4Yi00NGE2LWI4NTQtNmNjZWYzZDgyNzE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb25hbiBKYXlsZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzliNWFhZS04NTcxLTRjOTAtODg3YS02YTAwZjJhMmY2ZmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRpY2tlcnNvbiBNb3JzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkMDdjY2QwLWNhYzctNGNjZC1iYWI2LWEwNzhiYjk4MzE3NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5naW5lIEViZXJoYXJkdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlkNmYzZDIzLWJjMjYtNDBlNi05M2FhLTBiMWM2OTNlMGJhOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmlsZXkgRmlyZXdhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZDhkMTVmNC1lMDQxLTRhMTItYTEwZS05MDFlNjI4NWZkYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhYnkgVHJpdW1waGFudFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNmYjQyMzI1LTU5MmEtNDExOS05YjQwLTRjZGMxOTk1OWIwOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFuZHkgU2x1bXBzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2FlYjhlMGItZjZmYi00YTllLWJiYTItMzM1ZGFkYTVmMGEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEdW5sYXAgRmlndWVyb2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OGNkNmVmYS1kYmYyLTQzMDktYWFiZS1lYzFkNmYyMWY5OGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhld2l0dCBCZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDA2ZTFkMzItOTc0Mi00OGVmLWE2YmEtMzY1NDVlOTNiOWUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb21neSBSb2xzZW50aGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjBiZTFjMzQtMDcxZC00MGM2LTg4MjQtZGRlMmFmMTg0YjRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRYWlzIERvZ3dhbGtlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIyNjhmNDUyLTAxYjktNGUxNi05OGJiLWMwN2UzY2U3NjdlM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FuZGEgU2NoZW5uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjhmOThhMDQtMjA0Zi00Njc1LTkyYTctODgyM2YyMjc3MDc1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJc2FhYyBKb2huc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWQxZTY3MGEtZjM0Ni00YmY3LWEwMmYtYTkxNjQ5YzQxY2NiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGFuaWUgV2ludGVyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU2NTAyYmM3LTViNzYtNDkzOS05ZmI4LTEzMjA1NzM5MGIzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JlZXIgTG90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3NDFkYzAxLTJiYWUtNDQ1OS1iZmMwLWY5NzUzNjE5M2VlYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxlamFuZHJvIExlYWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMWRlNGRhMy04MjA4LTQzZmYtYTFmZi0wYjM0ODBhMGZiZjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbiBNaXRjaGVsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJjNGIyYTZkLTk5NjEtNGU0MC04ODJjLWEzMzhmNGU3MjExN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXZlbHRvbiBNY0JsYXNlIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmZjMzY4OWYtYmI3ZC00MzgyLTk4YTItY2Y2ZGRjNzY5MDlkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDZWRyaWMgR29uemFsZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMTg5NjFlOS1lZjNmLTQ5NTQtYmQ2Yi05ZmUwMWM2MTUxODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhcm1lbG8gUGx1bXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MWJkYjUyNy0xZmIyLTQ4N2QtODIzNy0wOTM5NThlNzM3ZTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplcGh5ciBNY0Nsb3VkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmU5NGZhMGQtNDUzZi00OTI1LThlYTAtYzBhNTNlMzgxMDhkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdXJvcmEgQmxvcnRsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MWFkODA2MC0yYmJlLTQ4NzItYTg3OS0yMmNiMTAyYmI2NGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllyalxcdTAwZjYgS2VyZnVmZmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWIzNmM3NzYtYjUyMC00MjliLWE4NWYtYmY2MzNkN2IwODFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHb29iaWUgQmFsbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0ZTE0ZDdiLTUwMjEtNDI1MC1hM2NkLTkzMmJhOGUwYTg4OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF5bGVuIEhvdGRvZ2ZpbmdlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiY2EzODgwOS04MWRlLTQyZmYtOTRlMy0xYzBlYmZiMWU3OTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZhbW91cyBPY29ubm9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGEwYmJiZTYtZDEzYy00MGNjLTk1OTQtOGM0NzY5NzVkOTNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5nIFJpY2hhcmRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYTY3YzE5Ni00Y2FjLTQyOGItOGMxOC0yYTQxMTA1NWVhMzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIll1c2VmIEZlbmVzdHJhdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1Njc5ZDVkZS1mNDE3LTQ1ZGItYWI4ZC00OWI5MmU3NDQ0ODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyaW5pdHkgUm9jaGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmM2RkZmQ4Ny03M2EyLTQ2ODEtOTZmZS04Mjk0NzZjOTc4ODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW9kb3JlIER1ZW5kZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc2NjNjM2NhLTQwYTEtNGYxMy1hNDMwLTE0NjM3ZGNlNzk3YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUG9sa2FEb3QgWmF2YWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjIzNmJkNWItNGZmMS00MTU0LWEzY2QtN2NiM2MwZGRhYTViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUYWkgQmVhbmJhZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVmOWY4Yjk1LTllNzMtNDljZC1iZTU0LTYwZjg0ODU4YTI4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29sbGlucyBNZWxvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0OTMxNTQ2LTFiNGEtNDY5Zi1iMzkxLTdlZDY3YWZlODI0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2xhYmUgTW9vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE2Nzc1MWQ1LTIxMGMtNGE2ZS05NTY4LWU5MmQ2MWJhYjE4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFjb2IgV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDVlZjNjZmEtYjlhNi00ZTE2LWEzZGYtNmMyMzZlOGJkYjNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSeWxhbiBPJ0xhbnRlcm5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNWFlNjRjZC1mNjk4LTRiMDAtOWQ2MS1jOWZmZmQwMzdhZTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pY2tleSBXb29kc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjljMzI3M2EwLTI3MTEtNDk1OC1iNzE2LWJmY2Y2MDg1NzAxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2F0aHkgTWF0aGV3c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzOTdlZDkxLTYwOGUtNGIxMy05OGVhLWU5NGM3OTVmNjUxZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWVvbmctSG8gR2FyY2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDQ3ZGQwOGUtODMzYy00MzAyLWE5NjUtYTM5MWQzNDU0NTVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdHUgVHJvbG9sb2xcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZWRkZDA1Ni05ZDcyLTQ4MDQtYmQ2MC01MzE0NGI3ODVkNWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbGViIE5vdmFrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWRiZjExYzAtOTk0YS00NDgyLWJkMWUtOTkzNzkxNDhlZTQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25yYWQgVmF1Z2hhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjljMjM3MDJiLWYwYzItNDY2OC04YmNjLTYxYmJkYmJmZDkzZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JvbGxpcyBaZXBoeXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNmVjOGQwMC1hNzhmLTRmNmItYjUxYS1kYjlmNTUwN2NmMGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZveHkgUGViYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjFiMTQxZmMtZTg2Ny00MGQxLTg0MmEtY2VhMzBhOTdjYTRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaWNoYXJkc29uIEdhbWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Y4ZTE1MmUtMmQyNy00ZGNjLWJhMmItNjgxMjdkZTRlNmE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZW5kcmlja3MgUmljaGFyZHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4M2QwOWQ0LTdlZDMtNDEwMC1iMDIxLThmYmUzMGRkNDNlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVzc2ljYSBUZWxlcGhvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZTU1MjQ4Yi0zMThhLTRiZmItODg5NC0xY2M3MGU0ZTA3MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW8gS2luZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQzMDRiY2Y5LTIzOWEtNGFhMi1hNDEwLTU2YTQ4NzIxN2EyYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFuY2Vsb3QgS2FuZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgxYTA4ODlhLTQ2MDYtNGY0OS1iNDE5LTg2NmI1NzMzMTM4M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3VtbWVycyBQb255XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODdlNmFlNGItNjdkZS00OTczLWFhNTYtMGZjOTgzNWExZTFlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJjbyBTdGlua1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI5MjkzYmViLWQxOTktNGI0Ni1hZGQ5LWMwMmY5MzYyZDgwMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmF1ZXIgWmltbWVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTlhNDZlMGMtMDQzNy00NDNhLWJlODEtOTU2NjY1ZWM1ODhlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIaWVyb3BoYW50aWMgRm9pYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTUxM2FhYjYtMTQyYy00OGM2LWI0M2UtZmJkYTY1ZmQ2NGU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYWxlYiBBbHZhcmFkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMzMWQ4NzRjLTFiNGQtNDBmMi1hMWIzLTQyNTQyZTkzNDA0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2VkcmljIFNwbGlmZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc2YzQ4NTNiLTdmYmMtNDY4OC04Y2RhLWM1YjhkZTE3MjRlNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFycyBNZW5kb3phXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODBkZmY1OTEtMjM5My00NDhhLThkODgtMTIyYmQ0MjRmYTRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbHZpcyBGaWd1ZXJvYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjllNzI0ZDlhLTkyYTAtNDM2ZS1iZGUxLWRhMGIyYWY4NWQ4ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGF0ZmllbGQgU3V6dWtpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzczZDU5ZGQtMzJhMC00OWNlLThhYjQtYjJkYmI3ZGM5NGVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZHVhcmRvIEluZ3JhbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY4YzIwNjkzLWY0MzktNGEyOS1hNDIxLTA1ZWQ5Mjc0OWYxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tYnMgRHVlbmRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWM2OWRiYTMtNjIyNS00YWZkLWFiNGItMjNmYzc4ZjczMGZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZXZhbiBXaXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGE2ZmM2N2QtYTdmZS00NDNiLWEwODQtNzQ0Mjk0Y2VjNjQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUZXJyZWxsIEJyYWRsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNjFiMjg3MS03MjU0LTQ5YjMtYjAwOS0xNzRhMjNhY2FhMWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvbiBIYWxpZmF4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTM3NmE5MGItN2ZmZS00N2EyLWE5MzQtZjM2ZDY4MDZmMTdkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3dlbGwgUm9jaGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNzU1ZWZjZS1kMDRkLTRlMDAtYjVjMS1kODAxMDcwZDM4MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhc2lsaW8gRmlnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjM4YzVkODAtMDkzZi00NmViLTk5ZDYtOTQyYWE0NWNkOTIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmRyZXcgU29saXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzQ4YzAzNy1lZWZjLTRiODEtOGVkZC1kZmE5NjE4OGE5N2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvd2UgRm9yYmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzZhMjc3YzMtZDJiNS00MzYzLTgzOWItOTUwODk2YTVlYzVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWtlIFRvd25zZW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjYwNjA1ZTYtZmY0MS00Mzg4LWE2MWEtZmFmZDIxNzVmN2FkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbHdpbiBNY0doZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyODk2NDQ5Ny0wZWZlLTQyMGMtOWMxZC04NTc0ZjIyNGE0ZTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkluZXogT3dlbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZDMzN2I0Ny0yYTdkLTQxOGQtYTQ0ZS1lZjgxZTQwMWMyZWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhc2UgU3BvcnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjg1Y2U3N2QtZTVjZC00ZGFhLTk3ODQtODAxMzQ3MTQwZDQ4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTb24gU2NvdGNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWM3M2Y5MWUtMDU2Mi00ODBkLTk1NDMtMmFhYjFkNWU1YWNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGFya3MgQmVhbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YjBmOTFhYS00ZDY2LTQzNjItOTkzZC02ZmY2MGY3Y2UwZWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJsYW5rZW5zaGlwIEZpc2NoZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODFjZTY2Mi0wN2I2LTRhNzMtYmFhNC1hY2JiYjQxZjlkYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIll1bW15IEVsbGlvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNWJkMDhkNS03ZDlmLTQ1MGItYWJmYS0xNzg4YjhlZThiOTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXZlbnNvbiBNb25zdGVyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExZmJhNTU1LWE0OGMtNDRmMy1hZmI2LTUyMmVhMjU2OTQ3Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWluZHkgS3VnZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMzhhZGEwYS1hZWFjLTRhM2QtYjlhNS05Njg2ODdjY2QyZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpeHBhY2sgU2FudGlhZ29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NzQ0OGI2Mi1mOTUyLTQwZTItODIwYy00OGQ4YWZlMGY2NGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplc3NpIFdpc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MjVmM2Y4NC1iYWIwLTRjZjItOTFjMS05NmU3OGNmNWNkMDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkx1aXMgQWNldmVkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRmNGRhODFhLTkxN2ItNDM0Zi1iMzA5LWYwMDQyM2VlNDk2N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXVnZW5pYSBCaWNrbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYTQ3N2M5Mi0zOWI2LTRhNTItYjA2NS00MGFmMmYyOTg0MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvd2VsbCBGcmFua2xpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwN2FiNWE4LWVjZTMtNGM0ZC1iMmQyLTk4ZTNhN2NmODY0ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2ljaGl0YSBUb2FzdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2QzYmU3YjgtMWNiZi00NTBkLTg1MDMtZmNlMGRhZjQ2Y2JmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaYWNrIFNhbmRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMjk1YzZjMi1iMzNjLTQ3ZGQtYWZmYS0zNDlkYTdmYTE3NjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbWJzIEVzdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWI5ZWIyMTMtMDkxNy00Mzc0LWEyNTktNDU4Mjk1MDQ1MDIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXRoZW8gQ2FycGVudGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzBjODViZTQtZmYyNi00NzBmLTgxMzUtYWY3NzFmZDIxZTUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmF0aGVtYSBFbGVtZWZheW9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMTQxMDBhNC0xYmY3LTQ0MzMtYjMwNC02YWFkNzU5MDQwNTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkt1cnQgQ3J1ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZWQ2MWIxOC1jMWY2LTRkNzEtYWVhMy1jYWFjMDE0NzBiNWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbm55IE1hcmlqdWFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMxN2E0Mzk3LTRkY2MtNDQwZS04YzUzLWQ4OTdlOTcxY2FlOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVndXN0IE1pbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOWMwZDNjYi1kOGJlLTRmNTMtOTRjOS1mYzUzYmNiY2U1MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdHRlbyBQcmVzdGlnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEwNjhmNDRiLTM0YTAtNDJkOC1hOTJlLTJiZTc0ODY4MWE2ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxsaXNvbiBBYmJvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwY2I0NDAyNi1lYmYwLTQ4NzAtYjk4ZS1lNjIwYjA4MTQ4MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pY2hlbGxlIFNwb3J0c21hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBmNjFkOTQ4LTRmMGMtNDU1MC04NDEwLWFlMWM3ZjlmNTYxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGFtYXJhIENyYW5raXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODlkYTJkMi02NzRjLTRiODUtODk1OS1hNGJkNDA2Zjc2MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpc2ggU3VtbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmNiMDhlNGYtZGYzYS00NDZjLWFiNTAtNThhNDk2YWM1ZjNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZW5uZXR0IEJsdWVza3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiYzI5YWZjMS1jOTU0LTRkZWYtOTc4Yi1hNTlhZTVkZWYzYzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpZ2J5IEZyaWVkcmljaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA3MDc1OGEwLTA5MmEtNGEyYy04YTE2LTI1M2M4MzU4ODdjYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWx4IEtlbWluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwNzY4MzU0LTk1N2UtNGI0Yy1iYjZkLWVhYjZiYmRhMGJhM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXVnZW5pYSBHYXJiYWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDE5Y2UxMTctMjM5OS00MzgyLTgwMzYtOGMxNGRiN2UxZDMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3JpIEJvc3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyNTc3MjU2LWJjNGUtNDk1NS04MWQ2LWI0MjJkODk1ZmIxMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzbWluZSBXYXNoaW5ndG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWRhZGVlMTEtYTExZi00NDJhLTliZTMtY2IwYjEwYjg2NzE5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWVrYWJvbyBOYW1lcGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWRlZDAzODQtZDI5MC00ZWExLWE3MmItNGY5ZDIyMGNiZTM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdWFuIE11cnBoeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFlMjI5ZmU1LWExOTEtNDhlZi1hN2RkLTZmNmUxM2Q2ZDczZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXJpY2tzb24gRmlzY2hlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFmMTQ1NDM2LWIyNWQtNDliOS1hMWUzLTJkM2M5MTYyNjIxMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9lIFZvb3JoZWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjE1NTViZmItNmFlZC00NTEwLTg2M2EtODAxYmUzYjZkOTk3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmFzdGFzaWEgSXNhcm9ib3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMWNiYmZhYS0xMDBlLTQ4YzUtOWNlYS03MTE4YjBkMDhhMzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1aWNlIENvbGxpbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNGNhOTc2Zi1kZGYyLTQ5NjYtYmExNC00ZmQyYjliMjAzNDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsd2luIEJsYXNrZXRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjY2YWJjYzAtOGFiYy00NTcwLWIzMmUtZTU2NjhlNWQzOGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJab2V5IEtpcmNobmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmUxMzI0OWUtMzhmZi00NmEyLWE1NWUtZDE1ZmE2OTI0NjhhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWaXRvIEtyYXZpdHpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZjNkN2JjNy02ZmZiLTQwYzMtYTk0Zi01ZTYyNmJlNDEzYzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsaWphaCBWYWxlbnp1ZWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzIwNWY0ZmYtNzA1MC00NzBiLTg5NzAtOGQ3ZWE1NjU2NGJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHaWEgV3VwcG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNWFjYjZlYS05YTdjLTQ5YjYtODA5Yy01OTQwOWY1NTc2NTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkt1cnQgVWx0cmFiYXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzZhOTg2M2MtYmY2OS00ZGRkLWJiZTAtNmQ2NGIwZDAwZThjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZYXNzbHluIFN0YXR0ZXIgSnIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzc4YzA3YjAtNTY0NS00NGI1LTg2OWYtNDk3ZDE0NGM3YjM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGeW5uIERveWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2MwNTFiOTItNGE4Ni00MTU3LTk4OGEtZTMzNGJmNmRjNjkxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeWxlciBMZWF0aGVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2MxOWFhOTMtM2Y5ZC00YmUwLWFlNWEtOGFkZTEwMGE5NjY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb24gVHVtYmxlaG9tZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1NjJhYzFmLTAyNmMtNDcyYy1iNGU5LWVlNmZmODAwZDcwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hyaXMgS29jaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRlYzY5NTFmLTY4MjItNDg2MS1iYzI1LTc5ODI2ZGQ4YzU1NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2hlZXYgU2hyaWZmbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MjBlNjA2Ni1iMTRiLTQ1Y2YtOTg1Yy0wYTZlZTJkYzNmN2FcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppIFNsaWRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MmNmZWJmYi04MDA4LTRiOWYtYTU2Ni03MmEzMGUwYjY0YmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwZWFycyBSb2dlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1M2U3MDFjNy1lM2M4LTRlMTgtYmEwNS05YjQxYjRiNjRjZGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcnF1ZXogQ2xhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NGU1ZjIyMi1mYjE2LTQ3ZTAtYWRmOS0yMTgxMzIxOGRhZmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyaXQgV2F0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTgzMWEyMzgtOGVmZS00ZDUzLWE0ODMtMWFkNjgxZTUwYWMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHaXRhIFNwYXJyb3dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YTZiMGM2ZC0xY2M4LTRhY2ItOTkxYy0wZmZlNjJmM2Q5OTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvdHVzIENsdXRjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVjNjBmODM0LWExMzMtNGRjNi05YzA3LTM5MmZiMzdiM2U2YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFtaXJleiBXaW50ZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWRkZWU0OWQtNzlmMi00ZWJhLWEzYzktMTc0Nzg0MzIyMDU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb2JiaW4gSW5uaW5nc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWYzYjVkYzItMzUxYS00ZGVlLWE5ZDYtZmE1ZjQ0ZjJhMzY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbHN0b24gRW5nbGFuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmNWIzYjE4LWViYzUtNDYxMS1iOGJmLTYxYjhjNmEzYmExMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTnVjbGV1cyBDcmVzdGhpbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZmJmMDRiYi1mNWVjLTQ1ODktYWIxOS0xZDg5Y2RhMDU2YmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbmlhIERvbGxpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYzMDVlMmRkLTJkNWQtNDllZC1hYjQ3LWIxYjU2ZjBlN2U4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FuZGEgRmlhc2NvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjRhYWEzY2ItN2RhZi00N2UzLTg5YTgtZTU2NWEzNzE1YjVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmF2aXMgTmFrYW11cmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YTU2N2RhNi03Yzk2LTQ0ZDMtODVkZS1lNWEwOGE5MTkyNTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkN1ZGkgRGkgQmF0dGVyaW5vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmJhYzYyYWQtNzExNy00ZTQxLTgwZjktNWExNTVhNDM0ODU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcml0IEZyZWVtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjlkZTc3Ny1lODEyLTRjODQtOTE1Yy1lZjI4M2M5ZjBjZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFydHVybyBIdWVydGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjlmNTBlNi04MWJmLTQzNzEtOWEyNy1kZTNjODViZDVhODJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hbnUgQ2FuZGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmZhMDhlMDgtNmE5NS00ZmJjLTlkMDAtNWMzOWM1MzAyYjYwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXJyeSBCdXJraGFyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcxNThkMTU4LWU3YmYtNGU5Yi05MjU5LTYyZTViMjVlM2RlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2FyYXRvIEJlYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3M2E5MzRkZS0zZGIxLTQ1NTMtOTdmMi05ZTdiNTc3NDRiMzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbGloIFVsdHJhYmFzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdhNzVkNjI2LWQ0ZmQtNDc0Zi1hODYyLTQ3MzEzOGQ4YzM3NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVjayBXaGl0bmV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2M1YWUzNTctZTA3OS00NDI3LWE5MGYtOTdkMTY0YzcyNjJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWxvIEJyb3duXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2U0ZjAxMmUtODI4Yy00M2JiLThiOGEtNmMzM2JkZmQ3ZTNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXRlbCBPbGl2ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgyNzMzZWI0LTEwM2QtNGJlMS04NDNlLTZlYjZkZjM1ZWNkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRraW5zIFRvc3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg2ZDRlMjJiLWYxMDctNGJjZi05NjI1LTMyZDM4N2ZjYjUyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9yayBTaWxrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODhjYTYwM2UtYjJlNS00OTE2LWJlZjUtZDZiYmEwMzIzNWY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDbGFyZSBNY2NhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YjBkNzE3Zi1hZTQyLTQ0OTItYjJlZC0xMDY5MTJlMmI1MzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF2aWxhIEJha2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGI1ZGRkM2QtY2NhNi00ZTAxLWFjN2YtNjVkYzU2ODMxOTMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWVzIEdvcmN6eWNhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGQ4MWIxOTAtZDNiOC00Y2Q5LWJjZWMtMGU1OWZkZDdmMmJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGJlcnQgU3RpbmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZjExYWQ1OC1lMGI5LTQ2NWMtOTQ0Mi1mNDY5OTEyNzQ1NTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFtb3MgTWVsb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NGQ3NzJjNy0wMjU0LTRmMDgtODE0Yy1mNmZjNThmY2ZiOWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZsZXRjaGVyIFBlY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NGYzMGYyMS1mODg5LTRhMmUtOWI5NC04MTg0NzViYjFjYTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpcmtsYW5kIFNvYnJlbWVzYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3MzMzNGFhLTQ2ZDgtNDQxNS05MTJiLWE1ZTI2N2Y3NTI5YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVucnkgTWFybG93XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTczODc1ODAtMWY3Yy00OWVhLWE5ZTctNDRiZTg5MzI5MTMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJcm5lZSBGaWVzdGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5N2RmYzFmNi1hYzk0LTRjZGMtYjBkNS0xY2I5Zjg5ODRhYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyb2NrIEZvcmJlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk5NzY2YzFiLWM1OTAtNDI2MS1iMWI3LTNlOWM3ZmMzNTYwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzcGVyIEJsYXRoZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZTc1ZmY3Yy1mZTliLTQyOGItYTFiNi1mOWU2YTE3NDhjODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktvZmkgR2lsZGVoYXVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTE2MjhkOTctMTZjYS00YTc1LWI4ZGYtNTY5YmFlMDJiZWY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU291bFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE2OGU4MmFjLTczNzUtNDE3Ni1iNzU0LTYxNzVlYTQ3ZGNiNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3VhZGFsdXBlIEluY2FybmF0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE3ZWRiZjE5LWNhZjYtNDVkZC04M2Q1LTQ2NDk2Yzk5YWE4OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVzaCBWYWxlbnp1ZWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWNhOTA2MjUtNWJkZS00NDg5LWJjOWYtYTc5OTZhN2I5YTMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3F1aXJ5biBSYXRvb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZDU2Zjc0OS1lZTQ4LTRhODUtOTgyNy04NDU1YWVhZmUyNzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaW4gSmVzYXVsZW5rb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFmNmIzZWRjLWVkNTItNGVkYy1iMGM5LTE0ZTBhNWFlMGVlM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUml2ZXJzIENsZW1ib25zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjVjOTVkYmEtMjYyNC00MWIwLWFhY2QtYWMzZTFlMWZlODI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3RlIFJvZGdlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNzI2N2FiYS02MTE0LTRkNTMtYTUxOS1iZjZjOTlmNGUzYTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvc2EgSGF5ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNzdkZmZhYS1lMGY1LTQwOGYtYjlmMi0xODk0ZWQyNmU3NDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR1Y2tlciBMZW5ueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3Y2RiOTNiLTZmOWQtNDY4YS1hZTAwLTU0Y2JjMzI0ZWU4NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVzbGFuIER1cmFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmQ4Nzc4ZTUtMDJlOC00ZDFmLTljMzEtN2I2Mzk0MmNjNTcwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDZWxsIEJhcmFqYXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZmQ5ZmY1Mi05YmY2LTRhYWYtYTg1OS1kMzA4ZDhmMjk2MTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlY2xhbiBTdXphbm5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzA3MzJlMzYtMzczMS00ZjFhLWFiZGMtZGFhOTU2M2I2NTA2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYWdvbWkgTWNkYW5pZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNDk1MWNhZS0wYjQ3LTQ2OGItYTNhYy0zOTBjYzhlOWZkMDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpbW15IFZpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNGRlYzk1ZS03OGExLTQ4NDAtYjIwOS1iM2I1OTcxODE1MzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYXJsYXRhbiBTZWFicmlnaHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjOGRlNTNhNC1kOTBmLTQxOTItOTU1Yi1jZWMxNzMyZDkyMGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR5cmVlayBDYWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzkzMzlmNWUtMTA0MC00NjQyLWE0YTctMDdjZDM2ZDI4MWY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWFudHVtIEZsYWh3YWhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjOWEyMmZhNC0xNzIxLTRlZWYtYTFhNi02MjBjZGY3ZDM3N2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvc2NvZSBTdW5kYWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYzExMzQzMi01ZjliLTQ2ZjgtOTc0NS0wOWY5OTlkNTE4MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlZ2dpZSBDYW5iZXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNjOTMzYjc5LTkyMTgtNDY5My04MTcyLWYyM2Q0ZWFjY2RmN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hldCBUYWthaGFzaGlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTBhMTU2Yi1iYTdiLTQzMTMtOGZlYS03NTgwN2I0YmM3N2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbnJhZCBUd2VsdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTU4NDE1Zi00ZTYyLTQ3ZTItYTJjOS00ZDZhODU5NjFlMWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjaG5laWRlciBCbGFuY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMGRhZmQ0ZS1mY2EyLTRkOWMtYWNjYy1kNjU2NzhlNzU4OWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pbG5lciBSb2xzZW50aGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDg2ZjgzNmUtNGVkZi00ZGJkLTk3NDMtMTRmMzA0NjFlZTE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5jZSBTZXJvdG9uaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODc0MmQ2OC04ZmNlLTRkNTItOWE0OS1mNGUzM2JkMmE2ZmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ydGl6IE1vcnNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGFjMmZkNTUtNTY4Ni00NjVmLWExYjYtNmZiZWQwYjQxN2M1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdXNzbyBTbHVnZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGI1MzIxMWMtZjg0MS00ZjMzLWFjY2YtMGMzZTE2Nzg4OWEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmF2aXMgQmVuZGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGQwYjQ4ZmUtMmQ0OS00MzQ0LTgzZWQtOWYwNzcwYjM3MGE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaWxsbWFuIFdhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkNjA0NGVmLWM2MzUtNGFlZC05N2JkLWQxODA2ODQzMmI4ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWXVzZWYgUHVkZGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUwODM5YjZjLTcwZmQtNDIyOC1hZTNhLTYwYzcxM2QwMGQwOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHVja2VyIFRoYW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTE2YzNmMjgtZWVjZC00NTcxLWJlMWEtNjA2YmJhYzM2YjJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBHbG92ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlM2MwNjQwNS0wNTY0LTQ3Y2UtYmJiZC01NTJiZWU0ZGQ2NmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjcmFwIFdlZWtzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTRmMWYzNTgtZWUxZi00NDY2LTg2M2UtZjMyOTc2NjI3OWQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb25hbiBDb21ic1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU5N2U5Yjc0LTgwMTEtNDQxNS1iMjJjLTgyODJmMjIyODY4M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlrYW4gSGFtbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWNmMTk5MjUtZGM1Ny00Yjg5LWIxMTQtOTIzZDVhNzE0ZGJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJnYXJpdG8gQmlzaG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWNmZmE5YWEtNDVhNi00OTk3LWEwYTEtODk5MjVkODlmM2I2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZWJlZGlhaCBLcmFuY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZTI5MDIwZi0xOTY0LTRmY2UtODBmNC0zNWE1ZTdlZGZiOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ycGhldXMgWWFyZHN0aWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWZhNzNkZTQtYWYxNy00Zjg4LTk5ZDYtZDBkNjllZDFkMjAwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbnRvbmlvIE1jY2FsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYwNzE4ODljLWYxMGYtNGQyZi1hMWRkLWM1ZGRhMzRiM2UyYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmlvbiBGYWNlcHVuY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMGJjZjRiYi03NGIzLTQxMmUtYTU0Yy0wNGMxMmFkMjhlY2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhaG4gRm94XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjRhNWQ3MzQtMGFkZS00NDEwLWFiYjYtYzBjZDVhN2ExYzI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZ2FuIEhhcnJpc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjYxN2MxZWYtZDY3Ni00MTE5LTgzNTktYTVjM2FjM2JlZjUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdWNrIExhdGVuaWdodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY2YjM4ZTU2LTBkOTgtNGUwMC1hOTZlLTM0NWFhYWMxZTY1M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGV0aWNpYSBTbnlkZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmN2RlMDIyNy02NzM5LTQ4ZTItYmJkNi05ZGM3YjI0N2FiOWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwaWZmIFBpYXp6YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY5Njg1MzJhLWJmMDYtNDc4ZS04OWUwLTM4NTZiN2Y0YjEyNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFuaWVsIEJlbmVkaWN0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwZGUyYjA1LWUwZDQtNGQzMy05Mjk3LTk5NTFiMmI1Yzk1MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWx5c3NhIEhhcnJlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYWYyMzlhZS03ZTEyLTQyYmUtOTEyMC1mZWZmOTA0NTNjODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1lbHRvbiBUZWxlcGhvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YjAxY2MzZi1jNTlmLTQ4NmQtOWMwMC1iOGE4MjYyNGU2MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpb2JoYW4gQ2hhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNjJjNDljNi04MzAxLTQ4N2QtODM1Ni03NDcwMjNmYTQ2YTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZXhhbmRyaWEgRHJhY2FlbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYWU4Y2JmYy0yMTU1LTQ2NDctOTk5Ni0zZjI1OTEwOTFiYWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZvcnJlc3QgQm9va2JhYnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZDI5M2Q2Yy0zYTIwLTQzYWItYTg5NS0yYjdmMWYyODc3OWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNsb3NoIFRydWtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MzYxZTM4MS02NjU4LTQ4OGItODIzNi1kZGU2YTI2NDU1NGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIll1cnRzIEJ1dHRlcmN1cFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE1YWRjODRjLTgwYjgtNDllNC05OTYyLThiNGFkZTk5YTkyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmljaGFyZHNvbiBUdXJxdW9pc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMWYyNWVhZS00NjVmLTQzY2MtOTM2Ni1mMTlhZGRjODAzYmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1ZmZpYW4gQXBwbGVzYXVjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzZmJmZTIzLTM3YmQtNGUzNy1hNDgxLWE4N2VhZGI4MTkyZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2hpdCBTdGVha2tuaWZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjVmM2E2N2MtNGVkNS00NWI2LTk0YjEtY2U0NjhkM2VhZDIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb2JicyBDYWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjNkNTE4YjktZGM2OC00OTAyLWI2OGMtMDAyMmNlYjI1YWEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZW5kcmlja3MgUmFuZ2VsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDZjNjlkMmQtOTM0NC00YjE5LTg1YTQtNmNmY2JhZWFkNWQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3NodWEgV2F0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWI5NzI3ZjctNmEyMC00N2QyLTkzZDktNzc5ZjBhODVjNGVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZW5uZWR5IEFsc3RvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNGQ4ODc3MS03YTk2LTQ4YWEtYmE1OS0wN2JhZTE3MzNlOTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNlYmFzdGlhbiBUZWxlcGhvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMTc1Y2RhMC1hNDI3LTQwZmQtYjQ5Ny0zNDdlZGNjMWNkNjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvdGJveCBTYXRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzQyNjc2MzItOGMzMi00YThiLWI1ZTYtY2UxNTY4YmIwNjM5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHdW50aGVyIE8nQnJpYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MGM2ZTZjYS03N2ZjLTQyYjctOTRkOC1kOGFmZDZkMjk5ZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pa2kgU2FudGFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZhNDBkNmVhLWUyNGItNDQyMi05ZGYxLTA2NDNhYjIwMmM1ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29vbG5hbWUgR2FsdmFuaWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NTU3NzVjMS0yNjZmLTQwZjYtYjA3Yi0zYTY3Y2NkZjg1NTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pYyBXaW5rbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzMzMDY3ZmQtYzJiNC00MDQ1LWE5YTQtZTg3YThkMDMzMmQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWd1ZWwgSmFtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNzMwMDljNS0yZWRlLTRkYzQtYjk2ZC04NGJhOTNjOGE0MjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRob21hcyBLaXJieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzODY5NGI3LTYyNTYtNDcyNC04NmI2LTM4ODQyOTlhNWQ5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUG9sa2FEb3QgUGF0dGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjQ1MDVjNDgtZmM3NS00ZjllLTg0MTktNDJiMjhkY2M1MjczXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZWJhc3RpYW4gVG93bnNlbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4Y2QwNmFiZi1iZTEwLTRhMzUtYTNhYi0xYTQwOGEzMjkxNDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdsb3JpYSBCdWdzbmF4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzgzYTEzZjYtZWU2Ni00YjFjLTk3NDctZmFhNjczOTVhNmYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaSBEZWxhY3J1elwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQwZDdiOGZlLWJhZDgtNDgxZi05NzhlLWNiNjU5MzA0ZWQ0OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRhbGJlcnRvIFRvc3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVjYjhkMmY1LTRmZjUtNDg5MC05NjkzLTU2NTRlMDAwNTVmNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWVvbmctSG8gQmVuaXRlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQxM2IzZGRiLWQ5MzMtNDU2Ny1hNjBlLTZkMTU3NDgwMjM5ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2lubmllIE1jY2FsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU3MjkwMzcwLTY3MjMtNGQzMy05MjllLWI0ZmMxOTBlNmE5YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9vbmV5IERvY3RvciBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVlYWM3ZmQ5LTBkMTktNGJmNC1hMDEzLTk5NGFjYzBjNDBjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3V0dG9uIEJpc2hvcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE2NDczODhkLWZjNTktNGMxYi05MGQzLThjMTgyNmUwNzc3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hhbWJlcnMgU2ltbW9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYwMDI2YTlkLWZjOWEtNGY1YS05NGZkLTIyMjUzOThmYTNkYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJpZ2h0IFppbW1lcm1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlY2Y2MTkwLWY4NjktNDIxYS1iMzM5LTI5MTk1ZDMwZDM3Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNCYXNlYmFsbCBDbGVtYm9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdkY2Y2OTAyLTYzMmYtNDhjNS05MzZhLTdjZjg4ODAyYjkzYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFya2VyIFBhcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWM4MTMwMDgtYjJhOS00MjU3LTgwZTctYTcwOWM2NzE4OWZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb3R0bGVzIFN1bGpha1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhlMWZkNzg0LTk5ZDUtNDFjMS1hNmM1LTZiOTQ3Y2VjNjcxNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVmVsYXNxdWV6IE1lYWRvd3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNTFmMWZlOC00YWI4LTQxMWUtYjgzNi01YmJhOTI5ODRkMzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhpcm90byBDZXJuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJiMWNiOGEyLTllYmEtNGZjZS04NWNmLTVkOTk3ZWM0NTcxNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXNhYWMgUnViYmVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTVkM2E4NDQtZGY2Yi00MTkzLWE4ZjUtOWFiMTI5MzEyZDhkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZWJhc3RpYW4gV29vZG1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY5MTk2Mjk2LWY2NTItNDJmZi1iMmNhLTBkOWI1MGJkOWI3YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9zaHVhIEJ1dHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYWQwNmIxOS00MmEwLTQ3ZTUtODJkNy02ZTY2ZDRhZGM5YTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhZCBTZWV0aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVmMzJlYjQ4LTQ4NjYtNDlkMC1hZTU4LTljNDk4MmUwMTE0MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRml0emdlcmFsZCBNYXNzZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NGIwNTVkMS1iNjkxLTRlMGMtODU4My1mYzA4YmE2NjM4NDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW9kb3JlIFBhc3NvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZlYmFjNzQ2LTY2ODUtNGQwZi04ZTg0LTZiMjEyOTliNTE2OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVyY3VsZXMgQWxpZ2hpZXJpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzAwN2NiZDMtN2M3Yi00NGZkLTlkNmItMzkzZTgyYjFjMDZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYWZhZWwgRGF2aWRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjJkNGMwNmQtMjZjMi00MDMxLWFlN2YtZmQwZWViOTJmNTdkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3JyaXMgRmlyZXN0YXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NWY5ZDg3NC01ZTY5LTQzOGQtOTAwZC1hM2ZjYjFkNDI5YjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vc2VzIE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGE5NWQ5ZDgtM2RjYy00ODhkLWIxY2ItMTk2OTAyNzFhZTRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFua2llIEhhbWJvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NTBhN2JhOS1lNTk1LTQwYmUtOTNlNS00MDIxZjFmOTQ2MGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbm55IENydW1iXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTQ4Y2U4YTgtMTljZC00ZjgxLWI4NGYtODhjY2UwMmM0N2JjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGbGF0dGVyeSBNY0tpbmxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJlNmQ0ZmE5LWY5MzAtNDdiZC05NzFhLWRkNTRhM2NmN2RiMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFcXHUwMGZhbCBMZWFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGY3ZDc0OTAtNzI4MS00ZjhmLWI2MmUtMzdlOTlhN2M0NmEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbm5pZSBSb2xhbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMmYzOTgxNS01MjkxLTRkY2YtYmExOS05N2RjZjBjMDE1ZTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0aWpuIFN0cm9uZ2JvZHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYzExOTYzYi1hMDViLTQ3N2ItYjE1NC05MTFkYzMxOTYwZGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlB1ZGdlIE5ha2Ftb3RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGJkYTY1ODQtNmMyMS00MTg1LTg4OTUtNDdkMDdlOGFkMGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGRvbiBBbnRob255XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODBhMmYwMTUtOWQ0MC00MjZiLWE0ZjYtYjk5MTFiYTNhZGQ4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXVsIEJhcm5lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJjYTBjNzkwLWUxZDUtNGExNC1hYjNjLWU5MjQxYzg3ZmMyM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVycmF5IFBvbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjODZiNWFkZC02YzlhLTQwZTAtYWE0My1lNGZkN2RkNGYyYzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvc2EgRWxmdG93ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MGE0NThlZC0yNWNhLTRmZjgtOTdmYy0yMWNiZjU4ZjJjMmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyZXZpbm8gTWVycml0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkNjhkM2E2LTdmYmMtNDQ1ZC05MGYxLTk3MGM5NTVlMzJmNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlndWVsIFdoZWVsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjlmOWMyNS00M2VjLTRmMGItOTkzNy1hNWFhMjNiZTBkOWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhd3JlbmNlIEhvcm5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzczNzEyZjYtZDc2ZC00Y2FhLThhOWItNTZmZTFkMWE1YTY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYXRoYSBLYXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmUzNWNhYmEtYjE2YS00ZTBkLWI5MjctNGRhODU3ZjRjZGI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFzaWVyIFNobXVybWdsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZmNWEzN2Q5LWE2ZGQtNDlhYS1iNmZiLWI5MzVmZDY3MDgyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVubiBLZXllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAzMDk3MjAwLTBkNDgtNDIzNi1hM2QyLThiZGIxNTNhYThmN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVubmV0dCBCcm93bmluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhhY2M5N2ZhLTRiZjEtNDlmNi1iYjkzLWZiNTI1MTNhMDE1YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVzdHkgWWFib2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MzVmNGU2Ny1hNTRiLTQyN2EtOWNhMS0xMjk2ZDczODc4NzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhbmRzIFNjb3Jlc2J1cmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMzExYzA4OS0wZGY0LTQ2YmQtOWY1ZC04YzQ1YzdlYjVhZTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1jbGF1Z2hsaW4gU2NvcnBsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MTk0OWQ0ZC1iMTUxLTRmNDYtOGJmNy03MzExOWE0OGZhYzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvbiBNb25zdGVyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhiYTdlMWZmLTRjNmQtNDk2My04ZTBmLTcwOTZkMTRmNGIxMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVubmEgTWFsZG9uYWRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjk2N2QwNjQtMGVhZi00NDQ1LWIyMjUtZGFlZDcwMGUwNDRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXZXNsZXkgRHVkbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdjYThmM2YtMmZkYy00NzdiLTg0ZjQtMTU3ZjI4MDJlOWI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZWFjaCBIZXJtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMGVhNWQ1MC1lYzg4LTQwYTAtYWI1My1jNmUxMWNjMWU0NzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pY2hvbGFzIFZpbmNlbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjODNmMGZlMC00NGQxLTQzNDItODFlOC05NDRiYjM4ZjhlMjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhbmdsZXkgV2hlZWxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY0NGE4YjI3LTg1YzEtNDRkZS1iMTI5LTFiMGY2MGJjYjk5Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXRsYXMgSm9uYm9pc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAxNzcyNzk4LThkNDUtNDdjYi1iYmI1LTUxNTgzMmM1YjU5MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG9wcyBDaGVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDQ2NTFkMDUtNDRlZi00MGMxLWFiZDMtNGQwYzE0YjY4NDVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbWlsaWEgU3RyZWV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDYxYjIwOWEtOWNkYS00NGU4LTg4Y2UtNmE0YTM3MjUxOTcwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2Rvd2VsbCBLYXJpbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBjYzViZDM5LWU5MGQtNDJmOS05ZGQ4LTdlNzAzZjMxNjQzNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9uIEVsbGlvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMDNkNzg4ZC0yYzc0LTRlZGMtOTI5OS0yYTEzODRhMjc3NmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpdCBSYXRvb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMTNmNDdiMi0zMTExLTRhYmItYjI1ZS0xOGY3ODg5ZTJkNDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFka2lucyBTd2FnZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTM4ZmNjYzMtZTY2Zi00YjA3LTgzMjctZDRiNmYzNzJmNjU0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPc2NhciBWYXVnaGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWFiZTdhMTQtMjYwOC00ODVjLWFmMTAtNjljZjAxMDdjMmE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3JtYW4gTXVnZ2luc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0ZjY4MjllLTdiYjQtNGUxZS04YjU5LWEwNzUxNDY1N2U3MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2luZyBXZWF0aGVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjU1ODFjNDMtZjhkYS00NjU3LTllOTYtZTcwNGRmMGE4ODc4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmVlbWl1bSBGYWlyd29vZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI2NTAzZjJjLTYzMWEtNDViYS05MDVlLWFhMTQ0NzFjOGI4ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTnl4IFNuYXBqYXdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyOTE4YmUwMS1lMWFhLTRkZTYtODIzOS1mZTYyZjM3NzY5ZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF2aSBKb25lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJjYWRjMjhjLTg4YTUtNGUyNS1hNmViLWNkYWI2MGRkNDQ2ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpamFoIEJvb2tiYWJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmQ5NWQ0MWMtZmY1NC00ZmExLTg5YTAtNzZiODRkZDhmZTJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbWJsZW0gV2FyaG9yc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMjU1MWUyOC0zYTQwLTQ3YWUtYWVkMS1mZjViYzY2YmU4NzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdGggVmVsYXpxdWV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzVhOTlmZjMtY2Y5ZS00NjgyLWJhNmUtMGE2MDQ0YWEzYTRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY3J1ZmZzIFJpc3NldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM3MDYxMzgwLWFjOTUtNDAxOC04NTRlLWMzMDgwNzM5NDVlOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFydGxlYnkgWmhpdmFnb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM4MjI5OTBiLTVlZTAtNDA0YS05ZTA2LTg0NmJiMjlmM2ZhZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FudHVzIEhvam9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYTk2ZDc2YS1jNTA4LTQ1YTAtOTRhMC04ZjY0Y2Q2YmVlYjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpeHBhY2sgRG9nd2Fsa2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2UwMDhmNjAtNjg0Mi00MmU3LWIxMjUtYjg4YzdlNWMxYTk1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWJvcmlhaCBXaWxzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OGQwN2E2NC05ZWEyLTRiOWUtODA0Ni02OTAxYWQzOTg0OTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1bGNlIFNjaG9maWVsZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRiNzMzNjdmLWIyYmItNGRmNi1iMmViLTJhMGRkMzczZWVhZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJpc3RpbiBDcmFua2l0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTE5ODU1MTYtNTAzMy00YWI4LWExODUtN2JkYTA3ODI5YmRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGFuaWUgU2NobWl0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU0YmM3YjIzLTQ5YTktNGYxZC1iNjBmLTljM2NmOTc1NGI2N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2xvdmUgTWFobGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MzU4MGJkNy02MTM4LTQ3MWMtODJhNS1iYzlkMjlmZmQwNmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vaXJhIEJhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NGY0Y2Q3NS0wYzFlLTQyY2YtOWZmMC1lNDFjNDc1NmYyMmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyZXkgQWx2YXJhZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NTk4ZTQwYS1kNzZkLTQxM2YtYWQwNi1hYzQ4NzI4NzViZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhbmllbCBNZW5kb3phXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjg0NjJiZmEtOTAwNi00NjM3LTg4MzAtMmU3ODQwZDkwODlhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXJrZXIgSG9yc2VtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2Y2FhODE4MC1lMTc4LTRmOGItODY1Yy1mMWFmNDcxMTliYzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhZCBCbG9ydGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZkOTAwMWZmLWJhOWYtNDBjMC05MzE1LTc5ZmViYTU0MWI2NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVwZXRhIENoZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MTA1NDFmNC1iYjg5LTQxMzQtODk3My05NThjODJiMjlhNDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpa2kgSnVuaW9yIEpyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzJmYjc5N2EtYWVhOC00NzIzLWI3ZTQtZDExMGMzMDEzMjBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZXJzZXBob25lIFNwbG90dGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2I3Nzk5NDctNDZlZi00Yjc3LWJlMzctOTYyZDYwODc1NjQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb2xhc3RuYW1lIFNva29sXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODFiMjViMTYtMzM3MC00ZWIwLTlkMWItNmQ2MzAxOTRjNjgwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWJvcmlhaCBXaGlza2V5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTBjOGJlODktODk2ZC00MDRjLTk0NWUtYzEzNWQwNjNhNzRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYW1lcyBCb3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NDE2ZGZhMy0wNWU5LTQ2ZjMtYjFkZi00ZmE2NzAzZTliNWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRyb3NvcGhpbGEgRmFzaGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0ODQ0ZmFkLTk1MTktNGMxNC04YWIzLWQzODYwNmE3YmI0NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29uZGl0aW9uYWwgWXVuaWVza3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OGYyNmEyNS05MDVmLTQ4NTAtODk2MC1iNzQxYjBjNTgzYTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0dSBNY2RhbmllbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlmYmFiNGRmLTM1ZGQtNDk5MS05ZTgyLTk2MzVhYjc1NmIwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9jaW8gQ2FzdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTFiNTVjNWYtNmQwMS00Y2ExLTk3NmEtNWNkZmUxOGQxOTljXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCaWxsdXAgS2lkZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNWEwMmE0Yi03MmEyLTRlZWYtODAyYy0xNGExOTY0ZTBkYWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1c2FuYW5hbmEgUG9ydG1hbnRlYXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOGU3NTdjNi1lMjk5LTRhMmUtYTM3MC00ZjdjM2RhOThiZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbmRyaWNrcyBMZW5ueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE5MzhmNTg2LWY1YzEtNGEzNS05ZTdmLThlYWFiNmRlNjdhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzcGVyIERlc3RpbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOTg5MTdiYy1lOWRmLTRiMGUtYmJkZS1jYWE2MTY4YWEzZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplbmtpbnMgSW5ncmFtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWE2YzI2NjItNzVmOC00NTA2LWFhMDYtOWEwOTkzMzEzMjE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFaXphYmV0aCBFbGxpb3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWE3YWM5Y2ItZTlkYi00MzEzLTk5NDEtOWYzNDMxNzI4ZGNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXR0ZW8gQ2FzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI5M2Y0YzMyLTY0ZTQtNDQ2MS1iNzA4LTA1ZjZmN2Y2YmJjMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXRtYSBXaWxsb3d0cmVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzc3MWFiYWItZjQ2OC00NmU5LWJhYzUtNDNkYjRjNWI0MTBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYWRlIEhvd2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjY2Q2MDY4Yi0yNzM1LTQwNzItYmZlNS01NzFhNWQ1N2MyODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVwaHJhaW0gTGFkZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkNDE3ZjhhLWNlMDEtNGFiMi05MjFkLTQyZTJlNDQ1YmJlMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWl6YWJldGggR3VlcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDlhMDcyZjUtMWNiYi00NWNlLTg3ZmItYjEzOGU0ZDhmNzY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFuY2lzY28gT2JqZWN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGU2N2I1ODUtOWJmNC00ZTQ5LWI0MTAtMTAxNDgzY2EyZmJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGFxdWlsbGUgU3Vuc2hpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZmQ1Y2NiYi05MGVkLTRiZmUtODNlMC1kYWU5Y2M3NjNmMTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk93ZW4gUGlja2xlc3RlaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlM2UxZDE5MC0yYjk0LTQwYzAtOGU4OC1iYWEzZmQxOThkMGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYW1iZXJzIEtlbm5lZHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlODY1MmRiMC1jNjdhLTRjOGEtOWFjYy0yOTUxY2Y0MDBjZDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhcnJlbiBDaGlsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU5NzI5ODRjLTI4OTUtNDUxYy1iNTE4LWYwNmEwZDhiZDM3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVja2VyIFNvbGlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWJhNzE1ZjItY2FhMy00NGMwLTkxMTgtYjA0NWVhNzAyYTM0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdWFuIFJhbmdlbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkOGQ1OGI2LWYzN2YtNDhlNi05OTE5LThlMTRlYzkxZjkyYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9zXFx1MDBlOSBIYWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkNTQ5YmZlLWIzOTUtNGRjMC04NTQ2LTVjMDRjMDhlMjRhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FtIFNvbGlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGZlODk2ZTEtMTA4Yy00Y2U5LTk3YmUtMzQ3MGRkZTczYzIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcnlhbmF5YWggQ2hhbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZDQ1NDVlZC02MjE3LTRkN2EtOWM0YS0yMDkyNjVlYjY0MDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpYW5hIENhc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MGNjZmYxZS02YjUzLTQwZTItODg0NC0wYTI4NjIxY2IzM2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vb2R5IENvb2tib29rXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGU2YWQxYTEtN2M3MS00OWRlLThiZDUtYzI4NjcxMmZhZjllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdXR0b24gUGlja2xlc3RlaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOTgxMmE4ZS02N2M0LTQzNGMtODVjYi02ZGRmNzg1Y2FkZjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1Z3VzdGEgQ2hhZHdlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNzQ0ZjUzNC0yMzUyLTQ3MmItOWU0Mi1jZDkxZmE1NDBmMWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR5bGVyIFZpb2xldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQzYmY2YTZkLWNjMDMtNGJjZi05MzhkLTYyMGUxODU0MzNlMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlndWVsIEphdmllclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEwNzFhNzEzLWE2YTEtNGI0Yy1iYjNmLTQ1ZDlmYmE3YTA4Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9yYSBQZXJlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQxYTdjMTNmLThlNzgtNGQyZS05Y2FlLWViZjNhNWZjZGI1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpamFoIEJhdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2FmYjMwYzEtMWIxMi00NjZhLTk2OGEtNWE5YTIxNDU4YzdmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEaWNrZXJzb24gR3JlYXRuZXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzA2NGM3ZDYtOTFjYy00YzJhLWE0MzMtMWNlMWFhYmMxYWQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3JnZSBJdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDlkMWQ2ZS03ODIyLTRhZDktYmFjNC04OWI4YWZkOGE2MzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlcnJpY2sgS3J1ZWdlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBjODNlM2I2LTM2MGUtNGI3ZC04NWUzLWQ5MDY2MzNjOWNhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVuZWxvcGUgTWF0aGV3c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI4NjIzN2JiLWFkZTYtNGIxZC05MTk5LWEzY2MzNTQxMThkOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSHVybGV5IFBhY2hlY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNDhjY2YzZC1kNWY2LTRiNjktODNkOS00MDIzMGNhOTA5Y2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFudG9uaW8gV2FsbGFjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ3MmY1MGMwLWVmOTgtNGQwNS05MWQwLWQ2MzU5ZWVjMzk0NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmh5cyBUcm9tYm9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAyNjhiMzVmLWIxOWItNGIyZi05MGM0LTg5ZmIzNjQwMzY4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2l0YSBCaXNjdWl0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0Zjk1NWZlLTljYzktNDQ4Mi1hNGQyLTA3ZmUwMzNiNTllZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmFuZSBWYXBvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA2Y2VkNjA3LTdmOTYtNDFlNy1hOGNkLWI1MDFkMTFkMWE3ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9ycm93IFdpbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5M2FmODJjLTg0YWEtNGJkNi1hZDFhLTQwMWZhZTFmY2U0NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpamFoIEdsb3ZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5NmJiOWI1LTVlYTgtNGRhMS1hMTEzLTU3YTVmYzllOWI2N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzcGVyIEppLUV1blwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyOGEzM2I5LWM4MmYtNDA4ZS05ZmEzLTUxNjFmNWEzZTI5N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXltZXIgRWdnbGV0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzY3NmFiNS1hZmIzLTQ2NTAtYWYyMy1iY2RlMTAzN2QyNWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhc2hpZWxsIERydW1zb2xvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWRiMmY2MDItNjRiMS00YTVjLTg2OTctMTkzMmNjMmM2ZGYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNdW1teSBNZWxjb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZjE1OWJhYi05MjNhLTQ4MTEtYjZmYS0wMmJmZGU1MDkyNWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hTlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3MjcyMTVkLTM3MTQtNDM4ZC1iMWJhLTJlZDE1ZWM0ODFjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9taW5pYyBXb21hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJhOGIzNzFmLWQyZWItNGJlNy1iODlmLWFmZjEwZWRiNDQxMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVucnkgV29iaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjlkNmI1MC0zY2UyLTRjYjEtOGNkMS0yYTBmYzA1NzMzZTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bWEgQmx1ZWJlcnJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzA1OTIxZTgtM2Y0ZC00YzkxLWEyODAtZDdiZjFhNDQ5YjA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUb3J1cyBNY0doZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMGZhNGJmMS04ZjNiLTQ1ZGMtOWFhMy02NTExZTk5ODA0MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkthaiBNdXJwaHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMmM5YmNlNi02ZTUyLTQwZmEtOWY2NC0zNjI5YjNkMDI2YThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlbiBNb3JpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzMWQ5OTEwLTA5OTEtNDBjOC05MzQ1LWE3Y2RkYjc0NjVjNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmlzdHJvIFN1Y2NvdGFzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM0ZTFiNjgzLWVjZDUtNDc3Zi1iOWUzLWRkNGJjYTc2ZGI0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxleGFuZHJpYSBIZXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzdlZmVmNzgtMmRmNC00Yzc2LTgwMGMtNDNkNGZhZjA3NzM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZW5peCBSZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZTBmN2Y0OC02NzViLTRmNzItYmI0MC04YThjNjc2ZjAwNTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhbGx1cCBNdXJwaHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NmViYTYzOS1lYTczLTQ3NGQtYmNlZS1lYzY4YzA1MjhiMDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFua2xlIEhhbGlmYXhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1OGZjYTVmYS1lNTU5LTRmNWUtYWM4Ny1kYzk5ZGQxOWU0MTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1bGxpdmFuIFNlcHRlbWJlcmlzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmYzQ3MTNjLTQ1ZTEtNDU5My1hOTY4LTdkZWZlYjAwYTBkNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVyY2l2YWwgQmVuZGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjFiYmJmMzQtOThjMS00YmY2LWJkMGMtNTZjMTkxOTliMzVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcXVpZCBHYWx2YW5pY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY5NWRhZjAyLTExM2QtNGU3Ni1iODAyLTA4NjJkZjE2YWZiZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFjaGVjbyBXZWVrc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZlNzQ0YjIxLWM0ZmEtNGZhOC1iNGVhLWUwZTk3ZjY4ZGVkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFuaWVsIEtvY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjcxNjY3Yi01OWYyLTQ2ZGYtYWRhYy1hODg4NWE0ZjZhYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaXMgU3RyZWV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzMyODk5YTMtMjA4Mi00ZDlmLWIxYzItNzRjOGI3NWUxNWZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaW5hdG8gSXRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzU0MWZjNGItN2U2Yi00NDZhLWI2YTMtNzU1ZGU0NmEwMDE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWlubnMgSmVzcGVyc2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzdhNDFjMjktOGFiZC00NDU2LWI2ZTAtYTAzNDI1MjcwMGQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGlwIERlYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZDM4ODg0Ni04ZjRjLTQwN2YtYWFjYi1iODQ0ZDI1NjFjNWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpdCBBZGFtc2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2UxNjBlOWYtMmM3OS00ZTA4LThiNzYtYjgxNmRlMzg4YTk4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaG9tYXMgTWFyc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZTkxMGU4Ni04NGI0LTQzYzMtYTY4ZS02N2I2NjEyZGRiZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk92aWQgU2Nob2ZpZWxkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODRhMTdmNDgtMDM5My00MTY2LTg2NGEtZjdjZDI3NTU3NzAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBcmNoZXMgQ2FuZGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODUyMTA3YjgtOGNmMy00ZmJiLTk3ZjktNzZmNzNiYzQ3NzA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWN5IFZhbmRlck1hbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OTk3MTIzZi1iMjRkLTQzMjYtODBjOC0zYzg2MmY4MGY2MjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvaG5kYW4gTWNHaGVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTgyMjA3NTMtMGE3MC00YTRlLTgwNTgtMGE3YmNiNmY3ZDVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZW5qYW1pbiBMaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YWJlMDJmYi0yYjVhLTQzMmYtYjBhZi0xNzZiZTZiZDYyY2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hZ29taSBNZW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWZjM2M2YWUtNWVkNS00OWNlLWE3NWItMjU3ZWMxMDIyYTE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaG9tYnVzIERyYW1hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTVlNGU4NmYtZDNhOC00MjRhLTk3NjgtMmFkYTE3YTRlNzQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaWxsb3cgRWdnYnVydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE3MzQyN2IzLWU5NmEtNDE1Ni1hOWFiLTg0NGVkYzY5NmZlZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2VzbGV5IFZvZGthXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWJiZDVlYzUtYTE1Yi00MjFjLWIwYzUtY2Q4MGQ4OTA3MzczXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYXQgQmF0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2EyNmQ4Y2MtODY2OC00OGM5LWEwNjEtMjhmNmZkZjVmNDRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb2MgQW5pY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTNmYjczNi1kMjBlLTRlMmEtODhjYi1lMTM2NzgzZDNhNDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphdmllciBIb3dlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDIzYTFmN2UtMDA3MS00NDRlLTgzNjEtNmFlMDFmMTMwMzZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZHJpYyBUb3NzZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMmY4MjdhNS0wMTMzLTRkOTYtYjQwMy04NWE1ZTUwZDQ5ZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvYmJpbnMgU2NobWl0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRiM2ZmNmYwLTEwNDUtNDIyMy1iM2E4LWEwMTZjYTk4N2FmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVycGh5IFRoaWJhdWx0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGQ2YmE3ZjEtYTk3YS00Mzc0LWEzYTctYjM1OTZlMjg2YmIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXRoZW8gVGFuYWthXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGYzNGQxNjgtNGQ2YS00MDNjLWFjYTUtMmIxZWJlOTA0NDRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb2MgQ2FzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRmOTRhMzM1LTE2NzctNDIwMC1hMjNmLWQ3OTQ2ODlhNTczMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFuZ29saW4gUnVpelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUwZDY0MjcwLTZmNWEtNGMxMC05YjIyLWY5MWY5ZDRmMjQxY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2V2ZWx5biBDbGFtYnVja2V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTFlMzNhYWItZGY4Yy00ZjUzLWIzMGEtY2ExY2VhOWYwNDZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3luZXIgUnVncmF0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTdlY2Y2NDYtZTVlNC00OWVmLWEwZTMtMTBhNzhlODdmNWY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYWxsdXAgQ3J1ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYWMwMGVjOS0zMzc2LTQyM2MtODY4NC05M2RkMmNiZDZlZDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVkZGllIE5ha2Ftb3RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWZkYTQxYzEtZWIwNy00NWIzLThhZDUtNDI0YzYzMTE1MTE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdWZ1cyBLaWRkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY1NjY1N2QzLTNiZGMtNDg0MC1hMjBjLTkxYWNhOWNjMzYwZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFsaWsgUm9tYXluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAwY2E0MGFmLWE4ZGYtNDUxOS1hZjlhLWJlYWY5M2ZmYzEyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpIFdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAxYmNiZWViLTBmNjMtNDNiNC04Y2ZhLWVjMDJiNDJhMWE1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW50cm9weSBIYW5kY3JhbXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMWQzZWY4NC04ZWMyLTQxMTYtOWE3Yi01Zjk1NGRlMmVjOTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhcHB5IFlvaW5reVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAyODhiYmIxLWE5OTQtNDVjMy1iYjhmLTMzMWZlMjk2MDkwZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlYWxzIENoYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDNkMDYxNjMtNmYwNi00ODE3LWFiZTUtMGQxNGMzMTU0MjM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYXJjaWEgVGFiYnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNTQxNWMwZC1kYjNiLTQ1NWQtOWQwNi02ODRhMzk1MDZjZjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBob2ViZSBCbGFzZXNvbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNjcyYTRiZS03ZTAwLTQwMmMtYjhkNi0wYjgxM2Y1OGJhOTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhc3RpbGxvIExvZ2FuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDdhYzkxZTktMDI2OS00ZTJjLWE2MmQtYTg3ZWY2MWUzYmJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZHVhcmRvIFBlcmV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDg4ODg0YWYtZjM4ZC00OTE0LTlkNjctYjMxOTI4NzQ4MWI0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMaWFtIFBldHR5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDg5MmRhNmUtYzlkMS00OTRmLTg0YmMtMGMxZjg3OTAxOGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb2IgRS4gQ2FnYXlhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5NGFkOWExLWUyYzctNDlhMC1hZjE4LWRhMGUzZWI2NTZiYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXJpY2tzb24gU2F0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBhNmI3NWVhLWZlNjktNDQwNi1iZTI0LWExNDljOTRkYWEzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2VyZW4gTW9zc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBiZDVhM2VjLWUxNGMtNDViZi04MjgzLTdiYzE5MWFlNTNlNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGhhbmllIERvbmFsZHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBkNTMwMGY2LTA5NjYtNDMwZi05MDNmLWE0YzIzMzhhYmYwMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgRG92ZW5wYXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGRhZjA0ZmMtOGQwZC00NTEzLThlOTgtNGY2MTA2MTY0NTNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZWUgTWlzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlMjdkZjUxLWFkMGMtNDU0Ni1hY2Y1LTk2YjNjYjRkNzUwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNwb29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGY2MmMyMGMtNzJkMC00YzEyLWE5ZDctMzEyZWEzZDNiY2QxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBYm5lciBXb29kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTI2ZmIxMjgtN2M1My00NWI1LWFjMmItNWRiZjk5NDNkNzFiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWdtdW5kIENhc3RpbGxvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTJmM2ExOGQtY2M2My00ODBkLWIyYWQtZjBkODljMWM0NTYyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGUgTXVycGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzAzMmYwNy0xMGJmLTQ4ZWItYTIzZS1mNDExN2QyNDY4NjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNuYWNrIERldmlhdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzMjlmODM5LWY3OGItNGFjYy04NWFhLTY5YzY5NThmYTQzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gSVhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxM2NmYmFkZi1iMDQ4LTRjNGYtOTAzZC1mOWI1MjYxNmIxNWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlbm5ldHQgQm93ZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNDZjNjM3Ni05MzUzLTQ2NjktYTBlZC02ZTYxNTIxOWQyOTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTRiZmFkNDMtMjYzOC00MWVjLTg5NjQtODM1MWYyMmU5YzRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWJ5IFNsaWRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNGZmNWEzNi1jMzlmLTQ5MTAtYWZmYi0yYTllYTI4ZTA5YjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhleCBQb3J0ZW50aWFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTU4NDBjMDEtZDhlYS00ODIzLWE4MDItOWI2MzVjNTFlZmEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGl0cyBTdHJvbmdib2R5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTU4NTc0MDctMmQ2Yi00M2YxLTg2YzgtYjU3NGM4NzIwOGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBWSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE2YTU5ZjVmLWVmMGYtNGFkYS04NjgyLTg5MWFkNTcxYTBiNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm95ZnJpZW5kIEJlcmdlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE3MzkyYmUyLTczNDQtNDhhMC1iNGRiLThhMDQwYTdmYjUzMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FzaGVyIEJhcmFqYXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNzUwZGUzOC04ZjVmLTQyNmEtOWUyMy0yODk5YTE1YTIwMzFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktsaW5lIE5pZ2h0bWFyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE4Nzk4YjhmLTYzOTEtNGNiMi04YTVmLTZmYjU0MGQ2NDZkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9ycm93IERveWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTlhZjBkNjctYzczYi00ZWYyLWJjODQtZTkyM2MxMzM2ZGI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcml0IFJhbW9zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWE1Mzc2OGItMWVjMS00NjQ2LTg0MTctZGQ1OGI5ODQ5YmQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWxsIENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWFlYzJjMDEtYjc2Ni00MDE4LWEyNzEtNDE5ZTUzNzFiYzhmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdXNoIEl0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFjNTVhZWRmLTZlMzEtNGYzYy05YjE3LThhODRiN2QxNWEwY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFuY2kgR3JhY2tsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFjZGVkNGU3LTgzMDItNDliNy1hNjQ2LTQwYTA3NjdiNjk2OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVyY3VsZXMgTGluY2VjdW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZDdhZjkzZS03OTEwLTQ1YzMtOTc5OS00MTY2YTI3YTZkMGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpc2hjYWtlIENhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFlN2IwMmI3LTY5ODEtNDI3YS1iMjQ5LThlOWJkMzVmMzg4MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9yYSBSZWRkaWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWU4YjA5YmQtZmJkZC00NDRlLWJkN2UtMTAzMjZiZDU3MTU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGbGV0Y2hlciBZYW1hbW90b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFmOTMwMTQwLTlmYzYtNDI0MC05ZWY2LWU3YWMwNjVlYWVmYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVlcmllIE1jQ2xvdWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMDM5NWI0OC0yNzlkLTQ0ZmYtYjViZi03Y2YyNjI0YTJkMzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFkcmlhbiBNZWxvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIwNmJkNjQ5LTRmNWYtNDcwNy1hZDg1LTkyNzg0YmU0ZWI5NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmV3dG9uIFVuZGVyYnVja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIxZDUyNDU1LTZjMmMtNGVlNC04NjczLWFiNDZiNGI5MjZiNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgT3dlbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMzExMGMwZi0yY2Y5LTRkOWMtYWIyZC02MzRmMmYxODg2N2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbm5lZHkgTWVoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjNlNzhkOTItZWUyZC00OThhLWE5OWMtZjQwYmM0YzVmZTk5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbm5pZSBXaWxsaWFtc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0YWQyMDBkLWE0NWYtNDI4Ni1iZmE1LTQ4OTA5Zjk4YTFmN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmljaG9sYXMgU3VtbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjRjYjM1YzEtYzI0Yy00NWNhLWFjMGItZjk5YTJlNjUwZDg5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeXJlZWsgUGV0ZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNTM3NmI1NS1iYjZmLTQ4YTctOTM4MS03YjgyMTA4NDJmYWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVtbWV0dCBJbnRlcm5ldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI2ZjAxMzI0LTlkMWMtNDcwYi04ZWFhLTFiOWJmYmNkOGI2NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVyZCBKYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3ZmFhNWE3LWQzYTgtNGQyZC04ZTYyLTQ3Y2ZlYmE3NGZmMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3BlYXJzIE5vbGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjliZjUxMmEtY2Q4Yy00Y2ViLWIyNWEtZDk2MzAwYzE4NGJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYXJjaWEgU290b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJhZWUzMmY5LWE1YmMtNGY5NS05MzJjLWNmNzQ5MmQwOTM3NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29yeSBUaGlydGVlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkMjJmMDI2LTI4NzMtNDEwYi1hNDVmLTNiMWRhYzY2NWZmZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9uaWEgSm9obnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkNWFjMjc0LTk2ZmQtNDcxYi04MDI4LWY0ZDdiNDJkODMxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzb24gRGF0YWJsYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzBiNzA1M2EtN2Y1Zi00ZTNiLTk2MDAtN2IzZGE4YmE3ZGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdWNrIFJhdHRsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMGRjMDY1Mi0yNjA4LTQ5YmEtODkyOS0zNjQ5NGZjMmJkMjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhdHNvbiBXYXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzFmODNhODktNDRlMy00N2I3LThjOWUtMGRmZGNkOGJkMzBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeXJlZWsgT2xpdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMzNlM2UyMC02NDQ1LTRlZTQtYWZjOC0yZDZiNTg0YTYzZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFZJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM0YjUxMDNhLWZmMTQtNDg4OS05MzUzLTNmZDBkZTNkMDlhN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gWElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM1MzFjMjgyLWNiNDgtNDNkZi1iNTQ5LWM1Mjc2Mjk2YWFhN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT2xpdmVyIEhlc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNWQ1YjQzZi04MzIyLTQ2NjYtYWFiMS1kNDY2YjRhNWEzODhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvcmRhbiBCb29uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM3YmRhZmRmLWYyMTMtNDcxOC04MjAwLWMxMjNmY2EzOWZmNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2xhbSBSb3NlbnRoYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzOTU0YmRmYS05MzFmLTQ3ODctYjlhYy1mNDRiNzJmZTA5ZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pY2hvbGFzIE5vbGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2FkYjAzOWQtMDg3NS00NGY0LTkxNGYtMWVmOWVlNGMyMTIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYXR1bSBDcmltaW5hbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYWY5NmE2Yi04NjZjLTRiMDMtYmMxNC0wOTBhY2Y2ZWNlZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF4ZWwgVHJvbG9sb2xcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYmUyYzczMC1iMzUxLTQzZjctYTgzMi1hNTI5NGZlODQ2OGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFtYXlhIEphY2tzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYmY4NzEzYi04ODg2LTRmYzQtOTgzZS1lMmM3MmJlZjdiOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXBoZW4gU2hlbGxlZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNjNTNmZjFjLTY0MzctNDk2NS1hNGEyLTQ4OWJjYjkxZDNmNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJlZXplIFJlZ2ljaWRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2Q0Y2NiMDktMGU3Yi00NWFlLWI1MWQtMTk5YzlkMjIyNzYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBWSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2RiMDI0MjMtOTJhZi00ODVmLWIzMGYtNzgyNTY3MjFkY2M2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTb24gSmVuc2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2RkODVjMjAtYTI1MS00OTAzLThhM2ItMWI5Njk0MWMwN2I3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUb3QgQmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkZTE3ZTIxLTE3ZGItNGE2Yi1iN2FiLTBiMmYzYzE1NGY0MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJld2VyIFZhcG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2YwOGY4Y2QtNjQxOC00NDdhLTg0ZDMtMjJhOTgxYzY4ZjE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb2xsYXJkIEJlYXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2YxYWMxNmYtMDNjNC00YTBmLThkYWYtNmU1NGJiZTEyYzMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEcm9zb3BoaWxhIEhvam9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MDI5ZWE3NS1kYTkxLTQ2NzItOWZhNS1lZTMyZWM3ZmE3MTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpheSBHcmF5c2NhbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MGE1MWI3Zi0wMDA1LTQ1NzctOGJlZi04NTlmYzM2ZjA2ZDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MGRiMWIwYi02ZDA0LTQ4NTEtYWRhYi1kZDYzMjBhZDJlZDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjcmFwIE11cnBoeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQyMDRjMmQxLWNhNDgtNGFmNy1iODI3LWU5OTkwN2YxMmQ2MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXhlbCBDYXJkZW5hc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQzZTRkZTAyLWNjMjEtNDQxMy1iYjg4LTFjMTEyOGVlYzE3NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXJidXR1cyBCb25lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ0NmEzMzY2LTNmZTMtNDFiYi1iZmRkLWQ4NzE3ZjIxNTJhOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFyY28gRXNjb2JhclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1MGU2NDgzLWQxMTYtNDFkOC05MzNiLTFiNTQxZDVmMDAyNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5nbGFuZCBWb29yaGVlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1OWY3NzAwLTUyMWUtNDBkYS05NDgzLTRkMTExMTE5ZDY1OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tZm9ydCBNb25yZWFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDc4ZDkxZWYtMWE2ZC00YmIzLTk5NjUtODdjZGNjNGFkOGRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb2FkIEtpbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OGExMGFkNi02NzU5LTQ2NjEtODBiZi05ZjlmZTM5MzE2MmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJveGV0dGEgQ29tcGFzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ5M2E4M2RlLTZiY2YtNDFhMS05N2RkLWNjNWUxNTA1NDhhM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm95ZnJpZW5kIE1vbnJlYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OTQxOTc2ZS0zMWZjLTQ5YjUtODAxYS0xOGFiZTA3MjE3OGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNlYmFzdGlhbiBTdW5zaGluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ5NTc4MjZmLTBjNDQtNDY3ZC1iNzFmLTIxMTg1NDUwZjQ1OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJpZW5kIFZvaWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YTE5MjdlNy04OGFhLTRiMmMtYTE4Mi03ZWMyNDdkYzI2NDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1bmJhciBNY0xvdWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YWE4NDNhNC1iYWExLTRmMzUtODc0OC02M2FhODJiZDBlMDNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1cmVsaWFubyBEb2xsaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YzUzZmNkOC1kZjAyLTRhODAtOTljOS01MTcxMDg2M2JjN2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhcnJpZXQgR2lsZGVoYXVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGNkMGFjOGYtNmMyZS00YmYxLWEyMzItYTVhYzZmZDRhNjc3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQdWcgTWVhdGJyaWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGU2M2NiNWQtNGZjZS00NDFiLWI5ZTQtZGM2YTQ2N2NmMmZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBeGVsIENhbXBiZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGYzMjg1MDItZDM0Ny00ZDJjLThmYWQtNmFlNTk0MzFkNzgxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGVucyBMaWdodG5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRmZTI4YmMxLWY2OTAtNGFkNi1hZDA5LTFiMmU5ODRiZjMwYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2VsbCBMb25nYXJtc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUwMTU0ZDU2LWM1OGEtNDYxZi05NzZkLWIwNmE0YWU0NjdmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FydGVyIE9jb25ub3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MGFhZDQ2ZC1iZTYxLTQyMzYtYmIwYy02YzYxOThlMDBiZTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlkzaGlydiBIYWZneTI3MzhyaXZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MTQ5YzkxOS00OGZlLTQ1YzYtYjdlZS1iYjhlNTgyOGEwOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFka2lucyBEYXZpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxYzcwNjM0LWM1MGEtNDdhOS1iYzExLTYwZmE3MjMyOTg3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlb2RvcmUgSG9uZXl3ZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTFjYmE0MjktMTNlOC00ODdlLTk1NjgtODQ3YjdiOGI5YWM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb2xsaW5zIE1pbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MjBiMmExNC1lZjYwLTRlZTgtOWYzOS1jN2JlMTI5NzFlZjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhY2t3b29kcyBCcm9rZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MjdjMWY2ZS1hN2U0LTQ0NDctYTgyNC03MDNiNjYyYmFlNGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1lbHRvbiBDYW1wYmVsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU0YzcyNGFmLWIxNjMtNDMxOS05M2M3LWZkY2FmYmJjYzk5MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2xldmUgTWF0c3V5YW1hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTU1YjBhMDctYTNlMC00MWJjLWIzZGItY2E4ZjUyMDg1N2JjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPb3BzIEFsbCBLZWVwZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTdiNDgyN2ItMjZiMC00Mzg0LWE0MzEtOWY2M2Y3MTViYzViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdXJlbGlhbm8gQ2VybmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1OTE1YjdiYi1lNTMyLTQwMzYtOTAwOS03OWYxZTgwYzBlMjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvc2EgSG9sbG93YXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YTM5YjJkZC0yM2M0LTRhNmYtYTY0NS05OWIwYjE5OTI1ODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0cmlrZSwgTG9va2luZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjViM2YwYTQzLTQ1ZTctNDRlNy05NDk2LTUxMmMyNGMwNDBmMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmh5cyBSaXZlcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YjViY2M2Yy1kMDExLTQ5MGYtYjA4NC02ZmRjMmM1MmY5NThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbWJhIERhdmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWNhN2U4NTQtZGMwMC00OTU1LTkyMzUtZDdmY2Q3MzJkZGNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBRdWl0dGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWUzYjFlNmItNmZlZi00NTcyLTgwYzgtZjk0NzkzMzVlYTM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3BwZXIgTG92ZWxhY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MTkyZGFhYi0zMzE4LTQ0YjUtOTUzZi0xNGQ2OGNkYjI3MjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1c3RpbiBBbHN0b3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjIxMTFjNDktMTUyMS00Y2E3LTg2NzgtY2Q0NWRhY2YwODU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYW1iaSBQZXJlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYyODIzMDczLTg0YjgtNDZjMi04NDUxLTI4ZmQxMGRmZjI1MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNraW5uZXkgVmF1Z2hhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYzYTMxMDM1LTJlNmQtNDkyMi1hM2Y5LWZhNmU2NTliNTRhZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9vZHkgUm9kcmlndWV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjRmNTlkNWYtODc0MC00ZWJmLTkxYmQtZDc2OTdiNTQyYTlmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWtlIFdhbGxhY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NTI0ZTllMC04MjhhLTQ2YzQtOTM1ZC0wZWUyZWRlYjdlOWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhcnRlciBUdXJuaXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NjJmMzRmMC1iZDc0LTQ5YTctODUwNi01MGQ0ZGQzMzNjNGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaW4gQmVhbmJhZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY2Y2ViYmJmLTk5MzMtNDMyOS05MjRhLTcyYmQzNzE4ZjMyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VubmVkeSBDZW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjc3MTgzNjItOTk4Yy00MDBjLTk4YTYtMmUzMGNjYWE3OGY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBYSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ODMzY2E3ZC05MTBlLTQ4ZjUtYjI1ZC0yODg2Y2RiMDhkMGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhbmRlciBQZXJtYWRlYXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmE4NjliNDAtYmU5OS00NTIwLTg5ZTUtZDM4MmIwN2U0YTNjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYWtlIFN3aW5nZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YjI3MjJhNi1iMzcxLTRhN2UtOGFkZi03MjhkYTYxMmE0MGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplbm55IFF1aWNrc2lsdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmJkNGNmNmUtZmVmZS00OTlhLWFhN2EtODkwYmNjN2I1M2ZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJZ25ldXMgTWNkYW5pZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YzFjMDUzOS00MTY4LTQ5NzctYmYxNy0yNTdiY2JmZWM5MmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNocm9tYXRpYyBKdW1wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmUzNzNmY2EtYjhhYi00ODQ4LTlkY2MtNTBlOTJjZDczMmI3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25yYWQgQmF0ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjM5YTJmOS03NmQ3LTQ0ZmQtOGE2ZC0wMGY4N2Q3YmIwMDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlF1YWNrIEhvb2tyYWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzA4ODM1MGMtOTA1Yi00YWMwLWE5ODItNjQxOTFlY2FlY2FhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGVyaSBGcmlkYXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MjFmYjk0Ny03NTQ4LTQ5ZWEtOGNiZS03NzIxYjBlZDQ5ZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhbWFyYSBMb3BlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjczMTBjMzJmLThmMzItNDBmMi1iMDg2LTU0NTU1YTJjMGU4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9taW5pYyBNYXJpanVhbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NGIwOTc0YS1mODI3LTQ5MzQtOWRkMC0yMDIwNzI4YmQ0Y2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZWFsaXggS3JhbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzUwYzdkNDQtNzU3YS00MzBjLTlmYTMtZDRjYTIyMTExOTMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb3NzdGluIEFuZGFudGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NWU4MGU0Ni0yNzZkLTQzODgtYmI2YS1kYTkxMjVhMGU4YWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNpY2VybyBIb21lc3R5bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ODE1ZTgyZS01ZWE0LTRjZWYtYjI4Yi02ZDhlMDU4MTVjNTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pYWggSmVzYXVsZW5rb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc4NTNhYThjLWU4NmQtNDQ4My05MjdkLWMxZDE0ZWEzYTM0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHVja2VyIEZsb3Jlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc5NTE4MzZmLTU4MWEtNDlkNS1hZTJmLTA0OWM2YmNjNTc1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRraW5zIEd3aWZmaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YWZlZGNkOC04NzBkLTQ2NTUtOTY1OS0zYmRmYjJlMTc3MzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBpZXJyZSBIYWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdkNDVlOTQyLWFjMjgtNDFiNi04ZDg5LTVlNGE0NDU5MWMxMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2lubmEgVG9hc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZjM3OWI3Mi1mNGYwLTRkOGYtYjg4Yi02MzIxMWNmNTBiYTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplc1xcdTAwZmFzIFJvZHJpZ3VlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdmM2YyZTc1LTkwMGUtNDBiNi04NDZiLWRiNTg1NTQxNDkwZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9naW5pYyBCdXJnZXJ0b2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2Y3MDQyZGUtN2ZjMS00NWY5LWI3YzQtOTE2OWQxNDU0NjUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIQU5EU09NRSBTQ0FSRlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwMGFjNjI3LTAzMzQtNDFkNS05OGRmLWM1MWE0N2U0NmFlZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hhbmRyYSBCbG9ydGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwNWJhNDgwLWRmNGQtNGY1Ni1hNGNmLTBiOTk5NTkxMTFiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGV0aWNpYSBMb3phbm9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MmQ1ZTc5ZC1lMTI1LTQ0NjAtYjFmYS1kMDQ2YWQ3NzM5ZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYW5nZXVwIExpdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgzMWIxMTIxLWNhMTQtNGRiYi1hZmVlLTU2NjYwYmIxMWYwY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFuYSBCZWF0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg0OWUxM2RjLTZlYjEtNDBhOC1iNTVjLWQ0YjRjZDE2MGFhYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSnVzdGljZSBWYWxlbnp1ZWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODYwNGU4NjEtZDc4NC00M2YwLWIwZjgtMGQ0M2VhNmY3ODE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYW5kYWxsIE1hcmlqdWFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg3OTgzMDA2LWM5YzUtNDU5Zi04ZTdjLWU3ZWRjYmQ5MDJkY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NoaXNtIFRocm9uZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OWM4ZjZiZi05NGEyLTRlNTYtODQxMi1iZGIwMTgyNTA5YTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbmNyZXRlIE1hbmRpYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGE0ZGMyYmItYWM1Yi00Nzc0LTg2YmYtYzdmOGQzMDAwYTRhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUZWV0aCBCYW5kYW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGNmYjdlZTktY2ZhNC00NDVjLTgzMGUtMjcyMzc5N2ZhN2IzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb3hwbG90IEpvbmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGUxZWVlYjgtMWI4MC00NzgxLTlkODUtYmRhM2I1OGE0NWY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWdpIFVwcGVyY3V0c2tpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGYzNTdjOWMtNTIxYS00MDYyLWE3NzEtMmU1NDc3NDZhMTY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaXQgSG9uZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MDZhNTcyOC01NDU0LTQ0YTAtYWRmZS1mZDhiZTE1YjhkOWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplZmZlcnNvbiBEZWxhY3J1elwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwY2MwMjExLWNkMDQtNGNhYy1iZGFjLTY0NmM3OTI3NzNmY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FzZSBMYW5jYXN0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MmZmOGU0Mi1kY2NhLTRhOTQtYTgzZC0yNGQyOTAwYjgxMWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5lYnVsYSBIb2xzdGVpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzMTNlNDFjLTNiZjctNDM2ZC04YmRjLTAxM2QzYTFlY2RlYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZGllIE5lbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzMzczODlmLTQzMDEtNGUzMC1hMTA4LTQ2ODBjMDJlZTFmZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXJ0ZW1lc2lhIFRlaXhlaXJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTM1MDJkYjMtODVmYS00MzkzLWFjYWUtMmE1ZmYzOTgwZGRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb2RyaWd1ZXogU3Vuc2hpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MzdjMWEzNy00YjA1LTRkYzUtYTg2ZC1kNzUyMjZmODQ5MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBpcHBpbiBDYXJwZW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NDRkOTM5ZS02OGI4LTQyNTktYjljZC00NmI0YWM5Nzg5YzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vbGx5IFRhcGVkZWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTQ1OTc0YzUtMTdkOS00M2U3LTkyZjYtYmE0OTA2NGJiYzU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXRlcyBTaWxrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTRlMWUxNjItOWQyZS00NDA3LTgwM2EtMTliY2VlMzY5OTMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGdlYnJhIEdvbGRiZXJnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTYwZjA0MWEtZjc5NS00MDAxLWJkODgtNWRkY2Y1OGVlNTIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXlyYSBCdWNrbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTc4NmIyYzktMTIwNS00NzE4LWIwZjctZmMwMDBjZTkxMTA2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZXZpbiBEdWRsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5Nzk4MWU4Ni00YTQyLTRmODUtODc4My05ZjI5ODMzYzE5MmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhaXlhIFZpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NzllNTEwNS1jYmU5LTRmOTUtYWQxMy1jZTMwYzA3ZjFmZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvcHMgU2x1bXBzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTdlYzVhMmYtYWMxYS00Y2RlLTg2YjctODk3YzAzMGExZmE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbHN0b24gV29vZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ODIwZjJjNS1mOWRhLTRhMDctYjYxMC1jMmRkN2JlZTJlZjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlYW51dCBCb25nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOThhOTgwMTQtOTYzNi00ZWNlLWE0NmEtNDYyNWI0N2M2NWQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaWtpIEZhbWlsaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OWU3ZGU3NS1kMmI4LTQzMzAtYjg5Ny1hNzMzNDcwOGFmZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldpbm5pZSBMb3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlhZTdjZWM0LTFkZjAtNDkyMi04ZjdhLWYzYjk5NmQwMzFlN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSlxcdTAwZWJmZiBEZVNoaWVsZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YmEzNjFhMS0xNmQ1LTRmMzAtYjU5MC1mYzRmYzJmYjUzZDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vb25leSBEb2N0b3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YzE0Y2IwYy03OWFiLTRiOTQtOWFlMy1jOGRlMWM1ODdlNTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdNXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWUzOWY4MDgtZmY3MC00MjMyLThhOGMtMjgwODUyMjcxNTVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdWdjYXRjaGVyIFJvbGRhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEwODMyNDZiLTM1ZjQtNGRhZC04YjA3LThiMjgwNDdlMDgyM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVyYSBJcnZpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMGU3NDQ1Zi0yYjkzLTRjYTctYTY5ZC1mZjMyNTkzNzAwZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk11bW15IENhbnRidXJuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTExMjQyYWUtOTM2YS00NmI0LTkxMDEtYmUyY2FiYWZlZWQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGVjdHJpYyBLZXR0bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMTNmNjdkNS0yMmViLTRlZTktOGI2Ny04OTNiMjFhY2Q4N2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNlZHJpc3NpbW8gU3VnYXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMjQ4MzkyNS02OTdmLTQ2OGYtOTMxYy1iY2QwMDcxMzk0ZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpbW15IE1hbmNvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTI1YWNmM2EtNmQyYy00NDg1LTk3NWItYTA0NTQ5ZDA4NGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXNvbiBNLiBNY01hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTdiMGJlZjMtZWUzYy00MmQ0LTllNmQtNjgzY2Q5ZjVlZDg0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYXJ1dGEgQnlyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE4NTMwYmU1LTg5MjMtNGY3NC05Njc1LWJmOGExYThmNzg3OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9oYW1tZWQgUGlja2xlc3RlaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYWRiZTQ4Ni02YmYyLTQyYmQtODQxOC1kYmQxYWEzNmVkZDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR1cmluZyBDYXB5YmFyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFiMDRiYTIyLTY5YjEtNDNjYS1hMzA3LTM0NWU0NjBkNzk1YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9uZSBCaW5hcnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYjliMjU5Mi1hNjRhLTQ5MTMtYmY2Yy0zYWU1YmQ1ZDI2YTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYXUgSHVlcnRhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWJhMDdjMjgtZTQxMC00NzEwLWI0MjYtYjNlYmEzOTY5MzBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYXVudCBXZWRuZXNkYXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYzEzMjY0Zi1hZjRlLTQ0MjMtOWU0YS00MzQ5OWEwZjgyMjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk51bWJlciBDcnVuY2hlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFjNTdjZjI4LTU1NmYtNDdhZi05MTU0LTZiY2VhMmFjZTlmY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmV5IFdvb3RlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFjNWU0Y2UyLWRlNmYtNDA4Yi05OTEwLWE1MmJiMWQxYTk3OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWFtcyBSb2xzZW50aGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWY2Njk2ZDQtZDI4ZS00NGE3LWI2ZmQtYTU0MmRmZmE3MzY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFmYzkwMzk4LWI4OTEtNGNkZi05ZGVhLWFmOGEzYTc5ZDc5M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWF6bWluIE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWZkYmQ4MzctN2ZjOC00Yzk3LWFjMzEtNjM2OTUwYzJiM2U0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCbGFzZWJhbGwgU3VyZ2VvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIwMDQ1NTU5LTgxY2YtNDJlMC04N2Q0LTNiYmJkM2NlMGJjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFqb3IgQXJjYW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjAxOWZiMmItOWY0Yi00ZGViLWJmNzgtNmJlZTJmMTZkOThkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHbG9yaWEgQmVudGxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIwNTZhODI1LWI2MjktNDg1Ni04NTZiLTUzYTE1YWQzNGFjYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVubmV0dCBUYWthaGFzaGlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzU3ZmJmNC01MzNlLTRmMmMtODYxNi1hNTc2ZTk5NTQ3OTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhdCBJbm5pbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzkwYjI4Yy1kZjk2LTQ0M2UtYjgxZi1mMDEwNGJkMzc4NjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkthcmF0byBSYW5nZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiM2M4YzBhMC0yMGEwLTRjNWQtYTM5MS0zNGI5OTAzODY5M2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hbmRhIE1vdGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiM2Q0OGE4NC1hZGM2LTQ0ZjQtYmI2OS01MWQyYzZiMTIwM2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFhJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjY5YWEyNmYtNzFmNy00ZTE3LWJjMzYtNDljODc1ODcyY2MxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFuY2lzY2EgQnVydG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjcyYTEzNmUtYmJmZC00Njg3LWE1NzYtMWFiNTM4YzhmMjY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW1vdGhlcyBEZW1iXFx1MDBlOWxcXHUwMGU5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdhZGJiY2MtMDY3OS00M2YzLWE5MzktMDdmMDA5YTM5M2RiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb2RlIENydXRjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3YzFkZGRhLTk0NWMtNGIyZS04ODMxLWFkOWYyZWM0YTYwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9sYW4gVmlvbGV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdjNGY5ODYtZTYyYS00YThmLWI1ZjAtOGYzMGVjYzM1YzVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPc2NhciBIb2xseXdvb2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiODUxNjFkYS03ZjRjLTQyYTgtYjdmNi0xOTc4OWNmNjg2MWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphdmllciBMb3R1c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJiZGViM2UyLWNkNWEtNDZmZi05YTY5LWZkMDZiMTQ4MjcxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVhbnMgUmVibGFzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkNGM2ODM3LWVlYWEtNDY3NS1hZTQ4LTA2MWVmYTBmZDExYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV29ya21hbiBHbG9vbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkZTdiZGM1LWUwYTgtNDk5MC1hNmI2LWM0OTA5YzNlYmJjN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ291c2luIFNwaWtlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmU0ZjI4OGItZWY4Ny00ZThlLWI4ZWUtMjBlZWMxOGU4MGI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb2xrYURvdCBNYXRyaXhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDllNjZiMy01ODQ3LTRjYmItYWViYS0yYjcwZTdiYWZlZGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlByZW1qZWV0IExpdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMzYjFiNGU1LTRiODgtNDI0NS1iMmIxLWFlM2FkZTU3MzQ5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FsbCBPc2Jvcm5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNDQxODY2My03YWE0LTRjOWYtYWU3My0wZTgxZTQ0MmU4YTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNocmlzIFRoaWJhdWx0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzU0OWYyODAtODJiYS00ZDhlLWE0Y2UtYzQ5ZTU2NDYxZmI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWYWwgSGl0aGVydG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNTRmYmExMi0yZmI1LTQwOTEtYjFkNy0xNDQ5NjkzYjM1ZDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphY29idXMgSGFycGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzU3MjIyZmQtZGY1NS00NjRjLWE0NGUtYjE1NDQzZTYxYjcwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYXRoYSBTcHJ1Y2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNjE0NmM0NS0zZDliLTQ3NDktOWYwMy1kNGZhYWU2MWUyYzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bGFzIERpYXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNmJkMjFhOC03ODgwLTRjMDAtOGFiZS0zMzU2MGZlODRhYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldlbmR5IENlcm5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzkwZWFmZGYtNDI0NC00MWUwLThhNjYtYWRmMzFkNzAwZjAyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEZW5pbSBTcXVhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYTcwOTIwNS0yMjZkLTRkOTItOGJlNi01Zjc4NzFmNDhlMjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpdmVycyBKYXZpZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYWE5YmQ4Ni0yNDRhLTRhYmEtYTIzNy02YTk1MjhmMDk1NzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hZGRvbmcgQ2FuZHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYWNlZTBiOC01MGZjLTRkZjQtOTZlYS0wODlhM2Q1MDE4MTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5saWtraSBIYXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2M3MjVhNTgtMzhjYy00MmFmLTlmZjgtYWNlNzY1NDFhYzI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGRvIENvbWViYWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2NjOTlmMmYtMmZlYi00ZjMyLWE5YjktYzI4OWY2MTlkODRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJdHN1a2kgV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Q1NDk0YjQtMDVkMC00YjJlLTg1NzgtMzU3ZjA5MjNmZjRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2ZhcmxhbmQgVmFyZ2FzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Q2YjEwMmUtMTg4MS00MDc5LTlhMzctNDU1MDM4YmJmMTBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYWxlYiBNb3JpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkOWQ5YjM1LTBiYTQtNDg0Mi04NTc3LTJjODBlOTE5NjhkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2U5OWQ3YWYtYmE3NS00OGE3LWE1ZDgtZDQ2ZjU0MzgyOWYyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWN5IFRva2thblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlYWM3ODVlLTU1ZmQtNGE0ZS05YmM4LTE3YTY2MmE1OGEzOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVzdCBDZXJuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlYjU2MDZkLWVhM2YtNDQ3MS05Y2E3LTNkMmU3MWE1MGRkZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9uZG9uIFNpbW1vbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZWI4ZjhjZC04MGIyLTQ3ZjAtYjQzZS00ZDg4NWZhNDhhYTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbmlhIEJhaWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQwMDI5NDZmLWU3ZWQtNGNlNC1hNDA1LTYzYmRhZjVlYWJiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9yZ2UgT3dlbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNDZhYmIwMC1jNTQ2LTQ5NTItOTIxOC00ZjE2MDg0ZTMyMzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bGFzIEd1ZXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ1MTkyZDk1LWE1NDctNDk4YS1iNGVhLTY3NzBkZGU0YjlmNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3VtbWVycyBTbHVnZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDZlOWEyMTEtN2IzMy00NWQ5LThmMDktNmQxYTFhN2EzYzc4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaWxsaWFtIEJvb25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDc0YTI0NzMtMWYyOS00MGZhLWE0MWUtNjZmYTIyODFkZmNhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5kcnkgVmlvbGVuY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNzk2ZDI4Ny03N2VmLTQ5ZjAtODllZi04N2JjZGViMjgwZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkl6dWtpIENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDg3NThjMWItYWZiYi00M2E1LWIwMGItNjAwNGQ0MTllMmM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPcnRpeiBOZWxzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkOGJjNDgyZS05MzA5LTQyMzAtYWJjYi0yYzVhNjQxMjQ0NmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1Z3VzdCBPYnJpZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYWIxMjZhOS0zMzEwLTRmNmUtYTNiYS0zZTMwNDRhMGZlZWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhbWVzIFBlcmdhbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZDdlNzEwZi1kYTRlLTQ3NWItYjg3MC0yYzI5ZmU5ZDhjMDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkl0c3VraSBXZWVrc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkOGE0M2E0LWEwMjQtNDRlOS1hNTIyLTc4NWQ5OThiMjljM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlndWVsIFBldGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGUzODM2YTQtZmRiYS00NmNjLWFiNTMtNDlmY2FhY2MzOWMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb21Qb20gUG9tb2Rvcm9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZTUyZDVjMC1jYmE0LTRhY2UtODMwOC1lMmVkM2Y4Nzk5ZDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvc1xcdTAwZTkgTWl0Y2hlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZmUzYmMxYi1mY2E4LTQ3ZWItOTY1Zi02Y2Y5NDdjMzU0NDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxpbnVzIEhhbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTExZmY1N2EtZWM1ZC00ZDU5LTgxYTMtZmZlMzUyOWIwZTYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFc3ByZXNzbyBNYWNoaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTE2NTExMTYtNDUzMy00YjM5LTg5MzEtNjJkMDIzZTIxNTc5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZXJvIEluZGV4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTE4MWFkNGEtZGQwOS00ODczLWFlNjgtYjUwNTE4ZDIwNzIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXRpc3RhIE9hdG1pbGtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMmFkODFmZi1mZmYyLTQwYmItOTA0My05NWJkYWYzNGViYzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN3b3JkcyBNYWdwaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNDkyZmU3ZS0xNTcwLTRkNWUtOTJhMi03Y2ZiMmNmZWU1YTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklrZWEgSmVsbG9maW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNDk1Y2FkYy1hNjQ1LTQzOWQtYTU1Ni1lNDFkZTc0OTNmMThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR3b2Z1cmlvdXMgUHVkZGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU2MTE0ZmQ0LWExMWQtNGY2Yy1iODIzLTY1NjkxYmIyZDI4OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmV2YW4gVW5kZXJidWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTY3NjgwNjktMWRiNy00NGQ2LTg0OWItMGEyODFmNjJlODU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWVpdGhsZWluIFNodWZmbGVjYXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNzQ5ZGMyNy1jYTNiLTQ1NmUtODg5Yy1kMmVjMDJhYzdmNWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1cmVsaWFubyBFc3Rlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU5MTlkZmFlLTkxYzMtNDc1Yy1iNWQ1LThiMGMxNDk0MGM0MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmFtb3VzIE1lbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYmYyZGE1MC03NzExLTQ2YmEtOWU0OS0zNDFjZTM0ODdlMDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhbGR3aW4gSm9uZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYzQxZDM3ZS0yMzk4LTRlN2QtYWFmMC1mN2Y1MmU1MzAwYzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNsZW1lbnRpbmUgU3RlZXBsZWNoYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjEwNjI5MWEtNTkzNS00NDllLWIwNzUtNzVlNjJkMWQxYjA3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWxkYSBIaWdod2F5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjEwYmEwNmUtZDUwOS00MTRiLTkwY2QtNGQ3MGQ0M2M3NWY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZXJuYW5kbyBXaW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMTE4NWIyMC03YjRhLTRjY2MtYTk3Ny1kYzFhZmRmZDRjYjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYXppZXIgVG9zc2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjM1OWY5NzktZjY1OC00NDI3LTgyYTMtNzE4NTM3N2M4NWMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb25haCBNb3NhaWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNjM0MjcyOS1hMzhhLTQyMDQtYWY4ZC02NGI3YWNjYjU2MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcmNvIFdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY2M2VlNjhmLTgwMjEtNGRkMC1iM2Q1LWIzZDU4N2FlMzIxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUXVlYnJhZGEgU3RvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNmQzYzEzNC1lM2VlLTQwYTEtYmQ0ZC0wOTUzNDc0NDQxMjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhcmtlciBNYWNNaWxsYW4gSUlJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3NzE1YjA1LWVlNjktNDNlNS1hMGU1LThlM2QzNDI3MGM4MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FsaWd1bGEgTG90dXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOTBjMzk4Yi1lZWYwLTQwY2ItOGIwNy0zMDJhNzU5ZThiZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk51Y2xldXMgU3RyZWV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmJiNTI5MWMtMjQzOC00MDBlLWFiMzItMzBjZTEyNTljNjAwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3J5IE5vdmFrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmMxZDY1ZjUtODkxNi00MWYxLWI4NzgtNGQ0MmE5NjViMDExXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMaXp6eSBQYXN0YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZkZmQzNmM3LWUwYzEtNGZjZS05OGY3LTkyMWMzZDE3ZWFmZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmVlc2UgSGFycmluZ3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZlMWY4MjZmLTczNDYtNDI1Yy05ZDNjLTdlZDVhN2VhZTFiN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5nZWwgSXZvcmllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJjNDE4N2ZhLTQ1OWEtNGMwNi1iYmYyLTRlMGUwMTNkMjdjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2l4cGFjayBEb2d3YWxrZXJcIixcbiAgICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGxheWVycyxcbn07XG5cbiIsIi8qKlxuICogQGF1dGhvciBLYXRlXG4gKi9cblxudmFyIHRyYWNlcnkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb207XG5cbiAgICBmdW5jdGlvbiBzZXRSYW5kb20obmV3UmFuZG9tKSB7XG4gICAgICAgIHJhbmRvbSA9IG5ld1JhbmRvbTtcbiAgICB9XG5cbiAgICB2YXIgVHJhY2VyeU5vZGUgPSBmdW5jdGlvbihwYXJlbnQsIGNoaWxkSW5kZXgsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG5cbiAgICAgICAgLy8gTm8gaW5wdXQ/IEFkZCBhbiBlcnJvciwgYnV0IGNvbnRpbnVlIGFueXdheXNcbiAgICAgICAgaWYgKHNldHRpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiRW1wdHkgaW5wdXQgZm9yIG5vZGVcIik7XG4gICAgICAgICAgICBzZXR0aW5ncy5yYXcgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHJvb3Qgbm9kZSBvZiBhbiBleHBhbnNpb24sIGl0IHdpbGwgaGF2ZSB0aGUgZ3JhbW1hciBwYXNzZWQgYXMgdGhlICdwYXJlbnQnXG4gICAgICAgIC8vICBzZXQgdGhlIGdyYW1tYXIgZnJvbSB0aGUgJ3BhcmVudCcsIGFuZCBzZXQgYWxsIG90aGVyIHZhbHVlcyBmb3IgYSByb290IG5vZGVcbiAgICAgICAgaWYgKCBwYXJlbnQgaW5zdGFuY2VvZiB0cmFjZXJ5LkdyYW1tYXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhbW1hciA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICAgICAgdGhpcy5jaGlsZEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhbW1hciA9IHBhcmVudC5ncmFtbWFyO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRJbmRleCA9IGNoaWxkSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJhdyA9IHNldHRpbmdzLnJhdztcbiAgICAgICAgdGhpcy50eXBlID0gc2V0dGluZ3MudHlwZTtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLmdyYW1tYXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGdyYW1tYXIgc3BlY2lmaWVkIGZvciB0aGlzIG5vZGVcIiwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiTm9kZSgnXCIgKyB0aGlzLnJhdyArIFwiJyBcIiArIHRoaXMudHlwZSArIFwiIGQ6XCIgKyB0aGlzLmRlcHRoICsgXCIpXCI7XG4gICAgfTtcblxuICAgIC8vIEV4cGFuZCB0aGUgbm9kZSAod2l0aCB0aGUgZ2l2ZW4gY2hpbGQgcnVsZSlcbiAgICAvLyAgTWFrZSBjaGlsZHJlbiBpZiB0aGUgbm9kZSBoYXMgYW55XG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLmV4cGFuZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRSdWxlLCBwcmV2ZW50UmVjdXJzaW9uKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIC8vIFNldCB0aGUgcnVsZSBmb3IgbWFraW5nIGNoaWxkcmVuLFxuICAgICAgICAvLyBhbmQgZXhwYW5kIGl0IGludG8gc2VjdGlvblxuICAgICAgICB0aGlzLmNoaWxkUnVsZSA9IGNoaWxkUnVsZTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRSdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IHRyYWNlcnkucGFyc2UoY2hpbGRSdWxlKTtcblxuICAgICAgICAgICAgLy8gQWRkIGVycm9ycyB0byB0aGlzXG4gICAgICAgICAgICBpZiAoc2VjdGlvbnMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmNvbmNhdChzZWN0aW9ucy5lcnJvcnMpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0gbmV3IFRyYWNlcnlOb2RlKHRoaXMsIGksIHNlY3Rpb25zW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRSZWN1cnNpb24pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uZXhwYW5kKHByZXZlbnRSZWN1cnNpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGluIHRoZSBmaW5pc2hlZCB0ZXh0XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgKz0gdGhpcy5jaGlsZHJlbltpXS5maW5pc2hlZFRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBub3JtYWwgb3BlcmF0aW9uLCB0aGlzIHNob3VsZG4ndCBldmVyIGhhcHBlblxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIk5vIGNoaWxkIHJ1bGUgcHJvdmlkZWQsIGNhbid0IGV4cGFuZCBjaGlsZHJlblwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGNoaWxkIHJ1bGUgcHJvdmlkZWQsIGNhbid0IGV4cGFuZCBjaGlsZHJlblwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeHBhbmQgdGhpcyBydWxlIChwb3NzaWJseSBjcmVhdGluZyBjaGlsZHJlbilcbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuZXhwYW5kID0gZnVuY3Rpb24ocHJldmVudFJlY3Vyc2lvbikge1xuXG4gICAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuc2lvbkVycm9ycyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBUeXBlcyBvZiBub2Rlc1xuICAgICAgICAgICAgLy8gLTE6IHJhdywgbmVlZHMgcGFyc2luZ1xuICAgICAgICAgICAgLy8gIDA6IFBsYWludGV4dFxuICAgICAgICAgICAgLy8gIDE6IFRhZyAoXCIjc3ltYm9sLm1vZC5tb2QyLm1vZDMjXCIgb3IgXCIjW3B1c2hUYXJnZXQ6cHVzaFJ1bGVdc3ltYm9sLm1vZFwiKVxuICAgICAgICAgICAgLy8gIDI6IEFjdGlvbiAoXCJbcHVzaFRhcmdldDpwdXNoUnVsZV0sIFtwdXNoVGFyZ2V0OlBPUF1cIiwgbW9yZSBpbiB0aGUgZnV0dXJlKVxuXG4gICAgICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgICAgICAvLyBSYXcgcnVsZVxuICAgICAgICAgICAgY2FzZSAtMTpcblxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQ2hpbGRyZW4odGhpcy5yYXcsIHByZXZlbnRSZWN1cnNpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBwbGFpbnRleHQsIGRvIG5vdGhpbmcgYnV0IGNvcHkgdGV4dCBpbnRvIGZpbnNpaGVkIHRleHRcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IHRoaXMucmF3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBUYWdcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0byBmaW5kIGFueSBhY3Rpb25zLCBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBzeW1ib2wgaXNcbiAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zID0gW107XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkID0gdHJhY2VyeS5wYXJzZVRhZyh0aGlzLnJhdyk7XG5cbiAgICAgICAgICAgICAgICAvLyBCcmVhayBpbnRvIHN5bWJvbCBhY3Rpb25zIGFuZCBtb2RpZmllcnNcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbCA9IHBhcnNlZC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBwYXJzZWQubW9kaWZpZXJzO1xuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFsbCB0aGUgcHJlYWN0aW9ucyBmcm9tIHRoZSByYXcgc3ludGF4XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnNbaV0gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCBwYXJzZWQucHJlYWN0aW9uc1tpXS5yYXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5wb3N0YWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMucG9zdGFjdGlvbnNbaV0gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCBwYXJzZWQucG9zdGFjdGlvbnNbaV0ucmF3KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHVuZG8gYWN0aW9ucyBmb3IgYWxsIHByZWFjdGlvbnMgKHBvcHMgZm9yIGVhY2ggcHVzaClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVhY3Rpb25zW2ldLnR5cGUgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zLnB1c2godGhpcy5wcmVhY3Rpb25zW2ldLmNyZWF0ZVVuZG8oKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWN0aXZhdGUgYWxsIHRoZSBwcmVhY3Rpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByZWFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVhY3Rpb25zW2ldLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSB0aGlzLnJhdztcblxuICAgICAgICAgICAgICAgIC8vIEV4cGFuZCAocGFzc2luZyB0aGUgbm9kZSwgdGhpcyBhbGxvd3MgdHJhY2tpbmcgb2YgcmVjdXJzaW9uIGRlcHRoKVxuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUnVsZSA9IHRoaXMuZ3JhbW1hci5zZWxlY3RSdWxlKHRoaXMuc3ltYm9sLCB0aGlzLCB0aGlzLmVycm9ycyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZENoaWxkcmVuKHNlbGVjdGVkUnVsZSwgcHJldmVudFJlY3Vyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBtb2RpZmllcnNcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBVcGRhdGUgcGFyc2UgZnVuY3Rpb24gdG8gbm90IHRyaWdnZXIgb24gaGFzaHRhZ3Mgd2l0aGluIHBhcmVudGhlc2lzIHdpdGhpbiB0YWdzLFxuICAgICAgICAgICAgICAgIC8vICAgc28gdGhhdCBtb2RpZmllciBwYXJhbWV0ZXJzIGNhbiBjb250YWluIHRhZ3MgXCIjc3RvcnkucmVwbGFjZSgjcHJvdGFnb25pc3QjLCAjbmV3Q2hhcmFjdGVyIykjXCJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kaWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2ROYW1lID0gdGhpcy5tb2RpZmllcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZE5hbWUuaW5kZXhPZihcIihcIikgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnRXhwID0gL1xcKChbXildKylcXCkvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2RvOiBpZ25vcmUgYW55IGVzY2FwZWQgY29tbWFzLiAgRm9yIG5vdywgY29tbWFzIGFsd2F5cyBzcGxpdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSByZWdFeHAuZXhlYyh0aGlzLm1vZGlmaWVyc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMgfHwgcmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RQYXJhbXMgPSByZXN1bHRzWzFdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2ROYW1lID0gdGhpcy5tb2RpZmllcnNbaV0uc3Vic3RyaW5nKDAsIG1vZE5hbWUuaW5kZXhPZihcIihcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdGhpcy5ncmFtbWFyLm1vZGlmaWVyc1ttb2ROYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNaXNzaW5nIG1vZGlmaWVyP1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIk1pc3NpbmcgbW9kaWZpZXIgXCIgKyBtb2ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ICs9IFwiKCguXCIgKyBtb2ROYW1lICsgXCIpKVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBtb2QodGhpcy5maW5pc2hlZFRleHQsIG1vZFBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBwb3N0LWFjdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9zdGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0YWN0aW9uc1tpXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgICAgIC8vIEp1c3QgYSBiYXJlIGFjdGlvbj8gIEV4cGFuZCBpdCFcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG5ldyBOb2RlQWN0aW9uKHRoaXMsIHRoaXMucmF3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gTm8gdmlzaWJsZSB0ZXh0IGZvciBhbiBhY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBzb21lIHZpc2libGUgdGV4dCBmb3IgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHBlcmZvcm0gdGhlIGFjdGlvbj9cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJBbHJlYWR5IGV4cGFuZGVkIFwiICsgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuY2xlYXJFc2NhcGVDaGFycyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gdGhpcy5maW5pc2hlZFRleHQucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJET1VCTEVCQUNLU0xBU0hcIikucmVwbGFjZSgvXFxcXC9nLCBcIlwiKS5yZXBsYWNlKC9ET1VCTEVCQUNLU0xBU0gvZywgXCJcXFxcXCIpO1xuICAgIH07XG5cbiAgICAvLyBBbiBhY3Rpb24gdGhhdCBvY2N1cnMgd2hlbiBhIG5vZGUgaXMgZXhwYW5kZWRcbiAgICAvLyBUeXBlcyBvZiBhY3Rpb25zOlxuICAgIC8vIDAgUHVzaDogW2tleTpydWxlXVxuICAgIC8vIDEgUG9wOiBba2V5OlBPUF1cbiAgICAvLyAyIGZ1bmN0aW9uOiBbZnVuY3Rpb25OYW1lKHBhcmFtMCxwYXJhbTEpXSAoVE9ETyEpXG4gICAgZnVuY3Rpb24gTm9kZUFjdGlvbihub2RlLCByYXcpIHtcbiAgICAgICAgLypcbiAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIG5vZGUgZm9yIE5vZGVBY3Rpb25cIik7XG4gICAgICAgICBpZiAoIXJhdylcbiAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHJhdyBjb21tYW5kcyBmb3IgTm9kZUFjdGlvblwiKTtcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgICAgICB2YXIgc2VjdGlvbnMgPSByYXcuc3BsaXQoXCI6XCIpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHNlY3Rpb25zWzBdO1xuXG4gICAgICAgIC8vIE5vIGNvbG9uPyBBIGZ1bmN0aW9uIVxuICAgICAgICBpZiAoc2VjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAyO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb2xvbj8gSXQncyBlaXRoZXIgYSBwdXNoIG9yIGEgcG9wXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ydWxlID0gc2VjdGlvbnNbMV07XG4gICAgICAgICAgICBpZiAodGhpcy5ydWxlID09PSBcIlBPUFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgTm9kZUFjdGlvbi5wcm90b3R5cGUuY3JlYXRlVW5kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVBY3Rpb24odGhpcy5ub2RlLCB0aGlzLnRhcmdldCArIFwiOlBPUFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPIE5vdCBzdXJlIGhvdyB0byBtYWtlIFVuZG8gYWN0aW9ucyBmb3IgZnVuY3Rpb25zIG9yIFBPUHNcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIE5vZGVBY3Rpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBncmFtbWFyID0gdGhpcy5ub2RlLmdyYW1tYXI7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgLy8gc3BsaXQgaW50byBzZWN0aW9ucyAodGhlIHdheSB0byBkZW5vdGUgYW4gYXJyYXkgb2YgcnVsZXMpXG4gICAgICAgICAgICB0aGlzLnJ1bGVTZWN0aW9ucyA9IHRoaXMucnVsZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucnVsZU5vZGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucnVsZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgVHJhY2VyeU5vZGUoZ3JhbW1hciwgMCwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIHJhdyA6IHRoaXMucnVsZVNlY3Rpb25zW2ldXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBuLmV4cGFuZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJ1bGVzLnB1c2gobi5maW5pc2hlZFRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiBlc2NhcGUgY29tbWFzIHByb3Blcmx5XG4gICAgICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyh0aGlzLnRhcmdldCwgdGhpcy5maW5pc2hlZFJ1bGVzLCB0aGlzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBncmFtbWFyLnBvcFJ1bGVzKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBncmFtbWFyLmZsYXR0ZW4odGhpcy50YXJnZXQsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBOb2RlQWN0aW9uLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgKyBcIjpcIiArIHRoaXMucnVsZTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICsgXCI6UE9QXCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBcIigoc29tZSBmdW5jdGlvbikpXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCIoKFVua25vd24gQWN0aW9uKSlcIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTZXRzIG9mIHJ1bGVzXG4gICAgLy8gQ2FuIGFsc28gY29udGFpbiBjb25kaXRpb25hbCBvciBmYWxsYmFjayBzZXRzIG9mIHJ1bGVzZXRzKVxuICAgIGZ1bmN0aW9uIFJ1bGVTZXQoZ3JhbW1hciwgcmF3KSB7XG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xuICAgICAgICB0aGlzLmdyYW1tYXIgPSBncmFtbWFyO1xuICAgICAgICB0aGlzLmZhbGxvZmYgPSAxO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJhdykpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJ1bGVzID0gcmF3O1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyB8fCByYXcgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJ1bGVzID0gW3Jhd107XG4gICAgICAgIH0gZWxzZSBpZiAocmF3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBmb3IgY29uZGl0aW9uYWwgYW5kIGhpZXJhcmNoaWNhbCBydWxlIHNldHNcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFJ1bGVTZXQucHJvdG90eXBlLnNlbGVjdFJ1bGUgPSBmdW5jdGlvbihlcnJvcnMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJHZXQgcnVsZVwiLCB0aGlzLnJhdyk7XG4gICAgICAgIC8vIElzIHRoZXJlIGEgY29uZGl0aW9uYWw/XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbmFsUnVsZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ncmFtbWFyLmV4cGFuZCh0aGlzLmNvbmRpdGlvbmFsUnVsZSwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBkb2VzIHRoaXMgdmFsdWUgbWF0Y2ggYW55IG9mIHRoZSBjb25kaXRpb25hbHM/XG4gICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb25hbFZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMuY29uZGl0aW9uYWxWYWx1ZXNbdmFsdWVdLnNlbGVjdFJ1bGUoZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBpZiAodiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm8gcmV0dXJuZWQgdmFsdWU/XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyB0aGVyZSBhIHJhbmtlZCBvcmRlcj9cbiAgICAgICAgaWYgKHRoaXMucmFua2luZykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJhbmtpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMucmFua2luZy5zZWxlY3RSdWxlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RpbGwgbm8gcmV0dXJuZWQgdmFsdWU/XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UnVsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIFNlbGVjdCBmcm9tIHRoaXMgYmFzaWMgYXJyYXkgb2YgcnVsZXNcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBkaXN0cmlidXRpb24gZnJvbSB0aGUgZ3JhbW1hciBpZiB0aGVyZSBpcyBubyBvdGhlclxuICAgICAgICAgICAgdmFyIGRpc3RyaWJ1dGlvbiA9IHRoaXMuZGlzdHJpYnV0aW9uO1xuICAgICAgICAgICAgaWYgKCFkaXN0cmlidXRpb24pXG4gICAgICAgICAgICAgICAgZGlzdHJpYnV0aW9uID0gdGhpcy5ncmFtbWFyLmRpc3RyaWJ1dGlvbjtcblxuICAgICAgICAgICAgc3dpdGNoKGRpc3RyaWJ1dGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInNodWZmbGVcIjpcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNodWZmbGUgZGVza1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaHVmZmxlZERlY2sgfHwgdGhpcy5zaHVmZmxlZERlY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaHVmZmxlZERlY2sgPSBmeXNodWZmbGUoQXJyYXkuYXBwbHkobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIDogdGhpcy5kZWZhdWx0UnVsZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcChOdW1iZXIuY2FsbCwgTnVtYmVyKSwgdGhpcy5mYWxsb2ZmKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5zaHVmZmxlZERlY2sucG9wKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZWlnaHRlZFwiOlxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiV2VpZ2h0ZWQgZGlzdHJpYnV0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmFsbG9mZlwiOlxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiRmFsbG9mZiBkaXN0cmlidXRpb24gbm90IHlldCBpbXBsZW1lbnRlZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5wb3cocmFuZG9tKCksIHRoaXMuZmFsbG9mZikgKiB0aGlzLmRlZmF1bHRSdWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFVzZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlc1tpbmRleF0gPSArK3RoaXMuZGVmYXVsdFVzZXNbaW5kZXhdIHx8IDE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UnVsZXNbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JzLnB1c2goXCJObyBkZWZhdWx0IHJ1bGVzIGRlZmluZWQgZm9yIFwiICsgdGhpcyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfTtcblxuICAgIFJ1bGVTZXQucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXNlcykge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZ5c2h1ZmZsZShhcnJheSwgZmFsbG9mZikge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUsXG4gICAgICAgICAgICByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKHJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIFN5bWJvbCA9IGZ1bmN0aW9uKGdyYW1tYXIsIGtleSwgcmF3UnVsZXMpIHtcbiAgICAgICAgLy8gU3ltYm9scyBjYW4gYmUgbWFkZSB3aXRoIGEgc2luZ2xlIHZhbHVlLCBhbmQgYXJyYXksIG9yIGFycmF5IG9mIG9iamVjdHMgb2YgKGNvbmRpdGlvbnMvdmFsdWVzKVxuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5ncmFtbWFyID0gZ3JhbW1hcjtcbiAgICAgICAgdGhpcy5yYXdSdWxlcyA9IHJhd1J1bGVzO1xuXG4gICAgICAgIHRoaXMuYmFzZVJ1bGVzID0gbmV3IFJ1bGVTZXQodGhpcy5ncmFtbWFyLCByYXdSdWxlcyk7XG4gICAgICAgIHRoaXMuY2xlYXJTdGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuY2xlYXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIENsZWFyIHRoZSBzdGFjayBhbmQgY2xlYXIgYWxsIHJ1bGVzZXQgdXNhZ2VzXG4gICAgICAgIHRoaXMuc3RhY2sgPSBbdGhpcy5iYXNlUnVsZXNdO1xuXG4gICAgICAgIHRoaXMudXNlcyA9IFtdO1xuICAgICAgICB0aGlzLmJhc2VSdWxlcy5jbGVhclN0YXRlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucHVzaFJ1bGVzID0gZnVuY3Rpb24ocmF3UnVsZXMpIHtcbiAgICAgICAgdmFyIHJ1bGVzID0gbmV3IFJ1bGVTZXQodGhpcy5ncmFtbWFyLCByYXdSdWxlcyk7XG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChydWxlcyk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucG9wUnVsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5zZWxlY3RSdWxlID0gZnVuY3Rpb24obm9kZSwgZXJyb3JzKSB7XG4gICAgICAgIHRoaXMudXNlcy5wdXNoKHtcbiAgICAgICAgICAgIG5vZGUgOiBub2RlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJUaGUgcnVsZSBzdGFjayBmb3IgJ1wiICsgdGhpcy5rZXkgKyBcIicgaXMgZW1wdHksIHRvbyBtYW55IHBvcHM/XCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiKChcIiArIHRoaXMua2V5ICsgXCIpKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5zZWxlY3RSdWxlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuZ2V0QWN0aXZlUnVsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnNlbGVjdFJ1bGUoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5ydWxlc1RvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yYXdSdWxlcyk7XG4gICAgfTtcblxuICAgIHZhciBHcmFtbWFyID0gZnVuY3Rpb24ocmF3LCBzZXR0aW5ncykge1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRGcm9tUmF3T2JqKHJhdyk7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN5bWJvbHMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXlzW2ldXS5jbGVhclN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kcykge1xuXG4gICAgICAgIC8vIGNvcHkgb3ZlciB0aGUgYmFzZSBtb2RpZmllcnNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG1vZHMpIHtcbiAgICAgICAgICAgIGlmIChtb2RzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVyc1trZXldID0gbW9kc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmxvYWRGcm9tUmF3T2JqID0gZnVuY3Rpb24ocmF3KSB7XG5cbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMuc3ltYm9scyA9IHt9O1xuICAgICAgICB0aGlzLnN1YmdyYW1tYXJzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMucmF3KSB7XG4gICAgICAgICAgICAvLyBBZGQgYWxsIHJ1bGVzIHRvIHRoZSBncmFtbWFyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5yYXcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yYXcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XSA9IG5ldyBTeW1ib2wodGhpcywga2V5LCB0aGlzLnJhd1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbm9kZSBhbmQgc3Vibm9kZXNcbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVHJhY2VyeU5vZGUodGhpcywgMCwge1xuICAgICAgICAgICAgdHlwZSA6IC0xLFxuICAgICAgICAgICAgcmF3IDogcnVsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmV4cGFuZCA9IGZ1bmN0aW9uKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmNyZWF0ZVJvb3QocnVsZSk7XG4gICAgICAgIHJvb3QuZXhwYW5kKCk7XG4gICAgICAgIGlmICghYWxsb3dFc2NhcGVDaGFycylcbiAgICAgICAgICAgIHJvb3QuY2xlYXJFc2NhcGVDaGFycygpO1xuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24ocnVsZSwgYWxsb3dFc2NhcGVDaGFycykge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuZXhwYW5kKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpO1xuXG4gICAgICAgIHJldHVybiByb290LmZpbmlzaGVkVGV4dDtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zeW1ib2xzKTtcbiAgICAgICAgdmFyIHN5bWJvbEpTT04gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHN5bWJvbEpTT04ucHVzaCgnIFwiJyArIGtleSArICdcIiA6ICcgKyB0aGlzLnN5bWJvbHNba2V5XS5ydWxlc1RvSlNPTigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ7XFxuXCIgKyBzeW1ib2xKU09OLmpvaW4oXCIsXFxuXCIpICsgXCJcXG59XCI7XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBvciBwdXNoIHJ1bGVzXG4gICAgR3JhbW1hci5wcm90b3R5cGUucHVzaFJ1bGVzID0gZnVuY3Rpb24oa2V5LCByYXdSdWxlcywgc291cmNlQWN0aW9uKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldID0gbmV3IFN5bWJvbCh0aGlzLCBrZXksIHJhd1J1bGVzKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VBY3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0uaXNEeW5hbWljID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldLnB1c2hSdWxlcyhyYXdSdWxlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUucG9wUnVsZXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN5bWJvbHNba2V5XSlcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJDYW4ndCBwb3A6IG5vIHN5bWJvbCBmb3Iga2V5IFwiICsga2V5KTtcbiAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0ucG9wUnVsZXMoKTtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuc2VsZWN0UnVsZSA9IGZ1bmN0aW9uKGtleSwgbm9kZSwgZXJyb3JzKSB7XG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNba2V5XSkge1xuICAgICAgICAgICAgdmFyIHJ1bGUgPSB0aGlzLnN5bWJvbHNba2V5XS5zZWxlY3RSdWxlKG5vZGUsIGVycm9ycyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmFpbG92ZXIgdG8gYWx0ZXJuYXRpdmUgc3ViZ3JhbW1hcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YmdyYW1tYXJzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN1YmdyYW1tYXJzW2ldLnN5bWJvbHNba2V5XSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJncmFtbWFyc1tpXS5zeW1ib2xzW2tleV0uc2VsZWN0UnVsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gc3ltYm9sP1xuICAgICAgICBlcnJvcnMucHVzaChcIk5vIHN5bWJvbCBmb3IgJ1wiICsga2V5ICsgXCInXCIpO1xuICAgICAgICByZXR1cm4gXCIoKFwiICsga2V5ICsgXCIpKVwiO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgYSBwbGFpbnRleHQgcnVsZSBpbiB0aGUgdHJhY2VyeSBzeW50YXhcbiAgICB0cmFjZXJ5ID0ge1xuXG4gICAgICAgIGNyZWF0ZUdyYW1tYXIgOiBmdW5jdGlvbihyYXcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JhbW1hcihyYXcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFJhbmRvbTogc2V0UmFuZG9tLFxuXG4gICAgICAgIC8vIFBhcnNlIHRoZSBjb250ZW50cyBvZiBhIHRhZ1xuICAgICAgICBwYXJzZVRhZyA6IGZ1bmN0aW9uKHRhZ0NvbnRlbnRzKSB7XG5cbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHByZWFjdGlvbnMgOiBbXSxcbiAgICAgICAgICAgICAgICBwb3N0YWN0aW9ucyA6IFtdLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gdHJhY2VyeS5wYXJzZSh0YWdDb250ZW50cyk7XG4gICAgICAgICAgICB2YXIgc3ltYm9sU2VjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbnNbaV0udHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sU2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xTZWN0aW9uID0gc2VjdGlvbnNbaV0ucmF3O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwibXVsdGlwbGUgbWFpbiBzZWN0aW9ucyBpbiBcIiArIHRhZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wcmVhY3Rpb25zLnB1c2goc2VjdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN5bWJvbFNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vICAgdGhyb3cgKFwibm8gbWFpbiBzZWN0aW9uIGluIFwiICsgdGFnQ29udGVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50cyA9IHN5bWJvbFNlY3Rpb24uc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5zeW1ib2wgPSBjb21wb25lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5tb2RpZmllcnMgPSBjb21wb25lbnRzLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZSA6IGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IDA7XG4gICAgICAgICAgICB2YXIgaW5UYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFyIGVzY2FwZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gMDtcblxuICAgICAgICAgICAgdmFyIGVzY2FwZWRTdWJzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGxhc3RFc2NhcGVkQ2hhciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5lcnJvcnMgPSBlcnJvcnM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGVuZCwgdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbmQgLSBzdGFydCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChzdGFydCArIFwiOiBlbXB0eSB0YWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goc3RhcnQgKyBcIjogZW1wdHkgYWN0aW9uXCIpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByYXdTdWJzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RFc2NhcGVkQ2hhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1N1YnN0cmluZyA9IGVzY2FwZWRTdWJzdHJpbmcgKyBcIlxcXFxcIiArIHJ1bGUuc3Vic3RyaW5nKGxhc3RFc2NhcGVkQ2hhciArIDEsIGVuZCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByYXdTdWJzdHJpbmcgPSBydWxlLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICByYXcgOiByYXdTdWJzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsYXN0RXNjYXBlZENoYXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZXNjYXBlZFN1YnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGUubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmICghZXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHJ1bGUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW50ZXIgYSBkZWVwZXIgYnJhY2tldGVkIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDAgJiYgIWluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoLS07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZCBhIGJyYWNrZXRlZCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDAgJiYgIWluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhc2h0YWdcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZ25vcmUgaWYgbm90IGF0IGRlcHRoIDAsIHRoYXQgbWVhbnMgd2UgYXJlIGluIGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluVGFnID0gIWluVGFnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWRTdWJzdHJpbmcgPSBlc2NhcGVkU3Vic3RyaW5nICsgcnVsZS5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFc2NhcGVkQ2hhciA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBydWxlLmxlbmd0aClcbiAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBydWxlLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChpblRhZykge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVW5jbG9zZWQgdGFnXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlcHRoID4gMCkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVG9vIG1hbnkgW1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIlRvbyBtYW55IF1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0cmlwIG91dCBlbXB0eSBwbGFpbnRleHQgc2VjdGlvbnNcblxuICAgICAgICAgICAgc2VjdGlvbnMgPSBzZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLnR5cGUgPT09IDAgJiYgc2VjdGlvbi5yYXcubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlY3Rpb25zLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNWb3dlbChjKSB7XG4gICAgICAgIHZhciBjMiA9IGMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIChjMiA9PT0gJ2EnKSB8fCAoYzIgPT09ICdlJykgfHwgKGMyID09PSAnaScpIHx8IChjMiA9PT0gJ28nKSB8fCAoYzIgPT09ICd1Jyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW0oYykge1xuICAgICAgICByZXR1cm4gKGMgPj0gJ2EnICYmIGMgPD0gJ3onKSB8fCAoYyA+PSAnQScgJiYgYyA8PSAnWicpIHx8IChjID49ICcwJyAmJiBjIDw9ICc5Jyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgICB9XG5cbiAgICB2YXIgYmFzZUVuZ01vZGlmaWVycyA9IHtcblxuICAgICAgICByZXBsYWNlIDogZnVuY3Rpb24ocywgcGFyYW1zKSB7XG4gICAgICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE0NDc4My9yZXBsYWNpbmctYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHRcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAocGFyYW1zWzBdKSwgJ2cnKSwgcGFyYW1zWzFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYXBpdGFsaXplQWxsIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgdmFyIHMyID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBjYXBOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0FscGhhTnVtKHMuY2hhckF0KGkpKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXBOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYXBOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzMiArPSBzLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMyICs9IHMuY2hhckF0KGkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXBOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzMjtcbiAgICAgICAgfSxcblxuICAgICAgICBjYXBpdGFsaXplIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgPT09ICdpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhIFwiICsgcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1Zvd2VsKHMuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhbiBcIiArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gXCJhIFwiICsgcztcblxuICAgICAgICB9LFxuXG4gICAgICAgIGZpcnN0UyA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHMpO1xuICAgICAgICAgICAgdmFyIHMyID0gcy5zcGxpdChcIiBcIik7XG5cbiAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IGJhc2VFbmdNb2RpZmllcnMucyhzMlswXSkgKyBcIiBcIiArIHMyLnNsaWNlKDEpLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmluaXNoZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmlzaGVkO1xuICAgICAgICB9LFxuXG4gICAgICAgIHMgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHMuY2hhckF0KHMubGVuZ3RoIC0xKSkge1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Zvd2VsKHMuY2hhckF0KHMubGVuZ3RoIC0gMikpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKSArIFwiaWVzXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwic1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwic1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZCA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocy5jaGFyQXQocy5sZW5ndGggLTEpKSB7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Zvd2VsKHMuY2hhckF0KHMubGVuZ3RoIC0gMikpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKSArIFwiaWVkXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0cmFjZXJ5LmJhc2VFbmdNb2RpZmllcnMgPSBiYXNlRW5nTW9kaWZpZXJzOyBcbiAgICAvLyBFeHRlcm5hbGl6ZVxuICAgIHRyYWNlcnkuVHJhY2VyeU5vZGUgPSBUcmFjZXJ5Tm9kZTtcblxuICAgIHRyYWNlcnkuR3JhbW1hciA9IEdyYW1tYXI7XG4gICAgdHJhY2VyeS5TeW1ib2wgPSBTeW1ib2w7XG4gICAgdHJhY2VyeS5SdWxlU2V0ID0gUnVsZVNldDtcbiAgICByZXR1cm4gdHJhY2VyeTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFjZXJ5O1xuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jbGFzcyBEaWFsb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmRlYnVnKCduZXcgRGlhbG9nKCknKTtcblxuICAgIHRoaXMuJGRpYWxvZ3MgPSAkKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX3RleHQgcCcpO1xuICAgIHRoaXMuJGxpbmVPbmUgPSB0aGlzLiRkaWFsb2dzLmZpcnN0KCk7XG4gICAgdGhpcy4kbGluZVR3byA9IHRoaXMuJGRpYWxvZ3MubGFzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2wgPSAkKCcuZGlhbG9nLWNvbnRyb2wnKTtcblxuICAgIC8vIG9sZCBhbmltYXRpb24gc3R1ZmZcbiAgICAvL3RoaXMubGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICAgIC8vdGhpcy5saW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmhpZ2hsaWdodDtcbiAgICB0aGlzLnJlc2V0RGlhbG9nKCk7XG4gIH1cblxuICByZXNldERpYWxvZygpIHtcbiAgICB0aGlzLm1heERpYWxvZ0xlbiA9IHRoaXMuc2V0TWF4RGlhbG9nTGVuKCk7XG4gICAgdGhpcy5kaWFsb2dQYXJ0cyA9IFtdO1xuICAgIHRoaXMuY3VyRGlhbG9nUGFydCA9IDA7XG5cbiAgICAvLyBvbGQgYW5pbWF0aW9uIHN0dWZmXG4gICAgLy90aGlzLiRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAgIC8vdGhpcy4kbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcbiAgfVxuXG4gIC8vIHRvZG86IGRvIGkgd2FubmEgc3VwcG9ydCBtb2JpbGU/IHRoZW4gdXBkYXRlIHRoaXMgYWNjb3JkaW5nbHlcbiAgc2V0TWF4RGlhbG9nTGVuKCkge1xuICAgIHJldHVybiAzNTtcbiAgfVxuXG4gIGJyZWFrSW50b0RpYWxvZ1BhcnRzKGNvbW1lbnRhcnkpIHtcbiAgICAvLyBzcGxpdCBieSBuZXdsaW5lcyAoZW5mb3JjZWQgcGFjaW5nKVxuICAgIGNvbnN0IHBhY2luZ1BhcnRzID0gY29tbWVudGFyeS5zcGxpdCgnXFxuJyk7XG5cbiAgICBwYWNpbmdQYXJ0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICB0aGlzLmJyZWFrSW50b1BhcnRzKHApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc3BsaXQgZWFjaCBwYXJ0IGludG8gaXRzIGFuaW1hdGlvbiBwYXJ0cyBieSBsaW5lIGxlbmd0aFxuICBicmVha0ludG9QYXJ0cyh0ZXh0KSB7XG4gICAgbGV0IHBhcnRzID0gW1tdLCBbXV07XG4gICAgbGV0IHVuZmlsbGVkID0gMDtcbiAgICBsZXQgbGVuID0gMDtcblxuICAgIHRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICBsZXQgd29yZExlbiA9IHdvcmQubGVuZ3RoO1xuXG4gICAgICBpZiAoKGxlbiArIHdvcmRMZW4pID4gdGhpcy5tYXhEaWFsb2dMZW4pIHtcbiAgICAgICAgbGVuID0gMDtcblxuICAgICAgICBpZiAodW5maWxsZWQgPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1BhcnRzLnB1c2godGhpcy5tYWtlU2VudGVuY2VzKHBhcnRzKSk7XG4gICAgICAgICAgcGFydHMgPSBbW10sIFtdXTtcbiAgICAgICAgICB1bmZpbGxlZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5maWxsZWQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgobGVuICsgd29yZExlbikgPD0gdGhpcy5tYXhEaWFsb2dMZW4pIHtcbiAgICAgICAgcGFydHNbdW5maWxsZWRdLnB1c2god29yZCk7XG4gICAgICAgIGxlbiArPSB3b3JkTGVuICsgMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlhbG9nUGFydHMucHVzaCh0aGlzLm1ha2VTZW50ZW5jZXMocGFydHMpKTtcbiAgfVxuXG4gIG1ha2VTZW50ZW5jZXMocGFydHMpIHtcbiAgICByZXR1cm4gcGFydHMubWFwKCh3b3JkcykgPT4ge1xuICAgICAgcmV0dXJuIHdvcmRzLmpvaW4oJyAnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHJldHVybiB0aGlzLmN1ckRpYWxvZ1BhcnQgPT09ICh0aGlzLmRpYWxvZ1BhcnRzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgYWR2YW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuaGlnaGxpZ2h0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgdGhpcy5jdXJEaWFsb2dQYXJ0Kys7XG4gICAgdGhpcy5zaG93SGlnaGxpZ2h0KCk7XG4gIH1cblxuICBoYXNEaWFsb2dOZXh0KCkge1xuICAgICAgcmV0dXJuICEoKHRoaXMuY3VyRGlhbG9nUGFydCArIDEpID09PSB0aGlzLmRpYWxvZ1BhcnRzLmxlbmd0aCk7XG4gIH1cblxuICBzdGFydEhpZ2hsaWdodChoaWdobGlnaHQpIHtcbiAgICB0aGlzLmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcblxuICAgIHRoaXMucmVzZXREaWFsb2coKTtcbiAgICB0aGlzLmJyZWFrSW50b0RpYWxvZ1BhcnRzKHRoaXMuaGlnaGxpZ2h0LmNvbW1lbnRhcnkpO1xuXG4gICAgdGhpcy5zaG93SGlnaGxpZ2h0KHRoaXMuaGlnaGxpZ2h0KTtcbiAgfVxuXG4gIHNob3dIaWdobGlnaHQoKSB7XG4gICAgLy8gb2xkIGFuaW1hdGlvbiBzdHVmZlxuICAgIC8vdGhpcy4kbGluZU9uZS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgIC8vdGhpcy4kbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuXG4gICAgdGhpcy4kbGluZU9uZS50ZXh0KHRoaXMuZGlhbG9nUGFydHNbdGhpcy5jdXJEaWFsb2dQYXJ0XVswXSB8fCAnJyk7XG4gICAgdGhpcy4kbGluZVR3by50ZXh0KHRoaXMuZGlhbG9nUGFydHNbdGhpcy5jdXJEaWFsb2dQYXJ0XVsxXSB8fCAnJyk7XG5cbiAgICAvLyBvbGQgYW5pbWF0aW9uIHN0dWZmXG4gICAgLy90aGlzLiRsaW5lT25lLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICAvL3RoaXMuJGxpbmVUd28uYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICB9XG5cbiAgc2hvd0NvbnRyb2woaGFzUHJldiwgaGFzTmV4dCkge1xuICAgIHRoaXMuaGlkZUNvbnRyb2woKTtcbiAgICB0aGlzLnNob3dQcmV2KGhhc1ByZXYpO1xuICAgIHRoaXMuc2hvd05leHQoaGFzTmV4dCk7XG4gIH1cblxuICAvLyBzaG93IG5leHQgYXJyb3cgaWY6XG4gIC8vIHRoZXJlIGFyZSBwYXJ0cyBsZWZ0IHRvIHRoaXMgaGlnaGxpZ2h0XG4gIC8vIHRoZXJlIGFyZSBoaWdobGlnaHRzIGxlZnQgdG8gdGhlIHN0b3J5XG4gIHNob3dOZXh0KGhhc05leHQpIHtcbiAgICBpZiAodGhpcy5oYXNEaWFsb2dOZXh0KCkgfHwgaGFzTmV4dCkge1xuICAgICAgdGhpcy4kY29udHJvbC5sYXN0KCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICAvLyBzaG93IHByZSBhcnJvdyBpZjpcbiAgLy8gdGhlcmUgYXJlIGhpZ2hsaWdodHMgZWFybGllciBpbiB0aGUgc3RvcnlcbiAgc2hvd1ByZXYoaGFzUHJldikge1xuICAgIGlmIChoYXNQcmV2KSB7XG4gICAgICB0aGlzLiRjb250cm9sLmZpcnN0KCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBoaWRlQ29udHJvbCgpIHtcbiAgICB0aGlzLiRjb250cm9sLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZztcblxuLy8gb2xkIGFuaW1hdGlvbiBzdHVmZlxuLypcbmNvbnN0IGFuaW1hdGVIaWdobGlnaHQgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAkbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcblxuICAkbGluZU9uZS50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMF0gfHwgJycpO1xuICAkbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gIGhpZGVDb250cm9sKCk7XG4gIGFuaW1hdGUoJ29uZScpO1xufTtcblxuY29uc3QgYW5pbWF0ZSA9IChsaW5lKSA9PiB7XG4gIGlmIChsaW5lID09PSAnb25lJykge1xuICAgIC8vc3RvcEFuaW1hdGUoJ3R3bycpO1xuICAgICRsaW5lT25lLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgbGluZU9uZUFuaW1hdGluZyA9IHRydWU7XG4gIH0gZWxzZSBpZiAobGluZSA9PT0gJ3R3bycpIHtcbiAgICAvL3N0b3BBbmltYXRlKCdvbmUnKTtcbiAgICAkbGluZVR3by5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgIGxpbmVUd29BbmltYXRpbmcgPSB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBzdG9wQW5pbWF0ZSA9IChsaW5lKSA9PiB7XG4gIGlmIChsaW5lID09PSAnb25lJykge1xuICAgICRsaW5lT25lXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lT25lQW5pbWF0aW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAobGluZSA9PT0gJ3R3bycpIHtcbiAgICAkbGluZVR3b1xuICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgbGluZVR3b0FuaW1hdGluZyA9IGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBvbkFuaW1FbmQgPSAoKSA9PiB7XG4gIC8vIGNoZWNrIGZvciB0aGUgc2Vjb25kIGFuaW1hdGlvbiBmaXJzdCBzbyB0aGUgc2Vjb25kIGFuaW1hdGlvblxuICAvLyBkb2Vzbid0IGdldCB0cmlnZ2VyZWQgdGhlbiBpbW1lZGlhdGVseSBlbmRlZCBpbnNpZGUgdGhpcyBmdW5jXG4gIGlmIChsaW5lVHdvQW5pbWF0aW5nKSB7XG4gICAgc3RvcEFuaW1hdGUoJ3R3bycpO1xuXG4gICAgc2hvd0NvbnRyb2woKTtcbiAgfVxuXG4gIGlmIChsaW5lT25lQW5pbWF0aW5nKSB7XG4gICAgc3RvcEFuaW1hdGUoJ29uZScpO1xuXG4gICAgLy8gaWYgdGhlcmUncyB0ZXh0IGluIGxpbmVUd28sIGFuaW1hdGUgaXRcbiAgICBpZiAoJGxpbmVUd28udGV4dCgpLmxlbmd0aCkge1xuICAgICAgYW5pbWF0ZSgndHdvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dDb250cm9sKCk7XG4gICAgfVxuICB9XG59O1xuXG4gIGNvbnRpbnVlSGlnaGxpZ2h0KGhpZ2hsaWdodHMpIHtcbiAgICAvL3RoaXMuY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gICAgLy90aGlzLnByZXYgPSBoaWdobGlnaHRzLnByZXY7XG4gICAgLy90aGlzLm5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgICBpZiAoIXRoaXMuaGlnaGxpZ2h0KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICghdGhpcy5oaWdobGlnaHQuc3RhcnRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8vIGlmIGN1cnJlbnRseSBhbmltYXRpbmcsIHNpbXBseSBlbmQgdGhlIGFuaW1hdGlvblxuICAgIGlmICh0aGlzLmxpbmVPbmVBbmltYXRpbmcpIHtcblxuICAgICAgdGhpcy4kbGluZU9uZVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgICAgdGhpcy5saW5lT25lQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLiRsaW5lVHdvXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgICB0aGlzLmxpbmVUd29BbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd0NvbnRyb2woKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5saW5lVHdvQW5pbWF0aW5nKSB7XG5cbiAgICAgIHRoaXMuJGxpbmVUd29cbiAgICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICAgIHRoaXMubGluZVR3b0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93Q29udHJvbCgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VyRGlhbG9nUGFydCsrO1xuXG4gICAgICAvLyBubyBtb3JlIHRleHQgdG8gdGhpcyBoaWdobGlnaHRcbiAgICAgIGlmICh0aGlzLmN1ckRpYWxvZ1BhcnQgPT09IHRoaXMuZGlhbG9nUGFydHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gc2tpcCBhbmltYXRpb25zIGZvciBub3dcbiAgICAgIHRoaXMuc2hvd0hpZ2hsaWdodCgpO1xuICAgICAgLy9hbmltYXRlSGlnaGxpZ2h0KGN1cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXZlcnNlSGlnaGxpZ2h0KGhpZ2hsaWdodHMpIHtcbiAgICB0aGlzLmN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICAgIHRoaXMucHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgICB0aGlzLm5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgICBpZiAoIXRoaXMuY3VyKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICghdGhpcy5jdXIuc3RhcnRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIHRoaXMuY3VyRGlhbG9nUGFydC0tO1xuXG4gICAgLy8gbm8gbW9yZSB0ZXh0IHRvIHRoaXMgaGlnaGxpZ2h0XG4gICAgaWYgKHRoaXMuY3VyRGlhbG9nUGFydCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93SGlnaGxpZ2h0KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuKi9cblxuIiwiY29uc3QgSGlnaGxpZ2h0ID0gcmVxdWlyZSgnLi9oaWdobGlnaHQnKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbmNvbnN0IHRlYW1zRGF0YSA9IHJlcXVpcmUoJy4uL2xpYi90ZWFtcy1kYXRhJyk7XG5cbmxldCBvblN0YXJ0UHJldmlldztcbmxldCBvbkVuZFByZXZpZXc7XG5sZXQgb25TYXZlQW5kUHVibGlzaDtcblxuY29uc3QgaXNQbGF5QmFsbCA9IChnYW1lRXYpID0+IHtcbiAgcmV0dXJuIGdhbWVFdi5sYXN0VXBkYXRlLmluZGV4T2YoJ1BsYXkgYmFsbCcpID49IDA7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUhpZ2hsaWdodHMgPSAoY2IsIGdhbWVFdmVudHMsIHN0YXJ0RnJvbSwgc2F2ZWRFdmVudHMpID0+IHtcbiAgbGV0IGhpZ2hsaWdodHMgPSBbXTtcblxuICBpZiAoc2F2ZWRFdmVudHMpIHtcblxuICAgIGNvbnN0IHNhdmVkRXZlbnRzT2JqID0ge307XG5cbiAgICBmb3IgKGxldCBzYXZlZEV2IG9mIHNhdmVkRXZlbnRzKSB7XG4gICAgICBzYXZlZEV2ZW50c09ialtzYXZlZEV2LmJsYXNlYmFsbF9ldmVudF9pZF0gPSBzYXZlZEV2O1xuICAgIH1cblxuICAgIGZvciAobGV0IGdhbWVFdklkIGluIGdhbWVFdmVudHMpIHtcbiAgICAgIGNvbnN0IHNhdmVkRXYgPSBzYXZlZEV2ZW50c09ialtnYW1lRXZJZF07XG5cbiAgICAgIGlmIChzYXZlZEV2KSB7XG4gICAgICAgIGNvbnN0IGdhbWVFdmVudCA9IGdhbWVFdmVudHNbc2F2ZWRFdi5ibGFzZWJhbGxfZXZlbnRfaWRdO1xuICAgICAgICBjb25zdCBjb21tZW50YXJ5ID0gc2F2ZWRFdi5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgdmlzdWFsID0gc2F2ZWRFdi52aXN1YWwudHlwZTtcbiAgICAgICAgY29uc3QgdmlzdWFsTWV0YSA9IHNhdmVkRXYudmlzdWFsLm1ldGE7XG5cbiAgICAgICAgY29uc3QgaGwgPSBuZXcgSGlnaGxpZ2h0KHtcbiAgICAgICAgICBpZDogc2F2ZWRFdi5ibGFzZWJhbGxfZXZlbnRfaWQsXG4gICAgICAgICAgZ2FtZUV2ZW50OiBnYW1lRXZlbnQuZXYsXG4gICAgICAgICAgbWx1c3RhcmQ6IGdhbWVFdmVudC5tbHVzdGFyZCxcbiAgICAgICAgICBjb21tZW50YXJ5LFxuICAgICAgICAgIHZpc3VhbCxcbiAgICAgICAgICB2aXN1YWxNZXRhLFxuICAgICAgICB9KTtcblxuICAgICAgICBoaWdobGlnaHRzLnB1c2goaGwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUuZGVidWcoJ2dlbmVyYXRlSGlnaGxpZ2h0czonLCBoaWdobGlnaHRzKTtcbiAgICBjYihoaWdobGlnaHRzKTtcblxuICB9IGVsc2Uge1xuXG4gICAgJCgnI2dhbWUtZXZlbnRzX19mb3JtLWl0ZW1zIC5nYW1lLWV2ZW50LWNoZWNrX19pbnB1dDpjaGVja2VkJylcbiAgICAuZWFjaCgoXywgY2hlY2tlZCkgPT4ge1xuICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKGNoZWNrZWQpO1xuICAgICAgY29uc3QgaWQgPSAkY2hlY2tlZC5hdHRyKCdpZCcpO1xuICAgICAgY29uc3QgZ2FtZUV2ZW50ID0gZ2FtZUV2ZW50c1tpZF07XG4gICAgICBjb25zdCAkZ2FtZUV2ID0gJGNoZWNrZWQuY2xvc2VzdCgnLmdhbWUtZXZlbnQnKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRhcnkgPSAkZ2FtZUV2LmZpbmQoJy5nYW1lLWV2ZW50LXVwZGF0ZV9fdGV4dGFyZWEnKS52YWwoKTtcbiAgICAgIGNvbnN0IHZpc3VhbCA9ICRnYW1lRXYuZmluZCgnLnZpc3VhbC1zZWxlY3QnKS52YWwoKTtcbiAgICAgIGNvbnN0IHZpc3VhbE1ldGEgPSB7fTtcblxuICAgICAgaWYgKHZpc3VhbCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgdmlzdWFsTWV0YS5pbWFnZURhdGEgPSAkZ2FtZUV2LmZpbmQoJy52aXN1YWwtcHJldmlldy1jdXN0b20nKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgdmlzdWFsTWV0YS5pbWFnZVRpdGxlID0gJGdhbWVFdi5maW5kKCcuaW1hZ2UtbWV0YV9fdGl0bGUnKS52YWwoKTtcbiAgICAgICAgdmlzdWFsTWV0YS5pbWFnZURlc2NyaXB0aW9uID0gJGdhbWVFdi5maW5kKCcuaW1hZ2UtbWV0YV9faWQnKS52YWwoKTtcbiAgICAgICAgdmlzdWFsTWV0YS5jcmVhdG9yID0gJGdhbWVFdi5maW5kKCcuaW1hZ2UtbWV0YV9fY3JlYXRvcicpLnZhbCgpO1xuICAgICAgICB2aXN1YWxNZXRhLmNyZWF0b3JMaW5rID0gJGdhbWVFdi5maW5kKCcuaW1hZ2UtbWV0YV9fbGluaycpLnZhbCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBobCA9IG5ldyBIaWdobGlnaHQoe1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIGdhbWVFdmVudDogZ2FtZUV2ZW50LmV2LFxuICAgICAgICBtbHVzdGFyZDogZ2FtZUV2ZW50Lm1sdXN0YXJkLFxuICAgICAgICBjb21tZW50YXJ5LFxuICAgICAgICB2aXN1YWwsXG4gICAgICAgIHZpc3VhbE1ldGEsXG4gICAgICB9KTtcblxuICAgICAgaGlnaGxpZ2h0cy5wdXNoKGhsKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ2dlbmVyYXRlSGlnaGxpZ2h0czonLCBoaWdobGlnaHRzKTtcbiAgICBjYihoaWdobGlnaHRzLCBzdGFydEZyb20pO1xuICB9XG5cbn07XG5cbmNvbnN0IHJlbmRlckdhbWVFdiA9IChnYW1lRXYpID0+IHtcbiAgY29uc3QgZGF0YSA9IGdhbWVFdi5ldi5kYXRhO1xuXG4gIGlmICghZGF0YS5sYXN0VXBkYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHJldCA9IFtdO1xuICBsZXQgaW5uaW5nO1xuICBsZXQgaW5uaW5nQ2xhc3NlcztcbiAgbGV0IGhvbWVFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2hvbWUnLCBkYXRhKTtcbiAgbGV0IGF3YXlFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2F3YXknLCBkYXRhKTtcbiAgbGV0IHRvcE9mT25lID0gZmFsc2U7XG5cbiAgLy8gY2hlY2sgZm9yIGhhbGYtaW5uaW5nIGNoYW5nZXNcbiAgaWYgKGdhbWVFdi5tbHVzdGFyZC5nYW1lU3RhdHVzID09PSAnYmVmb3JlRmlyc3RQaXRjaCcpIHtcblxuICAgIGlubmluZyA9ICdUb3Agb2YgMSc7XG4gICAgaW5uaW5nQ2xhc3NlcyA9ICdpbm5pbmctdG9wJztcbiAgICAvLyBzb21ldGltZXMsIHRoZSBnYW1lIGV2ZW50IGRvZXNuJ3QgdGhpbmsgaXQncyB0aGUgdG9wIG9mIDEgaWYgdGhlcmUgYXJlXG4gICAgLy8gc29tZSBldmVudHMgYmVmb3JlIHRoZSBmaXJzdCBwaXRjaCwgb3Igc29tZXRoaW5nXG4gICAgdG9wT2ZPbmUgPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoZ2FtZUV2Lm1sdXN0YXJkLmdhbWVTdGF0dXMgPT09ICdmaXJzdEhhbGZJbm5pbmdTdGFydCcgJiYgZGF0YS5pbm5pbmcpIHtcblxuICAgIGlubmluZyA9IGBUb3Agb2YgJHtkYXRhLmlubmluZyArIDF9YDtcbiAgICBpbm5pbmdDbGFzc2VzID0gJ2lubmluZy10b3AnO1xuXG4gIH0gZWxzZSBpZiAoZ2FtZUV2Lm1sdXN0YXJkLmdhbWVTdGF0dXMgPT09ICdzZWNvbmRIYWxmSW5uaW5nU3RhcnQnKSB7XG5cbiAgICBpbm5pbmcgPSBgQm90dG9tIG9mICR7ZGF0YS5pbm5pbmcgKyAxfWA7XG4gICAgaW5uaW5nQ2xhc3NlcyA9ICdpbm5pbmctYm90dG9tJztcblxuICB9XG5cbiAgaWYgKGlubmluZykge1xuICAgIGNvbnN0ICRpbm5pbmcgPSAkKCcjaW5uaW5nLWhlYWRlcl9fdGVtcGxhdGUnKS5jbG9uZSgpO1xuXG4gICAgJGlubmluZ1xuICAgICAgLmF0dHIoJ2lkJywgJycpXG4gICAgICAuYWRkQ2xhc3MoaW5uaW5nQ2xhc3NlcylcbiAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgICAgIC5maW5kKCdzcGFuJylcbiAgICAgIC50ZXh0KGlubmluZyk7XG5cbiAgICByZXQucHVzaCgkaW5uaW5nKTtcblxuICAgIGNvbnN0ICRpbm5pbmdJbmZvID0gJCgnI2lubmluZy1pbmZvX190ZW1wbGF0ZScpLmNsb25lKCk7XG4gICAgY29uc3QgZmllbGRpbmcgPSBkYXRhLnRvcE9mSW5uaW5nID8gJ2hvbWUnIDogJ2F3YXknO1xuICAgIGxldCBmaWVsZGluZ1RlYW07XG4gICAgbGV0IGZpZWxkaW5nRW1vamk7XG4gICAgbGV0IHBpdGNoZXI7XG4gICAgbGV0IGJhdHRpbmdUZWFtO1xuICAgIGxldCBiYXR0aW5nRW1vamk7XG5cbiAgICBpZiAoZGF0YS50b3BPZklubmluZyB8fCB0b3BPZk9uZSkgeyAvLyBob21lIGZpZWxkaW5nXG4gICAgICBmaWVsZGluZ1RlYW0gPSBkYXRhLmhvbWVUZWFtTmFtZTtcbiAgICAgIGZpZWxkaW5nRW1vamkgPSBob21lRW1vamk7XG4gICAgICBwaXRjaGVyID0gZGF0YS5ob21lUGl0Y2hlck5hbWUgfHwgJ2hvbWUtcGl0Y2hlci1wbGFjZWhvbGRlcic7XG4gICAgICBiYXR0aW5nVGVhbSA9IGRhdGEuYXdheVRlYW1OYW1lO1xuICAgICAgYmF0dGluZ0Vtb2ppID0gYXdheUVtb2ppO1xuICAgIH0gZWxzZSB7IC8vIGF3YXkgZmllbGRpbmdcbiAgICAgIGZpZWxkaW5nVGVhbSA9IGRhdGEuYXdheVRlYW1OYW1lO1xuICAgICAgZmllbGRpbmdFbW9qaSA9IGF3YXlFbW9qaTtcbiAgICAgIHBpdGNoZXIgPSBkYXRhLmF3YXlQaXRjaGVyTmFtZTtcbiAgICAgIGJhdHRpbmdUZWFtID0gZGF0YS5ob21lVGVhbU5hbWU7XG4gICAgICBiYXR0aW5nRW1vamkgPSBob21lRW1vamk7XG4gICAgfVxuXG4gICAgJGlubmluZ0luZm9cbiAgICAgIC5hdHRyKCdpZCcsICcnKVxuICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICAgICAgLmZpbmQoJy5maWVsZGluZycpXG4gICAgICAudGV4dChgJHtmaWVsZGluZ0Vtb2ppfSR7ZmllbGRpbmdUZWFtfSBmaWVsZGluZywgd2l0aCAke3BpdGNoZXJ9IHBpdGNoaW5nYCk7XG5cbiAgICAkaW5uaW5nSW5mb1xuICAgICAgLmZpbmQoJy5iYXR0aW5nJylcbiAgICAgIC50ZXh0KGAke2JhdHRpbmdFbW9qaX0ke2JhdHRpbmdUZWFtfSBiYXR0aW5nYCk7XG5cbiAgICByZXQucHVzaCgkaW5uaW5nSW5mbyk7XG4gIH1cblxuICBjb25zdCAkZ2FtZUV2ID0gJCgnI2dhbWUtZXZlbnRfX3RlbXBsYXRlJykuY2xvbmUoKTtcblxuICAkZ2FtZUV2XG4gICAgLmZpbmQoJy5nYW1lLWV2ZW50LWNoZWNrX19pbnB1dCcpXG4gICAgLmF0dHIoJ2lkJywgZ2FtZUV2LmV2Lmhhc2gpO1xuXG4gICRnYW1lRXZcbiAgICAuZmluZCgndGV4dGFyZWEnKVxuICAgIC52YWwoYCR7ZGF0YS5sYXN0VXBkYXRlfSAke2RhdGEuc2NvcmVVcGRhdGUgfHwgJyd9YCk7XG5cbiAgLy8gdXBkYXRlIHZpc3VhbCBzZWxlY3Qgb3B0aW9ucyBhbmQgaWRzXG4gIGNvbnN0ICR2aXN1YWxTZWxlY3QgPSAkZ2FtZUV2LmZpbmQoJy52aXN1YWwtc2VsZWN0Jyk7XG5cbiAgJHZpc3VhbFNlbGVjdC5hdHRyKCdpZCcsIGB2aXN1YWwtc2VsZWN0LSR7Z2FtZUV2LmV2Lmhhc2h9YCk7XG4gIGlmIChpc1BsYXlCYWxsKGdhbWVFdi5ldi5kYXRhKSkge1xuICAgICR2aXN1YWxTZWxlY3QudmFsKCdtYXRjaHVwJykuY2hhbmdlKCk7XG4gIH0gZWxzZSB7XG4gICAgJGdhbWVFdi5maW5kKCcudmlzdWFsLXByZXZpZXctZGlhbW9uZCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIGNvbnN0ICRjdXN0b21Gb3JtID0gJGdhbWVFdi5maW5kKCcuY3VzdG9tLXZpc3VhbC1mb3JtJyk7XG5cbiAgJGN1c3RvbUZvcm0uYXR0cignaWQnLCBgY3VzdG9tLXZpc3VhbC1mb3JtLSR7Z2FtZUV2LmV2Lmhhc2h9YCk7XG4gIC8vIHRvZG86IHRoZXJlJ3MgbW9yZSB0aGFuIDEgaW5wdXQsIGZpeCB0aGlzXG4gICRjdXN0b21Gb3JtXG4gICAgLmZpbmQoJ2xhYmVsJylcbiAgICAuYXR0cignZm9yJywgYGN1c3RvbS12aXN1YWxfX2lucHV0LSR7Z2FtZUV2LmV2Lmhhc2h9YCk7XG4gICRjdXN0b21Gb3JtXG4gICAgLmZpbmQoJ2lucHV0JylcbiAgICAuYXR0cignaWQnLCBgY3VzdG9tLXZpc3VhbF9faW5wdXQtJHtnYW1lRXYuZXYuaGFzaH1gKTtcblxuICAvLyBnYW1lIHN0YXR1c1xuICBjb25zdCAkZ2FtZVN0YXR1cyA9ICRnYW1lRXYuZmluZCgnLmdhbWUtZXZlbnQtZ2FtZS1zdGF0dXMnKTtcblxuICAvLyBzY29yZVxuICBjb25zdCAkaG9tZVNjb3JlID0gJGdhbWVTdGF0dXMuZmluZCgnLnNjb3JlYm9hcmQtdGVhbXNfX2hvbWUgc3BhbicpO1xuICBjb25zdCAkYXdheVNjb3JlID0gJGdhbWVTdGF0dXMuZmluZCgnLnNjb3JlYm9hcmQtdGVhbXNfX2F3YXkgc3BhbicpO1xuXG4gICRob21lU2NvcmUuZmlyc3QoKS50ZXh0KHRlYW1zRGF0YVtkYXRhLmhvbWVUZWFtXS5zaG9ydGhhbmQpO1xuICAkaG9tZVNjb3JlLmxhc3QoKS50ZXh0KGRhdGEuaG9tZVNjb3JlKTtcblxuICAkYXdheVNjb3JlLmZpcnN0KCkudGV4dCh0ZWFtc0RhdGFbZGF0YS5hd2F5VGVhbV0uc2hvcnRoYW5kKTtcbiAgJGF3YXlTY29yZS5sYXN0KCkudGV4dChkYXRhLmF3YXlTY29yZSk7XG5cbiAgLy8gYmFzZXMgYXJlIGZyb20gdGhpcmQgdG8gZmlyc3RcbiAgY29uc3QgJGJhc2VzID0gJGdhbWVTdGF0dXMuZmluZCgnLnNjb3JlYm9hcmQtYmFzZXMnKTtcbiAgJGJhc2VzLmVtcHR5KCk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQoZ2FtZUV2Lm1sdXN0YXJkLmJhc2VSdW5uZXJzLnRoaXJkLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuc2Vjb25kLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuXG4gIC8vIGNvdW50XG4gIGNvbnN0ICRjb3VudCA9ICRnYW1lU3RhdHVzLmZpbmQoJy5zY29yZWJvYXJkLWNvdW50X19jb3VudCBzcGFuJyk7XG4gICRjb3VudC5maXJzdCgpLnRleHQoZGF0YS5hdEJhdEJhbGxzKTtcbiAgJGNvdW50Lmxhc3QoKS50ZXh0KGRhdGEuYXRCYXRTdHJpa2VzKTtcbiAgY29uc3QgJG91dHMgPSAkZ2FtZVN0YXR1cy5maW5kKCcuc2NvcmVib2FyZC1jb3VudF9fb3V0cyBzcGFuJyk7XG4gICRvdXRzLnRleHQoZGF0YS5oYWxmSW5uaW5nT3V0cyk7XG5cbiAgLy8gaGlnaGxpZ2h0IGludGVyZXN0aW5nIGV2ZW50c1xuICBsZXQgY29udGFpbmVyQ2xhc3NlcyA9IFtdO1xuXG4gIGlmIChnYW1lRXYubWx1c3RhcmQub3V0ICYmIGdhbWVFdi5tbHVzdGFyZC5vdXRNZXRhLmtpbmQgPT09ICdzdHJpa2UnKSB7XG4gICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKCdzdHJpa2VvdXQnKTtcbiAgfVxuXG4gIGlmIChnYW1lRXYubWx1c3RhcmQuaGl0KSB7XG4gICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKCdoaXQnKTtcbiAgfVxuXG4gIGlmIChnYW1lRXYubWx1c3RhcmQuc3RlYWwgJiYgZ2FtZUV2Lm1sdXN0YXJkLnN0ZWFsTWV0YS5zdWNjZXNzKSB7XG4gICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKCdzdGVhbCcpO1xuICB9XG5cbiAgaWYgKGdhbWVFdi5tbHVzdGFyZC5zcGVjaWFsKSB7XG4gICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKCdzcGVjaWFsJyk7XG4gIH1cblxuICBpZiAoZ2FtZUV2Lm1sdXN0YXJkLm1heGltdW1CbGFzZWJhbGwpIHtcbiAgICBjb250YWluZXJDbGFzc2VzLnB1c2goJ21heCcpO1xuICB9XG5cbiAgaWYgKGdhbWVFdi5tbHVzdGFyZC5ydW5zU2NvcmVkIHx8IGdhbWVFdi5tbHVzdGFyZC51bnJ1bnNTY29yZWQpIHtcbiAgICBjb250YWluZXJDbGFzc2VzLnB1c2goJ3Njb3JlJyk7XG4gIH1cblxuICBpZiAoY29udGFpbmVyQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICBjb250YWluZXJDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgJChgLnNjcm9sbC10by4ke2NsYXNzTmFtZX1gKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXJDbGFzc2VzLnB1c2goJ2ludGVyZXN0aW5nJyk7XG4gIH1cblxuICAkZ2FtZUV2XG4gICAgLmF0dHIoJ2lkJywgJycpXG4gICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICAgIC5hZGRDbGFzcyhjb250YWluZXJDbGFzc2VzKTtcblxuICByZXQucHVzaCgkZ2FtZUV2KTtcblxuICByZXR1cm4gcmV0O1xufTtcblxuLy8gc2V0IGdhbWUgdGl0bGUgYW5kIG1hdGNodXBcbmxldCBoZWFkZXJSZW5kZXJlZCA9IGZhbHNlO1xuXG5jb25zdCBoZWFkZXJOb3RSZW5kZXJlZCA9IChnYW1lRXYpID0+IHtcbiAgcmV0dXJuICFoZWFkZXJSZW5kZXJlZCAmJiBnYW1lRXYuZXYuZGF0YS5ob21lUGl0Y2hlck5hbWUgJiYgZ2FtZUV2LmV2LmRhdGEuYXdheVBpdGNoZXJOYW1lO1xufTtcblxuY29uc3QgcmVuZGVySGVhZGVyID0gKGdhbWVFdikgPT4ge1xuICBsZXQgaG9tZUVtb2ppID0gdXRpbC5nZXRFbW9qaSgnaG9tZScsIGdhbWVFdi5ldi5kYXRhKTtcbiAgbGV0IGF3YXlFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2F3YXknLCBnYW1lRXYuZXYuZGF0YSk7XG5cbiAgJCgnLmdhbWUtZXZlbnRzX19nYW1lLWhlYWRlciAuZ2FtZS1uYW1lJylcbiAgICAudGV4dChgU2Vhc29uICR7Z2FtZUV2LmV2LmRhdGEuc2Vhc29uICsgMX0sIERheSAke2dhbWVFdi5ldi5kYXRhLmRheSArIDF9YCk7XG4gICQoJy5nYW1lLWV2ZW50c19fZ2FtZS1oZWFkZXIgLm1hdGNodXAnKVxuICAgIC50ZXh0KGAke2dhbWVFdi5ldi5kYXRhLmhvbWVUZWFtTmFtZX0gdnMuICR7Z2FtZUV2LmV2LmRhdGEuYXdheVRlYW1OYW1lfWApO1xuICAkKCcuZ2FtZS1ldmVudHNfX2dhbWUtc3ViaGVhZGVyIC5ob21lLXBpdGNoZXInKVxuICAgIC50ZXh0KGAke2hvbWVFbW9qaX0gJHtnYW1lRXYuZXYuZGF0YS5ob21lUGl0Y2hlck5hbWV9YCk7XG4gICQoJy5nYW1lLWV2ZW50c19fZ2FtZS1zdWJoZWFkZXIgLmF3YXktcGl0Y2hlcicpXG4gICAgLnRleHQoYCR7YXdheUVtb2ppfSAke2dhbWVFdi5ldi5kYXRhLmF3YXlQaXRjaGVyTmFtZX1gKTtcblxuICBoZWFkZXJSZW5kZXJlZCA9IHRydWU7XG59O1xuXG5sZXQgaHBSZWFkeSA9IGZhbHNlO1xuXG5jb25zdCBob21lUGl0Y2hlclJlYWR5ID0gKGdhbWVFdikgPT4ge1xuICBpZiAoaHBSZWFkeSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiBnYW1lRXYuZXYuZGF0YS5ob21lUGl0Y2hlck5hbWU7XG59O1xuXG5jb25zdCB1cGRhdGVIb21lUGl0Y2hlciA9IChnYW1lRXYpID0+IHtcbiAgLy8gaGFjazogc2luY2UgYXQgdGhpcyBwb2ludCB3ZSBrbm93IHRoZSBob21lIHBpdGNoZXIsIGNoZWNrIGlmIHdlIG5lZWQgdG9cbiAgLy8gdXBkYXRlIGl0IGluIHRoZSB0YWJsZSBvZiBnYW1lIGV2ZW50cyBmb3IgdGhlIHRvcCBvZiAxc3RcbiAgY29uc3QgJGZpcnN0SW5uaW5nID0gJCgnI2dhbWUtZXZlbnRzX19mb3JtLWl0ZW1zIC5pbm5pbmctaW5mbyAuZmllbGRpbmcnKTtcblxuICBpZiAoISRmaXJzdElubmluZy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkZmlyc3RJbm5pbmdcbiAgICAudGV4dCgkZmlyc3RJbm5pbmcudGV4dCgpLnJlcGxhY2UoJ2hvbWUtcGl0Y2hlci1wbGFjZWhvbGRlcicsIGdhbWVFdi5ldi5kYXRhLmhvbWVQaXRjaGVyTmFtZSkpO1xuICBocFJlYWR5ID0gdHJ1ZTtcbn07XG5cbmNvbnN0IHJlbmRlciA9IChzZXR0aW5ncykgPT4ge1xuICBnYW1lRXZlbnRzID0gc2V0dGluZ3MuZ2FtZUV2ZW50cztcbiAgb25TdGFydFByZXZpZXcgPSBzZXR0aW5ncy5vblN0YXJ0UHJldmlldztcbiAgb25FbmRQcmV2aWV3ID0gc2V0dGluZ3Mub25FbmRQcmV2aWV3O1xuICBvblNhdmVBbmRQdWJsaXNoID0gc2V0dGluZ3Mub25TYXZlQW5kUHVibGlzaDtcbiAgY29uc3Qgc2F2ZWRFdmVudHMgPSBzZXR0aW5ncy5zYXZlZEV2ZW50cztcblxuICAkKCcuZ2FtZS1ldmVudHNfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLmdhbWUtZXZlbnRzX19pbmZvJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gIGNvbnN0ICRjb250YWluZXIgPSAkKCcjZ2FtZS1ldmVudHNfX2Zvcm0taXRlbXMnKTtcbiAgJGNvbnRhaW5lci5lbXB0eSgpO1xuICBoZWFkZXJSZW5kZXJlZCA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGlkIGluIGdhbWVFdmVudHMpIHtcbiAgICBsZXQgZ2FtZUV2ID0gZ2FtZUV2ZW50c1tpZF07XG5cbiAgICBpZiAoaGVhZGVyTm90UmVuZGVyZWQoZ2FtZUV2KSkge1xuICAgICAgcmVuZGVySGVhZGVyKGdhbWVFdik7XG4gICAgfVxuXG4gICAgaWYgKGhvbWVQaXRjaGVyUmVhZHkoZ2FtZUV2KSkge1xuICAgICAgdXBkYXRlSG9tZVBpdGNoZXIoZ2FtZUV2KTtcbiAgICB9XG5cbiAgICBsZXQgJGdhbWVFdiA9IHJlbmRlckdhbWVFdihnYW1lRXYpO1xuXG4gICAgaWYgKCRnYW1lRXYpIHtcbiAgICAgICRjb250YWluZXIuYXBwZW5kKCRnYW1lRXYpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgaXMgZ3Jvc3MsIGJ1dCBkdWN0IHRhcGUgaXMgZWFzaWVyIChmb3Igbm93IHNoaGhoKVxuICBpZiAoc2F2ZWRFdmVudHMpIHtcbiAgICAkKCcuZ2FtZS1ldmVudHNfX2hlYWRlciAuYnV0dG9ucy13cmFwcGVyIGJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICBmb3IgKGxldCBzYXZlZEV2IG9mIHNhdmVkRXZlbnRzKSB7XG4gICAgICBjb25zdCAkY2hlY2sgPSAkKGAjJHtzYXZlZEV2LmJsYXNlYmFsbF9ldmVudF9pZH1gKTtcblxuICAgICAgLy8gc28gdGhpcyBpcyBjdXJzZWQ6IGlmIHdlIGdvdCB0byB0aGUgcGFnZSBieSBlZGl0aW5nIGFuIG9sZCBzdG9yeSxcbiAgICAgIC8vIHRoZW4gZGVjaWRlZCB0byBsb2FkIGEgbmV3IGdhbWUsIHdlIHN0aWxsIGhhdmUgc2F2ZWRFdmVudHM7IGJ1dCwgdGhleVxuICAgICAgLy8gd29uJ3QgZmluZCBhbnkgY2hlY2tlZCBldmVudHNcbiAgICAgIGlmICgkY2hlY2subGVuZ3RoKSB7XG4gICAgICAgICRjaGVjay5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICQoJy5nYW1lLWV2ZW50c19faGVhZGVyIC5idXR0b25zLXdyYXBwZXIgYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICRnYW1lRXYgPSAkY2hlY2suY2xvc2VzdCgnLmdhbWUtZXZlbnQnKTtcbiAgICAgICAgJGdhbWVFdi5maW5kKCcuZ2FtZS1ldmVudC11cGRhdGVfX3RleHRhcmVhJykudmFsKHNhdmVkRXYuZGVzY3JpcHRpb24pO1xuICAgICAgICAkZ2FtZUV2LmZpbmQoJy5nYW1lLWV2ZW50LXByZXZpZXdfX2xpbmsnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgJGdhbWVFdi5maW5kKCcudmlzdWFsLXNlbGVjdCcpLnZhbChzYXZlZEV2LnZpc3VhbC50eXBlKTtcblxuICAgICAgICBpZiAoc2F2ZWRFdi52aXN1YWwudHlwZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICBjb25zdCAkY3VzdG9tID0gJGdhbWVFdi5maW5kKCcuY3VzdG9tLXZpc3VhbC1mb3JtJyk7XG5cbiAgICAgICAgICAkY3VzdG9tXG4gICAgICAgICAgICAuZmluZCgnLnZpc3VhbC1wcmV2aWV3LWN1c3RvbScpXG4gICAgICAgICAgICAuYXR0cignc3JjJywgc2F2ZWRFdi52aXN1YWwubWV0YS5pbWFnZURhdGEpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICRjdXN0b21cbiAgICAgICAgICAgIC5maW5kKCcuaW1hZ2UtbWV0YV9fdGl0bGUnKS52YWwoc2F2ZWRFdi52aXN1YWwubWV0YS5pbWFnZVRpdGxlKTtcbiAgICAgICAgICAkY3VzdG9tXG4gICAgICAgICAgICAuZmluZCgnLmltYWdlLW1ldGFfX2lkJykudmFsKHNhdmVkRXYudmlzdWFsLm1ldGEuaW1hZ2VEZXNjcmlwdGlvbik7XG4gICAgICAgICAgJGN1c3RvbVxuICAgICAgICAgICAgLmZpbmQoJy5pbWFnZS1tZXRhX19jcmVhdG9yJykudmFsKHNhdmVkRXYudmlzdWFsLm1ldGEuY3JlYXRvcik7XG4gICAgICAgICAgJGN1c3RvbVxuICAgICAgICAgICAgLmZpbmQoJy5pbWFnZS1tZXRhX19saW5rJykudmFsKHNhdmVkRXYudmlzdWFsLm1ldGEuY3JlYXRvckxpbmspO1xuICAgICAgICAgICRjdXN0b20ucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAgICRjdXN0b20uZmluZCgnLmN1c3RvbS12aXN1YWxfX2ltYWdlLW1ldGEnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRIYW5kbGVycyhnYW1lRXZlbnRzKTtcbn07XG5cbmNvbnN0IGJpbmRTYXZlQW5kUHVibGlzaCA9IChnYW1lRXZlbnRzKSA9PiB7XG4gIGNvbnN0ICRoaWdobGlnaHRzU2VsZWN0Rm9ybSA9ICQoJyNnYW1lLWV2ZW50c19fZm9ybScpO1xuXG4gICRoaWdobGlnaHRzU2VsZWN0Rm9ybS5vZmYoJ3N1Ym1pdCcpLm9uKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2VuZXJhdGVIaWdobGlnaHRzKG9uU2F2ZUFuZFB1Ymxpc2gsIGdhbWVFdmVudHMpO1xuICB9KTtcblxuICAkKCcuc2F2ZS1zdG9yeScpLm9mZignY2xpY2snKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgZ2VuZXJhdGVIaWdobGlnaHRzKG9uU2F2ZUFuZFB1Ymxpc2gsIGdhbWVFdmVudHMpO1xuICB9KTtcbn07XG5cbmNvbnN0IGJpbmRQcmV2aWV3ID0gKGdhbWVFdmVudHMpID0+IHtcbiAgY29uc3QgJGhpZ2hsaWdodHNTZWxlY3RGb3JtID0gJCgnI2dhbWUtZXZlbnRzX19mb3JtJyk7XG5cbiAgJCgnLnByZXZpZXctc3RvcnknKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgZ2VuZXJhdGVIaWdobGlnaHRzKG9uU3RhcnRQcmV2aWV3LCBnYW1lRXZlbnRzKTtcbiAgfSk7XG5cbiAgJGhpZ2hsaWdodHNTZWxlY3RGb3JtLmZpbmQoJy5nYW1lLWV2ZW50LXByZXZpZXdfX2xpbmsnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0ICRsaW5rID0gJChldnQudGFyZ2V0KTtcblxuICAgIGlmICgkbGluay5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gJGxpbmtcbiAgICAgIC5jbG9zZXN0KCcuZ2FtZS1ldmVudCcpLmZpbmQoJy5nYW1lLWV2ZW50LWNoZWNrX19pbnB1dCcpLmF0dHIoJ2lkJyk7XG5cbiAgICBnZW5lcmF0ZUhpZ2hsaWdodHMob25TdGFydFByZXZpZXcsIGdhbWVFdmVudHMsIGlkKTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVQcmV2aWV3QWxsID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9ICQoJy5nYW1lLWV2ZW50LWNoZWNrX19pbnB1dDpjaGVja2VkJykubGVuZ3RoO1xuXG4gICQoJy5wcmV2aWV3LXN0b3J5JylcbiAgICAucHJvcCgnZGlzYWJsZWQnLCAhc3RhdGUpO1xuICAkKCcuc2F2ZS1zdG9yeScpXG4gICAgLnByb3AoJ2Rpc2FibGVkJywgIXN0YXRlKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVByZXZpZXcgPSAoJGNoZWNrYm94KSA9PiB7XG4gIGxldCBzdGF0ZSA9ICRjaGVja2JveC5pcygnOmNoZWNrZWQnKTtcblxuICAkY2hlY2tib3hcbiAgICAuY2xvc2VzdCgnLmdhbWUtZXZlbnQnKVxuICAgIC5maW5kKCcuZ2FtZS1ldmVudC1wcmV2aWV3X19saW5rJylcbiAgICAudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgIXN0YXRlKTtcbn07XG5cbmNvbnN0IGJpbmRDaGVja2JveGVzID0gKCkgPT4ge1xuICBjb25zdCAkY2hlY2tBbGwgPSAkKCcjY2hlY2stYWxsJyk7XG5cbiAgJCgnI2NoZWNrLWFsbCcpLm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICBsZXQgc3RhdGUgPSAkY2hlY2tBbGwuaXMoJzpjaGVja2VkJyk7XG5cbiAgICAkKCcuZ2FtZS1ldmVudC1jaGVja19faW5wdXQnKS5lYWNoKChfLCBjaCkgPT4ge1xuICAgICAgY29uc3QgJGNoID0gJChjaCk7XG5cbiAgICAgICRjaC5wcm9wKCdjaGVja2VkJywgc3RhdGUpO1xuICAgICAgdG9nZ2xlUHJldmlldygkY2gpO1xuICAgIH0pO1xuXG4gICAgdG9nZ2xlUHJldmlld0FsbCgpO1xuICB9KTtcblxuICAkKCcjZ2FtZS1ldmVudHNfX2Zvcm0taXRlbXMnKS5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLCAnLmdhbWUtZXZlbnQtY2hlY2tfX2lucHV0JywgKGV2dCkgPT4ge1xuICAgIGNvbnN0ICRjaCA9ICQoZXZ0LnRhcmdldCk7XG5cbiAgICB0b2dnbGVQcmV2aWV3KCRjaCk7XG4gICAgdG9nZ2xlUHJldmlld0FsbCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGJpbmRKdW1wQnV0dG9ucyA9ICgpID0+IHtcbiAgJCgnLnNjcm9sbC10bycpLm9mZignY2xpY2snKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoZXZ0LnRhcmdldCk7XG4gICAgY29uc3QgJGl0ZW1zQ29udGFpbmVyID0gJCgnI2dhbWUtZXZlbnRzX19mb3JtLWl0ZW1zJylcbiAgICAvL2NvbnN0IGNvbnRhaW5lck9mZlRvcCA9ICRpdGVtc0NvbnRhaW5lci5vZmZzZXQoKS50b3A7XG4gICAgY29uc3QgJGl0ZW1zID0gJGl0ZW1zQ29udGFpbmVyLmNoaWxkcmVuKCk7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gJCgnLmdhbWUtZXZlbnRzX19oZWFkZXInKS5vdXRlckhlaWdodCgpO1xuXG4gICAgbGV0IGxvb2t1cCA9ICcuaW50ZXJlc3RpbmcnO1xuXG4gICAgaWYgKCRidXR0b24uaGFzQ2xhc3MoJ3N0cmlrZW91dCcpKSB7XG4gICAgICBsb29rdXAgKz0gJy5zdHJpa2VvdXQnO1xuICAgIH0gZWxzZSBpZiAoJGJ1dHRvbi5oYXNDbGFzcygnaGl0JykpIHtcbiAgICAgIGxvb2t1cCArPSAnLmhpdCc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdzdGVhbCcpKSB7XG4gICAgICBsb29rdXAgKz0gJy5zdGVhbCc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdzcGVjaWFsJykpIHtcbiAgICAgIGxvb2t1cCArPSAnLnNwZWNpYWwnO1xuICAgIH0gZWxzZSBpZiAoJGJ1dHRvbi5oYXNDbGFzcygnbWF4JykpIHtcbiAgICAgIGxvb2t1cCArPSAnLm1heCc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdzY29yZScpKSB7XG4gICAgICBsb29rdXAgKz0gJy5zY29yZSc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdpbm5pbmcnKSkge1xuICAgICAgbG9va3VwICs9ICcuaW5uaW5nJztcbiAgICB9XG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBnYW1lIGV2ZW50IGluIHZpZXdcbiAgICBsZXQgJGZpcnN0SW5WaWV3ID0gJGl0ZW1zLmZpbHRlcigoXywgZWwpID0+IHtcbiAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgcmV0dXJuICgkZWwub2Zmc2V0KCkudG9wID4gd2luZG93LnBhZ2VZT2Zmc2V0ICsgaGVhZGVySGVpZ2h0KSAmJiAoJGVsLm9mZnNldCgpLnRvcCA8IHdpbmRvdy5wYWdlWU9mZnNldCArICRlbC5vdXRlckhlaWdodCgpICsgaGVhZGVySGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIC8vIGlmIHRoZSBwYWdlIGhhc24ndCBiZWVuIHNjcm9sbGVkIGJleW9uZCB0aGUgc3RhcnQgb2YgdGhlIGdhbWUgZXZlbnRzLFxuICAgIC8vIHRoZSBmaXJzdCBpbiB2aWV3IHdpbGwgYmUgdGhlIGZpcnN0IGZyb20gdGhlIHRvcFxuICAgIGlmICghJGZpcnN0SW5WaWV3Lmxlbmd0aCkge1xuICAgICAgJGZpcnN0SW5WaWV3ID0gJGl0ZW1zLmZpcnN0KCk7XG4gICAgfVxuXG4gICAgLy8gbG9vayBmb3IgbmV4dCBzaWJsaW5nIHRoYXQgbWF0Y2hlcyB0aGUgdHlwZSB3ZSdyZSBsb29raW5nIGZvclxuICAgIGxldCAkbG9va3VwID0gJGZpcnN0SW5WaWV3Lm5leHRBbGwobG9va3VwKS5maXJzdCgpO1xuXG4gICAgLy8gaWYgdGhlcmUncyBubyBtYXRjaCBsb29raW5nIGZvcndhcmQsIGxvb3AgZnJvbSB0aGUgdG9wXG4gICAgaWYgKCEkbG9va3VwLmxlbmd0aCkge1xuICAgICAgJGxvb2t1cCA9ICQobG9va3VwKS5maXJzdCgpO1xuICAgIH1cblxuXG4gICAgJCh3aW5kb3cpXG4gICAgICAuc2Nyb2xsVG9wKCRsb29rdXAub2Zmc2V0KCkudG9wIC0gaGVhZGVySGVpZ2h0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBiaW5kU3RpY2t5SGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCAkc3RpY2t5SGVhZGVyID0gJCgnLmdhbWUtZXZlbnRzX19oZWFkZXInKTtcbiAgY29uc3Qgc3RpY2t5T2Zmc2V0ID0gJHN0aWNreUhlYWRlci5vZmZzZXQoKS50b3A7XG5cbiAgJCh3aW5kb3cpLm9mZignc2Nyb2xsJykub24oJ3Njcm9sbCcsICgpID0+IHtcbiAgICAkc3RpY2t5SGVhZGVyLnRvZ2dsZUNsYXNzKCdzdGlja3knLCB3aW5kb3cucGFnZVlPZmZzZXQgPiBzdGlja3lPZmZzZXQpO1xuICB9KTtcbn07XG5cbmNvbnN0IGJpbmRWaXN1YWxzID0gKCkgPT4ge1xuICAkKCcuY3VzdG9tLXZpc3VhbC1mb3JtJykub2ZmKCdzdWJtaXQnKS5vbignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gICQoJy52aXN1YWwtc2VsZWN0Jykub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJywgKGV2dCkgPT4ge1xuICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2dC50YXJnZXQpO1xuICAgIGNvbnN0IHZhbCA9ICRzZWxlY3QudmFsKCk7XG4gICAgY29uc3QgJHZpc3VhbCA9ICRzZWxlY3QuY2xvc2VzdCgnLmdhbWUtZXZlbnQtdmlzdWFsJyk7XG5cbiAgICAkdmlzdWFsLmZpbmQoJy52aXN1YWwtcHJldmlldycpLmFkZENsYXNzKCdkLW5vbmUnKTtcblxuICAgIGlmICh2YWwgPT09ICdjdXN0b20nKSB7XG4gICAgICBjb25zdCAkcHJldmlldyA9ICR2aXN1YWwuZmluZCgnLnZpc3VhbC1wcmV2aWV3LWN1c3RvbScpO1xuXG4gICAgICAkdmlzdWFsLmZpbmQoJy5jdXN0b20tdmlzdWFsLWZvcm0nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgICAgIGlmICgkcHJldmlldy5hdHRyKCdzcmMnKSAhPT0gJyMnKSB7XG4gICAgICAgICRwcmV2aWV3LnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJHZpc3VhbC5maW5kKCcuY3VzdG9tLXZpc3VhbC1mb3JtJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLmN1c3RvbS12aXN1YWxfX2lucHV0Jykub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJywgKGV2dCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoZXZ0LnRhcmdldCk7XG4gICAgY29uc3QgJGZvcm0gPSAkaW5wdXQucGFyZW50KCk7XG4gICAgY29uc3QgJHByZXZpZXcgPSAkaW5wdXQuY2xvc2VzdCgnLmdhbWUtZXZlbnQtdmlzdWFsJykuZmluZCgnLnZpc3VhbC1wcmV2aWV3LWN1c3RvbScpO1xuXG4gICAgaWYgKHZhbGlkYXRlSW1hZ2UoZmlsZSwgJGZvcm0pKSB7XG4gICAgICBoYW5kbGVVcGxvYWRlZEltYWdlKGZpbGUsICRwcmV2aWV3KTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdmFsaWRhdGVJbWFnZSA9IChmaWxlLCAkZm9ybSkgPT4ge1xuICBjb25zdCAkZXJyb3IgPSAkZm9ybS5maW5kKCcuZXJyb3ItbXNnJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gIGlmIChmaWxlLnR5cGUgIT09ICdpbWFnZS9wbmcnICYmIGZpbGUudHlwZSAhPT0gJ2ltYWdlL2pwZWcnKSB7XG4gICAgJGVycm9yXG4gICAgICAudGV4dCgnU29ycnksIG9ubHkgLnBuZyBhbmQgLmpwKGUpZyBpbWFnZXMgYXJlIHN1cHBvcnRlZCcpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGZpbGUuc2l6ZSA+IDEwMDAwMDApIHtcbiAgICAkZXJyb3JcbiAgICAgIC50ZXh0KCdTb3JyeSwgdGhlIGltYWdlIGhhcyB0byBiZSBzbWFsbGVyIHRoYW4gMU1CJylcbiAgICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGhhbmRsZVVwbG9hZGVkSW1hZ2UgPSAoZmlsZSwgJHByZXZpZXcpID0+IHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldnQpID0+IHtcbiAgICAkcHJldmlldy5hdHRyKCdzcmMnLCByZWFkZXIucmVzdWx0KS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgJHByZXZpZXcubmV4dCgnLmN1c3RvbS12aXN1YWxfX2ltYWdlLW1ldGEnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH0pO1xuICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbn07XG5cbmNvbnN0IGJpbmRIYW5kbGVycyA9IChnYW1lRXZlbnRzKSA9PiB7XG4gIGJpbmRTYXZlQW5kUHVibGlzaChnYW1lRXZlbnRzKTtcbiAgYmluZFByZXZpZXcoZ2FtZUV2ZW50cyk7XG4gIGJpbmRDaGVja2JveGVzKCk7XG4gIGJpbmRKdW1wQnV0dG9ucygpO1xuICBiaW5kU3RpY2t5SGVhZGVyKCk7XG4gIGJpbmRWaXN1YWxzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVuZGVyLFxuICBnZW5lcmF0ZUhpZ2hsaWdodHMsXG59O1xuXG4iLCJjb25zdCBtbHVzdGFyZCA9IHJlcXVpcmUoJ21sdXN0YXJkJyk7XG5cbmNvbnN0IGdldFJhbmRvbUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVzID0gW1xuICAgIC8vIGludGVybmV0IHNlcmllcyBjaGFtcGlvbnNoaXAgZ2FtZXMsIHN0YXJ0aW5nIHNlYXNvbiAyXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzk3ZDg4YjllLTQwNmQtNGYzMS1hMThmLTJhM2I5MDNlZGMwMycsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lL2IzOGUwOTE3LTQzZGEtNDcwYy1hN2JiLTU3MTIzNjhhMjQ5MicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzYyOGEyZGRiLWY2MDgtNDExYi04ZDJlLTI3NjhjZDM2ZDU4YicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzUyZjYyNzRlLWUwZGMtNGMyMy04N2U4LTY4NmY2ZDJiMmJiZicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzEwNTM4ODQwLTFmNzItNGE5MC05OGU1LTcyNGE5ZGM1ZDA2MScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzlkODU4OTdlLWU2ODktNGVlYi1iMmFlLWI2OTY3OWEzZWJjNycsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lL2VlMzVhODY4LWIwMDQtNDQ5Zi1hOTljLTZhNDBjYTU0YjM4MicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzA2NTY2ZjhkLTNkMTQtNDk1Ni1iMDU0LTM2ZGM5ODFmZDU4OScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzcwNGRkZjJmLTNmZTItNDhiMy1iNjc0LWI5NDc2NWY3MGQwMScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzQ3YmNhYzQyLWY2NTEtNGZjOS05ZjkzLTU1NjdhN2IxMGRhZicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzBmMTlkNzhkLWMyN2QtNDE0Ni04NjNkLWI1NWU2ZGFlMTY3OScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzE1MDZiODhmLTFmZWEtNGJhMS05MjU2LTFlYmIwMzBjZGNhZScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lL2IyY2FmZDIwLWE3OTktNDhmNi1hYmQ3LWM5OWJkNzlhNmJkMScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzJiYzZlODZlLThkMjUtNGUzNy05MDI2LTc4MGQ4YjY5NjljNScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzQ2MjQ4MWY0LTdmOTctNDQxYy05ZmM5LWMzZGMzYzU4NDRhNCcsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzExYThhN2QzLTQ2MGItNGM5OS1hOThhLWIwYmQxZjU3NzA3MycsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzgyM2RmY2I2LWRkZGItNDNmNC05MGZmLWVhYzA1ODI3YTgyZScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lL2Y3YWQ3ODI2LWNhNmUtNDljMi04MThlLTE5MDQwOGIwNDZmZScsXG5cbiAgICAvLyBvdGhlciBnYW1lc1xuICAgIC8vIHMzZDEwMCAocml2IGxhbmRyeSlcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvYWExYjdmZGUtZjA3Ny00ZTRiLTgyNWYtMGQxNTM4ZDAyODIyJyxcbiAgXTtcblxuICByZXR1cm4gZ2FtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGdhbWVzLmxlbmd0aCAtIDEpKV07XG59O1xuXG5jb25zdCBnZXRHYW1lRXZlbnRzID0gKGdhbWVJZCkgPT4ge1xuICBsZXQgZ2FtZXNVUkwgPSBgaHR0cHM6Ly9hcGkuc2lici5kZXYvY2hyb25pY2xlci92MS9nYW1lcy91cGRhdGVzP2dhbWU9JHtnYW1lSWR9YDtcblxuICBjb25zdCBnZXRQYWdpbmF0ZWRFdmVudHMgPSAoZ2FtZUV2ZW50cywgZ2FtZXNVUkwsIG5leHRQYWdlLCBjYikgPT4ge1xuICAgIGxldCBmZXRjaFVSTCA9IGdhbWVzVVJMO1xuICAgIGlmIChuZXh0UGFnZSkge1xuICAgICAgZmV0Y2hVUkwgKz0gYCZwYWdlPSR7bmV4dFBhZ2V9YDtcbiAgICB9XG5cbiAgICBmZXRjaChmZXRjaFVSTClcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZm9yIChsZXQgZ2FtZUV2IG9mIGRhdGEuZGF0YSkge1xuICAgICAgICAgIGdhbWVFdmVudHNbZ2FtZUV2Lmhhc2hdID0ge1xuICAgICAgICAgICAgZXY6IGdhbWVFdixcbiAgICAgICAgICAgIG1sdXN0YXJkOiBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KGdhbWVFdi5kYXRhKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEubmV4dFBhZ2UpIHtcbiAgICAgICAgICBnZXRQYWdpbmF0ZWRFdmVudHMoZ2FtZUV2ZW50cywgZ2FtZXNVUkwsIGRhdGEubmV4dFBhZ2UsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkb25lIGxvYWRpbmcgYWxsIGdhbWUgZXZlbnRzXG4gICAgICAgICAgY2IoZ2FtZUV2ZW50cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAkKCcjZ2FtZS1sb2FkLWZvcm0gLmVycm9yLW1zZycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNob3dMb2FkaW5nKCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBnZXRQYWdpbmF0ZWRFdmVudHMoe30gLCBnYW1lc1VSTCwgbnVsbCwgKGdhbWVFdmVudHMpID0+IHtcbiAgICAgIGhpZGVMb2FkaW5nKCk7XG4gICAgICByZXNvbHZlKGdhbWVFdmVudHMpO1xuICAgIH0pO1xuICB9KTtcblxufTtcblxuY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtbG9hZC1mb3JtJyk7XG5cbiAgJGdhbWVFdkZvcm0uZmluZCgnLmVycm9yLW1zZycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnYnV0dG9uJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkZ2FtZUV2Rm9ybS5maW5kKCcubG9hZGluZycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn07XG5cbmNvbnN0IGhpZGVMb2FkaW5nID0gKCkgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWxvYWQtZm9ybScpO1xuXG4gICRnYW1lRXZGb3JtLmZpbmQoJ2J1dHRvbicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnLmxvYWRpbmcnKS5hZGRDbGFzcygnZC1ub25lJyk7XG59O1xuXG5jb25zdCBsb2FkV2l0aE1sdXN0YXJkID0gKG9uTG9hZCwgZ2FtZUlkKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtbG9hZC1mb3JtJyk7XG4gIGNvbnN0ICRnYW1lSW5wdXQgPSAkKCcjZ2FtZS1sb2FkLWZvcm1fX2dhbWUtaWQnKTtcblxuICAvLyBmb2N1cyBvbiBnYW1lIGlucHV0XG4gICRnYW1lSW5wdXQuZm9jdXMoKTtcblxuICBpZiAoZ2FtZUlkKSB7XG4gICAgJGdhbWVJbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicsIGdhbWVJZCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcGljayBhIHJhbmRvbSBpbnRlcmVzdGluZyBnYW1lIGFzIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGlucHV0XG4gICAgJGdhbWVJbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicsIGdldFJhbmRvbUdhbWUoKSk7XG4gIH1cblxuICBjb25zdCBnZXRFdmVudHMgPSAoZ2FtZUlkKSA9PiB7XG4gICAgZ2V0R2FtZUV2ZW50cyhnYW1lSWQpXG4gICAgICAudGhlbigoZ2FtZUV2ZW50cykgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKCdHYW1lIGxvYWRlZCB3aXRoIGV2ZW50czonLCBnYW1lRXZlbnRzKTtcbiAgICAgICAgb25Mb2FkKGdhbWVFdmVudHMpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaWYgKGdhbWVJZCkge1xuICAgIGdldEV2ZW50cyhnYW1lSWQpO1xuICB9XG5cbiAgJGdhbWVFdkZvcm0ub24oJ3N1Ym1pdCcsIChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoJCgnLmdhbWUtZXZlbnRzX19jb250YWluZXInKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgaWYgKCF3aW5kb3cuY29uZmlybSgnTG9hZGluZyBhIG5ldyBnYW1lIHdpbGwgb3ZlcndyaXRlIGFueSB1bnNhdmVkIGNoYW5nZXMgeW91IG1heSBoYXZlIG1hZGUgdG8gdGhlIHByZXZpb3VzbHkgbG9hZGVkIGdhbWUuJykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoJycsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoJy5nYW1lLWV2ZW50c19fY29udGFpbmVyJylcbiAgICAgIC5hZGRDbGFzcygnZC1ub25lJylcbiAgICAgIC5maW5kKCcuc3RvcnktdXJsJylcbiAgICAgIC5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgJCgnLmdhbWUtZXZlbnRzX19pbmZvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgbGV0IGdhbWVWYWwgPSAkZ2FtZUlucHV0LnZhbCgpO1xuXG4gICAgaWYgKCFnYW1lVmFsKSB7XG4gICAgICBnYW1lVmFsID0gJGdhbWVJbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgIH1cblxuICAgIGdhbWVJZCA9IGdhbWVWYWwuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICBnZXRFdmVudHMoZ2FtZUlkKTtcblxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2FkV2l0aE1sdXN0YXJkLFxufTtcblxuIiwiY29uc3QgZ3JhbmRTbGFsYW1pID0gcmVxdWlyZSgnZ3JhbmQtc2xhbGFtaScpO1xuXG5jbGFzcyBIaWdobGlnaHQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHNldHRpbmdzID0gc2V0dGluZ3MgfHwge307XG5cbiAgICB0aGlzLmlkID0gc2V0dGluZ3MuaWQ7XG4gICAgdGhpcy5nYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gICAgdGhpcy5tbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkO1xuICAgIHRoaXMudmlzdWFsID0gc2V0dGluZ3MudmlzdWFsO1xuICAgIHRoaXMudmlzdWFsTWV0YSA9IHNldHRpbmdzLnZpc3VhbE1ldGE7XG4gICAgdGhpcy5jb21tZW50YXJ5ID0gc2V0dGluZ3MuY29tbWVudGFyeSB8fCB0aGlzLmdlbmVyYXRlQ29tbWVudGFyeSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21tZW50YXJ5KCkge1xuICAgIC8vIGZvciBlYXJsdmVyc2lvbjogc2tpcCBncmFuZCBzbGFsYW1pLCBqdXN0IHJldHVybiBvcmlnaW5hbCBsYXN0VXBkYXRlICtcbiAgICAvLyBzY29yZVVwZGF0ZSBpZiBwcmVzZW50XG5cbiAgICBsZXQgcmV0ID0gJyc7XG5cbiAgICBpZiAodGhpcy5nYW1lRXZlbnQuZGF0YS5sYXN0VXBkYXRlKSB7XG4gICAgICByZXQgKz0gdGhpcy5nYW1lRXZlbnQuZGF0YS5sYXN0VXBkYXRlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdhbWVFdmVudC5kYXRhLnNjb3JlVXBkYXRlKSB7XG4gICAgICByZXQgKz0gYFxcbiR7dGhpcy5nYW1lRXZlbnQuZGF0YS5zY29yZVVwZGF0ZX1gO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG5cbiAgICAvL3JldHVybiBncmFuZFNsYWxhbWkuZ2V0Q29tbWVudCh7XG4gICAgICAvL2dhbWVFdmVudDogZ2FtZUV2ZW50LmRhdGEsXG4gICAgICAvL21sdXN0YXJkOiBtbHVzdGFyZCxcbiAgICAvL30pO1xuICB9XG5cbiAgbWFrZUpTT04oKSB7XG4gICByZXR1cm4ge1xuICAgICAgYmxhc2ViYWxsX2V2ZW50X2lkOiB0aGlzLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuY29tbWVudGFyeSxcbiAgICAgIHZpc3VhbDoge1xuICAgICAgICB0eXBlOiB0aGlzLnZpc3VhbCxcbiAgICAgICAgbWV0YTogdGhpcy52aXN1YWxNZXRhLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIaWdobGlnaHQ7XG5cbiIsImNvbnN0IGdhbWVFdmVudFNlbGVjdG9yID0gcmVxdWlyZSgnLi9nYW1lLWV2ZW50LXNlbGVjdG9yJyk7XG5jb25zdCBnYW1lTG9hZGVyID0gcmVxdWlyZSgnLi9nYW1lLWxvYWRlcicpO1xuY29uc3QgU3RvcnkgPSByZXF1aXJlKCcuL3N0b3J5Jyk7XG5jb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9oaWdobGlnaHRzLnNpYnIuZGV2L2FwaSc7XG5cbmxldCBzdG9yeTtcbmxldCBpblByZXZpZXcgPSBmYWxzZTtcblxuY29uc3Qgc3RhcnRTdG9yeSA9IChobHMsIHN0YXJ0RnJvbSkgPT4ge1xuICBzdG9yeSA9IG5ldyBTdG9yeSh7XG4gICAgaGlnaGxpZ2h0czogaGxzLFxuICAgIGlkOiBnZXRTdG9yeUlkKCksXG4gIH0pO1xuXG4gICQoJy5sb2FkaW5nLXN0b3J5JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gIHN0b3J5LnN0YXJ0KHN0YXJ0RnJvbSk7XG59O1xuXG5jb25zdCBvblN0YXJ0UHJldmlldyA9IChobHMsIHN0YXJ0RnJvbSkgPT4ge1xuXG4gICQoJyNnYW1lLWxvYWQnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJyNnYW1lLWV2ZW50cycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJCgnI2V4aXQtcHJldmlldycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICBzdGFydFN0b3J5KGhscywgc3RhcnRGcm9tKTtcbiAgaW5QcmV2aWV3ID0gdHJ1ZTtcbn07XG5cbmNvbnN0IG9uRW5kUHJldmlldyA9IChldnQpID0+IHtcbiAgaWYgKCFpblByZXZpZXcpIHsgcmV0dXJuOyB9XG5cbiAgLy8gYWxzbyBleGl0IHByZXZpZXcgb24gZXNjXG4gIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJykge1xuICAgIGlmIChldnQua2V5Q29kZSAhPT0gMjcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAkKCcjZXhpdC1wcmV2aWV3JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcjZ2FtZS1sb2FkJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcjZ2FtZS1ldmVudHMnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIHN0b3J5LnN0b3AoKTtcbiAgaW5QcmV2aWV3ID0gZmFsc2U7XG59O1xuXG5jb25zdCBzaG93U2F2aW5nID0gKCkgPT4ge1xuICAkKCcuZ2FtZS1ldmVudHNfX2hlYWRlciAubG9hZGluZycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgJCgnLnNhdmUtc3RvcnknKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJy5nYW1lLWV2ZW50c19faGVhZGVyIC5lcnJvci1tc2cnKS5hZGRDbGFzcygnZC1ub25lJyk7XG59O1xuXG5jb25zdCBoaWRlU2F2aW5nID0gKHN1Y2Nlc3MsIHN0b3J5VVJMKSA9PiB7XG4gICQoJy5nYW1lLWV2ZW50c19faGVhZGVyIC5sb2FkaW5nJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgJCgnLmdhbWUtZXZlbnRzX19oZWFkZXIgLnN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgICBpZiAoc3RvcnlVUkwpIHtcbiAgICAgIHNob3dTdG9yeUxpbmsoc3RvcnlVUkwpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJCgnLnNhdmUtc3RvcnknKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKCcuZ2FtZS1ldmVudHNfX2hlYWRlciAuc3VjY2VzcycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICB9LCAxMDAwKTtcbiAgfSBlbHNlIHtcbiAgICAkKCcuc2F2ZS1zdG9yeScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcuZ2FtZS1ldmVudHNfX2hlYWRlciAuZXJyb3ItbXNnJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG59O1xuXG5jb25zdCBzaG93U3RvcnlMaW5rID0gKHN0b3J5VVJMKSA9PiB7XG4gICQoJy5nYW1lLWV2ZW50c19faGVhZGVyIC5zdG9yeS11cmwnKVxuICAgIC5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgICAuZmluZCgnYScpXG4gICAgLmF0dHIoJ2hyZWYnLCBgJHthcGlVcmx9L3N0b3J5PyR7c3RvcnlVUkx9YClcbiAgICAudGV4dChgJHthcGlVcmx9L3N0b3J5PyR7c3RvcnlVUkx9YCk7XG59O1xuXG5jb25zdCBvblNhdmVBbmRQdWJsaXNoID0gKGhscykgPT4ge1xuICBzaG93U2F2aW5nKCk7XG5cbiAgc3RvcnkgPSBuZXcgU3Rvcnkoe1xuICAgIGhpZ2hsaWdodHM6IGhscyxcbiAgICBpZDogZ2V0U3RvcnlJZCgpLFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gc3RvcnkubWFrZUpTT04oKTtcblxuICBjb25zb2xlLmRlYnVnKCdzYXZpbmcgc3Rvcnkgd2l0aCBkYXRhOicsIGRhdGEpO1xuXG4gIGZldGNoKGAke2FwaVVybH0vc3VibWl0YCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBjb3JzOiAnbm8tY29ycycsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogZGF0YSxcbiAgfSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdTYXZlZCBzdG9yeSB3aXRoIHJlc3A6JywgZGF0YSk7XG5cbiAgICAgIGlmIChkYXRhLnVzZXJfaWQpIHtcbiAgICAgICAgc3Rvcnkuc2V0VXNlcihkYXRhLnVzZXJfaWQsIGRhdGEudXNlcl90b2tlbik7XG4gICAgICB9XG5cbiAgICAgIGhpZGVTYXZpbmcodHJ1ZSwgZGF0YS5zdG9yeV9pZCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgaGlkZVNhdmluZyhmYWxzZSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBnZXRTdG9yeUlkID0gKCkgPT4ge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpWzFdIHx8ICcnO1xufTtcblxuY29uc3QgZ2V0U3RvcnlEYXRhID0gKHN0b3J5SWQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgIGZldGNoKGAke2FwaVVybH0vc3Rvcnk/aWQ9JHtzdG9yeUlkfWApXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCByZXNwb25zZSBmcm9tIHNlcnZlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ0xvYWRlZCBzdG9yeSB3aXRoIGRhdGE6JywgZGF0YSk7XG4gICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBpc093blN0b3J5ID0gKHN0b3J5RGF0YSkgPT4ge1xuICByZXR1cm4gc3RvcnlEYXRhLnN0b3J5LnVzZXJfaWQgPT09IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxvYWRpbmcgPSAoc3RhdGUpID0+IHtcbiAgJCgnLmxvYWRpbmctc3RvcnknKS50b2dnbGVDbGFzcygnZC1ub25lJywgIXN0YXRlKTtcbiAgJCgnLmdhbWUtbG9hZCcpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnLCBzdGF0ZSk7XG4gICQoJy5nYW1lLWV2ZW50cycpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnLCBzdGF0ZSk7XG59O1xuXG5jb25zdCBpbml0QXBwID0gKCkgPT4ge1xuICBjb25zdCBzdG9yeUlkID0gZ2V0U3RvcnlJZCgpO1xuXG4gIC8vIGlmIHRoZXJlJ3MgYSBzdG9yeSBJRCAuLi5cbiAgaWYgKHN0b3J5SWQpIHtcblxuICAgIHRvZ2dsZUxvYWRpbmcodHJ1ZSk7XG4gICAgc2hvd1N0b3J5TGluayhzdG9yeUlkKTtcblxuICAgIC8vIC4uLiBmZXRjaCB0aGUgc3RvcnkgZGF0YVxuICAgIGdldFN0b3J5RGF0YShzdG9yeUlkKVxuICAgICAgLnRoZW4oKHN0b3J5RGF0YSkgPT4ge1xuXG4gICAgICBpZiAoaXNPd25TdG9yeShzdG9yeURhdGEpKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ0dvaW5nIGludG8gc3RvcnkgZWRpdCBtb2RlJyk7XG5cbiAgICAgICAgJCgnLmxvYWRpbmctc3RvcnknKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJyNnYW1lLWxvYWQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICQoJyNnYW1lLWV2ZW50cycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICAgICAgICBnYW1lTG9hZGVyLmxvYWRXaXRoTWx1c3RhcmQoKGdhbWVFdmVudHMpID0+IHtcbiAgICAgICAgICBnYW1lRXZlbnRTZWxlY3Rvci5yZW5kZXIoe1xuICAgICAgICAgICAgZ2FtZUV2ZW50cyxcbiAgICAgICAgICAgIG9uU3RhcnRQcmV2aWV3LFxuICAgICAgICAgICAgb25FbmRQcmV2aWV3LFxuICAgICAgICAgICAgb25TYXZlQW5kUHVibGlzaCxcbiAgICAgICAgICAgIHNhdmVkRXZlbnRzOiBzdG9yeURhdGEuZXZlbnRzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCBzdG9yeURhdGEuc3RvcnkuZ2FtZV9pZCk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ0dvaW5nIGludG8gc3RvcnkgcHJlc2VudCBtb2RlJyk7XG5cbiAgICAgICAgLy8gbG9hZCBhbGwgdGhlIGdhbWUgZXZlbnRzIGFuZCBjcmVhdGUgaGlnaGxpZ2h0c1xuICAgICAgICBnYW1lTG9hZGVyLmxvYWRXaXRoTWx1c3RhcmQoKGdhbWVFdmVudHMpID0+IHtcbiAgICAgICAgICBnYW1lRXZlbnRTZWxlY3RvclxuICAgICAgICAgICAgLmdlbmVyYXRlSGlnaGxpZ2h0cygoaGxzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnU3RhcnRpbmcgc3RvcnknKVxuICAgICAgICAgICAgICAgIHN0YXJ0U3RvcnkoaGxzLCBudWxsKTtcbiAgICAgICAgICAgIH0sIGdhbWVFdmVudHMsIG51bGwsIHN0b3J5RGF0YS5ldmVudHMpO1xuICAgICAgICB9LCBzdG9yeURhdGEuc3RvcnkuZ2FtZV9pZCk7XG4gICAgICB9XG5cbiAgICAgIH0pO1xuXG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlTG9hZGluZyhmYWxzZSk7XG5cbiAgICBnYW1lTG9hZGVyLmxvYWRXaXRoTWx1c3RhcmQoKGdhbWVFdmVudHMpID0+IHtcbiAgICAgIGdhbWVFdmVudFNlbGVjdG9yLnJlbmRlcih7XG4gICAgICAgIGdhbWVFdmVudHMsXG4gICAgICAgIG9uU3RhcnRQcmV2aWV3LFxuICAgICAgICBvbkVuZFByZXZpZXcsXG4gICAgICAgIG9uU2F2ZUFuZFB1Ymxpc2gsXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgLy8gdG9kbzogcHV0IHRoZXNlIGVsc2V3aGVyZVxuICAkKCcjZXhpdC1wcmV2aWV3Jykub24oJ2NsaWNrLnByZXZpZXcnLCBvbkVuZFByZXZpZXcpO1xuICAkKGRvY3VtZW50KS5vbigna2V5dXAucHJldmlldycsIG9uRW5kUHJldmlldyk7XG59O1xuXG5pbml0QXBwKCk7XG5cbiIsImNvbnN0IFZpc3VhbCA9IHJlcXVpcmUoJy4vdmlzdWFsJyk7XG5jb25zdCBEaWFsb2cgPSByZXF1aXJlKCcuL2RpYWxvZycpO1xuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vbGliL3RlYW1zLWRhdGEnKTtcblxuY2xhc3MgU3Rvcnkge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHRoaXMuaGlnaGxpZ2h0cyA9IHNldHRpbmdzLmhpZ2hsaWdodHMgfHwgW107XG4gICAgdGhpcy5pZCA9IHNldHRpbmdzLmlkO1xuICAgIHRoaXMuY3VySGlnaGxpZ2h0ID0gMDtcbiAgICB0aGlzLnRpdGxlID0gc2V0dGluZ3MudGl0bGUgfHwgdGhpcy5nZW5lcmF0ZVRpdGxlKCk7XG4gICAgdGhpcy5kaWFsb2cgPSBuZXcgRGlhbG9nKCk7XG4gICAgdGhpcy52aXN1YWwgPSBuZXcgVmlzdWFsKCk7XG4gICAgdGhpcy5zZXRHYW1lSWQoKTtcblxuICAgIGNvbnNvbGUuZGVidWcoJ25ldyBzdG9yeSB3aXRoIGhpZ2hsaWdodHMnLCB0aGlzLmhpZ2hsaWdodHMpO1xuICB9XG5cbiAgZ2VuZXJhdGVUaXRsZSgpIHtcbiAgICAvLyBIb21lLW5pY2tuYW1lIHZzLiBBd2F5LW5pY2tuYW1lLCBTbiBEbm5uXG4gICAgY29uc3QgZ2FtZUV2ID0gdGhpcy5oaWdobGlnaHRzWzBdLmdhbWVFdmVudC5kYXRhO1xuICAgIGNvbnN0IGhvbWVOaWNrID0gZ2FtZUV2LmhvbWVUZWFtTmlja25hbWUgfHwgJyc7XG4gICAgY29uc3QgYXdheU5pY2sgPSBnYW1lRXYuYXdheVRlYW1OaWNrbmFtZSB8fCAnJztcbiAgICBjb25zdCBzZWFzb24gPSBnYW1lRXYuc2Vhc29uICsgMTtcbiAgICBjb25zdCBkYXkgPSBnYW1lRXYuZGF5ICsgMTtcblxuICAgIHJldHVybiBgJHtob21lTmlja30gdnMuICR7YXdheU5pY2t9LCBTJHtzZWFzb259IEQke2RheX1gO1xuICB9XG5cbiAgc2V0R2FtZUlkKCkge1xuICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5oaWdobGlnaHRzWzBdLmdhbWVFdmVudC5nYW1lSWQgfHwgJyc7XG4gIH1cblxuICBzdGFydChzdGFydEZyb20pIHtcbiAgICAkKCcjdmlzdWFscycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICAgIC8vIGZvY3VzIG9uIHRoZSBib2R5IHNvIGFycm93IGtleXVwcyBjYW4gYmUgcmVnaXN0ZXJlZFxuICAgICQoJ2JvZHknKS5mb2N1cygpO1xuXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IGhhbmRsZUFjdGlvbiA9IChldnQpID0+IHtcbiAgICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleXVwJykge1xuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDM3KSB7IC8vIGFycm93IGxlZnRcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAncHJldic7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZGlyZWN0aW9uID0gJ25leHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gY2xpY2tcbiAgICAgICAgaWYgKCQoZXZ0LnRhcmdldCkuYXR0cignaWQnKSA9PT0gJ2hpZ2hsaWdodHMtZGlhbG9nX19uZXh0Jykge1xuICAgICAgICAgIGRpcmVjdGlvbiA9ICduZXh0JztcbiAgICAgICAgfSBlbHNlIGlmICgkKGV2dC50YXJnZXQpLmF0dHIoJ2lkJykgPT09ICdoaWdobGlnaHRzLWRpYWxvZ19fcHJldicpIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAncHJldic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuZG9TdGVwKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwLnN0b3J5JywgaGFuZGxlQWN0aW9uKTtcbiAgICAkKCcuZGlhbG9nLWNvbnRyb2wnKS5vbignY2xpY2suc3RvcnknLCBoYW5kbGVBY3Rpb24pO1xuXG4gICAgLy8gZmluZCB0aGUgaGlnaGxpZ2h0IHRvIHN0YXJ0IGZyb21cbiAgICBpZiAoc3RhcnRGcm9tKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnRUbyhzdGFydEZyb20pO1xuICAgIH1cblxuICAgIC8vIHNob3cgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0XG4gICAgdGhpcy5zdGFydEN1cnJlbnQoKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRUbyhpZCkge1xuICAgIHdoaWxlIChpZCAhPT0gdGhpcy5jdXJyZW50SGlnaGxpZ2h0KCkuaWQpIHtcbiAgICAgIHRoaXMubW92ZVRvTmV4dEhpZ2hsaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIGRvU3RlcChkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcblxuICAgICAgaWYgKHRoaXMuZGlhbG9nLmZpbmlzaGVkKCkpIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9OZXh0SGlnaGxpZ2h0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkdmFuY2VEaWFsb2coKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7IC8vIGRpcmVjdGlvbiA9PT0gJ3ByZXYnXG4gICAgICB0aGlzLm1vdmVUb1ByZXZIaWdobGlnaHQoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlVG9OZXh0SGlnaGxpZ2h0KCkge1xuICAgIGlmICghdGhpcy5oYXNOZXh0SGlnaGxpZ2h0KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1ckhpZ2hsaWdodCsrO1xuICAgIHRoaXMuc3RhcnRDdXJyZW50KCk7XG4gIH1cblxuICBtb3ZlVG9QcmV2SGlnaGxpZ2h0KCkge1xuICAgIGlmICghdGhpcy5oYXNQcmV2SGlnaGxpZ2h0KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1ckhpZ2hsaWdodC0tO1xuICAgIHRoaXMuc3RhcnRDdXJyZW50KCk7XG4gIH1cblxuICBhZHZhbmNlRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLmFkdmFuY2UoKTtcbiAgICB0aGlzLmRpYWxvZy5zaG93Q29udHJvbCh0aGlzLmhhc1ByZXZIaWdobGlnaHQoKSwgdGhpcy5oYXNOZXh0SGlnaGxpZ2h0KCkpO1xuICB9XG5cbiAgaGFzUHJldkhpZ2hsaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJIaWdobGlnaHQgPiAwO1xuICB9XG5cbiAgaGFzTmV4dEhpZ2hsaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJIaWdobGlnaHQgPCAodGhpcy5oaWdobGlnaHRzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgY3VycmVudEhpZ2hsaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRzW3RoaXMuY3VySGlnaGxpZ2h0XTtcbiAgfVxuXG4gIHN0YXJ0Q3VycmVudCgpIHtcbiAgICAvL2NvbnN0IGN1cnJlbnQgPSB0aGlzLmhpZ2hsaWdodHNbdGhpcy5jdXJIaWdobGlnaHRdO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRIaWdobGlnaHQoKTtcblxuICAgIHRoaXMudmlzdWFsLnNob3dGb3IoY3VycmVudCk7XG4gICAgdGhpcy5kaWFsb2cuc3RhcnRIaWdobGlnaHQoY3VycmVudCk7XG4gICAgdGhpcy5kaWFsb2cuc2hvd0NvbnRyb2wodGhpcy5oYXNQcmV2SGlnaGxpZ2h0KCksIHRoaXMuaGFzTmV4dEhpZ2hsaWdodCgpKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgJCgnI3Zpc3VhbHMnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgJCgnI2hpZ2hsaWdodHMtZGlhbG9nX19jb250YWluZXInKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cC5zdG9yeScpO1xuICAgICQoJy5kaWFsb2ctY29udHJvbCcpLm9mZignY2xpY2suc3RvcnknKTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJfaWQ6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKSxcbiAgICAgIHVzZXJfdG9rZW46IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSxcbiAgICB9O1xuICB9XG5cbiAgc2V0VXNlcihpZCwgdG9rZW4pIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgaWQpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gIH1cblxuICBtYWtlSlNPTigpIHtcbiAgICBjb25zdCByZXQgPSB7XG4gICAgICBzdG9yeToge1xuICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgICAgZ2FtZV9pZDogdGhpcy5nYW1lSWQsXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIHJldC5zdG9yeS5zdG9yeV9pZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IHRoaXMuZ2V0VXNlcigpO1xuXG4gICAgaWYgKHVzZXIudXNlcl9pZCkge1xuICAgICAgcmV0LnVzZXIgPSB1c2VyO1xuICAgIH1cblxuICAgIGZvciAobGV0IGhpZ2hsaWdodCBvZiB0aGlzLmhpZ2hsaWdodHMpIHtcbiAgICAgIHJldC5ldmVudHMucHVzaChoaWdobGlnaHQubWFrZUpTT04oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJldCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdG9yeTtcblxuIiwiLy8gYXBhdGVkIGZyb21cbi8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udHJvbGxpbmctY3NzLWFuaW1hdGlvbnMtdHJhbnNpdGlvbnMtamF2YXNjcmlwdC9cbmNvbnN0IHByZWZpeGVzID0gWyd3ZWJraXQnLCAnbW96JywgJ01TJywgJ28nLCAnJ107XG5cbmNvbnN0IHByZWZpeGVkT24gPSAoJGVsLCB0eXBlLCBjYikgPT4ge1xuICBmb3IgKGxldCBwcmVmaXggb2YgcHJlZml4ZXMpIHtcbiAgICBpZiAoIXByZWZpeCkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAkZWwub24oYCR7cHJlZml4fSR7dHlwZX1gLCBjYik7XG4gIH1cbn07XG5cbmNvbnN0IGdldEVtb2ppID0gKHRlYW0sIGdhbWVFdikgPT4ge1xuICBsZXQgZW1vamkgPSAnJztcblxuICBpZiAodGVhbSA9PT0gJ2hvbWUnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmhvbWVUZWFtRW1vamkgPyBTdHJpbmcuZnJvbUNvZGVQb2ludChnYW1lRXYuaG9tZVRlYW1FbW9qaSkgOiAnJztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmhvbWVUZWFtRW1vamk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5hd2F5VGVhbUVtb2ppID8gU3RyaW5nLmZyb21Db2RlUG9pbnQoZ2FtZUV2LmF3YXlUZWFtRW1vamkpIDogJyc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5hd2F5VGVhbUVtb2ppO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbW9qaTtcbn07XG5cbmNvbnN0IGdldFBsYXllck5hbWVXaXRoSW5pdGlhbCA9IChuYW1lKSA9PiB7XG4gIGxldCByZXQgPSAnJztcblxuICByZXQgKz0gbmFtZVswXSArICcuICc7XG4gIHJldCArPSBuYW1lLnNwbGl0KCcgJylbMV07XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmNvbnN0IGdldElubmluZ1RleHQgPSAoaW5uaW5nKSA9PiB7XG4gIGxldCByZXQgPSBgJHtpbm5pbmd9YDtcblxuICBzd2l0Y2ggKGlubmluZykge1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0ICs9ICdzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICByZXQgKz0gJ25kJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldCArPSAncmQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldCArPSAndGgnO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuY29uc3QgbWFrZUJhc2VEaWFtb25kID0gKG9jYykgPT4ge1xuICBjb25zdCAkZGlhbW9uZCA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdkaWFtb25kJyk7XG5cbiAgaWYgKG9jYykge1xuICAgICRkaWFtb25kLmFkZENsYXNzKCdmaWxsZWQnKTtcbiAgfVxuXG4gIHJldHVybiAkZGlhbW9uZDtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWZpeGVkT24sXG4gIGdldEVtb2ppLFxuICBnZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwgLFxuICBnZXRJbm5pbmdUZXh0LFxuICBtYWtlQmFzZURpYW1vbmQsXG59O1xuXG4iLCJjb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi9saWIvdGVhbXMtZGF0YScpO1xuY29uc3Qgd2VhdGhlciA9IHJlcXVpcmUoJy4uL2xpYi93ZWF0aGVyJyk7XG5cbmNvbnN0IERJQU1PTkRfQ09MT1VSUyA9IHtcbiAgbW91bmQ6ICdmZmNmNTYnLFxuICBtb3VuZE91dGxpbmU6ICcwMDMwNDknLFxuICBiYXNlczogJ2ZmOTc3MCcsXG4gIGJhc2VzT3V0bGluZTogJzAwMzA0OScsXG4gIGdyYXNzOiAnMmI5MzQ4JyxcbiAgZ3Jhc3NPdXRsaW5lOiAnMmI5MzQ4JyxcbiAgZGlydDogJ2ZmY2Y1NicsXG4gIGRpcnRPdXRsaW5lOiAnZmZmJyxcbiAgZm91bFpvbmU6ICdlZGVhZDAnLFxuICBmb3VsWm9uZU91dGxpbmU6ICdlZGVhZDAnLFxufTtcblxuY2xhc3MgVmlzdWFsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lSUQgPSAnJztcbiAgICB0aGlzLmhvbWVUZWFtID0gJyc7XG4gICAgdGhpcy5hd2F5VGVhbSA9ICcnO1xuXG4gICAgdGhpcy5pbml0RGlhbW9uZCgpO1xuICAgIHRoaXMuaW5pdE1hdGNodXAoKTtcbiAgfVxuXG4gIGluaXREaWFtb25kKCkge1xuICAgIGNvbnN0ICRkaWFtb25kID0gJCgnI2RpYW1vbmQnKTtcbiAgICB0aGlzLmRpYW1vbmRMb2NhdGlvbnMgPSB7XG4gICAgICAkbW91bmQ6ICRkaWFtb25kLmZpbmQoJy5tb3VuZCcpLFxuICAgICAgJGJhdHRpbmc6ICRkaWFtb25kLmZpbmQoJy5iYXR0aW5nJyksXG4gICAgICAkZmlyc3Q6ICRkaWFtb25kLmZpbmQoJy5maXJzdCcpLFxuICAgICAgJHNlY29uZDogJGRpYW1vbmQuZmluZCgnLnNlY29uZCcpLFxuICAgICAgJHRoaXJkOiAkZGlhbW9uZC5maW5kKCcudGhpcmQnKSxcbiAgICB9O1xuXG4gICAgdGhpcy5CQVNFUyA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJ107IC8vIHRvZG86ICdmb3VydGgnLCAnc2VjcmV0Jz9cblxuICAgIHRoaXMuZGlhbW9uZFJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICBpbml0TWF0Y2h1cCgpIHtcbiAgICB0aGlzLm1hdGNodXBSZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgc2V0R2FtZURhdGEoaGlnaGxpZ2h0KSB7XG4gICAgdGhpcy5nYW1lSUQgPSBoaWdobGlnaHQuZ2FtZUV2ZW50LmdhbWVJZDtcbiAgICB0aGlzLmhvbWVUZWFtID0gaGlnaGxpZ2h0LmdhbWVFdmVudC5kYXRhLmhvbWVUZWFtO1xuICAgIHRoaXMuYXdheVRlYW0gPSBoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGEuYXdheVRlYW07XG5cbiAgICAvLyBuZXcgZ2FtZSBkYXRhLCByZXNldCBkaWFtb25kIGFuZCBtYXRjaHVwXG4gICAgdGhpcy5kaWFtb25kUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLm1hdGNodXBSZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgY3VzdG9taXplRGlhbW9uZChoaWdobGlnaHQpIHtcbiAgICAvLyBzZXQgdGhlIGRpYW1vbmQgY29sb3VycyBhbmQgYWRkIHRoZSBkaWFtb25kIGNzc1xuXG4gICAgY29uc3QgaG9tZVRlYW1EYXRhID0gdGVhbXNEYXRhW3RoaXMuaG9tZVRlYW1dO1xuICAgIGNvbnN0ICRkaWFtb25kID0gJCgnI2RpYW1vbmQtc3ZnJyk7XG4gICAgY29uc3QgJGdyYXNzID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19ncmFzcycpO1xuICAgIGNvbnN0ICRkaXJ0ID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19kaXJ0Jyk7XG4gICAgY29uc3QgJGZvdWxab25lID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19mb3VsLXpvbmUnKTtcbiAgICBjb25zdCAkbW91bmQgPSAkZGlhbW9uZC5maW5kKCcuZGlhbW9uZC1zdmdfX21vdW5kJyk7XG4gICAgY29uc3QgJGJhc2VzID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19iYXNlJyk7XG4gICAgY29uc3QgJGxvZ28gPSAkKCcuZGlhbW9uZC1sb2dvJyk7XG5cbiAgICAvLyBjb2xvdXIgdGhlIG1vdW5kXG4gICAgLy8gdHJpZXMgbW91bmQgY29sb3VyLCBvciBzZXRzIG9mZmljaWFsIGFzIGRlZmF1bHRcbiAgICAkbW91bmRcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLm1vdW5kIHx8IGhvbWVUZWFtRGF0YS5jb2xvdXJzLm9mZmljaWFsfWApXG4gICAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLm1vdW5kT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMubW91bmRPdXRsaW5lfWApO1xuXG4gICAgLy8gY29sb3VyIHRoZSBiYXNlc1xuICAgIC8vIHRyaWVzIGJhc2VzIGNvbG91ciwgb3Igc2V0cyBvZmZpY2lhbCBhcyBkZWZhdWx0XG4gICAgJGJhc2VzXG4gICAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbURhdGEuY29sb3Vycy5iYXNlcyB8fCBob21lVGVhbURhdGEuY29sb3Vycy5vZmZpY2lhbH1gKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbURhdGEuY29sb3Vycy5iYXNlc091dGxpbmUgfHwgRElBTU9ORF9DT0xPVVJTLmJhc2VzT3V0bGluZX1gKTtcblxuICAgIC8vIGNvbG91ciB0aGUgZ3Jhc3NcbiAgICAkZ3Jhc3MuZmlyc3QoKVxuICAgICAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbURhdGEuY29sb3Vycy5ncmFzcyB8fCBESUFNT05EX0NPTE9VUlMuZ3Jhc3N9YClcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbURhdGEuY29sb3Vycy5ncmFzc091dGxpbmUgfHwgRElBTU9ORF9DT0xPVVJTLmdyYXNzT3V0bGluZX1gKTtcbiAgICAgICRncmFzcy5sYXN0KClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW1EYXRhLmNvbG91cnMuZ3Jhc3MgfHwgRElBTU9ORF9DT0xPVVJTLmdyYXNzfWApXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW1EYXRhLmNvbG91cnMuZGlydE91dGxpbmUgfHwgRElBTU9ORF9DT0xPVVJTLmdyYXNzT3V0bGluZX1gKTtcblxuICAgIC8vIGNvbG91ciB0aGUgZGlydFxuICAgICRkaXJ0XG4gICAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbURhdGEuY29sb3Vycy5kaXJ0IHx8IERJQU1PTkRfQ09MT1VSUy5kaXJ0fWApXG4gICAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmRpcnRPdXRsaW5lIHx8IERJQU1PTkRfQ09MT1VSUy5kaXJ0T3V0bGluZX1gKTtcblxuICAgIC8vIGNvbG91ciB0aGUgZm91bCB6b25lXG4gICAgJGZvdWxab25lXG4gICAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmZvdWxab25lIHx8IERJQU1PTkRfQ09MT1VSUy5mb3VsWm9uZX1gKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmZvdWxab25lT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuZm91bFpvbmVPdXRsaW5lfWApO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBkaWFtb25kIHN2Z1xuICAgICQoJyNkaWFtb25kX19pbWFnZScpXG4gICAgICAuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcrIGJ0b2EoJGRpYW1vbmQuaHRtbCgpKSArICcpJyk7XG5cbiAgICAvLyBkcmF3IGhvbWUgbG9nbyBiZWhpbmQgaG9tZSBwbGF0ZVxuICAgICRsb2dvXG4gICAgICAuYXR0cignc3JjJywgaG9tZVRlYW1EYXRhLnN0YWRpdW1Mb2dvVVJMIHx8IGhvbWVUZWFtRGF0YS5ob21lTG9nb1VSTClcbiAgICAgIC50b2dnbGVDbGFzcygnbS1vdXRsaW5lJywgaG9tZVRlYW1EYXRhLnN0YWRpdW1Mb2dvT3V0bGluZSk7XG5cbiAgICAvLyBzZXQgdGhlIG1hdGNodXAgdGV4dCBhYm92ZSB0aGUgZGlhbW9uZFxuICAgICQoJy5kaWFtb25kLWhlYWRlciAubWF0Y2h1cCcpXG4gICAgICAudGV4dChgJHtoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGEuaG9tZVRlYW1OYW1lfSB2cy4gJHtoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGEuYXdheVRlYW1OYW1lfWApO1xuICAgICQoJyNkaWFtb25kIC5nYW1lLW5hbWUnKVxuICAgICAgLnRleHQoYFNlYXNvbiAke2hpZ2hsaWdodC5nYW1lRXZlbnQuZGF0YS5zZWFzb24gKyAxfSwgRGF5ICR7aGlnaGxpZ2h0LmdhbWVFdmVudC5kYXRhLmRheSArIDF9YCk7XG5cbiAgICB0aGlzLmRpYW1vbmRSZWFkeSA9IHRydWU7XG4gIH1cblxuICBjdXN0b21pemVNYXRjaHVwKGhpZ2hsaWdodCkge1xuICAgIGNvbnN0IGdhbWVFdiA9IGhpZ2hsaWdodC5nYW1lRXZlbnQuZGF0YTtcbiAgICBjb25zdCAkaG9tZSA9ICQoJy52cy1sb2dvX19ob21lJyk7XG4gICAgY29uc3QgJGF3YXkgPSAkKCcudnMtbG9nb19fYXdheScpO1xuICAgIGNvbnN0IGhvbWVUZWFtRGF0YSA9IHRlYW1zRGF0YVt0aGlzLmhvbWVUZWFtXTtcbiAgICBjb25zdCBhd2F5VGVhbURhdGEgPSB0ZWFtc0RhdGFbdGhpcy5hd2F5VGVhbV07XG5cbiAgICAkKCcjbWF0Y2h1cCAuZ2FtZS1uYW1lJylcbiAgICAgIC50ZXh0KGBTZWFzb24gJHtnYW1lRXYuc2Vhc29uICsgMX0sIERheSAke2dhbWVFdi5kYXkgKyAxfWApO1xuXG4gICAgJGhvbWVcbiAgICAgIC5hdHRyKCdzcmMnLCBob21lVGVhbURhdGEuaG9tZUxvZ29VUkwpXG4gICAgICAuYXR0cignYWx0JywgYCR7Z2FtZUV2LmhvbWVUZWFtTmFtZX1gKTtcbiAgICAkYXdheVxuICAgICAgLmF0dHIoJ3NyYycsIGF3YXlUZWFtRGF0YS5hd2F5TG9nb1VSTCB8fCBhd2F5VGVhbURhdGEuaG9tZUxvZ29VUkwpXG4gICAgICAuYXR0cignYWx0JywgYCR7Z2FtZUV2LmF3YXlUZWFtTmFtZX1gKTtcblxuICAgIGlmIChob21lVGVhbURhdGEuaG9tZUxvZ29DcmVkaXQpIHtcbiAgICAgIGlmIChob21lVGVhbURhdGEuaG9tZUxvZ29DcmVkaXRVUkwpIHtcbiAgICAgICAgJGhvbWVcbiAgICAgICAgICAubmV4dCgnLnZzLWxvZ28tY2l0YXRpb24nKVxuICAgICAgICAgIC5lbXB0eSgpXG4gICAgICAgICAgLnRleHQoJ2J5ICcpXG4gICAgICAgICAgLmFwcGVuZChcbiAgICAgICAgICAgICQoJzxhPicpXG4gICAgICAgICAgICAgIC5hdHRyKCdocmVmJywgaG9tZVRlYW1EYXRhLmhvbWVMb2dvQ3JlZGl0VVJMKVxuICAgICAgICAgICAgICAuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpXG4gICAgICAgICAgICAgIC50ZXh0KGAke2hvbWVUZWFtRGF0YS5ob21lTG9nb0NyZWRpdH1gKVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaG9tZVxuICAgICAgICAgIC5uZXh0KCcudnMtbG9nby1jaXRhdGlvbicpXG4gICAgICAgICAgLnRleHQoYGJ5ICR7aG9tZVRlYW1EYXRhLmhvbWVMb2dvQ3JlZGl0fWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkaG9tZVxuICAgICAgICAubmV4dCgnLnZzLWxvZ28tY2l0YXRpb24nKVxuICAgICAgICAudGV4dCgnQXJ0aXN0IHVua25vd24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGF3YXlUZWFtRGF0YS5ob21lTG9nb0NyZWRpdCkge1xuICAgICAgaWYgKGF3YXlUZWFtRGF0YS5ob21lTG9nb0NyZWRpdFVSTCkge1xuICAgICAgICAkYXdheVxuICAgICAgICAgIC5uZXh0KCcudnMtbG9nby1jaXRhdGlvbicpXG4gICAgICAgICAgLmVtcHR5KClcbiAgICAgICAgICAudGV4dCgnYnkgJylcbiAgICAgICAgICAuYXBwZW5kKFxuICAgICAgICAgICAgJCgnPGE+JylcbiAgICAgICAgICAgICAgLmF0dHIoJ2hyZWYnLCBhd2F5VGVhbURhdGEuaG9tZUxvZ29DcmVkaXRVUkwpXG4gICAgICAgICAgICAgIC5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJylcbiAgICAgICAgICAgICAgLnRleHQoYCR7YXdheVRlYW1EYXRhLmhvbWVMb2dvQ3JlZGl0fWApXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRhd2F5XG4gICAgICAgICAgLm5leHQoJy52cy1sb2dvLWNpdGF0aW9uJylcbiAgICAgICAgICAudGV4dChgYnkgJHthd2F5VGVhbURhdGEuaG9tZUxvZ29DcmVkaXR9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICRhd2F5XG4gICAgICAgIC5uZXh0KCcudnMtbG9nby1jaXRhdGlvbicpXG4gICAgICAgIC50ZXh0KCdBcnRpc3QgdW5rbm93bi4nKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hdGNodXBSZWFkeSA9IHRydWU7XG4gIH1cblxuICBzaG93Rm9yKGhpZ2hsaWdodCkge1xuXG4gICAgLy8gaWYgZ2FtZSBkYXRhIGhhc24ndCBiZWVuIHNldCwgb3IgaWYgdGhlIGdhbWUgaGFzIGNoYW5nZWQsXG4gICAgLy8gdXBkYXRlIHRoZSBnYW1lIGRhdGFcbiAgICBpZiAodGhpcy5nYW1lSUQgIT09IGhpZ2hsaWdodC5nYW1lRXZlbnQuZ2FtZUlkKSB7XG4gICAgICB0aGlzLnNldEdhbWVEYXRhKGhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlQ3VycmVudCgpO1xuXG4gICAgc3dpdGNoIChoaWdobGlnaHQudmlzdWFsKSB7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICB0aGlzLnNob3dDdXN0b20oaGlnaGxpZ2h0KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21hdGNodXAnOlxuICAgICAgICB0aGlzLnNob3dNYXRjaHVwKGhpZ2hsaWdodCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaWFtb25kJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc2hvd0RpYW1vbmQoaGlnaGxpZ2h0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaGlkZUN1cnJlbnQoKSB7XG4gICAgJCgnI2N1c3RvbScpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcjbWF0Y2h1cCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcjZGlhbW9uZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIHNob3dDdXN0b20oaGlnaGxpZ2h0KSB7XG4gICAgY29uc3QgJGN1c3RvbSA9ICQoJyNjdXN0b20nKTtcblxuICAgICRjdXN0b21cbiAgICAgIC5maW5kKCdpbWcnKVxuICAgICAgLmF0dHIoJ3NyYycsIGhpZ2hsaWdodC52aXN1YWxNZXRhLmltYWdlRGF0YSlcbiAgICAgIC5hdHRyKCdhbHQnLCBoaWdobGlnaHQudmlzdWFsTWV0YS5pbWFnZURlc2NyaXB0aW9uKTtcblxuICAgIGlmIChoaWdobGlnaHQudmlzdWFsTWV0YS5jcmVhdG9yKSB7XG4gICAgICBpZiAoaGlnaGxpZ2h0LnZpc3VhbE1ldGEuY3JlYXRvckxpbmspIHtcbiAgICAgICAgJGN1c3RvbVxuICAgICAgICAgIC5maW5kKCcuY3VzdG9tX19jaXRhdGlvbicpXG4gICAgICAgICAgLmVtcHR5KClcbiAgICAgICAgICAudGV4dCgnYnkgJylcbiAgICAgICAgICAuYXBwZW5kKFxuICAgICAgICAgICAgJCgnPGE+JylcbiAgICAgICAgICAgICAgLmF0dHIoJ2hyZWYnLCBoaWdobGlnaHQudmlzdWFsTWV0YS5jcmVhdG9yTGluaylcbiAgICAgICAgICAgICAgLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKVxuICAgICAgICAgICAgICAudGV4dChgJHtoaWdobGlnaHQudmlzdWFsTWV0YS5jcmVhdG9yfWApXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAkY3VzdG9tXG4gICAgICAgIC5maW5kKCcuY3VzdG9tX19jaXRhdGlvbicpXG4gICAgICAgIC50ZXh0KGBieSAke2hpZ2hsaWdodC52aXN1YWxNZXRhLmNyZWF0b3J9YClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJGN1c3RvbVxuICAgICAgICAuZmluZCgnLmN1c3RvbV9fY2l0YXRpb24nKVxuICAgICAgICAudGV4dCgnQXJ0aXN0IHVua25vd24uJylcbiAgICB9XG4gICAgJGN1c3RvbS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH07XG5cbiAgc2hvd01hdGNodXAoaGlnaGxpZ2h0KSB7XG4gICAgaWYgKCF0aGlzLm1hdGNodXBSZWFkeSkge1xuICAgICAgdGhpcy5jdXN0b21pemVNYXRjaHVwKGhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgJCgnI21hdGNodXAnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICBzaG93RGlhbW9uZChoaWdobGlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZURpYW1vbmQoaGlnaGxpZ2h0KTtcbiAgICAkKCcjZGlhbW9uZCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIHVwZGF0ZURpYW1vbmQoaGlnaGxpZ2h0KSB7XG4gICAgaWYgKCF0aGlzLmRpYW1vbmRSZWFkeSkge1xuICAgICAgdGhpcy5jdXN0b21pemVEaWFtb25kKGhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3QmF0dGVyKGhpZ2hsaWdodCk7XG4gICAgdGhpcy5kcmF3UGl0Y2hlcihoaWdobGlnaHQpO1xuICAgIHRoaXMuZHJhd0Jhc2VydW5uZXJzKGhpZ2hsaWdodCk7XG4gICAgdGhpcy5kcmF3U2NvcmVib2FyZChoaWdobGlnaHQpO1xuICB9XG5cbiAgZHJhd0JhdHRlcihoaWdobGlnaHQpIHtcbiAgICBjb25zdCBnZSA9IGhpZ2hsaWdodC5nYW1lRXZlbnQuZGF0YTtcblxuICAgIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdhd2F5JyA6ICdob21lJztcbiAgICBsZXQgbmFtZVdpdGhFbW9qaSA9ICcnO1xuXG4gICAgaWYgKGdlW2Ake3RlYW19QmF0dGVyTmFtZWBdKSB7XG4gICAgICBjb25zdCBuYW1lID0gdXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwoZ2VbYCR7dGVhbX1CYXR0ZXJOYW1lYF0pO1xuICAgICAgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke25hbWV9YDtcbiAgICB9XG5cbiAgICB0aGlzLmRpYW1vbmRMb2NhdGlvbnNbJyRiYXR0aW5nJ11cbiAgICAgIC50ZXh0KG5hbWVXaXRoRW1vamkpO1xuICB9XG5cbiAgZHJhd1BpdGNoZXIoaGlnaGxpZ2h0KSB7XG4gICAgY29uc3QgZ2UgPSBoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnaG9tZScgOiAnYXdheSc7XG4gICAgbGV0IG5hbWVXaXRoRW1vamkgPSAnJztcblxuICAgIGlmIChnZVtgJHt0ZWFtfVBpdGNoZXJOYW1lYF0pIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB1dGlsLmdldFBsYXllck5hbWVXaXRoSW5pdGlhbChnZVtgJHt0ZWFtfVBpdGNoZXJOYW1lYF0pO1xuICAgICAgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke25hbWV9YDtcbiAgICB9XG5cbiAgICB0aGlzLmRpYW1vbmRMb2NhdGlvbnNbJyRtb3VuZCddXG4gICAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbiAgfVxuXG4gIGRyYXdCYXNlcnVubmVycyhoaWdobGlnaHQpIHtcbiAgICBjb25zdCBtbCA9IGhpZ2hsaWdodC5tbHVzdGFyZDtcbiAgICBjb25zdCBnZSA9IGhpZ2hsaWdodC5nYW1lRXZlbnQuZGF0YTtcblxuICAgIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdhd2F5JyA6ICdob21lJztcblxuICAgIGlmIChtbCAmJiBtbC5iYXNlUnVubmVycykge1xuICAgICAgZm9yIChsZXQgYmFzZSBvZiB0aGlzLkJBU0VTKSB7XG4gICAgICAgIGxldCBuYW1lID0gbWwuYmFzZVJ1bm5lcnNbYmFzZV0ucGxheWVyTmFtZTtcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIGxldCBuYW1lV2l0aEVtb2ppID0gYCR7dXRpbC5nZXRFbW9qaSh0ZWFtLCBnZSl9ICR7dXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwobmFtZSl9YDtcbiAgICAgICAgICB0aGlzLmRpYW1vbmRMb2NhdGlvbnNbYCQke2Jhc2V9YF1cbiAgICAgICAgICAgIC50ZXh0KG5hbWVXaXRoRW1vamkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlhbW9uZExvY2F0aW9uc1tgJCR7YmFzZX1gXVxuICAgICAgICAgICAgLnRleHQoJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd1Njb3JlYm9hcmQoaGlnaGxpZ2h0KSB7XG4gICAgY29uc3QgbWwgPSBoaWdobGlnaHQubWx1c3RhcmQ7XG4gICAgY29uc3QgZ2UgPSBoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgICBjb25zdCAkc2NvcmVib2FyZCA9ICQoJyNkaWFtb25kX19zY29yZWJvYXJkJyk7XG5cbiAgICAvLyBzY29yZVxuICAgIGNvbnN0ICRob21lID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtdGVhbXNfX2hvbWUgc3BhbicpO1xuICAgICRob21lLmZpcnN0KCkudGV4dCh0ZWFtc0RhdGFbZ2UuaG9tZVRlYW1dLnNob3J0aGFuZCk7XG4gICAgJGhvbWUubGFzdCgpLnRleHQoZ2UuaG9tZVNjb3JlKTtcblxuICAgIGNvbnN0ICRhd2F5ID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtdGVhbXNfX2F3YXkgc3BhbicpO1xuICAgICRhd2F5LmZpcnN0KCkudGV4dCh0ZWFtc0RhdGFbZ2UuYXdheVRlYW1dLnNob3J0aGFuZCk7XG4gICAgJGF3YXkubGFzdCgpLnRleHQoZ2UuYXdheVNjb3JlKTtcblxuICAgIC8vIGJhc2VzXG4gICAgY29uc3QgJGJhc2VzID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtYmFzZXMnKTtcbiAgICAkYmFzZXMuZW1wdHkoKTtcbiAgICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKG1sLmJhc2VSdW5uZXJzLnRoaXJkLnBsYXllck5hbWUpKTtcbiAgICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKG1sLmJhc2VSdW5uZXJzLnNlY29uZC5wbGF5ZXJOYW1lKSk7XG4gICAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChtbC5iYXNlUnVubmVycy5maXJzdC5wbGF5ZXJOYW1lKSk7XG5cbiAgICAvLyBjb3VudFxuICAgIGNvbnN0ICRjb3VudCA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWNvdW50X19jb3VudCBzcGFuJyk7XG4gICAgJGNvdW50LmZpcnN0KCkudGV4dChnZS5hdEJhdEJhbGxzKTtcbiAgICAkY291bnQubGFzdCgpLnRleHQoZ2UuYXRCYXRTdHJpa2VzKTtcbiAgICBjb25zdCAkb3V0cyA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWNvdW50X19vdXRzIHNwYW4nKTtcbiAgICAkb3V0cy50ZXh0KGdlLmhhbGZJbm5pbmdPdXRzKTtcblxuICAgIC8vIGlubmluZ1xuICAgIGNvbnN0ICRpbm5pbmcgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1vdGhlcl9faW5uaW5nIHNwYW4nKTtcbiAgICAkaW5uaW5nLmZpcnN0KCkudGV4dChnZS50b3BPZklubmluZyA/ICdUT1AnIDogJ0JPVCcpO1xuICAgICRpbm5pbmcubGFzdCgpLnRleHQodXRpbC5nZXRJbm5pbmdUZXh0KGdlLmlubmluZyArIDEpKTtcblxuICAgIC8vIHdlYXRoZXJcbiAgICBjb25zdCAkd2VhdGhlciA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLW90aGVyX193ZWF0aGVyIHNwYW4nKTtcbiAgICAkd2VhdGhlclxuICAgICAgLnRleHQod2VhdGhlcltnZS53ZWF0aGVyXS5pY29uIHx8IHdlYXRoZXJbZ2Uud2VhdGhlcl0ubmFtZSlcbiAgICAgIC5hdHRyKCd0aXRsZScsIHdlYXRoZXJbZ2Uud2VhdGhlcl0ubmFtZSk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpc3VhbDtcblxuIl19
