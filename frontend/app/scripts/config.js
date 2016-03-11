(function () {

  'use strict';


  function config() {
    console.log('CONFIG');
  }

  function run(SecurityFactory) {
    console.log('RUN');
  }

  angular.module('app')
    .config(config)
    .run(run);

  run.$inject = ['SecurityFactory'];

})();