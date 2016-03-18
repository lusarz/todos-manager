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
        $state.go('app.todos');
      }, function (error) {
        displayError(error);
      });
    }

    function displayError(error) {
      Notification.error('Problem with login');
      console.log(error);
    }
  }

  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state', 'SecurityFactory', 'Notification'];

})();
