const router = require('express').Router();

const createTag = require('./createTag');
const deleteTag = require('./deleteTag');
const getPostByTag = require('./getPostsByTag');
const getTopX = require('./getTopX');

router.use('/get', getTopX);
router.use('/create', createTag);
router.use('/delete', deleteTag);
router.use('/getPosts', getPostByTag);

module.exports = router;
