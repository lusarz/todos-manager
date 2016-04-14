(function () {
  'use strict';

  /**
   * Config for the router
   */

  function routingConfiguration($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/register');

    $stateProvider
      .state('access', {
        abstract: true,
        url: '',
        templateUrl: 'views/access/access.html'
      })
      .state('access.login', {
        url: '/login',
        templateUrl: 'views/access/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('access.register', {
        url: '/register',
        templateUrl: 'views/access/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .state('access.logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
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
      .state('app.todosCreate', {
        url: '/todos/create',
        templateUrl: '../views/todos/form.html',
        controller: 'TodosCreateCtrl',
        controllerAs: 'vm'
      })
      .state('app.todosEdit', {
        url: '/todos/:id',
        templateUrl: '../views/todos/form.html',
        controller: 'TodosEditCtrl',
        controllerAs: 'vm'
      });
  }

  angular.module('app')
    .config(routingConfiguration);

  routingConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];


})();
