const router = require('express').Router();
const { Lego } = require('../../../../models');
const pageToRender = 'lego';
const withAuth = require('../../../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getLegoModel = await Lego.findByPk(req.params.id);

    const legoModel = getLegoModel.get({ plain: true });

    res.status(200).render(pageToRender, { legoModel });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
