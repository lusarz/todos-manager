import runSequence from 'run-sequence';

export default module.exports = done => {
  runSequence(
    'frontend-build',
    'app-prepare-dist',
    done
  );
};
