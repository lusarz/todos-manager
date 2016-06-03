(function () {
  'use strict';


  describe('TodosCategoryCreateCtrl', function () {

    var ctrl, TodosCategoriesDAOMock;


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
      //angular.mock.module('views');


      inject(function ($controller) {
        TodosCategoriesDAOMock = jasmine.createSpyObj('TodosCategoriesDAO', ['getList']);
        TodosCategoriesDAOMock.getList.and.returnValue(promisesHelper.getPromise(categories));


        ctrl = $controller('TodosCategoryCreateCtrl', {
          TodosCategoriesDAO: TodosCategoriesDAOMock
        });
      });
    });


    afterEach(function () {
      //httpBackend.verifyNoOutstandingExpectation();
      //httpBackend.verifyNoOutstandingRequest();
    });

    describe('On initialization', function () {
      it('Todos should be called', function () {
        expect(TodosCategoriesDAOMock.getList).toHaveBeenCalled();
      });

      it('Todos should equals', function () {
        expect(ctrl.todos).toEqual(categories);
      });
    });

  });
})();
