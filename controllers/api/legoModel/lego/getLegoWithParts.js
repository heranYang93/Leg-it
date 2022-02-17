const router = require('express').Router();
const { Lego, Part } = require('../../../../models');
const pageToRender = 'lego';

//Authentication method tbd
// const withAuth = require('../../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getLegoModelWithParts = await Lego.findByPk(req.params.id, {
      include: [{ model: Part }],
    });

    const legoModelWithParts = getLegoModelWithParts.get({ plain: true });

    res.status(200).json(legoModelWithParts);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
