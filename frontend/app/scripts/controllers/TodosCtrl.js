(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCtrl
   * @description
   * # TodosCtrl
   * Controller of the app
   */
  function TodosCtrl($stateParams, TodosDAO) {
    var vm = this;

    var filters = initFilters();

    vm.todos = [];
    vm.loading = true;

    vm.getTodos = getTodos;

    getTodos();

    function initFilters() {
      var filters = {};
      vm.category = $stateParams.category;

      if (vm.category === 'favourite') {
        filters['favourite'] = true;
      } else {
        filters['category'] = vm.category;
      }

      return filters;
    }

    function getTodos() {
      TodosDAO.getList(filters).then(function (response) {
        vm.todos = response;
        vm.loading = false;
      }, function (error) {
        console.log(error);
      });
    }
  }

  angular.module('app')
    .controller('TodosCtrl', TodosCtrl);

  TodosCtrl.$inject = ['$stateParams', 'TodosDAO'];

})();
