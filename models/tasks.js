const mongoose = require("mongoose");
const Schema = tasks.Schema;

const tasksSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  timeCategory: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false }
});

const Tasks = mongoose.model("Tasks", tasksSchema);

module.exports = Tasks;