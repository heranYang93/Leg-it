const router = require('express').Router();
const { User, Post, Comment, Like, Tag, Follower } = require('../models');
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
      signedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});
router.get('/posts/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  try {
    const dbpostsData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          required: true,
          attributes: {
            exclude: ['password', 'email'],
          },
          include: [
            {
              model: Follower,
            },
          ],
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
        {
          model: Tag,
        },
      ],
    });
    const postsData = dbpostsData.get({ plain: true });
    postsData.comments.map(
      (e) =>
        (e.signedIn = req.session.loggedIn && e.user_id === req.session.user.id)
    );
    postsData.like =
      postsData.likes.filter((e) => e.user_id === req.session.user.id).length >
      0;
    postsData.follower =
      postsData.user.followers.filter((e) => e.user_id === req.session.user.id)
        .length > 0;
    res.render('singlePost', {
      title: 'Lego Posts',
      postsData: [postsData],
      signedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      comments: postsData.comments,
      user: req.session.user.username,
    });
  } catch (error) {
    res.status(404).render('error');
  }
});
router.get('/feed', async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  try {
    const dbpostsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password', 'email'],
          },
          include: [
            {
              model: Follower,
            },
          ],
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
        {
          model: Tag,
        },
      ],
      order: [['updatedAt', 'DESC']],
    });
    let postsData = dbpostsData.map((el) => el.get({ plain: true }));
    postsData.map(
      (e) =>
        (e.like =
          e.likes.filter((e) => e.user_id === req.session.user.id).length > 0)
    );
    postsData.map(
      (e) =>
        (e.follower =
          e.user.followers.filter((e) => e.user_id === req.session.user.id)
            .length > 0)
    );
    postsData = postsData.filter((e) => e.follower === true);
    console.log(postsData);
    res.render('feed', {
      title: 'Lego Posts',
      postsData: postsData,
      signedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      user: req.session.user.username,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});
router.get('/favourites', async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  try {
    const dbpostsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password', 'email'],
          },
          include: [
            {
              model: Follower,
            },
          ],
        },
        {
          model: Like,
        },
        {
          model: Comment,
        },
        {
          model: Tag,
        },
      ],
      order: [['updatedAt', 'DESC']],
    });
    const postsData = dbpostsData.map((el) => el.get({ plain: true }));
    postsData.map(
      (e) =>
        (e.like =
          e.likes.filter((e) => e.user_id === req.session.user.id).length > 0)
    );
    postsData.map(
      (e) =>
        (e.follower =
          e.user.followers.filter((e) => e.user_id === req.session.user.id)
            .length > 0)
    );
    const filteredData = postsData.filter((e) => e.like === true);
    console.log(filteredData);
    res.render('feed', {
      title: 'Lego Posts',
      postsData: filteredData,
      signedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      user: req.session.user.username,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});
router.get('/register', async (req, res) => {
  try {
    res.render('register');
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

router.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = router;
