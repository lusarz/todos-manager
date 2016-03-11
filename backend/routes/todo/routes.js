(function () {
  'use strict';

  var todosController = require('../../controllers/todo.controller.js');

  module.exports = function (router) {
    router.route('/api/todos')
      .get(todosController.findList)
      .post(todosController.create);

    // Single article routes
    router.route('/api/todos/:id')
      .get(todosController.findById)
      .put(todosController.update)
      .delete(todosController.remove);
  };
})();
