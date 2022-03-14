const Request = require("../../../Requests/Request.js");
module.exports = function (client, cid, mid) {
  if (!mid) {
    console.log("\x1b[31m[ERROR] Please specify a message id");
    return;
  }
  return new Request({
    endpoint: `channels/${cid}/messages/${mid}`,
    api: client.api,
    token: client.token,
    successId: 200,
    method: "GET",
  }).then((data) => {
    let Message = require("../../Message.js");
    if (!data) return;
    msg = new Message(data.message, client);
    return msg;
  });
};
