(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:TodosCategoryEditCtrl
   * @description
   * # TodosCategoryEditCtrl
   * Controller of the app
   */
  function TodosCategoryEditCtrl($scope, $stateParams, $state, TodosCategoriesDAO, TodoCategoriesFactory) {
    var vm = this;
    vm.save = save;

    vm.icons = [{
      name: 'fa-university',
      code: '\uf19c'
    }, {
      name: 'fa-bell',
      code: '\uf0f3'
    }, {
      name: 'fa-book',
      code: '\uf02d'
    }, {
      name: 'fa-camera',
      code: '\uf030'
    }, {
      name: 'fa-heart',
      code: '\uf004'
    }];


    init();

    function init() {
      vm.action = 'EDIT';

      if ($stateParams.category) {
        TodoCategoriesFactory.getCategoryById($stateParams.category).then(function (category) {
          vm.category = category;
        });
      }

    }

    function save() {
      TodosCategoriesDAO.update(vm.category).then(function () {
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
    .controller('TodosCategoryEditCtrl', TodosCategoryEditCtrl);

  TodosCategoryEditCtrl.$inject = ['$scope', '$stateParams', '$state', 'TodosCategoriesDAO', 'TodoCategoriesFactory'];

})();
