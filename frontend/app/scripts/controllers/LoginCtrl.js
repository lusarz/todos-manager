(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegistrationCtrl
   * @description
   * # RegistrationCtrl
   * Controller of the app
   */
  function LoginCtrl($state, SecurityFactory, Notification) {
    var vm = this;
    vm.credentials = {};
    vm.rememberMe = false;
    vm.login = login;


    function login() {
      SecurityFactory.login(vm.credentials).then(function () {
        Notification.success('Successfully logged in');
        $state.go('app.todos');
      }, function (error) {
        displayError(error);
      });
    }

    function displayError(error) {
      if (error.status === 400) {
        vm.globalError = 'User doesn\'t exists';
      } else if (error.status === 401) {
        vm.globalError = 'Invalid password';
      } else {
        vm.globalError = 'Internal server error';
      }
    }
  }

  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state', 'SecurityFactory', 'Notification'];

})();
