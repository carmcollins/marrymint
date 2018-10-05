const db = require("../models");

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

    db.Users.findOneAndUpdate({ _id: req.user._id}, {$push: {RSVPS: newRSVP}})
      .then(data => {
        res.json(data);
      })
      .catch(err => res.status(422).json(err));
  },

  findOneAndUpdateAttend:function(req, res) {
    const newRSVP = req.user.RSVPS.map(elem => {
      if(elem._id == req.body.RSVPid) {
        elem.attending = true
      };

      return elem;
    });

    db.Users.findOneAndUpdate({ _id: req.user._id}, {$set: {RSVPS: newRSVP}}, function(err, data){
      if (err) {
        console.log(err);
      } else{
        console.log(data)
      };

      return res.json(data[0]);
      
    }).catch(err => res.status(422).json(err));
  },

  findOneAndUpdateNoAttend:function(req, res) {
    const newRSVP = req.user.RSVPS.map(elem => {
      if(elem._id == req.body.RSVPid) {
        elem.notAttending = true
      }
      return elem;
    });

    db.Users.findOneAndUpdate({ _id: req.user._id}, {$set: {RSVPS: newRSVP}}, function(err, data){
      if (err) {
        console.log(err);
      } else{
        console.log(data)
      };

      return res.json(data[0]);

    }).catch(err => res.status(422).json(err));
  }
};