(function () {
  'use strict';

  function TodosCategoriesDAO($resource) {
    var api = $resource('/api/todoCategories/:a/:b/:c', null, {
      getList: {isArray: true},
      getById: {isArray: false, method: 'GET'},
      create: {method: 'POST'},
      update: {method: 'PUT'}
    });

    return {
      getList: function () {
        return api.getList().$promise;
      },
      create: function (category) {
        return api.create(category).$promise;
      },
      update: function (category) {
        return api.update({a: category._id}, category).$promise;
      },
      findById: function (categoryId) {
        return api.getById({a: categoryId}).$promise;
      }
    };
  }

  angular.module('app')
    .factory('TodosCategoriesDAO', TodosCategoriesDAO);

  TodosCategoriesDAO.$inject = ['$resource'];

})();