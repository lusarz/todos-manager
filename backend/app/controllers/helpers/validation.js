'use strict';

const _ = require('lodash');

class ValidationHelper {
  static prepareErrorResponse(err) {
    var response = {};
    response.errors = {};

    _.each(err.errors, function(value, key) {
      response.errors[key] = {code: value.message};
    });
    return response;
  }

  static prepareDuplicateErrorResponse(fieldName) {
    var response = {};
    response.errors = {};
    response.errors[fieldName] = {code: 'duplicate'};
    return response;
  }
}

module.exports = ValidationHelper;