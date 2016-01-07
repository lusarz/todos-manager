(function () {
  'use strict';

  var todoDAO = require('../dao/todoDAO');

  module.exports = {
    getTodos: todoDAO.findList,
    createNewOrUpdate: todoDAO.createNewOrUpdate
  }

})();