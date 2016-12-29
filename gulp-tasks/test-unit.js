import runSequence from 'run-sequence';

export default module.exports = done => {
  runSequence(
    'templateCache',
    'bower:index',
    'bower:karma',
    'test:karma',
    done
  );
};
