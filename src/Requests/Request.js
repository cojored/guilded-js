const fetch = require("node-fetch");

module.exports = class Requests {
  /**
   *
   * @param {Object} json
   * @param {String} json.endpoint
   * @param {String} json.api
   * @param {String} json.method
   * @param {String} json.token
   * @param {Number} json.successId
   * @param {Object} json.body
   * @returns
   */
  constructor(json) {
    return fetch(json.api + json.endpoint, {
      method: json.method,
      headers: {
        Authorization: `Bearer ${json.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json.body),
    }).then((req) => {
      if (req.status === 404) return null;
      if (req.status != json.successId) {
        console.log("\x1b[31m[ERROR] INVALID RESPONSE\x1b[0m");
        console.log(req);
        return;
      }
      if (req.status === 204) return;
      return req.json().then((d) => {
        return d;
      });
    });
  }
};
