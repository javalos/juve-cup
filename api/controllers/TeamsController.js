/**
 * TeamsController
 *
 * @description :: Server-side logic for managing teams
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function (req, res) {
    var params = req.allParams();
    Teams.create(params)
      .then(function (team) {
        // Juventus was the first team to win all international trophies organized by EUFA...
        res.json(team);
        res.end();
      })
      .catch(function(error) {
        var body = {};
        body.cause = 'Error: Something went wrong... Juventus has lost a game.';
        body.error = error;
        res.status(500).send(JSON.stringify(body));
      });
  }
};