(function () {
  'use strict';

  function TodosDAO($resource) {
    var api = $resource('/api/todos/:a/:b/:c', null, {
      getList: {isArray: true},
      getById: {isArray: false, method: 'GET'},
      create: {method: 'POST'}
    });

    return {
      getList: function () {
        return api.getList().$promise;
      },
      create: function (todo) {
        return api.create(todo).$promise;
      },
      findById: function (todoId) {
        return api.getById({a: todoId}).$promise;
      }
    };
  }

  angular.module('app')
    .factory('TodosDAO', TodosDAO);

  TodosDAO.$inject = ['$resource'];

})();