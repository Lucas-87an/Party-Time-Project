const router = require("express").Router();
// Services Router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

// Party Router
const PartyRouter = require("./parties");

router.use("/", PartyRouter);

module.exports = router