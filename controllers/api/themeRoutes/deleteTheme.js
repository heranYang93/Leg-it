const router = require('express').Router();
const { Theme } = require('../../../../models');
const adminAuth = require('../../../utils/admin');

router.delete('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteThemeModel = await Theme.destroy({
      where: { id: req.params.id },
    });
    const deleteThemeResult = deleteThemeModel.get({ plain: true });

    console.log(
      `IN DELETE THEME ROUTE, DELETED THEME ID:${deleteThemeResult.id}`
    );

    res.status(200).json(deleteThemeResult);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
