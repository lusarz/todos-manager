(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the app
   */
  function RegisterCtrl(UserDAO, Notification) {
    var vm = this;
    vm.registrationData = {};
    vm.register = register;

    function register() {
      UserDAO.register(vm.registrationData).then(function (response) {
        Notification.success('Successfully registered');
        //What to do after registration
        console.log(response);
      }, function (error) {
        Notification.error('Error with registration');
        console.log(error);
      });
    }
  }

  angular.module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['UserDAO', 'Notification'];
})();
