(function () {
  'use strict';

  var authenticationController = require('../controllers/authentication.controller');

  module.exports = function (router) {

    router.route('/auth/signup')
      .post(authenticationController.signup);

    router.route('/auth/signin')
      .post(authenticationController.signin);

  };
})();
