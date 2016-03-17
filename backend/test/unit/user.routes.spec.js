(function () {
  'use strict';

  var server = require('../../../server.js');
  var request = require('supertest').agent(server.app.listen());
  var expect = require('chai').expect;

  var dataProvider = require('../credentialsHelper');


  var User = require('../../app/models/user.model');
  var Todo = require('../../app/models/todo.model');

  describe('User endpoint endpoint', function () {
    before(function () {
      User.collection.drop();
      Todo.collection.drop();
    });

    it('should return 401 when user is not authenticated', function (done) {
      request.get('/api/user/me')
        .expect(401)
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

      it('should return token', function (done) {
        request.post('/api/user/register').send(dataProvider.validRegistrationData)
          .expect(200)
          .end(function (err, res) {
            expect(res.body).to.have.property('token');
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

      it('should return error when user is actually registered', function (done) {
        request.post('/api/user/register').send(dataProvider.validRegistrationData)
          .expect(400)
          .end(function (err, res) {
            console.log(res.body);
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

      it('should login after registration', function (done) {
        request.post('/api/user/login').send(dataProvider.validCredentials)
          .expect(200)
          .end(function (err, res) {
            expect(res.body).to.have.property('token');
            if (err)
              done(err);
            else
              done();
          });
      });

    });
  });

})();