(function () {
  'use strict';

  var config = require('../../config/config');
  var crypto = require('crypto');
  var _ = require('lodash');

  var id = require('pow-mongodb-fixtures').createObjectId;
  var fixtures = require('pow-mongodb-fixtures').connect(config.dbName);


  fixtures.addModifier(function (collectionName, item, cb) {
    var preparedItem = _.extend({}, item);
    preparedItem._id = id(item._id);

    if (collectionName === 'users') {
      preparedItem.salt = crypto.randomBytes(16).toString('base64');
      preparedItem.password = crypto.pbkdf2Sync(item.password, new Buffer(preparedItem.salt, 'base64'), 10000, 64).toString('base64');
    } else if (collectionName === 'todoCategories') {
      preparedItem.user = id(item.user);
    } else if (collectionName === 'todos') {
      preparedItem.user = id(item.user);
      preparedItem.category = id(item.category);
    }


    cb(null, preparedItem);
  });

  function clearAllAndLoad(cb) {
    fixtures.clearAllAndLoad('./fixtures', function (err) {
      if (err) {
        cb(err);
      } else {
        cb();
      }
    });
  }

  module.exports = {
    clearAllAndLoad: clearAllAndLoad
  };
})();