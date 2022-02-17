const router = require('express').Router();
const postRoutes = require('./postRoutes');
const legoRoutes = require('./legoModel');

router.use('/posts', postRoutes);

//hy - import lego route >>>
router.use('/product', legoRoutes);
//<<< hy - import lego route

module.exports = router;
