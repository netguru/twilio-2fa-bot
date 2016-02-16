const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const twilioRouter = require('./src/routes/twilio-routes')();
const homepageRouter = require('./src/routes/home-page-routes')();

const app = express();

// Middlwares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/twilio', twilioRouter);
app.use('/', homepageRouter);

// View Engine
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

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
