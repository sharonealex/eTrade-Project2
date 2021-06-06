const router = require('express').Router();
const { Product, Category } = require('../../models')

/**
 * Contains the router for the CRUD operations for Product model accessibal at /api/products endpoint.
 * Supported CRUD operations are GET BY ID, GET ALL, CREATE, UPDATE and DELETE.
 */



//Fetches all the Products with associated Category and applicable Discounts.

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;



