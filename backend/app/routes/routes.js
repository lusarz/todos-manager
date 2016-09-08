'use strict';

module.exports = function(router) {
  require('./user/routes')(router);
  require('./TodoRoutes')(router);
  require('./todoCategory/routes')(router);
};
