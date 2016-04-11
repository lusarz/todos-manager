(function () {

  'use strict';


  function config() {
  }

  function run(SecurityFactory) {
  }

  angular.module('app')
    .config(config)
    .run(run);

  run.$inject = ['SecurityFactory'];

})();