(function () {
  'use strict';

  var passport = require('passport');
  var todosController = require('../../controllers/todo.controller.js');

  module.exports = function (router) {
    router.route('/api/todos')
      .get(passport.authenticate('bearer', {session: false}), todosController.findList)
      .post(passport.authenticate('bearer', {session: false}), todosController.create);

    // Single article routes
    router.route('/api/todos/:id')
      .get(passport.authenticate('bearer', {session: false}), todosController.findById)
      .put(passport.authenticate('bearer', {session: false}), todosController.update)
      .delete(passport.authenticate('bearer', {session: false}), todosController.remove);
  };
})();
