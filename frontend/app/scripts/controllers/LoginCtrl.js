(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegistrationCtrl
   * @description
   * # RegistrationCtrl
   * Controller of the app
   */
  function LoginCtrl($scope, $state, SecurityFactory, Notification, ValidationHelper) {
    var vm = this;
    vm.credentials = {};
    vm.rememberMe = false;
    vm.login = login;


    function login() {
      SecurityFactory.login(vm.credentials).then(function () {
        Notification.success('Successfully logged in');
        $state.go('app.todos', {category:'general'});
      }, function (error) {
        displayError(error);
      });
    }

    function displayError(error) {
      if (error.status > 399 && error.status < 500) {
        ValidationHelper.bindBackendErrors($scope.loginForm, error.data.errors);
        vm.globalError = 'Some fields have not been completed correctly';
      } else {
        vm.globalError = 'Internal server error';
      }
    }
  }

  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$state', 'SecurityFactory', 'Notification', 'ValidationHelper'];

})();
