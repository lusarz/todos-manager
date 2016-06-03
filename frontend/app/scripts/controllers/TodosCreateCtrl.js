(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCreateCtrl
   * @description
   * # TodosCreateCtrl
   * Controller of the app
   */
  function TodosCreateCtrl($state, $stateParams, TodosDAO) {
    var vm = this;
    vm.save = save;

    init();

    function init() {
      vm.todo = {};
      vm.category = $stateParams.category;

      if (vm.category && vm.category !== 'general' && vm.category !== 'favourite') {
        vm.todo.category = vm.category;
      }
      vm.action = 'CREATE';
    }

    function save() {
      TodosDAO.create(vm.todo).then(function () {
        $state.go('app.todos', {category: vm.category});
      }, function (error) {
        displayError(error);
      });
    }

    function displayError(error) {
      console.log(error);
    }
  }

  angular.module('app')
    .controller('TodosCreateCtrl', TodosCreateCtrl);

  TodosCreateCtrl.$inject = ['$state', '$stateParams', 'TodosDAO'];

})();
