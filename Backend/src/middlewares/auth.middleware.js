const Blacklist = require("../models/Blacklist");
const customStatus = require("../utils/customStatus");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers?.authorization?.split("Bearer ")[1];

  if (!token) {
    return customStatus(res, 401, "Unauthorized");
  }
  try {
    const isBlackList = await Blacklist.findOne({ token });

    if (isBlackList) {
      return customStatus(res, 401, "Token get blacklisted!");
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decode;

    next();
  } catch (err) {
    return customStatus(res, 500, err.message);
  }
};

module.exports = auth;
