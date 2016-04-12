(function () {
  'use strict';

  var loginForm = require('./fragments/loginForm.fragment.js');

  describe('Login form', function () {
    beforeAll(function () {
      browser.get('/#/login');
    });

    describe('Validation', function () {
      it('too short password message should be present', function () {
        loginForm.setTooShortPassword();
        expect(loginForm.getValidationElement('password', 'minlength').isPresent()).toBeTruthy();
      });

      it('when email is invalid message should be present', function () {
        loginForm.setInvalidEmail();
        expect(loginForm.getValidationElement('email', 'email').isPresent()).toBeTruthy();
      });

      it('Email is required message should be present', function () {
        var emailElement = loginForm.email;
        emailElement.setValue('costam');
        emailElement.clearValue();

        expect(loginForm.getValidationElement('email', 'required').isPresent()).toBeTruthy();
      });
    });
  });
})();