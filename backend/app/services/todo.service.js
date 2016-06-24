(function () {
  'use strict';

  var todoDAO = require('../dao/todoDAO');

  function create(todo, user) {
    todo.user = user;
    return todoDAO.create(todo);
  }

  function markAsCompleted(id) {
    return todoDAO.update({doneAt: new Date()}, id);
  }

  module.exports = {
    findList: todoDAO.findList,
    findById: todoDAO.findById,
    create: create,
    update: todoDAO.update,
    remove: todoDAO.remove,
    markAsCompleted: markAsCompleted
  };

})();