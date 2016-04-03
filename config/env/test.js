(function () {
  'use strict';

  module.exports = {
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost:27017/todosManager-test'
  };
})();