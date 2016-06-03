(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCategoryCreateCtrl
   * @description
   * # TodosCategoryCreateCtrl
   * Controller of the app
   */
  function TodosCategoryCreateCtrl($state, TodosCategoriesDAO) {
    var vm = this;
    vm.category = {};
    vm.save = save;

    init();

    function init() {
      vm.action = 'CREATE';
    }

    function save() {
      TodosCategoriesDAO.create(vm.category).then(function () {
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
    .controller('TodosCategoryCreateCtrl', TodosCategoryCreateCtrl);

  TodosCategoryCreateCtrl.$inject = ['$state', 'TodosCategoriesDAO'];

})();
