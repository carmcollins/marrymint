const router = require("express").Router();
const usersController = require("../../controllers/usersController");

  

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById);

  router
  .route("/")
  .post(usersController.create);


module.exports = router;
