const Role = require("../../../structures/Role.js");
const Server = require("../../../structures/Server.js");
module.exports = function (data, client) {
  let server = new Server({ serverId: data.serverId });
  let roles = [];
  for (role in data.memberRoleIds) {
    roles.push(new Role({ roleId: data.memberRoleIds[role] }, server, client));
  }
  client.emit("teamRolesUpdated", roles);
};
