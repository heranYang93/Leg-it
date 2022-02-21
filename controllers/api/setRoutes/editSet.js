const router = require('express').Router();
const { Set } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/:id', async (req, res) => {
  try {
    const editSetModel = await Set.update(
      {
        name: req.body.setName,
        image: req.body.setImage,
        description: req.body.description,
        post_id: req.body.setPostId,
        theme_id: req.body.themeId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    console.log(`IN EDIT SET ROUTE, EDITED SET ID:${req.params.id}`);
    res.status(200).json(editSetModel);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
