(function () {
  'use strict';

  var passport = require('passport');
  var todosController = require('../../controllers/todo.controller.js');

  var authenticate = function () {
    return passport.authenticate('bearer', {session: false})
  };

  module.exports = function (router) {
    router.route('/api/todos')
      .get(authenticate(), todosController.findList)
      .post(authenticate(), todosController.create);

    // Single article routes
    router.route('/api/todos/:id')
      .get(authenticate(), todosController.findById)
      .put(authenticate(), todosController.update)
      .delete(authenticate(), todosController.remove);

    router.route('/api/todos/:id/mark_as_completed')
      .post(authenticate(), todosController.markAsCompleted);
  };
})();
