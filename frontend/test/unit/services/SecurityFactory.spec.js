'use strict';

describe('Factory: SecurityFactory', function () {

  var SecurityFactory, httpBackend, http;


  beforeEach(function () {
      module('app');

      inject(function (_SecurityFactory_, _$httpBackend_, _$http_) {
        SecurityFactory = _SecurityFactory_;
        httpBackend = _$httpBackend_;
        http = _$http_;
      });

      SecurityFactory.logout();
    }
  );

  describe('On startup', function () {

    it('Should not be logged in', function () {
      expect(SecurityFactory.isLogged()).toBeFalsy();
    });
  });

  describe('After login', function () {

    beforeEach(function () {
      httpBackend.whenPOST('/api/user/login').respond({
        token: '12345'
      });

      SecurityFactory.login({});
      httpBackend.flush();
    });

    it('Http should have authorization header', function () {
      expect(http.defaults.headers.common.Authorization).toEqual('Bearer 12345');
    });

    it('User should be logged in', function () {
      expect(SecurityFactory.isLogged()).toBeTruthy();
    });
  });


});