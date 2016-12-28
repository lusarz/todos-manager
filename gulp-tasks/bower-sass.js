import gulp from 'gulp';
import { stream as wiredep } from 'wiredep';

export default () => {
  gulp.src('frontend/app/styles/**/*.scss')
    .pipe(wiredep({
      devDependencies: true,
      src: 'frontend/app/styles/**/*.scss'
    }))
    .pipe(gulp.dest('frontend/app/styles/'));
};
