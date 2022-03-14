const Request = require("../../../Requests/Request.js");
module.exports = function (client, serverId, memberId) {
  return new Request({
    endpoint: `servers/${serverId}/members/${memberId}/nickname`,
    api: client.api,
    token: client.token,
    successId: 204,
    method: "DELETE",
  });
};
