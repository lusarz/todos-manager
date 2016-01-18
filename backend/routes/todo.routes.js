(function () {
  'use strict';

  var todosController = require('../controllers/todo.controller');

  module.exports = function (router) {
    router.route('/todos')
      .get(todosController.findList)
      .post(todosController.create);

    // Single article routes
    router.route('/todos/:id')
      .get(todosController.findById)
      .put(todosController.update)
      .delete(todosController.remove);
  };
})();
