(function () {
  'use strict';


  describe('TodosCtrl', function () {

    var ctrl, TodosDAOMock;


    var todos = [
      {
        _id: '1',
        name: 'First todo'
      }, {
        _id: '2',
        name: 'Second todo'
      }, {
        _id: '3',
        name: 'Third todo'
      }
    ];

    beforeEach(function () {
      module('app');

      inject(function ($controller) {
        TodosDAOMock = jasmine.createSpyObj('TodosDAO', ['getList']);
        TodosDAOMock.getList.and.returnValue(promisesHelper.getPromise(todos));


        ctrl = $controller('TodosCtrl', {
          TodosDAO: TodosDAOMock
        });
      });
    });


    afterEach(function () {
      //httpBackend.verifyNoOutstandingExpectation();
      //httpBackend.verifyNoOutstandingRequest();
    });

    describe('On initialization', function () {
      it('Todos should be called', function () {
        expect(TodosDAOMock.getList).toHaveBeenCalled();
      });

      it('Todos should equals', function () {
        expect(ctrl.todos).toEqual(todos);
      });
    });

  });
})();
