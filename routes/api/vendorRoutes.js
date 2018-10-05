const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

// Matches with "/api/vendors"
router.route("/")
  .get(vendorController.findAll);

router.route("/users/")
  .get(vendorController.findAllUsersVendors);

router.route("/user/")
  .get(vendorController.findUser);

router.route("/")
  .put(vendorController.deleteVendor);

router
  .route("/:id")
  .get(vendorController.findById);

router.route("/:category")
  .get(vendorController.findByCategory);

module.exports = router;