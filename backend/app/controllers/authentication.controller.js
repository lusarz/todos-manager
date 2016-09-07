'use strict';

const userService = require('../services/user.service');
const validation = require('./helpers/validation');

class AuthenticationController {
  /**
   * Register
   */
  static register(req, res) {
    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;

    let user = req.body;

    userService.findByEmail(user.email).then(existedUser => {
      if (existedUser) {
        res.status(409).send(validation.prepareDuplicateErrorResponse('email'));
      } else {
        userService.create(user).then(createdUser => {
          userService.generateToken(createdUser._id).then(token => {
            res.json({token: token, user: createdUser});
          }, err => {
            res.status(500).send(err);
          });
        }, err => {
          res.status(400).send(validation.prepareErrorResponse(err));
        });
      }
    });
  }

  /**
   * Login
   */
  static login(req, res) {
    let email = req.body.email;
    let password = req.body.password;


    userService.findByEmail(email).then(user => {
      if (!user) {
        res.status(400).send({errors: {email: {code: 'notExist'}}});
      } else if (user.authenticate(password)) {
        userService.generateToken(user._id).then(token => {
          res.json({token: token});
        }, err => {
          res.status(500).send(err);
        });
      } else {
        res.status(401).send({errors: {password: {code: 'invalid'}}});
      }
    });
  }
}

module.exports = AuthenticationController;