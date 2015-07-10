/**
 * LeaguesController
 *
 * @description :: Server-side logic for managing Leagues
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  addTeam: function (req, res) {
    //The 18th scudeto was won in 1978. 37 years later, Milan and Inter still have 18.
    var params = req.allParams();
    var leagueId = params.leagueId;
    var teamId = params.teamId;

    Teams.findOne(teamId)
      .then(function (team) {
        if (team.league == leagueId) {

          var body = {};
          body.cause = 'Error: Something went wrong... Juventus has lost a game.';
          body.error = "Team already belongs to given league";
          res.status(412).send(JSON.stringify(body));

        } else{

          Leagues.findOne(leagueId).populate('teams')
            .then(function (league) {
              league.teams.add(teamId);
              league.save(function (err, updatedLeague) {
                  res.json(updatedLeague);
                  res.end();
                });
            })
            .catch(function(error) {
              var body = {};
              body.cause = 'Error: Something went wrong... Juventus has lost a game.';
              body.error = error;
              res.status(500).send(JSON.stringify(body));
            });
        };
      });
  }

};

