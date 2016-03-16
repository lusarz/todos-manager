'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  BasicStrategy = require('passport-http').Strategy,
  userService = require('.././user.service');

module.exports = function () {

  passport.use(new BasicStrategy(
    function (username, password, done) {
      userService.findByUserName(username).then(function (user) {
        if (!user || !user.authenticate(password)) {
          return done(null, false, {
            message: 'Invalid username or password'
          });
        }

        return done(null, user);
      }, function (err) {
        done(err);
      });
    }
  ));
};
