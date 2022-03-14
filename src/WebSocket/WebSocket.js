const ws = require("ws");
const EventEmitter = require("events");
const HandleMessage = require("./HandleMessage/HandleMessage.js");

module.exports = class WebSocket extends EventEmitter {
  constructor(token, client) {
    super({ captureRejections: true });
    this.socket = new ws("wss://api.guilded.gg/v1/websocket", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    this.socket.on("open", (r) => {
      client.emit("ready");
    });
    this.client = client;
    let handler = new HandleMessage(client);
    this.socket.on("message", (data) => {
      handler.message(data);
    });
  }
};
