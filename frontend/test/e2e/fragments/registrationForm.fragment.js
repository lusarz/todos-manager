(function () {
  'use strict';

  var controls = require('../helpers/controls.js');


  function RegistrationForm() {
    var dataObjectPrefix = 'vm.registrationData.';
    this.email = controls.getFieldByModel(dataObjectPrefix + 'email');
    this.password = controls.getFieldByModel(dataObjectPrefix + 'password');
    this.passwordRepeat = controls.getFieldByModel(dataObjectPrefix + 'passwordRepeat');


    this.submitButton = controls.getButtonById('btn-register');
    this.resetButton = controls.getButtonById('reset');
  }

  RegistrationForm.prototype.setInvalidEmail = function () {
    this.email.setValue('ktoswp.pl');
  };

  RegistrationForm.prototype.setTooShortPassword = function () {
    this.password.setValue('bcde');
    this.passwordRepeat.setValue('bcde');
  };

  RegistrationForm.prototype.setDifferentPasswords = function () {
    this.password.setValue('abcdedsfs');
    this.passwordRepeat.setValue('bcsdfsdef');
  };

  RegistrationForm.prototype.fillWithValidValues = function () {
    this.email.setValue('john.kowalski@wp.pl');
    this.password.setValue('cat123987');
    this.passwordRepeat.setValue('cat123987');
  };

  RegistrationForm.prototype.fillWithExistingUserValues = function () {
    this.email.setValue('lukas-u1@o2.pl');
    this.password.setValue('cat123987');
    this.passwordRepeat.setValue('cat123987');
  };

  RegistrationForm.prototype.getValidationElement = function (fieldName, validationType) {
    var css = '[name="' + fieldName + '"]+.help-block [ng-message="' + validationType + '"]';
    return element(by.css(css));
  };


  RegistrationForm.prototype.submitForm = function () {
    this.submitButton.click();
  };

  module.exports = new RegistrationForm();
})();
