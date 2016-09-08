'use strict';

/**
 * Module dependencies.
 */
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const userService = require('../../services/UserService');

module.exports = function() {

  passport.use(new BearerStrategy(
    function(token, done) {
      userService.findByToken(token).then(user => {
        if (!user) {
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
