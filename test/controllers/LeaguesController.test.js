var request = require('supertest');
var assert = require('chai').assert;

describe('LeaguesController', function() {
  describe('index', function() {
    it('should return success', function (done) {
      request(sails.hooks.http.app)
        .get('/leagues')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });
  });

  describe('create', function() {
    it('should return success', function (done) {
      request(sails.hooks.http.app)
        .post('/leagues')
        .send({name: "Premier", country: "England"})
        .expect(201)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          else {
            league = res.body;
            assert.isDefined(league);
            assert.isDefined(league.id);
            done();
          }
        });
    });
  });

  describe('add team', function() {
    it('should add Juventus to the Calcio', function (done) {
      request(sails.hooks.http.app)
        .put('/leagues/1/addTeam/1')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          else {
            league = res.body;
            assert.isDefined(league);
            assert.isDefined(league.teams);
            league.teams.length.should.be.eq(1);
            done();
          }
        });
    });

    it('should fail when adding Juventus again', function (done) {
      request(sails.hooks.http.app)
        .put('/leagues/1/addTeam/1')
        .expect(412) //http://www.restapitutorial.com/httpstatuscodes.html FOR MORE INFORMATION
        .end(function (err, res) {
          if (err) {
            done(err);
          } else {
            done();
          }
        });
    });
  });

});