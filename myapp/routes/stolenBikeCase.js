'use strict';

module.exports = function(app) {
  var stolenBikeCases = require('../controller/appController.js');

  // todoList Routes
  app.route('/stolenbike/solvecase')
  .put(stolenBikeCases.solveCase)


  app.route('/stolenbike/unresolvedcases')
    .get(stolenBikeCases.getNonAffectedBikes)
    .post(stolenBikeCases.createStolenBikeCase);
   
   app.route('/stolenbike/policecase/:policeId')
    .get(stolenBikeCases.getCasesBypoliceId)

    app.route('/stolenbike/allcases')
    .get(stolenBikeCases.getAllCases)
    };

    