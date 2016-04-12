(function () {
  'use strict';

  var controls = require('../helpers/controls.js');

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
    var css = '[ng-messages="loginForm.' + fieldName + '.$error"] [ng-message="' + validationType + '"]';
    return element(by.css(css));
  };


  LoginForm.prototype.submitForm = function () {
    this.submitButton.click();
  };

  module.exports = new LoginForm();
})();
