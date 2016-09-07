'use strict';

const User = require('../models/user.model');


class UserDAO {
  static findList() {
    return User.find();
  }

  static findById(userId) {
    return User.findById(userId);
  }


  static findByEmail(email) {
    return User.findOne({email: email});
  }

  static findByUserName(userName) {
    return User.findOne({userName: userName});
  }

  static findByToken(token) {
    return User.findOne({token: token});
  }

  static create(user) {
    var newUser = new User(user);
    return newUser.save();
  }

  static update(user, id) {
    delete user._id;
    return User.findOneAndUpdate({_id: id}, user, {upsert: true});
  }

  static remove(id) {
    return User.findByIdAndRemove(id, {});
  }
}

module.exports = UserDAO;
