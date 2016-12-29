import gulp from 'gulp';
import { stream as wiredep } from 'wiredep';

export default module.exports = () => {
  gulp.src('frontend/test/karma.conf.js')
    .pipe(wiredep({
      devDependencies: true,
      src: 'frontend/test/karma.conf.js'
    }))
    .pipe(gulp.dest('frontend/test'));
};
