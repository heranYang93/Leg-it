const router = require('express').Router();
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const tagRoutes = require('./tagRoutes');
const followRoutes = require('./followRoutes');

router.use('/posts', postRoutes);
router.use('/like', likeRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/tag', tagRoutes);
router.use('/follow', followRoutes);

module.exports = router;
