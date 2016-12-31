import { Server as KarmaServer } from 'karma';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, done => {
    new KarmaServer({
      configFile: __dirname + '/frontend/test/karma.conf.js',
      singleRun: true
    }, done).start();
  });
};
