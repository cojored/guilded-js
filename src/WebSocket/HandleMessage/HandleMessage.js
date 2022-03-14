let handlers = require("./handlers/handlers.js");
module.exports = class HandleMessage {
  constructor(client) {
    this.client = client;
  }
  message(d) {
    let data = JSON.parse(d);
    if (!handlers[data.t]) return;
    handlers[data.t](data.d, this.client);
  }
};
