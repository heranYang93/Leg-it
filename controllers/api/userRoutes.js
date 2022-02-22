const tagRoutesrouter = require('express').Router();
const User = require('../../models/User');

// Get one user
router.get('/login', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(user);
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
