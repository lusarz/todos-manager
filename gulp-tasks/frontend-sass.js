import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';

export default module.exports = () => {
  return gulp.src('frontend/app/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('frontend/app/styles'));
};
