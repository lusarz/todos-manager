(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosEditCtrl
   * @description
   * # TodosEditCtrl
   * Controller of the app
   */
  function TodosEditCtrl($state, TodosDAO) {
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
    .controller('TodosEditCtrl', TodosEditCtrl);

  TodosEditCtrl.$inject = ['$state', 'TodosDAO'];

})();
