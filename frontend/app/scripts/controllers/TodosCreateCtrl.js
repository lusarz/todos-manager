(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCreateCtrl
   * @description
   * # TodosCreateCtrl
   * Controller of the app
   */
  function TodosCreateCtrl($state, TodosDAO) {
    var vm = this;
    vm.todo = {};

    vm.save = save;

    function save() {
      TodosDAO.create(vm.todo).then(function () {
        $state.go('app.todos');
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

  TodosCreateCtrl.$inject = ['$state', 'TodosDAO'];

})();
