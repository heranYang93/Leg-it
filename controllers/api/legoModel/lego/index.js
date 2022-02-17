const router = require('express').Router();

const createLego = require('./createLego');
const deleteLego = require('./deleteLego');
const getLego = require('./getLego');
const getLegoWithParts = require('./getLegoWithParts');

router.use('/create', createLego);
router.use('/delete', deleteLego);
router.use('/getSingle', getLego);
router.use('/getBranches', getLegoWithParts);

module.exports = router;
