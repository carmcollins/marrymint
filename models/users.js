const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const tasksSchema = require("mongoose").model("Tasks").schema
const RSVPSchema = require("mongoose").model("RSVPS").schema

const UsersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  brideName: { type: String, required: true },
  vendors: {type: Schema.Types.ObjectId,
    ref: 'Vendors'},
   tasks:[tasksSchema],
   RSVPS:[RSVPSchema]
});

UsersSchema.pre("save", function (next) {
  if (this.isModified("password") || this.isNew) {
    bcrypt.hash(this.password, null, null, (err, hash) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      this.password = hash;
      return next();
    })
  }
});

UsersSchema.methods.comparePassword = function (pass, cb) {
  bcrypt.compare(pass, this.password, function (err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  })
}

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;