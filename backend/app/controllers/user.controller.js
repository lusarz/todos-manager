'use strict';

const userService = require('../services/user.service');

class UserController {
  static available(req, res) {
    var email = req.body.email;

    userService.findByEmail(email).then(user => {
      if (user) {
        res.send({available: false});
      } else {
        res.send({available: true});
      }
    });
  }
}

module.exports = UserController;