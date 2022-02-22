const router = require('express').Router();

const getSetsByTheme = require('./getSetsByTheme');
const deleteTheme = require('./deleteTheme');

router.use('/getSets', getSetsByTheme);
router.use('/delete', deleteTheme);

module.exports = router;
