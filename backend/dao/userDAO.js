(function () {
  'use strict';


  var User = require('../models/user.model'),
    q = require('q');

  module.exports = {
    findList: findList,
    findById: findById,
    findByUserName: findByUserName,
    create: create,
    update: update,
    remove: remove
  };


  function findList(query) {
    var defer = q.defer();
    User.find(function (err, users) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(users);
      }
    });
    return defer.promise;
  }

  function findById(userId) {
    var defer = q.defer();
    User.findById(userId).exec(function (err, article) {
      if (err) {
        defer.reject(err);
      } else if (!article) {
        defer.reject({errCode: 'NOT_FOUND'});
      } else {
        defer.resolve(article);
      }
    });

    return defer.promise;
  }

  function findByUserName(userName) {
    var defer = q.defer();
    User.findOne({userName: userName}).exec(function (err, article) {
      if (err) {
        defer.reject(err);
      } else if (!article) {
        defer.reject({errCode: 'NOT_FOUND'});
      } else {
        defer.resolve(article);
      }
    });

    return defer.promise;
  }

  function create(user, callback) {
    var defer = q.defer();
    var newUser = new User(user);
    newUser.save(function (err, newUser) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(newUser);
      }
    });
    return defer.promise;
  }

  function update(user, id) {
    var defer = q.defer();
    delete user._id;
    User.findOneAndUpdate({_id: id}, user, {upsert: true}, function (err, updatedUser) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(updatedUser);
      }
    });
    return defer.promise;
  }

  function remove(id) {
    var defer = q.defer();

    User.findByIdAndRemove(id, {}, function (err) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve({});
      }
    });

    return defer.promise;
  }

})
();