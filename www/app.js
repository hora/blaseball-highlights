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

// old
const animateHighlight = (highlight) => {
  $lineOne.removeClass('animation-finished animate');
  $lineTwo.removeClass('animation-finished animate');

  $lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
  $lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

  hideControl();
  animate('one');
};

// old
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

// old
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

// old
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

class Dialog {
  constructor() {
    console.debug('new Dialog()');

    this.$dialogs = $('#highlights-dialog__text p');
    this.$lineOne = this.$dialogs.first();
    this.$lineTwo = this.$dialogs.last();
    this.$control = $('.dialog-control');

    this.lineOneAnimating = false;
    this.lineTwoAnimating = false;

    //this.$dialogs.each((_, el) => {
      //util.prefixedOn($(el), 'AnimationEnd', onAnimEnd);
    //});

    this.cur;
    this.prev;
    this.next;

    this.ready = true;
  }

  startHighlight(highlights, skipAnimation) {
    this.cur = highlights.cur;
    this.prev = highlights.prev;
    this.next = highlights.next;

    //if (!this.ready) this.init();

    // reset dialog
    //highlight.curDialogPart = 0;
    this.$lineOne.removeClass('animation-finished animate');
    this.$lineTwo.removeClass('animation-finished animate');

    this.cur.started = true;
    if (skipAnimation) {
      this.showHighlight(this.cur);
    } else {
      this.animateHighlight(this.cur);
    }
  }

  showHighlight(highlight) {
    this.$lineOne.removeClass('animate');
    this.$lineTwo.removeClass('animate');

    this.$lineOne.text(highlight.dialogParts[highlight.curDialogPart][0] || '');
    this.$lineTwo.text(highlight.dialogParts[highlight.curDialogPart][1] || '');

    this.$lineOne.addClass('animation-finished');
    this.$lineTwo.addClass('animation-finished');

    this.showControl();
  }

  showControl() {
    this.showPrev();
    this.showNext();
  }

  // show next arrow if:
  // there are parts left to this highlight
  // there are highlights left to the story
  showNext() {
    // todo: show arrow if next, but move into outro
    if (this.cur.hasDialogNext || this.next) {
      this.$control.last().addClass('show');
    }
  }

  // show pre arrow if:
  // there are parts before this highlight
  // there are highlights earlier in the story
  showPrev() {
    // todo: show arrow if next, but move into outro
    if (this.cur.hasDialogPrev() || this.prev) {
      this.$control.first().addClass('show');
    }
  }

  hideControl() {
    this.$control.removeClass('show');
  }

  continueHighlight(highlights) {
    this.cur = highlights.cur;
    this.prev = highlights.prev;
    this.next = highlights.next;

    if (!this.cur) { return false; }
    if (!this.cur.started) { return false; }

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
      this.cur.curDialogPart++;

      // no more text to this highlight
      if (this.cur.curDialogPart === this.cur.dialogParts.length) {
        this.cur.curDialogPart = 0;
        return false;
      }

      // skip animations for now
      this.showHighlight(this.cur);
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

    this.cur.curDialogPart--;

    // no more text to this highlight
    if (this.cur.curDialogPart === -1) {
      this.cur.curDialogPart = 0;
      return false;
    }

    this.showHighlight(this.cur);
    return true;
  }

}

module.exports = Dialog;


},{"./util":26}],21:[function(require,module,exports){
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


},{}],22:[function(require,module,exports){
const mlustard = require('mlustard');

const Highlight = require('./highlight');
const util = require('./util');

let gameEvents = {};
let highlights = [];

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

    // other games
    // s3d100 (riv landry)
    'https://reblase.sibr.dev/game/aa1b7fde-f077-4e4b-825f-0d1538d02822',
  ];

  return games[Math.floor(Math.random() * (games.length - 1))];
};

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

    const hl = new Highlight({
      id: id,
      gameEvent: gameEvents[id].ev,
      mlustard: gameEvents[id].mlustard,
      visual,
    });

    //const hl = highlight.makeHighlight({
      //id: id,
      //gameEvent: gameEvents[id].ev,
      //mlustard: gameEvents[id].mlustard,
      //visual,
    //});

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

  //const resp = await fetch(gamesURL);
  await fetch(gamesURL)
    // catch server errors, from https://stackoverflow.com/a/54164027
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
        getGameEvents(gameId, data.nextPage);
      } else {
        // done loading all game events
        renderGameEvs();
        console.debug('getGameEvents done:', gameEvents);
      }
    })
    .catch((err) => {
      console.error(err);
      $('#game-event-form .error-msg').removeClass('d-none');
      stopLoading();
    });

};

const startLoading = () => {
  const $gameEvForm = $('#game-event-form');

  $gameEvForm.find('.error-msg').addClass('d-none');
  $gameEvForm.find('button').addClass('d-none');
  $gameEvForm.find('.loading').removeClass('d-none');
};

const stopLoading = () => {
  const $gameEvForm = $('#game-event-form');

  $gameEvForm.find('button').removeClass('d-none');
  $gameEvForm.find('.loading').addClass('d-none');
};

const init = (highlightsReadyCb) => {
  const $gameEvForm = $('#game-event-form');
  const $gameInput = $('#game-id');

  // focus on game input
  $gameInput.focus();

  // pick a random interesting game as the placeholder for the input
  $gameInput.attr('placeholder', getRandomGame());

  $gameEvForm.on('submit', (ev) => {
    ev.preventDefault();

    let gameVal = $gameInput.val();

    if (!gameVal) {
      gameVal = $gameInput.attr('placeholder');
    }

    const gameId = gameVal.split('/').pop();
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


},{"./highlight":23,"./util":26,"mlustard":12}],23:[function(require,module,exports){
const grandSlalami = require('grand-slalami');

class Highlight {
  constructor(settings) {
    settings = settings || {};

    this.id = settings.id;
    this.gameEvent = settings.gameEvent;
    this.mlustard = settings.mlustard;
    this.visual = settings.visual;
    this.commentary = settings.commentary || this.generateCommentary();
    this.maxDialogLen = this.setMaxDialogLen();
    this.dialogParts = [];
    this.curDialogPart = 0;
    this.breakIntoDialogParts();
  }

  generateCommentary() {
    // for mvp: skip grand slalami, just return original lastUpdate +
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
  };

  // todo: do i wanna support mobile? then update this accordingly
  setMaxDialogLen() {
    return 35;
  }

  breakIntoDialogParts() {
    // split by newlines (enforced pacing)
    const pacingParts = this.commentary.split('\n');

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

  hasDialogNext() {
      return !((this.curDialogPart + 1) === this.dialogParts.length);
  }

  hasDialogPrev() {
      return !((this.curDialogPart - 1) === -1);
  }
}

module.exports = Highlight;

//module.exports = {
  //makeHighlight,
  //hasDialogLeft,
  //hasDialogPrev,
//};


},{"grand-slalami":5}],24:[function(require,module,exports){
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


},{"./downloader":21,"./game-event-selector":22,"./story":25}],25:[function(require,module,exports){
const Visual = require('./visual');
const Dialog = require('./dialog');
const teamsData = require('../lib/teams-data');

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


class Story {
  constructor(settings) {
    this.highlights = settings.highlights || [];
    this.dialog = new Dialog();
    this.curHighlight = 0;
    this.intro = true;
    this.visual = new Visual();
  }

  start() {
    $('#game-event-form').addClass('d-none');
    $('#visuals').removeClass('d-none');
    $('#highlights-dialog__container').removeClass('d-none');

    this.setupIntro();

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
        // todo: fix this, this is cursed:
        if ($(evt.target).attr('id').indexOf('next') >= 0) {
          direction = 'next';
        } else if ($(evt.target).attr('id').indexOf('next') >= 0) {
          direction = 'prev';
        }
      }

      _this.playHighlight(direction);
    }

    $(document).on('keyup', handleAction);
    $('.dialog-control').on('click', handleAction);
  }

  setupIntro() {
    // grab game info from first highlight
    const gameEv = this.highlights[0].gameEvent.data;
    const $home = $('.vs-logo__home');
    const $away = $('.vs-logo__away');

    let hNick = gameEv.homeTeamNickname.split(' ').pop().toLowerCase();
    let aNick = gameEv.awayTeamNickname.split(' ').pop().toLowerCase();

    if (aNick === 'mechanics') {
      aNick += '-away';
    }

    $('.game-name').text(`Season ${gameEv.season + 1}, Day ${gameEv.day + 1}`);
    $home
      .attr('src', `./images/logo-${hNick}.png`)
      .attr('alt', `${gameEv.homeTeamName}`);
    $away
      .attr('src', `./images/logo-${aNick}.png`)
      .attr('alt', `${gameEv.awayTeamName}`);
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
    const $grass = $diamond.find('.diamond-svg__grass');
    const $dirt = $diamond.find('.diamond-svg__dirt');
    const $foulZone = $diamond.find('.diamond-svg__foul-zone');
    const $mound = $diamond.find('.diamond-svg__mound');
    const $bases = $diamond.find('.diamond-svg__base');
    const $logo = $('.diamond-logo');

    // colour the mound
    // tries mound colour, or sets official as default
    $mound
      .attr('fill', `#${homeTeam.colours.mound || homeTeam.colours.official}`)
      .attr('stroke', `#${homeTeam.colours.moundOutline || DIAMOND_COLOURS.moundOutline}`);

    // colour the bases
    // tries bases colour, or sets official as default
    $bases
      .attr('fill', `#${homeTeam.colours.bases || homeTeam.colours.official}`)
      .attr('stroke', `#${homeTeam.colours.basesOutline || DIAMOND_COLOURS.basesOutline}`);

    // colour the grass
    $grass.first()
        .attr('fill', `#${homeTeam.colours.grass || DIAMOND_COLOURS.grass}`)
        .attr('stroke', `#${homeTeam.colours.grassOutline || DIAMOND_COLOURS.grassOutline}`);
      $grass.last()
        .attr('fill', `#${homeTeam.colours.grass || DIAMOND_COLOURS.grass}`)
        .attr('stroke', `#${homeTeam.colours.dirtOutline || DIAMOND_COLOURS.grassOutline}`);

    // colour the dirt
    $dirt
      .attr('fill', `#${homeTeam.colours.dirt || DIAMOND_COLOURS.dirt}`)
      .attr('stroke', `#${homeTeam.colours.dirtOutline || DIAMOND_COLOURS.dirtOutline}`);

    // colour the foul zone
    $foulZone
        .attr('fill', `#${homeTeam.colours.foulZone || DIAMOND_COLOURS.foulZone}`)
        .attr('stroke', `#${homeTeam.colours.foulZoneOutline || DIAMOND_COLOURS.foulZoneOutline}`);

    // update the diamond svg
    $('#diamond__image')
      .css('background-image', 'url(data:image/svg+xml;base64,'+ btoa($diamond.html()) + ')');

    // draw home logo behind home plate
    $logo
      .attr('src', homeTeam.stadiumLogoURL || homeTeam.homeLogoURL)
      .toggleClass('m-outline', homeTeam.stadiumLogoOutline);

    //$('.mound-logo').first().attr('src', homeTeam.homeLogoURL);

    // focus on the body so arrow keyups can be registered
    $('body').focus();

    this.nextHighlight(true);
  }

  nextHighlight(skipAnimation) {
    const hls = this.getHighlights();

    this.visual.show(hls.cur.visual);
    this.visual.updateDiamond(hls);
    this.dialog.startHighlight(hls, skipAnimation);
  }

  getHighlights () {
    return {
      prev: this.highlights[this.curHighlight - 1],
      cur: this.highlights[this.curHighlight],
      next: this.highlights[this.curHighlight + 1],
    };
  }

  playHighlight(direction) {

    if (direction === 'next') {
      // try to advance the highlight, if there's more text to animate
      if (!this.continueHighlight()) {

        // do nothing if there's no more highlights
        if (this.highlights.length - 1 === this.curHighlight) { return };

        this.curHighlight++;

        // if there are no more highlights, don't advance
        if (this.highlights.length === this.curHighlight) {
          return;
        }

        // otherwise, show the next highlight
        this.nextHighlight(true);
      }
    } else {
      // try to reverse highlight, if there was previous text to animate
      if (!this.reverseHighlight()) {

        // do nothing if there's no previous highlights
        if (this.curHighlight === 0) { return };

        this.curHighlight--;

        // if there are no previous highlights, don't reverse
        if (this.curHighlight < 0) {
          return;
        }

        // todo: fix the naming, oh gods this is cursed
        this.nextHighlight(true);
      }
    }
  }

  continueHighlight() {
    return this.dialog.continueHighlight(this.getHighlights());
  };

  reverseHighlight() {
    return this.dialog.reverseHighlight(this.getHighlights());
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


class Visual {
  constructor() {
  }

  show(visual) {
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
  }

  updateDiamond(highlights) {
    drawBatter(highlights);
    drawPitcher(highlights);
    drawBaserunners(highlights);

    drawScoreboard(highlights);
  }
}

module.exports = Visual;


},{"../lib/teams-data":1,"../lib/weather":2,"./util":26}]},{},[24])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdGVhbXMtZGF0YS5qcyIsImxpYi93ZWF0aGVyLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvY29tbWVudGFyeS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL2dyYW1tYXIuanMiLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC9ncmFuZC1zbGFsYW1pLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvcXVpcHMuanNvbiIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL3RyYWNlcnktbW9kcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9iYXNlLXJ1bm5lcnMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvZ2FtZS1zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvaGl0cy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9taXNjLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL21sdXN0YXJkLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL291dHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvc3BlY2lhbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9zdGVhbHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC93YWxrcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9saWIvcGxheWVycy5qcyIsIm5vZGVfbW9kdWxlcy90cmFjZXJ5LWdyYW1tYXIvdHJhY2VyeS5qcyIsInNyYy9kaWFsb2cuanMiLCJzcmMvZG93bmxvYWRlci5qcyIsInNyYy9nYW1lLWV2ZW50LXNlbGVjdG9yLmpzIiwic3JjL2hpZ2hsaWdodC5qcyIsInNyYy9tYWluLmpzIiwic3JjL3N0b3J5LmpzIiwic3JjL3V0aWwuanMiLCJzcmMvdmlzdWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNubEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGRhdGEgPSB7XG4gIC8vIGhlbGxtb3V0aCBzdW5iZWFtc1xuICAnZjAyYWVhZTItNWU2YS00MDk4LTk4NDItMDJkMjI3M2YyNWM3Jzoge1xuICAgIHNob3J0aGFuZDogJ0hFTEwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZmZmYmFiJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcxZDE5MzInLFxuICAgICAgZ3Jhc3M6ICdlOGM4NzcnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZThjODc3JyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcxZDE5MzInLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1zdW5iZWFtcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnQ29ibGluJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vS3Jhc2lfU2F2b3YnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gaGFkZXMgdGlnZXJzXG4gICc3NDdiOGU0YS03ZTUwLTQ2MzgtYTk3My1lYTc5NTBhM2U3MzknOiB7XG4gICAgc2hvcnRoYW5kOiAnSEFEJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzVjMWMxYycsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnZTg1NjM3JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2U4NTYzNycsXG4gICAgICBkaXJ0OiAnZmFhNjIzJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tdGlnZXJzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdqcmZieicsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2pyZmJ6JyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIHNlYXR0bGUgZ2FyYWdlc1xuICAnMTA1YmMzZmYtMTMyMC00ZTM3LThlZjAtOGQ1OTVjYjk1ZGQwJzoge1xuICAgIHNob3J0aGFuZDogJ1NFQScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICcyYjQwNzUnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGdyYXNzOiAnZWEyZDI5JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2VhMmQyOScsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcxZDFkMWQnLFxuICAgICAgZGlydDogJ2Q4ZDhkYScsXG4gICAgICBkaXJ0T3V0bGluZTogJzFkMWQxZCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWdhcmFnZXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ3phbmR0ZXJiaXJkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBtZXhpY28gY2l0eSB3aWxkIHdpbmdzXG4gICc1N2VjMDhjYy0wNDExLTQ2NDMtYjMwNC0wZTgwZGJjMTVhYzcnIDoge1xuICAgIHNob3J0aGFuZDogJ0NETVgnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZDE1NzAwJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBncmFzczogJzczMWYwMCcsXG4gICAgICBncmFzc091dGxpbmU6ICc3MzFmMDAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdlMGUwZTAnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby13aW5ncy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAndGhyMzNoM2FkM2RkcmFnJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vdGhyMzNoM2FkM2RkcmFnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IHRydWUsXG4gIH0sXG5cbiAgLy8gYXRsYW50aXMgZ2VvcmdpYXNcbiAgJ2Q5Zjg5YThhLWM1NjMtNDkzZS05ZDY0LTc4ZTRmOWE1NWQ0YSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdBVExTJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzAwZGJjMicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcnLFxuICAgICAgZ3Jhc3M6ICc1Y2ZmZWMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnNWNmZmVjJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJycsXG4gICAgICBkaXJ0OiAnJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZ2VvcmdpYXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2JseXB0b25vbWljYScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2JseXB0b25vbWljYScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGNoaWNhZ28gZmlyZWZpZ2h0ZXJzXG4gICdjYTNmMWM4Yy1jMDI1LTRkOGUtOGVlZi01YmU2YWNjYmViMTYnOiB7XG4gICAgc2hvcnRoYW5kOiAnQ0hJJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzhjMmEzZScsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICdmZjk2MGEnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZmY5NjBhJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZmlyZWZpZ2h0ZXJzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdXaXJzcHJpbmdlbiBvbiBEaXNjb3JkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWZpcmVmaWdodGVycy1zdGFkaXVtLnBuZycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICdXaXJzcHJpbmdlbiBvbiBEaXNjb3JkJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyB0b2t5byBsaWZ0XG4gICdjNzNiNzA1Yy00MGFkLTQ2MzMtYTZlZC1kMzU3ZWUyZTJiY2YnOiB7XG4gICAgc2hvcnRoYW5kOiAnVFlPJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2U1MzZjOCcsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDBhMmEnLFxuICAgICAgZ3Jhc3M6ICc5MDE0N2InLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnOTAxNDdiJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMGEyYScsXG4gICAgICBkaXJ0OiAnZmFmMGY5JyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwYTJhJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbGlmdC5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnanJmYnonLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9qcmZieicsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBicmVja2VucmlkZ2UgamF6eiBoYW5kc1xuICAnYTM3ZjkxNTgtN2Y4Mi00NmJjLTkwOGMtYzllMmRkYTdjMzNiJzoge1xuICAgIHNob3J0aGFuZDogJ0JSSycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc2Mzg4YWQnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnNGUwODRkJyxcbiAgICAgIGdyYXNzOiAnZjNjYTQwJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2YzY2E0MCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICc0ZTA4NGQnLFxuICAgICAgZGlydDogJ2YyYTU0MScsXG4gICAgICBkaXJ0T3V0bGluZTogJzRlMDk0ZCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWhhbmRzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdTa29vdGxlcyBvbiBEaXNjb3JkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGxhIHVubGltaXRlZCB0YWNvc1xuICAnODc4YzFiZjYtMGQyMS00NjU5LWJmZWUtOTE2YzgzMTRkNjljJzoge1xuICAgIHNob3J0aGFuZDogJ1RBQ08nLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNjQzNzZlJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBncmFzczogJ2ZhY2YzMycsXG4gICAgICBncmFzc091dGxpbmU6ICdmYWNmMzMnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICcyOGM4NzInLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby10YWNvcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnNGRhbUF2ZW51ZScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tLzRkYW1BdmVudWUnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gbWlhbWkgZGFsZVxuICAnYjYzYmU4YzItNTc2YS00ZDZlLThkYWYtODE0ZjhiY2VhOTZmJzoge1xuICAgIHNob3J0aGFuZDogJ01JQScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdiZjAwZmYnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMGUxMjE2JyxcbiAgICAgIGdyYXNzOiAnZmVlMDIwJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2ZlZTAyMCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwZTEyMTYnLFxuICAgICAgZGlydDogJzMzZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzBlMTIxNicsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWRhbGUucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJzRkYW1BdmVudWUnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS80ZGFtQXZlbnVlJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZGFsZS1zdGFkaXVtLnBuZycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICdCaWxseUdhbGFudCcsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL0JpbGx5R2FsYW50JyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IHRydWUsXG4gIH0sXG5cbiAgLy8gYm9zdG9uIGZsb3dlcnNcbiAgJzNmOGJiYjE1LTYxYzAtNGUzZi04ZTRhLTkwN2E1ZmIxNTY1ZSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdCT1MnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZjdkMWZmJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzM5M2ExNycsXG4gICAgICBncmFzczogJzk3NTVhNScsXG4gICAgICBncmFzc091dGxpbmU6ICc5NzU1YTUnLFxuICAgICAgYmFzZXM6ICdmN2QxZmYnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMzkzYTE3JyxcbiAgICAgIGRpcnQ6ICdkNzkxZTMnLFxuICAgICAgZGlydE91dGxpbmU6ICczOTNhMTcnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1mbG93ZXJzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICduaW0gb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBvaGlvIHdvcm1zXG4gICdiYjRhOWRlNS1jOTI0LTQ5MjMtYTBjYi05ZDE0NDVmMWVlNWQnOiB7XG4gICAgc2hvcnRoYW5kOiAnT0hJTycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc1YzQ4MjInLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnYmE5YzY1JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2JhOWM2NScsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJ2ZhZmFmYScsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBuZXV0cmFsOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby13b3Jtcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnZGFuLmRpZ2l0YWwnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9kYW5kb3RkaWdpdGFsJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IHRydWUsXG4gIH0sXG5cbiAgLy8gaG91c3RvbiBzcGllc1xuICAnOWRlYmM2NGYtNzRiNy00YWUxLWE0ZDYtZmNlMDE0NGI2ZWE1Jzoge1xuICAgIHNob3J0aGFuZDogJ0hPVScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc2NzU1NmInLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGdyYXNzOiAnOWU4MmE0JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzllODJhNCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZhZmFmYScsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXNwaWVzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdEYWxtYXRpb25lcicsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gcGhpbGx5IHBpZXNcbiAgJzIzZTRjYmMxLWU5Y2QtNDdmYS1hMzViLWJmYTA2ZjcyNmNiNyc6IHtcbiAgICBzaG9ydGhhbmQ6ICdQSEwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnMzk5ZDhmJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBncmFzczogJ2ZmY2Q0YycsXG4gICAgICBncmFzc091dGxpbmU6ICdmZmNkNGMnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1waWVzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdMYWR5a25pZ2h0dGltZSM4ODA2IG9uIERpc2NvcmQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIHNhbiBmcmFjaXNjbyBsb3ZlcnNcbiAgJ2I3MmYzMDYxLWY1NzMtNDBkNy04MzJhLTVhZDQ3NWJkNzkwOSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdTRicsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdkMjI2NGEnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGdyYXNzOiAnZjE5M2IzJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2YxOTNiMycsXG4gICAgICAvL2Jhc2VzOiAnNmIxODRkJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbG92ZXJzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdMdWNhY3JhZnRzJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vbHVjYWNyYWZ0cycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBkYWxsYXMgc3RlYWtzXG4gICdiMDI0ZTk3NS0xYzRhLTQ1NzUtODkzNi1hMzc1NGEwODgwNmEnOiB7XG4gICAgc2hvcnRoYW5kOiAnREFMJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzhjOGQ4ZicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICdjNmE3OGInLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnYzZhNzhiJyxcbiAgICAgIC8vZ3Jhc3NPdXRsaW5lOiAnOGMzNjJhJyxcbiAgICAgIC8vYmFzZXM6ICc4YzM2MjgnLFxuICAgICAgYmFzZXM6ICdiMDBlMWMnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIC8vZGlydDogJ2M2YTc4YicsXG4gICAgICAvL2RpcnQ6ICdiMDBlMWMnLFxuICAgICAgZGlydDogJzhjMzYyYScsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXN0ZWFrcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnNGRhbUF2ZW51ZScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tLzRkYW1BdmVudWUnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gbmV3IHlvcmsgbWlsbGVubmlhbHNcbiAgJzM2NTY5MTUxLWEyZmItNDNjMS05ZGY3LTJkZjUxMjQyNGM4Mic6IHtcbiAgICBzaG9ydGhhbmQ6ICdOWScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdmOGQ2ZDcnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGdyYXNzOiAnOTljZGUzJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzk5Y2RlMycsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1pbGxlbm5pYWxzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdAT3JpZ2FtaUFuZHJvaWQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9PcmlnYW1pQW5kcm9pZCcsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1pbGxlbm5pYWxzLXN0YWRpdW0ucG5nJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJ0FubmFuYScsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gY29yZSBtZWNoYW5pY3NcbiAgJzQ2MzU4ODY5LWRjZTktNGEwMS1iZmJhLWFjMjRmYzU2ZjU3ZSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdDT1JFJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2QxMzEwMCcsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcnLFxuICAgICAgZ3Jhc3M6ICdmOWIxNGEnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZjliMTRhJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJycsXG4gICAgICBkaXJ0OiAnZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWVjaGFuaWNzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdad2VpSGF3a2UnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ad2VpSGF3a2UnLFxuICAgIGF3YXlMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1tZWNoYW5pY3MtYXdheS5wbmcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnWndlaUhhd2tlJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vWndlaUhhd2tlJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWVjaGFuaWNzLXN0YWRpdW0ucG5nJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJ0B3aGF0c3NoZWNhbGxlZCcsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL3doYXRzc2hlY2FsbGVkJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIHllbGxvd3N0b25lIG1hZ2ljXG4gICc3OTY2ZWIwNC1lZmNjLTQ5OWItOGYwMy1kMTM5MTYzMzA1MzEnOiB7XG4gICAgc2hvcnRoYW5kOiAnWUVMTCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdiZjAwNDMnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnZmNiMDQwJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2ZjYjA0MCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJ2ZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1hZ2ljLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdMdWNreSBQZW5ueSBvbiBEaXNjb3JkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBoYXdhaSdpIGZyaWRheXNcbiAgJzk3OWFlZTRhLTZkODAtNDg2My1iZjFjLWVlMWE3OGUwNjAyNCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdGUkknLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnM2VlNjUyJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJzExYTZjMicsXG4gICAgICBncmFzc091dGxpbmU6ICcxMWE2YzInLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdlNjc1NzUnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1mcmlkYXlzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGNhbmFkYSBtb2lzdCB0YWxrZXJzXG4gICdlYjY3YWU1ZS1jNGJmLTQ2Y2EtYmJiYy00MjVjZDM0MTgyZmYnOiB7XG4gICAgc2hvcnRoYW5kOiAnQ0FOJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2U1ZjRmNScsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICczYjk3ZDQnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnM2I5N2Q0JyxcbiAgICAgIGJhc2VzOiAnZWQxYzI0JyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnMDM1NTk3JyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnZTVmNGY1JyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJ2U1ZjRmNScsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tdGFsa2Vycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnUSBQZWlmZmVyLCBAbG9uZ2hhaXJRJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vbG9uZ2hhaXJRJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGNoYXJsZXN0b24gc2hvZSB0aGlldmVzXG4gICdiZmQzODc5Ny04NDA0LTRiMzgtOGI4Mi0zNDFkYTI4YjFmODMnOiB7XG4gICAgc2hvcnRoYW5kOiAnQ0hTJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2ZmY2UwYScsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICcxZTkxY2MnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnMWU5MWNjJyxcbiAgICAgIGJhc2VzOiAnZmZjZTBhJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZmNmMmQwJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tdGhpZXZlcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnY2hkaHJybW5uJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vY2hkaHJybW5uJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGthbnNhcyBjaXR5IGJyZWF0aCBtaW50c1xuICAnYWRjNWIzOTQtOGY3Ni00MTZkLTljZTktODEzNzA2ODc3Yjg0Jzoge1xuICAgIHNob3J0aGFuZDogJ0tDQk0nLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnMTc4ZjU1JyxcbiAgICAgIG1vdW5kOiAnMDAzZjFmJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJzE3OGY1NScsXG4gICAgICBncmFzc091dGxpbmU6ICcxNzhmNTUnLFxuICAgICAgYmFzZXM6ICdmZjAwMTEnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1taW50cy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnbmFzaF9oaWdoJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vbmFzaF9oaWdoJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGJhbHRpbW9yZSBjcmFic1xuICAnOGQ4N2M0NjgtNjk5YS00N2E4LWI0MGQtY2ZiNzNhNTY2MGFkJzoge1xuICAgIHNob3J0aGFuZDogJ0JBTCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc1OTMwMzcnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnZjc2MzBjJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2Y3NjMwYycsXG4gICAgICBiYXNlczogJzU5MzAzNycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJ2Y3YjE4OScsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWNyYWJzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICc0YWRhbUF2ZW51ZScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tLzRkYW1BdmVudWUnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGE7XG5cbiIsImNvbnN0IHdlYXRoZXIgPSB7XG4gIDA6IHtcbiAgICBuYW1lOiAndm9pZCcsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDE6IHtcbiAgICBuYW1lOiAnc3VuIDInLFxuICAgIGljb246ICfimIAnLFxuICB9LFxuICAyOiB7XG4gICAgbmFtZTogJ292ZXJjYXN0JyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgMzoge1xuICAgIG5hbWU6ICdyYWlueScsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDQ6IHtcbiAgICBuYW1lOiAnc2FuZHN0b3JtJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNToge1xuICAgIG5hbWU6ICdzbm93eScsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDY6IHtcbiAgICBuYW1lOiAnYWNpZGljJyxcbiAgICBpY29uOiAnJyxcbiAgfSxcbiAgNzoge1xuICAgIG5hbWU6ICdzb2xhciBlY2xpcHNlJyxcbiAgICBpY29uOiAn8J+MkScsXG4gIH0sXG4gIDg6IHtcbiAgICBuYW1lOiAnZ2xpdHRlcicsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDk6IHtcbiAgICBuYW1lOiAnYmxvb2RkcmFpbicsXG4gICAgaWNvbjogJ/CfqbgnLFxuICB9LFxuICAxMDoge1xuICAgIG5hbWU6ICdwZWFudXRzJyxcbiAgICBpY29uOiAn8J+lnCcsXG4gIH0sXG4gIDExOiB7XG4gICAgbmFtZTogJ2xvdHMgb2YgYmlyZHMnLFxuICAgIGljb246ICfwn5CmJyxcbiAgfSxcbiAgMTI6IHtcbiAgICBuYW1lOiAnZmVlZGJhY2snLFxuICAgIGljb246ICfwn46kJyxcbiAgfSxcbiAgMTM6IHtcbiAgICBuYW1lOiAncmV2ZXJiJyxcbiAgICBpY29uOiAn8J+MiicsXG4gIH0sXG4gIDE0OiB7XG4gICAgbmFtZTogJ2JsYWNrIGhvbGUnLFxuICAgIGljb246ICfimqsnLFxuICB9LFxuICAxNToge1xuICAgIG5hbWU6ICdjb2ZmZWUnLFxuICAgIGljb246ICfimJUnLFxuICB9LFxuICAxNjoge1xuICAgIG5hbWU6ICdjb2ZmZWUgMicsXG4gICAgaWNvbjogJ/CfjbUnLFxuICB9LFxuICAxNzoge1xuICAgIG5hbWU6ICdjb2ZmZWUgM3MnLFxuICAgIGljb246ICcz77iP4oOjJyxcbiAgfSxcbiAgMTg6IHtcbiAgICBuYW1lOiAnZmxvb2RpbmcnLFxuICAgIGljb246ICfwn5qwJyxcbiAgfSxcbiAgMTk6IHtcbiAgICBuYW1lOiAnc2FsbW9uJyxcbiAgICBpY29uOiAn8J+QnycsXG4gIH0sXG4gIDIwOiB7XG4gICAgbmFtZTogJ2dsaXR0ZXInLFxuICAgIGljb246ICfinKgnLFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3ZWF0aGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidWlsZENvbW1lbnQgPSBmdW5jdGlvbiBidWlsZENvbW1lbnQoc2V0dGluZ3MsIGdyYW1tYXIpIHtcbiAgdmFyIGdhbWVFdmVudCA9IHNldHRpbmdzLmdhbWVFdmVudDtcbiAgdmFyIG1sdXN0YXJkID0gc2V0dGluZ3MubWx1c3RhcmQ7IC8vIGNoZWNrIGZvciBnYW1lIHN0YXR1c1xuXG4gIHN3aXRjaCAobWx1c3RhcmQuZ2FtZVN0YXR1cykge1xuICAgIGNhc2UgJ2JlZm9yZUZpcnN0UGl0Y2gnOlxuICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2dhbWVTdGFydCMnKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZmlyc3RIYWxmSW5uaW5nU3RhcnQnOlxuICAgICAgaWYgKGdhbWVFdmVudC5pbm5pbmcgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2lubmluZ09uZVN0YXJ0IycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2lubmluZ1N0YXJ0IycpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3NlY29uZEhhbGZJbm5pbmdTdGFydCc6XG4gICAgICByZXR1cm4gZ3JhbW1hci5mbGF0dGVuKCcjaW5uaW5nU3RhcnQjJyk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciBjb21tZW50ID0gJyc7IC8vIGNoZWNrIGZvciBvdXRzXG5cbiAgaWYgKG1sdXN0YXJkLm91dCkge1xuICAgIGlmIChtbHVzdGFyZC5nYW1lU3RhdHVzID09PSAnaGFsZklubmluZ0VuZCcpIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjbGFzdE91dE9mSW5uaW5nIycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI291dCMnKTtcbiAgICB9XG4gIH0gLy8gY2hlY2sgZm9yIHNjb3JlXG5cblxuICBpZiAobWx1c3RhcmQucnVuc1Njb3JlZCAhPT0gMCB8fCBtbHVzdGFyZC51bnJ1bnNTY29yZWQgIT09IDAgfHwgLy8gc2NvcmUgY2hhbmdlIGR1ZSB0byBzYWxtb24gc3RlYWxpbmcgcnVuc1xuICBtbHVzdGFyZC5zcGVjaWFsICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmtpbmQgPT09ICdzYWxtb24nICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmRldGFpbHMgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEuZGV0YWlscy5ydW5zU3RvbGVuLmxlbmd0aCB8fCAvLyBzY29yZSBjaGFuZ2UgZnJvbSBzdW4gMiBzbWlsaW5nXG4gIG1sdXN0YXJkLnNwZWNpYWwgJiYgbWx1c3RhcmQuc3BlY2lhbE1ldGEua2luZCA9PT0gJ3N1bjInIHx8IC8vIHNjb3JlIGNoYW5nZSBmcm9tIGJsYWNrIGhvbGUgc3dhbGxvd2luZ1xuICBtbHVzdGFyZC5zcGVjaWFsICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmtpbmQgPT09ICdibGFja0hvbGUnKSB7XG4gICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjc2NvcmVBZGRvbiMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNzY29yZSMnKTtcbiAgICB9XG4gIH0gLy8gY2hlY2sgaWYgYSBiYXR0ZXIganVzdCBzaG93ZWQgdXAgYXQgdGhlIHBsYXRlXG5cblxuICBpZiAobWx1c3RhcmQuYmF0dGVyVXAgJiYgZ2FtZUV2ZW50LmJhc2VydW5uZXJDb3VudCkge1xuICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjYmF0dGVyVXBSdW5uZXJzIycpO1xuICB9IC8vIHJldHVybiB0aGUgY29tbWVudCBpZiBpdCB3YXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRoZSBvcmlnaW5hbCB1cGRhdGUgaWYgaXRcbiAgLy8gZXhpc3RzLCBvdGhlcndpc2UgYW4gZW1wdHkgc3RyaW5nXG5cblxuICByZXR1cm4gY29tbWVudCB8fCBnYW1lRXZlbnQubGFzdFVwZGF0ZSB8fCAnJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBidWlsZENvbW1lbnQ6IGJ1aWxkQ29tbWVudFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxudmFyIHRyYWNlcnkgPSByZXF1aXJlKCd0cmFjZXJ5LWdyYW1tYXInKTtcblxudmFyIG1vZHMgPSByZXF1aXJlKCcuL3RyYWNlcnktbW9kcycpO1xuXG52YXIgcXVpcHMgPSByZXF1aXJlKCcuL3F1aXBzLmpzb24nKTtcblxudmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHNldHRpbmdzKSB7XG4gIHZhciBzZWVkID0gc2V0dGluZ3Muc2VlZDtcbiAgdmFyIGdhbWVFdmVudCA9IHNldHRpbmdzLmdhbWVFdmVudDtcbiAgdmFyIG1sdXN0YXJkID0gc2V0dGluZ3MubWx1c3RhcmQ7XG4gIHZhciBvdmVycmlkZXMgPSBzZXR0aW5ncy5vdmVycmlkZXM7XG4gIHZhciBsZXZlbCA9IHNldHRpbmdzLmxldmVsO1xuXG4gIGlmIChzZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICB0cmFjZXJ5LnNldFJhbmRvbShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VlZDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBncmFtbWFyID0gdHJhY2VyeS5jcmVhdGVHcmFtbWFyKHt9KTsgLy8gcG9wdWxhdGUgZGF0YSBmcm9tIGdhbWVFdmVudFxuXG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihxdWlwcy5kYXRhKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBfZmllbGQzID0gX3N0ZXAudmFsdWU7XG4gICAgICB2YXIgZGF0YSA9IGdhbWVFdmVudFtfZmllbGQzXTtcblxuICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBzb21lIGRhdGEgbmVlZHMgbWFzc2FnaW5nXG4gICAgICAgIHN3aXRjaCAoX2ZpZWxkMykge1xuICAgICAgICAgIGNhc2UgJ2lubmluZyc6XG4gICAgICAgICAgICBkYXRhID0gKGRhdGEgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd0b3BPZklubmluZyc6XG4gICAgICAgICAgICBkYXRhID0gZGF0YSA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2hhbGZJbm5pbmdPdXRzJzpcbiAgICAgICAgICBjYXNlICdob21lU2NvcmUnOlxuICAgICAgICAgIGNhc2UgJ2F3YXlTY29yZSc6XG4gICAgICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQzLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZDMsICcnKTtcbiAgICAgIH1cbiAgICB9IC8vIGN1cnJlbnQgcGl0Y2hlclxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIHZhciBjUGl0Y2hlciA9IGdhbWVFdmVudC50b3BPZklubmluZyA/IGdhbWVFdmVudC5ob21lUGl0Y2hlck5hbWUgOiBnYW1lRXZlbnQuYXdheVBpdGNoZXJOYW1lO1xuICBncmFtbWFyLnB1c2hSdWxlcygnY1BpdGNoZXInLCBjUGl0Y2hlcik7IC8vIGN1cnJlbnQgYmF0dGVyIChjYW4gYmUgYW4gZW1wdHkgc3RyaW5nIGlmIG5vYm9keSBiYXR0aW5nKVxuXG4gIHZhciBjQmF0dGVyID0gZ2FtZUV2ZW50LmhvbWVCYXR0ZXJOYW1lIHx8IGdhbWVFdmVudC5hd2F5QmF0dGVyTmFtZTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2NCYXR0ZXInLCBjQmF0dGVyKTsgLy8gcGl0Y2hpbmcgdGVhbSBuaWNrbmFtZVxuXG4gIHZhciBwTmljayA9IGdhbWVFdmVudC50b3BPZklubmluZyA/ICcjaE5pY2sjJyA6ICcjYU5pY2sjJztcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3BOaWNrJywgcE5pY2spOyAvLyBiYXR0aW5nIHRlYW0gbmlja25hbWVcblxuICB2YXIgYk5pY2sgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyAnI2FOaWNrIycgOiAnI2hOaWNrIyc7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdiTmljaycsIGJOaWNrKTsgLy8gbGVhZGluZyAmIHRyYWlsaW5nIHRlYW0gbmlja25hbWVzIGFuZCBzY29yZXNcblxuICB2YXIgbFRlYW07XG4gIHZhciB0VGVhbTtcbiAgdmFyIGxTY29yZTtcbiAgdmFyIHRTY29yZTtcblxuICBpZiAoZ2FtZUV2ZW50LmF3YXlTY29yZSA+IGdhbWVFdmVudC5ob21lU2NvcmUpIHtcbiAgICBsVGVhbSA9ICcjYU5pY2sjJztcbiAgICB0VGVhbSA9ICcjaE5pY2sjJztcbiAgICBsU2NvcmUgPSAnI2FTY29yZSMnO1xuICAgIHRTY29yZSA9ICcjaFNjb3JlIyc7XG4gIH0gZWxzZSB7XG4gICAgbFRlYW0gPSAnI2hOaWNrIyc7XG4gICAgdFRlYW0gPSAnI2FOaWNrIyc7XG4gICAgbFNjb3JlID0gJyNoU2NvcmUjJztcbiAgICB0U2NvcmUgPSAnI2FTY29yZSMnO1xuICB9XG5cbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2xUZWFtJywgbFRlYW0pO1xuICBncmFtbWFyLnB1c2hSdWxlcygndFRlYW0nLCB0VGVhbSk7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdsU2NvcmUnLCBsU2NvcmUpO1xuICBncmFtbWFyLnB1c2hSdWxlcygndFNjb3JlJywgdFNjb3JlKTsgLy8gc2V0IGJhc2UgcnVubmVyc1xuXG4gIGlmIChnYW1lRXZlbnQuYmFzZXJ1bm5lckNvdW50ID49IDMpIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcygncnVubmVycycsICcjYmFzZXNMb2FkZWQjJyk7XG4gIH0gZWxzZSBpZiAoZ2FtZUV2ZW50LmJhc2VydW5uZXJDb3VudCA+IDApIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcygncnVubmVycycsICcjcnVubmVyc09uQmFzZSMnKTtcbiAgfVxuXG4gIHZhciBiYXNlcyA9ICcnO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMobWx1c3RhcmQuYmFzZVJ1bm5lcnMpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgYmFzZSA9IF9PYmplY3Qka2V5c1tfaV07XG5cbiAgICBpZiAobWx1c3RhcmQuYmFzZVJ1bm5lcnNbYmFzZV0ucGxheWVySWQpIHtcbiAgICAgIGJhc2VzICs9IFwiXCIuY29uY2F0KGJhc2UsIFwiIFwiKTtcbiAgICB9XG4gIH1cblxuICBncmFtbWFyLnB1c2hSdWxlcygnYmFzZXNPY2MnLCBiYXNlcy50cmltKCkpOyAvLyBidWlsZCBxdWlwcyBzaG9ydGN1dHNcblxuICBmb3IgKHZhciBmaWVsZCBpbiBxdWlwcy5zaG9ydGN1dHMpIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhmaWVsZCwgcXVpcHMuc2hvcnRjdXRzW2ZpZWxkXSk7XG4gIH0gLy8gYnVpbGQgcXVpcHMgZ3JhbW1hclxuXG5cbiAgZm9yICh2YXIgX2ZpZWxkIGluIHF1aXBzW2xldmVsXSkge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZCwgcXVpcHNbbGV2ZWxdW19maWVsZF0pO1xuICB9IC8vIGRvIHF1aXAgb3ZlcnJpZGVzXG5cblxuICBmb3IgKHZhciBfZmllbGQyIGluIG92ZXJyaWRlcykge1xuICAgIGdyYW1tYXIucHVzaFJ1bGVzKF9maWVsZDIsIG92ZXJyaWRlc1tfZmllbGQyXSk7XG4gIH0gLy8gYWRkIG1vZHNcblxuXG4gIGdyYW1tYXIuYWRkTW9kaWZpZXJzKHRyYWNlcnkuYmFzZUVuZ01vZGlmaWVycyk7XG4gIGdyYW1tYXIuYWRkTW9kaWZpZXJzKG1vZHMpO1xuICByZXR1cm4gZ3JhbW1hcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0OiBpbml0XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWx1c3RhcmQgPSByZXF1aXJlKCdtbHVzdGFyZCcpO1xuXG52YXIgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpO1xuXG52YXIgY29tbWVudGFyeSA9IHJlcXVpcmUoJy4vY29tbWVudGFyeScpO1xuLypcbiAqIEBzZXR0aW5ncyBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzOlxuICogICAtIGdhbWVFdmVudDogdGhlIGdhbWUgZXZlbnQgb2JqZWN0IChmcm9tIHRoZSBzdHJlYW0gb3IgY2hyb25pY2xlcilcbiAqICAgLSBtbHVzdGFyZCAob3B0aW9uYWwpOiBtbHVzdGFyZCBkYXRhIGZvciB0aGUgZ2FtZUV2ZW50XG4gKiAgIC0gc2VlZCAob3B0aW9uYWwpOiBhIHNlZWQsIGZvciBkZXRlcm1pbmlzdGljIGNvbW1lbnQgZ2VuZXJhdGlvblxuICogICAtIGxldmVsIChvcHRpb25hbCwgZGVmYXVsdHMgdG8gJ21pbmltYWwnKTogdGhlIGNvbW1lbnRhcnkgbGV2ZWwsIG9uZSBvZlxuICogICAgIC0gbWluaW1hbDogYWRkcyBhIGZldyBjb21tZW50cyB0byB1cGRhdGUgb24gZ2FtZSBzdGF0dXMgYXQga2V5IGNvbW1lbnRzXG4gKiAgIC0gb3ZlcnJpZGVzIChvcHRpb25hbCk6IG9iamVjdCB3aXRoIHF1aXAgb3ZlcnJpZGVzXG4gKi9cblxuXG52YXIgZ2V0Q29tbWVudCA9IGZ1bmN0aW9uIGdldENvbW1lbnQoc2V0dGluZ3MpIHtcbiAgaWYgKCFzZXR0aW5ncy5nYW1lRXZlbnQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBzZXR0aW5ncy5tbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkIHx8IG1sdXN0YXJkLmFuYWx5emVHYW1lRXZlbnQoc2V0dGluZ3MuZ2FtZUV2ZW50KTtcbiAgc2V0dGluZ3MubGV2ZWwgPSBzZXR0aW5ncy5sZXZlbCB8fCAnbWluaW1hbCc7XG4gIHNldHRpbmdzLm92ZXJyaWRlcyA9IHNldHRpbmdzLm92ZXJyaWRlcyB8fCB7fTtcbiAgdmFyIGdyID0gZ3JhbW1hci5pbml0KHNldHRpbmdzKTtcblxuICBpZiAoIWdyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIGNvbW1lbnRhcnkuYnVpbGRDb21tZW50KHNldHRpbmdzLCBncik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29tbWVudDogZ2V0Q29tbWVudFxufTsiLCJtb2R1bGUuZXhwb3J0cz17XCJkYXRhXCI6W1wiaW5uaW5nXCIsXCJ0b3BPZklubmluZ1wiLFwiaGFsZklubmluZ091dHNcIixcImhvbWVUZWFtTmFtZVwiLFwiYXdheVRlYW1OYW1lXCIsXCJob21lVGVhbU5pY2tuYW1lXCIsXCJhd2F5VGVhbU5pY2tuYW1lXCIsXCJob21lU2NvcmVcIixcImF3YXlTY29yZVwiLFwiaG9tZU9kZHNcIixcImF3YXlPZGRzXCIsXCJob21lUGl0Y2hlck5hbWVcIixcImF3YXlQaXRjaGVyTmFtZVwiLFwibGFzdFVwZGF0ZVwiLFwic2NvcmVVcGRhdGVcIl0sXCJtaW5pbWFsXCI6e1wibWF0Y2h1cFwiOltcIiNoTmljayMgdnMgI2FOaWNrI1wiLFwiI2FOaWNrIyBhdCAjaE5pY2sjXCJdLFwidG9wT3JCb3RcIjpcIiN0b3BPZklubmluZyNcIixcImlubmluZ0Z1bGxcIjpcIiN0b3BPckJvdCMgb2YgI2lubmluZyNcIixcImdhbWVTdGFydFwiOlwiI21hdGNodXAjLiAjcGl0Y2hlcnMjLiAjb3JpZ2luYWwjXCIsXCJzY29yZVwiOlwiI29yaWdpbmFsIyBJdCdzICNsVGVhbS50aGUjICNsU2NvcmUjIGFuZCAjdFRlYW0udGhlIyAjdFNjb3JlIy5cIixcInNjb3JlQWRkb25cIjpcIiBJdCdzICNsVGVhbS50aGUjICNsU2NvcmUjIGFuZCAjdFRlYW0udGhlIyAjdFNjb3JlIy5cIixcImlubmluZ1N0YXJ0XCI6XCIjb3JpZ2luYWwjICNjUGl0Y2hlciMgcGl0Y2hpbmcgZm9yICNwTmljay50aGUjLlwiLFwiaW5uaW5nT25lU3RhcnRcIjpcIiNvcmlnaW5hbCNcIixcInBpdGNoZXJzXCI6W1wiI2hQaXRjaGVyIyBwaXRjaGluZyBmb3IgI2hOaWNrLnRoZSMsICNhUGl0Y2hlciMgZm9yICNhTmljay50aGUjXCIsXCJPdXIgcGl0Y2hlcnMgYXJlICNoUGl0Y2hlciMgZm9yICNoTmljay50aGUjLCBhbmQgI2FQaXRjaGVyIyBmb3IgI2FOaWNrLnRoZSNcIl0sXCJvdXRcIjpcIiNvcmlnaW5hbCMgI2lubmluZ0Z1bGwuY2FwaXRhbGl6ZSMsICNvdXRzIy5cIixcIm91dHNcIjpcIiNoYWxmSW5uaW5nT3V0cy5vdXRzI1wiLFwibGFzdE91dE9mSW5uaW5nXCI6XCIjb3JpZ2luYWwjXCIsXCJiYXR0ZXJVcFJ1bm5lcnNcIjpcIiNvcmlnaW5hbCMgI3J1bm5lcnMucnVubmVyUGx1cmFsaXplI1wiLFwicnVubmVyc09uQmFzZVwiOlwiUnVubmVyIG9uICNiYXNlc09jYy5hbmQjLlwiLFwiYmFzZXNMb2FkZWRcIjpcIkJhc2VzIGFyZSBsb2FkZWQhXCJ9LFwic2hvcnRjdXRzXCI6e1wiaFBpdGNoZXJcIjpcIiNob21lUGl0Y2hlck5hbWUjXCIsXCJhUGl0Y2hlclwiOlwiI2F3YXlQaXRjaGVyTmFtZSNcIixcImhOaWNrXCI6XCIjaG9tZVRlYW1OaWNrbmFtZSNcIixcImFOaWNrXCI6XCIjYXdheVRlYW1OaWNrbmFtZSNcIixcImhTY29yZVwiOlwiI2hvbWVTY29yZSNcIixcImFTY29yZVwiOlwiI2F3YXlTY29yZSNcIixcIm9yaWdpbmFsXCI6XCIjbGFzdFVwZGF0ZSMjc2NvcmVVcGRhdGUuc3BhY2VkI1wifX0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRoZTogZnVuY3Rpb24gdGhlKHMpIHtcbiAgICByZXR1cm4gXCJ0aGUgXCIuY29uY2F0KHMpO1xuICB9LFxuICAvLyBjb3VudHMgdGhlICMgb2Ygb3V0cyBhbmQgcGx1cmFsaXplcyBhY2NvcmRpbmdseVxuICBvdXRzOiBmdW5jdGlvbiBvdXRzKHMpIHtcbiAgICBpZiAocyA9PT0gJzEnKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocywgXCIgb3V0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocywgXCIgb3V0c1wiKTtcbiAgICB9XG4gIH0sXG4gIC8vIG94Zm9yZCBjb21tYXNcbiAgYW5kOiBmdW5jdGlvbiBhbmQocykge1xuICAgIHJldHVybiBzLnNwbGl0KCcgJykuam9pbignLCAnKS5yZXBsYWNlKC8sIChbXixdKikkLywgJyBhbmQgJDEnKTtcbiAgfSxcbiAgLy8gZm9yIHBsdXJhbGl6aW5nIHJ1bm5lcihzKSBvbiBmaXJzdFssIHNlY29uZCBhbmQgdGhpcmRdXG4gIHJ1bm5lclBsdXJhbGl6ZTogZnVuY3Rpb24gcnVubmVyUGx1cmFsaXplKHMpIHtcbiAgICBpZiAocy5pbmRleE9mKCcsJykgPj0gMCB8fCBzLmluZGV4T2YoJ2FuZCcpID49IDApIHtcbiAgICAgIHJldHVybiBzLnJlcGxhY2UoJ1J1bm5lcicsICdSdW5uZXJzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgfSxcbiAgLy8gYWRkcyBhIHNwYWNlIGJlZm9yZSB0aGUgd29yZFxuICBzcGFjZWQ6IGZ1bmN0aW9uIHNwYWNlZChzKSB7XG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBcIiBcIi5jb25jYXQocyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIHBsYXllcnMgPSByZXF1aXJlKCcuLi9saWIvcGxheWVycycpLnBsYXllcnM7XG5cbnZhciBCQVNFUyA9IFsnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCddO1xuXG52YXIgZ2V0QmFzZXJ1bm5lck5hbWUgPSBmdW5jdGlvbiBnZXRCYXNlcnVubmVyTmFtZShldmVudERhdGEsIGkpIHtcbiAgdmFyIF9ldmVudERhdGEkYmFzZVJ1bm5lcjtcblxuICB2YXIgbmFtZSA9ICgoX2V2ZW50RGF0YSRiYXNlUnVubmVyID0gZXZlbnREYXRhLmJhc2VSdW5uZXJOYW1lcykgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRiYXNlUnVubmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGJhc2VSdW5uZXJbaV0pIHx8ICcnOyAvLyB0cnkgbG9va2luZyB0aGUgbmFtZSB1cCBieSB0aGUgaWRcblxuICBpZiAoIW5hbWUpIHtcbiAgICB2YXIgcGxheWVyID0gcGxheWVycy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwLnBsYXllcl9pZCA9PT0gZXZlbnREYXRhLmJhc2VSdW5uZXJzW2ldO1xuICAgIH0pWzBdO1xuXG4gICAgaWYgKHBsYXllcikge1xuICAgICAgbmFtZSA9IHBsYXllci5wbGF5ZXJfbmFtZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn07XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgLy9jb25zdCB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcbiAgaWYgKGV2ZW50RGF0YS5iYXNlcnVubmVyQ291bnQpIHtcbiAgICAvLyBpIHJlcHJlc2VudHMgdGhlIG9yZGVyIG9mIGJhc2VydW5uZXJzXG4gICAgLy8gYmFzZXNPY2N1cGllZFtpXSBpcyB0aGUgYmFzZSB0aGV5IGFyZSBvbiwgMC1pbmRleGVkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudERhdGEuYmFzZXNPY2N1cGllZC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGJhc2UgPSBldmVudERhdGEuYmFzZXNPY2N1cGllZFtpXTtcbiAgICAgIGFuYWx5c2lzLmJhc2VSdW5uZXJzW0JBU0VTW2Jhc2VdXSA9IHtcbiAgICAgICAgcGxheWVyTmFtZTogZ2V0QmFzZXJ1bm5lck5hbWUoZXZlbnREYXRhLCBpKSxcbiAgICAgICAgcGxheWVySWQ6IGV2ZW50RGF0YS5iYXNlUnVubmVyc1tpXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkaG9tZVRlYW1OaSwgX2V2ZW50RGF0YSRhd2F5VGVhbU5pO1xuXG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcbiAgdmFyIGhvbWUgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkaG9tZVRlYW1OaSA9IGV2ZW50RGF0YS5ob21lVGVhbU5pY2tuYW1lKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGhvbWVUZWFtTmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkaG9tZVRlYW1OaS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbiAgdmFyIGhvbWVTY29yZSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZVNjb3JlKSB8fCAwO1xuICB2YXIgYXdheSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRhd2F5VGVhbU5pID0gZXZlbnREYXRhLmF3YXlUZWFtTmlja25hbWUpID09PSBudWxsIHx8IF9ldmVudERhdGEkYXdheVRlYW1OaSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRhd2F5VGVhbU5pLnRvTG93ZXJDYXNlKCkpIHx8ICcnO1xuICB2YXIgYXdheVNjb3JlID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5U2NvcmUpIHx8IDA7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdwbGF5IGJhbGwnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdiZWZvcmVGaXJzdFBpdGNoJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigndG9wIG9mJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnZmlyc3RIYWxmSW5uaW5nU3RhcnQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdib3R0b20gb2YnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdzZWNvbmRIYWxmSW5uaW5nU3RhcnQnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdnYW1lIG92ZXInKSA+PSAwIHx8IHVwZGF0ZS5pbmRleE9mKFwiXCIuY29uY2F0KGhvbWUsIFwiIFwiKS5jb25jYXQoaG9tZVNjb3JlLCBcIiwgXCIpLmNvbmNhdChhd2F5LCBcIiBcIikuY29uY2F0KGF3YXlTY29yZSkpID49IDAgfHwgdXBkYXRlLmluZGV4T2YoXCJcIi5jb25jYXQoYXdheSwgXCIgXCIpLmNvbmNhdChhd2F5U2NvcmUsIFwiLCBcIikuY29uY2F0KGhvbWUsIFwiIFwiKS5jb25jYXQoaG9tZVNjb3JlKSkgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnZ2FtZUVuZCc7XG4gIH1cblxuICBpZiAoYW5hbHlzaXMuZ2FtZVN0YXR1cykge1xuICAgIHJldHVybiBhbmFseXNpcztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVja0hpdFJiaVByZVMxMiA9IGZ1bmN0aW9uIGNoZWNrSGl0UmJpUHJlUzEyKGFuYWx5c2lzLCB1cGRhdGUpIHtcbiAgLy8gZnJvbSBzb21lIG5vbi1leGhhdXN0aXZlIHJlc2VhcmNoLCBpIHRoaW5rIHRoZXJlIHdlcmVuJ3QgYW55IGdyYW5kIHNsYW1zXG4gIC8vIHByZS1zMTIgdGhhdCB3ZXJlIG5vdCA0IHJ1bnNcbiAgaWYgKGFuYWx5c2lzLmhpdE1ldGEua2luZCA9PT0gJ2dyYW5kU2xhbScpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gNDtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgYSBzaW5nbGUvZG91YmxlL3RyaXBsZSB3YXMgaGl0ICYgeCBydW5zIHdlcmUgc2NvcmVkLCBpdCBzaG93cyB1cFxuICAvLyBhdCB0aGUgZW5kIG9mIHRoZSB1cGRhdGUgYXMgXCIuLi4hIHggc2NvcmVzXCJcblxuXG4gIHZhciBydW5zID0gdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvISAvLCAvIHNjb3Jlcy8pIHx8IDA7XG5cbiAgaWYgKHJ1bnMpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gcnVucztcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgYSBzb2xvIGhvbWUgcnVuIHdhcyBoaXQsIHVwZGF0ZSBjb250YWlucyB0aGUgdGV4dCBcInNvbG8gaG9tZSBydW5cIlxuXG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzb2xvIGhvbWUgcnVuJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiBhIG11bHRpLXJ1biBob21lIHJ1biB3YXMgaGl0LCB1cGRhdGUgY29udGFpbnMgdGhlIHRleHQgXCJ4LXJ1biBob21lXG4gIC8vIHJ1blwiXG5cblxuICBydW5zID0gdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvLXJ1biBob21lIHJ1bi8pIHx8IDA7XG5cbiAgaWYgKHJ1bnMpIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gcnVucztcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignaGl0cyBhIHNpbmdsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnc2luZ2xlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaGl0cyBhIGRvdWJsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnZG91YmxlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaGl0cyBhIHRyaXBsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAndHJpcGxlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaG9tZSBydW4nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ2hvbWVSdW4nO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdncmFuZCBzbGFtJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdncmFuZFNsYW0nO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLmhpdE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLmhpdCA9IHRydWU7IC8vIGNoZWNrIGlmIGhvbWUgcnVuIC8gZ3JhbmQgc2xhbSBsYW5kZWQgaW4gYmlnIGJ1Y2tldFxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdiYWxsIGxhbmRzIGluIGEgYmlnIGJ1Y2tldCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLmhpdE1ldGEuYmlnQnVja2V0ID0gdHJ1ZTtcbiAgICB9IC8vZnJvbSBzMTIgb253YXJkLCBzY29yZXMgb24gdGhlIHBsYXkgYXJlIGluIHRoZSBzY29yZVVwZGF0ZSBmaWVsZFxuICAgIC8vY29uc3Qgc2NvcmVVcGRhdGUgPSBldmVudERhdGE/LnNjb3JlVXBkYXRlIHx8ICcnO1xuICAgIC8vaWYgKHNjb3JlVXBkYXRlKSB7XG4gICAgLy9hbmFseXNpcy5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIoc2NvcmVVcGRhdGUsIG51bGwsIG51bGwpIHx8IDA7XG4gICAgLy8gaWYgdGhlcmUncyBubyBzY29yZVVwZGF0ZSwgZGVkdWNlIHRoZSBzY29yZSBmcm9tIHRoZSB1cGRhdGVcbiAgICAvLyB0aGlzIGlzIHRoZSBjYXNlIGZvciBnYW1lcyBiZXR3ZWVuIHMyICYgczExXG5cblxuICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpKSB7XG4gICAgICBjaGVja0hpdFJiaVByZVMxMihhbmFseXNpcywgdXBkYXRlKTtcbiAgICB9IC8vIHNjb3JlIHVwZGF0ZXMgZnJvbSBzMTIgb253YXJkIHJlZ2lzdGVyZWQgaW4gc3JjL21pc2MuanNcblxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2tNYXhpbXVtQmxhc2ViYWxsID0gZnVuY3Rpb24gY2hlY2tNYXhpbXVtQmxhc2ViYWxsKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIGJhbGxzLCBiYXNlcywgb3V0cywgc3RyaWtlcztcblxuICBpZiAoZXZlbnREYXRhLnRvcE9mSW5uaW5nKSB7XG4gICAgLy8gYXdheSBpcyBiYXR0aW5nXG4gICAgYmFsbHMgPSBldmVudERhdGEuYXdheUJhbGxzO1xuICAgIGJhc2VzID0gZXZlbnREYXRhLmF3YXlCYXNlcztcbiAgICBvdXRzID0gZXZlbnREYXRhLmF3YXlPdXRzO1xuICAgIHN0cmlrZXMgPSBldmVudERhdGEuYXdheVN0cmlrZXM7XG4gIH0gZWxzZSB7XG4gICAgLy8gaG9tZSBpcyBiYXR0aW5nXG4gICAgYmFsbHMgPSBldmVudERhdGEuaG9tZUJhbGxzO1xuICAgIGJhc2VzID0gZXZlbnREYXRhLmhvbWVCYXNlcztcbiAgICBvdXRzID0gZXZlbnREYXRhLmhvbWVPdXRzO1xuICAgIHN0cmlrZXMgPSBldmVudERhdGEuaG9tZVN0cmlrZXM7XG4gIH1cblxuICBpZiAoZXZlbnREYXRhLmhhbGZJbm5pbmdPdXRzID09PSBvdXRzIC0gMSAmJiBldmVudERhdGEuYXRCYXRCYWxscyA9PT0gYmFsbHMgLSAxICYmIGV2ZW50RGF0YS5hdEJhdFN0cmlrZXMgPT09IHN0cmlrZXMgLSAxICYmIGV2ZW50RGF0YS5iYXNlcnVubmVyQ291bnQgPT09IGJhc2VzIC0gMSkge1xuICAgIGFuYWx5c2lzLm1heGltdW1CbGFzZWJhbGwgPSB0cnVlO1xuICB9XG59O1xuXG52YXIgY2hlY2tTY29yZVVwZGF0ZSA9IGZ1bmN0aW9uIGNoZWNrU2NvcmVVcGRhdGUoYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgX2V2ZW50RGF0YSRzY29yZVVwZGF0O1xuXG4gIHZhciBzY29yZVVwZGF0ZSA9IGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJHNjb3JlVXBkYXQgPSBldmVudERhdGEuc2NvcmVVcGRhdGUpID09PSBudWxsIHx8IF9ldmVudERhdGEkc2NvcmVVcGRhdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRzY29yZVVwZGF0LnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHNjb3JlVXBkYXRlKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCAvIHJ1bnM/IHNjb3JlLyk7XG4gICAgYW5hbHlzaXMudW5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIoc2NvcmVVcGRhdGUsIG51bGwsIC8gdW5ydW5zPyBzY29yZS8pO1xuICB9XG59O1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcbiAgY2hlY2tTY29yZVVwZGF0ZShhbmFseXNpcywgZXZlbnREYXRhKTtcbiAgY2hlY2tNYXhpbXVtQmxhc2ViYWxsKGFuYWx5c2lzLCBldmVudERhdGEpOyAvLyBjaGVjayBmb3Igd2hldGhlciBhIGJhdHRlciBqdXN0IHNob3dlZCB1cCB0byBiYXRcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2JhdHRpbmcgZm9yJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmJhdHRlclVwID0gdHJ1ZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdhbWVTdGF0dXMgPSByZXF1aXJlKCcuL2dhbWUtc3RhdHVzJyk7XG5cbnZhciBvdXRzID0gcmVxdWlyZSgnLi9vdXRzJyk7XG5cbnZhciBoaXRzID0gcmVxdWlyZSgnLi9oaXRzJyk7XG5cbnZhciBzdGVhbHMgPSByZXF1aXJlKCcuL3N0ZWFscycpO1xuXG52YXIgd2Fsa3MgPSByZXF1aXJlKCcuL3dhbGtzJyk7XG5cbnZhciBzcGVjaWFsID0gcmVxdWlyZSgnLi9zcGVjaWFsJyk7XG5cbnZhciBtaXNjID0gcmVxdWlyZSgnLi9taXNjJyk7XG5cbnZhciBiYXNlUnVubmVycyA9IHJlcXVpcmUoJy4vYmFzZS1ydW5uZXJzJyk7XG4vKlxuICogc2V0cyBhbGwga25vd24gKGFrYSBpbXBsZW1lbnRlZCkgYW5hbHlzaXMgcmVzdWx0cyB0byB0aGVpciBkZWZhdWxzXG4gKiByZXR1cm4gYW4gb2JqZWN0IHdpdGggdGhlIHByb3BzOlxuICpcbiAqIGlkOiBzdHJpbmcgfHwgdW5kZWZpbmVkXG4gKiAgIC0gdGhlIGdhbWUgZXZlbnQgSURcbiAqXG4gKiBydW5zU2NvcmVkOiBudW1iZXJcbiAqICAgLSBob3cgbWFueSBydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5XG4gKlxuICogdW5ydW5zU2NvcmVkOiBudW1iZXJcbiAqICAgLSBob3cgbWFueSB1bnJ1bnMgd2VyZSBzY29yZWQgb24gdGhlIHBsYXlcbiAqXG4gKiBiYXR0ZXJVcDogYm9vbGVhblxuICogICAtIHdoZXRoZXIgYSBiYXR0ZXIganVzdCBzaG93ZWQgdXAgdG8gYmF0XG4gKlxuICogZ2FtZVN0YXR1czogbnVsbCB8fCBzdHJpbmdcbiAqICAgLSB3aWxsIGJlIG51bGwgb3Igb25lIG9mOlxuICogICAtIGJlZm9yZUZpcnN0UGl0Y2gsIHdoZW4gdGhlIGZpcnN0IHBpdGNoIGhhc24ndCBiZWVuIHRocm93biB5ZXRcbiAqICAgLSBmaXJzdEhhbGZJbm5pbmdTdGFydCwgd2hlbiB0aGUgZmlyc3QgaGFsZiBvZiBhbiBpbm5pbmcgaXMgc3RhcnRpbmdcbiAqICAgLSBzZWNvbmRIYWxmSW5uaW5nU3RhcnQsIHdoZW4gdGhlIHNlY29uZCBoYWxmIG9mIGFuIGlubmluZyBpcyBzdGFydGluZ1xuICogICAtIGhhbGZJbm5pbmdFbmQsIHdoZW4gYW55IGhhbGYgb2YgYW4gaW5uaW5nIGlzIGVuZGluZyBvbiB0aGUgcGxheVxuICogICAtIGdhbWVFbmQsIHdoZW4gdGhlIGdhbWUgaGFzIGVuZGVkXG4gKiAgIC0gaW5uaW5nUmV3aW5kLCB3aGVuIHRoZSBzYWxtb24gc3dpbSB1cHN0cmVhbVxuICpcbiAqIG91dDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhbiBvdXQgb24gdGhlIHBsYXlcbiAqIG91dE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0ga2luZDogbnVsbCB8fCBzdHJpbmdcbiAqICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgIC0gZmx5XG4gKiAgICAgLSBncm91bmRcbiAqICAgICAtIHN0cmlrZVxuICogICAgIC0gY2F1Z2h0U3RlYWxpbmdcbiAqICAgICAtIHVuc3BlY2lmaWVkIChhcyB5b3Ugc29tZXRpbWVzIHNlZSB3aXRoIHNhY3JpZmljZSBvdXRzKVxuICogICAtIHNhY3JpZmljZTogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoZSBvdXQgd2FzIGEgc2FjcmlmaWNlXG4gKiAgIC0gc2FjcmlmaWNlTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gKiAgICAgLSBraW5kOiBzdHJpbmcgfHwgbnVsbFxuICogICAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAgIC0gYWR2YW5jZVxuICogICAgICAgLSBzY29yZVxuICogICAtIGZyZWVSZWZpbGw6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiBiYXR0ZXIgdXNlZCB0aGVpciBmcmVlIHJlZmlsbCBvbiB0aGUgcGxheVxuICpcbiAqIGhpdDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhIGhpdCBvbiB0aGUgcGxheVxuICogaGl0TWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBraW5kOiBudWxsIHx8IHN0cmluZ1xuICogICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgLSBzaW5nbGVcbiAqICAgICAtIGRvdWJsZVxuICogICAgIC0gdHJpcGxlXG4gKiAgICAgLSBob21lUnVuXG4gKiAgICAgLSBncmFuZFNsYW1cbiAqICAgLSBiaWdCdWNrZXQ6IGJvb2xlYW5cbiAqICAgICAtIHdoZXRoZXIgYSBCaWcgQnVja2V0IHdhcyBhY3RpdmF0ZWQgb24gdGhlIHBsYXlcbiAqXG4gKiBzdGVhbDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhbiBhdHRlbXB0ZWQgc3RlYWwgb24gdGhlIHBsYXlcbiAqIHN0ZWFsTWV0YTogb2JqZWN0LCB3aXRoIHRoZSBwcm9wczpcbiAqICAgLSBzdWNjZXNzOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gdGhpZWYgbm90IGNhdWdodCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiAgIC0gYmFzZVN0b2xlbjogbnVsbCB8fCBudW1iZXJcbiAqICAgICAtIHRoZSBiYXNlIHdoaWNoIHdhcyBzdG9sZW4gKDAtaW5kZXhlZClcbiAqXG4gKiB3YWxrOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIGlzIGEgd2FsayBvbiB0aGUgcGxheVxuICogd2Fsa01ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0gbWluZFRyaWNrOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gdGhlIHBpdGNoZXMgdXNlZCBhIG1pbmQgdHJpY2sgdG8gdHVybiB0aGUgd2FsayBpbnRvIGFcbiAqICAgICAgIHN0cmlrZW91dFxuICpcbiAqIHNwZWNpYWw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgd2FzIGEgc3BlY2lhbCBldmVudCBvbiB0aGUgcGxheVxuICogc3BlY2lhbE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0ga2luZDogbnVsbCB8fCBzdHJpbmdcbiAqICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgIC0gYmxvb2RyYWluXG4gKiAgICAgLSBpc1BhcnR5aW5nXG4gKiAgICAgLSByZXZlcmJcbiAqICAgICAtIGJpcmRzQ2lyY2xlXG4gKiAgICAgLSBiaXJkc1BlY2tlZFxuICogICAgIC0ganVzdEJpcmRzXG4gKiAgICAgLSBhbGxlcmdpY1JlYWN0aW9uXG4gKiAgICAgLSBpbmNpbmVyYXRlZFxuICogICAgIC0gYmVjYW1lTWFnbWF0aWNcbiAqICAgICAtIGZlZWRiYWNrXG4gKiAgICAgLSBlbGVjdHJpY2l0eVxuICogICAgIC0gdW5zdGFibGVcbiAqICAgICAtIGZsaWNrZXJpbmdcbiAqICAgICAtIGNvbnN1bWVyc0F0dGFja1xuICogICAgIC0gc2FsbW9uXG4gKiAgIC0gZGV0YWlsczogb2JqZWN0LCB3aXRoIHByb3BzIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiBldmVudFxuICpcbiAqIGJhc2VSdW5uZXJzOiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzLCByZXByZXNlbnRpbmcgYmFzZXNcbiAqICAgLSBmaXJzdFxuICogICAtIHNlY29uZFxuICogICAtIHRoaXJkXG4gKiAgIC0gZm91cnRoXG4gKiAgIC0gaWYgdGhlcmUgaXMgYSBiYXNlcnVubmVyIG9uIHRoZSBnaXZlbiBiYXNlLCB0aGUgdmFsdWUgZm9yIHRoYXQgYmFzZVxuICogICAgIHdpbGwgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wczpcbiAqICAgICAtIHBsYXllck5hbWVcbiAqICAgICAtIHBsYXllcklkXG4gKlxuICogbWF4aW11bUJsYXNlYmFsbDogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB3ZSdyZSBhdCBNQVhJTVVNIEJMQVNFQkFMTFxuICovXG5cblxudmFyIGluaXRBbmFseXNpcyA9IGZ1bmN0aW9uIGluaXRBbmFseXNpcyhldmVudERhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogZXZlbnREYXRhLmlkIHx8IGV2ZW50RGF0YS5faWQsXG4gICAgZ2FtZVN0YXR1czogbnVsbCxcbiAgICBydW5zU2NvcmVkOiAwLFxuICAgIHVucnVuc1Njb3JlZDogMCxcbiAgICBiYXR0ZXJVcDogZmFsc2UsXG4gICAgb3V0OiBmYWxzZSxcbiAgICBvdXRNZXRhOiB7XG4gICAgICBraW5kOiBudWxsLFxuICAgICAgc2FjcmlmaWNlOiBmYWxzZSxcbiAgICAgIHNhY3JpZmljZU1ldGE6IHtcbiAgICAgICAga2luZDogbnVsbFxuICAgICAgfSxcbiAgICAgIGZyZWVSZWZpbGw6IGZhbHNlXG4gICAgfSxcbiAgICBoaXQ6IGZhbHNlLFxuICAgIGhpdE1ldGE6IHtcbiAgICAgIGtpbmQ6IG51bGwsXG4gICAgICBiaWdCdWNrZXQ6IGZhbHNlXG4gICAgfSxcbiAgICBzdGVhbDogZmFsc2UsXG4gICAgc3RlYWxNZXRhOiB7XG4gICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgYmFzZVN0b2xlbjogbnVsbFxuICAgIH0sXG4gICAgd2FsazogZmFsc2UsXG4gICAgd2Fsa01ldGE6IHtcbiAgICAgIG1pbmRUcmljazogZmFsc2VcbiAgICB9LFxuICAgIHNwZWNpYWw6IGZhbHNlLFxuICAgIHNwZWNpYWxNZXRhOiB7XG4gICAgICBraW5kOiBudWxsXG4gICAgfSxcbiAgICBiYXNlUnVubmVyczoge1xuICAgICAgZmlyc3Q6IHt9LFxuICAgICAgc2Vjb25kOiB7fSxcbiAgICAgIHRoaXJkOiB7fSxcbiAgICAgIGZvdXJ0aDoge31cbiAgICB9LFxuICAgIG1heGltdW1CbGFzZWJhbGw6IGZhbHNlXG4gIH07XG59O1xuXG52YXIgYW5hbHl6ZUdhbWVFdmVudCA9IGZ1bmN0aW9uIGFuYWx5emVHYW1lRXZlbnQoZXZlbnREYXRhKSB7XG4gIGlmICghZXZlbnREYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgYW5hbHlzaXMgPSBpbml0QW5hbHlzaXMoZXZlbnREYXRhKTtcbiAgdmFyIGNoZWNrZXJzID0gW2dhbWVTdGF0dXMsIG91dHMsIGhpdHMsIHdhbGtzLCBzdGVhbHMsIHNwZWNpYWwsIG1pc2MsIGJhc2VSdW5uZXJzXTtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9jaGVja2VycyA9IGNoZWNrZXJzOyBfaSA8IF9jaGVja2Vycy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgY2hlY2tlciA9IF9jaGVja2Vyc1tfaV07XG4gICAgY2hlY2tlci5jaGVjayhhbmFseXNpcywgZXZlbnREYXRhKTtcbiAgfVxuXG4gIHJldHVybiBhbmFseXNpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbmFseXplR2FtZUV2ZW50OiBhbmFseXplR2FtZUV2ZW50XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2ZseW91dCcpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZmx5JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JvdW5kIG91dCcpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZ3JvdW5kJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc3RyaWtlcyBvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ3N0cmlrZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2ZpZWxkZXJcXCdzIGNob2ljZScpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZmllbGRlcnNDaG9pY2UnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdhIGRvdWJsZSBwbGF5JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdkb3VibGVQbGF5JztcbiAgfVxuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignc2FjcmlmaWNlJykgPj0gMCkge1xuICAgIC8vIHRoaXMgbWF5IGFscmVhZHkgYmUgYSBncm91bmQvZmx5b3V0LCBvciBpdHMgdW5zcGVjaWZpZWRcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSBhbmFseXNpcy5vdXRNZXRhLmtpbmQgfHwgJ3Vuc3BlY2lmaWVkJztcbiAgICBhbmFseXNpcy5vdXRNZXRhLnNhY3JpZmljZSA9IHRydWU7IC8vIGNoZWNrIGlmIHNvbWVvbmUgc2NvcmVkIG9yIGFkdmFuY2VkIG9uIHRoZSBzYWNyaWZpY2VcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignc2NvcmVzJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2VNZXRhLmtpbmQgPSAnc2NvcmUnO1xuXG4gICAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSkge1xuICAgICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBhcmUgY2FwdHVyZWQgaW4gc3JjL21pc2MuanNcblxuICAgIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2FkdmFuY2UnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLnNhY3JpZmljZU1ldGEua2luZCA9ICdhZHZhbmNlJztcbiAgICB9XG4gIH1cblxuICBpZiAoYW5hbHlzaXMub3V0TWV0YS5raW5kKSB7XG4gICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcblxuICAgIGlmICgoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhhbGZJbm5pbmdPdXRzKSA9PT0gMCkge1xuICAgICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdoYWxmSW5uaW5nRW5kJztcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2ZyZWUgcmVmaWxsJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5mcmVlUmVmaWxsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3VzZXMgYSBtaW5kIHRyaWNrJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5taW5kVHJpY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHV0aWwuZ2V0VXBkYXRlVGV4dChldmVudERhdGEpO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignYmxvb2RkcmFpbicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2Jsb29kZHJhaW4nO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdpcyBwYXJ0eWluZycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2lzUGFydHlpbmcnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdyZXZlcmInKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdyZXZlcmInO1xuICB9IGVsc2UgaWYgKCAvLyB0aGlzIGNoZWNrIGhhcyB0byBjb21lIGJlZm9yZSBiaXJkcyBjaXJjbGUsIGJlY2F1c2UgdGhlIHRleHRcbiAgLy8gJ3RoZSBiaXJkcyBjaXJjbGUnIGlzIHByZXNlbnQgaW4gYm90aCBjYXNlc1xuICB1cGRhdGUuaW5kZXhPZigndGhlIGJpcmRzIHBlY2tlZCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JpcmRzUGVja2VkJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGJpcmRzIGNpcmNsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JpcmRzQ2lyY2xlJztcbiAgfSBlbHNlIGlmICggLy8gdGhpcyBpcyB0byBjYXB0dXJlIGFueSBvdGhlciBub24tcGVja2luZyAmIG5vbi1jaXJjbGluZyBiaXJkaW5lc3NcbiAgdXBkYXRlLmluZGV4T2YoJ2JpcmRzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnanVzdEJpcmRzJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaGFkIGFuIGFsbGVyZ2ljIHJlYWN0aW9uJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYWxsZXJnaWNSZWFjdGlvbic7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3JvZ3VlIHVtcGlyZSBpbmNpbmVyYXRlZCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2luY2luZXJhdGVkJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYmVjYW1lIG1hZ21hdGljJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmVjYW1lTWFnbWF0aWMnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdmZWVkYmFjaycpID49IDAgJiYgKHVwZGF0ZS5pbmRleE9mKCdyZWFsaXR5IGZsaWNrZXJzJykgPj0gMCB8fCB1cGRhdGUuaW5kZXhPZignc3dpdGNoZWQgdGVhbXMnKSA+PSAwKSkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZmVlZGJhY2snO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCd0aGUgZWxlY3RyaWNpdHkgemFwcycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2VsZWN0cmljaXR5JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgbm93IHVuc3RhYmxlJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAndW5zdGFibGUnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdpcyBub3cgZmxpY2tlcmluZycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2ZsaWNrZXJpbmcnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdjb25zdW1lcnMgYXR0YWNrJykgPj0gMCkge1xuICAgIGlmICh1cGRhdGUuaW5kZXhPZignZGVmZW5kcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnY29uc3VtZXJzQXR0YWNrRGVmZW5kZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2NvbnN1bWVyc0F0dGFjayc7XG4gICAgfVxuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzYWxtb24gc3dpbSB1cHN0cmVhbScpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3NhbG1vbic7XG4gICAgYW5hbHlzaXMuZ2FtZVN0YXR1cyA9ICdpbm5pbmdSZXdpbmQnOyAvLyBmaXJzdCwgZ3JhYiBhbGwgdGhlIHNlbnRlbmNlcyB3aXRoIHdoaWNoIHRlYW0gbG9zdCBob3cgbWFueSBydW5zXG5cbiAgICB2YXIgdGVhbXMgPSB1cGRhdGUubWF0Y2goLyhcXGQrKFxcLlxcZCspPykgb2YgdGhlIC4qJ3MgcnVucyBhcmUgbG9zdC9nKTtcblxuICAgIGlmICh0ZWFtcykge1xuICAgICAgdmFyIHJ1bnNTdG9sZW4gPSB0ZWFtcy5tYXAoZnVuY3Rpb24gKHRlYW0pIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2V0TnVtYmVyKHRlYW0sIG51bGwsIG51bGwpIHx8IDA7XG4gICAgICB9KTtcbiAgICAgIHZhciBydW5zU3RvbGVuRnJvbSA9IHRlYW1zLm1hcChmdW5jdGlvbiAodGVhbSkge1xuICAgICAgICByZXR1cm4gdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdGVhbSwgL29mIHRoZSAvLCAvJ3MgcnVucy8pO1xuICAgICAgfSk7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgICBydW5zU3RvbGVuOiBydW5zU3RvbGVuLFxuICAgICAgICBydW5zU3RvbGVuRnJvbTogcnVuc1N0b2xlbkZyb21cbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdydW5zIGFyZSBvdmVyZmxvd2luZycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3J1bnNPdmVyZmxvd2luZyc7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNHYWluZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLyB1bnJ1bnMvKSxcbiAgICAgIHJ1bnNPdmVyZmxvd2luZ0ZvcjogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvXFxuLywgLyBnYWluLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzb2xhciBwYW5lbHMgYWJzb3JiJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAncnVuc0NvbGxlY3RlZCc7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgIHJ1bnNDb2xsZWN0ZWQ6IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLyBydW5zIGFyZSBjb2xsZWN0ZWQvKSxcbiAgICAgIHJ1bnNDb2xsZWN0ZWRGcm9tOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9zYXZlZCBmb3IgdGhlIC8sIC8ncyBuZXh0IGdhbWUvKVxuICAgIH07XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3N1biAyIHNtaWxlcycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3N1bjInO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zQ29sbGVjdGVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8hIHN1biAyIHNtaWxlcy8pLFxuICAgICAgd2luU2V0VXBvbjogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc2V0IGEgd2luIHVwb24gdGhlIC8sIC9cXC4vKVxuICAgIH07XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2JsYWNrIGhvbGUgc3dhbGxvd3MnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdibGFja0hvbGUnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zQ29sbGVjdGVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIC9jb2xsZWN0IC8sIC8hLyksXG4gICAgICB3aW5Td2FsbG93ZWRGcm9tOiB1dGlsLmdldFRlYW0oZXZlbnREYXRhLCB1cGRhdGUsIC9zd2FsbG93cyB0aGUgcnVucyBhbmQgYSAvLCAvIHdpbi4vKVxuICAgIH07IC8vIHNlZSBpZiBjYXJjaW5pemF0aW9uIHRyaWdnZXJlZCBieSB0aGUgYmxhY2sgaG9sZVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCd0aGUgYmFsdGltb3JlIGNyYWJzIHN0ZWFsJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscy5wbGF5ZXJTdG9sZW4gPSB1dGlsLmdldFBsYXllcih1cGRhdGUsIC9jcmFicyBzdGVhbCAvLCAvIGZvciB0aGUgcmVtYWluZGVyLyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdncmluZCByYWlsJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnZ3JpbmRSYWlsJztcbiAgICB2YXIgdHJpY2tzID0gdXRpbC5nZXRTa2F0ZVRyaWNrcyh1cGRhdGUpO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHBsYXllcjogdXRpbC5nZXRQbGF5ZXIodXBkYXRlLCAvXi8sIC8gaG9wcyBvbi8pXG4gICAgfSwgdHJpY2tzKTtcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignc2FmZSEnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzKSwge30sIHtcbiAgICAgICAgZ3JpbmRTdWNjZXNzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3V0IVxuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyksIHt9LCB7XG4gICAgICAgIGdyaW5kU3VjY2VzczogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdyYWlsQmFpbCc7XG4gICAgfVxuICB9IC8vIGlmIHdlIGZvdW5kIHNvbWV0aGluZywgdGhlbjpcblxuXG4gIGlmIChhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3N0ZWFsJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnN0ZWFsID0gdHJ1ZTtcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignY2F1Z2h0JykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnY2F1Z2h0U3RlYWxpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuc3VjY2VzcyA9IHRydWU7XG4gICAgfSAvLyBiYXNlU3RvbGVuIGlzIDAtaW5kZXhlZFxuXG5cbiAgICBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKmZpcnN0LykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDA7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qc2Vjb25kLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDE7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qdGhpcmQvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMjtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipmb3VydGgvKSAhPT0gLTEpIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMzsgLy8gdGhpcyBtYXkgaGF2ZSBiZWVuIGEgcnVuIGlmIHRoZXJlIGFyZSA0IGJhc2VzIGluIHBsYXlcblxuICAgICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmF0dGVyKSAhPT0gbnVsbCAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlCYXNlcykgPT09IDQpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5QmF0dGVyKSAhPT0gbnVsbCAmJiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVCYXNlcykgPT09IDQpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgYXJlIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG5cbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipob21lLykgIT09IC0xKSB7XG4gICAgICAvLyBzZWUgaWYgaG9tZSBvciBhd2F5IHN0b2xlIHRoZSBiYXNlXG4gICAgICBpZiAoKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmF0dGVyKSAhPT0gbnVsbCkge1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheUJhc2VzKSAtIDEgfHwgMztcbiAgICAgIH0gZWxzZSBpZiAoKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2FCYXR0ZXIpICE9PSBudWxsKSB7XG4gICAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmFzZXMpIC0gMSB8fCAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb2xkZXIgZ2FtZXMgZG9uJ3QgaGF2ZSB0aGVzZSBmaWVsZHMsIG9yIG1heSBoYXZlIGJvdGhcbiAgICAgICAgLy8gaG9tZSBhbmQgYXdheSBiYXR0ZXJzIGZpbGxlZCBpbjsganVzdCBhc3N1bWVkIGhvbWUgYmFzZVxuICAgICAgICAvLyBpcyBiYXNlICMzIGluIHRob3NlIGNhc2VzLCBpIGd1ZXNzXG4gICAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5iYXNlU3RvbGVuID0gMztcbiAgICAgIH1cblxuICAgICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgYXJlIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG5cbiAgICB9IC8vIGNoZWNrIGZvciBibGFzZXJ1bm5pbmcgc2NvcmVzIHByZSBzLTEyIChvdGhlcndpc2UgY2FwdHVyZWQgaW5cbiAgICAvLyBzcmMvbWlzYy5qcylcblxuXG4gICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgdXBkYXRlLmluZGV4T2YoJ2JsYXNlcnVubmluZycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcih1cGRhdGUsIC9zY29yZXMgLywgLyB3aXRoIGJsYXNlcnVubmluZy8pO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdldFVwZGF0ZVRleHQgPSBmdW5jdGlvbiBnZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSkge1xuICB2YXIgX2V2ZW50RGF0YSRsYXN0VXBkYXRlO1xuXG4gIHJldHVybiAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkbGFzdFVwZGF0ZSA9IGV2ZW50RGF0YS5sYXN0VXBkYXRlKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGxhc3RVcGRhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkbGFzdFVwZGF0ZS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSBudW1iZXIgKHN1cHBvcnRzIHBvc2l0aXZlIGludGVnZXJzICYgZmxvYXRzKSxcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSByZWdleCBmb3IgbnVtYmVyc1xuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIHJlZ2V4IGZvciBudW1iZXJzXG4gKiB3aWxsIHJldHVybiBhIG51bWJlciBvciBudWxsXG4gKi9cblxuXG52YXIgZ2V0TnVtYmVyID0gZnVuY3Rpb24gZ2V0TnVtYmVyKHMsIHByZSwgcG9zdCkge1xuICB2YXIgbnVtID0gbnVsbDtcbiAgdmFyIG51bVJlZ2V4ID0gLygoXFxkKyk/KFxcLlxcZCspPykvO1xuXG4gIGlmICghcHJlKSB7XG4gICAgcHJlID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICBpZiAoIXBvc3QpIHtcbiAgICBwb3N0ID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHByZS5zb3VyY2UgKyBudW1SZWdleC5zb3VyY2UgKyBwb3N0LnNvdXJjZSk7XG4gIHZhciBtYXRjaGVzID0gcmVnZXhbU3ltYm9sLm1hdGNoXShzKTtcblxuICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgbnVtID0gTnVtYmVyKG1hdGNoZXNbMV0pIHx8IG51bTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgbWF0Y2ggYmV0d2VlbiBwcmUgYW5kIHBvc3RcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSBtYXRjaFxuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIG1hdGNoXG4gKiB3aWxsIHJldHVybiB0aGUgbWF0Y2gsIG9yIGFuIGVtcHR5IHN0cmluZ1xuICovXG5cblxudmFyIGdldE1hdGNoID0gZnVuY3Rpb24gZ2V0TWF0Y2gocywgcHJlLCBwb3N0KSB7XG4gIHZhciBtYXRjaFJlZ2V4ID0gLyguKikvO1xuXG4gIGlmICghcHJlKSB7XG4gICAgcHJlID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICBpZiAoIXBvc3QpIHtcbiAgICBwb3N0ID0gbmV3IFJlZ0V4cCgnJyk7XG4gIH1cblxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHByZS5zb3VyY2UgKyBtYXRjaFJlZ2V4LnNvdXJjZSArIHBvc3Quc291cmNlKTtcbiAgdmFyIG1hdGNoZXMgPSByZWdleFtTeW1ib2wubWF0Y2hdKHMpO1xuXG4gIGlmIChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1sxXTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSB0ZWFtIG5hbWVcbiAqIHByZSBpcyByZWdleCB0byBwcmVwZW5kIHRvIHRoZSByZWdleCBmb3IgdGhlIHRlYW0gbmFtZVxuICogcG9zdCBpcyByZWdleCB0byBhcHBlbmQgdG8gdGhlIHJlZ2V4IHRoZSB0ZWFtIG5hbWVcbiAqIHdpbGwgcmV0dXJuICdob21lJyAnYXdheScgb3IgJydcbiAqL1xuXG5cbnZhciBnZXRUZWFtID0gZnVuY3Rpb24gZ2V0VGVhbShldmVudERhdGEsIHMsIHByZSwgcG9zdCkge1xuICB2YXIgdGVhbSA9IGdldE1hdGNoKHMsIHByZSwgcG9zdCk7XG5cbiAgaWYgKHRlYW0pIHtcbiAgICB0ZWFtID0gZXZlbnREYXRhLmhvbWVUZWFtTmlja25hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGVhbSA/ICdob21lJyA6ICdhd2F5JztcbiAgfVxuXG4gIHJldHVybiB0ZWFtO1xufTtcblxudmFyIHRpdGxlQ2FzZSA9IGZ1bmN0aW9uIHRpdGxlQ2FzZShzKSB7XG4gIGlmICghcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIDtcbiAgcmV0dXJuIHMuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbiAgICBpZiAod29yZCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHdvcmRbMF0udG9VcHBlckNhc2UoKSkuY29uY2F0KHdvcmQuc2xpY2UoMSkpO1xuICAgIH1cbiAgfSkuam9pbignICcpO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIHBsYXllciBuYW1lXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIHRoZSB0ZWFtIG5hbWVcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCB0aGUgdGVhbSBuYW1lXG4gKiB3aWxsIHJldHVybiB0aGUgcGxheWVyIG5hbWUgb3IgJydcbiAqL1xuXG5cbnZhciBnZXRQbGF5ZXIgPSBmdW5jdGlvbiBnZXRQbGF5ZXIocywgcHJlLCBwb3N0KSB7XG4gIHZhciBwbGF5ZXIgPSBnZXRNYXRjaChzLCBwcmUsIHBvc3QpO1xuICByZXR1cm4gdGl0bGVDYXNlKHBsYXllcik7XG59O1xuXG52YXIgZ2V0U2thdGVUcmlja3MgPSBmdW5jdGlvbiBnZXRTa2F0ZVRyaWNrcyh1cGRhdGUpIHtcbiAgdmFyIGdyaW5kVHJpY2ssIGdyaW5kU2NvcmUsIGxhbmRUcmljaywgbGFuZFNjb3JlO1xuICB2YXIgdHJpY2tzID0gdXBkYXRlLm1hdGNoKC8gYSAoLiopIFxcKChcXGQrKS9nKTsgLy8gZ3JpbmQgdHJpY2tcblxuICBpZiAodHJpY2tzWzBdKSB7XG4gICAgZ3JpbmRUcmljayA9IHRpdGxlQ2FzZShnZXRNYXRjaCh0cmlja3NbMF0sIC9hIC8sIC8gXFwoLykpO1xuICAgIGdyaW5kU2NvcmUgPSBnZXROdW1iZXIodHJpY2tzWzBdLCAvXFwoLywgLyQvKTtcbiAgfSAvLyBsYW5kIHRyaWNrXG5cblxuICBpZiAodHJpY2tzWzFdKSB7XG4gICAgbGFuZFRyaWNrID0gdGl0bGVDYXNlKGdldE1hdGNoKHRyaWNrc1sxXSwgL2EgLywgLyBcXCgvKSk7XG4gICAgbGFuZFNjb3JlID0gZ2V0TnVtYmVyKHRyaWNrc1sxXSwgL1xcKC8sIC8kLyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdyaW5kVHJpY2s6IGdyaW5kVHJpY2ssXG4gICAgZ3JpbmRTY29yZTogZ3JpbmRTY29yZSxcbiAgICBsYW5kVHJpY2s6IGxhbmRUcmljayxcbiAgICBsYW5kU2NvcmU6IGxhbmRTY29yZVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldFVwZGF0ZVRleHQ6IGdldFVwZGF0ZVRleHQsXG4gIGdldE51bWJlcjogZ2V0TnVtYmVyLFxuICBnZXRUZWFtOiBnZXRUZWFtLFxuICBnZXRQbGF5ZXI6IGdldFBsYXllcixcbiAgZ2V0U2thdGVUcmlja3M6IGdldFNrYXRlVHJpY2tzXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2RyYXdzIGEgd2FsaycpID49IDApIHtcbiAgICBhbmFseXNpcy53YWxrID0gdHJ1ZTsgLy8gY2hlY2sgaWYgYW55IHJ1bnMgd2VyZSBzY29yZWQgb24gdGhlIHBsYXkgcHJpb3IgdG8gczEyXG5cbiAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSAmJiB1cGRhdGUuaW5kZXhPZignc2NvcmVzJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG4gICAgLy8gY2hlY2sgZm9yIG1pbmQgdHJpY2sgc2hlbmFuaWdhbnNcblxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCd1c2VzIGEgbWluZCB0cmljaycpKSB7XG4gICAgICBhbmFseXNpcy53YWxrTWV0YS5taW5kVHJpY2sgPSB0cnVlO1xuXG4gICAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3N0cmlrZXMgb3V0JykpIHtcbiAgICAgICAgYW5hbHlzaXMub3V0ID0gdHJ1ZTtcbiAgICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ3N0cmlrZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsImNvbnN0IHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAyMGVkNjMwLThiYWUtNDQ0MS05NWNjLTBlNGVjYzI3MjUzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ltb24gSGFsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwM2Y5MjBjYy00MTFmLTQ0ZWYtYWU2Ni05OGE0NGU4ODMyOTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvcm5lbGl1cyBHYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4MTNkNDNjLWI5MzgtNDlkYS1hY2VmLTY1YjczZjI3YjA5OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NyYXRjaCBEZWxldXplXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTNjZjU1MjEtMTQwZi00YWQ5LWE5OTgtYWM4YWYyMmI5YmM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdXRjaCBXeWV0aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE2YWZmNzA5LWU4NTUtNDdjOC04ODE4LWI5YmE2NmU5MGZlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVsbGVuIFBldGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTczOTcyNTYtYzI4Yy00Y2FkLTg1ZjItYTIxNzY4YzY2ZTY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3J5IFJvc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOTI0MWFhNC0zOGUzLTQ1ZWQtOTc1MC02OGY0NDAxZjgwZTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF5YW5uYSBEdW1waW5ndG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWE5M2EyZDItYjViNi00NzliLWE1OTUtNzAzZTRhMmYzODg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWRybyBEYXZpZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMGZkNzFlNy00ZmEwLTQxMzItOWY0Ny0wNmEzMTRlZDUzOWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhcnMgVGF5bG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjQzZTljNWMtNWE4YS00YjQ4LTljZTYtYjEwZGRkNjc3YWU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJcm5lZSBCbHVlc2t5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjcyMDU1OWUtOTE3My00MDQyLWFhYTAtZDM4NTJiNzJhYjJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIaXJvdG8gV2lsY294XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmU4NmRlMTEtYTJkZC00YjI4LWI1ZmUtZjRkMGMzOGNkMjBiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaW9uIEFsaWNpYWtleWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzAyMTg2ODQtN2ZhMS00MWE1LWEzYjMtNWQ5Y2Q5N2RkMzZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3JkYW4gSGlsZGViZXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzY3ODZmNDQtOTA2Ni00MDI4LTk4ZDktNGZhODQ0NjVhYjllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWFzbGV5IEdsb29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2Q1MmFjZTYtYTBhMC00NjdlLTgwZTAtYWU4NmIyODlhZDMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGVsaW5lIEhhbW1lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ2NzIxYTA3LTdjZDItNDgzOS05ODJlLTcwNDZkZjZlOGI2NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RldyBCcmlnZ3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ODljYzFjZS04MmRmLTRmYWQtODY3ZC1kZTdkOTgyMmZlZGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpZ2J5IFBlYWNlbGlseVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRjODZhNTAwLWQ1MzgtNGI4My1iMzIxLWQ3NjI1MzNkNzY2MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxsYW4gS3JhbmNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGZmZDJlNTAtYmI1Yi00NWQwLWI3YzQtZTI0ZDQxYjJmZjVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY2huZWlkZXIgQmVuZGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTFjNTQ3M2EtNzU0NS00YTlhLTkyMGQtZDliNzE4ZDBlOGQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYWNvYiBIYXluZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NTc2YTJjYi0zZGViLTRhMzUtYTFlZi05ZTNjYzIwMzk1NjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBoaW5lYXMgV29ybXRocmljZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU4YzllMjk0LWJkNDktNDU3Yy04ODNmLWZiMzE2MmZjNjY4ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2ljaGlybyBHdWVycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YmNmYjNmZi01Nzg2LTRjNmMtOTY0Yy01YzMyNWZjYzQ4ZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdWxhIFR1cm5pcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVjNmNjZTYzLTk5YjMtNDQxZC05MGUwLTA2NjRlNjgwNTdhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXpla2llbCBUaHJvY2ttb3J0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MTFkMThlMC1iOTcyLTRjZGQtYWZjMi03OTNjNTZiZmU1YTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsc3RvbiBDZXJ2ZXphXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjNkZjg3MDEtMTg3MS00OTg3LTg3ZDctYjU1ZDRmMWRmMmU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2Rvd2VsbCBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY0YzkyZjhkLTYwMjgtNDk1Yi1iODFkLTMyYzk3NWFmYjJlMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5pZCBNYXJsb3dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2OGRkOWQ0Ny1iOWE4LTRmZDMtYTg5Yy01YzExMmViMTk4MmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1cmhhbSBTcGFjZW1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY5MmQ4NDMwLTQyYWQtNGI4OC04YjM2LWE3ZDIwZGE5YjBhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGlyb3RvIFBvb2xlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmNjMzI0NmYtMmRhMi00YzdjLWE0NmYtOWI0NWRjYmYzODRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW1vdGhlcyBUaHdvbXBzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MThkZWExYS1kOWE4LTRjMmItOTMzYS1mMDY2N2I1MjUwZTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcmdhcml0byBOYXZhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzJjYThlZDUtYThjNy00NTcxLTk3NDUtODBkZTVhNDliMmQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLYWogU3RhdHRlciBKci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3OTMyYzdjNy1iYWJiLTQyNDUtYjlmNS1jZGFkYjk3Yzk5ZmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhbmR5IENhc3RpbGxvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2I1NWQ0ODQtNmVhOS00NjcwLTgxNDUtOTg2Y2I5ZTMyNDEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGV2ZW5zb24gSGVhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdjZjgzYmRjLWY5NWYtNDlkMy1iNzE2LTA2ZjJjZjYwYTc4ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF0dGVvIFRyaXVtcGhhbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZTlhNTE0YS03ODUwLTRlZDAtOTNhYi1mM2E2ZTJmNDFjMDNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vbGFuZXN0b3BoaWEgUGF0dGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODE3ZGVlOTktOWNjZi00ZjQxLTg0ZTMtZGM5NzczMjM3YmM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb2xkZW4gU3RhbnRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgyOGM1MDgwLTQ1NDMtNGJmMi05ZDg0LTQzNmQ1OGM3ZmQ2NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5pZCBTbHVtcHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NGEyYjVmNi00OTU1LTQwMDctOTI5OS0zZDM1YWU3MTM1ZDNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbm5lZHkgTG9zZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NjRiM2JlOC1lODM2LTQyNmUtYWU1Ni0yMDM0NWI0MWQwM2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdvb2R3aW4gTW9yaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OWVjNzdkOC1jMTg2LTQwMjctYmQ0NS1mNDA3YjQ4MDBjMmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphbWVzIE1vcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YzhjYzU4NC0xOTliLTRiNzYtYjJjZC1lYWE5YTc0OTY1ZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppd2EgTXVlbGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwYzJjZWM3LTBlZDUtNDI2YS05ZGU4LTc1NGYzNGQ1OWIzOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVG90IEZveFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkxZjUyOThlLWEyZWMtNGY1NC1hNTQxLTE4MTg3MDJkMWI2ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWludCBTaHVwZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzMTFiNzI3LWRlNzQtNGYyNS05MTJkLWUwOGE3OWYwNjFiMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVucnkgRWdnYnVydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3YWY5N2E3LTE5ZGMtNGQxOC05ZjcyLThiZDg5ZjdlZWFhOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJpbml0eSBTbWFodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk4ZDIzM2RlLTljM2YtNDEwMC1hMzQzLTUyOTdiN2ZkZWI5MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9yayBTaWxrIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTk2NWVlZDUtMDg2Yy00OTc3LTk0NzAtZmU0MTBmOTJkMzUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXRlcyBCZW50bGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWEwMzFiOWEtMTZmOC00MTY1LWE0NjgtNWQwZTI4YTgxMTUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaWFuYSBXaGVlbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWRkNDBkYzctMDMzZi00MDM5LTkwYzgtMTg0ODUzZjMwNjRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaW1vbiBQZWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWYyMThlZDEtZDc5My00MzdkLWExYjktNzlmODhmNjkxNTRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3R1cyBNYW5nb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExZWQzMzk2LTExNGEtNDBiYy05ZmYwLTU0ZDdlMWFkMTcxOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF0ZWwgQmV5b25jZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE1ZjhjZTgzLTAyYjItNDk4Yy05ZTQ4LTUzM2ExZDgxYWViZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXZlbHRvbiBNY0JsYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYThhNWNmMzYtZDFhOS00N2QxLThkMjItNGE2NjU5MzNhN2NjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZWxnYSBXYXNoaW5ndG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWYyMzAzYjktOWY5NS00ZDQzLWIxZDUtZDQ1ZWJhOTI3MGE3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaXR6YW4gSHViZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMDgyY2E2ZS1lYjExLTRlYWItOGQ2YS0zMGY4YmU1MjJlYzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pY2hvbGFzIE1vcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiODhkMzEzZi1lNTQ2LTQwN2UtOGJjNi05NDA0MDQ5OWRhYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9saXZlciBMb29mYWhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiOGFiODZjNi05MDU0LTQ4MzItOWI5Ni01MDhkYmQ0ZWI2MjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVzbWUgUmFtc2V5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmJmOTU0M2YtZjEwMC00NDVhLWE0NjctODFkN2FhYjEyMjM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGYXJyZWxsIFNlYWd1bGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDI0ZTE4Yi04MDBkLTRmMTUtODc4ZC1lMzM0ZmI0ODAzYzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbGdhIEJ1cnRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJlMThkMzYzLTc1MmQtNGU0YS1iMDZiLTFhN2U0NjQxNDAwYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NvcmVzIEJhc2VydW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZjEyMjY2MC1kZjUyLTRmYzQtOWU3MC1lZTE4NTQyM2ZmOTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhbHRvbiBTcG9ydHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZjZhMjRkMS00ZTg5LTQ3OTAtYTRiYS1lZWIyODcwY2JmNmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhdCBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwMTc3Zjc2LTY3ZmMtNDMxNi1iNjUwLTg5NDE1OWRlZGU0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF1bGEgTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDllNjRiNi04MjQ4LTQwN2UtYjNhZi0xOTMxYjg4MGRiZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbm55IFNwcnVjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMxZGRkZmM1LTZhZDYtNGIzMS05ZTUyLTk4MjM2YzUzMzg3NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9yayBTaWxrIElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM2YTE5MTU0LTc0MzgtNGM0Zi1iNzg2LTJkZmFmNTk1MWYwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lsdmFpcmUgUm9hZGhvdXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2JkMTllNmYtM2QwOC00NzM0LWIyM2YtNTg1MzMwMDI4NjY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLbmlnaHQgVHJpdW1waGFudFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQyYTFlNzM0LTYwZDktNDk4OS1iN2Q5LTZlYWNkYTcwNDg2YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGlhbmEgVGFrYWhhc2hpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGIzM2E1NGMtMzkzNC00NzhmLWJhZDQtZmMzMTNhYzI1ODBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZXJjaXZhbCBXaGVlbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGUyMWM5N2UtZjU3NS00M2I3LThiZTctZWNjNWQ4YzRlYWZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQaXRjaGluZyBNYWNoaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTY5ZGIzMGQtNzRhYy00MjY1LThkYTYtNDY3YjBkMjU2OTRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEZXJ2aW4gR29yY3p5Y2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYWFlZjQ3ZS04MmNjLTRjOTAtYjc3ZC03NWMzZmIyNzllODNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlcnJpbmcgV2luZmllbGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZmFmZTc1ZS0yZjAwLTQ0MTgtOTE0Yy05YjY2NzVkMzkyNjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZG9uIENhc2htb25leVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3MGRkNTdiLTU1YzQtNGE2Mi1hNWVhLTdjYzRiZjlkOGFjMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGlsbG1hbiBIZW5kZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOTkzMGNiMS03ZWQyLTRiOWEtYmY0Zi03ZTM1ZjI1ODZkNzFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpbm4gSmFtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYTViNTRkMi1iNDg4LTQ3Y2QtYTUyOS01OTI4MzFlNDgxM2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpbmEgTGFyc2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjY3Y2I0NDUtYzI4OC00ZTYyLWI2MDMtMjcyOTFjMWU0NzVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWFudXQgSG9sbG93YXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMzk0N2ZiYy01MGVjLTQ1YTQtYmNhNC00OWZmZWJiNzdkYmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNob3JieSBTaG9ydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE5MGEwZjMxLWQ2ODYtNGFjNC1hN2YzLWNmYzg3YjcyYzE0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVyZCBQYWNoZWNvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDA1ZGZhZGYtZDQzNS00MzA3LTgyZjYtOGViYTIyODdlODdhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXhvbiBCdWNrbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODlmNzQ4OTEtMmUyNS00YjVhLWJkOTktYzk1YmEzZjM2YWEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYWdvbWkgTmF2YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyYzQzNjhkLTQ3OGItNDJiZS1iNmQzLWZhMmU5YjIzMGY4MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFkeSBNYXRzdXlhbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxM2EwNTE1Ny02MTcyLTQ0MzEtOTQ3Yi1hMDU4MjE3YjRhYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwZWFycyBUYXlsb3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1OTkxY2NiMy03ZWVkLTQ2ZDktOWQ3Yy02OWRlYzliNTZkNGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pcmEgTGVtbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMzU2MWM1NC0xMWMzLTRiM2QtOTE4Mi04NTM4NjQ3MWIyZWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hZ29taSBNY2RhbmllbCBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjViYzdlNWQ0LTM5YmUtNGQ2NC1hMjQyLWFiYjM5YWNhNmY0MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2lhIEhvbGJyb29rXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmY4NWQ3MzEtODFlZC00YTA3LTllMDEtZTkzZjE3ODZhMzY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWVzIFRhc3dlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMjgxMGRjYS04MjVjLTRkYmMtOGI2NS0wNzAyNzk0YzQyNGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVkdWFyZG8gV29vZG1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRlY2VlN2JlLTkzZTQtNGYwNC1iMTE0LTZiMzMzZTBlNjQwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3V0dG9uIERyZWFteVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU3MDMxNDFjLTI1ZDktNDZkMC1iNjgwLTBjZjljZmJmNDc3N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZG92YWwgQ3Jvc3NpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNjQzYTUyMC1hZjM4LTQyZTMtOGY3Yi1mNjYwZTUyZmFjYzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFkZWxhaWRlIEp1ZG9jaG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzY3NWZjZGYtNjExNy00OWE2LWFjMzItOTlhODlhM2E4OGFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWYWxlbnRpbmUgR2FtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NjZkZmQxZS0xMWMzLTQyYjYtYTE2Ny05YjJkNTY4YjVkYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbmRpZSBUdXJuZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NjQ0ZDc2Ny1hYjE1LTQ1MjgtYTRjZS1hZTFmOGFhZGI2NWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdWxhIFJlZGRpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZGNhNzEzNy1iODcyLTQ2ZjUtOGU1OS04YzljOTk2ZTlkMjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVtbWV0dCBUYWJieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhOGM1MmQ3LTQxMjQtNGE2NS1hMjBkLWQ1MWFiY2JlNjU0MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlb2RvcmUgSG9sbG93YXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MDNhMjM1Zi05ZmE2LTQxYjUtODUxNC05NDc1Yzk0NDI3M2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlZXNlIENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzMyNjVlZTMtYmIzNS00MGQxLWI2OTYtMWYyNDFhNmY1OTY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXJrZXIgTWVuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgxZDdkMDIyLTE5ZDYtNDI3ZC1hYWZjLTAzMWZjYjc5YjI5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF0dHkgRm94XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWU0YWNlYmQtZWRiNS00ZDIwLWJmNjktZjJkNTE1MTMxMmZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGVvZG9yZSBDZXJ2YW50ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiOWQ5Nzk5MC1kZjBiLTRiOGYtYWM4NS02MWM0NGFiMjlhM2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvcmNhbiBTbWFodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlZWE0YTQ4LWM4NGItNDUzOC05N2U3LTMzMDM2NzE5MzRkMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVsZ2EgTW9yZW5vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGVmMWJjMzQtNjRlZS00YzdiLThiZTItODgzMjJiNDA3YTU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHZXJhbGRpbmUgRnJvc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NDJhZjkxNS03OWM1LTQzMWMtYTI3MS1mNzE4NWUzN2M2YWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9saXZlciBOb3Rhcm9ib3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1N2ExOWEyMi1mMmNkLTRlNTktYWE4NC0xNWNiMGFmMzBiYTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlZlc3NhbGl1cyBTdW5kYWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNjkxZjJiYS05YjY5LTQxZjgtODkyYy0xYWNkNDJjMzM2ZTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplbmtpbnMgR29vZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzZTUxMmRmLWM0MTEtNDEwMC05NTQ0LTBjZWFkZGRiMjhjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmFtb3VzIE93ZW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzllNGE0OWUtZTM1YS00MDM0LWE0YzctMjkzODk2YjQwYzU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGV4YW5kZXIgSG9ybmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNWMyNGM5Ny1mM2QzLTRiM2QtOGMxMy0wZGViYjYxMzQ2YzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZGRiNjQ4NS0wNTI3LTQ1MjMtOWJlYy0zMjRhNWI2NmJmMzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYW5zIE1jQmxhc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNGU0YzE3ZC04MTI4LTQ3MDQtOWUwNC1mMjQ0ZDQ1NzNjNGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldlc2xleSBQb29sZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZiOWJlZGI0LTljOGItNDUyMC1hMDYyLTIzZmJhMGQ1ZjA1ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFnb21pIE1jZGFuaWVsIElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBiYjM1NjE1LTYzZjItNDQ5Mi04MGVjLWI2YjMyMmRjNTQ1MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2V4dG9uIFdoZWVyZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOThmZDljOC1jYjc1LTQ4MmQtODczZS1lNmI5MWQ0MmE0NDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlbiBIdW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMGUxM2I1Ni01OTliLTRhMjItYjc1Mi04MDU5ZWZmYzgxZGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvdSBSb3NlaGVhcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNmNmY2NmMi04NTBlLTQzZWItYjA4NS1mZjczYWQwNzQ5YjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYXNsZXkgRGF5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2MzMzFjODctMTYzNC00NmM0LTg3Y2UtZTRiOWM1OWUyOTY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZb3NoIENhcnBlbnRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ0YzkyZDk3LWJiMzktNDY5ZC1hMTNiLWYyZGQ5YWU2NDRkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbmNpc2NvIFByZXN0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZmY2NmVhZS03MTExLTRlM2ItYTliOC1hOTU3OTE2NWIwYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlYW51dGllbCBEdWZmeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjczM2Q4MGYxLTI0ODUtNDBmNy04MjhiLWZkN2NkODI0M2EwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFpIFNwbGlmZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkyNGRlODZkLTI2MGItNDk1Yi04MGUxLTU3YWY1NzY3NzAzY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF0Y2h3b3JrIFNvdXRod2lja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3ZjVhOWNkLTcyZjAtNDEzZS05ZTY4LWE2ZWU2YTY2MzQ4OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2xpbmUgR3JlZW5sZW1vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlhYzJlN2M1LTVhMzQtNDczOC05OGQ4LTlmOTE3YmM2ZDExOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hyaXN0aWFuIENvbWJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWY2ZDA2ZDYtYzYxNi00NTk5LTk5NmItZWM0ZWVmY2ZmOGI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWx2aWEgV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjI4YmI3ZjctMmQ4Yy00NzgxLTg4MDgtODM4NDRkZjdlNzMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU291bCBJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzIzZjg5Ny1jY2Y5LTQyMDAtODg3MC0yNDljYmUxOWY5MDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkh1YmVyIEZydW1wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMWNjNGQ3ZC1iZWYwLTQzZGQtYmEwYS0xN2M3NjI4YWE3NzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hZ2kgUnVpelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYyNDY4MDU1LWU4ODAtNDBiZi04YWM2LWEwNzYzZDg0NmViMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxheW5hYmVsbGEgSG9sbHl3b29kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjJhMjdhN2UtYmYwNC00ZDMxLTg2ZjUtMTZiZmEzYWRkYmU3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaW5uaWUgSGVzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3ODQ3ZGUyLWRmNDMtNDIzNi04ZGJlLWFlNDAzZjVmM2FiM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmxvb2QgSGFtYnVyZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmVkYmNlYjgtZTJhYS00ODY4LWFjMzUtNzRjZDA0NDU4OTNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJVbmNsZSBQbGFzbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMGM1MjliMy05NDdlLTRhNzctYjU2Zi02OWZlMjVmYjM3MTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvY2tzIE1heWJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGNhNTI2MjYtNThjZC00NDlkLTg4YmItZjZkNjMxNTg4NjQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWZWxhc3F1ZXogQWxzdG90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYyYWU2YWE5LWUzNDYtNGZhYS1iMDdjLTFmNzYyMzU4MDAxNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2VydW5kIFBhbnRoZW9jaWRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjM1MTI1NzEtMmVjYS00YmM0LThhZDktYTUzMDhhMjJhZTIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPc2NhciBEb2xsaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MGU0NzRhMy03ZDJiLTQzMWQtODE5Mi0yZjFlMjcxNjI2MDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1bW1lcnMgUHJlc3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhhZGIwODRiLTE5ZmUtNDI5NS1iY2QyLWY5MmFmZGI2MmJkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9nYW4gUm9kcmlndWV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2U2MTFiNDUtOThkYy00ODE4LTlmZjktZTg4MjM3ZWIwMGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY0tpbmxleSBPdHRlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ0YTEwYzJhLTBjMjgtNDY2YS05MjEzLTM4YmEzMzM5YjY1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmljaG1vbmQgSGFycmlzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmZTNlOGJhNS02Njg3LTQwMGQtOTgyOC0yYjcwZDYzZWE4YmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRldmluIE1lbGNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY3ODE3MGU0LTA2ODgtNDM2ZC1hMDJkLWMwNDY3ZjlhZjhjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFieSBEb3lsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg2MDVhZjRiLWIyMzUtNDNmOC04MWFhLTYzODFlY2RkYTc1NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVzZSBTY2FudHJvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFlODFlMTcyLTgwMWEtNDIzNi05MjlhLWI5OTBmYzcxOTBjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVndXN0IFNreVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRlZmJjNTQwLWEzNmQtNDYwYi1hZmQ4LTA3ZGEyMzc1ZWU2M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FzdGlsbG8gVHVybmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWJlNmFjMDItM2I4My00ZGE4LWIxZTUtZjg5MDUzYmJkNWM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYW4gQ2FuYmVycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYzY4ODQ1Zi0zYjI2LTQxMmYtODQ0Ni00ZmVmMzRlMDljNzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hbmR5IEZhbnRhc3RpY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAzYjgwYTU3LTc3ZWEtNDkxMy05YmU0LTdhODVjMzU5NDc0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGFsZXhhbmRyZXkgV2FsdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTQ0OGYxZjMtZDc2Zi00NWMxLWE1YzEtNTRmMjI1NDQwMDBiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY2FybGV0IENhc3RlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMxNmFiZWE3LTk4OTAtNGZiOC1hYWVhLTg2YjM1ZTI0ZDliZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VubmVkeSBSb2RnZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzE4OGQ2NDEtNGZjYy00ZDVlLTg4N2QtNWY0NTRiNGM0ZmY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWx2YWlyZSBTZW1pcXVhdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzA5OThhMDgtZGUxNS00MTg3LWI5MDMtMmUwOTZmZmEwOGU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYW5ub25iYWxsIFNwb3J0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM4M2I4MmU4LWI4ZDItNGNiNy05OTgyLTk3NTkzMjgzYWNjMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VsdmluIERydW1zb2xvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDk3ODM1ZmQtMmU5Mi00Njk4LTg5MDAtMWY1YWJlYTBhM2I2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaW5nIFJvbGFuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU0MDM0MTkyLTRkYzYtNDkwMS1iYjMwLTA3ZmUzY2Y3N2I1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFsZHdpbiBCcmVhZHdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA2ZmRkMWVkLTEzYTAtNGViMi1hN2RkLTRlOTU1MTIzNWE2OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWGFuZHJhIFBhbmNha2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTczMmU2MjMtZmZjMi00MGYwLTg3YmEtZmRjZjk3MTMxZjFmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZXRzeSBUcm9tYm9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3YzY4ZDdmLTVlNDAtNGFmYS04YjZmLTlkZjQ3Yjc5ZTdkZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFzaWxpbyBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhYjRlYzAyLTE3ZDktNGM0YS1iOTU2LWFhMTcwYmY1OGE2ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmlwcHkgRGVTaGllbGRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGY2OWU4YzItYjJhMS00ZTk4LTk5NmEtY2NmMzVhYzg0NGM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJZ25ldXMgRGVsYWNydXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NTI3MzYxNS0yMmQ1LTRkZjEtOWE3My03MDdiMjNlODI4ZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJ1cmtlIEdvbnphbGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjkxZjlhYjItOWRkNC00MmU4LWJmOTUtOWZkMDEyNTNjODAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBJVlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhjZjc4YjQ5LWQwY2EtNDcwMy04OGU4LTRiY2FkMjZjNDRiMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXZpbGEgR3V6bWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTRiYWE5YWMtZmY5Ni00ZjU2LWE5ODctMTAzNThlOTE3ZDkxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYWJyaWVsIEdyaWZmaXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWJlNTYwNjAtM2IwMS00N2FhLWEwOTAtZDA3MmVmMTA5ZmJmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZXNcXHUwMGZhcyBLb2NoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWZkMWYzOTItZDQ5Mi00YzQ4LThkNDYtMjdmYjQyODNiMmRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWNhcyBQZXR0eVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFhZTM4ODExLTEyMmMtNDNkZC1iNTljLWQwZTIwMzE1NGRiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZGllIENhcnZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMzYWUwNTUyLTU5ZTgtNDRiZi1iYTY2LTQ4YTk2YWZmMzVlNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm9udGdvbWVyeSBNdWxsb2NrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzNkYzdhYTItZTI3Yi00ODU5LWJiZjAtNDdiYTY2YzAzMTg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFua2llIEluY2FybmF0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE4YWY5MzNhLTRhZmEtNGNiYS1iZGE1LTQ1MTYwZjNhZjk5YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVsaXggR2FyYmFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkYTQ5ZGUyLTM0ZTUtNDlkMC1iNzUyLWFmMmEyZWUwNjFiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29yeSBUd2VsdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5Zjg1Njc2YS03NDExLTQ0NGEtOGFlMi1jN2Y4ZjczYzI4NWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhY2hsYW4gU2hlbHRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQxYTE5OGQ2LWIwNWEtNDdjZi1hYjhlLTM5YTZmYTFlZDgzMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGlxdWlkIEZyaWVuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU3YmJmYjYyLWExMzgtNDFlOC04NmFmLWI5MTg0M2QxNzAxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNvdWwgSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmM2MwN2VhZi0zZDZjLTRjYzMtOWU1NC1jYmVjYzljMDgyODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbXBvcyBBcmlhc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE4ZjQ1YTFiLTc2ZWItNGI1OS1hMjc1LWM2NGNmNjJhZmNlMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGggV2Vla3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjE1N2M1Yy05YTZhLTQ1YTYtODU4Zi1iZjRjZjRjYmMwYmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ydGl6IExvcGV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2ViYjUzNjEtMzg5NS00YTUwLTgwMWUtZTdhMGVlNjE3NTBjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdWd1c3RvIFJlZGRpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YjhkMTI4Zi1lZDUxLTQ5NmQtYTk2NS02NjE0NDc2ZjgyNTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ydmlsbGUgTWFuY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ODljOWVmOS1kNTIxLTQ0MzYtYjQxYy05MDIxYjgxYjRkZmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxpYW0gU25haWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhM2VhMGU5My1jOWY1LTRmODUtOGFjZC1jM2M1Y2U4NjAxZmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplcnVlbCBLcmFtZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMGZmYzljMi1lNjc3LTQyMzAtYTYzOS1iMGFlMTE2NTA1MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktheiBGaWFzY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMmQ3NjgxNS1jYmRjLTRjNGItOWM5ZS0zMmViZjIyOTdjYzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlbnplbCBTY290dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUzYzUxNGFlLWY4MTMtNDcwZS05YzkxLWQ1YmFmNWZmY2YxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVG90IENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjM4ZjhjNTAtMzExZi00NDg2LWE3MzQtZTFhMTc2MDZhZjRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWNpZW4gUGF0Y2h3b3JrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGIzZThlOWItNmRlMS00ODQwLTg3NTEtYjFmYjQ1ZGM1NjA1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaG9tYXMgRHJhY2FlbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhN2Q4MTk2YS1jYTZiLTRkYWItYTlkNy1jMjdmM2U4NmNjMjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbW1pc3Npb25lciBWYXBvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY4ODMyNjlmLTExN2UtNDVlYy1iYjFlLWZhOGRiY2Y0MGQzZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF5ZGVuIFdyaWdodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5ZjI3ODdhLTMzNTItNDFhNi04ODEwLWQ4MGU5N2IyNTNiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ3VycnkgQWxpY2lha2V5ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzAxZWU4MS00MDZlLTQzZDktYjJiYi01NWNhNmUwZjc3NjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hbGlrIERlc3RpbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZmZiMTE1My05MDlkLTQ0YzctOWRmMS02ZWQzYTlhNDViYmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vbnRnb21lcnkgQnVsbG9ja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI4MTYyZGE3LWVhZmEtNGViMS04YmMxLTVhNjI1ZjAzYWU1N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFncyBCYW5hbmFuYW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWEyNmZjNjEtZDc1ZC00YzAxLTljZTItMTg4MGZmYjU1NTBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYW5keSBEZW5uaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZmVkNzJkZi04N2RlLTQwN2QtODI1My0yMjk1YTJiNjBkM2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0b3V0IFNjaG1pdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OTAzYTc0Zi1mMzIyLTQxZDItYmQ3NS1kYmY3NTYzYzRhYmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW5jaXNjYSBTYXNxdWF0Y2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZGNiYzI5MC04MWM1LTRkYTktYjRkYS0yZTU5NGIwODA3MTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyZWVtaXVtIFNlcmFwaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMyMmUzYWY1LTkwMDEtNDY1Zi1iNDUwLTg2NGQ3ZGIyYjRhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9nYW4gSG9yc2VtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMDU5NDkzMi04ZWY3LTRkNzAtOTg5NC1kZjRiZTY0ODc1ZDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpdHpnZXJhbGQgV2FuZGVybHVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJiNWY1ZGQ3LWUzMWYtNDgyOS1iZWM1LTU0NjY1MjEwM2JjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVkbGV5IE11ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YzM0NmQ4Yi1kMTg2LTQyMjgtOWFkYi1hZTkxOWQ3MTMxZGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyZWVyIEd3aWZmaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZWNlYTdlMC1iMWZiLTRiNzQtOGM4Yy0zMjcxY2I1NGY2NTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpdHpnZXJhbGQgQmxhY2tidXJuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjZhYThjZTgtMjU4Ny00NjI3LTgzYzEtMmE0OGQ0NGFmYWVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJbmt5IFJ1dGxlZGdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzZlMmUzODktZWQwNC00NjI2LWE1YmEtZmUzOThmZTg5NTY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZW5yeSBNYXJzaGFsbG93XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzgxN2M2Y2MtODU3NC00ODU3LTgzZjEtNGEzMTFmYTg5MjU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU291bCBJVlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlMGU1N2E3LTg5ZjUtNDFlYS04MGY5LTZlNjQ5ZGQ1NDA4OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9uZyBXcmlnaHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZjU3NjRjNy1jM2EwLTRkYWUtYWQxNy1jNjY4OWYxZThjMjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyaXNrZXQgRnJpZW5kb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4ZWUyNTZmLWUzZDAtNDZjYi04Yzc3LWIxZjg4ZDhjOWRmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tZm9ydCBTZXB0ZW1iZXJpc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YmYzNTJkMi02YTU3LTQyMGEtOWQ0NS1iMjNiMmI5NDczNzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpdmVycyBSb3NhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWU0ZGZhMTYtZjFiOS00MDBmLWI4ZWYtYTE2MTNjMmIwMjZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTbnlkZXIgQnJpZ2dzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGI1M2NlODItNGIxYS00OGYwLTk5OWQtMTc3NGIzNzE5MjAyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPbGl2ZXIgTXVlbGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc0MGQ1ZmVmLWQ1OWYtNGRhYy05YTc1LTczOWVjMDdmOTFjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29ubmVyIEhhbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDViNmIxMWQtMzkyNC00NjM0LWJkNTAtNzY1NTNmMWYxNjJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPZ2RlbiBNZW5kb3phXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjI0NWY2YzYtNDYxMy00MGY1LWJjM2ItODVhYTllZTNjZjdlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJVc3VycGVyIFZpb2xldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY0Y2E0MzdjLWMzMWMtNDUwOC1hZmU3LTZkYWU0MzMwZDcxN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbiBCZWFuc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQwOWQxYzk2LTc2MGItNGE5Ni05YTNjLTQ4MTExMmRkZjM3YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmlxIE55b25nJ29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0M2Q1ZGE1Zi1jNmExLTQyZjEtYWI3Zi01MGVhOTU2YjZjZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1c3RpY2UgU3Bvb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MTE2OTIxZi03NjQyLTQ0MWEtOWE4NS00MGM5M2ExZTYxYmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vcmRlY2FpIEtpbmdiaXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjYyOWNiN2EtNDE0Yi00Njk1LWExMTUtNzUyOGFiNzAwMzQ2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGlyYWkgTWNFbHJveVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUxMTFhNDZkLTVhZGEtNDMxMS1hYzRmLTE3NWNjYTMzNTdkYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxleGFuZHJpYSBSb3NhbGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWE0NGJkMzYtNjViNC00ZjNiLWFjNzEtNzhkODdhNTQwYjQ4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBQb3Rob3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNzgzOTc1NC1jMzUxLTQzZWMtOWJmZi1jYTY2MmEyMzg1YjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvdWJlcnQgSmktRXVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODZhZGFjNmYtYzY5NC00NGFjLTk1NjAtNzU4ZGU3ZWFjOTM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWFjayBFbmpveWFibGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ODhmY2U3YS0wZDIxLTQ3OGEtOWI0NS00NjYyMTkzZmU5YWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvbGVuZSBXaWxsb3d0cmVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjBjMjA5MTYtNzA5Ny00N2U2LTgyMjYtY2JmNjdkYTE3NmUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZWx2aW4gQW5kYW50ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4OWFmNTE4LWUyN2MtNDI1Ni1hZGM4LTYyZTNmNGIzMGY0M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lsdmlhIFJ1Z3JhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI4NTkxNjZkLTZhZWQtNDI2Mi1iMDViLWRiODVjNDliMzM5MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9ubmEgTWlsaWNpY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1NDJmMGIwLTM0MDktNGE0YS1hOWUxLWU4ZThlNWQ3M2ZjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJvY2sgV2F0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODJkMWI3YjQtY2UwMC00NTM2LTg2MzEtYTAyNWYwNTE1MGNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW0gU2NhbmRhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJmZmJhZWM4LWE2NDYtNDQzNS1hMTdhLTNhMGEyYjVmM2UxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm9uayBKb2tlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxZGFiODY4LTgyMGItNDk2OS04YmJhLWJkZTBiZTgwOTBkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ3JhdmVsIEdlc3VuZGhlaXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MTRiYWU2MS0wNzFhLTQ0OWItOTgxZS1lN2FmYzgzOWQ2ZDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1c2xhbiBHcmVhdG5lc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTdkMzNiNy0xYmJhLTQ4ZDYtYTFkMS1jZDBlMjkyMzFiZThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphY29ieSBQb2RjYXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDM1Y2NlZTEtOTU1OS00OWExLWFhYTQtNzgwOWY3YjVjNDZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGb3JyZXN0IEJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OTVhNmJkYy0xNzRkLTRhZDYtOGQ1MS05ZWU4OGIxYzJlNGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNoYXF1aWxsZSBUb3JyZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YjZmMGE0ZS1kZTE4LTQ0YWQtYjQ5Ny0wM2IxZjQ3MGM0M2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvZHJpZ3VleiBJbnRlcm5ldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExOTlhNjgxLWRlY2YtNDQzMy1iNmFiLTU0NTQ0NTBiYmU1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVhY2ggSW5ncmFtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzE4MmYzM2MtYWVhNS00OGEyLTk3ZWQtZGM3NGZhMjliM2MwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTd2FtdWVsIE1vcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMmM0NzdmYi0yOGVhLTRmY2ItOTQzYS05ZmFiMjJkZjNkYTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbmRmb3JkIEdhcm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZjYmUxZDE0LTA0YzQtNDMzMS05N2FkLTQ2ZTE3MDYxMDYzM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9kZSBQcmVzdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDQyOTYyYzgtNGQ4Yi00NGE2LWI4NTQtNmNjZWYzZDgyNzE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb25hbiBKYXlsZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzliNWFhZS04NTcxLTRjOTAtODg3YS02YTAwZjJhMmY2ZmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRpY2tlcnNvbiBNb3JzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkMDdjY2QwLWNhYzctNGNjZC1iYWI2LWEwNzhiYjk4MzE3NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5naW5lIEViZXJoYXJkdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlkNmYzZDIzLWJjMjYtNDBlNi05M2FhLTBiMWM2OTNlMGJhOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmlsZXkgRmlyZXdhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZDhkMTVmNC1lMDQxLTRhMTItYTEwZS05MDFlNjI4NWZkYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhYnkgVHJpdW1waGFudFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNmYjQyMzI1LTU5MmEtNDExOS05YjQwLTRjZGMxOTk1OWIwOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFuZHkgU2x1bXBzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2FlYjhlMGItZjZmYi00YTllLWJiYTItMzM1ZGFkYTVmMGEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEdW5sYXAgRmlndWVyb2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OGNkNmVmYS1kYmYyLTQzMDktYWFiZS1lYzFkNmYyMWY5OGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhld2l0dCBCZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDA2ZTFkMzItOTc0Mi00OGVmLWE2YmEtMzY1NDVlOTNiOWUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb21neSBSb2xzZW50aGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjBiZTFjMzQtMDcxZC00MGM2LTg4MjQtZGRlMmFmMTg0YjRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRYWlzIERvZ3dhbGtlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIyNjhmNDUyLTAxYjktNGUxNi05OGJiLWMwN2UzY2U3NjdlM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FuZGEgU2NoZW5uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjhmOThhMDQtMjA0Zi00Njc1LTkyYTctODgyM2YyMjc3MDc1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJc2FhYyBKb2huc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWQxZTY3MGEtZjM0Ni00YmY3LWEwMmYtYTkxNjQ5YzQxY2NiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGFuaWUgV2ludGVyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU2NTAyYmM3LTViNzYtNDkzOS05ZmI4LTEzMjA1NzM5MGIzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JlZXIgTG90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3NDFkYzAxLTJiYWUtNDQ1OS1iZmMwLWY5NzUzNjE5M2VlYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxlamFuZHJvIExlYWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMWRlNGRhMy04MjA4LTQzZmYtYTFmZi0wYjM0ODBhMGZiZjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbiBNaXRjaGVsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJjNGIyYTZkLTk5NjEtNGU0MC04ODJjLWEzMzhmNGU3MjExN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXZlbHRvbiBNY0JsYXNlIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmZjMzY4OWYtYmI3ZC00MzgyLTk4YTItY2Y2ZGRjNzY5MDlkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDZWRyaWMgR29uemFsZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMTg5NjFlOS1lZjNmLTQ5NTQtYmQ2Yi05ZmUwMWM2MTUxODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhcm1lbG8gUGx1bXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MWJkYjUyNy0xZmIyLTQ4N2QtODIzNy0wOTM5NThlNzM3ZTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplcGh5ciBNY0Nsb3VkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmU5NGZhMGQtNDUzZi00OTI1LThlYTAtYzBhNTNlMzgxMDhkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdXJvcmEgQmxvcnRsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MWFkODA2MC0yYmJlLTQ4NzItYTg3OS0yMmNiMTAyYmI2NGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllyalxcdTAwZjYgS2VyZnVmZmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWIzNmM3NzYtYjUyMC00MjliLWE4NWYtYmY2MzNkN2IwODFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHb29iaWUgQmFsbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0ZTE0ZDdiLTUwMjEtNDI1MC1hM2NkLTkzMmJhOGUwYTg4OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF5bGVuIEhvdGRvZ2ZpbmdlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiY2EzODgwOS04MWRlLTQyZmYtOTRlMy0xYzBlYmZiMWU3OTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZhbW91cyBPY29ubm9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGEwYmJiZTYtZDEzYy00MGNjLTk1OTQtOGM0NzY5NzVkOTNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5nIFJpY2hhcmRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYTY3YzE5Ni00Y2FjLTQyOGItOGMxOC0yYTQxMTA1NWVhMzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIll1c2VmIEZlbmVzdHJhdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1Njc5ZDVkZS1mNDE3LTQ1ZGItYWI4ZC00OWI5MmU3NDQ0ODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyaW5pdHkgUm9jaGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmM2RkZmQ4Ny03M2EyLTQ2ODEtOTZmZS04Mjk0NzZjOTc4ODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW9kb3JlIER1ZW5kZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc2NjNjM2NhLTQwYTEtNGYxMy1hNDMwLTE0NjM3ZGNlNzk3YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUG9sa2FEb3QgWmF2YWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjIzNmJkNWItNGZmMS00MTU0LWEzY2QtN2NiM2MwZGRhYTViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUYWkgQmVhbmJhZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVmOWY4Yjk1LTllNzMtNDljZC1iZTU0LTYwZjg0ODU4YTI4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29sbGlucyBNZWxvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0OTMxNTQ2LTFiNGEtNDY5Zi1iMzkxLTdlZDY3YWZlODI0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2xhYmUgTW9vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE2Nzc1MWQ1LTIxMGMtNGE2ZS05NTY4LWU5MmQ2MWJhYjE4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFjb2IgV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDVlZjNjZmEtYjlhNi00ZTE2LWEzZGYtNmMyMzZlOGJkYjNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSeWxhbiBPJ0xhbnRlcm5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNWFlNjRjZC1mNjk4LTRiMDAtOWQ2MS1jOWZmZmQwMzdhZTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pY2tleSBXb29kc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjljMzI3M2EwLTI3MTEtNDk1OC1iNzE2LWJmY2Y2MDg1NzAxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2F0aHkgTWF0aGV3c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzOTdlZDkxLTYwOGUtNGIxMy05OGVhLWU5NGM3OTVmNjUxZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWVvbmctSG8gR2FyY2lhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDQ3ZGQwOGUtODMzYy00MzAyLWE5NjUtYTM5MWQzNDU0NTVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdHUgVHJvbG9sb2xcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZWRkZDA1Ni05ZDcyLTQ4MDQtYmQ2MC01MzE0NGI3ODVkNWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbGViIE5vdmFrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWRiZjExYzAtOTk0YS00NDgyLWJkMWUtOTkzNzkxNDhlZTQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25yYWQgVmF1Z2hhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjljMjM3MDJiLWYwYzItNDY2OC04YmNjLTYxYmJkYmJmZDkzZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JvbGxpcyBaZXBoeXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNmVjOGQwMC1hNzhmLTRmNmItYjUxYS1kYjlmNTUwN2NmMGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZveHkgUGViYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjFiMTQxZmMtZTg2Ny00MGQxLTg0MmEtY2VhMzBhOTdjYTRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaWNoYXJkc29uIEdhbWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Y4ZTE1MmUtMmQyNy00ZGNjLWJhMmItNjgxMjdkZTRlNmE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZW5kcmlja3MgUmljaGFyZHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4M2QwOWQ0LTdlZDMtNDEwMC1iMDIxLThmYmUzMGRkNDNlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVzc2ljYSBUZWxlcGhvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZTU1MjQ4Yi0zMThhLTRiZmItODg5NC0xY2M3MGU0ZTA3MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW8gS2luZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQzMDRiY2Y5LTIzOWEtNGFhMi1hNDEwLTU2YTQ4NzIxN2EyYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFuY2Vsb3QgS2FuZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgxYTA4ODlhLTQ2MDYtNGY0OS1iNDE5LTg2NmI1NzMzMTM4M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3VtbWVycyBQb255XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODdlNmFlNGItNjdkZS00OTczLWFhNTYtMGZjOTgzNWExZTFlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJjbyBTdGlua1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI5MjkzYmViLWQxOTktNGI0Ni1hZGQ5LWMwMmY5MzYyZDgwMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmF1ZXIgWmltbWVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTlhNDZlMGMtMDQzNy00NDNhLWJlODEtOTU2NjY1ZWM1ODhlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIaWVyb3BoYW50aWMgRm9pYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTUxM2FhYjYtMTQyYy00OGM2LWI0M2UtZmJkYTY1ZmQ2NGU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYWxlYiBBbHZhcmFkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMzMWQ4NzRjLTFiNGQtNDBmMi1hMWIzLTQyNTQyZTkzNDA0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2VkcmljIFNwbGlmZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc2YzQ4NTNiLTdmYmMtNDY4OC04Y2RhLWM1YjhkZTE3MjRlNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFycyBNZW5kb3phXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODBkZmY1OTEtMjM5My00NDhhLThkODgtMTIyYmQ0MjRmYTRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbHZpcyBGaWd1ZXJvYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjllNzI0ZDlhLTkyYTAtNDM2ZS1iZGUxLWRhMGIyYWY4NWQ4ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGF0ZmllbGQgU3V6dWtpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzczZDU5ZGQtMzJhMC00OWNlLThhYjQtYjJkYmI3ZGM5NGVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZHVhcmRvIEluZ3JhbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY4YzIwNjkzLWY0MzktNGEyOS1hNDIxLTA1ZWQ5Mjc0OWYxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tYnMgRHVlbmRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWM2OWRiYTMtNjIyNS00YWZkLWFiNGItMjNmYzc4ZjczMGZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZXZhbiBXaXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGE2ZmM2N2QtYTdmZS00NDNiLWEwODQtNzQ0Mjk0Y2VjNjQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUZXJyZWxsIEJyYWRsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNjFiMjg3MS03MjU0LTQ5YjMtYjAwOS0xNzRhMjNhY2FhMWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvbiBIYWxpZmF4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTM3NmE5MGItN2ZmZS00N2EyLWE5MzQtZjM2ZDY4MDZmMTdkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3dlbGwgUm9jaGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNzU1ZWZjZS1kMDRkLTRlMDAtYjVjMS1kODAxMDcwZDM4MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhc2lsaW8gRmlnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjM4YzVkODAtMDkzZi00NmViLTk5ZDYtOTQyYWE0NWNkOTIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmRyZXcgU29saXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzQ4YzAzNy1lZWZjLTRiODEtOGVkZC1kZmE5NjE4OGE5N2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvd2UgRm9yYmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzZhMjc3YzMtZDJiNS00MzYzLTgzOWItOTUwODk2YTVlYzVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWtlIFRvd25zZW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjYwNjA1ZTYtZmY0MS00Mzg4LWE2MWEtZmFmZDIxNzVmN2FkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbHdpbiBNY0doZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyODk2NDQ5Ny0wZWZlLTQyMGMtOWMxZC04NTc0ZjIyNGE0ZTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkluZXogT3dlbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZDMzN2I0Ny0yYTdkLTQxOGQtYTQ0ZS1lZjgxZTQwMWMyZWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhc2UgU3BvcnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjg1Y2U3N2QtZTVjZC00ZGFhLTk3ODQtODAxMzQ3MTQwZDQ4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTb24gU2NvdGNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWM3M2Y5MWUtMDU2Mi00ODBkLTk1NDMtMmFhYjFkNWU1YWNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGFya3MgQmVhbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YjBmOTFhYS00ZDY2LTQzNjItOTkzZC02ZmY2MGY3Y2UwZWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJsYW5rZW5zaGlwIEZpc2NoZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODFjZTY2Mi0wN2I2LTRhNzMtYmFhNC1hY2JiYjQxZjlkYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIll1bW15IEVsbGlvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNWJkMDhkNS03ZDlmLTQ1MGItYWJmYS0xNzg4YjhlZThiOTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXZlbnNvbiBNb25zdGVyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExZmJhNTU1LWE0OGMtNDRmMy1hZmI2LTUyMmVhMjU2OTQ3Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWluZHkgS3VnZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMzhhZGEwYS1hZWFjLTRhM2QtYjlhNS05Njg2ODdjY2QyZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpeHBhY2sgU2FudGlhZ29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NzQ0OGI2Mi1mOTUyLTQwZTItODIwYy00OGQ4YWZlMGY2NGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplc3NpIFdpc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MjVmM2Y4NC1iYWIwLTRjZjItOTFjMS05NmU3OGNmNWNkMDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkx1aXMgQWNldmVkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRmNGRhODFhLTkxN2ItNDM0Zi1iMzA5LWYwMDQyM2VlNDk2N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXVnZW5pYSBCaWNrbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYTQ3N2M5Mi0zOWI2LTRhNTItYjA2NS00MGFmMmYyOTg0MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvd2VsbCBGcmFua2xpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwN2FiNWE4LWVjZTMtNGM0ZC1iMmQyLTk4ZTNhN2NmODY0ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2ljaGl0YSBUb2FzdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2QzYmU3YjgtMWNiZi00NTBkLTg1MDMtZmNlMGRhZjQ2Y2JmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaYWNrIFNhbmRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMjk1YzZjMi1iMzNjLTQ3ZGQtYWZmYS0zNDlkYTdmYTE3NjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbWJzIEVzdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWI5ZWIyMTMtMDkxNy00Mzc0LWEyNTktNDU4Mjk1MDQ1MDIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXRoZW8gQ2FycGVudGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzBjODViZTQtZmYyNi00NzBmLTgxMzUtYWY3NzFmZDIxZTUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmF0aGVtYSBFbGVtZWZheW9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMTQxMDBhNC0xYmY3LTQ0MzMtYjMwNC02YWFkNzU5MDQwNTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkt1cnQgQ3J1ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZWQ2MWIxOC1jMWY2LTRkNzEtYWVhMy1jYWFjMDE0NzBiNWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbm55IE1hcmlqdWFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMxN2E0Mzk3LTRkY2MtNDQwZS04YzUzLWQ4OTdlOTcxY2FlOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVndXN0IE1pbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOWMwZDNjYi1kOGJlLTRmNTMtOTRjOS1mYzUzYmNiY2U1MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdHRlbyBQcmVzdGlnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEwNjhmNDRiLTM0YTAtNDJkOC1hOTJlLTJiZTc0ODY4MWE2ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxsaXNvbiBBYmJvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwY2I0NDAyNi1lYmYwLTQ4NzAtYjk4ZS1lNjIwYjA4MTQ4MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pY2hlbGxlIFNwb3J0c21hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBmNjFkOTQ4LTRmMGMtNDU1MC04NDEwLWFlMWM3ZjlmNTYxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGFtYXJhIENyYW5raXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODlkYTJkMi02NzRjLTRiODUtODk1OS1hNGJkNDA2Zjc2MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpc2ggU3VtbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmNiMDhlNGYtZGYzYS00NDZjLWFiNTAtNThhNDk2YWM1ZjNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZW5uZXR0IEJsdWVza3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiYzI5YWZjMS1jOTU0LTRkZWYtOTc4Yi1hNTlhZTVkZWYzYzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpZ2J5IEZyaWVkcmljaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA3MDc1OGEwLTA5MmEtNGEyYy04YTE2LTI1M2M4MzU4ODdjYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWx4IEtlbWluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwNzY4MzU0LTk1N2UtNGI0Yy1iYjZkLWVhYjZiYmRhMGJhM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXVnZW5pYSBHYXJiYWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDE5Y2UxMTctMjM5OS00MzgyLTgwMzYtOGMxNGRiN2UxZDMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3JpIEJvc3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyNTc3MjU2LWJjNGUtNDk1NS04MWQ2LWI0MjJkODk1ZmIxMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzbWluZSBXYXNoaW5ndG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWRhZGVlMTEtYTExZi00NDJhLTliZTMtY2IwYjEwYjg2NzE5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWVrYWJvbyBOYW1lcGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWRlZDAzODQtZDI5MC00ZWExLWE3MmItNGY5ZDIyMGNiZTM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdWFuIE11cnBoeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFlMjI5ZmU1LWExOTEtNDhlZi1hN2RkLTZmNmUxM2Q2ZDczZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXJpY2tzb24gRmlzY2hlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFmMTQ1NDM2LWIyNWQtNDliOS1hMWUzLTJkM2M5MTYyNjIxMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9lIFZvb3JoZWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjE1NTViZmItNmFlZC00NTEwLTg2M2EtODAxYmUzYjZkOTk3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmFzdGFzaWEgSXNhcm9ib3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMWNiYmZhYS0xMDBlLTQ4YzUtOWNlYS03MTE4YjBkMDhhMzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1aWNlIENvbGxpbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNGNhOTc2Zi1kZGYyLTQ5NjYtYmExNC00ZmQyYjliMjAzNDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsd2luIEJsYXNrZXRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjY2YWJjYzAtOGFiYy00NTcwLWIzMmUtZTU2NjhlNWQzOGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJab2V5IEtpcmNobmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmUxMzI0OWUtMzhmZi00NmEyLWE1NWUtZDE1ZmE2OTI0NjhhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWaXRvIEtyYXZpdHpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZjNkN2JjNy02ZmZiLTQwYzMtYTk0Zi01ZTYyNmJlNDEzYzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsaWphaCBWYWxlbnp1ZWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzIwNWY0ZmYtNzA1MC00NzBiLTg5NzAtOGQ3ZWE1NjU2NGJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHaWEgV3VwcG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNWFjYjZlYS05YTdjLTQ5YjYtODA5Yy01OTQwOWY1NTc2NTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkt1cnQgVWx0cmFiYXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzZhOTg2M2MtYmY2OS00ZGRkLWJiZTAtNmQ2NGIwZDAwZThjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZYXNzbHluIFN0YXR0ZXIgSnIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzc4YzA3YjAtNTY0NS00NGI1LTg2OWYtNDk3ZDE0NGM3YjM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGeW5uIERveWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2MwNTFiOTItNGE4Ni00MTU3LTk4OGEtZTMzNGJmNmRjNjkxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeWxlciBMZWF0aGVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2MxOWFhOTMtM2Y5ZC00YmUwLWFlNWEtOGFkZTEwMGE5NjY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb24gVHVtYmxlaG9tZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1NjJhYzFmLTAyNmMtNDcyYy1iNGU5LWVlNmZmODAwZDcwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hyaXMgS29jaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRlYzY5NTFmLTY4MjItNDg2MS1iYzI1LTc5ODI2ZGQ4YzU1NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2hlZXYgU2hyaWZmbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MjBlNjA2Ni1iMTRiLTQ1Y2YtOTg1Yy0wYTZlZTJkYzNmN2FcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppIFNsaWRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MmNmZWJmYi04MDA4LTRiOWYtYTU2Ni03MmEzMGUwYjY0YmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwZWFycyBSb2dlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1M2U3MDFjNy1lM2M4LTRlMTgtYmEwNS05YjQxYjRiNjRjZGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcnF1ZXogQ2xhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NGU1ZjIyMi1mYjE2LTQ3ZTAtYWRmOS0yMTgxMzIxOGRhZmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyaXQgV2F0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTgzMWEyMzgtOGVmZS00ZDUzLWE0ODMtMWFkNjgxZTUwYWMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHaXRhIFNwYXJyb3dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YTZiMGM2ZC0xY2M4LTRhY2ItOTkxYy0wZmZlNjJmM2Q5OTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvdHVzIENsdXRjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVjNjBmODM0LWExMzMtNGRjNi05YzA3LTM5MmZiMzdiM2U2YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFtaXJleiBXaW50ZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWRkZWU0OWQtNzlmMi00ZWJhLWEzYzktMTc0Nzg0MzIyMDU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb2JiaW4gSW5uaW5nc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWYzYjVkYzItMzUxYS00ZGVlLWE5ZDYtZmE1ZjQ0ZjJhMzY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbHN0b24gRW5nbGFuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmNWIzYjE4LWViYzUtNDYxMS1iOGJmLTYxYjhjNmEzYmExMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTnVjbGV1cyBDcmVzdGhpbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZmJmMDRiYi1mNWVjLTQ1ODktYWIxOS0xZDg5Y2RhMDU2YmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbmlhIERvbGxpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYzMDVlMmRkLTJkNWQtNDllZC1hYjQ3LWIxYjU2ZjBlN2U4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FuZGEgRmlhc2NvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjRhYWEzY2ItN2RhZi00N2UzLTg5YTgtZTU2NWEzNzE1YjVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmF2aXMgTmFrYW11cmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YTU2N2RhNi03Yzk2LTQ0ZDMtODVkZS1lNWEwOGE5MTkyNTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkN1ZGkgRGkgQmF0dGVyaW5vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmJhYzYyYWQtNzExNy00ZTQxLTgwZjktNWExNTVhNDM0ODU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcml0IEZyZWVtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjlkZTc3Ny1lODEyLTRjODQtOTE1Yy1lZjI4M2M5ZjBjZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFydHVybyBIdWVydGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjlmNTBlNi04MWJmLTQzNzEtOWEyNy1kZTNjODViZDVhODJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hbnUgQ2FuZGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmZhMDhlMDgtNmE5NS00ZmJjLTlkMDAtNWMzOWM1MzAyYjYwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXJyeSBCdXJraGFyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcxNThkMTU4LWU3YmYtNGU5Yi05MjU5LTYyZTViMjVlM2RlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2FyYXRvIEJlYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3M2E5MzRkZS0zZGIxLTQ1NTMtOTdmMi05ZTdiNTc3NDRiMzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbGloIFVsdHJhYmFzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdhNzVkNjI2LWQ0ZmQtNDc0Zi1hODYyLTQ3MzEzOGQ4YzM3NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVjayBXaGl0bmV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2M1YWUzNTctZTA3OS00NDI3LWE5MGYtOTdkMTY0YzcyNjJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWxvIEJyb3duXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2U0ZjAxMmUtODI4Yy00M2JiLThiOGEtNmMzM2JkZmQ3ZTNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXRlbCBPbGl2ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgyNzMzZWI0LTEwM2QtNGJlMS04NDNlLTZlYjZkZjM1ZWNkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRraW5zIFRvc3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg2ZDRlMjJiLWYxMDctNGJjZi05NjI1LTMyZDM4N2ZjYjUyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9yayBTaWxrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODhjYTYwM2UtYjJlNS00OTE2LWJlZjUtZDZiYmEwMzIzNWY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDbGFyZSBNY2NhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YjBkNzE3Zi1hZTQyLTQ0OTItYjJlZC0xMDY5MTJlMmI1MzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF2aWxhIEJha2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGI1ZGRkM2QtY2NhNi00ZTAxLWFjN2YtNjVkYzU2ODMxOTMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWVzIEdvcmN6eWNhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGQ4MWIxOTAtZDNiOC00Y2Q5LWJjZWMtMGU1OWZkZDdmMmJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGJlcnQgU3RpbmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZjExYWQ1OC1lMGI5LTQ2NWMtOTQ0Mi1mNDY5OTEyNzQ1NTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFtb3MgTWVsb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NGQ3NzJjNy0wMjU0LTRmMDgtODE0Yy1mNmZjNThmY2ZiOWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZsZXRjaGVyIFBlY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NGYzMGYyMS1mODg5LTRhMmUtOWI5NC04MTg0NzViYjFjYTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpcmtsYW5kIFNvYnJlbWVzYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3MzMzNGFhLTQ2ZDgtNDQxNS05MTJiLWE1ZTI2N2Y3NTI5YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVucnkgTWFybG93XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTczODc1ODAtMWY3Yy00OWVhLWE5ZTctNDRiZTg5MzI5MTMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJcm5lZSBGaWVzdGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5N2RmYzFmNi1hYzk0LTRjZGMtYjBkNS0xY2I5Zjg5ODRhYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyb2NrIEZvcmJlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk5NzY2YzFiLWM1OTAtNDI2MS1iMWI3LTNlOWM3ZmMzNTYwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzcGVyIEJsYXRoZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZTc1ZmY3Yy1mZTliLTQyOGItYTFiNi1mOWU2YTE3NDhjODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktvZmkgR2lsZGVoYXVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTE2MjhkOTctMTZjYS00YTc1LWI4ZGYtNTY5YmFlMDJiZWY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU291bFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE2OGU4MmFjLTczNzUtNDE3Ni1iNzU0LTYxNzVlYTQ3ZGNiNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3VhZGFsdXBlIEluY2FybmF0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE3ZWRiZjE5LWNhZjYtNDVkZC04M2Q1LTQ2NDk2Yzk5YWE4OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVzaCBWYWxlbnp1ZWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWNhOTA2MjUtNWJkZS00NDg5LWJjOWYtYTc5OTZhN2I5YTMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3F1aXJ5biBSYXRvb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZDU2Zjc0OS1lZTQ4LTRhODUtOTgyNy04NDU1YWVhZmUyNzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaW4gSmVzYXVsZW5rb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFmNmIzZWRjLWVkNTItNGVkYy1iMGM5LTE0ZTBhNWFlMGVlM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUml2ZXJzIENsZW1ib25zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjVjOTVkYmEtMjYyNC00MWIwLWFhY2QtYWMzZTFlMWZlODI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3RlIFJvZGdlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNzI2N2FiYS02MTE0LTRkNTMtYTUxOS1iZjZjOTlmNGUzYTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvc2EgSGF5ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNzdkZmZhYS1lMGY1LTQwOGYtYjlmMi0xODk0ZWQyNmU3NDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR1Y2tlciBMZW5ueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3Y2RiOTNiLTZmOWQtNDY4YS1hZTAwLTU0Y2JjMzI0ZWU4NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVzbGFuIER1cmFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmQ4Nzc4ZTUtMDJlOC00ZDFmLTljMzEtN2I2Mzk0MmNjNTcwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDZWxsIEJhcmFqYXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZmQ5ZmY1Mi05YmY2LTRhYWYtYTg1OS1kMzA4ZDhmMjk2MTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlY2xhbiBTdXphbm5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzA3MzJlMzYtMzczMS00ZjFhLWFiZGMtZGFhOTU2M2I2NTA2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYWdvbWkgTWNkYW5pZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNDk1MWNhZS0wYjQ3LTQ2OGItYTNhYy0zOTBjYzhlOWZkMDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpbW15IFZpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNGRlYzk1ZS03OGExLTQ4NDAtYjIwOS1iM2I1OTcxODE1MzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYXJsYXRhbiBTZWFicmlnaHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjOGRlNTNhNC1kOTBmLTQxOTItOTU1Yi1jZWMxNzMyZDkyMGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR5cmVlayBDYWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzkzMzlmNWUtMTA0MC00NjQyLWE0YTctMDdjZDM2ZDI4MWY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWFudHVtIEZsYWh3YWhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjOWEyMmZhNC0xNzIxLTRlZWYtYTFhNi02MjBjZGY3ZDM3N2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvc2NvZSBTdW5kYWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYzExMzQzMi01ZjliLTQ2ZjgtOTc0NS0wOWY5OTlkNTE4MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlZ2dpZSBDYW5iZXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNjOTMzYjc5LTkyMTgtNDY5My04MTcyLWYyM2Q0ZWFjY2RmN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hldCBUYWthaGFzaGlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTBhMTU2Yi1iYTdiLTQzMTMtOGZlYS03NTgwN2I0YmM3N2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbnJhZCBUd2VsdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTU4NDE1Zi00ZTYyLTQ3ZTItYTJjOS00ZDZhODU5NjFlMWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjaG5laWRlciBCbGFuY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMGRhZmQ0ZS1mY2EyLTRkOWMtYWNjYy1kNjU2NzhlNzU4OWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pbG5lciBSb2xzZW50aGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDg2ZjgzNmUtNGVkZi00ZGJkLTk3NDMtMTRmMzA0NjFlZTE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5jZSBTZXJvdG9uaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODc0MmQ2OC04ZmNlLTRkNTItOWE0OS1mNGUzM2JkMmE2ZmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ydGl6IE1vcnNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGFjMmZkNTUtNTY4Ni00NjVmLWExYjYtNmZiZWQwYjQxN2M1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdXNzbyBTbHVnZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGI1MzIxMWMtZjg0MS00ZjMzLWFjY2YtMGMzZTE2Nzg4OWEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmF2aXMgQmVuZGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGQwYjQ4ZmUtMmQ0OS00MzQ0LTgzZWQtOWYwNzcwYjM3MGE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaWxsbWFuIFdhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkNjA0NGVmLWM2MzUtNGFlZC05N2JkLWQxODA2ODQzMmI4ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWXVzZWYgUHVkZGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUwODM5YjZjLTcwZmQtNDIyOC1hZTNhLTYwYzcxM2QwMGQwOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHVja2VyIFRoYW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTE2YzNmMjgtZWVjZC00NTcxLWJlMWEtNjA2YmJhYzM2YjJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBHbG92ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlM2MwNjQwNS0wNTY0LTQ3Y2UtYmJiZC01NTJiZWU0ZGQ2NmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjcmFwIFdlZWtzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTRmMWYzNTgtZWUxZi00NDY2LTg2M2UtZjMyOTc2NjI3OWQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb25hbiBDb21ic1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU5N2U5Yjc0LTgwMTEtNDQxNS1iMjJjLTgyODJmMjIyODY4M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlrYW4gSGFtbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWNmMTk5MjUtZGM1Ny00Yjg5LWIxMTQtOTIzZDVhNzE0ZGJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJnYXJpdG8gQmlzaG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWNmZmE5YWEtNDVhNi00OTk3LWEwYTEtODk5MjVkODlmM2I2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZWJlZGlhaCBLcmFuY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZTI5MDIwZi0xOTY0LTRmY2UtODBmNC0zNWE1ZTdlZGZiOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ycGhldXMgWWFyZHN0aWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWZhNzNkZTQtYWYxNy00Zjg4LTk5ZDYtZDBkNjllZDFkMjAwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbnRvbmlvIE1jY2FsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYwNzE4ODljLWYxMGYtNGQyZi1hMWRkLWM1ZGRhMzRiM2UyYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmlvbiBGYWNlcHVuY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMGJjZjRiYi03NGIzLTQxMmUtYTU0Yy0wNGMxMmFkMjhlY2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhaG4gRm94XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjRhNWQ3MzQtMGFkZS00NDEwLWFiYjYtYzBjZDVhN2ExYzI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZ2FuIEhhcnJpc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjYxN2MxZWYtZDY3Ni00MTE5LTgzNTktYTVjM2FjM2JlZjUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdWNrIExhdGVuaWdodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY2YjM4ZTU2LTBkOTgtNGUwMC1hOTZlLTM0NWFhYWMxZTY1M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGV0aWNpYSBTbnlkZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmN2RlMDIyNy02NzM5LTQ4ZTItYmJkNi05ZGM3YjI0N2FiOWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwaWZmIFBpYXp6YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY5Njg1MzJhLWJmMDYtNDc4ZS04OWUwLTM4NTZiN2Y0YjEyNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFuaWVsIEJlbmVkaWN0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwZGUyYjA1LWUwZDQtNGQzMy05Mjk3LTk5NTFiMmI1Yzk1MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWx5c3NhIEhhcnJlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYWYyMzlhZS03ZTEyLTQyYmUtOTEyMC1mZWZmOTA0NTNjODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1lbHRvbiBUZWxlcGhvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YjAxY2MzZi1jNTlmLTQ4NmQtOWMwMC1iOGE4MjYyNGU2MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpb2JoYW4gQ2hhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNjJjNDljNi04MzAxLTQ4N2QtODM1Ni03NDcwMjNmYTQ2YTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZXhhbmRyaWEgRHJhY2FlbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYWU4Y2JmYy0yMTU1LTQ2NDctOTk5Ni0zZjI1OTEwOTFiYWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZvcnJlc3QgQm9va2JhYnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZDI5M2Q2Yy0zYTIwLTQzYWItYTg5NS0yYjdmMWYyODc3OWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNsb3NoIFRydWtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MzYxZTM4MS02NjU4LTQ4OGItODIzNi1kZGU2YTI2NDU1NGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIll1cnRzIEJ1dHRlcmN1cFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE1YWRjODRjLTgwYjgtNDllNC05OTYyLThiNGFkZTk5YTkyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmljaGFyZHNvbiBUdXJxdW9pc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMWYyNWVhZS00NjVmLTQzY2MtOTM2Ni1mMTlhZGRjODAzYmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1ZmZpYW4gQXBwbGVzYXVjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzZmJmZTIzLTM3YmQtNGUzNy1hNDgxLWE4N2VhZGI4MTkyZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2hpdCBTdGVha2tuaWZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjVmM2E2N2MtNGVkNS00NWI2LTk0YjEtY2U0NjhkM2VhZDIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb2JicyBDYWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjNkNTE4YjktZGM2OC00OTAyLWI2OGMtMDAyMmNlYjI1YWEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZW5kcmlja3MgUmFuZ2VsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDZjNjlkMmQtOTM0NC00YjE5LTg1YTQtNmNmY2JhZWFkNWQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3NodWEgV2F0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWI5NzI3ZjctNmEyMC00N2QyLTkzZDktNzc5ZjBhODVjNGVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZW5uZWR5IEFsc3RvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNGQ4ODc3MS03YTk2LTQ4YWEtYmE1OS0wN2JhZTE3MzNlOTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNlYmFzdGlhbiBUZWxlcGhvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMTc1Y2RhMC1hNDI3LTQwZmQtYjQ5Ny0zNDdlZGNjMWNkNjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvdGJveCBTYXRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzQyNjc2MzItOGMzMi00YThiLWI1ZTYtY2UxNTY4YmIwNjM5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHdW50aGVyIE8nQnJpYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MGM2ZTZjYS03N2ZjLTQyYjctOTRkOC1kOGFmZDZkMjk5ZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pa2kgU2FudGFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZhNDBkNmVhLWUyNGItNDQyMi05ZGYxLTA2NDNhYjIwMmM1ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29vbG5hbWUgR2FsdmFuaWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NTU3NzVjMS0yNjZmLTQwZjYtYjA3Yi0zYTY3Y2NkZjg1NTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pYyBXaW5rbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzMzMDY3ZmQtYzJiNC00MDQ1LWE5YTQtZTg3YThkMDMzMmQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWd1ZWwgSmFtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNzMwMDljNS0yZWRlLTRkYzQtYjk2ZC04NGJhOTNjOGE0MjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRob21hcyBLaXJieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzODY5NGI3LTYyNTYtNDcyNC04NmI2LTM4ODQyOTlhNWQ5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUG9sa2FEb3QgUGF0dGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjQ1MDVjNDgtZmM3NS00ZjllLTg0MTktNDJiMjhkY2M1MjczXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZWJhc3RpYW4gVG93bnNlbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4Y2QwNmFiZi1iZTEwLTRhMzUtYTNhYi0xYTQwOGEzMjkxNDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdsb3JpYSBCdWdzbmF4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzgzYTEzZjYtZWU2Ni00YjFjLTk3NDctZmFhNjczOTVhNmYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaSBEZWxhY3J1elwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQwZDdiOGZlLWJhZDgtNDgxZi05NzhlLWNiNjU5MzA0ZWQ0OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRhbGJlcnRvIFRvc3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVjYjhkMmY1LTRmZjUtNDg5MC05NjkzLTU2NTRlMDAwNTVmNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWVvbmctSG8gQmVuaXRlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQxM2IzZGRiLWQ5MzMtNDU2Ny1hNjBlLTZkMTU3NDgwMjM5ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2lubmllIE1jY2FsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU3MjkwMzcwLTY3MjMtNGQzMy05MjllLWI0ZmMxOTBlNmE5YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9vbmV5IERvY3RvciBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVlYWM3ZmQ5LTBkMTktNGJmNC1hMDEzLTk5NGFjYzBjNDBjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3V0dG9uIEJpc2hvcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE2NDczODhkLWZjNTktNGMxYi05MGQzLThjMTgyNmUwNzc3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hhbWJlcnMgU2ltbW9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYwMDI2YTlkLWZjOWEtNGY1YS05NGZkLTIyMjUzOThmYTNkYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJpZ2h0IFppbW1lcm1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlY2Y2MTkwLWY4NjktNDIxYS1iMzM5LTI5MTk1ZDMwZDM3Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNCYXNlYmFsbCBDbGVtYm9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdkY2Y2OTAyLTYzMmYtNDhjNS05MzZhLTdjZjg4ODAyYjkzYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFya2VyIFBhcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWM4MTMwMDgtYjJhOS00MjU3LTgwZTctYTcwOWM2NzE4OWZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb3R0bGVzIFN1bGpha1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhlMWZkNzg0LTk5ZDUtNDFjMS1hNmM1LTZiOTQ3Y2VjNjcxNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVmVsYXNxdWV6IE1lYWRvd3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNTFmMWZlOC00YWI4LTQxMWUtYjgzNi01YmJhOTI5ODRkMzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhpcm90byBDZXJuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJiMWNiOGEyLTllYmEtNGZjZS04NWNmLTVkOTk3ZWM0NTcxNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXNhYWMgUnViYmVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTVkM2E4NDQtZGY2Yi00MTkzLWE4ZjUtOWFiMTI5MzEyZDhkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZWJhc3RpYW4gV29vZG1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY5MTk2Mjk2LWY2NTItNDJmZi1iMmNhLTBkOWI1MGJkOWI3YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9zaHVhIEJ1dHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYWQwNmIxOS00MmEwLTQ3ZTUtODJkNy02ZTY2ZDRhZGM5YTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhZCBTZWV0aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVmMzJlYjQ4LTQ4NjYtNDlkMC1hZTU4LTljNDk4MmUwMTE0MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRml0emdlcmFsZCBNYXNzZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NGIwNTVkMS1iNjkxLTRlMGMtODU4My1mYzA4YmE2NjM4NDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW9kb3JlIFBhc3NvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZlYmFjNzQ2LTY2ODUtNGQwZi04ZTg0LTZiMjEyOTliNTE2OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVyY3VsZXMgQWxpZ2hpZXJpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzAwN2NiZDMtN2M3Yi00NGZkLTlkNmItMzkzZTgyYjFjMDZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYWZhZWwgRGF2aWRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjJkNGMwNmQtMjZjMi00MDMxLWFlN2YtZmQwZWViOTJmNTdkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3JyaXMgRmlyZXN0YXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NWY5ZDg3NC01ZTY5LTQzOGQtOTAwZC1hM2ZjYjFkNDI5YjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vc2VzIE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGE5NWQ5ZDgtM2RjYy00ODhkLWIxY2ItMTk2OTAyNzFhZTRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFua2llIEhhbWJvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NTBhN2JhOS1lNTk1LTQwYmUtOTNlNS00MDIxZjFmOTQ2MGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbm55IENydW1iXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTQ4Y2U4YTgtMTljZC00ZjgxLWI4NGYtODhjY2UwMmM0N2JjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGbGF0dGVyeSBNY0tpbmxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJlNmQ0ZmE5LWY5MzAtNDdiZC05NzFhLWRkNTRhM2NmN2RiMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFcXHUwMGZhbCBMZWFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGY3ZDc0OTAtNzI4MS00ZjhmLWI2MmUtMzdlOTlhN2M0NmEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbm5pZSBSb2xhbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMmYzOTgxNS01MjkxLTRkY2YtYmExOS05N2RjZjBjMDE1ZTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0aWpuIFN0cm9uZ2JvZHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYzExOTYzYi1hMDViLTQ3N2ItYjE1NC05MTFkYzMxOTYwZGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlB1ZGdlIE5ha2Ftb3RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGJkYTY1ODQtNmMyMS00MTg1LTg4OTUtNDdkMDdlOGFkMGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGRvbiBBbnRob255XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODBhMmYwMTUtOWQ0MC00MjZiLWE0ZjYtYjk5MTFiYTNhZGQ4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXVsIEJhcm5lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJjYTBjNzkwLWUxZDUtNGExNC1hYjNjLWU5MjQxYzg3ZmMyM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVycmF5IFBvbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjODZiNWFkZC02YzlhLTQwZTAtYWE0My1lNGZkN2RkNGYyYzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvc2EgRWxmdG93ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MGE0NThlZC0yNWNhLTRmZjgtOTdmYy0yMWNiZjU4ZjJjMmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyZXZpbm8gTWVycml0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkNjhkM2E2LTdmYmMtNDQ1ZC05MGYxLTk3MGM5NTVlMzJmNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlndWVsIFdoZWVsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjlmOWMyNS00M2VjLTRmMGItOTkzNy1hNWFhMjNiZTBkOWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhd3JlbmNlIEhvcm5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzczNzEyZjYtZDc2ZC00Y2FhLThhOWItNTZmZTFkMWE1YTY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYXRoYSBLYXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmUzNWNhYmEtYjE2YS00ZTBkLWI5MjctNGRhODU3ZjRjZGI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFzaWVyIFNobXVybWdsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZmNWEzN2Q5LWE2ZGQtNDlhYS1iNmZiLWI5MzVmZDY3MDgyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVubiBLZXllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAzMDk3MjAwLTBkNDgtNDIzNi1hM2QyLThiZGIxNTNhYThmN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVubmV0dCBCcm93bmluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhhY2M5N2ZhLTRiZjEtNDlmNi1iYjkzLWZiNTI1MTNhMDE1YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVzdHkgWWFib2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MzVmNGU2Ny1hNTRiLTQyN2EtOWNhMS0xMjk2ZDczODc4NzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhbmRzIFNjb3Jlc2J1cmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMzExYzA4OS0wZGY0LTQ2YmQtOWY1ZC04YzQ1YzdlYjVhZTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1jbGF1Z2hsaW4gU2NvcnBsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MTk0OWQ0ZC1iMTUxLTRmNDYtOGJmNy03MzExOWE0OGZhYzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvbiBNb25zdGVyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhiYTdlMWZmLTRjNmQtNDk2My04ZTBmLTcwOTZkMTRmNGIxMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVubmEgTWFsZG9uYWRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjk2N2QwNjQtMGVhZi00NDQ1LWIyMjUtZGFlZDcwMGUwNDRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXZXNsZXkgRHVkbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdjYThmM2YtMmZkYy00NzdiLTg0ZjQtMTU3ZjI4MDJlOWI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZWFjaCBIZXJtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMGVhNWQ1MC1lYzg4LTQwYTAtYWI1My1jNmUxMWNjMWU0NzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pY2hvbGFzIFZpbmNlbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjODNmMGZlMC00NGQxLTQzNDItODFlOC05NDRiYjM4ZjhlMjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhbmdsZXkgV2hlZWxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY0NGE4YjI3LTg1YzEtNDRkZS1iMTI5LTFiMGY2MGJjYjk5Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXRsYXMgSm9uYm9pc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAxNzcyNzk4LThkNDUtNDdjYi1iYmI1LTUxNTgzMmM1YjU5MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG9wcyBDaGVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDQ2NTFkMDUtNDRlZi00MGMxLWFiZDMtNGQwYzE0YjY4NDVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbWlsaWEgU3RyZWV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDYxYjIwOWEtOWNkYS00NGU4LTg4Y2UtNmE0YTM3MjUxOTcwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2Rvd2VsbCBLYXJpbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBjYzViZDM5LWU5MGQtNDJmOS05ZGQ4LTdlNzAzZjMxNjQzNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9uIEVsbGlvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMDNkNzg4ZC0yYzc0LTRlZGMtOTI5OS0yYTEzODRhMjc3NmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpdCBSYXRvb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMTNmNDdiMi0zMTExLTRhYmItYjI1ZS0xOGY3ODg5ZTJkNDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFka2lucyBTd2FnZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTM4ZmNjYzMtZTY2Zi00YjA3LTgzMjctZDRiNmYzNzJmNjU0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPc2NhciBWYXVnaGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWFiZTdhMTQtMjYwOC00ODVjLWFmMTAtNjljZjAxMDdjMmE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3JtYW4gTXVnZ2luc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0ZjY4MjllLTdiYjQtNGUxZS04YjU5LWEwNzUxNDY1N2U3MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2luZyBXZWF0aGVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjU1ODFjNDMtZjhkYS00NjU3LTllOTYtZTcwNGRmMGE4ODc4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmVlbWl1bSBGYWlyd29vZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI2NTAzZjJjLTYzMWEtNDViYS05MDVlLWFhMTQ0NzFjOGI4ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTnl4IFNuYXBqYXdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyOTE4YmUwMS1lMWFhLTRkZTYtODIzOS1mZTYyZjM3NzY5ZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF2aSBKb25lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJjYWRjMjhjLTg4YTUtNGUyNS1hNmViLWNkYWI2MGRkNDQ2ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpamFoIEJvb2tiYWJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmQ5NWQ0MWMtZmY1NC00ZmExLTg5YTAtNzZiODRkZDhmZTJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbWJsZW0gV2FyaG9yc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMjU1MWUyOC0zYTQwLTQ3YWUtYWVkMS1mZjViYzY2YmU4NzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdGggVmVsYXpxdWV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzVhOTlmZjMtY2Y5ZS00NjgyLWJhNmUtMGE2MDQ0YWEzYTRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY3J1ZmZzIFJpc3NldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM3MDYxMzgwLWFjOTUtNDAxOC04NTRlLWMzMDgwNzM5NDVlOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFydGxlYnkgWmhpdmFnb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM4MjI5OTBiLTVlZTAtNDA0YS05ZTA2LTg0NmJiMjlmM2ZhZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FudHVzIEhvam9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYTk2ZDc2YS1jNTA4LTQ1YTAtOTRhMC04ZjY0Y2Q2YmVlYjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpeHBhY2sgRG9nd2Fsa2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2UwMDhmNjAtNjg0Mi00MmU3LWIxMjUtYjg4YzdlNWMxYTk1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWJvcmlhaCBXaWxzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OGQwN2E2NC05ZWEyLTRiOWUtODA0Ni02OTAxYWQzOTg0OTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1bGNlIFNjaG9maWVsZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRiNzMzNjdmLWIyYmItNGRmNi1iMmViLTJhMGRkMzczZWVhZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJpc3RpbiBDcmFua2l0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTE5ODU1MTYtNTAzMy00YWI4LWExODUtN2JkYTA3ODI5YmRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGFuaWUgU2NobWl0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU0YmM3YjIzLTQ5YTktNGYxZC1iNjBmLTljM2NmOTc1NGI2N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2xvdmUgTWFobGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MzU4MGJkNy02MTM4LTQ3MWMtODJhNS1iYzlkMjlmZmQwNmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vaXJhIEJhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NGY0Y2Q3NS0wYzFlLTQyY2YtOWZmMC1lNDFjNDc1NmYyMmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyZXkgQWx2YXJhZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NTk4ZTQwYS1kNzZkLTQxM2YtYWQwNi1hYzQ4NzI4NzViZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhbmllbCBNZW5kb3phXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjg0NjJiZmEtOTAwNi00NjM3LTg4MzAtMmU3ODQwZDkwODlhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXJrZXIgSG9yc2VtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2Y2FhODE4MC1lMTc4LTRmOGItODY1Yy1mMWFmNDcxMTliYzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhZCBCbG9ydGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZkOTAwMWZmLWJhOWYtNDBjMC05MzE1LTc5ZmViYTU0MWI2NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVwZXRhIENoZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MTA1NDFmNC1iYjg5LTQxMzQtODk3My05NThjODJiMjlhNDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpa2kgSnVuaW9yIEpyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzJmYjc5N2EtYWVhOC00NzIzLWI3ZTQtZDExMGMzMDEzMjBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZXJzZXBob25lIFNwbG90dGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2I3Nzk5NDctNDZlZi00Yjc3LWJlMzctOTYyZDYwODc1NjQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb2xhc3RuYW1lIFNva29sXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODFiMjViMTYtMzM3MC00ZWIwLTlkMWItNmQ2MzAxOTRjNjgwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWJvcmlhaCBXaGlza2V5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTBjOGJlODktODk2ZC00MDRjLTk0NWUtYzEzNWQwNjNhNzRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYW1lcyBCb3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NDE2ZGZhMy0wNWU5LTQ2ZjMtYjFkZi00ZmE2NzAzZTliNWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRyb3NvcGhpbGEgRmFzaGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0ODQ0ZmFkLTk1MTktNGMxNC04YWIzLWQzODYwNmE3YmI0NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29uZGl0aW9uYWwgWXVuaWVza3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OGYyNmEyNS05MDVmLTQ4NTAtODk2MC1iNzQxYjBjNTgzYTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0dSBNY2RhbmllbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlmYmFiNGRmLTM1ZGQtNDk5MS05ZTgyLTk2MzVhYjc1NmIwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9jaW8gQ2FzdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTFiNTVjNWYtNmQwMS00Y2ExLTk3NmEtNWNkZmUxOGQxOTljXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCaWxsdXAgS2lkZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNWEwMmE0Yi03MmEyLTRlZWYtODAyYy0xNGExOTY0ZTBkYWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1c2FuYW5hbmEgUG9ydG1hbnRlYXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOGU3NTdjNi1lMjk5LTRhMmUtYTM3MC00ZjdjM2RhOThiZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbmRyaWNrcyBMZW5ueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE5MzhmNTg2LWY1YzEtNGEzNS05ZTdmLThlYWFiNmRlNjdhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzcGVyIERlc3RpbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOTg5MTdiYy1lOWRmLTRiMGUtYmJkZS1jYWE2MTY4YWEzZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplbmtpbnMgSW5ncmFtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWE2YzI2NjItNzVmOC00NTA2LWFhMDYtOWEwOTkzMzEzMjE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFaXphYmV0aCBFbGxpb3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWE3YWM5Y2ItZTlkYi00MzEzLTk5NDEtOWYzNDMxNzI4ZGNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXR0ZW8gQ2FzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI5M2Y0YzMyLTY0ZTQtNDQ2MS1iNzA4LTA1ZjZmN2Y2YmJjMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXRtYSBXaWxsb3d0cmVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzc3MWFiYWItZjQ2OC00NmU5LWJhYzUtNDNkYjRjNWI0MTBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYWRlIEhvd2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjY2Q2MDY4Yi0yNzM1LTQwNzItYmZlNS01NzFhNWQ1N2MyODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVwaHJhaW0gTGFkZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkNDE3ZjhhLWNlMDEtNGFiMi05MjFkLTQyZTJlNDQ1YmJlMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWl6YWJldGggR3VlcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDlhMDcyZjUtMWNiYi00NWNlLTg3ZmItYjEzOGU0ZDhmNzY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFuY2lzY28gT2JqZWN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGU2N2I1ODUtOWJmNC00ZTQ5LWI0MTAtMTAxNDgzY2EyZmJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGFxdWlsbGUgU3Vuc2hpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZmQ1Y2NiYi05MGVkLTRiZmUtODNlMC1kYWU5Y2M3NjNmMTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk93ZW4gUGlja2xlc3RlaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlM2UxZDE5MC0yYjk0LTQwYzAtOGU4OC1iYWEzZmQxOThkMGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYW1iZXJzIEtlbm5lZHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlODY1MmRiMC1jNjdhLTRjOGEtOWFjYy0yOTUxY2Y0MDBjZDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhcnJlbiBDaGlsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU5NzI5ODRjLTI4OTUtNDUxYy1iNTE4LWYwNmEwZDhiZDM3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVja2VyIFNvbGlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWJhNzE1ZjItY2FhMy00NGMwLTkxMTgtYjA0NWVhNzAyYTM0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdWFuIFJhbmdlbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkOGQ1OGI2LWYzN2YtNDhlNi05OTE5LThlMTRlYzkxZjkyYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9zXFx1MDBlOSBIYWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkNTQ5YmZlLWIzOTUtNGRjMC04NTQ2LTVjMDRjMDhlMjRhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FtIFNvbGlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGZlODk2ZTEtMTA4Yy00Y2U5LTk3YmUtMzQ3MGRkZTczYzIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcnlhbmF5YWggQ2hhbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZDQ1NDVlZC02MjE3LTRkN2EtOWM0YS0yMDkyNjVlYjY0MDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpYW5hIENhc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MGNjZmYxZS02YjUzLTQwZTItODg0NC0wYTI4NjIxY2IzM2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vb2R5IENvb2tib29rXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGU2YWQxYTEtN2M3MS00OWRlLThiZDUtYzI4NjcxMmZhZjllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdXR0b24gUGlja2xlc3RlaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOTgxMmE4ZS02N2M0LTQzNGMtODVjYi02ZGRmNzg1Y2FkZjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1Z3VzdGEgQ2hhZHdlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNzQ0ZjUzNC0yMzUyLTQ3MmItOWU0Mi1jZDkxZmE1NDBmMWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR5bGVyIFZpb2xldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQzYmY2YTZkLWNjMDMtNGJjZi05MzhkLTYyMGUxODU0MzNlMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlndWVsIEphdmllclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEwNzFhNzEzLWE2YTEtNGI0Yy1iYjNmLTQ1ZDlmYmE3YTA4Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9yYSBQZXJlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQxYTdjMTNmLThlNzgtNGQyZS05Y2FlLWViZjNhNWZjZGI1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpamFoIEJhdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2FmYjMwYzEtMWIxMi00NjZhLTk2OGEtNWE5YTIxNDU4YzdmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEaWNrZXJzb24gR3JlYXRuZXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzA2NGM3ZDYtOTFjYy00YzJhLWE0MzMtMWNlMWFhYmMxYWQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3JnZSBJdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDlkMWQ2ZS03ODIyLTRhZDktYmFjNC04OWI4YWZkOGE2MzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlcnJpY2sgS3J1ZWdlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBjODNlM2I2LTM2MGUtNGI3ZC04NWUzLWQ5MDY2MzNjOWNhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVuZWxvcGUgTWF0aGV3c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI4NjIzN2JiLWFkZTYtNGIxZC05MTk5LWEzY2MzNTQxMThkOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSHVybGV5IFBhY2hlY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNDhjY2YzZC1kNWY2LTRiNjktODNkOS00MDIzMGNhOTA5Y2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFudG9uaW8gV2FsbGFjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ3MmY1MGMwLWVmOTgtNGQwNS05MWQwLWQ2MzU5ZWVjMzk0NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmh5cyBUcm9tYm9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAyNjhiMzVmLWIxOWItNGIyZi05MGM0LTg5ZmIzNjQwMzY4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2l0YSBCaXNjdWl0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0Zjk1NWZlLTljYzktNDQ4Mi1hNGQyLTA3ZmUwMzNiNTllZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmFuZSBWYXBvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA2Y2VkNjA3LTdmOTYtNDFlNy1hOGNkLWI1MDFkMTFkMWE3ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9ycm93IFdpbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5M2FmODJjLTg0YWEtNGJkNi1hZDFhLTQwMWZhZTFmY2U0NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpamFoIEdsb3ZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5NmJiOWI1LTVlYTgtNGRhMS1hMTEzLTU3YTVmYzllOWI2N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzcGVyIEppLUV1blwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyOGEzM2I5LWM4MmYtNDA4ZS05ZmEzLTUxNjFmNWEzZTI5N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXltZXIgRWdnbGV0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzY3NmFiNS1hZmIzLTQ2NTAtYWYyMy1iY2RlMTAzN2QyNWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhc2hpZWxsIERydW1zb2xvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWRiMmY2MDItNjRiMS00YTVjLTg2OTctMTkzMmNjMmM2ZGYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNdW1teSBNZWxjb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZjE1OWJhYi05MjNhLTQ4MTEtYjZmYS0wMmJmZGU1MDkyNWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hTlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3MjcyMTVkLTM3MTQtNDM4ZC1iMWJhLTJlZDE1ZWM0ODFjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9taW5pYyBXb21hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJhOGIzNzFmLWQyZWItNGJlNy1iODlmLWFmZjEwZWRiNDQxMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmVucnkgV29iaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjlkNmI1MC0zY2UyLTRjYjEtOGNkMS0yYTBmYzA1NzMzZTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bWEgQmx1ZWJlcnJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzA1OTIxZTgtM2Y0ZC00YzkxLWEyODAtZDdiZjFhNDQ5YjA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUb3J1cyBNY0doZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMGZhNGJmMS04ZjNiLTQ1ZGMtOWFhMy02NTExZTk5ODA0MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkthaiBNdXJwaHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMmM5YmNlNi02ZTUyLTQwZmEtOWY2NC0zNjI5YjNkMDI2YThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlbiBNb3JpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzMWQ5OTEwLTA5OTEtNDBjOC05MzQ1LWE3Y2RkYjc0NjVjNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmlzdHJvIFN1Y2NvdGFzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM0ZTFiNjgzLWVjZDUtNDc3Zi1iOWUzLWRkNGJjYTc2ZGI0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxleGFuZHJpYSBIZXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzdlZmVmNzgtMmRmNC00Yzc2LTgwMGMtNDNkNGZhZjA3NzM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZW5peCBSZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZTBmN2Y0OC02NzViLTRmNzItYmI0MC04YThjNjc2ZjAwNTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhbGx1cCBNdXJwaHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NmViYTYzOS1lYTczLTQ3NGQtYmNlZS1lYzY4YzA1MjhiMDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFua2xlIEhhbGlmYXhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1OGZjYTVmYS1lNTU5LTRmNWUtYWM4Ny1kYzk5ZGQxOWU0MTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1bGxpdmFuIFNlcHRlbWJlcmlzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmYzQ3MTNjLTQ1ZTEtNDU5My1hOTY4LTdkZWZlYjAwYTBkNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVyY2l2YWwgQmVuZGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjFiYmJmMzQtOThjMS00YmY2LWJkMGMtNTZjMTkxOTliMzVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcXVpZCBHYWx2YW5pY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY5NWRhZjAyLTExM2QtNGU3Ni1iODAyLTA4NjJkZjE2YWZiZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFjaGVjbyBXZWVrc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZlNzQ0YjIxLWM0ZmEtNGZhOC1iNGVhLWUwZTk3ZjY4ZGVkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFuaWVsIEtvY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjcxNjY3Yi01OWYyLTQ2ZGYtYWRhYy1hODg4NWE0ZjZhYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaXMgU3RyZWV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzMyODk5YTMtMjA4Mi00ZDlmLWIxYzItNzRjOGI3NWUxNWZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaW5hdG8gSXRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzU0MWZjNGItN2U2Yi00NDZhLWI2YTMtNzU1ZGU0NmEwMDE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWlubnMgSmVzcGVyc2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzdhNDFjMjktOGFiZC00NDU2LWI2ZTAtYTAzNDI1MjcwMGQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGlwIERlYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZDM4ODg0Ni04ZjRjLTQwN2YtYWFjYi1iODQ0ZDI1NjFjNWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpdCBBZGFtc2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2UxNjBlOWYtMmM3OS00ZTA4LThiNzYtYjgxNmRlMzg4YTk4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaG9tYXMgTWFyc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZTkxMGU4Ni04NGI0LTQzYzMtYTY4ZS02N2I2NjEyZGRiZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk92aWQgU2Nob2ZpZWxkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODRhMTdmNDgtMDM5My00MTY2LTg2NGEtZjdjZDI3NTU3NzAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBcmNoZXMgQ2FuZGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODUyMTA3YjgtOGNmMy00ZmJiLTk3ZjktNzZmNzNiYzQ3NzA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWN5IFZhbmRlck1hbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OTk3MTIzZi1iMjRkLTQzMjYtODBjOC0zYzg2MmY4MGY2MjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvaG5kYW4gTWNHaGVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTgyMjA3NTMtMGE3MC00YTRlLTgwNTgtMGE3YmNiNmY3ZDVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZW5qYW1pbiBMaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YWJlMDJmYi0yYjVhLTQzMmYtYjBhZi0xNzZiZTZiZDYyY2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hZ29taSBNZW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWZjM2M2YWUtNWVkNS00OWNlLWE3NWItMjU3ZWMxMDIyYTE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaG9tYnVzIERyYW1hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTVlNGU4NmYtZDNhOC00MjRhLTk3NjgtMmFkYTE3YTRlNzQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaWxsb3cgRWdnYnVydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE3MzQyN2IzLWU5NmEtNDE1Ni1hOWFiLTg0NGVkYzY5NmZlZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2VzbGV5IFZvZGthXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWJiZDVlYzUtYTE1Yi00MjFjLWIwYzUtY2Q4MGQ4OTA3MzczXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYXQgQmF0c29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2EyNmQ4Y2MtODY2OC00OGM5LWEwNjEtMjhmNmZkZjVmNDRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb2MgQW5pY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTNmYjczNi1kMjBlLTRlMmEtODhjYi1lMTM2NzgzZDNhNDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphdmllciBIb3dlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDIzYTFmN2UtMDA3MS00NDRlLTgzNjEtNmFlMDFmMTMwMzZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZHJpYyBUb3NzZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMmY4MjdhNS0wMTMzLTRkOTYtYjQwMy04NWE1ZTUwZDQ5ZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvYmJpbnMgU2NobWl0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRiM2ZmNmYwLTEwNDUtNDIyMy1iM2E4LWEwMTZjYTk4N2FmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVycGh5IFRoaWJhdWx0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGQ2YmE3ZjEtYTk3YS00Mzc0LWEzYTctYjM1OTZlMjg2YmIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXRoZW8gVGFuYWthXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGYzNGQxNjgtNGQ2YS00MDNjLWFjYTUtMmIxZWJlOTA0NDRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb2MgQ2FzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRmOTRhMzM1LTE2NzctNDIwMC1hMjNmLWQ3OTQ2ODlhNTczMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFuZ29saW4gUnVpelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUwZDY0MjcwLTZmNWEtNGMxMC05YjIyLWY5MWY5ZDRmMjQxY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2V2ZWx5biBDbGFtYnVja2V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTFlMzNhYWItZGY4Yy00ZjUzLWIzMGEtY2ExY2VhOWYwNDZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3luZXIgUnVncmF0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTdlY2Y2NDYtZTVlNC00OWVmLWEwZTMtMTBhNzhlODdmNWY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYWxsdXAgQ3J1ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYWMwMGVjOS0zMzc2LTQyM2MtODY4NC05M2RkMmNiZDZlZDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVkZGllIE5ha2Ftb3RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWZkYTQxYzEtZWIwNy00NWIzLThhZDUtNDI0YzYzMTE1MTE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdWZ1cyBLaWRkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY1NjY1N2QzLTNiZGMtNDg0MC1hMjBjLTkxYWNhOWNjMzYwZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFsaWsgUm9tYXluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAwY2E0MGFmLWE4ZGYtNDUxOS1hZjlhLWJlYWY5M2ZmYzEyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpIFdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAxYmNiZWViLTBmNjMtNDNiNC04Y2ZhLWVjMDJiNDJhMWE1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW50cm9weSBIYW5kY3JhbXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMWQzZWY4NC04ZWMyLTQxMTYtOWE3Yi01Zjk1NGRlMmVjOTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhcHB5IFlvaW5reVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAyODhiYmIxLWE5OTQtNDVjMy1iYjhmLTMzMWZlMjk2MDkwZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlYWxzIENoYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDNkMDYxNjMtNmYwNi00ODE3LWFiZTUtMGQxNGMzMTU0MjM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYXJjaWEgVGFiYnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNTQxNWMwZC1kYjNiLTQ1NWQtOWQwNi02ODRhMzk1MDZjZjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBob2ViZSBCbGFzZXNvbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNjcyYTRiZS03ZTAwLTQwMmMtYjhkNi0wYjgxM2Y1OGJhOTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhc3RpbGxvIExvZ2FuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDdhYzkxZTktMDI2OS00ZTJjLWE2MmQtYTg3ZWY2MWUzYmJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZHVhcmRvIFBlcmV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDg4ODg0YWYtZjM4ZC00OTE0LTlkNjctYjMxOTI4NzQ4MWI0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMaWFtIFBldHR5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDg5MmRhNmUtYzlkMS00OTRmLTg0YmMtMGMxZjg3OTAxOGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb2IgRS4gQ2FnYXlhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA5NGFkOWExLWUyYzctNDlhMC1hZjE4LWRhMGUzZWI2NTZiYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXJpY2tzb24gU2F0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBhNmI3NWVhLWZlNjktNDQwNi1iZTI0LWExNDljOTRkYWEzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2VyZW4gTW9zc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBiZDVhM2VjLWUxNGMtNDViZi04MjgzLTdiYzE5MWFlNTNlNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGhhbmllIERvbmFsZHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBkNTMwMGY2LTA5NjYtNDMwZi05MDNmLWE0YzIzMzhhYmYwMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgRG92ZW5wYXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGRhZjA0ZmMtOGQwZC00NTEzLThlOTgtNGY2MTA2MTY0NTNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZWUgTWlzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlMjdkZjUxLWFkMGMtNDU0Ni1hY2Y1LTk2YjNjYjRkNzUwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNwb29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGY2MmMyMGMtNzJkMC00YzEyLWE5ZDctMzEyZWEzZDNiY2QxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBYm5lciBXb29kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTI2ZmIxMjgtN2M1My00NWI1LWFjMmItNWRiZjk5NDNkNzFiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWdtdW5kIENhc3RpbGxvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTJmM2ExOGQtY2M2My00ODBkLWIyYWQtZjBkODljMWM0NTYyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGUgTXVycGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzAzMmYwNy0xMGJmLTQ4ZWItYTIzZS1mNDExN2QyNDY4NjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNuYWNrIERldmlhdGlvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzMjlmODM5LWY3OGItNGFjYy04NWFhLTY5YzY5NThmYTQzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gSVhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxM2NmYmFkZi1iMDQ4LTRjNGYtOTAzZC1mOWI1MjYxNmIxNWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlbm5ldHQgQm93ZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNDZjNjM3Ni05MzUzLTQ2NjktYTBlZC02ZTYxNTIxOWQyOTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTRiZmFkNDMtMjYzOC00MWVjLTg5NjQtODM1MWYyMmU5YzRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWJ5IFNsaWRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNGZmNWEzNi1jMzlmLTQ5MTAtYWZmYi0yYTllYTI4ZTA5YjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhleCBQb3J0ZW50aWFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTU4NDBjMDEtZDhlYS00ODIzLWE4MDItOWI2MzVjNTFlZmEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGl0cyBTdHJvbmdib2R5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTU4NTc0MDctMmQ2Yi00M2YxLTg2YzgtYjU3NGM4NzIwOGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBWSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE2YTU5ZjVmLWVmMGYtNGFkYS04NjgyLTg5MWFkNTcxYTBiNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm95ZnJpZW5kIEJlcmdlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE3MzkyYmUyLTczNDQtNDhhMC1iNGRiLThhMDQwYTdmYjUzMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FzaGVyIEJhcmFqYXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNzUwZGUzOC04ZjVmLTQyNmEtOWUyMy0yODk5YTE1YTIwMzFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktsaW5lIE5pZ2h0bWFyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE4Nzk4YjhmLTYzOTEtNGNiMi04YTVmLTZmYjU0MGQ2NDZkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9ycm93IERveWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTlhZjBkNjctYzczYi00ZWYyLWJjODQtZTkyM2MxMzM2ZGI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcml0IFJhbW9zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWE1Mzc2OGItMWVjMS00NjQ2LTg0MTctZGQ1OGI5ODQ5YmQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWxsIENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWFlYzJjMDEtYjc2Ni00MDE4LWEyNzEtNDE5ZTUzNzFiYzhmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdXNoIEl0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFjNTVhZWRmLTZlMzEtNGYzYy05YjE3LThhODRiN2QxNWEwY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFuY2kgR3JhY2tsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFjZGVkNGU3LTgzMDItNDliNy1hNjQ2LTQwYTA3NjdiNjk2OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVyY3VsZXMgTGluY2VjdW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZDdhZjkzZS03OTEwLTQ1YzMtOTc5OS00MTY2YTI3YTZkMGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpc2hjYWtlIENhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFlN2IwMmI3LTY5ODEtNDI3YS1iMjQ5LThlOWJkMzVmMzg4MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9yYSBSZWRkaWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWU4YjA5YmQtZmJkZC00NDRlLWJkN2UtMTAzMjZiZDU3MTU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGbGV0Y2hlciBZYW1hbW90b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFmOTMwMTQwLTlmYzYtNDI0MC05ZWY2LWU3YWMwNjVlYWVmYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVlcmllIE1jQ2xvdWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMDM5NWI0OC0yNzlkLTQ0ZmYtYjViZi03Y2YyNjI0YTJkMzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFkcmlhbiBNZWxvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIwNmJkNjQ5LTRmNWYtNDcwNy1hZDg1LTkyNzg0YmU0ZWI5NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmV3dG9uIFVuZGVyYnVja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIxZDUyNDU1LTZjMmMtNGVlNC04NjczLWFiNDZiNGI5MjZiNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgT3dlbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMzExMGMwZi0yY2Y5LTRkOWMtYWIyZC02MzRmMmYxODg2N2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbm5lZHkgTWVoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjNlNzhkOTItZWUyZC00OThhLWE5OWMtZjQwYmM0YzVmZTk5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbm5pZSBXaWxsaWFtc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0YWQyMDBkLWE0NWYtNDI4Ni1iZmE1LTQ4OTA5Zjk4YTFmN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmljaG9sYXMgU3VtbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjRjYjM1YzEtYzI0Yy00NWNhLWFjMGItZjk5YTJlNjUwZDg5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeXJlZWsgUGV0ZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNTM3NmI1NS1iYjZmLTQ4YTctOTM4MS03YjgyMTA4NDJmYWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVtbWV0dCBJbnRlcm5ldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI2ZjAxMzI0LTlkMWMtNDcwYi04ZWFhLTFiOWJmYmNkOGI2NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVyZCBKYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3ZmFhNWE3LWQzYTgtNGQyZC04ZTYyLTQ3Y2ZlYmE3NGZmMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3BlYXJzIE5vbGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjliZjUxMmEtY2Q4Yy00Y2ViLWIyNWEtZDk2MzAwYzE4NGJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYXJjaWEgU290b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJhZWUzMmY5LWE1YmMtNGY5NS05MzJjLWNmNzQ5MmQwOTM3NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29yeSBUaGlydGVlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkMjJmMDI2LTI4NzMtNDEwYi1hNDVmLTNiMWRhYzY2NWZmZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9uaWEgSm9obnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkNWFjMjc0LTk2ZmQtNDcxYi04MDI4LWY0ZDdiNDJkODMxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFzb24gRGF0YWJsYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzBiNzA1M2EtN2Y1Zi00ZTNiLTk2MDAtN2IzZGE4YmE3ZGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdWNrIFJhdHRsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMGRjMDY1Mi0yNjA4LTQ5YmEtODkyOS0zNjQ5NGZjMmJkMjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhdHNvbiBXYXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzFmODNhODktNDRlMy00N2I3LThjOWUtMGRmZGNkOGJkMzBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeXJlZWsgT2xpdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMzNlM2UyMC02NDQ1LTRlZTQtYWZjOC0yZDZiNTg0YTYzZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFZJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM0YjUxMDNhLWZmMTQtNDg4OS05MzUzLTNmZDBkZTNkMDlhN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gWElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM1MzFjMjgyLWNiNDgtNDNkZi1iNTQ5LWM1Mjc2Mjk2YWFhN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT2xpdmVyIEhlc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNWQ1YjQzZi04MzIyLTQ2NjYtYWFiMS1kNDY2YjRhNWEzODhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvcmRhbiBCb29uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM3YmRhZmRmLWYyMTMtNDcxOC04MjAwLWMxMjNmY2EzOWZmNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2xhbSBSb3NlbnRoYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzOTU0YmRmYS05MzFmLTQ3ODctYjlhYy1mNDRiNzJmZTA5ZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pY2hvbGFzIE5vbGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2FkYjAzOWQtMDg3NS00NGY0LTkxNGYtMWVmOWVlNGMyMTIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYXR1bSBDcmltaW5hbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYWY5NmE2Yi04NjZjLTRiMDMtYmMxNC0wOTBhY2Y2ZWNlZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF4ZWwgVHJvbG9sb2xcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYmUyYzczMC1iMzUxLTQzZjctYTgzMi1hNTI5NGZlODQ2OGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFtYXlhIEphY2tzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYmY4NzEzYi04ODg2LTRmYzQtOTgzZS1lMmM3MmJlZjdiOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXBoZW4gU2hlbGxlZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNjNTNmZjFjLTY0MzctNDk2NS1hNGEyLTQ4OWJjYjkxZDNmNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJlZXplIFJlZ2ljaWRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2Q0Y2NiMDktMGU3Yi00NWFlLWI1MWQtMTk5YzlkMjIyNzYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBWSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2RiMDI0MjMtOTJhZi00ODVmLWIzMGYtNzgyNTY3MjFkY2M2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTb24gSmVuc2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2RkODVjMjAtYTI1MS00OTAzLThhM2ItMWI5Njk0MWMwN2I3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUb3QgQmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkZTE3ZTIxLTE3ZGItNGE2Yi1iN2FiLTBiMmYzYzE1NGY0MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJld2VyIFZhcG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2YwOGY4Y2QtNjQxOC00NDdhLTg0ZDMtMjJhOTgxYzY4ZjE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb2xsYXJkIEJlYXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2YxYWMxNmYtMDNjNC00YTBmLThkYWYtNmU1NGJiZTEyYzMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEcm9zb3BoaWxhIEhvam9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MDI5ZWE3NS1kYTkxLTQ2NzItOWZhNS1lZTMyZWM3ZmE3MTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpheSBHcmF5c2NhbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MGE1MWI3Zi0wMDA1LTQ1NzctOGJlZi04NTlmYzM2ZjA2ZDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MGRiMWIwYi02ZDA0LTQ4NTEtYWRhYi1kZDYzMjBhZDJlZDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjcmFwIE11cnBoeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQyMDRjMmQxLWNhNDgtNGFmNy1iODI3LWU5OTkwN2YxMmQ2MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXhlbCBDYXJkZW5hc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQzZTRkZTAyLWNjMjEtNDQxMy1iYjg4LTFjMTEyOGVlYzE3NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXJidXR1cyBCb25lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ0NmEzMzY2LTNmZTMtNDFiYi1iZmRkLWQ4NzE3ZjIxNTJhOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFyY28gRXNjb2JhclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1MGU2NDgzLWQxMTYtNDFkOC05MzNiLTFiNTQxZDVmMDAyNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW5nbGFuZCBWb29yaGVlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ1OWY3NzAwLTUyMWUtNDBkYS05NDgzLTRkMTExMTE5ZDY1OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tZm9ydCBNb25yZWFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDc4ZDkxZWYtMWE2ZC00YmIzLTk5NjUtODdjZGNjNGFkOGRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb2FkIEtpbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OGExMGFkNi02NzU5LTQ2NjEtODBiZi05ZjlmZTM5MzE2MmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJveGV0dGEgQ29tcGFzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ5M2E4M2RlLTZiY2YtNDFhMS05N2RkLWNjNWUxNTA1NDhhM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm95ZnJpZW5kIE1vbnJlYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OTQxOTc2ZS0zMWZjLTQ5YjUtODAxYS0xOGFiZTA3MjE3OGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNlYmFzdGlhbiBTdW5zaGluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ5NTc4MjZmLTBjNDQtNDY3ZC1iNzFmLTIxMTg1NDUwZjQ1OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJpZW5kIFZvaWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YTE5MjdlNy04OGFhLTRiMmMtYTE4Mi03ZWMyNDdkYzI2NDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1bmJhciBNY0xvdWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YWE4NDNhNC1iYWExLTRmMzUtODc0OC02M2FhODJiZDBlMDNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1cmVsaWFubyBEb2xsaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YzUzZmNkOC1kZjAyLTRhODAtOTljOS01MTcxMDg2M2JjN2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhcnJpZXQgR2lsZGVoYXVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGNkMGFjOGYtNmMyZS00YmYxLWEyMzItYTVhYzZmZDRhNjc3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQdWcgTWVhdGJyaWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGU2M2NiNWQtNGZjZS00NDFiLWI5ZTQtZGM2YTQ2N2NmMmZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBeGVsIENhbXBiZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGYzMjg1MDItZDM0Ny00ZDJjLThmYWQtNmFlNTk0MzFkNzgxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGVucyBMaWdodG5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRmZTI4YmMxLWY2OTAtNGFkNi1hZDA5LTFiMmU5ODRiZjMwYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2VsbCBMb25nYXJtc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUwMTU0ZDU2LWM1OGEtNDYxZi05NzZkLWIwNmE0YWU0NjdmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FydGVyIE9jb25ub3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MGFhZDQ2ZC1iZTYxLTQyMzYtYmIwYy02YzYxOThlMDBiZTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlkzaGlydiBIYWZneTI3MzhyaXZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MTQ5YzkxOS00OGZlLTQ1YzYtYjdlZS1iYjhlNTgyOGEwOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFka2lucyBEYXZpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxYzcwNjM0LWM1MGEtNDdhOS1iYzExLTYwZmE3MjMyOTg3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlb2RvcmUgSG9uZXl3ZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTFjYmE0MjktMTNlOC00ODdlLTk1NjgtODQ3YjdiOGI5YWM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb2xsaW5zIE1pbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MjBiMmExNC1lZjYwLTRlZTgtOWYzOS1jN2JlMTI5NzFlZjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhY2t3b29kcyBCcm9rZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MjdjMWY2ZS1hN2U0LTQ0NDctYTgyNC03MDNiNjYyYmFlNGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1lbHRvbiBDYW1wYmVsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU0YzcyNGFmLWIxNjMtNDMxOS05M2M3LWZkY2FmYmJjYzk5MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2xldmUgTWF0c3V5YW1hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTU1YjBhMDctYTNlMC00MWJjLWIzZGItY2E4ZjUyMDg1N2JjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPb3BzIEFsbCBLZWVwZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTdiNDgyN2ItMjZiMC00Mzg0LWE0MzEtOWY2M2Y3MTViYzViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdXJlbGlhbm8gQ2VybmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1OTE1YjdiYi1lNTMyLTQwMzYtOTAwOS03OWYxZTgwYzBlMjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvc2EgSG9sbG93YXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YTM5YjJkZC0yM2M0LTRhNmYtYTY0NS05OWIwYjE5OTI1ODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0cmlrZSwgTG9va2luZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjViM2YwYTQzLTQ1ZTctNDRlNy05NDk2LTUxMmMyNGMwNDBmMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmh5cyBSaXZlcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YjViY2M2Yy1kMDExLTQ5MGYtYjA4NC02ZmRjMmM1MmY5NThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbWJhIERhdmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWNhN2U4NTQtZGMwMC00OTU1LTkyMzUtZDdmY2Q3MzJkZGNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBRdWl0dGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWUzYjFlNmItNmZlZi00NTcyLTgwYzgtZjk0NzkzMzVlYTM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3BwZXIgTG92ZWxhY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MTkyZGFhYi0zMzE4LTQ0YjUtOTUzZi0xNGQ2OGNkYjI3MjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1c3RpbiBBbHN0b3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjIxMTFjNDktMTUyMS00Y2E3LTg2NzgtY2Q0NWRhY2YwODU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYW1iaSBQZXJlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYyODIzMDczLTg0YjgtNDZjMi04NDUxLTI4ZmQxMGRmZjI1MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNraW5uZXkgVmF1Z2hhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYzYTMxMDM1LTJlNmQtNDkyMi1hM2Y5LWZhNmU2NTliNTRhZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9vZHkgUm9kcmlndWV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjRmNTlkNWYtODc0MC00ZWJmLTkxYmQtZDc2OTdiNTQyYTlmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWtlIFdhbGxhY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NTI0ZTllMC04MjhhLTQ2YzQtOTM1ZC0wZWUyZWRlYjdlOWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhcnRlciBUdXJuaXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NjJmMzRmMC1iZDc0LTQ5YTctODUwNi01MGQ0ZGQzMzNjNGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaW4gQmVhbmJhZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY2Y2ViYmJmLTk5MzMtNDMyOS05MjRhLTcyYmQzNzE4ZjMyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VubmVkeSBDZW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjc3MTgzNjItOTk4Yy00MDBjLTk4YTYtMmUzMGNjYWE3OGY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBYSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ODMzY2E3ZC05MTBlLTQ4ZjUtYjI1ZC0yODg2Y2RiMDhkMGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhbmRlciBQZXJtYWRlYXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmE4NjliNDAtYmU5OS00NTIwLTg5ZTUtZDM4MmIwN2U0YTNjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYWtlIFN3aW5nZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YjI3MjJhNi1iMzcxLTRhN2UtOGFkZi03MjhkYTYxMmE0MGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplbm55IFF1aWNrc2lsdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmJkNGNmNmUtZmVmZS00OTlhLWFhN2EtODkwYmNjN2I1M2ZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJZ25ldXMgTWNkYW5pZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YzFjMDUzOS00MTY4LTQ5NzctYmYxNy0yNTdiY2JmZWM5MmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNocm9tYXRpYyBKdW1wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmUzNzNmY2EtYjhhYi00ODQ4LTlkY2MtNTBlOTJjZDczMmI3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25yYWQgQmF0ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZjM5YTJmOS03NmQ3LTQ0ZmQtOGE2ZC0wMGY4N2Q3YmIwMDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlF1YWNrIEhvb2tyYWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzA4ODM1MGMtOTA1Yi00YWMwLWE5ODItNjQxOTFlY2FlY2FhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGVyaSBGcmlkYXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MjFmYjk0Ny03NTQ4LTQ5ZWEtOGNiZS03NzIxYjBlZDQ5ZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhbWFyYSBMb3BlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjczMTBjMzJmLThmMzItNDBmMi1iMDg2LTU0NTU1YTJjMGU4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9taW5pYyBNYXJpanVhbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NGIwOTc0YS1mODI3LTQ5MzQtOWRkMC0yMDIwNzI4YmQ0Y2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZWFsaXggS3JhbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzUwYzdkNDQtNzU3YS00MzBjLTlmYTMtZDRjYTIyMTExOTMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb3NzdGluIEFuZGFudGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NWU4MGU0Ni0yNzZkLTQzODgtYmI2YS1kYTkxMjVhMGU4YWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNpY2VybyBIb21lc3R5bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ODE1ZTgyZS01ZWE0LTRjZWYtYjI4Yi02ZDhlMDU4MTVjNTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pYWggSmVzYXVsZW5rb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc4NTNhYThjLWU4NmQtNDQ4My05MjdkLWMxZDE0ZWEzYTM0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHVja2VyIEZsb3Jlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc5NTE4MzZmLTU4MWEtNDlkNS1hZTJmLTA0OWM2YmNjNTc1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRraW5zIEd3aWZmaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YWZlZGNkOC04NzBkLTQ2NTUtOTY1OS0zYmRmYjJlMTc3MzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBpZXJyZSBIYWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdkNDVlOTQyLWFjMjgtNDFiNi04ZDg5LTVlNGE0NDU5MWMxMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2lubmEgVG9hc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZjM3OWI3Mi1mNGYwLTRkOGYtYjg4Yi02MzIxMWNmNTBiYTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplc1xcdTAwZmFzIFJvZHJpZ3VlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdmM2YyZTc1LTkwMGUtNDBiNi04NDZiLWRiNTg1NTQxNDkwZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9naW5pYyBCdXJnZXJ0b2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2Y3MDQyZGUtN2ZjMS00NWY5LWI3YzQtOTE2OWQxNDU0NjUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIQU5EU09NRSBTQ0FSRlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwMGFjNjI3LTAzMzQtNDFkNS05OGRmLWM1MWE0N2U0NmFlZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hhbmRyYSBCbG9ydGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwNWJhNDgwLWRmNGQtNGY1Ni1hNGNmLTBiOTk5NTkxMTFiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGV0aWNpYSBMb3phbm9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MmQ1ZTc5ZC1lMTI1LTQ0NjAtYjFmYS1kMDQ2YWQ3NzM5ZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYW5nZXVwIExpdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgzMWIxMTIxLWNhMTQtNGRiYi1hZmVlLTU2NjYwYmIxMWYwY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFuYSBCZWF0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg0OWUxM2RjLTZlYjEtNDBhOC1iNTVjLWQ0YjRjZDE2MGFhYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSnVzdGljZSBWYWxlbnp1ZWxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODYwNGU4NjEtZDc4NC00M2YwLWIwZjgtMGQ0M2VhNmY3ODE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYW5kYWxsIE1hcmlqdWFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg3OTgzMDA2LWM5YzUtNDU5Zi04ZTdjLWU3ZWRjYmQ5MDJkY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NoaXNtIFRocm9uZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OWM4ZjZiZi05NGEyLTRlNTYtODQxMi1iZGIwMTgyNTA5YTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbmNyZXRlIE1hbmRpYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGE0ZGMyYmItYWM1Yi00Nzc0LTg2YmYtYzdmOGQzMDAwYTRhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUZWV0aCBCYW5kYW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGNmYjdlZTktY2ZhNC00NDVjLTgzMGUtMjcyMzc5N2ZhN2IzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb3hwbG90IEpvbmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGUxZWVlYjgtMWI4MC00NzgxLTlkODUtYmRhM2I1OGE0NWY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWdpIFVwcGVyY3V0c2tpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGYzNTdjOWMtNTIxYS00MDYyLWE3NzEtMmU1NDc3NDZhMTY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaXQgSG9uZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MDZhNTcyOC01NDU0LTQ0YTAtYWRmZS1mZDhiZTE1YjhkOWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplZmZlcnNvbiBEZWxhY3J1elwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwY2MwMjExLWNkMDQtNGNhYy1iZGFjLTY0NmM3OTI3NzNmY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FzZSBMYW5jYXN0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MmZmOGU0Mi1kY2NhLTRhOTQtYTgzZC0yNGQyOTAwYjgxMWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5lYnVsYSBIb2xzdGVpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzMTNlNDFjLTNiZjctNDM2ZC04YmRjLTAxM2QzYTFlY2RlYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZGllIE5lbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzMzczODlmLTQzMDEtNGUzMC1hMTA4LTQ2ODBjMDJlZTFmZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXJ0ZW1lc2lhIFRlaXhlaXJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTM1MDJkYjMtODVmYS00MzkzLWFjYWUtMmE1ZmYzOTgwZGRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb2RyaWd1ZXogU3Vuc2hpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MzdjMWEzNy00YjA1LTRkYzUtYTg2ZC1kNzUyMjZmODQ5MGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBpcHBpbiBDYXJwZW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NDRkOTM5ZS02OGI4LTQyNTktYjljZC00NmI0YWM5Nzg5YzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vbGx5IFRhcGVkZWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTQ1OTc0YzUtMTdkOS00M2U3LTkyZjYtYmE0OTA2NGJiYzU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXRlcyBTaWxrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTRlMWUxNjItOWQyZS00NDA3LTgwM2EtMTliY2VlMzY5OTMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGdlYnJhIEdvbGRiZXJnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTYwZjA0MWEtZjc5NS00MDAxLWJkODgtNWRkY2Y1OGVlNTIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXlyYSBCdWNrbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTc4NmIyYzktMTIwNS00NzE4LWIwZjctZmMwMDBjZTkxMTA2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZXZpbiBEdWRsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5Nzk4MWU4Ni00YTQyLTRmODUtODc4My05ZjI5ODMzYzE5MmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhaXlhIFZpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NzllNTEwNS1jYmU5LTRmOTUtYWQxMy1jZTMwYzA3ZjFmZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvcHMgU2x1bXBzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTdlYzVhMmYtYWMxYS00Y2RlLTg2YjctODk3YzAzMGExZmE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbHN0b24gV29vZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ODIwZjJjNS1mOWRhLTRhMDctYjYxMC1jMmRkN2JlZTJlZjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlYW51dCBCb25nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOThhOTgwMTQtOTYzNi00ZWNlLWE0NmEtNDYyNWI0N2M2NWQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaWtpIEZhbWlsaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OWU3ZGU3NS1kMmI4LTQzMzAtYjg5Ny1hNzMzNDcwOGFmZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldpbm5pZSBMb3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlhZTdjZWM0LTFkZjAtNDkyMi04ZjdhLWYzYjk5NmQwMzFlN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSlxcdTAwZWJmZiBEZVNoaWVsZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YmEzNjFhMS0xNmQ1LTRmMzAtYjU5MC1mYzRmYzJmYjUzZDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vb25leSBEb2N0b3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YzE0Y2IwYy03OWFiLTRiOTQtOWFlMy1jOGRlMWM1ODdlNTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdNXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWUzOWY4MDgtZmY3MC00MjMyLThhOGMtMjgwODUyMjcxNTVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdWdjYXRjaGVyIFJvbGRhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEwODMyNDZiLTM1ZjQtNGRhZC04YjA3LThiMjgwNDdlMDgyM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVyYSBJcnZpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMGU3NDQ1Zi0yYjkzLTRjYTctYTY5ZC1mZjMyNTkzNzAwZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk11bW15IENhbnRidXJuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTExMjQyYWUtOTM2YS00NmI0LTkxMDEtYmUyY2FiYWZlZWQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGVjdHJpYyBLZXR0bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMTNmNjdkNS0yMmViLTRlZTktOGI2Ny04OTNiMjFhY2Q4N2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNlZHJpc3NpbW8gU3VnYXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMjQ4MzkyNS02OTdmLTQ2OGYtOTMxYy1iY2QwMDcxMzk0ZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpbW15IE1hbmNvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTI1YWNmM2EtNmQyYy00NDg1LTk3NWItYTA0NTQ5ZDA4NGYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXNvbiBNLiBNY01hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTdiMGJlZjMtZWUzYy00MmQ0LTllNmQtNjgzY2Q5ZjVlZDg0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYXJ1dGEgQnlyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE4NTMwYmU1LTg5MjMtNGY3NC05Njc1LWJmOGExYThmNzg3OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9oYW1tZWQgUGlja2xlc3RlaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYWRiZTQ4Ni02YmYyLTQyYmQtODQxOC1kYmQxYWEzNmVkZDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR1cmluZyBDYXB5YmFyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFiMDRiYTIyLTY5YjEtNDNjYS1hMzA3LTM0NWU0NjBkNzk1YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9uZSBCaW5hcnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYjliMjU5Mi1hNjRhLTQ5MTMtYmY2Yy0zYWU1YmQ1ZDI2YTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYXUgSHVlcnRhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWJhMDdjMjgtZTQxMC00NzEwLWI0MjYtYjNlYmEzOTY5MzBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYXVudCBXZWRuZXNkYXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYzEzMjY0Zi1hZjRlLTQ0MjMtOWU0YS00MzQ5OWEwZjgyMjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk51bWJlciBDcnVuY2hlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFjNTdjZjI4LTU1NmYtNDdhZi05MTU0LTZiY2VhMmFjZTlmY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmV5IFdvb3RlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFjNWU0Y2UyLWRlNmYtNDA4Yi05OTEwLWE1MmJiMWQxYTk3OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWFtcyBSb2xzZW50aGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWY2Njk2ZDQtZDI4ZS00NGE3LWI2ZmQtYTU0MmRmZmE3MzY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFmYzkwMzk4LWI4OTEtNGNkZi05ZGVhLWFmOGEzYTc5ZDc5M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWF6bWluIE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWZkYmQ4MzctN2ZjOC00Yzk3LWFjMzEtNjM2OTUwYzJiM2U0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCbGFzZWJhbGwgU3VyZ2VvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIwMDQ1NTU5LTgxY2YtNDJlMC04N2Q0LTNiYmJkM2NlMGJjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFqb3IgQXJjYW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjAxOWZiMmItOWY0Yi00ZGViLWJmNzgtNmJlZTJmMTZkOThkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHbG9yaWEgQmVudGxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIwNTZhODI1LWI2MjktNDg1Ni04NTZiLTUzYTE1YWQzNGFjYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVubmV0dCBUYWthaGFzaGlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzU3ZmJmNC01MzNlLTRmMmMtODYxNi1hNTc2ZTk5NTQ3OTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhdCBJbm5pbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMzkwYjI4Yy1kZjk2LTQ0M2UtYjgxZi1mMDEwNGJkMzc4NjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkthcmF0byBSYW5nZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiM2M4YzBhMC0yMGEwLTRjNWQtYTM5MS0zNGI5OTAzODY5M2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hbmRhIE1vdGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiM2Q0OGE4NC1hZGM2LTQ0ZjQtYmI2OS01MWQyYzZiMTIwM2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFhJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjY5YWEyNmYtNzFmNy00ZTE3LWJjMzYtNDljODc1ODcyY2MxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFuY2lzY2EgQnVydG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjcyYTEzNmUtYmJmZC00Njg3LWE1NzYtMWFiNTM4YzhmMjY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW1vdGhlcyBEZW1iXFx1MDBlOWxcXHUwMGU5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdhZGJiY2MtMDY3OS00M2YzLWE5MzktMDdmMDA5YTM5M2RiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb2RlIENydXRjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3YzFkZGRhLTk0NWMtNGIyZS04ODMxLWFkOWYyZWM0YTYwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9sYW4gVmlvbGV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdjNGY5ODYtZTYyYS00YThmLWI1ZjAtOGYzMGVjYzM1YzVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPc2NhciBIb2xseXdvb2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiODUxNjFkYS03ZjRjLTQyYTgtYjdmNi0xOTc4OWNmNjg2MWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphdmllciBMb3R1c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJiZGViM2UyLWNkNWEtNDZmZi05YTY5LWZkMDZiMTQ4MjcxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVhbnMgUmVibGFzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkNGM2ODM3LWVlYWEtNDY3NS1hZTQ4LTA2MWVmYTBmZDExYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV29ya21hbiBHbG9vbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkZTdiZGM1LWUwYTgtNDk5MC1hNmI2LWM0OTA5YzNlYmJjN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ291c2luIFNwaWtlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmU0ZjI4OGItZWY4Ny00ZThlLWI4ZWUtMjBlZWMxOGU4MGI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb2xrYURvdCBNYXRyaXhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDllNjZiMy01ODQ3LTRjYmItYWViYS0yYjcwZTdiYWZlZGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlByZW1qZWV0IExpdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMzYjFiNGU1LTRiODgtNDI0NS1iMmIxLWFlM2FkZTU3MzQ5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FsbCBPc2Jvcm5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNDQxODY2My03YWE0LTRjOWYtYWU3My0wZTgxZTQ0MmU4YTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNocmlzIFRoaWJhdWx0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzU0OWYyODAtODJiYS00ZDhlLWE0Y2UtYzQ5ZTU2NDYxZmI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWYWwgSGl0aGVydG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNTRmYmExMi0yZmI1LTQwOTEtYjFkNy0xNDQ5NjkzYjM1ZDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphY29idXMgSGFycGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzU3MjIyZmQtZGY1NS00NjRjLWE0NGUtYjE1NDQzZTYxYjcwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYXRoYSBTcHJ1Y2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNjE0NmM0NS0zZDliLTQ3NDktOWYwMy1kNGZhYWU2MWUyYzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bGFzIERpYXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNmJkMjFhOC03ODgwLTRjMDAtOGFiZS0zMzU2MGZlODRhYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldlbmR5IENlcm5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzkwZWFmZGYtNDI0NC00MWUwLThhNjYtYWRmMzFkNzAwZjAyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEZW5pbSBTcXVhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYTcwOTIwNS0yMjZkLTRkOTItOGJlNi01Zjc4NzFmNDhlMjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpdmVycyBKYXZpZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYWE5YmQ4Ni0yNDRhLTRhYmEtYTIzNy02YTk1MjhmMDk1NzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hZGRvbmcgQ2FuZHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYWNlZTBiOC01MGZjLTRkZjQtOTZlYS0wODlhM2Q1MDE4MTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5saWtraSBIYXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2M3MjVhNTgtMzhjYy00MmFmLTlmZjgtYWNlNzY1NDFhYzI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGRvIENvbWViYWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2NjOTlmMmYtMmZlYi00ZjMyLWE5YjktYzI4OWY2MTlkODRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJdHN1a2kgV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Q1NDk0YjQtMDVkMC00YjJlLTg1NzgtMzU3ZjA5MjNmZjRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2ZhcmxhbmQgVmFyZ2FzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Q2YjEwMmUtMTg4MS00MDc5LTlhMzctNDU1MDM4YmJmMTBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYWxlYiBNb3JpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkOWQ5YjM1LTBiYTQtNDg0Mi04NTc3LTJjODBlOTE5NjhkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2U5OWQ3YWYtYmE3NS00OGE3LWE1ZDgtZDQ2ZjU0MzgyOWYyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWN5IFRva2thblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlYWM3ODVlLTU1ZmQtNGE0ZS05YmM4LTE3YTY2MmE1OGEzOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVzdCBDZXJuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlYjU2MDZkLWVhM2YtNDQ3MS05Y2E3LTNkMmU3MWE1MGRkZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9uZG9uIFNpbW1vbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZWI4ZjhjZC04MGIyLTQ3ZjAtYjQzZS00ZDg4NWZhNDhhYTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbmlhIEJhaWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQwMDI5NDZmLWU3ZWQtNGNlNC1hNDA1LTYzYmRhZjVlYWJiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9yZ2UgT3dlbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNDZhYmIwMC1jNTQ2LTQ5NTItOTIxOC00ZjE2MDg0ZTMyMzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bGFzIEd1ZXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ1MTkyZDk1LWE1NDctNDk4YS1iNGVhLTY3NzBkZGU0YjlmNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3VtbWVycyBTbHVnZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDZlOWEyMTEtN2IzMy00NWQ5LThmMDktNmQxYTFhN2EzYzc4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaWxsaWFtIEJvb25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDc0YTI0NzMtMWYyOS00MGZhLWE0MWUtNjZmYTIyODFkZmNhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5kcnkgVmlvbGVuY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNzk2ZDI4Ny03N2VmLTQ5ZjAtODllZi04N2JjZGViMjgwZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkl6dWtpIENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDg3NThjMWItYWZiYi00M2E1LWIwMGItNjAwNGQ0MTllMmM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPcnRpeiBOZWxzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkOGJjNDgyZS05MzA5LTQyMzAtYWJjYi0yYzVhNjQxMjQ0NmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1Z3VzdCBPYnJpZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYWIxMjZhOS0zMzEwLTRmNmUtYTNiYS0zZTMwNDRhMGZlZWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhbWVzIFBlcmdhbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZDdlNzEwZi1kYTRlLTQ3NWItYjg3MC0yYzI5ZmU5ZDhjMDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkl0c3VraSBXZWVrc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkOGE0M2E0LWEwMjQtNDRlOS1hNTIyLTc4NWQ5OThiMjljM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlndWVsIFBldGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGUzODM2YTQtZmRiYS00NmNjLWFiNTMtNDlmY2FhY2MzOWMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb21Qb20gUG9tb2Rvcm9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZTUyZDVjMC1jYmE0LTRhY2UtODMwOC1lMmVkM2Y4Nzk5ZDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvc1xcdTAwZTkgTWl0Y2hlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZmUzYmMxYi1mY2E4LTQ3ZWItOTY1Zi02Y2Y5NDdjMzU0NDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxpbnVzIEhhbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTExZmY1N2EtZWM1ZC00ZDU5LTgxYTMtZmZlMzUyOWIwZTYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFc3ByZXNzbyBNYWNoaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTE2NTExMTYtNDUzMy00YjM5LTg5MzEtNjJkMDIzZTIxNTc5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZXJvIEluZGV4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTE4MWFkNGEtZGQwOS00ODczLWFlNjgtYjUwNTE4ZDIwNzIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXRpc3RhIE9hdG1pbGtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMmFkODFmZi1mZmYyLTQwYmItOTA0My05NWJkYWYzNGViYzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN3b3JkcyBNYWdwaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNDkyZmU3ZS0xNTcwLTRkNWUtOTJhMi03Y2ZiMmNmZWU1YTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklrZWEgSmVsbG9maW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNDk1Y2FkYy1hNjQ1LTQzOWQtYTU1Ni1lNDFkZTc0OTNmMThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR3b2Z1cmlvdXMgUHVkZGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU2MTE0ZmQ0LWExMWQtNGY2Yy1iODIzLTY1NjkxYmIyZDI4OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmV2YW4gVW5kZXJidWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTY3NjgwNjktMWRiNy00NGQ2LTg0OWItMGEyODFmNjJlODU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWVpdGhsZWluIFNodWZmbGVjYXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNzQ5ZGMyNy1jYTNiLTQ1NmUtODg5Yy1kMmVjMDJhYzdmNWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1cmVsaWFubyBFc3Rlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU5MTlkZmFlLTkxYzMtNDc1Yy1iNWQ1LThiMGMxNDk0MGM0MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmFtb3VzIE1lbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYmYyZGE1MC03NzExLTQ2YmEtOWU0OS0zNDFjZTM0ODdlMDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhbGR3aW4gSm9uZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYzQxZDM3ZS0yMzk4LTRlN2QtYWFmMC1mN2Y1MmU1MzAwYzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNsZW1lbnRpbmUgU3RlZXBsZWNoYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjEwNjI5MWEtNTkzNS00NDllLWIwNzUtNzVlNjJkMWQxYjA3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZWxkYSBIaWdod2F5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjEwYmEwNmUtZDUwOS00MTRiLTkwY2QtNGQ3MGQ0M2M3NWY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZXJuYW5kbyBXaW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMTE4NWIyMC03YjRhLTRjY2MtYTk3Ny1kYzFhZmRmZDRjYjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYXppZXIgVG9zc2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjM1OWY5NzktZjY1OC00NDI3LTgyYTMtNzE4NTM3N2M4NWMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb25haCBNb3NhaWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNjM0MjcyOS1hMzhhLTQyMDQtYWY4ZC02NGI3YWNjYjU2MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcmNvIFdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY2M2VlNjhmLTgwMjEtNGRkMC1iM2Q1LWIzZDU4N2FlMzIxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUXVlYnJhZGEgU3RvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNmQzYzEzNC1lM2VlLTQwYTEtYmQ0ZC0wOTUzNDc0NDQxMjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhcmtlciBNYWNNaWxsYW4gSUlJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3NzE1YjA1LWVlNjktNDNlNS1hMGU1LThlM2QzNDI3MGM4MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FsaWd1bGEgTG90dXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOTBjMzk4Yi1lZWYwLTQwY2ItOGIwNy0zMDJhNzU5ZThiZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk51Y2xldXMgU3RyZWV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmJiNTI5MWMtMjQzOC00MDBlLWFiMzItMzBjZTEyNTljNjAwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3J5IE5vdmFrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmMxZDY1ZjUtODkxNi00MWYxLWI4NzgtNGQ0MmE5NjViMDExXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMaXp6eSBQYXN0YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZkZmQzNmM3LWUwYzEtNGZjZS05OGY3LTkyMWMzZDE3ZWFmZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmVlc2UgSGFycmluZ3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZlMWY4MjZmLTczNDYtNDI1Yy05ZDNjLTdlZDVhN2VhZTFiN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5nZWwgSXZvcmllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJjNDE4N2ZhLTQ1OWEtNGMwNi1iYmYyLTRlMGUwMTNkMjdjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2l4cGFjayBEb2d3YWxrZXJcIixcbiAgICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGxheWVycyxcbn07XG5cbiIsIi8qKlxuICogQGF1dGhvciBLYXRlXG4gKi9cblxudmFyIHRyYWNlcnkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb207XG5cbiAgICBmdW5jdGlvbiBzZXRSYW5kb20obmV3UmFuZG9tKSB7XG4gICAgICAgIHJhbmRvbSA9IG5ld1JhbmRvbTtcbiAgICB9XG5cbiAgICB2YXIgVHJhY2VyeU5vZGUgPSBmdW5jdGlvbihwYXJlbnQsIGNoaWxkSW5kZXgsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG5cbiAgICAgICAgLy8gTm8gaW5wdXQ/IEFkZCBhbiBlcnJvciwgYnV0IGNvbnRpbnVlIGFueXdheXNcbiAgICAgICAgaWYgKHNldHRpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiRW1wdHkgaW5wdXQgZm9yIG5vZGVcIik7XG4gICAgICAgICAgICBzZXR0aW5ncy5yYXcgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHJvb3Qgbm9kZSBvZiBhbiBleHBhbnNpb24sIGl0IHdpbGwgaGF2ZSB0aGUgZ3JhbW1hciBwYXNzZWQgYXMgdGhlICdwYXJlbnQnXG4gICAgICAgIC8vICBzZXQgdGhlIGdyYW1tYXIgZnJvbSB0aGUgJ3BhcmVudCcsIGFuZCBzZXQgYWxsIG90aGVyIHZhbHVlcyBmb3IgYSByb290IG5vZGVcbiAgICAgICAgaWYgKCBwYXJlbnQgaW5zdGFuY2VvZiB0cmFjZXJ5LkdyYW1tYXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhbW1hciA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGVwdGggPSAwO1xuICAgICAgICAgICAgdGhpcy5jaGlsZEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhbW1hciA9IHBhcmVudC5ncmFtbWFyO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRJbmRleCA9IGNoaWxkSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJhdyA9IHNldHRpbmdzLnJhdztcbiAgICAgICAgdGhpcy50eXBlID0gc2V0dGluZ3MudHlwZTtcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLmdyYW1tYXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGdyYW1tYXIgc3BlY2lmaWVkIGZvciB0aGlzIG5vZGVcIiwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFwiTm9kZSgnXCIgKyB0aGlzLnJhdyArIFwiJyBcIiArIHRoaXMudHlwZSArIFwiIGQ6XCIgKyB0aGlzLmRlcHRoICsgXCIpXCI7XG4gICAgfTtcblxuICAgIC8vIEV4cGFuZCB0aGUgbm9kZSAod2l0aCB0aGUgZ2l2ZW4gY2hpbGQgcnVsZSlcbiAgICAvLyAgTWFrZSBjaGlsZHJlbiBpZiB0aGUgbm9kZSBoYXMgYW55XG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLmV4cGFuZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRSdWxlLCBwcmV2ZW50UmVjdXJzaW9uKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIC8vIFNldCB0aGUgcnVsZSBmb3IgbWFraW5nIGNoaWxkcmVuLFxuICAgICAgICAvLyBhbmQgZXhwYW5kIGl0IGludG8gc2VjdGlvblxuICAgICAgICB0aGlzLmNoaWxkUnVsZSA9IGNoaWxkUnVsZTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRSdWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IHRyYWNlcnkucGFyc2UoY2hpbGRSdWxlKTtcblxuICAgICAgICAgICAgLy8gQWRkIGVycm9ycyB0byB0aGlzXG4gICAgICAgICAgICBpZiAoc2VjdGlvbnMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmNvbmNhdChzZWN0aW9ucy5lcnJvcnMpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldID0gbmV3IFRyYWNlcnlOb2RlKHRoaXMsIGksIHNlY3Rpb25zW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRSZWN1cnNpb24pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uZXhwYW5kKHByZXZlbnRSZWN1cnNpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGluIHRoZSBmaW5pc2hlZCB0ZXh0XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgKz0gdGhpcy5jaGlsZHJlbltpXS5maW5pc2hlZFRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBub3JtYWwgb3BlcmF0aW9uLCB0aGlzIHNob3VsZG4ndCBldmVyIGhhcHBlblxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIk5vIGNoaWxkIHJ1bGUgcHJvdmlkZWQsIGNhbid0IGV4cGFuZCBjaGlsZHJlblwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGNoaWxkIHJ1bGUgcHJvdmlkZWQsIGNhbid0IGV4cGFuZCBjaGlsZHJlblwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeHBhbmQgdGhpcyBydWxlIChwb3NzaWJseSBjcmVhdGluZyBjaGlsZHJlbilcbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuZXhwYW5kID0gZnVuY3Rpb24ocHJldmVudFJlY3Vyc2lvbikge1xuXG4gICAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuc2lvbkVycm9ycyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBUeXBlcyBvZiBub2Rlc1xuICAgICAgICAgICAgLy8gLTE6IHJhdywgbmVlZHMgcGFyc2luZ1xuICAgICAgICAgICAgLy8gIDA6IFBsYWludGV4dFxuICAgICAgICAgICAgLy8gIDE6IFRhZyAoXCIjc3ltYm9sLm1vZC5tb2QyLm1vZDMjXCIgb3IgXCIjW3B1c2hUYXJnZXQ6cHVzaFJ1bGVdc3ltYm9sLm1vZFwiKVxuICAgICAgICAgICAgLy8gIDI6IEFjdGlvbiAoXCJbcHVzaFRhcmdldDpwdXNoUnVsZV0sIFtwdXNoVGFyZ2V0OlBPUF1cIiwgbW9yZSBpbiB0aGUgZnV0dXJlKVxuXG4gICAgICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgICAgICAvLyBSYXcgcnVsZVxuICAgICAgICAgICAgY2FzZSAtMTpcblxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQ2hpbGRyZW4odGhpcy5yYXcsIHByZXZlbnRSZWN1cnNpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBwbGFpbnRleHQsIGRvIG5vdGhpbmcgYnV0IGNvcHkgdGV4dCBpbnRvIGZpbnNpaGVkIHRleHRcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IHRoaXMucmF3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBUYWdcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0byBmaW5kIGFueSBhY3Rpb25zLCBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBzeW1ib2wgaXNcbiAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zID0gW107XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkID0gdHJhY2VyeS5wYXJzZVRhZyh0aGlzLnJhdyk7XG5cbiAgICAgICAgICAgICAgICAvLyBCcmVhayBpbnRvIHN5bWJvbCBhY3Rpb25zIGFuZCBtb2RpZmllcnNcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbCA9IHBhcnNlZC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBwYXJzZWQubW9kaWZpZXJzO1xuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFsbCB0aGUgcHJlYWN0aW9ucyBmcm9tIHRoZSByYXcgc3ludGF4XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnNbaV0gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCBwYXJzZWQucHJlYWN0aW9uc1tpXS5yYXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5wb3N0YWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMucG9zdGFjdGlvbnNbaV0gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCBwYXJzZWQucG9zdGFjdGlvbnNbaV0ucmF3KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHVuZG8gYWN0aW9ucyBmb3IgYWxsIHByZWFjdGlvbnMgKHBvcHMgZm9yIGVhY2ggcHVzaClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVhY3Rpb25zW2ldLnR5cGUgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zLnB1c2godGhpcy5wcmVhY3Rpb25zW2ldLmNyZWF0ZVVuZG8oKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWN0aXZhdGUgYWxsIHRoZSBwcmVhY3Rpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByZWFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVhY3Rpb25zW2ldLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSB0aGlzLnJhdztcblxuICAgICAgICAgICAgICAgIC8vIEV4cGFuZCAocGFzc2luZyB0aGUgbm9kZSwgdGhpcyBhbGxvd3MgdHJhY2tpbmcgb2YgcmVjdXJzaW9uIGRlcHRoKVxuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUnVsZSA9IHRoaXMuZ3JhbW1hci5zZWxlY3RSdWxlKHRoaXMuc3ltYm9sLCB0aGlzLCB0aGlzLmVycm9ycyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZENoaWxkcmVuKHNlbGVjdGVkUnVsZSwgcHJldmVudFJlY3Vyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBtb2RpZmllcnNcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBVcGRhdGUgcGFyc2UgZnVuY3Rpb24gdG8gbm90IHRyaWdnZXIgb24gaGFzaHRhZ3Mgd2l0aGluIHBhcmVudGhlc2lzIHdpdGhpbiB0YWdzLFxuICAgICAgICAgICAgICAgIC8vICAgc28gdGhhdCBtb2RpZmllciBwYXJhbWV0ZXJzIGNhbiBjb250YWluIHRhZ3MgXCIjc3RvcnkucmVwbGFjZSgjcHJvdGFnb25pc3QjLCAjbmV3Q2hhcmFjdGVyIykjXCJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9kaWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2ROYW1lID0gdGhpcy5tb2RpZmllcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZE5hbWUuaW5kZXhPZihcIihcIikgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnRXhwID0gL1xcKChbXildKylcXCkvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2RvOiBpZ25vcmUgYW55IGVzY2FwZWQgY29tbWFzLiAgRm9yIG5vdywgY29tbWFzIGFsd2F5cyBzcGxpdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSByZWdFeHAuZXhlYyh0aGlzLm1vZGlmaWVyc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMgfHwgcmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RQYXJhbXMgPSByZXN1bHRzWzFdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2ROYW1lID0gdGhpcy5tb2RpZmllcnNbaV0uc3Vic3RyaW5nKDAsIG1vZE5hbWUuaW5kZXhPZihcIihcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdGhpcy5ncmFtbWFyLm1vZGlmaWVyc1ttb2ROYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNaXNzaW5nIG1vZGlmaWVyP1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIk1pc3NpbmcgbW9kaWZpZXIgXCIgKyBtb2ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ICs9IFwiKCguXCIgKyBtb2ROYW1lICsgXCIpKVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBtb2QodGhpcy5maW5pc2hlZFRleHQsIG1vZFBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBwb3N0LWFjdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9zdGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0YWN0aW9uc1tpXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgICAgIC8vIEp1c3QgYSBiYXJlIGFjdGlvbj8gIEV4cGFuZCBpdCFcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG5ldyBOb2RlQWN0aW9uKHRoaXMsIHRoaXMucmF3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gTm8gdmlzaWJsZSB0ZXh0IGZvciBhbiBhY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBzb21lIHZpc2libGUgdGV4dCBmb3IgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHBlcmZvcm0gdGhlIGFjdGlvbj9cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLndhcm4oXCJBbHJlYWR5IGV4cGFuZGVkIFwiICsgdGhpcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuY2xlYXJFc2NhcGVDaGFycyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gdGhpcy5maW5pc2hlZFRleHQucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJET1VCTEVCQUNLU0xBU0hcIikucmVwbGFjZSgvXFxcXC9nLCBcIlwiKS5yZXBsYWNlKC9ET1VCTEVCQUNLU0xBU0gvZywgXCJcXFxcXCIpO1xuICAgIH07XG5cbiAgICAvLyBBbiBhY3Rpb24gdGhhdCBvY2N1cnMgd2hlbiBhIG5vZGUgaXMgZXhwYW5kZWRcbiAgICAvLyBUeXBlcyBvZiBhY3Rpb25zOlxuICAgIC8vIDAgUHVzaDogW2tleTpydWxlXVxuICAgIC8vIDEgUG9wOiBba2V5OlBPUF1cbiAgICAvLyAyIGZ1bmN0aW9uOiBbZnVuY3Rpb25OYW1lKHBhcmFtMCxwYXJhbTEpXSAoVE9ETyEpXG4gICAgZnVuY3Rpb24gTm9kZUFjdGlvbihub2RlLCByYXcpIHtcbiAgICAgICAgLypcbiAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIG5vZGUgZm9yIE5vZGVBY3Rpb25cIik7XG4gICAgICAgICBpZiAoIXJhdylcbiAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHJhdyBjb21tYW5kcyBmb3IgTm9kZUFjdGlvblwiKTtcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgICAgICB2YXIgc2VjdGlvbnMgPSByYXcuc3BsaXQoXCI6XCIpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHNlY3Rpb25zWzBdO1xuXG4gICAgICAgIC8vIE5vIGNvbG9uPyBBIGZ1bmN0aW9uIVxuICAgICAgICBpZiAoc2VjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAyO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb2xvbj8gSXQncyBlaXRoZXIgYSBwdXNoIG9yIGEgcG9wXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ydWxlID0gc2VjdGlvbnNbMV07XG4gICAgICAgICAgICBpZiAodGhpcy5ydWxlID09PSBcIlBPUFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgTm9kZUFjdGlvbi5wcm90b3R5cGUuY3JlYXRlVW5kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vZGVBY3Rpb24odGhpcy5ub2RlLCB0aGlzLnRhcmdldCArIFwiOlBPUFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPIE5vdCBzdXJlIGhvdyB0byBtYWtlIFVuZG8gYWN0aW9ucyBmb3IgZnVuY3Rpb25zIG9yIFBPUHNcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIE5vZGVBY3Rpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBncmFtbWFyID0gdGhpcy5ub2RlLmdyYW1tYXI7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgLy8gc3BsaXQgaW50byBzZWN0aW9ucyAodGhlIHdheSB0byBkZW5vdGUgYW4gYXJyYXkgb2YgcnVsZXMpXG4gICAgICAgICAgICB0aGlzLnJ1bGVTZWN0aW9ucyA9IHRoaXMucnVsZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUnVsZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucnVsZU5vZGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucnVsZVNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgVHJhY2VyeU5vZGUoZ3JhbW1hciwgMCwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogLTEsXG4gICAgICAgICAgICAgICAgICAgIHJhdyA6IHRoaXMucnVsZVNlY3Rpb25zW2ldXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBuLmV4cGFuZCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJ1bGVzLnB1c2gobi5maW5pc2hlZFRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiBlc2NhcGUgY29tbWFzIHByb3Blcmx5XG4gICAgICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyh0aGlzLnRhcmdldCwgdGhpcy5maW5pc2hlZFJ1bGVzLCB0aGlzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBncmFtbWFyLnBvcFJ1bGVzKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBncmFtbWFyLmZsYXR0ZW4odGhpcy50YXJnZXQsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBOb2RlQWN0aW9uLnByb3RvdHlwZS50b1RleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgKyBcIjpcIiArIHRoaXMucnVsZTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICsgXCI6UE9QXCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBcIigoc29tZSBmdW5jdGlvbikpXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCIoKFVua25vd24gQWN0aW9uKSlcIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTZXRzIG9mIHJ1bGVzXG4gICAgLy8gQ2FuIGFsc28gY29udGFpbiBjb25kaXRpb25hbCBvciBmYWxsYmFjayBzZXRzIG9mIHJ1bGVzZXRzKVxuICAgIGZ1bmN0aW9uIFJ1bGVTZXQoZ3JhbW1hciwgcmF3KSB7XG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xuICAgICAgICB0aGlzLmdyYW1tYXIgPSBncmFtbWFyO1xuICAgICAgICB0aGlzLmZhbGxvZmYgPSAxO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJhdykpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJ1bGVzID0gcmF3O1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyB8fCByYXcgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJ1bGVzID0gW3Jhd107XG4gICAgICAgIH0gZWxzZSBpZiAocmF3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBmb3IgY29uZGl0aW9uYWwgYW5kIGhpZXJhcmNoaWNhbCBydWxlIHNldHNcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFJ1bGVTZXQucHJvdG90eXBlLnNlbGVjdFJ1bGUgPSBmdW5jdGlvbihlcnJvcnMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJHZXQgcnVsZVwiLCB0aGlzLnJhdyk7XG4gICAgICAgIC8vIElzIHRoZXJlIGEgY29uZGl0aW9uYWw/XG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbmFsUnVsZSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ncmFtbWFyLmV4cGFuZCh0aGlzLmNvbmRpdGlvbmFsUnVsZSwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBkb2VzIHRoaXMgdmFsdWUgbWF0Y2ggYW55IG9mIHRoZSBjb25kaXRpb25hbHM/XG4gICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb25hbFZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMuY29uZGl0aW9uYWxWYWx1ZXNbdmFsdWVdLnNlbGVjdFJ1bGUoZXJyb3JzKTtcbiAgICAgICAgICAgICAgICBpZiAodiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm8gcmV0dXJuZWQgdmFsdWU/XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyB0aGVyZSBhIHJhbmtlZCBvcmRlcj9cbiAgICAgICAgaWYgKHRoaXMucmFua2luZykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJhbmtpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRoaXMucmFua2luZy5zZWxlY3RSdWxlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RpbGwgbm8gcmV0dXJuZWQgdmFsdWU/XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UnVsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIC8vIFNlbGVjdCBmcm9tIHRoaXMgYmFzaWMgYXJyYXkgb2YgcnVsZXNcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBkaXN0cmlidXRpb24gZnJvbSB0aGUgZ3JhbW1hciBpZiB0aGVyZSBpcyBubyBvdGhlclxuICAgICAgICAgICAgdmFyIGRpc3RyaWJ1dGlvbiA9IHRoaXMuZGlzdHJpYnV0aW9uO1xuICAgICAgICAgICAgaWYgKCFkaXN0cmlidXRpb24pXG4gICAgICAgICAgICAgICAgZGlzdHJpYnV0aW9uID0gdGhpcy5ncmFtbWFyLmRpc3RyaWJ1dGlvbjtcblxuICAgICAgICAgICAgc3dpdGNoKGRpc3RyaWJ1dGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInNodWZmbGVcIjpcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNodWZmbGUgZGVza1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaHVmZmxlZERlY2sgfHwgdGhpcy5zaHVmZmxlZERlY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaHVmZmxlZERlY2sgPSBmeXNodWZmbGUoQXJyYXkuYXBwbHkobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIDogdGhpcy5kZWZhdWx0UnVsZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcChOdW1iZXIuY2FsbCwgTnVtYmVyKSwgdGhpcy5mYWxsb2ZmKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5zaHVmZmxlZERlY2sucG9wKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3ZWlnaHRlZFwiOlxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiV2VpZ2h0ZWQgZGlzdHJpYnV0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmFsbG9mZlwiOlxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiRmFsbG9mZiBkaXN0cmlidXRpb24gbm90IHlldCBpbXBsZW1lbnRlZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5wb3cocmFuZG9tKCksIHRoaXMuZmFsbG9mZikgKiB0aGlzLmRlZmF1bHRSdWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFVzZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlc1tpbmRleF0gPSArK3RoaXMuZGVmYXVsdFVzZXNbaW5kZXhdIHx8IDE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UnVsZXNbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JzLnB1c2goXCJObyBkZWZhdWx0IHJ1bGVzIGRlZmluZWQgZm9yIFwiICsgdGhpcyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfTtcblxuICAgIFJ1bGVTZXQucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0VXNlcykge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VXNlcyA9IFtdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGZ5c2h1ZmZsZShhcnJheSwgZmFsbG9mZikge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUsXG4gICAgICAgICAgICByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKHJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIFN5bWJvbCA9IGZ1bmN0aW9uKGdyYW1tYXIsIGtleSwgcmF3UnVsZXMpIHtcbiAgICAgICAgLy8gU3ltYm9scyBjYW4gYmUgbWFkZSB3aXRoIGEgc2luZ2xlIHZhbHVlLCBhbmQgYXJyYXksIG9yIGFycmF5IG9mIG9iamVjdHMgb2YgKGNvbmRpdGlvbnMvdmFsdWVzKVxuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5ncmFtbWFyID0gZ3JhbW1hcjtcbiAgICAgICAgdGhpcy5yYXdSdWxlcyA9IHJhd1J1bGVzO1xuXG4gICAgICAgIHRoaXMuYmFzZVJ1bGVzID0gbmV3IFJ1bGVTZXQodGhpcy5ncmFtbWFyLCByYXdSdWxlcyk7XG4gICAgICAgIHRoaXMuY2xlYXJTdGF0ZSgpO1xuXG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuY2xlYXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIENsZWFyIHRoZSBzdGFjayBhbmQgY2xlYXIgYWxsIHJ1bGVzZXQgdXNhZ2VzXG4gICAgICAgIHRoaXMuc3RhY2sgPSBbdGhpcy5iYXNlUnVsZXNdO1xuXG4gICAgICAgIHRoaXMudXNlcyA9IFtdO1xuICAgICAgICB0aGlzLmJhc2VSdWxlcy5jbGVhclN0YXRlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucHVzaFJ1bGVzID0gZnVuY3Rpb24ocmF3UnVsZXMpIHtcbiAgICAgICAgdmFyIHJ1bGVzID0gbmV3IFJ1bGVTZXQodGhpcy5ncmFtbWFyLCByYXdSdWxlcyk7XG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChydWxlcyk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucG9wUnVsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zdGFjay5wb3AoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5zZWxlY3RSdWxlID0gZnVuY3Rpb24obm9kZSwgZXJyb3JzKSB7XG4gICAgICAgIHRoaXMudXNlcy5wdXNoKHtcbiAgICAgICAgICAgIG5vZGUgOiBub2RlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJUaGUgcnVsZSBzdGFjayBmb3IgJ1wiICsgdGhpcy5rZXkgKyBcIicgaXMgZW1wdHksIHRvbyBtYW55IHBvcHM/XCIpO1xuICAgICAgICAgICAgcmV0dXJuIFwiKChcIiArIHRoaXMua2V5ICsgXCIpKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5zZWxlY3RSdWxlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuZ2V0QWN0aXZlUnVsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnNlbGVjdFJ1bGUoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5ydWxlc1RvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yYXdSdWxlcyk7XG4gICAgfTtcblxuICAgIHZhciBHcmFtbWFyID0gZnVuY3Rpb24ocmF3LCBzZXR0aW5ncykge1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRGcm9tUmF3T2JqKHJhdyk7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN5bWJvbHMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXlzW2ldXS5jbGVhclN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kcykge1xuXG4gICAgICAgIC8vIGNvcHkgb3ZlciB0aGUgYmFzZSBtb2RpZmllcnNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG1vZHMpIHtcbiAgICAgICAgICAgIGlmIChtb2RzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVyc1trZXldID0gbW9kc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmxvYWRGcm9tUmF3T2JqID0gZnVuY3Rpb24ocmF3KSB7XG5cbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMuc3ltYm9scyA9IHt9O1xuICAgICAgICB0aGlzLnN1YmdyYW1tYXJzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMucmF3KSB7XG4gICAgICAgICAgICAvLyBBZGQgYWxsIHJ1bGVzIHRvIHRoZSBncmFtbWFyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5yYXcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yYXcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XSA9IG5ldyBTeW1ib2wodGhpcywga2V5LCB0aGlzLnJhd1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbm9kZSBhbmQgc3Vibm9kZXNcbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVHJhY2VyeU5vZGUodGhpcywgMCwge1xuICAgICAgICAgICAgdHlwZSA6IC0xLFxuICAgICAgICAgICAgcmF3IDogcnVsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmV4cGFuZCA9IGZ1bmN0aW9uKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmNyZWF0ZVJvb3QocnVsZSk7XG4gICAgICAgIHJvb3QuZXhwYW5kKCk7XG4gICAgICAgIGlmICghYWxsb3dFc2NhcGVDaGFycylcbiAgICAgICAgICAgIHJvb3QuY2xlYXJFc2NhcGVDaGFycygpO1xuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24ocnVsZSwgYWxsb3dFc2NhcGVDaGFycykge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuZXhwYW5kKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpO1xuXG4gICAgICAgIHJldHVybiByb290LmZpbmlzaGVkVGV4dDtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zeW1ib2xzKTtcbiAgICAgICAgdmFyIHN5bWJvbEpTT04gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHN5bWJvbEpTT04ucHVzaCgnIFwiJyArIGtleSArICdcIiA6ICcgKyB0aGlzLnN5bWJvbHNba2V5XS5ydWxlc1RvSlNPTigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ7XFxuXCIgKyBzeW1ib2xKU09OLmpvaW4oXCIsXFxuXCIpICsgXCJcXG59XCI7XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBvciBwdXNoIHJ1bGVzXG4gICAgR3JhbW1hci5wcm90b3R5cGUucHVzaFJ1bGVzID0gZnVuY3Rpb24oa2V5LCByYXdSdWxlcywgc291cmNlQWN0aW9uKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldID0gbmV3IFN5bWJvbCh0aGlzLCBrZXksIHJhd1J1bGVzKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VBY3Rpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0uaXNEeW5hbWljID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldLnB1c2hSdWxlcyhyYXdSdWxlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUucG9wUnVsZXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN5bWJvbHNba2V5XSlcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJDYW4ndCBwb3A6IG5vIHN5bWJvbCBmb3Iga2V5IFwiICsga2V5KTtcbiAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0ucG9wUnVsZXMoKTtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuc2VsZWN0UnVsZSA9IGZ1bmN0aW9uKGtleSwgbm9kZSwgZXJyb3JzKSB7XG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNba2V5XSkge1xuICAgICAgICAgICAgdmFyIHJ1bGUgPSB0aGlzLnN5bWJvbHNba2V5XS5zZWxlY3RSdWxlKG5vZGUsIGVycm9ycyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmFpbG92ZXIgdG8gYWx0ZXJuYXRpdmUgc3ViZ3JhbW1hcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YmdyYW1tYXJzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN1YmdyYW1tYXJzW2ldLnN5bWJvbHNba2V5XSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJncmFtbWFyc1tpXS5zeW1ib2xzW2tleV0uc2VsZWN0UnVsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gc3ltYm9sP1xuICAgICAgICBlcnJvcnMucHVzaChcIk5vIHN5bWJvbCBmb3IgJ1wiICsga2V5ICsgXCInXCIpO1xuICAgICAgICByZXR1cm4gXCIoKFwiICsga2V5ICsgXCIpKVwiO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgYSBwbGFpbnRleHQgcnVsZSBpbiB0aGUgdHJhY2VyeSBzeW50YXhcbiAgICB0cmFjZXJ5ID0ge1xuXG4gICAgICAgIGNyZWF0ZUdyYW1tYXIgOiBmdW5jdGlvbihyYXcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JhbW1hcihyYXcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFJhbmRvbTogc2V0UmFuZG9tLFxuXG4gICAgICAgIC8vIFBhcnNlIHRoZSBjb250ZW50cyBvZiBhIHRhZ1xuICAgICAgICBwYXJzZVRhZyA6IGZ1bmN0aW9uKHRhZ0NvbnRlbnRzKSB7XG5cbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHByZWFjdGlvbnMgOiBbXSxcbiAgICAgICAgICAgICAgICBwb3N0YWN0aW9ucyA6IFtdLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVycyA6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gdHJhY2VyeS5wYXJzZSh0YWdDb250ZW50cyk7XG4gICAgICAgICAgICB2YXIgc3ltYm9sU2VjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbnNbaV0udHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sU2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xTZWN0aW9uID0gc2VjdGlvbnNbaV0ucmF3O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwibXVsdGlwbGUgbWFpbiBzZWN0aW9ucyBpbiBcIiArIHRhZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wcmVhY3Rpb25zLnB1c2goc2VjdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN5bWJvbFNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vICAgdGhyb3cgKFwibm8gbWFpbiBzZWN0aW9uIGluIFwiICsgdGFnQ29udGVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50cyA9IHN5bWJvbFNlY3Rpb24uc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5zeW1ib2wgPSBjb21wb25lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5tb2RpZmllcnMgPSBjb21wb25lbnRzLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZSA6IGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IDA7XG4gICAgICAgICAgICB2YXIgaW5UYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFyIGVzY2FwZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gMDtcblxuICAgICAgICAgICAgdmFyIGVzY2FwZWRTdWJzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGxhc3RFc2NhcGVkQ2hhciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5lcnJvcnMgPSBlcnJvcnM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGVuZCwgdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbmQgLSBzdGFydCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChzdGFydCArIFwiOiBlbXB0eSB0YWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goc3RhcnQgKyBcIjogZW1wdHkgYWN0aW9uXCIpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByYXdTdWJzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RFc2NhcGVkQ2hhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1N1YnN0cmluZyA9IGVzY2FwZWRTdWJzdHJpbmcgKyBcIlxcXFxcIiArIHJ1bGUuc3Vic3RyaW5nKGxhc3RFc2NhcGVkQ2hhciArIDEsIGVuZCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByYXdTdWJzdHJpbmcgPSBydWxlLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICByYXcgOiByYXdTdWJzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsYXN0RXNjYXBlZENoYXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZXNjYXBlZFN1YnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGUubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmICghZXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHJ1bGUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW50ZXIgYSBkZWVwZXIgYnJhY2tldGVkIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDAgJiYgIWluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoLS07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZCBhIGJyYWNrZXRlZCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDAgJiYgIWluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhc2h0YWdcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZ25vcmUgaWYgbm90IGF0IGRlcHRoIDAsIHRoYXQgbWVhbnMgd2UgYXJlIGluIGEgYnJhY2tldFxuICAgICAgICAgICAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluVGFnID0gIWluVGFnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWRTdWJzdHJpbmcgPSBlc2NhcGVkU3Vic3RyaW5nICsgcnVsZS5zdWJzdHJpbmcoc3RhcnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFc2NhcGVkQ2hhciA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBydWxlLmxlbmd0aClcbiAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBydWxlLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChpblRhZykge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVW5jbG9zZWQgdGFnXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlcHRoID4gMCkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVG9vIG1hbnkgW1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIlRvbyBtYW55IF1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0cmlwIG91dCBlbXB0eSBwbGFpbnRleHQgc2VjdGlvbnNcblxuICAgICAgICAgICAgc2VjdGlvbnMgPSBzZWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uLnR5cGUgPT09IDAgJiYgc2VjdGlvbi5yYXcubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlY3Rpb25zLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNWb3dlbChjKSB7XG4gICAgICAgIHZhciBjMiA9IGMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIChjMiA9PT0gJ2EnKSB8fCAoYzIgPT09ICdlJykgfHwgKGMyID09PSAnaScpIHx8IChjMiA9PT0gJ28nKSB8fCAoYzIgPT09ICd1Jyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzQWxwaGFOdW0oYykge1xuICAgICAgICByZXR1cm4gKGMgPj0gJ2EnICYmIGMgPD0gJ3onKSB8fCAoYyA+PSAnQScgJiYgYyA8PSAnWicpIHx8IChjID49ICcwJyAmJiBjIDw9ICc5Jyk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgICB9XG5cbiAgICB2YXIgYmFzZUVuZ01vZGlmaWVycyA9IHtcblxuICAgICAgICByZXBsYWNlIDogZnVuY3Rpb24ocywgcGFyYW1zKSB7XG4gICAgICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE0NDc4My9yZXBsYWNpbmctYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHRcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAocGFyYW1zWzBdKSwgJ2cnKSwgcGFyYW1zWzFdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYXBpdGFsaXplQWxsIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgdmFyIHMyID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBjYXBOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0FscGhhTnVtKHMuY2hhckF0KGkpKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXBOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYXBOZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzMiArPSBzLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMyICs9IHMuY2hhckF0KGkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXBOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzMjtcbiAgICAgICAgfSxcblxuICAgICAgICBjYXBpdGFsaXplIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KDIpLnRvTG93ZXJDYXNlKCkgPT09ICdpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhIFwiICsgcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1Zvd2VsKHMuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhbiBcIiArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gXCJhIFwiICsgcztcblxuICAgICAgICB9LFxuXG4gICAgICAgIGZpcnN0UyA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHMpO1xuICAgICAgICAgICAgdmFyIHMyID0gcy5zcGxpdChcIiBcIik7XG5cbiAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IGJhc2VFbmdNb2RpZmllcnMucyhzMlswXSkgKyBcIiBcIiArIHMyLnNsaWNlKDEpLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmluaXNoZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmlzaGVkO1xuICAgICAgICB9LFxuXG4gICAgICAgIHMgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHMuY2hhckF0KHMubGVuZ3RoIC0xKSkge1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Zvd2VsKHMuY2hhckF0KHMubGVuZ3RoIC0gMikpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKSArIFwiaWVzXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwic1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwic1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZCA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocy5jaGFyQXQocy5sZW5ndGggLTEpKSB7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgaWYgKCFpc1Zvd2VsKHMuY2hhckF0KHMubGVuZ3RoIC0gMikpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAxKSArIFwiaWVkXCI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0cmFjZXJ5LmJhc2VFbmdNb2RpZmllcnMgPSBiYXNlRW5nTW9kaWZpZXJzOyBcbiAgICAvLyBFeHRlcm5hbGl6ZVxuICAgIHRyYWNlcnkuVHJhY2VyeU5vZGUgPSBUcmFjZXJ5Tm9kZTtcblxuICAgIHRyYWNlcnkuR3JhbW1hciA9IEdyYW1tYXI7XG4gICAgdHJhY2VyeS5TeW1ib2wgPSBTeW1ib2w7XG4gICAgdHJhY2VyeS5SdWxlU2V0ID0gUnVsZVNldDtcbiAgICByZXR1cm4gdHJhY2VyeTtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFjZXJ5O1xuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vLyBvbGRcbmNvbnN0IGFuaW1hdGVIaWdobGlnaHQgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAkbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcblxuICAkbGluZU9uZS50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMF0gfHwgJycpO1xuICAkbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gIGhpZGVDb250cm9sKCk7XG4gIGFuaW1hdGUoJ29uZScpO1xufTtcblxuLy8gb2xkXG5jb25zdCBhbmltYXRlID0gKGxpbmUpID0+IHtcbiAgaWYgKGxpbmUgPT09ICdvbmUnKSB7XG4gICAgLy9zdG9wQW5pbWF0ZSgndHdvJyk7XG4gICAgJGxpbmVPbmUuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICBsaW5lT25lQW5pbWF0aW5nID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChsaW5lID09PSAndHdvJykge1xuICAgIC8vc3RvcEFuaW1hdGUoJ29uZScpO1xuICAgICRsaW5lVHdvLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgbGluZVR3b0FuaW1hdGluZyA9IHRydWU7XG4gIH1cbn07XG5cbi8vIG9sZFxuY29uc3Qgc3RvcEFuaW1hdGUgPSAobGluZSkgPT4ge1xuICBpZiAobGluZSA9PT0gJ29uZScpIHtcbiAgICAkbGluZU9uZVxuICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgbGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGxpbmUgPT09ICd0d28nKSB7XG4gICAgJGxpbmVUd29cbiAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgIGxpbmVUd29BbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxufTtcblxuLy8gb2xkXG5jb25zdCBvbkFuaW1FbmQgPSAoKSA9PiB7XG4gIC8vIGNoZWNrIGZvciB0aGUgc2Vjb25kIGFuaW1hdGlvbiBmaXJzdCBzbyB0aGUgc2Vjb25kIGFuaW1hdGlvblxuICAvLyBkb2Vzbid0IGdldCB0cmlnZ2VyZWQgdGhlbiBpbW1lZGlhdGVseSBlbmRlZCBpbnNpZGUgdGhpcyBmdW5jXG4gIGlmIChsaW5lVHdvQW5pbWF0aW5nKSB7XG4gICAgc3RvcEFuaW1hdGUoJ3R3bycpO1xuXG4gICAgc2hvd0NvbnRyb2woKTtcbiAgfVxuXG4gIGlmIChsaW5lT25lQW5pbWF0aW5nKSB7XG4gICAgc3RvcEFuaW1hdGUoJ29uZScpO1xuXG4gICAgLy8gaWYgdGhlcmUncyB0ZXh0IGluIGxpbmVUd28sIGFuaW1hdGUgaXRcbiAgICBpZiAoJGxpbmVUd28udGV4dCgpLmxlbmd0aCkge1xuICAgICAgYW5pbWF0ZSgndHdvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dDb250cm9sKCk7XG4gICAgfVxuICB9XG59O1xuXG5jbGFzcyBEaWFsb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmRlYnVnKCduZXcgRGlhbG9nKCknKTtcblxuICAgIHRoaXMuJGRpYWxvZ3MgPSAkKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX3RleHQgcCcpO1xuICAgIHRoaXMuJGxpbmVPbmUgPSB0aGlzLiRkaWFsb2dzLmZpcnN0KCk7XG4gICAgdGhpcy4kbGluZVR3byA9IHRoaXMuJGRpYWxvZ3MubGFzdCgpO1xuICAgIHRoaXMuJGNvbnRyb2wgPSAkKCcuZGlhbG9nLWNvbnRyb2wnKTtcblxuICAgIHRoaXMubGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMubGluZVR3b0FuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgLy90aGlzLiRkaWFsb2dzLmVhY2goKF8sIGVsKSA9PiB7XG4gICAgICAvL3V0aWwucHJlZml4ZWRPbigkKGVsKSwgJ0FuaW1hdGlvbkVuZCcsIG9uQW5pbUVuZCk7XG4gICAgLy99KTtcblxuICAgIHRoaXMuY3VyO1xuICAgIHRoaXMucHJldjtcbiAgICB0aGlzLm5leHQ7XG5cbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHN0YXJ0SGlnaGxpZ2h0KGhpZ2hsaWdodHMsIHNraXBBbmltYXRpb24pIHtcbiAgICB0aGlzLmN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICAgIHRoaXMucHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgICB0aGlzLm5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgICAvL2lmICghdGhpcy5yZWFkeSkgdGhpcy5pbml0KCk7XG5cbiAgICAvLyByZXNldCBkaWFsb2dcbiAgICAvL2hpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICB0aGlzLiRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAgIHRoaXMuJGxpbmVUd28ucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCBhbmltYXRlJyk7XG5cbiAgICB0aGlzLmN1ci5zdGFydGVkID0gdHJ1ZTtcbiAgICBpZiAoc2tpcEFuaW1hdGlvbikge1xuICAgICAgdGhpcy5zaG93SGlnaGxpZ2h0KHRoaXMuY3VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbmltYXRlSGlnaGxpZ2h0KHRoaXMuY3VyKTtcbiAgICB9XG4gIH1cblxuICBzaG93SGlnaGxpZ2h0KGhpZ2hsaWdodCkge1xuICAgIHRoaXMuJGxpbmVPbmUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICB0aGlzLiRsaW5lVHdvLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG5cbiAgICB0aGlzLiRsaW5lT25lLnRleHQoaGlnaGxpZ2h0LmRpYWxvZ1BhcnRzW2hpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0XVswXSB8fCAnJyk7XG4gICAgdGhpcy4kbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gICAgdGhpcy4kbGluZU9uZS5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgdGhpcy4kbGluZVR3by5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG5cbiAgICB0aGlzLnNob3dDb250cm9sKCk7XG4gIH1cblxuICBzaG93Q29udHJvbCgpIHtcbiAgICB0aGlzLnNob3dQcmV2KCk7XG4gICAgdGhpcy5zaG93TmV4dCgpO1xuICB9XG5cbiAgLy8gc2hvdyBuZXh0IGFycm93IGlmOlxuICAvLyB0aGVyZSBhcmUgcGFydHMgbGVmdCB0byB0aGlzIGhpZ2hsaWdodFxuICAvLyB0aGVyZSBhcmUgaGlnaGxpZ2h0cyBsZWZ0IHRvIHRoZSBzdG9yeVxuICBzaG93TmV4dCgpIHtcbiAgICAvLyB0b2RvOiBzaG93IGFycm93IGlmIG5leHQsIGJ1dCBtb3ZlIGludG8gb3V0cm9cbiAgICBpZiAodGhpcy5jdXIuaGFzRGlhbG9nTmV4dCB8fCB0aGlzLm5leHQpIHtcbiAgICAgIHRoaXMuJGNvbnRyb2wubGFzdCgpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2hvdyBwcmUgYXJyb3cgaWY6XG4gIC8vIHRoZXJlIGFyZSBwYXJ0cyBiZWZvcmUgdGhpcyBoaWdobGlnaHRcbiAgLy8gdGhlcmUgYXJlIGhpZ2hsaWdodHMgZWFybGllciBpbiB0aGUgc3RvcnlcbiAgc2hvd1ByZXYoKSB7XG4gICAgLy8gdG9kbzogc2hvdyBhcnJvdyBpZiBuZXh0LCBidXQgbW92ZSBpbnRvIG91dHJvXG4gICAgaWYgKHRoaXMuY3VyLmhhc0RpYWxvZ1ByZXYoKSB8fCB0aGlzLnByZXYpIHtcbiAgICAgIHRoaXMuJGNvbnRyb2wuZmlyc3QoKS5hZGRDbGFzcygnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVDb250cm9sKCkge1xuICAgIHRoaXMuJGNvbnRyb2wucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfVxuXG4gIGNvbnRpbnVlSGlnaGxpZ2h0KGhpZ2hsaWdodHMpIHtcbiAgICB0aGlzLmN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICAgIHRoaXMucHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgICB0aGlzLm5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgICBpZiAoIXRoaXMuY3VyKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICghdGhpcy5jdXIuc3RhcnRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIC8vIGlmIGN1cnJlbnRseSBhbmltYXRpbmcsIHNpbXBseSBlbmQgdGhlIGFuaW1hdGlvblxuICAgIGlmICh0aGlzLmxpbmVPbmVBbmltYXRpbmcpIHtcblxuICAgICAgdGhpcy4kbGluZU9uZVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgICAgdGhpcy5saW5lT25lQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLiRsaW5lVHdvXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgICB0aGlzLmxpbmVUd29BbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd0NvbnRyb2woKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5saW5lVHdvQW5pbWF0aW5nKSB7XG5cbiAgICAgIHRoaXMuJGxpbmVUd29cbiAgICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICAgIHRoaXMubGluZVR3b0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93Q29udHJvbCgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VyLmN1ckRpYWxvZ1BhcnQrKztcblxuICAgICAgLy8gbm8gbW9yZSB0ZXh0IHRvIHRoaXMgaGlnaGxpZ2h0XG4gICAgICBpZiAodGhpcy5jdXIuY3VyRGlhbG9nUGFydCA9PT0gdGhpcy5jdXIuZGlhbG9nUGFydHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VyLmN1ckRpYWxvZ1BhcnQgPSAwO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHNraXAgYW5pbWF0aW9ucyBmb3Igbm93XG4gICAgICB0aGlzLnNob3dIaWdobGlnaHQodGhpcy5jdXIpO1xuICAgICAgLy9hbmltYXRlSGlnaGxpZ2h0KGN1cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXZlcnNlSGlnaGxpZ2h0KGhpZ2hsaWdodHMpIHtcbiAgICB0aGlzLmN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICAgIHRoaXMucHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgICB0aGlzLm5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgICBpZiAoIXRoaXMuY3VyKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICghdGhpcy5jdXIuc3RhcnRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIHRoaXMuY3VyLmN1ckRpYWxvZ1BhcnQtLTtcblxuICAgIC8vIG5vIG1vcmUgdGV4dCB0byB0aGlzIGhpZ2hsaWdodFxuICAgIGlmICh0aGlzLmN1ci5jdXJEaWFsb2dQYXJ0ID09PSAtMSkge1xuICAgICAgdGhpcy5jdXIuY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93SGlnaGxpZ2h0KHRoaXMuY3VyKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlhbG9nO1xuXG4iLCJjb25zdCBpbml0ID0gKCkgPT4ge1xuICAkKCcjZG93bmxvYWQtc3RvcnknKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgJCgnI2hpZ2hsaWdodHMtanNvbicpLmF0dHIoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShoaWdobGlnaHRzKSk7XG5cbiAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudCgkKCdodG1sJykucHJvcCgnb3V0ZXJIVE1MJykpO1xuICAgIGxldCBmaWxlbmFtZSA9ICdibGFzZWJhbGwtc3RvcnknO1xuXG4gICAgY29uc3QgJGdhbWVOYW1lID0gJCgnLmdhbWUtbmFtZScpO1xuXG4gICAgaWYgKCRnYW1lTmFtZS50ZXh0KCkpIHtcbiAgICAgIGZpbGVuYW1lID0gJGdhbWVOYW1lLnRleHQoKS5yZXBsYWNlKCcsJywgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnICcsICctJyk7XG4gICAgfVxuXG4gICAgZmlsZW5hbWUgKz0gJy5odG1sJztcblxuICAgIC8vIGRvd25sb2FkIGNvZGUgYWRhcHRlZCBmcm9tOlxuICAgIC8vIGh0dHBzOi8vb3VyY29kZXdvcmxkLmNvbS9hcnRpY2xlcy9yZWFkLzE4OS9ob3ctdG8tY3JlYXRlLWEtZmlsZS1hbmQtZ2VuZXJhdGUtYS1kb3dubG9hZC13aXRoLWphdmFzY3JpcHQtaW4tdGhlLWJyb3dzZXItd2l0aG91dC1hLXNlcnZlclxuICAgIGNvbnN0ICRkbEJ1dHRvbiA9ICQoJzxhPicpXG4gICAgICAuYXR0cignaHJlZicsIGBkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwke3RleHR9YClcbiAgICAgIC5hdHRyKCdkb3dubG9hZCcsIGZpbGVuYW1lKVxuICAgICAgLmNzcygnZGlzcGxheScsICdub25lJylcbiAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG4gICAgJGRsQnV0dG9uWzBdLmNsaWNrKCk7XG4gICAgJGRsQnV0dG9uLnJlbW92ZSgpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0LFxufTtcblxuIiwiY29uc3QgbWx1c3RhcmQgPSByZXF1aXJlKCdtbHVzdGFyZCcpO1xuXG5jb25zdCBIaWdobGlnaHQgPSByZXF1aXJlKCcuL2hpZ2hsaWdodCcpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5sZXQgZ2FtZUV2ZW50cyA9IHt9O1xubGV0IGhpZ2hsaWdodHMgPSBbXTtcblxuY29uc3QgZ2V0UmFuZG9tR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZXMgPSBbXG4gICAgLy8gaW50ZXJuZXQgc2VyaWVzIGNoYW1waW9uc2hpcCBnYW1lcywgc3RhcnRpbmcgc2Vhc29uIDJcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvOTdkODhiOWUtNDA2ZC00ZjMxLWExOGYtMmEzYjkwM2VkYzAzJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvYjM4ZTA5MTctNDNkYS00NzBjLWE3YmItNTcxMjM2OGEyNDkyJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNjI4YTJkZGItZjYwOC00MTFiLThkMmUtMjc2OGNkMzZkNThiJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNTJmNjI3NGUtZTBkYy00YzIzLTg3ZTgtNjg2ZjZkMmIyYmJmJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMTA1Mzg4NDAtMWY3Mi00YTkwLTk4ZTUtNzI0YTlkYzVkMDYxJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvOWQ4NTg5N2UtZTY4OS00ZWViLWIyYWUtYjY5Njc5YTNlYmM3JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvZWUzNWE4NjgtYjAwNC00NDlmLWE5OWMtNmE0MGNhNTRiMzgyJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMDY1NjZmOGQtM2QxNC00OTU2LWIwNTQtMzZkYzk4MWZkNTg5JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNzA0ZGRmMmYtM2ZlMi00OGIzLWI2NzQtYjk0NzY1ZjcwZDAxJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNDdiY2FjNDItZjY1MS00ZmM5LTlmOTMtNTU2N2E3YjEwZGFmJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMGYxOWQ3OGQtYzI3ZC00MTQ2LTg2M2QtYjU1ZTZkYWUxNjc5JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMTUwNmI4OGYtMWZlYS00YmExLTkyNTYtMWViYjAzMGNkY2FlJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvYjJjYWZkMjAtYTc5OS00OGY2LWFiZDctYzk5YmQ3OWE2YmQxJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMmJjNmU4NmUtOGQyNS00ZTM3LTkwMjYtNzgwZDhiNjk2OWM1JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNDYyNDgxZjQtN2Y5Ny00NDFjLTlmYzktYzNkYzNjNTg0NGE0JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMTFhOGE3ZDMtNDYwYi00Yzk5LWE5OGEtYjBiZDFmNTc3MDczJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvODIzZGZjYjYtZGRkYi00M2Y0LTkwZmYtZWFjMDU4MjdhODJlJyxcblxuICAgIC8vIG90aGVyIGdhbWVzXG4gICAgLy8gczNkMTAwIChyaXYgbGFuZHJ5KVxuICAgICdodHRwczovL3JlYmxhc2Uuc2lici5kZXYvZ2FtZS9hYTFiN2ZkZS1mMDc3LTRlNGItODI1Zi0wZDE1MzhkMDI4MjInLFxuICBdO1xuXG4gIHJldHVybiBnYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZ2FtZXMubGVuZ3RoIC0gMSkpXTtcbn07XG5cbmNvbnN0IGlzUGxheUJhbGwgPSAoZ2FtZUV2KSA9PiB7XG4gIHJldHVybiBnYW1lRXYubGFzdFVwZGF0ZS5pbmRleE9mKCdQbGF5IGJhbGwnKSA+PSAwO1xufTtcblxuY29uc3QgZ2VuZXJhdGVIaWdobGlnaHRzID0gKGNiKSA9PiB7XG4gICQoJy5nYW1lLWV2ZW50X19jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCcpLmVhY2goKF8sIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpZCA9ICQoY2hlY2tlZCkuYXR0cignaWQnKTtcbiAgICBsZXQgdmlzdWFsID0gJ2RpYW1vbmQnO1xuXG4gICAgaWYgKGlzUGxheUJhbGwoZ2FtZUV2ZW50c1tpZF0uZXYuZGF0YSkpIHtcbiAgICAgIHZpc3VhbCA9ICdpbnRybyc7XG4gICAgfVxuXG4gICAgY29uc3QgaGwgPSBuZXcgSGlnaGxpZ2h0KHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGdhbWVFdmVudDogZ2FtZUV2ZW50c1tpZF0uZXYsXG4gICAgICBtbHVzdGFyZDogZ2FtZUV2ZW50c1tpZF0ubWx1c3RhcmQsXG4gICAgICB2aXN1YWwsXG4gICAgfSk7XG5cbiAgICAvL2NvbnN0IGhsID0gaGlnaGxpZ2h0Lm1ha2VIaWdobGlnaHQoe1xuICAgICAgLy9pZDogaWQsXG4gICAgICAvL2dhbWVFdmVudDogZ2FtZUV2ZW50c1tpZF0uZXYsXG4gICAgICAvL21sdXN0YXJkOiBnYW1lRXZlbnRzW2lkXS5tbHVzdGFyZCxcbiAgICAgIC8vdmlzdWFsLFxuICAgIC8vfSk7XG5cbiAgICBoaWdobGlnaHRzLnB1c2goaGwpO1xuICB9KTtcblxuICBjb25zb2xlLmRlYnVnKCdnZW5lcmF0ZUhpZ2hsaWdodHM6JywgaGlnaGxpZ2h0cyk7XG4gIGNiKGhpZ2hsaWdodHMpO1xufTtcblxuY29uc3QgbWFrZUNvdW50Q2lyY2xlID0gKGNsYXNzZXMpID0+IHtcbiAgcmV0dXJuICQoJzxzcGFuPicpLmFkZENsYXNzKGNsYXNzZXMpO1xufTtcblxuY29uc3QgcmVuZGVyR2FtZUV2ID0gKGdhbWVFdikgPT4ge1xuICBjb25zdCBkYXRhID0gZ2FtZUV2LmV2LmRhdGE7XG5cbiAgaWYgKCFkYXRhLmxhc3RVcGRhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCAkZ2FtZUV2ID0gJCgnPGRpdj4nKTtcblxuICAvLyBmb3JtIHN0dWZmXG4gIGNvbnN0ICRjaENvbnRhaW5lciA9ICQoJzxkaXY+Jyk7XG4gIGNvbnN0ICRjaGVjayA9ICQoJzxpbnB1dD4nKTtcbiAgY29uc3QgJGxhYmVsID0gJCgnPGxhYmVsPicpO1xuXG4gIGxldCB1cGRhdGUgPSBgJHtkYXRhLmxhc3RVcGRhdGV9ICR7ZGF0YS5zY29yZVVwZGF0ZSB8fCAnJ31gO1xuXG4gICRjaGVja1xuICAgIC5hZGRDbGFzcygnZm9ybS1jaGVjay1pbnB1dCcpXG4gICAgLmF0dHIoJ2lkJywgZ2FtZUV2LmV2Lmhhc2gpXG4gICAgLmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgIC5hdHRyKCduYW1lJywgJ2dhbWUgZXZlbnQnKVxuICAgIC52YWwoJycpO1xuXG4gIC8vaWYgKGlzUGxheUJhbGwoZGF0YSkpIHtcbiAgICAkY2hlY2tcbiAgICAgIC5hdHRyKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgIC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAvL31cblxuICAkbGFiZWxcbiAgICAuYWRkQ2xhc3MoJ2Zvcm0tY2hlY2stbGFiZWwnKVxuICAgIC5hdHRyKCdmb3InLCBnYW1lRXYuZXYuaGFzaClcbiAgICAudGV4dCh1cGRhdGUpO1xuXG4gICRjaENvbnRhaW5lclxuICAgIC5hZGRDbGFzcygnZm9ybS1jaGVjayBjb2wtNycpXG4gICAgLmFwcGVuZCgkY2hlY2spXG4gICAgLmFwcGVuZCgkbGFiZWwpO1xuXG4gIC8vIGdhbWUgZXZlbnQgaW5mb1xuICBjb25zdCAkZ2FtZUV2SW5mbyA9ICQoJzxkaXY+Jyk7XG4gIGNvbnN0ICRzY29yZSA9ICQoJzxzcGFuPicpO1xuICBjb25zdCAkYmFzZXMgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJGJhbGxzID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRzdHJpa2VzID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRvdXRzID0gJCgnPHNwYW4+Jyk7XG5cbiAgbGV0IGhvbWVFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2hvbWUnLCBkYXRhKTtcbiAgbGV0IGF3YXlFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2F3YXknLCBkYXRhKTtcblxuICBsZXQgc2NvcmUgPSBgJHtob21lRW1vaml9ICR7ZGF0YS5ob21lU2NvcmV9IDogJHthd2F5RW1vaml9ICR7ZGF0YS5hd2F5U2NvcmV9YDtcbiAgbGV0IGJhc2VzID0gJyc7XG5cbiAgLy8gZmlsbCBpbiBiYWxscyBjb3VudFxuICBmb3IgKGxldCBiYWxsID0gMDsgYmFsbCA8IGRhdGEuYXRCYXRCYWxsczsgYmFsbCsrKSB7XG4gICAgJGJhbGxzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBmdWxsJykpO1xuICB9XG5cbiAgZm9yIChsZXQgYmFsbCA9IDM7IGJhbGwgPiBkYXRhLmF0QmF0QmFsbHM7IGJhbGwtLSkge1xuICAgICRiYWxscy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIHN0cmlrZXMgY291bnRcbiAgZm9yIChsZXQgc3RyaWtlID0gMDsgc3RyaWtlIDwgZGF0YS5hdEJhdFN0cmlrZXM7IHN0cmlrZSsrKSB7XG4gICAgJHN0cmlrZXMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGZ1bGwnKSk7XG4gIH1cblxuICBmb3IgKGxldCBzdHJpa2UgPSAyOyBzdHJpa2UgPiBkYXRhLmF0QmF0U3RyaWtlczsgc3RyaWtlLS0pIHtcbiAgICAkc3RyaWtlcy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIG91dHMgY291bnRcbiAgZm9yIChsZXQgb3V0ID0gMDsgb3V0IDwgZGF0YS5oYWxmSW5uaW5nT3V0czsgb3V0KyspIHtcbiAgICAkb3V0cy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZnVsbCcpKTtcbiAgfVxuXG4gIGZvciAobGV0IG91dCA9IDI7IG91dCA+IGRhdGEuaGFsZklubmluZ091dHM7IG91dC0tKSB7XG4gICAgJG91dHMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGVtcHR5JykpO1xuICB9XG5cbiAgLy8gZmlsbCBpbiBiYXNlIGRpYW1vbmRzXG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQoZ2FtZUV2Lm1sdXN0YXJkLmJhc2VSdW5uZXJzLnRoaXJkLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuc2Vjb25kLnBsYXllck5hbWUpKTtcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuICAvLyB0b2RvOiBkZWFsIHdpdGggNCBiYXNlc1xuICAvLyRiYXNlcy5hcHBlbmQobWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5maXJzdC5wbGF5ZXJOYW1lKSk7XG5cbiAgJHNjb3JlXG4gICAgLnRleHQoc2NvcmUpO1xuICAkYmFsbHNcbiAgICAuYXR0cigndGl0bGUnLCAnQmFsbHMnKVxuICAgIC5hZGRDbGFzcygnYmFsbHMtY291bnQnKTtcbiAgJHN0cmlrZXNcbiAgICAuYXR0cigndGl0bGUnLCAnU3RyaWtlcycpXG4gICAgLmFkZENsYXNzKCdzdHJpa2VzLWNvdW50Jyk7XG4gICRvdXRzXG4gICAgLmF0dHIoJ3RpdGxlJywgJ091dHMnKVxuICAgIC5hZGRDbGFzcygnb3V0cy1jb3VudCcpO1xuICAkYmFzZXNcbiAgICAuYXR0cigndGl0bGUnLCAnQmFzZXMgb2NjdXBpZWQnKVxuICAgIC5hZGRDbGFzcygnYmFzZXMtb2NjdXBpZWQnKTtcblxuICAkZ2FtZUV2SW5mb1xuICAgIC5hZGRDbGFzcygnY29sLTUnKVxuICAgIC5hcHBlbmQoJHNjb3JlKVxuICAgIC5hcHBlbmQoJGJhc2VzKVxuICAgIC5hcHBlbmQoJGJhbGxzKVxuICAgIC5hcHBlbmQoJHN0cmlrZXMpXG4gICAgLmFwcGVuZCgkb3V0cyk7XG5cbiAgJGdhbWVFdlxuICAgIC5hZGRDbGFzcygnZ2FtZS1ldmVudF9fY29udGFpbmVyIHJvdyBib3JkZXInKVxuICAgIC5hcHBlbmQoJGNoQ29udGFpbmVyKVxuICAgIC5hcHBlbmQoJGdhbWVFdkluZm8pO1xuXG4gIHJldHVybiAkZ2FtZUV2O1xufTtcblxuY29uc3QgcmVuZGVyR2FtZUV2cyA9ICgpID0+IHtcbiAgc3RvcExvYWRpbmcoKTtcbiAgLy8kKCcjZ2FtZS1ldmVudHMtc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gIGNvbnN0ICRjb250YWluZXIgPSAkKCcjZ2FtZS1ldmVudHMtY2hvb3NlX19jb250YWluZXInKTtcblxuICAvLyBnb3R0YSByZW5kZXIgc29tZSBnZW5lcmFsIHN0dWZmIHRvbyAoaG9tZSB2cyBhd2F5LCBzI2QjLCB3ZWF0aGVyKVxuICAvLyBhbHNvOiBsYWJlbCBmb3IgdGhlIHNlbGVjdCwgYW5kIHRoZSBzZWxlY3QgaXRzZWxmXG4gIGZvciAobGV0IGlkIGluIGdhbWVFdmVudHMpIHtcbiAgICBsZXQgJGdhbWVFdiA9IHJlbmRlckdhbWVFdihnYW1lRXZlbnRzW2lkXSk7XG5cbiAgICBpZiAoJGdhbWVFdikge1xuICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJGdhbWVFdik7XG4gICAgfVxuICB9XG5cbiAgLy8gaGFjayBmb3IgbXZwOlxuICAkKCcjZ2FtZS1ldmVudHMtY2hvb3NlX19mb3JtIGJ1dHRvbicpWzBdLmNsaWNrKCk7XG59O1xuXG5jb25zdCBnZXRHYW1lRXZlbnRzID0gYXN5bmMgKGdhbWVJZCwgbmV4dFBhZ2UpID0+IHtcbiAgbGV0IGdhbWVzVVJMID0gYGh0dHBzOi8vYXBpLnNpYnIuZGV2L2Nocm9uaWNsZXIvdjEvZ2FtZXMvdXBkYXRlcz9nYW1lPSR7Z2FtZUlkfWA7XG5cbiAgaWYgKG5leHRQYWdlKSB7XG4gICAgZ2FtZXNVUkwgKz0gYCZwYWdlPSR7bmV4dFBhZ2V9YDtcbiAgfVxuXG4gIHN0YXJ0TG9hZGluZygpO1xuXG4gIC8vY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGdhbWVzVVJMKTtcbiAgYXdhaXQgZmV0Y2goZ2FtZXNVUkwpXG4gICAgLy8gY2F0Y2ggc2VydmVyIGVycm9ycywgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTQxNjQwMjdcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBmb3IgKGxldCBnYW1lRXYgb2YgZGF0YS5kYXRhKSB7XG4gICAgICAgIGdhbWVFdmVudHNbZ2FtZUV2Lmhhc2hdID0ge1xuICAgICAgICAgIGV2OiBnYW1lRXYsXG4gICAgICAgICAgbWx1c3RhcmQ6IG1sdXN0YXJkLmFuYWx5emVHYW1lRXZlbnQoZ2FtZUV2LmRhdGEpLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5uZXh0UGFnZSkge1xuICAgICAgICBnZXRHYW1lRXZlbnRzKGdhbWVJZCwgZGF0YS5uZXh0UGFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkb25lIGxvYWRpbmcgYWxsIGdhbWUgZXZlbnRzXG4gICAgICAgIHJlbmRlckdhbWVFdnMoKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZ2V0R2FtZUV2ZW50cyBkb25lOicsIGdhbWVFdmVudHMpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICQoJyNnYW1lLWV2ZW50LWZvcm0gLmVycm9yLW1zZycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIHN0b3BMb2FkaW5nKCk7XG4gICAgfSk7XG5cbn07XG5cbmNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgJGdhbWVFdkZvcm0gPSAkKCcjZ2FtZS1ldmVudC1mb3JtJyk7XG5cbiAgJGdhbWVFdkZvcm0uZmluZCgnLmVycm9yLW1zZycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnYnV0dG9uJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkZ2FtZUV2Rm9ybS5maW5kKCcubG9hZGluZycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbn07XG5cbmNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWV2ZW50LWZvcm0nKTtcblxuICAkZ2FtZUV2Rm9ybS5maW5kKCdidXR0b24nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICRnYW1lRXZGb3JtLmZpbmQoJy5sb2FkaW5nJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xufTtcblxuY29uc3QgaW5pdCA9IChoaWdobGlnaHRzUmVhZHlDYikgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWV2ZW50LWZvcm0nKTtcbiAgY29uc3QgJGdhbWVJbnB1dCA9ICQoJyNnYW1lLWlkJyk7XG5cbiAgLy8gZm9jdXMgb24gZ2FtZSBpbnB1dFxuICAkZ2FtZUlucHV0LmZvY3VzKCk7XG5cbiAgLy8gcGljayBhIHJhbmRvbSBpbnRlcmVzdGluZyBnYW1lIGFzIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGlucHV0XG4gICRnYW1lSW5wdXQuYXR0cigncGxhY2Vob2xkZXInLCBnZXRSYW5kb21HYW1lKCkpO1xuXG4gICRnYW1lRXZGb3JtLm9uKCdzdWJtaXQnLCAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGdhbWVWYWwgPSAkZ2FtZUlucHV0LnZhbCgpO1xuXG4gICAgaWYgKCFnYW1lVmFsKSB7XG4gICAgICBnYW1lVmFsID0gJGdhbWVJbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVJZCA9IGdhbWVWYWwuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICBnZXRHYW1lRXZlbnRzKGdhbWVJZCk7XG4gIH0pO1xuXG4gIGNvbnN0ICRoaWdobGlnaHRzU2VsZWN0Rm9ybSA9ICQoJyNnYW1lLWV2ZW50cy1jaG9vc2VfX2Zvcm0nKTtcblxuICAkaGlnaGxpZ2h0c1NlbGVjdEZvcm0ub24oJ3N1Ym1pdCcsIChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2VuZXJhdGVIaWdobGlnaHRzKGhpZ2hsaWdodHNSZWFkeUNiKTtcbiAgfSk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0LFxufTtcblxuIiwiY29uc3QgZ3JhbmRTbGFsYW1pID0gcmVxdWlyZSgnZ3JhbmQtc2xhbGFtaScpO1xuXG5jbGFzcyBIaWdobGlnaHQge1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgIHNldHRpbmdzID0gc2V0dGluZ3MgfHwge307XG5cbiAgICB0aGlzLmlkID0gc2V0dGluZ3MuaWQ7XG4gICAgdGhpcy5nYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gICAgdGhpcy5tbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkO1xuICAgIHRoaXMudmlzdWFsID0gc2V0dGluZ3MudmlzdWFsO1xuICAgIHRoaXMuY29tbWVudGFyeSA9IHNldHRpbmdzLmNvbW1lbnRhcnkgfHwgdGhpcy5nZW5lcmF0ZUNvbW1lbnRhcnkoKTtcbiAgICB0aGlzLm1heERpYWxvZ0xlbiA9IHRoaXMuc2V0TWF4RGlhbG9nTGVuKCk7XG4gICAgdGhpcy5kaWFsb2dQYXJ0cyA9IFtdO1xuICAgIHRoaXMuY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgdGhpcy5icmVha0ludG9EaWFsb2dQYXJ0cygpO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21tZW50YXJ5KCkge1xuICAgIC8vIGZvciBtdnA6IHNraXAgZ3JhbmQgc2xhbGFtaSwganVzdCByZXR1cm4gb3JpZ2luYWwgbGFzdFVwZGF0ZSArXG4gICAgLy8gc2NvcmVVcGRhdGUgaWYgcHJlc2VudFxuXG4gICAgbGV0IHJldCA9ICcnO1xuXG4gICAgaWYgKHRoaXMuZ2FtZUV2ZW50LmRhdGEubGFzdFVwZGF0ZSkge1xuICAgICAgcmV0ICs9IHRoaXMuZ2FtZUV2ZW50LmRhdGEubGFzdFVwZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nYW1lRXZlbnQuZGF0YS5zY29yZVVwZGF0ZSkge1xuICAgICAgcmV0ICs9IGBcXG4ke3RoaXMuZ2FtZUV2ZW50LmRhdGEuc2NvcmVVcGRhdGV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuXG4gICAgLy9yZXR1cm4gZ3JhbmRTbGFsYW1pLmdldENvbW1lbnQoe1xuICAgICAgLy9nYW1lRXZlbnQ6IGdhbWVFdmVudC5kYXRhLFxuICAgICAgLy9tbHVzdGFyZDogbWx1c3RhcmQsXG4gICAgLy99KTtcbiAgfTtcblxuICAvLyB0b2RvOiBkbyBpIHdhbm5hIHN1cHBvcnQgbW9iaWxlPyB0aGVuIHVwZGF0ZSB0aGlzIGFjY29yZGluZ2x5XG4gIHNldE1heERpYWxvZ0xlbigpIHtcbiAgICByZXR1cm4gMzU7XG4gIH1cblxuICBicmVha0ludG9EaWFsb2dQYXJ0cygpIHtcbiAgICAvLyBzcGxpdCBieSBuZXdsaW5lcyAoZW5mb3JjZWQgcGFjaW5nKVxuICAgIGNvbnN0IHBhY2luZ1BhcnRzID0gdGhpcy5jb21tZW50YXJ5LnNwbGl0KCdcXG4nKTtcblxuICAgIHBhY2luZ1BhcnRzLmZvckVhY2goKHApID0+IHtcbiAgICAgIHRoaXMuYnJlYWtJbnRvUGFydHMocCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBzcGxpdCBlYWNoIHBhcnQgaW50byBpdHMgYW5pbWF0aW9uIHBhcnRzIGJ5IGxpbmUgbGVuZ3RoXG4gIGJyZWFrSW50b1BhcnRzKHRleHQpIHtcbiAgICBsZXQgcGFydHMgPSBbW10sIFtdXTtcbiAgICBsZXQgdW5maWxsZWQgPSAwO1xuICAgIGxldCBsZW4gPSAwO1xuXG4gICAgdGV4dC5zcGxpdCgnICcpLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgIGxldCB3b3JkTGVuID0gd29yZC5sZW5ndGg7XG5cbiAgICAgIGlmICgobGVuICsgd29yZExlbikgPiB0aGlzLm1heERpYWxvZ0xlbikge1xuICAgICAgICBsZW4gPSAwO1xuXG4gICAgICAgIGlmICh1bmZpbGxlZCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZGlhbG9nUGFydHMucHVzaCh0aGlzLm1ha2VTZW50ZW5jZXMocGFydHMpKTtcbiAgICAgICAgICBwYXJ0cyA9IFtbXSwgW11dO1xuICAgICAgICAgIHVuZmlsbGVkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmZpbGxlZCA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChsZW4gKyB3b3JkTGVuKSA8PSB0aGlzLm1heERpYWxvZ0xlbikge1xuICAgICAgICBwYXJ0c1t1bmZpbGxlZF0ucHVzaCh3b3JkKTtcbiAgICAgICAgbGVuICs9IHdvcmRMZW4gKyAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dQYXJ0cy5wdXNoKHRoaXMubWFrZVNlbnRlbmNlcyhwYXJ0cykpO1xuICB9XG5cbiAgbWFrZVNlbnRlbmNlcyhwYXJ0cykge1xuICAgIHJldHVybiBwYXJ0cy5tYXAoKHdvcmRzKSA9PiB7XG4gICAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFzRGlhbG9nTmV4dCgpIHtcbiAgICAgIHJldHVybiAhKCh0aGlzLmN1ckRpYWxvZ1BhcnQgKyAxKSA9PT0gdGhpcy5kaWFsb2dQYXJ0cy5sZW5ndGgpO1xuICB9XG5cbiAgaGFzRGlhbG9nUHJldigpIHtcbiAgICAgIHJldHVybiAhKCh0aGlzLmN1ckRpYWxvZ1BhcnQgLSAxKSA9PT0gLTEpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0O1xuXG4vL21vZHVsZS5leHBvcnRzID0ge1xuICAvL21ha2VIaWdobGlnaHQsXG4gIC8vaGFzRGlhbG9nTGVmdCxcbiAgLy9oYXNEaWFsb2dQcmV2LFxuLy99O1xuXG4iLCJjb25zdCBnYW1lRXZlbnRTZWxlY3RvciA9IHJlcXVpcmUoJy4vZ2FtZS1ldmVudC1zZWxlY3RvcicpO1xuY29uc3QgU3RvcnkgPSByZXF1aXJlKCcuL3N0b3J5Jyk7XG5jb25zdCBkb3dubG9hZGVyID0gcmVxdWlyZSgnLi9kb3dubG9hZGVyJyk7XG5cbmNvbnN0IG9uSGlnaGxpZ2h0c1JlYWR5ID0gKGhscykgPT4ge1xuXG4gIGNvbnN0IHN0b3J5ID0gbmV3IFN0b3J5KHtcbiAgICBoaWdobGlnaHRzOiBobHMsXG4gIH0pO1xuXG4gIHN0b3J5LnN0YXJ0KCk7XG59O1xuXG5jb25zdCBpbml0QXBwID0gKCkgPT4ge1xuICBjb25zdCBoaWdobGlnaHRzRGF0YSA9ICQoJyNoaWdobGlnaHRzLWpzb24nKS5hdHRyKCdkYXRhJyk7XG5cbiAgLy8gc2tpcCBmaXJzdCBzdGVwcyBhbmQgZ28gc3RyYWlnaHQgdG8gc2hvd2luZyB0aGUgcmVlbCBpZiBpdCdzIGEgcHVibGlzaGVkXG4gIC8vIHN0b3J5XG4gIGlmIChoaWdobGlnaHRzRGF0YS5sZW5ndGgpIHtcbiAgICBvbkhpZ2hsaWdodHNSZWFkeShKU09OLnBhcnNlKGhpZ2hsaWdodHNEYXRhKSk7XG4gICAgLy9oaWdobGlnaHRzID0gSlNPTi5wYXJzZShoaWdobGlnaHRzRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUV2ZW50U2VsZWN0b3IuaW5pdChvbkhpZ2hsaWdodHNSZWFkeSk7XG4gICAgLy9kb3dubG9hZGVyLmluaXQoKTtcbiAgfVxufTtcblxuaW5pdEFwcCgpO1xuXG4iLCJjb25zdCBWaXN1YWwgPSByZXF1aXJlKCcuL3Zpc3VhbCcpO1xuY29uc3QgRGlhbG9nID0gcmVxdWlyZSgnLi9kaWFsb2cnKTtcbmNvbnN0IHRlYW1zRGF0YSA9IHJlcXVpcmUoJy4uL2xpYi90ZWFtcy1kYXRhJyk7XG5cbmNvbnN0IERJQU1PTkRfQ09MT1VSUyA9IHtcbiAgbW91bmQ6ICdmZmNmNTYnLFxuICBtb3VuZE91dGxpbmU6ICcwMDMwNDknLFxuICBiYXNlczogJ2ZmOTc3MCcsXG4gIGJhc2VzT3V0bGluZTogJzAwMzA0OScsXG4gIGdyYXNzOiAnMmI5MzQ4JyxcbiAgZ3Jhc3NPdXRsaW5lOiAnMmI5MzQ4JyxcbiAgZGlydDogJ2ZmY2Y1NicsXG4gIGRpcnRPdXRsaW5lOiAnZmZmJyxcbiAgZm91bFpvbmU6ICdlZGVhZDAnLFxuICBmb3VsWm9uZU91dGxpbmU6ICdlZGVhZDAnLFxufTtcblxuXG5jbGFzcyBTdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XG4gICAgdGhpcy5oaWdobGlnaHRzID0gc2V0dGluZ3MuaGlnaGxpZ2h0cyB8fCBbXTtcbiAgICB0aGlzLmRpYWxvZyA9IG5ldyBEaWFsb2coKTtcbiAgICB0aGlzLmN1ckhpZ2hsaWdodCA9IDA7XG4gICAgdGhpcy5pbnRybyA9IHRydWU7XG4gICAgdGhpcy52aXN1YWwgPSBuZXcgVmlzdWFsKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAkKCcjZ2FtZS1ldmVudC1mb3JtJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJyN2aXN1YWxzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJyNoaWdobGlnaHRzLWRpYWxvZ19fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgdGhpcy5zZXR1cEludHJvKCk7XG5cbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgaGFuZGxlQWN0aW9uID0gKGV2dCkgPT4ge1xuICAgICAgbGV0IGRpcmVjdGlvbjtcblxuICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5dXAnKSB7XG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMzcpIHsgLy8gYXJyb3cgbGVmdFxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBjbGlja1xuICAgICAgICAvLyB0b2RvOiBmaXggdGhpcywgdGhpcyBpcyBjdXJzZWQ6XG4gICAgICAgIGlmICgkKGV2dC50YXJnZXQpLmF0dHIoJ2lkJykuaW5kZXhPZignbmV4dCcpID49IDApIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgIH0gZWxzZSBpZiAoJChldnQudGFyZ2V0KS5hdHRyKCdpZCcpLmluZGV4T2YoJ25leHQnKSA+PSAwKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gJ3ByZXYnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBsYXlIaWdobGlnaHQoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBoYW5kbGVBY3Rpb24pO1xuICAgICQoJy5kaWFsb2ctY29udHJvbCcpLm9uKCdjbGljaycsIGhhbmRsZUFjdGlvbik7XG4gIH1cblxuICBzZXR1cEludHJvKCkge1xuICAgIC8vIGdyYWIgZ2FtZSBpbmZvIGZyb20gZmlyc3QgaGlnaGxpZ2h0XG4gICAgY29uc3QgZ2FtZUV2ID0gdGhpcy5oaWdobGlnaHRzWzBdLmdhbWVFdmVudC5kYXRhO1xuICAgIGNvbnN0ICRob21lID0gJCgnLnZzLWxvZ29fX2hvbWUnKTtcbiAgICBjb25zdCAkYXdheSA9ICQoJy52cy1sb2dvX19hd2F5Jyk7XG5cbiAgICBsZXQgaE5pY2sgPSBnYW1lRXYuaG9tZVRlYW1OaWNrbmFtZS5zcGxpdCgnICcpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGFOaWNrID0gZ2FtZUV2LmF3YXlUZWFtTmlja25hbWUuc3BsaXQoJyAnKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGFOaWNrID09PSAnbWVjaGFuaWNzJykge1xuICAgICAgYU5pY2sgKz0gJy1hd2F5JztcbiAgICB9XG5cbiAgICAkKCcuZ2FtZS1uYW1lJykudGV4dChgU2Vhc29uICR7Z2FtZUV2LnNlYXNvbiArIDF9LCBEYXkgJHtnYW1lRXYuZGF5ICsgMX1gKTtcbiAgICAkaG9tZVxuICAgICAgLmF0dHIoJ3NyYycsIGAuL2ltYWdlcy9sb2dvLSR7aE5pY2t9LnBuZ2ApXG4gICAgICAuYXR0cignYWx0JywgYCR7Z2FtZUV2LmhvbWVUZWFtTmFtZX1gKTtcbiAgICAkYXdheVxuICAgICAgLmF0dHIoJ3NyYycsIGAuL2ltYWdlcy9sb2dvLSR7YU5pY2t9LnBuZ2ApXG4gICAgICAuYXR0cignYWx0JywgYCR7Z2FtZUV2LmF3YXlUZWFtTmFtZX1gKTtcbiAgICAkKCcuZGlhbW9uZC1oZWFkZXIgLm1hdGNodXAnKS50ZXh0KGAke2dhbWVFdi5ob21lVGVhbU5hbWV9IHZzLiAke2dhbWVFdi5hd2F5VGVhbU5hbWV9YCk7XG5cbiAgICAvLyBnZW9yZ2lhcyBkb24ndCBoYXZlIGEgc3RhbmRhcmQgc2l6ZSBsb2dvXG4gICAgaWYgKGhOaWNrID09PSAnZ2VvcmdpYXMnKSB7XG4gICAgICAkaG9tZS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgfVxuXG4gICAgaWYgKGFOaWNrID09PSAnZ2VvcmdpYXMnKSB7XG4gICAgICAkYXdheS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBkaWFtb25kIGNvbG91cnMgYW5kIGFkZCB0aGUgZGlhbW9uZCBjc3NcbiAgICBjb25zdCBob21lVGVhbSA9IHRlYW1zRGF0YVtnYW1lRXYuaG9tZVRlYW1dO1xuICAgIGNvbnN0ICRkaWFtb25kID0gJCgnI2RpYW1vbmQtc3ZnJyk7XG4gICAgY29uc3QgJGdyYXNzID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19ncmFzcycpO1xuICAgIGNvbnN0ICRkaXJ0ID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19kaXJ0Jyk7XG4gICAgY29uc3QgJGZvdWxab25lID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19mb3VsLXpvbmUnKTtcbiAgICBjb25zdCAkbW91bmQgPSAkZGlhbW9uZC5maW5kKCcuZGlhbW9uZC1zdmdfX21vdW5kJyk7XG4gICAgY29uc3QgJGJhc2VzID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19iYXNlJyk7XG4gICAgY29uc3QgJGxvZ28gPSAkKCcuZGlhbW9uZC1sb2dvJyk7XG5cbiAgICAvLyBjb2xvdXIgdGhlIG1vdW5kXG4gICAgLy8gdHJpZXMgbW91bmQgY29sb3VyLCBvciBzZXRzIG9mZmljaWFsIGFzIGRlZmF1bHRcbiAgICAkbW91bmRcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMubW91bmQgfHwgaG9tZVRlYW0uY29sb3Vycy5vZmZpY2lhbH1gKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLm1vdW5kT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMubW91bmRPdXRsaW5lfWApO1xuXG4gICAgLy8gY29sb3VyIHRoZSBiYXNlc1xuICAgIC8vIHRyaWVzIGJhc2VzIGNvbG91ciwgb3Igc2V0cyBvZmZpY2lhbCBhcyBkZWZhdWx0XG4gICAgJGJhc2VzXG4gICAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLmJhc2VzIHx8IGhvbWVUZWFtLmNvbG91cnMub2ZmaWNpYWx9YClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5iYXNlc091dGxpbmUgfHwgRElBTU9ORF9DT0xPVVJTLmJhc2VzT3V0bGluZX1gKTtcblxuICAgIC8vIGNvbG91ciB0aGUgZ3Jhc3NcbiAgICAkZ3Jhc3MuZmlyc3QoKVxuICAgICAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLmdyYXNzIHx8IERJQU1PTkRfQ09MT1VSUy5ncmFzc31gKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZ3Jhc3NPdXRsaW5lIHx8IERJQU1PTkRfQ09MT1VSUy5ncmFzc091dGxpbmV9YCk7XG4gICAgICAkZ3Jhc3MubGFzdCgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZ3Jhc3MgfHwgRElBTU9ORF9DT0xPVVJTLmdyYXNzfWApXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0T3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuZ3Jhc3NPdXRsaW5lfWApO1xuXG4gICAgLy8gY29sb3VyIHRoZSBkaXJ0XG4gICAgJGRpcnRcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZGlydCB8fCBESUFNT05EX0NPTE9VUlMuZGlydH1gKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmRpcnRPdXRsaW5lIHx8IERJQU1PTkRfQ09MT1VSUy5kaXJ0T3V0bGluZX1gKTtcblxuICAgIC8vIGNvbG91ciB0aGUgZm91bCB6b25lXG4gICAgJGZvdWxab25lXG4gICAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZm91bFpvbmUgfHwgRElBTU9ORF9DT0xPVVJTLmZvdWxab25lfWApXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5mb3VsWm9uZU91dGxpbmUgfHwgRElBTU9ORF9DT0xPVVJTLmZvdWxab25lT3V0bGluZX1gKTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgZGlhbW9uZCBzdmdcbiAgICAkKCcjZGlhbW9uZF9faW1hZ2UnKVxuICAgICAgLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnKyBidG9hKCRkaWFtb25kLmh0bWwoKSkgKyAnKScpO1xuXG4gICAgLy8gZHJhdyBob21lIGxvZ28gYmVoaW5kIGhvbWUgcGxhdGVcbiAgICAkbG9nb1xuICAgICAgLmF0dHIoJ3NyYycsIGhvbWVUZWFtLnN0YWRpdW1Mb2dvVVJMIHx8IGhvbWVUZWFtLmhvbWVMb2dvVVJMKVxuICAgICAgLnRvZ2dsZUNsYXNzKCdtLW91dGxpbmUnLCBob21lVGVhbS5zdGFkaXVtTG9nb091dGxpbmUpO1xuXG4gICAgLy8kKCcubW91bmQtbG9nbycpLmZpcnN0KCkuYXR0cignc3JjJywgaG9tZVRlYW0uaG9tZUxvZ29VUkwpO1xuXG4gICAgLy8gZm9jdXMgb24gdGhlIGJvZHkgc28gYXJyb3cga2V5dXBzIGNhbiBiZSByZWdpc3RlcmVkXG4gICAgJCgnYm9keScpLmZvY3VzKCk7XG5cbiAgICB0aGlzLm5leHRIaWdobGlnaHQodHJ1ZSk7XG4gIH1cblxuICBuZXh0SGlnaGxpZ2h0KHNraXBBbmltYXRpb24pIHtcbiAgICBjb25zdCBobHMgPSB0aGlzLmdldEhpZ2hsaWdodHMoKTtcblxuICAgIHRoaXMudmlzdWFsLnNob3coaGxzLmN1ci52aXN1YWwpO1xuICAgIHRoaXMudmlzdWFsLnVwZGF0ZURpYW1vbmQoaGxzKTtcbiAgICB0aGlzLmRpYWxvZy5zdGFydEhpZ2hsaWdodChobHMsIHNraXBBbmltYXRpb24pO1xuICB9XG5cbiAgZ2V0SGlnaGxpZ2h0cyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXY6IHRoaXMuaGlnaGxpZ2h0c1t0aGlzLmN1ckhpZ2hsaWdodCAtIDFdLFxuICAgICAgY3VyOiB0aGlzLmhpZ2hsaWdodHNbdGhpcy5jdXJIaWdobGlnaHRdLFxuICAgICAgbmV4dDogdGhpcy5oaWdobGlnaHRzW3RoaXMuY3VySGlnaGxpZ2h0ICsgMV0sXG4gICAgfTtcbiAgfVxuXG4gIHBsYXlIaWdobGlnaHQoZGlyZWN0aW9uKSB7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgIC8vIHRyeSB0byBhZHZhbmNlIHRoZSBoaWdobGlnaHQsIGlmIHRoZXJlJ3MgbW9yZSB0ZXh0IHRvIGFuaW1hdGVcbiAgICAgIGlmICghdGhpcy5jb250aW51ZUhpZ2hsaWdodCgpKSB7XG5cbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIG1vcmUgaGlnaGxpZ2h0c1xuICAgICAgICBpZiAodGhpcy5oaWdobGlnaHRzLmxlbmd0aCAtIDEgPT09IHRoaXMuY3VySGlnaGxpZ2h0KSB7IHJldHVybiB9O1xuXG4gICAgICAgIHRoaXMuY3VySGlnaGxpZ2h0Kys7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIG1vcmUgaGlnaGxpZ2h0cywgZG9uJ3QgYWR2YW5jZVxuICAgICAgICBpZiAodGhpcy5oaWdobGlnaHRzLmxlbmd0aCA9PT0gdGhpcy5jdXJIaWdobGlnaHQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdGhlcndpc2UsIHNob3cgdGhlIG5leHQgaGlnaGxpZ2h0XG4gICAgICAgIHRoaXMubmV4dEhpZ2hsaWdodCh0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdHJ5IHRvIHJldmVyc2UgaGlnaGxpZ2h0LCBpZiB0aGVyZSB3YXMgcHJldmlvdXMgdGV4dCB0byBhbmltYXRlXG4gICAgICBpZiAoIXRoaXMucmV2ZXJzZUhpZ2hsaWdodCgpKSB7XG5cbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIHByZXZpb3VzIGhpZ2hsaWdodHNcbiAgICAgICAgaWYgKHRoaXMuY3VySGlnaGxpZ2h0ID09PSAwKSB7IHJldHVybiB9O1xuXG4gICAgICAgIHRoaXMuY3VySGlnaGxpZ2h0LS07XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIHByZXZpb3VzIGhpZ2hsaWdodHMsIGRvbid0IHJldmVyc2VcbiAgICAgICAgaWYgKHRoaXMuY3VySGlnaGxpZ2h0IDwgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IGZpeCB0aGUgbmFtaW5nLCBvaCBnb2RzIHRoaXMgaXMgY3Vyc2VkXG4gICAgICAgIHRoaXMubmV4dEhpZ2hsaWdodCh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb250aW51ZUhpZ2hsaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cuY29udGludWVIaWdobGlnaHQodGhpcy5nZXRIaWdobGlnaHRzKCkpO1xuICB9O1xuXG4gIHJldmVyc2VIaWdobGlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLnJldmVyc2VIaWdobGlnaHQodGhpcy5nZXRIaWdobGlnaHRzKCkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3Rvcnk7XG5cbiIsIi8vIGFwYXRlZCBmcm9tXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnRyb2xsaW5nLWNzcy1hbmltYXRpb25zLXRyYW5zaXRpb25zLWphdmFzY3JpcHQvXG5jb25zdCBwcmVmaXhlcyA9IFsnd2Via2l0JywgJ21veicsICdNUycsICdvJywgJyddO1xuXG5jb25zdCBwcmVmaXhlZE9uID0gKCRlbCwgdHlwZSwgY2IpID0+IHtcbiAgZm9yIChsZXQgcHJlZml4IG9mIHByZWZpeGVzKSB7XG4gICAgaWYgKCFwcmVmaXgpIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgJGVsLm9uKGAke3ByZWZpeH0ke3R5cGV9YCwgY2IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRFbW9qaSA9ICh0ZWFtLCBnYW1lRXYpID0+IHtcbiAgbGV0IGVtb2ppID0gJyc7XG5cbiAgaWYgKHRlYW0gPT09ICdob21lJykge1xuICAgIHRyeSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5ob21lVGVhbUVtb2ppID8gU3RyaW5nLmZyb21Db2RlUG9pbnQoZ2FtZUV2LmhvbWVUZWFtRW1vamkpIDogJyc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5ob21lVGVhbUVtb2ppO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgZW1vamkgPSBnYW1lRXYuYXdheVRlYW1FbW9qaSA/IFN0cmluZy5mcm9tQ29kZVBvaW50KGdhbWVFdi5hd2F5VGVhbUVtb2ppKSA6ICcnO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZW1vamkgPSBnYW1lRXYuYXdheVRlYW1FbW9qaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW1vamk7XG59O1xuXG5jb25zdCBnZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwgPSAobmFtZSkgPT4ge1xuICBsZXQgcmV0ID0gJyc7XG5cbiAgcmV0ICs9IG5hbWVbMF0gKyAnLiAnO1xuICByZXQgKz0gbmFtZS5zcGxpdCgnICcpWzFdO1xuXG4gIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBnZXRJbm5pbmdUZXh0ID0gKGlubmluZykgPT4ge1xuICBsZXQgcmV0ID0gYCR7aW5uaW5nfWA7XG5cbiAgc3dpdGNoIChpbm5pbmcpIHtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldCArPSAnc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0ICs9ICduZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICByZXQgKz0gJ3JkJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXQgKz0gJ3RoJztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmNvbnN0IG1ha2VCYXNlRGlhbW9uZCA9IChvY2MpID0+IHtcbiAgY29uc3QgJGRpYW1vbmQgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGlhbW9uZCcpO1xuXG4gIGlmIChvY2MpIHtcbiAgICAkZGlhbW9uZC5hZGRDbGFzcygnZmlsbGVkJyk7XG4gIH1cblxuICByZXR1cm4gJGRpYW1vbmQ7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVmaXhlZE9uLFxuICBnZXRFbW9qaSxcbiAgZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsICxcbiAgZ2V0SW5uaW5nVGV4dCxcbiAgbWFrZUJhc2VEaWFtb25kLFxufTtcblxuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vbGliL3RlYW1zLWRhdGEnKTtcbmNvbnN0IHdlYXRoZXIgPSByZXF1aXJlKCcuLi9saWIvd2VhdGhlcicpO1xuXG5jb25zdCAkZGlhbW9uZCA9ICQoJyNkaWFtb25kJyk7XG5jb25zdCBkaWFtb25kTG9jYXRpb25zID0ge1xuICAkbW91bmQ6ICRkaWFtb25kLmZpbmQoJy5tb3VuZCcpLFxuICAkYmF0dGluZzogJGRpYW1vbmQuZmluZCgnLmJhdHRpbmcnKSxcbiAgJGZpcnN0OiAkZGlhbW9uZC5maW5kKCcuZmlyc3QnKSxcbiAgJHNlY29uZDogJGRpYW1vbmQuZmluZCgnLnNlY29uZCcpLFxuICAkdGhpcmQ6ICRkaWFtb25kLmZpbmQoJy50aGlyZCcpLFxufTtcblxuY29uc3QgQkFTRVMgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCddOyAvLyB0b2RvOiAnZm91cnRoJywgJ3NlY3JldCc/XG5cbmNvbnN0IGRyYXdCYXR0ZXIgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICAvL2NvbnN0IG1sID0gaGlnaGxpZ2h0Lm1sdXN0YXJkO1xuICBjb25zdCBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgY29uc3QgZ2UgPSBjdXIuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgY29uc3QgdGVhbSA9IGdlLnRvcE9mSW5uaW5nID8gJ2F3YXknIDogJ2hvbWUnO1xuICBsZXQgbmFtZVdpdGhFbW9qaSA9ICcnO1xuXG4gIGlmIChnZVtgJHt0ZWFtfUJhdHRlck5hbWVgXSkge1xuICAgIGNvbnN0IG5hbWUgPSB1dGlsLmdldFBsYXllck5hbWVXaXRoSW5pdGlhbChnZVtgJHt0ZWFtfUJhdHRlck5hbWVgXSk7XG4gICAgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke25hbWV9YDtcbiAgfVxuXG4gIGRpYW1vbmRMb2NhdGlvbnNbJyRiYXR0aW5nJ11cbiAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbn07XG5cbmNvbnN0IGRyYXdQaXRjaGVyID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgLy9jb25zdCBtbCA9IGhpZ2hsaWdodC5tbHVzdGFyZDtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IGdlID0gY3VyLmdhbWVFdmVudC5kYXRhO1xuXG4gIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdob21lJyA6ICdhd2F5JztcbiAgbGV0IG5hbWVXaXRoRW1vamkgPSAnJztcblxuICBpZiAoZ2VbYCR7dGVhbX1QaXRjaGVyTmFtZWBdKSB7XG4gICAgY29uc3QgbmFtZSA9IHV0aWwuZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsKGdlW2Ake3RlYW19UGl0Y2hlck5hbWVgXSk7XG4gICAgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke25hbWV9YDtcbiAgfVxuXG4gIGRpYW1vbmRMb2NhdGlvbnNbJyRtb3VuZCddXG4gICAgLnRleHQobmFtZVdpdGhFbW9qaSk7XG59O1xuXG5jb25zdCBkcmF3QmFzZXJ1bm5lcnMgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICBjb25zdCBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgY29uc3QgbWwgPSBjdXIubWx1c3RhcmQ7XG4gIGNvbnN0IGdlID0gY3VyLmdhbWVFdmVudC5kYXRhO1xuXG4gIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdhd2F5JyA6ICdob21lJztcblxuICBpZiAobWwgJiYgbWwuYmFzZVJ1bm5lcnMpIHtcbiAgICBmb3IgKGxldCBiYXNlIG9mIEJBU0VTKSB7XG4gICAgICBsZXQgbmFtZSA9IG1sLmJhc2VSdW5uZXJzW2Jhc2VdLnBsYXllck5hbWU7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGxldCBuYW1lV2l0aEVtb2ppID0gYCR7dXRpbC5nZXRFbW9qaSh0ZWFtLCBnZSl9ICR7dXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwobmFtZSl9YDtcbiAgICAgICAgZGlhbW9uZExvY2F0aW9uc1tgJCR7YmFzZX1gXVxuICAgICAgICAgIC50ZXh0KG5hbWVXaXRoRW1vamkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlhbW9uZExvY2F0aW9uc1tgJCR7YmFzZX1gXVxuICAgICAgICAgIC50ZXh0KCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRyYXdTY29yZWJvYXJkID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IG1sID0gY3VyLm1sdXN0YXJkO1xuICBjb25zdCBnZSA9IGN1ci5nYW1lRXZlbnQuZGF0YTtcblxuICBjb25zdCAkc2NvcmVib2FyZCA9ICQoJyNkaWFtb25kX19zY29yZWJvYXJkJyk7XG5cbiAgLy8gc2NvcmVcbiAgY29uc3QgJGhvbWUgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC10ZWFtc19faG9tZSBzcGFuJyk7XG4gICRob21lLmZpcnN0KCkudGV4dCh0ZWFtc0RhdGFbZ2UuaG9tZVRlYW1dLnNob3J0aGFuZCk7XG4gICRob21lLmxhc3QoKS50ZXh0KGdlLmhvbWVTY29yZSk7XG5cbiAgY29uc3QgJGF3YXkgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC10ZWFtc19fYXdheSBzcGFuJyk7XG4gICRhd2F5LmZpcnN0KCkudGV4dCh0ZWFtc0RhdGFbZ2UuYXdheVRlYW1dLnNob3J0aGFuZCk7XG4gICRhd2F5Lmxhc3QoKS50ZXh0KGdlLmF3YXlTY29yZSk7XG5cbiAgLy8gYmFzZXNcbiAgY29uc3QgJGJhc2VzID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtYmFzZXMnKTtcbiAgJGJhc2VzLmVtcHR5KCk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQobWwuYmFzZVJ1bm5lcnMudGhpcmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKG1sLmJhc2VSdW5uZXJzLnNlY29uZC5wbGF5ZXJOYW1lKSk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQobWwuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuXG4gIC8vIGNvdW50XG4gIGNvbnN0ICRjb3VudCA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWNvdW50X19jb3VudCBzcGFuJyk7XG4gICRjb3VudC5maXJzdCgpLnRleHQoZ2UuYXRCYXRCYWxscyk7XG4gICRjb3VudC5sYXN0KCkudGV4dChnZS5hdEJhdFN0cmlrZXMpO1xuICBjb25zdCAkb3V0cyA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWNvdW50X19vdXRzIHNwYW4nKTtcbiAgJG91dHMudGV4dChnZS5oYWxmSW5uaW5nT3V0cyk7XG5cbiAgLy8gaW5uaW5nXG4gIGNvbnN0ICRpbm5pbmcgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1vdGhlcl9faW5uaW5nIHNwYW4nKTtcbiAgJGlubmluZy5maXJzdCgpLnRleHQoZ2UudG9wT2ZJbm5pbmcgPyAnVE9QJyA6ICdCT1QnKTtcbiAgJGlubmluZy5sYXN0KCkudGV4dCh1dGlsLmdldElubmluZ1RleHQoZ2UuaW5uaW5nICsgMSkpO1xuXG4gIC8vIHdlYXRoZXJcbiAgY29uc3QgJHdlYXRoZXIgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1vdGhlcl9fd2VhdGhlciBzcGFuJyk7XG4gICR3ZWF0aGVyXG4gICAgLnRleHQod2VhdGhlcltnZS53ZWF0aGVyXS5pY29uIHx8IHdlYXRoZXJbZ2Uud2VhdGhlcl0ubmFtZSlcbiAgICAuYXR0cigndGl0bGUnLCB3ZWF0aGVyW2dlLndlYXRoZXJdLm5hbWUpO1xufTtcblxuXG5jbGFzcyBWaXN1YWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHNob3codmlzdWFsKSB7XG4gICAgc3dpdGNoICh2aXN1YWwpIHtcbiAgICAgIGNhc2UgJ2ludHJvJzpcbiAgICAgICAgJCgnI2ludHJvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcjZGlhbW9uZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgJCgnI2ludHJvJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgICAkKCcjZGlhbW9uZCcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGlhbW9uZChoaWdobGlnaHRzKSB7XG4gICAgZHJhd0JhdHRlcihoaWdobGlnaHRzKTtcbiAgICBkcmF3UGl0Y2hlcihoaWdobGlnaHRzKTtcbiAgICBkcmF3QmFzZXJ1bm5lcnMoaGlnaGxpZ2h0cyk7XG5cbiAgICBkcmF3U2NvcmVib2FyZChoaWdobGlnaHRzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpc3VhbDtcblxuIl19
