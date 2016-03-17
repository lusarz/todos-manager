(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.SecurityFactory
   * @description
   * # SecurityFactory
   * Service
   */

  function SecurityFactory(UserDAO, $http) {

    var bearerToken;
    var storage;

    init();


    function setupBearerHeader() {
      $http.defaults.headers.common.Authorization = 'Bearer ' + bearerToken;
    }

    function login(credentials) {
      return UserDAO.login(credentials).then(function (response) {
        bearerToken = response.token;
        storage.bearerToken = bearerToken;
        setupBearerHeader();
      }, function (error) {
        throw error;
      });
    }

    function logout() {
      bearerToken = undefined;
      storage.removeItem('bearerToken');
      delete $http.defaults.headers.common.Authorization;
    }

    function isLogged() {
      return !!bearerToken;
    }


    function init() {
      storage = sessionStorage;
      if (storage.bearerToken) {
        bearerToken = storage.bearerToken;
        setupBearerHeader();
      }
    }


    return {
      login: login,
      logout: logout,
      isLogged: isLogged
    };
  }

  angular.module('app')
    .factory('SecurityFactory', SecurityFactory);

  SecurityFactory.$inject = ['UserDAO', '$http'];
})();