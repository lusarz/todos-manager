(function () {
  'use strict';


  var Todo = require('../models/todo.model');


  function findList(filters, user) {
    filters = filters || {};
    filters.user = user;
    return Todo.find(filters);
  }

  function findById(todoId) {
    return Todo.findById(todoId);
  }

  function create(todo) {
    var newTodo = new Todo(todo);
    return newTodo.save();
  }

  function update(todo, id) {
    delete todo._id;
    return Todo.findOneAndUpdate({_id: id}, todo, {upsert: true});
  }

  function remove(id) {
    return Todo.findByIdAndRemove(id, {});
  }

  module.exports = {
    findList: findList,
    findById: findById,
    create: create,
    update: update,
    remove: remove
  };

})
();