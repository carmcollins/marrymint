const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/vendors"
router.route("/")
  .get(tasksController.findAll);

// Matches with "/api/vendors/:id"
router
  .route("/:id")
  .get(tasksController.findById);
  
  

module.exports = router;