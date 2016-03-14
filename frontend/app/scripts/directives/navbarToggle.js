(function () {
  'use strict';

  angular.module('app')
    .directive('navbarToggle', navbarToggle);

  function navbarToggle() {
    return {
      restrict: 'C',
      replace: false,
      transclude: false,
      link: function (scope, elem) {
        var aside = $('aside');

        elem.bind('click', function (e) {
          console.log(e);
          e.preventDefault();
          e.stopPropagation();
          aside.toggleClass('collapsed');
        });
      }
    };
  }


})();