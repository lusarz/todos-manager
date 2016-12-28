import gulp from 'gulp';
import env from 'gulp-env';
import mocha from 'gulp-mocha';

export default done => {
  env({
    vars: {
      NODE_ENV: 'test'
    }
  });
  return gulp.src('backend/test/**/*.spec.js')
    .pipe(mocha({
        bail: false
      }).on('error', function(error) {
        done(error);
        process.exit(1);
      }).on('end', function() {
        done();
        process.exit();
      })
    );
};
