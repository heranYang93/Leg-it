const router = require('express').Router();
// const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
