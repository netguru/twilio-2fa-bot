const express = require('express');
const router = express.Router();
const TwilioMessage = require('../models/twilio-message');
const moment = require('moment');

module.exports = function() {
  router.use('/', function (req, res, next) {
    if (!req.user) {
      res.redirect('/');
    } else {
      return next();
    }
  });

  router.get('/', function (req, res) {
    TwilioMessage.find({}).lean().exec(function(err, results) {
      const messages = results.map((item) => {
        const msg = Object.assign({}, item);
        msg.createdAt = moment(item.createdAt).format('DD/MM/YY hh:mm:ss');
        return msg;
      });
      res.render('messages', {
        messages,
      });
    });
  });

  return router;
};

