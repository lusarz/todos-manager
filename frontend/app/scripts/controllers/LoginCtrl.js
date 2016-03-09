(function () {
  'use strict';

  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['UserDAO'];


  /**
   * @ngdoc function
   * @name app.controller:RegistrationCtrl
   * @description
   * # RegistrationCtrl
   * Controller of the app
   */
  function LoginCtrl(UserDAO) {
    var vm = this;
    vm.registrationData = {};

    vm.login = login;


    function login() {
      UserDAO.login(vm.registrationData).then(function (response) {
        console.log(response);
      });
    }
  }
})();
