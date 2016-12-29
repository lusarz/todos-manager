import runSequence from 'run-sequence';

export default module.exports = done => {
  runSequence(
    'frontend-clean',
    'frontend-clean-dist',
    'frontend-sass',
    'frontend-bower-index',
    'frontend-cache-templates',
    'frontend-prepare-dist',
    done
  );
};
