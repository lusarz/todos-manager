(function () {
  'use strict';

  describe('LoginCtrl', function () {

    var ctrl, scope, httpBackend, SecurityFactory;

    //module('views');

    beforeEach(function () {
      module('app');
      angular.mock.module('views');

      inject(function ($controller, $rootScope, _$httpBackend_, _SecurityFactory_) {
        scope = $rootScope.$new();
        ctrl = $controller('LoginCtrl', {
          $scope: scope
        });
        httpBackend = _$httpBackend_;
        SecurityFactory = _SecurityFactory_;
      });
    });

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    describe('On initialization', function () {
      it('Credentials should be empty', function () {
        expect(ctrl.credentials).toEqual({});
      });

      it('Login function should be defined', function () {
        expect(typeof ctrl.login).toEqual('function');
      });
    });


    it('After download data', function () {
      httpBackend.whenPOST('/api/user/login').respond({
        token: '1234'
      });

      ctrl.login();
      httpBackend.flush();
      expect(SecurityFactory.isLogged()).toBeTruthy();
    });

  });
})();
