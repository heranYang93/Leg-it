// >>> hy for debugging
const pageToRender = 'tag';
// <<< hy for debugging

const router = require('express').Router();
const { Post, Theme } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getPostsByTag = await Theme.findOne({
      where: { id: req.params.id },
      include: Post,
    });

    const postsWithThisTag = getPostsByTag.posts.map((singlePost) => {
      return singlePost.dataValues;
    });

    console.log(
      `IN GET POST BY THEME ROUTE, GOT THEME ID:${getPostsByTag.dataValues.id}`
    );

    res
      .status(200)
      .json(postsWithThisTag)
      .render(pageToRender, { postsWithThisTag });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
