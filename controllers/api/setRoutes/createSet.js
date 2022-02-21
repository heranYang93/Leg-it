const router = require('express').Router();
const { Set } = require('../../../models');
const withAuth = require('../../../utils/auth');

// This route create a Lego model
// request body:
// {
// setName - str,
// setPost - int,
// [setImages] - [str],
// set description - [str]
// }

router.post('/', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const newSetModel = await Set.create({
      name: req.body.setName,
      image: req.body.setImage,
      post_id: req.body.setPostId,
      theme_id: req.body.themeId,
    });

    const newSet = newSetModel.get({ plain: true });

    console.log(`IN DELETE SET ROUTE, DELETED SET ID:${newSet.id}`);

    res.status(200).json(newSet);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
