(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    validator = require('validator');

  /**
   * A Validation function for local strategy properties
   */
  var validateLocalStrategyProperty = function (property) {
    return ((this.provider !== 'local' && !this.updated) || property.length);
  };

  /**
   * A Validation function for local strategy email
   */
  var validateLocalStrategyEmail = function (email) {
    return ((this.provider !== 'local' && !this.updated) || validator.isEmail(email));
  };

  /**
   * User Schema
   */
  var UserSchema = new Schema({
    firstName: {
      type: String,
      trim: true,
      default: '',
      validate: [validateLocalStrategyProperty, 'Please fill in your first name']
    },
    lastName: {
      type: String,
      trim: true,
      default: '',
      validate: [validateLocalStrategyProperty, 'Please fill in your last name']
    },
    displayName: {
      type: String,
      trim: true
    },
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
  UserSchema.pre('save', function (next) {
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
  UserSchema.pre('validate', function (next) {
    if (this.password && this.isModified('password')) {
      if (this.password.length < 6) {
        this.invalidate('password', 'Password is too short');
      }
    }

    next();
  });

  /**
   * Create instance method for hashing a password
   */
  UserSchema.methods.hashPassword = function (password) {
    if (this.salt && password) {
      return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
    } else {
      return password;
    }
  };

  /**
   * Create instance method for authenticating user
   */
  UserSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
  };

  module.exports = mongoose.model('User', UserSchema);
})();