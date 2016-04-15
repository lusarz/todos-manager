(function () {
  'use strict';

  var port = process.env.PORT || 9000;
  var dbName = 'todosManager';
  var db = 'mongodb://localhost:27017/' + dbName;

  module.exports = {
    port: port,
    dbName: dbName,
    db: db
  };
})();