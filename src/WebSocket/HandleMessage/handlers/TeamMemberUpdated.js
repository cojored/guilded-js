const Member = require("../../../structures/Member.js");
const Server = require("../../../structures/Server.js");
module.exports = function (data, client) {
  client.emit(
    "TeamMemberUpdated",
    new Member(
      {
        server: new Server({ serverId: data.serverId }),
        userInfo: data.userInfo,
      },
      client
    )
  );
};
