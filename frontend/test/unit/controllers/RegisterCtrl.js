(function () {
  'use strict';

  describe('RegisterCtrl', function () {

    var RegisterCtrl, scope;
    
    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      RegisterCtrl = $controller('RegisterCtrl', {
        $scope: scope
      });
    }));

  });
})();
