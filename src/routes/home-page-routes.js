const express = require('express');
const router = express.Router();

module.exports = function() {
  router.route('/')
    .get(function(req, res) {
      res.render('index', {
        user: req.user
      });
    });

  return router;
};
