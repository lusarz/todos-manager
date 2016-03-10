(function () {

  'use strict';

  angular.module('app')
    .config(function ($httpProvider) {
      //$httpProvider.interceptors.push('AuthInterceptor');
      console.log('CONFIG');
    })
    .run(function () {
      console.log('RUN');
    });

})();