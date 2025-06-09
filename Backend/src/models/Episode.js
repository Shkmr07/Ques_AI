const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
      index : true
    },
    name: { type: String, required: true },
    transcript: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("episode", EpisodeSchema);
