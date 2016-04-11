(function () {
  'use strict';

  describe('Registration form', function () {
    beforeAll(function () {
      browser.get('/#/register');
    });

    describe('On startup', function () {
      var header = element(by.css('.panel-title'));

      it('first name should be empty', function () {
        expect(header.getText()).toEqual('Register');
      });
    });

    describe('Validation', function () {
      it('too short password message should be present', function () {
        element(by.model('vm.registrationData.password')).sendKeys('qwert');
        expect(element(by.css('[name="password"]+.help-block [ng-message="minlength"]')).isPresent()).toBeTruthy();
      });

      it('Email is required message should be present', function () {
        var emailElement = element(by.model('vm.registrationData.email'));
        emailElement.sendKeys('costam');
        emailElement.clear();

        expect(element(by.css('[name="email"]+.help-block [ng-message="required"]')).isPresent()).toBeTruthy();
      });
    });
  });
})();