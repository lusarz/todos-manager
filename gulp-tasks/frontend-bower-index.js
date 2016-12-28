import gulp from 'gulp';
import { stream as wiredep } from 'wiredep';

export default module.exports = () => {
  gulp.src('frontend/app/index.html')
    .pipe(wiredep({
      src: ['frontend/app/index.html'],
    }))
    .pipe(gulp.dest('frontend/app'));
};
