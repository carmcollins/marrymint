const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController");

  

// Matches with "/api/rsvps/"
router
  .route("/:id")
  .get(rsvpController.findById);

  router
  .route("/:id")
  .post(rsvpController.create);

  router
  .route("/:id")
  .get(rsvpController.findById)
  // .put(rsvpController.updateAttend);


module.exports = router;