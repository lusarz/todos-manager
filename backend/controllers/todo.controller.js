(function () {
  'use strict';

  var todoService = require('../services/todo.service');

  module.exports = {
    getTodos: getTodos,
    createOrUpdate: createOrUpdate
  };


  function getTodos(req, res) {
    todoService.getTodos(null, function (todos) {
      res.send(todos);
    });
  }

  function createNewOrUpdate(req, res) {
    var todo = req.body;

    todoService.createNewOrUpdate(todo);
    res.send(todo);
  }

})();