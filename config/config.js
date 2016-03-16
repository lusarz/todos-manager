(function () {
  'use strict';

  function init() {
    var env = process.env.NODE_ENV || 'default';
    var environmentConfig = require('./env/' + env);
    return environmentConfig;
  }

  module.exports = init();
})();
