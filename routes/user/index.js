const router = require("express").Router();
const userApi = require("./userApi");

router.use("/eTrade", userApi);

module.exports = router;
