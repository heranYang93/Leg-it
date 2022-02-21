const router = require('express').Router();

const createSet = require('./createSet');
const editSet = require('./editSet');
const deleteSet = require('./deleteSet');
const getSet = require('./getSet');
const getSets = require('./getSets');

router.use('/create', createSet);
router.use('/edit', editSet);
router.use('/delete', deleteSet);
router.use('/getSingle', getSet);
router.use('/getAll', getSets);

module.exports = router;
