const Request = require("../../../Requests/Request.js");
module.exports = function (c, client, cid, mid) {
  if (!c) {
    console.log("\x1b[31m[ERROR] Message Content is Required");
    return;
  }
  let content = c || json.content;
  return new Request({
    body: {
      content: content,
    },
    endpoint: `channels/${cid}/messages/${mid}`,
    api: client.api,
    token: client.token,
    successId: 200,
    method: "PUT",
  }).then((data) => {
    let Message = require("../../Message.js");
    if (!data) return;
    let msg = new Message(data.message, client);
    return msg;
  });
};
