(function () {
  'use strict';

  /**
   * Module dependencies.
   */
  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  /**
   * TodoCategory Schema
   */
  var TodoCategorySchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: 'required'
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    icon: {
      type: String,
      trim: true,
      required: 'required'
    },
    dueDate: {
      type: Date
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: 'required'
    },
    updated: {
      type: Date
    },
    created: {
      type: Date,
      default: Date.now
    }
  }, {collection: 'todoCategories'});

  TodoCategorySchema.set('toJSON', {
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

  module.exports = mongoose.model('TodoCategory', TodoCategorySchema);
})();