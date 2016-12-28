import gulp from 'gulp';
import tar from 'gulp-tar';
import gzip from 'gulp-gzip';


export default () => {
  return gulp.src('dist/**/*')
    .pipe(tar('dist.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('.'));
};
