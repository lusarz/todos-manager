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
    var filters = {};
    if (req.param('category')) {
      var category = req.param('category');
      if (category === 'general') {
        filters['category'] = null;
      } else {
        filters['category'] = req.param('category');
      }
    }

    if (req.param('favourite')) {
      filters['favourite'] = true;
    }

    todoService.findList(filters, req.user).then(function (todos) {
      res.send(todos);
    }, function (err) {
      res.status(400).send(err);
    });
  }


  function findById(req, res) {
    todoService.findById(req.params.id).then(function (todo) {
      if (todo) {
        res.send(todo);
      } else {
        res.status(404).send({});
      }
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
      console.log('remove err');
      console.log(err);
    });
  }

})();