const mongoose = require("mongoose");
const Schema = RSVPS.Schema;

const RSVPSSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  invited: { type: Boolean, required: true, default: true },
  attending: { type: Boolean, required: true, default: false },
  notAttending: { type: Boolean, required: true, default: false }
});

const RSVPS = mongoose.model("RSVPS", RSVPSSchema);

module.exports = RSVPS;