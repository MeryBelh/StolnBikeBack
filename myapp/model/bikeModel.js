'user strict';
var sql = require('./db.js');

//Bike object constructor
var Bike = function(bike){
    this.model = bike.model;
    this.color = bike.color;
    this.frameNumber = bike.frameNumber;
    this.city = bike.city;
    this.stolenDate = bike.stolenDate;
    this.description = bike.description;
};
Bike.createBike = function (newBike, result) {    
        sql.query("INSERT INTO bikes set ?", newBike, function (err, res) {
                
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

module.exports= Bike;