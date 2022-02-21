const router = require('express').Router();
const postRoutes = require('./postRoutes');
const legoRoutes = require('./set');

router.use('/posts', postRoutes);

//hy - import lego route >>>
router.use('/set', setRoutes);
//<<< hy - import lego route

module.exports = router;
