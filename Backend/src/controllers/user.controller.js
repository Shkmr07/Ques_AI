const Blacklist = require("../models/Blacklist");
const User = require("../models/User");
const customStatus = require("../utils/customStatus");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  try {
    await User.create(req.body);
    customStatus(res, 201, "SignUp Successful");
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return customStatus(res, 404, "Email not found!");
    }
    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return customStatus(res, 401, "Invalid Credentials!");
    }

    const payload = { userId: user._id };

    const token = jwt.sign({ payload }, process.env.SECRET_KEY);

    customStatus(res, 200, "Login Successful", token);
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}

async function logout(req, res) {
  const token = req.headers?.authorization?.split("Bearer ")[1];

  try {
    await Blacklist.create({ token });
    customStatus(res, 200, "Logout Successfull");
  } catch (err) {
    customStatus(res, 500, err.message);
  }
}

module.exports = { signup, login, logout };
