const router = require('express').Router();
const { Product, Category } = require('../../models')

/**
 * Contains the router for the CRUD operations for Product model accessibal at /api/products endpoint.
 * Supported CRUD operations are GET BY ID, GET ALL, CREATE, UPDATE and DELETE.
 */



//Fetches all the Products with associated Category and applicable Discounts.
router.get('/', (request, response) => {
    Product.findAll(
        {
        attributes: ['id', 'name', 'description', 'price', 'image', 'stock'],
        include: [
            {
                model: Category,
                attributes: ['name']
            }
        ]
    }
    )
        .then(products => response.json(products))
        .catch(err => {
            console.log(err);
            response.status(500).json(err);
        });
});

module.exports = router;



