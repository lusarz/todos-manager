import gulp from 'gulp';

export default module.exports = () => {
  gulp.src('backend/app/**/*', { base: 'backend' })
    .pipe(gulp.dest('dist/backend'));

  gulp.src(['server.js', 'package.json', 'config.js'])
    .pipe(gulp.dest('dist'));
};
