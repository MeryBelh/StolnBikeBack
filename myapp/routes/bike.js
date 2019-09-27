'use strict';
var express = require('express');
var router = express.Router();
module.exports = function(app) {
  var bike = require('../controller/appController.js');


  // bike Routes
  app.route('/bikes')
    .get(bike.list_all_bikes)
    .post(bike.createBike);
};
