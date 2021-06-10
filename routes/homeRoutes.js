const router = require("express").Router();
const { Product, Category } = require("../models");

router.get("/", (req, res) => {
  res.render("all", { loggedIn: req.session.loggedIn });
});

router.get("/about-us", (req, res) => {
  res.render("about-us", { loggedIn: req.session.loggedIn });
});

router.get("/contact-us", (req, res) => {
  res.render("contact-us", { loggedIn: req.session.loggedIn });
});

router.get("/legal", (req, res) => {
  res.render("legal", { loggedIn: req.session.loggedIn });
});

router.get("/customer-support", (req, res) => {
  res.render("customer-support", { loggedIn: req.session.loggedIn });
});

// router.get("/track-order", (req, res) => {
//   res.render("track-order");
// });

// Mens
router.get("/mens", async (req, res) => {
  try {
    const productsData = await Product.findAll({
      where: {
        category_id: 2,
      },
      include: [{ model: Category }],
    });
    const products = productsData.map((item) => item.get({ plain: true }));
    res.render("mens", { products, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    const product = productData.get({ plain: true });
    res.render("product", { product, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Women
router.get("/womens", async (req, res) => {
  try {
    const productsData = await Product.findAll({
      where: {
        category_id: 1,
      },
      include: [{ model: Category }],
    });
    const products = productsData.map((item) => item.get({ plain: true }));
    res.render("womens", { products, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/womens/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    const product = productData.get({ plain: true });
    res.render("product", { product, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Kids
router.get("/kids", async (req, res) => {
  try {
    const productsData = await Product.findAll({
      where: {
        category_id: 3,
      },
      include: [{ model: Category }],
    });
    const products = productsData.map((item) => item.get({ plain: true }));
    res.render("kids", { products, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/kids/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    const product = productData.get({ plain: true });
    res.render("product", { product, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account", (req, res) => {
  res.render("account", { loggedIn: req.session.loggedIn });
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/eTrade/account");
    return;
  }
  res.render("login", { loggedIn: req.session.loggedIn });
});
router.get("/register", (req, res) => {
  res.render("register", { loggedIn: req.session.loggedIn });
});

router.get("/clothing-details", (req, res) => {
  res.render("clothing-details", { loggedIn: req.session.loggedIn });
});

router.get("/products", (req, res) => {
  res.render("products", { loggedIn: req.session.loggedIn });
});

module.exports = router;
