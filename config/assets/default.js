(function () {
  'use strict';

  module.exports = {
    frontend: {
      js: [
        'frontend/app/scripts/**/*.js'
      ]
    },
    backend: {
      js: [
        'backend/app/**/*.js'
      ]
    },
    common: {
      js: [
        'server.js'
      ]
    },
    config: {
      js: [
        'config/**/*.js'
      ]
    },
    frontendTest: {
      js: [
        'frontend/test/**/*.js'
      ]
    },
    backendTest: {
      js: [
        'backend/test/**/*.js'
      ]
    }
  };

})();