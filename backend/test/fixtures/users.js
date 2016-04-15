(function () {
  'use strict';


  var users = [
    {
      '__v': 0,
      '_id': '56eabfbac6edac8121534001',
      'created': new Date(),
      'displayName': 'Jan Kowalski',
      'email': 'user1@o2.pl',
      'firstName': 'Jan',
      'lastName': 'Kowalski',
      'password': '123456',
      'roles': ['user']
    },
    {
      '__v': 0,
      '_id': '89abdecbe7fabc90012c0002',
      'created': new Date(),
      'displayName': 'Andrzej Nowak',
      'email': 'user2@o2.pl',
      'firstName': 'Andrzej',
      'lastName': 'Nowak',
      'password': '234567',
      'roles': ['user']
    }];

  module.exports.users = users;

})();