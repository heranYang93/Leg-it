const router = require('express').Router();
const { Theme } = require('../../../models');
const adminAuth = require('../../../utils/admin');

router.delete('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteThemeModel = await Theme.destroy({
      where: { id: req.params.id },
    });

    console.log(`IN DELETE THEME ROUTE, DELETED THEME ID:${req.params.id}`);

    res.status(200).json(deleteThemeModel);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
