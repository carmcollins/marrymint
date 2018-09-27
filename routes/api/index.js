const router = require("express").Router();
const apiRoutes = require("./apiRoutes");


//routes
router.use("/users", apiRoutes);

module.exports = router;