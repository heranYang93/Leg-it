const router = require('express').Router();
const { Lego, Part } = require('../../../../models');
const pageToRender = 'lego';

//Authentication method tbd
// const withAuth = require('../../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getPartModelWithLegos = await Part.findByPk(req.params.id, {
      include: [{ model: Lego }],
    });

    const partModelWithLegos = getPartModelWithLegos.get({ plain: true });

    res.status(200).json(partModelWithLegos);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
