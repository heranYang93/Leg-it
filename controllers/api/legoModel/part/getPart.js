const router = require('express').Router();
const { Part } = require('../../../../models');
const pageToRender = 'lego';
const withAuth = require('../../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getPartModel = await Part.findByPk(req.params.id);

    const partModel = getLegoModel.get({ plain: true });

    res.status(200).json(partModel);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
