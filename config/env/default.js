(function () {
  'use strict';

  module.exports = {
    port: process.env.PORT || 9000,
    db: 'mongodb://localhost:27017/todosManager'
  };
})();