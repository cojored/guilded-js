const Channel = require("./Channel.js");
const Server = require("./Server.js");
const Member = require("./Member");
const functions = require("./functions/Message");

module.exports = class Message {
  constructor(data, client) {
    let d = data.message || data;
    this.id = d.id;
    this.type = d.type;
    this.channel = new Channel({ channelId: d.channelId }, client);
    this.server = new Server({ serverId: d.serverId });
    this.content = d.content;
    this.replyMessageIds = d.replyMessageIds;
    this.isPrivate = d.isPrivate || false;
    this.createdAt = d.createdAt;
    this.member = new Member(
      { server: this.server, memberId: d.createdBy },
      client
    );
    this.createdByWebhookId = d.createdByWebhookId;
    this.createdAt = new Date(Date.parse(d.createdAt));
    this.updatedAt = new Date(Date.parse(d.updatedAt));

    this.client = client;
  }
  /**
   * Reply to a message
   * @param {String} c Reply Content
   * @param {Object} json
   * @param {Boolean} json.isPrivate Is this a private reply?
   * @returns
   */
  reply(c, json = {}) {
    return functions.reply(c, json, this.client, this.channel.id, [this.id]);
  }
  /**
   * Edit a message
   * @param {Content} c Edit Message Content
   * @returns
   */
  edit(c) {
    return functions.edit(c, this.client, this.channel.id, this.id);
  }
  /**
   * Delete the message
   * @returns
   */
  delete() {
    return functions.delete(this.client, this.channel.id, this.id);
  }
};
