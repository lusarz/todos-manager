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
    vm.showCompleted = false;
    var filters = initFilters();

    vm.todos = [];
    vm.loading = true;

    vm.getTodos = getTodos;
    vm.markAsCompleted = markAsCompleted;
    vm.toggleFavourite = toggleFavourite;
    vm.toggleShowCompleted = toggleShowCompleted;

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
      vm.loading = true;
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
        vm.categories.unshift({_id: null, name: 'General', icon: 'fa-hashtag'});

        var categoriesMap = {};
        _.each(vm.categories, function (category) {
          categoriesMap[category._id || 'general'] = category;
          category.todos = [];
        });
        var todos = responses[1];

        _.each(todos, function (todo) {
          categoriesMap[todo.category || 'general'].todos.push(todo);
        });
        vm.loading = false;

      });
    }

    function markAsCompleted(todoId) {
      TodosDAO.markAsCompleted(todoId).then(function (response) {
        getTodos();
      });
    }

    function toggleFavourite(todo) {
      todo.favourite = !todo.favourite;
      TodosDAO.update(_.pick(todo, ['_id', 'favourite'])).then(function (response) {

      });
    }

    function toggleShowCompleted() {
      if (!vm.showCompleted) {
        filters.onlyUncompleted = true;
      } else {
        delete filters.onlyUncompleted;
      }
      getTodos();

    }
  }

  angular.module('app')
    .controller('TodosCtrl', TodosCtrl);

  TodosCtrl.$inject = ['$q', '$stateParams', 'TodosDAO', 'TodoCategoriesFactory'];

})
();
