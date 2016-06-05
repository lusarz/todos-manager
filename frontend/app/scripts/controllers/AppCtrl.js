(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:AppCtrl
   * @description
   * # AppCtrl
   * Controller of the app
   */
  function AppCtrl($scope, $state, TodosCategoriesDAO, UserDAO) {
    var vm = this;
    vm.init = init;
    vm.getUserProfile = getUserProfile;


    $scope.$on('CategoriesUpdated', init);

    function init() {

      TodosCategoriesDAO.getList().then(function (categories) {
        vm.todosCategories = categories;
      }, function (error) {
        //displayError(error);
      });
    }

    function getUserProfile() {
      UserDAO.getMe().then(function (response) {
        vm.user = response;
      }, function (error) {
        //displayError(error);
      });
    }

    vm.init();
    vm.getUserProfile();
  }

  angular.module('app')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$state', 'TodosCategoriesDAO', 'UserDAO'];

})();
