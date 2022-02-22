const router = require('express').Router();
const { User, Post, Comment, Like } = require('../models');

router.get('/', async (req, res) => {
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

router.get('/posts/:id', async (req, res) => {
  try {
    const dbpostsData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          required: true,
          attributes: {
            exclude: ['password', 'email'],
          },
        },
        {
          model: Like,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              required: true,
              attributes: { exclude: ['password', 'email'] },
            },
          ],
        },
      ],
    });
    const postsData = dbpostsData.get({ plain: true });
    postsData.comments.map(
      (e) =>
        (e.signedIn = 
          req.session.loggedIn && e.user_id === req.session.user.id)
    );
    console.log(postsData);
    res.render('singlePost', {
      title: 'Lego Posts',
      postsData: [postsData],
      signedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      comments: postsData.comments,
      user: req.session.user.username,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
