import jshint from 'gulp-jshint';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    var assets = [
      'frontend/app/scripts/**/*.js',
      'frontend/test/**/*.js',
      'backend/app/**/*.js',
      'backend/test/**/*.js',
      'server.js',
      'config/**/*.js'
    ];


    return gulp.src(assets)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
  });
};
