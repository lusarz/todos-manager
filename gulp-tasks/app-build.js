import runSequence from 'run-sequence';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, done => {
    runSequence(
      'build:frontend',
      'app-prepare-dist',
      done
    );
  });
};
