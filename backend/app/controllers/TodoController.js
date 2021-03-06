'use strict';

const todoService = require('../services/TodoService');

class TodoController {
  /*
   * Returns list of todos, req params:
   * - category
   * - favourite
   * - onlyCompleted
   * - onlyUncompleted
   * */
  static findList(req, res) {
    const filters = {};

    console.log(req.query);
    console.log(req.param('category'));

    if (req.param('category')) {
      const category = req.param('category');
      if (category === 'general') {
        filters['category'] = null;
      } else {
        filters['category'] = category;
      }
    }

    if (req.param('favourite')) {
      filters['favourite'] = true;
    }

    if (req.param('onlyCompleted')) {
      filters['doneAt'] = {$ne: null};
    } else if (req.param('onlyUncompleted')) {
      filters['doneAt'] = null;
    }

    console.log(filters);
    todoService.findList(filters, req.user).then(todos => {
      res.send(todos);
    }, err => {
      res.status(400).send(err);
    });
  }


  static markAsCompleted(req, res) {
    todoService.markAsCompleted(req.param('id')).then(() => {
      res.send({success: true});
    }, err => {
      res.status(400).send(err);
    });
  }

  static findById(req, res) {
    todoService.findById(req.param('id')).then(todo => {
      if (todo) {
        res.send(todo);
      } else {
        res.status(404).send({});
      }
    }, err => {
      res.status(400).send(err);
    });
  }

  static create(req, res) {
    var todo = req.body;
    todoService.create(todo, req.user).then(todo => {
      res.send(todo);
    }, err => {
      res.status(400).send(err);
    });
  }

  static update(req, res) {
    todoService.update(req.body, req.param('id')).then(todo => {
      res.send(todo);
    }, err => {
      res.status(400).send(err);
    });
  }

  static remove(req, res) {
    todoService.remove(req.param('id')).then(() => {
      res.send({});
    }, err => {
      //TODO: catch error
    });
  }
}


module.exports = TodoController;