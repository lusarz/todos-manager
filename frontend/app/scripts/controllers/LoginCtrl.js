(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegistrationCtrl
   * @description
   * # RegistrationCtrl
   * Controller of the app
   */
  function LoginCtrl(SecurityFactory, $state) {
    var vm = this;
    vm.credentials = {};

    vm.login = login;


    function login() {
      SecurityFactory.login(vm.credentials).then(function () {
        $state.go('app.todos');
      }, function (error) {
        console.error(error);
      });
    }
  }

  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['SecurityFactory', '$state'];

})();
