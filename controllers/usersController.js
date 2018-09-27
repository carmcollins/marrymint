const db = require("../models");

// Defining methods for the userController
module.exports = {
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const User = {
        brideName: req.body.bride,
        groomName: req.body.groom,
        location: req.body.location,
        dateOfWedding: req.body.date
    };
    db.Users
      .create(user)
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  }
};