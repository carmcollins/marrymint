const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const {Strategy: JwtStrategy, ExtractJwt} = require("passport-jwt"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));
// app.use(express.static("client/build"));

const passportOptions = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
}

passport.use(new JwtStrategy(
  passportOptions,
  (jwt_payload, done) => {
    Users.findOne({_id: jwt_payload._id}, (err, user) => {
      if(user) {
        done (null, user)
      } else {
        done (null, false)
      }
    })
  }
));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/marrymint"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});