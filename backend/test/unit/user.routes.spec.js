(function () {
  'use strict';

  var server = require('../../../server.js');
  var request = require('supertest').agent(server.app.listen());

  var User = require('../../app/models/user.model')

  describe('User endpoint endpoint', function () {
    before(function () {
      User.collection.drop();
    });

    it('should return empty list', function (done) {
      request.get('/api/todos')
        .expect(200)
        .expect("[]")
        .end(function (err, res) {
          if (err)
            done(err);
          else
            done();
        });
    });

    it('should not add without authentication', function (done) {
      var todo = {};
      request.post('/api/todos').send(todo)
        .expect(400)
        .expect("[]")
        .end(function (err, res) {
          if (err)
            done(err);
          else
            done();
        });
    });
  });

})();