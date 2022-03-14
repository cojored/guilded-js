const Message = require("../../../structures/Message.js");
module.exports = function (data, client) {
  client.emit("ChatMessageDeleted", new Message(data, client));
};
