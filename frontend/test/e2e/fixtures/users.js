(function () {
  'use strict';

  var id = require('pow-mongodb-fixtures').createObjectId;


  var users = [{
    '__v': 0,
    '_id': id('56eabfbac6edac8121534d4d'),
    'created': new Date(),
    'displayName': 'Łukasz Usarz',
    'email': 'lukas-u1@o2.pl',
    'firstName': 'Łukasz',
    'lastName': 'Usarz',
    'password': '123456',
    'roles': ['user'],
    'salt': '?',
    'token': 'HmFTFkmT9jUYxfPW8tndEYJeZQrmsKP9kzPekBJt'
  }];

  module.exports.users = users;

})();