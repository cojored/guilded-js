const functions = require("./functions/Member");

let this$ = {};

module.exports = class Member {
  constructor(d, client) {
    let data = d.userInfo || d;
    this.server = data.server;
    if (data.nickname) this.nickname = data.nickname;
    this.id = data.memberId;
    this$.client = client;
  }
  /**
   * Get the roles of the member
   * @returns
   */
  getRoles() {
    return functions.getRoles(this$.client, this.server, this.id);
  }
  /**
   * Set the members nickname
   * @param {String} nick Nickname to set
   * @returns
   */
  setNickname(nick) {
    return functions.setNickname(nick, this$.client, this.server.id, this.id);
  }
  /**
   * Remove the members nickname
   * @returns
   */
  removeNickname() {
    return functions.removeNickname(this$.client, this.server.id, this.id);
  }
  /**
   * Add XP to a member
   * @param {Number} amount
   */
  addXp(amount) {
    return functions.addXp(this$.client, this.server.id, this.id, amount);
  }
  /**
   * Get social data of a member
   * @param {String} type The social to get
   * @returns
   */
  getSocial(type) {
    return functions.getSocial(this$.client, this.server.id, this.id, type);
  }
};
