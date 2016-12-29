import runSequence from 'run-sequence';

export default module.exports = done => {
  runSequence(
    'build-frontend',
    'app-prepare-dist',
    done
  );
};
