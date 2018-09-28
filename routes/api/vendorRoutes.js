const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

// Matches with "/api/vendors"
router.route("/")
  .get(vendorController.findAll);

// Matches with "/api/vendors/:id"
router
  .route("/:id")
  .get(vendorController.findById);
  //need to populate with user id??
  

module.exports = router;
