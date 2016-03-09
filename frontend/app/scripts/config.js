(function () {

  'use strict';

  angular.module('app')
    .config(function () {
      console.log('CONFIG');
    })
    .run(function () {
      console.log('RUN');
    });

})();