(function () {
  'use strict';

  var app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000/*,
   MongoClient = require('mongodb').MongoClient,
   mongoUrl = 'mongodb://localhost:27017/expressdemo'*/,
    _db;

  var todos = new Array();

  app.use(morgan('dev'));
  app.use(bodyParser.json());

  app.listen(port, function () {
    console.log('listening for requests on localhost:%s', port);
  });

  /*MongoClient.connect(mongoUrl, function (err, db) {
   if (err) {
   console.error(err);
   } else {
   console.log('connected to mongo');
   _db = db;
   app.listen(port, function () {
   console.log('listening for requests on localhost:%s', port);
   });
   }
   });*/

  app.get('/todos', function (req, res) {
    res.send(todos);
  });


  /*app.get('/users/:name', function (req, res) {
   var name = req.params.name;
   var collection = _db.collection('data');

   collection.findOne({name: name}, function (err, user) {
   if (err) {
   console.error(err);
   res.status(500).end();
   } else {
   var result = user
   ? {success: true, user: user}
   : {success: false, reason: 'user not found: ' + name};
   res.send(result);
   }
   });
   });*/


  app.post('/todos', function (req, res) {
    var todo = req.body;
    todos.push(todo);

    res.send(todo);
  });
})();


