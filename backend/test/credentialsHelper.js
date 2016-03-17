(function () {
  'use strict';

  var VALID_REGISTRATION_DATA = {
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@gmail.com',
    password: 'thisIsPassword123!'
  };

  var VALID_REGISTRATION_DATA_2 = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@gmail.com',
    password: 'thisIsPassword0123!'
  };

  var VALID_CREDENTIALS = {
    email: VALID_REGISTRATION_DATA.email,
    password: VALID_REGISTRATION_DATA.password
  };

  var INVALID_CREDENTIALS = {
    email: 'ktosinny@onet.pl',
    password: 'jiojsdfuigmsd23423!'
  };


  var VALID_TODOS = [{
    "name": "Task number 0"
  }, {
    "name": "Task number 1"
  }, {
    "name": "Task number 2"
  }, {
    "name": "Task number 3"
  }, {
    "name": "Task number 4"
  }, {
    "name": "Task number 5"
  }];

  module.exports = {
    validRegistrationData: VALID_REGISTRATION_DATA,
    validRegistrationData2: VALID_REGISTRATION_DATA_2,
    validCredentials: VALID_CREDENTIALS,
    invalidCredentials: INVALID_CREDENTIALS,
    validTodos: VALID_TODOS
  }


})();