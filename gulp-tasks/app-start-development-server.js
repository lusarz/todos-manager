import nodemon from 'nodemon';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    return nodemon({
      script: 'server.js',
      ext: 'js html scss'
    });
  });
};
