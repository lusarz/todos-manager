(function () {
  'use strict';

  module.exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
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
    }
  };
})();
