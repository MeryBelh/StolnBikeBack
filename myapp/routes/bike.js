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
/*
'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes
  app.route('/bikes')
    .get(todoList.list_all_bikes)
    .post(todoList.createBike);

    };*/
