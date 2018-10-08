const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorsSchema = new Schema({
  number: { type: Number },
  name: { type: String, required: true },
  category:{ type: String, required: true },
  link: { type: String, required: true },
  photo: { type: String, required: true},
  description: { type: String, required: true}
});

const Vendors = mongoose.model("Vendors", VendorsSchema);

module.exports = Vendors;