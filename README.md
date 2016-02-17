## Twilio 2FA Scrapper
This simple node.js application is aimed to optimize and make easier access to 2FA codes for shared accounts on various platforms. It is decreasing security level therefore may not be found safe, but it's just a proof of concept and making fun research idea to find out how is it to code in node.js after years of Ruby on Rails and Ember.js experience.

## Access flow
App is listening to Twilio messages on **/twilio/received** route and saves to MongoDB all messages that comes to this endpoint. To see the messages, user must sign in using Google OAuth. Signing process can be restricted to one specific domain (e.g. _netguru.pl_), which should basically improve the formerly decreased security - to intercept the account you must 1) know the password, 2) be signed in to Google account hosted for your company.

Moreover, to make access to these accounts more transparent, application is posting notification to Slack channel about every message that comes to Twilio number.

## Code structure
* `./public` is directory with `bower_components`, custom stylesheets and (potentially) javascripts served in views
* `./config` is directory with MongoDB and [Passport.js](http://passportjs.org/) authenticator configuration and setup
* `index.js` is file that is executed as Node.js entrypoint for the application
* `./src` is directory with all the code that is running in the app

Code in `./src` is divided in logic blocks - routes, controllers, models, views and integrations.

Handlebars are used as view engine (did I mention that I love Emberjs?). Bootstrap jumbotron template is used as view template.

## Setup and development
To set up the application you must have installed Node.js - I recommend version 4.2 or up. Then run:
* `npm install`
* `bower install`

Create your `.env.ini` file by running:
```
cp .env.example .env.ini
```
And run:
```
gulp serve
```

You are ready to develop!

## Deploying
I deployed the app to Heroku by creating the app on Heroku Dashboard, pushing to heroku remote and setting up all env variables by running:
```
heroku config:set SLACK_TOKEN=...
```
respectivly for all env variables.
