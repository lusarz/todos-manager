(function () {
  'use strict';

  var app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    config = require('../config/env/default'),
    mongoose = require('mongoose');

  mongoose.connect(config.db);


  app.use(morgan('dev'));
  app.use(bodyParser.json());

  require('./routes/routes.js')(app);

  app.listen(config.port, function () {
    console.log('listening for requests on localhost:%s', config.port);
  });


})();


