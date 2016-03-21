window.promisesHelper = window.promisesHelper || {};

(function (promisesHelper) {
  'use strict';


  function getPromise() {

    var argumentsList = arguments;

    return {
      then: function (callback) {
        callback.apply(null, argumentsList);
        return this;
      }
    };
  }

  promisesHelper.getPromise = getPromise;

})(window.promisesHelper);