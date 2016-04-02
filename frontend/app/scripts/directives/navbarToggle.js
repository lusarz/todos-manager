(function () {
  'use strict';

  function navbarToggle() {
    return {
      restrict: 'C',
      replace: false,
      transclude: false,
      link: function (scope, elem) {
        elem.bind('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          $('aside').toggleClass('collapsed');
        });
      }
    };
  }

  angular.module('app')
    .directive('navbarToggle', navbarToggle);


})();