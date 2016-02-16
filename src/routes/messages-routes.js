const router = require('express').Router();
const messagesController = require('../controllers/messages-controller');

module.exports = function() {
  router.use('/', messagesController.authMiddleware);
  router.get('/', messagesController.get);

  return router;
};

