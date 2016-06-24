(function () {
  'use strict';

  function TodosDAO($resource) {
    var api = $resource('/api/todos/:a/:b/:c', null, {
      getList: {isArray: true},
      getById: {isArray: false, method: 'GET'},
      create: {method: 'POST'},
      update: {method: 'PUT'}
    });

    return {
      getList: function (filters) {
        return api.getList(filters).$promise;
      },
      create: function (todo) {
        return api.create(todo).$promise;
      },
      update: function (todo) {
        return api.update({a: todo._id}, todo).$promise;
      },
      findById: function (todoId) {
        return api.getById({a: todoId}).$promise;
      },
      markAsCompleted: function (todoId) {
        return api.create({a: todoId, b: 'mark_as_completed'}, {}).$promise;
      }
    };
  }

  angular.module('app')
    .factory('TodosDAO', TodosDAO);

  TodosDAO.$inject = ['$resource'];

})();