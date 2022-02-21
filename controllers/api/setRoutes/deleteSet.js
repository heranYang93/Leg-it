const router = require('express').Router();
const { Set } = require('../../../../models');
const withAuth = require('../../../../utils/auth');

router.delete('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteSetModel = await Set.destroy({
      where: { id: req.params.id },
    });
    const deleteSetResult = deleteSetModel.get({ plain: true });

    console.log(`IN DELETE SET ROUTE, DELETED SET ID:${deleteSetResult.id}`);

    res.status(200).json(deleteSetResult);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
