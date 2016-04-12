(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.ValidationHelper
   * @description
   * # ValidationHelper
   * Factory
   */

  function ValidationHelper() {

    function bindBackendErrors(form, errors) {

      _.each(errors, function (error, fieldName) {
        var field = form[fieldName];
        field.$setValidity(error.code, false);

        field.$parsers.unshift(function (fieldValue) {
          if (fieldValue) {
            field.$setValidity(error.code, true);
            field.$parsers.shift();
          }
          return fieldValue;
        });

      });
    }

    return {
      bindBackendErrors: bindBackendErrors
    };
  }

  angular.module('app')
    .factory('ValidationHelper', ValidationHelper);

  ValidationHelper.$inject = [];
})();