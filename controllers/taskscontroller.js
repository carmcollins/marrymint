const db = require("../models");

// Defining methods for the tasksController
module.exports = {
  findAll: function(req, res) {
    db.Tasks
      .find(req.query)
      .then(dbTasks => res.json(dbTasks))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Tasks
      .findById(req.params.id)
      .then(dbTasks => res.json(dbTasks))
      .catch(err => res.status(422).json(err));
  }
};