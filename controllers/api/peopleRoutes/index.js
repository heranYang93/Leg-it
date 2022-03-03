const router = require('express').Router();

const getPeople = require('./getPeople');

router.use('/', getPeople);

module.exports = router;
