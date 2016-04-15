(function () {
  'use strict';

  var todoCategoryService = require('../services/todoCategory.service');

  module.exports = {
    findList: findList,
    findById: findById,
    create: create,
    update: update,
    remove: remove
  };


  function findList(req, res) {
    todoCategoryService.findList(null, req.user).then(function (todoCategories) {
      res.send(todoCategories);
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function findById(req, res) {
    todoCategoryService.findById(req.params.id).then(function (todoCategory) {
      if (todoCategory) {
        res.send(todoCategory);
      } else {
        res.status(404).send({});
      }
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function create(req, res) {
    var todoCategory = req.body;
    todoCategoryService.create(todoCategory, req.user).then(function (todoCategory) {
      res.send(todoCategory);
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function update(req, res) {
    todoCategoryService.update(req.body, req.params.id).then(function (todoCategory) {
      res.send(todoCategory);
    }, function (err) {
      res.status(400).send(err);
    });
  }

  function remove(req, res) {
    todoCategoryService.remove(req.params.id).then(function () {
      res.send({});
    }, function (err) {
      console.log(err);
    });
  }

})();