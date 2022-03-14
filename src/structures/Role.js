const functions = require("./functions/Role/index.js");

let this$ = {};

module.exports = class Role {
  constructor(data, server, client) {
    this.server = server;
    this.id = data.roleId;
    this$.client = client;
  }
  addXp(amount) {
    return functions.addXp(this$.client, this.server.id, this.id, amount);
  }
};
