(function () {
  'use strict';

  describe('LoginCtrl', function () {

    var ctrl, scope, httpBackend;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
      scope = $rootScope.$new();
      ctrl = $controller('LoginCtrl', {
        $scope: scope
      });
      httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    describe('On initialization', function () {
      it('Registration data should be empty', function () {
        expect(ctrl.credentials).toEqual({});
      });

      it('Register function should be defined', function () {
        expect(typeof ctrl.login).toEqual('function');
      });

      it('Token should not be defined', function () {
        expect(ctrl.token).not.toBeDefined();
      });
    });


    it('After download data', function () {
      httpBackend.whenPOST('/api/user/login').respond({
        token: '1234'
      });

      ctrl.login();
      httpBackend.flush();
      expect(ctrl.token).toEqual('1234');
    });

  });
})();
