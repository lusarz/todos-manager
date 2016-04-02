(function () {
  'use strict';

  var server = require('../../../server.js');
  var request = require('supertest').agent(server.app.listen());
  var expect = require('chai').expect;

  var dataProvider = require('../credentialsHelper');

  var User = require('../../app/models/user.model');
  var Todo = require('../../app/models/todo.model');

  var token, token2;


  describe('Todo endpoint', function () {
    before(function () {
      User.collection.drop();
      Todo.collection.drop();
    });

    before(function (done) {
      request.post('/api/user/register').send(dataProvider.validRegistrationData)
        .end(function (err, res) {
          token = res.body.token;
          done();
        });
    });

    before(function (done) {
      request.post('/api/user/register').send(dataProvider.validRegistrationData2)
        .end(function (err, res) {
          token2 = res.body.token;
          done();
        });
    });


    describe('When user is not authenticated', function () {
      it('should return 401', function (done) {
        request.get('/api/todos')
          .expect(401)
          .end(function (err) {
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

      it('should return 401', function (done) {
        var todo = dataProvider.validTodos[0];
        request.post('/api/todos').send(todo)
          .expect(401)
          .end(function (err) {
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });
    });

    describe('When user is authenticated', function () {

      beforeEach(function () {
        Todo.collection.drop();
      });

      it('should return 200', function (done) {
        var todo = dataProvider.validTodos[0];
        request.post('/api/todos')
          .set('Authorization', 'Bearer ' + token)
          .send(todo)
          .expect(200)
          .end(function (err) {
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });
    });

    describe('When user is records owner', function () {
      before(function (done) {
        Todo.collection.drop();

        var count = 5;
        for (var i = 0; i < 5; i++) {
          var todo = dataProvider.validTodos[i];

          //User 1 is owner of 0, 1, 2
          //User 2 is owner of 3, 4
          var userToken = i < 3 ? token : token2;
          request.post('/api/todos')
            .set('Authorization', 'Bearer ' + userToken)
            .send(todo)
            .expect(200)
            .end(end);
        }

        function end() {
          count--;
          if (!count) {
            done();
          }
        }
      });

      it('should see only his records on list', function (done) {
        request.get('/api/todos')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .end(function (err, res) {
            expect(res.body).to.have.length(3);
            if (err) {
              done(err);
            } else {
              done();
            }
          });
      });

      it('should see only his records on list', function (done) {
        request.get('/api/todos')
          .set('Authorization', 'Bearer ' + token2)
          .expect(200)
          .end(function (err, res) {
            expect(res.body).to.have.length(2);
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