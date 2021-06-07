const router = require("express").Router();
const { Product, Category } = require("../../models");

/**
 * Contains the router for the CRUD operations for Product model accessibal at /api/products endpoint.
 * Supported CRUD operations are GET BY ID, GET ALL, CREATE, UPDATE and DELETE.
 */

//Fetches all the Products with associated Category and applicable Discounts.
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Fetch Products by Id  with associated Category

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    if (!product) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
