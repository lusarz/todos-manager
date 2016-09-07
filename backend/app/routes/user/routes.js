'use strict';

const passport = require('passport');
const authenticationController = require('../../controllers/authentication.controller.js');
const profileController = require('../../controllers/profile.controller.js');
const userController = require('../../controllers/user.controller.js');

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
