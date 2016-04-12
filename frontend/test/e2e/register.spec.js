(function () {
  'use strict';

  var registrationForm = require('./fragments/registrationForm.fragment.js');

  describe('Registration form', function () {
    beforeAll(function () {
      browser.get('/#/register');
    });

    describe('Validation', function () {
      it('too short password message should be present', function () {
        registrationForm.setTooShortPassword();
        expect(registrationForm.getValidationElement('password', 'minlength').isPresent()).toBeTruthy();
      });

      it('when email is invalid message should be present', function () {
        registrationForm.setInvalidEmail();
        expect(registrationForm.getValidationElement('email', 'email').isPresent()).toBeTruthy();
      });

      it('Email is required message should be present', function () {
        var emailElement = registrationForm.email;
        emailElement.setValue('costam');
        emailElement.clearValue();

        expect(registrationForm.getValidationElement('email', 'required').isPresent()).toBeTruthy();
      });

      it('when password mismatch message should be present', function () {
        registrationForm.setDifferentPasswords();
        expect(registrationForm.getValidationElement('passwordRepeat', 'match').isPresent()).toBeTruthy();
      });

      it('when user with email already exists message should be present', function () {
        registrationForm.fillWithExistingUserValues();
        registrationForm.submitForm();
        browser.driver.sleep(500);
        expect(registrationForm.getValidationElement('email', 'duplicate').isPresent()).toBeTruthy();
      });
    });
  });
})();