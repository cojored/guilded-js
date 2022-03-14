const BaseClient = require("./BaseClient.js");
const WebSocket = require("../WebSocket/WebSocket.js");
module.exports = class Client extends BaseClient {
  login(token) {
    this.token = token;
    this.ws = new WebSocket(token, this);
  }
};
