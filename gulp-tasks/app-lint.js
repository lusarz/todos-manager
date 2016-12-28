import defaultAssets from '../config/assets/default';
import jshint from 'gulp-jshint'
import gulp from 'gulp'
import _ from 'lodash';

export default module.exports = () => {

  var assets = _.union(
    defaultAssets.backend.js,
    defaultAssets.backendTest.js,
    defaultAssets.frontend.js,
    defaultAssets.frontendTest.js,
    defaultAssets.config.js,
    defaultAssets.common.js
  );

  return gulp.src(assets)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
};
