// >>> hy
// DEBUGGING:
const pageToRender = 'lego';
// <<< hy

const router = require('express').Router();
const { Set } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getAllSets = await Set.findAll();

    const allSets = getAllSets.map((singleSet) =>
      singleSet.get({ plain: true })
    );

    res.status(200).json(allSets).render(pageToRender, { allSets });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
