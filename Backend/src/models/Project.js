const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", index: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", ProjectSchema);
