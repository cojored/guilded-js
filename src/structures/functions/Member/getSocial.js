const Request = require("../../../Requests/Request.js");
const types = [
  "twitch",
  "bnet",
  "psn",
  "xbox",
  "steam",
  "origin",
  "youtube",
  "twitter",
  "facebook",
  "switch",
  "patreon",
  "roblox",
];

module.exports = function (client, serverId, memid, type) {
  if (!types.includes(type)) {
    console.log("\x1b[31m[ERROR] Incorrect type");
    return;
  }
  return new Request({
    endpoint: `servers/${serverId}/members/${memid}/social-links/${type}`,
    api: client.api,
    token: client.token,
    successId: 200,
    method: "GET",
  }).then((data) => {
    if (!data) return;
    return data.socialLink;
  });
};
