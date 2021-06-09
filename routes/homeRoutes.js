const router = require("express").Router();
const { Product, Category } = require("../models");

router.get("/", (req, res) => {
  res.render("all");
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

router.get("/mens", async (req, res) => {
  try {
    const productsData = await Product.findAll({
      where: {
        category_id: 2,
      },
      include: [{ model: Category }],
    });
    const products = productsData.map((item) => item.get({ plain: true }));
    res.render("mens", { products });
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
    res.render("product", { product });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/womens", async (req, res) => {
  try {
    const productsData = await Product.findAll({
      where: {
        category_id: 1,
      },
      include: [{ model: Category }],
    });
    const products = productsData.map((item) => item.get({ plain: true }));
    res.render("womens", { products });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/kids", async (req, res) => {
  try {
    const productsData = await Product.findAll({
      where: {
        category_id: 3,
      },
      include: [{ model: Category }],
    });
    const products = productsData.map((item) => item.get({ plain: true }));
    res.render("kids", { products });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account", (req, res) => {
  res.render("account");
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/eTrade/account");
    return;
  }
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/clothing-details", (req, res) => {
  res.render("clothing-details");
});

router.get("/products", (req, res) => {
  res.render("products");
});

module.exports = router;
