const Message = require("../../../structures/Message.js");
module.exports = function (data, client) {
  client.emit("ChatMessageUpdated", new Message(data, client));
};
