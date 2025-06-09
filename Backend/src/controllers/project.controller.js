const Project = require("../models/Project");
const customStatus = require("../utils/customStatus");

async function createProject(req, res) {
  const { name } = req.body;
  const { userId } = req.user;

  try {
    const project = await Project.create({ name, user:userId });
    customStatus(res, 201, "episode created successfully",  project );
  } catch (err) {
    return customStatus(res, 500, err.message);
  }
}

async function getProjects(req, res) {
  try {
    const projects = await Project.find({ user: req.user.userId });
    
    customStatus(res, 200, "Project List",  projects );
  } catch (err) {
    return customStatus(res, 500, err.message);
  }
}

module.exports = { getProjects, createProject };
