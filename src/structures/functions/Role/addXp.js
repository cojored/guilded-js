module.exports = function (client, serverId, roleId, amount) {
  if (!amount || isNaN(amount) || amount <= 0) {
    console.log("\x1b[31m[ERROR] Amount must be a number greater than 0");
    return;
  }
  return new Request({
    body: { amount: amount },
    endpoint: `servers/${serverId}/members/${roleId}/xp`,
    api: client.api,
    token: client.token,
    successId: 204,
    method: "POST",
  });
};
