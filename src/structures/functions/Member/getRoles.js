const Request = require("../../../Requests/Request.js");
module.exports = function (client, server, memid) {
  return new Request({
    endpoint: `servers/${server.id}/members/${memid}/roles`,
    api: client.api,
    token: client.token,
    successId: 200,
    method: "GET",
  }).then((data) => {
    let Role = require("../../Role.js");
    if (!data) return;
    let roleIds = data.roleIds;
    let roles = [];
    for (let roleId in roleIds) {
      roles.push(new Role({ roleId: roleIds[roleId] }, server, client));
    }
    return roles;
  });
};
