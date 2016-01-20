(function () {
  'use strict';

  module.exports = {
    me: me
  };


  function me(req, res) {
    if (req.user) {
      res.send(req.user);
    } else {
      res.status(401).send(null);
    }
  }


})();