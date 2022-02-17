const router = require('express').Router();

const createPart = require('./createPart');
const editPart = require('./editPart');
const deletePart = require('./deletePart');
const getPart = require('./getPart');
const getPartWithLego = require('./getPartWithLegos');

router.use('/create', createPart);
router.use('/edit', editPart);
router.use('/delete', deletePart);
router.use('/getSingle', getPart);
router.use('/getBranches', getPartWithLego);

module.exports = router;
