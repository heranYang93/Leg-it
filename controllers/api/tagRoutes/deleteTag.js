const router = require('express').Router();
const { Tag, TagToPost } = require('../../../../models');
const withAuth = require('../../../../utils/auth');

router.delete('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteTagModel = await Tag.destroy({
      where: { id: req.params.id },
    });
    const deleteCorrelationModel = await TagToPost.destroy({
      where: { tag_id: req.params.id },
    });
    const deleteTagResult = deleteTagModel.get({ plain: true });
    const deleteCorrelationResult = deleteCorrelationModel.map(
      (singleCorrelation) => {
        return singleCorrelation.get({ plain: true });
      }
    );

    console.log(`IN DELETE TAG ROUTE, DELETED TAG ID:${deleteTagResult.id}`);

    res.status(200).json(deleteTagResult, deleteCorrelationResult);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
