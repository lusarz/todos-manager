(function () {
  'use strict';

  var controls = require('../helpers/controls.js');
  var users = require('../fixtures/users').users;

  var modelPrefix = 'vm.credentials.';
  var formName = 'loginForm';

  function LoginForm() {
    this.email = controls.getFieldByModel(modelPrefix + 'email');
    this.password = controls.getFieldByModel(modelPrefix + 'password');


    this.submitButton = controls.getButtonById('btn-login');
  }

  LoginForm.prototype.setInvalidEmail = function () {
    this.email.setValue('ktoswp.pl');
  };

  LoginForm.prototype.setTooShortPassword = function () {
    this.password.setValue('bcdef');
  };

  LoginForm.prototype.fillWithExistingUserValues = function () {
    var user = users[0];
    this.email.setValue(user.email);
    this.password.setValue(user.password);
  };

  LoginForm.prototype.fillWithNotExistingEmail = function () {
    this.email.setValue('ktosnieznany@wp.pl');
    this.password.setValue('ThisIsSomePassword');
  };

  LoginForm.prototype.fillWithExistingEmailButInvalidPassword = function () {
    var user = users[0];
    this.email.setValue(user.email);
    this.password.setValue('ThisIsInvalidPassword');
  };

  LoginForm.prototype.getValidationElement = function (fieldName, validationType) {
    var css = '[ng-messages="' + formName + '.' + fieldName + '.$error"] [ng-message="' + validationType + '"]';
    return element(by.css(css));
  };


  LoginForm.prototype.submitForm = function () {
    return this.submitButton.click();
  };

  module.exports = new LoginForm();
})();
