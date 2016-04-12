(function () {
  'use strict';

  var server = require('../../../server.js');
  var request = require('supertest').agent(server.app.listen());
  var expect = require('chai').expect;
  var _ = require('lodash');

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
        .end(function (err) {
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    describe('Login method', function () {
      it('should return 400 when bad credentials sended', function (done) {
        var credentials = {email: 'test@onet.pl', password: 'abcdef'};
        request.post('/api/user/login').send(credentials)
          .expect(400)
          .end(function (err) {
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });
    });

    describe('Register method', function () {

      it('should return error when password is too short', function (done) {
        var dataWithShortPassword = _.extend({}, dataProvider.validRegistrationData, {password: 'xyz12'});
        request.post('/api/user/register').send(dataWithShortPassword)
          .expect(400)
          .end(function (err, res) {
            console.log(res.body);
            expect(res.body).to.have.deep.property('errors.password.code');
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

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

      describe('when is registered', function () {
        before(function (done) {
          User.collection.drop();
          request.post('/api/user/register').send(dataProvider.validRegistrationData)
            .expect(200)
            .end(function (err) {
              if (err) {
                done(err);
              } else {
                done();
              }
            });
        });

        it('should login', function (done) {
          request.post('/api/user/login').send(dataProvider.validCredentials)
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

        it('should return info that user already exists', function (done) {
          request.post('/api/user/register').send(dataProvider.validRegistrationData)
            .expect(409)
            .end(function (err) {
              if (err) {
                done(err);
              } else {
                done();
              }
            });
        });
      });
    });

    describe('Is available', function () {
      before(function (done) {
        User.collection.drop();

        request.post('/api/user/register').send(dataProvider.validRegistrationData)
          .expect(200)
          .end(function (err) {
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

      it('Should return false if user exist', function (done) {
        var data = {email: dataProvider.validRegistrationData.email};
        request.post('/api/user/available').send(data)
          .expect(200)
          .end(function (err, res) {
            expect(res.body).to.have.property('available');
            expect(res.body.available).to.equal(false);
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

      it('Should return true if user does not exists', function (done) {
        var data = {email: dataProvider.validRegistrationData2.email};
        request.post('/api/user/available').send(data)
          .expect(200)
          .end(function (err, res) {
            expect(res.body).to.have.property('available');
            expect(res.body.available).to.equal(true);
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });
    });
  });

})();