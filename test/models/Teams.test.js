var assert = require('chai').assert;

describe('Teams', function() {
  it ('should not be empty', function(done) {

    Teams.find()
      .then(function(teams) {
        teams.length.should.not.be.eql(0);

        done();
      })
      .catch(done);
  });

  it ('should has a name', function(done) {

    Teams.create({name: "Juventus"})
      .then(function(teams) {
        assert.isDefined(teams.name);

        done();
      })
      .catch(done);
  });

  it ('should has a country', function(done) {

    Teams.create({country: "Italy"})
      .then(function(teams) {
        assert.isDefined(teams.country);

        done();
      })
      .catch(done);
  });

  it ('should has a player', function(done) {

    Teams.create({player: "Avalos"})
      .then(function(teams) {
        assert.isDefined(teams.player);

        done();
      })
      .catch(done);
  });
});