const Request = require("../../../Requests/Request.js");
module.exports = function (c, json, client, id) {
  if (!c && !json.content) {
    console.log("\x1b[31m[ERROR] Message Content is Required");
    return;
  }
  if (!json.replyTo || json.replyTo === []) {
    console.log("\x1b[31m[ERROR] What message(s) should we reply to");
    return;
  }
  let content = c || json.content;
  return new Request({
    body: {
      content: content,
      isPrivate: json.isPrivate || false,
      replyMessageIds: json.replyTo,
    },
    endpoint: `channels/${id}/messages`,
    api: client.api,
    token: client.token,
    successId: 201,
    method: "POST",
  }).then((data) => {
    let Message = require("../../Message.js");
    if (!data) return;
    let msg = new Message(data.message, client);
    return msg;
  });
};
