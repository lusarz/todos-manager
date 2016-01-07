(function () {
  'use strict';

  var todoDAO = require('../dao/todoDAO');

  module.exports = {
    createNewOrUpdate: todoDAO.createNewOrUpdate
  }

})();