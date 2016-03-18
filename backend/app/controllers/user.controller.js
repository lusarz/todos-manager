(function () {
  'use strict';

  var userService = require('../services/user.service');

  module.exports = {
    available: available
  };


  function available(req, res) {
    var email = req.body.email;

    userService.findByEmail(email).then(function (email) {
      res.send({available: false});
    }, function (err) {
      res.send({available: true});
      //res.status(400).send(err);
    });
  }

})();