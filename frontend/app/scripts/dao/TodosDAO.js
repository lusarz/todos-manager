(function () {
  'use strict';

  function TodosDAO($resource) {
    var api = $resource('/api/todos/:a/:b/:c', null, {
      getList: {isArray: true},
      create: {method: 'POST'}
    });

    return {
      getList: function () {
        return api.getList().$promise;
      },
      create: function (todo) {
        return api.create(todo).$promise;
      }
    };
  }

  angular.module('app')
    .factory('TodosDAO', TodosDAO);

  TodosDAO.$inject = ['$resource'];

})();