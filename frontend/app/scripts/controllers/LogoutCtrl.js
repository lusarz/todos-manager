(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:LogoutCtrl
   * @description
   * # LogoutCtrl
   * Controller of the app
   */
  function LogoutCtrl(SecurityFactory, $state) {
    SecurityFactory.logout();
    $state.go('access.login');
  }

  angular.module('app')
    .controller('LogoutCtrl', LogoutCtrl);

  LogoutCtrl.$inject = ['SecurityFactory', '$state'];

})();
