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

    var plugins = gulpLoadPlugins({
        rename: {
            'gulp-angular-templatecache': 'templateCache'
        }
    });


    // JS linting task
    gulp.task('jshint', function () {
        var assets = _.union(
            defaultAssets.backend.js,
            defaultAssets.frontend.js,
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

    //Web server task
    gulp.task('webserver', function () {
        connect.server({
            root: 'frontend/app',
            port: 9000,
            livereload: true
        });
    });


    gulp.task('default', ['webserver']);

})();