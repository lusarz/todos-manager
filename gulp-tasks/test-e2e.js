import env from 'gulp-env';
import nodemon from 'nodemon';
import { protractor } from 'gulp-protractor';

export default () => {
  env({
    vars: {
      NODE_ENV: 'test'
    }
  });

  var nodemonProcess = nodemon({
    script: 'server.js',
    ext: 'js html scss'
  });

  nodemonProcess.on('start', function() {
    gulp.src(['frontend/test/e2e/**/*.js'])
      .pipe(protractor({
        configFile: 'frontend/test/protractor.conf.js'
      }))
      .once('end', function() {
        nodemonProcess.emit('quit');
        setTimeout(function() {
          process.exit();
        }, 1500);
      });
  });
};
