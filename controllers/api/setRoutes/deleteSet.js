const router = require('express').Router();
const { Set } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.delete('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteSetModel = await Set.destroy({
      where: { id: req.params.id },
    });

    console.log(`IN DELETE SET ROUTE, DELETED SET ID:${req.params.id}`);

    res.status(200).json(deleteSetModel);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
