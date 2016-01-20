(function () {
  'use strict';

  var passport = require('passport'),
    profileController = require('../controllers/profile.controller');

  module.exports = function (router) {
    router
      .get('/me', passport.authenticate('bearer', {session: false}), profileController.me);
  };
})();
