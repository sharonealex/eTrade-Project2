const router = require('express').Router();
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const addressRoutes = require('./address-routes')

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('./address', addressRoutes)

module.exports = router;