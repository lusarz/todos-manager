(function () {
  'use strict';

  var passport = require('passport');
  var authenticationController = require('../../controllers/authentication.controller.js');
  var profileController = require('../../controllers/profile.controller.js');
  var userController = require('../../controllers/user.controller.js');

  module.exports = function (router) {
    router.route('/api/user/register')
      .post(authenticationController.register);

    router.route('/api/user/login')
      .post(authenticationController.login);

    router.route('/api/user/available')
      .post(userController.available);

    router
      .get('/api/user/me', passport.authenticate('bearer', {session: false}), profileController.me);

  };
})();
