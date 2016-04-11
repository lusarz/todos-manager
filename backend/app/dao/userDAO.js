(function () {
  'use strict';


  var User = require('../models/user.model');


  function findList(/*query*/) {
    return User.find();
  }

  function findById(userId) {
    return User.findById(userId);
  }


  function findByEmail(email) {
    return User.findOne({email: email});
  }

  function findByUserName(userName) {
    return User.findOne({userName: userName});
  }

  function findByToken(token) {
    return User.findOne({token: token});
  }

  function create(user) {
    var newUser = new User(user);
    return newUser.save();
  }

  function update(user, id) {
    delete user._id;
    return User.findOneAndUpdate({_id: id}, user, {upsert: true});
  }

  function remove(id) {
    return User.findByIdAndRemove(id, {});
  }

  module.exports = {
    findList: findList,
    findById: findById,
    findByEmail: findByEmail,
    findByUserName: findByUserName,
    findByToken: findByToken,
    create: create,
    update: update,
    remove: remove
  };

})
();