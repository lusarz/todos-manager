(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosEditCtrl
   * @description
   * # TodosEditCtrl
   * Controller of the app
   */
  function TodosEditCtrl($state, $stateParams, TodosDAO) {
    var vm = this;
    var todoId = $stateParams.id;
    vm.save = save;

    init();

    function init() {
      vm.action = 'EDIT';
      vm.initialized = false;

      TodosDAO.findById(todoId).then(function (todo) {
        vm.todo = todo;
        vm.initialized = true;
      }, function (err) {
        displayError(err);
      });
    }

    function save() {
      TodosDAO.update(vm.todo).then(function () {
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

  TodosEditCtrl.$inject = ['$state', '$stateParams', 'TodosDAO'];

})();
