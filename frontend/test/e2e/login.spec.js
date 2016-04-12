(function () {
  'use strict';

  var loginForm = require('./fragments/loginForm.fragment.js');

  describe('Login form', function () {
    beforeEach(function () {
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

    describe('After successful login', function () {
      it('should be redirect to todos list', function () {
        loginForm.fillWithExistingUserValues();
        loginForm.submitForm().then(function () {
          browser.waitForAngular();
          expect(browser.driver.getCurrentUrl()).toMatch('/todos');
        }, 10000);
      });
    });

    describe('Backend validation', function () {
      it('when user not exists message should be present', function () {
        loginForm.fillWithNotExistingEmail();
        loginForm.submitForm().then(function () {
          browser.waitForAngular();
          expect(loginForm.getValidationElement('email', 'notExist').isPresent()).toBeTruthy();
        }, 10000);
      });

      it('when password is bad message should be present', function () {
        loginForm.fillWithExistingEmailButInvalidPassword();
        loginForm.submitForm().then(function () {
          browser.waitForAngular();
          expect(loginForm.getValidationElement('password', 'invalid').isPresent()).toBeTruthy();
        }, 10000);
      });
    });
  });
})();