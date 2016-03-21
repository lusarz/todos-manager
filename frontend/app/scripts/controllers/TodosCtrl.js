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

    getTodos();

    function getTodos() {
      TodosDAO.getList().then(function (response) {
        vm.todos = response;
      }, function (error) {

      });
    }
  }

  angular.module('app')
    .controller('TodosCtrl', TodosCtrl);

  TodosCtrl.$inject = ['TodosDAO'];

})();
