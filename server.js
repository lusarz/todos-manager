(function () {
  'use strict';

  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    passport = require('passport'),
    config = require('./config/config'),
    mongoose = require('mongoose');

  var dbConnection = mongoose.connect(config.db);


  app.disable('etag');
  app.use(morgan('dev'));
  app.use(bodyParser.json());

  require('./backend/app/config/strategies/bearer')(app);
  app.use(passport.initialize());

  require('./backend/app/routes/routes.js')(app);

  //Serve frontend in not production environment
  if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(__dirname + '/frontend/app'));
    app.use(express.static(__dirname + '/frontend/app/.tmp'));
  }

  app.listen(config.port, function () {
    console.log('listening for requests on localhost:%s', config.port);
  });

  module.exports = {
    app: app,
    dbConnection: dbConnection
  };

})();