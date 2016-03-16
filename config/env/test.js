(function () {
  'use strict';

  module.exports = {
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost:27017/todosManager-test',
    sessionSecret: process.env.SESSION_SECRET || 'sajfkkjr9493rj34r90fjksdsdf'
  };
})();
