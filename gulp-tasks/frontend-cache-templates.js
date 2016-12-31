import templateCache from 'gulp-angular-templatecache'


module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    return gulp.src('frontend/app/views/**/*.html')
      .pipe(templateCache('templates.js', { module: 'templatescache', standalone: true }))
      .pipe(gulp.dest('frontend/app/scripts'));
  });
};
