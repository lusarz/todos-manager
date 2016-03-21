(function () {
  'use strict';

  describe('TodosEditCtrl', function () {

    var TodosDAOMock, createController;

    var stateParams = {id: '1234'};

    var todo = {
      _id: '1',
      name: 'First todo'
    };

    beforeEach(function () {
      module('app');
      angular.mock.module('views');

      inject(function ($controller) {
        TodosDAOMock = jasmine.createSpyObj('TodosDAO', ['findById']);
        TodosDAOMock.findById.and.returnValue(promisesHelper.getPromise(todo));


        createController = function (withDAO) {
          var params = {
            $stateParams: stateParams
          };
          if (withDAO) {
            params.TodosDAO = TodosDAOMock;
          }

          return $controller('TodosEditCtrl', params);
        };
      });


    });


    describe('Before initialization', function () {
      var ctrl;
      beforeEach(function () {
        ctrl = createController(false);
      });

      it('Action should be test to EDIT', function () {
        expect(ctrl.action).toEqual('EDIT');
      });

      it('initialized should be false', function () {
        expect(ctrl.initialized).toEqual(false);
      });

      it('todo should be undefined', function () {
        expect(ctrl.todo).toBeUndefined();
      });
    });

    describe('After initialization', function () {
      var ctrl;
      beforeEach(function () {
        ctrl = createController(true);
      });

      it('Data should be downloaded', function () {
        expect(TodosDAOMock.findById).toHaveBeenCalledWith(stateParams.id);
      });

      it('todo should downloaded', function () {
        expect(ctrl.todo).toEqual(todo);
      });
    });


  });
})();
