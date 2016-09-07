'use strict';

const TodoDAO = require('../dao/TodoDAO');

class TodoService {
  static create(todo, user) {
    todo.user = user;
    return TodoDAO.create(todo);
  }

  static markAsCompleted(id) {
    return TodoDAO.update({doneAt: new Date()}, id);
  }
}

TodoService.findList = TodoDAO.findList;
TodoService.findById = TodoDAO.findById;
TodoService.update = TodoDAO.update;
TodoService.remove = TodoDAO.remove;


module.exports = TodoService;