(function () {
  'use strict';

  /**
   * Config for the router
   */

  function routingConfiguration($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/register");

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .state('app', {
        abstract: true,
        url: '',
        templateUrl: 'views/app/app.html'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
      })
      .state('app.todos', {
        url: '/todos',
        templateUrl: 'views/todos/list.html',
        controller: 'TodosCtrl',
        controllerAs: 'vm'
      })
  };

  angular.module('app')
    .config(routingConfiguration);

  routingConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];


})();
