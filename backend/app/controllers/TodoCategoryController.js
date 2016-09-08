'use strict';

const todoCategoryService = require('../services/TodoCategoryService');

class TodoCategoryController {

  static findList(req, res) {
    todoCategoryService.findList(null, req.user).then(todoCategories => {
      res.send(todoCategories);
    }, err => {
      res.status(400).send(err);
    });
  }

  static findById(req, res) {
    todoCategoryService.findById(req.params.id).then(todoCategory => {
      if (todoCategory) {
        res.send(todoCategory);
      } else {
        res.status(404).send({});
      }
    }, err => {
      res.status(400).send(err);
    });
  }

  static create(req, res) {
    var todoCategory = req.body;
    todoCategoryService.create(todoCategory, req.user).then(todoCategory => {
      res.send(todoCategory);
    }, err => {
      res.status(400).send(err);
    });
  }

  static update(req, res) {
    todoCategoryService.update(req.body, req.params.id).then(todoCategory => {
      res.send(todoCategory);
    }, err => {
      res.status(400).send(err);
    });
  }

  static remove(req, res) {
    todoCategoryService.remove(req.params.id).then(() => {
      res.send({});
    }, err => {
      //TODO catch error
    });
  }
}

module.exports = TodoCategoryController;