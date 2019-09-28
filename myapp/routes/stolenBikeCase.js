'use strict';

module.exports = function(app) {
  var stolenBikeCases = require('../controller/appController.js');

  // todoList Routes
  app.route('/stolenbike/cases')
    .get(stolenBikeCases.getNonAffectedBikes)
    .post(stolenBikeCases.createStolenBikeCase);
   
   app.route('/stolenbike/policecase/:policeId')
    .get(stolenBikeCases.getCasesBypoliceId)
    };