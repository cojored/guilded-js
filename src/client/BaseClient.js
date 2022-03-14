const EventEmitter = require("events");
module.exports = class BaseClient extends EventEmitter {
  constructor() {
    super({ captureRejections: true });
    this.api = "https://www.guilded.gg/api/v1/";
  }
};
