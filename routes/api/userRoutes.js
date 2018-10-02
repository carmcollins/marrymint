const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport");
  

// Matches with "/api/users/"
router
  .route("/findById")
  .get(passport.authenticate("jwt", {session: false}), usersController.findById);

  router
  .route("/")
  .post(usersController.create);

  router
  .route("/login")
  .post(usersController.findOne);

  // router
  // .route("/:id")
  // .put(usersController.findAndUpdate);


module.exports = router;
