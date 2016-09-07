'use strict';

const server = require('../../../server.js');
const request = require('supertest').agent(server.app.listen());
const expect = require('chai').expect;

const fixturesLoader = require('../fixturesLoader');
const userHelper = require('../data/user.dataProvider');
const todosHelper = require('../data/todo.dataProvider');


describe('Todo endpoint', function() {
  beforeEach(function(done) {
    fixturesLoader.clearAllAndLoad(done);
  });


  describe('When user is not authenticated', function() {
    it('should return 401', function(done) {
      request.get('/api/todos')
        .expect(401, done);
    });

    it('should return 401', function(done) {
      request.post('/api/todos').send({})
        .expect(401, done);
    });
  });

  describe('When user is authenticated', function() {
    var user = userHelper.getExistingUser();
    var token;

    beforeEach(function(done) {
      request.post('/api/user/login').send(userHelper.getExistingUserLoginData())
        .end(function(err, res) {
          console.log(res);
          token = res.body.token;
          console.log('Bearer ' + token);
          done();
        });
    });

    it('should return list of his todos', function(done) {
      request.get('/api/todos')
        .set('Authorization', 'Bearer ' + token)
        .expect(200)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body).to.have.length(todosHelper.getExistingTodosByUserId(user._id).length);
          done();

        });
    });

    it('should return record by id', function(done) {
      var todo = todosHelper.getExistingTodosByUserId(user._id)[0];

      request.get('/api/todos/' + todo._id)
        .set('Authorization', 'Bearer ' + token)
        .expect(200)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          expect(res.body).to.have.property('_id', todo._id);
          done();

        });
    });

    describe('after remove record', function() {
      var todo = todosHelper.getExistingTodosByUserId(user._id)[0];

      beforeEach(function(done) {
        request.del('/api/todos/' + todo._id)
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .end(function(err, res) {
            console.log(res.body);
            if (err) {
              return done(err);
            }
            done();
          });
      });

      it('removed record should not be enable', function(done) {
        request.get('/api/todos/' + todo._id)
          .set('Authorization', 'Bearer ' + token)
          .expect(404)
          .end(function(err, res) {
            console.log(res.body);
            if (err) {
              return done(err);
            }
            done();
          });
      });

      it('removed record should not be returned on list', function(done) {
        request.get('/api/todos')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }
            expect(res.body).to.have.length(todosHelper.getExistingTodosByUserId(user._id).length - 1);
            done();

          });
      });


    });
  });
});