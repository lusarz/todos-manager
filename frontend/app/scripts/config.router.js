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
        controller: 'AppCtrl',
        templateUrl: 'views/app/app.html',
        controllerAs: 'vm'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html'
      })
      .state('app.todos', {
        url: '/todos/general',
        templateUrl: 'views/todos/list.html',
        controller: 'TodosCtrl',
        controllerAs: 'vm'
      })
      .state('app.todosFavourite', {
        url: '/todos/favourite',
        templateUrl: 'views/todos/list.html',
        params: {
          favourite: true,
        },
        controller: 'TodosCtrl',
        controllerAs: 'vm'
      })
      .state('app.todosByCategory', {
        url: '/todos/category/:categoryId',
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
      })
      .state('app.todosCategoriesCreate', {
        url: '/todosCategories/create',
        templateUrl: '../views/categories/form.html',
        controller: 'TodosCategoryCreateCtrl',
        controllerAs: 'vm'
      })
  }

  angular.module('app')
    .config(routingConfiguration);

  routingConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];


})();
