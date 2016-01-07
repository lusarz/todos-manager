(function () {
  'use strict';

  var todosController = require('../controllers/todo.controller');

  module.exports = function (router) {
    router.route('/todos')
      .get(todosController.getTodos)
      .post(todosController.createNewOrUpdate);
  };
})();
