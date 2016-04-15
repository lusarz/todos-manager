(function () {
  'use strict';

  var _ = require('lodash');
  var existingTodos = require('../fixtures/todos').todos;


  function getExistingTodosByUserId(userId) {
    return _.filter(existingTodos, {user: userId});
  }

  module.exports = {
    getExistingTodosByUserId: getExistingTodosByUserId
  };
})();