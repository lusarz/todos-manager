(function () {
  'use strict';

  module.exports = {
    frontend: {},
    backend: {
      js: [
        'backend/server.js',
        'backend/dao/*.js',
        'backend/models/*.js'
      ]
    },
    config: {
      js: [
        'config/**/*.js'
      ]
    }
  };

})();