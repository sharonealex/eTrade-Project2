const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("FIRST ROUTE");
});

module.exports = router;
