(function () {
    'use strict';

    module.exports = {
        frontend: {
            js: [
                'frontend/scripts/**/*.js'
            ]
        },
        backend: {
            js: [
                'backend/server.js',
                'backend/dao/*.js',
                'backend/models/*.js'
            ]
        },
        config: {
            js: [
                'config/**/*.js'
            ]
        }
    };

})();