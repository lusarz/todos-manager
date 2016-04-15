(function () {
  'use strict';

  var port = process.env.PORT || 3001;
  var dbName = 'todosManager-test';
  var db = 'mongodb://localhost:27017/' + dbName;

  module.exports = {
    port: port,
    dbName: dbName,
    db: db
  };
})();