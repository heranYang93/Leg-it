const router = require('express').Router();
const { Like, Post } = require('../../models');

router.post('/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    console.log(postId);
    const userId = req.session.user.id;
    const result = await Like.findOne({
      where: { user_id: userId, post_id: postId },
    });

    if (!result) {
      await Like.create({ user_id: userId, post_id: postId });
      res.status(200).json({ msg: `successfully liked post id:${postId}` });
    } else {
      await Like.destroy({ where: result.dataValues });
      res.status(200).json({ msg: `successfully unliked post id:${postId}` });
    }
  } catch (error) {
    res.status(500).json({ error: { msg: 'Error in changing like status' } });
  }
});

module.exports = router;
