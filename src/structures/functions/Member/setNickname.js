module.exports = function (nick, client, serverId, userId) {
  const Request = require("../../../Requests/Request.js");
  if (!nick || nick === "") {
    console.log("\x1b[31m[ERROR] What should we set the nickname to");
    return;
  }
  return new Request({
    endpoint: `servers/${serverId}/members/${userId}/nickname`,
    body: {
      nickname: nick,
    },
    api: client.api,
    token: client.token,
    successId: 200,
    method: "PUT",
  }).then((data) => {
    if (!data) return;
    return data.nickname;
  });
};
