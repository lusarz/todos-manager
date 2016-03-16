(function () {
  'use strict';
  /*var userManager = require('../business/user.manager');

   function authenticate(request, response, next) {
   next();
   }*/

  module.exports = function (router) {
    //router.use(authenticate);
    require('./user/routes')(router);
    require('./todo/routes')(router);
  };
})();
