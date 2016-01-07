(function () {
  'use strict';


  var Todo = require('../models/todo.model');

  module.exports = {
    findList: findList,
    findById: findById,
    create: create,
    update: update,
    remove: remove,
    createNewOrUpdate: createNewOrUpdate
  };


  function findList(query, callback) {
    Todo.find(function (err, todos) {
      callback(todos);
    });
  }

  function findById(todoId, callback) {
    Todo.findById(todoId).exec(function (err, article) {
      if (err) {
        return next(err);
      } else if (!article) {
        return res.status(404).send({
          message: 'No article with that identifier has been found'
        });
      }
      req.article = article;
      next();
    });
  }

  function createNewOrUpdate(todo, id) {
    if (id) {
      delete todo._id;
      Todo.findOneAndUpdate({_id: id}, todo, {upsert: true}, function (err, doc) {
        if (err) {
          throw err;
        }
        return res.send("succesfully saved");
      });
    } else {
      var newTodo = new Todo(todo);
      newTodo.save();
    }
  }

})();