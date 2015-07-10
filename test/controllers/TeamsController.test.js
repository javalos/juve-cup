var request = require('supertest');
var assert = require('chai').assert;

describe('TeamsController', function() {
  describe('index', function() {
    it('should return success', function (done) {
      request(sails.hooks.http.app)
        .get('/teams')
        .expect(200)
        .end(function (err, res) {
          done();
        });
    });
  });

  describe('create', function() {
    it('should return success', function (done) {
      request(sails.hooks.http.app)
        .post('/teams')
        .send({name: "Juventus", country: "Italy", player: "Avalos"})
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          else {
            team = res.body;
            assert.isDefined(team);
            assert.isDefined(team.id);
            done();
          }
        });
    });
  });

});