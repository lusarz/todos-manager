(function () {
  'use strict';

  describe('TodosCreateCtrl', function () {

    var ctrl, scope, SecurityFactory;

    beforeEach(function () {
      module('app');

      inject(function ($controller, $rootScope, _SecurityFactory_) {
        scope = $rootScope.$new();
        ctrl = $controller('TodosCreateCtrl', {
          $scope: scope
        });
        SecurityFactory = _SecurityFactory_;
      });
    });

    afterEach(function () {
    });

    describe('On initialization', function () {
      it('Todos should be empty array', function () {
        expect(ctrl.action).toEqual('CREATE');
      });

      it('Get todos function should be defined', function () {
        expect(typeof ctrl.save).toEqual('function');
      });
    });


    it('After download data', function () {
    });

  });
})();
