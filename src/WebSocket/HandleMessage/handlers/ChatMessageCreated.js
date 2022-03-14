const Message = require("../../../structures/Message.js");
module.exports = function (data, client) {
  client.emit("ChatMessageCreated", new Message(data, client));
};
