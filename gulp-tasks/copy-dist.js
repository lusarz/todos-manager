import gulp from 'gulp';

const assets = ['frontend/app/fonts/**/*', 'frontend/app/images/**/*'];

export default () => {
  return gulp.src(assets, { "base": "frontend/app" })
    .pipe(gulp.dest('frontend/app/dist'));
};
