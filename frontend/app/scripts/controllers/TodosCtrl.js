(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCtrl
   * @description
   * # TodosCtrl
   * Controller of the app
   */
  function TodosCtrl($stateParams, TodosDAO, TodoCategoriesFactory) {
    var vm = this;

    var filters = initFilters();

    vm.todos = [];
    vm.loading = true;

    vm.getTodos = getTodos;
    vm.markAsCompleted = markAsCompleted;

    getCategory();
    getTodos();

    function initFilters() {
      var filters = {};
      filters.onlyUncompleted = true;
      vm.categoryId = $stateParams.category;

      if (vm.categoryId === 'favourite') {
        filters['favourite'] = true;
      } else {
        filters['category'] = vm.categoryId;
      }

      return filters;
    }

    function getCategory() {
      TodoCategoriesFactory.getCategoryById($stateParams.category).then(function (category) {
        vm.category = category;
      });
    }

    function getTodos() {
      TodosDAO.getList(filters).then(function (response) {
        vm.todos = response;
        vm.loading = false;
      }, function (error) {
        console.log(error);
      });
    }

    function markAsCompleted(todoId) {
      TodosDAO.markAsCompleted(todoId).then(function (response) {
        getTodos();
      });
    }
  }

  angular.module('app')
    .controller('TodosCtrl', TodosCtrl);

  TodosCtrl.$inject = ['$stateParams', 'TodosDAO', 'TodoCategoriesFactory'];

})
();
