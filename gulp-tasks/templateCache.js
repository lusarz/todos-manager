import gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache'


export default () => {
  return gulp.src('frontend/app/views/**/*.html')
    .pipe(templateCache('templates.js', { module: 'templatescache', standalone: true }))
    .pipe(gulp.dest('frontend/app/.tmp/scripts'));
};
