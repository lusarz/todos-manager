import runSequence from 'run-sequence';

export default module.exports = done => {
  runSequence(
    'frontend-clean',
    'app-clean',
    'frontend-sass',
    'frontend-bower-index',
    'frontend-cache-templates',
    'frontend-prepare-dist',
    done
  );
};
