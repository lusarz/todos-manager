import del from 'del';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    return del.sync([
      'dist'
    ]);
  });
};
