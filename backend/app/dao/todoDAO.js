(function () {
  'use strict';


  var Todo = require('../models/todo.model'),
    q = require('q');


  function findList(filters, user) {
    filters = filters || {};
    filters.user = user;
    var defer = q.defer();
    Todo.find(filters, function (err, todos) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(todos);
      }
    });
    return defer.promise;
  }

  function findById(todoId) {
    var defer = q.defer();
    Todo.findById(todoId).exec(function (err, article) {
      if (err) {
        defer.reject(err);
      } else if (!article) {
        defer.reject({errCode: 'NOT_FOUND'});
      } else {
        defer.resolve(article);
      }
    });

    return defer.promise;
  }

  function create(todo) {
    var defer = q.defer();
    var newTodo = new Todo(todo);
    newTodo.save(function (err, newTodo) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(newTodo);
      }
    });
    return defer.promise;
  }

  function update(todo, id) {
    var defer = q.defer();
    delete todo._id;
    Todo.findOneAndUpdate({_id: id}, todo, {upsert: true}, function (err, updatedTodo) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(updatedTodo);
      }
    });
    return defer.promise;
  }

  function remove(id) {
    var defer = q.defer();

    Todo.findByIdAndRemove(id, {}, function (err) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve({});
      }
    });

    return defer.promise;
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