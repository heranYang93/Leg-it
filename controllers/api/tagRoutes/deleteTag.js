const router = require('express').Router();
const { Tag, TagToPost } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.delete('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteTagModel = await Tag.destroy({
      where: { id: req.params.id },
    });

    console.log(`IN DELETE TAG ROUTE, DELETED TAG ID:${req.params.id}`);

    res.status(200).json(deleteTagModel);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
