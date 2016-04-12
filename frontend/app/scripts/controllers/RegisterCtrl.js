(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the app
   */
  function RegisterCtrl($scope, UserDAO, Notification, ValidationHelper) {
    var vm = this;
    vm.registrationData = {};
    vm.register = register;

    function register() {
      UserDAO.register(vm.registrationData).then(function (response) {
        Notification.success('Successfully registered');
        //What to do after registration
        console.log(response);
      }, function (error) {
        displayError(error);
      });
    }

    function displayError(error) {
      if (error.status === 400 || error.status === 409) {
        ValidationHelper.bindBackendErrors($scope.registerForm, error.data.errors);
        vm.globalError = 'Some fields have not been completed correctly';
      } else {
        vm.globalError = 'Internal server error';
      }
    }
  }

  angular.module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'UserDAO', 'Notification', 'ValidationHelper'];
})();
