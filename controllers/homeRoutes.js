const router = require('express').Router();
const { User, Post, Comment, Like } = require('../models');

router.get('/posts', async (req, res) => {
  try {
    const dbpostsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password', 'email'],
          },
        },
        {
          model: Like,
        },
        {
          model: Comment,
        },
      ],
      order: [['updatedAt', 'DESC']],
    });
    const postsData = dbpostsData.map((el) => el.get({ plain: true }));
    console.log(postsData);
    res.render('posts', {
      title: 'Lego Posts',
      postsData: postsData,
      signedIn: req.session.logged_in,
      loggedOut: !req.session.logged_in,
      user: req.session.user_name,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.get('/', async (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
