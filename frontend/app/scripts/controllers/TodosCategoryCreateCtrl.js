(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCategoryCreateCtrl
   * @description
   * # TodosCategoryCreateCtrl
   * Controller of the app
   */
  function TodosCategoryCreateCtrl($scope, $state, TodosCategoriesDAO) {
    var vm = this;
    vm.category = {};
    vm.save = save;

    vm.icons = [{
      icon: 'fa-university'
    }, {
      icon: 'fa-bell'
    }, {
      icon: 'fa-book'
    }, {
      icon: 'fa-camera'
    }];
    

    init();

    function init() {
      vm.action = 'CREATE';
    }

    function save() {
      TodosCategoriesDAO.create(vm.category).then(function () {
        $state.go('app.todos');
        $scope.$emit('CategoriesUpdated');
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

  TodosCategoryCreateCtrl.$inject = ['$scope', '$state', 'TodosCategoriesDAO'];

})();
