const db = require("../models");

// Defining methods for the rsvpController
module.exports = {
  findById: function(req, res) {
    db.RSVPS
      .findById(req.params.id)
      .then(dbRSVP => res.json(dbRSVP))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const newRSVP = {
        brideName: req.body.bride,
        groomName: req.body.groom,
        location: req.body.location,
        dateOfWedding: req.body.date
    };
    db.RSVPS
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