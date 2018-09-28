const router = require("express").Router();
const userRoutes = require("./userRoutes");
const rsvpRoutes = require("./rsvpRoutes");
const vendorRoutes = require("./vendorRoutes");
const tasksRoutes = require("./tasksRoutes");

//routes
router.use("/users", userRoutes);
router.use("/rsvps", rsvpRoutes);
router.use("/vendors", vendorRoutes);
router.use("/tasks", tasksRoutes);

module.exports = router;