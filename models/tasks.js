const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  task: { type: String, required: true },
  timeCategory: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false }
});

const Tasks = mongoose.model("Tasks", tasksSchema);

module.exports = Tasks;