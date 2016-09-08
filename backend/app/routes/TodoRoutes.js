'use strict';

const passport = require('passport');
const TodoController = require('../controllers/TodoController');

let authenticate = () => {
  return passport.authenticate('bearer', {session: false})
};

module.exports = function(router) {
  router.route('/api/todos')
    .get(authenticate(), TodoController.findList)
    .post(authenticate(), TodoController.create);

  // Single article routes
  router.route('/api/todos/:id')
    .get(authenticate(), TodoController.findById)
    .put(authenticate(), TodoController.update)
    .delete(authenticate(), TodoController.remove);

  router.route('/api/todos/:id/mark_as_completed')
    .post(authenticate(), TodoController.markAsCompleted);
};
