import mongodbFixtures from 'pow-mongodb-fixtures';
import crypto from 'crypto';

module.exports = (gulp, taskName) => {
  gulp.task(taskName, () => {
    const fixtures = mongodbFixtures.connect('todosManager-test', {
      host: 'localhost',
      port: 27017
    });

    fixtures.addModifier(function(collectionName, item, cb) {
      if (collectionName === 'users') {
        item.salt = crypto.randomBytes(16).toString('base64');
        item.password = crypto.pbkdf2Sync(item.password, new Buffer(item.salt, 'base64'), 10000, 64).toString('base64');
      }
      cb(null, item);
    });

    fixtures.clearAllAndLoad(__dirname + '/backend/test/fixtures', () => {
      done();
      process.exit();
    });
  });
};
