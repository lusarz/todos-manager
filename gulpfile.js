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
    gulp.task('bower', function () {
        gulp.src('frontend/app/index.html')
            .pipe(wiredep({
                src: ['frontend/app/index.html'],
            }))
            .pipe(gulp.dest('frontend/app'));
    });


    //Web server task
    gulp.task('webserver', function () {
        connect.server({
            root: ['frontend/app'],
            port: 9000,
            livereload: true,
            middleware: function (connect, opt) {
                return [
                    connect.static('frontend/app/.tmp')
                ]
            }
        });
    });


    gulp.task('default', ['clean', 'sass', 'bower', 'webserver']);

})
();