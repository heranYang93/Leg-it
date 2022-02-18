const router = require('express').Router();
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts', postRoutes);
router.use('/like', likeRoutes);
router.use('/users', userRoutes);

module.exports = router;
