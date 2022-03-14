const functions = require("./functions/Channel");

let this$ = {};

module.exports = class Channel {
  constructor(data, client) {
    this.id = data.channelId;
    this$.client = client;
  }
  /**
   * Send a message
   * @param {String} c Message Content
   * @param {Object} json
   * @param {Boolean} [json.isPrivate=false]
   * @returns
   */
  send(c, json = {}) {
    return functions.send(c, json, this$.client, this.id);
  }
  /**
   * Get messages
   * @param {Number} amount A number between 2 and 100
   * @returns
   */
  getMessages(amount) {
    return functions.getMessages(amount, this$.client, this.id);
  }
  /**
   * Get a message
   * @param {String} messageId The id of the message you want to get
   * @returns
   */
  getMessage(messageId) {
    return functions.getMessage(this$.client, this.id, messageId);
  }
  /**
   * Reply to a message
   * @param {String} c Reply Content
   * @param {Object} json
   * @param {Array} json.replyTo An array of message ids to reply to.
   * @param {Boolean} json.isPrivate Is this a private reply?
   * @returns
   */
  reply(c, json = {}) {
    return functions.reply(c, json, this$.client, this.id);
  }
  /**
   * Edit a message
   * @param {Content} c Edit Message Content
   * @param {Object} json
   * @param {String} json.messageId Id of the message to edit
   * @returns
   */
  edit(c, json = {}) {
    return functions.edit(c, json, this$.client, this.id);
  }
  /**
   * Delete a message
   * @param {String} messageId Id of the message to delete
   */
  delete(messageId) {
    return functions.delete(this$.client, this.id, messageId);
  }
};
