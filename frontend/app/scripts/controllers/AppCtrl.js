(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:AppCtrl
   * @description
   * # AppCtrl
   * Controller of the app
   */
  function AppCtrl($scope, $state, TodosCategoriesDAO) {
    var vm = this;
    vm.init = init;


    function init() {

      TodosCategoriesDAO.getList().then(function (categories) {
        vm.todosCategories = categories;
      }, function (error) {
        //displayError(error);
      });
    }

    vm.init();
  }

  angular.module('app')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$state', 'TodosCategoriesDAO'];

})();
