import gulp from 'gulp';
import usemin from'gulp-usemin';
import rev from 'gulp-rev';

export default module.exports = () => {

  return Promise.all([
    new Promise(function(resolve, reject) {
      gulp.src('frontend/app/*.html')
        .pipe(usemin({
          cssMain: [rev()],
          cssVendor: [rev()],
          jsVendor: [rev()],
          jsMain: [rev()]
        }))
        .pipe(gulp.dest('frontend/dist'))
        .on('end', resolve)
    }),
    new Promise(function(resolve, reject) {
      gulp.src(['frontend/app/fonts/**/*', 'frontend/app/images/**/*'], { "base": "frontend/app" })
        .pipe(gulp.dest('frontend/dist'))
        .on('end', resolve)
    })
  ]);
};