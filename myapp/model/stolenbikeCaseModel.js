'user strict';
var sql = require('./db.js');

//StolenBikeCase object constructor
var StolenBikeCase = function(stolenBikeCase){
    this.policeID = stolenBikeCase.policeID;
    this.bikeID = stolenBikeCase.bikeID;
    this.resolved= stolenBikeCase.resolved;
};
StolenBikeCase.createStolenBikeCase = function (newCase, result) {    
        sql.query("INSERT INTO stolenBikeCases set ?", newCase, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
StolenBikeCase.getCasesBypoliceId = function (policeId, result) {
    console.log(policeId);
        sql.query(" SELECT * "+
        " FROM bikes b LEFT JOIN stolenBikeCases s ON b.id = s.bikeID "+
       " WHERE s.policeID = ? and s.resolved = 0 ", policeId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res);
                    result(null, res);
              
                }
            });   
};

StolenBikeCase.getNonAffectedBikes= function ( result) {
    sql.query(" Select * from bikes b "+
    " where not EXISTS  (SELECT 1 FROM stolenBikeCases s where s.bikeId = b.id )",  function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else{
                result(null, res);
            }
        });   
};

StolenBikeCase.getAllCases= function ( result) {
    sql.query(" Select * from bikes b "+
    " left JOIN stolenBikeCases s ON b.id = s.bikeID ",  function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

StolenBikeCase.solveCase = function(policeID, bikeID, result){

    sql.query("UPDATE stolenBikeCases SET resolved = 1 WHERE policeID = ? and bikeID = ? ", [policeID, bikeID], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };


module.exports= StolenBikeCase;