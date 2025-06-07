const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(`Error happend while connecting to mongoDB ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
