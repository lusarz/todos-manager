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
        expect(element(by.css('[name="password"]+.help-block [ng-message="minlength"]')).isPresent()).toBeTruthy();
      });

      it('Email is required message should be present', function () {
        var emailElement = registrationForm.email;
        emailElement.setValue('costam');
        emailElement.clearValue();


        expect(registrationForm.getValidationElement('email', 'required').isPresent()).toBeTruthy();
      });
    });
  });
})();