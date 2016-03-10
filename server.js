(function () {
  'use strict';

  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    passport = require('passport'),
    config = require('./config/env/default'),
    mongoose = require('mongoose');

  mongoose.connect(config.db);


  app.use(morgan('dev'));
  app.use(bodyParser.json());

  require('./backend/config/strategies/bearer')(app);
  app.use(passport.initialize());

  require('./backend/routes/routes.js')(app);

  //Serve frontend
  app.use(express.static(__dirname + '/frontend/app'));
  app.use(express.static(__dirname + '/frontend/app/.tmp'));

  app.listen(config.port, function () {
    console.log('listening for requests on localhost:%s', config.port);
  });


})();