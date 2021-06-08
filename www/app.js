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


},{"../lib/teams-data":1,"../lib/weather":2,"./util":26}]},{},[24]);
