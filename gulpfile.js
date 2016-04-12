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
  var nodemon = require('nodemon');
  var wiredep = require('wiredep').stream;
  var clean = require('gulp-clean');
  var del = require('del');
  var KarmaServer = require('karma').Server;
  var protractor = require("gulp-protractor").protractor;
  var webdriver_standalone = require("gulp-protractor").webdriver_standalone;

  var usemin = require('gulp-usemin');
  var uglify = require('gulp-uglify');
  var minifyHtml = require('gulp-minify-html');
  var minifyCss = require('gulp-minify-css');
  var rev = require('gulp-rev');

  var tar = require('gulp-tar');
  var gzip = require('gulp-gzip');
  var GulpSSH = require('gulp-ssh');
  var crypto = require('crypto');

  var runSequence = require('run-sequence');


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

  gulp.task('clean:dist', function (done) {
    return del.sync([
      'dist'
    ], done);
  });


  // JS linting task
  gulp.task('jshint', function () {
    var assets = _.union(
      defaultAssets.backend.js,
      defaultAssets.backendTest.js,
      defaultAssets.frontend.js,
      defaultAssets.frontendTest.js,
      defaultAssets.config.js,
      defaultAssets.common.js
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

  gulp.task('usemin', function () {
      return gulp.src('frontend/app/*.html')
        .pipe(usemin({}))
        .pipe(gulp.dest('frontend/app/dist'));
    }
  );

  gulp.task('copy:dist', function () {
    var assets = ['frontend/app/fonts/**/*', 'frontend/app/images/**/*', 'frontend/app/views/**/*'];
    return gulp.src(assets, {"base": "frontend/app"})
      .pipe(gulp.dest('frontend/app/dist'));
  });

  gulp.task('copyAll:dist', function () {

    gulp.src('frontend/app/dist/**/*')
      .pipe(gulp.dest('dist/frontend'));

    gulp.src('backend/app/**/*', {base: 'backend'})
      .pipe(gulp.dest('dist/backend'));

    gulp.src('config/**/*')
      .pipe(gulp.dest('dist/config'));

    gulp.src('server.js')
      .pipe(gulp.dest('dist'));

    gulp.src('package.json')
      .pipe(gulp.dest('dist'));

  });

  gulp.task('deploy:prepare', function () {
    return gulp.src('dist/**/*')
      .pipe(tar('dist.tar'))
      .pipe(gzip())
      .pipe(gulp.dest('.'));
  });

  gulp.task('buildApp:dist', function (done) {
    runSequence(
      'clean',
      'sass',
      'bower:index',
      ['usemin', 'copy:dist'],
      'copyAll:dist',
      done
    );
  });


  gulp.task('e2eFixtures', function (done) {
    var fixtures = require('pow-mongodb-fixtures').connect('todosManager-test', {
      host: 'localhost',
      port: 27017
    });

    fixtures.addModifier(function (collectionName, item, cb) {
      if (collectionName === 'users') {
        item.salt = crypto.randomBytes(16).toString('base64');
        item.password = crypto.pbkdf2Sync(item.password, new Buffer(item.salt, 'base64'), 10000, 64).toString('base64');
      }
      cb(null, item);
    });

    fixtures.clearAllAndLoad(__dirname + '/frontend/test/e2e/fixtures', function (err) {
      console.log(err);
      done();
      process.exit();
    });
  });

  gulp.task('e2eTest', function () {
    env({
      vars: {
        NODE_ENV: 'test'
      }
    });

    var nodemonProcess = nodemon({
      script: 'server.js',
      ext: 'js html scss'
    });

    nodemonProcess.on('start', function () {
      gulp.src(['frontend/test/e2e/**/*.js'])
        .pipe(protractor({
          configFile: 'frontend/test/protractor.conf.js'
        }))
        .once('end', function () {
          nodemonProcess.emit('quit');
          setTimeout(function () {
            process.exit();
          }, 1500);
        });
    });
  });

  // Backend unit test
  gulp.task('mocha', function (done) {
    env({
      vars: {
        NODE_ENV: 'test'
      }
    });
    return gulp.src('backend/test/**/*.spec.js')
      .pipe(mocha({
        bail: false
      }).on('error', function (error) {
        done(error);
        process.exit(1);
      }).on('end', function () {
        done();
        process.exit();
      })
    );
  });

  gulp.task('watch', function () {
    gulp.watch('frontend/app/styles/**/*.scss', ['sass']);
  });


  gulp.task('start', function () {
    return nodemon({
      script: 'server.js',
      ext: 'js html scss'
    });
  });


  gulp.task('default', ['clean', 'sass', 'bower:index', 'watch', 'start']);
  gulp.task('test:unit', ['bower:index', 'bower:karma', 'karmaTest']);


  gulp.task('test:e2e', ['e2eTest']);
  gulp.task('test:backend', ['mocha']);
  gulp.task('test', ['test:unit'/*, 'test:backend'*/]);
  gulp.task('build:dist', ['usemin', 'copy:dist'])

})();