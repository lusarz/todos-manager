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
    created: {
      type: Date,
      default: Date.now
    },
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
    }/*,
     user: {
     type: Schema.ObjectId,
     ref: 'User'
     }*/
  });

  mongoose.model('Todo', TodoSchema);

})();