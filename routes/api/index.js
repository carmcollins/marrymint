const router = require("express").Router();
const userRoutes = require("./userRoutes");
const rsvpRoutes = require("./rsvpRoutes");

//routes
router.use("/users", userRoutes);
router.use("/rsvps", rsvpRoutes);

module.exports = router;