(function () {
  'use strict';

  function TodosDAO($resource) {
    var api = $resource('/api/todos/:a/:b/:c', null, {
      getList: {isArray: true}
    });

    return {
      getList: function () {
        return api.getList().$promise;
      }
    };
  }

  angular.module('app')
    .factory('TodosDAO', TodosDAO);

  TodosDAO.$inject = ['$resource'];

})();