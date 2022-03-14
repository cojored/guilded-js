const Request = require("../../../Requests/Request.js");
module.exports = function (amount, client, id) {
  if (!amount || isNaN(amount) || amount < 2 || amount > 100) {
    console.log(
      "\x1b[31m[ERROR] Please specify amount as a integer between 2 and 100"
    );
    return
  }
  return new Request({
    endpoint: `channels/${id}/messages`,
    api: client.api,
    token: client.token,
    successId: 200,
    method: "GET",
  }).then((data) => {
    let Message = require("../../Message.js");
    if (!data) return;
    let msgs = data.messages;
    let wantedMessages = msgs.slice(0, amount);
    let messages = [];
    for (let message in wantedMessages) {
      messages.push(new Message(wantedMessages[message], client));
    }
    return messages;
  });
};
