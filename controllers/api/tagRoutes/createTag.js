const router = require('express').Router();
const { Tag, TagToPost } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/', async (req, res) => {
  try {
    //update lego model itself and get the lego model id

    //Check if this tag exists already
    const checkTag = await Tag.findOne({ where: { title: req.body.title } });

    if (checkTag === null) {
      //If this tag did NOT exist

      const createTag = await Tag.create({
        title: req.body.title.toLowerCase(),
      });
      const newTag = createTag.get({ plain: true });

      let newCorrelationModel = await TagToPost.create({
        tag_id: newTag.id,
        post_id: req.body.post_id,
      });

      console.log(`NEW TAG TO NEW POST, TAG ID:${newTag.id}`);
      res.status(200).json(newCorrelationModel);
    } else {
      //If this tag exists already!

      const existingTagId = checkTag.dataValues.id;
      const checkConnection = await TagToPost.findOne({
        where: {
          tag_id: existingTagId,
          post_id: req.body.post_id,
        },
      });
      if (!checkConnection) {
        let createNewCorrelation = await TagToPost.create({
          tag_id: existingTagId,
          post_id: req.body.post_id,
        });
        res.status(200).json(createNewCorrelation);
      } else {
        res.status(400).json({ message: "Can't add the same tag" });
      }
    }
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
