const router = require('express').Router();
const { Lego, LegoPart } = require('../../../../models');
const withAuth = require('../../../../utils/auth');

router.delete('/:id', withAuth, async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteLegoModel = await Lego.destroy({
      where: { id: req.params.id },
    });

    const deleteAssociation = LegoPart.destroy({
      where: { lego_id: req.params.id },
    });

    res.status(200);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
