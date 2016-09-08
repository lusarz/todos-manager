'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const config = require('./config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var dbConnection = mongoose.connect(config.db);

app.disable('etag');
app.use(morgan('dev'));
app.use(bodyParser.json());

require('./backend/app/config/strategies/BearerStrategy')(app);
app.use(passport.initialize());

require('./backend/app/routes/routes.js')(app);

//Serve frontend in not production environment
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(__dirname + '/frontend/app'));
  app.use(express.static(__dirname + '/frontend/app/.tmp'));
}

app.listen(config.port, function() {
  console.log('listening for requests on localhost:%s', config.port);
});

module.exports = {
  app: app,
  dbConnection: dbConnection
};
