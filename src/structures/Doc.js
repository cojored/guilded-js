const Server = require("./Server.js");
const Channel = require("./Channel.js");

let this$ = {};

module.exports = class Doc {
  constructor(data, client) {
    this$.client = client;
    this.id = data.id;
    this.server = new Server({ serverId: data.serverId });
    this.channel = new Channel({ channelId: data.channelId });
    this.title = data.title;
    this.content = data.content;
    this.createdAt = new Date(Date.parse(d.createdAt));
    this.createdBy = data.createdBy;
    this.updatedAt = new Date(Date.parse(d.updatedAt));
    this.updatedBy = data.updatedBy;
  }
};
