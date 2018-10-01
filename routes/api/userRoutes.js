const router = require("express").Router();
const usersController = require("../../controllers/usersController");

  

// Matches with "/api/users/"
router
  .route("/:id")
  .get(usersController.findById);

  router
  .route("/")
  .post(usersController.create);

  router
  .route("/login")
  .post(usersController.findOne);

  router
  .route("/:id")
  .put(usersController.findAndUpdate);


module.exports = router;
