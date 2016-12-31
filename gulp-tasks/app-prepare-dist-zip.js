import tar from 'gulp-tar';
import gzip from 'gulp-gzip';


module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    return gulp.src('dist/**/*')
      .pipe(tar('dist.tar'))
      .pipe(gzip())
      .pipe(gulp.dest('.'));
  });
};
