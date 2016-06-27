(function () {
  'use strict';

  describe('LoginCtrl', function () {

    var ctrl, scope;

    beforeEach(function () {
      module('app');

      inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('LoginCtrl', {
          $scope: scope
        });
      });
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
      expect(!!ctrl).toBeTruthy();
    });

  });
})();
