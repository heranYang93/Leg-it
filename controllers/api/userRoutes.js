const tagRoutesrouter = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

// Get one user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      raw: true,
      where: { username: req.body.name },
    });
    console.log(user);
    if (!user) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    console.log(req.body.password);
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: user.id,
        username: user.username,
      };
      res.json({ success: true });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new user
router.post('/signup', async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        id: user.get('id'),
        username: user.get('username'),
      };
      res.status(200).json({ success: true });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
