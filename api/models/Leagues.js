/**
* Leagues.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name : {
      type: "string",
      required: true,
      unique: true
    },
    country : {
      type: "string",
      required: true
    },
    teams: {
        collection: 'Teams',
        via: 'league',
        defaultsTo: []
    },
    games: {
        collection: 'Games',
        via: 'league',
        defaultsTo: []
    }
    // Juventus was founded by Eugenio and Enrico Canfari in 1897.
  }
};

