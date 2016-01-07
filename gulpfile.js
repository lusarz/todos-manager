(function () {
  'use strict';

  var _ = require('lodash'),
    defaultAssets = require('./config/assets/default'),
    gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    runSequence = require('run-sequence'),
    plugins = gulpLoadPlugins({
      rename: {
        'gulp-angular-templatecache': 'templateCache'
      }
    }),
    path = require('path'),
    endOfLine = require('os').EOL;


  // JS linting task
  gulp.task('jshint', function () {
    var assets = _.union(
      defaultAssets.backend.js,
      defaultAssets.config.js
    );

    return gulp.src(assets)
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.jshint.reporter('fail'));
  });

})();