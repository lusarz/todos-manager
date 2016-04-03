(function () {
  'use strict';

  module.exports.config = {
    seleniumServerJar: '../../node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
    framework: 'jasmine',

    specs: [
      'e2e/*.spec.js'
    ],

    capabilities: {
      'browserName': 'chrome'
    },

    baseUrl: 'http://127.0.0.1:9000',
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    keepAlive: false
  };
})();
