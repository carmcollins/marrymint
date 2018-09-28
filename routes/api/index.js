const router = require("express").Router();
const userRoutes = require("./userRoutes");
const rsvpRoutes = require("./rsvpRoutes");
const vendorRoutes = require("./vendorRoutes");

//routes
router.use("/users", userRoutes);
router.use("/rsvps", rsvpRoutes);
router.use("/vendors", vendorRoutes)

module.exports = router;