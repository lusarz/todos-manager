import runSequence from 'run-sequence';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, done => {
    runSequence(
      'templateCache',
      'bower:index',
      'bower:karma',
      'test:karma',
      done
    );
  });
};
