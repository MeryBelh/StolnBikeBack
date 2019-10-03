'use strict';

/**
 * bike controller
 */
var Bike = require('../model/bikeModel.js');


exports.createBike = function(req, res) {
  var new_bike = new Bike(req.body);
  //handles null error 
   if(!new_bike.model || !new_bike.frameNumber){

            res.status(400).send({ error:true, message: 'Please provide frameNumber/model' });
        }
else{
  Bike.createBike(new_bike, function(err, bike) {   
    if (err)
      res.send(err);
    res.json(bike);
  });
}
};


exports.list_all_bikes = function(req, res) {
  Bike.getAllbikes(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

/**
 * police officer
 */
var PoliceOfficer = require('../model/policeOfficerModel.js');


exports.authenticate = function(req, res) {

    var policeOfficerToAuth = new PoliceOfficer(req.body);

    //handles null error 
     if(!policeOfficerToAuth.login || !policeOfficerToAuth.passwd){
              res.status(400).send({ error:true, message: 'Please provide userName/passeword' });
          }
  else{
    PoliceOfficer.authenticate(policeOfficerToAuth, function(err, police) {   
      if (err)
        res.send(err);
      res.json(police);
    });
  }
  };
  
  
  /**
 * police officer
 */
var StolenBikeCases = require('../model/stolenbikeCaseModel');


exports.createStolenBikeCase = function(req, res) {
  //console.log(req);
  console.log(req.body);
      var new_case = {bikeID : req.body.bikeId,
        policeID : req.body.policeId,
        resolved : 0};
  console.log(new_case);
  //handles null error 
   if(!new_case.policeID || !new_case.bikeID){
            res.status(400).send({ error:true, message: 'Please provide values' });
        }
else{ 
  StolenBikeCases.createStolenBikeCase(new_case, function(err, stolencase) {
    
    if (err)
      res.send(err);
    res.json(stolencase);
  });
}
};

exports.getCasesBypoliceId = function(req, res) {

  StolenBikeCases.getCasesBypoliceId(req.params.policeId, function(err, stolencases) {
    if (err)
      res.send(err);
    res.json(stolencases);
  });
};


exports.getNonAffectedBikes = function(req, res) {
  StolenBikeCases.getNonAffectedBikes(function(err, cases) {

    if (err)
      res.send(err);
      console.log('res', cases);
    res.send(cases);
  });
};
  

exports.getAllCases = function(req, res) {
  StolenBikeCases.getAllCases(function(err, cases) {

    if (err)
      res.send(err);
      console.log('res', cases);
    res.send(cases);
  });
};
  

exports.solveCase = function(req, res) {
  console.log(req.body);
  StolenBikeCases.solveCase(req.body.policeId, req.body.bikeId, function(err, stolencase) {
    if (err)
      res.send(err);
    res.json(stolencase);
  });
};