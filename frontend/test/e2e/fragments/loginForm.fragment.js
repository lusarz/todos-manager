(function () {
  'use strict';

  var controls = require('../helpers/controls.js');


  function LoginForm() {
    var dataObjectPrefix = 'vm.credentials.';
    this.email = controls.getFieldByModel(dataObjectPrefix + 'email');
    this.password = controls.getFieldByModel(dataObjectPrefix + 'password');


    this.submitButton = controls.getButtonById('btn-login');
  }

  LoginForm.prototype.setInvalidEmail = function () {
    this.email.setValue('ktoswp.pl');
  };


  LoginForm.prototype.fillWithValidValues = function () {
    this.email.setValue('john.kowalski@wp.pl');
    this.password.setValue('cat123987');
    this.passwordRepeat.setValue('cat123987');
  };

  LoginForm.prototype.fillWithExistingUserValues = function () {
    this.email.setValue('lukas-u1@o2.pl');
    this.password.setValue('cat123987');
  };

  LoginForm.prototype.getValidationElement = function (fieldName, validationType) {
    var css = '[name="' + fieldName + '"]+.help-block [ng-message="' + validationType + '"]';
    return element(by.css(css));
  };


  LoginForm.prototype.submitForm = function () {
    this.submitButton.click();
  };

  module.exports = new LoginForm();
})();
