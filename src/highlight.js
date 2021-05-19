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
  };

}

module.exports = Highlight;

