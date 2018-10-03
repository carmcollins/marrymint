const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorsSchema = new Schema({
  // _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  category:{ type: String, required: true },
  link: { type: String, required: true },
  photo: { type: String, required: true},
  description: { type: String, required: true}
});

const Vendors = mongoose.model("Vendors", VendorsSchema);

module.exports = Vendors;



