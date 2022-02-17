const router = require('express').Router();
const postRoutes = require('./postRoutes');
const likeRoutes = require('./likeRoutes');

router.use('/posts', postRoutes);
router.use('/like', likeRoutes);

module.exports = router;
