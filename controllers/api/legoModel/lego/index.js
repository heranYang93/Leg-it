const router = require('express').Router();

const createLego = require('./createLego');
const editLego = require('./editLego');
const deleteLego = require('./deleteLego');
const getLego = require('./getLego');
const getLegoWithParts = require('./getLegoWithParts');

router.use('/create', createLego);
router.use('/edit', editLego);
router.use('/delete', deleteLego);
router.use('/getSingle', getLego);
router.use('/getBranches', getLegoWithParts);

module.exports = router;
