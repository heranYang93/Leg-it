const router = require('express').Router();
const { Tag, TagToPost } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const deleteTagAssociation = await TagToPost.destroy({
      where: {
        tag_id: req.body.tag_id,
        post_id: req.body.post_id,
      },
    });

    const findResidualAssociate = await TagToPost.findAll({
      where: {
        tag_id: req.body.tag_id,
      },
    });
    if (findResidualAssociate.length === 0) {
      const deleteTag = await Tag.destroy({
        where: {
          id: req.body.tag_id,
        },
      });
    }

    // const t2pArr = findTag.map((x) => x.get({ plain: true }));

    res.status(200).json(deleteTagAssociation);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
