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
    console.log("made it to controller. newRSVP is: " + newRSVP)
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

  findOneAndUpdateAttend:function(req, res) {

    console.log(" ----------- got here");
    console.log(" ----------- " + req.body.RSVPid);


    const newRSVP = req.user.RSVPS.map(elem => {
      if(elem._id == req.body.RSVPid) {
        console.log(" ---------- " + elem._id + " is attending");
        elem.attending = true
      }
      console.log(elem);
      return elem;
    })


      db.Users.findOneAndUpdate({ _id: req.user._id}, {$set: {RSVPS: newRSVPS}
      }, function(err, data){
        if (err) {
          console.log(err);
        } else{
          console.log(data)
        } 
        return res.json(data[0])
      })
      // .then(res => res.json(res))
      .catch(err => res.status(422).json(err));
    },




  findOneAndUpdateNoAttend:function(req, res) {

    console.log(" ----------- got here");
    console.log(" ----------- " + req.body.RSVPid);


    const newRSVP = req.user.RSVPS.map(elem => {
      if(elem._id == req.body.RSVPid) {
        console.log(" ---------- " + elem._id + " is not attending");
        elem.notAttending = true
      }
      console.log(elem);
      return elem;
    })


      db.Users.findOneAndUpdate({ _id: req.user._id}, {$set: {RSVPS: newRSVPS}
      }, function(err, data){
        if (err) {
          console.log(err);
        } else{
          console.log(data)
        } 
        return res.json(data[0])
      })
      // .then(res => res.json(res))
      .catch(err => res.status(422).json(err));

};