module.exports = {
  get(req, res) {
    res.render('index', {
      user: req.user
    });
  }
};
