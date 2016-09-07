'use strict';

/**
 * Module dependencies.
 */
const passport = require('passport');
const BasicStrategy = require('passport-http').Strategy;
const UserService = require('.././user.service');

module.exports = function() {

  passport.use(new BasicStrategy(
    function(username, password, done) {
      UserService.findByUserName(username).then(function(user) {
        if (!user || !user.authenticate(password)) {
          return done(null, false, {
            message: 'Invalid username or password'
          });
        }

        return done(null, user);
      }, function(err) {
        done(err);
      });
    }
  ));
};
