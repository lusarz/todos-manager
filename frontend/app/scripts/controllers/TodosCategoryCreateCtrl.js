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
      vm.action = 'CREATE';
    }

    function save() {
      TodosCategoriesDAO.create(vm.category).then(function () {
        $state.go('app.todos', {category:'general'});
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
