(function () {
  'use strict';

  var _ = require('lodash');
  var users = require('../fixtures/users').users;
  var existingUser = users[0];

  var notExistingUser = {
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@gmail.com',
    password: 'thisIsPassword123!'
  };

  function getLoginData(user) {
    return _.pick(user, 'email', 'password');
  }

  function getRegistrationData(user) {
    return _.pick(user, 'firstName', 'lastName', 'email', 'password');
  }

  function getExistingUser() {
    return existingUser;
  }

  function getExistingUser2() {
    return users[1];
  }

  function getNotExistingUserLoginData() {
    return getLoginData(notExistingUser);
  }

  function getExistingUserLoginData() {
    return getLoginData(existingUser);
  }

  function getExistingUserRegistrationData() {
    return getRegistrationData(existingUser);
  }

  function getNotExistingUserRegistrationData() {
    return getRegistrationData(notExistingUser);
  }

  function getTooShortPasswordRegistrationData() {
    var data = getRegistrationData(notExistingUser);
    data.password = 'apapa';
    return data;
  }

  module.exports = {
    getExistingUser: getExistingUser,
    getExistingUser2: getExistingUser2,
    getNotExistingUserLoginData: getNotExistingUserLoginData,
    getExistingUserLoginData: getExistingUserLoginData,
    getExistingUserRegistrationData: getExistingUserRegistrationData,
    getNotExistingUserRegistrationData: getNotExistingUserRegistrationData,
    getTooShortPasswordRegistrationData: getTooShortPasswordRegistrationData
  };
})();