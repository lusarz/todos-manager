(function () {
    'use strict';

    var passport = require('passport');
    var authenticationController = require('../../controllers/authentication.controller');
    var profileController = require('../../controllers/profile.controller');

    module.exports = function (router) {
        router.route('/api/user/register')
            .post(authenticationController.register);

        router.route('/api/user/login')
            .post(authenticationController.login);

        router
            .get('/api/user/me', passport.authenticate('bearer', {session: false}), profileController.me);

    };
})();