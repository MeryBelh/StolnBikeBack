'use strict';
module.exports = function(app) {
  var bike = require('../controller/appController.js');

  // bike Routes
  app.route('/bikes')
    .post(bike.createBike);
};
