const Request = require("../../../Requests/Request.js");
module.exports = function (client, cid, mid) {
  return new Request({
    endpoint: `channels/${cid}/messages/${mid}`,
    api: client.api,
    token: client.token,
    successId: 204,
    method: "DELETE",
  });
};
