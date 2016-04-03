(function () {
  'use strict';

  describe('Registration form', function () {
    beforeAll(function () {
      browser.get('/');
    });

    describe('On startup', function () {
      var header = element(by.css('.panel-title'));

      it('first name should be empty', function () {
        expect(header.getText()).toEqual('Register');
      });
    });
  });

})();