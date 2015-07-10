var assert = require('chai').assert;

describe('Leagues', function() {
  it ('should not be empty', function(done) {

    Leagues.find()
      .then(function(teams) {
        teams.length.should.not.be.eql(0);

        done();
      })
      .catch(done);
  });

  it ('should has a name', function(done) {

    Leagues.create({name: "Liga MX", country: "Mexico"})
      .then(function(teams) {
        assert.isDefined(teams.name);

        done();
      })
      .catch(done);
  });

  it ('should has a country', function(done) {

    Leagues.create({name: "La Liga", country: "Spain"})
      .then(function(teams) {
        assert.isDefined(teams.country);

        done();
      })
      .catch(done);
  });
});