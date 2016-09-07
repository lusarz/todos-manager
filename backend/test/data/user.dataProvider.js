'use strict';

const _ = require('lodash');
const users = require('../fixtures/users').users;
const existingUser = users[0];

const notExistingUser = {
  firstName: 'Jan',
  lastName: 'Nowak',
  email: 'jan.nowak@gmail.com',
  password: 'thisIsPassword123!'
};

class UserDataProvider {
  static _getLoginData(user) {
    return _.pick(user, 'email', 'password');
  }

  static _getRegistrationData(user) {
    return _.pick(user, 'firstName', 'lastName', 'email', 'password');
  }

  static getExistingUser() {
    return existingUser;
  }

  static getExistingUser2() {
    return users[1];
  }

  static getNotExistingUserLoginData() {
    return UserDataProvider._getLoginData(notExistingUser);
  }

  static getExistingUserLoginData() {
    return UserDataProvider._getLoginData(existingUser);
  }

  static getExistingUserRegistrationData() {
    return UserDataProvider._getRegistrationData(existingUser);
  }

  static getNotExistingUserRegistrationData() {
    return UserDataProvider._getRegistrationData(notExistingUser);
  }

  static getTooShortPasswordRegistrationData() {
    let data = UserDataProvider._getRegistrationData(notExistingUser);
    data.password = 'apapa';
    return data;
  }
}

module.exports = UserDataProvider;