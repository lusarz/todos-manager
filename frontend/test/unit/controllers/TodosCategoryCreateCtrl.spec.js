(function () {
  'use strict';


  describe('TodosCategoryCreateCtrl', function () {

    var ctrl, scope, TodosCategoriesDAOMock;


    var categories = [
      {
        _id: '1',
        name: 'First category'
      }, {
        _id: '2',
        name: 'Second category'
      }, {
        _id: '3',
        name: 'Third category'
      }
    ];

    beforeEach(function () {
      module('app');


      inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TodosCategoriesDAOMock = jasmine.createSpyObj('TodosCategoriesDAO', ['getList']);
        TodosCategoriesDAOMock.getList.and.returnValue(promisesHelper.getPromise(categories));


        ctrl = $controller('TodosCategoryCreateCtrl', {
          $scope: scope,
          TodosCategoriesDAO: TodosCategoriesDAOMock
        });
      });
    });


    describe('On initialization', function () {
      it('Controller', function () {
        expect(!!ctrl).toBeTruthy();
      });
    });

  });
})();
