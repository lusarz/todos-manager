(function () {
  'use strict';

  var userService = require('../services/user.service');

  module.exports = {
    signup: signup
  };

  /**
   * Sign up
   */
  function signup(req, res) {
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

})();