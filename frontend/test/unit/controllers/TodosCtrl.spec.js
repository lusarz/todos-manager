(function () {
  'use strict';

  describe('TodosCtrl', function () {

    var ctrl, scope, httpBackend, SecurityFactory;

    beforeEach(function () {
      module('app');
      angular.mock.module('views');

      inject(function ($controller, $rootScope, _$httpBackend_, _SecurityFactory_) {
        scope = $rootScope.$new();
        ctrl = $controller('TodosCtrl', {
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
      it('Todos should be empty array', function () {
        expect(ctrl.todos).toEqual([]);
      });

      it('Get todos function should be defined', function () {
        expect(typeof ctrl.getTodos).toEqual('function');
      });
    });


    it('After download data', function () {
      httpBackend.whenPOST('/api/user/login').respond({
        token: '1234'
      });
    });

  });
})();
