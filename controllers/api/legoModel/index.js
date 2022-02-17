const router = require('express').Router();

const legoRoutes = require('./lego');
const partRoutes = require('./part');
const associationRoutes = require('./association');

router.use('/lego', legoRoutes);
router.use('/part', partRoutes);
router.use('/associate', associationRoutes);

module.exports = router;
