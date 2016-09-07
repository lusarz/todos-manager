'use strict';

const todoCategories = require('../fixtures/todoCategories').todoCategories;


class TodoCategoryDataProvider {
  static getExistingTodoCategoriesByUserId(userId) {
    return todoCategories.filter(category => {
      return category.user === userId;
    });
  }
}

module.exports = TodoCategoryDataProvider;
