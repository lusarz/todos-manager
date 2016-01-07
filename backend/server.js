(function () {
  'use strict';

  var app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/todosManager');


  app.use(morgan('dev'));
  app.use(bodyParser.json());

  require('./routes/routes.js')(app);

  app.listen(port, function () {
    console.log('listening for requests on localhost:%s', port);
  });


})();


