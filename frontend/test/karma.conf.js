(function () {
  'use strict';

  module.exports = function (config) {
    process.env.PHANTOMJS_BIN = 'node_modules/.bin/phantomjs';

    config.set({
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // base path, that will be used to resolve files and exclude
      //basePath: '../',

      // testing framework to use (jasmine/mocha/qunit/...)
      frameworks: ['jasmine'],

      // list of files / patterns to load in the browser
      files: [
        // bower:js
        '../app/bower_components/angular/angular.js',
        '../app/bower_components/angular-animate/angular-animate.js',
        '../app/bower_components/angular-cookies/angular-cookies.js',
        '../app/bower_components/angular-messages/angular-messages.js',
        '../app/bower_components/angular-sanitize/angular-sanitize.js',
        '../app/bower_components/angular-touch/angular-touch.js',
        '../app/bower_components/angular-resource/angular-resource.js',
        '../app/bower_components/angular-ui-router/release/angular-ui-router.js',
        '../app/bower_components/jquery/dist/jquery.js',
        '../app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
        '../app/bower_components/angular-ui-notification/dist/angular-ui-notification.js',
        '../app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        '../app/bower_components/angular-validation-match/dist/angular-validation-match.min.js',
        '../app/bower_components/lodash/lodash.js',
        '../app/bower_components/angular-ui-select/dist/select.js',
        '../app/bower_components/angular-mocks/angular-mocks.js',
        '../app/bower_components/bootstrap/dist/js/bootstrap.js',
        // endbower
        '../app/.tmp/**/*.js',
        '../app/scripts/**/*.js',
        '../app/views/**/*.html',
        //'test/mock/**/*.js',
        './unit/**/*.js'
      ],

      // list of files / patterns to exclude
      exclude: [],

      // web server port
      port: 8080,

      browsers: [
        'PhantomJS'
      ],

      // Which plugins to enable
      plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine'
      ],

      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun: true,

      colors: true,

      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel: config.LOG_INFO

    });
  };
})();
