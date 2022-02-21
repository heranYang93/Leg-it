const router = require('express').Router();
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts', postRoutes);
router.use('/like', likeRoutes);
router.use('/users', userRoutes);

//hy -  Set, Theme >>>
const setRoutes = require('./setRoutes');
const themeRoutes = require('./themeRoutes');
const tagRoutes = require('./tagRoutes');
router.use('/set', setRoutes);
router.use('/theme', themeRoutes);
router.use('/tag', tagRoutes);
//<<< hy - Set, Theme

module.exports = router;
