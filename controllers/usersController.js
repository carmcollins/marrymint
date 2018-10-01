const db = require("../models");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");

// Defining methods for the userController
module.exports = {
  findById: function (req, res) {
    db.Users
      .findById(req.body._id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findAndUpdate: function (req, res) {
    db.Users
      .findById(req.body._id)
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
              userid = {_id: user._id};
              const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

              console.log("TOKEN: " + token);

              return res.status(200).send({ success: true, token: token, userid: userid });
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
      tasks: [
        {
          task: "Collect design inspiration",
          timeCategory: 12,
          completed: false
        },
        {
          task: "Set a budget",
          timeCategory: 12,
          completed: false
        },
        {
          task: "Book ceremony and reception venues",
          timeCategory: 12,
          completed: false
        },
        {
          task: "Compile your guest list and collect addresses",
          timeCategory: 12,
          completed: false
        },
        {
          task: "Choose your wedding party",
          timeCategory: 12,
          completed: false
        },
        {
          task: "Book a photographer and videographer",
          timeCategory: 12,
          completed: false
        },
        {
          task: "Schedule engagement photos",
          timeCategory: 12,
          completed: false
        },
        {
          task: "Shop for a wedding dress, shoes and accessories",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Choose a ceremony officiant",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Reserve hotel blocks for out of town guests",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Book music for ceremony and reception",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Hire a florist",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Book a caterer and select menu",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Design stationery suite and paper goods",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Reserve rentals for ceremony and reception",
          timeCategory: 9,
          completed: false
        },
        {
          task: "Set up a registry",
          timeCategory: 6,
          completed: false
        },
        {
          task: "Send out save the dates",
          timeCategory: 6,
          completed: false
        },
        {
          task: "Shop for groom and wedding party attire",
          timeCategory: 6,
          completed: false
        },
        {
          task: "Buy wedding bands",
          timeCategory: 6,
          completed: false
        },
        {
          task: "Schedule cake and tastings and book baker",
          timeCategory: 6,
          completed: false
        },
        {
          task: "Plan rehearsal dinner",
          timeCategory: 6,
          completed: false
        },
        {
          task: "Organize honeymoon",
          timeCategory: 6,
          completed: false
        },
        {
          task: "Schedule hair and makeup trials and book stylists",
          timeCategory: 4,
          completed: false
        },
        {
          task: "Secure transportation for guests",
          timeCategory: 4,
          completed: false
        },
        {
          task: "Hire lighting specialist",
          timeCategory: 4,
          completed: false
        },
        {
          task: "Meet with officiant and plan ceremony service",
          timeCategory: 4,
          completed: false
        },
        {
          task: "Send out invitations",
          timeCategory: 4,
          completed: false
        },
        {
          task: "Obtain marriage license",
          timeCategory: 2,
          completed: false
        },
        {
          task: "Schedule dress fitting with shoes and accessories",
          timeCategory: 2,
          completed: false
        },
        {
          task: "Arrange seating chart",
          timeCategory: 2,
          completed: false
        },
        {
          task: "Book hair cut and color",
          timeCategory: 2,
          completed: false
        },
        {
          task: "Schedule manicure and pedicure",
          timeCategory: 2,
          completed: false
        },
        {
          task: "Prepare toasts for rehearsal dinner and wedding reception",
          timeCategory: 2,
          completed: false
        },
        {
          task: "Prepare final payment and gratuity envelopes for vendors",
          timeCategory: 2,
          completed: false
        }]
    };
    console.log(newUser);
    db.Users
      .create(newUser)
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  }
};