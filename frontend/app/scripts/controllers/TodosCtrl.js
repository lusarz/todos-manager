(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCtrl
   * @description
   * # TodosCtrl
   * Controller of the app
   */
  function TodosCtrl(TodosDAO) {
    var vm = this;
    vm.todos = [];
    vm.loading = true;

    vm.getTodos = getTodos;

    getTodos();

    function getTodos() {
      TodosDAO.getList().then(function (response) {
        vm.todos = response;
        vm.loading = false;
      }, function (error) {
        console.log(error);
      });
    }
  }

  angular.module('app')
    .controller('TodosCtrl', TodosCtrl);

  TodosCtrl.$inject = ['TodosDAO'];

})();
