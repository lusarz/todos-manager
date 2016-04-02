(function () {
  'use strict';

  var userService = require('../services/user.service');

  module.exports = {
    register: register,
    login: login
  };

  /**
   * Register
   */
  function register(req, res) {
    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;

    var user = req.body;

    // Add missing user fields
    user.displayName = user.firstName + ' ' + user.lastName;

    userService.findByEmail(user.email).then(function (user) {
      res.status(409).send(user);
    }, function () {
      userService.create(user).then(function (createdUser) {
        userService.generateToken(createdUser._id).then(function (token) {
          res.json({token: token, user: createdUser});
        }, function (err) {
          res.status(500).send(err);
        });
      }, function (err) {
        res.status(400).send(err);
      });
    });
  }

  /**
   * Login
   */
  function login(req, res) {
    var email = req.body.email;
    var password = req.body.password;


    userService.findByEmail(email).then(function (user) {
      if (user.authenticate(password)) {
        userService.generateToken(user._id).then(function (token) {
          res.json({token: token});
        }, function (err) {
          res.status(500).send(err);
        });
      } else {
        res.status(401).send({err: 'cannot authenticate'});
      }
    }, function (err) {
      res.status(400).send(err);
    });
  }

})();