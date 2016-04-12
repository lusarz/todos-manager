(function () {
  'use strict';

  var _ = require('lodash');

  module.exports = {
    prepareErrorResponse: prepareErrorResponse,
    prepareDuplicateErrorResponse: prepareDuplicateErrorResponse
  };

  function prepareErrorResponse(err) {
    var response = {};
    response.errors = {};

    _.each(err.errors, function (value, key) {
      response.errors[key] = {code: value.message};
    });
    return response;
  }

  function prepareDuplicateErrorResponse(fieldName) {
    var response = {};
    response.errors = {};
    response.errors[fieldName] = {code: 'duplicate'};
    return response;
  }

})();