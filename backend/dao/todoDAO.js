(function () {
  'use strict';
  var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

  module.exports = {
    search: search,
    findById: findById,
    createNewOrUpdate: createNewOrUpdate
  };


  function search(query) {

  }

  function findById(todoId) {

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
      newTodo.save()
    }
  }

})();