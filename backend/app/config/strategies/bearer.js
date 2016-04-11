'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
//LocalStrategy = require('passport-local').Strategy,
  BearerStrategy = require('passport-http-bearer').Strategy,
  userService = require('../../services/user.service');

module.exports = function () {

  passport.use(new BearerStrategy(
    function (token, done) {
      userService.findByToken(token).then(function (user) {
        console.log('Bearer user');
        console.log(user);

        if (!user) {
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

  /*passport.serializeUser(function () {

   });

   passport.deserializeUser(function () {

   });*/

};
