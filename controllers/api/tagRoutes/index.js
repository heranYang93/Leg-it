const router = require('express').Router();

const createTag = require('./createTag');
const deleteTag = require('./deleteTag');
const getPostByTag = require('./getPostsByTag');
const getTopX = require('./getTopX');
const getTagByPost = require('./getTagsByPost');
const getPureTag = require('./getTagsByPost_pure');

router.use('/get', getTopX);
router.use('/getTags', getTagByPost);
router.use('/create', createTag);
router.use('/delete', deleteTag);
router.use('/getPosts', getPostByTag);
router.use('/getPureTags', getPureTag);

module.exports = router;
