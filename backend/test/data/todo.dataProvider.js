'use strict';

const _ = require('lodash');
const existingTodos = require('../fixtures/todos').todos;

class TodoDataProvider {
  static getExistingTodosByUserId(userId) {
    return _.filter(existingTodos, {user: userId});
  }
}

module.exports = TodoDataProvider;