(function () {
  'use strict';

  describe('RegisterCtrl', function () {

    var ctrl, scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('RegisterCtrl', {
        $scope: scope
      });
    }));


    describe('On initialization', function () {
      it('Registration data should be empty', function () {
        expect(ctrl.registrationData).toEqual({});
      });

      it('Register function should be defined', function () {
        expect(typeof ctrl.register).toEqual('function');
      });

      it('Token should not be defined', function () {
        expect(ctrl.token).not.toBeDefined();
      });

    });

  });
})();
