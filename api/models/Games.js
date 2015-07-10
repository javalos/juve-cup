/**
* Games.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    homeScore: {
      type: "integer",
      defaultsTo: 0
    },
    awayScore: {
      type: "integer",
      defaultsTo: 0
    },
    homeTeam : {
      type: "integer"
    },
    awayTeam : {
      type: "integer"
    },
    league : {
      model: "Leagues"
    }
  }
};

