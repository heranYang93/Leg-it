const router = require('express').Router();

const legoRoutes = require('./lego');
const partRoutes = require('./part');
const associationRoutes = require('./association');

//'/api/product/lego'
//'/create'
//'/edit'
//'/delete'
//'/getSingle'
//'/getBranches'
router.use('/lego', legoRoutes);
//'/api/product/part'
router.use('/part', partRoutes);
//'/api/product/associate'
router.use('/associate', associationRoutes);

module.exports = router;
