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
  var sourcemaps = require('gulp-sourcemaps');
  var env = require('gulp-env');
  var mocha = require('gulp-mocha');
  var nodemon = require('gulp-nodemon');
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
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
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

  // Backend unit test
  gulp.task('mocha', function () {
    env({
      vars: {
        NODE_ENV: 'test'
      }
    });
    return gulp.src('backend/test/**/*.spec.js')
      .pipe(mocha({
        bail: false
      }).on('error', function (error) {
        process.exit(1);
      }).on('end', function () {
        process.exit();
      })
    );
  });

  gulp.task('watch', function () {
    gulp.watch('frontend/app/styles/**/*.scss', ['sass']);
  });


  gulp.task('start', function () {
    nodemon({
      script: 'server.js',
      ext: 'js html scss',
      env: {'NODE_ENV': 'development'}
    })
  });


  gulp.task('default', ['clean', 'sass', 'bower:index', 'watch', 'start']);
  gulp.task('test:unit', ['bower:index', 'bower:karma', 'karmaTest']);
  gulp.task('test:e2e', ['default', 'e2eTest']);
  gulp.task('test:backend', ['mocha']);

  gulp.task('test', ['test:unit'/*, 'test:backend'*/]);

})();