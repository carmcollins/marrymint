const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController");

// Matches with "/api/rsvps/"
router
  .route("/")
  .get(rsvpController.findById);

router
  .route("/")
  .post(rsvpController.create);

router.route("/attend")
  .put(rsvpController.findOneAndUpdateAttend);

router.route("/noattend")
  .put(rsvpController.findOneAndUpdateNoAttend);

module.exports = router;