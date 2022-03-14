const Request = require("../../../Requests/Request.js");
module.exports = function (c, json, client, cid) {
  if (!c) {
    console.log("\x1b[31m[ERROR] Message Content is Required");
    return;
  }
  if (!json.messageId || json.messageId === "") {
    console.log("\x1b[31m[ERROR] Message Edit Id is Required");
    return;
  }
  let content = c || json.content;
  return new Request({
    body: {
      content: content,
    },
    endpoint: `channels/${cid}/messages/${json.messageId}`,
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
