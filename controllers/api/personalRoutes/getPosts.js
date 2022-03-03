const router = require('express').Router();
const { User, Post, Tag, Like } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  try {
    //get user info
    const userId = req.session.user.id;
    const userName = req.session.user.username;

    const db_postsByUser = await User.findByPk(userId, {
      attributes: { exclude: ['password', 'email'] },
      include: [
        {
          model: Post,
          required: true,
          include: [
            {
              model: Like,
            },
            {
              model: Tag,
            },
          ],
        },
      ],
    });

    const postsByUser = db_postsByUser.get({ plain: true });
    const postArr = postsByUser.posts;

    res.render('managePosts', {
      userName,
      postArr,
      signedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
