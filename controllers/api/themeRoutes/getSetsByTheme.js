// >>> hy
const pageToRender = 'theme';
// <<< hy

const router = require('express').Router();
const { Theme, Set } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getSetsRelatedToThisTheme = await Theme.findOne({
      where: { id: req.params.id },
      include: Set,
    });
    const setsInThisTheme = getSetsRelatedToThisTheme.sets.map((singleSet) => {
      return singleSet.get({ plain: true });
    });

    console.log(`IN GET THEME ROUTE, GOT THEME ID:${req.params.id}`);

    res
      .status(200)
      .json(setsInThisTheme)
      .render(pageToRender, { setsInThisTheme });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
