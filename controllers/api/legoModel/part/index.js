const router = require('express').Router();

const createPart = require('./createLego');
const deletePart = require('./deleteLego');
const getPart = require('./getLego');
const getPartWithLego = require('./getLegoWithParts');

router.use('/create', createPart);
router.use('/delete', deletePart);
router.use('/getSingle', getPart);
router.use('/getBranches', getPartWithLego);

module.exports = router;
