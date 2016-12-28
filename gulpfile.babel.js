'use strict';

import gulp from 'gulp';

import env from 'gulp-env';
import nodemon from 'nodemon';
import { webdriver_standalone } from 'gulp-protractor';


import runSequence from 'run-sequence';

import taskClean from './gulp-tasks/clean';
import taskCleanDist from './gulp-tasks/clean-dist';
import taskTemplateCache from './gulp-tasks/templateCache';
import taskLint from './gulp-tasks/lint';
import taskSass from './gulp-tasks/sass';

import taskBowerIndex from './gulp-tasks/bower-index';
import taskBowerKarma from './gulp-tasks/bower-karma';
import taskBowerSass from './gulp-tasks/bower-sass';

import taskUsemin from './gulp-tasks/usemin';

//Test tasks
import taskTestKarma from './gulp-tasks/test-karma';
import taskTestE2E from './gulp-tasks/test-e2e';
import taskTestMocha from './gulp-tasks/test-mocha';

import taskCopyDist from './gulp-tasks/copy-dist';
import taskCopyAllDist from './gulp-tasks/copyAll-dist';
import taskDeployPrepare from './gulp-tasks/deploy-prepare';
import taskBuildAppDist from './gulp-tasks/buildApp-dist';
import taskE2EFixtures from './gulp-tasks/e2eFixtures';

import taskWatch from './gulp-tasks/watch';
import taskStart from './gulp-tasks/start';


gulp.task('clean', taskClean);
gulp.task('clean:dist', taskCleanDist);
gulp.task('templateCache', taskTemplateCache);
gulp.task('lint', taskLint);
gulp.task('sass', taskSass);
gulp.task('bower:index', taskBowerIndex);
gulp.task('bower:karma', taskBowerKarma);
gulp.task('bower:sass', taskBowerSass);
gulp.task('webdriver_standalone', webdriver_standalone);
gulp.task('usemin', taskUsemin);


gulp.task('copy:dist', taskCopyDist);

gulp.task('copyAll:dist', taskCopyAllDist);

gulp.task('deploy:prepare', taskDeployPrepare);

gulp.task('buildApp:dist', taskBuildAppDist);


gulp.task('e2eFixtures', taskE2EFixtures);

gulp.task('test:karma', taskTestKarma);
gulp.task('test:e2e', taskTestE2E);

// Backend unit test
gulp.task('test:mocha', taskTestMocha);

gulp.task('watch', taskWatch);


gulp.task('start', taskStart);


gulp.task('default', ['clean', 'sass', 'bower:index', 'templateCache', 'watch', 'start']);

gulp.task('test:unit', function(done) {
  runSequence(
    'templateCache',
    'bower:index',
    'bower:karma',
    'test:karma',
    done
  );
});


gulp.task('test:e2e', ['test:e2e']);
gulp.task('test:backend', ['test:mocha']);
gulp.task('test', ['test:unit'/*, 'test:backend'*/]);
gulp.task('build:dist', ['usemin', 'copy:dist'])

