const db = require("../models");

// Defining methods for the rsvpController
module.exports = {
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const newRSVP = {
        name: req.body.name,
        invited: true,
        attending: false,
        notAttending: false
     
    };
    db.Users
      .create(newRSVP)
      .then(dbRSVP => res.json(dbRSVP))
      .catch(err => res.status(422).json(err));
  },
  updateNotAttend: function(req, res) { db.RSVPS
  .findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(dbRSVP => res.json(dbRSVP))
  .catch(err => res.status(422).json(err));
  }
};