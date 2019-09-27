'use strict';


module.exports = function(app) {
  var policeOfficer = require('../controller/appController.js');

  // policeofficers Routes
  app.route('/policeofficers/authenticate')
    .post(policeOfficer.authenticate);
};
