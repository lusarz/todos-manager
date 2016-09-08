'use strict';

const passport = require('passport');
const authenticationController = require('../controllers/AuthenticationController');
const profileController = require('../controllers/ProfileController');
const userController = require('../controllers/UserController');

module.exports = function(router) {
  router.route('/api/user/register')
    .post(authenticationController.register);

  router.route('/api/user/login')
    .post(authenticationController.login);

  router.route('/api/user/available')
    .post(userController.available);

  router
    .get('/api/user/me', passport.authenticate('bearer', {session: false}), profileController.me);

};
