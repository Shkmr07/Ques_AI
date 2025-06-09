const express = require("express");
const userRouter = require("./user.route");
const projectRouter = require("./project.route");
const episodeRouter = require("./episode.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/project", projectRouter);
router.use("/episode", episodeRouter);

module.exports = router;
