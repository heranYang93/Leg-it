const adminAuth = (req, res, next) => {
  if (req.session.logged_in && req.session.admin) {
    next();
  } else {
    res.send('Authorization Required');
  }
};

module.exports = adminAuth;
