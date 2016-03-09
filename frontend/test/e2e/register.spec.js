describe('Registration form', function () {
  'use strict';

  beforeAll(function () {
    browser.get('/');
  });

  describe('On startup', function () {
    var header = element(by.css('h1'));

    it('first name should be empty', function () {
      expect(header.getText()).toEqual('Hello');
    });
  });


});
