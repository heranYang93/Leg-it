const router = require('express').Router();
const { Follower } = require('../../models');

router.post('/:followerId', async (req, res) => {
  try {
    console.log(req.session);
    const { followerId } = req.params;
    // console.log(followerId, 'followerId');
    const userId = req.session.user.id;
    // console.log(userId, 'userId');
    const result = await Follower.findOne({
      where: { user_id: userId, follower_id: followerId },
    });

    console.log(result);
    if (!result) {
      await Follower.create({ user_id: userId, follower_id: followerId });
      res.status(200).json({
        follow: true,
        msg: `successfully followed user id:${followerId}`,
      });
    } else {
      await Follower.destroy({ where: result.dataValues });
      res.status(200).json({
        follow: false,
        msg: `successfully unfollowed user id:${followerId}`,
      });
    }
  } catch (error) {
    res.status(500).json({ error: { msg: 'Error in changing follow status' } });
  }
});

module.exports = router;
