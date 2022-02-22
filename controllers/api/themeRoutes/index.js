const router = require('express').Router();

const getPostsByTheme = require('./getPostsByTheme');
const deleteTheme = require('./deleteTheme');

router.use('/getPosts', getPostsByTheme);
router.use('/delete', deleteTheme);

module.exports = router;
