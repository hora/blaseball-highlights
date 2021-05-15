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

    // skip animations for now
    showHighlight(cur);
    //animateHighlight(cur);
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


},{"./highlight":23,"./util":25}],21:[function(require,module,exports){
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

const highlight = require('./highlight');
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
      //if (resp.ok) {
      //resp.json().then((data) => {
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
      //});
        //const data = await resp.json();

      //}
    })
    .catch((err) => {
      console.error(err);
      $('#game-event-form .error-msg').removeClass('d-none');
      stopLoading();
    });

  //} else {
    // todo: add error handling
    //$('#game-event-form error-msg').removeClass('d-none');
    //stopLoading();
  //}
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


},{"./highlight":23,"./util":25,"mlustard":12}],23:[function(require,module,exports){
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


},{"grand-slalami":5}],24:[function(require,module,exports){
(function (global){(function (){
const gameEventSelector = require('./game-event-selector');
const dialog = require('./dialog');
const visual = require('./visual');
const downloader = require('./downloader');
const teamsData = require('../lib/teams-data');

global.highlights = [];
let curHighlight = 0;
let intro = true;

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
      nextHighlight(true);
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

  nextHighlight(true);
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

},{"../lib/teams-data":1,"./dialog":20,"./downloader":21,"./game-event-selector":22,"./visual":26}],25:[function(require,module,exports){
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


},{}],26:[function(require,module,exports){
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


},{"../lib/teams-data":1,"../lib/weather":2,"./util":25}]},{},[24])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdGVhbXMtZGF0YS5qcyIsImxpYi93ZWF0aGVyLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvY29tbWVudGFyeS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL2dyYW1tYXIuanMiLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC9ncmFuZC1zbGFsYW1pLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvcXVpcHMuanNvbiIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL3RyYWNlcnktbW9kcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9iYXNlLXJ1bm5lcnMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvZ2FtZS1zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvaGl0cy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9taXNjLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL21sdXN0YXJkLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL291dHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvc3BlY2lhbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9zdGVhbHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC93YWxrcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9saWIvcGxheWVycy5qcyIsIm5vZGVfbW9kdWxlcy90cmFjZXJ5LWdyYW1tYXIvdHJhY2VyeS5qcyIsInNyYy9kaWFsb2cuanMiLCJzcmMvZG93bmxvYWRlci5qcyIsInNyYy9nYW1lLWV2ZW50LXNlbGVjdG9yLmpzIiwic3JjL2hpZ2hsaWdodC5qcyIsInNyYy9tYWluLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvdmlzdWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNubEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkYXRhID0ge1xuICAvLyBoZWxsbW91dGggc3VuYmVhbXNcbiAgJ2YwMmFlYWUyLTVlNmEtNDA5OC05ODQyLTAyZDIyNzNmMjVjNyc6IHtcbiAgICBzaG9ydGhhbmQ6ICdIRUxMJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2ZmZmJhYicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMWQxOTMyJyxcbiAgICAgIGdyYXNzOiAnZThjODc3JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2U4Yzg3NycsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMWQxOTMyJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tc3VuYmVhbXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ0NvYmxpbicsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL0tyYXNpX1Nhdm92JyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGhhZGVzIHRpZ2Vyc1xuICAnNzQ3YjhlNGEtN2U1MC00NjM4LWE5NzMtZWE3OTUwYTNlNzM5Jzoge1xuICAgIHNob3J0aGFuZDogJ0hBRCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc1YzFjMWMnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2U4NTYzNycsXG4gICAgICBncmFzc091dGxpbmU6ICdlODU2MzcnLFxuICAgICAgZGlydDogJ2ZhYTYyMycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXRpZ2Vycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnanJmYnonLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9qcmZieicsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBzZWF0dGxlIGdhcmFnZXNcbiAgJzEwNWJjM2ZmLTEzMjAtNGUzNy04ZWYwLThkNTk1Y2I5NWRkMCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdTRUEnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnMmI0MDc1JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJ2VhMmQyOScsXG4gICAgICBncmFzc091dGxpbmU6ICdlYTJkMjknLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMWQxZDFkJyxcbiAgICAgIGRpcnQ6ICdkOGQ4ZGEnLFxuICAgICAgZGlydE91dGxpbmU6ICcxZDFkMWQnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1nYXJhZ2VzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICd6YW5kdGVyYmlyZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gbWV4aWNvIGNpdHkgd2lsZCB3aW5nc1xuICAnNTdlYzA4Y2MtMDQxMS00NjQzLWIzMDQtMGU4MGRiYzE1YWM3JyA6IHtcbiAgICBzaG9ydGhhbmQ6ICdDRE1YJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2QxNTcwMCcsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICc3MzFmMDAnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnNzMxZjAwJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZTBlMGUwJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28td2luZ3MucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ3RocjMzaDNhZDNkZHJhZycsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL3RocjMzaDNhZDNkZHJhZycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGF0bGFudGlzIGdlb3JnaWFzXG4gICdkOWY4OWE4YS1jNTYzLTQ5M2UtOWQ2NC03OGU0ZjlhNTVkNGEnOiB7XG4gICAgc2hvcnRoYW5kOiAnQVRMUycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICcwMGRiYzInLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGdyYXNzOiAnNWNmZmVjJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzVjZmZlYycsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcnLFxuICAgICAgZGlydDogJycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWdlb3JnaWFzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdibHlwdG9ub21pY2EnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ibHlwdG9ub21pY2EnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBjaGljYWdvIGZpcmVmaWdodGVyc1xuICAnY2EzZjFjOGMtYzAyNS00ZDhlLThlZWYtNWJlNmFjY2JlYjE2Jzoge1xuICAgIHNob3J0aGFuZDogJ0NISScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc4YzJhM2UnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGdyYXNzOiAnZmY5NjBhJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2ZmOTYwYScsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWZpcmVmaWdodGVycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnV2lyc3ByaW5nZW4gb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1maXJlZmlnaHRlcnMtc3RhZGl1bS5wbmcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnV2lyc3ByaW5nZW4gb24gRGlzY29yZCcsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gdG9reW8gbGlmdFxuICAnYzczYjcwNWMtNDBhZC00NjMzLWE2ZWQtZDM1N2VlMmUyYmNmJzoge1xuICAgIHNob3J0aGFuZDogJ1RZTycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdlNTM2YzgnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwYTJhJyxcbiAgICAgIGdyYXNzOiAnOTAxNDdiJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzkwMTQ3YicsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDBhMmEnLFxuICAgICAgZGlydDogJ2ZhZjBmOScsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMGEyYScsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWxpZnQucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2pyZmJ6JyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vanJmYnonLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gYnJlY2tlbnJpZGdlIGphenogaGFuZHNcbiAgJ2EzN2Y5MTU4LTdmODItNDZiYy05MDhjLWM5ZTJkZGE3YzMzYic6IHtcbiAgICBzaG9ydGhhbmQ6ICdCUksnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNjM4OGFkJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzRlMDg0ZCcsXG4gICAgICBncmFzczogJ2YzY2E0MCcsXG4gICAgICBncmFzc091dGxpbmU6ICdmM2NhNDAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnNGUwODRkJyxcbiAgICAgIGRpcnQ6ICdmMmE1NDEnLFxuICAgICAgZGlydE91dGxpbmU6ICc0ZTA5NGQnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1oYW5kcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnU2tvb3RsZXMgb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBsYSB1bmxpbWl0ZWQgdGFjb3NcbiAgJzg3OGMxYmY2LTBkMjEtNDY1OS1iZmVlLTkxNmM4MzE0ZDY5Yyc6IHtcbiAgICBzaG9ydGhhbmQ6ICdUQUNPJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzY0Mzc2ZScsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICdmYWNmMzMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZmFjZjMzJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnMjhjODcyJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tdGFjb3MucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJzRkYW1BdmVudWUnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS80ZGFtQXZlbnVlJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIG1pYW1pIGRhbGVcbiAgJ2I2M2JlOGMyLTU3NmEtNGQ2ZS04ZGFmLTgxNGY4YmNlYTk2Zic6IHtcbiAgICBzaG9ydGhhbmQ6ICdNSUEnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnYmYwMGZmJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzBlMTIxNicsXG4gICAgICBncmFzczogJ2ZlZTAyMCcsXG4gICAgICBncmFzc091dGxpbmU6ICdmZWUwMjAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMGUxMjE2JyxcbiAgICAgIGRpcnQ6ICczM2ZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwZTEyMTYnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1kYWxlLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICc0ZGFtQXZlbnVlJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vNGRhbUF2ZW51ZScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWRhbGUtc3RhZGl1bS5wbmcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnQmlsbHlHYWxhbnQnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9CaWxseUdhbGFudCcsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGJvc3RvbiBmbG93ZXJzXG4gICczZjhiYmIxNS02MWMwLTRlM2YtOGU0YS05MDdhNWZiMTU2NWUnOiB7XG4gICAgc2hvcnRoYW5kOiAnQk9TJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2Y3ZDFmZicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICczOTNhMTcnLFxuICAgICAgZ3Jhc3M6ICc5NzU1YTUnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnOTc1NWE1JyxcbiAgICAgIGJhc2VzOiAnZjdkMWZmJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzM5M2ExNycsXG4gICAgICBkaXJ0OiAnZDc5MWUzJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMzkzYTE3JyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZmxvd2Vycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnbmltIG9uIERpc2NvcmQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IHRydWUsXG4gIH0sXG5cbiAgLy8gb2hpbyB3b3Jtc1xuICAnYmI0YTlkZTUtYzkyNC00OTIzLWEwY2ItOWQxNDQ1ZjFlZTVkJzoge1xuICAgIHNob3J0aGFuZDogJ09ISU8nLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNWM0ODIyJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2JhOWM2NScsXG4gICAgICBncmFzc091dGxpbmU6ICdiYTljNjUnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmYWZhZmEnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgbmV1dHJhbDogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28td29ybXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2Rhbi5kaWdpdGFsJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vZGFuZG90ZGlnaXRhbCcsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGhvdXN0b24gc3BpZXNcbiAgJzlkZWJjNjRmLTc0YjctNGFlMS1hNGQ2LWZjZTAxNDRiNmVhNSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdIT1UnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNjc1NTZiJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBncmFzczogJzllODJhNCcsXG4gICAgICBncmFzc091dGxpbmU6ICc5ZTgyYTQnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmYWZhZmEnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1zcGllcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnRGFsbWF0aW9uZXInLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIHBoaWxseSBwaWVzXG4gICcyM2U0Y2JjMS1lOWNkLTQ3ZmEtYTM1Yi1iZmEwNmY3MjZjYjcnOiB7XG4gICAgc2hvcnRoYW5kOiAnUEhMJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzM5OWQ4ZicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICdmZmNkNGMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZmZjZDRjJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tcGllcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnTGFkeWtuaWdodHRpbWUjODgwNiBvbiBEaXNjb3JkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBzYW4gZnJhY2lzY28gbG92ZXJzXG4gICdiNzJmMzA2MS1mNTczLTQwZDctODMyYS01YWQ0NzViZDc5MDknOiB7XG4gICAgc2hvcnRoYW5kOiAnU0YnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZDIyNjRhJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJ2YxOTNiMycsXG4gICAgICBncmFzc091dGxpbmU6ICdmMTkzYjMnLFxuICAgICAgLy9iYXNlczogJzZiMTg0ZCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWxvdmVycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnTHVjYWNyYWZ0cycsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2x1Y2FjcmFmdHMnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gZGFsbGFzIHN0ZWFrc1xuICAnYjAyNGU5NzUtMWM0YS00NTc1LTg5MzYtYTM3NTRhMDg4MDZhJzoge1xuICAgIHNob3J0aGFuZDogJ0RBTCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc4YzhkOGYnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnYzZhNzhiJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2M2YTc4YicsXG4gICAgICAvL2dyYXNzT3V0bGluZTogJzhjMzYyYScsXG4gICAgICAvL2Jhc2VzOiAnOGMzNjI4JyxcbiAgICAgIGJhc2VzOiAnYjAwZTFjJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICAvL2RpcnQ6ICdjNmE3OGInLFxuICAgICAgLy9kaXJ0OiAnYjAwZTFjJyxcbiAgICAgIGRpcnQ6ICc4YzM2MmEnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1zdGVha3MucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJzRkYW1BdmVudWUnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS80ZGFtQXZlbnVlJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIG5ldyB5b3JrIG1pbGxlbm5pYWxzXG4gICczNjU2OTE1MS1hMmZiLTQzYzEtOWRmNy0yZGY1MTI0MjRjODInOiB7XG4gICAgc2hvcnRoYW5kOiAnTlknLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZjhkNmQ3JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJzk5Y2RlMycsXG4gICAgICBncmFzc091dGxpbmU6ICc5OWNkZTMnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1taWxsZW5uaWFscy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnQE9yaWdhbWlBbmRyb2lkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vT3JpZ2FtaUFuZHJvaWQnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1taWxsZW5uaWFscy1zdGFkaXVtLnBuZycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICdBbm5hbmEnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGNvcmUgbWVjaGFuaWNzXG4gICc0NjM1ODg2OS1kY2U5LTRhMDEtYmZiYS1hYzI0ZmM1NmY1N2UnOiB7XG4gICAgc2hvcnRoYW5kOiAnQ09SRScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdkMTMxMDAnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGdyYXNzOiAnZjliMTRhJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2Y5YjE0YScsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcnLFxuICAgICAgZGlydDogJ2ZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1lY2hhbmljcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnWndlaUhhd2tlJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vWndlaUhhd2tlJyxcbiAgICBhd2F5TG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWVjaGFuaWNzLWF3YXkucG5nJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJ1p3ZWlIYXdrZScsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL1p3ZWlIYXdrZScsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1lY2hhbmljcy1zdGFkaXVtLnBuZycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICdAd2hhdHNzaGVjYWxsZWQnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS93aGF0c3NoZWNhbGxlZCcsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyB5ZWxsb3dzdG9uZSBtYWdpY1xuICAnNzk2NmViMDQtZWZjYy00OTliLThmMDMtZDEzOTE2MzMwNTMxJzoge1xuICAgIHNob3J0aGFuZDogJ1lFTEwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnYmYwMDQzJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2ZjYjA0MCcsXG4gICAgICBncmFzc091dGxpbmU6ICdmY2IwNDAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1tYWdpYy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnTHVja3kgUGVubnkgb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gaGF3YWknaSBmcmlkYXlzXG4gICc5NzlhZWU0YS02ZDgwLTQ4NjMtYmYxYy1lZTFhNzhlMDYwMjQnOiB7XG4gICAgc2hvcnRoYW5kOiAnRlJJJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzNlZTY1MicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICcxMWE2YzInLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnMTFhNmMyJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZTY3NTc1JyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZnJpZGF5cy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBjYW5hZGEgbW9pc3QgdGFsa2Vyc1xuICAnZWI2N2FlNWUtYzRiZi00NmNhLWJiYmMtNDI1Y2QzNDE4MmZmJzoge1xuICAgIHNob3J0aGFuZDogJ0NBTicsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdlNWY0ZjUnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnM2I5N2Q0JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzNiOTdkNCcsXG4gICAgICBiYXNlczogJ2VkMWMyNCcsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJzAzNTU5NycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJ2U1ZjRmNScsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICdlNWY0ZjUnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXRhbGtlcnMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ1EgUGVpZmZlciwgQGxvbmdoYWlyUScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2xvbmdoYWlyUScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBjaGFybGVzdG9uIHNob2UgdGhpZXZlc1xuICAnYmZkMzg3OTctODQwNC00YjM4LThiODItMzQxZGEyOGIxZjgzJzoge1xuICAgIHNob3J0aGFuZDogJ0NIUycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdmZmNlMGEnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnMWU5MWNjJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzFlOTFjYycsXG4gICAgICBiYXNlczogJ2ZmY2UwYScsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJ2ZjZjJkMCcsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXRoaWV2ZXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2NoZGhycm1ubicsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2NoZGhycm1ubicsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBrYW5zYXMgY2l0eSBicmVhdGggbWludHNcbiAgJ2FkYzViMzk0LThmNzYtNDE2ZC05Y2U5LTgxMzcwNjg3N2I4NCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdLQ0JNJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzE3OGY1NScsXG4gICAgICBtb3VuZDogJzAwM2YxZicsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICcxNzhmNTUnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnMTc4ZjU1JyxcbiAgICAgIGJhc2VzOiAnZmYwMDExJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWludHMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ25hc2hfaGlnaCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL25hc2hfaGlnaCcsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBiYWx0aW1vcmUgY3JhYnNcbiAgJzhkODdjNDY4LTY5OWEtNDdhOC1iNDBkLWNmYjczYTU2NjBhZCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdCQUwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNTkzMDM3JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2Y3NjMwYycsXG4gICAgICBncmFzc091dGxpbmU6ICdmNzYzMGMnLFxuICAgICAgYmFzZXM6ICc1OTMwMzcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmN2IxODknLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1jcmFicy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnNGFkYW1BdmVudWUnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS80ZGFtQXZlbnVlJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYXRhO1xuXG4iLCJjb25zdCB3ZWF0aGVyID0ge1xuICAwOiB7XG4gICAgbmFtZTogJ3ZvaWQnLFxuICAgIGljb246ICcnLFxuICB9LFxuICAxOiB7XG4gICAgbmFtZTogJ3N1biAyJyxcbiAgICBpY29uOiAn4piAJyxcbiAgfSxcbiAgMjoge1xuICAgIG5hbWU6ICdvdmVyY2FzdCcsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDM6IHtcbiAgICBuYW1lOiAncmFpbnknLFxuICAgIGljb246ICcnLFxuICB9LFxuICA0OiB7XG4gICAgbmFtZTogJ3NhbmRzdG9ybScsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDU6IHtcbiAgICBuYW1lOiAnc25vd3knLFxuICAgIGljb246ICcnLFxuICB9LFxuICA2OiB7XG4gICAgbmFtZTogJ2FjaWRpYycsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDc6IHtcbiAgICBuYW1lOiAnc29sYXIgZWNsaXBzZScsXG4gICAgaWNvbjogJ/CfjJEnLFxuICB9LFxuICA4OiB7XG4gICAgbmFtZTogJ2dsaXR0ZXInLFxuICAgIGljb246ICcnLFxuICB9LFxuICA5OiB7XG4gICAgbmFtZTogJ2Jsb29kZHJhaW4nLFxuICAgIGljb246ICfwn6m4JyxcbiAgfSxcbiAgMTA6IHtcbiAgICBuYW1lOiAncGVhbnV0cycsXG4gICAgaWNvbjogJ/CfpZwnLFxuICB9LFxuICAxMToge1xuICAgIG5hbWU6ICdsb3RzIG9mIGJpcmRzJyxcbiAgICBpY29uOiAn8J+QpicsXG4gIH0sXG4gIDEyOiB7XG4gICAgbmFtZTogJ2ZlZWRiYWNrJyxcbiAgICBpY29uOiAn8J+OpCcsXG4gIH0sXG4gIDEzOiB7XG4gICAgbmFtZTogJ3JldmVyYicsXG4gICAgaWNvbjogJ/CfjIonLFxuICB9LFxuICAxNDoge1xuICAgIG5hbWU6ICdibGFjayBob2xlJyxcbiAgICBpY29uOiAn4pqrJyxcbiAgfSxcbiAgMTU6IHtcbiAgICBuYW1lOiAnY29mZmVlJyxcbiAgICBpY29uOiAn4piVJyxcbiAgfSxcbiAgMTY6IHtcbiAgICBuYW1lOiAnY29mZmVlIDInLFxuICAgIGljb246ICfwn421JyxcbiAgfSxcbiAgMTc6IHtcbiAgICBuYW1lOiAnY29mZmVlIDNzJyxcbiAgICBpY29uOiAnM++4j+KDoycsXG4gIH0sXG4gIDE4OiB7XG4gICAgbmFtZTogJ2Zsb29kaW5nJyxcbiAgICBpY29uOiAn8J+asCcsXG4gIH0sXG4gIDE5OiB7XG4gICAgbmFtZTogJ3NhbG1vbicsXG4gICAgaWNvbjogJ/CfkJ8nLFxuICB9LFxuICAyMDoge1xuICAgIG5hbWU6ICdnbGl0dGVyJyxcbiAgICBpY29uOiAn4pyoJyxcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2VhdGhlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnVpbGRDb21tZW50ID0gZnVuY3Rpb24gYnVpbGRDb21tZW50KHNldHRpbmdzLCBncmFtbWFyKSB7XG4gIHZhciBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gIHZhciBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkOyAvLyBjaGVjayBmb3IgZ2FtZSBzdGF0dXNcblxuICBzd2l0Y2ggKG1sdXN0YXJkLmdhbWVTdGF0dXMpIHtcbiAgICBjYXNlICdiZWZvcmVGaXJzdFBpdGNoJzpcbiAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNnYW1lU3RhcnQjJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ZpcnN0SGFsZklubmluZ1N0YXJ0JzpcbiAgICAgIGlmIChnYW1lRXZlbnQuaW5uaW5nID09PSAwKSB7XG4gICAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdPbmVTdGFydCMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdTdGFydCMnKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzZWNvbmRIYWxmSW5uaW5nU3RhcnQnOlxuICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2lubmluZ1N0YXJ0IycpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgY29tbWVudCA9ICcnOyAvLyBjaGVjayBmb3Igb3V0c1xuXG4gIGlmIChtbHVzdGFyZC5vdXQpIHtcbiAgICBpZiAobWx1c3RhcmQuZ2FtZVN0YXR1cyA9PT0gJ2hhbGZJbm5pbmdFbmQnKSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI2xhc3RPdXRPZklubmluZyMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNvdXQjJyk7XG4gICAgfVxuICB9IC8vIGNoZWNrIGZvciBzY29yZVxuXG5cbiAgaWYgKG1sdXN0YXJkLnJ1bnNTY29yZWQgIT09IDAgfHwgbWx1c3RhcmQudW5ydW5zU2NvcmVkICE9PSAwIHx8IC8vIHNjb3JlIGNoYW5nZSBkdWUgdG8gc2FsbW9uIHN0ZWFsaW5nIHJ1bnNcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnc2FsbW9uJyAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5kZXRhaWxzICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmRldGFpbHMucnVuc1N0b2xlbi5sZW5ndGggfHwgLy8gc2NvcmUgY2hhbmdlIGZyb20gc3VuIDIgc21pbGluZ1xuICBtbHVzdGFyZC5zcGVjaWFsICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmtpbmQgPT09ICdzdW4yJyB8fCAvLyBzY29yZSBjaGFuZ2UgZnJvbSBibGFjayBob2xlIHN3YWxsb3dpbmdcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnYmxhY2tIb2xlJykge1xuICAgIGlmIChjb21tZW50KSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI3Njb3JlQWRkb24jJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjc2NvcmUjJyk7XG4gICAgfVxuICB9IC8vIGNoZWNrIGlmIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIGF0IHRoZSBwbGF0ZVxuXG5cbiAgaWYgKG1sdXN0YXJkLmJhdHRlclVwICYmIGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQpIHtcbiAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI2JhdHRlclVwUnVubmVycyMnKTtcbiAgfSAvLyByZXR1cm4gdGhlIGNvbW1lbnQgaWYgaXQgd2FzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aGUgb3JpZ2luYWwgdXBkYXRlIGlmIGl0XG4gIC8vIGV4aXN0cywgb3RoZXJ3aXNlIGFuIGVtcHR5IHN0cmluZ1xuXG5cbiAgcmV0dXJuIGNvbW1lbnQgfHwgZ2FtZUV2ZW50Lmxhc3RVcGRhdGUgfHwgJyc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnVpbGRDb21tZW50OiBidWlsZENvbW1lbnRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciB0cmFjZXJ5ID0gcmVxdWlyZSgndHJhY2VyeS1ncmFtbWFyJyk7XG5cbnZhciBtb2RzID0gcmVxdWlyZSgnLi90cmFjZXJ5LW1vZHMnKTtcblxudmFyIHF1aXBzID0gcmVxdWlyZSgnLi9xdWlwcy5qc29uJyk7XG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChzZXR0aW5ncykge1xuICB2YXIgc2VlZCA9IHNldHRpbmdzLnNlZWQ7XG4gIHZhciBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gIHZhciBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkO1xuICB2YXIgb3ZlcnJpZGVzID0gc2V0dGluZ3Mub3ZlcnJpZGVzO1xuICB2YXIgbGV2ZWwgPSBzZXR0aW5ncy5sZXZlbDtcblxuICBpZiAoc2VlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHJhY2VyeS5zZXRSYW5kb20oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlZWQ7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgZ3JhbW1hciA9IHRyYWNlcnkuY3JlYXRlR3JhbW1hcih7fSk7IC8vIHBvcHVsYXRlIGRhdGEgZnJvbSBnYW1lRXZlbnRcblxuICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIocXVpcHMuZGF0YSksXG4gICAgICBfc3RlcDtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX2ZpZWxkMyA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIGRhdGEgPSBnYW1lRXZlbnRbX2ZpZWxkM107XG5cbiAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gc29tZSBkYXRhIG5lZWRzIG1hc3NhZ2luZ1xuICAgICAgICBzd2l0Y2ggKF9maWVsZDMpIHtcbiAgICAgICAgICBjYXNlICdpbm5pbmcnOlxuICAgICAgICAgICAgZGF0YSA9IChkYXRhICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndG9wT2ZJbm5pbmcnOlxuICAgICAgICAgICAgZGF0YSA9IGRhdGEgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdoYWxmSW5uaW5nT3V0cyc6XG4gICAgICAgICAgY2FzZSAnaG9tZVNjb3JlJzpcbiAgICAgICAgICBjYXNlICdhd2F5U2NvcmUnOlxuICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkMywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQzLCAnJyk7XG4gICAgICB9XG4gICAgfSAvLyBjdXJyZW50IHBpdGNoZXJcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvci5mKCk7XG4gIH1cblxuICB2YXIgY1BpdGNoZXIgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyBnYW1lRXZlbnQuaG9tZVBpdGNoZXJOYW1lIDogZ2FtZUV2ZW50LmF3YXlQaXRjaGVyTmFtZTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2NQaXRjaGVyJywgY1BpdGNoZXIpOyAvLyBjdXJyZW50IGJhdHRlciAoY2FuIGJlIGFuIGVtcHR5IHN0cmluZyBpZiBub2JvZHkgYmF0dGluZylcblxuICB2YXIgY0JhdHRlciA9IGdhbWVFdmVudC5ob21lQmF0dGVyTmFtZSB8fCBnYW1lRXZlbnQuYXdheUJhdHRlck5hbWU7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdjQmF0dGVyJywgY0JhdHRlcik7IC8vIHBpdGNoaW5nIHRlYW0gbmlja25hbWVcblxuICB2YXIgcE5pY2sgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyAnI2hOaWNrIycgOiAnI2FOaWNrIyc7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdwTmljaycsIHBOaWNrKTsgLy8gYmF0dGluZyB0ZWFtIG5pY2tuYW1lXG5cbiAgdmFyIGJOaWNrID0gZ2FtZUV2ZW50LnRvcE9mSW5uaW5nID8gJyNhTmljayMnIDogJyNoTmljayMnO1xuICBncmFtbWFyLnB1c2hSdWxlcygnYk5pY2snLCBiTmljayk7IC8vIGxlYWRpbmcgJiB0cmFpbGluZyB0ZWFtIG5pY2tuYW1lcyBhbmQgc2NvcmVzXG5cbiAgdmFyIGxUZWFtO1xuICB2YXIgdFRlYW07XG4gIHZhciBsU2NvcmU7XG4gIHZhciB0U2NvcmU7XG5cbiAgaWYgKGdhbWVFdmVudC5hd2F5U2NvcmUgPiBnYW1lRXZlbnQuaG9tZVNjb3JlKSB7XG4gICAgbFRlYW0gPSAnI2FOaWNrIyc7XG4gICAgdFRlYW0gPSAnI2hOaWNrIyc7XG4gICAgbFNjb3JlID0gJyNhU2NvcmUjJztcbiAgICB0U2NvcmUgPSAnI2hTY29yZSMnO1xuICB9IGVsc2Uge1xuICAgIGxUZWFtID0gJyNoTmljayMnO1xuICAgIHRUZWFtID0gJyNhTmljayMnO1xuICAgIGxTY29yZSA9ICcjaFNjb3JlIyc7XG4gICAgdFNjb3JlID0gJyNhU2NvcmUjJztcbiAgfVxuXG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdsVGVhbScsIGxUZWFtKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3RUZWFtJywgdFRlYW0pO1xuICBncmFtbWFyLnB1c2hSdWxlcygnbFNjb3JlJywgbFNjb3JlKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3RTY29yZScsIHRTY29yZSk7IC8vIHNldCBiYXNlIHJ1bm5lcnNcblxuICBpZiAoZ2FtZUV2ZW50LmJhc2VydW5uZXJDb3VudCA+PSAzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoJ3J1bm5lcnMnLCAnI2Jhc2VzTG9hZGVkIycpO1xuICB9IGVsc2UgaWYgKGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQgPiAwKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoJ3J1bm5lcnMnLCAnI3J1bm5lcnNPbkJhc2UjJyk7XG4gIH1cblxuICB2YXIgYmFzZXMgPSAnJztcblxuICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKG1sdXN0YXJkLmJhc2VSdW5uZXJzKTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGJhc2UgPSBfT2JqZWN0JGtleXNbX2ldO1xuXG4gICAgaWYgKG1sdXN0YXJkLmJhc2VSdW5uZXJzW2Jhc2VdLnBsYXllcklkKSB7XG4gICAgICBiYXNlcyArPSBcIlwiLmNvbmNhdChiYXNlLCBcIiBcIik7XG4gICAgfVxuICB9XG5cbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2Jhc2VzT2NjJywgYmFzZXMudHJpbSgpKTsgLy8gYnVpbGQgcXVpcHMgc2hvcnRjdXRzXG5cbiAgZm9yICh2YXIgZmllbGQgaW4gcXVpcHMuc2hvcnRjdXRzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoZmllbGQsIHF1aXBzLnNob3J0Y3V0c1tmaWVsZF0pO1xuICB9IC8vIGJ1aWxkIHF1aXBzIGdyYW1tYXJcblxuXG4gIGZvciAodmFyIF9maWVsZCBpbiBxdWlwc1tsZXZlbF0pIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQsIHF1aXBzW2xldmVsXVtfZmllbGRdKTtcbiAgfSAvLyBkbyBxdWlwIG92ZXJyaWRlc1xuXG5cbiAgZm9yICh2YXIgX2ZpZWxkMiBpbiBvdmVycmlkZXMpIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQyLCBvdmVycmlkZXNbX2ZpZWxkMl0pO1xuICB9IC8vIGFkZCBtb2RzXG5cblxuICBncmFtbWFyLmFkZE1vZGlmaWVycyh0cmFjZXJ5LmJhc2VFbmdNb2RpZmllcnMpO1xuICBncmFtbWFyLmFkZE1vZGlmaWVycyhtb2RzKTtcbiAgcmV0dXJuIGdyYW1tYXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdDogaW5pdFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1sdXN0YXJkID0gcmVxdWlyZSgnbWx1c3RhcmQnKTtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKTtcblxudmFyIGNvbW1lbnRhcnkgPSByZXF1aXJlKCcuL2NvbW1lbnRhcnknKTtcbi8qXG4gKiBAc2V0dGluZ3MgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wczpcbiAqICAgLSBnYW1lRXZlbnQ6IHRoZSBnYW1lIGV2ZW50IG9iamVjdCAoZnJvbSB0aGUgc3RyZWFtIG9yIGNocm9uaWNsZXIpXG4gKiAgIC0gbWx1c3RhcmQgKG9wdGlvbmFsKTogbWx1c3RhcmQgZGF0YSBmb3IgdGhlIGdhbWVFdmVudFxuICogICAtIHNlZWQgKG9wdGlvbmFsKTogYSBzZWVkLCBmb3IgZGV0ZXJtaW5pc3RpYyBjb21tZW50IGdlbmVyYXRpb25cbiAqICAgLSBsZXZlbCAob3B0aW9uYWwsIGRlZmF1bHRzIHRvICdtaW5pbWFsJyk6IHRoZSBjb21tZW50YXJ5IGxldmVsLCBvbmUgb2ZcbiAqICAgICAtIG1pbmltYWw6IGFkZHMgYSBmZXcgY29tbWVudHMgdG8gdXBkYXRlIG9uIGdhbWUgc3RhdHVzIGF0IGtleSBjb21tZW50c1xuICogICAtIG92ZXJyaWRlcyAob3B0aW9uYWwpOiBvYmplY3Qgd2l0aCBxdWlwIG92ZXJyaWRlc1xuICovXG5cblxudmFyIGdldENvbW1lbnQgPSBmdW5jdGlvbiBnZXRDb21tZW50KHNldHRpbmdzKSB7XG4gIGlmICghc2V0dGluZ3MuZ2FtZUV2ZW50KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgc2V0dGluZ3MubWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZCB8fCBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KHNldHRpbmdzLmdhbWVFdmVudCk7XG4gIHNldHRpbmdzLmxldmVsID0gc2V0dGluZ3MubGV2ZWwgfHwgJ21pbmltYWwnO1xuICBzZXR0aW5ncy5vdmVycmlkZXMgPSBzZXR0aW5ncy5vdmVycmlkZXMgfHwge307XG4gIHZhciBnciA9IGdyYW1tYXIuaW5pdChzZXR0aW5ncyk7XG5cbiAgaWYgKCFncikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjb21tZW50YXJ5LmJ1aWxkQ29tbWVudChzZXR0aW5ncywgZ3IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbW1lbnQ6IGdldENvbW1lbnRcbn07IiwibW9kdWxlLmV4cG9ydHM9e1wiZGF0YVwiOltcImlubmluZ1wiLFwidG9wT2ZJbm5pbmdcIixcImhhbGZJbm5pbmdPdXRzXCIsXCJob21lVGVhbU5hbWVcIixcImF3YXlUZWFtTmFtZVwiLFwiaG9tZVRlYW1OaWNrbmFtZVwiLFwiYXdheVRlYW1OaWNrbmFtZVwiLFwiaG9tZVNjb3JlXCIsXCJhd2F5U2NvcmVcIixcImhvbWVPZGRzXCIsXCJhd2F5T2Rkc1wiLFwiaG9tZVBpdGNoZXJOYW1lXCIsXCJhd2F5UGl0Y2hlck5hbWVcIixcImxhc3RVcGRhdGVcIixcInNjb3JlVXBkYXRlXCJdLFwibWluaW1hbFwiOntcIm1hdGNodXBcIjpbXCIjaE5pY2sjIHZzICNhTmljayNcIixcIiNhTmljayMgYXQgI2hOaWNrI1wiXSxcInRvcE9yQm90XCI6XCIjdG9wT2ZJbm5pbmcjXCIsXCJpbm5pbmdGdWxsXCI6XCIjdG9wT3JCb3QjIG9mICNpbm5pbmcjXCIsXCJnYW1lU3RhcnRcIjpcIiNtYXRjaHVwIy4gI3BpdGNoZXJzIy4gI29yaWdpbmFsI1wiLFwic2NvcmVcIjpcIiNvcmlnaW5hbCMgSXQncyAjbFRlYW0udGhlIyAjbFNjb3JlIyBhbmQgI3RUZWFtLnRoZSMgI3RTY29yZSMuXCIsXCJzY29yZUFkZG9uXCI6XCIgSXQncyAjbFRlYW0udGhlIyAjbFNjb3JlIyBhbmQgI3RUZWFtLnRoZSMgI3RTY29yZSMuXCIsXCJpbm5pbmdTdGFydFwiOlwiI29yaWdpbmFsIyAjY1BpdGNoZXIjIHBpdGNoaW5nIGZvciAjcE5pY2sudGhlIy5cIixcImlubmluZ09uZVN0YXJ0XCI6XCIjb3JpZ2luYWwjXCIsXCJwaXRjaGVyc1wiOltcIiNoUGl0Y2hlciMgcGl0Y2hpbmcgZm9yICNoTmljay50aGUjLCAjYVBpdGNoZXIjIGZvciAjYU5pY2sudGhlI1wiLFwiT3VyIHBpdGNoZXJzIGFyZSAjaFBpdGNoZXIjIGZvciAjaE5pY2sudGhlIywgYW5kICNhUGl0Y2hlciMgZm9yICNhTmljay50aGUjXCJdLFwib3V0XCI6XCIjb3JpZ2luYWwjICNpbm5pbmdGdWxsLmNhcGl0YWxpemUjLCAjb3V0cyMuXCIsXCJvdXRzXCI6XCIjaGFsZklubmluZ091dHMub3V0cyNcIixcImxhc3RPdXRPZklubmluZ1wiOlwiI29yaWdpbmFsI1wiLFwiYmF0dGVyVXBSdW5uZXJzXCI6XCIjb3JpZ2luYWwjICNydW5uZXJzLnJ1bm5lclBsdXJhbGl6ZSNcIixcInJ1bm5lcnNPbkJhc2VcIjpcIlJ1bm5lciBvbiAjYmFzZXNPY2MuYW5kIy5cIixcImJhc2VzTG9hZGVkXCI6XCJCYXNlcyBhcmUgbG9hZGVkIVwifSxcInNob3J0Y3V0c1wiOntcImhQaXRjaGVyXCI6XCIjaG9tZVBpdGNoZXJOYW1lI1wiLFwiYVBpdGNoZXJcIjpcIiNhd2F5UGl0Y2hlck5hbWUjXCIsXCJoTmlja1wiOlwiI2hvbWVUZWFtTmlja25hbWUjXCIsXCJhTmlja1wiOlwiI2F3YXlUZWFtTmlja25hbWUjXCIsXCJoU2NvcmVcIjpcIiNob21lU2NvcmUjXCIsXCJhU2NvcmVcIjpcIiNhd2F5U2NvcmUjXCIsXCJvcmlnaW5hbFwiOlwiI2xhc3RVcGRhdGUjI3Njb3JlVXBkYXRlLnNwYWNlZCNcIn19IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0aGU6IGZ1bmN0aW9uIHRoZShzKSB7XG4gICAgcmV0dXJuIFwidGhlIFwiLmNvbmNhdChzKTtcbiAgfSxcbiAgLy8gY291bnRzIHRoZSAjIG9mIG91dHMgYW5kIHBsdXJhbGl6ZXMgYWNjb3JkaW5nbHlcbiAgb3V0czogZnVuY3Rpb24gb3V0cyhzKSB7XG4gICAgaWYgKHMgPT09ICcxJykge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHMsIFwiIG91dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHMsIFwiIG91dHNcIik7XG4gICAgfVxuICB9LFxuICAvLyBveGZvcmQgY29tbWFzXG4gIGFuZDogZnVuY3Rpb24gYW5kKHMpIHtcbiAgICByZXR1cm4gcy5zcGxpdCgnICcpLmpvaW4oJywgJykucmVwbGFjZSgvLCAoW14sXSopJC8sICcgYW5kICQxJyk7XG4gIH0sXG4gIC8vIGZvciBwbHVyYWxpemluZyBydW5uZXIocykgb24gZmlyc3RbLCBzZWNvbmQgYW5kIHRoaXJkXVxuICBydW5uZXJQbHVyYWxpemU6IGZ1bmN0aW9uIHJ1bm5lclBsdXJhbGl6ZShzKSB7XG4gICAgaWYgKHMuaW5kZXhPZignLCcpID49IDAgfHwgcy5pbmRleE9mKCdhbmQnKSA+PSAwKSB7XG4gICAgICByZXR1cm4gcy5yZXBsYWNlKCdSdW5uZXInLCAnUnVubmVycycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gIH0sXG4gIC8vIGFkZHMgYSBzcGFjZSBiZWZvcmUgdGhlIHdvcmRcbiAgc3BhY2VkOiBmdW5jdGlvbiBzcGFjZWQocykge1xuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gXCIgXCIuY29uY2F0KHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vL2NvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBwbGF5ZXJzID0gcmVxdWlyZSgnLi4vbGliL3BsYXllcnMnKS5wbGF5ZXJzO1xuXG52YXIgQkFTRVMgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnXTtcblxudmFyIGdldEJhc2VydW5uZXJOYW1lID0gZnVuY3Rpb24gZ2V0QmFzZXJ1bm5lck5hbWUoZXZlbnREYXRhLCBpKSB7XG4gIHZhciBfZXZlbnREYXRhJGJhc2VSdW5uZXI7XG5cbiAgdmFyIG5hbWUgPSAoKF9ldmVudERhdGEkYmFzZVJ1bm5lciA9IGV2ZW50RGF0YS5iYXNlUnVubmVyTmFtZXMpID09PSBudWxsIHx8IF9ldmVudERhdGEkYmFzZVJ1bm5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRiYXNlUnVubmVyW2ldKSB8fCAnJzsgLy8gdHJ5IGxvb2tpbmcgdGhlIG5hbWUgdXAgYnkgdGhlIGlkXG5cbiAgaWYgKCFuYW1lKSB7XG4gICAgdmFyIHBsYXllciA9IHBsYXllcnMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5wbGF5ZXJfaWQgPT09IGV2ZW50RGF0YS5iYXNlUnVubmVyc1tpXTtcbiAgICB9KVswXTtcblxuICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgIG5hbWUgPSBwbGF5ZXIucGxheWVyX25hbWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59O1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIC8vY29uc3QgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIGlmIChldmVudERhdGEuYmFzZXJ1bm5lckNvdW50KSB7XG4gICAgLy8gaSByZXByZXNlbnRzIHRoZSBvcmRlciBvZiBiYXNlcnVubmVyc1xuICAgIC8vIGJhc2VzT2NjdXBpZWRbaV0gaXMgdGhlIGJhc2UgdGhleSBhcmUgb24sIDAtaW5kZXhlZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnREYXRhLmJhc2VzT2NjdXBpZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBiYXNlID0gZXZlbnREYXRhLmJhc2VzT2NjdXBpZWRbaV07XG4gICAgICBhbmFseXNpcy5iYXNlUnVubmVyc1tCQVNFU1tiYXNlXV0gPSB7XG4gICAgICAgIHBsYXllck5hbWU6IGdldEJhc2VydW5uZXJOYW1lKGV2ZW50RGF0YSwgaSksXG4gICAgICAgIHBsYXllcklkOiBldmVudERhdGEuYmFzZVJ1bm5lcnNbaV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBfZXZlbnREYXRhJGhvbWVUZWFtTmksIF9ldmVudERhdGEkYXdheVRlYW1OaTtcblxuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIHZhciBob21lID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGhvbWVUZWFtTmkgPSBldmVudERhdGEuaG9tZVRlYW1OaWNrbmFtZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRob21lVGVhbU5pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGhvbWVUZWFtTmkudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG4gIHZhciBob21lU2NvcmUgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVTY29yZSkgfHwgMDtcbiAgdmFyIGF3YXkgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkYXdheVRlYW1OaSA9IGV2ZW50RGF0YS5hd2F5VGVhbU5pY2tuYW1lKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGF3YXlUZWFtTmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkYXdheVRlYW1OaS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbiAgdmFyIGF3YXlTY29yZSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheVNjb3JlKSB8fCAwO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZigncGxheSBiYWxsJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnYmVmb3JlRmlyc3RQaXRjaCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RvcCBvZicpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2ZpcnN0SGFsZklubmluZ1N0YXJ0JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYm90dG9tIG9mJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnc2Vjb25kSGFsZklubmluZ1N0YXJ0JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ2FtZSBvdmVyJykgPj0gMCB8fCB1cGRhdGUuaW5kZXhPZihcIlwiLmNvbmNhdChob21lLCBcIiBcIikuY29uY2F0KGhvbWVTY29yZSwgXCIsIFwiKS5jb25jYXQoYXdheSwgXCIgXCIpLmNvbmNhdChhd2F5U2NvcmUpKSA+PSAwIHx8IHVwZGF0ZS5pbmRleE9mKFwiXCIuY29uY2F0KGF3YXksIFwiIFwiKS5jb25jYXQoYXdheVNjb3JlLCBcIiwgXCIpLmNvbmNhdChob21lLCBcIiBcIikuY29uY2F0KGhvbWVTY29yZSkpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2dhbWVFbmQnO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLmdhbWVTdGF0dXMpIHtcbiAgICByZXR1cm4gYW5hbHlzaXM7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2tIaXRSYmlQcmVTMTIgPSBmdW5jdGlvbiBjaGVja0hpdFJiaVByZVMxMihhbmFseXNpcywgdXBkYXRlKSB7XG4gIC8vIGZyb20gc29tZSBub24tZXhoYXVzdGl2ZSByZXNlYXJjaCwgaSB0aGluayB0aGVyZSB3ZXJlbid0IGFueSBncmFuZCBzbGFtc1xuICAvLyBwcmUtczEyIHRoYXQgd2VyZSBub3QgNCBydW5zXG4gIGlmIChhbmFseXNpcy5oaXRNZXRhLmtpbmQgPT09ICdncmFuZFNsYW0nKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDQ7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgc2luZ2xlL2RvdWJsZS90cmlwbGUgd2FzIGhpdCAmIHggcnVucyB3ZXJlIHNjb3JlZCwgaXQgc2hvd3MgdXBcbiAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgdXBkYXRlIGFzIFwiLi4uISB4IHNjb3Jlc1wiXG5cblxuICB2YXIgcnVucyA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgLyEgLywgLyBzY29yZXMvKSB8fCAwO1xuXG4gIGlmIChydW5zKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHJ1bnM7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgc29sbyBob21lIHJ1biB3YXMgaGl0LCB1cGRhdGUgY29udGFpbnMgdGhlIHRleHQgXCJzb2xvIGhvbWUgcnVuXCJcblxuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignc29sbyBob21lIHJ1bicpID49IDApIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgYSBtdWx0aS1ydW4gaG9tZSBydW4gd2FzIGhpdCwgdXBkYXRlIGNvbnRhaW5zIHRoZSB0ZXh0IFwieC1ydW4gaG9tZVxuICAvLyBydW5cIlxuXG5cbiAgcnVucyA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLy1ydW4gaG9tZSBydW4vKSB8fCAwO1xuXG4gIGlmIChydW5zKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHJ1bnM7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSBzaW5nbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ3NpbmdsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSBkb3VibGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ2RvdWJsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSB0cmlwbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ3RyaXBsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hvbWUgcnVuJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdob21lUnVuJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JhbmQgc2xhbScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnZ3JhbmRTbGFtJztcbiAgfVxuXG4gIGlmIChhbmFseXNpcy5oaXRNZXRhLmtpbmQpIHtcbiAgICBhbmFseXNpcy5oaXQgPSB0cnVlOyAvLyBjaGVjayBpZiBob21lIHJ1biAvIGdyYW5kIHNsYW0gbGFuZGVkIGluIGJpZyBidWNrZXRcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignYmFsbCBsYW5kcyBpbiBhIGJpZyBidWNrZXQnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5oaXRNZXRhLmJpZ0J1Y2tldCA9IHRydWU7XG4gICAgfSAvL2Zyb20gczEyIG9ud2FyZCwgc2NvcmVzIG9uIHRoZSBwbGF5IGFyZSBpbiB0aGUgc2NvcmVVcGRhdGUgZmllbGRcbiAgICAvL2NvbnN0IHNjb3JlVXBkYXRlID0gZXZlbnREYXRhPy5zY29yZVVwZGF0ZSB8fCAnJztcbiAgICAvL2lmIChzY29yZVVwZGF0ZSkge1xuICAgIC8vYW5hbHlzaXMucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCBudWxsKSB8fCAwO1xuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2NvcmVVcGRhdGUsIGRlZHVjZSB0aGUgc2NvcmUgZnJvbSB0aGUgdXBkYXRlXG4gICAgLy8gdGhpcyBpcyB0aGUgY2FzZSBmb3IgZ2FtZXMgYmV0d2VlbiBzMiAmIHMxMVxuXG5cbiAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSkge1xuICAgICAgY2hlY2tIaXRSYmlQcmVTMTIoYW5hbHlzaXMsIHVwZGF0ZSk7XG4gICAgfSAvLyBzY29yZSB1cGRhdGVzIGZyb20gczEyIG9ud2FyZCByZWdpc3RlcmVkIGluIHNyYy9taXNjLmpzXG5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrTWF4aW11bUJsYXNlYmFsbCA9IGZ1bmN0aW9uIGNoZWNrTWF4aW11bUJsYXNlYmFsbChhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBiYWxscywgYmFzZXMsIG91dHMsIHN0cmlrZXM7XG5cbiAgaWYgKGV2ZW50RGF0YS50b3BPZklubmluZykge1xuICAgIC8vIGF3YXkgaXMgYmF0dGluZ1xuICAgIGJhbGxzID0gZXZlbnREYXRhLmF3YXlCYWxscztcbiAgICBiYXNlcyA9IGV2ZW50RGF0YS5hd2F5QmFzZXM7XG4gICAgb3V0cyA9IGV2ZW50RGF0YS5hd2F5T3V0cztcbiAgICBzdHJpa2VzID0gZXZlbnREYXRhLmF3YXlTdHJpa2VzO1xuICB9IGVsc2Uge1xuICAgIC8vIGhvbWUgaXMgYmF0dGluZ1xuICAgIGJhbGxzID0gZXZlbnREYXRhLmhvbWVCYWxscztcbiAgICBiYXNlcyA9IGV2ZW50RGF0YS5ob21lQmFzZXM7XG4gICAgb3V0cyA9IGV2ZW50RGF0YS5ob21lT3V0cztcbiAgICBzdHJpa2VzID0gZXZlbnREYXRhLmhvbWVTdHJpa2VzO1xuICB9XG5cbiAgaWYgKGV2ZW50RGF0YS5oYWxmSW5uaW5nT3V0cyA9PT0gb3V0cyAtIDEgJiYgZXZlbnREYXRhLmF0QmF0QmFsbHMgPT09IGJhbGxzIC0gMSAmJiBldmVudERhdGEuYXRCYXRTdHJpa2VzID09PSBzdHJpa2VzIC0gMSAmJiBldmVudERhdGEuYmFzZXJ1bm5lckNvdW50ID09PSBiYXNlcyAtIDEpIHtcbiAgICBhbmFseXNpcy5tYXhpbXVtQmxhc2ViYWxsID0gdHJ1ZTtcbiAgfVxufTtcblxudmFyIGNoZWNrU2NvcmVVcGRhdGUgPSBmdW5jdGlvbiBjaGVja1Njb3JlVXBkYXRlKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkc2NvcmVVcGRhdDtcblxuICB2YXIgc2NvcmVVcGRhdGUgPSBldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRzY29yZVVwZGF0ID0gZXZlbnREYXRhLnNjb3JlVXBkYXRlKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJHNjb3JlVXBkYXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkc2NvcmVVcGRhdC50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChzY29yZVVwZGF0ZSkge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcihzY29yZVVwZGF0ZSwgbnVsbCwgLyBydW5zPyBzY29yZS8pO1xuICAgIGFuYWx5c2lzLnVucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCAvIHVucnVucz8gc2NvcmUvKTtcbiAgfVxufTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIGNoZWNrU2NvcmVVcGRhdGUoYW5hbHlzaXMsIGV2ZW50RGF0YSk7XG4gIGNoZWNrTWF4aW11bUJsYXNlYmFsbChhbmFseXNpcywgZXZlbnREYXRhKTsgLy8gY2hlY2sgZm9yIHdoZXRoZXIgYSBiYXR0ZXIganVzdCBzaG93ZWQgdXAgdG8gYmF0XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdiYXR0aW5nIGZvcicpID49IDApIHtcbiAgICBhbmFseXNpcy5iYXR0ZXJVcCA9IHRydWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnYW1lU3RhdHVzID0gcmVxdWlyZSgnLi9nYW1lLXN0YXR1cycpO1xuXG52YXIgb3V0cyA9IHJlcXVpcmUoJy4vb3V0cycpO1xuXG52YXIgaGl0cyA9IHJlcXVpcmUoJy4vaGl0cycpO1xuXG52YXIgc3RlYWxzID0gcmVxdWlyZSgnLi9zdGVhbHMnKTtcblxudmFyIHdhbGtzID0gcmVxdWlyZSgnLi93YWxrcycpO1xuXG52YXIgc3BlY2lhbCA9IHJlcXVpcmUoJy4vc3BlY2lhbCcpO1xuXG52YXIgbWlzYyA9IHJlcXVpcmUoJy4vbWlzYycpO1xuXG52YXIgYmFzZVJ1bm5lcnMgPSByZXF1aXJlKCcuL2Jhc2UtcnVubmVycycpO1xuLypcbiAqIHNldHMgYWxsIGtub3duIChha2EgaW1wbGVtZW50ZWQpIGFuYWx5c2lzIHJlc3VsdHMgdG8gdGhlaXIgZGVmYXVsc1xuICogcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9wczpcbiAqXG4gKiBpZDogc3RyaW5nIHx8IHVuZGVmaW5lZFxuICogICAtIHRoZSBnYW1lIGV2ZW50IElEXG4gKlxuICogcnVuc1Njb3JlZDogbnVtYmVyXG4gKiAgIC0gaG93IG1hbnkgcnVucyB3ZXJlIHNjb3JlZCBvbiB0aGUgcGxheVxuICpcbiAqIHVucnVuc1Njb3JlZDogbnVtYmVyXG4gKiAgIC0gaG93IG1hbnkgdW5ydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5XG4gKlxuICogYmF0dGVyVXA6IGJvb2xlYW5cbiAqICAgLSB3aGV0aGVyIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIHRvIGJhdFxuICpcbiAqIGdhbWVTdGF0dXM6IG51bGwgfHwgc3RyaW5nXG4gKiAgIC0gd2lsbCBiZSBudWxsIG9yIG9uZSBvZjpcbiAqICAgLSBiZWZvcmVGaXJzdFBpdGNoLCB3aGVuIHRoZSBmaXJzdCBwaXRjaCBoYXNuJ3QgYmVlbiB0aHJvd24geWV0XG4gKiAgIC0gZmlyc3RIYWxmSW5uaW5nU3RhcnQsIHdoZW4gdGhlIGZpcnN0IGhhbGYgb2YgYW4gaW5uaW5nIGlzIHN0YXJ0aW5nXG4gKiAgIC0gc2Vjb25kSGFsZklubmluZ1N0YXJ0LCB3aGVuIHRoZSBzZWNvbmQgaGFsZiBvZiBhbiBpbm5pbmcgaXMgc3RhcnRpbmdcbiAqICAgLSBoYWxmSW5uaW5nRW5kLCB3aGVuIGFueSBoYWxmIG9mIGFuIGlubmluZyBpcyBlbmRpbmcgb24gdGhlIHBsYXlcbiAqICAgLSBnYW1lRW5kLCB3aGVuIHRoZSBnYW1lIGhhcyBlbmRlZFxuICogICAtIGlubmluZ1Jld2luZCwgd2hlbiB0aGUgc2FsbW9uIHN3aW0gdXBzdHJlYW1cbiAqXG4gKiBvdXQ6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYW4gb3V0IG9uIHRoZSBwbGF5XG4gKiBvdXRNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIGZseVxuICogICAgIC0gZ3JvdW5kXG4gKiAgICAgLSBzdHJpa2VcbiAqICAgICAtIGNhdWdodFN0ZWFsaW5nXG4gKiAgICAgLSB1bnNwZWNpZmllZCAoYXMgeW91IHNvbWV0aW1lcyBzZWUgd2l0aCBzYWNyaWZpY2Ugb3V0cylcbiAqICAgLSBzYWNyaWZpY2U6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiB0aGUgb3V0IHdhcyBhIHNhY3JpZmljZVxuICogICAtIHNhY3JpZmljZU1ldGE6IG9iamVjdCwgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzOlxuICogICAgIC0ga2luZDogc3RyaW5nIHx8IG51bGxcbiAqICAgICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgICAtIGFkdmFuY2VcbiAqICAgICAgIC0gc2NvcmVcbiAqICAgLSBmcmVlUmVmaWxsOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gYmF0dGVyIHVzZWQgdGhlaXIgZnJlZSByZWZpbGwgb24gdGhlIHBsYXlcbiAqXG4gKiBoaXQ6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYSBoaXQgb24gdGhlIHBsYXlcbiAqIGhpdE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0ga2luZDogbnVsbCB8fCBzdHJpbmdcbiAqICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgIC0gc2luZ2xlXG4gKiAgICAgLSBkb3VibGVcbiAqICAgICAtIHRyaXBsZVxuICogICAgIC0gaG9tZVJ1blxuICogICAgIC0gZ3JhbmRTbGFtXG4gKiAgIC0gYmlnQnVja2V0OiBib29sZWFuXG4gKiAgICAgLSB3aGV0aGVyIGEgQmlnIEJ1Y2tldCB3YXMgYWN0aXZhdGVkIG9uIHRoZSBwbGF5XG4gKlxuICogc3RlYWw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYW4gYXR0ZW1wdGVkIHN0ZWFsIG9uIHRoZSBwbGF5XG4gKiBzdGVhbE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0gc3VjY2VzczogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoaWVmIG5vdCBjYXVnaHQsIGZhbHNlIG90aGVyd2lzZVxuICogICAtIGJhc2VTdG9sZW46IG51bGwgfHwgbnVtYmVyXG4gKiAgICAgLSB0aGUgYmFzZSB3aGljaCB3YXMgc3RvbGVuICgwLWluZGV4ZWQpXG4gKlxuICogd2FsazogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhIHdhbGsgb24gdGhlIHBsYXlcbiAqIHdhbGtNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIG1pbmRUcmljazogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoZSBwaXRjaGVzIHVzZWQgYSBtaW5kIHRyaWNrIHRvIHR1cm4gdGhlIHdhbGsgaW50byBhXG4gKiAgICAgICBzdHJpa2VvdXRcbiAqXG4gKiBzcGVjaWFsOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIHdhcyBhIHNwZWNpYWwgZXZlbnQgb24gdGhlIHBsYXlcbiAqIHNwZWNpYWxNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIGJsb29kcmFpblxuICogICAgIC0gaXNQYXJ0eWluZ1xuICogICAgIC0gcmV2ZXJiXG4gKiAgICAgLSBiaXJkc0NpcmNsZVxuICogICAgIC0gYmlyZHNQZWNrZWRcbiAqICAgICAtIGp1c3RCaXJkc1xuICogICAgIC0gYWxsZXJnaWNSZWFjdGlvblxuICogICAgIC0gaW5jaW5lcmF0ZWRcbiAqICAgICAtIGJlY2FtZU1hZ21hdGljXG4gKiAgICAgLSBmZWVkYmFja1xuICogICAgIC0gZWxlY3RyaWNpdHlcbiAqICAgICAtIHVuc3RhYmxlXG4gKiAgICAgLSBmbGlja2VyaW5nXG4gKiAgICAgLSBjb25zdW1lcnNBdHRhY2tcbiAqICAgICAtIHNhbG1vblxuICogICAtIGRldGFpbHM6IG9iamVjdCwgd2l0aCBwcm9wcyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgZXZlbnRcbiAqXG4gKiBiYXNlUnVubmVyczogb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wcywgcmVwcmVzZW50aW5nIGJhc2VzXG4gKiAgIC0gZmlyc3RcbiAqICAgLSBzZWNvbmRcbiAqICAgLSB0aGlyZFxuICogICAtIGZvdXJ0aFxuICogICAtIGlmIHRoZXJlIGlzIGEgYmFzZXJ1bm5lciBvbiB0aGUgZ2l2ZW4gYmFzZSwgdGhlIHZhbHVlIGZvciB0aGF0IGJhc2VcbiAqICAgICB3aWxsIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gKiAgICAgLSBwbGF5ZXJOYW1lXG4gKiAgICAgLSBwbGF5ZXJJZFxuICpcbiAqIG1heGltdW1CbGFzZWJhbGw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gd2UncmUgYXQgTUFYSU1VTSBCTEFTRUJBTExcbiAqL1xuXG5cbnZhciBpbml0QW5hbHlzaXMgPSBmdW5jdGlvbiBpbml0QW5hbHlzaXMoZXZlbnREYXRhKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGV2ZW50RGF0YS5pZCB8fCBldmVudERhdGEuX2lkLFxuICAgIGdhbWVTdGF0dXM6IG51bGwsXG4gICAgcnVuc1Njb3JlZDogMCxcbiAgICB1bnJ1bnNTY29yZWQ6IDAsXG4gICAgYmF0dGVyVXA6IGZhbHNlLFxuICAgIG91dDogZmFsc2UsXG4gICAgb3V0TWV0YToge1xuICAgICAga2luZDogbnVsbCxcbiAgICAgIHNhY3JpZmljZTogZmFsc2UsXG4gICAgICBzYWNyaWZpY2VNZXRhOiB7XG4gICAgICAgIGtpbmQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBmcmVlUmVmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAgaGl0OiBmYWxzZSxcbiAgICBoaXRNZXRhOiB7XG4gICAgICBraW5kOiBudWxsLFxuICAgICAgYmlnQnVja2V0OiBmYWxzZVxuICAgIH0sXG4gICAgc3RlYWw6IGZhbHNlLFxuICAgIHN0ZWFsTWV0YToge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGJhc2VTdG9sZW46IG51bGxcbiAgICB9LFxuICAgIHdhbGs6IGZhbHNlLFxuICAgIHdhbGtNZXRhOiB7XG4gICAgICBtaW5kVHJpY2s6IGZhbHNlXG4gICAgfSxcbiAgICBzcGVjaWFsOiBmYWxzZSxcbiAgICBzcGVjaWFsTWV0YToge1xuICAgICAga2luZDogbnVsbFxuICAgIH0sXG4gICAgYmFzZVJ1bm5lcnM6IHtcbiAgICAgIGZpcnN0OiB7fSxcbiAgICAgIHNlY29uZDoge30sXG4gICAgICB0aGlyZDoge30sXG4gICAgICBmb3VydGg6IHt9XG4gICAgfSxcbiAgICBtYXhpbXVtQmxhc2ViYWxsOiBmYWxzZVxuICB9O1xufTtcblxudmFyIGFuYWx5emVHYW1lRXZlbnQgPSBmdW5jdGlvbiBhbmFseXplR2FtZUV2ZW50KGV2ZW50RGF0YSkge1xuICBpZiAoIWV2ZW50RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGFuYWx5c2lzID0gaW5pdEFuYWx5c2lzKGV2ZW50RGF0YSk7XG4gIHZhciBjaGVja2VycyA9IFtnYW1lU3RhdHVzLCBvdXRzLCBoaXRzLCB3YWxrcywgc3RlYWxzLCBzcGVjaWFsLCBtaXNjLCBiYXNlUnVubmVyc107XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfY2hlY2tlcnMgPSBjaGVja2VyczsgX2kgPCBfY2hlY2tlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGNoZWNrZXIgPSBfY2hlY2tlcnNbX2ldO1xuICAgIGNoZWNrZXIuY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSk7XG4gIH1cblxuICByZXR1cm4gYW5hbHlzaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYW5hbHl6ZUdhbWVFdmVudDogYW5hbHl6ZUdhbWVFdmVudFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdmbHlvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2ZseSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dyb3VuZCBvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2dyb3VuZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3N0cmlrZXMgb3V0JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdzdHJpa2UnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdmaWVsZGVyXFwncyBjaG9pY2UnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2ZpZWxkZXJzQ2hvaWNlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYSBkb3VibGUgcGxheScpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZG91YmxlUGxheSc7XG4gIH1cblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3NhY3JpZmljZScpID49IDApIHtcbiAgICAvLyB0aGlzIG1heSBhbHJlYWR5IGJlIGEgZ3JvdW5kL2ZseW91dCwgb3IgaXRzIHVuc3BlY2lmaWVkXG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gYW5hbHlzaXMub3V0TWV0YS5raW5kIHx8ICd1bnNwZWNpZmllZCc7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2UgPSB0cnVlOyAvLyBjaGVjayBpZiBzb21lb25lIHNjb3JlZCBvciBhZHZhbmNlZCBvbiB0aGUgc2FjcmlmaWNlXG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3Njb3JlcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuc2FjcmlmaWNlTWV0YS5raW5kID0gJ3Njb3JlJztcblxuICAgICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgYXJlIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG5cbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdhZHZhbmNlJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2VNZXRhLmtpbmQgPSAnYWR2YW5jZSc7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFuYWx5c2lzLm91dE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG5cbiAgICBpZiAoKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5oYWxmSW5uaW5nT3V0cykgPT09IDApIHtcbiAgICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnaGFsZklubmluZ0VuZCc7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdmcmVlIHJlZmlsbCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuZnJlZVJlZmlsbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCd1c2VzIGEgbWluZCB0cmljaycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEubWluZFRyaWNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2Jsb29kZHJhaW4nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdibG9vZGRyYWluJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgcGFydHlpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdpc1BhcnR5aW5nJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncmV2ZXJiJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAncmV2ZXJiJztcbiAgfSBlbHNlIGlmICggLy8gdGhpcyBjaGVjayBoYXMgdG8gY29tZSBiZWZvcmUgYmlyZHMgY2lyY2xlLCBiZWNhdXNlIHRoZSB0ZXh0XG4gIC8vICd0aGUgYmlyZHMgY2lyY2xlJyBpcyBwcmVzZW50IGluIGJvdGggY2FzZXNcbiAgdXBkYXRlLmluZGV4T2YoJ3RoZSBiaXJkcyBwZWNrZWQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiaXJkc1BlY2tlZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RoZSBiaXJkcyBjaXJjbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiaXJkc0NpcmNsZSc7XG4gIH0gZWxzZSBpZiAoIC8vIHRoaXMgaXMgdG8gY2FwdHVyZSBhbnkgb3RoZXIgbm9uLXBlY2tpbmcgJiBub24tY2lyY2xpbmcgYmlyZGluZXNzXG4gIHVwZGF0ZS5pbmRleE9mKCdiaXJkcycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2p1c3RCaXJkcyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hhZCBhbiBhbGxlcmdpYyByZWFjdGlvbicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2FsbGVyZ2ljUmVhY3Rpb24nO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdyb2d1ZSB1bXBpcmUgaW5jaW5lcmF0ZWQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdpbmNpbmVyYXRlZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2JlY2FtZSBtYWdtYXRpYycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JlY2FtZU1hZ21hdGljJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZmVlZGJhY2snKSA+PSAwICYmICh1cGRhdGUuaW5kZXhPZigncmVhbGl0eSBmbGlja2VycycpID49IDAgfHwgdXBkYXRlLmluZGV4T2YoJ3N3aXRjaGVkIHRlYW1zJykgPj0gMCkpIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2ZlZWRiYWNrJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGVsZWN0cmljaXR5IHphcHMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdlbGVjdHJpY2l0eSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2lzIG5vdyB1bnN0YWJsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3Vuc3RhYmxlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgbm93IGZsaWNrZXJpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdmbGlja2VyaW5nJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignY29uc3VtZXJzIGF0dGFjaycpID49IDApIHtcbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2RlZmVuZHMnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2NvbnN1bWVyc0F0dGFja0RlZmVuZGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdjb25zdW1lcnNBdHRhY2snO1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc2FsbW9uIHN3aW0gdXBzdHJlYW0nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdzYWxtb24nO1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnaW5uaW5nUmV3aW5kJzsgLy8gZmlyc3QsIGdyYWIgYWxsIHRoZSBzZW50ZW5jZXMgd2l0aCB3aGljaCB0ZWFtIGxvc3QgaG93IG1hbnkgcnVuc1xuXG4gICAgdmFyIHRlYW1zID0gdXBkYXRlLm1hdGNoKC8oXFxkKyhcXC5cXGQrKT8pIG9mIHRoZSAuKidzIHJ1bnMgYXJlIGxvc3QvZyk7XG5cbiAgICBpZiAodGVhbXMpIHtcbiAgICAgIHZhciBydW5zU3RvbGVuID0gdGVhbXMubWFwKGZ1bmN0aW9uICh0ZWFtKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmdldE51bWJlcih0ZWFtLCBudWxsLCBudWxsKSB8fCAwO1xuICAgICAgfSk7XG4gICAgICB2YXIgcnVuc1N0b2xlbkZyb20gPSB0ZWFtcy5tYXAoZnVuY3Rpb24gKHRlYW0pIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHRlYW0sIC9vZiB0aGUgLywgLydzIHJ1bnMvKTtcbiAgICAgIH0pO1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgICAgcnVuc1N0b2xlbjogcnVuc1N0b2xlbixcbiAgICAgICAgcnVuc1N0b2xlbkZyb206IHJ1bnNTdG9sZW5Gcm9tXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncnVucyBhcmUgb3ZlcmZsb3dpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdydW5zT3ZlcmZsb3dpbmcnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zR2FpbmVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8gdW5ydW5zLyksXG4gICAgICBydW5zT3ZlcmZsb3dpbmdGb3I6IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL1xcbi8sIC8gZ2Fpbi8pXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc29sYXIgcGFuZWxzIGFic29yYicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3J1bnNDb2xsZWN0ZWQnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zQ29sbGVjdGVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8gcnVucyBhcmUgY29sbGVjdGVkLyksXG4gICAgICBydW5zQ29sbGVjdGVkRnJvbTogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc2F2ZWQgZm9yIHRoZSAvLCAvJ3MgbmV4dCBnYW1lLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdW4gMiBzbWlsZXMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdzdW4yJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvISBzdW4gMiBzbWlsZXMvKSxcbiAgICAgIHdpblNldFVwb246IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL3NldCBhIHdpbiB1cG9uIHRoZSAvLCAvXFwuLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdibGFjayBob2xlIHN3YWxsb3dzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmxhY2tIb2xlJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvY29sbGVjdCAvLCAvIS8pLFxuICAgICAgd2luU3dhbGxvd2VkRnJvbTogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc3dhbGxvd3MgdGhlIHJ1bnMgYW5kIGEgLywgLyB3aW4uLylcbiAgICB9OyAvLyBzZWUgaWYgY2FyY2luaXphdGlvbiB0cmlnZ2VyZWQgYnkgdGhlIGJsYWNrIGhvbGVcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGJhbHRpbW9yZSBjcmFicyBzdGVhbCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMucGxheWVyU3RvbGVuID0gdXRpbC5nZXRQbGF5ZXIodXBkYXRlLCAvY3JhYnMgc3RlYWwgLywgLyBmb3IgdGhlIHJlbWFpbmRlci8pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JpbmQgcmFpbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2dyaW5kUmFpbCc7XG4gICAgdmFyIHRyaWNrcyA9IHV0aWwuZ2V0U2thdGVUcmlja3ModXBkYXRlKTtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBwbGF5ZXI6IHV0aWwuZ2V0UGxheWVyKHVwZGF0ZSwgL14vLCAvIGhvcHMgb24vKVxuICAgIH0sIHRyaWNrcyk7XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3NhZmUhJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyksIHt9LCB7XG4gICAgICAgIGdyaW5kU3VjY2VzczogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG91dCFcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMpLCB7fSwge1xuICAgICAgICBncmluZFN1Y2Nlc3M6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAncmFpbEJhaWwnO1xuICAgIH1cbiAgfSAvLyBpZiB3ZSBmb3VuZCBzb21ldGhpbmcsIHRoZW46XG5cblxuICBpZiAoYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWwgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdGVhbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zdGVhbCA9IHRydWU7XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2NhdWdodCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2NhdWdodFN0ZWFsaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gLy8gYmFzZVN0b2xlbiBpcyAwLWluZGV4ZWRcblxuXG4gICAgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipmaXJzdC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAwO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKnNlY29uZC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAxO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKnRoaXJkLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDI7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qZm91cnRoLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDM7IC8vIHRoaXMgbWF5IGhhdmUgYmVlbiBhIHJ1biBpZiB0aGVyZSBhcmUgNCBiYXNlcyBpbiBwbGF5XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhdHRlcikgIT09IG51bGwgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5QmFzZXMpID09PSA0KSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSBlbHNlIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheUJhdHRlcikgIT09IG51bGwgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmFzZXMpID09PSA0KSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qaG9tZS8pICE9PSAtMSkge1xuICAgICAgLy8gc2VlIGlmIGhvbWUgb3IgYXdheSBzdG9sZSB0aGUgYmFzZVxuICAgICAgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhdHRlcikgIT09IG51bGwpIHtcbiAgICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlCYXNlcykgLSAxIHx8IDM7XG4gICAgICB9IGVsc2UgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdhQmF0dGVyKSAhPT0gbnVsbCkge1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhc2VzKSAtIDEgfHwgMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG9sZGVyIGdhbWVzIGRvbid0IGhhdmUgdGhlc2UgZmllbGRzLCBvciBtYXkgaGF2ZSBib3RoXG4gICAgICAgIC8vIGhvbWUgYW5kIGF3YXkgYmF0dGVycyBmaWxsZWQgaW47IGp1c3QgYXNzdW1lZCBob21lIGJhc2VcbiAgICAgICAgLy8gaXMgYmFzZSAjMyBpbiB0aG9zZSBjYXNlcywgaSBndWVzc1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDM7XG4gICAgICB9XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpKSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSAvLyBjaGVjayBmb3IgYmxhc2VydW5uaW5nIHNjb3JlcyBwcmUgcy0xMiAob3RoZXJ3aXNlIGNhcHR1cmVkIGluXG4gICAgLy8gc3JjL21pc2MuanMpXG5cblxuICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIHVwZGF0ZS5pbmRleE9mKCdibGFzZXJ1bm5pbmcnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvc2NvcmVzIC8sIC8gd2l0aCBibGFzZXJ1bm5pbmcvKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZXRVcGRhdGVUZXh0ID0gZnVuY3Rpb24gZ2V0VXBkYXRlVGV4dChldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkbGFzdFVwZGF0ZTtcblxuICByZXR1cm4gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGxhc3RVcGRhdGUgPSBldmVudERhdGEubGFzdFVwZGF0ZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRsYXN0VXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGxhc3RVcGRhdGUudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgbnVtYmVyIChzdXBwb3J0cyBwb3NpdGl2ZSBpbnRlZ2VycyAmIGZsb2F0cyksXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIG51bWJlcnNcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCBmb3IgbnVtYmVyc1xuICogd2lsbCByZXR1cm4gYSBudW1iZXIgb3IgbnVsbFxuICovXG5cblxudmFyIGdldE51bWJlciA9IGZ1bmN0aW9uIGdldE51bWJlcihzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIG51bSA9IG51bGw7XG4gIHZhciBudW1SZWdleCA9IC8oKFxcZCspPyhcXC5cXGQrKT8pLztcblxuICBpZiAoIXByZSkge1xuICAgIHByZSA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcG9zdCA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwcmUuc291cmNlICsgbnVtUmVnZXguc291cmNlICsgcG9zdC5zb3VyY2UpO1xuICB2YXIgbWF0Y2hlcyA9IHJlZ2V4W1N5bWJvbC5tYXRjaF0ocyk7XG5cbiAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkge1xuICAgIG51bSA9IE51bWJlcihtYXRjaGVzWzFdKSB8fCBudW07XG4gIH1cblxuICByZXR1cm4gbnVtO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIG1hdGNoIGJldHdlZW4gcHJlIGFuZCBwb3N0XG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgbWF0Y2hcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSBtYXRjaFxuICogd2lsbCByZXR1cm4gdGhlIG1hdGNoLCBvciBhbiBlbXB0eSBzdHJpbmdcbiAqL1xuXG5cbnZhciBnZXRNYXRjaCA9IGZ1bmN0aW9uIGdldE1hdGNoKHMsIHByZSwgcG9zdCkge1xuICB2YXIgbWF0Y2hSZWdleCA9IC8oLiopLztcblxuICBpZiAoIXByZSkge1xuICAgIHByZSA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcG9zdCA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwcmUuc291cmNlICsgbWF0Y2hSZWdleC5zb3VyY2UgKyBwb3N0LnNvdXJjZSk7XG4gIHZhciBtYXRjaGVzID0gcmVnZXhbU3ltYm9sLm1hdGNoXShzKTtcblxuICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNbMV07XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgdGVhbSBuYW1lXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIHRoZSB0ZWFtIG5hbWVcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCB0aGUgdGVhbSBuYW1lXG4gKiB3aWxsIHJldHVybiAnaG9tZScgJ2F3YXknIG9yICcnXG4gKi9cblxuXG52YXIgZ2V0VGVhbSA9IGZ1bmN0aW9uIGdldFRlYW0oZXZlbnREYXRhLCBzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIHRlYW0gPSBnZXRNYXRjaChzLCBwcmUsIHBvc3QpO1xuXG4gIGlmICh0ZWFtKSB7XG4gICAgdGVhbSA9IGV2ZW50RGF0YS5ob21lVGVhbU5pY2tuYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRlYW0gPyAnaG9tZScgOiAnYXdheSc7XG4gIH1cblxuICByZXR1cm4gdGVhbTtcbn07XG5cbnZhciB0aXRsZUNhc2UgPSBmdW5jdGlvbiB0aXRsZUNhc2Uocykge1xuICBpZiAoIXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICA7XG4gIHJldHVybiBzLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgaWYgKHdvcmQpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh3b3JkWzBdLnRvVXBwZXJDYXNlKCkpLmNvbmNhdCh3b3JkLnNsaWNlKDEpKTtcbiAgICB9XG4gIH0pLmpvaW4oJyAnKTtcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSBwbGF5ZXIgbmFtZVxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIHJlZ2V4IGZvciB0aGUgdGVhbSBuYW1lXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgcmVnZXggdGhlIHRlYW0gbmFtZVxuICogd2lsbCByZXR1cm4gdGhlIHBsYXllciBuYW1lIG9yICcnXG4gKi9cblxuXG52YXIgZ2V0UGxheWVyID0gZnVuY3Rpb24gZ2V0UGxheWVyKHMsIHByZSwgcG9zdCkge1xuICB2YXIgcGxheWVyID0gZ2V0TWF0Y2gocywgcHJlLCBwb3N0KTtcbiAgcmV0dXJuIHRpdGxlQ2FzZShwbGF5ZXIpO1xufTtcblxudmFyIGdldFNrYXRlVHJpY2tzID0gZnVuY3Rpb24gZ2V0U2thdGVUcmlja3ModXBkYXRlKSB7XG4gIHZhciBncmluZFRyaWNrLCBncmluZFNjb3JlLCBsYW5kVHJpY2ssIGxhbmRTY29yZTtcbiAgdmFyIHRyaWNrcyA9IHVwZGF0ZS5tYXRjaCgvIGEgKC4qKSBcXCgoXFxkKykvZyk7IC8vIGdyaW5kIHRyaWNrXG5cbiAgaWYgKHRyaWNrc1swXSkge1xuICAgIGdyaW5kVHJpY2sgPSB0aXRsZUNhc2UoZ2V0TWF0Y2godHJpY2tzWzBdLCAvYSAvLCAvIFxcKC8pKTtcbiAgICBncmluZFNjb3JlID0gZ2V0TnVtYmVyKHRyaWNrc1swXSwgL1xcKC8sIC8kLyk7XG4gIH0gLy8gbGFuZCB0cmlja1xuXG5cbiAgaWYgKHRyaWNrc1sxXSkge1xuICAgIGxhbmRUcmljayA9IHRpdGxlQ2FzZShnZXRNYXRjaCh0cmlja3NbMV0sIC9hIC8sIC8gXFwoLykpO1xuICAgIGxhbmRTY29yZSA9IGdldE51bWJlcih0cmlja3NbMV0sIC9cXCgvLCAvJC8pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBncmluZFRyaWNrOiBncmluZFRyaWNrLFxuICAgIGdyaW5kU2NvcmU6IGdyaW5kU2NvcmUsXG4gICAgbGFuZFRyaWNrOiBsYW5kVHJpY2ssXG4gICAgbGFuZFNjb3JlOiBsYW5kU2NvcmVcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRVcGRhdGVUZXh0OiBnZXRVcGRhdGVUZXh0LFxuICBnZXROdW1iZXI6IGdldE51bWJlcixcbiAgZ2V0VGVhbTogZ2V0VGVhbSxcbiAgZ2V0UGxheWVyOiBnZXRQbGF5ZXIsXG4gIGdldFNrYXRlVHJpY2tzOiBnZXRTa2F0ZVRyaWNrc1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdkcmF3cyBhIHdhbGsnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMud2FsayA9IHRydWU7IC8vIGNoZWNrIGlmIGFueSBydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5IHByaW9yIHRvIHMxMlxuXG4gICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgdXBkYXRlLmluZGV4T2YoJ3Njb3JlcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuICAgIC8vIGNoZWNrIGZvciBtaW5kIHRyaWNrIHNoZW5hbmlnYW5zXG5cblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndXNlcyBhIG1pbmQgdHJpY2snKSkge1xuICAgICAgYW5hbHlzaXMud2Fsa01ldGEubWluZFRyaWNrID0gdHJ1ZTtcblxuICAgICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdHJpa2VzIG91dCcpKSB7XG4gICAgICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG4gICAgICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdzdHJpa2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJjb25zdCBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMjBlZDYzMC04YmFlLTQ0NDEtOTVjYy0wZTRlY2MyNzI1M2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbW9uIEhhbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDNmOTIwY2MtNDExZi00NGVmLWFlNjYtOThhNDRlODgzMjkxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3JuZWxpdXMgR2FtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwODEzZDQzYy1iOTM4LTQ5ZGEtYWNlZi02NWI3M2YyN2IwOTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjcmF0Y2ggRGVsZXV6ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzY2Y1NTIxLTE0MGYtNGFkOS1hOTk4LWFjOGFmMjJiOWJjOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnV0Y2ggV3lldGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNmFmZjcwOS1lODU1LTQ3YzgtODgxOC1iOWJhNjZlOTBmZThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk11bGxlbiBQZXRlcnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE3Mzk3MjU2LWMyOGMtNGNhZC04NWYyLWEyMTc2OGM2NmU2N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29yeSBSb3NzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTkyNDFhYTQtMzhlMy00NWVkLTk3NTAtNjhmNDQwMWY4MGUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBeWFubmEgRHVtcGluZ3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFhOTNhMmQyLWI1YjYtNDc5Yi1hNTk1LTcwM2U0YTJmMzg4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVkcm8gRGF2aWRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjBmZDcxZTctNGZhMC00MTMyLTlmNDctMDZhMzE0ZWQ1MzlhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYXJzIFRheWxvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0M2U5YzVjLTVhOGEtNGI0OC05Y2U2LWIxMGRkZDY3N2FlNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXJuZWUgQmx1ZXNreVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3MjA1NTllLTkxNzMtNDA0Mi1hYWEwLWQzODUyYjcyYWIyZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGlyb3RvIFdpbGNveFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJlODZkZTExLWEyZGQtNGIyOC1iNWZlLWY0ZDBjMzhjZDIwYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmlvbiBBbGljaWFrZXllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMwMjE4Njg0LTdmYTEtNDFhNS1hM2IzLTVkOWNkOTdkZDM2YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9yZGFuIEhpbGRlYmVydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM2Nzg2ZjQ0LTkwNjYtNDAyOC05OGQ5LTRmYTg0NDY1YWI5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVhc2xleSBHbG9vbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkNTJhY2U2LWEwYTAtNDY3ZS04MGUwLWFlODZiMjg5YWQzMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRlbGluZSBIYW1tZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NjcyMWEwNy03Y2QyLTQ4MzktOTgyZS03MDQ2ZGY2ZThiNjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXcgQnJpZ2dzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDg5Y2MxY2UtODJkZi00ZmFkLTg2N2QtZGU3ZDk4MjJmZWRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaWdieSBQZWFjZWxpbHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0Yzg2YTUwMC1kNTM4LTRiODMtYjMyMS1kNzYyNTMzZDc2NjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsbGFuIEtyYW5jaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRmZmQyZTUwLWJiNWItNDVkMC1iN2M0LWUyNGQ0MWIyZmY1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NobmVpZGVyIEJlbmRpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxYzU0NzNhLTc1NDUtNGE5YS05MjBkLWQ5YjcxOGQwZThkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFjb2IgSGF5bmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTU3NmEyY2ItM2RlYi00YTM1LWExZWYtOWUzY2MyMDM5NTYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQaGluZWFzIFdvcm10aHJpY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1OGM5ZTI5NC1iZDQ5LTQ1N2MtODgzZi1mYjMxNjJmYzY2OGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpY2hpcm8gR3VlcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWJjZmIzZmYtNTc4Ni00YzZjLTk2NGMtNWMzMjVmY2M0OGQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXVsYSBUdXJuaXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YzZjY2U2My05OWIzLTQ0MWQtOTBlMC0wNjY0ZTY4MDU3YTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkV6ZWtpZWwgVGhyb2NrbW9ydG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjExZDE4ZTAtYjk3Mi00Y2RkLWFmYzItNzkzYzU2YmZlNWE5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbHN0b24gQ2VydmV6YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYzZGY4NzAxLTE4NzEtNDk4Ny04N2Q3LWI1NWQ0ZjFkZjJlOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNkb3dlbGwgTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NGM5MmY4ZC02MDI4LTQ5NWItYjgxZC0zMmM5NzVhZmIyZTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVuaWQgTWFybG93XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjhkZDlkNDctYjlhOC00ZmQzLWE4OWMtNWMxMTJlYjE5ODJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEdXJoYW0gU3BhY2VtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2OTJkODQzMC00MmFkLTRiODgtOGIzNi1hN2QyMGRhOWIwYTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhpcm90byBQb29sZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZjYzMyNDZmLTJkYTItNGM3Yy1hNDZmLTliNDVkY2JmMzg0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2Ftb3RoZXMgVGh3b21wc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzE4ZGVhMWEtZDlhOC00YzJiLTkzM2EtZjA2NjdiNTI1MGU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJnYXJpdG8gTmF2YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcyY2E4ZWQ1LWE4YzctNDU3MS05NzQ1LTgwZGU1YTQ5YjJkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2FqIFN0YXR0ZXIgSnIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzkzMmM3YzctYmFiYi00MjQ1LWI5ZjUtY2RhZGI5N2M5OWZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYW5keSBDYXN0aWxsb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdiNTVkNDg0LTZlYTktNDY3MC04MTQ1LTk4NmNiOWUzMjQxMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RldmVuc29uIEhlYXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3Y2Y4M2JkYy1mOTVmLTQ5ZDMtYjcxNi0wNmYyY2Y2MGE3OGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdHRlbyBUcml1bXBoYW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2U5YTUxNGEtNzg1MC00ZWQwLTkzYWItZjNhNmUyZjQxYzAzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb2xhbmVzdG9waGlhIFBhdHRlcnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgxN2RlZTk5LTljY2YtNGY0MS04NGUzLWRjOTc3MzIzN2JjOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG9sZGVuIFN0YW50b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MjhjNTA4MC00NTQzLTRiZjItOWQ4NC00MzZkNThjN2ZkNjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVuaWQgU2x1bXBzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODRhMmI1ZjYtNDk1NS00MDA3LTkyOTktM2QzNWFlNzEzNWQzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZW5uZWR5IExvc2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODY0YjNiZTgtZTgzNi00MjZlLWFlNTYtMjAzNDViNDFkMDNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHb29kd2luIE1vcmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODllYzc3ZDgtYzE4Ni00MDI3LWJkNDUtZjQwN2I0ODAwYzJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYW1lcyBNb3JhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGM4Y2M1ODQtMTk5Yi00Yjc2LWIyY2QtZWFhOWE3NDk2NWU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaXdhIE11ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MGMyY2VjNy0wZWQ1LTQyNmEtOWRlOC03NTRmMzRkNTliMzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRvdCBGb3hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MWY1Mjk4ZS1hMmVjLTRmNTQtYTU0MS0xODE4NzAyZDFiNmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pbnQgU2h1cGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MzExYjcyNy1kZTc0LTRmMjUtOTEyZC1lMDhhNzlmMDYxYjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZlbnJ5IEVnZ2J1cnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5N2FmOTdhNy0xOWRjLTRkMTgtOWY3Mi04YmQ4OWY3ZWVhYThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyaW5pdHkgU21haHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OGQyMzNkZS05YzNmLTQxMDAtYTM0My01Mjk3YjdmZGViOTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllvcmsgU2lsayBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk5NjVlZWQ1LTA4NmMtNDk3Ny05NDcwLWZlNDEwZjkyZDM1M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmF0ZXMgQmVudGxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlhMDMxYjlhLTE2ZjgtNDE2NS1hNDY4LTVkMGUyOGE4MTE1MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGlhbmEgV2hlZWxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlkZDQwZGM3LTAzM2YtNDAzOS05MGM4LTE4NDg1M2YzMDY0ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ltb24gUGVja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlmMjE4ZWQxLWQ3OTMtNDM3ZC1hMWI5LTc5Zjg4ZjY5MTU0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG90dXMgTWFuZ29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMWVkMzM5Ni0xMTRhLTQwYmMtOWZmMC01NGQ3ZTFhZDE3MThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdGVsIEJleW9uY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNWY4Y2U4My0wMmIyLTQ5OGMtOWU0OC01MzNhMWQ4MWFlYmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkV2ZWx0b24gTWNCbGFzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE4YTVjZjM2LWQxYTktNDdkMS04ZDIyLTRhNjY1OTMzYTdjY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVsZ2EgV2FzaGluZ3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFmMjMwM2I5LTlmOTUtNGQ0My1iMWQ1LWQ0NWViYTkyNzBhN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTml0emFuIEh1YmV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjA4MmNhNmUtZWIxMS00ZWFiLThkNmEtMzBmOGJlNTIyZWM0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaWNob2xhcyBNb3JhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjg4ZDMxM2YtZTU0Ni00MDdlLThiYzYtOTQwNDA0OTlkYWE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPbGl2ZXIgTG9vZmFoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjhhYjg2YzYtOTA1NC00ODMyLTliOTYtNTA4ZGJkNGViNjI0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFc21lIFJhbXNleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJiZjk1NDNmLWYxMDAtNDQ1YS1hNDY3LTgxZDdhYWIxMjIzNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmFycmVsbCBTZWFndWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmQyNGUxOGItODAwZC00ZjE1LTg3OGQtZTMzNGZiNDgwM2M0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZWxnYSBCdXJ0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZTE4ZDM2My03NTJkLTRlNGEtYjA2Yi0xYTdlNDY0MTQwMGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjb3JlcyBCYXNlcnVubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmYxMjI2NjAtZGY1Mi00ZmM0LTllNzAtZWUxODU0MjNmZjkzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYWx0b24gU3BvcnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmY2YTI0ZDEtNGU4OS00NzkwLWE0YmEtZWViMjg3MGNiZjZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYXQgTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDE3N2Y3Ni02N2ZjLTQzMTYtYjY1MC04OTQxNTlkZWRlNDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdWxhIE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzA5ZTY0YjYtODI0OC00MDdlLWIzYWYtMTkzMWI4ODBkYmVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZW5ueSBTcHJ1Y2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMWRkZGZjNS02YWQ2LTRiMzEtOWU1Mi05ODIzNmM1MzM4NzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllvcmsgU2lsayBJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNmExOTE1NC03NDM4LTRjNGYtYjc4Ni0yZGZhZjU5NTFmMGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbHZhaXJlIFJvYWRob3VzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNiZDE5ZTZmLTNkMDgtNDczNC1iMjNmLTU4NTMzMDAyODY2NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS25pZ2h0IFRyaXVtcGhhbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMmExZTczNC02MGQ5LTQ5ODktYjdkOS02ZWFjZGE3MDQ4NmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpYW5hIFRha2FoYXNoaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRiMzNhNTRjLTM5MzQtNDc4Zi1iYWQ0LWZjMzEzYWMyNTgwZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVyY2l2YWwgV2hlZWxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRlMjFjOTdlLWY1NzUtNDNiNy04YmU3LWVjYzVkOGM0ZWFmZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGl0Y2hpbmcgTWFjaGluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU2OWRiMzBkLTc0YWMtNDI2NS04ZGE2LTQ2N2IwZDI1Njk0YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGVydmluIEdvcmN6eWNhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWFhZWY0N2UtODJjYy00YzkwLWI3N2QtNzVjM2ZiMjc5ZTgzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZXJyaW5nIFdpbmZpZWxkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWZhZmU3NWUtMmYwMC00NDE4LTkxNGMtOWI2Njc1ZDM5MjY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGRvbiBDYXNobW9uZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNzBkZDU3Yi01NWM0LTRhNjItYTVlYS03Y2M0YmY5ZDhhYzFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpbGxtYW4gSGVuZGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjk5MzBjYjEtN2VkMi00YjlhLWJmNGYtN2UzNWYyNTg2ZDcxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGaW5uIEphbWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmE1YjU0ZDItYjQ4OC00N2NkLWE1MjktNTkyODMxZTQ4MTNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaW5hIExhcnNlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY2N2NiNDQ1LWMyODgtNGU2Mi1iNjAzLTI3MjkxYzFlNDc1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVhbnV0IEhvbGxvd2F5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTM5NDdmYmMtNTBlYy00NWE0LWJjYTQtNDlmZmViYjc3ZGJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU2hvcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOTBhMGYzMS1kNjg2LTRhYzQtYTdmMy1jZmM4N2I3MmMxNDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5lcmQgUGFjaGVjb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQwNWRmYWRmLWQ0MzUtNDMwNy04MmY2LThlYmEyMjg3ZTg3YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF4b24gQnVja2xleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg5Zjc0ODkxLTJlMjUtNGI1YS1iZDk5LWM5NWJhM2YzNmFhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFnb21pIE5hdmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMmM0MzY4ZC00NzhiLTQyYmUtYjZkMy1mYTJlOWIyMzBmODJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhZHkgTWF0c3V5YW1hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTNhMDUxNTctNjE3Mi00NDMxLTk0N2ItYTA1ODIxN2I0YWE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGVhcnMgVGF5bG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTk5MWNjYjMtN2VlZC00NmQ5LTlkN2MtNjlkZWM5YjU2ZDRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaXJhIExlbW1hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjM1NjFjNTQtMTFjMy00YjNkLTkxODItODUzODY0NzFiMmViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYWdvbWkgTWNkYW5pZWwgSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YmM3ZTVkNC0zOWJlLTRkNjQtYTI0Mi1hYmIzOWFjYTZmNDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdpYSBIb2xicm9va1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJmODVkNzMxLTgxZWQtNGEwNy05ZTAxLWU5M2YxNzg2YTM2NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVlcyBUYXN3ZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzI4MTBkY2EtODI1Yy00ZGJjLThiNjUtMDcwMjc5NGM0MjRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZHVhcmRvIFdvb2RtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZWNlZTdiZS05M2U0LTRmMDQtYjExNC02YjMzM2UwZTY0MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1dHRvbiBEcmVhbXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NzAzMTQxYy0yNWQ5LTQ2ZDAtYjY4MC0wY2Y5Y2ZiZjQ3NzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbmRvdmFsIENyb3NzaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjY0M2E1MjAtYWYzOC00MmUzLThmN2ItZjY2MGU1MmZhY2M5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGVsYWlkZSBKdWRvY2hvcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM2NzVmY2RmLTYxMTctNDlhNi1hYzMyLTk5YTg5YTNhODhhYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVmFsZW50aW5lIEdhbWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzY2ZGZkMWUtMTFjMy00MmI2LWExNjctOWIyZDU2OGI1ZGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW5kaWUgVHVybmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjY0NGQ3NjctYWIxNS00NTI4LWE0Y2UtYWUxZjhhYWRiNjVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXVsYSBSZWRkaWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2RjYTcxMzctYjg3Mi00NmY1LThlNTktOGM5Yzk5NmU5ZDIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbW1ldHQgVGFiYnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYThjNTJkNy00MTI0LTRhNjUtYTIwZC1kNTFhYmNiZTY1NDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW9kb3JlIEhvbGxvd2F5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTAzYTIzNWYtOWZhNi00MWI1LTg1MTQtOTQ3NWM5NDQyNzNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSZWVzZSBDbGFya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjczMjY1ZWUzLWJiMzUtNDBkMS1iNjk2LTFmMjQxYTZmNTk2NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFya2VyIE1lbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MWQ3ZDAyMi0xOWQ2LTQyN2QtYWFmYy0wMzFmY2I3OWIyOWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdHR5IEZveFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFlNGFjZWJkLWVkYjUtNGQyMC1iZjY5LWYyZDUxNTEzMTJmZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlb2RvcmUgQ2VydmFudGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjlkOTc5OTAtZGYwYi00YjhmLWFjODUtNjFjNDRhYjI5YTNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3JjYW4gU21haHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZWVhNGE0OC1jODRiLTQ1MzgtOTdlNy0zMzAzNjcxOTM0ZDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbGdhIE1vcmVub1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlZjFiYzM0LTY0ZWUtNGM3Yi04YmUyLTg4MzIyYjQwN2E1OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2VyYWxkaW5lIEZyb3N0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTQyYWY5MTUtNzljNS00MzFjLWEyNzEtZjcxODVlMzdjNmFlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPbGl2ZXIgTm90YXJvYm90XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTdhMTlhMjItZjJjZC00ZTU5LWFhODQtMTVjYjBhZjMwYmEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWZXNzYWxpdXMgU3VuZGFlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTY5MWYyYmEtOWI2OS00MWY4LTg5MmMtMWFjZDQyYzMzNmU0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZW5raW5zIEdvb2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiM2U1MTJkZi1jNDExLTQxMDAtOTU0NC0wY2VhZGRkYjI4Y2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZhbW91cyBPd2Vuc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM5ZTRhNDllLWUzNWEtNDAzNC1hNGM3LTI5Mzg5NmI0MGM1OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxleGFuZGVyIEhvcm5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDVjMjRjOTctZjNkMy00YjNkLThjMTMtMGRlYmI2MTM0NmM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBYXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGRkYjY0ODUtMDUyNy00NTIzLTliZWMtMzI0YTViNjZiZjM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWFucyBNY0JsYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTRlNGMxN2QtODEyOC00NzA0LTllMDQtZjI0NGQ0NTczYzRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXZXNsZXkgUG9vbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYjliZWRiNC05YzhiLTQ1MjAtYTA2Mi0yM2ZiYTBkNWYwNWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hZ29taSBNY2RhbmllbCBJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwYmIzNTYxNS02M2YyLTQ0OTItODBlYy1iNmIzMjJkYzU0NTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNleHRvbiBXaGVlcmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTk4ZmQ5YzgtY2I3NS00ODJkLTg3M2UtZTZiOTFkNDJhNDQ2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSZW4gSHVudGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjBlMTNiNTYtNTk5Yi00YTIyLWI3NTItODA1OWVmZmM4MWRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3UgUm9zZWhlYXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjZjZmNjZjItODUwZS00M2ViLWIwODUtZmY3M2FkMDc0OWI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWFzbGV5IERheVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNjMzMxYzg3LTE2MzQtNDZjNC04N2NlLWU0YjljNTllMjk2OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWW9zaCBDYXJwZW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NGM5MmQ5Ny1iYjM5LTQ2OWQtYTEzYi1mMmRkOWFlNjQ0ZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW5jaXNjbyBQcmVzdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWZmNjZlYWUtNzExMS00ZTNiLWE5YjgtYTk1NzkxNjViMGE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWFudXRpZWwgRHVmZnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MzNkODBmMS0yNDg1LTQwZjctODI4Yi1mZDdjZDgyNDNhMDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhaSBTcGxpZmZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MjRkZTg2ZC0yNjBiLTQ5NWItODBlMS01N2FmNTc2NzcwM2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdGNod29yayBTb3V0aHdpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5N2Y1YTljZC03MmYwLTQxM2UtOWU2OC1hNmVlNmE2NjM0ODlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktsaW5lIEdyZWVubGVtb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YWMyZTdjNS01YTM0LTQ3MzgtOThkOC05ZjkxN2JjNmQxMTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNocmlzdGlhbiBDb21ic1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlmNmQwNmQ2LWM2MTYtNDU5OS05OTZiLWVjNGVlZmNmZjhiOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lsdmlhIFdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIyOGJiN2Y3LTJkOGMtNDc4MS04ODA4LTgzODQ0ZGY3ZTczMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNvdWwgSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjMyM2Y4OTctY2NmOS00MjAwLTg4NzAtMjQ5Y2JlMTlmOTA0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIdWJlciBGcnVtcGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjFjYzRkN2QtYmVmMC00M2RkLWJhMGEtMTdjNzYyOGFhNzc1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWdpIFJ1aXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMjQ2ODA1NS1lODgwLTQwYmYtOGFjNi1hMDc2M2Q4NDZlYjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsYXluYWJlbGxhIEhvbGx5d29vZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYyYTI3YTdlLWJmMDQtNGQzMS04NmY1LTE2YmZhM2FkZGJlN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2lubmllIEhlc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNzg0N2RlMi1kZjQzLTQyMzYtOGRiZS1hZTQwM2Y1ZjNhYjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJsb29kIEhhbWJ1cmdlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZlZGJjZWI4LWUyYWEtNDg2OC1hYzM1LTc0Y2QwNDQ1ODkzZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVW5jbGUgUGxhc21hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjBjNTI5YjMtOTQ3ZS00YTc3LWI1NmYtNjlmZTI1ZmIzNzE3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTb2NrcyBNYXliZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRjYTUyNjI2LTU4Y2QtNDQ5ZC04OGJiLWY2ZDYzMTU4ODY0MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVmVsYXNxdWV6IEFsc3RvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MmFlNmFhOS1lMzQ2LTRmYWEtYjA3Yy0xZjc2MjM1ODAwMTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdlcnVuZCBQYW50aGVvY2lkZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYzNTEyNTcxLTJlY2EtNGJjNC04YWQ5LWE1MzA4YTIyYWUyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3NjYXIgRG9sbGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODBlNDc0YTMtN2QyYi00MzFkLTgxOTItMmYxZTI3MTYyNjA3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdW1tZXJzIFByZXN0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YWRiMDg0Yi0xOWZlLTQyOTUtYmNkMi1mOTJhZmRiNjJiZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvZ2FuIFJvZHJpZ3VlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlNjExYjQ1LTk4ZGMtNDgxOC05ZmY5LWU4ODIzN2ViMDBmM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNLaW5sZXkgT3R0ZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNGExMGMyYS0wYzI4LTQ2NmEtOTIxMy0zOGJhMzMzOWI2NWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpY2htb25kIEhhcnJpc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmUzZThiYTUtNjY4Ny00MDBkLTk4MjgtMmI3MGQ2M2VhOGJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUZXZpbiBNZWxjb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NzgxNzBlNC0wNjg4LTQzNmQtYTAyZC1jMDQ2N2Y5YWY4YzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhYnkgRG95bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NjA1YWY0Yi1iMjM1LTQzZjgtODFhYS02MzgxZWNkZGE3NTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk11c2UgU2NhbnRyb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZTgxZTE3Mi04MDFhLTQyMzYtOTI5YS1iOTkwZmM3MTkwY2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1Z3VzdCBTa3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZWZiYzU0MC1hMzZkLTQ2MGItYWZkOC0wN2RhMjM3NWVlNjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhc3RpbGxvIFR1cm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImViZTZhYzAyLTNiODMtNGRhOC1iMWU1LWY4OTA1M2JiZDVjOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFuIENhbmJlcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWM2ODg0NWYtM2IyNi00MTJmLTg0NDYtNGZlZjM0ZTA5Yzc3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYW5keSBGYW50YXN0aWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwM2I4MGE1Ny03N2VhLTQ5MTMtOWJlNC03YTg1YzM1OTQ3NDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhbGV4YW5kcmV5IFdhbHRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE0NDhmMWYzLWQ3NmYtNDVjMS1hNWMxLTU0ZjIyNTQ0MDAwYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NhcmxldCBDYXN0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMTZhYmVhNy05ODkwLTRmYjgtYWFlYS04NmIzNWUyNGQ5YmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbm5lZHkgUm9kZ2Vyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMxODhkNjQxLTRmY2MtNGQ1ZS04ODdkLTVmNDU0YjRjNGZmOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lsdmFpcmUgU2VtaXF1YXZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwOTk4YTA4LWRlMTUtNDE4Ny1iOTAzLTJlMDk2ZmZhMDhlNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2Fubm9uYmFsbCBTcG9ydHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjODNiODJlOC1iOGQyLTRjYjctOTk4Mi05NzU5MzI4M2FjYzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbHZpbiBEcnVtc29sb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ5NzgzNWZkLTJlOTItNDY5OC04OTAwLTFmNWFiZWEwYTNiNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2luZyBSb2xhbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNDAzNDE5Mi00ZGM2LTQ5MDEtYmIzMC0wN2ZlM2NmNzdiNWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhbGR3aW4gQnJlYWR3aW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNmZkZDFlZC0xM2EwLTRlYjItYTdkZC00ZTk1NTEyMzVhNjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlhhbmRyYSBQYW5jYWtlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE3MzJlNjIzLWZmYzItNDBmMC04N2JhLWZkY2Y5NzEzMWYxZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmV0c3kgVHJvbWJvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyN2M2OGQ3Zi01ZTQwLTRhZmEtOGI2Zi05ZGY0N2I3OWU3ZGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhc2lsaW8gTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYWI0ZWMwMi0xN2Q5LTRjNGEtYjk1Ni1hYTE3MGJmNThhNmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppcHB5IERlU2hpZWxkc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRmNjllOGMyLWIyYTEtNGU5OC05OTZhLWNjZjM1YWM4NDRjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSWduZXVzIERlbGFjcnV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjUyNzM2MTUtMjJkNS00ZGYxLTlhNzMtNzA3YjIzZTgyOGQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCdXJrZSBHb256YWxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY5MWY5YWIyLTlkZDQtNDJlOC1iZjk1LTlmZDAxMjUzYzgwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gSVZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4Y2Y3OGI0OS1kMGNhLTQ3MDMtODhlOC00YmNhZDI2YzQ0YjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF2aWxhIEd1em1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0YmFhOWFjLWZmOTYtNGY1Ni1hOTg3LTEwMzU4ZTkxN2Q5MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2FicmllbCBHcmlmZml0aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjliZTU2MDYwLTNiMDEtNDdhYS1hMDkwLWQwNzJlZjEwOWZiZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVzXFx1MDBmYXMgS29jaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlmZDFmMzkyLWQ0OTItNGM0OC04ZDQ2LTI3ZmI0MjgzYjJkYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTHVjYXMgUGV0dHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYWUzODgxMS0xMjJjLTQzZGQtYjU5Yy1kMGUyMDMxNTRkYmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbmRpZSBDYXJ2ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjM2FlMDU1Mi01OWU4LTQ0YmYtYmE2Ni00OGE5NmFmZjM1ZTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJvbnRnb21lcnkgTXVsbG9ja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMzZGM3YWEyLWUyN2ItNDg1OS1iYmYwLTQ3YmE2NmMwMzE4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbmtpZSBJbmNhcm5hdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOGFmOTMzYS00YWZhLTRjYmEtYmRhNS00NTE2MGYzYWY5OWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZlbGl4IEdhcmJhZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZGE0OWRlMi0zNGU1LTQ5ZDAtYjc1Mi1hZjJhMmVlMDYxYmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvcnkgVHdlbHZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWY4NTY3NmEtNzQxMS00NDRhLThhZTItYzdmOGY3M2MyODVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYWNobGFuIFNoZWx0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMWExOThkNi1iMDVhLTQ3Y2YtYWI4ZS0zOWE2ZmExZWQ4MzFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxpcXVpZCBGcmllbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlN2JiZmI2Mi1hMTM4LTQxZTgtODZhZi1iOTE4NDNkMTcwMTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNob3JieSBTb3VsIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjNjMDdlYWYtM2Q2Yy00Y2MzLTllNTQtY2JlY2M5YzA4Mjg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYW1wb3MgQXJpYXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOGY0NWExYi03NmViLTRiNTktYTI3NS1jNjRjZjYyYWZjZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXBoIFdlZWtzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmIxNTdjNWMtOWE2YS00NWE2LTg1OGYtYmY0Y2Y0Y2JjMGJkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPcnRpeiBMb3BlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNlYmI1MzYxLTM4OTUtNGE1MC04MDFlLWU3YTBlZTYxNzUwY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVndXN0byBSZWRkaWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmI4ZDEyOGYtZWQ1MS00OTZkLWE5NjUtNjYxNDQ3NmY4MjU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPcnZpbGxlIE1hbmNvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODg5YzllZjktZDUyMS00NDM2LWI0MWMtOTAyMWI4MWI0ZGZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMaWFtIFNuYWlsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTNlYTBlOTMtYzlmNS00Zjg1LThhY2QtYzNjNWNlODYwMWZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZXJ1ZWwgS3JhbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDBmZmM5YzItZTY3Ny00MjMwLWE2MzktYjBhZTExNjUwNTAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLYXogRmlhc2NvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDJkNzY4MTUtY2JkYy00YzRiLTljOWUtMzJlYmYyMjk3Y2M3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEZW56ZWwgU2NvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlM2M1MTRhZS1mODEzLTQ3MGUtOWM5MS1kNWJhZjVmZmNmMTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRvdCBDbGFya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIzOGY4YzUwLTMxMWYtNDQ4Ni1hNzM0LWUxYTE3NjA2YWY0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTHVjaWVuIFBhdGNod29ya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRiM2U4ZTliLTZkZTEtNDg0MC04NzUxLWIxZmI0NWRjNTYwNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhvbWFzIERyYWNhZW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTdkODE5NmEtY2E2Yi00ZGFiLWE5ZDctYzI3ZjNlODZjYzIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb21taXNzaW9uZXIgVmFwb3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmODgzMjY5Zi0xMTdlLTQ1ZWMtYmIxZS1mYThkYmNmNDBkM2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpheWRlbiBXcmlnaHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwOWYyNzg3YS0zMzUyLTQxYTYtODgxMC1kODBlOTdiMjUzYjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkN1cnJ5IEFsaWNpYWtleWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTMwMWVlODEtNDA2ZS00M2Q5LWIyYmItNTVjYTZlMGY3NzY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWxpayBEZXN0aW55XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWZmYjExNTMtOTA5ZC00NGM3LTlkZjEtNmVkM2E5YTQ1YmJkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb250Z29tZXJ5IEJ1bGxvY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyODE2MmRhNy1lYWZhLTRlYjEtOGJjMS01YTYyNWYwM2FlNTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hZ3MgQmFuYW5hbmFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVhMjZmYzYxLWQ3NWQtNGMwMS05Y2UyLTE4ODBmZmI1NTUwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFuZHkgRGVubmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2ZlZDcyZGYtODdkZS00MDdkLTgyNTMtMjI5NWEyYjYwZDNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdG91dCBTY2htaXR0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODkwM2E3NGYtZjMyMi00MWQyLWJkNzUtZGJmNzU2M2M0YWJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFuY2lzY2EgU2FzcXVhdGNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWRjYmMyOTAtODFjNS00ZGE5LWI0ZGEtMmU1OTRiMDgwNzEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmVlbWl1bSBTZXJhcGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMjJlM2FmNS05MDAxLTQ2NWYtYjQ1MC04NjRkN2RiMmI0YTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvZ2FuIEhvcnNlbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjA1OTQ5MzItOGVmNy00ZDcwLTk4OTQtZGY0YmU2NDg3NWQ4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGaXR6Z2VyYWxkIFdhbmRlcmx1c3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjVmNWRkNy1lMzFmLTQ4MjktYmVjNS01NDY2NTIxMDNiYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1ZGxleSBNdWVsbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmMzNDZkOGItZDE4Ni00MjI4LTlhZGItYWU5MTlkNzEzMWRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcmVlciBHd2lmZmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGVjZWE3ZTAtYjFmYi00Yjc0LThjOGMtMzI3MWNiNTRmNjU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGaXR6Z2VyYWxkIEJsYWNrYnVyblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI2YWE4Y2U4LTI1ODctNDYyNy04M2MxLTJhNDhkNDRhZmFlZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSW5reSBSdXRsZWRnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM2ZTJlMzg5LWVkMDQtNDYyNi1hNWJhLWZlMzk4ZmU4OTU2OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVucnkgTWFyc2hhbGxvd1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM4MTdjNmNjLTg1NzQtNDg1Ny04M2YxLTRhMzExZmE4OTI1OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNvdWwgSVZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTBlNTdhNy04OWY1LTQxZWEtODBmOS02ZTY0OWRkNTQwODlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllvbmcgV3JpZ2h0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWY1NzY0YzctYzNhMC00ZGFlLWFkMTctYzY2ODlmMWU4YzI3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcmlza2V0IEZyaWVuZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkOGVlMjU2Zi1lM2QwLTQ2Y2ItOGM3Ny1iMWY4OGQ4YzlkZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbWZvcnQgU2VwdGVtYmVyaXNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGJmMzUyZDItNmE1Ny00MjBhLTlkNDUtYjIzYjJiOTQ3Mzc1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaXZlcnMgUm9zYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVlNGRmYTE2LWYxYjktNDAwZi1iOGVmLWExNjEzYzJiMDI2YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU255ZGVyIEJyaWdnc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhiNTNjZTgyLTRiMWEtNDhmMC05OTlkLTE3NzRiMzcxOTIwMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT2xpdmVyIE11ZWxsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NDBkNWZlZi1kNTlmLTRkYWMtOWE3NS03MzllYzA3ZjkxY2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbm5lciBIYWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ1YjZiMTFkLTM5MjQtNDYzNC1iZDUwLTc2NTUzZjFmMTYyYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT2dkZW4gTWVuZG96YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYyNDVmNmM2LTQ2MTMtNDBmNS1iYzNiLTg1YWE5ZWUzY2Y3ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVXN1cnBlciBWaW9sZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNGNhNDM3Yy1jMzFjLTQ1MDgtYWZlNy02ZGFlNDMzMGQ3MTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW4gQmVhbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MDlkMWM5Ni03NjBiLTRhOTYtOWEzYy00ODExMTJkZGYzN2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pcSBOeW9uZydvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDNkNWRhNWYtYzZhMS00MmYxLWFiN2YtNTBlYTk1NmI2Y2Q1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdXN0aWNlIFNwb29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTExNjkyMWYtNzY0Mi00NDFhLTlhODUtNDBjOTNhMWU2MWJkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb3JkZWNhaSBLaW5nYmlyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI2MjljYjdhLTQxNGItNDY5NS1hMTE1LTc1MjhhYjcwMDM0NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2hpcmFpIE1jRWxyb3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMTExYTQ2ZC01YWRhLTQzMTEtYWM0Zi0xNzVjY2EzMzU3ZGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZXhhbmRyaWEgUm9zYWxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVhNDRiZDM2LTY1YjQtNGYzYi1hYzcxLTc4ZDg3YTU0MGI0OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgUG90aG9zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjc4Mzk3NTQtYzM1MS00M2VjLTliZmYtY2E2NjJhMjM4NWI5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3ViZXJ0IEppLUV1blwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg2YWRhYzZmLWM2OTQtNDRhYy05NTYwLTc1OGRlN2VhYzkzN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUXVhY2sgRW5qb3lhYmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODg4ZmNlN2EtMGQyMS00NzhhLTliNDUtNDY2MjE5M2ZlOWFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb2xlbmUgV2lsbG93dHJlZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIwYzIwOTE2LTcwOTctNDdlNi04MjI2LWNiZjY3ZGExNzZlMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VsdmluIEFuZGFudGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwODlhZjUxOC1lMjdjLTQyNTYtYWRjOC02MmUzZjRiMzBmNDNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbHZpYSBSdWdyYXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyODU5MTY2ZC02YWVkLTQyNjItYjA1Yi1kYjg1YzQ5YjMzOTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbm5hIE1pbGljaWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NTQyZjBiMC0zNDA5LTRhNGEtYTllMS1lOGU4ZTVkNzNmY2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyb2NrIFdhdHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgyZDFiN2I0LWNlMDAtNDUzNi04NjMxLWEwMjVmMDUxNTBjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FtIFNjYW5kYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZmZiYWVjOC1hNjQ2LTQ0MzUtYTE3YS0zYTBhMmI1ZjNlMTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJvbmsgSm9rZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MWRhYjg2OC04MjBiLTQ5NjktOGJiYS1iZGUwYmU4MDkwZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNyYXZlbCBHZXN1bmRoZWl0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODE0YmFlNjEtMDcxYS00NDliLTk4MWUtZTdhZmM4MzlkNmQ2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdXNsYW4gR3JlYXRuZXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2U3ZDMzYjctMWJiYS00OGQ2LWExZDEtY2QwZTI5MjMxYmU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYWNvYnkgUG9kY2FzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQzNWNjZWUxLTk1NTktNDlhMS1hYWE0LTc4MDlmN2I1YzQ2ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRm9ycmVzdCBCZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDk1YTZiZGMtMTc0ZC00YWQ2LThkNTEtOWVlODhiMWMyZTRhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGFxdWlsbGUgVG9ycmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGI2ZjBhNGUtZGUxOC00NGFkLWI0OTctMDNiMWY0NzBjNDNjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb2RyaWd1ZXogSW50ZXJuZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMTk5YTY4MS1kZWNmLTQ0MzMtYjZhYi01NDU0NDUwYmJlNWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlYWNoIEluZ3JhbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMxODJmMzNjLWFlYTUtNDhhMi05N2VkLWRjNzRmYTI5YjNjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3dhbXVlbCBNb3JhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjJjNDc3ZmItMjhlYS00ZmNiLTk0M2EtOWZhYjIyZGYzZGEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW5kZm9yZCBHYXJuZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmY2JlMWQxNC0wNGM0LTQzMzEtOTdhZC00NmUxNzA2MTA2MzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvZGUgUHJlc3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0Mjk2MmM4LTRkOGItNDRhNi1iODU0LTZjY2VmM2Q4MjcxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9uYW4gSmF5bGVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjM5YjVhYWUtODU3MS00YzkwLTg4N2EtNmEwMGYyYTJmNmZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEaWNrZXJzb24gTW9yc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZDA3Y2NkMC1jYWM3LTRjY2QtYmFiNi1hMDc4YmI5ODMxNzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVuZ2luZSBFYmVyaGFyZHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZDZmM2QyMy1iYzI2LTQwZTYtOTNhYS0wYjFjNjkzZTBiYThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpbGV5IEZpcmV3YWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWQ4ZDE1ZjQtZTA0MS00YTEyLWExMGUtOTAxZTYyODVmZGM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWJ5IFRyaXVtcGhhbnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZmI0MjMyNS01OTJhLTQxMTktOWI0MC00Y2RjMTk5NTliMDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hbmR5IFNsdW1wc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdhZWI4ZTBiLWY2ZmItNGE5ZS1iYmEyLTMzNWRhZGE1ZjBhM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVubGFwIEZpZ3Vlcm9hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODhjZDZlZmEtZGJmMi00MzA5LWFhYmUtZWMxZDZmMjFmOThhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZXdpdHQgQmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAwNmUxZDMyLTk3NDItNDhlZi1hNmJhLTM2NTQ1ZTkzYjllM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9tZ3kgUm9sc2VudGhhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIwYmUxYzM0LTA3MWQtNDBjNi04ODI0LWRkZTJhZjE4NGI0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUWFpcyBEb2d3YWxrZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMjY4ZjQ1Mi0wMWI5LTRlMTYtOThiYi1jMDdlM2NlNzY3ZTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhbmRhIFNjaGVublwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY4Zjk4YTA0LTIwNGYtNDY3NS05MmE3LTg4MjNmMjI3NzA3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXNhYWMgSm9obnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFkMWU2NzBhLWYzNDYtNGJmNy1hMDJmLWE5MTY0OWM0MWNjYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGhhbmllIFdpbnRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNjUwMmJjNy01Yjc2LTQ5MzktOWZiOC0xMzIwNTczOTBiMzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyZWVyIExvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNzQxZGMwMS0yYmFlLTQ0NTktYmZjMC1mOTc1MzYxOTNlZWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZWphbmRybyBMZWFmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTFkZTRkYTMtODIwOC00M2ZmLWExZmYtMGIzNDgwYTBmYmYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb24gTWl0Y2hlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYzRiMmE2ZC05OTYxLTRlNDAtODgyYy1hMzM4ZjRlNzIxMTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkV2ZWx0b24gTWNCbGFzZSBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZmYzM2ODlmLWJiN2QtNDM4Mi05OGEyLWNmNmRkYzc2OTA5ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2VkcmljIEdvbnphbGV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzE4OTYxZTktZWYzZi00OTU0LWJkNmItOWZlMDFjNjE1MTg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXJtZWxvIFBsdW1zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDFiZGI1MjctMWZiMi00ODdkLTgyMzctMDkzOTU4ZTczN2U0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZXBoeXIgTWNDbG91ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJlOTRmYTBkLTQ1M2YtNDkyNS04ZWEwLWMwYTUzZTM4MTA4ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVyb3JhIEJsb3J0bGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDFhZDgwNjAtMmJiZS00ODcyLWE4NzktMjJjYjEwMmJiNjRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZcmpcXHUwMGY2IEtlcmZ1ZmZsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFiMzZjNzc2LWI1MjAtNDI5Yi1hODVmLWJmNjMzZDdiMDgxYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR29vYmllIEJhbGxzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNGUxNGQ3Yi01MDIxLTQyNTAtYTNjZC05MzJiYThlMGE4ODlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpheWxlbiBIb3Rkb2dmaW5nZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmNhMzg4MDktODFkZS00MmZmLTk0ZTMtMWMwZWJmYjFlNzk3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGYW1vdXMgT2Nvbm5vclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRhMGJiYmU2LWQxM2MtNDBjYy05NTk0LThjNDc2OTc1ZDkzZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFuZyBSaWNoYXJkc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGE2N2MxOTYtNGNhYy00MjhiLThjMTgtMmE0MTEwNTVlYTM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZdXNlZiBGZW5lc3RyYXRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTY3OWQ1ZGUtZjQxNy00NWRiLWFiOGQtNDliOTJlNzQ0NDg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmluaXR5IFJvY2hlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjNkZGZkODctNzNhMi00NjgxLTk2ZmUtODI5NDc2Yzk3ODg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGVvZG9yZSBEdWVuZGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NjYzYzNjYS00MGExLTRmMTMtYTQzMC0xNDYzN2RjZTc5N2FcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBvbGthRG90IFphdmFsYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYyMzZiZDViLTRmZjEtNDE1NC1hM2NkLTdjYjNjMGRkYWE1YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGFpIEJlYW5iYWdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZjlmOGI5NS05ZTczLTQ5Y2QtYmU1NC02MGY4NDg1OGEyODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbGxpbnMgTWVsb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNDkzMTU0Ni0xYjRhLTQ2OWYtYjM5MS03ZWQ2N2FmZTgyNGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdsYWJlIE1vb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNjc3NTFkNS0yMTBjLTRhNmUtOTU2OC1lOTJkNjFiYWIxODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphY29iIFdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ1ZWYzY2ZhLWI5YTYtNGUxNi1hM2RmLTZjMjM2ZThiZGIzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnlsYW4gTydMYW50ZXJuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTVhZTY0Y2QtZjY5OC00YjAwLTlkNjEtYzlmZmZkMDM3YWUyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWNrZXkgV29vZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YzMyNzNhMC0yNzExLTQ5NTgtYjcxNi1iZmNmNjA4NTcwMTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkthdGh5IE1hdGhld3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5Mzk3ZWQ5MS02MDhlLTRiMTMtOThlYS1lOTRjNzk1ZjY1MWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlllb25nLUhvIEdhcmNpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ0N2RkMDhlLTgzM2MtNDMwMi1hOTY1LWEzOTFkMzQ1NDU1Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3R1IFRyb2xvbG9sXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGVkZGQwNTYtOWQ3Mi00ODA0LWJkNjAtNTMxNDRiNzg1ZDVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYWxlYiBOb3Zha1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVkYmYxMWMwLTk5NGEtNDQ4Mi1iZDFlLTk5Mzc5MTQ4ZWU0NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29ucmFkIFZhdWdoYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YzIzNzAyYi1mMGMyLTQ2NjgtOGJjYy02MWJiZGJiZmQ5M2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyb2xsaXMgWmVwaHlyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTZlYzhkMDAtYTc4Zi00ZjZiLWI1MWEtZGI5ZjU1MDdjZjBhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGb3h5IFBlYmJsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIxYjE0MWZjLWU4NjctNDBkMS04NDJhLWNlYTMwYTk3Y2E0ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmljaGFyZHNvbiBHYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNmOGUxNTJlLTJkMjctNGRjYy1iYTJiLTY4MTI3ZGU0ZTZhNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVuZHJpY2tzIFJpY2hhcmRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwODNkMDlkNC03ZWQzLTQxMDAtYjAyMS04ZmJlMzBkZDQzZThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplc3NpY2EgVGVsZXBob25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWU1NTI0OGItMzE4YS00YmZiLTg4OTQtMWNjNzBlNGUwNzIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGVvIEtpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MzA0YmNmOS0yMzlhLTRhYTItYTQxMC01NmE0ODcyMTdhMmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhbmNlbG90IEthbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MWEwODg5YS00NjA2LTRmNDktYjQxOS04NjZiNTczMzEzODNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1bW1lcnMgUG9ueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg3ZTZhZTRiLTY3ZGUtNDk3My1hYTU2LTBmYzk4MzVhMWUxZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFyY28gU3RpbmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiOTI5M2JlYi1kMTk5LTRiNDYtYWRkOS1jMDJmOTM2MmQ4MDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhdWVyIFppbW1lcm1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU5YTQ2ZTBjLTA0MzctNDQzYS1iZTgxLTk1NjY2NWVjNTg4ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGllcm9waGFudGljIEZvaWJsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE1MTNhYWI2LTE0MmMtNDhjNi1iNDNlLWZiZGE2NWZkNjRlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FsZWIgQWx2YXJhZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMzFkODc0Yy0xYjRkLTQwZjItYTFiMy00MjU0MmU5MzQwNDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNlZHJpYyBTcGxpZmZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NmM0ODUzYi03ZmJjLTQ2ODgtOGNkYS1jNWI4ZGUxNzI0ZTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhcnMgTWVuZG96YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwZGZmNTkxLTIzOTMtNDQ4YS04ZDg4LTEyMmJkNDI0ZmE0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWx2aXMgRmlndWVyb2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZTcyNGQ5YS05MmEwLTQzNmUtYmRlMS1kYTBiMmFmODVkOGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhdGZpZWxkIFN1enVraVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM3M2Q1OWRkLTMyYTAtNDljZS04YWI0LWIyZGJiN2RjOTRlY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWR1YXJkbyBJbmdyYW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOGMyMDY5My1mNDM5LTRhMjktYTQyMS0wNWVkOTI3NDlmMTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbWJzIER1ZW5kZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFjNjlkYmEzLTYyMjUtNGFmZC1hYjRiLTIzZmM3OGY3MzBmYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmV2YW4gV2lzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhhNmZjNjdkLWE3ZmUtNDQzYi1hMDg0LTc0NDI5NGNlYzY0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGVycmVsbCBCcmFkbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjYxYjI4NzEtNzI1NC00OWIzLWIwMDktMTc0YTIzYWNhYTFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb24gSGFsaWZheFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUzNzZhOTBiLTdmZmUtNDdhMi1hOTM0LWYzNmQ2ODA2ZjE3ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG93ZWxsIFJvY2hhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzc1NWVmY2UtZDA0ZC00ZTAwLWI1YzEtZDgwMTA3MGQzODA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXNpbGlvIEZpZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYzOGM1ZDgwLTA5M2YtNDZlYi05OWQ2LTk0MmFhNDVjZDkyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5kcmV3IFNvbGlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjM0OGMwMzctZWVmYy00YjgxLThlZGQtZGZhOTYxODhhOTdlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3dlIEZvcmJlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM2YTI3N2MzLWQyYjUtNDM2My04MzliLTk1MDg5NmE1ZWM1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlrZSBUb3duc2VuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI2MDYwNWU2LWZmNDEtNDM4OC1hNjFhLWZhZmQyMTc1ZjdhZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWx3aW4gTWNHaGVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjg5NjQ0OTctMGVmZS00MjBjLTljMWQtODU3NGYyMjRhNGU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJbmV6IE93ZW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGQzMzdiNDctMmE3ZC00MThkLWE0NGUtZWY4MWU0MDFjMmVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXNlIFNwb3J0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI4NWNlNzdkLWU1Y2QtNGRhYS05Nzg0LTgwMTM0NzE0MGQ0OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU29uIFNjb3RjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFjNzNmOTFlLTA1NjItNDgwZC05NTQzLTJhYWIxZDVlNWFjZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3BhcmtzIEJlYW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2IwZjkxYWEtNGQ2Ni00MzYyLTk5M2QtNmZmNjBmN2NlMGVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCbGFua2Vuc2hpcCBGaXNjaGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDgxY2U2NjItMDdiNi00YTczLWJhYTQtYWNiYmI0MWY5ZGM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZdW1teSBFbGxpb3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDViZDA4ZDUtN2Q5Zi00NTBiLWFiZmEtMTc4OGI4ZWU4YjkxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGV2ZW5zb24gTW9uc3RlcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMWZiYTU1NS1hNDhjLTQ0ZjMtYWZiNi01MjJlYTI1Njk0N2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pbmR5IEt1Z2VsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTM4YWRhMGEtYWVhYy00YTNkLWI5YTUtOTY4Njg3Y2NkMmY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaXhwYWNrIFNhbnRpYWdvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTc0NDhiNjItZjk1Mi00MGUyLTgyMGMtNDhkOGFmZTBmNjRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZXNzaSBXaXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDI1ZjNmODQtYmFiMC00Y2YyLTkxYzEtOTZlNzhjZjVjZDAyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMdWlzIEFjZXZlZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZjRkYTgxYS05MTdiLTQzNGYtYjMwOS1mMDA0MjNlZTQ5NjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkV1Z2VuaWEgQmlja2xlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmE0NzdjOTItMzliNi00YTUyLWIwNjUtNDBhZjJmMjk4NDBhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3dlbGwgRnJhbmtsaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDdhYjVhOC1lY2UzLTRjNGQtYjJkMi05OGUzYTdjZjg2NGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldpY2hpdGEgVG9hc3RlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkM2JlN2I4LTFjYmYtNDUwZC04NTAzLWZjZTBkYWY0NmNiZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmFjayBTYW5kZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDI5NWM2YzItYjMzYy00N2RkLWFmZmEtMzQ5ZGE3ZmExNzYwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb21icyBFc3Rlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFiOWViMjEzLTA5MTctNDM3NC1hMjU5LTQ1ODI5NTA0NTAyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF0aGVvIENhcnBlbnRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwYzg1YmU0LWZmMjYtNDcwZi04MTM1LWFmNzcxZmQyMWU1MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5hdGhlbWEgRWxlbWVmYXlvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTE0MTAwYTQtMWJmNy00NDMzLWIzMDQtNmFhZDc1OTA0MDU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLdXJ0IENydWVsbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGVkNjFiMTgtYzFmNi00ZDcxLWFlYTMtY2FhYzAxNDcwYjVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZW5ueSBNYXJpanVhbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMTdhNDM5Ny00ZGNjLTQ0MGUtOGM1My1kODk3ZTk3MWNhZTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1Z3VzdCBNaW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjljMGQzY2ItZDhiZS00ZjUzLTk0YzktZmM1M2JjYmNlNTIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXR0ZW8gUHJlc3RpZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMDY4ZjQ0Yi0zNGEwLTQyZDgtYTkyZS0yYmU3NDg2ODFhNmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsbGlzb24gQWJib3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGNiNDQwMjYtZWJmMC00ODcwLWI5OGUtZTYyMGIwODE0ODA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWNoZWxsZSBTcG9ydHNtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZjYxZDk0OC00ZjBjLTQ1NTAtODQxMC1hZTFjN2Y5ZjU2MTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhbWFyYSBDcmFua2l0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDg5ZGEyZDItNjc0Yy00Yjg1LTg5NTktYTRiZDQwNmY3NjBhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGaXNoIFN1bW1lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZjYjA4ZTRmLWRmM2EtNDQ2Yy1hYjUwLTU4YTQ5NmFjNWYzZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVubmV0dCBCbHVlc2t5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmMyOWFmYzEtYzk1NC00ZGVmLTk3OGItYTU5YWU1ZGVmM2MzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaWdieSBGcmllZHJpY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNzA3NThhMC0wOTJhLTRhMmMtOGExNi0yNTNjODM1ODg3Y2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFseCBLZW1pbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MDc2ODM1NC05NTdlLTRiNGMtYmI2ZC1lYWI2YmJkYTBiYTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkV1Z2VuaWEgR2FyYmFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAxOWNlMTE3LTIzOTktNDM4Mi04MDM2LThjMTRkYjdlMWQzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9yaSBCb3N0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMjU3NzI1Ni1iYzRlLTQ5NTUtODFkNi1iNDIyZDg5NWZiMTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphc21pbmUgV2FzaGluZ3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFkYWRlZTExLWExMWYtNDQyYS05YmUzLWNiMGIxMGI4NjcxOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVla2Fib28gTmFtZXBlcnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFkZWQwMzg0LWQyOTAtNGVhMS1hNzJiLTRmOWQyMjBjYmUzN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSnVhbiBNdXJwaHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZTIyOWZlNS1hMTkxLTQ4ZWYtYTdkZC02ZjZlMTNkNmQ3M2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaWNrc29uIEZpc2NoZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZjE0NTQzNi1iMjVkLTQ5YjktYTFlMy0yZDNjOTE2MjYyMTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvZSBWb29yaGVlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIxNTU1YmZiLTZhZWQtNDUxMC04NjNhLTgwMWJlM2I2ZDk5N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5hc3Rhc2lhIElzYXJvYm90XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjFjYmJmYWEtMTAwZS00OGM1LTljZWEtNzExOGIwZDA4YTM0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdWljZSBDb2xsaW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjRjYTk3NmYtZGRmMi00OTY2LWJhMTQtNGZkMmI5YjIwMzQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbHdpbiBCbGFza2V0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI2NmFiY2MwLThhYmMtNDU3MC1iMzJlLWU1NjY4ZTVkMzhmM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWm9leSBLaXJjaG5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJlMTMyNDllLTM4ZmYtNDZhMi1hNTVlLWQxNWZhNjkyNDY4YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVml0byBLcmF2aXR6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmYzZDdiYzctNmZmYi00MGMzLWE5NGYtNWU2MjZiZTQxM2M5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGlqYWggVmFsZW56dWVsYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMyMDVmNGZmLTcwNTAtNDcwYi04OTcwLThkN2VhNTY1NjRiY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2lhIFd1cHBvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzVhY2I2ZWEtOWE3Yy00OWI2LTgwOWMtNTk0MDlmNTU3NjUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLdXJ0IFVsdHJhYmFzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM2YTk4NjNjLWJmNjktNGRkZC1iYmUwLTZkNjRiMGQwMGU4Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWWFzc2x5biBTdGF0dGVyIEpyLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM3OGMwN2IwLTU2NDUtNDRiNS04NjlmLTQ5N2QxNDRjN2IzNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnlubiBEb3lsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNjMDUxYjkyLTRhODYtNDE1Ny05ODhhLWUzMzRiZjZkYzY5MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHlsZXIgTGVhdGhlcm1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNjMTlhYTkzLTNmOWQtNGJlMC1hZTVhLThhZGUxMDBhOTY2OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9uIFR1bWJsZWhvbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NTYyYWMxZi0wMjZjLTQ3MmMtYjRlOS1lZTZmZjgwMGQ3MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNocmlzIEtvY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZWM2OTUxZi02ODIyLTQ4NjEtYmMyNS03OTgyNmRkOGM1NTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNoZWV2IFNocmlmZmxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTIwZTYwNjYtYjE0Yi00NWNmLTk4NWMtMGE2ZWUyZGMzZjdhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaSBTbGlkZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTJjZmViZmItODAwOC00YjlmLWE1NjYtNzJhMzBlMGI2NGJmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGVhcnMgUm9nZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTNlNzAxYzctZTNjOC00ZTE4LWJhMDUtOWI0MWI0YjY0Y2RhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJxdWV6IENsYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTRlNWYyMjItZmIxNi00N2UwLWFkZjktMjE4MTMyMThkYWZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcml0IFdhdHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU4MzFhMjM4LThlZmUtNGQ1My1hNDgzLTFhZDY4MWU1MGFjM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2l0YSBTcGFycm93XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWE2YjBjNmQtMWNjOC00YWNiLTk5MWMtMGZmZTYyZjNkOTkwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb3R1cyBDbHV0Y2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YzYwZjgzNC1hMTMzLTRkYzYtOWMwNy0zOTJmYjM3YjNlNmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhbWlyZXogV2ludGVyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVkZGVlNDlkLTc5ZjItNGViYS1hM2M5LTE3NDc4NDMyMjA1OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm9iYmluIElubmluZ3NvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmM2I1ZGMyLTM1MWEtNGRlZS1hOWQ2LWZhNWY0NGYyYTM2NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxzdG9uIEVuZ2xhbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZjViM2IxOC1lYmM1LTQ2MTEtYjhiZi02MWI4YzZhM2JhMTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk51Y2xldXMgQ3Jlc3RoaWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWZiZjA0YmItZjVlYy00NTg5LWFiMTktMWQ4OWNkYTA1NmJkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb25pYSBEb2xsaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MzA1ZTJkZC0yZDVkLTQ5ZWQtYWI0Ny1iMWI1NmYwZTdlODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhbmRhIEZpYXNjb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY0YWFhM2NiLTdkYWYtNDdlMy04OWE4LWU1NjVhMzcxNWI1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJhdmlzIE5ha2FtdXJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmE1NjdkYTYtN2M5Ni00NGQzLTg1ZGUtZTVhMDhhOTE5MjUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDdWRpIERpIEJhdHRlcmlub1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZiYWM2MmFkLTcxMTctNGU0MS04MGY5LTVhMTU1YTQzNDg1NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JpdCBGcmVlbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmY5ZGU3NzctZTgxMi00Yzg0LTkxNWMtZWYyODNjOWYwY2RlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBcnR1cm8gSHVlcnRhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmY5ZjUwZTYtODFiZi00MzcxLTlhMjctZGUzYzg1YmQ1YTgyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYW51IENhbmRsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZmYTA4ZTA4LTZhOTUtNGZiYy05ZDAwLTVjMzljNTMwMmI2MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFycnkgQnVya2hhcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MTU4ZDE1OC1lN2JmLTRlOWItOTI1OS02MmU1YjI1ZTNkZThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkthcmF0byBCZWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzNhOTM0ZGUtM2RiMS00NTUzLTk3ZjItOWU3YjU3NzQ0YjM0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYWxpaCBVbHRyYWJhc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YTc1ZDYyNi1kNGZkLTQ3NGYtYTg2Mi00NzMxMzhkOGMzNzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlY2sgV2hpdG5leVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdjNWFlMzU3LWUwNzktNDQyNy1hOTBmLTk3ZDE2NGM3MjYyZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlsbyBCcm93blwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdlNGYwMTJlLTgyOGMtNDNiYi04YjhhLTZjMzNiZGZkN2UzZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF0ZWwgT2xpdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MjczM2ViNC0xMDNkLTRiZTEtODQzZS02ZWI2ZGYzNWVjZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFka2lucyBUb3NzZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NmQ0ZTIyYi1mMTA3LTRiY2YtOTYyNS0zMmQzODdmY2I1MjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllvcmsgU2lsa1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg4Y2E2MDNlLWIyZTUtNDkxNi1iZWY1LWQ2YmJhMDMyMzVmNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2xhcmUgTWNjYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGIwZDcxN2YtYWU0Mi00NDkyLWIyZWQtMTA2OTEyZTJiNTMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdmlsYSBCYWtlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhiNWRkZDNkLWNjYTYtNGUwMS1hYzdmLTY1ZGM1NjgzMTkzM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVlcyBHb3JjenljYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhkODFiMTkwLWQzYjgtNGNkOS1iY2VjLTBlNTlmZGQ3ZjJiY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxiZXJ0IFN0aW5rXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGYxMWFkNTgtZTBiOS00NjVjLTk0NDItZjQ2OTkxMjc0NTU3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbW9zIE1lbG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTRkNzcyYzctMDI1NC00ZjA4LTgxNGMtZjZmYzU4ZmNmYjliXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGbGV0Y2hlciBQZWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTRmMzBmMjEtZjg4OS00YTJlLTliOTQtODE4NDc1YmIxY2EwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaXJrbGFuZCBTb2JyZW1lc2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NzMzMzRhYS00NmQ4LTQ0MTUtOTEyYi1hNWUyNjdmNzUyOWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZlbnJ5IE1hcmxvd1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3Mzg3NTgwLTFmN2MtNDllYS1hOWU3LTQ0YmU4OTMyOTEzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXJuZWUgRmllc3RhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTdkZmMxZjYtYWM5NC00Y2RjLWIwZDUtMWNiOWY4OTg0YWE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcm9jayBGb3JiZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OTc2NmMxYi1jNTkwLTQyNjEtYjFiNy0zZTljN2ZjMzU2MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphc3BlciBCbGF0aGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWU3NWZmN2MtZmU5Yi00MjhiLWExYjYtZjllNmExNzQ4Yzg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLb2ZpIEdpbGRlaGF1c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExNjI4ZDk3LTE2Y2EtNGE3NS1iOGRmLTU2OWJhZTAyYmVmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNvdWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNjhlODJhYy03Mzc1LTQxNzYtYjc1NC02MTc1ZWE0N2RjYjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkd1YWRhbHVwZSBJbmNhcm5hdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhN2VkYmYxOS1jYWY2LTQ1ZGQtODNkNS00NjQ5NmM5OWFhODhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1c2ggVmFsZW56dWVsYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFjYTkwNjI1LTViZGUtNDQ4OS1iYzlmLWE3OTk2YTdiOWEzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9xdWlyeW4gUmF0b29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWQ1NmY3NDktZWU0OC00YTg1LTk4MjctODQ1NWFlYWZlMjc2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFcmluIEplc2F1bGVua29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZjZiM2VkYy1lZDUyLTRlZGMtYjBjOS0xNGUwYTVhZTBlZTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpdmVycyBDbGVtYm9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI1Yzk1ZGJhLTI2MjQtNDFiMC1hYWNkLWFjM2UxZTFmZTgyOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ290ZSBSb2RnZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjcyNjdhYmEtNjExNC00ZDUzLWE1MTktYmY2Yzk5ZjRlM2E5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTb3NhIEhheWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjc3ZGZmYWEtZTBmNS00MDhmLWI5ZjItMTg5NGVkMjZlNzQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUdWNrZXIgTGVubnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiN2NkYjkzYi02ZjlkLTQ2OGEtYWUwMC01NGNiYzMyNGVlODRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1c2xhbiBEdXJhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkODc3OGU1LTAyZTgtNGQxZi05YzMxLTdiNjM5NDJjYzU3MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2VsbCBCYXJhamFzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmZkOWZmNTItOWJmNi00YWFmLWE4NTktZDMwOGQ4ZjI5NjE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEZWNsYW4gU3V6YW5uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwNzMyZTM2LTM3MzEtNGYxYS1hYmRjLWRhYTk1NjNiNjUwNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFnb21pIE1jZGFuaWVsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzQ5NTFjYWUtMGI0Ny00NjhiLWEzYWMtMzkwY2M4ZTlmZDA1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaW1teSBWaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzRkZWM5NWUtNzhhMS00ODQwLWIyMDktYjNiNTk3MTgxNTM0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaGFybGF0YW4gU2VhYnJpZ2h0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzhkZTUzYTQtZDkwZi00MTkyLTk1NWItY2VjMTczMmQ5MjBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeXJlZWsgQ2FpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM5MzM5ZjVlLTEwNDAtNDY0Mi1hNGE3LTA3Y2QzNmQyODFmOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUXVhbnR1bSBGbGFod2FoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzlhMjJmYTQtMTcyMS00ZWVmLWExYTYtNjIwY2RmN2QzNzdmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb3Njb2UgU3VuZGFlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2MxMTM0MzItNWY5Yi00NmY4LTk3NDUtMDlmOTk5ZDUxODAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSZWdnaWUgQ2FuYmVycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYzkzM2I3OS05MjE4LTQ2OTMtODE3Mi1mMjNkNGVhY2NkZjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoZXQgVGFrYWhhc2hpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2UwYTE1NmItYmE3Yi00MzEzLThmZWEtNzU4MDdiNGJjNzdmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25yYWQgVHdlbHZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2U1ODQxNWYtNGU2Mi00N2UyLWEyYzktNGQ2YTg1OTYxZTFlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY2huZWlkZXIgQmxhbmNvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDBkYWZkNGUtZmNhMi00ZDljLWFjY2MtZDY1Njc4ZTc1ODlmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWxuZXIgUm9sc2VudGhhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4NmY4MzZlLTRlZGYtNGRiZC05NzQzLTE0ZjMwNDYxZWUxNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFuY2UgU2Vyb3RvbmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDg3NDJkNjgtOGZjZS00ZDUyLTlhNDktZjRlMzNiZDJhNmZjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPcnRpeiBNb3JzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRhYzJmZDU1LTU2ODYtNDY1Zi1hMWI2LTZmYmVkMGI0MTdjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVzc28gU2x1Z2dlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRiNTMyMTFjLWY4NDEtNGYzMy1hY2NmLTBjM2UxNjc4ODlhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJhdmlzIEJlbmRpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkMGI0OGZlLTJkNDktNDM0NC04M2VkLTlmMDc3MGIzNzBhOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGlsbG1hbiBXYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZDYwNDRlZi1jNjM1LTRhZWQtOTdiZC1kMTgwNjg0MzJiOGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIll1c2VmIFB1ZGRsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMDgzOWI2Yy03MGZkLTQyMjgtYWUzYS02MGM3MTNkMDBkMDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR1Y2tlciBUaGFuZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUxNmMzZjI4LWVlY2QtNDU3MS1iZTFhLTYwNmJiYWMzNmIyYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgR2xvdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTNjMDY0MDUtMDU2NC00N2NlLWJiYmQtNTUyYmVlNGRkNjZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY3JhcCBXZWVrc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU0ZjFmMzU4LWVlMWYtNDQ2Ni04NjNlLWYzMjk3NjYyNzlkMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9uYW4gQ29tYnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlOTdlOWI3NC04MDExLTQ0MTUtYjIyYy04MjgyZjIyMjg2ODNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pa2FuIEhhbW1lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVjZjE5OTI1LWRjNTctNGI4OS1iMTE0LTkyM2Q1YTcxNGRiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFyZ2FyaXRvIEJpc2hvcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVjZmZhOWFhLTQ1YTYtNDk5Ny1hMGExLTg5OTI1ZDg5ZjNiNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmViZWRpYWggS3JhbmNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWUyOTAyMGYtMTk2NC00ZmNlLTgwZjQtMzVhNWU3ZWRmYjk1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPcnBoZXVzIFlhcmRzdGlja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVmYTczZGU0LWFmMTctNGY4OC05OWQ2LWQwZDY5ZWQxZDIwMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW50b25pbyBNY2NhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMDcxODg5Yy1mMTBmLTRkMmYtYTFkZC1jNWRkYTM0YjNlMmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppb24gRmFjZXB1bmNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjBiY2Y0YmItNzRiMy00MTJlLWE1NGMtMDRjMTJhZDI4ZWNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYWhuIEZveFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY0YTVkNzM0LTBhZGUtNDQxMC1hYmI2LWMwY2Q1YTdhMWMyNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWdhbiBIYXJyaXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY2MTdjMWVmLWQ2NzYtNDExOS04MzU5LWE1YzNhYzNiZWY1MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnVjayBMYXRlbmlnaHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNmIzOGU1Ni0wZDk4LTRlMDAtYTk2ZS0zNDVhYWFjMWU2NTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxldGljaWEgU255ZGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjdkZTAyMjctNjczOS00OGUyLWJiZDYtOWRjN2IyNDdhYjlhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGlmZiBQaWF6emFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOTY4NTMyYS1iZjA2LTQ3OGUtODllMC0zODU2YjdmNGIxMjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhbmllbCBCZW5lZGljdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MGRlMmIwNS1lMGQ0LTRkMzMtOTI5Ny05OTUxYjJiNWM5NTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFseXNzYSBIYXJyZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWFmMjM5YWUtN2UxMi00MmJlLTkxMjAtZmVmZjkwNDUzYzg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNZWx0b24gVGVsZXBob25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGIwMWNjM2YtYzU5Zi00ODZkLTljMDAtYjhhODI2MjRlNjIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaW9iaGFuIENoYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjYyYzQ5YzYtODMwMS00ODdkLTgzNTYtNzQ3MDIzZmE0NmE5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGV4YW5kcmlhIERyYWNhZW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmFlOGNiZmMtMjE1NS00NjQ3LTk5OTYtM2YyNTkxMDkxYmFmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGb3JyZXN0IEJvb2tiYWJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2QyOTNkNmMtM2EyMC00M2FiLWE4OTUtMmI3ZjFmMjg3NzlmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTbG9zaCBUcnVrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTM2MWUzODEtNjY1OC00ODhiLTgyMzYtZGRlNmEyNjQ1NTRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZdXJ0cyBCdXR0ZXJjdXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNWFkYzg0Yy04MGI4LTQ5ZTQtOTk2Mi04YjRhZGU5OWE5MjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpY2hhcmRzb24gVHVycXVvaXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTFmMjVlYWUtNDY1Zi00M2NjLTkzNjYtZjE5YWRkYzgwM2JjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdWZmaWFuIEFwcGxlc2F1Y2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzM2ZiZmUyMy0zN2JkLTRlMzctYTQ4MS1hODdlYWRiODE5MmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldoaXQgU3RlYWtrbmlmZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI1ZjNhNjdjLTRlZDUtNDViNi05NGIxLWNlNDY4ZDNlYWQyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG9iYnMgQ2FpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzZDUxOGI5LWRjNjgtNDkwMi1iNjhjLTAwMjJjZWIyNWFhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVuZHJpY2tzIFJhbmdlbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ2YzY5ZDJkLTkzNDQtNGIxOS04NWE0LTZjZmNiYWVhZDVkMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9zaHVhIFdhdHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjViOTcyN2Y3LTZhMjAtNDdkMi05M2Q5LTc3OWYwYTg1YzRlZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VubmVkeSBBbHN0b3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTRkODg3NzEtN2E5Ni00OGFhLWJhNTktMDdiYWUxNzMzZTk2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZWJhc3RpYW4gVGVsZXBob25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjE3NWNkYTAtYTQyNy00MGZkLWI0OTctMzQ3ZWRjYzFjZDYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3Rib3ggU2F0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM0MjY3NjMyLThjMzItNGE4Yi1iNWU2LWNlMTU2OGJiMDYzOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3VudGhlciBPJ0JyaWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTBjNmU2Y2EtNzdmYy00MmI3LTk0ZDgtZDhhZmQ2ZDI5OWU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWtpIFNhbnRhbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYTQwZDZlYS1lMjRiLTQ0MjItOWRmMS0wNjQzYWIyMDJjNWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvb2xuYW1lIEdhbHZhbmljXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODU1Nzc1YzEtMjY2Zi00MGY2LWIwN2ItM2E2N2NjZGY4NTUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaWMgV2lua2xlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzMzA2N2ZkLWMyYjQtNDA0NS1hOWE0LWU4N2E4ZDAzMzJkMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlndWVsIEphbWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjczMDA5YzUtMmVkZS00ZGM0LWI5NmQtODRiYTkzYzhhNDI5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaG9tYXMgS2lyYnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMzg2OTRiNy02MjU2LTQ3MjQtODZiNi0zODg0Mjk5YTVkOWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBvbGthRG90IFBhdHRlcnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI0NTA1YzQ4LWZjNzUtNGY5ZS04NDE5LTQyYjI4ZGNjNTI3M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ViYXN0aWFuIFRvd25zZW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGNkMDZhYmYtYmUxMC00YTM1LWEzYWItMWE0MDhhMzI5MTQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHbG9yaWEgQnVnc25heFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM4M2ExM2Y2LWVlNjYtNGIxYy05NzQ3LWZhYTY3Mzk1YTZmMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmkgRGVsYWNydXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMGQ3YjhmZS1iYWQ4LTQ4MWYtOTc4ZS1jYjY1OTMwNGVkNDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFkYWxiZXJ0byBUb3NzZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlY2I4ZDJmNS00ZmY1LTQ4OTAtOTY5My01NjU0ZTAwMDU1ZjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlllb25nLUhvIEJlbml0ZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MTNiM2RkYi1kOTMzLTQ1NjctYTYwZS02ZDE1NzQ4MDIzOWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldpbm5pZSBNY2NhbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NzI5MDM3MC02NzIzLTRkMzMtOTI5ZS1iNGZjMTkwZTZhOWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vb25leSBEb2N0b3IgSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZWFjN2ZkOS0wZDE5LTRiZjQtYTAxMy05OTRhY2MwYzQwYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1dHRvbiBCaXNob3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNjQ3Mzg4ZC1mYzU5LTRjMWItOTBkMy04YzE4MjZlMDc3NzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYW1iZXJzIFNpbW1vbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MDAyNmE5ZC1mYzlhLTRmNWEtOTRmZC0yMjI1Mzk4ZmEzZGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyaWdodCBaaW1tZXJtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZWNmNjE5MC1mODY5LTQyMWEtYjMzOS0yOTE5NWQzMGQzN2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1jQmFzZWJhbGwgQ2xlbWJvbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZGNmNjkwMi02MzJmLTQ4YzUtOTM2YS03Y2Y4ODgwMmI5M2FcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhcmtlciBQYXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjljODEzMDA4LWIyYTktNDI1Ny04MGU3LWE3MDljNjcxODlmZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm90dGxlcyBTdWxqYWtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZTFmZDc4NC05OWQ1LTQxYzEtYTZjNS02Yjk0N2NlYzY3MTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlZlbGFzcXVleiBNZWFkb3dzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDUxZjFmZTgtNGFiOC00MTFlLWI4MzYtNWJiYTkyOTg0ZDMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIaXJvdG8gQ2VybmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYjFjYjhhMi05ZWJhLTRmY2UtODVjZi01ZDk5N2VjNDU3MTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklzYWFjIFJ1YmJlcm1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE1ZDNhODQ0LWRmNmItNDE5My1hOGY1LTlhYjEyOTMxMmQ4ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ViYXN0aWFuIFdvb2RtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2OTE5NjI5Ni1mNjUyLTQyZmYtYjJjYS0wZDliNTBiZDliN2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvc2h1YSBCdXR0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmFkMDZiMTktNDJhMC00N2U1LTgyZDctNmU2NmQ0YWRjOWExXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUYWQgU2VldGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZjMyZWI0OC00ODY2LTQ5ZDAtYWU1OC05YzQ5ODJlMDExNDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZpdHpnZXJhbGQgTWFzc2V5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjRiMDU1ZDEtYjY5MS00ZTBjLTg1ODMtZmMwOGJhNjYzODQ2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGVvZG9yZSBQYXNzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZWJhYzc0Ni02Njg1LTRkMGYtOGU4NC02YjIxMjk5YjUxNjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlcmN1bGVzIEFsaWdoaWVyaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcwMDdjYmQzLTdjN2ItNDRmZC05ZDZiLTM5M2U4MmIxYzA2ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFmYWVsIERhdmlkc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIyZDRjMDZkLTI2YzItNDAzMS1hZTdmLWZkMGVlYjkyZjU3ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9ycmlzIEZpcmVzdGFyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzVmOWQ4NzQtNWU2OS00MzhkLTkwMGQtYTNmY2IxZDQyOWIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb3NlcyBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRhOTVkOWQ4LTNkY2MtNDg4ZC1iMWNiLTE5NjkwMjcxYWU0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbmtpZSBIYW1ib25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzUwYTdiYTktZTU5NS00MGJlLTkzZTUtNDAyMWYxZjk0NjBkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZW5ueSBDcnVtYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0OGNlOGE4LTE5Y2QtNGY4MS1iODRmLTg4Y2NlMDJjNDdiY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmxhdHRlcnkgTWNLaW5sZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZTZkNGZhOS1mOTMwLTQ3YmQtOTcxYS1kZDU0YTNjZjdkYjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhXFx1MDBmYWwgTGVhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRmN2Q3NDkwLTcyODEtNGY4Zi1iNjJlLTM3ZTk5YTdjNDZhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5uaWUgUm9sYW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTJmMzk4MTUtNTI5MS00ZGNmLWJhMTktOTdkY2YwYzAxNWU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGlqbiBTdHJvbmdib2R5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2MxMTk2M2ItYTA1Yi00NzdiLWIxNTQtOTExZGMzMTk2MGRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQdWRnZSBOYWthbW90b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRiZGE2NTg0LTZjMjEtNDE4NS04ODk1LTQ3ZDA3ZThhZDBjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxkb24gQW50aG9ueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwYTJmMDE1LTlkNDAtNDI2Yi1hNGY2LWI5OTExYmEzYWRkOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF1bCBCYXJuZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyY2EwYzc5MC1lMWQ1LTRhMTQtYWIzYy1lOTI0MWM4N2ZjMjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk11cnJheSBQb255XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzg2YjVhZGQtNmM5YS00MGUwLWFhNDMtZTRmZDdkZDRmMmM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTb3NhIEVsZnRvd2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzBhNDU4ZWQtMjVjYS00ZmY4LTk3ZmMtMjFjYmY1OGYyYzJhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmV2aW5vIE1lcnJpdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZDY4ZDNhNi03ZmJjLTQ0NWQtOTBmMS05NzBjOTU1ZTMyZjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pZ3VlbCBXaGVlbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmI5ZjljMjUtNDNlYy00ZjBiLTk5MzctYTVhYTIzYmUwZDllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYXdyZW5jZSBIb3JuZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc3MzcxMmY2LWQ3NmQtNGNhYS04YTliLTU2ZmUxZDFhNWE2OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmF0aGEgS2F0aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJlMzVjYWJhLWIxNmEtNGUwZC1iOTI3LTRkYTg1N2Y0Y2RiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhc2llciBTaG11cm1nbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmZjVhMzdkOS1hNmRkLTQ5YWEtYjZmYi1iOTM1ZmQ2NzA4MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1bm4gS2V5ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMzA5NzIwMC0wZDQ4LTQyMzYtYTNkMi04YmRiMTUzYWE4ZjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlbm5ldHQgQnJvd25pbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YWNjOTdmYS00YmYxLTQ5ZjYtYmI5My1mYjUyNTEzYTAxNWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplc3R5IFlhYm9pXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTM1ZjRlNjctYTU0Yi00MjdhLTljYTEtMTI5NmQ3Mzg3ODc2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYW5kcyBTY29yZXNidXJnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTMxMWMwODktMGRmNC00NmJkLTlmNWQtOGM0NWM3ZWI1YWUyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2xhdWdobGluIFNjb3JwbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDE5NDlkNGQtYjE1MS00ZjQ2LThiZjctNzMxMTlhNDhmYWM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb24gTW9uc3RlcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YmE3ZTFmZi00YzZkLTQ5NjMtOGUwZi03MDk2ZDE0ZjRiMTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplbm5hIE1hbGRvbmFkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY5NjdkMDY0LTBlYWYtNDQ0NS1iMjI1LWRhZWQ3MDBlMDQ0YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2VzbGV5IER1ZGxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3Y2E4ZjNmLTJmZGMtNDc3Yi04NGY0LTE1N2YyODAyZTliNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVhY2ggSGVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTBlYTVkNTAtZWM4OC00MGEwLWFiNTMtYzZlMTFjYzFlNDc5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaWNob2xhcyBWaW5jZW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzgzZjBmZTAtNDRkMS00MzQyLTgxZTgtOTQ0YmIzOGY4ZTIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5nbGV5IFdoZWVsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNDRhOGIyNy04NWMxLTQ0ZGUtYjEyOS0xYjBmNjBiY2I5OWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bGFzIEpvbmJvaXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMTc3Mjc5OC04ZDQ1LTQ3Y2ItYmJiNS01MTU4MzJjNWI1OTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvcHMgQ2hlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA0NjUxZDA1LTQ0ZWYtNDBjMS1hYmQzLTRkMGMxNGI2ODQ1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW1pbGlhIFN0cmVldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA2MWIyMDlhLTljZGEtNDRlOC04OGNlLTZhNGEzNzI1MTk3MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNkb3dlbGwgS2FyaW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwY2M1YmQzOS1lOTBkLTQyZjktOWRkOC03ZTcwM2YzMTY0MzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbiBFbGxpb3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTAzZDc4OGQtMmM3NC00ZWRjLTkyOTktMmExMzg0YTI3NzZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaXQgUmF0b29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTEzZjQ3YjItMzExMS00YWJiLWIyNWUtMThmNzg4OWUyZDQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGtpbnMgU3dhZ2dlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzOGZjY2MzLWU2NmYtNGIwNy04MzI3LWQ0YjZmMzcyZjY1NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3NjYXIgVmF1Z2hhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFhYmU3YTE0LTI2MDgtNDg1Yy1hZjEwLTY5Y2YwMTA3YzJhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9ybWFuIE11Z2dpbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNGY2ODI5ZS03YmI0LTRlMWUtOGI1OS1hMDc1MTQ2NTdlNzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpbmcgV2VhdGhlcm1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI1NTgxYzQzLWY4ZGEtNDY1Ny05ZTk2LWU3MDRkZjBhODg3OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJlZW1pdW0gRmFpcndvb2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNjUwM2YyYy02MzFhLTQ1YmEtOTA1ZS1hYTE0NDcxYzhiOGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk55eCBTbmFwamF3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjkxOGJlMDEtZTFhYS00ZGU2LTgyMzktZmU2MmYzNzc2OWRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdmkgSm9uZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyY2FkYzI4Yy04OGE1LTRlMjUtYTZlYi1jZGFiNjBkZDQ0NmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsaWphaCBCb29rYmFieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJkOTVkNDFjLWZmNTQtNGZhMS04OWEwLTc2Yjg0ZGQ4ZmUyYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW1ibGVtIFdhcmhvcnNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzI1NTFlMjgtM2E0MC00N2FlLWFlZDEtZmY1YmM2NmJlODc5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXRoIFZlbGF6cXVlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM1YTk5ZmYzLWNmOWUtNDY4Mi1iYTZlLTBhNjA0NGFhM2E0YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NydWZmcyBSaXNzZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNzA2MTM4MC1hYzk1LTQwMTgtODU0ZS1jMzA4MDczOTQ1ZTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhcnRsZWJ5IFpoaXZhZ29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzODIyOTkwYi01ZWUwLTQwNGEtOWUwNi04NDZiYjI5ZjNmYWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbnR1cyBIb2pvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2E5NmQ3NmEtYzUwOC00NWEwLTk0YTAtOGY2NGNkNmJlZWI0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaXhwYWNrIERvZ3dhbGtlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNlMDA4ZjYwLTY4NDItNDJlNy1iMTI1LWI4OGM3ZTVjMWE5NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVib3JpYWggV2lsc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDhkMDdhNjQtOWVhMi00YjllLTgwNDYtNjkwMWFkMzk4NDkwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEdWxjZSBTY2hvZmllbGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YjczMzY3Zi1iMmJiLTRkZjYtYjJlYi0yYTBkZDM3M2VlYWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyaXN0aW4gQ3JhbmtpdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxOTg1NTE2LTUwMzMtNGFiOC1hMTg1LTdiZGEwNzgyOWJkYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGhhbmllIFNjaG1pdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NGJjN2IyMy00OWE5LTRmMWQtYjYwZi05YzNjZjk3NTRiNjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNsb3ZlIE1haGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjM1ODBiZDctNjEzOC00NzFjLTgyYTUtYmM5ZDI5ZmZkMDZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb2lyYSBCYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjRmNGNkNzUtMGMxZS00MmNmLTlmZjAtZTQxYzQ3NTZmMjJhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcmV5IEFsdmFyYWRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjU5OGU0MGEtZDc2ZC00MTNmLWFkMDYtYWM0ODcyODc1YmRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYW5pZWwgTWVuZG96YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY4NDYyYmZhLTkwMDYtNDYzNy04ODMwLTJlNzg0MGQ5MDg5YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFya2VyIEhvcnNlbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmNhYTgxODAtZTE3OC00ZjhiLTg2NWMtZjFhZjQ3MTE5YmMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUYWQgQmxvcnRsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZDkwMDFmZi1iYTlmLTQwYzAtOTMxNS03OWZlYmE1NDFiNjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5lcGV0YSBDaGVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzEwNTQxZjQtYmI4OS00MTM0LTg5NzMtOTU4YzgyYjI5YTQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaWtpIEp1bmlvciBKclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcyZmI3OTdhLWFlYTgtNDcyMy1iN2U0LWQxMTBjMzAxMzIwZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVyc2VwaG9uZSBTcGxvdHRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdiNzc5OTQ3LTQ2ZWYtNGI3Ny1iZTM3LTk2MmQ2MDg3NTY0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9sYXN0bmFtZSBTb2tvbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgxYjI1YjE2LTMzNzAtNGViMC05ZDFiLTZkNjMwMTk0YzY4MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVib3JpYWggV2hpc2tleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwYzhiZTg5LTg5NmQtNDA0Yy05NDVlLWMxMzVkMDYzYTc0ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFtZXMgQm95XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTQxNmRmYTMtMDVlOS00NmYzLWIxZGYtNGZhNjcwM2U5YjViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEcm9zb3BoaWxhIEZhc2hpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NDg0NGZhZC05NTE5LTRjMTQtOGFiMy1kMzg2MDZhN2JiNDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbmRpdGlvbmFsIFl1bmllc2t5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOThmMjZhMjUtOTA1Zi00ODUwLTg5NjAtYjc0MWIwYzU4M2E0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdHUgTWNkYW5pZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZmJhYjRkZi0zNWRkLTQ5OTEtOWU4Mi05NjM1YWI3NTZiMGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvY2lvIENhc3RlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExYjU1YzVmLTZkMDEtNGNhMS05NzZhLTVjZGZlMThkMTk5Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmlsbHVwIEtpZGRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTVhMDJhNGItNzJhMi00ZWVmLTgwMmMtMTRhMTk2NGUwZGFlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdXNhbmFuYW5hIFBvcnRtYW50ZWF1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYThlNzU3YzYtZTI5OS00YTJlLWEzNzAtNGY3YzNkYTk4YmQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZW5kcmlja3MgTGVubnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOTM4ZjU4Ni1mNWMxLTRhMzUtOWU3Zi04ZWFhYjZkZTY3YTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphc3BlciBEZXN0aW55XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTk4OTE3YmMtZTlkZi00YjBlLWJiZGUtY2FhNjE2OGFhM2Q3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZW5raW5zIEluZ3JhbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFhNmMyNjYyLTc1ZjgtNDUwNi1hYTA2LTlhMDk5MzMxMzIxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWl6YWJldGggRWxsaW90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFhN2FjOWNiLWU5ZGItNDMxMy05OTQxLTlmMzQzMTcyOGRjZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF0dGVvIENhc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiOTNmNGMzMi02NGU0LTQ0NjEtYjcwOC0wNWY2ZjdmNmJiYzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF0bWEgV2lsbG93dHJlZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM3NzFhYmFiLWY0NjgtNDZlOS1iYWM1LTQzZGI0YzViNDEwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FkZSBIb3dlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2NkNjA2OGItMjczNS00MDcyLWJmZTUtNTcxYTVkNTdjMjg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFcGhyYWltIExhZGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZDQxN2Y4YS1jZTAxLTRhYjItOTIxZC00MmUyZTQ0NWJiZTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVpemFiZXRoIEd1ZXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ5YTA3MmY1LTFjYmItNDVjZS04N2ZiLWIxMzhlNGQ4Zjc2OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbmNpc2NvIE9iamVjdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRlNjdiNTg1LTliZjQtNGU0OS1iNDEwLTEwMTQ4M2NhMmZiY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2hhcXVpbGxlIFN1bnNoaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGZkNWNjYmItOTBlZC00YmZlLTgzZTAtZGFlOWNjNzYzZjEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPd2VuIFBpY2tsZXN0ZWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTNlMWQxOTAtMmI5NC00MGMwLThlODgtYmFhM2ZkMTk4ZDBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaGFtYmVycyBLZW5uZWR5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTg2NTJkYjAtYzY3YS00YzhhLTlhY2MtMjk1MWNmNDAwY2QwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYXJyZW4gQ2hpbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlOTcyOTg0Yy0yODk1LTQ1MWMtYjUxOC1mMDZhMGQ4YmQzNzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlY2tlciBTb2xpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFiYTcxNWYyLWNhYTMtNDRjMC05MTE4LWIwNDVlYTcwMmEzNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSnVhbiBSYW5nZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDhkNThiNi1mMzdmLTQ4ZTYtOTkxOS04ZTE0ZWM5MWY5MmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvc1xcdTAwZTkgSGFsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDU0OWJmZS1iMzk1LTRkYzAtODU0Ni01YzA0YzA4ZTI0YTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbSBTb2xpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBmZTg5NmUxLTEwOGMtNGNlOS05N2JlLTM0NzBkZGU3M2MyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJ5YW5heWFoIENoYW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2Q0NTQ1ZWQtNjIxNy00ZDdhLTljNGEtMjA5MjY1ZWI2NDA0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaWFuYSBDYXNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzBjY2ZmMWUtNmI1My00MGUyLTg4NDQtMGEyODYyMWNiMzNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb29keSBDb29rYm9va1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRlNmFkMWExLTdjNzEtNDlkZS04YmQ1LWMyODY3MTJmYWY5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3V0dG9uIFBpY2tsZXN0ZWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTk4MTJhOGUtNjdjNC00MzRjLTg1Y2ItNmRkZjc4NWNhZGYyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdWd1c3RhIENoYWR3ZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDc0NGY1MzQtMjM1Mi00NzJiLTllNDItY2Q5MWZhNTQwZjFiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUeWxlciBWaW9sZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0M2JmNmE2ZC1jYzAzLTRiY2YtOTM4ZC02MjBlMTg1NDMzZTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pZ3VlbCBKYXZpZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMDcxYTcxMy1hNmExLTRiNGMtYmIzZi00NWQ5ZmJhN2EwOGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vcmEgUGVyZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMWE3YzEzZi04ZTc4LTRkMmUtOWNhZS1lYmYzYTVmY2RiNWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsaWphaCBCYXRlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhZmIzMGMxLTFiMTItNDY2YS05NjhhLTVhOWEyMTQ1OGM3ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGlja2Vyc29uIEdyZWF0bmVzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMwNjRjN2Q2LTkxY2MtNGMyYS1hNDMzLTFjZTFhYWJjMWFkNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9yZ2UgSXRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmQ5ZDFkNmUtNzgyMi00YWQ5LWJhYzQtODliOGFmZDhhNjMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEZXJyaWNrIEtydWVnZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwYzgzZTNiNi0zNjBlLTRiN2QtODVlMy1kOTA2NjMzYzljYTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlbmVsb3BlIE1hdGhld3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiODYyMzdiYi1hZGU2LTRiMWQtOTE5OS1hM2NjMzU0MTE4ZDlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkh1cmxleSBQYWNoZWNvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjQ4Y2NmM2QtZDVmNi00YjY5LTgzZDktNDAyMzBjYTkwOWNkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbnRvbmlvIFdhbGxhY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NzJmNTBjMC1lZjk4LTRkMDUtOTFkMC1kNjM1OWVlYzM5NDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJoeXMgVHJvbWJvbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMjY4YjM1Zi1iMTliLTRiMmYtOTBjNC04OWZiMzY0MDM2ODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdpdGEgQmlzY3VpdHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNGY5NTVmZS05Y2M5LTQ0ODItYTRkMi0wN2ZlMDMzYjU5ZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlphbmUgVmFwb3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNmNlZDYwNy03Zjk2LTQxZTctYThjZC1iNTAxZDExZDFhN2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vcnJvdyBXaWxzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwOTNhZjgyYy04NGFhLTRiZDYtYWQxYS00MDFmYWUxZmNlNDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsaWphaCBHbG92ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwOTZiYjliNS01ZWE4LTRkYTEtYTExMy01N2E1ZmM5ZTliNjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphc3BlciBKaS1FdW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMjhhMzNiOS1jODJmLTQwOGUtOWZhMy01MTYxZjVhM2UyOTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF5bWVyIEVnZ2xldG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTM2NzZhYjUtYWZiMy00NjUwLWFmMjMtYmNkZTEwMzdkMjViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYXNoaWVsbCBEcnVtc29sb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFkYjJmNjAyLTY0YjEtNGE1Yy04Njk3LTE5MzJjYzJjNmRmMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVtbXkgTWVsY29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWYxNTliYWItOTIzYS00ODExLWI2ZmEtMDJiZmRlNTA5MjVhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYU5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNzI3MjE1ZC0zNzE0LTQzOGQtYjFiYS0yZWQxNWVjNDgxYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbWluaWMgV29tYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYThiMzcxZi1kMmViLTRiZTctYjg5Zi1hZmYxMGVkYjQ0MTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZlbnJ5IFdvYmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmI5ZDZiNTAtM2NlMi00Y2IxLThjZDEtMmEwZmMwNTczM2UzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdG1hIEJsdWViZXJyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMwNTkyMWU4LTNmNGQtNGM5MS1hMjgwLWQ3YmYxYTQ0OWIwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVG9ydXMgTWNHaGVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzBmYTRiZjEtOGYzYi00NWRjLTlhYTMtNjUxMWU5OTgwNDBhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLYWogTXVycGh5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzJjOWJjZTYtNmU1Mi00MGZhLTlmNjQtMzYyOWIzZDAyNmE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSZW4gTW9yaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMzFkOTkxMC0wOTkxLTQwYzgtOTM0NS1hN2NkZGI3NDY1YzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJpc3RybyBTdWNjb3Rhc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNGUxYjY4My1lY2Q1LTQ3N2YtYjllMy1kZDRiY2E3NmRiNDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZXhhbmRyaWEgSGVzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM3ZWZlZjc4LTJkZjQtNGM3Ni04MDBjLTQzZDRmYWYwNzczN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVuaXggUmVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2UwZjdmNDgtNjc1Yi00ZjcyLWJiNDAtOGE4YzY3NmYwMDU0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYWxsdXAgTXVycGh5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTZlYmE2MzktZWE3My00NzRkLWJjZWUtZWM2OGMwNTI4YjAyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmtsZSBIYWxpZmF4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNThmY2E1ZmEtZTU1OS00ZjVlLWFjODctZGM5OWRkMTllNDEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdWxsaXZhbiBTZXB0ZW1iZXJpc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZmM0NzEzYy00NWUxLTQ1OTMtYTk2OC03ZGVmZWIwMGEwZDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlcmNpdmFsIEJlbmRpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYxYmJiZjM0LTk4YzEtNGJmNi1iZDBjLTU2YzE5MTk5YjM1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3F1aWQgR2FsdmFuaWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2OTVkYWYwMi0xMTNkLTRlNzYtYjgwMi0wODYyZGYxNmFmYmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhY2hlY28gV2Vla3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZTc0NGIyMS1jNGZhLTRmYTgtYjRlYS1lMGU5N2Y2OGRlZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhbmllbCBLb2NoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmY3MTY2N2ItNTlmMi00NmRmLWFkYWMtYTg4ODVhNGY2YWM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFcmlzIFN0cmVldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjczMjg5OWEzLTIwODItNGQ5Zi1iMWMyLTc0YzhiNzVlMTVmYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWluYXRvIEl0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc1NDFmYzRiLTdlNmItNDQ2YS1iNmEzLTc1NWRlNDZhMDAxOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUXVpbm5zIEplc3BlcnNlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc3YTQxYzI5LThhYmQtNDQ1Ni1iNmUwLWEwMzQyNTI3MDBkMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpcCBEZWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2QzODg4NDYtOGY0Yy00MDdmLWFhY2ItYjg0NGQyNTYxYzVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaXQgQWRhbXNlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdlMTYwZTlmLTJjNzktNGUwOC04Yjc2LWI4MTZkZTM4OGE5OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhvbWFzIE1hcnNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2U5MTBlODYtODRiNC00M2MzLWE2OGUtNjdiNjYxMmRkYmVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPdmlkIFNjaG9maWVsZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg0YTE3ZjQ4LTAzOTMtNDE2Ni04NjRhLWY3Y2QyNzU1NzcwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXJjaGVzIENhbmRsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg1MjEwN2I4LThjZjMtNGZiYi05N2Y5LTc2ZjczYmM0NzcwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTHVjeSBWYW5kZXJNYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODk5NzEyM2YtYjI0ZC00MzI2LTgwYzgtM2M4NjJmODBmNjIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb2huZGFuIE1jR2hlZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk4MjIwNzUzLTBhNzAtNGE0ZS04MDU4LTBhN2JjYjZmN2Q1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVuamFtaW4gTGluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWFiZTAyZmItMmI1YS00MzJmLWIwYWYtMTc2YmU2YmQ2MmNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYWdvbWkgTWVuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlmYzNjNmFlLTVlZDUtNDljZS1hNzViLTI1N2VjMTAyMmExNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmhvbWJ1cyBEcmFtYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE1ZTRlODZmLWQzYTgtNDI0YS05NzY4LTJhZGExN2E0ZTc0MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2lsbG93IEVnZ2J1cnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNzM0MjdiMy1lOTZhLTQxNTYtYTlhYi04NDRlZGM2OTZmZWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldlc2xleSBWb2RrYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFiYmQ1ZWM1LWExNWItNDIxYy1iMGM1LWNkODBkODkwNzM3M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmF0IEJhdHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNhMjZkOGNjLTg2NjgtNDhjOS1hMDYxLTI4ZjZmZGY1ZjQ0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9jIEFuaWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2UzZmI3MzYtZDIwZS00ZTJhLTg4Y2ItZTEzNjc4M2QzYTQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXZpZXIgSG93ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQyM2ExZjdlLTAwNzEtNDQ0ZS04MzYxLTZhZTAxZjEzMDM2ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWRyaWMgVG9zc2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDJmODI3YTUtMDEzMy00ZDk2LWI0MDMtODVhNWU1MGQ0OWUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb2JiaW5zIFNjaG1pdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYjNmZjZmMC0xMDQ1LTQyMjMtYjNhOC1hMDE2Y2E5ODdhZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk11cnBoeSBUaGliYXVsdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkNmJhN2YxLWE5N2EtNDM3NC1hM2E3LWIzNTk2ZTI4NmJiM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF0aGVvIFRhbmFrYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRmMzRkMTY4LTRkNmEtNDAzYy1hY2E1LTJiMWViZTkwNDQ0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9jIENhc2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZjk0YTMzNS0xNjc3LTQyMDAtYTIzZi1kNzk0Njg5YTU3MzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhbmdvbGluIFJ1aXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMGQ2NDI3MC02ZjVhLTRjMTAtOWIyMi1mOTFmOWQ0ZjI0MWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktldmVseW4gQ2xhbWJ1Y2tldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUxZTMzYWFiLWRmOGMtNGY1My1iMzBhLWNhMWNlYTlmMDQ2ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm95bmVyIFJ1Z3JhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU3ZWNmNjQ2LWU1ZTQtNDllZi1hMGUzLTEwYTc4ZTg3ZjVmNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2FsbHVwIENydWVsbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWFjMDBlYzktMzM3Ni00MjNjLTg2ODQtOTNkZDJjYmQ2ZWQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFZGRpZSBOYWthbW90b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVmZGE0MWMxLWViMDctNDViMy04YWQ1LTQyNGM2MzExNTExNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVmdXMgS2lkZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNTY2NTdkMy0zYmRjLTQ4NDAtYTIwYy05MWFjYTljYzM2MGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hbGlrIFJvbWF5bmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMGNhNDBhZi1hOGRmLTQ1MTktYWY5YS1iZWFmOTNmZmMxMjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsaSBXaW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMWJjYmVlYi0wZjYzLTQzYjQtOGNmYS1lYzAyYjQyYTFhNWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVudHJvcHkgSGFuZGNyYW1wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDFkM2VmODQtOGVjMi00MTE2LTlhN2ItNWY5NTRkZTJlYzk3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYXBweSBZb2lua3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMjg4YmJiMS1hOTk0LTQ1YzMtYmI4Zi0zMzFmZTI5NjA5MGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZWFscyBDaGFya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAzZDA2MTYzLTZmMDYtNDgxNy1hYmU1LTBkMTRjMzE1NDIzNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2FyY2lhIFRhYmJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDU0MTVjMGQtZGIzYi00NTVkLTlkMDYtNjg0YTM5NTA2Y2Y1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQaG9lYmUgQmxhc2Vzb25hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDY3MmE0YmUtN2UwMC00MDJjLWI4ZDYtMGI4MTNmNThiYTk2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXN0aWxsbyBMb2dhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA3YWM5MWU5LTAyNjktNGUyYy1hNjJkLWE4N2VmNjFlM2JiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWR1YXJkbyBQZXJlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4ODg4NGFmLWYzOGQtNDkxNC05ZDY3LWIzMTkyODc0ODFiNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGlhbSBQZXR0eVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA4OTJkYTZlLWM5ZDEtNDk0Zi04NGJjLTBjMWY4NzkwMThjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm9iIEUuIENhZ2F5YW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwOTRhZDlhMS1lMmM3LTQ5YTAtYWYxOC1kYTBlM2ViNjU2YmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVyaWNrc29uIFNhdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwYTZiNzVlYS1mZTY5LTQ0MDYtYmUyNC1hMTQ5Yzk0ZGFhM2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNlcmVuIE1vc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwYmQ1YTNlYy1lMTRjLTQ1YmYtODI4My03YmMxOTFhZTUzZTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXBoYW5pZSBEb25hbGRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZDUzMDBmNi0wOTY2LTQzMGYtOTAzZi1hNGMyMzM4YWJmMDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IERvdmVucGFydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBkYWYwNGZjLThkMGQtNDUxMy04ZTk4LTRmNjEwNjE2NDUzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVlIE1pc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZTI3ZGY1MS1hZDBjLTQ1NDYtYWNmNS05NmIzY2I0ZDc1MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNob3JieSBTcG9vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBmNjJjMjBjLTcyZDAtNGMxMi1hOWQ3LTMxMmVhM2QzYmNkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWJuZXIgV29vZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyNmZiMTI4LTdjNTMtNDViNS1hYzJiLTVkYmY5OTQzZDcxYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lnbXVuZCBDYXN0aWxsb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEyZjNhMThkLWNjNjMtNDgwZC1iMmFkLWYwZDg5YzFjNDU2MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlIE11cnBoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTMwMzJmMDctMTBiZi00OGViLWEyM2UtZjQxMTdkMjQ2ODY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTbmFjayBEZXZpYXRpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzI5ZjgzOS1mNzhiLTRhY2MtODVhYS02OWM2OTU4ZmE0M2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIElYXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTNjZmJhZGYtYjA0OC00YzRmLTkwM2QtZjliNTI2MTZiMTVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZW5uZXR0IEJvd2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTQ2YzYzNzYtOTM1My00NjY5LWEwZWQtNmU2MTUyMTlkMjkwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE0YmZhZDQzLTI2MzgtNDFlYy04OTY0LTgzNTFmMjJlOWM0ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFieSBTbGlkZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTRmZjVhMzYtYzM5Zi00OTEwLWFmZmItMmE5ZWEyOGUwOWIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZXggUG9ydGVudGlhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE1ODQwYzAxLWQ4ZWEtNDgyMy1hODAyLTliNjM1YzUxZWZhMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3BpdHMgU3Ryb25nYm9keVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE1ODU3NDA3LTJkNmItNDNmMS04NmM4LWI1NzRjODcyMDhmM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gVklcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNmE1OWY1Zi1lZjBmLTRhZGEtODY4Mi04OTFhZDU3MWEwYjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJveWZyaWVuZCBCZXJnZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNzM5MmJlMi03MzQ0LTQ4YTAtYjRkYi04YTA0MGE3ZmI1MzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhc2hlciBCYXJhamFzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTc1MGRlMzgtOGY1Zi00MjZhLTllMjMtMjg5OWExNWEyMDMxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLbGluZSBOaWdodG1hcmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxODc5OGI4Zi02MzkxLTRjYjItOGE1Zi02ZmI1NDBkNjQ2ZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vcnJvdyBEb3lsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE5YWYwZDY3LWM3M2ItNGVmMi1iYzg0LWU5MjNjMTMzNmRiNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JpdCBSYW1vc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFhNTM3NjhiLTFlYzEtNDY0Ni04NDE3LWRkNThiOTg0OWJkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFsbCBDbGFya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFhZWMyYzAxLWI3NjYtNDAxOC1hMjcxLTQxOWU1MzcxYmM4ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVzaCBJdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYzU1YWVkZi02ZTMxLTRmM2MtOWIxNy04YTg0YjdkMTVhMGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hbmNpIEdyYWNrbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxY2RlZDRlNy04MzAyLTQ5YjctYTY0Ni00MGEwNzY3YjY5NjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlcmN1bGVzIExpbmNlY3VtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWQ3YWY5M2UtNzkxMC00NWMzLTk3OTktNDE2NmEyN2E2ZDBiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGaXNoY2FrZSBDYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZTdiMDJiNy02OTgxLTQyN2EtYjI0OS04ZTliZDM1ZjM4ODJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vcmEgUmVkZGlja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFlOGIwOWJkLWZiZGQtNDQ0ZS1iZDdlLTEwMzI2YmQ1NzE1NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmxldGNoZXIgWWFtYW1vdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZjkzMDE0MC05ZmM2LTQyNDAtOWVmNi1lN2FjMDY1ZWFlZmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5lZXJpZSBNY0Nsb3VkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjAzOTViNDgtMjc5ZC00NGZmLWI1YmYtN2NmMjYyNGEyZDMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZHJpYW4gTWVsb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMDZiZDY0OS00ZjVmLTQ3MDctYWQ4NS05Mjc4NGJlNGViOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5ld3RvbiBVbmRlcmJ1Y2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMWQ1MjQ1NS02YzJjLTRlZTQtODY3My1hYjQ2YjRiOTI2YjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE93ZW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjMxMTBjMGYtMmNmOS00ZDljLWFiMmQtNjM0ZjJmMTg4NjdlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZW5uZWR5IE1laFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIzZTc4ZDkyLWVlMmQtNDk4YS1hOTljLWY0MGJjNGM1ZmU5OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5uaWUgV2lsbGlhbXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNGFkMjAwZC1hNDVmLTQyODYtYmZhNS00ODkwOWY5OGExZjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pY2hvbGFzIFN1bW1lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0Y2IzNWMxLWMyNGMtNDVjYS1hYzBiLWY5OWEyZTY1MGQ4OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHlyZWVrIFBldGVyc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjUzNzZiNTUtYmI2Zi00OGE3LTkzODEtN2I4MjEwODQyZmFkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbW1ldHQgSW50ZXJuZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNmYwMTMyNC05ZDFjLTQ3MGItOGVhYS0xYjliZmJjZDhiNjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5lcmQgSmFtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyN2ZhYTVhNy1kM2E4LTRkMmQtOGU2Mi00N2NmZWJhNzRmZjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwZWFycyBOb2xhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI5YmY1MTJhLWNkOGMtNGNlYi1iMjVhLWQ5NjMwMGMxODRiYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2FyY2lhIFNvdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyYWVlMzJmOS1hNWJjLTRmOTUtOTMyYy1jZjc0OTJkMDkzNzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvcnkgVGhpcnRlZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZDIyZjAyNi0yODczLTQxMGItYTQ1Zi0zYjFkYWM2NjVmZmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbmlhIEpvaG5zb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZDVhYzI3NC05NmZkLTQ3MWItODAyOC1mNGQ3YjQyZDgzMTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphc29uIERhdGFibGFzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMwYjcwNTNhLTdmNWYtNGUzYi05NjAwLTdiM2RhOGJhN2RjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnVjayBSYXR0bGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzBkYzA2NTItMjYwOC00OWJhLTg5MjktMzY0OTRmYzJiZDI5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYXRzb24gV2FyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMxZjgzYTg5LTQ0ZTMtNDdiNy04YzllLTBkZmRjZDhiZDMwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHlyZWVrIE9saXZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzMzZTNlMjAtNjQ0NS00ZWU0LWFmYzgtMmQ2YjU4NGE2M2VlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBWSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNGI1MTAzYS1mZjE0LTQ4ODktOTM1My0zZmQwZGUzZDA5YTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFhJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNTMxYzI4Mi1jYjQ4LTQzZGYtYjU0OS1jNTI3NjI5NmFhYTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9saXZlciBIZXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzVkNWI0M2YtODMyMi00NjY2LWFhYjEtZDQ2NmI0YTVhMzg4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3JkYW4gQm9vbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzN2JkYWZkZi1mMjEzLTQ3MTgtODIwMC1jMTIzZmNhMzlmZjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNsYW0gUm9zZW50aGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzk1NGJkZmEtOTMxZi00Nzg3LWI5YWMtZjQ0YjcyZmUwOWQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaWNob2xhcyBOb2xhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhZGIwMzlkLTA4NzUtNDRmNC05MTRmLTFlZjllZTRjMjEyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGF0dW0gQ3JpbWluYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2FmOTZhNmItODY2Yy00YjAzLWJjMTQtMDkwYWNmNmVjZWU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBeGVsIFRyb2xvbG9sXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2JlMmM3MzAtYjM1MS00M2Y3LWE4MzItYTUyOTRmZTg0NjhmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbWF5YSBKYWNrc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2JmODcxM2ItODg4Ni00ZmM0LTk4M2UtZTJjNzJiZWY3Yjk1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGVuIFNoZWxsZWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYzUzZmYxYy02NDM3LTQ5NjUtYTRhMi00ODliY2I5MWQzZjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyZWV6ZSBSZWdpY2lkZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkNGNjYjA5LTBlN2ItNDVhZS1iNTFkLTE5OWM5ZDIyMjc2M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gVklJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkYjAyNDIzLTkyYWYtNDg1Zi1iMzBmLTc4MjU2NzIxZGNjNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU29uIEplbnNlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkZDg1YzIwLWEyNTEtNDkwMy04YTNiLTFiOTY5NDFjMDdiN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVG90IEJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZGUxN2UyMS0xN2RiLTRhNmItYjdhYi0wYjJmM2MxNTRmNDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyZXdlciBWYXBvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNmMDhmOGNkLTY0MTgtNDQ3YS04NGQzLTIyYTk4MWM2OGYxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUG9sbGFyZCBCZWFyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNmMWFjMTZmLTAzYzQtNGEwZi04ZGFmLTZlNTRiYmUxMmMzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHJvc29waGlsYSBIb2pvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDAyOWVhNzUtZGE5MS00NjcyLTlmYTUtZWUzMmVjN2ZhNzEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXkgR3JheXNjYWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDBhNTFiN2YtMDAwNS00NTc3LThiZWYtODU5ZmMzNmYwNmQ5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBWXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDBkYjFiMGItNmQwNC00ODUxLWFkYWItZGQ2MzIwYWQyZWQ5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY3JhcCBNdXJwaHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MjA0YzJkMS1jYTQ4LTRhZjctYjgyNy1lOTk5MDdmMTJkNjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF4ZWwgQ2FyZGVuYXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0M2U0ZGUwMi1jYzIxLTQ0MTMtYmI4OC0xYzExMjhlZWMxNzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFyYnV0dXMgQm9uZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NDZhMzM2Ni0zZmUzLTQxYmItYmZkZC1kODcxN2YyMTUyYTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcmNvIEVzY29iYXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NTBlNjQ4My1kMTE2LTQxZDgtOTMzYi0xYjU0MWQ1ZjAwMjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVuZ2xhbmQgVm9vcmhlZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NTlmNzcwMC01MjFlLTQwZGEtOTQ4My00ZDExMTExOWQ2NTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbWZvcnQgTW9ucmVhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ3OGQ5MWVmLTFhNmQtNGJiMy05OTY1LTg3Y2RjYzRhZDhkYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9hZCBLaWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDhhMTBhZDYtNjc1OS00NjYxLTgwYmYtOWY5ZmUzOTMxNjJjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb3hldHRhIENvbXBhc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OTNhODNkZS02YmNmLTQxYTEtOTdkZC1jYzVlMTUwNTQ4YTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJveWZyaWVuZCBNb25yZWFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDk0MTk3NmUtMzFmYy00OWI1LTgwMWEtMThhYmUwNzIxNzhiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZWJhc3RpYW4gU3Vuc2hpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0OTU3ODI2Zi0wYzQ0LTQ2N2QtYjcxZi0yMTE4NTQ1MGY0NThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyaWVuZCBWb2lkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGExOTI3ZTctODhhYS00YjJjLWExODItN2VjMjQ3ZGMyNjQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEdW5iYXIgTWNMb3VkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGFhODQzYTQtYmFhMS00ZjM1LTg3NDgtNjNhYTgyYmQwZTAzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdXJlbGlhbm8gRG9sbGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGM1M2ZjZDgtZGYwMi00YTgwLTk5YzktNTE3MTA4NjNiYzdmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYXJyaWV0IEdpbGRlaGF1c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRjZDBhYzhmLTZjMmUtNGJmMS1hMjMyLWE1YWM2ZmQ0YTY3N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUHVnIE1lYXRicmlja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRlNjNjYjVkLTRmY2UtNDQxYi1iOWU0LWRjNmE0NjdjZjJmZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXhlbCBDYW1wYmVsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRmMzI4NTAyLWQzNDctNGQyYy04ZmFkLTZhZTU5NDMxZDc4MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGhlbnMgTGlnaHRuZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZmUyOGJjMS1mNjkwLTRhZDYtYWQwOS0xYjJlOTg0YmYzMGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNlbGwgTG9uZ2FybXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MDE1NGQ1Ni1jNThhLTQ2MWYtOTc2ZC1iMDZhNGFlNDY3ZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhcnRlciBPY29ubm9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTBhYWQ0NmQtYmU2MS00MjM2LWJiMGMtNmM2MTk4ZTAwYmUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZM2hpcnYgSGFmZ3kyNzM4cml2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTE0OWM5MTktNDhmZS00NWM2LWI3ZWUtYmI4ZTU4MjhhMDk1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGtpbnMgRGF2aXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MWM3MDYzNC1jNTBhLTQ3YTktYmMxMS02MGZhNzIzMjk4NzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW9kb3JlIEhvbmV5d2VsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxY2JhNDI5LTEzZTgtNDg3ZS05NTY4LTg0N2I3YjhiOWFjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29sbGlucyBNaW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTIwYjJhMTQtZWY2MC00ZWU4LTlmMzktYzdiZTEyOTcxZWYyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWNrd29vZHMgQnJva2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTI3YzFmNmUtYTdlNC00NDQ3LWE4MjQtNzAzYjY2MmJhZTRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNZWx0b24gQ2FtcGJlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NGM3MjRhZi1iMTYzLTQzMTktOTNjNy1mZGNhZmJiY2M5OTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNsZXZlIE1hdHN1eWFtYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU1NWIwYTA3LWEzZTAtNDFiYy1iM2RiLWNhOGY1MjA4NTdiY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT29wcyBBbGwgS2VlcGVyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU3YjQ4MjdiLTI2YjAtNDM4NC1hNDMxLTlmNjNmNzE1YmM1YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVyZWxpYW5vIENlcm5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTkxNWI3YmItZTUzMi00MDM2LTkwMDktNzlmMWU4MGMwZTI4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb3NhIEhvbGxvd2F5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWEzOWIyZGQtMjNjNC00YTZmLWE2NDUtOTliMGIxOTkyNTg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdHJpa2UsIExvb2tpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YjNmMGE0My00NWU3LTQ0ZTctOTQ5Ni01MTJjMjRjMDQwZjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJoeXMgUml2ZXJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWI1YmNjNmMtZDAxMS00OTBmLWIwODQtNmZkYzJjNTJmOTU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaW1iYSBEYXZpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVjYTdlODU0LWRjMDAtNDk1NS05MjM1LWQ3ZmNkNzMyZGRjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgUXVpdHRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVlM2IxZTZiLTZmZWYtNDU3Mi04MGM4LWY5NDc5MzM1ZWEzNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG9wcGVyIExvdmVsYWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjE5MmRhYWItMzMxOC00NGI1LTk1M2YtMTRkNjhjZGIyNzIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdXN0aW4gQWxzdG90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYyMTExYzQ5LTE1MjEtNGNhNy04Njc4LWNkNDVkYWNmMDg1OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFtYmkgUGVyZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MjgyMzA3My04NGI4LTQ2YzItODQ1MS0yOGZkMTBkZmYyNTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1ja2lubmV5IFZhdWdoYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2M2EzMTAzNS0yZTZkLTQ5MjItYTNmOS1mYTZlNjU5YjU0YWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vb2R5IFJvZHJpZ3VlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY0ZjU5ZDVmLTg3NDAtNGViZi05MWJkLWQ3Njk3YjU0MmE5ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVrZSBXYWxsYWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjUyNGU5ZTAtODI4YS00NmM0LTkzNWQtMGVlMmVkZWI3ZTlhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXJ0ZXIgVHVybmlwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjYyZjM0ZjAtYmQ3NC00OWE3LTg1MDYtNTBkNGRkMzMzYzRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFcmluIEJlYW5iYWdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NmNlYmJiZi05OTMzLTQzMjktOTI0YS03MmJkMzcxOGYzMjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbm5lZHkgQ2VuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY3NzE4MzYyLTk5OGMtNDAwYy05OGE2LTJlMzBjY2FhNzhmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gWElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjgzM2NhN2QtOTEwZS00OGY1LWIyNWQtMjg4NmNkYjA4ZDBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYW5kZXIgUGVybWFkZWF0aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZhODY5YjQwLWJlOTktNDUyMC04OWU1LWQzODJiMDdlNGEzY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFrZSBTd2luZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmIyNzIyYTYtYjM3MS00YTdlLThhZGYtNzI4ZGE2MTJhNDBjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZW5ueSBRdWlja3NpbHZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZiZDRjZjZlLWZlZmUtNDk5YS1hYTdhLTg5MGJjYzdiNTNmYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSWduZXVzIE1jZGFuaWVsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmMxYzA1MzktNDE2OC00OTc3LWJmMTctMjU3YmNiZmVjOTJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaHJvbWF0aWMgSnVtcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZlMzczZmNhLWI4YWItNDg0OC05ZGNjLTUwZTkyY2Q3MzJiN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29ucmFkIEJhdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmYzOWEyZjktNzZkNy00NGZkLThhNmQtMDBmODdkN2JiMDA0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWFjayBIb29rcmFjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcwODgzNTBjLTkwNWItNGFjMC1hOTgyLTY0MTkxZWNhZWNhYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2hlcmkgRnJpZGF5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzIxZmI5NDctNzU0OC00OWVhLThjYmUtNzcyMWIwZWQ0OWUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUYW1hcmEgTG9wZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MzEwYzMyZi04ZjMyLTQwZjItYjA4Ni01NDU1NWEyYzBlODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvbWluaWMgTWFyaWp1YW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzRiMDk3NGEtZjgyNy00OTM0LTlkZDAtMjAyMDcyOGJkNGNjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVhbGl4IEtyYW1lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc1MGM3ZDQ0LTc1N2EtNDMwYy05ZmEzLWQ0Y2EyMjExMTkzM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9zc3RpbiBBbmRhbnRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzVlODBlNDYtMjc2ZC00Mzg4LWJiNmEtZGE5MTI1YTBlOGFkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaWNlcm8gSG9tZXN0eWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzgxNWU4MmUtNWVhNC00Y2VmLWIyOGItNmQ4ZTA1ODE1YzUyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWFoIEplc2F1bGVua29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ODUzYWE4Yy1lODZkLTQ0ODMtOTI3ZC1jMWQxNGVhM2EzNGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR1Y2tlciBGbG9yZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3OTUxODM2Zi01ODFhLTQ5ZDUtYWUyZi0wNDljNmJjYzU3NWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFka2lucyBHd2lmZmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2FmZWRjZDgtODcwZC00NjU1LTk2NTktM2JkZmIyZTE3NzMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQaWVycmUgSGFsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZDQ1ZTk0Mi1hYzI4LTQxYjYtOGQ4OS01ZTRhNDQ1OTFjMTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNpbm5hIFRvYXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2YzNzliNzItZjRmMC00ZDhmLWI4OGItNjMyMTFjZjUwYmE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZXNcXHUwMGZhcyBSb2RyaWd1ZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZjNmMmU3NS05MDBlLTQwYjYtODQ2Yi1kYjU4NTU0MTQ5MGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvZ2luaWMgQnVyZ2VydG9lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdmNzA0MmRlLTdmYzEtNDVmOS1iN2M0LTkxNjlkMTQ1NDY1M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSEFORFNPTUUgU0NBUkZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MDBhYzYyNy0wMzM0LTQxZDUtOThkZi1jNTFhNDdlNDZhZWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNoYW5kcmEgQmxvcnRsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MDViYTQ4MC1kZjRkLTRmNTYtYTRjZi0wYjk5OTU5MTExYjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxldGljaWEgTG96YW5vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODJkNWU3OWQtZTEyNS00NDYwLWIxZmEtZDA0NmFkNzczOWUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaGFuZ2V1cCBMaXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MzFiMTEyMS1jYTE0LTRkYmItYWZlZS01NjY2MGJiMTFmMGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphbmEgQmVhdHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NDllMTNkYy02ZWIxLTQwYTgtYjU1Yy1kNGI0Y2QxNjBhYWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1c3RpY2UgVmFsZW56dWVsYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg2MDRlODYxLWQ3ODQtNDNmMC1iMGY4LTBkNDNlYTZmNzgxNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFuZGFsbCBNYXJpanVhbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4Nzk4MzAwNi1jOWM1LTQ1OWYtOGU3Yy1lN2VkY2JkOTAyZGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjaGlzbSBUaHJvbmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODljOGY2YmYtOTRhMi00ZTU2LTg0MTItYmRiMDE4MjUwOWE5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25jcmV0ZSBNYW5kaWJsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhhNGRjMmJiLWFjNWItNDc3NC04NmJmLWM3ZjhkMzAwMGE0YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGVldGggQmFuZGFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhjZmI3ZWU5LWNmYTQtNDQ1Yy04MzBlLTI3MjM3OTdmYTdiM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQm94cGxvdCBKb25lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhlMWVlZWI4LTFiODAtNDc4MS05ZDg1LWJkYTNiNThhNDVmNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFnaSBVcHBlcmN1dHNraVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhmMzU3YzljLTUyMWEtNDA2Mi1hNzcxLTJlNTQ3NzQ2YTE2NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2l0IEhvbmV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTA2YTU3MjgtNTQ1NC00NGEwLWFkZmUtZmQ4YmUxNWI4ZDliXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZWZmZXJzb24gRGVsYWNydXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MGNjMDIxMS1jZDA0LTRjYWMtYmRhYy02NDZjNzkyNzczZmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhc2UgTGFuY2FzdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTJmZjhlNDItZGNjYS00YTk0LWE4M2QtMjRkMjkwMGI4MTFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOZWJ1bGEgSG9sc3RlaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MzEzZTQxYy0zYmY3LTQzNmQtOGJkYy0wMTNkM2ExZWNkZWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbmRpZSBOZWxzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MzM3Mzg5Zi00MzAxLTRlMzAtYTEwOC00NjgwYzAyZWUxZmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFydGVtZXNpYSBUZWl4ZWlyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzNTAyZGIzLTg1ZmEtNDM5My1hY2FlLTJhNWZmMzk4MGRkZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9kcmlndWV6IFN1bnNoaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTM3YzFhMzctNGIwNS00ZGM1LWE4NmQtZDc1MjI2Zjg0OTBhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQaXBwaW4gQ2FycGVudGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTQ0ZDkzOWUtNjhiOC00MjU5LWI5Y2QtNDZiNGFjOTc4OWM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb2xseSBUYXBlZGVja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0NTk3NGM1LTE3ZDktNDNlNy05MmY2LWJhNDkwNjRiYmM1OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmF0ZXMgU2lsa1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0ZTFlMTYyLTlkMmUtNDQwNy04MDNhLTE5YmNlZTM2OTkzM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxnZWJyYSBHb2xkYmVyZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk2MGYwNDFhLWY3OTUtNDAwMS1iZDg4LTVkZGNmNThlZTUyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF5cmEgQnVja2xleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3ODZiMmM5LTEyMDUtNDcxOC1iMGY3LWZjMDAwY2U5MTEwNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2V2aW4gRHVkbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTc5ODFlODYtNGE0Mi00Zjg1LTg3ODMtOWYyOTgzM2MxOTJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYWl5YSBWaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTc5ZTUxMDUtY2JlOS00Zjk1LWFkMTMtY2UzMGMwN2YxZmQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3BzIFNsdW1wc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3ZWM1YTJmLWFjMWEtNGNkZS04NmI3LTg5N2MwMzBhMWZhOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxzdG9uIFdvb2RzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTgyMGYyYzUtZjlkYS00YTA3LWI2MTAtYzJkZDdiZWUyZWY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZWFudXQgQm9uZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk4YTk4MDE0LTk2MzYtNGVjZS1hNDZhLTQ2MjViNDdjNjVkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2lraSBGYW1pbGlhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTllN2RlNzUtZDJiOC00MzMwLWI4OTctYTczMzQ3MDhhZmY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaW5uaWUgTG9zZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YWU3Y2VjNC0xZGYwLTQ5MjItOGY3YS1mM2I5OTZkMDMxZTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpcXHUwMGViZmYgRGVTaGllbGRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWJhMzYxYTEtMTZkNS00ZjMwLWI1OTAtZmM0ZmMyZmI1M2QyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb29uZXkgRG9jdG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWMxNGNiMGMtNzlhYi00Yjk0LTlhZTMtYzhkZTFjNTg3ZTU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHTVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjllMzlmODA4LWZmNzAtNDIzMi04YThjLTI4MDg1MjI3MTU1ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnVnY2F0Y2hlciBSb2xkYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMDgzMjQ2Yi0zNWY0LTRkYWQtOGIwNy04YjI4MDQ3ZTA4MjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1cmEgSXJ2aW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTBlNzQ0NWYtMmI5My00Y2E3LWE2OWQtZmYzMjU5MzcwMGVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNdW1teSBDYW50YnVyblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExMTI0MmFlLTkzNmEtNDZiNC05MTAxLWJlMmNhYmFmZWVkNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxlY3RyaWMgS2V0dGxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTEzZjY3ZDUtMjJlYi00ZWU5LThiNjctODkzYjIxYWNkODdiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDZWRyaXNzaW1vIFN1Z2FyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTI0ODM5MjUtNjk3Zi00NjhmLTkzMWMtYmNkMDA3MTM5NGU1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaW1teSBNYW5jb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEyNWFjZjNhLTZkMmMtNDQ4NS05NzViLWEwNDU0OWQwODRmM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFzb24gTS4gTWNNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE3YjBiZWYzLWVlM2MtNDJkNC05ZTZkLTY4M2NkOWY1ZWQ4NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGFydXRhIEJ5cmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhODUzMGJlNS04OTIzLTRmNzQtOTY3NS1iZjhhMWE4Zjc4NzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1vaGFtbWVkIFBpY2tsZXN0ZWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWFkYmU0ODYtNmJmMi00MmJkLTg0MTgtZGJkMWFhMzZlZGQ5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUdXJpbmcgQ2FweWJhcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYjA0YmEyMi02OWIxLTQzY2EtYTMwNy0zNDVlNDYwZDc5NWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vbmUgQmluYXJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWI5YjI1OTItYTY0YS00OTEzLWJmNmMtM2FlNWJkNWQyNmE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWF1IEh1ZXJ0YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFiYTA3YzI4LWU0MTAtNDcxMC1iNDI2LWIzZWJhMzk2OTMwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGF1bnQgV2VkbmVzZGF5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWMxMzI2NGYtYWY0ZS00NDIzLTllNGEtNDM0OTlhMGY4MjI3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOdW1iZXIgQ3J1bmNoZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYzU3Y2YyOC01NTZmLTQ3YWYtOTE1NC02YmNlYTJhY2U5ZmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJleSBXb290ZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYzVlNGNlMi1kZTZmLTQwOGItOTkxMC1hNTJiYjFkMWE5NzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllhbXMgUm9sc2VudGhhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFmNjY5NmQ0LWQyOGUtNDRhNy1iNmZkLWE1NDJkZmZhNzM2NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZmM5MDM5OC1iODkxLTRjZGYtOWRlYS1hZjhhM2E3OWQ3OTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllhem1pbiBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFmZGJkODM3LTdmYzgtNGM5Ny1hYzMxLTYzNjk1MGMyYjNlNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmxhc2ViYWxsIFN1cmdlb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMDA0NTU1OS04MWNmLTQyZTAtODdkNC0zYmJiZDNjZTBiY2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1ham9yIEFyY2FuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIwMTlmYjJiLTlmNGItNGRlYi1iZjc4LTZiZWUyZjE2ZDk4ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2xvcmlhIEJlbnRsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMDU2YTgyNS1iNjI5LTQ4NTYtODU2Yi01M2ExNWFkMzRhY2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlbm5ldHQgVGFrYWhhc2hpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjM1N2ZiZjQtNTMzZS00ZjJjLTg2MTYtYTU3NmU5OTU0Nzk1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXQgSW5uaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjM5MGIyOGMtZGY5Ni00NDNlLWI4MWYtZjAxMDRiZDM3ODYwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLYXJhdG8gUmFuZ2VsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjNjOGMwYTAtMjBhMC00YzVkLWEzOTEtMzRiOTkwMzg2OTNjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYW5kYSBNb3RoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjNkNDhhODQtYWRjNi00NGY0LWJiNjktNTFkMmM2YjEyMDNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBYSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI2OWFhMjZmLTcxZjctNGUxNy1iYzM2LTQ5Yzg3NTg3MmNjMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbmNpc2NhIEJ1cnRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3MmExMzZlLWJiZmQtNDY4Ny1hNTc2LTFhYjUzOGM4ZjI2NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2Ftb3RoZXMgRGVtYlxcdTAwZTlsXFx1MDBlOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3YWRiYmNjLTA2NzktNDNmMy1hOTM5LTA3ZjAwOWEzOTNkYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9kZSBDcnV0Y2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiN2MxZGRkYS05NDVjLTRiMmUtODgzMS1hZDlmMmVjNGE2MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vbGFuIFZpb2xldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3YzRmOTg2LWU2MmEtNGE4Zi1iNWYwLThmMzBlY2MzNWM1ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3NjYXIgSG9sbHl3b29kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjg1MTYxZGEtN2Y0Yy00MmE4LWI3ZjYtMTk3ODljZjY4NjFkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXZpZXIgTG90dXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiYmRlYjNlMi1jZDVhLTQ2ZmYtOWE2OS1mZDA2YjE0ODI3MTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYW5zIFJlYmxhc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDRjNjgzNy1lZWFhLTQ2NzUtYWU0OC0wNjFlZmEwZmQxMWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldvcmttYW4gR2xvb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZGU3YmRjNS1lMGE4LTQ5OTAtYTZiNi1jNDkwOWMzZWJiYzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvdXNpbiBTcGlrZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJlNGYyODhiLWVmODctNGU4ZS1iOGVlLTIwZWVjMThlODBiOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUG9sa2FEb3QgTWF0cml4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzA5ZTY2YjMtNTg0Ny00Y2JiLWFlYmEtMmI3MGU3YmFmZWRiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQcmVtamVldCBMaXVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjM2IxYjRlNS00Yjg4LTQyNDUtYjJiMS1hZTNhZGU1NzM0OWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhbGwgT3Nib3JuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzQ0MTg2NjMtN2FhNC00YzlmLWFlNzMtMGU4MWU0NDJlOGEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaHJpcyBUaGliYXVsdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM1NDlmMjgwLTgyYmEtNGQ4ZS1hNGNlLWM0OWU1NjQ2MWZiNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVmFsIEhpdGhlcnRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzU0ZmJhMTItMmZiNS00MDkxLWIxZDctMTQ0OTY5M2IzNWQ2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYWNvYnVzIEhhcnBlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM1NzIyMmZkLWRmNTUtNDY0Yy1hNDRlLWIxNTQ0M2U2MWI3MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmF0aGEgU3BydWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzYxNDZjNDUtM2Q5Yi00NzQ5LTlmMDMtZDRmYWFlNjFlMmMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdGxhcyBEaWF6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzZiZDIxYTgtNzg4MC00YzAwLThhYmUtMzM1NjBmZTg0YWM1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXZW5keSBDZXJuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM5MGVhZmRmLTQyNDQtNDFlMC04YTY2LWFkZjMxZDcwMGYwMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGVuaW0gU3F1YWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2E3MDkyMDUtMjI2ZC00ZDkyLThiZTYtNWY3ODcxZjQ4ZTI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaXZlcnMgSmF2aWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2FhOWJkODYtMjQ0YS00YWJhLWEyMzctNmE5NTI4ZjA5NTcwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWRkb25nIENhbmR5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2FjZWUwYjgtNTBmYy00ZGY0LTk2ZWEtMDg5YTNkNTAxODEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJObGlra2kgSGFydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNjNzI1YTU4LTM4Y2MtNDJhZi05ZmY4LWFjZTc2NTQxYWMyNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxkbyBDb21lYmFja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNjYzk5ZjJmLTJmZWItNGYzMi1hOWI5LWMyODlmNjE5ZDg0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXRzdWtpIFdpbm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkNTQ5NGI0LTA1ZDAtNGIyZS04NTc4LTM1N2YwOTIzZmY0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNmYXJsYW5kIFZhcmdhc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNkNmIxMDJlLTE4ODEtNDA3OS05YTM3LTQ1NTAzOGJiZjEwZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FsZWIgTW9yaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZDlkOWIzNS0wYmE0LTQ4NDItODU3Ny0yYzgwZTkxOTY4ZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlOTlkN2FmLWJhNzUtNDhhNy1hNWQ4LWQ0NmY1NDM4MjlmMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTHVjeSBUb2trYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZWFjNzg1ZS01NWZkLTRhNGUtOWJjOC0xN2E2NjJhNThhMzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlc3QgQ2VybmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZWI1NjA2ZC1lYTNmLTQ0NzEtOWNhNy0zZDJlNzFhNTBkZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvbmRvbiBTaW1tb25zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2ViOGY4Y2QtODBiMi00N2YwLWI0M2UtNGQ4ODVmYTQ4YWE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb25pYSBCYWlsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMDAyOTQ2Zi1lN2VkLTRjZTQtYTQwNS02M2JkYWY1ZWFiYjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvcmdlIE93ZW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDQ2YWJiMDAtYzU0Ni00OTUyLTkyMTgtNGYxNjA4NGUzMjM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdGxhcyBHdWVycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNTE5MmQ5NS1hNTQ3LTQ5OGEtYjRlYS02NzcwZGRlNGI5ZjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1bW1lcnMgU2x1Z2dlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ2ZTlhMjExLTdiMzMtNDVkOS04ZjA5LTZkMWExYTdhM2M3OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2lsbGlhbSBCb29uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ3NGEyNDczLTFmMjktNDBmYS1hNDFlLTY2ZmEyMjgxZGZjYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFuZHJ5IFZpb2xlbmNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDc5NmQyODctNzdlZi00OWYwLTg5ZWYtODdiY2RlYjI4MGVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJenVraSBDbGFya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4NzU4YzFiLWFmYmItNDNhNS1iMDBiLTYwMDRkNDE5ZTJjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3J0aXogTmVsc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDhiYzQ4MmUtOTMwOS00MjMwLWFiY2ItMmM1YTY0MTI0NDZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdWd1c3QgT2JyaWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGFiMTI2YTktMzMxMC00ZjZlLWEzYmEtM2UzMDQ0YTBmZWVjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHYW1lcyBQZXJnYW1lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGQ3ZTcxMGYtZGE0ZS00NzViLWI4NzAtMmMyOWZlOWQ4YzAwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJdHN1a2kgV2Vla3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZDhhNDNhNC1hMDI0LTQ0ZTktYTUyMi03ODVkOTk4YjI5YzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pZ3VlbCBQZXRlcnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRlMzgzNmE0LWZkYmEtNDZjYy1hYjUzLTQ5ZmNhYWNjMzljMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUG9tUG9tIFBvbW9kb3JvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGU1MmQ1YzAtY2JhNC00YWNlLTgzMDgtZTJlZDNmODc5OWQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3NcXHUwMGU5IE1pdGNoZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGZlM2JjMWItZmNhOC00N2ViLTk2NWYtNmNmOTQ3YzM1NDQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMaW51cyBIYWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUxMWZmNTdhLWVjNWQtNGQ1OS04MWEzLWZmZTM1MjliMGU2MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXNwcmVzc28gTWFjaGluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUxNjUxMTE2LTQ1MzMtNGIzOS04OTMxLTYyZDAyM2UyMTU3OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVybyBJbmRleFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUxODFhZDRhLWRkMDktNDg3My1hZTY4LWI1MDUxOGQyMDcyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmF0aXN0YSBPYXRtaWxrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTJhZDgxZmYtZmZmMi00MGJiLTkwNDMtOTViZGFmMzRlYmMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTd29yZHMgTWFncGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTQ5MmZlN2UtMTU3MC00ZDVlLTkyYTItN2NmYjJjZmVlNWE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJa2VhIEplbGxvZmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTQ5NWNhZGMtYTY0NS00MzlkLWE1NTYtZTQxZGU3NDkzZjE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUd29mdXJpb3VzIFB1ZGRsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNjExNGZkNC1hMTFkLTRmNmMtYjgyMy02NTY5MWJiMmQyODhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJldmFuIFVuZGVyYnVja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU2NzY4MDY5LTFkYjctNDRkNi04NDliLTBhMjgxZjYyZTg1NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUXVlaXRobGVpbiBTaHVmZmxlY2F0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTc0OWRjMjctY2EzYi00NTZlLTg4OWMtZDJlYzAyYWM3ZjVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdXJlbGlhbm8gRXN0ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlOTE5ZGZhZS05MWMzLTQ3NWMtYjVkNS04YjBjMTQ5NDBjNDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZhbW91cyBNZW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWJmMmRhNTAtNzcxMS00NmJhLTllNDktMzQxY2UzNDg3ZTAwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWxkd2luIEpvbmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWM0MWQzN2UtMjM5OC00ZTdkLWFhZjAtZjdmNTJlNTMwMGM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDbGVtZW50aW5lIFN0ZWVwbGVjaGFzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYxMDYyOTFhLTU5MzUtNDQ5ZS1iMDc1LTc1ZTYyZDFkMWIwN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVsZGEgSGlnaHdheVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYxMGJhMDZlLWQ1MDktNDE0Yi05MGNkLTRkNzBkNDNjNzVmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVybmFuZG8gV2ludGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjExODViMjAtN2I0YS00Y2NjLWE5NzctZGMxYWZkZmQ0Y2I5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmF6aWVyIFRvc3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYzNTlmOTc5LWY2NTgtNDQyNy04MmEzLTcxODUzNzdjODVjM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9uYWggTW9zYWljXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjYzNDI3MjktYTM4YS00MjA0LWFmOGQtNjRiN2FjY2I1NjIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJjbyBXaW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNjNlZTY4Zi04MDIxLTRkZDAtYjNkNS1iM2Q1ODdhZTMyMTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlF1ZWJyYWRhIFN0b25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjZkM2MxMzQtZTNlZS00MGExLWJkNGQtMDk1MzQ3NDQ0MTI5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXJrZXIgTWFjTWlsbGFuIElJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNzcxNWIwNS1lZTY5LTQzZTUtYTBlNS04ZTNkMzQyNzBjODJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbGlndWxhIExvdHVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjkwYzM5OGItZWVmMC00MGNiLThiMDctMzAyYTc1OWU4YmQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOdWNsZXVzIFN0cmVldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZiYjUyOTFjLTI0MzgtNDAwZS1hYjMyLTMwY2UxMjU5YzYwMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29yeSBOb3Zha1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZjMWQ2NWY1LTg5MTYtNDFmMS1iODc4LTRkNDJhOTY1YjAxMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGl6enkgUGFzdGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmZGZkMzZjNy1lMGMxLTRmY2UtOThmNy05MjFjM2QxN2VhZmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJlZXNlIEhhcnJpbmd0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmZTFmODI2Zi03MzQ2LTQyNWMtOWQzYy03ZWQ1YTdlYWUxYjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFuZ2VsIEl2b3JpZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiYzQxODdmYS00NTlhLTRjMDYtYmJmMi00ZTBlMDEzZDI3Y2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpeHBhY2sgRG9nd2Fsa2VyXCIsXG4gICAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBsYXllcnMsXG59O1xuXG4iLCIvKipcbiAqIEBhdXRob3IgS2F0ZVxuICovXG5cbnZhciB0cmFjZXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG4gICAgZnVuY3Rpb24gc2V0UmFuZG9tKG5ld1JhbmRvbSkge1xuICAgICAgICByYW5kb20gPSBuZXdSYW5kb207XG4gICAgfVxuXG4gICAgdmFyIFRyYWNlcnlOb2RlID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZEluZGV4LCBzZXR0aW5ncykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuXG4gICAgICAgIC8vIE5vIGlucHV0PyBBZGQgYW4gZXJyb3IsIGJ1dCBjb250aW51ZSBhbnl3YXlzXG4gICAgICAgIGlmIChzZXR0aW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIkVtcHR5IGlucHV0IGZvciBub2RlXCIpO1xuICAgICAgICAgICAgc2V0dGluZ3MucmF3ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSByb290IG5vZGUgb2YgYW4gZXhwYW5zaW9uLCBpdCB3aWxsIGhhdmUgdGhlIGdyYW1tYXIgcGFzc2VkIGFzIHRoZSAncGFyZW50J1xuICAgICAgICAvLyAgc2V0IHRoZSBncmFtbWFyIGZyb20gdGhlICdwYXJlbnQnLCBhbmQgc2V0IGFsbCBvdGhlciB2YWx1ZXMgZm9yIGEgcm9vdCBub2RlXG4gICAgICAgIGlmICggcGFyZW50IGluc3RhbmNlb2YgdHJhY2VyeS5HcmFtbWFyKSB7XG4gICAgICAgICAgICB0aGlzLmdyYW1tYXIgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRlcHRoID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyYW1tYXIgPSBwYXJlbnQuZ3JhbW1hcjtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDE7XG4gICAgICAgICAgICB0aGlzLmNoaWxkSW5kZXggPSBjaGlsZEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYXcgPSBzZXR0aW5ncy5yYXc7XG4gICAgICAgIHRoaXMudHlwZSA9IHNldHRpbmdzLnR5cGU7XG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGhpcy5ncmFtbWFyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBncmFtbWFyIHNwZWNpZmllZCBmb3IgdGhpcyBub2RlXCIsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBcIk5vZGUoJ1wiICsgdGhpcy5yYXcgKyBcIicgXCIgKyB0aGlzLnR5cGUgKyBcIiBkOlwiICsgdGhpcy5kZXB0aCArIFwiKVwiO1xuICAgIH07XG5cbiAgICAvLyBFeHBhbmQgdGhlIG5vZGUgKHdpdGggdGhlIGdpdmVuIGNoaWxkIHJ1bGUpXG4gICAgLy8gIE1ha2UgY2hpbGRyZW4gaWYgdGhlIG5vZGUgaGFzIGFueVxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS5leHBhbmRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkUnVsZSwgcHJldmVudFJlY3Vyc2lvbikge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gXCJcIjtcblxuICAgICAgICAvLyBTZXQgdGhlIHJ1bGUgZm9yIG1ha2luZyBjaGlsZHJlbixcbiAgICAgICAgLy8gYW5kIGV4cGFuZCBpdCBpbnRvIHNlY3Rpb25cbiAgICAgICAgdGhpcy5jaGlsZFJ1bGUgPSBjaGlsZFJ1bGU7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkUnVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSB0cmFjZXJ5LnBhcnNlKGNoaWxkUnVsZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBlcnJvcnMgdG8gdGhpc1xuICAgICAgICAgICAgaWYgKHNlY3Rpb25zLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5jb25jYXQoc2VjdGlvbnMuZXJyb3JzKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IG5ldyBUcmFjZXJ5Tm9kZSh0aGlzLCBpLCBzZWN0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50UmVjdXJzaW9uKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmV4cGFuZChwcmV2ZW50UmVjdXJzaW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBpbiB0aGUgZmluaXNoZWQgdGV4dFxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ICs9IHRoaXMuY2hpbGRyZW5baV0uZmluaXNoZWRUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gbm9ybWFsIG9wZXJhdGlvbiwgdGhpcyBzaG91bGRuJ3QgZXZlciBoYXBwZW5cbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJObyBjaGlsZCBydWxlIHByb3ZpZGVkLCBjYW4ndCBleHBhbmQgY2hpbGRyZW5cIik7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBjaGlsZCBydWxlIHByb3ZpZGVkLCBjYW4ndCBleHBhbmQgY2hpbGRyZW5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRXhwYW5kIHRoaXMgcnVsZSAocG9zc2libHkgY3JlYXRpbmcgY2hpbGRyZW4pXG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLmV4cGFuZCA9IGZ1bmN0aW9uKHByZXZlbnRSZWN1cnNpb24pIHtcblxuICAgICAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbnNpb25FcnJvcnMgPSBbXTtcblxuICAgICAgICAgICAgLy8gVHlwZXMgb2Ygbm9kZXNcbiAgICAgICAgICAgIC8vIC0xOiByYXcsIG5lZWRzIHBhcnNpbmdcbiAgICAgICAgICAgIC8vICAwOiBQbGFpbnRleHRcbiAgICAgICAgICAgIC8vICAxOiBUYWcgKFwiI3N5bWJvbC5tb2QubW9kMi5tb2QzI1wiIG9yIFwiI1twdXNoVGFyZ2V0OnB1c2hSdWxlXXN5bWJvbC5tb2RcIilcbiAgICAgICAgICAgIC8vICAyOiBBY3Rpb24gKFwiW3B1c2hUYXJnZXQ6cHVzaFJ1bGVdLCBbcHVzaFRhcmdldDpQT1BdXCIsIG1vcmUgaW4gdGhlIGZ1dHVyZSlcblxuICAgICAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgLy8gUmF3IHJ1bGVcbiAgICAgICAgICAgIGNhc2UgLTE6XG5cbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZENoaWxkcmVuKHRoaXMucmF3LCBwcmV2ZW50UmVjdXJzaW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gcGxhaW50ZXh0LCBkbyBub3RoaW5nIGJ1dCBjb3B5IHRleHQgaW50byBmaW5zaWhlZCB0ZXh0XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSB0aGlzLnJhdztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gVGFnXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgdG8gZmluZCBhbnkgYWN0aW9ucywgYW5kIGZpZ3VyZSBvdXQgd2hhdCB0aGUgc3ltYm9sIGlzXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0YWN0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHRyYWNlcnkucGFyc2VUYWcodGhpcy5yYXcpO1xuXG4gICAgICAgICAgICAgICAgLy8gQnJlYWsgaW50byBzeW1ib2wgYWN0aW9ucyBhbmQgbW9kaWZpZXJzXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2wgPSBwYXJzZWQuc3ltYm9sO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZXJzID0gcGFyc2VkLm1vZGlmaWVycztcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhbGwgdGhlIHByZWFjdGlvbnMgZnJvbSB0aGUgcmF3IHN5bnRheFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLnByZWFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVhY3Rpb25zW2ldID0gbmV3IE5vZGVBY3Rpb24odGhpcywgcGFyc2VkLnByZWFjdGlvbnNbaV0ucmF3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWQucG9zdGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnBvc3RhY3Rpb25zW2ldID0gbmV3IE5vZGVBY3Rpb24odGhpcywgcGFyc2VkLnBvc3RhY3Rpb25zW2ldLnJhdyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSB1bmRvIGFjdGlvbnMgZm9yIGFsbCBwcmVhY3Rpb25zIChwb3BzIGZvciBlYWNoIHB1c2gpXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByZWFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlYWN0aW9uc1tpXS50eXBlID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0YWN0aW9ucy5wdXNoKHRoaXMucHJlYWN0aW9uc1tpXS5jcmVhdGVVbmRvKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFjdGl2YXRlIGFsbCB0aGUgcHJlYWN0aW9uc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcmVhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlYWN0aW9uc1tpXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gdGhpcy5yYXc7XG5cbiAgICAgICAgICAgICAgICAvLyBFeHBhbmQgKHBhc3NpbmcgdGhlIG5vZGUsIHRoaXMgYWxsb3dzIHRyYWNraW5nIG9mIHJlY3Vyc2lvbiBkZXB0aClcblxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFJ1bGUgPSB0aGlzLmdyYW1tYXIuc2VsZWN0UnVsZSh0aGlzLnN5bWJvbCwgdGhpcywgdGhpcy5lcnJvcnMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRDaGlsZHJlbihzZWxlY3RlZFJ1bGUsIHByZXZlbnRSZWN1cnNpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgbW9kaWZpZXJzXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlIHBhcnNlIGZ1bmN0aW9uIHRvIG5vdCB0cmlnZ2VyIG9uIGhhc2h0YWdzIHdpdGhpbiBwYXJlbnRoZXNpcyB3aXRoaW4gdGFncyxcbiAgICAgICAgICAgICAgICAvLyAgIHNvIHRoYXQgbW9kaWZpZXIgcGFyYW1ldGVycyBjYW4gY29udGFpbiB0YWdzIFwiI3N0b3J5LnJlcGxhY2UoI3Byb3RhZ29uaXN0IywgI25ld0NoYXJhY3RlciMpI1wiXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vZGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kTmFtZSA9IHRoaXMubW9kaWZpZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kUGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2ROYW1lLmluZGV4T2YoXCIoXCIpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0V4cCA9IC9cXCgoW14pXSspXFwpLztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9kbzogaWdub3JlIGFueSBlc2NhcGVkIGNvbW1hcy4gIEZvciBub3csIGNvbW1hcyBhbHdheXMgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRzID0gcmVnRXhwLmV4ZWModGhpcy5tb2RpZmllcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kUGFyYW1zID0gcmVzdWx0c1sxXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kTmFtZSA9IHRoaXMubW9kaWZpZXJzW2ldLnN1YnN0cmluZygwLCBtb2ROYW1lLmluZGV4T2YoXCIoXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRoaXMuZ3JhbW1hci5tb2RpZmllcnNbbW9kTmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWlzc2luZyBtb2RpZmllcj9cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJNaXNzaW5nIG1vZGlmaWVyIFwiICsgbW9kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCArPSBcIigoLlwiICsgbW9kTmFtZSArIFwiKSlcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gbW9kKHRoaXMuZmluaXNoZWRUZXh0LCBtb2RQYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gcG9zdC1hY3Rpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvc3RhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGFjdGlvbnNbaV0uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG5cbiAgICAgICAgICAgICAgICAvLyBKdXN0IGEgYmFyZSBhY3Rpb24/ICBFeHBhbmQgaXQhXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBuZXcgTm9kZUFjdGlvbih0aGlzLCB0aGlzLnJhdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIE5vIHZpc2libGUgdGV4dCBmb3IgYW4gYWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc29tZSB2aXNpYmxlIHRleHQgZm9yIGlmIHRoZXJlIGlzIGEgZmFpbHVyZSB0byBwZXJmb3JtIHRoZSBhY3Rpb24/XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vY29uc29sZS53YXJuKFwiQWxyZWFkeSBleHBhbmRlZCBcIiArIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgVHJhY2VyeU5vZGUucHJvdG90eXBlLmNsZWFyRXNjYXBlQ2hhcnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IHRoaXMuZmluaXNoZWRUZXh0LnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiRE9VQkxFQkFDS1NMQVNIXCIpLnJlcGxhY2UoL1xcXFwvZywgXCJcIikucmVwbGFjZSgvRE9VQkxFQkFDS1NMQVNIL2csIFwiXFxcXFwiKTtcbiAgICB9O1xuXG4gICAgLy8gQW4gYWN0aW9uIHRoYXQgb2NjdXJzIHdoZW4gYSBub2RlIGlzIGV4cGFuZGVkXG4gICAgLy8gVHlwZXMgb2YgYWN0aW9uczpcbiAgICAvLyAwIFB1c2g6IFtrZXk6cnVsZV1cbiAgICAvLyAxIFBvcDogW2tleTpQT1BdXG4gICAgLy8gMiBmdW5jdGlvbjogW2Z1bmN0aW9uTmFtZShwYXJhbTAscGFyYW0xKV0gKFRPRE8hKVxuICAgIGZ1bmN0aW9uIE5vZGVBY3Rpb24obm9kZSwgcmF3KSB7XG4gICAgICAgIC8qXG4gICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICBjb25zb2xlLndhcm4oXCJObyBub2RlIGZvciBOb2RlQWN0aW9uXCIpO1xuICAgICAgICAgaWYgKCFyYXcpXG4gICAgICAgICBjb25zb2xlLndhcm4oXCJObyByYXcgY29tbWFuZHMgZm9yIE5vZGVBY3Rpb25cIik7XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICAgICAgdmFyIHNlY3Rpb25zID0gcmF3LnNwbGl0KFwiOlwiKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBzZWN0aW9uc1swXTtcblxuICAgICAgICAvLyBObyBjb2xvbj8gQSBmdW5jdGlvbiFcbiAgICAgICAgaWYgKHNlY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gMjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29sb24/IEl0J3MgZWl0aGVyIGEgcHVzaCBvciBhIHBvcFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucnVsZSA9IHNlY3Rpb25zWzFdO1xuICAgICAgICAgICAgaWYgKHRoaXMucnVsZSA9PT0gXCJQT1BcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIE5vZGVBY3Rpb24ucHJvdG90eXBlLmNyZWF0ZVVuZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlQWN0aW9uKHRoaXMubm9kZSwgdGhpcy50YXJnZXQgKyBcIjpQT1BcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETyBOb3Qgc3VyZSBob3cgdG8gbWFrZSBVbmRvIGFjdGlvbnMgZm9yIGZ1bmN0aW9ucyBvciBQT1BzXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBOb2RlQWN0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZ3JhbW1hciA9IHRoaXMubm9kZS5ncmFtbWFyO1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIC8vIHNwbGl0IGludG8gc2VjdGlvbnMgKHRoZSB3YXkgdG8gZGVub3RlIGFuIGFycmF5IG9mIHJ1bGVzKVxuICAgICAgICAgICAgdGhpcy5ydWxlU2VjdGlvbnMgPSB0aGlzLnJ1bGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hlZFJ1bGVzID0gW107XG4gICAgICAgICAgICB0aGlzLnJ1bGVOb2RlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJ1bGVTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IFRyYWNlcnlOb2RlKGdyYW1tYXIsIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6IC0xLFxuICAgICAgICAgICAgICAgICAgICByYXcgOiB0aGlzLnJ1bGVTZWN0aW9uc1tpXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbi5leHBhbmQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSdWxlcy5wdXNoKG4uZmluaXNoZWRUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogZXNjYXBlIGNvbW1hcyBwcm9wZXJseVxuICAgICAgICAgICAgZ3JhbW1hci5wdXNoUnVsZXModGhpcy50YXJnZXQsIHRoaXMuZmluaXNoZWRSdWxlcywgdGhpcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZ3JhbW1hci5wb3BSdWxlcyh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgZ3JhbW1hci5mbGF0dGVuKHRoaXMudGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgTm9kZUFjdGlvbi5wcm90b3R5cGUudG9UZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICsgXCI6XCIgKyB0aGlzLnJ1bGU7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldCArIFwiOlBPUFwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gXCIoKHNvbWUgZnVuY3Rpb24pKVwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiKChVbmtub3duIEFjdGlvbikpXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2V0cyBvZiBydWxlc1xuICAgIC8vIENhbiBhbHNvIGNvbnRhaW4gY29uZGl0aW9uYWwgb3IgZmFsbGJhY2sgc2V0cyBvZiBydWxlc2V0cylcbiAgICBmdW5jdGlvbiBSdWxlU2V0KGdyYW1tYXIsIHJhdykge1xuICAgICAgICB0aGlzLnJhdyA9IHJhdztcbiAgICAgICAgdGhpcy5ncmFtbWFyID0gZ3JhbW1hcjtcbiAgICAgICAgdGhpcy5mYWxsb2ZmID0gMTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXcpKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRSdWxlcyA9IHJhdztcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgfHwgcmF3IGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRSdWxlcyA9IFtyYXddO1xuICAgICAgICB9IGVsc2UgaWYgKHJhdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHN1cHBvcnQgZm9yIGNvbmRpdGlvbmFsIGFuZCBoaWVyYXJjaGljYWwgcnVsZSBzZXRzXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBSdWxlU2V0LnByb3RvdHlwZS5zZWxlY3RSdWxlID0gZnVuY3Rpb24oZXJyb3JzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR2V0IHJ1bGVcIiwgdGhpcy5yYXcpO1xuICAgICAgICAvLyBJcyB0aGVyZSBhIGNvbmRpdGlvbmFsP1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb25hbFJ1bGUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ3JhbW1hci5leHBhbmQodGhpcy5jb25kaXRpb25hbFJ1bGUsIHRydWUpO1xuICAgICAgICAgICAgLy8gZG9lcyB0aGlzIHZhbHVlIG1hdGNoIGFueSBvZiB0aGUgY29uZGl0aW9uYWxzP1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uYWxWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmNvbmRpdGlvbmFsVmFsdWVzW3ZhbHVlXS5zZWxlY3RSdWxlKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vIHJldHVybmVkIHZhbHVlP1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgdGhlcmUgYSByYW5rZWQgb3JkZXI/XG4gICAgICAgIGlmICh0aGlzLnJhbmtpbmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yYW5raW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0aGlzLnJhbmtpbmcuc2VsZWN0UnVsZSgpO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0aWxsIG5vIHJldHVybmVkIHZhbHVlP1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFJ1bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgICAvLyBTZWxlY3QgZnJvbSB0aGlzIGJhc2ljIGFycmF5IG9mIHJ1bGVzXG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGlzdHJpYnV0aW9uIGZyb20gdGhlIGdyYW1tYXIgaWYgdGhlcmUgaXMgbm8gb3RoZXJcbiAgICAgICAgICAgIHZhciBkaXN0cmlidXRpb24gPSB0aGlzLmRpc3RyaWJ1dGlvbjtcbiAgICAgICAgICAgIGlmICghZGlzdHJpYnV0aW9uKVxuICAgICAgICAgICAgICAgIGRpc3RyaWJ1dGlvbiA9IHRoaXMuZ3JhbW1hci5kaXN0cmlidXRpb247XG5cbiAgICAgICAgICAgIHN3aXRjaChkaXN0cmlidXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJzaHVmZmxlXCI6XG5cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzaHVmZmxlIGRlc2tcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2h1ZmZsZWREZWNrIHx8IHRoaXMuc2h1ZmZsZWREZWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2h1ZmZsZWREZWNrID0gZnlzaHVmZmxlKEFycmF5LmFwcGx5KG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCA6IHRoaXMuZGVmYXVsdFJ1bGVzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoTnVtYmVyLmNhbGwsIE51bWJlciksIHRoaXMuZmFsbG9mZik7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuc2h1ZmZsZWREZWNrLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2VpZ2h0ZWRcIjpcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIldlaWdodGVkIGRpc3RyaWJ1dGlvbiBub3QgeWV0IGltcGxlbWVudGVkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZhbGxvZmZcIjpcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIkZhbGxvZmYgZGlzdHJpYnV0aW9uIG5vdCB5ZXQgaW1wbGVtZW50ZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucG93KHJhbmRvbSgpLCB0aGlzLmZhbGxvZmYpICogdGhpcy5kZWZhdWx0UnVsZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRVc2VzKVxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFVzZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFVzZXNbaW5kZXhdID0gKyt0aGlzLmRlZmF1bHRVc2VzW2luZGV4XSB8fCAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFJ1bGVzW2luZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9ycy5wdXNoKFwiTm8gZGVmYXVsdCBydWxlcyBkZWZpbmVkIGZvciBcIiArIHRoaXMpO1xuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH07XG5cbiAgICBSdWxlU2V0LnByb3RvdHlwZS5jbGVhclN0YXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVzZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFVzZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBmeXNodWZmbGUoYXJyYXksIGZhbGxvZmYpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLFxuICAgICAgICAgICAgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihyYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIHZhciBTeW1ib2wgPSBmdW5jdGlvbihncmFtbWFyLCBrZXksIHJhd1J1bGVzKSB7XG4gICAgICAgIC8vIFN5bWJvbHMgY2FuIGJlIG1hZGUgd2l0aCBhIHNpbmdsZSB2YWx1ZSwgYW5kIGFycmF5LCBvciBhcnJheSBvZiBvYmplY3RzIG9mIChjb25kaXRpb25zL3ZhbHVlcylcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuZ3JhbW1hciA9IGdyYW1tYXI7XG4gICAgICAgIHRoaXMucmF3UnVsZXMgPSByYXdSdWxlcztcblxuICAgICAgICB0aGlzLmJhc2VSdWxlcyA9IG5ldyBSdWxlU2V0KHRoaXMuZ3JhbW1hciwgcmF3UnVsZXMpO1xuICAgICAgICB0aGlzLmNsZWFyU3RhdGUoKTtcblxuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLmNsZWFyU3RhdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyBDbGVhciB0aGUgc3RhY2sgYW5kIGNsZWFyIGFsbCBydWxlc2V0IHVzYWdlc1xuICAgICAgICB0aGlzLnN0YWNrID0gW3RoaXMuYmFzZVJ1bGVzXTtcblxuICAgICAgICB0aGlzLnVzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5iYXNlUnVsZXMuY2xlYXJTdGF0ZSgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnB1c2hSdWxlcyA9IGZ1bmN0aW9uKHJhd1J1bGVzKSB7XG4gICAgICAgIHZhciBydWxlcyA9IG5ldyBSdWxlU2V0KHRoaXMuZ3JhbW1hciwgcmF3UnVsZXMpO1xuICAgICAgICB0aGlzLnN0YWNrLnB1c2gocnVsZXMpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnBvcFJ1bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUuc2VsZWN0UnVsZSA9IGZ1bmN0aW9uKG5vZGUsIGVycm9ycykge1xuICAgICAgICB0aGlzLnVzZXMucHVzaCh7XG4gICAgICAgICAgICBub2RlIDogbm9kZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVGhlIHJ1bGUgc3RhY2sgZm9yICdcIiArIHRoaXMua2V5ICsgXCInIGlzIGVtcHR5LCB0b28gbWFueSBwb3BzP1wiKTtcbiAgICAgICAgICAgIHJldHVybiBcIigoXCIgKyB0aGlzLmtleSArIFwiKSlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uc2VsZWN0UnVsZSgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLmdldEFjdGl2ZVJ1bGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5zZWxlY3RSdWxlKCk7XG4gICAgfTtcblxuICAgIFN5bWJvbC5wcm90b3R5cGUucnVsZXNUb0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucmF3UnVsZXMpO1xuICAgIH07XG5cbiAgICB2YXIgR3JhbW1hciA9IGZ1bmN0aW9uKHJhdywgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSB7fTtcbiAgICAgICAgdGhpcy5sb2FkRnJvbVJhd09iaihyYXcpO1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5jbGVhclN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zeW1ib2xzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5c1tpXV0uY2xlYXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmFkZE1vZGlmaWVycyA9IGZ1bmN0aW9uKG1vZHMpIHtcblxuICAgICAgICAvLyBjb3B5IG92ZXIgdGhlIGJhc2UgbW9kaWZpZXJzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtb2RzKSB7XG4gICAgICAgICAgICBpZiAobW9kcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllcnNba2V5XSA9IG1vZHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5sb2FkRnJvbVJhd09iaiA9IGZ1bmN0aW9uKHJhdykge1xuXG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xuICAgICAgICB0aGlzLnN5bWJvbHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdWJncmFtbWFycyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnJhdykge1xuICAgICAgICAgICAgLy8gQWRkIGFsbCBydWxlcyB0byB0aGUgZ3JhbW1hclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucmF3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmF3Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0gPSBuZXcgU3ltYm9sKHRoaXMsIGtleSwgdGhpcy5yYXdba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihydWxlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5vZGUgYW5kIHN1Ym5vZGVzXG4gICAgICAgIHZhciByb290ID0gbmV3IFRyYWNlcnlOb2RlKHRoaXMsIDAsIHtcbiAgICAgICAgICAgIHR5cGUgOiAtMSxcbiAgICAgICAgICAgIHJhdyA6IHJ1bGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5leHBhbmQgPSBmdW5jdGlvbihydWxlLCBhbGxvd0VzY2FwZUNoYXJzKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5jcmVhdGVSb290KHJ1bGUpO1xuICAgICAgICByb290LmV4cGFuZCgpO1xuICAgICAgICBpZiAoIWFsbG93RXNjYXBlQ2hhcnMpXG4gICAgICAgICAgICByb290LmNsZWFyRXNjYXBlQ2hhcnMoKTtcblxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uKHJ1bGUsIGFsbG93RXNjYXBlQ2hhcnMpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLmV4cGFuZChydWxlLCBhbGxvd0VzY2FwZUNoYXJzKTtcblxuICAgICAgICByZXR1cm4gcm9vdC5maW5pc2hlZFRleHQ7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3ltYm9scyk7XG4gICAgICAgIHZhciBzeW1ib2xKU09OID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBzeW1ib2xKU09OLnB1c2goJyBcIicgKyBrZXkgKyAnXCIgOiAnICsgdGhpcy5zeW1ib2xzW2tleV0ucnVsZXNUb0pTT04oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwie1xcblwiICsgc3ltYm9sSlNPTi5qb2luKFwiLFxcblwiKSArIFwiXFxufVwiO1xuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgb3IgcHVzaCBydWxlc1xuICAgIEdyYW1tYXIucHJvdG90eXBlLnB1c2hSdWxlcyA9IGZ1bmN0aW9uKGtleSwgcmF3UnVsZXMsIHNvdXJjZUFjdGlvbikge1xuXG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XSA9IG5ldyBTeW1ib2wodGhpcywga2V5LCByYXdSdWxlcyk7XG4gICAgICAgICAgICBpZiAoc291cmNlQWN0aW9uKVxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldLmlzRHluYW1pYyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XS5wdXNoUnVsZXMocmF3UnVsZXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLnBvcFJ1bGVzID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5zeW1ib2xzW2tleV0pXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiQ2FuJ3QgcG9wOiBubyBzeW1ib2wgZm9yIGtleSBcIiArIGtleSk7XG4gICAgICAgIHRoaXMuc3ltYm9sc1trZXldLnBvcFJ1bGVzKCk7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLnNlbGVjdFJ1bGUgPSBmdW5jdGlvbihrZXksIG5vZGUsIGVycm9ycykge1xuICAgICAgICBpZiAodGhpcy5zeW1ib2xzW2tleV0pIHtcbiAgICAgICAgICAgIHZhciBydWxlID0gdGhpcy5zeW1ib2xzW2tleV0uc2VsZWN0UnVsZShub2RlLCBlcnJvcnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZhaWxvdmVyIHRvIGFsdGVybmF0aXZlIHN1YmdyYW1tYXJzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJncmFtbWFycy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdWJncmFtbWFyc1tpXS5zeW1ib2xzW2tleV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ViZ3JhbW1hcnNbaV0uc3ltYm9sc1trZXldLnNlbGVjdFJ1bGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIHN5bWJvbD9cbiAgICAgICAgZXJyb3JzLnB1c2goXCJObyBzeW1ib2wgZm9yICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICAgICAgcmV0dXJuIFwiKChcIiArIGtleSArIFwiKSlcIjtcbiAgICB9O1xuXG4gICAgLy8gUGFyc2VzIGEgcGxhaW50ZXh0IHJ1bGUgaW4gdGhlIHRyYWNlcnkgc3ludGF4XG4gICAgdHJhY2VyeSA9IHtcblxuICAgICAgICBjcmVhdGVHcmFtbWFyIDogZnVuY3Rpb24ocmF3KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyYW1tYXIocmF3KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRSYW5kb206IHNldFJhbmRvbSxcblxuICAgICAgICAvLyBQYXJzZSB0aGUgY29udGVudHMgb2YgYSB0YWdcbiAgICAgICAgcGFyc2VUYWcgOiBmdW5jdGlvbih0YWdDb250ZW50cykge1xuXG4gICAgICAgICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBwcmVhY3Rpb25zIDogW10sXG4gICAgICAgICAgICAgICAgcG9zdGFjdGlvbnMgOiBbXSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IHRyYWNlcnkucGFyc2UodGFnQ29udGVudHMpO1xuICAgICAgICAgICAgdmFyIHN5bWJvbFNlY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb25zW2ldLnR5cGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbFNlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2VjdGlvbiA9IHNlY3Rpb25zW2ldLnJhdztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIm11bHRpcGxlIG1haW4gc2VjdGlvbnMgaW4gXCIgKyB0YWdDb250ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHJlYWN0aW9ucy5wdXNoKHNlY3Rpb25zW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzeW1ib2xTZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyAgIHRocm93IChcIm5vIG1haW4gc2VjdGlvbiBpbiBcIiArIHRhZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudHMgPSBzeW1ib2xTZWN0aW9uLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgICAgICBwYXJzZWQuc3ltYm9sID0gY29tcG9uZW50c1swXTtcbiAgICAgICAgICAgICAgICBwYXJzZWQubW9kaWZpZXJzID0gY29tcG9uZW50cy5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2UgOiBmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICB2YXIgZGVwdGggPSAwO1xuICAgICAgICAgICAgdmFyIGluVGFnID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBlc2NhcGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IDA7XG5cbiAgICAgICAgICAgIHZhciBlc2NhcGVkU3Vic3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBsYXN0RXNjYXBlZENoYXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuZXJyb3JzID0gZXJyb3JzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb25zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBlbmQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW5kIC0gc3RhcnQgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goc3RhcnQgKyBcIjogZW1wdHkgdGFnXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHN0YXJ0ICsgXCI6IGVtcHR5IGFjdGlvblwiKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmF3U3Vic3RyaW5nO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0RXNjYXBlZENoYXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByYXdTdWJzdHJpbmcgPSBlc2NhcGVkU3Vic3RyaW5nICsgXCJcXFxcXCIgKyBydWxlLnN1YnN0cmluZyhsYXN0RXNjYXBlZENoYXIgKyAxLCBlbmQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3U3Vic3RyaW5nID0gcnVsZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlIDogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmF3IDogcmF3U3Vic3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGFzdEVzY2FwZWRDaGFyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGVzY2FwZWRTdWJzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBydWxlLmNoYXJBdChpKTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVudGVyIGEgZGVlcGVyIGJyYWNrZXRlZCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1snOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwICYmICFpblRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmQgYSBicmFja2V0ZWQgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwICYmICFpblRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYXNodGFnXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWdub3JlIGlmIG5vdCBhdCBkZXB0aCAwLCB0aGF0IG1lYW5zIHdlIGFyZSBpbiBhIGJyYWNrZXRcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5UYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhZyA9ICFpblRhZztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NhcGVkU3Vic3RyaW5nID0gZXNjYXBlZFN1YnN0cmluZyArIHJ1bGUuc3Vic3RyaW5nKHN0YXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXNjYXBlZENoYXIgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgcnVsZS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgY3JlYXRlU2VjdGlvbihzdGFydCwgcnVsZS5sZW5ndGgsIDApO1xuXG4gICAgICAgICAgICBpZiAoaW5UYWcpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIlVuY2xvc2VkIHRhZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZXB0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChcIlRvbyBtYW55IFtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJUb28gbWFueSBdXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdHJpcCBvdXQgZW1wdHkgcGxhaW50ZXh0IHNlY3Rpb25zXG5cbiAgICAgICAgICAgIHNlY3Rpb25zID0gc2VjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbi50eXBlID09PSAwICYmIHNlY3Rpb24ucmF3Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWN0aW9ucy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzVm93ZWwoYykge1xuICAgICAgICB2YXIgYzIgPSBjLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAoYzIgPT09ICdhJykgfHwgKGMyID09PSAnZScpIHx8IChjMiA9PT0gJ2knKSB8fCAoYzIgPT09ICdvJykgfHwgKGMyID09PSAndScpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc0FscGhhTnVtKGMpIHtcbiAgICAgICAgcmV0dXJuIChjID49ICdhJyAmJiBjIDw9ICd6JykgfHwgKGMgPj0gJ0EnICYmIGMgPD0gJ1onKSB8fCAoYyA+PSAnMCcgJiYgYyA8PSAnOScpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gICAgfVxuXG4gICAgdmFyIGJhc2VFbmdNb2RpZmllcnMgPSB7XG5cbiAgICAgICAgcmVwbGFjZSA6IGZ1bmN0aW9uKHMsIHBhcmFtcykge1xuICAgICAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvcmVwbGFjaW5nLWFsbC1vY2N1cnJlbmNlcy1vZi1hLXN0cmluZy1pbi1qYXZhc2NyaXB0XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHBhcmFtc1swXSksICdnJyksIHBhcmFtc1sxXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FwaXRhbGl6ZUFsbCA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHZhciBzMiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgY2FwTmV4dCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmICghaXNBbHBoYU51bShzLmNoYXJBdChpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwTmV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHMyICs9IHMuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FwTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgczIgKz0gcy5jaGFyQXQoaSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzMiArPSBzLmNoYXJBdChpKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwTmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gczI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FwaXRhbGl6ZSA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYSA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdCgyKS50b0xvd2VyQ2FzZSgpID09PSAnaScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYSBcIiArIHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWb3dlbChzLmNoYXJBdCgwKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYW4gXCIgKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFwiYSBcIiArIHM7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBmaXJzdFMgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICAgICAgICAgIHZhciBzMiA9IHMuc3BsaXQoXCIgXCIpO1xuXG4gICAgICAgICAgICB2YXIgZmluaXNoZWQgPSBiYXNlRW5nTW9kaWZpZXJzLnMoczJbMF0pICsgXCIgXCIgKyBzMi5zbGljZSgxKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbmlzaGVkKTtcbiAgICAgICAgICAgIHJldHVybiBmaW5pc2hlZDtcbiAgICAgICAgfSxcblxuICAgICAgICBzIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgc3dpdGNoIChzLmNoYXJBdChzLmxlbmd0aCAtMSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3knOlxuICAgICAgICAgICAgICAgIGlmICghaXNWb3dlbChzLmNoYXJBdChzLmxlbmd0aCAtIDIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMSkgKyBcImllc1wiO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcInNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcInNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWQgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHMuY2hhckF0KHMubGVuZ3RoIC0xKSkge1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZWRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3knOlxuICAgICAgICAgICAgICAgIGlmICghaXNWb3dlbChzLmNoYXJBdChzLmxlbmd0aCAtIDIpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMSkgKyBcImllZFwiO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJhY2VyeS5iYXNlRW5nTW9kaWZpZXJzID0gYmFzZUVuZ01vZGlmaWVyczsgXG4gICAgLy8gRXh0ZXJuYWxpemVcbiAgICB0cmFjZXJ5LlRyYWNlcnlOb2RlID0gVHJhY2VyeU5vZGU7XG5cbiAgICB0cmFjZXJ5LkdyYW1tYXIgPSBHcmFtbWFyO1xuICAgIHRyYWNlcnkuU3ltYm9sID0gU3ltYm9sO1xuICAgIHRyYWNlcnkuUnVsZVNldCA9IFJ1bGVTZXQ7XG4gICAgcmV0dXJuIHRyYWNlcnk7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhY2VyeTtcbiIsImNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbmNvbnN0IGhpZ2hsaWdodCA9IHJlcXVpcmUoJy4vaGlnaGxpZ2h0Jyk7XG5cbmxldCByZWFkeSA9IGZhbHNlO1xuXG5sZXQgJGRpYWxvZ3M7XG5sZXQgJGxpbmVPbmU7XG5sZXQgJGxpbmVUd287XG5sZXQgJGNvbnRyb2w7XG5cbmxldCBsaW5lT25lQW5pbWF0aW5nO1xubGV0IGxpbmVUd29BbmltYXRpbmc7XG5cbmxldCBjdXI7XG5sZXQgcHJldjtcbmxldCBuZXh0O1xuXG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGNvbnNvbGUuZGVidWcoJ0RpYWxvZy5pbml0KCknKTtcblxuICAkZGlhbG9ncyA9ICQoJyNoaWdobGlnaHRzLWRpYWxvZ19fdGV4dCBwJyk7XG4gICRsaW5lT25lID0gJGRpYWxvZ3MuZmlyc3QoKTtcbiAgJGxpbmVUd28gPSAkZGlhbG9ncy5sYXN0KCk7XG4gICRjb250cm9sID0gJCgnLmRpYWxvZy1jb250cm9sJyk7XG5cbiAgbGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgJGRpYWxvZ3MuZWFjaCgoXywgZWwpID0+IHtcbiAgICB1dGlsLnByZWZpeGVkT24oJChlbCksICdBbmltYXRpb25FbmQnLCBvbkFuaW1FbmQpO1xuICB9KTtcblxuICByZWFkeSA9IHRydWU7XG59O1xuXG5jb25zdCBzdGFydEhpZ2hsaWdodCA9IChoaWdobGlnaHRzLCBza2lwQW5pbWF0aW9uKSA9PiB7O1xuICBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgcHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgbmV4dCA9IGhpZ2hsaWdodHMubmV4dDtcblxuICBpZiAoIXJlYWR5KSBpbml0KCk7XG5cbiAgLy8gcmVzZXQgZGlhbG9nXG4gIC8vaGlnaGxpZ2h0LmN1ckRpYWxvZ1BhcnQgPSAwO1xuICAkbGluZU9uZS5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcbiAgJGxpbmVUd28ucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCBhbmltYXRlJyk7XG5cbiAgY3VyLnN0YXJ0ZWQgPSB0cnVlO1xuICBpZiAoc2tpcEFuaW1hdGlvbikge1xuICAgIHNob3dIaWdobGlnaHQoY3VyKTtcbiAgfSBlbHNlIHtcbiAgICBhbmltYXRlSGlnaGxpZ2h0KGN1cik7XG4gIH1cbn07XG5cbmNvbnN0IGFuaW1hdGVIaWdobGlnaHQgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICAkbGluZVR3by5yZW1vdmVDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkIGFuaW1hdGUnKTtcblxuICAkbGluZU9uZS50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMF0gfHwgJycpO1xuICAkbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gIGhpZGVDb250cm9sKCk7XG4gIGFuaW1hdGUoJ29uZScpO1xufTtcblxuY29uc3Qgc2hvd0hpZ2hsaWdodCA9IChoaWdobGlnaHQpID0+IHtcbiAgJGxpbmVPbmUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgJGxpbmVUd28ucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcblxuICAkbGluZU9uZS50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMF0gfHwgJycpO1xuICAkbGluZVR3by50ZXh0KGhpZ2hsaWdodC5kaWFsb2dQYXJ0c1toaWdobGlnaHQuY3VyRGlhbG9nUGFydF1bMV0gfHwgJycpO1xuXG4gICRsaW5lT25lLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgJGxpbmVUd28uYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuXG4gIHNob3dDb250cm9sKCk7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKGxpbmUpID0+IHtcbiAgaWYgKGxpbmUgPT09ICdvbmUnKSB7XG4gICAgLy9zdG9wQW5pbWF0ZSgndHdvJyk7XG4gICAgJGxpbmVPbmUuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICBsaW5lT25lQW5pbWF0aW5nID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChsaW5lID09PSAndHdvJykge1xuICAgIC8vc3RvcEFuaW1hdGUoJ29uZScpO1xuICAgICRsaW5lVHdvLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgbGluZVR3b0FuaW1hdGluZyA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3BBbmltYXRlID0gKGxpbmUpID0+IHtcbiAgaWYgKGxpbmUgPT09ICdvbmUnKSB7XG4gICAgJGxpbmVPbmVcbiAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgIGxpbmVPbmVBbmltYXRpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChsaW5lID09PSAndHdvJykge1xuICAgICRsaW5lVHdvXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IG9uQW5pbUVuZCA9ICgpID0+IHtcbiAgLy8gY2hlY2sgZm9yIHRoZSBzZWNvbmQgYW5pbWF0aW9uIGZpcnN0IHNvIHRoZSBzZWNvbmQgYW5pbWF0aW9uXG4gIC8vIGRvZXNuJ3QgZ2V0IHRyaWdnZXJlZCB0aGVuIGltbWVkaWF0ZWx5IGVuZGVkIGluc2lkZSB0aGlzIGZ1bmNcbiAgaWYgKGxpbmVUd29BbmltYXRpbmcpIHtcbiAgICBzdG9wQW5pbWF0ZSgndHdvJyk7XG5cbiAgICBzaG93Q29udHJvbCgpO1xuICB9XG5cbiAgaWYgKGxpbmVPbmVBbmltYXRpbmcpIHtcbiAgICBzdG9wQW5pbWF0ZSgnb25lJyk7XG5cbiAgICAvLyBpZiB0aGVyZSdzIHRleHQgaW4gbGluZVR3bywgYW5pbWF0ZSBpdFxuICAgIGlmICgkbGluZVR3by50ZXh0KCkubGVuZ3RoKSB7XG4gICAgICBhbmltYXRlKCd0d28nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0NvbnRyb2woKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dDb250cm9sID0gKCkgPT4ge1xuICBzaG93UHJldigpO1xuICBzaG93TmV4dCgpO1xufTtcblxuLy8gc2hvdyBuZXh0IGFycm93IGlmOlxuLy8gdGhlcmUgYXJlIHBhcnRzIGxlZnQgdG8gdGhpcyBoaWdobGlnaHRcbi8vIHRoZXJlIGFyZSBoaWdobGlnaHRzIGxlZnQgdG8gdGhlIHN0b3J5XG5jb25zdCBzaG93TmV4dCA9ICgpID0+IHtcbiAgLy8gdG9kbzogc2hvdyBhcnJvdyBpZiBuZXh0LCBidXQgbW92ZSBpbnRvIG91dHJvXG4gIGlmIChoaWdobGlnaHQuaGFzRGlhbG9nTGVmdChjdXIpIHx8IG5leHQpIHtcbiAgICAkY29udHJvbC5sYXN0KCkuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgfVxufTtcblxuLy8gc2hvdyBwcmUgYXJyb3cgaWY6XG4vLyB0aGVyZSBhcmUgcGFydHMgYmVmb3JlIHRoaXMgaGlnaGxpZ2h0XG4vLyB0aGVyZSBhcmUgaGlnaGxpZ2h0cyBlYXJsaWVyIGluIHRoZSBzdG9yeVxuY29uc3Qgc2hvd1ByZXYgPSAoKSA9PiB7XG4gIC8vIHRvZG86IHNob3cgYXJyb3cgaWYgbmV4dCwgYnV0IG1vdmUgaW50byBvdXRyb1xuICBpZiAoaGlnaGxpZ2h0Lmhhc0RpYWxvZ1ByZXYoY3VyKSB8fCBwcmV2KSB7XG4gICAgJGNvbnRyb2wuZmlyc3QoKS5hZGRDbGFzcygnc2hvdycpO1xuICB9XG59O1xuXG5jb25zdCBoaWRlQ29udHJvbCA9ICgpID0+IHtcbiAgJGNvbnRyb2wucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbn07XG5cbmNvbnN0IGNvbnRpbnVlSGlnaGxpZ2h0ID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIHByZXYgPSBoaWdobGlnaHRzLnByZXY7XG4gIG5leHQgPSBoaWdobGlnaHRzLm5leHQ7XG5cbiAgaWYgKCFjdXIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmICghY3VyLnN0YXJ0ZWQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gaWYgY3VycmVudGx5IGFuaW1hdGluZywgc2ltcGx5IGVuZCB0aGUgYW5pbWF0aW9uXG4gIGlmIChsaW5lT25lQW5pbWF0aW5nKSB7XG5cbiAgICAkbGluZU9uZVxuICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgbGluZU9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICAgICRsaW5lVHdvXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgc2hvd0NvbnRyb2woKTtcblxuICB9IGVsc2UgaWYgKGxpbmVUd29BbmltYXRpbmcpIHtcblxuICAgICRsaW5lVHdvXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgc2hvd0NvbnRyb2woKTtcblxuICB9IGVsc2Uge1xuICAgIGN1ci5jdXJEaWFsb2dQYXJ0Kys7XG5cbiAgICAvLyBubyBtb3JlIHRleHQgdG8gdGhpcyBoaWdobGlnaHRcbiAgICBpZiAoY3VyLmN1ckRpYWxvZ1BhcnQgPT09IGN1ci5kaWFsb2dQYXJ0cy5sZW5ndGgpIHtcbiAgICAgIGN1ci5jdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBza2lwIGFuaW1hdGlvbnMgZm9yIG5vd1xuICAgIHNob3dIaWdobGlnaHQoY3VyKTtcbiAgICAvL2FuaW1hdGVIaWdobGlnaHQoY3VyKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgcmV2ZXJzZUhpZ2hsaWdodCA9IChoaWdobGlnaHRzKSA9PiB7XG4gIGN1ciA9IGhpZ2hsaWdodHMuY3VyO1xuICBwcmV2ID0gaGlnaGxpZ2h0cy5wcmV2O1xuICBuZXh0ID0gaGlnaGxpZ2h0cy5uZXh0O1xuXG4gIGlmICghY3VyKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoIWN1ci5zdGFydGVkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGN1ci5jdXJEaWFsb2dQYXJ0LS07XG5cbiAgLy8gbm8gbW9yZSB0ZXh0IHRvIHRoaXMgaGlnaGxpZ2h0XG4gIGlmIChjdXIuY3VyRGlhbG9nUGFydCA9PT0gLTEpIHtcbiAgICBjdXIuY3VyRGlhbG9nUGFydCA9IDA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2hvd0hpZ2hsaWdodChjdXIpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNldEludHJvID0gKG9uZSwgdHdvKSA9PiB7XG4gIGlmICghcmVhZHkpIGluaXQoKTtcblxuICAkbGluZU9uZS50ZXh0KG9uZSk7XG4gICRsaW5lVHdvLnRleHQodHdvKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdGFydEhpZ2hsaWdodCxcbiAgY29udGludWVIaWdobGlnaHQsXG4gIHJldmVyc2VIaWdobGlnaHQsXG4gIHNldEludHJvLFxufTtcblxuIiwiY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgJCgnI2Rvd25sb2FkLXN0b3J5Jykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICQoJyNoaWdobGlnaHRzLWpzb24nKS5hdHRyKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoaGlnaGxpZ2h0cykpO1xuXG4gICAgbGV0IHRleHQgPSBlbmNvZGVVUklDb21wb25lbnQoJCgnaHRtbCcpLnByb3AoJ291dGVySFRNTCcpKTtcbiAgICBsZXQgZmlsZW5hbWUgPSAnYmxhc2ViYWxsLXN0b3J5JztcblxuICAgIGNvbnN0ICRnYW1lTmFtZSA9ICQoJy5nYW1lLW5hbWUnKTtcblxuICAgIGlmICgkZ2FtZU5hbWUudGV4dCgpKSB7XG4gICAgICBmaWxlbmFtZSA9ICRnYW1lTmFtZS50ZXh0KCkucmVwbGFjZSgnLCcsICcnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xuICAgIH1cblxuICAgIGZpbGVuYW1lICs9ICcuaHRtbCc7XG5cbiAgICAvLyBkb3dubG9hZCBjb2RlIGFkYXB0ZWQgZnJvbTpcbiAgICAvLyBodHRwczovL291cmNvZGV3b3JsZC5jb20vYXJ0aWNsZXMvcmVhZC8xODkvaG93LXRvLWNyZWF0ZS1hLWZpbGUtYW5kLWdlbmVyYXRlLWEtZG93bmxvYWQtd2l0aC1qYXZhc2NyaXB0LWluLXRoZS1icm93c2VyLXdpdGhvdXQtYS1zZXJ2ZXJcbiAgICBjb25zdCAkZGxCdXR0b24gPSAkKCc8YT4nKVxuICAgICAgLmF0dHIoJ2hyZWYnLCBgZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJHt0ZXh0fWApXG4gICAgICAuYXR0cignZG93bmxvYWQnLCBmaWxlbmFtZSlcbiAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG4gICAgICAuYXBwZW5kVG8oJCgnYm9keScpKTtcblxuICAgICRkbEJ1dHRvblswXS5jbGljaygpO1xuICAgICRkbEJ1dHRvbi5yZW1vdmUoKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCxcbn07XG5cbiIsImNvbnN0IG1sdXN0YXJkID0gcmVxdWlyZSgnbWx1c3RhcmQnKTtcblxuY29uc3QgaGlnaGxpZ2h0ID0gcmVxdWlyZSgnLi9oaWdobGlnaHQnKTtcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxubGV0IGdhbWVFdmVudHMgPSB7fTtcbmxldCBoaWdobGlnaHRzID0gW107XG5cbmNvbnN0IGdldFJhbmRvbUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVzID0gW1xuICAgIC8vIGludGVybmV0IHNlcmllcyBjaGFtcGlvbnNoaXAgZ2FtZXMsIHN0YXJ0aW5nIHNlYXNvbiAyXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzk3ZDg4YjllLTQwNmQtNGYzMS1hMThmLTJhM2I5MDNlZGMwMycsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lL2IzOGUwOTE3LTQzZGEtNDcwYy1hN2JiLTU3MTIzNjhhMjQ5MicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzYyOGEyZGRiLWY2MDgtNDExYi04ZDJlLTI3NjhjZDM2ZDU4YicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzUyZjYyNzRlLWUwZGMtNGMyMy04N2U4LTY4NmY2ZDJiMmJiZicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzEwNTM4ODQwLTFmNzItNGE5MC05OGU1LTcyNGE5ZGM1ZDA2MScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzlkODU4OTdlLWU2ODktNGVlYi1iMmFlLWI2OTY3OWEzZWJjNycsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lL2VlMzVhODY4LWIwMDQtNDQ5Zi1hOTljLTZhNDBjYTU0YjM4MicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzA2NTY2ZjhkLTNkMTQtNDk1Ni1iMDU0LTM2ZGM5ODFmZDU4OScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzcwNGRkZjJmLTNmZTItNDhiMy1iNjc0LWI5NDc2NWY3MGQwMScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzQ3YmNhYzQyLWY2NTEtNGZjOS05ZjkzLTU1NjdhN2IxMGRhZicsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzBmMTlkNzhkLWMyN2QtNDE0Ni04NjNkLWI1NWU2ZGFlMTY3OScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzE1MDZiODhmLTFmZWEtNGJhMS05MjU2LTFlYmIwMzBjZGNhZScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lL2IyY2FmZDIwLWE3OTktNDhmNi1hYmQ3LWM5OWJkNzlhNmJkMScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzJiYzZlODZlLThkMjUtNGUzNy05MDI2LTc4MGQ4YjY5NjljNScsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzQ2MjQ4MWY0LTdmOTctNDQxYy05ZmM5LWMzZGMzYzU4NDRhNCcsXG4gICAgJ2h0dHBzOi8vcmVibGFzZS5zaWJyLmRldi9nYW1lLzExYThhN2QzLTQ2MGItNGM5OS1hOThhLWIwYmQxZjU3NzA3MycsXG5cbiAgICAvLyBvdGhlciBnYW1lc1xuICAgIC8vIHMzZDEwMCAocml2IGxhbmRyeSlcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvYWExYjdmZGUtZjA3Ny00ZTRiLTgyNWYtMGQxNTM4ZDAyODIyJyxcbiAgXTtcblxuICByZXR1cm4gZ2FtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGdhbWVzLmxlbmd0aCAtIDEpKV07XG59O1xuXG5jb25zdCBpc1BsYXlCYWxsID0gKGdhbWVFdikgPT4ge1xuICByZXR1cm4gZ2FtZUV2Lmxhc3RVcGRhdGUuaW5kZXhPZignUGxheSBiYWxsJykgPj0gMDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlSGlnaGxpZ2h0cyA9IChjYikgPT4ge1xuICAkKCcuZ2FtZS1ldmVudF9fY29udGFpbmVyIGlucHV0OmNoZWNrZWQnKS5lYWNoKChfLCBjaGVja2VkKSA9PiB7XG4gICAgY29uc3QgaWQgPSAkKGNoZWNrZWQpLmF0dHIoJ2lkJyk7XG4gICAgbGV0IHZpc3VhbCA9ICdkaWFtb25kJztcblxuICAgIGlmIChpc1BsYXlCYWxsKGdhbWVFdmVudHNbaWRdLmV2LmRhdGEpKSB7XG4gICAgICB2aXN1YWwgPSAnaW50cm8nO1xuICAgIH1cblxuICAgIGNvbnN0IGhsID0gaGlnaGxpZ2h0Lm1ha2VIaWdobGlnaHQoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgZ2FtZUV2ZW50OiBnYW1lRXZlbnRzW2lkXS5ldixcbiAgICAgIG1sdXN0YXJkOiBnYW1lRXZlbnRzW2lkXS5tbHVzdGFyZCxcbiAgICAgIHZpc3VhbCxcbiAgICB9KTtcblxuICAgIGhpZ2hsaWdodHMucHVzaChobCk7XG4gIH0pO1xuXG4gIGNvbnNvbGUuZGVidWcoJ2dlbmVyYXRlSGlnaGxpZ2h0czonLCBoaWdobGlnaHRzKTtcbiAgY2IoaGlnaGxpZ2h0cyk7XG59O1xuXG5jb25zdCBtYWtlQ291bnRDaXJjbGUgPSAoY2xhc3NlcykgPT4ge1xuICByZXR1cm4gJCgnPHNwYW4+JykuYWRkQ2xhc3MoY2xhc3Nlcyk7XG59O1xuXG5jb25zdCByZW5kZXJHYW1lRXYgPSAoZ2FtZUV2KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBnYW1lRXYuZXYuZGF0YTtcblxuICBpZiAoIWRhdGEubGFzdFVwZGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0ICRnYW1lRXYgPSAkKCc8ZGl2PicpO1xuXG4gIC8vIGZvcm0gc3R1ZmZcbiAgY29uc3QgJGNoQ29udGFpbmVyID0gJCgnPGRpdj4nKTtcbiAgY29uc3QgJGNoZWNrID0gJCgnPGlucHV0PicpO1xuICBjb25zdCAkbGFiZWwgPSAkKCc8bGFiZWw+Jyk7XG5cbiAgbGV0IHVwZGF0ZSA9IGAke2RhdGEubGFzdFVwZGF0ZX0gJHtkYXRhLnNjb3JlVXBkYXRlIHx8ICcnfWA7XG5cbiAgJGNoZWNrXG4gICAgLmFkZENsYXNzKCdmb3JtLWNoZWNrLWlucHV0JylcbiAgICAuYXR0cignaWQnLCBnYW1lRXYuZXYuaGFzaClcbiAgICAuYXR0cigndHlwZScsICdjaGVja2JveCcpXG4gICAgLmF0dHIoJ25hbWUnLCAnZ2FtZSBldmVudCcpXG4gICAgLnZhbCgnJyk7XG5cbiAgLy9pZiAoaXNQbGF5QmFsbChkYXRhKSkge1xuICAgICRjaGVja1xuICAgICAgLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIC8vfVxuXG4gICRsYWJlbFxuICAgIC5hZGRDbGFzcygnZm9ybS1jaGVjay1sYWJlbCcpXG4gICAgLmF0dHIoJ2ZvcicsIGdhbWVFdi5ldi5oYXNoKVxuICAgIC50ZXh0KHVwZGF0ZSk7XG5cbiAgJGNoQ29udGFpbmVyXG4gICAgLmFkZENsYXNzKCdmb3JtLWNoZWNrIGNvbC03JylcbiAgICAuYXBwZW5kKCRjaGVjaylcbiAgICAuYXBwZW5kKCRsYWJlbCk7XG5cbiAgLy8gZ2FtZSBldmVudCBpbmZvXG4gIGNvbnN0ICRnYW1lRXZJbmZvID0gJCgnPGRpdj4nKTtcbiAgY29uc3QgJHNjb3JlID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRiYXNlcyA9ICQoJzxzcGFuPicpO1xuICBjb25zdCAkYmFsbHMgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJHN0cmlrZXMgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJG91dHMgPSAkKCc8c3Bhbj4nKTtcblxuICBsZXQgaG9tZUVtb2ppID0gdXRpbC5nZXRFbW9qaSgnaG9tZScsIGRhdGEpO1xuICBsZXQgYXdheUVtb2ppID0gdXRpbC5nZXRFbW9qaSgnYXdheScsIGRhdGEpO1xuXG4gIGxldCBzY29yZSA9IGAke2hvbWVFbW9qaX0gJHtkYXRhLmhvbWVTY29yZX0gOiAke2F3YXlFbW9qaX0gJHtkYXRhLmF3YXlTY29yZX1gO1xuICBsZXQgYmFzZXMgPSAnJztcblxuICAvLyBmaWxsIGluIGJhbGxzIGNvdW50XG4gIGZvciAobGV0IGJhbGwgPSAwOyBiYWxsIDwgZGF0YS5hdEJhdEJhbGxzOyBiYWxsKyspIHtcbiAgICAkYmFsbHMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGZ1bGwnKSk7XG4gIH1cblxuICBmb3IgKGxldCBiYWxsID0gMzsgYmFsbCA+IGRhdGEuYXRCYXRCYWxsczsgYmFsbC0tKSB7XG4gICAgJGJhbGxzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBlbXB0eScpKTtcbiAgfVxuXG4gIC8vIGZpbGwgaW4gc3RyaWtlcyBjb3VudFxuICBmb3IgKGxldCBzdHJpa2UgPSAwOyBzdHJpa2UgPCBkYXRhLmF0QmF0U3RyaWtlczsgc3RyaWtlKyspIHtcbiAgICAkc3RyaWtlcy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZnVsbCcpKTtcbiAgfVxuXG4gIGZvciAobGV0IHN0cmlrZSA9IDI7IHN0cmlrZSA+IGRhdGEuYXRCYXRTdHJpa2VzOyBzdHJpa2UtLSkge1xuICAgICRzdHJpa2VzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBlbXB0eScpKTtcbiAgfVxuXG4gIC8vIGZpbGwgaW4gb3V0cyBjb3VudFxuICBmb3IgKGxldCBvdXQgPSAwOyBvdXQgPCBkYXRhLmhhbGZJbm5pbmdPdXRzOyBvdXQrKykge1xuICAgICRvdXRzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBmdWxsJykpO1xuICB9XG5cbiAgZm9yIChsZXQgb3V0ID0gMjsgb3V0ID4gZGF0YS5oYWxmSW5uaW5nT3V0czsgb3V0LS0pIHtcbiAgICAkb3V0cy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZW1wdHknKSk7XG4gIH1cblxuICAvLyBmaWxsIGluIGJhc2UgZGlhbW9uZHNcbiAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMudGhpcmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5zZWNvbmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy5maXJzdC5wbGF5ZXJOYW1lKSk7XG4gIC8vIHRvZG86IGRlYWwgd2l0aCA0IGJhc2VzXG4gIC8vJGJhc2VzLmFwcGVuZChtYWtlQmFzZURpYW1vbmQoZ2FtZUV2Lm1sdXN0YXJkLmJhc2VSdW5uZXJzLmZpcnN0LnBsYXllck5hbWUpKTtcblxuICAkc2NvcmVcbiAgICAudGV4dChzY29yZSk7XG4gICRiYWxsc1xuICAgIC5hdHRyKCd0aXRsZScsICdCYWxscycpXG4gICAgLmFkZENsYXNzKCdiYWxscy1jb3VudCcpO1xuICAkc3RyaWtlc1xuICAgIC5hdHRyKCd0aXRsZScsICdTdHJpa2VzJylcbiAgICAuYWRkQ2xhc3MoJ3N0cmlrZXMtY291bnQnKTtcbiAgJG91dHNcbiAgICAuYXR0cigndGl0bGUnLCAnT3V0cycpXG4gICAgLmFkZENsYXNzKCdvdXRzLWNvdW50Jyk7XG4gICRiYXNlc1xuICAgIC5hdHRyKCd0aXRsZScsICdCYXNlcyBvY2N1cGllZCcpXG4gICAgLmFkZENsYXNzKCdiYXNlcy1vY2N1cGllZCcpO1xuXG4gICRnYW1lRXZJbmZvXG4gICAgLmFkZENsYXNzKCdjb2wtNScpXG4gICAgLmFwcGVuZCgkc2NvcmUpXG4gICAgLmFwcGVuZCgkYmFzZXMpXG4gICAgLmFwcGVuZCgkYmFsbHMpXG4gICAgLmFwcGVuZCgkc3RyaWtlcylcbiAgICAuYXBwZW5kKCRvdXRzKTtcblxuICAkZ2FtZUV2XG4gICAgLmFkZENsYXNzKCdnYW1lLWV2ZW50X19jb250YWluZXIgcm93IGJvcmRlcicpXG4gICAgLmFwcGVuZCgkY2hDb250YWluZXIpXG4gICAgLmFwcGVuZCgkZ2FtZUV2SW5mbyk7XG5cbiAgcmV0dXJuICRnYW1lRXY7XG59O1xuXG5jb25zdCByZW5kZXJHYW1lRXZzID0gKCkgPT4ge1xuICBzdG9wTG9hZGluZygpO1xuICAvLyQoJyNnYW1lLWV2ZW50cy1zZWxlY3QnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgY29uc3QgJGNvbnRhaW5lciA9ICQoJyNnYW1lLWV2ZW50cy1jaG9vc2VfX2NvbnRhaW5lcicpO1xuXG4gIC8vIGdvdHRhIHJlbmRlciBzb21lIGdlbmVyYWwgc3R1ZmYgdG9vIChob21lIHZzIGF3YXksIHMjZCMsIHdlYXRoZXIpXG4gIC8vIGFsc286IGxhYmVsIGZvciB0aGUgc2VsZWN0LCBhbmQgdGhlIHNlbGVjdCBpdHNlbGZcbiAgZm9yIChsZXQgaWQgaW4gZ2FtZUV2ZW50cykge1xuICAgIGxldCAkZ2FtZUV2ID0gcmVuZGVyR2FtZUV2KGdhbWVFdmVudHNbaWRdKTtcblxuICAgIGlmICgkZ2FtZUV2KSB7XG4gICAgICAkY29udGFpbmVyLmFwcGVuZCgkZ2FtZUV2KTtcbiAgICB9XG4gIH1cblxuICAvLyBoYWNrIGZvciBtdnA6XG4gICQoJyNnYW1lLWV2ZW50cy1jaG9vc2VfX2Zvcm0gYnV0dG9uJylbMF0uY2xpY2soKTtcbn07XG5cbmNvbnN0IGdldEdhbWVFdmVudHMgPSBhc3luYyAoZ2FtZUlkLCBuZXh0UGFnZSkgPT4ge1xuICBsZXQgZ2FtZXNVUkwgPSBgaHR0cHM6Ly9hcGkuc2lici5kZXYvY2hyb25pY2xlci92MS9nYW1lcy91cGRhdGVzP2dhbWU9JHtnYW1lSWR9YDtcblxuICBpZiAobmV4dFBhZ2UpIHtcbiAgICBnYW1lc1VSTCArPSBgJnBhZ2U9JHtuZXh0UGFnZX1gO1xuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk7XG5cbiAgLy9jb25zdCByZXNwID0gYXdhaXQgZmV0Y2goZ2FtZXNVUkwpO1xuICBhd2FpdCBmZXRjaChnYW1lc1VSTClcbiAgICAvLyBjYXRjaCBzZXJ2ZXIgZXJyb3JzLCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDE2NDAyN1xuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vaWYgKHJlc3Aub2spIHtcbiAgICAgIC8vcmVzcC5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZm9yIChsZXQgZ2FtZUV2IG9mIGRhdGEuZGF0YSkge1xuICAgICAgICBnYW1lRXZlbnRzW2dhbWVFdi5oYXNoXSA9IHtcbiAgICAgICAgICBldjogZ2FtZUV2LFxuICAgICAgICAgIG1sdXN0YXJkOiBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KGdhbWVFdi5kYXRhKSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEubmV4dFBhZ2UpIHtcbiAgICAgICAgZ2V0R2FtZUV2ZW50cyhnYW1lSWQsIGRhdGEubmV4dFBhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG9uZSBsb2FkaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgICByZW5kZXJHYW1lRXZzKCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2dldEdhbWVFdmVudHMgZG9uZTonLCBnYW1lRXZlbnRzKTtcbiAgICAgIH1cbiAgICAgIC8vfSk7XG4gICAgICAgIC8vY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICAvL31cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAkKCcjZ2FtZS1ldmVudC1mb3JtIC5lcnJvci1tc2cnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICBzdG9wTG9hZGluZygpO1xuICAgIH0pO1xuXG4gIC8vfSBlbHNlIHtcbiAgICAvLyB0b2RvOiBhZGQgZXJyb3IgaGFuZGxpbmdcbiAgICAvLyQoJyNnYW1lLWV2ZW50LWZvcm0gZXJyb3ItbXNnJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIC8vc3RvcExvYWRpbmcoKTtcbiAgLy99XG59O1xuXG5jb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtZXZlbnQtZm9ybScpO1xuXG4gICRnYW1lRXZGb3JtLmZpbmQoJy5lcnJvci1tc2cnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICRnYW1lRXZGb3JtLmZpbmQoJ2J1dHRvbicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgJGdhbWVFdkZvcm0uZmluZCgnLmxvYWRpbmcnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG59O1xuXG5jb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgJGdhbWVFdkZvcm0gPSAkKCcjZ2FtZS1ldmVudC1mb3JtJyk7XG5cbiAgJGdhbWVFdkZvcm0uZmluZCgnYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkZ2FtZUV2Rm9ybS5maW5kKCcubG9hZGluZycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbn07XG5cbmNvbnN0IGluaXQgPSAoaGlnaGxpZ2h0c1JlYWR5Q2IpID0+IHtcbiAgY29uc3QgJGdhbWVFdkZvcm0gPSAkKCcjZ2FtZS1ldmVudC1mb3JtJyk7XG4gIGNvbnN0ICRnYW1lSW5wdXQgPSAkKCcjZ2FtZS1pZCcpO1xuXG4gIC8vIGZvY3VzIG9uIGdhbWUgaW5wdXRcbiAgJGdhbWVJbnB1dC5mb2N1cygpO1xuXG4gIC8vIHBpY2sgYSByYW5kb20gaW50ZXJlc3RpbmcgZ2FtZSBhcyB0aGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBpbnB1dFxuICAkZ2FtZUlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJywgZ2V0UmFuZG9tR2FtZSgpKTtcblxuICAkZ2FtZUV2Rm9ybS5vbignc3VibWl0JywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBnYW1lVmFsID0gJGdhbWVJbnB1dC52YWwoKTtcblxuICAgIGlmICghZ2FtZVZhbCkge1xuICAgICAgZ2FtZVZhbCA9ICRnYW1lSW5wdXQuYXR0cigncGxhY2Vob2xkZXInKTtcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lSWQgPSBnYW1lVmFsLnNwbGl0KCcvJykucG9wKCk7XG4gICAgZ2V0R2FtZUV2ZW50cyhnYW1lSWQpO1xuICB9KTtcblxuICBjb25zdCAkaGlnaGxpZ2h0c1NlbGVjdEZvcm0gPSAkKCcjZ2FtZS1ldmVudHMtY2hvb3NlX19mb3JtJyk7XG5cbiAgJGhpZ2hsaWdodHNTZWxlY3RGb3JtLm9uKCdzdWJtaXQnLCAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdlbmVyYXRlSGlnaGxpZ2h0cyhoaWdobGlnaHRzUmVhZHlDYik7XG4gIH0pO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCxcbn07XG5cbiIsImNvbnN0IGdyYW5kU2xhbGFtaSA9IHJlcXVpcmUoJ2dyYW5kLXNsYWxhbWknKTtcblxuLy8gbWFraW5nIGEgJ2NsYXNzJyBmb3IgaGlnaGxpZ2h0cyBpbiB0aGUgb2xkLXNjaG9vbCB3YXlcbi8vIGNhdXNlIGkgZG9uJ3Qgd2FubmEgaGF2ZSB0byBjb21wbGljYXRlIHRoaW5ncyBmdXJ0aGVyIHdpdGggYmFiZWxcbmNvbnN0IG1ha2VIaWdobGlnaHQgPSAoc2V0dGluZ3MpID0+IHtcbiAgc2V0dGluZ3MgPSBzZXR0aW5ncyB8fCB7fTtcblxuICBsZXQgaWQ7XG4gIGxldCBnYW1lRXZlbnQ7XG4gIGxldCBtbHVzdGFyZDtcbiAgbGV0IGNvbW1lbnRhcnk7XG4gIGxldCBtYXhEaWFsb2dMZW47XG4gIGxldCBkaWFsb2dQYXJ0cztcbiAgbGV0IGN1ckRpYWxvZ1BhcnQ7XG4gIGxldCB2aXN1YWw7XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZCA9IHNldHRpbmdzLmlkO1xuICAgIGdhbWVFdmVudCA9IHNldHRpbmdzLmdhbWVFdmVudDtcbiAgICBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkO1xuICAgIHZpc3VhbCA9IHNldHRpbmdzLnZpc3VhbDtcbiAgICBjb21tZW50YXJ5ID0gZ2VuZXJhdGVDb21tZW50YXJ5KCk7XG4gICAgbWF4RGlhbG9nTGVuID0gc2V0TWF4RGlhbG9nTGVuKCk7XG4gICAgZGlhbG9nUGFydHMgPSBbXTtcbiAgICBjdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICBicmVha0ludG9EaWFsb2dQYXJ0cygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgZ2FtZUV2ZW50LFxuICAgICAgbWx1c3RhcmQsXG4gICAgICBjb21tZW50YXJ5LFxuICAgICAgZGlhbG9nUGFydHMsXG4gICAgICBjdXJEaWFsb2dQYXJ0LFxuICAgICAgaGFzRGlhbG9nTGVmdCxcbiAgICAgIHZpc3VhbCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlQ29tbWVudGFyeSA9ICgpID0+IHtcbiAgICAvLyBmb3IgbXZwOiBza2lwIGdyYW5kIHNsYWxhbWksIGp1c3QgcmV0dXJuIG9yaWdpbmFsIGxhc3RVcGRhdGUgK1xuICAgIC8vIHNjb3JlVXBkYXRlIGlmIHByZXNlbnRcblxuICAgIGxldCByZXQgPSAnJztcblxuICAgIGlmIChnYW1lRXZlbnQuZGF0YS5sYXN0VXBkYXRlKSB7XG4gICAgICByZXQgKz0gZ2FtZUV2ZW50LmRhdGEubGFzdFVwZGF0ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGdhbWVFdmVudC5kYXRhLnNjb3JlVXBkYXRlKSB7XG4gICAgICByZXQgKz0gYFxcbiR7Z2FtZUV2ZW50LmRhdGEuc2NvcmVVcGRhdGV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuXG4gICAgLy9yZXR1cm4gZ3JhbmRTbGFsYW1pLmdldENvbW1lbnQoe1xuICAgICAgLy9nYW1lRXZlbnQ6IGdhbWVFdmVudC5kYXRhLFxuICAgICAgLy9tbHVzdGFyZDogbWx1c3RhcmQsXG4gICAgLy99KTtcbiAgfTtcblxuICAvLyB0b2RvOiBkbyBpIHdhbm5hIHN1cHBvcnQgbW9iaWxlPyB0aGVuIHVwZGF0ZSB0aGlzIGFjY29yZGluZ2x5XG4gIGNvbnN0IHNldE1heERpYWxvZ0xlbiA9ICgpID0+IHtcbiAgICByZXR1cm4gMzU7XG4gIH07XG5cbiAgY29uc3QgYnJlYWtJbnRvRGlhbG9nUGFydHMgPSAoKSA9PiB7XG4gICAgLy8gc3BsaXQgYnkgbmV3bGluZXMgKGVuZm9yY2VkIHBhY2luZylcbiAgICBjb25zdCBwYWNpbmdQYXJ0cyA9IGNvbW1lbnRhcnkuc3BsaXQoJ1xcbicpO1xuXG4gICAgcGFjaW5nUGFydHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgYnJlYWtJbnRvUGFydHMocCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gc3BsaXQgZWFjaCBwYXJ0IGludG8gaXRzIGFuaW1hdGlvbiBwYXJ0cyBieSBsaW5lIGxlbmd0aFxuICBjb25zdCBicmVha0ludG9QYXJ0cyA9ICh0ZXh0KSA9PiB7XG4gICAgbGV0IHBhcnRzID0gW1tdLCBbXV07XG4gICAgbGV0IHVuZmlsbGVkID0gMDtcbiAgICBsZXQgbGVuID0gMDtcblxuICAgIHRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICBsZXQgd29yZExlbiA9IHdvcmQubGVuZ3RoO1xuXG4gICAgICBpZiAoKGxlbiArIHdvcmRMZW4pID4gbWF4RGlhbG9nTGVuKSB7XG4gICAgICAgIGxlbiA9IDA7XG5cbiAgICAgICAgaWYgKHVuZmlsbGVkID09PSAxKSB7XG4gICAgICAgICAgZGlhbG9nUGFydHMucHVzaChtYWtlU2VudGVuY2VzKHBhcnRzKSk7XG4gICAgICAgICAgcGFydHMgPSBbW10sIFtdXTtcbiAgICAgICAgICB1bmZpbGxlZCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5maWxsZWQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgobGVuICsgd29yZExlbikgPD0gbWF4RGlhbG9nTGVuKSB7XG4gICAgICAgIHBhcnRzW3VuZmlsbGVkXS5wdXNoKHdvcmQpO1xuICAgICAgICBsZW4gKz0gd29yZExlbiArIDE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dQYXJ0cy5wdXNoKG1ha2VTZW50ZW5jZXMocGFydHMpKTtcbiAgfTtcblxuICBjb25zdCBtYWtlU2VudGVuY2VzID0gKHBhcnRzKSA9PiB7XG4gICAgcmV0dXJuIHBhcnRzLm1hcCgod29yZHMpID0+IHtcbiAgICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9jb25zdCBoYXNEaWFsb2dMZWZ0ID0gKCkgPT4ge1xuICAgIC8vcmV0dXJuICEoKGN1ckRpYWxvZ1BhcnQgKyAxKSA9PT0gZGlhbG9nUGFydHMubGVuZ3RoKTtcbiAgLy99O1xuXG4gIHJldHVybiBpbml0KCk7XG59O1xuXG4vLyB1dGlsaXRpZXNcbmNvbnN0IGhhc0RpYWxvZ0xlZnQgPSAoaGlnaGxpZ2h0KSA9PiB7XG4gICAgcmV0dXJuICEoKGhpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0ICsgMSkgPT09IGhpZ2hsaWdodC5kaWFsb2dQYXJ0cy5sZW5ndGgpO1xufTtcblxuY29uc3QgaGFzRGlhbG9nUHJldiA9IChoaWdobGlnaHQpID0+IHtcbiAgICByZXR1cm4gISgoaGlnaGxpZ2h0LmN1ckRpYWxvZ1BhcnQgLSAxKSA9PT0gLTEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ha2VIaWdobGlnaHQsXG4gIGhhc0RpYWxvZ0xlZnQsXG4gIGhhc0RpYWxvZ1ByZXYsXG59O1xuXG4iLCJjb25zdCBnYW1lRXZlbnRTZWxlY3RvciA9IHJlcXVpcmUoJy4vZ2FtZS1ldmVudC1zZWxlY3RvcicpO1xuY29uc3QgZGlhbG9nID0gcmVxdWlyZSgnLi9kaWFsb2cnKTtcbmNvbnN0IHZpc3VhbCA9IHJlcXVpcmUoJy4vdmlzdWFsJyk7XG5jb25zdCBkb3dubG9hZGVyID0gcmVxdWlyZSgnLi9kb3dubG9hZGVyJyk7XG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi9saWIvdGVhbXMtZGF0YScpO1xuXG5nbG9iYWwuaGlnaGxpZ2h0cyA9IFtdO1xubGV0IGN1ckhpZ2hsaWdodCA9IDA7XG5sZXQgaW50cm8gPSB0cnVlO1xuXG5jb25zdCBESUFNT05EX0NPTE9VUlMgPSB7XG4gIG1vdW5kOiAnZmZjZjU2JyxcbiAgbW91bmRPdXRsaW5lOiAnMDAzMDQ5JyxcbiAgYmFzZXM6ICdmZjk3NzAnLFxuICBiYXNlc091dGxpbmU6ICcwMDMwNDknLFxuICBncmFzczogJzJiOTM0OCcsXG4gIGdyYXNzT3V0bGluZTogJzJiOTM0OCcsXG4gIGRpcnQ6ICdmZmNmNTYnLFxuICBkaXJ0T3V0bGluZTogJ2ZmZicsXG4gIGZvdWxab25lOiAnZWRlYWQwJyxcbiAgZm91bFpvbmVPdXRsaW5lOiAnZWRlYWQwJyxcbn07XG5cbmNvbnN0IGdldEhpZ2hsaWdodHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJldjogaGlnaGxpZ2h0c1tjdXJIaWdobGlnaHQgLSAxXSxcbiAgICBjdXI6IGhpZ2hsaWdodHNbY3VySGlnaGxpZ2h0XSxcbiAgICBuZXh0OiBoaWdobGlnaHRzW2N1ckhpZ2hsaWdodCArIDFdLFxuICB9O1xufTtcblxuY29uc3QgbmV4dEhpZ2hsaWdodCA9IChza2lwQW5pbWF0aW9uKSA9PiB7XG4gIGNvbnN0IGhscyA9IGdldEhpZ2hsaWdodHMoKTtcblxuICB2aXN1YWwuc2hvd1Zpc3VhbChobHMuY3VyLnZpc3VhbCk7XG4gIHZpc3VhbC51cGRhdGVEaWFtb25kKGhscyk7XG4gIGRpYWxvZy5zdGFydEhpZ2hsaWdodChobHMsIHNraXBBbmltYXRpb24pO1xufTtcblxuY29uc3QgY29udGludWVIaWdobGlnaHQgPSAoKSA9PiB7XG4gIHJldHVybiBkaWFsb2cuY29udGludWVIaWdobGlnaHQoZ2V0SGlnaGxpZ2h0cygpKTtcbn07XG5cbmNvbnN0IHJldmVyc2VIaWdobGlnaHQgPSAoKSA9PiB7XG4gIHJldHVybiBkaWFsb2cucmV2ZXJzZUhpZ2hsaWdodChnZXRIaWdobGlnaHRzKCkpO1xufTtcblxuY29uc3QgcGxheUhpZ2hsaWdodCA9IChkaXJlY3Rpb24pID0+IHtcblxuICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAvLyB0cnkgdG8gYWR2YW5jZSB0aGUgaGlnaGxpZ2h0LCBpZiB0aGVyZSdzIG1vcmUgdGV4dCB0byBhbmltYXRlXG4gICAgaWYgKCFjb250aW51ZUhpZ2hsaWdodCgpKSB7XG5cbiAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdGhlcmUncyBubyBtb3JlIGhpZ2hsaWdodHNcbiAgICAgIGlmIChoaWdobGlnaHRzLmxlbmd0aCAtIDEgPT09IGN1ckhpZ2hsaWdodCkgeyByZXR1cm4gfTtcblxuICAgICAgY3VySGlnaGxpZ2h0Kys7XG5cbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBtb3JlIGhpZ2hsaWdodHMsIGRvbid0IGFkdmFuY2VcbiAgICAgIGlmIChoaWdobGlnaHRzLmxlbmd0aCA9PT0gY3VySGlnaGxpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlLCBzaG93IHRoZSBuZXh0IGhpZ2hsaWdodFxuICAgICAgbmV4dEhpZ2hsaWdodCh0cnVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gdHJ5IHRvIHJldmVyc2UgaGlnaGxpZ2h0LCBpZiB0aGVyZSB3YXMgcHJldmlvdXMgdGV4dCB0byBhbmltYXRlXG4gICAgaWYgKCFyZXZlcnNlSGlnaGxpZ2h0KCkpIHtcblxuICAgICAgLy8gZG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIHByZXZpb3VzIGhpZ2hsaWdodHNcbiAgICAgIGlmIChjdXJIaWdobGlnaHQgPT09IDApIHsgcmV0dXJuIH07XG5cbiAgICAgIGN1ckhpZ2hsaWdodC0tO1xuXG4gICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gcHJldmlvdXMgaGlnaGxpZ2h0cywgZG9uJ3QgcmV2ZXJzZVxuICAgICAgaWYgKGN1ckhpZ2hsaWdodCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0b2RvOiBmaXggdGhlIG5hbWluZywgb2ggZ29kcyB0aGlzIGlzIGN1cnNlZFxuICAgICAgbmV4dEhpZ2hsaWdodCh0cnVlKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUFjdGlvbiA9IChldnQpID0+IHtcbiAgbGV0IGRpcmVjdGlvbjtcblxuICBpZiAoZXZ0LnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDM3KSB7IC8vIGFycm93IGxlZnRcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGlyZWN0aW9uID0gJ3ByZXYnO1xuICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpcmVjdGlvbiA9ICduZXh0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIHsgLy8gY2xpY2tcbiAgICAvLyB0b2RvOiBmaXggdGhpcywgdGhpcyBpcyBjdXJzZWQ6XG4gICAgaWYgKCQoZXZ0LnRhcmdldCkuYXR0cignaWQnKS5pbmRleE9mKCduZXh0JykgPj0gMCkge1xuICAgICAgZGlyZWN0aW9uID0gJ25leHQnO1xuICAgIH0gZWxzZSBpZiAoJChldnQudGFyZ2V0KS5hdHRyKCdpZCcpLmluZGV4T2YoJ25leHQnKSA+PSAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSAncHJldic7XG4gICAgfVxuICB9XG5cbiAgcGxheUhpZ2hsaWdodChkaXJlY3Rpb24pO1xufTtcblxuY29uc3Qgc2V0dXBJbnRybyA9ICgpID0+IHtcbiAgLy8gZ3JhYiBnYW1lIGluZm8gZnJvbSBmaXJzdCBoaWdobGlnaHRcbiAgY29uc3QgZ2FtZUV2ID0gaGlnaGxpZ2h0c1swXS5nYW1lRXZlbnQuZGF0YTtcbiAgY29uc3QgJGhvbWUgPSAkKCcudnMtbG9nb19faG9tZScpO1xuICBjb25zdCAkYXdheSA9ICQoJy52cy1sb2dvX19hd2F5Jyk7XG5cbiAgbGV0IGhOaWNrID0gZ2FtZUV2LmhvbWVUZWFtTmlja25hbWUuc3BsaXQoJyAnKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICBsZXQgYU5pY2sgPSBnYW1lRXYuYXdheVRlYW1OaWNrbmFtZS5zcGxpdCgnICcpLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKGFOaWNrID09PSAnbWVjaGFuaWNzJykge1xuICAgIGFOaWNrICs9ICctYXdheSc7XG4gIH1cblxuICAkKCcuZ2FtZS1uYW1lJykudGV4dChgU2Vhc29uICR7Z2FtZUV2LnNlYXNvbiArIDF9LCBEYXkgJHtnYW1lRXYuZGF5ICsgMX1gKTtcbiAgJGhvbWUuYXR0cignc3JjJywgYC4vaW1hZ2VzL2xvZ28tJHtoTmlja30ucG5nYCk7XG4gICRhd2F5LmF0dHIoJ3NyYycsIGAuL2ltYWdlcy9sb2dvLSR7YU5pY2t9LnBuZ2ApO1xuICAkKCcuZGlhbW9uZC1oZWFkZXIgLm1hdGNodXAnKS50ZXh0KGAke2dhbWVFdi5ob21lVGVhbU5hbWV9IHZzLiAke2dhbWVFdi5hd2F5VGVhbU5hbWV9YCk7XG5cbiAgLy8gZ2VvcmdpYXMgZG9uJ3QgaGF2ZSBhIHN0YW5kYXJkIHNpemUgbG9nb1xuICBpZiAoaE5pY2sgPT09ICdnZW9yZ2lhcycpIHtcbiAgICAkaG9tZS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gIH1cblxuICBpZiAoYU5pY2sgPT09ICdnZW9yZ2lhcycpIHtcbiAgICAkYXdheS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XG4gIH1cblxuICAvLyBzZXQgdGhlIGRpYW1vbmQgY29sb3VycyBhbmQgYWRkIHRoZSBkaWFtb25kIGNzc1xuICBjb25zdCBob21lVGVhbSA9IHRlYW1zRGF0YVtnYW1lRXYuaG9tZVRlYW1dO1xuICBjb25zdCAkZGlhbW9uZCA9ICQoJyNkaWFtb25kLXN2ZycpO1xuICBjb25zdCAkZ3Jhc3MgPSAkZGlhbW9uZC5maW5kKCcuZGlhbW9uZC1zdmdfX2dyYXNzJyk7XG4gIGNvbnN0ICRkaXJ0ID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19kaXJ0Jyk7XG4gIGNvbnN0ICRmb3VsWm9uZSA9ICRkaWFtb25kLmZpbmQoJy5kaWFtb25kLXN2Z19fZm91bC16b25lJyk7XG4gIGNvbnN0ICRtb3VuZCA9ICRkaWFtb25kLmZpbmQoJy5kaWFtb25kLXN2Z19fbW91bmQnKTtcbiAgY29uc3QgJGJhc2VzID0gJGRpYW1vbmQuZmluZCgnLmRpYW1vbmQtc3ZnX19iYXNlJyk7XG4gIGNvbnN0ICRsb2dvID0gJCgnLmRpYW1vbmQtbG9nbycpO1xuXG4gIC8vIGNvbG91ciB0aGUgbW91bmRcbiAgLy8gdHJpZXMgbW91bmQgY29sb3VyLCBvciBzZXRzIG9mZmljaWFsIGFzIGRlZmF1bHRcbiAgJG1vdW5kXG4gICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5tb3VuZCB8fCBob21lVGVhbS5jb2xvdXJzLm9mZmljaWFsfWApXG4gICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLm1vdW5kT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMubW91bmRPdXRsaW5lfWApO1xuXG4gIC8vIGNvbG91ciB0aGUgYmFzZXNcbiAgLy8gdHJpZXMgYmFzZXMgY29sb3VyLCBvciBzZXRzIG9mZmljaWFsIGFzIGRlZmF1bHRcbiAgJGJhc2VzXG4gICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5iYXNlcyB8fCBob21lVGVhbS5jb2xvdXJzLm9mZmljaWFsfWApXG4gICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmJhc2VzT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuYmFzZXNPdXRsaW5lfWApO1xuXG4gIC8vIGNvbG91ciB0aGUgZ3Jhc3NcbiAgJGdyYXNzLmZpcnN0KClcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZ3Jhc3MgfHwgRElBTU9ORF9DT0xPVVJTLmdyYXNzfWApXG4gICAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZ3Jhc3NPdXRsaW5lIHx8IERJQU1PTkRfQ09MT1VSUy5ncmFzc091dGxpbmV9YCk7XG4gICAgJGdyYXNzLmxhc3QoKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5ncmFzcyB8fCBESUFNT05EX0NPTE9VUlMuZ3Jhc3N9YClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0T3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuZ3Jhc3NPdXRsaW5lfWApO1xuXG4gIC8vIGNvbG91ciB0aGUgZGlydFxuICAkZGlydFxuICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtLmNvbG91cnMuZGlydCB8fCBESUFNT05EX0NPTE9VUlMuZGlydH1gKVxuICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW0uY29sb3Vycy5kaXJ0T3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuZGlydE91dGxpbmV9YCk7XG5cbiAgLy8gY29sb3VyIHRoZSBmb3VsIHpvbmVcbiAgJGZvdWxab25lXG4gICAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbS5jb2xvdXJzLmZvdWxab25lIHx8IERJQU1PTkRfQ09MT1VSUy5mb3VsWm9uZX1gKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbS5jb2xvdXJzLmZvdWxab25lT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuZm91bFpvbmVPdXRsaW5lfWApO1xuXG4gIC8vIHVwZGF0ZSB0aGUgZGlhbW9uZCBzdmdcbiAgJCgnI2RpYW1vbmRfX2ltYWdlJylcbiAgICAuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcrIGJ0b2EoJGRpYW1vbmQuaHRtbCgpKSArICcpJyk7XG5cbiAgLy8gZHJhdyBob21lIGxvZ28gYmVoaW5kIGhvbWUgcGxhdGVcbiAgJGxvZ29cbiAgICAuYXR0cignc3JjJywgaG9tZVRlYW0uc3RhZGl1bUxvZ29VUkwgfHwgaG9tZVRlYW0uaG9tZUxvZ29VUkwpXG4gICAgLnRvZ2dsZUNsYXNzKCdtLW91dGxpbmUnLCBob21lVGVhbS5zdGFkaXVtTG9nb091dGxpbmUpO1xuXG4gIC8vJCgnLm1vdW5kLWxvZ28nKS5maXJzdCgpLmF0dHIoJ3NyYycsIGhvbWVUZWFtLmhvbWVMb2dvVVJMKTtcblxuICAvLyBmb2N1cyBvbiB0aGUgYm9keSBzbyBhcnJvdyBrZXl1cHMgY2FuIGJlIHJlZ2lzdGVyZWRcbiAgJCgnYm9keScpLmZvY3VzKCk7XG5cbiAgbmV4dEhpZ2hsaWdodCh0cnVlKTtcbn07XG5cbmNvbnN0IG9uSGlnaGxpZ2h0c1JlYWR5ID0gKGhscykgPT4ge1xuXG4gICQoJyNnYW1lLWV2ZW50LWZvcm0nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJyN2aXN1YWxzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICBoaWdobGlnaHRzID0gaGxzO1xuXG4gIHNldHVwSW50cm8oKTtcblxuICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBoYW5kbGVBY3Rpb24pO1xuICAkKCcuZGlhbG9nLWNvbnRyb2wnKS5vbignY2xpY2snLCBoYW5kbGVBY3Rpb24pO1xufTtcblxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcbiAgY29uc3QgaGlnaGxpZ2h0c0RhdGEgPSAkKCcjaGlnaGxpZ2h0cy1qc29uJykuYXR0cignZGF0YScpO1xuXG4gIC8vIHNraXAgZmlyc3Qgc3RlcHMgYW5kIGdvIHN0cmFpZ2h0IHRvIHNob3dpbmcgdGhlIHJlZWwgaWYgaXQncyBhIHB1Ymxpc2hlZFxuICAvLyBzdG9yeVxuICBpZiAoaGlnaGxpZ2h0c0RhdGEubGVuZ3RoKSB7XG4gICAgb25IaWdobGlnaHRzUmVhZHkoSlNPTi5wYXJzZShoaWdobGlnaHRzRGF0YSkpO1xuICAgIC8vaGlnaGxpZ2h0cyA9IEpTT04ucGFyc2UoaGlnaGxpZ2h0c0RhdGEpO1xuICB9IGVsc2Uge1xuICAgIGdhbWVFdmVudFNlbGVjdG9yLmluaXQob25IaWdobGlnaHRzUmVhZHkpO1xuICAgIGRvd25sb2FkZXIuaW5pdCgpO1xuICB9XG59O1xuXG5pbml0QXBwKCk7XG5cbiIsIi8vIGFwYXRlZCBmcm9tXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnRyb2xsaW5nLWNzcy1hbmltYXRpb25zLXRyYW5zaXRpb25zLWphdmFzY3JpcHQvXG5jb25zdCBwcmVmaXhlcyA9IFsnd2Via2l0JywgJ21veicsICdNUycsICdvJywgJyddO1xuXG5jb25zdCBwcmVmaXhlZE9uID0gKCRlbCwgdHlwZSwgY2IpID0+IHtcbiAgZm9yIChsZXQgcHJlZml4IG9mIHByZWZpeGVzKSB7XG4gICAgaWYgKCFwcmVmaXgpIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgJGVsLm9uKGAke3ByZWZpeH0ke3R5cGV9YCwgY2IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRFbW9qaSA9ICh0ZWFtLCBnYW1lRXYpID0+IHtcbiAgbGV0IGVtb2ppID0gJyc7XG5cbiAgaWYgKHRlYW0gPT09ICdob21lJykge1xuICAgIHRyeSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5ob21lVGVhbUVtb2ppID8gU3RyaW5nLmZyb21Db2RlUG9pbnQoZ2FtZUV2LmhvbWVUZWFtRW1vamkpIDogJyc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlbW9qaSA9IGdhbWVFdi5ob21lVGVhbUVtb2ppO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgZW1vamkgPSBnYW1lRXYuYXdheVRlYW1FbW9qaSA/IFN0cmluZy5mcm9tQ29kZVBvaW50KGdhbWVFdi5hd2F5VGVhbUVtb2ppKSA6ICcnO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZW1vamkgPSBnYW1lRXYuYXdheVRlYW1FbW9qaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW1vamk7XG59O1xuXG5jb25zdCBnZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwgPSAobmFtZSkgPT4ge1xuICBsZXQgcmV0ID0gJyc7XG5cbiAgcmV0ICs9IG5hbWVbMF0gKyAnLiAnO1xuICByZXQgKz0gbmFtZS5zcGxpdCgnICcpWzFdO1xuXG4gIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBnZXRJbm5pbmdUZXh0ID0gKGlubmluZykgPT4ge1xuICBsZXQgcmV0ID0gYCR7aW5uaW5nfWA7XG5cbiAgc3dpdGNoIChpbm5pbmcpIHtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldCArPSAnc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0ICs9ICduZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICByZXQgKz0gJ3JkJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXQgKz0gJ3RoJztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmNvbnN0IG1ha2VCYXNlRGlhbW9uZCA9IChvY2MpID0+IHtcbiAgY29uc3QgJGRpYW1vbmQgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGlhbW9uZCcpO1xuXG4gIGlmIChvY2MpIHtcbiAgICAkZGlhbW9uZC5hZGRDbGFzcygnZmlsbGVkJyk7XG4gIH1cblxuICByZXR1cm4gJGRpYW1vbmQ7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVmaXhlZE9uLFxuICBnZXRFbW9qaSxcbiAgZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsICxcbiAgZ2V0SW5uaW5nVGV4dCxcbiAgbWFrZUJhc2VEaWFtb25kLFxufTtcblxuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vbGliL3RlYW1zLWRhdGEnKTtcbmNvbnN0IHdlYXRoZXIgPSByZXF1aXJlKCcuLi9saWIvd2VhdGhlcicpO1xuXG5jb25zdCAkZGlhbW9uZCA9ICQoJyNkaWFtb25kJyk7XG5jb25zdCBkaWFtb25kTG9jYXRpb25zID0ge1xuICAkbW91bmQ6ICRkaWFtb25kLmZpbmQoJy5tb3VuZCcpLFxuICAkYmF0dGluZzogJGRpYW1vbmQuZmluZCgnLmJhdHRpbmcnKSxcbiAgJGZpcnN0OiAkZGlhbW9uZC5maW5kKCcuZmlyc3QnKSxcbiAgJHNlY29uZDogJGRpYW1vbmQuZmluZCgnLnNlY29uZCcpLFxuICAkdGhpcmQ6ICRkaWFtb25kLmZpbmQoJy50aGlyZCcpLFxufTtcblxuY29uc3QgQkFTRVMgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCddOyAvLyB0b2RvOiAnZm91cnRoJywgJ3NlY3JldCc/XG5cbmNvbnN0IGRyYXdCYXR0ZXIgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICAvL2NvbnN0IG1sID0gaGlnaGxpZ2h0Lm1sdXN0YXJkO1xuICBjb25zdCBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgY29uc3QgZ2UgPSBjdXIuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgY29uc3QgdGVhbSA9IGdlLnRvcE9mSW5uaW5nID8gJ2F3YXknIDogJ2hvbWUnO1xuICBsZXQgbmFtZVdpdGhFbW9qaSA9ICcnO1xuXG4gIGlmIChnZVtgJHt0ZWFtfUJhdHRlck5hbWVgXSkge1xuICAgIGNvbnN0IG5hbWUgPSB1dGlsLmdldFBsYXllck5hbWVXaXRoSW5pdGlhbChnZVtgJHt0ZWFtfUJhdHRlck5hbWVgXSk7XG4gICAgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke25hbWV9YDtcbiAgfVxuXG4gIGRpYW1vbmRMb2NhdGlvbnNbJyRiYXR0aW5nJ11cbiAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbn07XG5cbmNvbnN0IGRyYXdQaXRjaGVyID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgLy9jb25zdCBtbCA9IGhpZ2hsaWdodC5tbHVzdGFyZDtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IGdlID0gY3VyLmdhbWVFdmVudC5kYXRhO1xuXG4gIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdob21lJyA6ICdhd2F5JztcbiAgbGV0IG5hbWVXaXRoRW1vamkgPSAnJztcblxuICBpZiAoZ2VbYCR7dGVhbX1QaXRjaGVyTmFtZWBdKSB7XG4gICAgY29uc3QgbmFtZSA9IHV0aWwuZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsKGdlW2Ake3RlYW19UGl0Y2hlck5hbWVgXSk7XG4gICAgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke25hbWV9YDtcbiAgfVxuXG4gIGRpYW1vbmRMb2NhdGlvbnNbJyRtb3VuZCddXG4gICAgLnRleHQobmFtZVdpdGhFbW9qaSk7XG59O1xuXG5jb25zdCBkcmF3QmFzZXJ1bm5lcnMgPSAoaGlnaGxpZ2h0cykgPT4ge1xuICBjb25zdCBjdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgY29uc3QgbWwgPSBjdXIubWx1c3RhcmQ7XG4gIGNvbnN0IGdlID0gY3VyLmdhbWVFdmVudC5kYXRhO1xuXG4gIGNvbnN0IHRlYW0gPSBnZS50b3BPZklubmluZyA/ICdhd2F5JyA6ICdob21lJztcblxuICBpZiAobWwgJiYgbWwuYmFzZVJ1bm5lcnMpIHtcbiAgICBmb3IgKGxldCBiYXNlIG9mIEJBU0VTKSB7XG4gICAgICBsZXQgbmFtZSA9IG1sLmJhc2VSdW5uZXJzW2Jhc2VdLnBsYXllck5hbWU7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGxldCBuYW1lV2l0aEVtb2ppID0gYCR7dXRpbC5nZXRFbW9qaSh0ZWFtLCBnZSl9ICR7dXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwobmFtZSl9YDtcbiAgICAgICAgZGlhbW9uZExvY2F0aW9uc1tgJCR7YmFzZX1gXVxuICAgICAgICAgIC50ZXh0KG5hbWVXaXRoRW1vamkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlhbW9uZExvY2F0aW9uc1tgJCR7YmFzZX1gXVxuICAgICAgICAgIC50ZXh0KCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRyYXdTY29yZWJvYXJkID0gKGhpZ2hsaWdodHMpID0+IHtcbiAgY29uc3QgY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gIGNvbnN0IG1sID0gY3VyLm1sdXN0YXJkO1xuICBjb25zdCBnZSA9IGN1ci5nYW1lRXZlbnQuZGF0YTtcblxuICBjb25zdCAkc2NvcmVib2FyZCA9ICQoJyNkaWFtb25kX19zY29yZWJvYXJkJyk7XG5cbiAgLy8gc2NvcmVcbiAgY29uc3QgJGhvbWUgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC10ZWFtc19faG9tZSBzcGFuJyk7XG4gICRob21lLmZpcnN0KCkudGV4dCh0ZWFtc0RhdGFbZ2UuaG9tZVRlYW1dLnNob3J0aGFuZCk7XG4gICRob21lLmxhc3QoKS50ZXh0KGdlLmhvbWVTY29yZSk7XG5cbiAgY29uc3QgJGF3YXkgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC10ZWFtc19fYXdheSBzcGFuJyk7XG4gICRhd2F5LmZpcnN0KCkudGV4dCh0ZWFtc0RhdGFbZ2UuYXdheVRlYW1dLnNob3J0aGFuZCk7XG4gICRhd2F5Lmxhc3QoKS50ZXh0KGdlLmF3YXlTY29yZSk7XG5cbiAgLy8gYmFzZXNcbiAgY29uc3QgJGJhc2VzID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtYmFzZXMnKTtcbiAgJGJhc2VzLmVtcHR5KCk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQobWwuYmFzZVJ1bm5lcnMudGhpcmQucGxheWVyTmFtZSkpO1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKG1sLmJhc2VSdW5uZXJzLnNlY29uZC5wbGF5ZXJOYW1lKSk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQobWwuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuXG4gIC8vIGNvdW50XG4gIGNvbnN0ICRjb3VudCA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWNvdW50X19jb3VudCBzcGFuJyk7XG4gICRjb3VudC5maXJzdCgpLnRleHQoZ2UuYXRCYXRCYWxscyk7XG4gICRjb3VudC5sYXN0KCkudGV4dChnZS5hdEJhdFN0cmlrZXMpO1xuICBjb25zdCAkb3V0cyA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWNvdW50X19vdXRzIHNwYW4nKTtcbiAgJG91dHMudGV4dChnZS5oYWxmSW5uaW5nT3V0cyk7XG5cbiAgLy8gaW5uaW5nXG4gIGNvbnN0ICRpbm5pbmcgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1vdGhlcl9faW5uaW5nIHNwYW4nKTtcbiAgJGlubmluZy5maXJzdCgpLnRleHQoZ2UudG9wT2ZJbm5pbmcgPyAnVE9QJyA6ICdCT1QnKTtcbiAgJGlubmluZy5sYXN0KCkudGV4dCh1dGlsLmdldElubmluZ1RleHQoZ2UuaW5uaW5nICsgMSkpO1xuXG4gIC8vIHdlYXRoZXJcbiAgY29uc3QgJHdlYXRoZXIgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1vdGhlcl9fd2VhdGhlciBzcGFuJyk7XG4gICR3ZWF0aGVyXG4gICAgLnRleHQod2VhdGhlcltnZS53ZWF0aGVyXS5pY29uIHx8IHdlYXRoZXJbZ2Uud2VhdGhlcl0ubmFtZSlcbiAgICAuYXR0cigndGl0bGUnLCB3ZWF0aGVyW2dlLndlYXRoZXJdLm5hbWUpO1xufTtcblxuY29uc3QgdXBkYXRlRGlhbW9uZCA9IChoaWdobGlnaHRzKSA9PiB7XG4gIGRyYXdCYXR0ZXIoaGlnaGxpZ2h0cyk7XG4gIGRyYXdQaXRjaGVyKGhpZ2hsaWdodHMpO1xuICBkcmF3QmFzZXJ1bm5lcnMoaGlnaGxpZ2h0cyk7XG5cbiAgZHJhd1Njb3JlYm9hcmQoaGlnaGxpZ2h0cyk7XG59O1xuXG5jb25zdCBzaG93VmlzdWFsID0gKHZpc3VhbCkgPT4ge1xuICBzd2l0Y2ggKHZpc3VhbCkge1xuICAgIGNhc2UgJ2ludHJvJzpcbiAgICAgICQoJyNpbnRybycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQoJyNkaWFtb25kJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdkaWFtb25kJzpcbiAgICBkZWZhdWx0OlxuICAgICAgJCgnI2ludHJvJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJCgnI2RpYW1vbmQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVwZGF0ZURpYW1vbmQsXG4gIHNob3dWaXN1YWwsXG59O1xuXG4iXX0=
