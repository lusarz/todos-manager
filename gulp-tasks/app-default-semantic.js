import runSequence from 'run-sequence';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, done => {
    runSequence(
      'frontend-clean',
      'frontend-sass',
      'frontend-bower-index',
      'frontend-cache-templates',
      'frontend-watch',
      'app-start-development-server',
      done
    );
  });
};
