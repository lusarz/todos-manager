import del from 'del';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    return del.sync([
      'frontend/app/scripts/templates.js',
      'frontend/app/styles/*.css'
    ]);
  });
};

