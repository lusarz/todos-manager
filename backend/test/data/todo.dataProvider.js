'use strict';

const existingTodos = require('../fixtures/todos').todos;

class TodoDataProvider {
  static getExistingTodosByUserId(userId) {
    return existingTodos.filter(todo => {
      return todo.user === userId;
    });
  }
}

module.exports = TodoDataProvider;