(function () {
  'use strict';

  var server = require('../../../server.js');
  var request = require('supertest').agent(server.app.listen());
  var expect = require('chai').expect;

  var fixturesLoader = require('../fixturesLoader');
  var userHelper = require('../data/user.dataProvider');
  var todoCategoriesHelper = require('../data/todoCategory.dataProvider');


  describe('Todo categories endpoint', function () {
    beforeEach(function (done) {
      fixturesLoader.clearAllAndLoad(done);
    });


    describe('When user is not authenticated', function () {
      it('should return 401', function (done) {
        request.get('/api/todoCategories')
          .expect(401, done);
      });

      it('should return 401', function (done) {
        request.post('/api/todoCategories').send({})
          .expect(401, done);
      });
    });

    describe('When user is authenticated', function () {
      var user = userHelper.getExistingUser();
      var token;

      beforeEach(function (done) {
        request.post('/api/user/login').send(userHelper.getExistingUserLoginData())
          .end(function (err, res) {
            token = res.body.token;
            done();
          });
      });

      it('should return only his data', function (done) {
        request.get('/api/todoCategories')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            expect(res.body).to.have.length(todoCategoriesHelper.getExistingTodoCategoriesByUserId(user._id).length);
            done();

          });
      });

      it('should return record by id', function (done) {
        var todoCategory = todoCategoriesHelper.getExistingTodoCategoriesByUserId(user._id)[0];

        request.get('/api/todoCategories/' + todoCategory._id)
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            expect(res.body).to.have.property('_id', todoCategory._id);
            done();

          });
      });

      describe('after remove record', function () {
        var todoCategory = todoCategoriesHelper.getExistingTodoCategoriesByUserId(user._id)[0];

        beforeEach(function (done) {
          request.del('/api/todoCategories/' + todoCategory._id)
            .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .end(function (err, res) {
              console.log(res.body);
              if (err) {
                return done(err);
              }
              done();
            });
        });

        it('removed record should not be enable', function (done) {
          request.get('/api/todoCategories/' + todoCategory._id)
            .set('Authorization', 'Bearer ' + token)
            .expect(404)
            .end(function (err, res) {
              console.log(res.body);
              if (err) {
                return done(err);
              }
              done();
            });
        });

        it('removed record should not be returned on list', function (done) {
          request.get('/api/todoCategories')
            .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .end(function (err, res) {
              if (err) {
                return done(err);
              }
              expect(res.body).to.have.length(todoCategoriesHelper.getExistingTodoCategoriesByUserId(user._id).length - 1);
              done();
            });
        });


      });
    });
  });
})();