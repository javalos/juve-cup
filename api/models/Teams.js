/**
* Teams.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // Dino Zoff... He played 332 consecutive games.
    name : {
      type: "string",
      required: true,
      unique: true
    },
    country : {
      type: "string",
      required: true
    },
    player : {
      type: "string",
      required: true
    }
    // Juventus is based on Turin, Italy.

    // Add `league` property here to let Juventus join the Calcio. Look for associations.
  }
};