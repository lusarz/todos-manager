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

    userService.create(user).then(function (createdUser) {
      res.send(createdUser);

      /* //Login in future implementation
       req.login(user, function (err) {
       if (err) {
       res.status(400).send(err);
       } else {
       res.json(user);
       }
       });
       */
    }, function (err) {
      res.status(400).send(err);
    });
  };

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
          res.status(400).send(err);
        });
      } else {
        res.status(400).send({err: 'cannot authenticate'});
      }
    }, function (err) {
      res.status(400).send(err);
    });
  };

})();