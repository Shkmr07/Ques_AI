const mongoose = require("mongoose");
const timeConverter = require("../utils/timeConverter");

const BlacklistModel = new mongoose.Schema({
  token: String,
  expireAt: { type: Date, default: Date.now , expires: timeConverter(process.env.TOKEN_EXP) },
});

module.exports = mongoose.model("blacklist", BlacklistModel);
