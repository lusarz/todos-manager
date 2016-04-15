(function () {
  'use strict';

  var passport = require('passport');
  var todoCategoriesController = require('../../controllers/todoCategory.controller.js');

  module.exports = function (router) {
    router.route('/api/todoCategories')
      .get(passport.authenticate('bearer', {session: false}), todoCategoriesController.findList)
      .post(passport.authenticate('bearer', {session: false}), todoCategoriesController.create);

    // Single article routes
    router.route('/api/todoCategories/:id')
      .get(passport.authenticate('bearer', {session: false}), todoCategoriesController.findById)
      .put(passport.authenticate('bearer', {session: false}), todoCategoriesController.update)
      .delete(passport.authenticate('bearer', {session: false}), todoCategoriesController.remove);
  };
})();
