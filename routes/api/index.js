const router = require("express").Router();
const userRoutes = require("./userRoutes");
const rsvpRoutes = require("./rsvpRoutes");
const vendorRoutes = require("./vendorRoutes");
const tasksRoutes = require("./tasksRoutes");
const passport = require("passport");

router.get("/users", passport.authenticate("jwt", {session: false}), function(req, res){
    res.json(req.user);
});

router.use("/users",  userRoutes);

router.use("/rsvps",passport.authenticate("jwt", {session: false}), rsvpRoutes);

router.use("/vendors", passport.authenticate("jwt", {session: false}), vendorRoutes);

router.use("/tasks", passport.authenticate("jwt", {session: false}), tasksRoutes);

module.exports = router;