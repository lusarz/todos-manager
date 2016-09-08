'use strict';

class ValidationHelper {
  static prepareErrorResponse(err) {
    var response = {};
    response.errors = {};

    Object.keys(err.errors).forEach(key => {
      const value = err.errors[key];
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