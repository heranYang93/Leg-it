const router = require('express').Router();

const createPart = require('./createLego');
const editPart = require('./editPart');
const deletePart = require('./deleteLego');
const getPart = require('./getLego');
const getPartWithLego = require('./getLegoWithParts');

router.use('/create', createPart);
router.use('/edit', editPart);
router.use('/delete', deletePart);
router.use('/getSingle', getPart);
router.use('/getBranches', getPartWithLego);

module.exports = router;
