const db = require("../models");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");

// Defining methods for the userController
module.exports = {
  findById: function (req, res) {
    db.Users
      .findById(req.body.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    console.log("Email: " + req.body.email.email);
    console.log("PW: " + req.body.email.password);
    db.Users
      .findOne({
        email: req.body.email.email
      }, (err, user) => {
        if (!user) {
          console.log("error email: " + err);
          return res.status(401).send({ success: false });
        } else {
          user.comparePassword(req.body.email.password, (err, isMatch) => {
            if (err || !isMatch) {
              console.log("error password: " + err);
              return res.status(401).send({ success: false });
            }
            else {
              console.log("successful login: " + isMatch);

              const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

              console.log("TOKEN: " + token);

              return res.status(200).send({ success: true, token: token });
            }
          });
        }
      });

  },
  create: function (req, res) {

    const newUser = {
      email: req.body.email,
      password: req.body.password,
      brideName: req.body.bride,
      groomName: req.body.groom,
      location: req.body.location,
      dateOfWedding: req.body.date,
      tasks:[
        { task: "Collect design inspiration",
          timeCategory: 12,
          completed: false
        },
        { task: "Set a budget",
        timeCategory: 12,
        completed: false
      },
      { task: "Book ceremony and reception venues",
      timeCategory: 12,
      completed: false
    },
    { task: "Compile your guest list and collect addresses",
    timeCategory: 12,
    completed: false
  },
  { task: "Choose your wedding party",
  timeCategory: 12,
  completed: false
},


      ]
    };
    console.log(newUser);
    db.Users
      .create(newUser)
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  }
};