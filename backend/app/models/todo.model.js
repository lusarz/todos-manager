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
      ref: 'TodoCategory',
      required: 'required'
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
        dueDate: ret.dueDate
      };
      return retJson;
    }
  });

  module.exports = mongoose.model('Todo', TodoSchema);
})();