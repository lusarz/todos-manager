'use strict';

import gulp from 'gulp';
import { webdriver_standalone } from 'gulp-protractor';

let getTask = taskName => {
  const url = `./gulp-tasks/${taskName}`;
  return require(url);
};

gulp.task('clean', getTask(('clean')));
gulp.task('clean:dist', getTask('clean-dist'));
gulp.task('templateCache', getTask('templateCache'));
gulp.task('lint', getTask('lint'));
gulp.task('sass', getTask('sass'));
gulp.task('bower:index', getTask('bower-index'));
gulp.task('bower:karma', getTask('bower-karma'));
gulp.task('bower:sass', getTask('bower-sass'));
gulp.task('webdriver_standalone', webdriver_standalone);
gulp.task('usemin', getTask('usemin'));


gulp.task('copy:dist', getTask('copy-dist'));

gulp.task('copyAll:dist', getTask('copyAll-dist'));

gulp.task('deploy:prepare', getTask('deploy-prepare'));

gulp.task('buildApp:dist', getTask('buildApp-dist'));


gulp.task('e2eFixtures', getTask('e2eFixtures'));

gulp.task('test:karma', getTask('test-karma'));
gulp.task('test:e2e', getTask('test-e2e'));

// Backend unit test
gulp.task('test:mocha', getTask('test-mocha'));

gulp.task('watch', getTask('watch'));


gulp.task('start', getTask('start'));


gulp.task('default', getTask('default'));

gulp.task('test:unit', getTask('test-unit'));


gulp.task('test', getTask('test-unit'));
gulp.task('build:dist', getTask('build-dist'));

