const router = require('express').Router();
const { Tag, TagToPost } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const newTagModel = await Tag.create({ title: req.body.title });
    const newTag = newTagModel.get({ plain: true });
    const newCorrelationModel = await TagToPost.create({
      tag_id: newTag.id,
      post_id: req.body.post_id,
    });
    const newCorrelation = newCorrelationModel.get({ plain: true });

    console.log(`IN CREATE TAG ROUTE, CREATED TAG ID:${newTag.id}`);

    res.status(200).json(newTag).json(newCorrelation);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
