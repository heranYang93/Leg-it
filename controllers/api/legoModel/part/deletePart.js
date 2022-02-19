const router = require('express').Router();
const { Part, LegoPart } = require('../../../../models');
const withAuth = require('../../../../utils/auth');

router.delete('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deletePartModel = await Part.destroy({
      where: { id: req.params.id },
    });

    const deleteAssociation = LegoPart.destroy({
      where: { part_id: req.params.id },
    });
    console.log('in delete part route');
    res.status(200).json(deleteAssociation).json(deletePartModel);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
