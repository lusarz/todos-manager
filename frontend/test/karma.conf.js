(function () {
  'use strict';

  module.exports = function (config) {

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
        '../app/bower_components/angular-sanitize/angular-sanitize.js',
        '../app/bower_components/angular-touch/angular-touch.js',
        '../app/bower_components/angular-resource/angular-resource.js',
        '../app/bower_components/angular-ui-router/release/angular-ui-router.js',
        '../app/bower_components/jquery/dist/jquery.js',
        '../app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
        '../app/bower_components/angular-mocks/angular-mocks.js',
        '../app/bower_components/bootstrap/dist/js/bootstrap.js',
        // endbower
        '../app/scripts/**/*.js',
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
      singleRun: false,

      colors: true,

      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel: config.LOG_INFO,

    });
  };
})();
