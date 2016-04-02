(function () {
  'use strict';

  var userDAO = require('../dao/userDAO'),
    tokenGenerator = require('generate-password'),
    q = require('q');


  function generateToken(userId) {
    var defer = q.defer();
    var token = tokenGenerator.generate({
      length: 40,
      numbers: true,
      symbols: false,
      uppercase: true,
      excludeSimilarCharacters: true
    });

    userDAO.update({token: token}, userId).then(function () {
      defer.resolve(token);
    });

    return defer.promise;
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