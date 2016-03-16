(function () {
  'use strict';

  var server = require('../../../server.js');
  var request = require('supertest').agent(server.app.listen());

  var User = require('../../app/models/user.model');

  describe('User endpoint endpoint', function () {
    before(function () {
      User.collection.drop();
    });

    it('should return empty list', function (done) {
      request.get('/api/todos')
        .expect(401)
        .expect("[]")
        .end(function (err, res) {
          if (err)
            done(err);
          else
            done();
        });
    });

    it('should not add todo when user is not authenticated', function (done) {
      var todo = {};
      request.post('/api/todos').send(todo)
        .expect(401)
        .expect("[]")
        .end(function (err, res) {
          if (err)
            done(err);
          else
            done();
        });
    });

    describe('Login method', function () {
      it(' should return 400 when bad credentials sended', function (done) {
        var credentials = {email: 'test@onet.pl', password: 'abcdef'};
        request.post('/api/user/login').send(credentials)
          .expect(400)
          .end(function (err, res) {
            if (err)
              done(err);
            else
              done();
          });
      });
    });

    describe('Register method', function () {
      var validRegistrationData = {
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@gmail.com',
        password: 'thisIsPassword123!'
      };

      it(' should return 200', function (done) {
        request.post('/api/user/register').send(validRegistrationData)
          .expect(200)
          .end(function (err, res) {
            console.log(res);
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

      it(' should login after registration', function (done) {
        var credentials = {email: validRegistrationData.email, password: validRegistrationData.password};
        request.post('/api/user/login').send(credentials)
          .expect(200)
          .end(function (err, res) {
            if (err)
              done(err);
            else
              done();
          });
      });

    });
  });

})();