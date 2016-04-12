(function () {
  'use strict';

  function init() {
    var env = process.env.NODE_ENV || 'default';
    console.log('ENV: ' + env);
    var environmentConfig = require('./env/' + env);
    return environmentConfig;
  }

  module.exports = init();
})();