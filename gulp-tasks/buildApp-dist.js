import runSequence from 'run-sequence';

export default module.exports = done => {
  runSequence(
    'clean',
    'sass',
    'bower:index',
    'templateCache',
    ['usemin', 'copy:dist'],
    'copyAll:dist',
    done
  );
};
