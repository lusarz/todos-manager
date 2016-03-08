(function () {
    'use strict';

    function UserDAO($resource) {
        var api = $resource('/api/user/:a/:b/:c', null, {
            find: {method: 'GET'},
            authenticate: {method: 'POST', params: {a: 'auth'}},
            activeAccount: {method: 'GET'},
            passwordResetRequest: {
                method: 'POST',
                params: {a: 'password-reset-request'},
                skipDefaultInterceptors: [404]
            },
            passwordResetPerforme: {method: 'GET', params: {a: 'password-reset-performe'}},
            me: {method: 'GET', params: {a: 'me'}},
            meOrNull: {method: 'GET', params: {a: 'me', b: 'optional'}},
            register: {method: 'POST', params: {a: 'register'}},
            check: {method: 'POST', params: {a: 'check'}},
            setPassword: {method: 'POST', params: {a: 'password'}},
            remove: {method: 'POST', params: {a: 'remove'}}
        });

        return {
            find: function (filter) {
                return api.find(filter).$promise;
            },
            authenticate: function (emailOrNickName, password) {
                return api.authenticate({emailOrNickName: emailOrNickName, password: password}).$promise;
            },
            getMe: function () {
                return api.me().$promise;
            },
            getMeOrNull: function () {
                return api.meOrNull().$promise;
            },
            check: function (emailOrNickName) {
                return api.check({emailOrNickName: emailOrNickName}).$promise;
            },
            register: function (user) {
                return api.register(user).$promise;
            },
            activeAccount: function (token) {
                return api.activeAccount({a: 'active-account', b: token}).$promise;
            },
            passwordResetRequest: function (email) {
                return api.passwordResetRequest({email: email}).$promise;
            },
            setPassword: function (token, password) {
                return api.setPassword({token: token, password: password}).$promise;
            },
            remove: function (userId) {
                return api.remove({userId: userId}).$promise;
            }
        };
    }

    angular.module('app')
        .factory('UserDAO', UserDAO);

    UserDAO.$inject = ['$resource'];

})();