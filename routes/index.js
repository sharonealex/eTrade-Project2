const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')


router.use('/eTrade/api', apiRoutes);
router.use('/eTrade', homeRoutes)




module.exports = router;    