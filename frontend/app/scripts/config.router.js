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
        templateUrl: 'access/access.html'
      })
      .state('access.login', {
        url: '/login',
        templateUrl: 'access/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('access.register', {
        url: '/register',
        templateUrl: 'access/register.html',
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
        templateUrl: 'app/app.html',
        controllerAs: 'vm'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard.html'
      })
      .state('app.profile', {
        url: '/profile',
        templateUrl: 'profile.html'
      })
      .state('app.settings', {
        url: '/settings',
        templateUrl: 'settings.html'
      })
      .state('app.todos_favourite', {
        url: '/todos/favourite',
        templateUrl: 'todos/list-favourite.html',
        params: {
          category: 'favourite'
        },
        controller: 'TodosCtrl',
        controllerAs: 'vm'
      })
      .state('app.todos', {
        url: '/todos/:category',
        templateUrl: 'todos/list.html',
        controller: 'TodosCtrl',
        controllerAs: 'vm'
      })
      .state('app.todosCategoriesEdit', {
        url: '/todos/:category/edit',
        templateUrl: 'categories/form.html',
        controller: 'TodosCategoryEditCtrl',
        controllerAs: 'vm'
      })
      .state('app.todosCreate', {
        url: '/todos/:category/create',
        templateUrl: 'todos/form.html',
        controller: 'TodosCreateCtrl',
        controllerAs: 'vm'
      })
      .state('app.todosEdit', {
        url: '/todos/:categoryId/edit:id',
        templateUrl: 'todos/form.html',
        controller: 'TodosEditCtrl',
        controllerAs: 'vm'
      })
      .state('app.todosCategoriesCreate', {
        url: '/todosCategories/create',
        templateUrl: 'categories/form.html',
        controller: 'TodosCategoryCreateCtrl',
        controllerAs: 'vm'
      })
  }

  angular.module('app')
    .config(routingConfiguration);

  routingConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];


})();
