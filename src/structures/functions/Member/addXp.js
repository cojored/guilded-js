module.exports = function (client, serverId, userId, amount) {
  if (!amount || isNaN(amount) || amount <= 0) {
    console.log("\x1b[31m[ERROR] Amount must be a number greater than 0");
    return;
  }
  return new Request({
    body: { amount: amount },
    endpoint: `servers/${serverId}/members/${userId}/xp`,
    api: client.api,
    token: client.token,
    successId: 201,
    method: "POST",
  }).then((data) => {
    if (!data) return;
    return data.total;
  });
};
