(function () {
  'use strict';

  describe('TodosEditCtrl', function () {

    var TodosDAOMock, stateMock, createController;

    var stateParams = {id: '1234'};

    var todo = {
      _id: '1',
      name: 'First todo'
    };

    beforeEach(function () {
      module('app');
      angular.mock.module('views');

      inject(function ($controller) {
        TodosDAOMock = jasmine.createSpyObj('TodosDAO', ['findById', 'update']);
        TodosDAOMock.findById.and.returnValue(promisesHelper.getPromise(todo));
        TodosDAOMock.update.and.returnValue(promisesHelper.getPromise());

        stateMock = jasmine.createSpyObj('$state', ['go']);


        createController = function (withDAO) {
          var params = {
            $state: stateMock,
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

    describe('After save', function () {
      var ctrl;
      beforeEach(function () {
        ctrl = createController(true);
      });

      it('Should redirect to list', function () {
        ctrl.save().then(function () {
          expect(stateMock.go).toHaveBeenCalledWith('app.todos');
        });
      });
    });


  });
})();
