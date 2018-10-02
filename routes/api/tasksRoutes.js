const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
// router.route("/")
//   .get(tasksController.findAll);

// Matches with "/api/tasks/:id"
// router
//   .route("/:id")
//   .get(tasksController.findById);
  
  router.route("/")
  .put(tasksController.findOneAndUpdate);

module.exports = router;