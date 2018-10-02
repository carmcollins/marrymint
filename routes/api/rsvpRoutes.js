const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController");

  

// Matches with "/api/rsvps/"
router
  .route("/")
  .get(rsvpController.findById);

  router
  .route("/")
  .post(rsvpController.create);

  // router
  // .route("/:id")
  // .get(rsvpController.findById)
  // .put(rsvpController.updateAttend);


module.exports = router;