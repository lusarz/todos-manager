'use strict';

import gulp from 'gulp';
import { webdriver_standalone } from 'gulp-protractor';

const registerTask = (scriptName, taskName = scriptName) => {
  gulp.task(taskName, require(`./gulp-tasks/${scriptName}`));
};

registerTask('frontend-clean');
registerTask('frontend-clean-dist');
registerTask('frontend-sass');
registerTask('frontend-bower-index');
registerTask('frontend-cache-templates');
registerTask('frontend-prepare-dist');

registerTask('frontend-build', 'build:frontend');


/*gulp.task('clean', getTask(('clean')));
 gulp.task('clean:dist', getTask('clean-dist'));
 gulp.task('templateCache', getTask('templateCache'));
 gulp.task('lint', getTask('lint'));
 gulp.task('sass', getTask('sass'));
 gulp.task('bower:index', getTask('bower-index'));
 gulp.task('bower:karma', getTask('bower-karma'));
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
 gulp.task('build:dist', getTask('build-dist'));*/

