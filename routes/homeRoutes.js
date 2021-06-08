const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("all", { loggedIn: req.session.loggedIn });
});

router.get("/about-us", (req, res) => {
  res.render("about-us");
});

router.get("/contact-us", (req, res) => {
  res.render("contact-us");
});

router.get("/legal", (req, res) => {
  res.render("legal");
});

router.get("/customer-support", (req, res) => {
  res.render("customer-support");
});

router.get("/track-order", (req, res) => {
  res.render("track-order");
});

router.get("/mens", (req, res) => {
  res.render("mens");
});

router.get("/womens", (req, res) => {
  res.render("womens");
});

router.get("/kids", (req, res) => {
  res.render("kids");
});

router.get("/login", (req, res) => {
  // if(req.session.loggedIn){
  //     res.redirect("/");
  //     return;
  // }
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/clothing-details", (req, res) => {
  res.render("clothing-details");
});

module.exports = router;
