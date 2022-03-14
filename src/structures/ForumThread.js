const Server = require("./Server.js");
const Channel = require("./Channel.js");
const Server = require("./Server.js");
const Member = require("./Member");

module.exports = class ForumThread {
  constructor(data, client) {
    this.id = data.id;
    this.server = new Server({ serverId: data.serverId });
    this.channel = new Channel({ channelId: data.channelId }, client);
    this.title = data.title;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.member = new Member(
      { server: this.server, memberId: d.createdBy },
      client
    );
    this.createdByWebhookId = data.createdByWebhookId;
    this.updatedAt = new Date(Date.parse(data.updatedAt));
  }
};
