const db = require("../models");

// Defining methods for the tasksController
module.exports = {
  findAll: function(req, res) {
    db.Tasks
      .find({_id: req.user._id})
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