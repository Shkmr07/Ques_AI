const express = require("express");
const auth = require("../middlewares/auth.middleware");
const {
  createProject,
  getProjects,
} = require("../controllers/project.controller");

const projectRouter = express.Router();

projectRouter.post("/add-project", auth, createProject);
projectRouter.get("/", auth, getProjects);

module.exports = projectRouter;
