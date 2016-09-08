'use strict';

const UserDAO = require('../dao/UserDAO');
const tokenGenerator = require('generate-password');

class UserService {
  static generateToken(userId) {
    var token = tokenGenerator.generate({
      length: 40,
      numbers: true,
      symbols: false,
      uppercase: true,
      excludeSimilarCharacters: true
    });

    return UserDAO.update({token: token}, userId).then(function() {
      return token;
    });
  }
}

UserService.findList = UserDAO.findList;
UserService.findById = UserDAO.findById;
UserService.findByEmail = UserDAO.findByEmail;
UserService.findByUserName = UserDAO.findByUserName;
UserService.findByToken = UserDAO.findByToken;
UserService.create = UserDAO.create;
UserService.update = UserDAO.update;
UserService.remove = UserDAO.remove;

module.exports = UserService;