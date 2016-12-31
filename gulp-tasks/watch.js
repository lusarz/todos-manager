module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    gulp.watch('frontend/app/styles/**/*.scss', ['sass']);
    gulp.watch('frontend/app/views/**/*.html', ['templateCache']);
  });
};
