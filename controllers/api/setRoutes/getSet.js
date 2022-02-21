// >>> hy
// DEBUGGING:
const pageToRender = 'lego';
// <<< hy

const router = require('express').Router();
const { Set } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getSingleLegoModel = await Set.findByPk(req.params.id);

    const singleLegoModel = getSingleLegoModel.get({ plain: true });

    res
      .status(200)
      .json(singleLegoModel)
      .render(pageToRender, { singleLegoModel });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
