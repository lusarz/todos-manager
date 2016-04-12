'use strict';

describe('Factory: ValidationHelper', function () {

  var ValidationHelper, scope, form;


  beforeEach(function () {
      module('app');

      inject(function (_ValidationHelper_, $rootScope, $compile) {
        ValidationHelper = _ValidationHelper_;
        scope = $rootScope.$new();

        var formElem = angular.element('<form name="exampleForm"><input type="text" name="field1" ng-model="field1" /><input type="text" name="field2" ng-model="field2" /></form>');
        $compile(formElem)(scope);
        form = scope.exampleForm;
        scope.$apply()
      });
    }
  );

  describe('Before bind errors', function () {
    it('Form should be valid', function () {
      expect(form.$invalid).toBeFalsy();
    });

    it('Input should be valid', function () {
      expect(form.field1.$invalid).toBeFalsy();
    });
  });


  describe('Bind errors to field', function () {

    var errors;

    beforeEach(function () {

      errors = {
        field1: {
          code: 'duplicate'
        }
      };
      ValidationHelper.bindBackendErrors(form, errors);
    });


    it('Form should be invalid', function () {
      expect(form.$invalid).toBeTruthy();
    });

    it('Input should be invalid', function () {
      expect(form.field1.$invalid).toBeTruthy();
    });

    it('Input without errors should be valid', function () {
      expect(form.field2.$invalid).toBeFalsy();
    });

    it('After change value error should disappear', function () {
      form.field1.$setViewValue('BANANA');
      expect(form.field1.$invalid).toBeFalsy();
      expect(form.field1.$parsers).toEqual([]);
    });
  });


});