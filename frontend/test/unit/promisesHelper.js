(function () {
  'use strict';

  window.promisesHelper = window.promisesHelper || {};


  function getPromise() {

    var argumentsList = arguments;

    return {
      then: function (callback) {
        callback.apply(null, argumentsList);
        return this;
      }
    };
  }

  window.promisesHelper.getPromise = getPromise;

})();