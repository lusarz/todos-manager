(function () {
  'use strict';

  angular.module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['UserDAO'];


  /**
   * @ngdoc function
   * @name app.controller:RegistrationCtrl
   * @description
   * # RegistrationCtrl
   * Controller of the app
   */
  function RegisterCtrl(UserDAO) {
    var vm = this;
    vm.registrationData = {};

    vm.register = register;


    function register() {
      UserDAO.register(vm.registrationData).then(function (response) {
        console.log(response);
      });
    }
  }
})();
