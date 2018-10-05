const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router.route("/")
  .put(tasksController.findOneAndUpdate);

module.exports = router;