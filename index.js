const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const twilioRouter = require('./src/routes/twilio-routes')();
const homepageRouter = require('./src/routes/home-page-routes')();
const messagesRouter = require('./src/routes/messages-routes')();
const authRouter = require('./src/routes/auth-routes')();

const app = express();

// Middlwares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: '897f3e5cf67663f15227e671abbd7ccd2bd5b8dcc31dab53e5e7677bd35c8dd3',
  resave: true,
  saveUninitialized: true,
}));

// Passport setup
require('./config/passport')(app);

// Routes
app.use('/twilio', twilioRouter);
app.use('/', homepageRouter);
app.use('/auth', authRouter);
app.use('/messages', messagesRouter);

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
