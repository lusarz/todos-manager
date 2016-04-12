(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the app
   */
  function RegisterCtrl($scope, UserDAO, Notification) {
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
        _.each(error.data.errors, function (value, key) {
          var field = $scope.registerForm[key];
          field.$setValidity(value.code, false);

          field.$parsers.unshift(function (fieldValue) {
            if (fieldValue) {
              vm.globalError = undefined;
              field.$setValidity(value.code, true);
              field.$parsers.shift();
            }
            return fieldValue;
          });

        });
        vm.globalError = 'Some fields have not been completed correctly';
      } else {
        vm.globalError = 'Internal server error';
      }
    }
  }

  angular.module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'UserDAO', 'Notification'];
})();
