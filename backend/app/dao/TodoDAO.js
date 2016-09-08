'use strict';

const Todo = require('../models/Todo');

class TodoDAO {
  static findList(filters, user) {
    filters = filters || {};
    filters.user = user;
    return Todo.find(filters);
  }

  static findById(todoId) {
    return Todo.findById(todoId);
  }

  static create(todo) {
    var newTodo = new Todo(todo);
    return newTodo.save();
  }

  static update(todo, id) {
    delete todo._id;
    return Todo.findOneAndUpdate({_id: id}, todo, {upsert: true});
  }

  static remove(id) {
    return Todo.findByIdAndRemove(id, {});
  }
}

module.exports = TodoDAO;