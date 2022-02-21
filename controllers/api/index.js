const router = require('express').Router();
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts', postRoutes);
router.use('/like', likeRoutes);
router.use('/users', userRoutes);

//hy -  Set, Theme >>>
const setRoutes = require('./set');
const themeRoutes = require('./themeRoutes');
router.use('/set', setRoutes);
router.use('/theme', themeRoutes);
//<<< hy - Set, Theme

module.exports = router;
