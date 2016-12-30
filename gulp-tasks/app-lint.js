import jshint from 'gulp-jshint'
import gulp from 'gulp'

export default module.exports = () => {


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
};
