const router = require('express').Router();
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const addressRoutes = require('./address-routes')
const userRoutes = require('./user-routes');
const cartRoutes = require('./cart-routes');



router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/address', addressRoutes)
router.use('/users', userRoutes);
router.use('/cart', cartRoutes);

module.exports = router;