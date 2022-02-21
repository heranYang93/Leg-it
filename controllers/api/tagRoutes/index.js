const router = require('express').Router();

const createTag = require('./createTag');
const deleteTag = require('./deleteTag');
const getPostByTag = require('./getPostsByTag');

router.use('/createTag', createTag);
router.use('/delete', deleteTag);
router.use('/getPosts', getPostByTag);

module.exports = router;
