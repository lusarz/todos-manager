'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  userService = require('../../services/user.service');

module.exports = function () {
  // Use local strategy
  passport.use(new LocalStrategy({
      usernameField: 'userName',
      passwordField: 'password'
    },
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


    }));
};
