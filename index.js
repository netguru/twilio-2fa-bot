const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/twilio-2fa-bot');

const twilioRouter = require('./src/routes/twilio-routes')();

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/twilio', twilioRouter);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(`Error on server init: ${err}.`);
    return;
  }
  console.log(`Running server on port ${port}.`);
});
