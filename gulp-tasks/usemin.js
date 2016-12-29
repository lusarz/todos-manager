import gulp from 'gulp';
import usemin from'gulp-usemin';
import rev from 'gulp-rev';

export default module.exports = () => {
  return gulp.src('frontend/app/*.html')
    .pipe(usemin({
      cssMain: [rev()],
      cssVendor: [rev()],
      jsVendor: [rev()],
      jsMain: [rev()]
    }))
    .pipe(gulp.dest('frontend/app/dist'));
};
