(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegistrationCtrl
   * @description
   * # RegistrationCtrl
   * Controller of the app
   */
  function LoginCtrl(UserDAO) {
    var vm = this;
    vm.credentials = {};

    vm.login = login;


    function login() {
      UserDAO.login(vm.credentials).then(function (response) {
        console.log(response);
        vm.token = response.token;
      }, function (error) {
        console.error(error);
      });
    }
  }

  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['UserDAO'];

})();
