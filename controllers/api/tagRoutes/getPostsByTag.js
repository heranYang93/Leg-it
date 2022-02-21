// >>> hy for debugging
const pageToRender = 'tag';
// <<< hy for debugging

const router = require('express').Router();
const { Post, Tag } = require('../../../../models');
const withAuth = require('../../../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    //update lego model itself and get the lego model id
    const getPostsByTag = await Tag.findByPk(req.params.id, {
      attributes: { include: Post },
    });

    const postsWithThisTag = getPostsByTag.map((singlePost) => {
      return singlePost.get({ plain: true });
    });

    console.log(
      `IN GET POST BY TAG ROUTE, GOT TAG ID:${postsWithThisTag[0].id}`
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
