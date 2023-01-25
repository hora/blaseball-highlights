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

    // this is a hack i'm not happy about. at all.
    this.storyTitle = settings.storyTitle || '';
    this.storyCreator = settings.storyCreator || '';
  }

  generateCommentary() {
    // for earlversion: skip grand slalami, just return original lastUpdate +
    // scoreUpdate if present

    let ret = '';

    if (!this.gameEvent || !this.gameEvent.data) {
      return ret;
    }

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

