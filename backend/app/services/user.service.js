(function () {
  'use strict';

  var userDAO = require('../dao/userDAO'),
    tokenGenerator = require('generate-password');


  function generateToken(userId) {
    var token = tokenGenerator.generate({
      length: 40,
      numbers: true,
      symbols: false,
      uppercase: true,
      excludeSimilarCharacters: true
    });

    return userDAO.update({token: token}, userId).then(function () {
      return token;
    });
  }

  module.exports = {
    findList: userDAO.findList,
    findById: userDAO.findById,
    findByEmail: userDAO.findByEmail,
    findByUserName: userDAO.findByUserName,
    findByToken: userDAO.findByToken,
    create: userDAO.create,
    update: userDAO.update,
    remove: userDAO.remove,
    generateToken: generateToken
  };

})();