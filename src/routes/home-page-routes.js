const router = require('express').Router();
const homePageController = require('../controllers/home-page-controller');

module.exports = function() {
  router.route('/')
    .get(homePageController.get);

  return router;
};
