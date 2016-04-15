(function () {
  'use strict';


  var TodoCategory = require('../models/todoCategory.model');


  function findList(filters, user) {
    filters = filters || {};
    filters.user = user;
    return TodoCategory.find(filters);
  }

  function findById(todoCategoryId) {
    return TodoCategory.findById(todoCategoryId);
  }

  function create(todoCategory) {
    var newTodo = new TodoCategory(todoCategory);
    return newTodo.save();
  }

  function update(todoCategory, id) {
    delete todoCategory._id;
    return TodoCategory.findOneAndUpdate({_id: id}, todoCategory, {upsert: true});
  }

  function remove(id) {
    return TodoCategory.findByIdAndRemove(id, {});
  }

  module.exports = {
    findList: findList,
    findById: findById,
    create: create,
    update: update,
    remove: remove
  };

})
();