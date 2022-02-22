const router = require('express').Router();
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/posts', postRoutes);
router.use('/like', likeRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
