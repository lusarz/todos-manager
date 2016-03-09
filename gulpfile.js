(function () {
  'use strict';

  var _ = require('lodash');
  var defaultAssets = require('./config/assets/default');
  var gulp = require('gulp');
  var gulpLoadPlugins = require('gulp-load-plugins');
  var runSequence = require('run-sequence');

  var path = require('path');
  var endOfLine = require('os').EOL;

  var sass = require('gulp-sass');
  var connect = require('gulp-connect');
  var wiredep = require('wiredep').stream;
  var clean = require('gulp-clean');
  var KarmaServer = require('karma').Server;
  var protractor = require("gulp-protractor").protractor;
  var webdriver_standalone = require("gulp-protractor").webdriver_standalone;

  var plugins = gulpLoadPlugins({
    rename: {
      'gulp-angular-templatecache': 'templateCache'
    }
  });


  // Clean
  gulp.task('clean', function () {
    return gulp.src('frontend/app/.tmp/**/*', {read: false, force: true})
      .pipe(clean());
  });


  // JS linting task
  gulp.task('jshint', function () {
    var assets = _.union(
      defaultAssets.backend.js,
      defaultAssets.frontend.js,
      defaultAssets.frontendTest.js,
      defaultAssets.config.js
    );

    return gulp.src(assets)
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.jshint.reporter('fail'));
  });

  // Sass task
  gulp.task('sass', function () {
    return gulp.src('frontend/app/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('frontend/app/.tmp/styles'));
  });

  // Bower task
  gulp.task('bower:index', function () {
    gulp.src('frontend/app/index.html')
      .pipe(wiredep({
        src: ['frontend/app/index.html'],
      }))
      .pipe(gulp.dest('frontend/app'));
  });

  gulp.task('bower:karma', function () {
    gulp.src('frontend/test/karma.conf.js')
      .pipe(wiredep({
        devDependencies: true,
        src: 'frontend/test/karma.conf.js'
      }))
      .pipe(gulp.dest('frontend/test'));
  });

  gulp.task('bower:sass', function () {
    gulp.src('frontend/app/styles/**/*.scss')
      .pipe(wiredep({
        devDependencies: true,
        src: 'frontend/app/styles/**/*.scss'
      }))
      .pipe(gulp.dest('frontend/app/styles/'));
  });


  // Karma unit test (once and exit)
  gulp.task('karmaTest', function (done) {
    new KarmaServer({
      configFile: __dirname + '/frontend/test/karma.conf.js',
      singleRun: true
    }, done).start();
  });

  gulp.task('webdriver_standalone', webdriver_standalone);

  gulp.task('e2eTest', function () {
    gulp.src(['frontend/test/e2e/**/*.js'])
      .pipe(protractor({
        configFile: 'frontend/test/protractor.conf.js'
      }))
      .on('error', function (e) {
        throw e
      })
  });

  //Web server task
  gulp.task('webserver', function () {
    connect.server({
      root: ['frontend/app'],
      port: 9000,
      livereload: true,
      middleware: function (connect, opt) {
        return [
          connect.static('frontend/app/.tmp'),
          connect.static('frontend/bower_components')
        ]
      }
    });
  });


  gulp.task('default', ['clean', 'sass', 'bower:index', 'webserver']);
  gulp.task('test:unit', ['bower:index', 'bower:karma', 'karmaTest']);

  gulp.task('test:e2e', ['default', 'e2eTest']);

})
();