(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  /**
   * Todo Schema
   */
  var TodoSchema = new Schema({
    name: {
      type: String,
      default: '',
      trim: true,
      required: 'Name cannot be blank'
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    dueDate: {
      type: Date
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: 'User is required'
    },
    updated: {
      type: Date
    },
    created: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('Todo', TodoSchema);
})();