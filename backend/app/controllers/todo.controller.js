'use strict';

const todoService = require('../services/todo.service');

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

    if (req.param('category')) {
      const category = req.param('category');
      if (category === 'general') {
        filters['category'] = null;
      } else {
        filters['category'] = req.param('category');
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

    todoService.findList(filters, req.user).then(todos => {
      res.send(todos);
    }, err => {
      res.status(400).send(err);
    });
  }


  static markAsCompleted(req, res) {
    todoService.markAsCompleted(req.params.id).then(() => {
      res.send({success: true});
    }, err => {
      res.status(400).send(err);
    });
  }

  static findById(req, res) {
    todoService.findById(req.params.id).then(todo => {
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
    todoService.update(req.body, req.params.id).then(todo => {
      res.send(todo);
    }, err => {
      res.status(400).send(err);
    });
  }

  static remove(req, res) {
    todoService.remove(req.params.id).then(() => {
      res.send({});
    }, err => {
      console.log('remove err');
      console.log(err);
    });
  }
}


module.exports = TodoController;