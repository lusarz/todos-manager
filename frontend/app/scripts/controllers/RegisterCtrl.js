(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
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

  angular.module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['UserDAO'];
})();
