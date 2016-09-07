'use strict';

const TodoCategoryDAO = require('../dao/TodoCategoryDAO');

class TodoCategoryService {
  static create(todoCategory, user) {
    todoCategory.user = user;
    return TodoCategoryDAO.create(todoCategory);
  }
}
TodoCategoryService.findList = TodoCategoryDAO.findList;
TodoCategoryService.findById = TodoCategoryDAO.findById;
TodoCategoryService.update = TodoCategoryDAO.update;
TodoCategoryService.remove = TodoCategoryDAO.remove;

module.exports = TodoCategoryService;
