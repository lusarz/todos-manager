(function () {
  'use strict';

  var todoService = require('../services/todo.service');

  module.exports = {
    findList: findList,
    findById: findById,
    create: create,
    update: update,
    remove: remove
  };


  function findList(req, res) {
    todoService.findList(null, req.user).then(function (todos) {
      res.send(todos);
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function findById(req, res) {
    todoService.findById(req.params.id).then(function (todos) {
      res.send(todos);
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function create(req, res) {
    var todo = req.body;
    todoService.create(todo, req.user).then(function (todo) {
      res.send(todo);
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function update(req, res) {
    todoService.update(req.body, req.params.id).then(function (todo) {
      res.send(todo);
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function remove(req, res) {
    todoService.remove(req.params.id).then(function () {
      res.send({});
    }, function (err) {
      console.log(err);
    });
  }

})();