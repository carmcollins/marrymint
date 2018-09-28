const mongoose = require("mongoose");
const Schema = users.Schema;

const usersSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  brideName: { type: String, required: true },
  groomName: { type: String, required: true },
  location: { type: String, required: true },
  dateOfWedding: { type: Date},
  vendors: {type: Schema.Types.ObjectId,
    ref: 'Vendors'},
  tasks:{ type: Schema.Types.ObjectId,
      ref: 'Tasks'
  }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;