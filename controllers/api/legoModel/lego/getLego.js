const router = require('express').Router();
const { Lego } = require('../../../../models');
const pageToRender = 'lego';
//Authentication method tbd
// const withAuth = require('../../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getLegoModel = await Lego.findByPk(req.params.id);

    const legoModel = getLegoModel.get({ plain: true });

    res.status(200).render(pageToRender, { legoModel });
  } catch (err) {
    console.error(err.message);
  }
});
