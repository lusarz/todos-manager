'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const validator = require('validator');

/**
 * A Validation function for local strategy properties
 */
const validateLocalStrategyProperty = property => {
  return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy email
 */
const validateLocalStrategyEmail = email => {
  return ((this.provider !== 'local' && !this.updated) || validator.isEmail(email));
};

/**
 * User Schema
 */
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Email is required',
    validate: [validateLocalStrategyEmail, 'Please fill a valid email address']
  },
  password: {
    type: String,
    default: ''
  },
  salt: {
    type: String
  },
  token: {
    type: String
  },
  profileImageURL: {
    type: String
  },
  roles: {
    type: [{
      type: String,
      enum: ['user', 'admin']
    }],
    default: ['user'],
    required: 'Please provide at least one role'
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  },
  /* For reset password */
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  }
});

/**
 * Hook a pre save method to hash the password
 */
UserSchema.pre('save', next => {
  var user = this;

  if (user.password && user.isModified('password')) {
    user.salt = crypto.randomBytes(16).toString('base64');
    user.password = user.hashPassword(user.password);
  }

  next();
});

/**
 * Hook a pre validate method to test the local password
 */
UserSchema.pre('validate', next => {
  if (this.password && this.isModified('password')) {
    if (this.password.length < 6) {
      this.invalidate('password', 'minlength');
    }
  }

  next();
});

/**
 * Create instance method for hashing a password
 */
UserSchema.methods.hashPassword = password => {
  if (this.salt && password) {
    return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
  } else {
    return password;
  }
};

/**
 * Create instance method for authenticating user
 */
UserSchema.methods.authenticate = password => {
  return this.password === this.hashPassword(password);
};

module.exports = mongoose.model('User', UserSchema);