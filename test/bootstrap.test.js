var Sails = require('sails');
var Barrels = require('barrels');
var assert = require('chai').assert;
var should = require('chai').should();

// Global before hook
before(function (done) {
  Sails.lift({
    log: {
      level: 'error'
    },
    models: {
      connection: 'test',
      migrate: 'drop'
    }
  }, function(err) {
    if (err)
      return done(err);

    // Load fixtures
    var barrels = new Barrels();

    // Populate the DB
    barrels.populate(function(err) {
      done(err);
    });
  });
});

// Global after hook
after(function (done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  Sails.lower(done);
});