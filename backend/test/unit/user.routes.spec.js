'use strict';

const server = require('../../../server.js');
const request = require('supertest').agent(server.app.listen());
const expect = require('chai').expect;

import fixturesLoader from '../fixturesLoader';
const userHelper = require('../data/user.dataProvider');


describe('User endpoint endpoint', function() {
  beforeEach(function(done) {
    fixturesLoader.clearAllAndLoad(done);
  });

  it('should return 401 when user is not authenticated', function(done) {
    request.get('/api/user/me')
      .expect(401, done);
  });

  describe('Login method', function() {
    it('should return 400 when bad credentials sended', function(done) {
      request.post('/api/user/login').send(userHelper.getNotExistingUserLoginData())
        .expect(400, done);
    });

    it('should return 200 when users exists', function(done) {
      request.post('/api/user/login').send(userHelper.getExistingUserLoginData())
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('token');
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

  });

  describe('Register method', function() {

    it('should return error when password is too short', function(done) {
      request.post('/api/user/register').send(userHelper.getTooShortPasswordRegistrationData())
        .expect(400)
        .end(function(err, res) {
          expect(res.body).to.have.deep.property('errors.password.code', 'minlength');
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    it('should return token', function(done) {
      request.post('/api/user/register').send(userHelper.getNotExistingUserRegistrationData())
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('token');
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    describe('when is registered', function() {

      it('should return info that user already exists', function(done) {
        request.post('/api/user/register').send(userHelper.getExistingUserRegistrationData())
          .expect(409, done);
      });
    });
  });

  describe('Is available', function() {

    it('Should return false if user exist', function(done) {
      request.post('/api/user/available').send(userHelper.getExistingUserLoginData())
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('available');
          expect(res.body.available).to.equal(false);
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });

    it('Should return true if user does not exists', function(done) {
      request.post('/api/user/available').send(userHelper.getNotExistingUserLoginData())
        .expect(200)
        .end(function(err, res) {
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
