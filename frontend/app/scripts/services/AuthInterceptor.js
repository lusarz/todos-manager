(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name mycustomersApp.authInterceptor
   * @description
   * # authInterceptor
   * Service in the mycustomersApp.
   */


  function AuthInterceptor($q, $injector) {
    var SecurityService = $injector.get('SecurityService');
    var $state = $injector.get('$state');
    return {
      request: function (config) {
        SecurityService.secureRequest(config);
        return config || $q.when(config);
      },

      response: function (response) {
        return response || $q.when(response);
      },

      responseError: function (rejection) {

        if (rejection.status === 401) {
          SecurityService.logout();
          $state.go('login');
        } else if (rejection.status === 400) {
          console.log('[ERROR] Bad request response from the server.');
        } else if (rejection.status === 500) {
          console.log('[ERROR] Internal server error.');
        } else {
          console.log('[ERROR] Unexpected error from server.');
        }

        return $q.reject(rejection);
      }
    };
  }

  angular.module('app')
    .service('AuthInterceptor', AuthInterceptor);

  AuthInterceptor.$inject = ['$q', '$injector'];

})();
