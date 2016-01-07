(function () {
  'use strict';

  var app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    todoService = require('./services/todo.service.js');

  mongoose.connect('mongodb://localhost:27017/todosManager');
  //var db = mongoose.connection;

  var Todo = require('./models/todo.model');

  app.use(morgan('dev'));
  app.use(bodyParser.json());

  app.listen(port, function () {
    console.log('listening for requests on localhost:%s', port);
  });


  app.get('/todos', function (req, res) {
    Todo.find(function (err, todos) {
      if (err) {
        return console.error(err);
      }
      res.send(todos);
    });
  });


  app.post('/todos', function (req, res) {
    var todo = req.body;

    var newTodo = new Todo({
      name: todo.name
    });

    todoService.save(todo);
    res.send(todo);

  });
})();


