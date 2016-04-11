(function () {
  'use strict';

  var userService = require('../services/user.service');

  module.exports = {
    available: available
  };


  function available(req, res) {
    var email = req.body.email;

    userService.findByEmail(email).then(function (user) {
      if(user){
        res.send({available: false});
      }else{
        res.send({available: true});
      }
    });
  }

})();