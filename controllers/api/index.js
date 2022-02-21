const router = require('express').Router();
const postRoutes = require('./postRoutes');
const setRoutes = require('./set');
const likeRoutes = require('./likeRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts', postRoutes);
router.use('/like', likeRoutes);
router.use('/users', userRoutes);

//hy - import lego route >>>
router.use('/set', setRoutes);
//<<< hy - import lego route

module.exports = router;
