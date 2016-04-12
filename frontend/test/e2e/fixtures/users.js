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
    'password': 'jk3hF1Ba316eUC3uj+6UjOadU0IEFdmDxcFWomkvSqEE1RnG7TCSq36Ix7mWbQDt85JfeuMXJ4EY9wDdmgEe9A==',
    'roles': ['user'],
    'salt': 'NL70KN3kZdv8YPLn0qBzkA==',
    'token': 'HmFTFkmT9jUYxfPW8tndEYJeZQrmsKP9kzPekBJt'
  }];

  module.exports.users = users;

})();