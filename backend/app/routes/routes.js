'use strict';

module.exports = function(router) {
  require('./user/routes')(router);
  require('./todo/routes')(router);
  require('./todoCategory/routes')(router);
};
