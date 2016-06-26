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
    category: {
      type: Schema.ObjectId,
      ref: 'TodoCategory'
    },
    favourite: {
      type: Boolean,
      default: false
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: 'User is required'
    },
    doneAt: {
      type: Date
    },
    updated: {
      type: Date
    },
    created: {
      type: Date,
      default: Date.now
    }
  });

  TodoSchema.set('toJSON', {
    transform: function (doc, ret) {
      var retJson = {
        _id: ret._id,
        name: ret.name,
        description: ret.description,
        dueDate: ret.dueDate,
        doneAt: ret.doneAt,
        favourite: ret.favourite,
        category: ret.category
      };
      return retJson;
    }
  });

  module.exports = mongoose.model('Todo', TodoSchema);
})();