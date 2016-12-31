import { stream as wiredep } from 'wiredep';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    gulp.src('frontend/app/index.html')
      .pipe(wiredep({
        src: ['frontend/app/index.html'],
      }))
      .pipe(gulp.dest('frontend/app'));
  });
};
