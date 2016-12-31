import { stream as wiredep } from 'wiredep';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    gulp.src('frontend/test/karma.conf.js')
      .pipe(wiredep({
        devDependencies: true,
        src: 'frontend/test/karma.conf.js'
      }))
      .pipe(gulp.dest('frontend/test'));
  });
};
