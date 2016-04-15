(function () {
  'use strict';

  var _ = require('lodash');
  var todoCategories = require('../fixtures/todoCategories').todoCategories;


  function getExistingTodoCategoriesByUserId(userId) {
    return _.filter(todoCategories, {user: userId});
  }

  module.exports = {
    getExistingTodoCategoriesByUserId: getExistingTodoCategoriesByUserId
  };
})();