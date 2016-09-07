'use strict';

const _ = require('lodash');
const todoCategories = require('../fixtures/todoCategories').todoCategories;


class TodoCategoryDataProvider {
  static getExistingTodoCategoriesByUserId(userId) {
    return _.filter(todoCategories, {user: userId});
  }
}

module.exports = TodoCategoryDataProvider;
