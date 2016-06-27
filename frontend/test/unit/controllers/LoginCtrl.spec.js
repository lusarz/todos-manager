(function () {
  'use strict';

  describe('LoginCtrl', function () {

    var ctrl, scope, SecurityFactory;

    beforeEach(function () {
      module('app');
      angular.mock.module('views');

      inject(function ($controller, $rootScope, _SecurityFactory_) {
        scope = $rootScope.$new();
        ctrl = $controller('LoginCtrl', {
          $scope: scope
        });
        SecurityFactory = _SecurityFactory_;
      });
    });

    afterEach(function () {
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
    });

  });
})();
