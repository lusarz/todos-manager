import { Server as KarmaServer } from 'karma';
import runSequence from 'run-sequence';
import { stream as wiredep } from 'wiredep';

module.exports = (gulp, taskName) => {
  gulp.task('frontend-bower-karma', () => {
    gulp.src('frontend/test/karma.conf.js')
      .pipe(wiredep({
        devDependencies: true,
        src: 'frontend/test/karma.conf.js'
      }))
      .pipe(gulp.dest('frontend/test'));
  });

  gulp.task('frontend-test-karma', done => {
    new KarmaServer({
      configFile: __dirname + '/../frontend/test/karma.conf.js',
      singleRun: true
    }, done).start();
  });

  gulp.task(taskName, done => {
    runSequence(
      'frontend-cache-templates',
      'frontend-bower-index',
      'frontend-bower-karma',
      'frontend-test-karma',
      done
    );
  })
};
