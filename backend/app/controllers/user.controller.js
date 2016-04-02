(function () {
  'use strict';

  var userService = require('../services/user.service');

  module.exports = {
    available: available
  };


  function available(req, res) {
    var email = req.body.email;

    userService.findByEmail(email).then(function () {
      res.send({available: false});
    }, function () {
      res.send({available: true});
      //res.status(400).send(err);
    });
  }

})();