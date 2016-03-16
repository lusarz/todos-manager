(function () {
  'use strict';

  var todoDAO = require('../dao/todoDAO');

  module.exports = {
    findList: todoDAO.findList,
    findById: todoDAO.findById,
    create: todoDAO.create,
    update: todoDAO.update,
    remove: todoDAO.remove
  }

})();