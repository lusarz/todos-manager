(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCtrl
   * @description
   * # TodosCtrl
   * Controller of the app
   */
  function TodosCtrl($q, $stateParams, TodosDAO, TodoCategoriesFactory) {
    var vm = this;

    vm.categoryId = $stateParams.category;
    var filters = initFilters();

    vm.todos = [];
    vm.loading = true;

    vm.getTodos = getTodos;
    vm.markAsCompleted = markAsCompleted;

    if (vm.categoryId === 'favourite') {
      getTodosAndCategories();
    } else {
      getCategory();
      getTodos();
    }

    function initFilters() {
      var filters = {};
      filters.onlyUncompleted = true;

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

    function getTodosAndCategories() {
      $q.all([
        TodoCategoriesFactory.getList(),
        TodosDAO.getList(filters)
      ]).then(function (responses) {
        vm.categories = angular.copy(responses[0]);

        var categoriesMap = {};
        _.each(vm.categories, function (category) {
          categoriesMap[category._id] = category;
        });
        var todos = responses[1];
        _.each(function (todos) {

        });


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

  TodosCtrl.$inject = ['$q', '$stateParams', 'TodosDAO', 'TodoCategoriesFactory'];

})
();
