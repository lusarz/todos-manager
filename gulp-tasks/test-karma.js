import { Server as KarmaServer } from 'karma';

export default module.exports = done => {
  new KarmaServer({
    configFile: __dirname + '/frontend/test/karma.conf.js',
    singleRun: true
  }, done).start();
};
