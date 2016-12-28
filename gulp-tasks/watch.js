import gulp from 'gulp';

export default () => {
  gulp.watch('frontend/app/styles/**/*.scss', ['sass']);
  gulp.watch('frontend/app/views/**/*.html', ['templateCache']);
};
