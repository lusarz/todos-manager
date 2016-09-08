'use strict';


class ProfileController {
  static me(req, res) {
    if (req.user) {
      res.send(req.user);
    } else {
      res.status(401).send(null);
    }
  }
}

module.exports = ProfileController;