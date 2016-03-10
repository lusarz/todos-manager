(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.SecurityService
   * @description
   * # SecurityService
   * Service
   */

  function SecurityService(UserDAO) {

    var bearerToken;

    return {

      login: function (credentials) {
        return UserDAO.login(vm.credentials).then(function (response) {
          bearerToken = response.token;
          return true;
        }, function (error) {
          console.log(error);
          return false;
        });
      },

      logout: function () {
        bearerToken = undefined;
      },

      isLogged: function () {
        return !!bearerToken;
      },

      getToken: function () {
        return bearerToken;
      },

      secureRequest: function (requestConfig) {
        if (bearerToken) {
          requestConfig.headers.Authorization = 'Bearer ' + bearerToken;
        }
      }
    };
  }

  angular.module('app')
    .service('SecurityService', SecurityService);

  SecurityService.$inject = ['UserDAO'];
})();