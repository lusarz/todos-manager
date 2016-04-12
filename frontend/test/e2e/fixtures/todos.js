(function () {
  'use strict';

  var id = require('pow-mongodb-fixtures').createObjectId;


  var todos = [
    {
      '_id': id(),
      'user': id('56eabfbac6edac8121534d4d'),
      'description': '',
      'name': 'Another task',
      'created': new Date(),
      '__v': 0
    },
    {
      '_id': id(),
      'user': id('56eabfbac6edac8121534d4d'),
      'dueDate': new Date(),
      'created': new Date(),
      'description': 'This is task with date',
      'name': 'With date',
      '__v': 0
    },
    {
      '_id': id(),
      'user': id('56eabfbac6edac8121534d4d'),
      'dueDate': new Date(),
      'created': new Date(),
      'description': '',
      'name': 'Third task',
      '__v': 0
    },
    {
      '_id': id(),
      'user': id('56eabfbac6edac8121534d4d'),
      'dueDate': new Date(),
      'created': new Date(),
      'description': 'This is another task',
      'name': 'Another task',
      '__v': 0
    }
  ];

  module.exports.todos = todos;

})();
