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
    'https://reblase.sibr.dev/game/f7ad7826-ca6e-49c2-818e-190408b046fe',

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
  // reset highlights
  highlights = [];

  $('.game-event__container input:checked').each((_, checked) => {
    const id = $(checked).attr('id');
    let visual = 'diamond';

    if (isPlayBall(gameEvents[id].ev.data)) {
      visual = 'matchup';
    }

    const hl = new Highlight({
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

const renderGameEv = (gameEv, $container) => {
  const data = gameEv.ev.data;

  if (!data.lastUpdate) {
    return;
  }

  // check for half-inning changes
  if (gameEv.mlustard.gameStatus === 'beforeFirstPitch') {
    $('<h3>')
      .addClass('inning inning-top')
      .text(`Top of 1`)
      .appendTo($container);
  } else if (gameEv.mlustard.gameStatus === 'firstHalfInningStart' && data.inning) {
    $('<h3>')
      .addClass('inning inning-top')
      .text(`Top of ${data.inning + 1}`)
      .appendTo($container);
  } else if (gameEv.mlustard.gameStatus === 'secondHalfInningStart') {
    $('<h3>')
      .addClass('inning inning-bottom')
      .text(`Bottom of ${data.inning + 1}`)
      .appendTo($container);
  }

  const $gameEv = $('<div>');

  // form stuff
  const $chContainer = $('<div>');
  const $check = $('<input>');
  const $label = $('<label>');

  let update = `${data.lastUpdate} ${data.scoreUpdate || ''}`;

  $check
    .addClass('game-event__check')
    .attr('id', gameEv.ev.hash)
    .attr('type', 'checkbox')
    .attr('name', 'game event')
    .val('');

  $label
    .addClass('')
    .attr('for', gameEv.ev.hash)
    .text(update);

  $chContainer
    .addClass('')
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
    .addClass('game-status')
    .append($score)
    .append($bases)
    .append($balls)
    .append($strikes)
    .append($outs);

  let containerClasses = ['game-event__container'];

  // highlight interesting events
  // todo: when refactoring this whole cursed file, also don't do so many
  // dom lookups here
  if (gameEv.mlustard.out && gameEv.mlustard.outMeta.kind === 'strike') {

    containerClasses.push('interesting strikeout');
    $('.scroll-to.strikeout').removeClass('d-none');

  }

  if (gameEv.mlustard.hit) {

    containerClasses.push('interesting hit');
    $('.scroll-to.hit').removeClass('d-none');

  }

  if (gameEv.mlustard.steal && gameEv.mlustard.stealMeta.success) {

    containerClasses.push('interesting steal');
    $('.scroll-to.steal').removeClass('d-none');

  }

  if (gameEv.mlustard.special) {

    containerClasses.push('interesting special');
    $('.scroll-to.special').removeClass('d-none');

  }

  if (gameEv.mlustard.maximumBlaseball) {

    containerClasses.push('interesting max');
    $('.scroll-to.max').removeClass('d-none');

  }

  if (gameEv.mlustard.runsScored || gameEv.mlustard.unrunsScored) {

    containerClasses.push('interesting score');
    $('.scroll-to.score').removeClass('d-none');

  }

  $gameEv
    .addClass(containerClasses)
    .append($chContainer)
    .append($gameEvInfo);

  return $gameEv;
};

const renderGameEvs = () => {
  stopLoading();
  $('.game-events__container').removeClass('d-none');
  $('.game-events__info').addClass('d-none');

  const $container = $('#game-events__form-items');

  // set game title and matchup
  let headerRendered = false;
  // gotta render some general stuff too (home vs away, s#d#, weather)
  // also: label for the select, and the select itself
  for (let id in gameEvents) {
    let gameEv = gameEvents[id];

    if (!headerRendered && gameEv.ev.data.homePitcherName && gameEv.ev.data.awayPitcherName) {
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
    }

    let $gameEv = renderGameEv(gameEv, $container);

    if ($gameEv) {
      $container.append($gameEv);
    }
  }
};

const getGameEvents = (gameId, nextPage) => {
  let gamesURL = `https://api.sibr.dev/chronicler/v1/games/updates?game=${gameId}`;

  if (nextPage) {
    gamesURL += `&page=${nextPage}`;
  }

  startLoading();

  fetch(gamesURL)
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
      $('#game-load-form .error-msg').removeClass('d-none');
      stopLoading();
    });

};

const startLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('.error-msg').addClass('d-none');
  $gameEvForm.find('button').addClass('d-none');
  $gameEvForm.find('.loading').removeClass('d-none');
};

const stopLoading = () => {
  const $gameEvForm = $('#game-load-form');

  $gameEvForm.find('button').removeClass('d-none');
  $gameEvForm.find('.loading').addClass('d-none');
};

// todo: will send highlights data to flask to save
const saveHighlights = () => {
};

const init = (onPreview) => {
  const $gameEvForm = $('#game-load-form');
  const $gameInput = $('#game-load-form__game-id');

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

  const $highlightsSelectForm = $('#game-events__form');

  $highlightsSelectForm.on('submit', (ev) => {
    ev.preventDefault();
    saveHighlights();
    //generateHighlights(onPreview);
  });

  $highlightsSelectForm.find('.preview-story').on('click', (ev) => {
    generateHighlights(onPreview);
  });

  const $checkAll = $('#check-all');

  $('#check-all').on('change', () => {
    let state = $checkAll.is(':checked');

    $('.game-event__check').each((_, ch) => {
      $(ch).attr('checked', state);
    });
  });

  const $statusToggle = $('.game-events-control__status');

  $statusToggle.on('click', (evt) => {
    const $button = $(evt.target);
    const $formItems = $('#game-events__form-items');

    if ($button.hasClass('hide-status')) {

      $button.addClass('d-none');
      $statusToggle.find('.show-status').removeClass('d-none');
      $formItems.removeClass('show-status');

    } else if ($button.hasClass('show-status')) {

      $button.addClass('d-none');
      $statusToggle.find('.hide-status').removeClass('d-none');
      $formItems.addClass('show-status');

    }
  });

  $('.scroll-to').on('click', (evt) => {
    const $button = $(evt.target);
    const $itemsContainer = $('#game-events__form-items')
    const containerOffTop = $itemsContainer.offset().top;
    const $items = $itemsContainer.children();

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
      lookup = '#game-events__form .inning';
    }

    // if the form hasn't been scrolled much, search from the first event
    // otherwise, search from first element in view onwards
    let $firstInView = $items.filter((_, el) => {
      const $el = $(el);
      return ($el.offset().top - containerOffTop) > 0 && ($el.offset().top - containerOffTop < 100);
      // the 100 is hard-coded here; it's roughly the height of each $el
      // yes. this is probably super cursed.
    });

    if (!$firstInView.length) {
      $firstInView = $items.first();
    }

    // look for next sibling that matches the type we're looking for
    let $lookup = $firstInView.nextAll(lookup).first();

    // if there's no match looking forward, loop from the top
    if (!$lookup.length) {
      $lookup = $(lookup).first();
    }

    $itemsContainer
      .scrollTop(0)
      .scrollTop($lookup.offset().top - containerOffTop);
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

}

module.exports = Highlight;


},{"grand-slalami":5}],24:[function(require,module,exports){
const gameEventSelector = require('./game-event-selector');
const Story = require('./story');
const downloader = require('./downloader');

let story;

const onPreview = (hls) => {

  story = new Story({
    highlights: hls,
  });

  $('#game-load').addClass('d-none');
  $('#game-events').addClass('d-none');
  $('#exit-preview').removeClass('d-none');

  story.start();
};

const exitPreview = () => {
  $('#exit-preview').addClass('d-none');
  $('#game-load').removeClass('d-none');
  $('#game-events').removeClass('d-none');
  story.stop();
};

const initApp = () => {
  const highlightsData = $('#highlights-json').attr('data');

  // skip first steps and go straight to showing the reel if it's a published
  // story
  if (highlightsData.length) {
    onPreview(JSON.parse(highlightsData));
    //highlights = JSON.parse(highlightsData);
  } else {
    gameEventSelector.init(onPreview);
    //downloader.init();
  }

  $('#exit-preview').on('click', exitPreview);
};

initApp();


},{"./downloader":21,"./game-event-selector":22,"./story":25}],25:[function(require,module,exports){
const Visual = require('./visual');
const Dialog = require('./dialog');
const teamsData = require('../lib/teams-data');

class Story {
  constructor(settings) {
    this.highlights = settings.highlights || [];
    this.curHighlight = 0;
    this.dialog = new Dialog();
    this.visual = new Visual();
  }

  start() {
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

    $(document).on('keyup', handleAction);
    $('.dialog-control').on('click', handleAction);

    // show the first highlight
    this.startCurrent();
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
    $('#matchup').addClass('d-none');
    $('#diamond').addClass('d-none');
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvdGVhbXMtZGF0YS5qcyIsImxpYi93ZWF0aGVyLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvY29tbWVudGFyeS5qcyIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL2dyYW1tYXIuanMiLCJub2RlX21vZHVsZXMvZ3JhbmQtc2xhbGFtaS9idWlsZC9ncmFuZC1zbGFsYW1pLmpzIiwibm9kZV9tb2R1bGVzL2dyYW5kLXNsYWxhbWkvYnVpbGQvcXVpcHMuanNvbiIsIm5vZGVfbW9kdWxlcy9ncmFuZC1zbGFsYW1pL2J1aWxkL3RyYWNlcnktbW9kcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9iYXNlLXJ1bm5lcnMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvZ2FtZS1zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvaGl0cy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9taXNjLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL21sdXN0YXJkLmpzIiwibm9kZV9tb2R1bGVzL21sdXN0YXJkL2J1aWxkL291dHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvc3BlY2lhbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC9zdGVhbHMuanMiLCJub2RlX21vZHVsZXMvbWx1c3RhcmQvYnVpbGQvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9idWlsZC93YWxrcy5qcyIsIm5vZGVfbW9kdWxlcy9tbHVzdGFyZC9saWIvcGxheWVycy5qcyIsIm5vZGVfbW9kdWxlcy90cmFjZXJ5LWdyYW1tYXIvdHJhY2VyeS5qcyIsInNyYy9kaWFsb2cuanMiLCJzcmMvZG93bmxvYWRlci5qcyIsInNyYy9nYW1lLWV2ZW50LXNlbGVjdG9yLmpzIiwic3JjL2hpZ2hsaWdodC5qcyIsInNyYy9tYWluLmpzIiwic3JjL3N0b3J5LmpzIiwic3JjL3V0aWwuanMiLCJzcmMvdmlzdWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNubEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkYXRhID0ge1xuICAvLyBoZWxsbW91dGggc3VuYmVhbXNcbiAgJ2YwMmFlYWUyLTVlNmEtNDA5OC05ODQyLTAyZDIyNzNmMjVjNyc6IHtcbiAgICBzaG9ydGhhbmQ6ICdIRUxMJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2ZmZmJhYicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMWQxOTMyJyxcbiAgICAgIGdyYXNzOiAnZThjODc3JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2U4Yzg3NycsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMWQxOTMyJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tc3VuYmVhbXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ0NvYmxpbicsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL0tyYXNpX1Nhdm92JyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGhhZGVzIHRpZ2Vyc1xuICAnNzQ3YjhlNGEtN2U1MC00NjM4LWE5NzMtZWE3OTUwYTNlNzM5Jzoge1xuICAgIHNob3J0aGFuZDogJ0hBRCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc1YzFjMWMnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2U4NTYzNycsXG4gICAgICBncmFzc091dGxpbmU6ICdlODU2MzcnLFxuICAgICAgZGlydDogJ2ZhYTYyMycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXRpZ2Vycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnanJmYnonLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9qcmZieicsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBzZWF0dGxlIGdhcmFnZXNcbiAgJzEwNWJjM2ZmLTEzMjAtNGUzNy04ZWYwLThkNTk1Y2I5NWRkMCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdTRUEnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnMmI0MDc1JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJ2VhMmQyOScsXG4gICAgICBncmFzc091dGxpbmU6ICdlYTJkMjknLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMWQxZDFkJyxcbiAgICAgIGRpcnQ6ICdkOGQ4ZGEnLFxuICAgICAgZGlydE91dGxpbmU6ICcxZDFkMWQnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1nYXJhZ2VzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICd6YW5kdGVyYmlyZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gbWV4aWNvIGNpdHkgd2lsZCB3aW5nc1xuICAnNTdlYzA4Y2MtMDQxMS00NjQzLWIzMDQtMGU4MGRiYzE1YWM3JyA6IHtcbiAgICBzaG9ydGhhbmQ6ICdDRE1YJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2QxNTcwMCcsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICc3MzFmMDAnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnNzMxZjAwJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZTBlMGUwJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28td2luZ3MucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ3RocjMzaDNhZDNkZHJhZycsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL3RocjMzaDNhZDNkZHJhZycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGF0bGFudGlzIGdlb3JnaWFzXG4gICdkOWY4OWE4YS1jNTYzLTQ5M2UtOWQ2NC03OGU0ZjlhNTVkNGEnOiB7XG4gICAgc2hvcnRoYW5kOiAnQVRMUycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICcwMGRiYzInLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGdyYXNzOiAnNWNmZmVjJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzVjZmZlYycsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcnLFxuICAgICAgZGlydDogJycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWdlb3JnaWFzLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICdibHlwdG9ub21pY2EnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ibHlwdG9ub21pY2EnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBjaGljYWdvIGZpcmVmaWdodGVyc1xuICAnY2EzZjFjOGMtYzAyNS00ZDhlLThlZWYtNWJlNmFjY2JlYjE2Jzoge1xuICAgIHNob3J0aGFuZDogJ0NISScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc4YzJhM2UnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGdyYXNzOiAnZmY5NjBhJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2ZmOTYwYScsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWZpcmVmaWdodGVycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnV2lyc3ByaW5nZW4gb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1maXJlZmlnaHRlcnMtc3RhZGl1bS5wbmcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnV2lyc3ByaW5nZW4gb24gRGlzY29yZCcsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gdG9reW8gbGlmdFxuICAnYzczYjcwNWMtNDBhZC00NjMzLWE2ZWQtZDM1N2VlMmUyYmNmJzoge1xuICAgIHNob3J0aGFuZDogJ1RZTycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdlNTM2YzgnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwYTJhJyxcbiAgICAgIGdyYXNzOiAnOTAxNDdiJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzkwMTQ3YicsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDBhMmEnLFxuICAgICAgZGlydDogJ2ZhZjBmOScsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMGEyYScsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWxpZnQucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2pyZmJ6JyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vanJmYnonLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gYnJlY2tlbnJpZGdlIGphenogaGFuZHNcbiAgJ2EzN2Y5MTU4LTdmODItNDZiYy05MDhjLWM5ZTJkZGE3YzMzYic6IHtcbiAgICBzaG9ydGhhbmQ6ICdCUksnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNjM4OGFkJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzRlMDg0ZCcsXG4gICAgICBncmFzczogJ2YzY2E0MCcsXG4gICAgICBncmFzc091dGxpbmU6ICdmM2NhNDAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnNGUwODRkJyxcbiAgICAgIGRpcnQ6ICdmMmE1NDEnLFxuICAgICAgZGlydE91dGxpbmU6ICc0ZTA5NGQnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1oYW5kcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnU2tvb3RsZXMgb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBsYSB1bmxpbWl0ZWQgdGFjb3NcbiAgJzg3OGMxYmY2LTBkMjEtNDY1OS1iZmVlLTkxNmM4MzE0ZDY5Yyc6IHtcbiAgICBzaG9ydGhhbmQ6ICdUQUNPJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzY0Mzc2ZScsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICdmYWNmMzMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZmFjZjMzJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnMjhjODcyJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tdGFjb3MucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJzRkYW1BdmVudWUnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS80ZGFtQXZlbnVlJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIG1pYW1pIGRhbGVcbiAgJ2I2M2JlOGMyLTU3NmEtNGQ2ZS04ZGFmLTgxNGY4YmNlYTk2Zic6IHtcbiAgICBzaG9ydGhhbmQ6ICdNSUEnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnYmYwMGZmJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzBlMTIxNicsXG4gICAgICBncmFzczogJ2ZlZTAyMCcsXG4gICAgICBncmFzc091dGxpbmU6ICdmZWUwMjAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMGUxMjE2JyxcbiAgICAgIGRpcnQ6ICczM2ZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwZTEyMTYnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1kYWxlLnBuZycsXG4gICAgaG9tZUxvZ29DcmVkaXQ6ICc0ZGFtQXZlbnVlJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vNGRhbUF2ZW51ZScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWRhbGUtc3RhZGl1bS5wbmcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnQmlsbHlHYWxhbnQnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9CaWxseUdhbGFudCcsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGJvc3RvbiBmbG93ZXJzXG4gICczZjhiYmIxNS02MWMwLTRlM2YtOGU0YS05MDdhNWZiMTU2NWUnOiB7XG4gICAgc2hvcnRoYW5kOiAnQk9TJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJ2Y3ZDFmZicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICczOTNhMTcnLFxuICAgICAgZ3Jhc3M6ICc5NzU1YTUnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnOTc1NWE1JyxcbiAgICAgIGJhc2VzOiAnZjdkMWZmJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzM5M2ExNycsXG4gICAgICBkaXJ0OiAnZDc5MWUzJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMzkzYTE3JyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZmxvd2Vycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnbmltIG9uIERpc2NvcmQnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IHRydWUsXG4gIH0sXG5cbiAgLy8gb2hpbyB3b3Jtc1xuICAnYmI0YTlkZTUtYzkyNC00OTIzLWEwY2ItOWQxNDQ1ZjFlZTVkJzoge1xuICAgIHNob3J0aGFuZDogJ09ISU8nLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNWM0ODIyJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2JhOWM2NScsXG4gICAgICBncmFzc091dGxpbmU6ICdiYTljNjUnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmYWZhZmEnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgbmV1dHJhbDogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28td29ybXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2Rhbi5kaWdpdGFsJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vZGFuZG90ZGlnaXRhbCcsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiB0cnVlLFxuICB9LFxuXG4gIC8vIGhvdXN0b24gc3BpZXNcbiAgJzlkZWJjNjRmLTc0YjctNGFlMS1hNGQ2LWZjZTAxNDRiNmVhNSc6IHtcbiAgICBzaG9ydGhhbmQ6ICdIT1UnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNjc1NTZiJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBncmFzczogJzllODJhNCcsXG4gICAgICBncmFzc091dGxpbmU6ICc5ZTgyYTQnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmYWZhZmEnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1zcGllcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnRGFsbWF0aW9uZXInLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIHBoaWxseSBwaWVzXG4gICcyM2U0Y2JjMS1lOWNkLTQ3ZmEtYTM1Yi1iZmEwNmY3MjZjYjcnOiB7XG4gICAgc2hvcnRoYW5kOiAnUEhMJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzM5OWQ4ZicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZ3Jhc3M6ICdmZmNkNGMnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnZmZjZDRjJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tcGllcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnTGFkeWtuaWdodHRpbWUjODgwNiBvbiBEaXNjb3JkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBzYW4gZnJhY2lzY28gbG92ZXJzXG4gICdiNzJmMzA2MS1mNTczLTQwZDctODMyYS01YWQ0NzViZDc5MDknOiB7XG4gICAgc2hvcnRoYW5kOiAnU0YnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZDIyNjRhJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJ2YxOTNiMycsXG4gICAgICBncmFzc091dGxpbmU6ICdmMTkzYjMnLFxuICAgICAgLy9iYXNlczogJzZiMTg0ZCcsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZGlydDogJ2ZmZmZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMDAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLWxvdmVycy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnTHVjYWNyYWZ0cycsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2x1Y2FjcmFmdHMnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gZGFsbGFzIHN0ZWFrc1xuICAnYjAyNGU5NzUtMWM0YS00NTc1LTg5MzYtYTM3NTRhMDg4MDZhJzoge1xuICAgIHNob3J0aGFuZDogJ0RBTCcsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICc4YzhkOGYnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnYzZhNzhiJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2M2YTc4YicsXG4gICAgICAvL2dyYXNzT3V0bGluZTogJzhjMzYyYScsXG4gICAgICAvL2Jhc2VzOiAnOGMzNjI4JyxcbiAgICAgIGJhc2VzOiAnYjAwZTFjJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMDAwMCcsXG4gICAgICAvL2RpcnQ6ICdjNmE3OGInLFxuICAgICAgLy9kaXJ0OiAnYjAwZTFjJyxcbiAgICAgIGRpcnQ6ICc4YzM2MmEnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1zdGVha3MucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJzRkYW1BdmVudWUnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS80ZGFtQXZlbnVlJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIG5ldyB5b3JrIG1pbGxlbm5pYWxzXG4gICczNjU2OTE1MS1hMmZiLTQzYzEtOWRmNy0yZGY1MTI0MjRjODInOiB7XG4gICAgc2hvcnRoYW5kOiAnTlknLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnZjhkNmQ3JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJycsXG4gICAgICBncmFzczogJzk5Y2RlMycsXG4gICAgICBncmFzc091dGxpbmU6ICc5OWNkZTMnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmZmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1taWxsZW5uaWFscy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnQE9yaWdhbWlBbmRyb2lkJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vT3JpZ2FtaUFuZHJvaWQnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1taWxsZW5uaWFscy1zdGFkaXVtLnBuZycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICdBbm5hbmEnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxuXG4gIC8vIGNvcmUgbWVjaGFuaWNzXG4gICc0NjM1ODg2OS1kY2U5LTRhMDEtYmZiYS1hYzI0ZmM1NmY1N2UnOiB7XG4gICAgc2hvcnRoYW5kOiAnQ09SRScsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdkMTMxMDAnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnJyxcbiAgICAgIGdyYXNzOiAnZjliMTRhJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJ2Y5YjE0YScsXG4gICAgICBiYXNlczogJycsXG4gICAgICBiYXNlc091dGxpbmU6ICcnLFxuICAgICAgZGlydDogJ2ZmZicsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1lY2hhbmljcy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnWndlaUhhd2tlJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJ2h0dHBzOi8vdHdpdHRlci5jb20vWndlaUhhd2tlJyxcbiAgICBhd2F5TG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWVjaGFuaWNzLWF3YXkucG5nJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJ1p3ZWlIYXdrZScsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL1p3ZWlIYXdrZScsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLW1lY2hhbmljcy1zdGFkaXVtLnBuZycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICdAd2hhdHNzaGVjYWxsZWQnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS93aGF0c3NoZWNhbGxlZCcsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyB5ZWxsb3dzdG9uZSBtYWdpY1xuICAnNzk2NmViMDQtZWZjYy00OTliLThmMDMtZDEzOTE2MzMwNTMxJzoge1xuICAgIHNob3J0aGFuZDogJ1lFTEwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnYmYwMDQzJyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2ZjYjA0MCcsXG4gICAgICBncmFzc091dGxpbmU6ICdmY2IwNDAnLFxuICAgICAgYmFzZXM6ICcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmZmYnLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1tYWdpYy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnTHVja3kgUGVubnkgb24gRGlzY29yZCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIGF3YXlMb2dvVVJMOiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdDogJycsXG4gICAgYXdheUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvVVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXRVUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvT3V0bGluZTogZmFsc2UsXG4gIH0sXG5cbiAgLy8gaGF3YWknaSBmcmlkYXlzXG4gICc5NzlhZWU0YS02ZDgwLTQ4NjMtYmYxYy1lZTFhNzhlMDYwMjQnOiB7XG4gICAgc2hvcnRoYW5kOiAnRlJJJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzNlZTY1MicsXG4gICAgICBtb3VuZDogJycsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICcxMWE2YzInLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnMTFhNmMyJyxcbiAgICAgIGJhc2VzOiAnJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZTY3NTc1JyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tZnJpZGF5cy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnJyxcbiAgICBob21lTG9nb0NyZWRpdFVSTDogJycsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBjYW5hZGEgbW9pc3QgdGFsa2Vyc1xuICAnZWI2N2FlNWUtYzRiZi00NmNhLWJiYmMtNDI1Y2QzNDE4MmZmJzoge1xuICAgIHNob3J0aGFuZDogJ0NBTicsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdlNWY0ZjUnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnM2I5N2Q0JyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzNiOTdkNCcsXG4gICAgICBiYXNlczogJ2VkMWMyNCcsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJzAzNTU5NycsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJ2U1ZjRmNScsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICdlNWY0ZjUnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXRhbGtlcnMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ1EgUGVpZmZlciwgQGxvbmdoYWlyUScsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2xvbmdoYWlyUScsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBjaGFybGVzdG9uIHNob2UgdGhpZXZlc1xuICAnYmZkMzg3OTctODQwNC00YjM4LThiODItMzQxZGEyOGIxZjgzJzoge1xuICAgIHNob3J0aGFuZDogJ0NIUycsXG4gICAgY29sb3Vyczoge1xuICAgICAgb2ZmaWNpYWw6ICdmZmNlMGEnLFxuICAgICAgbW91bmQ6ICcnLFxuICAgICAgbW91bmRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGdyYXNzOiAnMWU5MWNjJyxcbiAgICAgIGdyYXNzT3V0bGluZTogJzFlOTFjYycsXG4gICAgICBiYXNlczogJ2ZmY2UwYScsXG4gICAgICBiYXNlc091dGxpbmU6ICcwMDAnLFxuICAgICAgZGlydDogJ2ZjZjJkMCcsXG4gICAgICBkaXJ0T3V0bGluZTogJzAwMCcsXG4gICAgICBmb3VsWm9uZTogJycsXG4gICAgICBmb3VsWm9uZU91dGxpbmU6ICcnLFxuICAgIH0sXG4gICAgaG9tZUxvZ29VUkw6ICcuL2ltYWdlcy9sb2dvLXRoaWV2ZXMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ2NoZGhycm1ubicsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL2NoZGhycm1ubicsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBrYW5zYXMgY2l0eSBicmVhdGggbWludHNcbiAgJ2FkYzViMzk0LThmNzYtNDE2ZC05Y2U5LTgxMzcwNjg3N2I4NCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdLQ0JNJyxcbiAgICBjb2xvdXJzOiB7XG4gICAgICBvZmZpY2lhbDogJzE3OGY1NScsXG4gICAgICBtb3VuZDogJzAwM2YxZicsXG4gICAgICBtb3VuZE91dGxpbmU6ICcwMDAnLFxuICAgICAgZ3Jhc3M6ICcxNzhmNTUnLFxuICAgICAgZ3Jhc3NPdXRsaW5lOiAnMTc4ZjU1JyxcbiAgICAgIGJhc2VzOiAnZmYwMDExJyxcbiAgICAgIGJhc2VzT3V0bGluZTogJzAwMCcsXG4gICAgICBkaXJ0OiAnZmZmZmZmJyxcbiAgICAgIGRpcnRPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGZvdWxab25lOiAnJyxcbiAgICAgIGZvdWxab25lT3V0bGluZTogJycsXG4gICAgfSxcbiAgICBob21lTG9nb1VSTDogJy4vaW1hZ2VzL2xvZ28tbWludHMucG5nJyxcbiAgICBob21lTG9nb0NyZWRpdDogJ25hc2hfaGlnaCcsXG4gICAgaG9tZUxvZ29DcmVkaXRVUkw6ICdodHRwczovL3R3aXR0ZXIuY29tL25hc2hfaGlnaCcsXG4gICAgYXdheUxvZ29VUkw6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0OiAnJyxcbiAgICBhd2F5TG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29VUkw6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0OiAnJyxcbiAgICBzdGFkaXVtTG9nb0NyZWRpdFVSTDogJycsXG4gICAgc3RhZGl1bUxvZ29PdXRsaW5lOiBmYWxzZSxcbiAgfSxcblxuICAvLyBiYWx0aW1vcmUgY3JhYnNcbiAgJzhkODdjNDY4LTY5OWEtNDdhOC1iNDBkLWNmYjczYTU2NjBhZCc6IHtcbiAgICBzaG9ydGhhbmQ6ICdCQUwnLFxuICAgIGNvbG91cnM6IHtcbiAgICAgIG9mZmljaWFsOiAnNTkzMDM3JyxcbiAgICAgIG1vdW5kOiAnJyxcbiAgICAgIG1vdW5kT3V0bGluZTogJzAwMCcsXG4gICAgICBncmFzczogJ2Y3NjMwYycsXG4gICAgICBncmFzc091dGxpbmU6ICdmNzYzMGMnLFxuICAgICAgYmFzZXM6ICc1OTMwMzcnLFxuICAgICAgYmFzZXNPdXRsaW5lOiAnMDAwJyxcbiAgICAgIGRpcnQ6ICdmN2IxODknLFxuICAgICAgZGlydE91dGxpbmU6ICcwMDAnLFxuICAgICAgZm91bFpvbmU6ICcnLFxuICAgICAgZm91bFpvbmVPdXRsaW5lOiAnJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvVVJMOiAnLi9pbWFnZXMvbG9nby1jcmFicy5wbmcnLFxuICAgIGhvbWVMb2dvQ3JlZGl0OiAnNGFkYW1BdmVudWUnLFxuICAgIGhvbWVMb2dvQ3JlZGl0VVJMOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS80ZGFtQXZlbnVlJyxcbiAgICBhd2F5TG9nb1VSTDogJycsXG4gICAgYXdheUxvZ29DcmVkaXQ6ICcnLFxuICAgIGF3YXlMb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb1VSTDogJycsXG4gICAgc3RhZGl1bUxvZ29DcmVkaXQ6ICcnLFxuICAgIHN0YWRpdW1Mb2dvQ3JlZGl0VVJMOiAnJyxcbiAgICBzdGFkaXVtTG9nb091dGxpbmU6IGZhbHNlLFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYXRhO1xuXG4iLCJjb25zdCB3ZWF0aGVyID0ge1xuICAwOiB7XG4gICAgbmFtZTogJ3ZvaWQnLFxuICAgIGljb246ICcnLFxuICB9LFxuICAxOiB7XG4gICAgbmFtZTogJ3N1biAyJyxcbiAgICBpY29uOiAn4piAJyxcbiAgfSxcbiAgMjoge1xuICAgIG5hbWU6ICdvdmVyY2FzdCcsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDM6IHtcbiAgICBuYW1lOiAncmFpbnknLFxuICAgIGljb246ICcnLFxuICB9LFxuICA0OiB7XG4gICAgbmFtZTogJ3NhbmRzdG9ybScsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDU6IHtcbiAgICBuYW1lOiAnc25vd3knLFxuICAgIGljb246ICcnLFxuICB9LFxuICA2OiB7XG4gICAgbmFtZTogJ2FjaWRpYycsXG4gICAgaWNvbjogJycsXG4gIH0sXG4gIDc6IHtcbiAgICBuYW1lOiAnc29sYXIgZWNsaXBzZScsXG4gICAgaWNvbjogJ/CfjJEnLFxuICB9LFxuICA4OiB7XG4gICAgbmFtZTogJ2dsaXR0ZXInLFxuICAgIGljb246ICcnLFxuICB9LFxuICA5OiB7XG4gICAgbmFtZTogJ2Jsb29kZHJhaW4nLFxuICAgIGljb246ICfwn6m4JyxcbiAgfSxcbiAgMTA6IHtcbiAgICBuYW1lOiAncGVhbnV0cycsXG4gICAgaWNvbjogJ/CfpZwnLFxuICB9LFxuICAxMToge1xuICAgIG5hbWU6ICdsb3RzIG9mIGJpcmRzJyxcbiAgICBpY29uOiAn8J+QpicsXG4gIH0sXG4gIDEyOiB7XG4gICAgbmFtZTogJ2ZlZWRiYWNrJyxcbiAgICBpY29uOiAn8J+OpCcsXG4gIH0sXG4gIDEzOiB7XG4gICAgbmFtZTogJ3JldmVyYicsXG4gICAgaWNvbjogJ/CfjIonLFxuICB9LFxuICAxNDoge1xuICAgIG5hbWU6ICdibGFjayBob2xlJyxcbiAgICBpY29uOiAn4pqrJyxcbiAgfSxcbiAgMTU6IHtcbiAgICBuYW1lOiAnY29mZmVlJyxcbiAgICBpY29uOiAn4piVJyxcbiAgfSxcbiAgMTY6IHtcbiAgICBuYW1lOiAnY29mZmVlIDInLFxuICAgIGljb246ICfwn421JyxcbiAgfSxcbiAgMTc6IHtcbiAgICBuYW1lOiAnY29mZmVlIDNzJyxcbiAgICBpY29uOiAnM++4j+KDoycsXG4gIH0sXG4gIDE4OiB7XG4gICAgbmFtZTogJ2Zsb29kaW5nJyxcbiAgICBpY29uOiAn8J+asCcsXG4gIH0sXG4gIDE5OiB7XG4gICAgbmFtZTogJ3NhbG1vbicsXG4gICAgaWNvbjogJ/CfkJ8nLFxuICB9LFxuICAyMDoge1xuICAgIG5hbWU6ICdnbGl0dGVyJyxcbiAgICBpY29uOiAn4pyoJyxcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2VhdGhlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnVpbGRDb21tZW50ID0gZnVuY3Rpb24gYnVpbGRDb21tZW50KHNldHRpbmdzLCBncmFtbWFyKSB7XG4gIHZhciBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gIHZhciBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkOyAvLyBjaGVjayBmb3IgZ2FtZSBzdGF0dXNcblxuICBzd2l0Y2ggKG1sdXN0YXJkLmdhbWVTdGF0dXMpIHtcbiAgICBjYXNlICdiZWZvcmVGaXJzdFBpdGNoJzpcbiAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNnYW1lU3RhcnQjJyk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ZpcnN0SGFsZklubmluZ1N0YXJ0JzpcbiAgICAgIGlmIChnYW1lRXZlbnQuaW5uaW5nID09PSAwKSB7XG4gICAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdPbmVTdGFydCMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBncmFtbWFyLmZsYXR0ZW4oJyNpbm5pbmdTdGFydCMnKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzZWNvbmRIYWxmSW5uaW5nU3RhcnQnOlxuICAgICAgcmV0dXJuIGdyYW1tYXIuZmxhdHRlbignI2lubmluZ1N0YXJ0IycpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgY29tbWVudCA9ICcnOyAvLyBjaGVjayBmb3Igb3V0c1xuXG4gIGlmIChtbHVzdGFyZC5vdXQpIHtcbiAgICBpZiAobWx1c3RhcmQuZ2FtZVN0YXR1cyA9PT0gJ2hhbGZJbm5pbmdFbmQnKSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI2xhc3RPdXRPZklubmluZyMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudCArPSBncmFtbWFyLmZsYXR0ZW4oJyNvdXQjJyk7XG4gICAgfVxuICB9IC8vIGNoZWNrIGZvciBzY29yZVxuXG5cbiAgaWYgKG1sdXN0YXJkLnJ1bnNTY29yZWQgIT09IDAgfHwgbWx1c3RhcmQudW5ydW5zU2NvcmVkICE9PSAwIHx8IC8vIHNjb3JlIGNoYW5nZSBkdWUgdG8gc2FsbW9uIHN0ZWFsaW5nIHJ1bnNcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnc2FsbW9uJyAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5kZXRhaWxzICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmRldGFpbHMucnVuc1N0b2xlbi5sZW5ndGggfHwgLy8gc2NvcmUgY2hhbmdlIGZyb20gc3VuIDIgc21pbGluZ1xuICBtbHVzdGFyZC5zcGVjaWFsICYmIG1sdXN0YXJkLnNwZWNpYWxNZXRhLmtpbmQgPT09ICdzdW4yJyB8fCAvLyBzY29yZSBjaGFuZ2UgZnJvbSBibGFjayBob2xlIHN3YWxsb3dpbmdcbiAgbWx1c3RhcmQuc3BlY2lhbCAmJiBtbHVzdGFyZC5zcGVjaWFsTWV0YS5raW5kID09PSAnYmxhY2tIb2xlJykge1xuICAgIGlmIChjb21tZW50KSB7XG4gICAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI3Njb3JlQWRkb24jJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnQgKz0gZ3JhbW1hci5mbGF0dGVuKCcjc2NvcmUjJyk7XG4gICAgfVxuICB9IC8vIGNoZWNrIGlmIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIGF0IHRoZSBwbGF0ZVxuXG5cbiAgaWYgKG1sdXN0YXJkLmJhdHRlclVwICYmIGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQpIHtcbiAgICBjb21tZW50ICs9IGdyYW1tYXIuZmxhdHRlbignI2JhdHRlclVwUnVubmVycyMnKTtcbiAgfSAvLyByZXR1cm4gdGhlIGNvbW1lbnQgaWYgaXQgd2FzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aGUgb3JpZ2luYWwgdXBkYXRlIGlmIGl0XG4gIC8vIGV4aXN0cywgb3RoZXJ3aXNlIGFuIGVtcHR5IHN0cmluZ1xuXG5cbiAgcmV0dXJuIGNvbW1lbnQgfHwgZ2FtZUV2ZW50Lmxhc3RVcGRhdGUgfHwgJyc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnVpbGRDb21tZW50OiBidWlsZENvbW1lbnRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciB0cmFjZXJ5ID0gcmVxdWlyZSgndHJhY2VyeS1ncmFtbWFyJyk7XG5cbnZhciBtb2RzID0gcmVxdWlyZSgnLi90cmFjZXJ5LW1vZHMnKTtcblxudmFyIHF1aXBzID0gcmVxdWlyZSgnLi9xdWlwcy5qc29uJyk7XG5cbnZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChzZXR0aW5ncykge1xuICB2YXIgc2VlZCA9IHNldHRpbmdzLnNlZWQ7XG4gIHZhciBnYW1lRXZlbnQgPSBzZXR0aW5ncy5nYW1lRXZlbnQ7XG4gIHZhciBtbHVzdGFyZCA9IHNldHRpbmdzLm1sdXN0YXJkO1xuICB2YXIgb3ZlcnJpZGVzID0gc2V0dGluZ3Mub3ZlcnJpZGVzO1xuICB2YXIgbGV2ZWwgPSBzZXR0aW5ncy5sZXZlbDtcblxuICBpZiAoc2VlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHJhY2VyeS5zZXRSYW5kb20oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlZWQ7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgZ3JhbW1hciA9IHRyYWNlcnkuY3JlYXRlR3JhbW1hcih7fSk7IC8vIHBvcHVsYXRlIGRhdGEgZnJvbSBnYW1lRXZlbnRcblxuICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIocXVpcHMuZGF0YSksXG4gICAgICBfc3RlcDtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX2ZpZWxkMyA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIGRhdGEgPSBnYW1lRXZlbnRbX2ZpZWxkM107XG5cbiAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gc29tZSBkYXRhIG5lZWRzIG1hc3NhZ2luZ1xuICAgICAgICBzd2l0Y2ggKF9maWVsZDMpIHtcbiAgICAgICAgICBjYXNlICdpbm5pbmcnOlxuICAgICAgICAgICAgZGF0YSA9IChkYXRhICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndG9wT2ZJbm5pbmcnOlxuICAgICAgICAgICAgZGF0YSA9IGRhdGEgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdoYWxmSW5uaW5nT3V0cyc6XG4gICAgICAgICAgY2FzZSAnaG9tZVNjb3JlJzpcbiAgICAgICAgICBjYXNlICdhd2F5U2NvcmUnOlxuICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JhbW1hci5wdXNoUnVsZXMoX2ZpZWxkMywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQzLCAnJyk7XG4gICAgICB9XG4gICAgfSAvLyBjdXJyZW50IHBpdGNoZXJcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvci5mKCk7XG4gIH1cblxuICB2YXIgY1BpdGNoZXIgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyBnYW1lRXZlbnQuaG9tZVBpdGNoZXJOYW1lIDogZ2FtZUV2ZW50LmF3YXlQaXRjaGVyTmFtZTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2NQaXRjaGVyJywgY1BpdGNoZXIpOyAvLyBjdXJyZW50IGJhdHRlciAoY2FuIGJlIGFuIGVtcHR5IHN0cmluZyBpZiBub2JvZHkgYmF0dGluZylcblxuICB2YXIgY0JhdHRlciA9IGdhbWVFdmVudC5ob21lQmF0dGVyTmFtZSB8fCBnYW1lRXZlbnQuYXdheUJhdHRlck5hbWU7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdjQmF0dGVyJywgY0JhdHRlcik7IC8vIHBpdGNoaW5nIHRlYW0gbmlja25hbWVcblxuICB2YXIgcE5pY2sgPSBnYW1lRXZlbnQudG9wT2ZJbm5pbmcgPyAnI2hOaWNrIycgOiAnI2FOaWNrIyc7XG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdwTmljaycsIHBOaWNrKTsgLy8gYmF0dGluZyB0ZWFtIG5pY2tuYW1lXG5cbiAgdmFyIGJOaWNrID0gZ2FtZUV2ZW50LnRvcE9mSW5uaW5nID8gJyNhTmljayMnIDogJyNoTmljayMnO1xuICBncmFtbWFyLnB1c2hSdWxlcygnYk5pY2snLCBiTmljayk7IC8vIGxlYWRpbmcgJiB0cmFpbGluZyB0ZWFtIG5pY2tuYW1lcyBhbmQgc2NvcmVzXG5cbiAgdmFyIGxUZWFtO1xuICB2YXIgdFRlYW07XG4gIHZhciBsU2NvcmU7XG4gIHZhciB0U2NvcmU7XG5cbiAgaWYgKGdhbWVFdmVudC5hd2F5U2NvcmUgPiBnYW1lRXZlbnQuaG9tZVNjb3JlKSB7XG4gICAgbFRlYW0gPSAnI2FOaWNrIyc7XG4gICAgdFRlYW0gPSAnI2hOaWNrIyc7XG4gICAgbFNjb3JlID0gJyNhU2NvcmUjJztcbiAgICB0U2NvcmUgPSAnI2hTY29yZSMnO1xuICB9IGVsc2Uge1xuICAgIGxUZWFtID0gJyNoTmljayMnO1xuICAgIHRUZWFtID0gJyNhTmljayMnO1xuICAgIGxTY29yZSA9ICcjaFNjb3JlIyc7XG4gICAgdFNjb3JlID0gJyNhU2NvcmUjJztcbiAgfVxuXG4gIGdyYW1tYXIucHVzaFJ1bGVzKCdsVGVhbScsIGxUZWFtKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3RUZWFtJywgdFRlYW0pO1xuICBncmFtbWFyLnB1c2hSdWxlcygnbFNjb3JlJywgbFNjb3JlKTtcbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ3RTY29yZScsIHRTY29yZSk7IC8vIHNldCBiYXNlIHJ1bm5lcnNcblxuICBpZiAoZ2FtZUV2ZW50LmJhc2VydW5uZXJDb3VudCA+PSAzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoJ3J1bm5lcnMnLCAnI2Jhc2VzTG9hZGVkIycpO1xuICB9IGVsc2UgaWYgKGdhbWVFdmVudC5iYXNlcnVubmVyQ291bnQgPiAwKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoJ3J1bm5lcnMnLCAnI3J1bm5lcnNPbkJhc2UjJyk7XG4gIH1cblxuICB2YXIgYmFzZXMgPSAnJztcblxuICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKG1sdXN0YXJkLmJhc2VSdW5uZXJzKTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGJhc2UgPSBfT2JqZWN0JGtleXNbX2ldO1xuXG4gICAgaWYgKG1sdXN0YXJkLmJhc2VSdW5uZXJzW2Jhc2VdLnBsYXllcklkKSB7XG4gICAgICBiYXNlcyArPSBcIlwiLmNvbmNhdChiYXNlLCBcIiBcIik7XG4gICAgfVxuICB9XG5cbiAgZ3JhbW1hci5wdXNoUnVsZXMoJ2Jhc2VzT2NjJywgYmFzZXMudHJpbSgpKTsgLy8gYnVpbGQgcXVpcHMgc2hvcnRjdXRzXG5cbiAgZm9yICh2YXIgZmllbGQgaW4gcXVpcHMuc2hvcnRjdXRzKSB7XG4gICAgZ3JhbW1hci5wdXNoUnVsZXMoZmllbGQsIHF1aXBzLnNob3J0Y3V0c1tmaWVsZF0pO1xuICB9IC8vIGJ1aWxkIHF1aXBzIGdyYW1tYXJcblxuXG4gIGZvciAodmFyIF9maWVsZCBpbiBxdWlwc1tsZXZlbF0pIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQsIHF1aXBzW2xldmVsXVtfZmllbGRdKTtcbiAgfSAvLyBkbyBxdWlwIG92ZXJyaWRlc1xuXG5cbiAgZm9yICh2YXIgX2ZpZWxkMiBpbiBvdmVycmlkZXMpIHtcbiAgICBncmFtbWFyLnB1c2hSdWxlcyhfZmllbGQyLCBvdmVycmlkZXNbX2ZpZWxkMl0pO1xuICB9IC8vIGFkZCBtb2RzXG5cblxuICBncmFtbWFyLmFkZE1vZGlmaWVycyh0cmFjZXJ5LmJhc2VFbmdNb2RpZmllcnMpO1xuICBncmFtbWFyLmFkZE1vZGlmaWVycyhtb2RzKTtcbiAgcmV0dXJuIGdyYW1tYXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdDogaW5pdFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1sdXN0YXJkID0gcmVxdWlyZSgnbWx1c3RhcmQnKTtcblxudmFyIGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKTtcblxudmFyIGNvbW1lbnRhcnkgPSByZXF1aXJlKCcuL2NvbW1lbnRhcnknKTtcbi8qXG4gKiBAc2V0dGluZ3MgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wczpcbiAqICAgLSBnYW1lRXZlbnQ6IHRoZSBnYW1lIGV2ZW50IG9iamVjdCAoZnJvbSB0aGUgc3RyZWFtIG9yIGNocm9uaWNsZXIpXG4gKiAgIC0gbWx1c3RhcmQgKG9wdGlvbmFsKTogbWx1c3RhcmQgZGF0YSBmb3IgdGhlIGdhbWVFdmVudFxuICogICAtIHNlZWQgKG9wdGlvbmFsKTogYSBzZWVkLCBmb3IgZGV0ZXJtaW5pc3RpYyBjb21tZW50IGdlbmVyYXRpb25cbiAqICAgLSBsZXZlbCAob3B0aW9uYWwsIGRlZmF1bHRzIHRvICdtaW5pbWFsJyk6IHRoZSBjb21tZW50YXJ5IGxldmVsLCBvbmUgb2ZcbiAqICAgICAtIG1pbmltYWw6IGFkZHMgYSBmZXcgY29tbWVudHMgdG8gdXBkYXRlIG9uIGdhbWUgc3RhdHVzIGF0IGtleSBjb21tZW50c1xuICogICAtIG92ZXJyaWRlcyAob3B0aW9uYWwpOiBvYmplY3Qgd2l0aCBxdWlwIG92ZXJyaWRlc1xuICovXG5cblxudmFyIGdldENvbW1lbnQgPSBmdW5jdGlvbiBnZXRDb21tZW50KHNldHRpbmdzKSB7XG4gIGlmICghc2V0dGluZ3MuZ2FtZUV2ZW50KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgc2V0dGluZ3MubWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZCB8fCBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KHNldHRpbmdzLmdhbWVFdmVudCk7XG4gIHNldHRpbmdzLmxldmVsID0gc2V0dGluZ3MubGV2ZWwgfHwgJ21pbmltYWwnO1xuICBzZXR0aW5ncy5vdmVycmlkZXMgPSBzZXR0aW5ncy5vdmVycmlkZXMgfHwge307XG4gIHZhciBnciA9IGdyYW1tYXIuaW5pdChzZXR0aW5ncyk7XG5cbiAgaWYgKCFncikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBjb21tZW50YXJ5LmJ1aWxkQ29tbWVudChzZXR0aW5ncywgZ3IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbW1lbnQ6IGdldENvbW1lbnRcbn07IiwibW9kdWxlLmV4cG9ydHM9e1wiZGF0YVwiOltcImlubmluZ1wiLFwidG9wT2ZJbm5pbmdcIixcImhhbGZJbm5pbmdPdXRzXCIsXCJob21lVGVhbU5hbWVcIixcImF3YXlUZWFtTmFtZVwiLFwiaG9tZVRlYW1OaWNrbmFtZVwiLFwiYXdheVRlYW1OaWNrbmFtZVwiLFwiaG9tZVNjb3JlXCIsXCJhd2F5U2NvcmVcIixcImhvbWVPZGRzXCIsXCJhd2F5T2Rkc1wiLFwiaG9tZVBpdGNoZXJOYW1lXCIsXCJhd2F5UGl0Y2hlck5hbWVcIixcImxhc3RVcGRhdGVcIixcInNjb3JlVXBkYXRlXCJdLFwibWluaW1hbFwiOntcIm1hdGNodXBcIjpbXCIjaE5pY2sjIHZzICNhTmljayNcIixcIiNhTmljayMgYXQgI2hOaWNrI1wiXSxcInRvcE9yQm90XCI6XCIjdG9wT2ZJbm5pbmcjXCIsXCJpbm5pbmdGdWxsXCI6XCIjdG9wT3JCb3QjIG9mICNpbm5pbmcjXCIsXCJnYW1lU3RhcnRcIjpcIiNtYXRjaHVwIy4gI3BpdGNoZXJzIy4gI29yaWdpbmFsI1wiLFwic2NvcmVcIjpcIiNvcmlnaW5hbCMgSXQncyAjbFRlYW0udGhlIyAjbFNjb3JlIyBhbmQgI3RUZWFtLnRoZSMgI3RTY29yZSMuXCIsXCJzY29yZUFkZG9uXCI6XCIgSXQncyAjbFRlYW0udGhlIyAjbFNjb3JlIyBhbmQgI3RUZWFtLnRoZSMgI3RTY29yZSMuXCIsXCJpbm5pbmdTdGFydFwiOlwiI29yaWdpbmFsIyAjY1BpdGNoZXIjIHBpdGNoaW5nIGZvciAjcE5pY2sudGhlIy5cIixcImlubmluZ09uZVN0YXJ0XCI6XCIjb3JpZ2luYWwjXCIsXCJwaXRjaGVyc1wiOltcIiNoUGl0Y2hlciMgcGl0Y2hpbmcgZm9yICNoTmljay50aGUjLCAjYVBpdGNoZXIjIGZvciAjYU5pY2sudGhlI1wiLFwiT3VyIHBpdGNoZXJzIGFyZSAjaFBpdGNoZXIjIGZvciAjaE5pY2sudGhlIywgYW5kICNhUGl0Y2hlciMgZm9yICNhTmljay50aGUjXCJdLFwib3V0XCI6XCIjb3JpZ2luYWwjICNpbm5pbmdGdWxsLmNhcGl0YWxpemUjLCAjb3V0cyMuXCIsXCJvdXRzXCI6XCIjaGFsZklubmluZ091dHMub3V0cyNcIixcImxhc3RPdXRPZklubmluZ1wiOlwiI29yaWdpbmFsI1wiLFwiYmF0dGVyVXBSdW5uZXJzXCI6XCIjb3JpZ2luYWwjICNydW5uZXJzLnJ1bm5lclBsdXJhbGl6ZSNcIixcInJ1bm5lcnNPbkJhc2VcIjpcIlJ1bm5lciBvbiAjYmFzZXNPY2MuYW5kIy5cIixcImJhc2VzTG9hZGVkXCI6XCJCYXNlcyBhcmUgbG9hZGVkIVwifSxcInNob3J0Y3V0c1wiOntcImhQaXRjaGVyXCI6XCIjaG9tZVBpdGNoZXJOYW1lI1wiLFwiYVBpdGNoZXJcIjpcIiNhd2F5UGl0Y2hlck5hbWUjXCIsXCJoTmlja1wiOlwiI2hvbWVUZWFtTmlja25hbWUjXCIsXCJhTmlja1wiOlwiI2F3YXlUZWFtTmlja25hbWUjXCIsXCJoU2NvcmVcIjpcIiNob21lU2NvcmUjXCIsXCJhU2NvcmVcIjpcIiNhd2F5U2NvcmUjXCIsXCJvcmlnaW5hbFwiOlwiI2xhc3RVcGRhdGUjI3Njb3JlVXBkYXRlLnNwYWNlZCNcIn19IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0aGU6IGZ1bmN0aW9uIHRoZShzKSB7XG4gICAgcmV0dXJuIFwidGhlIFwiLmNvbmNhdChzKTtcbiAgfSxcbiAgLy8gY291bnRzIHRoZSAjIG9mIG91dHMgYW5kIHBsdXJhbGl6ZXMgYWNjb3JkaW5nbHlcbiAgb3V0czogZnVuY3Rpb24gb3V0cyhzKSB7XG4gICAgaWYgKHMgPT09ICcxJykge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHMsIFwiIG91dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHMsIFwiIG91dHNcIik7XG4gICAgfVxuICB9LFxuICAvLyBveGZvcmQgY29tbWFzXG4gIGFuZDogZnVuY3Rpb24gYW5kKHMpIHtcbiAgICByZXR1cm4gcy5zcGxpdCgnICcpLmpvaW4oJywgJykucmVwbGFjZSgvLCAoW14sXSopJC8sICcgYW5kICQxJyk7XG4gIH0sXG4gIC8vIGZvciBwbHVyYWxpemluZyBydW5uZXIocykgb24gZmlyc3RbLCBzZWNvbmQgYW5kIHRoaXJkXVxuICBydW5uZXJQbHVyYWxpemU6IGZ1bmN0aW9uIHJ1bm5lclBsdXJhbGl6ZShzKSB7XG4gICAgaWYgKHMuaW5kZXhPZignLCcpID49IDAgfHwgcy5pbmRleE9mKCdhbmQnKSA+PSAwKSB7XG4gICAgICByZXR1cm4gcy5yZXBsYWNlKCdSdW5uZXInLCAnUnVubmVycycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gIH0sXG4gIC8vIGFkZHMgYSBzcGFjZSBiZWZvcmUgdGhlIHdvcmRcbiAgc3BhY2VkOiBmdW5jdGlvbiBzcGFjZWQocykge1xuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gXCIgXCIuY29uY2F0KHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vL2NvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBwbGF5ZXJzID0gcmVxdWlyZSgnLi4vbGliL3BsYXllcnMnKS5wbGF5ZXJzO1xuXG52YXIgQkFTRVMgPSBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnXTtcblxudmFyIGdldEJhc2VydW5uZXJOYW1lID0gZnVuY3Rpb24gZ2V0QmFzZXJ1bm5lck5hbWUoZXZlbnREYXRhLCBpKSB7XG4gIHZhciBfZXZlbnREYXRhJGJhc2VSdW5uZXI7XG5cbiAgdmFyIG5hbWUgPSAoKF9ldmVudERhdGEkYmFzZVJ1bm5lciA9IGV2ZW50RGF0YS5iYXNlUnVubmVyTmFtZXMpID09PSBudWxsIHx8IF9ldmVudERhdGEkYmFzZVJ1bm5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50RGF0YSRiYXNlUnVubmVyW2ldKSB8fCAnJzsgLy8gdHJ5IGxvb2tpbmcgdGhlIG5hbWUgdXAgYnkgdGhlIGlkXG5cbiAgaWYgKCFuYW1lKSB7XG4gICAgdmFyIHBsYXllciA9IHBsYXllcnMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5wbGF5ZXJfaWQgPT09IGV2ZW50RGF0YS5iYXNlUnVubmVyc1tpXTtcbiAgICB9KVswXTtcblxuICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgIG5hbWUgPSBwbGF5ZXIucGxheWVyX25hbWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59O1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIC8vY29uc3QgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIGlmIChldmVudERhdGEuYmFzZXJ1bm5lckNvdW50KSB7XG4gICAgLy8gaSByZXByZXNlbnRzIHRoZSBvcmRlciBvZiBiYXNlcnVubmVyc1xuICAgIC8vIGJhc2VzT2NjdXBpZWRbaV0gaXMgdGhlIGJhc2UgdGhleSBhcmUgb24sIDAtaW5kZXhlZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnREYXRhLmJhc2VzT2NjdXBpZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBiYXNlID0gZXZlbnREYXRhLmJhc2VzT2NjdXBpZWRbaV07XG4gICAgICBhbmFseXNpcy5iYXNlUnVubmVyc1tCQVNFU1tiYXNlXV0gPSB7XG4gICAgICAgIHBsYXllck5hbWU6IGdldEJhc2VydW5uZXJOYW1lKGV2ZW50RGF0YSwgaSksXG4gICAgICAgIHBsYXllcklkOiBldmVudERhdGEuYmFzZVJ1bm5lcnNbaV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBfZXZlbnREYXRhJGhvbWVUZWFtTmksIF9ldmVudERhdGEkYXdheVRlYW1OaTtcblxuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIHZhciBob21lID0gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGhvbWVUZWFtTmkgPSBldmVudERhdGEuaG9tZVRlYW1OaWNrbmFtZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRob21lVGVhbU5pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGhvbWVUZWFtTmkudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG4gIHZhciBob21lU2NvcmUgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmhvbWVTY29yZSkgfHwgMDtcbiAgdmFyIGF3YXkgPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ldmVudERhdGEkYXdheVRlYW1OaSA9IGV2ZW50RGF0YS5hd2F5VGVhbU5pY2tuYW1lKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJGF3YXlUZWFtTmkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkYXdheVRlYW1OaS50b0xvd2VyQ2FzZSgpKSB8fCAnJztcbiAgdmFyIGF3YXlTY29yZSA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheVNjb3JlKSB8fCAwO1xuXG4gIGlmICh1cGRhdGUuaW5kZXhPZigncGxheSBiYWxsJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnYmVmb3JlRmlyc3RQaXRjaCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RvcCBvZicpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2ZpcnN0SGFsZklubmluZ1N0YXJ0JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYm90dG9tIG9mJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnc2Vjb25kSGFsZklubmluZ1N0YXJ0JztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ2FtZSBvdmVyJykgPj0gMCB8fCB1cGRhdGUuaW5kZXhPZihcIlwiLmNvbmNhdChob21lLCBcIiBcIikuY29uY2F0KGhvbWVTY29yZSwgXCIsIFwiKS5jb25jYXQoYXdheSwgXCIgXCIpLmNvbmNhdChhd2F5U2NvcmUpKSA+PSAwIHx8IHVwZGF0ZS5pbmRleE9mKFwiXCIuY29uY2F0KGF3YXksIFwiIFwiKS5jb25jYXQoYXdheVNjb3JlLCBcIiwgXCIpLmNvbmNhdChob21lLCBcIiBcIikuY29uY2F0KGhvbWVTY29yZSkpID49IDApIHtcbiAgICBhbmFseXNpcy5nYW1lU3RhdHVzID0gJ2dhbWVFbmQnO1xuICB9XG5cbiAgaWYgKGFuYWx5c2lzLmdhbWVTdGF0dXMpIHtcbiAgICByZXR1cm4gYW5hbHlzaXM7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2hlY2s6IGNoZWNrXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2tIaXRSYmlQcmVTMTIgPSBmdW5jdGlvbiBjaGVja0hpdFJiaVByZVMxMihhbmFseXNpcywgdXBkYXRlKSB7XG4gIC8vIGZyb20gc29tZSBub24tZXhoYXVzdGl2ZSByZXNlYXJjaCwgaSB0aGluayB0aGVyZSB3ZXJlbid0IGFueSBncmFuZCBzbGFtc1xuICAvLyBwcmUtczEyIHRoYXQgd2VyZSBub3QgNCBydW5zXG4gIGlmIChhbmFseXNpcy5oaXRNZXRhLmtpbmQgPT09ICdncmFuZFNsYW0nKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDQ7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgc2luZ2xlL2RvdWJsZS90cmlwbGUgd2FzIGhpdCAmIHggcnVucyB3ZXJlIHNjb3JlZCwgaXQgc2hvd3MgdXBcbiAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgdXBkYXRlIGFzIFwiLi4uISB4IHNjb3Jlc1wiXG5cblxuICB2YXIgcnVucyA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgLyEgLywgLyBzY29yZXMvKSB8fCAwO1xuXG4gIGlmIChydW5zKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHJ1bnM7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIGEgc29sbyBob21lIHJ1biB3YXMgaGl0LCB1cGRhdGUgY29udGFpbnMgdGhlIHRleHQgXCJzb2xvIGhvbWUgcnVuXCJcblxuXG4gIGlmICh1cGRhdGUuaW5kZXhPZignc29sbyBob21lIHJ1bicpID49IDApIHtcbiAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gMTtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgYSBtdWx0aS1ydW4gaG9tZSBydW4gd2FzIGhpdCwgdXBkYXRlIGNvbnRhaW5zIHRoZSB0ZXh0IFwieC1ydW4gaG9tZVxuICAvLyBydW5cIlxuXG5cbiAgcnVucyA9IHV0aWwuZ2V0TnVtYmVyKHVwZGF0ZSwgbnVsbCwgLy1ydW4gaG9tZSBydW4vKSB8fCAwO1xuXG4gIGlmIChydW5zKSB7XG4gICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IHJ1bnM7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSBzaW5nbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ3NpbmdsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSBkb3VibGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ2RvdWJsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hpdHMgYSB0cmlwbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuaGl0TWV0YS5raW5kID0gJ3RyaXBsZSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hvbWUgcnVuJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLmhpdE1ldGEua2luZCA9ICdob21lUnVuJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JhbmQgc2xhbScpID49IDApIHtcbiAgICBhbmFseXNpcy5oaXRNZXRhLmtpbmQgPSAnZ3JhbmRTbGFtJztcbiAgfVxuXG4gIGlmIChhbmFseXNpcy5oaXRNZXRhLmtpbmQpIHtcbiAgICBhbmFseXNpcy5oaXQgPSB0cnVlOyAvLyBjaGVjayBpZiBob21lIHJ1biAvIGdyYW5kIHNsYW0gbGFuZGVkIGluIGJpZyBidWNrZXRcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZignYmFsbCBsYW5kcyBpbiBhIGJpZyBidWNrZXQnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5oaXRNZXRhLmJpZ0J1Y2tldCA9IHRydWU7XG4gICAgfSAvL2Zyb20gczEyIG9ud2FyZCwgc2NvcmVzIG9uIHRoZSBwbGF5IGFyZSBpbiB0aGUgc2NvcmVVcGRhdGUgZmllbGRcbiAgICAvL2NvbnN0IHNjb3JlVXBkYXRlID0gZXZlbnREYXRhPy5zY29yZVVwZGF0ZSB8fCAnJztcbiAgICAvL2lmIChzY29yZVVwZGF0ZSkge1xuICAgIC8vYW5hbHlzaXMucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCBudWxsKSB8fCAwO1xuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gc2NvcmVVcGRhdGUsIGRlZHVjZSB0aGUgc2NvcmUgZnJvbSB0aGUgdXBkYXRlXG4gICAgLy8gdGhpcyBpcyB0aGUgY2FzZSBmb3IgZ2FtZXMgYmV0d2VlbiBzMiAmIHMxMVxuXG5cbiAgICBpZiAoIShldmVudERhdGEgIT09IG51bGwgJiYgZXZlbnREYXRhICE9PSB2b2lkIDAgJiYgZXZlbnREYXRhLnNjb3JlVXBkYXRlKSkge1xuICAgICAgY2hlY2tIaXRSYmlQcmVTMTIoYW5hbHlzaXMsIHVwZGF0ZSk7XG4gICAgfSAvLyBzY29yZSB1cGRhdGVzIGZyb20gczEyIG9ud2FyZCByZWdpc3RlcmVkIGluIHNyYy9taXNjLmpzXG5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrTWF4aW11bUJsYXNlYmFsbCA9IGZ1bmN0aW9uIGNoZWNrTWF4aW11bUJsYXNlYmFsbChhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciBiYWxscywgYmFzZXMsIG91dHMsIHN0cmlrZXM7XG5cbiAgaWYgKGV2ZW50RGF0YS50b3BPZklubmluZykge1xuICAgIC8vIGF3YXkgaXMgYmF0dGluZ1xuICAgIGJhbGxzID0gZXZlbnREYXRhLmF3YXlCYWxscztcbiAgICBiYXNlcyA9IGV2ZW50RGF0YS5hd2F5QmFzZXM7XG4gICAgb3V0cyA9IGV2ZW50RGF0YS5hd2F5T3V0cztcbiAgICBzdHJpa2VzID0gZXZlbnREYXRhLmF3YXlTdHJpa2VzO1xuICB9IGVsc2Uge1xuICAgIC8vIGhvbWUgaXMgYmF0dGluZ1xuICAgIGJhbGxzID0gZXZlbnREYXRhLmhvbWVCYWxscztcbiAgICBiYXNlcyA9IGV2ZW50RGF0YS5ob21lQmFzZXM7XG4gICAgb3V0cyA9IGV2ZW50RGF0YS5ob21lT3V0cztcbiAgICBzdHJpa2VzID0gZXZlbnREYXRhLmhvbWVTdHJpa2VzO1xuICB9XG5cbiAgaWYgKGV2ZW50RGF0YS5oYWxmSW5uaW5nT3V0cyA9PT0gb3V0cyAtIDEgJiYgZXZlbnREYXRhLmF0QmF0QmFsbHMgPT09IGJhbGxzIC0gMSAmJiBldmVudERhdGEuYXRCYXRTdHJpa2VzID09PSBzdHJpa2VzIC0gMSAmJiBldmVudERhdGEuYmFzZXJ1bm5lckNvdW50ID09PSBiYXNlcyAtIDEpIHtcbiAgICBhbmFseXNpcy5tYXhpbXVtQmxhc2ViYWxsID0gdHJ1ZTtcbiAgfVxufTtcblxudmFyIGNoZWNrU2NvcmVVcGRhdGUgPSBmdW5jdGlvbiBjaGVja1Njb3JlVXBkYXRlKGFuYWx5c2lzLCBldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkc2NvcmVVcGRhdDtcblxuICB2YXIgc2NvcmVVcGRhdGUgPSBldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2V2ZW50RGF0YSRzY29yZVVwZGF0ID0gZXZlbnREYXRhLnNjb3JlVXBkYXRlKSA9PT0gbnVsbCB8fCBfZXZlbnREYXRhJHNjb3JlVXBkYXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudERhdGEkc2NvcmVVcGRhdC50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChzY29yZVVwZGF0ZSkge1xuICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSB1dGlsLmdldE51bWJlcihzY29yZVVwZGF0ZSwgbnVsbCwgLyBydW5zPyBzY29yZS8pO1xuICAgIGFuYWx5c2lzLnVucnVuc1Njb3JlZCA9IHV0aWwuZ2V0TnVtYmVyKHNjb3JlVXBkYXRlLCBudWxsLCAvIHVucnVucz8gc2NvcmUvKTtcbiAgfVxufTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG4gIGNoZWNrU2NvcmVVcGRhdGUoYW5hbHlzaXMsIGV2ZW50RGF0YSk7XG4gIGNoZWNrTWF4aW11bUJsYXNlYmFsbChhbmFseXNpcywgZXZlbnREYXRhKTsgLy8gY2hlY2sgZm9yIHdoZXRoZXIgYSBiYXR0ZXIganVzdCBzaG93ZWQgdXAgdG8gYmF0XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdiYXR0aW5nIGZvcicpID49IDApIHtcbiAgICBhbmFseXNpcy5iYXR0ZXJVcCA9IHRydWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnYW1lU3RhdHVzID0gcmVxdWlyZSgnLi9nYW1lLXN0YXR1cycpO1xuXG52YXIgb3V0cyA9IHJlcXVpcmUoJy4vb3V0cycpO1xuXG52YXIgaGl0cyA9IHJlcXVpcmUoJy4vaGl0cycpO1xuXG52YXIgc3RlYWxzID0gcmVxdWlyZSgnLi9zdGVhbHMnKTtcblxudmFyIHdhbGtzID0gcmVxdWlyZSgnLi93YWxrcycpO1xuXG52YXIgc3BlY2lhbCA9IHJlcXVpcmUoJy4vc3BlY2lhbCcpO1xuXG52YXIgbWlzYyA9IHJlcXVpcmUoJy4vbWlzYycpO1xuXG52YXIgYmFzZVJ1bm5lcnMgPSByZXF1aXJlKCcuL2Jhc2UtcnVubmVycycpO1xuLypcbiAqIHNldHMgYWxsIGtub3duIChha2EgaW1wbGVtZW50ZWQpIGFuYWx5c2lzIHJlc3VsdHMgdG8gdGhlaXIgZGVmYXVsc1xuICogcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9wczpcbiAqXG4gKiBpZDogc3RyaW5nIHx8IHVuZGVmaW5lZFxuICogICAtIHRoZSBnYW1lIGV2ZW50IElEXG4gKlxuICogcnVuc1Njb3JlZDogbnVtYmVyXG4gKiAgIC0gaG93IG1hbnkgcnVucyB3ZXJlIHNjb3JlZCBvbiB0aGUgcGxheVxuICpcbiAqIHVucnVuc1Njb3JlZDogbnVtYmVyXG4gKiAgIC0gaG93IG1hbnkgdW5ydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5XG4gKlxuICogYmF0dGVyVXA6IGJvb2xlYW5cbiAqICAgLSB3aGV0aGVyIGEgYmF0dGVyIGp1c3Qgc2hvd2VkIHVwIHRvIGJhdFxuICpcbiAqIGdhbWVTdGF0dXM6IG51bGwgfHwgc3RyaW5nXG4gKiAgIC0gd2lsbCBiZSBudWxsIG9yIG9uZSBvZjpcbiAqICAgLSBiZWZvcmVGaXJzdFBpdGNoLCB3aGVuIHRoZSBmaXJzdCBwaXRjaCBoYXNuJ3QgYmVlbiB0aHJvd24geWV0XG4gKiAgIC0gZmlyc3RIYWxmSW5uaW5nU3RhcnQsIHdoZW4gdGhlIGZpcnN0IGhhbGYgb2YgYW4gaW5uaW5nIGlzIHN0YXJ0aW5nXG4gKiAgIC0gc2Vjb25kSGFsZklubmluZ1N0YXJ0LCB3aGVuIHRoZSBzZWNvbmQgaGFsZiBvZiBhbiBpbm5pbmcgaXMgc3RhcnRpbmdcbiAqICAgLSBoYWxmSW5uaW5nRW5kLCB3aGVuIGFueSBoYWxmIG9mIGFuIGlubmluZyBpcyBlbmRpbmcgb24gdGhlIHBsYXlcbiAqICAgLSBnYW1lRW5kLCB3aGVuIHRoZSBnYW1lIGhhcyBlbmRlZFxuICogICAtIGlubmluZ1Jld2luZCwgd2hlbiB0aGUgc2FsbW9uIHN3aW0gdXBzdHJlYW1cbiAqXG4gKiBvdXQ6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYW4gb3V0IG9uIHRoZSBwbGF5XG4gKiBvdXRNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIGZseVxuICogICAgIC0gZ3JvdW5kXG4gKiAgICAgLSBzdHJpa2VcbiAqICAgICAtIGNhdWdodFN0ZWFsaW5nXG4gKiAgICAgLSB1bnNwZWNpZmllZCAoYXMgeW91IHNvbWV0aW1lcyBzZWUgd2l0aCBzYWNyaWZpY2Ugb3V0cylcbiAqICAgLSBzYWNyaWZpY2U6IGJvb2xlYW5cbiAqICAgICAtIHRydWUgd2hlbiB0aGUgb3V0IHdhcyBhIHNhY3JpZmljZVxuICogICAtIHNhY3JpZmljZU1ldGE6IG9iamVjdCwgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BzOlxuICogICAgIC0ga2luZDogc3RyaW5nIHx8IG51bGxcbiAqICAgICAgIC0gd2lsbCBiZSBvbmUgb2Y6XG4gKiAgICAgICAtIGFkdmFuY2VcbiAqICAgICAgIC0gc2NvcmVcbiAqICAgLSBmcmVlUmVmaWxsOiBib29sZWFuXG4gKiAgICAgLSB0cnVlIHdoZW4gYmF0dGVyIHVzZWQgdGhlaXIgZnJlZSByZWZpbGwgb24gdGhlIHBsYXlcbiAqXG4gKiBoaXQ6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYSBoaXQgb24gdGhlIHBsYXlcbiAqIGhpdE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0ga2luZDogbnVsbCB8fCBzdHJpbmdcbiAqICAgICAtIHdpbGwgYmUgb25lIG9mOlxuICogICAgIC0gc2luZ2xlXG4gKiAgICAgLSBkb3VibGVcbiAqICAgICAtIHRyaXBsZVxuICogICAgIC0gaG9tZVJ1blxuICogICAgIC0gZ3JhbmRTbGFtXG4gKiAgIC0gYmlnQnVja2V0OiBib29sZWFuXG4gKiAgICAgLSB3aGV0aGVyIGEgQmlnIEJ1Y2tldCB3YXMgYWN0aXZhdGVkIG9uIHRoZSBwbGF5XG4gKlxuICogc3RlYWw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gdGhlcmUgaXMgYW4gYXR0ZW1wdGVkIHN0ZWFsIG9uIHRoZSBwbGF5XG4gKiBzdGVhbE1ldGE6IG9iamVjdCwgd2l0aCB0aGUgcHJvcHM6XG4gKiAgIC0gc3VjY2VzczogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoaWVmIG5vdCBjYXVnaHQsIGZhbHNlIG90aGVyd2lzZVxuICogICAtIGJhc2VTdG9sZW46IG51bGwgfHwgbnVtYmVyXG4gKiAgICAgLSB0aGUgYmFzZSB3aGljaCB3YXMgc3RvbGVuICgwLWluZGV4ZWQpXG4gKlxuICogd2FsazogYm9vbGVhblxuICogICAtIHRydWUgd2hlbiB0aGVyZSBpcyBhIHdhbGsgb24gdGhlIHBsYXlcbiAqIHdhbGtNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIG1pbmRUcmljazogYm9vbGVhblxuICogICAgIC0gdHJ1ZSB3aGVuIHRoZSBwaXRjaGVzIHVzZWQgYSBtaW5kIHRyaWNrIHRvIHR1cm4gdGhlIHdhbGsgaW50byBhXG4gKiAgICAgICBzdHJpa2VvdXRcbiAqXG4gKiBzcGVjaWFsOiBib29sZWFuXG4gKiAgIC0gdHJ1ZSB3aGVuIHRoZXJlIHdhcyBhIHNwZWNpYWwgZXZlbnQgb24gdGhlIHBsYXlcbiAqIHNwZWNpYWxNZXRhOiBvYmplY3QsIHdpdGggdGhlIHByb3BzOlxuICogICAtIGtpbmQ6IG51bGwgfHwgc3RyaW5nXG4gKiAgICAgLSB3aWxsIGJlIG9uZSBvZjpcbiAqICAgICAtIGJsb29kcmFpblxuICogICAgIC0gaXNQYXJ0eWluZ1xuICogICAgIC0gcmV2ZXJiXG4gKiAgICAgLSBiaXJkc0NpcmNsZVxuICogICAgIC0gYmlyZHNQZWNrZWRcbiAqICAgICAtIGp1c3RCaXJkc1xuICogICAgIC0gYWxsZXJnaWNSZWFjdGlvblxuICogICAgIC0gaW5jaW5lcmF0ZWRcbiAqICAgICAtIGJlY2FtZU1hZ21hdGljXG4gKiAgICAgLSBmZWVkYmFja1xuICogICAgIC0gZWxlY3RyaWNpdHlcbiAqICAgICAtIHVuc3RhYmxlXG4gKiAgICAgLSBmbGlja2VyaW5nXG4gKiAgICAgLSBjb25zdW1lcnNBdHRhY2tcbiAqICAgICAtIHNhbG1vblxuICogICAtIGRldGFpbHM6IG9iamVjdCwgd2l0aCBwcm9wcyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgZXZlbnRcbiAqXG4gKiBiYXNlUnVubmVyczogb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wcywgcmVwcmVzZW50aW5nIGJhc2VzXG4gKiAgIC0gZmlyc3RcbiAqICAgLSBzZWNvbmRcbiAqICAgLSB0aGlyZFxuICogICAtIGZvdXJ0aFxuICogICAtIGlmIHRoZXJlIGlzIGEgYmFzZXJ1bm5lciBvbiB0aGUgZ2l2ZW4gYmFzZSwgdGhlIHZhbHVlIGZvciB0aGF0IGJhc2VcbiAqICAgICB3aWxsIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcHM6XG4gKiAgICAgLSBwbGF5ZXJOYW1lXG4gKiAgICAgLSBwbGF5ZXJJZFxuICpcbiAqIG1heGltdW1CbGFzZWJhbGw6IGJvb2xlYW5cbiAqICAgLSB0cnVlIHdoZW4gd2UncmUgYXQgTUFYSU1VTSBCTEFTRUJBTExcbiAqL1xuXG5cbnZhciBpbml0QW5hbHlzaXMgPSBmdW5jdGlvbiBpbml0QW5hbHlzaXMoZXZlbnREYXRhKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGV2ZW50RGF0YS5pZCB8fCBldmVudERhdGEuX2lkLFxuICAgIGdhbWVTdGF0dXM6IG51bGwsXG4gICAgcnVuc1Njb3JlZDogMCxcbiAgICB1bnJ1bnNTY29yZWQ6IDAsXG4gICAgYmF0dGVyVXA6IGZhbHNlLFxuICAgIG91dDogZmFsc2UsXG4gICAgb3V0TWV0YToge1xuICAgICAga2luZDogbnVsbCxcbiAgICAgIHNhY3JpZmljZTogZmFsc2UsXG4gICAgICBzYWNyaWZpY2VNZXRhOiB7XG4gICAgICAgIGtpbmQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBmcmVlUmVmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAgaGl0OiBmYWxzZSxcbiAgICBoaXRNZXRhOiB7XG4gICAgICBraW5kOiBudWxsLFxuICAgICAgYmlnQnVja2V0OiBmYWxzZVxuICAgIH0sXG4gICAgc3RlYWw6IGZhbHNlLFxuICAgIHN0ZWFsTWV0YToge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGJhc2VTdG9sZW46IG51bGxcbiAgICB9LFxuICAgIHdhbGs6IGZhbHNlLFxuICAgIHdhbGtNZXRhOiB7XG4gICAgICBtaW5kVHJpY2s6IGZhbHNlXG4gICAgfSxcbiAgICBzcGVjaWFsOiBmYWxzZSxcbiAgICBzcGVjaWFsTWV0YToge1xuICAgICAga2luZDogbnVsbFxuICAgIH0sXG4gICAgYmFzZVJ1bm5lcnM6IHtcbiAgICAgIGZpcnN0OiB7fSxcbiAgICAgIHNlY29uZDoge30sXG4gICAgICB0aGlyZDoge30sXG4gICAgICBmb3VydGg6IHt9XG4gICAgfSxcbiAgICBtYXhpbXVtQmxhc2ViYWxsOiBmYWxzZVxuICB9O1xufTtcblxudmFyIGFuYWx5emVHYW1lRXZlbnQgPSBmdW5jdGlvbiBhbmFseXplR2FtZUV2ZW50KGV2ZW50RGF0YSkge1xuICBpZiAoIWV2ZW50RGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGFuYWx5c2lzID0gaW5pdEFuYWx5c2lzKGV2ZW50RGF0YSk7XG4gIHZhciBjaGVja2VycyA9IFtnYW1lU3RhdHVzLCBvdXRzLCBoaXRzLCB3YWxrcywgc3RlYWxzLCBzcGVjaWFsLCBtaXNjLCBiYXNlUnVubmVyc107XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfY2hlY2tlcnMgPSBjaGVja2VyczsgX2kgPCBfY2hlY2tlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGNoZWNrZXIgPSBfY2hlY2tlcnNbX2ldO1xuICAgIGNoZWNrZXIuY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSk7XG4gIH1cblxuICByZXR1cm4gYW5hbHlzaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYW5hbHl6ZUdhbWVFdmVudDogYW5hbHl6ZUdhbWVFdmVudFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdmbHlvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2ZseSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2dyb3VuZCBvdXQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2dyb3VuZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3N0cmlrZXMgb3V0JykgPj0gMCkge1xuICAgIGFuYWx5c2lzLm91dE1ldGEua2luZCA9ICdzdHJpa2UnO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdmaWVsZGVyXFwncyBjaG9pY2UnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2ZpZWxkZXJzQ2hvaWNlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignYSBkb3VibGUgcGxheScpID49IDApIHtcbiAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnZG91YmxlUGxheSc7XG4gIH1cblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ3NhY3JpZmljZScpID49IDApIHtcbiAgICAvLyB0aGlzIG1heSBhbHJlYWR5IGJlIGEgZ3JvdW5kL2ZseW91dCwgb3IgaXRzIHVuc3BlY2lmaWVkXG4gICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gYW5hbHlzaXMub3V0TWV0YS5raW5kIHx8ICd1bnNwZWNpZmllZCc7XG4gICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2UgPSB0cnVlOyAvLyBjaGVjayBpZiBzb21lb25lIHNjb3JlZCBvciBhZHZhbmNlZCBvbiB0aGUgc2FjcmlmaWNlXG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3Njb3JlcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuc2FjcmlmaWNlTWV0YS5raW5kID0gJ3Njb3JlJztcblxuICAgICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkpIHtcbiAgICAgICAgYW5hbHlzaXMucnVuc1Njb3JlZCA9IDE7XG4gICAgICB9IC8vIG90aGVyd2lzZSBzY29yZXMgYXJlIGNhcHR1cmVkIGluIHNyYy9taXNjLmpzXG5cbiAgICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdhZHZhbmNlJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5zYWNyaWZpY2VNZXRhLmtpbmQgPSAnYWR2YW5jZSc7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFuYWx5c2lzLm91dE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG5cbiAgICBpZiAoKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5oYWxmSW5uaW5nT3V0cykgPT09IDApIHtcbiAgICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnaGFsZklubmluZ0VuZCc7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCdmcmVlIHJlZmlsbCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEuZnJlZVJlZmlsbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZS5pbmRleE9mKCd1c2VzIGEgbWluZCB0cmljaycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLm91dE1ldGEubWluZFRyaWNrID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhhbmFseXNpcywgZXZlbnREYXRhKSB7XG4gIHZhciB1cGRhdGUgPSB1dGlsLmdldFVwZGF0ZVRleHQoZXZlbnREYXRhKTtcblxuICBpZiAodXBkYXRlLmluZGV4T2YoJ2Jsb29kZHJhaW4nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdibG9vZGRyYWluJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgcGFydHlpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdpc1BhcnR5aW5nJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncmV2ZXJiJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAncmV2ZXJiJztcbiAgfSBlbHNlIGlmICggLy8gdGhpcyBjaGVjayBoYXMgdG8gY29tZSBiZWZvcmUgYmlyZHMgY2lyY2xlLCBiZWNhdXNlIHRoZSB0ZXh0XG4gIC8vICd0aGUgYmlyZHMgY2lyY2xlJyBpcyBwcmVzZW50IGluIGJvdGggY2FzZXNcbiAgdXBkYXRlLmluZGV4T2YoJ3RoZSBiaXJkcyBwZWNrZWQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiaXJkc1BlY2tlZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ3RoZSBiaXJkcyBjaXJjbGUnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdiaXJkc0NpcmNsZSc7XG4gIH0gZWxzZSBpZiAoIC8vIHRoaXMgaXMgdG8gY2FwdHVyZSBhbnkgb3RoZXIgbm9uLXBlY2tpbmcgJiBub24tY2lyY2xpbmcgYmlyZGluZXNzXG4gIHVwZGF0ZS5pbmRleE9mKCdiaXJkcycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2p1c3RCaXJkcyc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2hhZCBhbiBhbGxlcmdpYyByZWFjdGlvbicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2FsbGVyZ2ljUmVhY3Rpb24nO1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdyb2d1ZSB1bXBpcmUgaW5jaW5lcmF0ZWQnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdpbmNpbmVyYXRlZCc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2JlY2FtZSBtYWdtYXRpYycpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2JlY2FtZU1hZ21hdGljJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZmVlZGJhY2snKSA+PSAwICYmICh1cGRhdGUuaW5kZXhPZigncmVhbGl0eSBmbGlja2VycycpID49IDAgfHwgdXBkYXRlLmluZGV4T2YoJ3N3aXRjaGVkIHRlYW1zJykgPj0gMCkpIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2ZlZWRiYWNrJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGVsZWN0cmljaXR5IHphcHMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdlbGVjdHJpY2l0eSc7XG4gIH0gZWxzZSBpZiAodXBkYXRlLmluZGV4T2YoJ2lzIG5vdyB1bnN0YWJsZScpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3Vuc3RhYmxlJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignaXMgbm93IGZsaWNrZXJpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdmbGlja2VyaW5nJztcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignY29uc3VtZXJzIGF0dGFjaycpID49IDApIHtcbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2RlZmVuZHMnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2NvbnN1bWVyc0F0dGFja0RlZmVuZGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdjb25zdW1lcnNBdHRhY2snO1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc2FsbW9uIHN3aW0gdXBzdHJlYW0nKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdzYWxtb24nO1xuICAgIGFuYWx5c2lzLmdhbWVTdGF0dXMgPSAnaW5uaW5nUmV3aW5kJzsgLy8gZmlyc3QsIGdyYWIgYWxsIHRoZSBzZW50ZW5jZXMgd2l0aCB3aGljaCB0ZWFtIGxvc3QgaG93IG1hbnkgcnVuc1xuXG4gICAgdmFyIHRlYW1zID0gdXBkYXRlLm1hdGNoKC8oXFxkKyhcXC5cXGQrKT8pIG9mIHRoZSAuKidzIHJ1bnMgYXJlIGxvc3QvZyk7XG5cbiAgICBpZiAodGVhbXMpIHtcbiAgICAgIHZhciBydW5zU3RvbGVuID0gdGVhbXMubWFwKGZ1bmN0aW9uICh0ZWFtKSB7XG4gICAgICAgIHJldHVybiB1dGlsLmdldE51bWJlcih0ZWFtLCBudWxsLCBudWxsKSB8fCAwO1xuICAgICAgfSk7XG4gICAgICB2YXIgcnVuc1N0b2xlbkZyb20gPSB0ZWFtcy5tYXAoZnVuY3Rpb24gKHRlYW0pIHtcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHRlYW0sIC9vZiB0aGUgLywgLydzIHJ1bnMvKTtcbiAgICAgIH0pO1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IHtcbiAgICAgICAgcnVuc1N0b2xlbjogcnVuc1N0b2xlbixcbiAgICAgICAgcnVuc1N0b2xlbkZyb206IHJ1bnNTdG9sZW5Gcm9tXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZigncnVucyBhcmUgb3ZlcmZsb3dpbmcnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdydW5zT3ZlcmZsb3dpbmcnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zR2FpbmVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8gdW5ydW5zLyksXG4gICAgICBydW5zT3ZlcmZsb3dpbmdGb3I6IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL1xcbi8sIC8gZ2Fpbi8pXG4gICAgfTtcbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignc29sYXIgcGFuZWxzIGFic29yYicpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ3J1bnNDb2xsZWN0ZWQnO1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSB7XG4gICAgICBydW5zQ29sbGVjdGVkOiB1dGlsLmdldE51bWJlcih1cGRhdGUsIG51bGwsIC8gcnVucyBhcmUgY29sbGVjdGVkLyksXG4gICAgICBydW5zQ29sbGVjdGVkRnJvbTogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc2F2ZWQgZm9yIHRoZSAvLCAvJ3MgbmV4dCBnYW1lLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdW4gMiBzbWlsZXMnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCA9ICdzdW4yJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCBudWxsLCAvISBzdW4gMiBzbWlsZXMvKSxcbiAgICAgIHdpblNldFVwb246IHV0aWwuZ2V0VGVhbShldmVudERhdGEsIHVwZGF0ZSwgL3NldCBhIHdpbiB1cG9uIHRoZSAvLCAvXFwuLylcbiAgICB9O1xuICB9IGVsc2UgaWYgKHVwZGF0ZS5pbmRleE9mKCdibGFjayBob2xlIHN3YWxsb3dzJykgPj0gMCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmtpbmQgPSAnYmxhY2tIb2xlJztcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0ge1xuICAgICAgcnVuc0NvbGxlY3RlZDogdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvY29sbGVjdCAvLCAvIS8pLFxuICAgICAgd2luU3dhbGxvd2VkRnJvbTogdXRpbC5nZXRUZWFtKGV2ZW50RGF0YSwgdXBkYXRlLCAvc3dhbGxvd3MgdGhlIHJ1bnMgYW5kIGEgLywgLyB3aW4uLylcbiAgICB9OyAvLyBzZWUgaWYgY2FyY2luaXphdGlvbiB0cmlnZ2VyZWQgYnkgdGhlIGJsYWNrIGhvbGVcblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndGhlIGJhbHRpbW9yZSBjcmFicyBzdGVhbCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMucGxheWVyU3RvbGVuID0gdXRpbC5nZXRQbGF5ZXIodXBkYXRlLCAvY3JhYnMgc3RlYWwgLywgLyBmb3IgdGhlIHJlbWFpbmRlci8pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh1cGRhdGUuaW5kZXhPZignZ3JpbmQgcmFpbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5raW5kID0gJ2dyaW5kUmFpbCc7XG4gICAgdmFyIHRyaWNrcyA9IHV0aWwuZ2V0U2thdGVUcmlja3ModXBkYXRlKTtcbiAgICBhbmFseXNpcy5zcGVjaWFsTWV0YS5kZXRhaWxzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBwbGF5ZXI6IHV0aWwuZ2V0UGxheWVyKHVwZGF0ZSwgL14vLCAvIGhvcHMgb24vKVxuICAgIH0sIHRyaWNrcyk7XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3NhZmUhJykgPj0gMCkge1xuICAgICAgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYW5hbHlzaXMuc3BlY2lhbE1ldGEuZGV0YWlscyksIHt9LCB7XG4gICAgICAgIGdyaW5kU3VjY2VzczogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG91dCFcbiAgICAgIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGFuYWx5c2lzLnNwZWNpYWxNZXRhLmRldGFpbHMpLCB7fSwge1xuICAgICAgICBncmluZFN1Y2Nlc3M6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGFuYWx5c2lzLm91dCA9IHRydWU7XG4gICAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAncmFpbEJhaWwnO1xuICAgIH1cbiAgfSAvLyBpZiB3ZSBmb3VuZCBzb21ldGhpbmcsIHRoZW46XG5cblxuICBpZiAoYW5hbHlzaXMuc3BlY2lhbE1ldGEua2luZCkge1xuICAgIGFuYWx5c2lzLnNwZWNpYWwgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoZWNrOiBjaGVja1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdzdGVhbCcpID49IDApIHtcbiAgICBhbmFseXNpcy5zdGVhbCA9IHRydWU7XG5cbiAgICBpZiAodXBkYXRlLmluZGV4T2YoJ2NhdWdodCcpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuICAgICAgYW5hbHlzaXMub3V0TWV0YS5raW5kID0gJ2NhdWdodFN0ZWFsaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gLy8gYmFzZVN0b2xlbiBpcyAwLWluZGV4ZWRcblxuXG4gICAgaWYgKHVwZGF0ZS5zZWFyY2goL3N0ZWFsLipmaXJzdC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAwO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKnNlY29uZC8pICE9PSAtMSkge1xuICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAxO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlLnNlYXJjaCgvc3RlYWwuKnRoaXJkLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDI7XG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qZm91cnRoLykgIT09IC0xKSB7XG4gICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDM7IC8vIHRoaXMgbWF5IGhhdmUgYmVlbiBhIHJ1biBpZiB0aGVyZSBhcmUgNCBiYXNlcyBpbiBwbGF5XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhdHRlcikgIT09IG51bGwgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5hd2F5QmFzZXMpID09PSA0KSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSBlbHNlIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIGFuYWx5c2lzLnN0ZWFsTWV0YS5zdWNjZXNzICYmIChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdheUJhdHRlcikgIT09IG51bGwgJiYgKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50RGF0YS5ob21lQmFzZXMpID09PSA0KSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSBlbHNlIGlmICh1cGRhdGUuc2VhcmNoKC9zdGVhbC4qaG9tZS8pICE9PSAtMSkge1xuICAgICAgLy8gc2VlIGlmIGhvbWUgb3IgYXdheSBzdG9sZSB0aGUgYmFzZVxuICAgICAgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhdHRlcikgIT09IG51bGwpIHtcbiAgICAgICAgYW5hbHlzaXMuc3RlYWxNZXRhLmJhc2VTdG9sZW4gPSAoZXZlbnREYXRhID09PSBudWxsIHx8IGV2ZW50RGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnREYXRhLmF3YXlCYXNlcykgLSAxIHx8IDM7XG4gICAgICB9IGVsc2UgaWYgKChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuYXdhQmF0dGVyKSAhPT0gbnVsbCkge1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IChldmVudERhdGEgPT09IG51bGwgfHwgZXZlbnREYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudERhdGEuaG9tZUJhc2VzKSAtIDEgfHwgMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG9sZGVyIGdhbWVzIGRvbid0IGhhdmUgdGhlc2UgZmllbGRzLCBvciBtYXkgaGF2ZSBib3RoXG4gICAgICAgIC8vIGhvbWUgYW5kIGF3YXkgYmF0dGVycyBmaWxsZWQgaW47IGp1c3QgYXNzdW1lZCBob21lIGJhc2VcbiAgICAgICAgLy8gaXMgYmFzZSAjMyBpbiB0aG9zZSBjYXNlcywgaSBndWVzc1xuICAgICAgICBhbmFseXNpcy5zdGVhbE1ldGEuYmFzZVN0b2xlbiA9IDM7XG4gICAgICB9XG5cbiAgICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpKSB7XG4gICAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgICAgfSAvLyBvdGhlcndpc2Ugc2NvcmVzIGFyZSBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuXG4gICAgfSAvLyBjaGVjayBmb3IgYmxhc2VydW5uaW5nIHNjb3JlcyBwcmUgcy0xMiAob3RoZXJ3aXNlIGNhcHR1cmVkIGluXG4gICAgLy8gc3JjL21pc2MuanMpXG5cblxuICAgIGlmICghKGV2ZW50RGF0YSAhPT0gbnVsbCAmJiBldmVudERhdGEgIT09IHZvaWQgMCAmJiBldmVudERhdGEuc2NvcmVVcGRhdGUpICYmIHVwZGF0ZS5pbmRleE9mKCdibGFzZXJ1bm5pbmcnKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy5ydW5zU2NvcmVkID0gdXRpbC5nZXROdW1iZXIodXBkYXRlLCAvc2NvcmVzIC8sIC8gd2l0aCBibGFzZXJ1bm5pbmcvKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZXRVcGRhdGVUZXh0ID0gZnVuY3Rpb24gZ2V0VXBkYXRlVGV4dChldmVudERhdGEpIHtcbiAgdmFyIF9ldmVudERhdGEkbGFzdFVwZGF0ZTtcblxuICByZXR1cm4gKGV2ZW50RGF0YSA9PT0gbnVsbCB8fCBldmVudERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZXZlbnREYXRhJGxhc3RVcGRhdGUgPSBldmVudERhdGEubGFzdFVwZGF0ZSkgPT09IG51bGwgfHwgX2V2ZW50RGF0YSRsYXN0VXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnREYXRhJGxhc3RVcGRhdGUudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgbnVtYmVyIChzdXBwb3J0cyBwb3NpdGl2ZSBpbnRlZ2VycyAmIGZsb2F0cyksXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIG51bWJlcnNcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCBmb3IgbnVtYmVyc1xuICogd2lsbCByZXR1cm4gYSBudW1iZXIgb3IgbnVsbFxuICovXG5cblxudmFyIGdldE51bWJlciA9IGZ1bmN0aW9uIGdldE51bWJlcihzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIG51bSA9IG51bGw7XG4gIHZhciBudW1SZWdleCA9IC8oKFxcZCspPyhcXC5cXGQrKT8pLztcblxuICBpZiAoIXByZSkge1xuICAgIHByZSA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcG9zdCA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwcmUuc291cmNlICsgbnVtUmVnZXguc291cmNlICsgcG9zdC5zb3VyY2UpO1xuICB2YXIgbWF0Y2hlcyA9IHJlZ2V4W1N5bWJvbC5tYXRjaF0ocyk7XG5cbiAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkge1xuICAgIG51bSA9IE51bWJlcihtYXRjaGVzWzFdKSB8fCBudW07XG4gIH1cblxuICByZXR1cm4gbnVtO1xufTtcbi8qXG4gKiB3aWxsIGxvb2sgdGhyb3VnaCBzIGZvciBhIG1hdGNoIGJldHdlZW4gcHJlIGFuZCBwb3N0XG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgbWF0Y2hcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSBtYXRjaFxuICogd2lsbCByZXR1cm4gdGhlIG1hdGNoLCBvciBhbiBlbXB0eSBzdHJpbmdcbiAqL1xuXG5cbnZhciBnZXRNYXRjaCA9IGZ1bmN0aW9uIGdldE1hdGNoKHMsIHByZSwgcG9zdCkge1xuICB2YXIgbWF0Y2hSZWdleCA9IC8oLiopLztcblxuICBpZiAoIXByZSkge1xuICAgIHByZSA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcG9zdCA9IG5ldyBSZWdFeHAoJycpO1xuICB9XG5cbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwcmUuc291cmNlICsgbWF0Y2hSZWdleC5zb3VyY2UgKyBwb3N0LnNvdXJjZSk7XG4gIHZhciBtYXRjaGVzID0gcmVnZXhbU3ltYm9sLm1hdGNoXShzKTtcblxuICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNbMV07XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuLypcbiAqIHdpbGwgbG9vayB0aHJvdWdoIHMgZm9yIGEgdGVhbSBuYW1lXG4gKiBwcmUgaXMgcmVnZXggdG8gcHJlcGVuZCB0byB0aGUgcmVnZXggZm9yIHRoZSB0ZWFtIG5hbWVcbiAqIHBvc3QgaXMgcmVnZXggdG8gYXBwZW5kIHRvIHRoZSByZWdleCB0aGUgdGVhbSBuYW1lXG4gKiB3aWxsIHJldHVybiAnaG9tZScgJ2F3YXknIG9yICcnXG4gKi9cblxuXG52YXIgZ2V0VGVhbSA9IGZ1bmN0aW9uIGdldFRlYW0oZXZlbnREYXRhLCBzLCBwcmUsIHBvc3QpIHtcbiAgdmFyIHRlYW0gPSBnZXRNYXRjaChzLCBwcmUsIHBvc3QpO1xuXG4gIGlmICh0ZWFtKSB7XG4gICAgdGVhbSA9IGV2ZW50RGF0YS5ob21lVGVhbU5pY2tuYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRlYW0gPyAnaG9tZScgOiAnYXdheSc7XG4gIH1cblxuICByZXR1cm4gdGVhbTtcbn07XG5cbnZhciB0aXRsZUNhc2UgPSBmdW5jdGlvbiB0aXRsZUNhc2Uocykge1xuICBpZiAoIXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICA7XG4gIHJldHVybiBzLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgaWYgKHdvcmQpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh3b3JkWzBdLnRvVXBwZXJDYXNlKCkpLmNvbmNhdCh3b3JkLnNsaWNlKDEpKTtcbiAgICB9XG4gIH0pLmpvaW4oJyAnKTtcbn07XG4vKlxuICogd2lsbCBsb29rIHRocm91Z2ggcyBmb3IgYSBwbGF5ZXIgbmFtZVxuICogcHJlIGlzIHJlZ2V4IHRvIHByZXBlbmQgdG8gdGhlIHJlZ2V4IGZvciB0aGUgdGVhbSBuYW1lXG4gKiBwb3N0IGlzIHJlZ2V4IHRvIGFwcGVuZCB0byB0aGUgcmVnZXggdGhlIHRlYW0gbmFtZVxuICogd2lsbCByZXR1cm4gdGhlIHBsYXllciBuYW1lIG9yICcnXG4gKi9cblxuXG52YXIgZ2V0UGxheWVyID0gZnVuY3Rpb24gZ2V0UGxheWVyKHMsIHByZSwgcG9zdCkge1xuICB2YXIgcGxheWVyID0gZ2V0TWF0Y2gocywgcHJlLCBwb3N0KTtcbiAgcmV0dXJuIHRpdGxlQ2FzZShwbGF5ZXIpO1xufTtcblxudmFyIGdldFNrYXRlVHJpY2tzID0gZnVuY3Rpb24gZ2V0U2thdGVUcmlja3ModXBkYXRlKSB7XG4gIHZhciBncmluZFRyaWNrLCBncmluZFNjb3JlLCBsYW5kVHJpY2ssIGxhbmRTY29yZTtcbiAgdmFyIHRyaWNrcyA9IHVwZGF0ZS5tYXRjaCgvIGEgKC4qKSBcXCgoXFxkKykvZyk7IC8vIGdyaW5kIHRyaWNrXG5cbiAgaWYgKHRyaWNrc1swXSkge1xuICAgIGdyaW5kVHJpY2sgPSB0aXRsZUNhc2UoZ2V0TWF0Y2godHJpY2tzWzBdLCAvYSAvLCAvIFxcKC8pKTtcbiAgICBncmluZFNjb3JlID0gZ2V0TnVtYmVyKHRyaWNrc1swXSwgL1xcKC8sIC8kLyk7XG4gIH0gLy8gbGFuZCB0cmlja1xuXG5cbiAgaWYgKHRyaWNrc1sxXSkge1xuICAgIGxhbmRUcmljayA9IHRpdGxlQ2FzZShnZXRNYXRjaCh0cmlja3NbMV0sIC9hIC8sIC8gXFwoLykpO1xuICAgIGxhbmRTY29yZSA9IGdldE51bWJlcih0cmlja3NbMV0sIC9cXCgvLCAvJC8pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBncmluZFRyaWNrOiBncmluZFRyaWNrLFxuICAgIGdyaW5kU2NvcmU6IGdyaW5kU2NvcmUsXG4gICAgbGFuZFRyaWNrOiBsYW5kVHJpY2ssXG4gICAgbGFuZFNjb3JlOiBsYW5kU2NvcmVcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRVcGRhdGVUZXh0OiBnZXRVcGRhdGVUZXh0LFxuICBnZXROdW1iZXI6IGdldE51bWJlcixcbiAgZ2V0VGVhbTogZ2V0VGVhbSxcbiAgZ2V0UGxheWVyOiBnZXRQbGF5ZXIsXG4gIGdldFNrYXRlVHJpY2tzOiBnZXRTa2F0ZVRyaWNrc1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soYW5hbHlzaXMsIGV2ZW50RGF0YSkge1xuICB2YXIgdXBkYXRlID0gdXRpbC5nZXRVcGRhdGVUZXh0KGV2ZW50RGF0YSk7XG5cbiAgaWYgKHVwZGF0ZS5pbmRleE9mKCdkcmF3cyBhIHdhbGsnKSA+PSAwKSB7XG4gICAgYW5hbHlzaXMud2FsayA9IHRydWU7IC8vIGNoZWNrIGlmIGFueSBydW5zIHdlcmUgc2NvcmVkIG9uIHRoZSBwbGF5IHByaW9yIHRvIHMxMlxuXG4gICAgaWYgKCEoZXZlbnREYXRhICE9PSBudWxsICYmIGV2ZW50RGF0YSAhPT0gdm9pZCAwICYmIGV2ZW50RGF0YS5zY29yZVVwZGF0ZSkgJiYgdXBkYXRlLmluZGV4T2YoJ3Njb3JlcycpID49IDApIHtcbiAgICAgIGFuYWx5c2lzLnJ1bnNTY29yZWQgPSAxO1xuICAgIH0gLy8gb3RoZXJ3aXNlIHNjb3JlcyBjYXB0dXJlZCBpbiBzcmMvbWlzYy5qc1xuICAgIC8vIGNoZWNrIGZvciBtaW5kIHRyaWNrIHNoZW5hbmlnYW5zXG5cblxuICAgIGlmICh1cGRhdGUuaW5kZXhPZigndXNlcyBhIG1pbmQgdHJpY2snKSA+PSAwKSB7XG4gICAgICBhbmFseXNpcy53YWxrTWV0YS5taW5kVHJpY2sgPSB0cnVlO1xuXG4gICAgICBpZiAodXBkYXRlLmluZGV4T2YoJ3N0cmlrZXMgb3V0JykgPj0gMCkge1xuICAgICAgICBhbmFseXNpcy5vdXQgPSB0cnVlO1xuICAgICAgICBhbmFseXNpcy5vdXRNZXRhLmtpbmQgPSAnc3RyaWtlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2tcbn07IiwiY29uc3QgcGxheWVycyA9IFtcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDIwZWQ2MzAtOGJhZS00NDQxLTk1Y2MtMGU0ZWNjMjcyNTNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaW1vbiBIYWxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAzZjkyMGNjLTQxMWYtNDRlZi1hZTY2LTk4YTQ0ZTg4MzI5MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29ybmVsaXVzIEdhbWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDgxM2Q0M2MtYjkzOC00OWRhLWFjZWYtNjViNzNmMjdiMDk5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY3JhdGNoIERlbGV1emVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxM2NmNTUyMS0xNDBmLTRhZDktYTk5OC1hYzhhZjIyYjliYzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJ1dGNoIFd5ZXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTZhZmY3MDktZTg1NS00N2M4LTg4MTgtYjliYTY2ZTkwZmU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNdWxsZW4gUGV0ZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNzM5NzI1Ni1jMjhjLTRjYWQtODVmMi1hMjE3NjhjNjZlNjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvcnkgUm9zc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE5MjQxYWE0LTM4ZTMtNDVlZC05NzUwLTY4ZjQ0MDFmODBlMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXlhbm5hIER1bXBpbmd0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYTkzYTJkMi1iNWI2LTQ3OWItYTU5NS03MDNlNGEyZjM4ODVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlZHJvIERhdmlkc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIwZmQ3MWU3LTRmYTAtNDEzMi05ZjQ3LTA2YTMxNGVkNTM5YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFycyBUYXlsb3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNDNlOWM1Yy01YThhLTRiNDgtOWNlNi1iMTBkZGQ2NzdhZTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklybmVlIEJsdWVza3lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNzIwNTU5ZS05MTczLTQwNDItYWFhMC1kMzg1MmI3MmFiMmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhpcm90byBXaWxjb3hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZTg2ZGUxMS1hMmRkLTRiMjgtYjVmZS1mNGQwYzM4Y2QyMGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppb24gQWxpY2lha2V5ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMDIxODY4NC03ZmExLTQxYTUtYTNiMy01ZDljZDk3ZGQzNmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvcmRhbiBIaWxkZWJlcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNjc4NmY0NC05MDY2LTQwMjgtOThkOS00ZmE4NDQ2NWFiOWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlYXNsZXkgR2xvb21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZDUyYWNlNi1hMGEwLTQ2N2UtODBlMC1hZTg2YjI4OWFkMzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFkZWxpbmUgSGFtbWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDY3MjFhMDctN2NkMi00ODM5LTk4MmUtNzA0NmRmNmU4YjY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGV3IEJyaWdnc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ4OWNjMWNlLTgyZGYtNGZhZC04NjdkLWRlN2Q5ODIyZmVkY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmlnYnkgUGVhY2VsaWx5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGM4NmE1MDAtZDUzOC00YjgzLWIzMjEtZDc2MjUzM2Q3NjYwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGxhbiBLcmFuY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZmZkMmU1MC1iYjViLTQ1ZDAtYjdjNC1lMjRkNDFiMmZmNWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjaG5laWRlciBCZW5kaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MWM1NDczYS03NTQ1LTRhOWEtOTIwZC1kOWI3MThkMGU4ZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphY29iIEhheW5lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU1NzZhMmNiLTNkZWItNGEzNS1hMWVmLTllM2NjMjAzOTU2M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGhpbmVhcyBXb3JtdGhyaWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNThjOWUyOTQtYmQ0OS00NTdjLTg4M2YtZmIzMTYyZmM2NjhlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaWNoaXJvIEd1ZXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjViY2ZiM2ZmLTU3ODYtNGM2Yy05NjRjLTVjMzI1ZmNjNDhkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF1bGEgVHVybmlwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWM2Y2NlNjMtOTliMy00NDFkLTkwZTAtMDY2NGU2ODA1N2E2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFemVraWVsIFRocm9ja21vcnRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYxMWQxOGUwLWI5NzItNGNkZC1hZmMyLTc5M2M1NmJmZTVhOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxzdG9uIENlcnZlemFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2M2RmODcwMS0xODcxLTQ5ODctODdkNy1iNTVkNGYxZGYyZTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1jZG93ZWxsIE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjRjOTJmOGQtNjAyOC00OTViLWI4MWQtMzJjOTc1YWZiMmUxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbmlkIE1hcmxvd1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY4ZGQ5ZDQ3LWI5YTgtNGZkMy1hODljLTVjMTEyZWIxOTgyZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVyaGFtIFNwYWNlbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjkyZDg0MzAtNDJhZC00Yjg4LThiMzYtYTdkMjBkYTliMGE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIaXJvdG8gUG9vbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2Y2MzMjQ2Zi0yZGEyLTRjN2MtYTQ2Zi05YjQ1ZGNiZjM4NGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbW90aGVzIFRod29tcHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcxOGRlYTFhLWQ5YTgtNGMyYi05MzNhLWYwNjY3YjUyNTBlNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFyZ2FyaXRvIE5hdmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MmNhOGVkNS1hOGM3LTQ1NzEtOTc0NS04MGRlNWE0OWIyZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkthaiBTdGF0dGVyIEpyLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc5MzJjN2M3LWJhYmItNDI0NS1iOWY1LWNkYWRiOTdjOTlmYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmFuZHkgQ2FzdGlsbG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YjU1ZDQ4NC02ZWE5LTQ2NzAtODE0NS05ODZjYjllMzI0MTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXZlbnNvbiBIZWF0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2NmODNiZGMtZjk1Zi00OWQzLWI3MTYtMDZmMmNmNjBhNzhkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXR0ZW8gVHJpdW1waGFudFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdlOWE1MTRhLTc4NTAtNGVkMC05M2FiLWYzYTZlMmY0MWMwM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTm9sYW5lc3RvcGhpYSBQYXR0ZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MTdkZWU5OS05Y2NmLTRmNDEtODRlMy1kYzk3NzMyMzdiYzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvbGRlbiBTdGFudG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODI4YzUwODAtNDU0My00YmYyLTlkODQtNDM2ZDU4YzdmZDY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbmlkIFNsdW1wc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg0YTJiNWY2LTQ5NTUtNDAwNy05Mjk5LTNkMzVhZTcxMzVkM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VubmVkeSBMb3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg2NGIzYmU4LWU4MzYtNDI2ZS1hZTU2LTIwMzQ1YjQxZDAzZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR29vZHdpbiBNb3JpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg5ZWM3N2Q4LWMxODYtNDAyNy1iZDQ1LWY0MDdiNDgwMGMyY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFtZXMgTW9yYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhjOGNjNTg0LTE5OWItNGI3Ni1iMmNkLWVhYTlhNzQ5NjVlNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWml3YSBNdWVsbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTBjMmNlYzctMGVkNS00MjZhLTlkZTgtNzU0ZjM0ZDU5YjM5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUb3QgRm94XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTFmNTI5OGUtYTJlYy00ZjU0LWE1NDEtMTgxODcwMmQxYjZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaW50IFNodXBlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTMxMWI3MjctZGU3NC00ZjI1LTkxMmQtZTA4YTc5ZjA2MWIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGZW5yeSBFZ2didXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTdhZjk3YTctMTlkYy00ZDE4LTlmNzItOGJkODlmN2VlYWE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmluaXR5IFNtYWh0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOThkMjMzZGUtOWMzZi00MTAwLWEzNDMtNTI5N2I3ZmRlYjkyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZb3JrIFNpbGsgSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OTY1ZWVkNS0wODZjLTQ5NzctOTQ3MC1mZTQxMGY5MmQzNTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhdGVzIEJlbnRsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YTAzMWI5YS0xNmY4LTQxNjUtYTQ2OC01ZDBlMjhhODExNTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpYW5hIFdoZWVsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZGQ0MGRjNy0wMzNmLTQwMzktOTBjOC0xODQ4NTNmMzA2NGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbW9uIFBlY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZjIxOGVkMS1kNzkzLTQzN2QtYTFiOS03OWY4OGY2OTE1NGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvdHVzIE1hbmdvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTFlZDMzOTYtMTE0YS00MGJjLTlmZjAtNTRkN2UxYWQxNzE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXRlbCBCZXlvbmNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTVmOGNlODMtMDJiMi00OThjLTllNDgtNTMzYTFkODFhZWJmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFdmVsdG9uIE1jQmxhc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhOGE1Y2YzNi1kMWE5LTQ3ZDEtOGQyMi00YTY2NTkzM2E3Y2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbGdhIFdhc2hpbmd0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZjIzMDNiOS05Zjk1LTRkNDMtYjFkNS1kNDVlYmE5MjcwYTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5pdHphbiBIdWJldFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIwODJjYTZlLWViMTEtNGVhYi04ZDZhLTMwZjhiZTUyMmVjNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmljaG9sYXMgTW9yYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI4OGQzMTNmLWU1NDYtNDA3ZS04YmM2LTk0MDQwNDk5ZGFhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT2xpdmVyIExvb2ZhaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI4YWI4NmM2LTkwNTQtNDgzMi05Yjk2LTUwOGRiZDRlYjYyNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXNtZSBSYW1zZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiYmY5NTQzZi1mMTAwLTQ0NWEtYTQ2Ny04MWQ3YWFiMTIyMzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZhcnJlbGwgU2VhZ3VsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkMjRlMThiLTgwMGQtNGYxNS04NzhkLWUzMzRmYjQ4MDNjNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVsZ2EgQnVydG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmUxOGQzNjMtNzUyZC00ZTRhLWIwNmItMWE3ZTQ2NDE0MDBiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY29yZXMgQmFzZXJ1bm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJmMTIyNjYwLWRmNTItNGZjNC05ZTcwLWVlMTg1NDIzZmY5M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2FsdG9uIFNwb3J0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJmNmEyNGQxLTRlODktNDc5MC1hNGJhLWVlYjI4NzBjYmY2ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmF0IE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzAxNzdmNzYtNjdmYy00MzE2LWI2NTAtODk0MTU5ZGVkZTQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXVsYSBNYXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwOWU2NGI2LTgyNDgtNDA3ZS1iM2FmLTE5MzFiODgwZGJlZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVubnkgU3BydWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzFkZGRmYzUtNmFkNi00YjMxLTllNTItOTgyMzZjNTMzODc2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZb3JrIFNpbGsgSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzZhMTkxNTQtNzQzOC00YzRmLWI3ODYtMmRmYWY1OTUxZjBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWx2YWlyZSBSb2FkaG91c2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYmQxOWU2Zi0zZDA4LTQ3MzQtYjIzZi01ODUzMzAwMjg2NjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktuaWdodCBUcml1bXBoYW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDJhMWU3MzQtNjBkOS00OTg5LWI3ZDktNmVhY2RhNzA0ODZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaWFuYSBUYWthaGFzaGlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYjMzYTU0Yy0zOTM0LTQ3OGYtYmFkNC1mYzMxM2FjMjU4MGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlcmNpdmFsIFdoZWVsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZTIxYzk3ZS1mNTc1LTQzYjctOGJlNy1lY2M1ZDhjNGVhZmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBpdGNoaW5nIE1hY2hpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNjlkYjMwZC03NGFjLTQyNjUtOGRhNi00NjdiMGQyNTY5NGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlcnZpbiBHb3JjenljYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVhYWVmNDdlLTgyY2MtNGM5MC1iNzdkLTc1YzNmYjI3OWU4M1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVycmluZyBXaW5maWVsZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVmYWZlNzVlLTJmMDAtNDQxOC05MTRjLTliNjY3NWQzOTI2NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxkb24gQ2FzaG1vbmV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjcwZGQ1N2ItNTVjNC00YTYyLWE1ZWEtN2NjNGJmOWQ4YWMxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaWxsbWFuIEhlbmRlcnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY5OTMwY2IxLTdlZDItNGI5YS1iZjRmLTdlMzVmMjU4NmQ3MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmlubiBKYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZhNWI1NGQyLWI0ODgtNDdjZC1hNTI5LTU5MjgzMWU0ODEzZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2luYSBMYXJzZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NjdjYjQ0NS1jMjg4LTRlNjItYjYwMy0yNzI5MWMxZTQ3NWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlYW51dCBIb2xsb3dheVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEzOTQ3ZmJjLTUwZWMtNDVhNC1iY2E0LTQ5ZmZlYmI3N2RiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hvcmJ5IFNob3J0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTkwYTBmMzEtZDY4Ni00YWM0LWE3ZjMtY2ZjODdiNzJjMTQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOZXJkIFBhY2hlY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0MDVkZmFkZi1kNDM1LTQzMDctODJmNi04ZWJhMjI4N2U4N2FcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpheG9uIEJ1Y2tsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OWY3NDg5MS0yZTI1LTRiNWEtYmQ5OS1jOTViYTNmMzZhYTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hZ29taSBOYXZhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTJjNDM2OGQtNDc4Yi00MmJlLWI2ZDMtZmEyZTliMjMwZjgyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYWR5IE1hdHN1eWFtYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzYTA1MTU3LTYxNzItNDQzMS05NDdiLWEwNTgyMTdiNGFhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3BlYXJzIFRheWxvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU5OTFjY2IzLTdlZWQtNDZkOS05ZDdjLTY5ZGVjOWI1NmQ0YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlyYSBMZW1tYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYzNTYxYzU0LTExYzMtNGIzZC05MTgyLTg1Mzg2NDcxYjJlYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFnb21pIE1jZGFuaWVsIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWJjN2U1ZDQtMzliZS00ZDY0LWEyNDItYWJiMzlhY2E2ZjQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHaWEgSG9sYnJvb2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZjg1ZDczMS04MWVkLTRhMDctOWUwMS1lOTNmMTc4NmEzNjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlZXMgVGFzd2VsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMyODEwZGNhLTgyNWMtNGRiYy04YjY1LTA3MDI3OTRjNDI0ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWR1YXJkbyBXb29kbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGVjZWU3YmUtOTNlNC00ZjA0LWIxMTQtNmIzMzNlMGU2NDA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdXR0b24gRHJlYW15XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTcwMzE0MWMtMjVkOS00NmQwLWI2ODAtMGNmOWNmYmY0Nzc3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW5kb3ZhbCBDcm9zc2luZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI2NDNhNTIwLWFmMzgtNDJlMy04ZjdiLWY2NjBlNTJmYWNjOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRlbGFpZGUgSnVkb2Nob3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNjc1ZmNkZi02MTE3LTQ5YTYtYWMzMi05OWE4OWEzYTg4YWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlZhbGVudGluZSBHYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc2NmRmZDFlLTExYzMtNDJiNi1hMTY3LTliMmQ1NjhiNWRjMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZGllIFR1cm5lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY2NDRkNzY3LWFiMTUtNDUyOC1hNGNlLWFlMWY4YWFkYjY1ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGF1bGEgUmVkZGlja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdkY2E3MTM3LWI4NzItNDZmNS04ZTU5LThjOWM5OTZlOWQyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW1tZXR0IFRhYmJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2E4YzUyZDctNDEyNC00YTY1LWEyMGQtZDUxYWJjYmU2NTQwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGVvZG9yZSBIb2xsb3dheVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUwM2EyMzVmLTlmYTYtNDFiNS04NTE0LTk0NzVjOTQ0MjczZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmVlc2UgQ2xhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MzI2NWVlMy1iYjM1LTQwZDEtYjY5Ni0xZjI0MWE2ZjU5NjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhcmtlciBNZW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODFkN2QwMjItMTlkNi00MjdkLWFhZmMtMDMxZmNiNzliMjllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXR0eSBGb3hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZTRhY2ViZC1lZGI1LTRkMjAtYmY2OS1mMmQ1MTUxMzEyZmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZW9kb3JlIENlcnZhbnRlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI5ZDk3OTkwLWRmMGItNGI4Zi1hYzg1LTYxYzQ0YWIyOWEzZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG9yY2FuIFNtYWh0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGVlYTRhNDgtYzg0Yi00NTM4LTk3ZTctMzMwMzY3MTkzNGQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZWxnYSBNb3Jlbm9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZWYxYmMzNC02NGVlLTRjN2ItOGJlMi04ODMyMmI0MDdhNThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdlcmFsZGluZSBGcm9zdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU0MmFmOTE1LTc5YzUtNDMxYy1hMjcxLWY3MTg1ZTM3YzZhZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT2xpdmVyIE5vdGFyb2JvdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU3YTE5YTIyLWYyY2QtNGU1OS1hYTg0LTE1Y2IwYWYzMGJhM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVmVzc2FsaXVzIFN1bmRhZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE2OTFmMmJhLTliNjktNDFmOC04OTJjLTFhY2Q0MmMzMzZlNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVua2lucyBHb29kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjNlNTEyZGYtYzQxMS00MTAwLTk1NDQtMGNlYWRkZGIyOGNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGYW1vdXMgT3dlbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjOWU0YTQ5ZS1lMzVhLTQwMzQtYTRjNy0yOTM4OTZiNDBjNThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZXhhbmRlciBIb3JuZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ1YzI0Yzk3LWYzZDMtNGIzZC04YzEzLTBkZWJiNjEzNDZjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gWFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkZGI2NDg1LTA1MjctNDUyMy05YmVjLTMyNGE1YjY2YmYzN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVhbnMgTWNCbGFzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU0ZTRjMTdkLTgxMjgtNDcwNC05ZTA0LWYyNDRkNDU3M2M0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2VzbGV5IFBvb2xlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmI5YmVkYjQtOWM4Yi00NTIwLWEwNjItMjNmYmEwZDVmMDVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYWdvbWkgTWNkYW5pZWwgSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGJiMzU2MTUtNjNmMi00NDkyLTgwZWMtYjZiMzIyZGM1NDUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZXh0b24gV2hlZXJlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE5OGZkOWM4LWNiNzUtNDgyZC04NzNlLWU2YjkxZDQyYTQ0NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmVuIEh1bnRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIwZTEzYjU2LTU5OWItNGEyMi1iNzUyLTgwNTllZmZjODFkY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG91IFJvc2VoZWFydFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI2Y2ZjY2YyLTg1MGUtNDNlYi1iMDg1LWZmNzNhZDA3NDliOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVhc2xleSBEYXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYzMzMWM4Ny0xNjM0LTQ2YzQtODdjZS1lNGI5YzU5ZTI5NjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllvc2ggQ2FycGVudGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDRjOTJkOTctYmIzOS00NjlkLWExM2ItZjJkZDlhZTY0NGQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFuY2lzY28gUHJlc3RvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmZjY2ZWFlLTcxMTEtNGUzYi1hOWI4LWE5NTc5MTY1YjBhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVhbnV0aWVsIER1ZmZ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzMzZDgwZjEtMjQ4NS00MGY3LTgyOGItZmQ3Y2Q4MjQzYTAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYWkgU3BsaWZmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTI0ZGU4NmQtMjYwYi00OTViLTgwZTEtNTdhZjU3Njc3MDNjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXRjaHdvcmsgU291dGh3aWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTdmNWE5Y2QtNzJmMC00MTNlLTllNjgtYTZlZTZhNjYzNDg5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLbGluZSBHcmVlbmxlbW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWFjMmU3YzUtNWEzNC00NzM4LTk4ZDgtOWY5MTdiYzZkMTE5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaHJpc3RpYW4gQ29tYnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZjZkMDZkNi1jNjE2LTQ1OTktOTk2Yi1lYzRlZWZjZmY4YjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbHZpYSBXaW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMjhiYjdmNy0yZDhjLTQ3ODEtODgwOC04Mzg0NGRmN2U3MzJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNob3JieSBTb3VsIElJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzMjNmODk3LWNjZjktNDIwMC04ODcwLTI0OWNiZTE5ZjkwNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSHViZXIgRnJ1bXBsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYxY2M0ZDdkLWJlZjAtNDNkZC1iYTBhLTE3Yzc2MjhhYTc3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFnaSBSdWl6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjI0NjgwNTUtZTg4MC00MGJmLThhYzYtYTA3NjNkODQ2ZWIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGF5bmFiZWxsYSBIb2xseXdvb2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMmEyN2E3ZS1iZjA0LTRkMzEtODZmNS0xNmJmYTNhZGRiZTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldpbm5pZSBIZXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjc4NDdkZTItZGY0My00MjM2LThkYmUtYWU0MDNmNWYzYWIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCbG9vZCBIYW1idXJnZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmZWRiY2ViOC1lMmFhLTQ4NjgtYWMzNS03NGNkMDQ0NTg5M2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlVuY2xlIFBsYXNtYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIwYzUyOWIzLTk0N2UtNGE3Ny1iNTZmLTY5ZmUyNWZiMzcxN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU29ja3MgTWF5YmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0Y2E1MjYyNi01OGNkLTQ0OWQtODhiYi1mNmQ2MzE1ODg2NDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlZlbGFzcXVleiBBbHN0b3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjJhZTZhYTktZTM0Ni00ZmFhLWIwN2MtMWY3NjIzNTgwMDE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHZXJ1bmQgUGFudGhlb2NpZGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MzUxMjU3MS0yZWNhLTRiYzQtOGFkOS1hNTMwOGEyMmFlMjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9zY2FyIERvbGxpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgwZTQ3NGEzLTdkMmItNDMxZC04MTkyLTJmMWUyNzE2MjYwN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3VtbWVycyBQcmVzdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGFkYjA4NGItMTlmZS00Mjk1LWJjZDItZjkyYWZkYjYyYmQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb2dhbiBSb2RyaWd1ZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTYxMWI0NS05OGRjLTQ4MTgtOWZmOS1lODgyMzdlYjAwZjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1jS2lubGV5IE90dGVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDRhMTBjMmEtMGMyOC00NjZhLTkyMTMtMzhiYTMzMzliNjVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaWNobW9uZCBIYXJyaXNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZlM2U4YmE1LTY2ODctNDAwZC05ODI4LTJiNzBkNjNlYThiZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGV2aW4gTWVsY29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjc4MTcwZTQtMDY4OC00MzZkLWEwMmQtYzA0NjdmOWFmOGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWJ5IERveWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODYwNWFmNGItYjIzNS00M2Y4LTgxYWEtNjM4MWVjZGRhNzU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNdXNlIFNjYW50cm9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWU4MWUxNzItODAxYS00MjM2LTkyOWEtYjk5MGZjNzE5MGNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdWd1c3QgU2t5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGVmYmM1NDAtYTM2ZC00NjBiLWFmZDgtMDdkYTIzNzVlZTYzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXN0aWxsbyBUdXJuZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYmU2YWMwMi0zYjgzLTRkYTgtYjFlNS1mODkwNTNiYmQ1YzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphbiBDYW5iZXJyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVjNjg4NDVmLTNiMjYtNDEyZi04NDQ2LTRmZWYzNGUwOWM3N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFuZHkgRmFudGFzdGljXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDNiODBhNTctNzdlYS00OTEzLTliZTQtN2E4NWMzNTk0NzQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYWxleGFuZHJleSBXYWx0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNDQ4ZjFmMy1kNzZmLTQ1YzEtYTVjMS01NGYyMjU0NDAwMGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjYXJsZXQgQ2FzdGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzE2YWJlYTctOTg5MC00ZmI4LWFhZWEtODZiMzVlMjRkOWJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZW5uZWR5IFJvZGdlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMTg4ZDY0MS00ZmNjLTRkNWUtODg3ZC01ZjQ1NGI0YzRmZjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpbHZhaXJlIFNlbWlxdWF2ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDk5OGEwOC1kZTE1LTQxODctYjkwMy0yZTA5NmZmYTA4ZTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbm5vbmJhbGwgU3BvcnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzgzYjgyZTgtYjhkMi00Y2I3LTk5ODItOTc1OTMyODNhY2MyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZWx2aW4gRHJ1bXNvbG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkOTc4MzVmZC0yZTkyLTQ2OTgtODkwMC0xZjVhYmVhMGEzYjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpbmcgUm9sYW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTQwMzQxOTItNGRjNi00OTAxLWJiMzAtMDdmZTNjZjc3YjVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYWxkd2luIEJyZWFkd2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDZmZGQxZWQtMTNhMC00ZWIyLWE3ZGQtNGU5NTUxMjM1YTY4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJYYW5kcmEgUGFuY2FrZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNzMyZTYyMy1mZmMyLTQwZjAtODdiYS1mZGNmOTcxMzFmMWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJldHN5IFRyb21ib25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjdjNjhkN2YtNWU0MC00YWZhLThiNmYtOWRmNDdiNzllN2RkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXNpbGlvIE1hc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2FiNGVjMDItMTdkOS00YzRhLWI5NTYtYWExNzBiZjU4YTZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaXBweSBEZVNoaWVsZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZjY5ZThjMi1iMmExLTRlOTgtOTk2YS1jY2YzNWFjODQ0YzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklnbmV1cyBEZWxhY3J1elwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY1MjczNjE1LTIyZDUtNGRmMS05YTczLTcwN2IyM2U4MjhkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnVya2UgR29uemFsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2OTFmOWFiMi05ZGQ0LTQyZTgtYmY5NS05ZmQwMTI1M2M4MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIElWXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGNmNzhiNDktZDBjYS00NzAzLTg4ZTgtNGJjYWQyNmM0NGIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdmlsYSBHdXptYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NGJhYTlhYy1mZjk2LTRmNTYtYTk4Ny0xMDM1OGU5MTdkOTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhYnJpZWwgR3JpZmZpdGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YmU1NjA2MC0zYjAxLTQ3YWEtYTA5MC1kMDcyZWYxMDlmYmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplc1xcdTAwZmFzIEtvY2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZmQxZjM5Mi1kNDkyLTRjNDgtOGQ0Ni0yN2ZiNDI4M2IyZGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkx1Y2FzIFBldHR5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWFlMzg4MTEtMTIyYy00M2RkLWI1OWMtZDBlMjAzMTU0ZGJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW5kaWUgQ2FydmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzNhZTA1NTItNTllOC00NGJmLWJhNjYtNDhhOTZhZmYzNWU2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb250Z29tZXJ5IE11bGxvY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjM2RjN2FhMi1lMjdiLTQ4NTktYmJmMC00N2JhNjZjMDMxODZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW5raWUgSW5jYXJuYXRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMThhZjkzM2EtNGFmYS00Y2JhLWJkYTUtNDUxNjBmM2FmOTliXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGZWxpeCBHYXJiYWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmRhNDlkZTItMzRlNS00OWQwLWI3NTItYWYyYTJlZTA2MWJlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3J5IFR3ZWx2ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlmODU2NzZhLTc0MTEtNDQ0YS04YWUyLWM3ZjhmNzNjMjg1Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFjaGxhbiBTaGVsdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDFhMTk4ZDYtYjA1YS00N2NmLWFiOGUtMzlhNmZhMWVkODMxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMaXF1aWQgRnJpZW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTdiYmZiNjItYTEzOC00MWU4LTg2YWYtYjkxODQzZDE3MDEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU291bCBJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYzYzA3ZWFmLTNkNmMtNGNjMy05ZTU0LWNiZWNjOWMwODI4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FtcG9zIEFyaWFzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMThmNDVhMWItNzZlYi00YjU5LWEyNzUtYzY0Y2Y2MmFmY2UwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaCBXZWVrc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJiMTU3YzVjLTlhNmEtNDVhNi04NThmLWJmNGNmNGNiYzBiZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3J0aXogTG9wZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZWJiNTM2MS0zODk1LTRhNTAtODAxZS1lN2EwZWU2MTc1MGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1Z3VzdG8gUmVkZGlja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZiOGQxMjhmLWVkNTEtNDk2ZC1hOTY1LTY2MTQ0NzZmODI1NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3J2aWxsZSBNYW5jb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg4OWM5ZWY5LWQ1MjEtNDQzNi1iNDFjLTkwMjFiODFiNGRmYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGlhbSBTbmFpbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEzZWEwZTkzLWM5ZjUtNGY4NS04YWNkLWMzYzVjZTg2MDFmYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVydWVsIEtyYW1lclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQwZmZjOWMyLWU2NzctNDIzMC1hNjM5LWIwYWUxMTY1MDUwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2F6IEZpYXNjb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQyZDc2ODE1LWNiZGMtNGM0Yi05YzllLTMyZWJmMjI5N2NjN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGVuemVsIFNjb3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTNjNTE0YWUtZjgxMy00NzBlLTljOTEtZDViYWY1ZmZjZjE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUb3QgQ2xhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMzhmOGM1MC0zMTFmLTQ0ODYtYTczNC1lMWExNzYwNmFmNGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkx1Y2llbiBQYXRjaHdvcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YjNlOGU5Yi02ZGUxLTQ4NDAtODc1MS1iMWZiNDVkYzU2MDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRob21hcyBEcmFjYWVuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE3ZDgxOTZhLWNhNmItNGRhYi1hOWQ3LWMyN2YzZTg2Y2MyMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tbWlzc2lvbmVyIFZhcG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjg4MzI2OWYtMTE3ZS00NWVjLWJiMWUtZmE4ZGJjZjQwZDNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXlkZW4gV3JpZ2h0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDlmMjc4N2EtMzM1Mi00MWE2LTg4MTAtZDgwZTk3YjI1M2I1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDdXJyeSBBbGljaWFrZXllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzMDFlZTgxLTQwNmUtNDNkOS1iMmJiLTU1Y2E2ZTBmNzc2NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFsaWsgRGVzdGlueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFmZmIxMTUzLTkwOWQtNDRjNy05ZGYxLTZlZDNhOWE0NWJiZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9udGdvbWVyeSBCdWxsb2NrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjgxNjJkYTctZWFmYS00ZWIxLThiYzEtNWE2MjVmMDNhZTU3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWdzIEJhbmFuYW5hbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1YTI2ZmM2MS1kNzVkLTRjMDEtOWNlMi0xODgwZmZiNTU1MGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhbmR5IERlbm5pc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdmZWQ3MmRmLTg3ZGUtNDA3ZC04MjUzLTIyOTVhMmI2MGQzYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RvdXQgU2NobWl0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg5MDNhNzRmLWYzMjItNDFkMi1iZDc1LWRiZjc1NjNjNGFiYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhbmNpc2NhIFNhc3F1YXRjaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFkY2JjMjkwLTgxYzUtNGRhOS1iNGRhLTJlNTk0YjA4MDcxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJlZW1pdW0gU2VyYXBoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzIyZTNhZjUtOTAwMS00NjVmLWI0NTAtODY0ZDdkYjJiNGEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb2dhbiBIb3JzZW1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYwNTk0OTMyLThlZjctNGQ3MC05ODk0LWRmNGJlNjQ4NzVkOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRml0emdlcmFsZCBXYW5kZXJsdXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmI1ZjVkZDctZTMxZi00ODI5LWJlYzUtNTQ2NjUyMTAzYmMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEdWRsZXkgTXVlbGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZjMzQ2ZDhiLWQxODYtNDIyOC05YWRiLWFlOTE5ZDcxMzFkZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JlZXIgR3dpZmZpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhlY2VhN2UwLWIxZmItNGI3NC04YzhjLTMyNzFjYjU0ZjY1OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRml0emdlcmFsZCBCbGFja2J1cm5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNmFhOGNlOC0yNTg3LTQ2MjctODNjMS0yYTQ4ZDQ0YWZhZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklua3kgUnV0bGVkZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNmUyZTM4OS1lZDA0LTQ2MjYtYTViYS1mZTM5OGZlODk1NjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbnJ5IE1hcnNoYWxsb3dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjODE3YzZjYy04NTc0LTQ4NTctODNmMS00YTMxMWZhODkyNThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNob3JieSBTb3VsIElWXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2UwZTU3YTctODlmNS00MWVhLTgwZjktNmU2NDlkZDU0MDg5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZb25nIFdyaWdodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmNTc2NGM3LWMzYTAtNGRhZS1hZDE3LWM2Njg5ZjFlOGMyN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJpc2tldCBGcmllbmRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDhlZTI1NmYtZTNkMC00NmNiLThjNzctYjFmODhkOGM5ZGY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb21mb3J0IFNlcHRlbWJlcmlzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRiZjM1MmQyLTZhNTctNDIwYS05ZDQ1LWIyM2IyYjk0NzM3NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUml2ZXJzIFJvc2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZTRkZmExNi1mMWI5LTQwMGYtYjhlZi1hMTYxM2MyYjAyNmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNueWRlciBCcmlnZ3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YjUzY2U4Mi00YjFhLTQ4ZjAtOTk5ZC0xNzc0YjM3MTkyMDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9saXZlciBNdWVsbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzQwZDVmZWYtZDU5Zi00ZGFjLTlhNzUtNzM5ZWMwN2Y5MWNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25uZXIgSGFsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNWI2YjExZC0zOTI0LTQ2MzQtYmQ1MC03NjU1M2YxZjE2MmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9nZGVuIE1lbmRvemFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMjQ1ZjZjNi00NjEzLTQwZjUtYmMzYi04NWFhOWVlM2NmN2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlVzdXJwZXIgVmlvbGV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjRjYTQzN2MtYzMxYy00NTA4LWFmZTctNmRhZTQzMzBkNzE3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmFuIEJlYW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDA5ZDFjOTYtNzYwYi00YTk2LTlhM2MtNDgxMTEyZGRmMzdiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaXEgTnlvbmcnb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQzZDVkYTVmLWM2YTEtNDJmMS1hYjdmLTUwZWE5NTZiNmNkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSnVzdGljZSBTcG9vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxMTY5MjFmLTc2NDItNDQxYS05YTg1LTQwYzkzYTFlNjFiZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9yZGVjYWkgS2luZ2JpcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNjI5Y2I3YS00MTRiLTQ2OTUtYTExNS03NTI4YWI3MDAzNDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNoaXJhaSBNY0Vscm95XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTExMWE0NmQtNWFkYS00MzExLWFjNGYtMTc1Y2NhMzM1N2RhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGV4YW5kcmlhIFJvc2FsZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlYTQ0YmQzNi02NWI0LTRmM2ItYWM3MS03OGQ4N2E1NDBiNDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IFBvdGhvc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI3ODM5NzU0LWMzNTEtNDNlYy05YmZmLWNhNjYyYTIzODViOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG91YmVydCBKaS1FdW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NmFkYWM2Zi1jNjk0LTQ0YWMtOTU2MC03NThkZTdlYWM5MzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlF1YWNrIEVuam95YWJsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg4OGZjZTdhLTBkMjEtNDc4YS05YjQ1LTQ2NjIxOTNmZTlhYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9sZW5lIFdpbGxvd3RyZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMGMyMDkxNi03MDk3LTQ3ZTYtODIyNi1jYmY2N2RhMTc2ZTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbHZpbiBBbmRhbnRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDg5YWY1MTgtZTI3Yy00MjU2LWFkYzgtNjJlM2Y0YjMwZjQzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaWx2aWEgUnVncmF0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjg1OTE2NmQtNmFlZC00MjYyLWIwNWItZGI4NWM0OWIzMzkxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb25uYSBNaWxpY2ljXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDU0MmYwYjAtMzQwOS00YTRhLWE5ZTEtZThlOGU1ZDczZmNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcm9jayBXYXRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MmQxYjdiNC1jZTAwLTQ1MzYtODYzMS1hMDI1ZjA1MTUwY2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbSBTY2FuZGFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmZmYmFlYzgtYTY0Ni00NDM1LWExN2EtM2EwYTJiNWYzZTE2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb25rIEpva2VzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTFkYWI4NjgtODIwYi00OTY5LThiYmEtYmRlMGJlODA5MGQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDcmF2ZWwgR2VzdW5kaGVpdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgxNGJhZTYxLTA3MWEtNDQ5Yi05ODFlLWU3YWZjODM5ZDZkNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVzbGFuIEdyZWF0bmVzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlN2QzM2I3LTFiYmEtNDhkNi1hMWQxLWNkMGUyOTIzMWJlOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFjb2J5IFBvZGNhc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMzVjY2VlMS05NTU5LTQ5YTEtYWFhNC03ODA5ZjdiNWM0NmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZvcnJlc3QgQmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ5NWE2YmRjLTE3NGQtNGFkNi04ZDUxLTllZTg4YjFjMmU0YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2hhcXVpbGxlIFRvcnJlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRiNmYwYTRlLWRlMTgtNDRhZC1iNDk3LTAzYjFmNDcwYzQzY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9kcmlndWV6IEludGVybmV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTE5OWE2ODEtZGVjZi00NDMzLWI2YWItNTQ1NDQ1MGJiZTVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZWFjaCBJbmdyYW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMTgyZjMzYy1hZWE1LTQ4YTItOTdlZC1kYzc0ZmEyOWIzYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN3YW11ZWwgTW9yYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYyYzQ3N2ZiLTI4ZWEtNGZjYi05NDNhLTlmYWIyMmRmM2RhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FuZGZvcmQgR2FybmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmNiZTFkMTQtMDRjNC00MzMxLTk3YWQtNDZlMTcwNjEwNjMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb2RlIFByZXN0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNDI5NjJjOC00ZDhiLTQ0YTYtYjg1NC02Y2NlZjNkODI3MTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvbmFuIEpheWxlZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzOWI1YWFlLTg1NzEtNGM5MC04ODdhLTZhMDBmMmEyZjZmZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGlja2Vyc29uIE1vcnNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmQwN2NjZDAtY2FjNy00Y2NkLWJhYjYtYTA3OGJiOTgzMTc0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbmdpbmUgRWJlcmhhcmR0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWQ2ZjNkMjMtYmMyNi00MGU2LTkzYWEtMGIxYzY5M2UwYmE4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaWxleSBGaXJld2FsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFkOGQxNWY0LWUwNDEtNGExMi1hMTBlLTkwMWU2Mjg1ZmRjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFieSBUcml1bXBoYW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2ZiNDIzMjUtNTkyYS00MTE5LTliNDAtNGNkYzE5OTU5YjA5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYW5keSBTbHVtcHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YWViOGUwYi1mNmZiLTRhOWUtYmJhMi0zMzVkYWRhNWYwYTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkR1bmxhcCBGaWd1ZXJvYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg4Y2Q2ZWZhLWRiZjItNDMwOS1hYWJlLWVjMWQ2ZjIxZjk4YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGV3aXR0IEJlc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMDZlMWQzMi05NzQyLTQ4ZWYtYTZiYS0zNjU0NWU5M2I5ZTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvbWd5IFJvbHNlbnRoYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMGJlMWMzNC0wNzFkLTQwYzYtODgyNC1kZGUyYWYxODRiNGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlFhaXMgRG9nd2Fsa2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjI2OGY0NTItMDFiOS00ZTE2LTk4YmItYzA3ZTNjZTc2N2UzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYW5kYSBTY2hlbm5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2OGY5OGEwNC0yMDRmLTQ2NzUtOTJhNy04ODIzZjIyNzcwNzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklzYWFjIEpvaG5zb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZDFlNjcwYS1mMzQ2LTRiZjctYTAyZi1hOTE2NDljNDFjY2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXBoYW5pZSBXaW50ZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTY1MDJiYzctNWI3Ni00OTM5LTlmYjgtMTMyMDU3MzkwYjMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcmVlciBMb3R0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjc0MWRjMDEtMmJhZS00NDU5LWJmYzAtZjk3NTM2MTkzZWVhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGVqYW5kcm8gTGVhZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjExZGU0ZGEzLTgyMDgtNDNmZi1hMWZmLTBiMzQ4MGEwZmJmMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9uIE1pdGNoZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmM0YjJhNmQtOTk2MS00ZTQwLTg4MmMtYTMzOGY0ZTcyMTE3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFdmVsdG9uIE1jQmxhc2UgSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZmMzNjg5Zi1iYjdkLTQzODItOThhMi1jZjZkZGM3NjkwOWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNlZHJpYyBHb256YWxlelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMxODk2MWU5LWVmM2YtNDk1NC1iZDZiLTlmZTAxYzYxNTE4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FybWVsbyBQbHVtc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQxYmRiNTI3LTFmYjItNDg3ZC04MjM3LTA5Mzk1OGU3MzdlNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmVwaHlyIE1jQ2xvdWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZTk0ZmEwZC00NTNmLTQ5MjUtOGVhMC1jMGE1M2UzODEwOGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1cm9yYSBCbG9ydGxlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQxYWQ4MDYwLTJiYmUtNDg3Mi1hODc5LTIyY2IxMDJiYjY0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWXJqXFx1MDBmNiBLZXJmdWZmbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYjM2Yzc3Ni1iNTIwLTQyOWItYTg1Zi1iZjYzM2Q3YjA4MWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdvb2JpZSBCYWxsc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDRlMTRkN2ItNTAyMS00MjUwLWEzY2QtOTMyYmE4ZTBhODg5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXlsZW4gSG90ZG9nZmluZ2Vyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJjYTM4ODA5LTgxZGUtNDJmZi05NGUzLTFjMGViZmIxZTc5N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmFtb3VzIE9jb25ub3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYTBiYmJlNi1kMTNjLTQwY2MtOTU5NC04YzQ3Njk3NWQ5M2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhbmcgUmljaGFyZHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRhNjdjMTk2LTRjYWMtNDI4Yi04YzE4LTJhNDExMDU1ZWEzNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWXVzZWYgRmVuZXN0cmF0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU2NzlkNWRlLWY0MTctNDVkYi1hYjhkLTQ5YjkyZTc0NDQ4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJpbml0eSBSb2NoZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYzZGRmZDg3LTczYTItNDY4MS05NmZlLTgyOTQ3NmM5Nzg4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlb2RvcmUgRHVlbmRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzY2M2MzY2EtNDBhMS00ZjEzLWE0MzAtMTQ2MzdkY2U3OTdhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb2xrYURvdCBaYXZhbGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMjM2YmQ1Yi00ZmYxLTQxNTQtYTNjZC03Y2IzYzBkZGFhNWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRhaSBCZWFuYmFnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWY5ZjhiOTUtOWU3My00OWNkLWJlNTQtNjBmODQ4NThhMjg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb2xsaW5zIE1lbG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDQ5MzE1NDYtMWI0YS00NjlmLWIzOTEtN2VkNjdhZmU4MjRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHbGFiZSBNb29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTY3NzUxZDUtMjEwYy00YTZlLTk1NjgtZTkyZDYxYmFiMTg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYWNvYiBXaW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNWVmM2NmYS1iOWE2LTRlMTYtYTNkZi02YzIzNmU4YmRiM2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ5bGFuIE8nTGFudGVyblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE1YWU2NGNkLWY2OTgtNGIwMC05ZDYxLWM5ZmZmZDAzN2FlMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlja2V5IFdvb2RzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWMzMjczYTAtMjcxMS00OTU4LWI3MTYtYmZjZjYwODU3MDEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLYXRoeSBNYXRoZXdzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTM5N2VkOTEtNjA4ZS00YjEzLTk4ZWEtZTk0Yzc5NWY2NTFlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZZW9uZy1IbyBHYXJjaWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNDdkZDA4ZS04MzNjLTQzMDItYTk2NS1hMzkxZDM0NTQ1NWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0dSBUcm9sb2xvbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBlZGRkMDU2LTlkNzItNDgwNC1iZDYwLTUzMTQ0Yjc4NWQ1Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FsZWIgTm92YWtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZGJmMTFjMC05OTRhLTQ0ODItYmQxZS05OTM3OTE0OGVlNDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbnJhZCBWYXVnaGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWMyMzcwMmItZjBjMi00NjY4LThiY2MtNjFiYmRiYmZkOTNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHcm9sbGlzIFplcGh5clwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE2ZWM4ZDAwLWE3OGYtNGY2Yi1iNTFhLWRiOWY1NTA3Y2YwYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRm94eSBQZWJibGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMWIxNDFmYy1lODY3LTQwZDEtODQyYS1jZWEzMGE5N2NhNGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJpY2hhcmRzb24gR2FtZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZjhlMTUyZS0yZDI3LTRkY2MtYmEyYi02ODEyN2RlNGU2YTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbmRyaWNrcyBSaWNoYXJkc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDgzZDA5ZDQtN2VkMy00MTAwLWIwMjEtOGZiZTMwZGQ0M2U4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZXNzaWNhIFRlbGVwaG9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVlNTUyNDhiLTMxOGEtNGJmYi04ODk0LTFjYzcwZTRlMDcyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlbyBLaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDMwNGJjZjktMjM5YS00YWEyLWE0MTAtNTZhNDg3MjE3YTJhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYW5jZWxvdCBLYW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODFhMDg4OWEtNDYwNi00ZjQ5LWI0MTktODY2YjU3MzMxMzgzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdW1tZXJzIFBvbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4N2U2YWU0Yi02N2RlLTQ5NzMtYWE1Ni0wZmM5ODM1YTFlMWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcmNvIFN0aW5rXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjkyOTNiZWItZDE5OS00YjQ2LWFkZDktYzAyZjkzNjJkODAyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXVlciBaaW1tZXJtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlOWE0NmUwYy0wNDM3LTQ0M2EtYmU4MS05NTY2NjVlYzU4OGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhpZXJvcGhhbnRpYyBGb2libGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNTEzYWFiNi0xNDJjLTQ4YzYtYjQzZS1mYmRhNjVmZDY0ZThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbGViIEFsdmFyYWRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzMxZDg3NGMtMWI0ZC00MGYyLWExYjMtNDI1NDJlOTM0MDQ3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDZWRyaWMgU3BsaWZmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzZjNDg1M2ItN2ZiYy00Njg4LThjZGEtYzViOGRlMTcyNGU0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMYXJzIE1lbmRvemFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MGRmZjU5MS0yMzkzLTQ0OGEtOGQ4OC0xMjJiZDQyNGZhNGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsdmlzIEZpZ3Vlcm9hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWU3MjRkOWEtOTJhMC00MzZlLWJkZTEtZGEwYjJhZjg1ZDhmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIYXRmaWVsZCBTdXp1a2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNzNkNTlkZC0zMmEwLTQ5Y2UtOGFiNC1iMmRiYjdkYzk0ZWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVkdWFyZG8gSW5ncmFtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjhjMjA2OTMtZjQzOS00YTI5LWE0MjEtMDVlZDkyNzQ5ZjEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb21icyBEdWVuZGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYzY5ZGJhMy02MjI1LTRhZmQtYWI0Yi0yM2ZjNzhmNzMwZmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJldmFuIFdpc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YTZmYzY3ZC1hN2ZlLTQ0M2ItYTA4NC03NDQyOTRjZWM2NDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRlcnJlbGwgQnJhZGxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI2MWIyODcxLTcyNTQtNDliMy1iMDA5LTE3NGEyM2FjYWExYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9uIEhhbGlmYXhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMzc2YTkwYi03ZmZlLTQ3YTItYTkzNC1mMzZkNjgwNmYxN2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvd2VsbCBSb2NoYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM3NTVlZmNlLWQwNGQtNGUwMC1iNWMxLWQ4MDEwNzBkMzgwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFzaWxpbyBGaWdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMzhjNWQ4MC0wOTNmLTQ2ZWItOTlkNi05NDJhYTQ1Y2Q5MjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFuZHJldyBTb2xpc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzNDhjMDM3LWVlZmMtNGI4MS04ZWRkLWRmYTk2MTg4YTk3ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG93ZSBGb3JiZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNmEyNzdjMy1kMmI1LTQzNjMtODM5Yi05NTA4OTZhNWVjNWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pa2UgVG93bnNlbmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNjA2MDVlNi1mZjQxLTQzODgtYTYxYS1mYWZkMjE3NWY3YWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsd2luIE1jR2hlZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI4OTY0NDk3LTBlZmUtNDIwYy05YzFkLTg1NzRmMjI0YTRlOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSW5leiBPd2Vuc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhkMzM3YjQ3LTJhN2QtNDE4ZC1hNDRlLWVmODFlNDAxYzJlZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FzZSBTcG9ydHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyODVjZTc3ZC1lNWNkLTRkYWEtOTc4NC04MDEzNDcxNDBkNDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvbiBTY290Y2hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYzczZjkxZS0wNTYyLTQ4MGQtOTU0My0yYWFiMWQ1ZTVhY2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwYXJrcyBCZWFuc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdiMGY5MWFhLTRkNjYtNDM2Mi05OTNkLTZmZjYwZjdjZTBlZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmxhbmtlbnNoaXAgRmlzY2hlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4MWNlNjYyLTA3YjYtNGE3My1iYWE0LWFjYmJiNDFmOWRjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWXVtbXkgRWxsaW90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA1YmQwOGQ1LTdkOWYtNDUwYi1hYmZhLTE3ODhiOGVlOGI5MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RldmVuc29uIE1vbnN0ZXJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTFmYmE1NTUtYTQ4Yy00NGYzLWFmYjYtNTIyZWEyNTY5NDdjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaW5keSBLdWdlbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEzOGFkYTBhLWFlYWMtNGEzZC1iOWE1LTk2ODY4N2NjZDJmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2l4cGFjayBTYW50aWFnb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU3NDQ4YjYyLWY5NTItNDBlMi04MjBjLTQ4ZDhhZmUwZjY0ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVzc2kgV2lzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQyNWYzZjg0LWJhYjAtNGNmMi05MWMxLTk2ZTc4Y2Y1Y2QwMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTHVpcyBBY2V2ZWRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGY0ZGE4MWEtOTE3Yi00MzRmLWIzMDktZjAwNDIzZWU0OTY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFdWdlbmlhIEJpY2tsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZhNDc3YzkyLTM5YjYtNGE1Mi1iMDY1LTQwYWYyZjI5ODQwYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG93ZWxsIEZyYW5rbGluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzA3YWI1YTgtZWNlMy00YzRkLWIyZDItOThlM2E3Y2Y4NjRmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaWNoaXRhIFRvYXN0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZDNiZTdiOC0xY2JmLTQ1MGQtODUwMy1mY2UwZGFmNDZjYmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlphY2sgU2FuZGVyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAyOTVjNmMyLWIzM2MtNDdkZC1hZmZhLTM0OWRhN2ZhMTc2MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29tYnMgRXN0ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYjllYjIxMy0wOTE3LTQzNzQtYTI1OS00NTgyOTUwNDUwMjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdGhlbyBDYXJwZW50ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMGM4NWJlNC1mZjI2LTQ3MGYtODEzNS1hZjc3MWZkMjFlNTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFuYXRoZW1hIEVsZW1lZmF5b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjExNDEwMGE0LTFiZjctNDQzMy1iMzA0LTZhYWQ3NTkwNDA1NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS3VydCBDcnVlbGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRlZDYxYjE4LWMxZjYtNGQ3MS1hZWEzLWNhYWMwMTQ3MGI1Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVubnkgTWFyaWp1YW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzE3YTQzOTctNGRjYy00NDBlLThjNTMtZDg5N2U5NzFjYWU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdWd1c3QgTWluYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY5YzBkM2NiLWQ4YmUtNGY1My05NGM5LWZjNTNiY2JjZTUyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF0dGVvIFByZXN0aWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTA2OGY0NGItMzRhMC00MmQ4LWE5MmUtMmJlNzQ4NjgxYTZmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGxpc29uIEFiYm90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjBjYjQ0MDI2LWViZjAtNDg3MC1iOThlLWU2MjBiMDgxNDgwOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWljaGVsbGUgU3BvcnRzbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGY2MWQ5NDgtNGYwYy00NTUwLTg0MTAtYWUxYzdmOWY1NjEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUYW1hcmEgQ3JhbmtpdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4OWRhMmQyLTY3NGMtNGI4NS04OTU5LWE0YmQ0MDZmNzYwYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmlzaCBTdW1tZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmY2IwOGU0Zi1kZjNhLTQ0NmMtYWI1MC01OGE0OTZhYzVmM2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlbm5ldHQgQmx1ZXNreVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJjMjlhZmMxLWM5NTQtNGRlZi05NzhiLWE1OWFlNWRlZjNjM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmlnYnkgRnJpZWRyaWNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDcwNzU4YTAtMDkyYS00YTJjLThhMTYtMjUzYzgzNTg4N2NiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbHggS2VtaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTA3NjgzNTQtOTU3ZS00YjRjLWJiNmQtZWFiNmJiZGEwYmEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFdWdlbmlhIEdhcmJhZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwMTljZTExNy0yMzk5LTQzODItODAzNi04YzE0ZGI3ZTFkMzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxvcmkgQm9zdG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTI1NzcyNTYtYmM0ZS00OTU1LTgxZDYtYjQyMmQ4OTVmYjEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXNtaW5lIFdhc2hpbmd0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZGFkZWUxMS1hMTFmLTQ0MmEtOWJlMy1jYjBiMTBiODY3MTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlZWthYm9vIE5hbWVwZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZGVkMDM4NC1kMjkwLTRlYTEtYTcyYi00ZjlkMjIwY2JlMzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1YW4gTXVycGh5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWUyMjlmZTUtYTE5MS00OGVmLWE3ZGQtNmY2ZTEzZDZkNzNmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFcmlja3NvbiBGaXNjaGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWYxNDU0MzYtYjI1ZC00OWI5LWExZTMtMmQzYzkxNjI2MjExXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb2UgVm9vcmhlZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMTU1NWJmYi02YWVkLTQ1MTAtODYzYS04MDFiZTNiNmQ5OTdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFuYXN0YXNpYSBJc2Fyb2JvdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIxY2JiZmFhLTEwMGUtNDhjNS05Y2VhLTcxMThiMGQwOGEzNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSnVpY2UgQ29sbGluc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0Y2E5NzZmLWRkZjItNDk2Ni1iYTE0LTRmZDJiOWIyMDM0MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWx3aW4gQmxhc2tldHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNjZhYmNjMC04YWJjLTQ1NzAtYjMyZS1lNTY2OGU1ZDM4ZjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlpvZXkgS2lyY2huZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZTEzMjQ5ZS0zOGZmLTQ2YTItYTU1ZS1kMTVmYTY5MjQ2OGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlZpdG8gS3Jhdml0elwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJmM2Q3YmM3LTZmZmItNDBjMy1hOTRmLTVlNjI2YmU0MTNjOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWxpamFoIFZhbGVuenVlbGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMjA1ZjRmZi03MDUwLTQ3MGItODk3MC04ZDdlYTU2NTY0YmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdpYSBXdXBwb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM1YWNiNmVhLTlhN2MtNDliNi04MDljLTU5NDA5ZjU1NzY1MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS3VydCBVbHRyYWJhc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNmE5ODYzYy1iZjY5LTRkZGQtYmJlMC02ZDY0YjBkMDBlOGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIllhc3NseW4gU3RhdHRlciBKci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNzhjMDdiMC01NjQ1LTQ0YjUtODY5Zi00OTdkMTQ0YzdiMzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZ5bm4gRG95bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYzA1MWI5Mi00YTg2LTQxNTctOTg4YS1lMzM0YmY2ZGM2OTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR5bGVyIExlYXRoZXJtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYzE5YWE5My0zZjlkLTRiZTAtYWU1YS04YWRlMTAwYTk2NjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvbiBUdW1ibGVob21lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDU2MmFjMWYtMDI2Yy00NzJjLWI0ZTktZWU2ZmY4MDBkNzAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaHJpcyBLb2NoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGVjNjk1MWYtNjgyMi00ODYxLWJjMjUtNzk4MjZkZDhjNTU0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaGVldiBTaHJpZmZsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUyMGU2MDY2LWIxNGItNDVjZi05ODVjLTBhNmVlMmRjM2Y3YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWmkgU2xpZGVyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUyY2ZlYmZiLTgwMDgtNGI5Zi1hNTY2LTcyYTMwZTBiNjRiZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3BlYXJzIFJvZ2Vyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUzZTcwMWM3LWUzYzgtNGUxOC1iYTA1LTliNDFiNGI2NGNkYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFycXVleiBDbGFya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU0ZTVmMjIyLWZiMTYtNDdlMC1hZGY5LTIxODEzMjE4ZGFmYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JpdCBXYXRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ODMxYTIzOC04ZWZlLTRkNTMtYTQ4My0xYWQ2ODFlNTBhYzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdpdGEgU3BhcnJvd1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVhNmIwYzZkLTFjYzgtNGFjYi05OTFjLTBmZmU2MmYzZDk5MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTG90dXMgQ2x1dGNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWM2MGY4MzQtYTEzMy00ZGM2LTljMDctMzkyZmIzN2IzZTZhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYW1pcmV6IFdpbnRlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZGRlZTQ5ZC03OWYyLTRlYmEtYTNjOS0xNzQ3ODQzMjIwNTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJvYmJpbiBJbm5pbmdzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZjNiNWRjMi0zNTFhLTRkZWUtYTlkNi1mYTVmNDRmMmEzNjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsc3RvbiBFbmdsYW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWY1YjNiMTgtZWJjNS00NjExLWI4YmYtNjFiOGM2YTNiYTEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOdWNsZXVzIENyZXN0aGlsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVmYmYwNGJiLWY1ZWMtNDU4OS1hYjE5LTFkODljZGEwNTZiZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9uaWEgRG9sbGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjMwNWUyZGQtMmQ1ZC00OWVkLWFiNDctYjFiNTZmMGU3ZTg1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYW5kYSBGaWFzY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NGFhYTNjYi03ZGFmLTQ3ZTMtODlhOC1lNTY1YTM3MTViNWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyYXZpcyBOYWthbXVyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZhNTY3ZGE2LTdjOTYtNDRkMy04NWRlLWU1YTA4YTkxOTI1MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ3VkaSBEaSBCYXR0ZXJpbm9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YmFjNjJhZC03MTE3LTRlNDEtODBmOS01YTE1NWE0MzQ4NTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyaXQgRnJlZW1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZmOWRlNzc3LWU4MTItNGM4NC05MTVjLWVmMjgzYzlmMGNkZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXJ0dXJvIEh1ZXJ0YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZmOWY1MGU2LTgxYmYtNDM3MS05YTI3LWRlM2M4NWJkNWE4MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFudSBDYW5kbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZmEwOGUwOC02YTk1LTRmYmMtOWQwMC01YzM5YzUzMDJiNjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhcnJ5IEJ1cmtoYXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzE1OGQxNTgtZTdiZi00ZTliLTkyNTktNjJlNWIyNWUzZGU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLYXJhdG8gQmVhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjczYTkzNGRlLTNkYjEtNDU1My05N2YyLTllN2I1Nzc0NGIzNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2FsaWggVWx0cmFiYXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2E3NWQ2MjYtZDRmZC00NzRmLWE4NjItNDczMTM4ZDhjMzc2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWNrIFdoaXRuZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3YzVhZTM1Ny1lMDc5LTQ0MjctYTkwZi05N2QxNjRjNzI2MmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pbG8gQnJvd25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZTRmMDEyZS04MjhjLTQzYmItOGI4YS02YzMzYmRmZDdlM2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdGVsIE9saXZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODI3MzNlYjQtMTAzZC00YmUxLTg0M2UtNmViNmRmMzVlY2Q3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGtpbnMgVG9zc2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODZkNGUyMmItZjEwNy00YmNmLTk2MjUtMzJkMzg3ZmNiNTIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZb3JrIFNpbGtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4OGNhNjAzZS1iMmU1LTQ5MTYtYmVmNS1kNmJiYTAzMjM1ZjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNsYXJlIE1jY2FsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhiMGQ3MTdmLWFlNDItNDQ5Mi1iMmVkLTEwNjkxMmUyYjUzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXZpbGEgQmFrZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YjVkZGQzZC1jY2E2LTRlMDEtYWM3Zi02NWRjNTY4MzE5MzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJlZXMgR29yY3p5Y2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZDgxYjE5MC1kM2I4LTRjZDktYmNlYy0wZTU5ZmRkN2YyYmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsYmVydCBTdGlua1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhmMTFhZDU4LWUwYjktNDY1Yy05NDQyLWY0Njk5MTI3NDU1N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW1vcyBNZWxvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0ZDc3MmM3LTAyNTQtNGYwOC04MTRjLWY2ZmM1OGZjZmI5YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmxldGNoZXIgUGVja1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0ZjMwZjIxLWY4ODktNGEyZS05Yjk0LTgxODQ3NWJiMWNhMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2lya2xhbmQgU29icmVtZXNhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTczMzM0YWEtNDZkOC00NDE1LTkxMmItYTVlMjY3Zjc1MjliXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGZW5yeSBNYXJsb3dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NzM4NzU4MC0xZjdjLTQ5ZWEtYTllNy00NGJlODkzMjkxMzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklybmVlIEZpZXN0YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3ZGZjMWY2LWFjOTQtNGNkYy1iMGQ1LTFjYjlmODk4NGFhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQnJvY2sgRm9yYmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTk3NjZjMWItYzU5MC00MjYxLWIxYjctM2U5YzdmYzM1NjA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXNwZXIgQmxhdGhlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjllNzVmZjdjLWZlOWItNDI4Yi1hMWI2LWY5ZTZhMTc0OGM4NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS29maSBHaWxkZWhhdXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMTYyOGQ5Ny0xNmNhLTRhNzUtYjhkZi01NjliYWUwMmJlZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNob3JieSBTb3VsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTY4ZTgyYWMtNzM3NS00MTc2LWI3NTQtNjE3NWVhNDdkY2I0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHdWFkYWx1cGUgSW5jYXJuYXRlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTdlZGJmMTktY2FmNi00NWRkLTgzZDUtNDY0OTZjOTlhYTg4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdXNoIFZhbGVuenVlbGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhY2E5MDYyNS01YmRlLTQ0ODktYmM5Zi1hNzk5NmE3YjlhMzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vcXVpcnluIFJhdG9vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFkNTZmNzQ5LWVlNDgtNGE4NS05ODI3LTg0NTVhZWFmZTI3NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXJpbiBKZXNhdWxlbmtvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWY2YjNlZGMtZWQ1Mi00ZWRjLWIwYzktMTRlMGE1YWUwZWUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaXZlcnMgQ2xlbWJvbnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNWM5NWRiYS0yNjI0LTQxYjAtYWFjZC1hYzNlMWUxZmU4MjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvdGUgUm9kZ2Vyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3MjY3YWJhLTYxMTQtNGQ1My1hNTE5LWJmNmM5OWY0ZTNhOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU29zYSBIYXllc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI3N2RmZmFhLWUwZjUtNDA4Zi1iOWYyLTE4OTRlZDI2ZTc0NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHVja2VyIExlbm55XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdjZGI5M2ItNmY5ZC00NjhhLWFlMDAtNTRjYmMzMjRlZTg0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSdXNsYW4gRHVyYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZDg3NzhlNS0wMmU4LTRkMWYtOWMzMS03YjYzOTQyY2M1NzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNlbGwgQmFyYWphc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJmZDlmZjUyLTliZjYtNGFhZi1hODU5LWQzMDhkOGYyOTYxNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGVjbGFuIFN1emFubmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjMDczMmUzNi0zNzMxLTRmMWEtYWJkYy1kYWE5NTYzYjY1MDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hZ29taSBNY2RhbmllbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM0OTUxY2FlLTBiNDctNDY4Yi1hM2FjLTM5MGNjOGU5ZmQwNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGltbXkgVmluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM0ZGVjOTVlLTc4YTEtNDg0MC1iMjA5LWIzYjU5NzE4MTUzNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hhcmxhdGFuIFNlYWJyaWdodFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM4ZGU1M2E0LWQ5MGYtNDE5Mi05NTViLWNlYzE3MzJkOTIwZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHlyZWVrIENhaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjOTMzOWY1ZS0xMDQwLTQ2NDItYTRhNy0wN2NkMzZkMjgxZjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlF1YW50dW0gRmxhaHdhaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM5YTIyZmE0LTE3MjEtNGVlZi1hMWE2LTYyMGNkZjdkMzc3ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9zY29lIFN1bmRhZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNjMTEzNDMyLTVmOWItNDZmOC05NzQ1LTA5Zjk5OWQ1MTgwMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmVnZ2llIENhbmJlcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2M5MzNiNzktOTIxOC00NjkzLTgxNzItZjIzZDRlYWNjZGY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaGV0IFRha2FoYXNoaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlMGExNTZiLWJhN2ItNDMxMy04ZmVhLTc1ODA3YjRiYzc3ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29ucmFkIFR3ZWx2ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlNTg0MTVmLTRlNjItNDdlMi1hMmM5LTRkNmE4NTk2MWUxZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NobmVpZGVyIEJsYW5jb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQwZGFmZDRlLWZjYTItNGQ5Yy1hY2NjLWQ2NTY3OGU3NTg5ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlsbmVyIFJvbHNlbnRoYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODZmODM2ZS00ZWRmLTRkYmQtOTc0My0xNGYzMDQ2MWVlMTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhbmNlIFNlcm90b25pblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4NzQyZDY4LThmY2UtNGQ1Mi05YTQ5LWY0ZTMzYmQyYTZmY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3J0aXogTW9yc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYWMyZmQ1NS01Njg2LTQ2NWYtYTFiNi02ZmJlZDBiNDE3YzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1c3NvIFNsdWdnZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkYjUzMjExYy1mODQxLTRmMzMtYWNjZi0wYzNlMTY3ODg5YTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRyYXZpcyBCZW5kaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZDBiNDhmZS0yZDQ5LTQzNDQtODNlZC05ZjA3NzBiMzcwYThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRpbGxtYW4gV2FuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGQ2MDQ0ZWYtYzYzNS00YWVkLTk3YmQtZDE4MDY4NDMyYjhmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZdXNlZiBQdWRkbGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTA4MzliNmMtNzBmZC00MjI4LWFlM2EtNjBjNzEzZDAwZDA5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUdWNrZXIgVGhhbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMTZjM2YyOC1lZWNkLTQ1NzEtYmUxYS02MDZiYmFjMzZiMmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IEdsb3ZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUzYzA2NDA1LTA1NjQtNDdjZS1iYmJkLTU1MmJlZTRkZDY2ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NyYXAgV2Vla3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNGYxZjM1OC1lZTFmLTQ0NjYtODYzZS1mMzI5NzY2Mjc5ZDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvbmFuIENvbWJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTk3ZTliNzQtODAxMS00NDE1LWIyMmMtODI4MmYyMjI4NjgzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWthbiBIYW1tZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlY2YxOTkyNS1kYzU3LTRiODktYjExNC05MjNkNWE3MTRkYmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hcmdhcml0byBCaXNob3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlY2ZmYTlhYS00NWE2LTQ5OTctYTBhMS04OTkyNWQ4OWYzYjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkplYmVkaWFoIEtyYW5jaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVlMjkwMjBmLTE5NjQtNGZjZS04MGY0LTM1YTVlN2VkZmI5NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3JwaGV1cyBZYXJkc3RpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZmE3M2RlNC1hZjE3LTRmODgtOTlkNi1kMGQ2OWVkMWQyMDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFudG9uaW8gTWNjYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjA3MTg4OWMtZjEwZi00ZDJmLWExZGQtYzVkZGEzNGIzZTJiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaaW9uIEZhY2VwdW5jaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYwYmNmNGJiLTc0YjMtNDEyZS1hNTRjLTA0YzEyYWQyOGVjYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGFobiBGb3hcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNGE1ZDczNC0wYWRlLTQ0MTAtYWJiNi1jMGNkNWE3YTFjMjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFnYW4gSGFycmlzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmNjE3YzFlZi1kNjc2LTQxMTktODM1OS1hNWMzYWMzYmVmNTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJ1Y2sgTGF0ZW5pZ2h0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjZiMzhlNTYtMGQ5OC00ZTAwLWE5NmUtMzQ1YWFhYzFlNjUzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZXRpY2lhIFNueWRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3ZGUwMjI3LTY3MzktNDhlMi1iYmQ2LTlkYzdiMjQ3YWI5YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3BpZmYgUGlhenphXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjk2ODUzMmEtYmYwNi00NzhlLTg5ZTAtMzg1NmI3ZjRiMTI0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYW5pZWwgQmVuZWRpY3RlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODBkZTJiMDUtZTBkNC00ZDMzLTkyOTctOTk1MWIyYjVjOTUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbHlzc2EgSGFycmVsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFhZjIzOWFlLTdlMTItNDJiZS05MTIwLWZlZmY5MDQ1M2M4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWVsdG9uIFRlbGVwaG9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRiMDFjYzNmLWM1OWYtNDg2ZC05YzAwLWI4YTgyNjI0ZTYyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2lvYmhhbiBDaGFya1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI2MmM0OWM2LTgzMDEtNDg3ZC04MzU2LTc0NzAyM2ZhNDZhOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWxleGFuZHJpYSBEcmFjYWVuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJhZThjYmZjLTIxNTUtNDY0Ny05OTk2LTNmMjU5MTA5MWJhZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRm9ycmVzdCBCb29rYmFieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkMjkzZDZjLTNhMjAtNDNhYi1hODk1LTJiN2YxZjI4Nzc5ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2xvc2ggVHJ1a1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUzNjFlMzgxLTY2NTgtNDg4Yi04MjM2LWRkZTZhMjY0NTU0ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWXVydHMgQnV0dGVyY3VwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTVhZGM4NGMtODBiOC00OWU0LTk5NjItOGI0YWRlOTlhOTIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaWNoYXJkc29uIFR1cnF1b2lzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjExZjI1ZWFlLTQ2NWYtNDNjYy05MzY2LWYxOWFkZGM4MDNiY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUnVmZmlhbiBBcHBsZXNhdWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzNmYmZlMjMtMzdiZC00ZTM3LWE0ODEtYTg3ZWFkYjgxOTJkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaGl0IFN0ZWFra25pZmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNWYzYTY3Yy00ZWQ1LTQ1YjYtOTRiMS1jZTQ2OGQzZWFkMjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvYmJzIENhaW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiM2Q1MThiOS1kYzY4LTQ5MDItYjY4Yy0wMDIyY2ViMjVhYTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlbmRyaWNrcyBSYW5nZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNmM2OWQyZC05MzQ0LTRiMTktODVhNC02Y2ZjYmFlYWQ1ZDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvc2h1YSBXYXRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1Yjk3MjdmNy02YTIwLTQ3ZDItOTNkOS03NzlmMGE4NWM0ZWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktlbm5lZHkgQWxzdG90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE0ZDg4NzcxLTdhOTYtNDhhYS1iYTU5LTA3YmFlMTczM2U5NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ViYXN0aWFuIFRlbGVwaG9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIxNzVjZGEwLWE0MjctNDBmZC1iNDk3LTM0N2VkY2MxY2Q2MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG90Ym94IFNhdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNDI2NzYzMi04YzMyLTRhOGItYjVlNi1jZTE1NjhiYjA2MzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkd1bnRoZXIgTydCcmlhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwYzZlNmNhLTc3ZmMtNDJiNy05NGQ4LWQ4YWZkNmQyOTllNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlraSBTYW50YW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmE0MGQ2ZWEtZTI0Yi00NDIyLTlkZjEtMDY0M2FiMjAyYzVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb29sbmFtZSBHYWx2YW5pY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg1NTc3NWMxLTI2NmYtNDBmNi1iMDdiLTNhNjdjY2RmODU1MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmljIFdpbmtsZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMzMwNjdmZC1jMmI0LTQwNDUtYTlhNC1lODdhOGQwMzMyZDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pZ3VlbCBKYW1lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY3MzAwOWM1LTJlZGUtNGRjNC1iOTZkLTg0YmE5M2M4YTQyOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhvbWFzIEtpcmJ5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzM4Njk0YjctNjI1Ni00NzI0LTg2YjYtMzg4NDI5OWE1ZDllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQb2xrYURvdCBQYXR0ZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNDUwNWM0OC1mYzc1LTRmOWUtODQxOS00MmIyOGRjYzUyNzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNlYmFzdGlhbiBUb3duc2VuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjhjZDA2YWJmLWJlMTAtNGEzNS1hM2FiLTFhNDA4YTMyOTE0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2xvcmlhIEJ1Z3NuYXhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjODNhMTNmNi1lZTY2LTRiMWMtOTc0Ny1mYWE2NzM5NWE2ZjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlppIERlbGFjcnV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDBkN2I4ZmUtYmFkOC00ODFmLTk3OGUtY2I2NTkzMDRlZDQ5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGFsYmVydG8gVG9zc2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWNiOGQyZjUtNGZmNS00ODkwLTk2OTMtNTY1NGUwMDA1NWY2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZZW9uZy1IbyBCZW5pdGV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDEzYjNkZGItZDkzMy00NTY3LWE2MGUtNmQxNTc0ODAyMzlkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXaW5uaWUgTWNjYWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTcyOTAzNzAtNjcyMy00ZDMzLTkyOWUtYjRmYzE5MGU2YTlhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb29uZXkgRG9jdG9yIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWVhYzdmZDktMGQxOS00YmY0LWEwMTMtOTk0YWNjMGM0MGMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdXR0b24gQmlzaG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTY0NzM4OGQtZmM1OS00YzFiLTkwZDMtOGMxODI2ZTA3Nzc1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaGFtYmVycyBTaW1tb25zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjAwMjZhOWQtZmM5YS00ZjVhLTk0ZmQtMjIyNTM5OGZhM2RhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcmlnaHQgWmltbWVybWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGVjZjYxOTAtZjg2OS00MjFhLWIzMzktMjkxOTVkMzBkMzdjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY0Jhc2ViYWxsIENsZW1ib25zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2RjZjY5MDItNjMyZi00OGM1LTkzNmEtN2NmODg4MDJiOTNhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYXJrZXIgUGFycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5YzgxMzAwOC1iMmE5LTQyNTctODBlNy1hNzA5YzY3MTg5ZmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJvdHRsZXMgU3VsamFrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGUxZmQ3ODQtOTlkNS00MWMxLWE2YzUtNmI5NDdjZWM2NzE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJWZWxhc3F1ZXogTWVhZG93c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ1MWYxZmU4LTRhYjgtNDExZS1iODM2LTViYmE5Mjk4NGQzMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGlyb3RvIENlcm5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmIxY2I4YTItOWViYS00ZmNlLTg1Y2YtNWQ5OTdlYzQ1NzE0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJJc2FhYyBSdWJiZXJtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNWQzYTg0NC1kZjZiLTQxOTMtYThmNS05YWIxMjkzMTJkOGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNlYmFzdGlhbiBXb29kbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjkxOTYyOTYtZjY1Mi00MmZmLWIyY2EtMGQ5YjUwYmQ5YjdiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3NodWEgQnV0dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImZhZDA2YjE5LTQyYTAtNDdlNS04MmQ3LTZlNjZkNGFkYzlhMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGFkIFNlZXRoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZWYzMmViNDgtNDg2Ni00OWQwLWFlNTgtOWM0OTgyZTAxMTQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGaXR6Z2VyYWxkIE1hc3NleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY0YjA1NWQxLWI2OTEtNGUwYy04NTgzLWZjMDhiYTY2Mzg0NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGhlb2RvcmUgUGFzc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmViYWM3NDYtNjY4NS00ZDBmLThlODQtNmIyMTI5OWI1MTY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZXJjdWxlcyBBbGlnaGllcmlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MDA3Y2JkMy03YzdiLTQ0ZmQtOWQ2Yi0zOTNlODJiMWMwNmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhZmFlbCBEYXZpZHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyMmQ0YzA2ZC0yNmMyLTQwMzEtYWU3Zi1mZDBlZWI5MmY1N2RcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vcnJpcyBGaXJlc3RhclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc1ZjlkODc0LTVlNjktNDM4ZC05MDBkLWEzZmNiMWQ0MjliM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9zZXMgTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YTk1ZDlkOC0zZGNjLTQ4OGQtYjFjYi0xOTY5MDI3MWFlNGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW5raWUgSGFtYm9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc1MGE3YmE5LWU1OTUtNDBiZS05M2U1LTQwMjFmMWY5NDYwZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGVubnkgQ3J1bWJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NDhjZThhOC0xOWNkLTRmODEtYjg0Zi04OGNjZTAyYzQ3YmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZsYXR0ZXJ5IE1jS2lubGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmU2ZDRmYTktZjkzMC00N2JkLTk3MWEtZGQ1NGEzY2Y3ZGIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSYVxcdTAwZmFsIExlYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZjdkNzQ5MC03MjgxLTRmOGYtYjYyZS0zN2U5OWE3YzQ2YTBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFubmllIFJvbGFuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUyZjM5ODE1LTUyOTEtNGRjZi1iYTE5LTk3ZGNmMGMwMTVlOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3Rpam4gU3Ryb25nYm9keVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNjMTE5NjNiLWEwNWItNDc3Yi1iMTU0LTkxMWRjMzE5NjBkZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUHVkZ2UgTmFrYW1vdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0YmRhNjU4NC02YzIxLTQxODUtODg5NS00N2QwN2U4YWQwYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZG9uIEFudGhvbnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MGEyZjAxNS05ZDQwLTQyNmItYTRmNi1iOTkxMWJhM2FkZDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhdWwgQmFybmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmNhMGM3OTAtZTFkNS00YTE0LWFiM2MtZTkyNDFjODdmYzIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNdXJyYXkgUG9ueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM4NmI1YWRkLTZjOWEtNDBlMC1hYTQzLWU0ZmQ3ZGQ0ZjJjN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU29zYSBFbGZ0b3dlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcwYTQ1OGVkLTI1Y2EtNGZmOC05N2ZjLTIxY2JmNThmMmMyYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHJldmlubyBNZXJyaXR0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Q2OGQzYTYtN2ZiYy00NDVkLTkwZjEtOTcwYzk1NWUzMmY0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWd1ZWwgV2hlZWxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJiOWY5YzI1LTQzZWMtNGYwYi05OTM3LWE1YWEyM2JlMGQ5ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGF3cmVuY2UgSG9ybmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NzM3MTJmNi1kNzZkLTRjYWEtOGE5Yi01NmZlMWQxYTVhNjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hdGhhIEthdGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZTM1Y2FiYS1iMTZhLTRlMGQtYjkyNy00ZGE4NTdmNGNkYjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYXNpZXIgU2htdXJtZ2xlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmY1YTM3ZDktYTZkZC00OWFhLWI2ZmItYjkzNWZkNjcwODIwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEdW5uIEtleWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDMwOTcyMDAtMGQ0OC00MjM2LWEzZDItOGJkYjE1M2FhOGY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZW5uZXR0IEJyb3duaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGFjYzk3ZmEtNGJmMS00OWY2LWJiOTMtZmI1MjUxM2EwMTViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaZXN0eSBZYWJvaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUzNWY0ZTY3LWE1NGItNDI3YS05Y2ExLTEyOTZkNzM4Nzg3NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGFuZHMgU2NvcmVzYnVyZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEzMTFjMDg5LTBkZjQtNDZiZC05ZjVkLThjNDVjN2ViNWFlMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWNsYXVnaGxpbiBTY29ycGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQxOTQ5ZDRkLWIxNTEtNGY0Ni04YmY3LTczMTE5YTQ4ZmFjOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9uIE1vbnN0ZXJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOGJhN2UxZmYtNGM2ZC00OTYzLThlMGYtNzA5NmQxNGY0YjEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKZW5uYSBNYWxkb25hZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmOTY3ZDA2NC0wZWFmLTQ0NDUtYjIyNS1kYWVkNzAwZTA0NGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldlc2xleSBEdWRsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiN2NhOGYzZi0yZmRjLTQ3N2ItODRmNC0xNTdmMjgwMmU5YjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlYWNoIEhlcm1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEwZWE1ZDUwLWVjODgtNDBhMC1hYjUzLWM2ZTExY2MxZTQ3OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmljaG9sYXMgVmluY2VudFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM4M2YwZmUwLTQ0ZDEtNDM0Mi04MWU4LTk0NGJiMzhmOGUyM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGFuZ2xleSBXaGVlbGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjQ0YThiMjctODVjMS00NGRlLWIxMjktMWIwZjYwYmNiOTljXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdGxhcyBKb25ib2lzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDE3NzI3OTgtOGQ0NS00N2NiLWJiYjUtNTE1ODMyYzViNTkwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIb3BzIENoZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNDY1MWQwNS00NGVmLTQwYzEtYWJkMy00ZDBjMTRiNjg0NWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVtaWxpYSBTdHJlZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwNjFiMjA5YS05Y2RhLTQ0ZTgtODhjZS02YTRhMzcyNTE5NzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1jZG93ZWxsIEthcmltXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGNjNWJkMzktZTkwZC00MmY5LTlkZDgtN2U3MDNmMzE2NDM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb24gRWxsaW90dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEwM2Q3ODhkLTJjNzQtNGVkYy05Mjk5LTJhMTM4NGEyNzc2YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2l0IFJhdG9vblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjExM2Y0N2IyLTMxMTEtNGFiYi1iMjVlLTE4Zjc4ODllMmQ0NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRraW5zIFN3YWdnZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMzhmY2NjMy1lNjZmLTRiMDctODMyNy1kNGI2ZjM3MmY2NTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9zY2FyIFZhdWdoYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYWJlN2ExNC0yNjA4LTQ4NWMtYWYxMC02OWNmMDEwN2MyYTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vcm1hbiBNdWdnaW5zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjRmNjgyOWUtN2JiNC00ZTFlLThiNTktYTA3NTE0NjU3ZTcyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLaW5nIFdlYXRoZXJtYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNTU4MWM0My1mOGRhLTQ2NTctOWU5Ni1lNzA0ZGYwYTg4NzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyZWVtaXVtIEZhaXJ3b29kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjY1MDNmMmMtNjMxYS00NWJhLTkwNWUtYWExNDQ3MWM4YjhlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOeXggU25hcGphd1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI5MThiZTAxLWUxYWEtNGRlNi04MjM5LWZlNjJmMzc3NjlkZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXZpIEpvbmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmNhZGMyOGMtODhhNS00ZTI1LWE2ZWItY2RhYjYwZGQ0NDZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGlqYWggQm9va2JhYnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyZDk1ZDQxYy1mZjU0LTRmYTEtODlhMC03NmI4NGRkOGZlMmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVtYmxlbSBXYXJob3JzZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMyNTUxZTI4LTNhNDAtNDdhZS1hZWQxLWZmNWJjNjZiZTg3OVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWF0aCBWZWxhenF1ZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzNWE5OWZmMy1jZjllLTQ2ODItYmE2ZS0wYTYwNDRhYTNhNGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNjcnVmZnMgUmlzc2V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzcwNjEzODAtYWM5NS00MDE4LTg1NGUtYzMwODA3Mzk0NWU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCYXJ0bGVieSBaaGl2YWdvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzgyMjk5MGItNWVlMC00MDRhLTllMDYtODQ2YmIyOWYzZmFmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYW50dXMgSG9qb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhOTZkNzZhLWM1MDgtNDVhMC05NGEwLThmNjRjZDZiZWViNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2l4cGFjayBEb2d3YWxrZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZTAwOGY2MC02ODQyLTQyZTctYjEyNS1iODhjN2U1YzFhOTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplYm9yaWFoIFdpbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ4ZDA3YTY0LTllYTItNGI5ZS04MDQ2LTY5MDFhZDM5ODQ5MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVsY2UgU2Nob2ZpZWxkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGI3MzM2N2YtYjJiYi00ZGY2LWIyZWItMmEwZGQzNzNlZWFkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUcmlzdGluIENyYW5raXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MTk4NTUxNi01MDMzLTRhYjgtYTE4NS03YmRhMDc4MjliZGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXBoYW5pZSBTY2htaXR0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTRiYzdiMjMtNDlhOS00ZjFkLWI2MGYtOWMzY2Y5NzU0YjY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDbG92ZSBNYWhsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYzNTgwYmQ3LTYxMzgtNDcxYy04MmE1LWJjOWQyOWZmZDA2ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9pcmEgQmFsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY0ZjRjZDc1LTBjMWUtNDJjZi05ZmYwLWU0MWM0NzU2ZjIyYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR3JleSBBbHZhcmFkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY1OThlNDBhLWQ3NmQtNDEzZi1hZDA2LWFjNDg3Mjg3NWJkZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFuaWVsIE1lbmRvemFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ODQ2MmJmYS05MDA2LTQ2MzctODgzMC0yZTc4NDBkOTA4OWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBhcmtlciBIb3JzZW1hblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZjYWE4MTgwLWUxNzgtNGY4Yi04NjVjLWYxYWY0NzExOWJjMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGFkIEJsb3J0bGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmQ5MDAxZmYtYmE5Zi00MGMwLTkzMTUtNzlmZWJhNTQxYjY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOZXBldGEgQ2hlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcxMDU0MWY0LWJiODktNDEzNC04OTczLTk1OGM4MmIyOWE0MVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2lraSBKdW5pb3IgSnJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MmZiNzk3YS1hZWE4LTQ3MjMtYjdlNC1kMTEwYzMwMTMyMGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBlcnNlcGhvbmUgU3Bsb3R0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3Yjc3OTk0Ny00NmVmLTRiNzctYmUzNy05NjJkNjA4NzU2NDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5vbGFzdG5hbWUgU29rb2xcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4MWIyNWIxNi0zMzcwLTRlYjAtOWQxYi02ZDYzMDE5NGM2ODBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplYm9yaWFoIFdoaXNrZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MGM4YmU4OS04OTZkLTQwNGMtOTQ1ZS1jMTM1ZDA2M2E3NGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkphbWVzIEJveVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0MTZkZmEzLTA1ZTktNDZmMy1iMWRmLTRmYTY3MDNlOWI1YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHJvc29waGlsYSBGYXNoaW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTQ4NDRmYWQtOTUxOS00YzE0LThhYjMtZDM4NjA2YTdiYjQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb25kaXRpb25hbCBZdW5pZXNreVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk4ZjI2YTI1LTkwNWYtNDg1MC04OTYwLWI3NDFiMGM1ODNhNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3R1IE1jZGFuaWVsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWZiYWI0ZGYtMzVkZC00OTkxLTllODItOTYzNWFiNzU2YjBmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSb2NpbyBDYXN0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMWI1NWM1Zi02ZDAxLTRjYTEtOTc2YS01Y2RmZTE4ZDE5OWNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJpbGx1cCBLaWRkb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE1YTAyYTRiLTcyYTItNGVlZi04MDJjLTE0YTE5NjRlMGRhZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3VzYW5hbmFuYSBQb3J0bWFudGVhdVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE4ZTc1N2M2LWUyOTktNGEyZS1hMzcwLTRmN2MzZGE5OGJkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGVuZHJpY2tzIExlbm55XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTkzOGY1ODYtZjVjMS00YTM1LTllN2YtOGVhYWI2ZGU2N2E2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXNwZXIgRGVzdGlueVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE5ODkxN2JjLWU5ZGYtNGIwZS1iYmRlLWNhYTYxNjhhYTNkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVua2lucyBJbmdyYW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYTZjMjY2Mi03NWY4LTQ1MDYtYWEwNi05YTA5OTMzMTMyMTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVpemFiZXRoIEVsbGlvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYTdhYzljYi1lOWRiLTQzMTMtOTk0MS05ZjM0MzE3MjhkY2VcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdHRlbyBDYXNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjkzZjRjMzItNjRlNC00NDYxLWI3MDgtMDVmNmY3ZjZiYmMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdG1hIFdpbGxvd3RyZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNzcxYWJhYi1mNDY4LTQ2ZTktYmFjNS00M2RiNGM1YjQxMGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldhZGUgSG93ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNjZDYwNjhiLTI3MzUtNDA3Mi1iZmU1LTU3MWE1ZDU3YzI4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXBocmFpbSBMYWRkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Q0MTdmOGEtY2UwMS00YWIyLTkyMWQtNDJlMmU0NDViYmUyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFaXphYmV0aCBHdWVycmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkOWEwNzJmNS0xY2JiLTQ1Y2UtODdmYi1iMTM4ZTRkOGY3NjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW5jaXNjbyBPYmplY3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZTY3YjU4NS05YmY0LTRlNDktYjQxMC0xMDE0ODNjYTJmYmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNoYXF1aWxsZSBTdW5zaGluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRmZDVjY2JiLTkwZWQtNGJmZS04M2UwLWRhZTljYzc2M2YxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3dlbiBQaWNrbGVzdGVpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUzZTFkMTkwLTJiOTQtNDBjMC04ZTg4LWJhYTNmZDE5OGQwZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hhbWJlcnMgS2VubmVkeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU4NjUyZGIwLWM2N2EtNGM4YS05YWNjLTI5NTFjZjQwMGNkMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFycmVuIENoaWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTk3Mjk4NGMtMjg5NS00NTFjLWI1MTgtZjA2YTBkOGJkMzc1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWNrZXIgU29saXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYmE3MTVmMi1jYWEzLTQ0YzAtOTExOC1iMDQ1ZWE3MDJhMzRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkp1YW4gUmFuZ2VsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmQ4ZDU4YjYtZjM3Zi00OGU2LTk5MTktOGUxNGVjOTFmOTJhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3NcXHUwMGU5IEhhbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmQ1NDliZmUtYjM5NS00ZGMwLTg1NDYtNWMwNGMwOGUyNGE1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW0gU29saXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZmU4OTZlMS0xMDhjLTRjZTktOTdiZS0zNDcwZGRlNzNjMjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJyeWFuYXlhaCBDaGFuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNkNDU0NWVkLTYyMTctNGQ3YS05YzRhLTIwOTI2NWViNjQwNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGlhbmEgQ2FzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcwY2NmZjFlLTZiNTMtNDBlMi04ODQ0LTBhMjg2MjFjYjMzZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9vZHkgQ29va2Jvb2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZTZhZDFhMS03YzcxLTQ5ZGUtOGJkNS1jMjg2NzEyZmFmOWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN1dHRvbiBQaWNrbGVzdGVpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImE5ODEyYThlLTY3YzQtNDM0Yy04NWNiLTZkZGY3ODVjYWRmMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVndXN0YSBDaGFkd2VsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ3NDRmNTM0LTIzNTItNDcyYi05ZTQyLWNkOTFmYTU0MGYxYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHlsZXIgVmlvbGV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDNiZjZhNmQtY2MwMy00YmNmLTkzOGQtNjIwZTE4NTQzM2UxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWd1ZWwgSmF2aWVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTA3MWE3MTMtYTZhMS00YjRjLWJiM2YtNDVkOWZiYTdhMDhjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3JhIFBlcmV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDFhN2MxM2YtOGU3OC00ZDJlLTljYWUtZWJmM2E1ZmNkYjVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGlqYWggQmF0ZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYWZiMzBjMS0xYjEyLTQ2NmEtOTY4YS01YTlhMjE0NThjN2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRpY2tlcnNvbiBHcmVhdG5lc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMDY0YzdkNi05MWNjLTRjMmEtYTQzMy0xY2UxYWFiYzFhZDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvcmdlIEl0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImJkOWQxZDZlLTc4MjItNGFkOS1iYWM0LTg5YjhhZmQ4YTYzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGVycmljayBLcnVlZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGM4M2UzYjYtMzYwZS00YjdkLTg1ZTMtZDkwNjYzM2M5Y2EwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZW5lbG9wZSBNYXRoZXdzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjg2MjM3YmItYWRlNi00YjFkLTkxOTktYTNjYzM1NDExOGQ5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIdXJsZXkgUGFjaGVjb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI0OGNjZjNkLWQ1ZjYtNGI2OS04M2Q5LTQwMjMwY2E5MDljZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW50b25pbyBXYWxsYWNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDcyZjUwYzAtZWY5OC00ZDA1LTkxZDAtZDYzNTllZWMzOTQ2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaHlzIFRyb21ib25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDI2OGIzNWYtYjE5Yi00YjJmLTkwYzQtODlmYjM2NDAzNjg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJHaXRhIEJpc2N1aXRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDRmOTU1ZmUtOWNjOS00NDgyLWE0ZDItMDdmZTAzM2I1OWVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJaYW5lIFZhcG9yXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDZjZWQ2MDctN2Y5Ni00MWU3LWE4Y2QtYjUwMWQxMWQxYTdlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb3Jyb3cgV2lsc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDkzYWY4MmMtODRhYS00YmQ2LWFkMWEtNDAxZmFlMWZjZTQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGlqYWggR2xvdmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDk2YmI5YjUtNWVhOC00ZGExLWExMTMtNTdhNWZjOWU5YjY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXNwZXIgSmktRXVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTI4YTMzYjktYzgyZi00MDhlLTlmYTMtNTE2MWY1YTNlMjk3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBeW1lciBFZ2dsZXRvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzNjc2YWI1LWFmYjMtNDY1MC1hZjIzLWJjZGUxMDM3ZDI1YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFzaGllbGwgRHJ1bXNvbG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZGIyZjYwMi02NGIxLTRhNWMtODY5Ny0xOTMyY2MyYzZkZjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk11bW15IE1lbGNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFmMTU5YmFiLTkyM2EtNDgxMS1iNmZhLTAyYmZkZTUwOTI1YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFOXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjcyNzIxNWQtMzcxNC00MzhkLWIxYmEtMmVkMTVlYzQ4MWMwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb21pbmljIFdvbWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmE4YjM3MWYtZDJlYi00YmU3LWI4OWYtYWZmMTBlZGI0NDEyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGZW5yeSBXb2JpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjJiOWQ2YjUwLTNjZTItNGNiMS04Y2QxLTJhMGZjMDU3MzNlM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXRtYSBCbHVlYmVycnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMDU5MjFlOC0zZjRkLTRjOTEtYTI4MC1kN2JmMWE0NDliMDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRvcnVzIE1jR2hlZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMwZmE0YmYxLThmM2ItNDVkYy05YWEzLTY1MTFlOTk4MDQwYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2FqIE11cnBoeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMyYzliY2U2LTZlNTItNDBmYS05ZjY0LTM2MjliM2QwMjZhOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUmVuIE1vcmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzMxZDk5MTAtMDk5MS00MGM4LTkzNDUtYTdjZGRiNzQ2NWM2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCaXN0cm8gU3VjY290YXNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzRlMWI2ODMtZWNkNS00NzdmLWI5ZTMtZGQ0YmNhNzZkYjQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbGV4YW5kcmlhIEhlc3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzN2VmZWY3OC0yZGY0LTRjNzYtODAwYy00M2Q0ZmFmMDc3MzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbml4IFJlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNlMGY3ZjQ4LTY3NWItNGY3Mi1iYjQwLThhOGM2NzZmMDA1NFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2FsbHVwIE11cnBoeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU2ZWJhNjM5LWVhNzMtNDc0ZC1iY2VlLWVjNjhjMDUyOGIwMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW5rbGUgSGFsaWZheFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU4ZmNhNWZhLWU1NTktNGY1ZS1hYzg3LWRjOTlkZDE5ZTQxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3VsbGl2YW4gU2VwdGVtYmVyaXNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWZjNDcxM2MtNDVlMS00NTkzLWE5NjgtN2RlZmViMDBhMGQ0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQZXJjaXZhbCBCZW5kaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MWJiYmYzNC05OGMxLTRiZjYtYmQwYy01NmMxOTE5OWIzNWVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNxdWlkIEdhbHZhbmljXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjk1ZGFmMDItMTEzZC00ZTc2LWI4MDItMDg2MmRmMTZhZmJkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYWNoZWNvIFdlZWtzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNmU3NDRiMjEtYzRmYS00ZmE4LWI0ZWEtZTBlOTdmNjhkZWQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEYW5pZWwgS29jaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZmNzE2NjdiLTU5ZjItNDZkZi1hZGFjLWE4ODg1YTRmNmFjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXJpcyBTdHJlZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MzI4OTlhMy0yMDgyLTRkOWYtYjFjMi03NGM4Yjc1ZTE1ZmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1pbmF0byBJdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NTQxZmM0Yi03ZTZiLTQ0NmEtYjZhMy03NTVkZTQ2YTAwMThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlF1aW5ucyBKZXNwZXJzZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3N2E0MWMyOS04YWJkLTQ0NTYtYjZlMC1hMDM0MjUyNzAwZDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsaXAgRGVhblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdkMzg4ODQ2LThmNGMtNDA3Zi1hYWNiLWI4NDRkMjU2MWM1ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2l0IEFkYW1zZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZTE2MGU5Zi0yYzc5LTRlMDgtOGI3Ni1iODE2ZGUzODhhOThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRob21hcyBNYXJzaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdlOTEwZTg2LTg0YjQtNDNjMy1hNjhlLTY3YjY2MTJkZGJlZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiT3ZpZCBTY2hvZmllbGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NGExN2Y0OC0wMzkzLTQxNjYtODY0YS1mN2NkMjc1NTc3MDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFyY2hlcyBDYW5kbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NTIxMDdiOC04Y2YzLTRmYmItOTdmOS03NmY3M2JjNDc3MDhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkx1Y3kgVmFuZGVyTWFsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg5OTcxMjNmLWIyNGQtNDMyNi04MGM4LTNjODYyZjgwZjYyM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9obmRhbiBNY0doZWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ODIyMDc1My0wYTcwLTRhNGUtODA1OC0wYTdiY2I2ZjdkNWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlbmphbWluIExpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjlhYmUwMmZiLTJiNWEtNDMyZi1iMGFmLTE3NmJlNmJkNjJjZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmFnb21pIE1lbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZmMzYzZhZS01ZWQ1LTQ5Y2UtYTc1Yi0yNTdlYzEwMjJhMTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJob21idXMgRHJhbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhNWU0ZTg2Zi1kM2E4LTQyNGEtOTc2OC0yYWRhMTdhNGU3NDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldpbGxvdyBFZ2didXJ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTczNDI3YjMtZTk2YS00MTU2LWE5YWItODQ0ZWRjNjk2ZmVkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXZXNsZXkgVm9ka2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYmJkNWVjNS1hMTViLTQyMWMtYjBjNS1jZDgwZDg5MDczNzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhdCBCYXRzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYTI2ZDhjYy04NjY4LTQ4YzktYTA2MS0yOGY2ZmRmNWY0NGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvYyBBbmljZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlM2ZiNzM2LWQyMGUtNGUyYS04OGNiLWUxMzY3ODNkM2E0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF2aWVyIEhvd2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkMjNhMWY3ZS0wMDcxLTQ0NGUtODM2MS02YWUwMWYxMzAzNmZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVkcmljIFRvc3NlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQyZjgyN2E1LTAxMzMtNGQ5Ni1iNDAzLTg1YTVlNTBkNDllMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9iYmlucyBTY2htaXR0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGIzZmY2ZjAtMTA0NS00MjIzLWIzYTgtYTAxNmNhOTg3YWY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNdXJwaHkgVGhpYmF1bHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZDZiYTdmMS1hOTdhLTQzNzQtYTNhNy1iMzU5NmUyODZiYjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hdGhlbyBUYW5ha2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZjM0ZDE2OC00ZDZhLTQwM2MtYWNhNS0yYjFlYmU5MDQ0NGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRvYyBDYXNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGY5NGEzMzUtMTY3Ny00MjAwLWEyM2YtZDc5NDY4OWE1NzMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJQYW5nb2xpbiBSdWl6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTBkNjQyNzAtNmY1YS00YzEwLTliMjItZjkxZjlkNGYyNDFjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZXZlbHluIENsYW1idWNrZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMWUzM2FhYi1kZjhjLTRmNTMtYjMwYS1jYTFjZWE5ZjA0NmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpveW5lciBSdWdyYXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlN2VjZjY0Ni1lNWU0LTQ5ZWYtYTBlMy0xMGE3OGU4N2Y1ZjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhbGx1cCBDcnVlbGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVhYzAwZWM5LTMzNzYtNDIzYy04Njg0LTkzZGQyY2JkNmVkNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRWRkaWUgTmFrYW1vdG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlZmRhNDFjMS1lYjA3LTQ1YjMtOGFkNS00MjRjNjMxMTUxMTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1ZnVzIEtpZGRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjU2NjU3ZDMtM2JkYy00ODQwLWEyMGMtOTFhY2E5Y2MzNjBlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWxpayBSb21heW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDBjYTQwYWYtYThkZi00NTE5LWFmOWEtYmVhZjkzZmZjMTIyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbGkgV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDFiY2JlZWItMGY2My00M2I0LThjZmEtZWMwMmI0MmExYTVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbnRyb3B5IEhhbmRjcmFtcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjAxZDNlZjg0LThlYzItNDExNi05YTdiLTVmOTU0ZGUyZWM5N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGFwcHkgWW9pbmt5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDI4OGJiYjEtYTk5NC00NWMzLWJiOGYtMzMxZmUyOTYwOTBkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVhbHMgQ2hhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwM2QwNjE2My02ZjA2LTQ4MTctYWJlNS0wZDE0YzMxNTQyMzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhcmNpYSBUYWJieVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA1NDE1YzBkLWRiM2ItNDU1ZC05ZDA2LTY4NGEzOTUwNmNmNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGhvZWJlIEJsYXNlc29uYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjA2NzJhNGJlLTdlMDAtNDAyYy1iOGQ2LTBiODEzZjU4YmE5NlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FzdGlsbG8gTG9nYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwN2FjOTFlOS0wMjY5LTRlMmMtYTYyZC1hODdlZjYxZTNiYmVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVkdWFyZG8gUGVyZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwODg4ODRhZi1mMzhkLTQ5MTQtOWQ2Ny1iMzE5Mjg3NDgxYjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxpYW0gUGV0dHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwODkyZGE2ZS1jOWQxLTQ5NGYtODRiYy0wYzFmODc5MDE4YzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJvYiBFLiBDYWdheWFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMDk0YWQ5YTEtZTJjNy00OWEwLWFmMTgtZGEwZTNlYjY1NmJhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFcmlja3NvbiBTYXRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGE2Yjc1ZWEtZmU2OS00NDA2LWJlMjQtYTE0OWM5NGRhYTNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTZXJlbiBNb3NzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGJkNWEzZWMtZTE0Yy00NWJmLTgyODMtN2JjMTkxYWU1M2U0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdGVwaGFuaWUgRG9uYWxkc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGQ1MzAwZjYtMDk2Ni00MzBmLTkwM2YtYTRjMjMzOGFiZjAwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBEb3ZlbnBhcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZGFmMDRmYy04ZDBkLTQ1MTMtOGU5OC00ZjYxMDYxNjQ1M2JcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxlZSBNaXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMGUyN2RmNTEtYWQwYy00NTQ2LWFjZjUtOTZiM2NiNGQ3NTAxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaG9yYnkgU3Bvb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIwZjYyYzIwYy03MmQwLTRjMTItYTlkNy0zMTJlYTNkM2JjZDFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFibmVyIFdvb2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMjZmYjEyOC03YzUzLTQ1YjUtYWMyYi01ZGJmOTk0M2Q3MWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNpZ211bmQgQ2FzdGlsbG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxMmYzYTE4ZC1jYzYzLTQ4MGQtYjJhZC1mMGQ4OWMxYzQ1NjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRoZSBNdXJwaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzMDMyZjA3LTEwYmYtNDhlYi1hMjNlLWY0MTE3ZDI0Njg2OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU25hY2sgRGV2aWF0aW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTMyOWY4MzktZjc4Yi00YWNjLTg1YWEtNjljNjk1OGZhNDNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBJWFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjEzY2ZiYWRmLWIwNDgtNGM0Zi05MDNkLWY5YjUyNjE2YjE1Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVubmV0dCBCb3dlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE0NmM2Mzc2LTkzNTMtNDY2OS1hMGVkLTZlNjE1MjE5ZDI5MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNGJmYWQ0My0yNjM4LTQxZWMtODk2NC04MzUxZjIyZTljNGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhYnkgU2xpZGVyc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE0ZmY1YTM2LWMzOWYtNDkxMC1hZmZiLTJhOWVhMjhlMDliMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGV4IFBvcnRlbnRpYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNTg0MGMwMS1kOGVhLTQ4MjMtYTgwMi05YjYzNWM1MWVmYTJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNwaXRzIFN0cm9uZ2JvZHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxNTg1NzQwNy0yZDZiLTQzZjEtODZjOC1iNTc0Yzg3MjA4ZjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFZJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTZhNTlmNWYtZWYwZi00YWRhLTg2ODItODkxYWQ1NzFhMGI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb3lmcmllbmQgQmVyZ2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTczOTJiZTItNzM0NC00OGEwLWI0ZGItOGEwNDBhN2ZiNTMyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYXNoZXIgQmFyYWphc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjE3NTBkZTM4LThmNWYtNDI2YS05ZTIzLTI4OTlhMTVhMjAzMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2xpbmUgTmlnaHRtYXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMTg3OThiOGYtNjM5MS00Y2IyLThhNWYtNmZiNTQwZDY0NmQ1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb3Jyb3cgRG95bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxOWFmMGQ2Ny1jNzNiLTRlZjItYmM4NC1lOTIzYzEzMzZkYjVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdyaXQgUmFtb3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYTUzNzY4Yi0xZWMxLTQ2NDYtODQxNy1kZDU4Yjk4NDliZDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhbGwgQ2xhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxYWVjMmMwMS1iNzY2LTQwMTgtYTI3MS00MTllNTM3MWJjOGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJ1c2ggSXRvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWM1NWFlZGYtNmUzMS00ZjNjLTliMTctOGE4NGI3ZDE1YTBjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOYW5jaSBHcmFja2xlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWNkZWQ0ZTctODMwMi00OWI3LWE2NDYtNDBhMDc2N2I2OTY5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJIZXJjdWxlcyBMaW5jZWN1bVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjFkN2FmOTNlLTc5MTAtNDVjMy05Nzk5LTQxNjZhMjdhNmQwYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRmlzaGNha2UgQ2FuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWU3YjAyYjctNjk4MS00MjdhLWIyNDktOGU5YmQzNWYzODgyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb3JhIFJlZGRpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIxZThiMDliZC1mYmRkLTQ0NGUtYmQ3ZS0xMDMyNmJkNTcxNTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZsZXRjaGVyIFlhbWFtb3RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMWY5MzAxNDAtOWZjNi00MjQwLTllZjYtZTdhYzA2NWVhZWZiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOZWVyaWUgTWNDbG91ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIwMzk1YjQ4LTI3OWQtNDRmZi1iNWJmLTdjZjI2MjRhMmQzMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRyaWFuIE1lbG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjA2YmQ2NDktNGY1Zi00NzA3LWFkODUtOTI3ODRiZTRlYjk1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOZXd0b24gVW5kZXJidWNrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjFkNTI0NTUtNmMyYy00ZWU0LTg2NzMtYWI0NmI0YjkyNmI0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBPd2Vuc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjIzMTEwYzBmLTJjZjktNGQ5Yy1hYjJkLTYzNGYyZjE4ODY3ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2VubmVkeSBNZWhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyM2U3OGQ5Mi1lZTJkLTQ5OGEtYTk5Yy1mNDBiYzRjNWZlOTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFubmllIFdpbGxpYW1zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjRhZDIwMGQtYTQ1Zi00Mjg2LWJmYTUtNDg5MDlmOThhMWY3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOaWNob2xhcyBTdW1tZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyNGNiMzVjMS1jMjRjLTQ1Y2EtYWMwYi1mOTlhMmU2NTBkODlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR5cmVlayBQZXRlcnNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjI1Mzc2YjU1LWJiNmYtNDhhNy05MzgxLTdiODIxMDg0MmZhZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRW1tZXR0IEludGVybmV0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjZmMDEzMjQtOWQxYy00NzBiLThlYWEtMWI5YmZiY2Q4YjY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOZXJkIEphbWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMjdmYWE1YTctZDNhOC00ZDJkLThlNjItNDdjZmViYTc0ZmYwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTcGVhcnMgTm9sYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIyOWJmNTEyYS1jZDhjLTRjZWItYjI1YS1kOTYzMDBjMTg0YmJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdhcmNpYSBTb3RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmFlZTMyZjktYTViYy00Zjk1LTkzMmMtY2Y3NDkyZDA5Mzc0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3J5IFRoaXJ0ZWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmQyMmYwMjYtMjg3My00MTBiLWE0NWYtM2IxZGFjNjY1ZmZkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb25pYSBKb2huc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMmQ1YWMyNzQtOTZmZC00NzFiLTgwMjgtZjRkN2I0MmQ4MzEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYXNvbiBEYXRhYmxhc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMGI3MDUzYS03ZjVmLTRlM2ItOTYwMC03YjNkYThiYTdkYzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJ1Y2sgUmF0dGxlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMwZGMwNjUyLTI2MDgtNDliYS04OTI5LTM2NDk0ZmMyYmQyOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2F0c29uIFdhcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzMWY4M2E4OS00NGUzLTQ3YjctOGM5ZS0wZGZkY2Q4YmQzMGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlR5cmVlayBPbGl2ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjMzM2UzZTIwLTY0NDUtNGVlNC1hZmM4LTJkNmI1ODRhNjNlZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gVklJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzRiNTEwM2EtZmYxNC00ODg5LTkzNTMtM2ZkMGRlM2QwOWE3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBYSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzUzMWMyODItY2I0OC00M2RmLWI1NDktYzUyNzYyOTZhYWE3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJPbGl2ZXIgSGVzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM1ZDViNDNmLTgzMjItNDY2Ni1hYWIxLWQ0NjZiNGE1YTM4OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9yZGFuIEJvb25lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiMzdiZGFmZGYtZjIxMy00NzE4LTgyMDAtYzEyM2ZjYTM5ZmY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTbGFtIFJvc2VudGhhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjM5NTRiZGZhLTkzMWYtNDc4Ny1iOWFjLWY0NGI3MmZlMDlkN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmljaG9sYXMgTm9sYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzYWRiMDM5ZC0wODc1LTQ0ZjQtOTE0Zi0xZWY5ZWU0YzIxMjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRhdHVtIENyaW1pbmFsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNhZjk2YTZiLTg2NmMtNGIwMy1iYzE0LTA5MGFjZjZlY2VlNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXhlbCBUcm9sb2xvbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNiZTJjNzMwLWIzNTEtNDNmNy1hODMyLWE1Mjk0ZmU4NDY4ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQW1heWEgSmFja3NvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjNiZjg3MTNiLTg4ODYtNGZjNC05ODNlLWUyYzcyYmVmN2I5NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlcGhlbiBTaGVsbGVkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2M1M2ZmMWMtNjQzNy00OTY1LWE0YTItNDg5YmNiOTFkM2Y0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcmVlemUgUmVnaWNpZGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZDRjY2IwOS0wZTdiLTQ1YWUtYjUxZC0xOTljOWQyMjI3NjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFZJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZGIwMjQyMy05MmFmLTQ4NWYtYjMwZi03ODI1NjcyMWRjYzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNvbiBKZW5zZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZGQ4NWMyMC1hMjUxLTQ5MDMtOGEzYi0xYjk2OTQxYzA3YjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRvdCBCZXN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiM2RlMTdlMjEtMTdkYi00YTZiLWI3YWItMGIyZjNjMTU0ZjQyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCcmV3ZXIgVmFwb3JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZjA4ZjhjZC02NDE4LTQ0N2EtODRkMy0yMmE5ODFjNjhmMTZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBvbGxhcmQgQmVhcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCIzZjFhYzE2Zi0wM2M0LTRhMGYtOGRhZi02ZTU0YmJlMTJjMzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRyb3NvcGhpbGEgSG9qb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQwMjllYTc1LWRhOTEtNDY3Mi05ZmE1LWVlMzJlYzdmYTcxM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF5IEdyYXlzY2FsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQwYTUxYjdmLTAwMDUtNDU3Ny04YmVmLTg1OWZjMzZmMDZkOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gVlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQwZGIxYjBiLTZkMDQtNDg1MS1hZGFiLWRkNjMyMGFkMmVkOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2NyYXAgTXVycGh5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDIwNGMyZDEtY2E0OC00YWY3LWI4MjctZTk5OTA3ZjEyZDYxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBeGVsIENhcmRlbmFzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDNlNGRlMDItY2MyMS00NDEzLWJiODgtMWMxMTI4ZWVjMTc0XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBcmJ1dHVzIEJvbmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDQ2YTMzNjYtM2ZlMy00MWJiLWJmZGQtZDg3MTdmMjE1MmE5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYXJjbyBFc2NvYmFyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDUwZTY0ODMtZDExNi00MWQ4LTkzM2ItMWI1NDFkNWYwMDI2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJFbmdsYW5kIFZvb3JoZWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDU5Zjc3MDAtNTIxZS00MGRhLTk0ODMtNGQxMTExMTlkNjU5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb21mb3J0IE1vbnJlYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0NzhkOTFlZi0xYTZkLTRiYjMtOTk2NS04N2NkY2M0YWQ4ZGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvYWQgS2lsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ4YTEwYWQ2LTY3NTktNDY2MS04MGJmLTlmOWZlMzkzMTYyY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm94ZXR0YSBDb21wYXNzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDkzYTgzZGUtNmJjZi00MWExLTk3ZGQtY2M1ZTE1MDU0OGEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCb3lmcmllbmQgTW9ucmVhbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjQ5NDE5NzZlLTMxZmMtNDliNS04MDFhLTE4YWJlMDcyMTc4YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ViYXN0aWFuIFN1bnNoaW5lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNDk1NzgyNmYtMGM0NC00NjdkLWI3MWYtMjExODU0NTBmNDU4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGcmllbmQgVm9pZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRhMTkyN2U3LTg4YWEtNGIyYy1hMTgyLTdlYzI0N2RjMjY0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRHVuYmFyIE1jTG91ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRhYTg0M2E0LWJhYTEtNGYzNS04NzQ4LTYzYWE4MmJkMGUwM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVyZWxpYW5vIERvbGxpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjRjNTNmY2Q4LWRmMDItNGE4MC05OWM5LTUxNzEwODYzYmM3ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSGFycmlldCBHaWxkZWhhdXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0Y2QwYWM4Zi02YzJlLTRiZjEtYTIzMi1hNWFjNmZkNGE2NzdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlB1ZyBNZWF0YnJpY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZTYzY2I1ZC00ZmNlLTQ0MWItYjllNC1kYzZhNDY3Y2YyZmRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF4ZWwgQ2FtcGJlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI0ZjMyODUwMi1kMzQ3LTRkMmMtOGZhZC02YWU1OTQzMWQ3ODFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlN0ZXBoZW5zIExpZ2h0bmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNGZlMjhiYzEtZjY5MC00YWQ2LWFkMDktMWIyZTk4NGJmMzBiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDZWxsIExvbmdhcm1zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTAxNTRkNTYtYzU4YS00NjFmLTk3NmQtYjA2YTRhZTQ2N2Y5XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXJ0ZXIgT2Nvbm5vclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUwYWFkNDZkLWJlNjEtNDIzNi1iYjBjLTZjNjE5OGUwMGJlMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiWTNoaXJ2IEhhZmd5MjczOHJpdlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUxNDljOTE5LTQ4ZmUtNDVjNi1iN2VlLWJiOGU1ODI4YTA5NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQWRraW5zIERhdmlzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTFjNzA2MzQtYzUwYS00N2E5LWJjMTEtNjBmYTcyMzI5ODc1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUaGVvZG9yZSBIb25leXdlbGxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1MWNiYTQyOS0xM2U4LTQ4N2UtOTU2OC04NDdiN2I4YjlhYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbGxpbnMgTWluYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUyMGIyYTE0LWVmNjAtNGVlOC05ZjM5LWM3YmUxMjk3MWVmMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFja3dvb2RzIEJyb2tlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjUyN2MxZjZlLWE3ZTQtNDQ0Ny1hODI0LTcwM2I2NjJiYWU0ZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWVsdG9uIENhbXBiZWxsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNTRjNzI0YWYtYjE2My00MzE5LTkzYzctZmRjYWZiYmNjOTkwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTbGV2ZSBNYXRzdXlhbWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1NTViMGEwNy1hM2UwLTQxYmMtYjNkYi1jYThmNTIwODU3YmNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9vcHMgQWxsIEtlZXBlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1N2I0ODI3Yi0yNmIwLTQzODQtYTQzMS05ZjYzZjcxNWJjNWJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkF1cmVsaWFubyBDZXJuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjU5MTViN2JiLWU1MzItNDAzNi05MDA5LTc5ZjFlODBjMGUyOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUm9zYSBIb2xsb3dheVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjVhMzliMmRkLTIzYzQtNGE2Zi1hNjQ1LTk5YjBiMTk5MjU4NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RyaWtlLCBMb29raW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNWIzZjBhNDMtNDVlNy00NGU3LTk0OTYtNTEyYzI0YzA0MGYwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSaHlzIFJpdmVyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjViNWJjYzZjLWQwMTEtNDkwZi1iMDg0LTZmZGMyYzUyZjk1OFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU2ltYmEgRGF2aXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1Y2E3ZTg1NC1kYzAwLTQ5NTUtOTIzNS1kN2ZjZDczMmRkY2ZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IFF1aXR0ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI1ZTNiMWU2Yi02ZmVmLTQ1NzItODBjOC1mOTQ3OTMzNWVhMzZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhvcHBlciBMb3ZlbGFjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjYxOTJkYWFiLTMzMTgtNDRiNS05NTNmLTE0ZDY4Y2RiMjcyMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSnVzdGluIEFsc3RvdHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2MjExMWM0OS0xNTIxLTRjYTctODY3OC1jZDQ1ZGFjZjA4NThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhbWJpIFBlcmV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjI4MjMwNzMtODRiOC00NmMyLTg0NTEtMjhmZDEwZGZmMjUwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNY2tpbm5leSBWYXVnaGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjNhMzEwMzUtMmU2ZC00OTIyLWEzZjktZmE2ZTY1OWI1NGFkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb29keSBSb2RyaWd1ZXpcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NGY1OWQ1Zi04NzQwLTRlYmYtOTFiZC1kNzY5N2I1NDJhOWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlpla2UgV2FsbGFjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY1MjRlOWUwLTgyOGEtNDZjNC05MzVkLTBlZTJlZGViN2U5YVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2FydGVyIFR1cm5pcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY2MmYzNGYwLWJkNzQtNDlhNy04NTA2LTUwZDRkZDMzM2M0Y1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRXJpbiBCZWFuYmFnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNjZjZWJiYmYtOTkzMy00MzI5LTkyNGEtNzJiZDM3MThmMzIxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJLZW5uZWR5IENlbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2NzcxODM2Mi05OThjLTQwMGMtOThhNi0yZTMwY2NhYTc4ZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIFhJSVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjY4MzNjYTdkLTkxMGUtNDhmNS1iMjVkLTI4ODZjZGIwOGQwZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFuZGVyIFBlcm1hZGVhdGhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YTg2OWI0MC1iZTk5LTQ1MjAtODllNS1kMzgyYjA3ZTRhM2NcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpha2UgU3dpbmdlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZiMjcyMmE2LWIzNzEtNGE3ZS04YWRmLTcyOGRhNjEyYTQwY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVubnkgUXVpY2tzaWx2ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2YmQ0Y2Y2ZS1mZWZlLTQ5OWEtYWE3YS04OTBiY2M3YjUzZmFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIklnbmV1cyBNY2RhbmllbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZjMWMwNTM5LTQxNjgtNDk3Ny1iZjE3LTI1N2JjYmZlYzkyYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hyb21hdGljIEp1bXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI2ZTM3M2ZjYS1iOGFiLTQ4NDgtOWRjYy01MGU5MmNkNzMyYjdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvbnJhZCBCYXRlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjZmMzlhMmY5LTc2ZDctNDRmZC04YTZkLTAwZjg3ZDdiYjAwNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUXVhY2sgSG9va3JhY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3MDg4MzUwYy05MDViLTRhYzAtYTk4Mi02NDE5MWVjYWVjYWFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNoZXJpIEZyaWRheVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjcyMWZiOTQ3LTc1NDgtNDllYS04Y2JlLTc3MjFiMGVkNDllMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGFtYXJhIExvcGV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzMxMGMzMmYtOGYzMi00MGYyLWIwODYtNTQ1NTVhMmMwZTg2XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb21pbmljIE1hcmlqdWFuYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc0YjA5NzRhLWY4MjctNDkzNC05ZGQwLTIwMjA3MjhiZDRjY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3RlYWxpeCBLcmFtZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3NTBjN2Q0NC03NTdhLTQzMGMtOWZhMy1kNGNhMjIxMTE5MzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvc3N0aW4gQW5kYW50ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc1ZTgwZTQ2LTI3NmQtNDM4OC1iYjZhLWRhOTEyNWEwZThhZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2ljZXJvIEhvbWVzdHlsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjc4MTVlODJlLTVlYTQtNGNlZi1iMjhiLTZkOGUwNTgxNWM1MlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWlhaCBKZXNhdWxlbmtvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzg1M2FhOGMtZTg2ZC00NDgzLTkyN2QtYzFkMTRlYTNhMzRkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJUdWNrZXIgRmxvcmVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiNzk1MTgzNmYtNTgxYS00OWQ1LWFlMmYtMDQ5YzZiY2M1NzVlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBZGtpbnMgR3dpZmZpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdhZmVkY2Q4LTg3MGQtNDY1NS05NjU5LTNiZGZiMmUxNzczMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGllcnJlIEhhbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2Q0NWU5NDItYWMyOC00MWI2LThkODktNWU0YTQ0NTkxYzExXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaW5uYSBUb2FzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjdmMzc5YjcyLWY0ZjAtNGQ4Zi1iODhiLTYzMjExY2Y1MGJhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVzXFx1MDBmYXMgUm9kcmlndWV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiN2YzZjJlNzUtOTAwZS00MGI2LTg0NmItZGI1ODU1NDE0OTBkXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJEb2dpbmljIEJ1cmdlcnRvZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI3ZjcwNDJkZS03ZmMxLTQ1ZjktYjdjNC05MTY5ZDE0NTQ2NTNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhBTkRTT01FIFNDQVJGXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODAwYWM2MjctMDMzNC00MWQ1LTk4ZGYtYzUxYTQ3ZTQ2YWVmXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDaGFuZHJhIEJsb3J0bGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODA1YmE0ODAtZGY0ZC00ZjU2LWE0Y2YtMGI5OTk1OTExMWI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMZXRpY2lhIExvemFub1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjgyZDVlNzlkLWUxMjUtNDQ2MC1iMWZhLWQwNDZhZDc3MzllMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hhbmdldXAgTGl1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODMxYjExMjEtY2ExNC00ZGJiLWFmZWUtNTY2NjBiYjExZjBjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKYW5hIEJlYXRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODQ5ZTEzZGMtNmViMS00MGE4LWI1NWMtZDRiNGNkMTYwYWFiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKdXN0aWNlIFZhbGVuenVlbGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4NjA0ZTg2MS1kNzg0LTQzZjAtYjBmOC0wZDQzZWE2Zjc4MTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJhbmRhbGwgTWFyaWp1YW5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiODc5ODMwMDYtYzljNS00NTlmLThlN2MtZTdlZGNiZDkwMmRjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTY2hpc20gVGhyb25lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjg5YzhmNmJmLTk0YTItNGU1Ni04NDEyLWJkYjAxODI1MDlhOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ29uY3JldGUgTWFuZGlibGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4YTRkYzJiYi1hYzViLTQ3NzQtODZiZi1jN2Y4ZDMwMDBhNGFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlRlZXRoIEJhbmRhbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4Y2ZiN2VlOS1jZmE0LTQ0NWMtODMwZS0yNzIzNzk3ZmE3YjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJveHBsb3QgSm9uZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZTFlZWViOC0xYjgwLTQ3ODEtOWQ4NS1iZGEzYjU4YTQ1ZjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hZ2kgVXBwZXJjdXRza2lcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI4ZjM1N2M5Yy01MjFhLTQwNjItYTc3MS0yZTU0Nzc0NmExNjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpdCBIb25leVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkwNmE1NzI4LTU0NTQtNDRhMC1hZGZlLWZkOGJlMTViOGQ5YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmVmZmVyc29uIERlbGFjcnV6XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTBjYzAyMTEtY2QwNC00Y2FjLWJkYWMtNjQ2Yzc5Mjc3M2ZjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYXNlIExhbmNhc3RlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkyZmY4ZTQyLWRjY2EtNGE5NC1hODNkLTI0ZDI5MDBiODExYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmVidWxhIEhvbHN0ZWluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTMxM2U0MWMtM2JmNy00MzZkLThiZGMtMDEzZDNhMWVjZGViXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTYW5kaWUgTmVsc29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOTMzNzM4OWYtNDMwMS00ZTMwLWExMDgtNDY4MGMwMmVlMWZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBcnRlbWVzaWEgVGVpeGVpcmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5MzUwMmRiMy04NWZhLTQzOTMtYWNhZS0yYTVmZjM5ODBkZGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlJvZHJpZ3VleiBTdW5zaGluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjkzN2MxYTM3LTRiMDUtNGRjNS1hODZkLWQ3NTIyNmY4NDkwYVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGlwcGluIENhcnBlbnRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk0NGQ5MzllLTY4YjgtNDI1OS1iOWNkLTQ2YjRhYzk3ODljN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9sbHkgVGFwZWRlY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NDU5NzRjNS0xN2Q5LTQzZTctOTJmNi1iYTQ5MDY0YmJjNTlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhdGVzIFNpbGtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NGUxZTE2Mi05ZDJlLTQ0MDctODAzYS0xOWJjZWUzNjk5MzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZ2VicmEgR29sZGJlcmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5NjBmMDQxYS1mNzk1LTQwMDEtYmQ4OC01ZGRjZjU4ZWU1MjBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1heXJhIEJ1Y2tsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5Nzg2YjJjOS0xMjA1LTQ3MTgtYjBmNy1mYzAwMGNlOTExMDZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktldmluIER1ZGxleVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3OTgxZTg2LTRhNDItNGY4NS04NzgzLTlmMjk4MzNjMTkyYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRGFpeWEgVmluZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk3OWU1MTA1LWNiZTktNGY5NS1hZDEzLWNlMzBjMDdmMWZkNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSG9wcyBTbHVtcHNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5N2VjNWEyZi1hYzFhLTRjZGUtODZiNy04OTdjMDMwYTFmYThcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsc3RvbiBXb29kc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk4MjBmMmM1LWY5ZGEtNGEwNy1iNjEwLWMyZGQ3YmVlMmVmNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGVhbnV0IEJvbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5OGE5ODAxNC05NjM2LTRlY2UtYTQ2YS00NjI1YjQ3YzY1ZDVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIktpa2kgRmFtaWxpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjk5ZTdkZTc1LWQyYjgtNDMzMC1iODk3LWE3MzM0NzA4YWZmOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2lubmllIExvc2VyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiOWFlN2NlYzQtMWRmMC00OTIyLThmN2EtZjNiOTk2ZDAzMWU3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKXFx1MDBlYmZmIERlU2hpZWxkc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjliYTM2MWExLTE2ZDUtNGYzMC1iNTkwLWZjNGZjMmZiNTNkMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTW9vbmV5IERvY3RvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcIjljMTRjYjBjLTc5YWItNGI5NC05YWUzLWM4ZGUxYzU4N2U1NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR01cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCI5ZTM5ZjgwOC1mZjcwLTQyMzItOGE4Yy0yODA4NTIyNzE1NWZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJ1Z2NhdGNoZXIgUm9sZGFuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTA4MzI0NmItMzVmNC00ZGFkLThiMDctOGIyODA0N2UwODIzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBdXJhIElydmluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEwZTc0NDVmLTJiOTMtNGNhNy1hNjlkLWZmMzI1OTM3MDBlZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTXVtbXkgQ2FudGJ1cm5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMTEyNDJhZS05MzZhLTQ2YjQtOTEwMS1iZTJjYWJhZmVlZDRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVsZWN0cmljIEtldHRsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImExM2Y2N2Q1LTIyZWItNGVlOS04YjY3LTg5M2IyMWFjZDg3YlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2Vkcmlzc2ltbyBTdWdhclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImEyNDgzOTI1LTY5N2YtNDY4Zi05MzFjLWJjZDAwNzEzOTRlNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVGltbXkgTWFuY29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhMjVhY2YzYS02ZDJjLTQ0ODUtOTc1Yi1hMDQ1NDlkMDg0ZjNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1hc29uIE0uIE1jTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhN2IwYmVmMy1lZTNjLTQyZDQtOWU2ZC02ODNjZDlmNWVkODRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhcnV0YSBCeXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYTg1MzBiZTUtODkyMy00Zjc0LTk2NzUtYmY4YTFhOGY3ODc4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNb2hhbW1lZCBQaWNrbGVzdGVpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFhZGJlNDg2LTZiZjItNDJiZC04NDE4LWRiZDFhYTM2ZWRkOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHVyaW5nIENhcHliYXJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWIwNGJhMjItNjliMS00M2NhLWEzMDctMzQ1ZTQ2MGQ3OTVhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb25lIEJpbmFyeVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFiOWIyNTkyLWE2NGEtNDkxMy1iZjZjLTNhZTViZDVkMjZhNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmVhdSBIdWVydGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhYmEwN2MyOC1lNDEwLTQ3MTAtYjQyNi1iM2ViYTM5NjkzMGZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhhdW50IFdlZG5lc2RheVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImFjMTMyNjRmLWFmNGUtNDQyMy05ZTRhLTQzNDk5YTBmODIyN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTnVtYmVyIENydW5jaGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWM1N2NmMjgtNTU2Zi00N2FmLTkxNTQtNmJjZWEyYWNlOWZjXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSZXkgV29vdGVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWM1ZTRjZTItZGU2Zi00MDhiLTk5MTAtYTUyYmIxZDFhOTc4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZYW1zIFJvbHNlbnRoYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZjY2OTZkNC1kMjhlLTQ0YTctYjZmZC1hNTQyZGZmYTczNjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIld5YXR0IE1hc29uIElJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYWZjOTAzOTgtYjg5MS00Y2RmLTlkZWEtYWY4YTNhNzlkNzkzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJZYXptaW4gTWFzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJhZmRiZDgzNy03ZmM4LTRjOTctYWMzMS02MzY5NTBjMmIzZTRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJsYXNlYmFsbCBTdXJnZW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjAwNDU1NTktODFjZi00MmUwLTg3ZDQtM2JiYmQzY2UwYmNlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNYWpvciBBcmNhbmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiMDE5ZmIyYi05ZjRiLTRkZWItYmY3OC02YmVlMmYxNmQ5OGRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkdsb3JpYSBCZW50bGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjA1NmE4MjUtYjYyOS00ODU2LTg1NmItNTNhMTVhZDM0YWNiXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZW5uZXR0IFRha2FoYXNoaVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzNTdmYmY0LTUzM2UtNGYyYy04NjE2LWE1NzZlOTk1NDc5NVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2F0IElubmluZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzOTBiMjhjLWRmOTYtNDQzZS1iODFmLWYwMTA0YmQzNzg2MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiS2FyYXRvIFJhbmdlbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzYzhjMGEwLTIwYTAtNGM1ZC1hMzkxLTM0Yjk5MDM4NjkzY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFuZGEgTW90aFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImIzZDQ4YTg0LWFkYzYtNDRmNC1iYjY5LTUxZDJjNmIxMjAzZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV3lhdHQgTWFzb24gWElcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNjlhYTI2Zi03MWY3LTRlMTctYmMzNi00OWM4NzU4NzJjYzFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkZyYW5jaXNjYSBCdXJ0b25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiNzJhMTM2ZS1iYmZkLTQ2ODctYTU3Ni0xYWI1MzhjOGYyNjRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlNhbW90aGVzIERlbWJcXHUwMGU5bFxcdTAwZTlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiN2FkYmJjYy0wNjc5LTQzZjMtYTkzOS0wN2YwMDlhMzkzZGJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvZGUgQ3J1dGNoXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYjdjMWRkZGEtOTQ1Yy00YjJlLTg4MzEtYWQ5ZjJlYzRhNjA4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJOb2xhbiBWaW9sZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiN2M0Zjk4Ni1lNjJhLTRhOGYtYjVmMC04ZjMwZWNjMzVjNWRcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9zY2FyIEhvbGx5d29vZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImI4NTE2MWRhLTdmNGMtNDJhOC1iN2Y2LTE5Nzg5Y2Y2ODYxZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmF2aWVyIExvdHVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmJkZWIzZTItY2Q1YS00NmZmLTlhNjktZmQwNmIxNDgyNzEwXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZWFucyBSZWJsYXNlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmQ0YzY4MzctZWVhYS00Njc1LWFlNDgtMDYxZWZhMGZkMTFhXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXb3JrbWFuIEdsb29tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmRlN2JkYzUtZTBhOC00OTkwLWE2YjYtYzQ5MDljM2ViYmM3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDb3VzaW4gU3Bpa2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJiZTRmMjg4Yi1lZjg3LTRlOGUtYjhlZS0yMGVlYzE4ZTgwYjhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBvbGthRG90IE1hdHJpeFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImMwOWU2NmIzLTU4NDctNGNiYi1hZWJhLTJiNzBlN2JhZmVkYlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUHJlbWplZXQgTGl1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYzNiMWI0ZTUtNGI4OC00MjQ1LWIyYjEtYWUzYWRlNTczNDllXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXYWxsIE9zYm9yblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM0NDE4NjYzLTdhYTQtNGM5Zi1hZTczLTBlODFlNDQyZThhMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2hyaXMgVGhpYmF1bHRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNTQ5ZjI4MC04MmJhLTRkOGUtYTRjZS1jNDllNTY0NjFmYjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlZhbCBIaXRoZXJ0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM1NGZiYTEyLTJmYjUtNDA5MS1iMWQ3LTE0NDk2OTNiMzVkNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSmFjb2J1cyBIYXJwZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjNTcyMjJmZC1kZjU1LTQ2NGMtYTQ0ZS1iMTU0NDNlNjFiNzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk5hdGhhIFNwcnVjZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM2MTQ2YzQ1LTNkOWItNDc0OS05ZjAzLWQ0ZmFhZTYxZTJjM1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXRsYXMgRGlhelwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImM2YmQyMWE4LTc4ODAtNGMwMC04YWJlLTMzNTYwZmU4NGFjNVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiV2VuZHkgQ2VybmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjOTBlYWZkZi00MjQ0LTQxZTAtOGE2Ni1hZGYzMWQ3MDBmMDJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkRlbmltIFNxdWFsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNhNzA5MjA1LTIyNmQtNGQ5Mi04YmU2LTVmNzg3MWY0OGUyNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUml2ZXJzIEphdmllclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNhYTliZDg2LTI0NGEtNGFiYS1hMjM3LTZhOTUyOGYwOTU3MFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFkZG9uZyBDYW5keVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNhY2VlMGI4LTUwZmMtNGRmNC05NmVhLTA4OWEzZDUwMTgxMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTmxpa2tpIEhhcnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjYzcyNWE1OC0zOGNjLTQyYWYtOWZmOC1hY2U3NjU0MWFjMjZcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkFsZG8gQ29tZWJhY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjY2M5OWYyZi0yZmViLTRmMzItYTliOS1jMjg5ZjYxOWQ4NGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkl0c3VraSBXaW5uZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZDU0OTRiNC0wNWQwLTRiMmUtODU3OC0zNTdmMDkyM2ZmNGNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk1jZmFybGFuZCBWYXJnYXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZDZiMTAyZS0xODgxLTQwNzktOWEzNy00NTUwMzhiYmYxMGVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNhbGViIE1vcmluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2Q5ZDliMzUtMGJhNC00ODQyLTg1NzctMmM4MGU5MTk2OGQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJXeWF0dCBNYXNvbiBJSUlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJjZTk5ZDdhZi1iYTc1LTQ4YTctYTVkOC1kNDZmNTQzODI5ZjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkx1Y3kgVG9ra2FuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2VhYzc4NWUtNTVmZC00YTRlLTliYzgtMTdhNjYyYTU4YTM4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZXN0IENlcm5hXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiY2ViNTYwNmQtZWEzZi00NDcxLTljYTctM2QyZTcxYTUwZGRlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJMb25kb24gU2ltbW9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImNlYjhmOGNkLTgwYjItNDdmMC1iNDNlLTRkODg1ZmE0OGFhNFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRG9uaWEgQmFpbGV5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDAwMjk0NmYtZTdlZC00Y2U0LWE0MDUtNjNiZGFmNWVhYmI1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJKb3JnZSBPd2Vuc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ0NmFiYjAwLWM1NDYtNDk1Mi05MjE4LTRmMTYwODRlMzIzOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXRsYXMgR3VlcnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZDUxOTJkOTUtYTU0Ny00OThhLWI0ZWEtNjc3MGRkZTRiOWY1XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTdW1tZXJzIFNsdWdnZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNmU5YTIxMS03YjMzLTQ1ZDktOGYwOS02ZDFhMWE3YTNjNzhcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIldpbGxpYW0gQm9vbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkNzRhMjQ3My0xZjI5LTQwZmEtYTQxZS02NmZhMjI4MWRmY2FcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxhbmRyeSBWaW9sZW5jZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ3OTZkMjg3LTc3ZWYtNDlmMC04OWVmLTg3YmNkZWIyODBlZVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXp1a2kgQ2xhcmtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkODc1OGMxYi1hZmJiLTQzYTUtYjAwYi02MDA0ZDQxOWUyYzVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIk9ydGl6IE5lbHNvblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImQ4YmM0ODJlLTkzMDktNDIzMC1hYmNiLTJjNWE2NDEyNDQ2ZFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVndXN0IE9icmllblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRhYjEyNmE5LTMzMTAtNGY2ZS1hM2JhLTNlMzA0NGEwZmVlY1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiR2FtZXMgUGVyZ2FtZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRkN2U3MTBmLWRhNGUtNDc1Yi1iODcwLTJjMjlmZTlkOGMwMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSXRzdWtpIFdlZWtzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZGQ4YTQzYTQtYTAyNC00NGU5LWE1MjItNzg1ZDk5OGIyOWMzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJNaWd1ZWwgUGV0ZXJzb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJkZTM4MzZhNC1mZGJhLTQ2Y2MtYWI1My00OWZjYWFjYzM5YzBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlBvbVBvbSBQb21vZG9yb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRlNTJkNWMwLWNiYTQtNGFjZS04MzA4LWUyZWQzZjg3OTlkMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSm9zXFx1MDBlOSBNaXRjaGVsbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImRmZTNiYzFiLWZjYTgtNDdlYi05NjVmLTZjZjk0N2MzNTQ0N1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTGludXMgSGFsZXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMTFmZjU3YS1lYzVkLTRkNTktODFhMy1mZmUzNTI5YjBlNjFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkVzcHJlc3NvIE1hY2hpbmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMTY1MTExNi00NTMzLTRiMzktODkzMS02MmQwMjNlMjE1NzlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplcm8gSW5kZXhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlMTgxYWQ0YS1kZDA5LTQ4NzMtYWU2OC1iNTA1MThkMjA3MjJcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkJhdGlzdGEgT2F0bWlsa1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImUyYWQ4MWZmLWZmZjItNDBiYi05MDQzLTk1YmRhZjM0ZWJjMlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiU3dvcmRzIE1hZ3BpZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU0OTJmZTdlLTE1NzAtNGQ1ZS05MmEyLTdjZmIyY2ZlZTVhNlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiSWtlYSBKZWxsb2ZpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU0OTVjYWRjLWE2NDUtNDM5ZC1hNTU2LWU0MWRlNzQ5M2YxOFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiVHdvZnVyaW91cyBQdWRkbGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTYxMTRmZDQtYTExZC00ZjZjLWI4MjMtNjU2OTFiYjJkMjg4XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJCZXZhbiBVbmRlcmJ1Y2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJlNjc2ODA2OS0xZGI3LTQ0ZDYtODQ5Yi0wYTI4MWY2MmU4NTVcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlF1ZWl0aGxlaW4gU2h1ZmZsZWNhdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImU3NDlkYzI3LWNhM2ItNDU2ZS04ODljLWQyZWMwMmFjN2Y1ZlwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQXVyZWxpYW5vIEVzdGVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZTkxOWRmYWUtOTFjMy00NzVjLWI1ZDUtOGIwYzE0OTQwYzQxXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJGYW1vdXMgTWVuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImViZjJkYTUwLTc3MTEtNDZiYS05ZTQ5LTM0MWNlMzQ4N2UwMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQmFsZHdpbiBKb25lc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImVjNDFkMzdlLTIzOTgtNGU3ZC1hYWYwLWY3ZjUyZTUzMDBjN1wiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiQ2xlbWVudGluZSBTdGVlcGxlY2hhc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMTA2MjkxYS01OTM1LTQ0OWUtYjA3NS03NWU2MmQxZDFiMDdcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIlplbGRhIEhpZ2h3YXlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMTBiYTA2ZS1kNTA5LTQxNGItOTBjZC00ZDcwZDQzYzc1ZjlcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkhlcm5hbmRvIFdpbnRlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImYxMTg1YjIwLTdiNGEtNGNjYy1hOTc3LWRjMWFmZGZkNGNiOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiRnJhemllciBUb3NzZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmMzU5Zjk3OS1mNjU4LTQ0MjctODJhMy03MTg1Mzc3Yzg1YzNcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkpvbmFoIE1vc2FpY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY2MzQyNzI5LWEzOGEtNDIwNC1hZjhkLTY0YjdhY2NiNTYyMFwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTWFyY28gV2lubmVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjYzZWU2OGYtODAyMS00ZGQwLWIzZDUtYjNkNTg3YWUzMjEzXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJRdWVicmFkYSBTdG9uZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY2ZDNjMTM0LWUzZWUtNDBhMS1iZDRkLTA5NTM0NzQ0NDEyOVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiUGFya2VyIE1hY01pbGxhbiBJSUlJXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZjc3MTViMDUtZWU2OS00M2U1LWEwZTUtOGUzZDM0MjcwYzgyXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJDYWxpZ3VsYSBMb3R1c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInBsYXllcl9pZFwiOiBcImY5MGMzOThiLWVlZjAtNDBjYi04YjA3LTMwMmE3NTllOGJkMVwiLFxuICAgICAgICBcInBsYXllcl9uYW1lXCI6IFwiTnVjbGV1cyBTdHJlZXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYmI1MjkxYy0yNDM4LTQwMGUtYWIzMi0zMGNlMTI1OWM2MDBcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkNvcnkgTm92YWtcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwbGF5ZXJfaWRcIjogXCJmYzFkNjVmNS04OTE2LTQxZjEtYjg3OC00ZDQyYTk2NWIwMTFcIixcbiAgICAgICAgXCJwbGF5ZXJfbmFtZVwiOiBcIkxpenp5IFBhc3RhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmRmZDM2YzctZTBjMS00ZmNlLTk4ZjctOTIxYzNkMTdlYWZlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJSZWVzZSBIYXJyaW5ndG9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiZmUxZjgyNmYtNzM0Ni00MjVjLTlkM2MtN2VkNWE3ZWFlMWI3XCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJBbmdlbCBJdm9yaWVzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGxheWVyX2lkXCI6IFwiYmM0MTg3ZmEtNDU5YS00YzA2LWJiZjItNGUwZTAxM2QyN2NlXCIsXG4gICAgICAgIFwicGxheWVyX25hbWVcIjogXCJTaXhwYWNrIERvZ3dhbGtlclwiLFxuICAgIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwbGF5ZXJzLFxufTtcblxuIiwiLyoqXG4gKiBAYXV0aG9yIEthdGVcbiAqL1xuXG52YXIgdHJhY2VyeSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuICAgIGZ1bmN0aW9uIHNldFJhbmRvbShuZXdSYW5kb20pIHtcbiAgICAgICAgcmFuZG9tID0gbmV3UmFuZG9tO1xuICAgIH1cblxuICAgIHZhciBUcmFjZXJ5Tm9kZSA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGRJbmRleCwgc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcblxuICAgICAgICAvLyBObyBpbnB1dD8gQWRkIGFuIGVycm9yLCBidXQgY29udGludWUgYW55d2F5c1xuICAgICAgICBpZiAoc2V0dGluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goXCJFbXB0eSBpbnB1dCBmb3Igbm9kZVwiKTtcbiAgICAgICAgICAgIHNldHRpbmdzLnJhdyA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgcm9vdCBub2RlIG9mIGFuIGV4cGFuc2lvbiwgaXQgd2lsbCBoYXZlIHRoZSBncmFtbWFyIHBhc3NlZCBhcyB0aGUgJ3BhcmVudCdcbiAgICAgICAgLy8gIHNldCB0aGUgZ3JhbW1hciBmcm9tIHRoZSAncGFyZW50JywgYW5kIHNldCBhbGwgb3RoZXIgdmFsdWVzIGZvciBhIHJvb3Qgbm9kZVxuICAgICAgICBpZiAoIHBhcmVudCBpbnN0YW5jZW9mIHRyYWNlcnkuR3JhbW1hcikge1xuICAgICAgICAgICAgdGhpcy5ncmFtbWFyID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kZXB0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNoaWxkSW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmFtbWFyID0gcGFyZW50LmdyYW1tYXI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxO1xuICAgICAgICAgICAgdGhpcy5jaGlsZEluZGV4ID0gY2hpbGRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmF3ID0gc2V0dGluZ3MucmF3O1xuICAgICAgICB0aGlzLnR5cGUgPSBzZXR0aW5ncy50eXBlO1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuZ3JhbW1hcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gZ3JhbW1hciBzcGVjaWZpZWQgZm9yIHRoaXMgbm9kZVwiLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJOb2RlKCdcIiArIHRoaXMucmF3ICsgXCInIFwiICsgdGhpcy50eXBlICsgXCIgZDpcIiArIHRoaXMuZGVwdGggKyBcIilcIjtcbiAgICB9O1xuXG4gICAgLy8gRXhwYW5kIHRoZSBub2RlICh3aXRoIHRoZSBnaXZlbiBjaGlsZCBydWxlKVxuICAgIC8vICBNYWtlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyBhbnlcbiAgICBUcmFjZXJ5Tm9kZS5wcm90b3R5cGUuZXhwYW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZFJ1bGUsIHByZXZlbnRSZWN1cnNpb24pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IFwiXCI7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBydWxlIGZvciBtYWtpbmcgY2hpbGRyZW4sXG4gICAgICAgIC8vIGFuZCBleHBhbmQgaXQgaW50byBzZWN0aW9uXG4gICAgICAgIHRoaXMuY2hpbGRSdWxlID0gY2hpbGRSdWxlO1xuICAgICAgICBpZiAodGhpcy5jaGlsZFJ1bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gdHJhY2VyeS5wYXJzZShjaGlsZFJ1bGUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgZXJyb3JzIHRvIHRoaXNcbiAgICAgICAgICAgIGlmIChzZWN0aW9ucy5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuY29uY2F0KHNlY3Rpb25zLmVycm9ycyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0gPSBuZXcgVHJhY2VyeU5vZGUodGhpcywgaSwgc2VjdGlvbnNbaV0pO1xuICAgICAgICAgICAgICAgIGlmICghcHJldmVudFJlY3Vyc2lvbilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5leHBhbmQocHJldmVudFJlY3Vyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgaW4gdGhlIGZpbmlzaGVkIHRleHRcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCArPSB0aGlzLmNoaWxkcmVuW2ldLmZpbmlzaGVkVGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluIG5vcm1hbCBvcGVyYXRpb24sIHRoaXMgc2hvdWxkbid0IGV2ZXIgaGFwcGVuXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiTm8gY2hpbGQgcnVsZSBwcm92aWRlZCwgY2FuJ3QgZXhwYW5kIGNoaWxkcmVuXCIpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gY2hpbGQgcnVsZSBwcm92aWRlZCwgY2FuJ3QgZXhwYW5kIGNoaWxkcmVuXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEV4cGFuZCB0aGlzIHJ1bGUgKHBvc3NpYmx5IGNyZWF0aW5nIGNoaWxkcmVuKVxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS5leHBhbmQgPSBmdW5jdGlvbihwcmV2ZW50UmVjdXJzaW9uKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5zaW9uRXJyb3JzID0gW107XG5cbiAgICAgICAgICAgIC8vIFR5cGVzIG9mIG5vZGVzXG4gICAgICAgICAgICAvLyAtMTogcmF3LCBuZWVkcyBwYXJzaW5nXG4gICAgICAgICAgICAvLyAgMDogUGxhaW50ZXh0XG4gICAgICAgICAgICAvLyAgMTogVGFnIChcIiNzeW1ib2wubW9kLm1vZDIubW9kMyNcIiBvciBcIiNbcHVzaFRhcmdldDpwdXNoUnVsZV1zeW1ib2wubW9kXCIpXG4gICAgICAgICAgICAvLyAgMjogQWN0aW9uIChcIltwdXNoVGFyZ2V0OnB1c2hSdWxlXSwgW3B1c2hUYXJnZXQ6UE9QXVwiLCBtb3JlIGluIHRoZSBmdXR1cmUpXG5cbiAgICAgICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIC8vIFJhdyBydWxlXG4gICAgICAgICAgICBjYXNlIC0xOlxuXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRDaGlsZHJlbih0aGlzLnJhdywgcHJldmVudFJlY3Vyc2lvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIHBsYWludGV4dCwgZG8gbm90aGluZyBidXQgY29weSB0ZXh0IGludG8gZmluc2loZWQgdGV4dFxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gdGhpcy5yYXc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIFRhZ1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRvIGZpbmQgYW55IGFjdGlvbnMsIGFuZCBmaWd1cmUgb3V0IHdoYXQgdGhlIHN5bWJvbCBpc1xuICAgICAgICAgICAgICAgIHRoaXMucHJlYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdGFjdGlvbnMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSB0cmFjZXJ5LnBhcnNlVGFnKHRoaXMucmF3KTtcblxuICAgICAgICAgICAgICAgIC8vIEJyZWFrIGludG8gc3ltYm9sIGFjdGlvbnMgYW5kIG1vZGlmaWVyc1xuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sID0gcGFyc2VkLnN5bWJvbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVycyA9IHBhcnNlZC5tb2RpZmllcnM7XG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYWxsIHRoZSBwcmVhY3Rpb25zIGZyb20gdGhlIHJhdyBzeW50YXhcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnNlZC5wcmVhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlYWN0aW9uc1tpXSA9IG5ldyBOb2RlQWN0aW9uKHRoaXMsIHBhcnNlZC5wcmVhY3Rpb25zW2ldLnJhdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyc2VkLnBvc3RhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5wb3N0YWN0aW9uc1tpXSA9IG5ldyBOb2RlQWN0aW9uKHRoaXMsIHBhcnNlZC5wb3N0YWN0aW9uc1tpXS5yYXcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2UgdW5kbyBhY3Rpb25zIGZvciBhbGwgcHJlYWN0aW9ucyAocG9wcyBmb3IgZWFjaCBwdXNoKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcmVhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZWFjdGlvbnNbaV0udHlwZSA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdGFjdGlvbnMucHVzaCh0aGlzLnByZWFjdGlvbnNbaV0uY3JlYXRlVW5kbygpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBY3RpdmF0ZSBhbGwgdGhlIHByZWFjdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJlYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWFjdGlvbnNbaV0uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IHRoaXMucmF3O1xuXG4gICAgICAgICAgICAgICAgLy8gRXhwYW5kIChwYXNzaW5nIHRoZSBub2RlLCB0aGlzIGFsbG93cyB0cmFja2luZyBvZiByZWN1cnNpb24gZGVwdGgpXG5cbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRSdWxlID0gdGhpcy5ncmFtbWFyLnNlbGVjdFJ1bGUodGhpcy5zeW1ib2wsIHRoaXMsIHRoaXMuZXJyb3JzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQ2hpbGRyZW4oc2VsZWN0ZWRSdWxlLCBwcmV2ZW50UmVjdXJzaW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IG1vZGlmaWVyc1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZSBwYXJzZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciBvbiBoYXNodGFncyB3aXRoaW4gcGFyZW50aGVzaXMgd2l0aGluIHRhZ3MsXG4gICAgICAgICAgICAgICAgLy8gICBzbyB0aGF0IG1vZGlmaWVyIHBhcmFtZXRlcnMgY2FuIGNvbnRhaW4gdGFncyBcIiNzdG9yeS5yZXBsYWNlKCNwcm90YWdvbmlzdCMsICNuZXdDaGFyYWN0ZXIjKSNcIlxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb2RpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZE5hbWUgPSB0aGlzLm1vZGlmaWVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZFBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kTmFtZS5pbmRleE9mKFwiKFwiKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdFeHAgPSAvXFwoKFteKV0rKVxcKS87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZG86IGlnbm9yZSBhbnkgZXNjYXBlZCBjb21tYXMuICBGb3Igbm93LCBjb21tYXMgYWx3YXlzIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IHJlZ0V4cC5leGVjKHRoaXMubW9kaWZpZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0cyB8fCByZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZFBhcmFtcyA9IHJlc3VsdHNbMV0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZE5hbWUgPSB0aGlzLm1vZGlmaWVyc1tpXS5zdWJzdHJpbmcoMCwgbW9kTmFtZS5pbmRleE9mKFwiKFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0aGlzLmdyYW1tYXIubW9kaWZpZXJzW21vZE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1pc3NpbmcgbW9kaWZpZXI/XG4gICAgICAgICAgICAgICAgICAgIGlmICghbW9kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKFwiTWlzc2luZyBtb2RpZmllciBcIiArIG1vZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgKz0gXCIoKC5cIiArIG1vZE5hbWUgKyBcIikpXCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkVGV4dCA9IG1vZCh0aGlzLmZpbmlzaGVkVGV4dCwgbW9kUGFyYW1zKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIHBvc3QtYWN0aW9uc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3N0YWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RhY3Rpb25zW2ldLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuXG4gICAgICAgICAgICAgICAgLy8gSnVzdCBhIGJhcmUgYWN0aW9uPyAgRXhwYW5kIGl0IVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gbmV3IE5vZGVBY3Rpb24odGhpcywgdGhpcy5yYXcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBObyB2aXNpYmxlIHRleHQgZm9yIGFuIGFjdGlvblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHNvbWUgdmlzaWJsZSB0ZXh0IGZvciBpZiB0aGVyZSBpcyBhIGZhaWx1cmUgdG8gcGVyZm9ybSB0aGUgYWN0aW9uP1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUud2FybihcIkFscmVhZHkgZXhwYW5kZWQgXCIgKyB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFRyYWNlcnlOb2RlLnByb3RvdHlwZS5jbGVhckVzY2FwZUNoYXJzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdGhpcy5maW5pc2hlZFRleHQgPSB0aGlzLmZpbmlzaGVkVGV4dC5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIkRPVUJMRUJBQ0tTTEFTSFwiKS5yZXBsYWNlKC9cXFxcL2csIFwiXCIpLnJlcGxhY2UoL0RPVUJMRUJBQ0tTTEFTSC9nLCBcIlxcXFxcIik7XG4gICAgfTtcblxuICAgIC8vIEFuIGFjdGlvbiB0aGF0IG9jY3VycyB3aGVuIGEgbm9kZSBpcyBleHBhbmRlZFxuICAgIC8vIFR5cGVzIG9mIGFjdGlvbnM6XG4gICAgLy8gMCBQdXNoOiBba2V5OnJ1bGVdXG4gICAgLy8gMSBQb3A6IFtrZXk6UE9QXVxuICAgIC8vIDIgZnVuY3Rpb246IFtmdW5jdGlvbk5hbWUocGFyYW0wLHBhcmFtMSldIChUT0RPISlcbiAgICBmdW5jdGlvbiBOb2RlQWN0aW9uKG5vZGUsIHJhdykge1xuICAgICAgICAvKlxuICAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gbm9kZSBmb3IgTm9kZUFjdGlvblwiKTtcbiAgICAgICAgIGlmICghcmF3KVxuICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gcmF3IGNvbW1hbmRzIGZvciBOb2RlQWN0aW9uXCIpO1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgICAgIHZhciBzZWN0aW9ucyA9IHJhdy5zcGxpdChcIjpcIik7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gc2VjdGlvbnNbMF07XG5cbiAgICAgICAgLy8gTm8gY29sb24/IEEgZnVuY3Rpb24hXG4gICAgICAgIGlmIChzZWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IDI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbG9uPyBJdCdzIGVpdGhlciBhIHB1c2ggb3IgYSBwb3BcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJ1bGUgPSBzZWN0aW9uc1sxXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bGUgPT09IFwiUE9QXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBOb2RlQWN0aW9uLnByb3RvdHlwZS5jcmVhdGVVbmRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9kZUFjdGlvbih0aGlzLm5vZGUsIHRoaXMudGFyZ2V0ICsgXCI6UE9QXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE8gTm90IHN1cmUgaG93IHRvIG1ha2UgVW5kbyBhY3Rpb25zIGZvciBmdW5jdGlvbnMgb3IgUE9Qc1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgTm9kZUFjdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGdyYW1tYXIgPSB0aGlzLm5vZGUuZ3JhbW1hcjtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAvLyBzcGxpdCBpbnRvIHNlY3Rpb25zICh0aGUgd2F5IHRvIGRlbm90ZSBhbiBhcnJheSBvZiBydWxlcylcbiAgICAgICAgICAgIHRoaXMucnVsZVNlY3Rpb25zID0gdGhpcy5ydWxlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRSdWxlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5ydWxlTm9kZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ydWxlU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBUcmFjZXJ5Tm9kZShncmFtbWFyLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgcmF3IDogdGhpcy5ydWxlU2VjdGlvbnNbaV1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG4uZXhwYW5kKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkUnVsZXMucHVzaChuLmZpbmlzaGVkVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGVzY2FwZSBjb21tYXMgcHJvcGVybHlcbiAgICAgICAgICAgIGdyYW1tYXIucHVzaFJ1bGVzKHRoaXMudGFyZ2V0LCB0aGlzLmZpbmlzaGVkUnVsZXMsIHRoaXMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGdyYW1tYXIucG9wUnVsZXModGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGdyYW1tYXIuZmxhdHRlbih0aGlzLnRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIE5vZGVBY3Rpb24ucHJvdG90eXBlLnRvVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldCArIFwiOlwiICsgdGhpcy5ydWxlO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgKyBcIjpQT1BcIjtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIFwiKChzb21lIGZ1bmN0aW9uKSlcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIigoVW5rbm93biBBY3Rpb24pKVwiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNldHMgb2YgcnVsZXNcbiAgICAvLyBDYW4gYWxzbyBjb250YWluIGNvbmRpdGlvbmFsIG9yIGZhbGxiYWNrIHNldHMgb2YgcnVsZXNldHMpXG4gICAgZnVuY3Rpb24gUnVsZVNldChncmFtbWFyLCByYXcpIHtcbiAgICAgICAgdGhpcy5yYXcgPSByYXc7XG4gICAgICAgIHRoaXMuZ3JhbW1hciA9IGdyYW1tYXI7XG4gICAgICAgIHRoaXMuZmFsbG9mZiA9IDE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0UnVsZXMgPSByYXc7XG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiByYXcgPT09ICdzdHJpbmcnIHx8IHJhdyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0UnVsZXMgPSBbcmF3XTtcbiAgICAgICAgfSBlbHNlIGlmIChyYXcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzdXBwb3J0IGZvciBjb25kaXRpb25hbCBhbmQgaGllcmFyY2hpY2FsIHJ1bGUgc2V0c1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgUnVsZVNldC5wcm90b3R5cGUuc2VsZWN0UnVsZSA9IGZ1bmN0aW9uKGVycm9ycykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdldCBydWxlXCIsIHRoaXMucmF3KTtcbiAgICAgICAgLy8gSXMgdGhlcmUgYSBjb25kaXRpb25hbD9cbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uYWxSdWxlKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdyYW1tYXIuZXhwYW5kKHRoaXMuY29uZGl0aW9uYWxSdWxlLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIGRvZXMgdGhpcyB2YWx1ZSBtYXRjaCBhbnkgb2YgdGhlIGNvbmRpdGlvbmFscz9cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbmFsVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpcy5jb25kaXRpb25hbFZhbHVlc1t2YWx1ZV0uc2VsZWN0UnVsZShlcnJvcnMpO1xuICAgICAgICAgICAgICAgIGlmICh2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBObyByZXR1cm5lZCB2YWx1ZT9cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHRoZXJlIGEgcmFua2VkIG9yZGVyP1xuICAgICAgICBpZiAodGhpcy5yYW5raW5nKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmFua2luZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdGhpcy5yYW5raW5nLnNlbGVjdFJ1bGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGlsbCBubyByZXR1cm5lZCB2YWx1ZT9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRSdWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gU2VsZWN0IGZyb20gdGhpcyBiYXNpYyBhcnJheSBvZiBydWxlc1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRpc3RyaWJ1dGlvbiBmcm9tIHRoZSBncmFtbWFyIGlmIHRoZXJlIGlzIG5vIG90aGVyXG4gICAgICAgICAgICB2YXIgZGlzdHJpYnV0aW9uID0gdGhpcy5kaXN0cmlidXRpb247XG4gICAgICAgICAgICBpZiAoIWRpc3RyaWJ1dGlvbilcbiAgICAgICAgICAgICAgICBkaXN0cmlidXRpb24gPSB0aGlzLmdyYW1tYXIuZGlzdHJpYnV0aW9uO1xuXG4gICAgICAgICAgICBzd2l0Y2goZGlzdHJpYnV0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwic2h1ZmZsZVwiOlxuXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2h1ZmZsZSBkZXNrXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNodWZmbGVkRGVjayB8fCB0aGlzLnNodWZmbGVkRGVjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNodWZmbGVkRGVjayA9IGZ5c2h1ZmZsZShBcnJheS5hcHBseShudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggOiB0aGlzLmRlZmF1bHRSdWxlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKE51bWJlci5jYWxsLCBOdW1iZXIpLCB0aGlzLmZhbGxvZmYpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLnNodWZmbGVkRGVjay5wb3AoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndlaWdodGVkXCI6XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJXZWlnaHRlZCBkaXN0cmlidXRpb24gbm90IHlldCBpbXBsZW1lbnRlZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmYWxsb2ZmXCI6XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJGYWxsb2ZmIGRpc3RyaWJ1dGlvbiBub3QgeWV0IGltcGxlbWVudGVkXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnBvdyhyYW5kb20oKSwgdGhpcy5mYWxsb2ZmKSAqIHRoaXMuZGVmYXVsdFJ1bGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kZWZhdWx0VXNlcylcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRVc2VzID0gW107XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRVc2VzW2luZGV4XSA9ICsrdGhpcy5kZWZhdWx0VXNlc1tpbmRleF0gfHwgMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRSdWxlc1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICBlcnJvcnMucHVzaChcIk5vIGRlZmF1bHQgcnVsZXMgZGVmaW5lZCBmb3IgXCIgKyB0aGlzKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9O1xuXG4gICAgUnVsZVNldC5wcm90b3R5cGUuY2xlYXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRVc2VzKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRVc2VzID0gW107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZnlzaHVmZmxlKGFycmF5LCBmYWxsb2ZmKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSxcbiAgICAgICAgICAgIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IocmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGFycmF5W2N1cnJlbnRJbmRleF0gPSBhcnJheVtyYW5kb21JbmRleF07XG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICB2YXIgU3ltYm9sID0gZnVuY3Rpb24oZ3JhbW1hciwga2V5LCByYXdSdWxlcykge1xuICAgICAgICAvLyBTeW1ib2xzIGNhbiBiZSBtYWRlIHdpdGggYSBzaW5nbGUgdmFsdWUsIGFuZCBhcnJheSwgb3IgYXJyYXkgb2Ygb2JqZWN0cyBvZiAoY29uZGl0aW9ucy92YWx1ZXMpXG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLmdyYW1tYXIgPSBncmFtbWFyO1xuICAgICAgICB0aGlzLnJhd1J1bGVzID0gcmF3UnVsZXM7XG5cbiAgICAgICAgdGhpcy5iYXNlUnVsZXMgPSBuZXcgUnVsZVNldCh0aGlzLmdyYW1tYXIsIHJhd1J1bGVzKTtcbiAgICAgICAgdGhpcy5jbGVhclN0YXRlKCk7XG5cbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5jbGVhclN0YXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gQ2xlYXIgdGhlIHN0YWNrIGFuZCBjbGVhciBhbGwgcnVsZXNldCB1c2FnZXNcbiAgICAgICAgdGhpcy5zdGFjayA9IFt0aGlzLmJhc2VSdWxlc107XG5cbiAgICAgICAgdGhpcy51c2VzID0gW107XG4gICAgICAgIHRoaXMuYmFzZVJ1bGVzLmNsZWFyU3RhdGUoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5wdXNoUnVsZXMgPSBmdW5jdGlvbihyYXdSdWxlcykge1xuICAgICAgICB2YXIgcnVsZXMgPSBuZXcgUnVsZVNldCh0aGlzLmdyYW1tYXIsIHJhd1J1bGVzKTtcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKHJ1bGVzKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5wb3BSdWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnNlbGVjdFJ1bGUgPSBmdW5jdGlvbihub2RlLCBlcnJvcnMpIHtcbiAgICAgICAgdGhpcy51c2VzLnB1c2goe1xuICAgICAgICAgICAgbm9kZSA6IG5vZGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChcIlRoZSBydWxlIHN0YWNrIGZvciAnXCIgKyB0aGlzLmtleSArIFwiJyBpcyBlbXB0eSwgdG9vIG1hbnkgcG9wcz9cIik7XG4gICAgICAgICAgICByZXR1cm4gXCIoKFwiICsgdGhpcy5rZXkgKyBcIikpXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnNlbGVjdFJ1bGUoKTtcbiAgICB9O1xuXG4gICAgU3ltYm9sLnByb3RvdHlwZS5nZXRBY3RpdmVSdWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uc2VsZWN0UnVsZSgpO1xuICAgIH07XG5cbiAgICBTeW1ib2wucHJvdG90eXBlLnJ1bGVzVG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnJhd1J1bGVzKTtcbiAgICB9O1xuXG4gICAgdmFyIEdyYW1tYXIgPSBmdW5jdGlvbihyYXcsIHNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0ge307XG4gICAgICAgIHRoaXMubG9hZEZyb21SYXdPYmoocmF3KTtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuY2xlYXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc3ltYm9scyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleXNbaV1dLmNsZWFyU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5hZGRNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RzKSB7XG5cbiAgICAgICAgLy8gY29weSBvdmVyIHRoZSBiYXNlIG1vZGlmaWVyc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbW9kcykge1xuICAgICAgICAgICAgaWYgKG1vZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZpZXJzW2tleV0gPSBtb2RzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUubG9hZEZyb21SYXdPYmogPSBmdW5jdGlvbihyYXcpIHtcblxuICAgICAgICB0aGlzLnJhdyA9IHJhdztcbiAgICAgICAgdGhpcy5zeW1ib2xzID0ge307XG4gICAgICAgIHRoaXMuc3ViZ3JhbW1hcnMgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5yYXcpIHtcbiAgICAgICAgICAgIC8vIEFkZCBhbGwgcnVsZXMgdG8gdGhlIGdyYW1tYXJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnJhdykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJhdy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1trZXldID0gbmV3IFN5bWJvbCh0aGlzLCBrZXksIHRoaXMucmF3W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5jcmVhdGVSb290ID0gZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBub2RlIGFuZCBzdWJub2Rlc1xuICAgICAgICB2YXIgcm9vdCA9IG5ldyBUcmFjZXJ5Tm9kZSh0aGlzLCAwLCB7XG4gICAgICAgICAgICB0eXBlIDogLTEsXG4gICAgICAgICAgICByYXcgOiBydWxlLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9O1xuXG4gICAgR3JhbW1hci5wcm90b3R5cGUuZXhwYW5kID0gZnVuY3Rpb24ocnVsZSwgYWxsb3dFc2NhcGVDaGFycykge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuY3JlYXRlUm9vdChydWxlKTtcbiAgICAgICAgcm9vdC5leHBhbmQoKTtcbiAgICAgICAgaWYgKCFhbGxvd0VzY2FwZUNoYXJzKVxuICAgICAgICAgICAgcm9vdC5jbGVhckVzY2FwZUNoYXJzKCk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfTtcblxuICAgIEdyYW1tYXIucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbihydWxlLCBhbGxvd0VzY2FwZUNoYXJzKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5leHBhbmQocnVsZSwgYWxsb3dFc2NhcGVDaGFycyk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3QuZmluaXNoZWRUZXh0O1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnN5bWJvbHMpO1xuICAgICAgICB2YXIgc3ltYm9sSlNPTiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgc3ltYm9sSlNPTi5wdXNoKCcgXCInICsga2V5ICsgJ1wiIDogJyArIHRoaXMuc3ltYm9sc1trZXldLnJ1bGVzVG9KU09OKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIntcXG5cIiArIHN5bWJvbEpTT04uam9pbihcIixcXG5cIikgKyBcIlxcbn1cIjtcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIG9yIHB1c2ggcnVsZXNcbiAgICBHcmFtbWFyLnByb3RvdHlwZS5wdXNoUnVsZXMgPSBmdW5jdGlvbihrZXksIHJhd1J1bGVzLCBzb3VyY2VBY3Rpb24pIHtcblxuICAgICAgICBpZiAodGhpcy5zeW1ib2xzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0gPSBuZXcgU3ltYm9sKHRoaXMsIGtleSwgcmF3UnVsZXMpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUFjdGlvbilcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNba2V5XS5pc0R5bmFtaWMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xzW2tleV0ucHVzaFJ1bGVzKHJhd1J1bGVzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5wb3BSdWxlcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuc3ltYm9sc1trZXldKVxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcIkNhbid0IHBvcDogbm8gc3ltYm9sIGZvciBrZXkgXCIgKyBrZXkpO1xuICAgICAgICB0aGlzLnN5bWJvbHNba2V5XS5wb3BSdWxlcygpO1xuICAgIH07XG5cbiAgICBHcmFtbWFyLnByb3RvdHlwZS5zZWxlY3RSdWxlID0gZnVuY3Rpb24oa2V5LCBub2RlLCBlcnJvcnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sc1trZXldKSB7XG4gICAgICAgICAgICB2YXIgcnVsZSA9IHRoaXMuc3ltYm9sc1trZXldLnNlbGVjdFJ1bGUobm9kZSwgZXJyb3JzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGYWlsb3ZlciB0byBhbHRlcm5hdGl2ZSBzdWJncmFtbWFyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3ViZ3JhbW1hcnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3ViZ3JhbW1hcnNbaV0uc3ltYm9sc1trZXldKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YmdyYW1tYXJzW2ldLnN5bWJvbHNba2V5XS5zZWxlY3RSdWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBObyBzeW1ib2w/XG4gICAgICAgIGVycm9ycy5wdXNoKFwiTm8gc3ltYm9sIGZvciAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgICAgIHJldHVybiBcIigoXCIgKyBrZXkgKyBcIikpXCI7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlcyBhIHBsYWludGV4dCBydWxlIGluIHRoZSB0cmFjZXJ5IHN5bnRheFxuICAgIHRyYWNlcnkgPSB7XG5cbiAgICAgICAgY3JlYXRlR3JhbW1hciA6IGZ1bmN0aW9uKHJhdykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFtbWFyKHJhdyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0UmFuZG9tOiBzZXRSYW5kb20sXG5cbiAgICAgICAgLy8gUGFyc2UgdGhlIGNvbnRlbnRzIG9mIGEgdGFnXG4gICAgICAgIHBhcnNlVGFnIDogZnVuY3Rpb24odGFnQ29udGVudHMpIHtcblxuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcHJlYWN0aW9ucyA6IFtdLFxuICAgICAgICAgICAgICAgIHBvc3RhY3Rpb25zIDogW10sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzIDogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSB0cmFjZXJ5LnBhcnNlKHRhZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIHZhciBzeW1ib2xTZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uc1tpXS50eXBlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2xTZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFNlY3Rpb24gPSBzZWN0aW9uc1tpXS5yYXc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJtdWx0aXBsZSBtYWluIHNlY3Rpb25zIGluIFwiICsgdGFnQ29udGVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnByZWFjdGlvbnMucHVzaChzZWN0aW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3ltYm9sU2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gICB0aHJvdyAoXCJubyBtYWluIHNlY3Rpb24gaW4gXCIgKyB0YWdDb250ZW50cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnRzID0gc3ltYm9sU2VjdGlvbi5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnN5bWJvbCA9IGNvbXBvbmVudHNbMF07XG4gICAgICAgICAgICAgICAgcGFyc2VkLm1vZGlmaWVycyA9IGNvbXBvbmVudHMuc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBhcnNlIDogZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgdmFyIGRlcHRoID0gMDtcbiAgICAgICAgICAgIHZhciBpblRhZyA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gW107XG4gICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSAwO1xuXG4gICAgICAgICAgICB2YXIgZXNjYXBlZFN1YnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgbGFzdEVzY2FwZWRDaGFyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmVycm9ycyA9IGVycm9ycztcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihzdGFydCwgZW5kLCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVuZCAtIHN0YXJ0IDwgMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHN0YXJ0ICsgXCI6IGVtcHR5IHRhZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IDIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChzdGFydCArIFwiOiBlbXB0eSBhY3Rpb25cIik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJhd1N1YnN0cmluZztcbiAgICAgICAgICAgICAgICBpZiAobGFzdEVzY2FwZWRDaGFyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3U3Vic3RyaW5nID0gZXNjYXBlZFN1YnN0cmluZyArIFwiXFxcXFwiICsgcnVsZS5zdWJzdHJpbmcobGFzdEVzY2FwZWRDaGFyICsgMSwgZW5kKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd1N1YnN0cmluZyA9IHJ1bGUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJhdyA6IHJhd1N1YnN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxhc3RFc2NhcGVkQ2hhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBlc2NhcGVkU3Vic3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gcnVsZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFbnRlciBhIGRlZXBlciBicmFja2V0ZWQgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCAmJiAhaW5UYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ10nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5kIGEgYnJhY2tldGVkIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCAmJiAhaW5UYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSGFzaHRhZ1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlnbm9yZSBpZiBub3QgYXQgZGVwdGggMCwgdGhhdCBtZWFucyB3ZSBhcmUgaW4gYSBicmFja2V0XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZWN0aW9uKHN0YXJ0LCBpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5UYWcgPSAhaW5UYWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlZFN1YnN0cmluZyA9IGVzY2FwZWRTdWJzdHJpbmcgKyBydWxlLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVzY2FwZWRDaGFyID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFydCA8IHJ1bGUubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGNyZWF0ZVNlY3Rpb24oc3RhcnQsIHJ1bGUubGVuZ3RoLCAwKTtcblxuICAgICAgICAgICAgaWYgKGluVGFnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJVbmNsb3NlZCB0YWdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVwdGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJUb28gbWFueSBbXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiVG9vIG1hbnkgXVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RyaXAgb3V0IGVtcHR5IHBsYWludGV4dCBzZWN0aW9uc1xuXG4gICAgICAgICAgICBzZWN0aW9ucyA9IHNlY3Rpb25zLmZpbHRlcihmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24udHlwZSA9PT0gMCAmJiBzZWN0aW9uLnJhdy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VjdGlvbnMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb25zO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1Zvd2VsKGMpIHtcbiAgICAgICAgdmFyIGMyID0gYy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gKGMyID09PSAnYScpIHx8IChjMiA9PT0gJ2UnKSB8fCAoYzIgPT09ICdpJykgfHwgKGMyID09PSAnbycpIHx8IChjMiA9PT0gJ3UnKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNBbHBoYU51bShjKSB7XG4gICAgICAgIHJldHVybiAoYyA+PSAnYScgJiYgYyA8PSAneicpIHx8IChjID49ICdBJyAmJiBjIDw9ICdaJykgfHwgKGMgPj0gJzAnICYmIGMgPD0gJzknKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xuICAgIH1cblxuICAgIHZhciBiYXNlRW5nTW9kaWZpZXJzID0ge1xuXG4gICAgICAgIHJlcGxhY2UgOiBmdW5jdGlvbihzLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTQ0NzgzL3JlcGxhY2luZy1hbGwtb2NjdXJyZW5jZXMtb2YtYS1zdHJpbmctaW4tamF2YXNjcmlwdFxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChwYXJhbXNbMF0pLCAnZycpLCBwYXJhbXNbMV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhcGl0YWxpemVBbGwgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICB2YXIgczIgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGNhcE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQWxwaGFOdW0ocy5jaGFyQXQoaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcE5leHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSBzLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhcE5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMyICs9IHMuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgczIgKz0gcy5jaGFyQXQoaSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcE5leHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHMyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhcGl0YWxpemUgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGEgOiBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICBpZiAocy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQoMikudG9Mb3dlckNhc2UoKSA9PT0gJ2knKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImEgXCIgKyBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzVm93ZWwocy5jaGFyQXQoMCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImFuIFwiICsgcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBcImEgXCIgKyBzO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlyc3RTIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocyk7XG4gICAgICAgICAgICB2YXIgczIgPSBzLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gYmFzZUVuZ01vZGlmaWVycy5zKHMyWzBdKSArIFwiIFwiICsgczIuc2xpY2UoMSkuam9pbihcIiBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaW5pc2hlZCk7XG4gICAgICAgICAgICByZXR1cm4gZmluaXNoZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcyA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocy5jaGFyQXQocy5sZW5ndGggLTEpKSB7XG4gICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIFwiZXNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlc1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICBpZiAoIWlzVm93ZWwocy5jaGFyQXQocy5sZW5ndGggLSAyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDEpICsgXCJpZXNcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkIDogZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgc3dpdGNoIChzLmNoYXJBdChzLmxlbmd0aCAtMSkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBcImVkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICBpZiAoIWlzVm93ZWwocy5jaGFyQXQocy5sZW5ndGggLSAyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDEpICsgXCJpZWRcIjtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRyYWNlcnkuYmFzZUVuZ01vZGlmaWVycyA9IGJhc2VFbmdNb2RpZmllcnM7IFxuICAgIC8vIEV4dGVybmFsaXplXG4gICAgdHJhY2VyeS5UcmFjZXJ5Tm9kZSA9IFRyYWNlcnlOb2RlO1xuXG4gICAgdHJhY2VyeS5HcmFtbWFyID0gR3JhbW1hcjtcbiAgICB0cmFjZXJ5LlN5bWJvbCA9IFN5bWJvbDtcbiAgICB0cmFjZXJ5LlJ1bGVTZXQgPSBSdWxlU2V0O1xuICAgIHJldHVybiB0cmFjZXJ5O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYWNlcnk7XG4iLCJjb25zdCB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmNsYXNzIERpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ25ldyBEaWFsb2coKScpO1xuXG4gICAgdGhpcy4kZGlhbG9ncyA9ICQoJyNoaWdobGlnaHRzLWRpYWxvZ19fdGV4dCBwJyk7XG4gICAgdGhpcy4kbGluZU9uZSA9IHRoaXMuJGRpYWxvZ3MuZmlyc3QoKTtcbiAgICB0aGlzLiRsaW5lVHdvID0gdGhpcy4kZGlhbG9ncy5sYXN0KCk7XG4gICAgdGhpcy4kY29udHJvbCA9ICQoJy5kaWFsb2ctY29udHJvbCcpO1xuXG4gICAgLy8gb2xkIGFuaW1hdGlvbiBzdHVmZlxuICAgIC8vdGhpcy5saW5lT25lQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgLy90aGlzLmxpbmVUd29BbmltYXRpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuaGlnaGxpZ2h0O1xuICAgIHRoaXMucmVzZXREaWFsb2coKTtcbiAgfVxuXG4gIHJlc2V0RGlhbG9nKCkge1xuICAgIHRoaXMubWF4RGlhbG9nTGVuID0gdGhpcy5zZXRNYXhEaWFsb2dMZW4oKTtcbiAgICB0aGlzLmRpYWxvZ1BhcnRzID0gW107XG4gICAgdGhpcy5jdXJEaWFsb2dQYXJ0ID0gMDtcblxuICAgIC8vIG9sZCBhbmltYXRpb24gc3R1ZmZcbiAgICAvL3RoaXMuJGxpbmVPbmUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCBhbmltYXRlJyk7XG4gICAgLy90aGlzLiRsaW5lVHdvLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuICB9XG5cbiAgLy8gdG9kbzogZG8gaSB3YW5uYSBzdXBwb3J0IG1vYmlsZT8gdGhlbiB1cGRhdGUgdGhpcyBhY2NvcmRpbmdseVxuICBzZXRNYXhEaWFsb2dMZW4oKSB7XG4gICAgcmV0dXJuIDM1O1xuICB9XG5cbiAgYnJlYWtJbnRvRGlhbG9nUGFydHMoY29tbWVudGFyeSkge1xuICAgIC8vIHNwbGl0IGJ5IG5ld2xpbmVzIChlbmZvcmNlZCBwYWNpbmcpXG4gICAgY29uc3QgcGFjaW5nUGFydHMgPSBjb21tZW50YXJ5LnNwbGl0KCdcXG4nKTtcblxuICAgIHBhY2luZ1BhcnRzLmZvckVhY2goKHApID0+IHtcbiAgICAgIHRoaXMuYnJlYWtJbnRvUGFydHMocCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBzcGxpdCBlYWNoIHBhcnQgaW50byBpdHMgYW5pbWF0aW9uIHBhcnRzIGJ5IGxpbmUgbGVuZ3RoXG4gIGJyZWFrSW50b1BhcnRzKHRleHQpIHtcbiAgICBsZXQgcGFydHMgPSBbW10sIFtdXTtcbiAgICBsZXQgdW5maWxsZWQgPSAwO1xuICAgIGxldCBsZW4gPSAwO1xuXG4gICAgdGV4dC5zcGxpdCgnICcpLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgIGxldCB3b3JkTGVuID0gd29yZC5sZW5ndGg7XG5cbiAgICAgIGlmICgobGVuICsgd29yZExlbikgPiB0aGlzLm1heERpYWxvZ0xlbikge1xuICAgICAgICBsZW4gPSAwO1xuXG4gICAgICAgIGlmICh1bmZpbGxlZCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZGlhbG9nUGFydHMucHVzaCh0aGlzLm1ha2VTZW50ZW5jZXMocGFydHMpKTtcbiAgICAgICAgICBwYXJ0cyA9IFtbXSwgW11dO1xuICAgICAgICAgIHVuZmlsbGVkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmZpbGxlZCA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKChsZW4gKyB3b3JkTGVuKSA8PSB0aGlzLm1heERpYWxvZ0xlbikge1xuICAgICAgICBwYXJ0c1t1bmZpbGxlZF0ucHVzaCh3b3JkKTtcbiAgICAgICAgbGVuICs9IHdvcmRMZW4gKyAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaWFsb2dQYXJ0cy5wdXNoKHRoaXMubWFrZVNlbnRlbmNlcyhwYXJ0cykpO1xuICB9XG5cbiAgbWFrZVNlbnRlbmNlcyhwYXJ0cykge1xuICAgIHJldHVybiBwYXJ0cy5tYXAoKHdvcmRzKSA9PiB7XG4gICAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluaXNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VyRGlhbG9nUGFydCA9PT0gKHRoaXMuZGlhbG9nUGFydHMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBhZHZhbmNlKCkge1xuICAgIGlmICghdGhpcy5oaWdobGlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICB0aGlzLmN1ckRpYWxvZ1BhcnQrKztcbiAgICB0aGlzLnNob3dIaWdobGlnaHQoKTtcbiAgfVxuXG4gIGhhc0RpYWxvZ05leHQoKSB7XG4gICAgICByZXR1cm4gISgodGhpcy5jdXJEaWFsb2dQYXJ0ICsgMSkgPT09IHRoaXMuZGlhbG9nUGFydHMubGVuZ3RoKTtcbiAgfVxuXG4gIHN0YXJ0SGlnaGxpZ2h0KGhpZ2hsaWdodCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuXG4gICAgdGhpcy5yZXNldERpYWxvZygpO1xuICAgIHRoaXMuYnJlYWtJbnRvRGlhbG9nUGFydHModGhpcy5oaWdobGlnaHQuY29tbWVudGFyeSk7XG5cbiAgICB0aGlzLnNob3dIaWdobGlnaHQodGhpcy5oaWdobGlnaHQpO1xuICB9XG5cbiAgc2hvd0hpZ2hsaWdodCgpIHtcbiAgICAvLyBvbGQgYW5pbWF0aW9uIHN0dWZmXG4gICAgLy90aGlzLiRsaW5lT25lLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgLy90aGlzLiRsaW5lVHdvLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG5cbiAgICB0aGlzLiRsaW5lT25lLnRleHQodGhpcy5kaWFsb2dQYXJ0c1t0aGlzLmN1ckRpYWxvZ1BhcnRdWzBdIHx8ICcnKTtcbiAgICB0aGlzLiRsaW5lVHdvLnRleHQodGhpcy5kaWFsb2dQYXJ0c1t0aGlzLmN1ckRpYWxvZ1BhcnRdWzFdIHx8ICcnKTtcblxuICAgIC8vIG9sZCBhbmltYXRpb24gc3R1ZmZcbiAgICAvL3RoaXMuJGxpbmVPbmUuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgIC8vdGhpcy4kbGluZVR3by5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gIH1cblxuICBzaG93Q29udHJvbChoYXNQcmV2LCBoYXNOZXh0KSB7XG4gICAgdGhpcy5oaWRlQ29udHJvbCgpO1xuICAgIHRoaXMuc2hvd1ByZXYoaGFzUHJldik7XG4gICAgdGhpcy5zaG93TmV4dChoYXNOZXh0KTtcbiAgfVxuXG4gIC8vIHNob3cgbmV4dCBhcnJvdyBpZjpcbiAgLy8gdGhlcmUgYXJlIHBhcnRzIGxlZnQgdG8gdGhpcyBoaWdobGlnaHRcbiAgLy8gdGhlcmUgYXJlIGhpZ2hsaWdodHMgbGVmdCB0byB0aGUgc3RvcnlcbiAgc2hvd05leHQoaGFzTmV4dCkge1xuICAgIGlmICh0aGlzLmhhc0RpYWxvZ05leHQoKSB8fCBoYXNOZXh0KSB7XG4gICAgICB0aGlzLiRjb250cm9sLmxhc3QoKS5hZGRDbGFzcygnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNob3cgcHJlIGFycm93IGlmOlxuICAvLyB0aGVyZSBhcmUgaGlnaGxpZ2h0cyBlYXJsaWVyIGluIHRoZSBzdG9yeVxuICBzaG93UHJldihoYXNQcmV2KSB7XG4gICAgaWYgKGhhc1ByZXYpIHtcbiAgICAgIHRoaXMuJGNvbnRyb2wuZmlyc3QoKS5hZGRDbGFzcygnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVDb250cm9sKCkge1xuICAgIHRoaXMuJGNvbnRyb2wucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlhbG9nO1xuXG4vLyBvbGQgYW5pbWF0aW9uIHN0dWZmXG4vKlxuY29uc3QgYW5pbWF0ZUhpZ2hsaWdodCA9IChoaWdobGlnaHQpID0+IHtcbiAgJGxpbmVPbmUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCBhbmltYXRlJyk7XG4gICRsaW5lVHdvLnJlbW92ZUNsYXNzKCdhbmltYXRpb24tZmluaXNoZWQgYW5pbWF0ZScpO1xuXG4gICRsaW5lT25lLnRleHQoaGlnaGxpZ2h0LmRpYWxvZ1BhcnRzW2hpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0XVswXSB8fCAnJyk7XG4gICRsaW5lVHdvLnRleHQoaGlnaGxpZ2h0LmRpYWxvZ1BhcnRzW2hpZ2hsaWdodC5jdXJEaWFsb2dQYXJ0XVsxXSB8fCAnJyk7XG5cbiAgaGlkZUNvbnRyb2woKTtcbiAgYW5pbWF0ZSgnb25lJyk7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKGxpbmUpID0+IHtcbiAgaWYgKGxpbmUgPT09ICdvbmUnKSB7XG4gICAgLy9zdG9wQW5pbWF0ZSgndHdvJyk7XG4gICAgJGxpbmVPbmUuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICBsaW5lT25lQW5pbWF0aW5nID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChsaW5lID09PSAndHdvJykge1xuICAgIC8vc3RvcEFuaW1hdGUoJ29uZScpO1xuICAgICRsaW5lVHdvLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgbGluZVR3b0FuaW1hdGluZyA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3BBbmltYXRlID0gKGxpbmUpID0+IHtcbiAgaWYgKGxpbmUgPT09ICdvbmUnKSB7XG4gICAgJGxpbmVPbmVcbiAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgIGxpbmVPbmVBbmltYXRpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChsaW5lID09PSAndHdvJykge1xuICAgICRsaW5lVHdvXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICBsaW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IG9uQW5pbUVuZCA9ICgpID0+IHtcbiAgLy8gY2hlY2sgZm9yIHRoZSBzZWNvbmQgYW5pbWF0aW9uIGZpcnN0IHNvIHRoZSBzZWNvbmQgYW5pbWF0aW9uXG4gIC8vIGRvZXNuJ3QgZ2V0IHRyaWdnZXJlZCB0aGVuIGltbWVkaWF0ZWx5IGVuZGVkIGluc2lkZSB0aGlzIGZ1bmNcbiAgaWYgKGxpbmVUd29BbmltYXRpbmcpIHtcbiAgICBzdG9wQW5pbWF0ZSgndHdvJyk7XG5cbiAgICBzaG93Q29udHJvbCgpO1xuICB9XG5cbiAgaWYgKGxpbmVPbmVBbmltYXRpbmcpIHtcbiAgICBzdG9wQW5pbWF0ZSgnb25lJyk7XG5cbiAgICAvLyBpZiB0aGVyZSdzIHRleHQgaW4gbGluZVR3bywgYW5pbWF0ZSBpdFxuICAgIGlmICgkbGluZVR3by50ZXh0KCkubGVuZ3RoKSB7XG4gICAgICBhbmltYXRlKCd0d28nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0NvbnRyb2woKTtcbiAgICB9XG4gIH1cbn07XG5cbiAgY29udGludWVIaWdobGlnaHQoaGlnaGxpZ2h0cykge1xuICAgIC8vdGhpcy5jdXIgPSBoaWdobGlnaHRzLmN1cjtcbiAgICAvL3RoaXMucHJldiA9IGhpZ2hsaWdodHMucHJldjtcbiAgICAvL3RoaXMubmV4dCA9IGhpZ2hsaWdodHMubmV4dDtcblxuICAgIGlmICghdGhpcy5oaWdobGlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKCF0aGlzLmhpZ2hsaWdodC5zdGFydGVkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgLy8gaWYgY3VycmVudGx5IGFuaW1hdGluZywgc2ltcGx5IGVuZCB0aGUgYW5pbWF0aW9uXG4gICAgaWYgKHRoaXMubGluZU9uZUFuaW1hdGluZykge1xuXG4gICAgICB0aGlzLiRsaW5lT25lXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYW5pbWF0ZScpXG4gICAgICAgIC5hZGRDbGFzcygnYW5pbWF0aW9uLWZpbmlzaGVkJyk7XG4gICAgICB0aGlzLmxpbmVPbmVBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGxpbmVUd29cbiAgICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlJylcbiAgICAgICAgLmFkZENsYXNzKCdhbmltYXRpb24tZmluaXNoZWQnKTtcbiAgICAgIHRoaXMubGluZVR3b0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93Q29udHJvbCgpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmxpbmVUd29BbmltYXRpbmcpIHtcblxuICAgICAgdGhpcy4kbGluZVR3b1xuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2FuaW1hdGlvbi1maW5pc2hlZCcpO1xuICAgICAgdGhpcy5saW5lVHdvQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dDb250cm9sKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJEaWFsb2dQYXJ0Kys7XG5cbiAgICAgIC8vIG5vIG1vcmUgdGV4dCB0byB0aGlzIGhpZ2hsaWdodFxuICAgICAgaWYgKHRoaXMuY3VyRGlhbG9nUGFydCA9PT0gdGhpcy5kaWFsb2dQYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBza2lwIGFuaW1hdGlvbnMgZm9yIG5vd1xuICAgICAgdGhpcy5zaG93SGlnaGxpZ2h0KCk7XG4gICAgICAvL2FuaW1hdGVIaWdobGlnaHQoY3VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldmVyc2VIaWdobGlnaHQoaGlnaGxpZ2h0cykge1xuICAgIHRoaXMuY3VyID0gaGlnaGxpZ2h0cy5jdXI7XG4gICAgdGhpcy5wcmV2ID0gaGlnaGxpZ2h0cy5wcmV2O1xuICAgIHRoaXMubmV4dCA9IGhpZ2hsaWdodHMubmV4dDtcblxuICAgIGlmICghdGhpcy5jdXIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKCF0aGlzLmN1ci5zdGFydGVkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgdGhpcy5jdXJEaWFsb2dQYXJ0LS07XG5cbiAgICAvLyBubyBtb3JlIHRleHQgdG8gdGhpcyBoaWdobGlnaHRcbiAgICBpZiAodGhpcy5jdXJEaWFsb2dQYXJ0ID09PSAtMSkge1xuICAgICAgdGhpcy5jdXJEaWFsb2dQYXJ0ID0gMDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dIaWdobGlnaHQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4qL1xuXG4iLCJjb25zdCBpbml0ID0gKCkgPT4ge1xuICAkKCcjZG93bmxvYWQtc3RvcnknKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgJCgnI2hpZ2hsaWdodHMtanNvbicpLmF0dHIoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShoaWdobGlnaHRzKSk7XG5cbiAgICBsZXQgdGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudCgkKCdodG1sJykucHJvcCgnb3V0ZXJIVE1MJykpO1xuICAgIGxldCBmaWxlbmFtZSA9ICdibGFzZWJhbGwtc3RvcnknO1xuXG4gICAgY29uc3QgJGdhbWVOYW1lID0gJCgnLmdhbWUtbmFtZScpO1xuXG4gICAgaWYgKCRnYW1lTmFtZS50ZXh0KCkpIHtcbiAgICAgIGZpbGVuYW1lID0gJGdhbWVOYW1lLnRleHQoKS5yZXBsYWNlKCcsJywgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnICcsICctJyk7XG4gICAgfVxuXG4gICAgZmlsZW5hbWUgKz0gJy5odG1sJztcblxuICAgIC8vIGRvd25sb2FkIGNvZGUgYWRhcHRlZCBmcm9tOlxuICAgIC8vIGh0dHBzOi8vb3VyY29kZXdvcmxkLmNvbS9hcnRpY2xlcy9yZWFkLzE4OS9ob3ctdG8tY3JlYXRlLWEtZmlsZS1hbmQtZ2VuZXJhdGUtYS1kb3dubG9hZC13aXRoLWphdmFzY3JpcHQtaW4tdGhlLWJyb3dzZXItd2l0aG91dC1hLXNlcnZlclxuICAgIGNvbnN0ICRkbEJ1dHRvbiA9ICQoJzxhPicpXG4gICAgICAuYXR0cignaHJlZicsIGBkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwke3RleHR9YClcbiAgICAgIC5hdHRyKCdkb3dubG9hZCcsIGZpbGVuYW1lKVxuICAgICAgLmNzcygnZGlzcGxheScsICdub25lJylcbiAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpO1xuXG4gICAgJGRsQnV0dG9uWzBdLmNsaWNrKCk7XG4gICAgJGRsQnV0dG9uLnJlbW92ZSgpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0LFxufTtcblxuIiwiY29uc3QgbWx1c3RhcmQgPSByZXF1aXJlKCdtbHVzdGFyZCcpO1xuXG5jb25zdCBIaWdobGlnaHQgPSByZXF1aXJlKCcuL2hpZ2hsaWdodCcpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5sZXQgZ2FtZUV2ZW50cyA9IHt9O1xubGV0IGhpZ2hsaWdodHMgPSBbXTtcblxuY29uc3QgZ2V0UmFuZG9tR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZXMgPSBbXG4gICAgLy8gaW50ZXJuZXQgc2VyaWVzIGNoYW1waW9uc2hpcCBnYW1lcywgc3RhcnRpbmcgc2Vhc29uIDJcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvOTdkODhiOWUtNDA2ZC00ZjMxLWExOGYtMmEzYjkwM2VkYzAzJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvYjM4ZTA5MTctNDNkYS00NzBjLWE3YmItNTcxMjM2OGEyNDkyJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNjI4YTJkZGItZjYwOC00MTFiLThkMmUtMjc2OGNkMzZkNThiJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNTJmNjI3NGUtZTBkYy00YzIzLTg3ZTgtNjg2ZjZkMmIyYmJmJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMTA1Mzg4NDAtMWY3Mi00YTkwLTk4ZTUtNzI0YTlkYzVkMDYxJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvOWQ4NTg5N2UtZTY4OS00ZWViLWIyYWUtYjY5Njc5YTNlYmM3JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvZWUzNWE4NjgtYjAwNC00NDlmLWE5OWMtNmE0MGNhNTRiMzgyJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMDY1NjZmOGQtM2QxNC00OTU2LWIwNTQtMzZkYzk4MWZkNTg5JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNzA0ZGRmMmYtM2ZlMi00OGIzLWI2NzQtYjk0NzY1ZjcwZDAxJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNDdiY2FjNDItZjY1MS00ZmM5LTlmOTMtNTU2N2E3YjEwZGFmJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMGYxOWQ3OGQtYzI3ZC00MTQ2LTg2M2QtYjU1ZTZkYWUxNjc5JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMTUwNmI4OGYtMWZlYS00YmExLTkyNTYtMWViYjAzMGNkY2FlJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvYjJjYWZkMjAtYTc5OS00OGY2LWFiZDctYzk5YmQ3OWE2YmQxJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMmJjNmU4NmUtOGQyNS00ZTM3LTkwMjYtNzgwZDhiNjk2OWM1JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvNDYyNDgxZjQtN2Y5Ny00NDFjLTlmYzktYzNkYzNjNTg0NGE0JyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvMTFhOGE3ZDMtNDYwYi00Yzk5LWE5OGEtYjBiZDFmNTc3MDczJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvODIzZGZjYjYtZGRkYi00M2Y0LTkwZmYtZWFjMDU4MjdhODJlJyxcbiAgICAnaHR0cHM6Ly9yZWJsYXNlLnNpYnIuZGV2L2dhbWUvZjdhZDc4MjYtY2E2ZS00OWMyLTgxOGUtMTkwNDA4YjA0NmZlJyxcblxuICAgIC8vIG90aGVyIGdhbWVzXG4gICAgLy8gczNkMTAwIChyaXYgbGFuZHJ5KVxuICAgICdodHRwczovL3JlYmxhc2Uuc2lici5kZXYvZ2FtZS9hYTFiN2ZkZS1mMDc3LTRlNGItODI1Zi0wZDE1MzhkMDI4MjInLFxuICBdO1xuXG4gIHJldHVybiBnYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZ2FtZXMubGVuZ3RoIC0gMSkpXTtcbn07XG5cbmNvbnN0IGlzUGxheUJhbGwgPSAoZ2FtZUV2KSA9PiB7XG4gIHJldHVybiBnYW1lRXYubGFzdFVwZGF0ZS5pbmRleE9mKCdQbGF5IGJhbGwnKSA+PSAwO1xufTtcblxuY29uc3QgZ2VuZXJhdGVIaWdobGlnaHRzID0gKGNiKSA9PiB7XG4gIC8vIHJlc2V0IGhpZ2hsaWdodHNcbiAgaGlnaGxpZ2h0cyA9IFtdO1xuXG4gICQoJy5nYW1lLWV2ZW50X19jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCcpLmVhY2goKF8sIGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpZCA9ICQoY2hlY2tlZCkuYXR0cignaWQnKTtcbiAgICBsZXQgdmlzdWFsID0gJ2RpYW1vbmQnO1xuXG4gICAgaWYgKGlzUGxheUJhbGwoZ2FtZUV2ZW50c1tpZF0uZXYuZGF0YSkpIHtcbiAgICAgIHZpc3VhbCA9ICdtYXRjaHVwJztcbiAgICB9XG5cbiAgICBjb25zdCBobCA9IG5ldyBIaWdobGlnaHQoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgZ2FtZUV2ZW50OiBnYW1lRXZlbnRzW2lkXS5ldixcbiAgICAgIG1sdXN0YXJkOiBnYW1lRXZlbnRzW2lkXS5tbHVzdGFyZCxcbiAgICAgIHZpc3VhbCxcbiAgICB9KTtcblxuICAgIGhpZ2hsaWdodHMucHVzaChobCk7XG4gIH0pO1xuXG4gIGNvbnNvbGUuZGVidWcoJ2dlbmVyYXRlSGlnaGxpZ2h0czonLCBoaWdobGlnaHRzKTtcbiAgY2IoaGlnaGxpZ2h0cyk7XG59O1xuXG5jb25zdCBtYWtlQ291bnRDaXJjbGUgPSAoY2xhc3NlcykgPT4ge1xuICByZXR1cm4gJCgnPHNwYW4+JykuYWRkQ2xhc3MoY2xhc3Nlcyk7XG59O1xuXG5jb25zdCByZW5kZXJHYW1lRXYgPSAoZ2FtZUV2LCAkY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBnYW1lRXYuZXYuZGF0YTtcblxuICBpZiAoIWRhdGEubGFzdFVwZGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBoYWxmLWlubmluZyBjaGFuZ2VzXG4gIGlmIChnYW1lRXYubWx1c3RhcmQuZ2FtZVN0YXR1cyA9PT0gJ2JlZm9yZUZpcnN0UGl0Y2gnKSB7XG4gICAgJCgnPGgzPicpXG4gICAgICAuYWRkQ2xhc3MoJ2lubmluZyBpbm5pbmctdG9wJylcbiAgICAgIC50ZXh0KGBUb3Agb2YgMWApXG4gICAgICAuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG4gIH0gZWxzZSBpZiAoZ2FtZUV2Lm1sdXN0YXJkLmdhbWVTdGF0dXMgPT09ICdmaXJzdEhhbGZJbm5pbmdTdGFydCcgJiYgZGF0YS5pbm5pbmcpIHtcbiAgICAkKCc8aDM+JylcbiAgICAgIC5hZGRDbGFzcygnaW5uaW5nIGlubmluZy10b3AnKVxuICAgICAgLnRleHQoYFRvcCBvZiAke2RhdGEuaW5uaW5nICsgMX1gKVxuICAgICAgLmFwcGVuZFRvKCRjb250YWluZXIpO1xuICB9IGVsc2UgaWYgKGdhbWVFdi5tbHVzdGFyZC5nYW1lU3RhdHVzID09PSAnc2Vjb25kSGFsZklubmluZ1N0YXJ0Jykge1xuICAgICQoJzxoMz4nKVxuICAgICAgLmFkZENsYXNzKCdpbm5pbmcgaW5uaW5nLWJvdHRvbScpXG4gICAgICAudGV4dChgQm90dG9tIG9mICR7ZGF0YS5pbm5pbmcgKyAxfWApXG4gICAgICAuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG4gIH1cblxuICBjb25zdCAkZ2FtZUV2ID0gJCgnPGRpdj4nKTtcblxuICAvLyBmb3JtIHN0dWZmXG4gIGNvbnN0ICRjaENvbnRhaW5lciA9ICQoJzxkaXY+Jyk7XG4gIGNvbnN0ICRjaGVjayA9ICQoJzxpbnB1dD4nKTtcbiAgY29uc3QgJGxhYmVsID0gJCgnPGxhYmVsPicpO1xuXG4gIGxldCB1cGRhdGUgPSBgJHtkYXRhLmxhc3RVcGRhdGV9ICR7ZGF0YS5zY29yZVVwZGF0ZSB8fCAnJ31gO1xuXG4gICRjaGVja1xuICAgIC5hZGRDbGFzcygnZ2FtZS1ldmVudF9fY2hlY2snKVxuICAgIC5hdHRyKCdpZCcsIGdhbWVFdi5ldi5oYXNoKVxuICAgIC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICAuYXR0cignbmFtZScsICdnYW1lIGV2ZW50JylcbiAgICAudmFsKCcnKTtcblxuICAkbGFiZWxcbiAgICAuYWRkQ2xhc3MoJycpXG4gICAgLmF0dHIoJ2ZvcicsIGdhbWVFdi5ldi5oYXNoKVxuICAgIC50ZXh0KHVwZGF0ZSk7XG5cbiAgJGNoQ29udGFpbmVyXG4gICAgLmFkZENsYXNzKCcnKVxuICAgIC5hcHBlbmQoJGNoZWNrKVxuICAgIC5hcHBlbmQoJGxhYmVsKTtcblxuICAvLyBnYW1lIGV2ZW50IGluZm9cbiAgY29uc3QgJGdhbWVFdkluZm8gPSAkKCc8ZGl2PicpO1xuICBjb25zdCAkc2NvcmUgPSAkKCc8c3Bhbj4nKTtcbiAgY29uc3QgJGJhc2VzID0gJCgnPHNwYW4+Jyk7XG4gIGNvbnN0ICRiYWxscyA9ICQoJzxzcGFuPicpO1xuICBjb25zdCAkc3RyaWtlcyA9ICQoJzxzcGFuPicpO1xuICBjb25zdCAkb3V0cyA9ICQoJzxzcGFuPicpO1xuXG4gIGxldCBob21lRW1vamkgPSB1dGlsLmdldEVtb2ppKCdob21lJywgZGF0YSk7XG4gIGxldCBhd2F5RW1vamkgPSB1dGlsLmdldEVtb2ppKCdhd2F5JywgZGF0YSk7XG5cbiAgbGV0IHNjb3JlID0gYCR7aG9tZUVtb2ppfSAke2RhdGEuaG9tZVNjb3JlfSA6ICR7YXdheUVtb2ppfSAke2RhdGEuYXdheVNjb3JlfWA7XG4gIGxldCBiYXNlcyA9ICcnO1xuXG4gIC8vIGZpbGwgaW4gYmFsbHMgY291bnRcbiAgZm9yIChsZXQgYmFsbCA9IDA7IGJhbGwgPCBkYXRhLmF0QmF0QmFsbHM7IGJhbGwrKykge1xuICAgICRiYWxscy5hcHBlbmQobWFrZUNvdW50Q2lyY2xlKCdjaXJjbGUgZnVsbCcpKTtcbiAgfVxuXG4gIGZvciAobGV0IGJhbGwgPSAzOyBiYWxsID4gZGF0YS5hdEJhdEJhbGxzOyBiYWxsLS0pIHtcbiAgICAkYmFsbHMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGVtcHR5JykpO1xuICB9XG5cbiAgLy8gZmlsbCBpbiBzdHJpa2VzIGNvdW50XG4gIGZvciAobGV0IHN0cmlrZSA9IDA7IHN0cmlrZSA8IGRhdGEuYXRCYXRTdHJpa2VzOyBzdHJpa2UrKykge1xuICAgICRzdHJpa2VzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBmdWxsJykpO1xuICB9XG5cbiAgZm9yIChsZXQgc3RyaWtlID0gMjsgc3RyaWtlID4gZGF0YS5hdEJhdFN0cmlrZXM7IHN0cmlrZS0tKSB7XG4gICAgJHN0cmlrZXMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGVtcHR5JykpO1xuICB9XG5cbiAgLy8gZmlsbCBpbiBvdXRzIGNvdW50XG4gIGZvciAobGV0IG91dCA9IDA7IG91dCA8IGRhdGEuaGFsZklubmluZ091dHM7IG91dCsrKSB7XG4gICAgJG91dHMuYXBwZW5kKG1ha2VDb3VudENpcmNsZSgnY2lyY2xlIGZ1bGwnKSk7XG4gIH1cblxuICBmb3IgKGxldCBvdXQgPSAyOyBvdXQgPiBkYXRhLmhhbGZJbm5pbmdPdXRzOyBvdXQtLSkge1xuICAgICRvdXRzLmFwcGVuZChtYWtlQ291bnRDaXJjbGUoJ2NpcmNsZSBlbXB0eScpKTtcbiAgfVxuXG4gIC8vIGZpbGwgaW4gYmFzZSBkaWFtb25kc1xuICAkYmFzZXMuYXBwZW5kKHV0aWwubWFrZUJhc2VEaWFtb25kKGdhbWVFdi5tbHVzdGFyZC5iYXNlUnVubmVycy50aGlyZC5wbGF5ZXJOYW1lKSk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQoZ2FtZUV2Lm1sdXN0YXJkLmJhc2VSdW5uZXJzLnNlY29uZC5wbGF5ZXJOYW1lKSk7XG4gICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQoZ2FtZUV2Lm1sdXN0YXJkLmJhc2VSdW5uZXJzLmZpcnN0LnBsYXllck5hbWUpKTtcbiAgLy8gdG9kbzogZGVhbCB3aXRoIDQgYmFzZXNcbiAgLy8kYmFzZXMuYXBwZW5kKG1ha2VCYXNlRGlhbW9uZChnYW1lRXYubWx1c3RhcmQuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuXG4gICRzY29yZVxuICAgIC50ZXh0KHNjb3JlKTtcbiAgJGJhbGxzXG4gICAgLmF0dHIoJ3RpdGxlJywgJ0JhbGxzJylcbiAgICAuYWRkQ2xhc3MoJ2JhbGxzLWNvdW50Jyk7XG4gICRzdHJpa2VzXG4gICAgLmF0dHIoJ3RpdGxlJywgJ1N0cmlrZXMnKVxuICAgIC5hZGRDbGFzcygnc3RyaWtlcy1jb3VudCcpO1xuICAkb3V0c1xuICAgIC5hdHRyKCd0aXRsZScsICdPdXRzJylcbiAgICAuYWRkQ2xhc3MoJ291dHMtY291bnQnKTtcbiAgJGJhc2VzXG4gICAgLmF0dHIoJ3RpdGxlJywgJ0Jhc2VzIG9jY3VwaWVkJylcbiAgICAuYWRkQ2xhc3MoJ2Jhc2VzLW9jY3VwaWVkJyk7XG5cbiAgJGdhbWVFdkluZm9cbiAgICAuYWRkQ2xhc3MoJ2dhbWUtc3RhdHVzJylcbiAgICAuYXBwZW5kKCRzY29yZSlcbiAgICAuYXBwZW5kKCRiYXNlcylcbiAgICAuYXBwZW5kKCRiYWxscylcbiAgICAuYXBwZW5kKCRzdHJpa2VzKVxuICAgIC5hcHBlbmQoJG91dHMpO1xuXG4gIGxldCBjb250YWluZXJDbGFzc2VzID0gWydnYW1lLWV2ZW50X19jb250YWluZXInXTtcblxuICAvLyBoaWdobGlnaHQgaW50ZXJlc3RpbmcgZXZlbnRzXG4gIC8vIHRvZG86IHdoZW4gcmVmYWN0b3JpbmcgdGhpcyB3aG9sZSBjdXJzZWQgZmlsZSwgYWxzbyBkb24ndCBkbyBzbyBtYW55XG4gIC8vIGRvbSBsb29rdXBzIGhlcmVcbiAgaWYgKGdhbWVFdi5tbHVzdGFyZC5vdXQgJiYgZ2FtZUV2Lm1sdXN0YXJkLm91dE1ldGEua2luZCA9PT0gJ3N0cmlrZScpIHtcblxuICAgIGNvbnRhaW5lckNsYXNzZXMucHVzaCgnaW50ZXJlc3Rpbmcgc3RyaWtlb3V0Jyk7XG4gICAgJCgnLnNjcm9sbC10by5zdHJpa2VvdXQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgfVxuXG4gIGlmIChnYW1lRXYubWx1c3RhcmQuaGl0KSB7XG5cbiAgICBjb250YWluZXJDbGFzc2VzLnB1c2goJ2ludGVyZXN0aW5nIGhpdCcpO1xuICAgICQoJy5zY3JvbGwtdG8uaGl0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gIH1cblxuICBpZiAoZ2FtZUV2Lm1sdXN0YXJkLnN0ZWFsICYmIGdhbWVFdi5tbHVzdGFyZC5zdGVhbE1ldGEuc3VjY2Vzcykge1xuXG4gICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKCdpbnRlcmVzdGluZyBzdGVhbCcpO1xuICAgICQoJy5zY3JvbGwtdG8uc3RlYWwnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgfVxuXG4gIGlmIChnYW1lRXYubWx1c3RhcmQuc3BlY2lhbCkge1xuXG4gICAgY29udGFpbmVyQ2xhc3Nlcy5wdXNoKCdpbnRlcmVzdGluZyBzcGVjaWFsJyk7XG4gICAgJCgnLnNjcm9sbC10by5zcGVjaWFsJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gIH1cblxuICBpZiAoZ2FtZUV2Lm1sdXN0YXJkLm1heGltdW1CbGFzZWJhbGwpIHtcblxuICAgIGNvbnRhaW5lckNsYXNzZXMucHVzaCgnaW50ZXJlc3RpbmcgbWF4Jyk7XG4gICAgJCgnLnNjcm9sbC10by5tYXgnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgfVxuXG4gIGlmIChnYW1lRXYubWx1c3RhcmQucnVuc1Njb3JlZCB8fCBnYW1lRXYubWx1c3RhcmQudW5ydW5zU2NvcmVkKSB7XG5cbiAgICBjb250YWluZXJDbGFzc2VzLnB1c2goJ2ludGVyZXN0aW5nIHNjb3JlJyk7XG4gICAgJCgnLnNjcm9sbC10by5zY29yZScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICB9XG5cbiAgJGdhbWVFdlxuICAgIC5hZGRDbGFzcyhjb250YWluZXJDbGFzc2VzKVxuICAgIC5hcHBlbmQoJGNoQ29udGFpbmVyKVxuICAgIC5hcHBlbmQoJGdhbWVFdkluZm8pO1xuXG4gIHJldHVybiAkZ2FtZUV2O1xufTtcblxuY29uc3QgcmVuZGVyR2FtZUV2cyA9ICgpID0+IHtcbiAgc3RvcExvYWRpbmcoKTtcbiAgJCgnLmdhbWUtZXZlbnRzX19jb250YWluZXInKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICQoJy5nYW1lLWV2ZW50c19faW5mbycpLmFkZENsYXNzKCdkLW5vbmUnKTtcblxuICBjb25zdCAkY29udGFpbmVyID0gJCgnI2dhbWUtZXZlbnRzX19mb3JtLWl0ZW1zJyk7XG5cbiAgLy8gc2V0IGdhbWUgdGl0bGUgYW5kIG1hdGNodXBcbiAgbGV0IGhlYWRlclJlbmRlcmVkID0gZmFsc2U7XG4gIC8vIGdvdHRhIHJlbmRlciBzb21lIGdlbmVyYWwgc3R1ZmYgdG9vIChob21lIHZzIGF3YXksIHMjZCMsIHdlYXRoZXIpXG4gIC8vIGFsc286IGxhYmVsIGZvciB0aGUgc2VsZWN0LCBhbmQgdGhlIHNlbGVjdCBpdHNlbGZcbiAgZm9yIChsZXQgaWQgaW4gZ2FtZUV2ZW50cykge1xuICAgIGxldCBnYW1lRXYgPSBnYW1lRXZlbnRzW2lkXTtcblxuICAgIGlmICghaGVhZGVyUmVuZGVyZWQgJiYgZ2FtZUV2LmV2LmRhdGEuaG9tZVBpdGNoZXJOYW1lICYmIGdhbWVFdi5ldi5kYXRhLmF3YXlQaXRjaGVyTmFtZSkge1xuICAgICAgbGV0IGhvbWVFbW9qaSA9IHV0aWwuZ2V0RW1vamkoJ2hvbWUnLCBnYW1lRXYuZXYuZGF0YSk7XG4gICAgICBsZXQgYXdheUVtb2ppID0gdXRpbC5nZXRFbW9qaSgnYXdheScsIGdhbWVFdi5ldi5kYXRhKTtcblxuICAgICAgJCgnLmdhbWUtZXZlbnRzX19nYW1lLWhlYWRlciAuZ2FtZS1uYW1lJylcbiAgICAgICAgLnRleHQoYFNlYXNvbiAke2dhbWVFdi5ldi5kYXRhLnNlYXNvbiArIDF9LCBEYXkgJHtnYW1lRXYuZXYuZGF0YS5kYXkgKyAxfWApO1xuICAgICAgJCgnLmdhbWUtZXZlbnRzX19nYW1lLWhlYWRlciAubWF0Y2h1cCcpXG4gICAgICAgIC50ZXh0KGAke2dhbWVFdi5ldi5kYXRhLmhvbWVUZWFtTmFtZX0gdnMuICR7Z2FtZUV2LmV2LmRhdGEuYXdheVRlYW1OYW1lfWApO1xuICAgICAgJCgnLmdhbWUtZXZlbnRzX19nYW1lLXN1YmhlYWRlciAuaG9tZS1waXRjaGVyJylcbiAgICAgICAgLnRleHQoYCR7aG9tZUVtb2ppfSAke2dhbWVFdi5ldi5kYXRhLmhvbWVQaXRjaGVyTmFtZX1gKTtcbiAgICAgICQoJy5nYW1lLWV2ZW50c19fZ2FtZS1zdWJoZWFkZXIgLmF3YXktcGl0Y2hlcicpXG4gICAgICAgIC50ZXh0KGAke2F3YXlFbW9qaX0gJHtnYW1lRXYuZXYuZGF0YS5hd2F5UGl0Y2hlck5hbWV9YCk7XG4gICAgICBoZWFkZXJSZW5kZXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0ICRnYW1lRXYgPSByZW5kZXJHYW1lRXYoZ2FtZUV2LCAkY29udGFpbmVyKTtcblxuICAgIGlmICgkZ2FtZUV2KSB7XG4gICAgICAkY29udGFpbmVyLmFwcGVuZCgkZ2FtZUV2KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdldEdhbWVFdmVudHMgPSAoZ2FtZUlkLCBuZXh0UGFnZSkgPT4ge1xuICBsZXQgZ2FtZXNVUkwgPSBgaHR0cHM6Ly9hcGkuc2lici5kZXYvY2hyb25pY2xlci92MS9nYW1lcy91cGRhdGVzP2dhbWU9JHtnYW1lSWR9YDtcblxuICBpZiAobmV4dFBhZ2UpIHtcbiAgICBnYW1lc1VSTCArPSBgJnBhZ2U9JHtuZXh0UGFnZX1gO1xuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk7XG5cbiAgZmV0Y2goZ2FtZXNVUkwpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCByZXNwb25zZSBmcm9tIHNlcnZlcicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZm9yIChsZXQgZ2FtZUV2IG9mIGRhdGEuZGF0YSkge1xuICAgICAgICBnYW1lRXZlbnRzW2dhbWVFdi5oYXNoXSA9IHtcbiAgICAgICAgICBldjogZ2FtZUV2LFxuICAgICAgICAgIG1sdXN0YXJkOiBtbHVzdGFyZC5hbmFseXplR2FtZUV2ZW50KGdhbWVFdi5kYXRhKSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEubmV4dFBhZ2UpIHtcbiAgICAgICAgZ2V0R2FtZUV2ZW50cyhnYW1lSWQsIGRhdGEubmV4dFBhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG9uZSBsb2FkaW5nIGFsbCBnYW1lIGV2ZW50c1xuICAgICAgICByZW5kZXJHYW1lRXZzKCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2dldEdhbWVFdmVudHMgZG9uZTonLCBnYW1lRXZlbnRzKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAkKCcjZ2FtZS1sb2FkLWZvcm0gLmVycm9yLW1zZycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIHN0b3BMb2FkaW5nKCk7XG4gICAgfSk7XG5cbn07XG5cbmNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgJGdhbWVFdkZvcm0gPSAkKCcjZ2FtZS1sb2FkLWZvcm0nKTtcblxuICAkZ2FtZUV2Rm9ybS5maW5kKCcuZXJyb3ItbXNnJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkZ2FtZUV2Rm9ybS5maW5kKCdidXR0b24nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICRnYW1lRXZGb3JtLmZpbmQoJy5sb2FkaW5nJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xufTtcblxuY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0ICRnYW1lRXZGb3JtID0gJCgnI2dhbWUtbG9hZC1mb3JtJyk7XG5cbiAgJGdhbWVFdkZvcm0uZmluZCgnYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkZ2FtZUV2Rm9ybS5maW5kKCcubG9hZGluZycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbn07XG5cbi8vIHRvZG86IHdpbGwgc2VuZCBoaWdobGlnaHRzIGRhdGEgdG8gZmxhc2sgdG8gc2F2ZVxuY29uc3Qgc2F2ZUhpZ2hsaWdodHMgPSAoKSA9PiB7XG59O1xuXG5jb25zdCBpbml0ID0gKG9uUHJldmlldykgPT4ge1xuICBjb25zdCAkZ2FtZUV2Rm9ybSA9ICQoJyNnYW1lLWxvYWQtZm9ybScpO1xuICBjb25zdCAkZ2FtZUlucHV0ID0gJCgnI2dhbWUtbG9hZC1mb3JtX19nYW1lLWlkJyk7XG5cbiAgLy8gZm9jdXMgb24gZ2FtZSBpbnB1dFxuICAkZ2FtZUlucHV0LmZvY3VzKCk7XG5cbiAgLy8gcGljayBhIHJhbmRvbSBpbnRlcmVzdGluZyBnYW1lIGFzIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGlucHV0XG4gICRnYW1lSW5wdXQuYXR0cigncGxhY2Vob2xkZXInLCBnZXRSYW5kb21HYW1lKCkpO1xuXG4gICRnYW1lRXZGb3JtLm9uKCdzdWJtaXQnLCAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGdhbWVWYWwgPSAkZ2FtZUlucHV0LnZhbCgpO1xuXG4gICAgaWYgKCFnYW1lVmFsKSB7XG4gICAgICBnYW1lVmFsID0gJGdhbWVJbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVJZCA9IGdhbWVWYWwuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICBnZXRHYW1lRXZlbnRzKGdhbWVJZCk7XG4gIH0pO1xuXG4gIGNvbnN0ICRoaWdobGlnaHRzU2VsZWN0Rm9ybSA9ICQoJyNnYW1lLWV2ZW50c19fZm9ybScpO1xuXG4gICRoaWdobGlnaHRzU2VsZWN0Rm9ybS5vbignc3VibWl0JywgKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBzYXZlSGlnaGxpZ2h0cygpO1xuICAgIC8vZ2VuZXJhdGVIaWdobGlnaHRzKG9uUHJldmlldyk7XG4gIH0pO1xuXG4gICRoaWdobGlnaHRzU2VsZWN0Rm9ybS5maW5kKCcucHJldmlldy1zdG9yeScpLm9uKCdjbGljaycsIChldikgPT4ge1xuICAgIGdlbmVyYXRlSGlnaGxpZ2h0cyhvblByZXZpZXcpO1xuICB9KTtcblxuICBjb25zdCAkY2hlY2tBbGwgPSAkKCcjY2hlY2stYWxsJyk7XG5cbiAgJCgnI2NoZWNrLWFsbCcpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgbGV0IHN0YXRlID0gJGNoZWNrQWxsLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgJCgnLmdhbWUtZXZlbnRfX2NoZWNrJykuZWFjaCgoXywgY2gpID0+IHtcbiAgICAgICQoY2gpLmF0dHIoJ2NoZWNrZWQnLCBzdGF0ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0ICRzdGF0dXNUb2dnbGUgPSAkKCcuZ2FtZS1ldmVudHMtY29udHJvbF9fc3RhdHVzJyk7XG5cbiAgJHN0YXR1c1RvZ2dsZS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoZXZ0LnRhcmdldCk7XG4gICAgY29uc3QgJGZvcm1JdGVtcyA9ICQoJyNnYW1lLWV2ZW50c19fZm9ybS1pdGVtcycpO1xuXG4gICAgaWYgKCRidXR0b24uaGFzQ2xhc3MoJ2hpZGUtc3RhdHVzJykpIHtcblxuICAgICAgJGJ1dHRvbi5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAkc3RhdHVzVG9nZ2xlLmZpbmQoJy5zaG93LXN0YXR1cycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICRmb3JtSXRlbXMucmVtb3ZlQ2xhc3MoJ3Nob3ctc3RhdHVzJyk7XG5cbiAgICB9IGVsc2UgaWYgKCRidXR0b24uaGFzQ2xhc3MoJ3Nob3ctc3RhdHVzJykpIHtcblxuICAgICAgJGJ1dHRvbi5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAkc3RhdHVzVG9nZ2xlLmZpbmQoJy5oaWRlLXN0YXR1cycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgICRmb3JtSXRlbXMuYWRkQ2xhc3MoJ3Nob3ctc3RhdHVzJyk7XG5cbiAgICB9XG4gIH0pO1xuXG4gICQoJy5zY3JvbGwtdG8nKS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgY29uc3QgJGJ1dHRvbiA9ICQoZXZ0LnRhcmdldCk7XG4gICAgY29uc3QgJGl0ZW1zQ29udGFpbmVyID0gJCgnI2dhbWUtZXZlbnRzX19mb3JtLWl0ZW1zJylcbiAgICBjb25zdCBjb250YWluZXJPZmZUb3AgPSAkaXRlbXNDb250YWluZXIub2Zmc2V0KCkudG9wO1xuICAgIGNvbnN0ICRpdGVtcyA9ICRpdGVtc0NvbnRhaW5lci5jaGlsZHJlbigpO1xuXG4gICAgbGV0IGxvb2t1cCA9ICcuaW50ZXJlc3RpbmcnO1xuXG4gICAgaWYgKCRidXR0b24uaGFzQ2xhc3MoJ3N0cmlrZW91dCcpKSB7XG4gICAgICBsb29rdXAgKz0gJy5zdHJpa2VvdXQnO1xuICAgIH0gZWxzZSBpZiAoJGJ1dHRvbi5oYXNDbGFzcygnaGl0JykpIHtcbiAgICAgIGxvb2t1cCArPSAnLmhpdCc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdzdGVhbCcpKSB7XG4gICAgICBsb29rdXAgKz0gJy5zdGVhbCc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdzcGVjaWFsJykpIHtcbiAgICAgIGxvb2t1cCArPSAnLnNwZWNpYWwnO1xuICAgIH0gZWxzZSBpZiAoJGJ1dHRvbi5oYXNDbGFzcygnbWF4JykpIHtcbiAgICAgIGxvb2t1cCArPSAnLm1heCc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdzY29yZScpKSB7XG4gICAgICBsb29rdXAgKz0gJy5zY29yZSc7XG4gICAgfSBlbHNlIGlmICgkYnV0dG9uLmhhc0NsYXNzKCdpbm5pbmcnKSkge1xuICAgICAgbG9va3VwID0gJyNnYW1lLWV2ZW50c19fZm9ybSAuaW5uaW5nJztcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgZm9ybSBoYXNuJ3QgYmVlbiBzY3JvbGxlZCBtdWNoLCBzZWFyY2ggZnJvbSB0aGUgZmlyc3QgZXZlbnRcbiAgICAvLyBvdGhlcndpc2UsIHNlYXJjaCBmcm9tIGZpcnN0IGVsZW1lbnQgaW4gdmlldyBvbndhcmRzXG4gICAgbGV0ICRmaXJzdEluVmlldyA9ICRpdGVtcy5maWx0ZXIoKF8sIGVsKSA9PiB7XG4gICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgIHJldHVybiAoJGVsLm9mZnNldCgpLnRvcCAtIGNvbnRhaW5lck9mZlRvcCkgPiAwICYmICgkZWwub2Zmc2V0KCkudG9wIC0gY29udGFpbmVyT2ZmVG9wIDwgMTAwKTtcbiAgICAgIC8vIHRoZSAxMDAgaXMgaGFyZC1jb2RlZCBoZXJlOyBpdCdzIHJvdWdobHkgdGhlIGhlaWdodCBvZiBlYWNoICRlbFxuICAgICAgLy8geWVzLiB0aGlzIGlzIHByb2JhYmx5IHN1cGVyIGN1cnNlZC5cbiAgICB9KTtcblxuICAgIGlmICghJGZpcnN0SW5WaWV3Lmxlbmd0aCkge1xuICAgICAgJGZpcnN0SW5WaWV3ID0gJGl0ZW1zLmZpcnN0KCk7XG4gICAgfVxuXG4gICAgLy8gbG9vayBmb3IgbmV4dCBzaWJsaW5nIHRoYXQgbWF0Y2hlcyB0aGUgdHlwZSB3ZSdyZSBsb29raW5nIGZvclxuICAgIGxldCAkbG9va3VwID0gJGZpcnN0SW5WaWV3Lm5leHRBbGwobG9va3VwKS5maXJzdCgpO1xuXG4gICAgLy8gaWYgdGhlcmUncyBubyBtYXRjaCBsb29raW5nIGZvcndhcmQsIGxvb3AgZnJvbSB0aGUgdG9wXG4gICAgaWYgKCEkbG9va3VwLmxlbmd0aCkge1xuICAgICAgJGxvb2t1cCA9ICQobG9va3VwKS5maXJzdCgpO1xuICAgIH1cblxuICAgICRpdGVtc0NvbnRhaW5lclxuICAgICAgLnNjcm9sbFRvcCgwKVxuICAgICAgLnNjcm9sbFRvcCgkbG9va3VwLm9mZnNldCgpLnRvcCAtIGNvbnRhaW5lck9mZlRvcCk7XG4gIH0pO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCxcbn07XG5cbiIsImNvbnN0IGdyYW5kU2xhbGFtaSA9IHJlcXVpcmUoJ2dyYW5kLXNsYWxhbWknKTtcblxuY2xhc3MgSGlnaGxpZ2h0IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICBzZXR0aW5ncyA9IHNldHRpbmdzIHx8IHt9O1xuXG4gICAgdGhpcy5pZCA9IHNldHRpbmdzLmlkO1xuICAgIHRoaXMuZ2FtZUV2ZW50ID0gc2V0dGluZ3MuZ2FtZUV2ZW50O1xuICAgIHRoaXMubWx1c3RhcmQgPSBzZXR0aW5ncy5tbHVzdGFyZDtcbiAgICB0aGlzLnZpc3VhbCA9IHNldHRpbmdzLnZpc3VhbDtcbiAgICB0aGlzLmNvbW1lbnRhcnkgPSBzZXR0aW5ncy5jb21tZW50YXJ5IHx8IHRoaXMuZ2VuZXJhdGVDb21tZW50YXJ5KCk7XG4gIH1cblxuICBnZW5lcmF0ZUNvbW1lbnRhcnkoKSB7XG4gICAgLy8gZm9yIGVhcmx2ZXJzaW9uOiBza2lwIGdyYW5kIHNsYWxhbWksIGp1c3QgcmV0dXJuIG9yaWdpbmFsIGxhc3RVcGRhdGUgK1xuICAgIC8vIHNjb3JlVXBkYXRlIGlmIHByZXNlbnRcblxuICAgIGxldCByZXQgPSAnJztcblxuICAgIGlmICh0aGlzLmdhbWVFdmVudC5kYXRhLmxhc3RVcGRhdGUpIHtcbiAgICAgIHJldCArPSB0aGlzLmdhbWVFdmVudC5kYXRhLmxhc3RVcGRhdGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2FtZUV2ZW50LmRhdGEuc2NvcmVVcGRhdGUpIHtcbiAgICAgIHJldCArPSBgXFxuJHt0aGlzLmdhbWVFdmVudC5kYXRhLnNjb3JlVXBkYXRlfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcblxuICAgIC8vcmV0dXJuIGdyYW5kU2xhbGFtaS5nZXRDb21tZW50KHtcbiAgICAgIC8vZ2FtZUV2ZW50OiBnYW1lRXZlbnQuZGF0YSxcbiAgICAgIC8vbWx1c3RhcmQ6IG1sdXN0YXJkLFxuICAgIC8vfSk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhpZ2hsaWdodDtcblxuIiwiY29uc3QgZ2FtZUV2ZW50U2VsZWN0b3IgPSByZXF1aXJlKCcuL2dhbWUtZXZlbnQtc2VsZWN0b3InKTtcbmNvbnN0IFN0b3J5ID0gcmVxdWlyZSgnLi9zdG9yeScpO1xuY29uc3QgZG93bmxvYWRlciA9IHJlcXVpcmUoJy4vZG93bmxvYWRlcicpO1xuXG5sZXQgc3Rvcnk7XG5cbmNvbnN0IG9uUHJldmlldyA9IChobHMpID0+IHtcblxuICBzdG9yeSA9IG5ldyBTdG9yeSh7XG4gICAgaGlnaGxpZ2h0czogaGxzLFxuICB9KTtcblxuICAkKCcjZ2FtZS1sb2FkJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcjZ2FtZS1ldmVudHMnKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICQoJyNleGl0LXByZXZpZXcnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG5cbiAgc3Rvcnkuc3RhcnQoKTtcbn07XG5cbmNvbnN0IGV4aXRQcmV2aWV3ID0gKCkgPT4ge1xuICAkKCcjZXhpdC1wcmV2aWV3JykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcjZ2FtZS1sb2FkJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAkKCcjZ2FtZS1ldmVudHMnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIHN0b3J5LnN0b3AoKTtcbn07XG5cbmNvbnN0IGluaXRBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGhpZ2hsaWdodHNEYXRhID0gJCgnI2hpZ2hsaWdodHMtanNvbicpLmF0dHIoJ2RhdGEnKTtcblxuICAvLyBza2lwIGZpcnN0IHN0ZXBzIGFuZCBnbyBzdHJhaWdodCB0byBzaG93aW5nIHRoZSByZWVsIGlmIGl0J3MgYSBwdWJsaXNoZWRcbiAgLy8gc3RvcnlcbiAgaWYgKGhpZ2hsaWdodHNEYXRhLmxlbmd0aCkge1xuICAgIG9uUHJldmlldyhKU09OLnBhcnNlKGhpZ2hsaWdodHNEYXRhKSk7XG4gICAgLy9oaWdobGlnaHRzID0gSlNPTi5wYXJzZShoaWdobGlnaHRzRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUV2ZW50U2VsZWN0b3IuaW5pdChvblByZXZpZXcpO1xuICAgIC8vZG93bmxvYWRlci5pbml0KCk7XG4gIH1cblxuICAkKCcjZXhpdC1wcmV2aWV3Jykub24oJ2NsaWNrJywgZXhpdFByZXZpZXcpO1xufTtcblxuaW5pdEFwcCgpO1xuXG4iLCJjb25zdCBWaXN1YWwgPSByZXF1aXJlKCcuL3Zpc3VhbCcpO1xuY29uc3QgRGlhbG9nID0gcmVxdWlyZSgnLi9kaWFsb2cnKTtcbmNvbnN0IHRlYW1zRGF0YSA9IHJlcXVpcmUoJy4uL2xpYi90ZWFtcy1kYXRhJyk7XG5cbmNsYXNzIFN0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcbiAgICB0aGlzLmhpZ2hsaWdodHMgPSBzZXR0aW5ncy5oaWdobGlnaHRzIHx8IFtdO1xuICAgIHRoaXMuY3VySGlnaGxpZ2h0ID0gMDtcbiAgICB0aGlzLmRpYWxvZyA9IG5ldyBEaWFsb2coKTtcbiAgICB0aGlzLnZpc3VhbCA9IG5ldyBWaXN1YWwoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgICQoJyN2aXN1YWxzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICQoJyNoaWdobGlnaHRzLWRpYWxvZ19fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgLy8gZm9jdXMgb24gdGhlIGJvZHkgc28gYXJyb3cga2V5dXBzIGNhbiBiZSByZWdpc3RlcmVkXG4gICAgJCgnYm9keScpLmZvY3VzKCk7XG5cbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgaGFuZGxlQWN0aW9uID0gKGV2dCkgPT4ge1xuICAgICAgbGV0IGRpcmVjdGlvbjtcblxuICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5dXAnKSB7XG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gMzcpIHsgLy8gYXJyb3cgbGVmdFxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBjbGlja1xuICAgICAgICBpZiAoJChldnQudGFyZ2V0KS5hdHRyKCdpZCcpID09PSAnaGlnaGxpZ2h0cy1kaWFsb2dfX25leHQnKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gJ25leHQnO1xuICAgICAgICB9IGVsc2UgaWYgKCQoZXZ0LnRhcmdldCkuYXR0cignaWQnKSA9PT0gJ2hpZ2hsaWdodHMtZGlhbG9nX19wcmV2Jykge1xuICAgICAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5kb1N0ZXAoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCBoYW5kbGVBY3Rpb24pO1xuICAgICQoJy5kaWFsb2ctY29udHJvbCcpLm9uKCdjbGljaycsIGhhbmRsZUFjdGlvbik7XG5cbiAgICAvLyBzaG93IHRoZSBmaXJzdCBoaWdobGlnaHRcbiAgICB0aGlzLnN0YXJ0Q3VycmVudCgpO1xuICB9XG5cbiAgZG9TdGVwKGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuXG4gICAgICBpZiAodGhpcy5kaWFsb2cuZmluaXNoZWQoKSkge1xuICAgICAgICB0aGlzLm1vdmVUb05leHRIaWdobGlnaHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWR2YW5jZURpYWxvZygpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHsgLy8gZGlyZWN0aW9uID09PSAncHJldidcbiAgICAgIHRoaXMubW92ZVRvUHJldkhpZ2hsaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVUb05leHRIaWdobGlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc05leHRIaWdobGlnaHQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VySGlnaGxpZ2h0Kys7XG4gICAgdGhpcy5zdGFydEN1cnJlbnQoKTtcbiAgfVxuXG4gIG1vdmVUb1ByZXZIaWdobGlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1ByZXZIaWdobGlnaHQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VySGlnaGxpZ2h0LS07XG4gICAgdGhpcy5zdGFydEN1cnJlbnQoKTtcbiAgfVxuXG4gIGFkdmFuY2VEaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2cuYWR2YW5jZSgpO1xuICAgIHRoaXMuZGlhbG9nLnNob3dDb250cm9sKHRoaXMuaGFzUHJldkhpZ2hsaWdodCgpLCB0aGlzLmhhc05leHRIaWdobGlnaHQoKSk7XG4gIH1cblxuICBoYXNQcmV2SGlnaGxpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmN1ckhpZ2hsaWdodCA+IDA7XG4gIH1cblxuICBoYXNOZXh0SGlnaGxpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmN1ckhpZ2hsaWdodCA8ICh0aGlzLmhpZ2hsaWdodHMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBjdXJyZW50SGlnaGxpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodHNbdGhpcy5jdXJIaWdobGlnaHRdO1xuICB9XG5cbiAgc3RhcnRDdXJyZW50KCkge1xuICAgIC8vY29uc3QgY3VycmVudCA9IHRoaXMuaGlnaGxpZ2h0c1t0aGlzLmN1ckhpZ2hsaWdodF07XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuY3VycmVudEhpZ2hsaWdodCgpO1xuXG4gICAgdGhpcy52aXN1YWwuc2hvd0ZvcihjdXJyZW50KTtcbiAgICB0aGlzLmRpYWxvZy5zdGFydEhpZ2hsaWdodChjdXJyZW50KTtcbiAgICB0aGlzLmRpYWxvZy5zaG93Q29udHJvbCh0aGlzLmhhc1ByZXZIaWdobGlnaHQoKSwgdGhpcy5oYXNOZXh0SGlnaGxpZ2h0KCkpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICAkKCcjdmlzdWFscycpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcjaGlnaGxpZ2h0cy1kaWFsb2dfX2NvbnRhaW5lcicpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3J5O1xuXG4iLCIvLyBhcGF0ZWQgZnJvbVxuLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jb250cm9sbGluZy1jc3MtYW5pbWF0aW9ucy10cmFuc2l0aW9ucy1qYXZhc2NyaXB0L1xuY29uc3QgcHJlZml4ZXMgPSBbJ3dlYmtpdCcsICdtb3onLCAnTVMnLCAnbycsICcnXTtcblxuY29uc3QgcHJlZml4ZWRPbiA9ICgkZWwsIHR5cGUsIGNiKSA9PiB7XG4gIGZvciAobGV0IHByZWZpeCBvZiBwcmVmaXhlcykge1xuICAgIGlmICghcHJlZml4KSB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICRlbC5vbihgJHtwcmVmaXh9JHt0eXBlfWAsIGNiKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RW1vamkgPSAodGVhbSwgZ2FtZUV2KSA9PiB7XG4gIGxldCBlbW9qaSA9ICcnO1xuXG4gIGlmICh0ZWFtID09PSAnaG9tZScpIHtcbiAgICB0cnkge1xuICAgICAgZW1vamkgPSBnYW1lRXYuaG9tZVRlYW1FbW9qaSA/IFN0cmluZy5mcm9tQ29kZVBvaW50KGdhbWVFdi5ob21lVGVhbUVtb2ppKSA6ICcnO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZW1vamkgPSBnYW1lRXYuaG9tZVRlYW1FbW9qaTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmF3YXlUZWFtRW1vamkgPyBTdHJpbmcuZnJvbUNvZGVQb2ludChnYW1lRXYuYXdheVRlYW1FbW9qaSkgOiAnJztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVtb2ppID0gZ2FtZUV2LmF3YXlUZWFtRW1vamk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVtb2ppO1xufTtcblxuY29uc3QgZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsID0gKG5hbWUpID0+IHtcbiAgbGV0IHJldCA9ICcnO1xuXG4gIHJldCArPSBuYW1lWzBdICsgJy4gJztcbiAgcmV0ICs9IG5hbWUuc3BsaXQoJyAnKVsxXTtcblxuICByZXR1cm4gcmV0O1xufTtcblxuY29uc3QgZ2V0SW5uaW5nVGV4dCA9IChpbm5pbmcpID0+IHtcbiAgbGV0IHJldCA9IGAke2lubmluZ31gO1xuXG4gIHN3aXRjaCAoaW5uaW5nKSB7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXQgKz0gJ3N0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldCArPSAnbmQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0ICs9ICdyZCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0ICs9ICd0aCc7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59O1xuXG5jb25zdCBtYWtlQmFzZURpYW1vbmQgPSAob2NjKSA9PiB7XG4gIGNvbnN0ICRkaWFtb25kID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2RpYW1vbmQnKTtcblxuICBpZiAob2NjKSB7XG4gICAgJGRpYW1vbmQuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xuICB9XG5cbiAgcmV0dXJuICRkaWFtb25kO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlZml4ZWRPbixcbiAgZ2V0RW1vamksXG4gIGdldFBsYXllck5hbWVXaXRoSW5pdGlhbCAsXG4gIGdldElubmluZ1RleHQsXG4gIG1ha2VCYXNlRGlhbW9uZCxcbn07XG5cbiIsImNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbmNvbnN0IHRlYW1zRGF0YSA9IHJlcXVpcmUoJy4uL2xpYi90ZWFtcy1kYXRhJyk7XG5jb25zdCB3ZWF0aGVyID0gcmVxdWlyZSgnLi4vbGliL3dlYXRoZXInKTtcblxuY29uc3QgRElBTU9ORF9DT0xPVVJTID0ge1xuICBtb3VuZDogJ2ZmY2Y1NicsXG4gIG1vdW5kT3V0bGluZTogJzAwMzA0OScsXG4gIGJhc2VzOiAnZmY5NzcwJyxcbiAgYmFzZXNPdXRsaW5lOiAnMDAzMDQ5JyxcbiAgZ3Jhc3M6ICcyYjkzNDgnLFxuICBncmFzc091dGxpbmU6ICcyYjkzNDgnLFxuICBkaXJ0OiAnZmZjZjU2JyxcbiAgZGlydE91dGxpbmU6ICdmZmYnLFxuICBmb3VsWm9uZTogJ2VkZWFkMCcsXG4gIGZvdWxab25lT3V0bGluZTogJ2VkZWFkMCcsXG59O1xuXG5jbGFzcyBWaXN1YWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVJRCA9ICcnO1xuICAgIHRoaXMuaG9tZVRlYW0gPSAnJztcbiAgICB0aGlzLmF3YXlUZWFtID0gJyc7XG5cbiAgICB0aGlzLmluaXREaWFtb25kKCk7XG4gICAgdGhpcy5pbml0TWF0Y2h1cCgpO1xuICB9XG5cbiAgaW5pdERpYW1vbmQoKSB7XG4gICAgY29uc3QgJGRpYW1vbmQgPSAkKCcjZGlhbW9uZCcpO1xuICAgIHRoaXMuZGlhbW9uZExvY2F0aW9ucyA9IHtcbiAgICAgICRtb3VuZDogJGRpYW1vbmQuZmluZCgnLm1vdW5kJyksXG4gICAgICAkYmF0dGluZzogJGRpYW1vbmQuZmluZCgnLmJhdHRpbmcnKSxcbiAgICAgICRmaXJzdDogJGRpYW1vbmQuZmluZCgnLmZpcnN0JyksXG4gICAgICAkc2Vjb25kOiAkZGlhbW9uZC5maW5kKCcuc2Vjb25kJyksXG4gICAgICAkdGhpcmQ6ICRkaWFtb25kLmZpbmQoJy50aGlyZCcpLFxuICAgIH07XG5cbiAgICB0aGlzLkJBU0VTID0gWydmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnXTsgLy8gdG9kbzogJ2ZvdXJ0aCcsICdzZWNyZXQnP1xuXG4gICAgdGhpcy5kaWFtb25kUmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXRNYXRjaHVwKCkge1xuICAgIHRoaXMubWF0Y2h1cFJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICBzZXRHYW1lRGF0YShoaWdobGlnaHQpIHtcbiAgICB0aGlzLmdhbWVJRCA9IGhpZ2hsaWdodC5nYW1lRXZlbnQuZ2FtZUlkO1xuICAgIHRoaXMuaG9tZVRlYW0gPSBoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGEuaG9tZVRlYW07XG4gICAgdGhpcy5hd2F5VGVhbSA9IGhpZ2hsaWdodC5nYW1lRXZlbnQuZGF0YS5hd2F5VGVhbTtcblxuICAgIC8vIG5ldyBnYW1lIGRhdGEsIHJlc2V0IGRpYW1vbmQgYW5kIG1hdGNodXBcbiAgICB0aGlzLmRpYW1vbmRSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMubWF0Y2h1cFJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICBjdXN0b21pemVEaWFtb25kKGhpZ2hsaWdodCkge1xuICAgIC8vIHNldCB0aGUgZGlhbW9uZCBjb2xvdXJzIGFuZCBhZGQgdGhlIGRpYW1vbmQgY3NzXG5cbiAgICBjb25zdCBob21lVGVhbURhdGEgPSB0ZWFtc0RhdGFbdGhpcy5ob21lVGVhbV07XG4gICAgY29uc3QgJGRpYW1vbmQgPSAkKCcjZGlhbW9uZC1zdmcnKTtcbiAgICBjb25zdCAkZ3Jhc3MgPSAkZGlhbW9uZC5maW5kKCcuZGlhbW9uZC1zdmdfX2dyYXNzJyk7XG4gICAgY29uc3QgJGRpcnQgPSAkZGlhbW9uZC5maW5kKCcuZGlhbW9uZC1zdmdfX2RpcnQnKTtcbiAgICBjb25zdCAkZm91bFpvbmUgPSAkZGlhbW9uZC5maW5kKCcuZGlhbW9uZC1zdmdfX2ZvdWwtem9uZScpO1xuICAgIGNvbnN0ICRtb3VuZCA9ICRkaWFtb25kLmZpbmQoJy5kaWFtb25kLXN2Z19fbW91bmQnKTtcbiAgICBjb25zdCAkYmFzZXMgPSAkZGlhbW9uZC5maW5kKCcuZGlhbW9uZC1zdmdfX2Jhc2UnKTtcbiAgICBjb25zdCAkbG9nbyA9ICQoJy5kaWFtb25kLWxvZ28nKTtcblxuICAgIC8vIGNvbG91ciB0aGUgbW91bmRcbiAgICAvLyB0cmllcyBtb3VuZCBjb2xvdXIsIG9yIHNldHMgb2ZmaWNpYWwgYXMgZGVmYXVsdFxuICAgICRtb3VuZFxuICAgICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW1EYXRhLmNvbG91cnMubW91bmQgfHwgaG9tZVRlYW1EYXRhLmNvbG91cnMub2ZmaWNpYWx9YClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW1EYXRhLmNvbG91cnMubW91bmRPdXRsaW5lIHx8IERJQU1PTkRfQ09MT1VSUy5tb3VuZE91dGxpbmV9YCk7XG5cbiAgICAvLyBjb2xvdXIgdGhlIGJhc2VzXG4gICAgLy8gdHJpZXMgYmFzZXMgY29sb3VyLCBvciBzZXRzIG9mZmljaWFsIGFzIGRlZmF1bHRcbiAgICAkYmFzZXNcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmJhc2VzIHx8IGhvbWVUZWFtRGF0YS5jb2xvdXJzLm9mZmljaWFsfWApXG4gICAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmJhc2VzT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuYmFzZXNPdXRsaW5lfWApO1xuXG4gICAgLy8gY29sb3VyIHRoZSBncmFzc1xuICAgICRncmFzcy5maXJzdCgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmdyYXNzIHx8IERJQU1PTkRfQ09MT1VSUy5ncmFzc31gKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmdyYXNzT3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuZ3Jhc3NPdXRsaW5lfWApO1xuICAgICAgJGdyYXNzLmxhc3QoKVxuICAgICAgICAuYXR0cignZmlsbCcsIGAjJHtob21lVGVhbURhdGEuY29sb3Vycy5ncmFzcyB8fCBESUFNT05EX0NPTE9VUlMuZ3Jhc3N9YClcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsIGAjJHtob21lVGVhbURhdGEuY29sb3Vycy5kaXJ0T3V0bGluZSB8fCBESUFNT05EX0NPTE9VUlMuZ3Jhc3NPdXRsaW5lfWApO1xuXG4gICAgLy8gY29sb3VyIHRoZSBkaXJ0XG4gICAgJGRpcnRcbiAgICAgIC5hdHRyKCdmaWxsJywgYCMke2hvbWVUZWFtRGF0YS5jb2xvdXJzLmRpcnQgfHwgRElBTU9ORF9DT0xPVVJTLmRpcnR9YClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW1EYXRhLmNvbG91cnMuZGlydE91dGxpbmUgfHwgRElBTU9ORF9DT0xPVVJTLmRpcnRPdXRsaW5lfWApO1xuXG4gICAgLy8gY29sb3VyIHRoZSBmb3VsIHpvbmVcbiAgICAkZm91bFpvbmVcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCBgIyR7aG9tZVRlYW1EYXRhLmNvbG91cnMuZm91bFpvbmUgfHwgRElBTU9ORF9DT0xPVVJTLmZvdWxab25lfWApXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCBgIyR7aG9tZVRlYW1EYXRhLmNvbG91cnMuZm91bFpvbmVPdXRsaW5lIHx8IERJQU1PTkRfQ09MT1VSUy5mb3VsWm9uZU91dGxpbmV9YCk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRpYW1vbmQgc3ZnXG4gICAgJCgnI2RpYW1vbmRfX2ltYWdlJylcbiAgICAgIC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJysgYnRvYSgkZGlhbW9uZC5odG1sKCkpICsgJyknKTtcblxuICAgIC8vIGRyYXcgaG9tZSBsb2dvIGJlaGluZCBob21lIHBsYXRlXG4gICAgJGxvZ29cbiAgICAgIC5hdHRyKCdzcmMnLCBob21lVGVhbURhdGEuc3RhZGl1bUxvZ29VUkwgfHwgaG9tZVRlYW1EYXRhLmhvbWVMb2dvVVJMKVxuICAgICAgLnRvZ2dsZUNsYXNzKCdtLW91dGxpbmUnLCBob21lVGVhbURhdGEuc3RhZGl1bUxvZ29PdXRsaW5lKTtcblxuICAgIC8vIHNldCB0aGUgbWF0Y2h1cCB0ZXh0IGFib3ZlIHRoZSBkaWFtb25kXG4gICAgJCgnLmRpYW1vbmQtaGVhZGVyIC5tYXRjaHVwJylcbiAgICAgIC50ZXh0KGAke2hpZ2hsaWdodC5nYW1lRXZlbnQuZGF0YS5ob21lVGVhbU5hbWV9IHZzLiAke2hpZ2hsaWdodC5nYW1lRXZlbnQuZGF0YS5hd2F5VGVhbU5hbWV9YCk7XG4gICAgJCgnI2RpYW1vbmQgLmdhbWUtbmFtZScpXG4gICAgICAudGV4dChgU2Vhc29uICR7aGlnaGxpZ2h0LmdhbWVFdmVudC5kYXRhLnNlYXNvbiArIDF9LCBEYXkgJHtoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGEuZGF5ICsgMX1gKTtcblxuICAgIHRoaXMuZGlhbW9uZFJlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIGN1c3RvbWl6ZU1hdGNodXAoaGlnaGxpZ2h0KSB7XG4gICAgY29uc3QgZ2FtZUV2ID0gaGlnaGxpZ2h0LmdhbWVFdmVudC5kYXRhO1xuICAgIGNvbnN0ICRob21lID0gJCgnLnZzLWxvZ29fX2hvbWUnKTtcbiAgICBjb25zdCAkYXdheSA9ICQoJy52cy1sb2dvX19hd2F5Jyk7XG4gICAgY29uc3QgaG9tZVRlYW1EYXRhID0gdGVhbXNEYXRhW3RoaXMuaG9tZVRlYW1dO1xuICAgIGNvbnN0IGF3YXlUZWFtRGF0YSA9IHRlYW1zRGF0YVt0aGlzLmF3YXlUZWFtXTtcblxuICAgICQoJyNtYXRjaHVwIC5nYW1lLW5hbWUnKVxuICAgICAgLnRleHQoYFNlYXNvbiAke2dhbWVFdi5zZWFzb24gKyAxfSwgRGF5ICR7Z2FtZUV2LmRheSArIDF9YCk7XG5cbiAgICAkaG9tZVxuICAgICAgLmF0dHIoJ3NyYycsIGhvbWVUZWFtRGF0YS5ob21lTG9nb1VSTClcbiAgICAgIC5hdHRyKCdhbHQnLCBgJHtnYW1lRXYuaG9tZVRlYW1OYW1lfWApO1xuICAgICRhd2F5XG4gICAgICAuYXR0cignc3JjJywgYXdheVRlYW1EYXRhLmF3YXlMb2dvVVJMIHx8IGF3YXlUZWFtRGF0YS5ob21lTG9nb1VSTClcbiAgICAgIC5hdHRyKCdhbHQnLCBgJHtnYW1lRXYuYXdheVRlYW1OYW1lfWApO1xuXG4gICAgdGhpcy5tYXRjaHVwUmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgc2hvd0ZvcihoaWdobGlnaHQpIHtcblxuICAgIC8vIGlmIGdhbWUgZGF0YSBoYXNuJ3QgYmVlbiBzZXQsIG9yIGlmIHRoZSBnYW1lIGhhcyBjaGFuZ2VkLFxuICAgIC8vIHVwZGF0ZSB0aGUgZ2FtZSBkYXRhXG4gICAgaWYgKHRoaXMuZ2FtZUlEICE9PSBoaWdobGlnaHQuZ2FtZUV2ZW50LmdhbWVJZCkge1xuICAgICAgdGhpcy5zZXRHYW1lRGF0YShoaWdobGlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZUN1cnJlbnQoKTtcblxuICAgIHN3aXRjaCAoaGlnaGxpZ2h0LnZpc3VhbCkge1xuICAgICAgY2FzZSAnbWF0Y2h1cCc6XG4gICAgICAgIHRoaXMuc2hvd01hdGNodXAoaGlnaGxpZ2h0KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zaG93RGlhbW9uZChoaWdobGlnaHQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBoaWRlQ3VycmVudCgpIHtcbiAgICAkKCcjbWF0Y2h1cCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAkKCcjZGlhbW9uZCcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIHNob3dNYXRjaHVwKGhpZ2hsaWdodCkge1xuICAgIGlmICghdGhpcy5tYXRjaHVwUmVhZHkpIHtcbiAgICAgIHRoaXMuY3VzdG9taXplTWF0Y2h1cChoaWdobGlnaHQpO1xuICAgIH1cblxuICAgICQoJyNtYXRjaHVwJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgc2hvd0RpYW1vbmQoaGlnaGxpZ2h0KSB7XG4gICAgdGhpcy51cGRhdGVEaWFtb25kKGhpZ2hsaWdodCk7XG4gICAgJCgnI2RpYW1vbmQnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICB1cGRhdGVEaWFtb25kKGhpZ2hsaWdodCkge1xuICAgIGlmICghdGhpcy5kaWFtb25kUmVhZHkpIHtcbiAgICAgIHRoaXMuY3VzdG9taXplRGlhbW9uZChoaWdobGlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0JhdHRlcihoaWdobGlnaHQpO1xuICAgIHRoaXMuZHJhd1BpdGNoZXIoaGlnaGxpZ2h0KTtcbiAgICB0aGlzLmRyYXdCYXNlcnVubmVycyhoaWdobGlnaHQpO1xuICAgIHRoaXMuZHJhd1Njb3JlYm9hcmQoaGlnaGxpZ2h0KTtcbiAgfVxuXG4gIGRyYXdCYXR0ZXIoaGlnaGxpZ2h0KSB7XG4gICAgY29uc3QgZ2UgPSBoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnYXdheScgOiAnaG9tZSc7XG4gICAgbGV0IG5hbWVXaXRoRW1vamkgPSAnJztcblxuICAgIGlmIChnZVtgJHt0ZWFtfUJhdHRlck5hbWVgXSkge1xuICAgICAgY29uc3QgbmFtZSA9IHV0aWwuZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsKGdlW2Ake3RlYW19QmF0dGVyTmFtZWBdKTtcbiAgICAgIG5hbWVXaXRoRW1vamkgPSBgJHt1dGlsLmdldEVtb2ppKHRlYW0sIGdlKX0gJHtuYW1lfWA7XG4gICAgfVxuXG4gICAgdGhpcy5kaWFtb25kTG9jYXRpb25zWyckYmF0dGluZyddXG4gICAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbiAgfVxuXG4gIGRyYXdQaXRjaGVyKGhpZ2hsaWdodCkge1xuICAgIGNvbnN0IGdlID0gaGlnaGxpZ2h0LmdhbWVFdmVudC5kYXRhO1xuXG4gICAgY29uc3QgdGVhbSA9IGdlLnRvcE9mSW5uaW5nID8gJ2hvbWUnIDogJ2F3YXknO1xuICAgIGxldCBuYW1lV2l0aEVtb2ppID0gJyc7XG5cbiAgICBpZiAoZ2VbYCR7dGVhbX1QaXRjaGVyTmFtZWBdKSB7XG4gICAgICBjb25zdCBuYW1lID0gdXRpbC5nZXRQbGF5ZXJOYW1lV2l0aEluaXRpYWwoZ2VbYCR7dGVhbX1QaXRjaGVyTmFtZWBdKTtcbiAgICAgIG5hbWVXaXRoRW1vamkgPSBgJHt1dGlsLmdldEVtb2ppKHRlYW0sIGdlKX0gJHtuYW1lfWA7XG4gICAgfVxuXG4gICAgdGhpcy5kaWFtb25kTG9jYXRpb25zWyckbW91bmQnXVxuICAgICAgLnRleHQobmFtZVdpdGhFbW9qaSk7XG4gIH1cblxuICBkcmF3QmFzZXJ1bm5lcnMoaGlnaGxpZ2h0KSB7XG4gICAgY29uc3QgbWwgPSBoaWdobGlnaHQubWx1c3RhcmQ7XG4gICAgY29uc3QgZ2UgPSBoaWdobGlnaHQuZ2FtZUV2ZW50LmRhdGE7XG5cbiAgICBjb25zdCB0ZWFtID0gZ2UudG9wT2ZJbm5pbmcgPyAnYXdheScgOiAnaG9tZSc7XG5cbiAgICBpZiAobWwgJiYgbWwuYmFzZVJ1bm5lcnMpIHtcbiAgICAgIGZvciAobGV0IGJhc2Ugb2YgdGhpcy5CQVNFUykge1xuICAgICAgICBsZXQgbmFtZSA9IG1sLmJhc2VSdW5uZXJzW2Jhc2VdLnBsYXllck5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICBsZXQgbmFtZVdpdGhFbW9qaSA9IGAke3V0aWwuZ2V0RW1vamkodGVhbSwgZ2UpfSAke3V0aWwuZ2V0UGxheWVyTmFtZVdpdGhJbml0aWFsKG5hbWUpfWA7XG4gICAgICAgICAgdGhpcy5kaWFtb25kTG9jYXRpb25zW2AkJHtiYXNlfWBdXG4gICAgICAgICAgICAudGV4dChuYW1lV2l0aEVtb2ppKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpYW1vbmRMb2NhdGlvbnNbYCQke2Jhc2V9YF1cbiAgICAgICAgICAgIC50ZXh0KCcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdTY29yZWJvYXJkKGhpZ2hsaWdodCkge1xuICAgIGNvbnN0IG1sID0gaGlnaGxpZ2h0Lm1sdXN0YXJkO1xuICAgIGNvbnN0IGdlID0gaGlnaGxpZ2h0LmdhbWVFdmVudC5kYXRhO1xuXG4gICAgY29uc3QgJHNjb3JlYm9hcmQgPSAkKCcjZGlhbW9uZF9fc2NvcmVib2FyZCcpO1xuXG4gICAgLy8gc2NvcmVcbiAgICBjb25zdCAkaG9tZSA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLXRlYW1zX19ob21lIHNwYW4nKTtcbiAgICAkaG9tZS5maXJzdCgpLnRleHQodGVhbXNEYXRhW2dlLmhvbWVUZWFtXS5zaG9ydGhhbmQpO1xuICAgICRob21lLmxhc3QoKS50ZXh0KGdlLmhvbWVTY29yZSk7XG5cbiAgICBjb25zdCAkYXdheSA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLXRlYW1zX19hd2F5IHNwYW4nKTtcbiAgICAkYXdheS5maXJzdCgpLnRleHQodGVhbXNEYXRhW2dlLmF3YXlUZWFtXS5zaG9ydGhhbmQpO1xuICAgICRhd2F5Lmxhc3QoKS50ZXh0KGdlLmF3YXlTY29yZSk7XG5cbiAgICAvLyBiYXNlc1xuICAgIGNvbnN0ICRiYXNlcyA9ICRzY29yZWJvYXJkLmZpbmQoJy5zY29yZWJvYXJkLWJhc2VzJyk7XG4gICAgJGJhc2VzLmVtcHR5KCk7XG4gICAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChtbC5iYXNlUnVubmVycy50aGlyZC5wbGF5ZXJOYW1lKSk7XG4gICAgJGJhc2VzLmFwcGVuZCh1dGlsLm1ha2VCYXNlRGlhbW9uZChtbC5iYXNlUnVubmVycy5zZWNvbmQucGxheWVyTmFtZSkpO1xuICAgICRiYXNlcy5hcHBlbmQodXRpbC5tYWtlQmFzZURpYW1vbmQobWwuYmFzZVJ1bm5lcnMuZmlyc3QucGxheWVyTmFtZSkpO1xuXG4gICAgLy8gY291bnRcbiAgICBjb25zdCAkY291bnQgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1jb3VudF9fY291bnQgc3BhbicpO1xuICAgICRjb3VudC5maXJzdCgpLnRleHQoZ2UuYXRCYXRCYWxscyk7XG4gICAgJGNvdW50Lmxhc3QoKS50ZXh0KGdlLmF0QmF0U3RyaWtlcyk7XG4gICAgY29uc3QgJG91dHMgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1jb3VudF9fb3V0cyBzcGFuJyk7XG4gICAgJG91dHMudGV4dChnZS5oYWxmSW5uaW5nT3V0cyk7XG5cbiAgICAvLyBpbm5pbmdcbiAgICBjb25zdCAkaW5uaW5nID0gJHNjb3JlYm9hcmQuZmluZCgnLnNjb3JlYm9hcmQtb3RoZXJfX2lubmluZyBzcGFuJyk7XG4gICAgJGlubmluZy5maXJzdCgpLnRleHQoZ2UudG9wT2ZJbm5pbmcgPyAnVE9QJyA6ICdCT1QnKTtcbiAgICAkaW5uaW5nLmxhc3QoKS50ZXh0KHV0aWwuZ2V0SW5uaW5nVGV4dChnZS5pbm5pbmcgKyAxKSk7XG5cbiAgICAvLyB3ZWF0aGVyXG4gICAgY29uc3QgJHdlYXRoZXIgPSAkc2NvcmVib2FyZC5maW5kKCcuc2NvcmVib2FyZC1vdGhlcl9fd2VhdGhlciBzcGFuJyk7XG4gICAgJHdlYXRoZXJcbiAgICAgIC50ZXh0KHdlYXRoZXJbZ2Uud2VhdGhlcl0uaWNvbiB8fCB3ZWF0aGVyW2dlLndlYXRoZXJdLm5hbWUpXG4gICAgICAuYXR0cigndGl0bGUnLCB3ZWF0aGVyW2dlLndlYXRoZXJdLm5hbWUpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXN1YWw7XG5cbiJdfQ==
