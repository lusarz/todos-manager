(function () {
  'use strict';

  function bodyClass($rootScope) {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, elem) {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {

          var fromStateType = fromState.name.split('.')[0];
          var toStateType = toState.name.split('.')[0];

          // don't do anything if they are the same

          if (fromStateType === 'app' && toStateType === 'access') {
            elem.addClass('transit');
          }

          if (fromStateType !== toStateType) {
            if (fromStateType) {
              elem.removeClass(fromStateType);
            }

            if (toStateType) {
              elem.addClass(toStateType);
              if (toStateType === 'app') {
                elem.removeClass('transit');
              }
            }
          }
        });
      }
    };
  }

  angular.module('app')
    .directive('bodyClass', bodyClass);

  bodyClass.$inject = ['$rootScope'];


})();