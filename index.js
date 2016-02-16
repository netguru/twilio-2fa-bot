const express = require('express');
const bodyParser = require('body-parser');

const twilioRouter = require('./src/routes/twilio-routes')();

const app = express();

// Middlwares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/twilio', twilioRouter);

// Database setup
require('./config/mongo-db')();

// Server setup
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(`Error on server init: ${err}.`);
    return;
  }
  console.log(`Running server on port ${port}.`);
});
