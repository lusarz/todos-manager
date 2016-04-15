(function () {
  'use strict';

  var todoCategoryDAO = require('../dao/todoCategoryDAO');

  function create(todoCategory, user) {
    todoCategory.user = user;
    return todoCategoryDAO.create(todoCategory);
  }

  module.exports = {
    findList: todoCategoryDAO.findList,
    findById: todoCategoryDAO.findById,
    create: create,
    update: todoCategoryDAO.update,
    remove: todoCategoryDAO.remove
  };

})();