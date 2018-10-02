const db = require("../models");

// Defining methods for the rsvpController
module.exports = {
  findById: function(req, res) {
    db.Users
      .findById(req.user._id)
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
    // db.RSVPS.create(newRSVP).then(function(data){
      db.Users.findOneAndUpdate({ _id: req.user._id}, {$push: {RSVPS: newRSVP}
    },{new: true}, function(err, data){
      if (err) {
        console.log(err);
      } else{
        console.log(data)
      }
    }
  )
      .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
  },

  updateNotAttend: function(req, res) { db.RSVPS
  .findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(dbRSVP => res.json(dbRSVP))
  .catch(err => res.status(422).json(err));
  }
};