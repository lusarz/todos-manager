import runSequence from 'run-sequence';

export default () => {
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
