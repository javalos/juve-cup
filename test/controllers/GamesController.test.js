var request = require('supertest');
var assert = require('chai').assert;

describe('GamesController', function() {
  describe('index', function() {
    it('should return success', function (done) {
      request(sails.hooks.http.app)
        .get('/games')
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
    it('should return forbidden for mortals', function (done) {
      request(sails.hooks.http.app)
        .post('/games')
        .send({
          "id": 1,
          "league": "1",
          "homeScore": 2,
          "awayScore": 0,
          "homeTeam": 1,
          "awayTeam": 2
        })
        .expect(403)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          else {
            done();
          }
        });
    });

    it('should return success for authenticated user', function (done) {
      request(sails.hooks.http.app)
        .post('/games')
        .set('JUVENTUS_AUTH_TICKET', '4Ju33')
        .send({
          "id": 1,
          "league": "1",
          "homeScore": 2,
          "awayScore": 0,
          "homeTeam": 1,
          "awayTeam": 2
        })
        .expect(201)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          else {
            done();
          }
        });
    });
  });

});