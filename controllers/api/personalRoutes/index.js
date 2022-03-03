const router = require('express').Router();

const getPosts = require('./getPosts');

router.use('/', getPosts);

module.exports = router;
