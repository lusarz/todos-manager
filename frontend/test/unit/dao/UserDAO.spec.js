'use strict';

describe('DAO: UserDAO', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var UserDAO;
  beforeEach(inject(function (_UserDAO_) {
    UserDAO = _UserDAO_;
  }));


  it('should do something', function () {
    expect(!!UserDAO).toBe(true);
  });

});
