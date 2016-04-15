(function () {
  'use strict';

  var todos = [
    {
      '_id': '82abcdef1863982121534001',
      'user': '56eabfbac6edac8121534001',
      'description': '',
      'name': 'Another task',
      'category': '56eabfbac5dacbf458930001',
      'created': new Date(),
      '__v': 0
    },
    {
      '_id': '82abcdef1863982121534002',
      'user': '56eabfbac6edac8121534001',
      'dueDate': new Date(),
      'created': new Date(),
      'description': 'This is task with date',
      'name': 'With date',
      'category': '56eabfbac5dacbf458930001',
      '__v': 0
    },
    {
      '_id': '82abcdef1863982121534003',
      'user': '56eabfbac6edac8121534001',
      'dueDate': new Date(),
      'created': new Date(),
      'description': '',
      'name': 'Third task',
      'category': '56eabfbac5dacbf458930001',
      '__v': 0
    },
    {
      '_id': '82abcdef1863982121534004',
      'user': '56eabfbac6edac8121534001',
      'dueDate': new Date(),
      'created': new Date(),
      'description': 'This is another task',
      'name': 'Another task',
      'category': '56eabfbcd3adfff391100002',
      '__v': 0
    },
    {
      '_id': '82abcdef1863982121534005',
      'user': '89abdecbe7fabc90012c0002',
      'dueDate': new Date(),
      'created': new Date(),
      'description': 'This is another task',
      'name': 'Another task for second user',
      'category': '56eabfbcd3adfff391100004',
      '__v': 0
    }
  ];

  module.exports.todos = todos;

})();
