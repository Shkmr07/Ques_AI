const express = require("express");
const auth = require("../middlewares/auth.middleware")
const {
  getEpisode,
  createEpisode,
  editEpisode,
  deleteEpisode,
} = require("../controllers/episode.controller");

const episodeRouter = express.Router();

episodeRouter.get("/", auth, getEpisode);
episodeRouter.post("/create", auth, createEpisode);
episodeRouter.patch("/edit/:id", auth, editEpisode);
episodeRouter.delete("/delete/:id", auth, deleteEpisode);

module.exports = episodeRouter;
