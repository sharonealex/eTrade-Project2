const router = require("express").Router();
const userApi = require("./userApi");

router.use("/api/user", userApi);

module.exports = router;
