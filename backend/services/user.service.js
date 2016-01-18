(function () {
  'use strict';

  var userDAO = require('../dao/userDAO');

  module.exports = {
    findList: userDAO.findList,
    findById: userDAO.findById,
    findByUserName: userDAO.findByUserName,
    create: userDAO.create,
    update: userDAO.update,
    remove: userDAO.remove
  }

})();