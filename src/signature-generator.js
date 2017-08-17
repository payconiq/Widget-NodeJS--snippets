var crypto = require("crypto");

function encode(payload) {
    const toHash = '' + payload.merchantId +payload.webhookId + payload.currency +payload.amount + payload.onlineKey;
    var shasum = crypto.createHash("sha256");
    shasum.update(toHash, "utf-8");
    return shasum.digest("base64");
}

module.exports = encode;