'use strict';

const TodoCategory = require('../models/TodoCategory');

class TodoCategoryDAO {
  static findList(filters, user) {
    filters = filters || {};
    filters.user = user;
    return TodoCategory.find(filters);
  }

  static findById(todoCategoryId) {
    return TodoCategory.findById(todoCategoryId);
  }

  static create(todoCategory) {
    var newTodo = new TodoCategory(todoCategory);
    return newTodo.save();
  }

  static update(todoCategory, id) {
    delete todoCategory._id;
    return TodoCategory.findOneAndUpdate({_id: id}, todoCategory, {upsert: true});
  }

  static remove(id) {
    return TodoCategory.findByIdAndRemove(id, {});
  }
}

module.exports = TodoCategoryDAO;