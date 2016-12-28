import runSequence from 'run-sequence';

export default module.exports = done => {
  runSequence(
    'frontend-clean',
    'frontend-sass',
    'frontend-bower-index',
    'frontend-cache-templates',
    'frontend-watch',
    'app-start-development-server',
    done
  );
};
