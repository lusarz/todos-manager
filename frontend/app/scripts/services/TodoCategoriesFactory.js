(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name app.TodoCategoriesFactory
   * @description
   * # TodoCategoriesFactory
   * Service
   */

  function TodoCategoriesFactory(TodosCategoriesDAO, $q) {

    var categories;
    var categoriesPromise;


    function getList(force) {

      if (categories && !force) {
        return $q.when(categories);
      }

      if (!categoriesPromise) {
        categoriesPromise = TodosCategoriesDAO.getList();
      }
      return categoriesPromise.then(function (response) {
        categories = response;
        return categories;
      }, function (error) {
        //displayError(error);
      });
    }

    function getCategoryById(categoryId) {
      return getList().then(function () {
        return _.find(categories, {'_id': categoryId});
      });
    }

    return {
      getList: getList,
      getCategoryById: getCategoryById
    };
  }

  angular.module('app')
    .factory('TodoCategoriesFactory', TodoCategoriesFactory);

  TodoCategoriesFactory.$inject = ['TodosCategoriesDAO', '$q'];
})();