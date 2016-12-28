import gulp from 'gulp';

export default () => {
  gulp.src('frontend/app/dist/**/*')
    .pipe(gulp.dest('dist/frontend'));

  gulp.src('backend/app/**/*', { base: 'backend' })
    .pipe(gulp.dest('dist/backend'));

  gulp.src('config/**/*')
    .pipe(gulp.dest('dist/config'));

  gulp.src('server.js')
    .pipe(gulp.dest('dist'));

  gulp.src('package.json')
    .pipe(gulp.dest('dist'));
};
